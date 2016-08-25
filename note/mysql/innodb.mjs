参数：


[mysqld]
innodb_purge_threads=1 ## 单独开启purge线程，回收使用并分配的undo页
innodb_purge_batch_size ## 每次full purge回收Undo页的数量
innodb_buffer_pool_size ## 缓冲区大小
innodb_buffer_pool_instances  ## 缓存池实例个数
innodb_old_blocks_pct  ## midpoint位置，默认列表尾端的37%，跟LRU有关
innodb_old_blocks_time ## 页读取到mid位置后，多长时间被加入到LRU列表的热端
innodb_log_buffer_size ## 重做日志缓冲大小，默认8M
innodb_lru_scan_depth  ## 控制LRU列表中可用页的数量，默认是1024
innodb_max_dirty_pages_pct	## 当缓存中脏页数量占据75%时，强制进行Checkpoint，刷新一部分脏页到磁盘
innodb_io_capacity ## 合并插入缓冲时，合并数量是该值的5%，从缓冲区每次刷新该值的脏页
innodb_fast_shutdown ## 0：mysql关闭时完成所有的full purge，merge insert buffer
					 ## 1：刷新脏数据到磁盘
 					 ## 2：将日志到写入日志文件
/////////////////////////////////////////////////////////////////////////////////////////
概念：

重做日志保证事务持久性
/////////////////////////////////////////////////////////////////////////////////////////

版本：
mysql> show variables like 'innodb_version'\G;
Variable_name: innodb_version
        Value: 5.6.27
1 row in set (0.00 sec)

/////////////////////////////////////////////////////////////////////////////////////////

IO线程数：
mysql> show variables like 'innodb_%io_threads'\G;
*************************** 1. row ***************************
Variable_name: innodb_read_io_threads
        Value: 4
*************************** 2. row ***************************
Variable_name: innodb_write_io_threads
        Value: 4
2 rows in set (0.00 sec)

/////////////////////////////////////////////////////////////////////////////////////////

page cleaner thread ## 1.2x之后引入，负责脏页的刷新

/////////////////////////////////////////////////////////////////////////////////////////

select pool_id,pool_size,free_buffers,database_pages from innodb_buffer_pool_stats\G; ## 未成功

/////////////////////////////////////////////////////////////////////////////////////////

LRU（Latest Recent Used）最少使用算法管理缓存，常使用放前
优化，添加midpoint位置，默认是5/8，存放新读取的页

mysql> show variables like 'innodb_old_blocks_pct'\G;
*************************** 1. row ***************************
Variable_name: innodb_old_blocks_pct
        Value: 37
1 row in set (0.01 sec)

/////////////////////////////////////////////////////////////////////////////////////////






-----------------------------------------------------------------------------------------------------

Innodb存储引擎特点：
	1> 第一个完全支持ACID事务的MySQL存储引擎
	2> 行锁设计
	3> 支持MVCC
	4> 支持外键
	5> 提供一致性非锁定读

1.0.x 增加了compress和dynamic页格式
1.1.x 增加了LinuxAIO，多回滚段
1.2.x 增加了全文索引支持，在线索引添加

=====================================================

线程：
	Master Thread
		合并插入缓冲
		将日志缓冲刷新到磁盘

	IO Thread（Async IO）

	Purge Thread
		1> 回收undo页，离散读取undo页，可以进一步利用磁盘的随机读写性能

	Page Cleaner Thread
		1> 刷新脏页

=====================================================

Checkpoint(检查点)
	1> 缩短数据库的恢复时间
	2> 缓冲池不够用时，将脏页缓冲到磁盘
	3> 重做日志不可用时，刷新脏页
	4> 宕机之后无需重做全部日志，检查点之前的已经持久化到磁盘中了

缓冲池：通过内存的速度来弥补磁盘的速度，以Checkpoint机制回写数据到磁盘
	|- 1 -> 索引页
	|- 2 -> 数据页
	|- 3 -> undo页
	|- 4 -> 插入缓冲
	|- 5 -> 自适应hash索引
	|- 6 -> Innodb存储的锁信息
	|- 7 -> 数据字典信息
额外内存：
	|- 1 -> 重做日志缓冲
	|- 2 -> 额外内存池

缓冲池管理算法：LRU（Latest Recent Used）最近最少使用算法
缓冲池管理方式：页的方式（16KB）


LRU（Latest Recent Used）优化：加入midpoint，innodb_old_blocks_pct默认是尾端的37%
								innodb_old_blocks_pct=20 页被读取到mid位置后需要等待多长时间
								unzip_LRU压缩内存

Free列表		LRU列表 		Flush列表（Flush脏页之前redo日志先行）


-----------------------------------------------------------------------

Innodb关键特性
	|- 1 -> 插入缓冲：物化到磁盘。优化非唯一辅助索引的插入操作，实现方式是B+树，和内存中索引页一起确保非聚集索引的性能。
	|- 2 -> 两次写:刷新脏页时，首先将脏页数据复制到内存的2M空间中，然后顺序写入磁盘，如果刷新脏页失败就拿它恢复。
	|- 3 -> 自适应hash索引：系统判断是否开启AHI，当访问模式相同时从缓冲池中的B+树构造而来。
	|- 4 -> 异步IO（AIO）：多次发出IO请求，避免了中间因为等待IO完成所消耗的时间。
	|- 5 -> 刷新邻接页：刷新一个脏页时，会检测该页所在区的所有页，如果存在脏页将一并刷新。





索引的最大宽度：767 bytes

/////////////////////////////////////////////////////////////////////////////////////////


参数文件：指定数据存放位置，启动参数

	查找目录：/etc/my.cnf /etc/mysql/my.cnf /usr/etc/my.cnf ~/.my.cnf 

日志文件：
	1> 错误日志文件:
		a> 位置：show variables like 'log_error';
		
	2> 二进制日志文件:记录了对MySQL数据库执行的所有操作，不包括SELECT和SHOW。执行数据库更改操作的时间
		a> 作用：恢复，复制，审计

	3> 慢查询日志文件:定位垃圾SQL。
		a> 默认：show variables like 'long_query_time'; ##10s
		b> 是否开启：
		c> 存储表：mysql.slow_log

	4> 查询日志文件:
		a> 存储表：mysql.general_log

	5> DDL 记录DDL语句操作元数据的语句
	6> relay log 记录从master节点同步的数据
socket文件：当用Unix域套接字方式连接时需要的文件

pid文件：MySQL实例的进程ID文件

MySQL文件表结构文件：存放MySQL表结构定义的文件

存储引擎文件：存储与特定存储引擎相关的记录和索引的文件

	-> 表空间文件

	-> 重做日志文件（redo log file）:ib_logfile0和ib_logfile1，分组管理循环使用，确保事务和数据的完整性，定期刷新


/////////////////////////////////////////////////////////////////////////////////////////

表

索引组织表：表根据主键进行顺序存储
Innodb存储结构
Innodb行记录格式：
Innodb数据页结构：
Nameed File Formats机制：解决不同版本表的兼容性问题


分区表：
	水平分区（支持）：
	局部分区索引（是）：一个分区中即存放了数据又存放了索引
	垂直分区：
	全局分区索引：数据放在不同分区中，但是索引只有一份

	查看是否分区：show variables like '%partition%';

	MySQL支持的分区：分区列必须是唯一索引的一个组成部分
		range分区：
		create table t
		(
			id int
		)engine=inndb
		partition by range(id)
		(
			partition p0 values less than (10),
			partition p1 values less than (20)
		);

		list分区：分区列是离散的

		hash分区：将数据均匀的分布到预先定义好的容器中，指定列值或者表达式，之后数据库自己完成

		key分区：和hash分区相似，使用自定义函数进行分区

		columns分区：可以直接使用非整形进行分区

		子分区：range和list可以进行子分区

		1> range分区直接支持子分区，将其视为最小
		2> list分区存放null值时不需显示指定null值的位置





/////////////////////////////////////////////////////////////////////////////////////////


B+树索引：
	聚集索引
	辅助索引
	（区别：叶子节点是否存放的是一整行的数据）


	普通索引
	联合索引：（1,2）
	覆盖索引：索引中包含所有信息
	自己指定优化器使用什么索引hint
	Multi-Range Read：将辅助索引查处的数据缓存并排序，然后再查找聚集索引
	Index Condition Pushdown ：索引状态下推，将where语句下推到了存储引擎层，可以在查找时直接筛选不符合要求的记录
	自动hash索引：使用除法散列。拉链发解决hash冲突
	全文检索：


/////////////////////////////////////////////////////////////////////////////////////////

Innodb锁：
		提供一致性的非锁定读，行级锁。行级锁没有额外的开销

latch：轻量级锁，要求其锁定的时间必须非常短
	mutex（互斥量）
	rwlock（读写锁）

共享锁（S）：允许事务读一行
排它锁（X）：允许事务删除或者读取一行

意向锁：在锁定行时将页，表，库全部加锁，Innodb支持表级意向锁
	意向共享锁（IS）：事务想要获取一张表中某几行的共享锁
	意向排它锁（IX）：事务想要获取一张表中某几行的排它锁
	IX和S是不兼容的，还有X锁全部兼容，剩下的全部兼容


一致性的非锁定读：MVCC，支持read committed，repeatable read两种事务隔离级别

行锁的三种算法：
	Record Lock:单个行记录上锁
	Gap Lock：间隙锁，锁定一个范围，但是不包含记录本身
	Next-Key Lock：Record Lock + Gap Lock，锁定一个范围，并且包含记录本身


/////////////////////////////////////////////////////////////////////////////////////////
事务：
	扁平事务
	带有保存点的扁平事务
	链事务：下一个事务的开始时上一个事务的结束
	嵌套事务
	分布式事务


redo：重做日志，
	1> 保证事务的原子性和一致性
	2> 恢复提交事务修改的页操作
	3> 物理日志，记录页的物理操作
	4> 两部分组成，redo log buffer和redo log file
	5> 不需要随机读写
	6> 每次事务提交时都会调用fsync将缓存文件刷入redo file中，因此浪费了很多时间

undo：
	1> 保证事务的一致性
	2> 回滚行记录到某个特定版本
	3> 逻辑日志，根据每行记录进行操作
	4> 需要随机读写