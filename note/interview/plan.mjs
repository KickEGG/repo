java:
	gc:
		Java常见的GC算法
		新生代和老年代有什么区别
		Java是否有内存泄露和内存溢出
		JVM如何GC，新生代，老年代，持久代，都存储哪些东西
		GC用的引用可达性分析算法中，哪些对象可作为GC Roots对象
		JVM垃圾回收实现原理。垃圾回收的线程优先级。
		jvm 最大内存设置。设置的原理。结合垃圾回收讲讲。
		什么时候会发生jvm堆内存溢出

--------------------------------------
	jvm:
		JVM如何加载一个类的过程，双亲委派模型中有哪些方法
		JVM分为哪些区，每一个区干吗的？
		用什么工具调试程序？JConsole，用过吗
		关于JAVA内存模型，一个对象(两个属性，四个方法)实例化100次，现在内存中的存储状态几个对象，几个属性，几个方法。
		JVM内存heap and stack
		学会定位OOM问题
		java 中4种引用
		java怎么实现序列化
		Java内存模型
		GC的工作原理（回收策略）
		虚拟机的类加载过程是怎么样的，类加载器哪几种<3>
		编译器的经典优化技术：<9>
		java的5种线程状态<10>
--------------------------------------
	concurrent:
		如何创建多线程
		多线程如何进行信息交互
		多线程共用一个数据变量需要注意什么
		sleep和wait的区别
		线程池的实现原理
		ThreadLocal是什么
		方法锁和静态方法锁的区别
		什么样的变量存在线程安全问题
		HashMap和Concurrent HashMap区别， Concurrent HashMap 线程安全吗， Concurrent HashMap如何保证 线程安全
		HashMap和HashTable 区别，HashTable线程安全吗？
		线程同步与阻塞的关系？同步一定阻塞吗？阻塞一定同步吗？
		同步和异步有什么区别？
		concurrent包下面，都用过什么？
		线程同步，并发操作怎么控制
		简述下多线程？
		PV原语来实现生产者和消费者，java wait和notify内部机制
		考虑到并发情况下，消息队列消息丢失的问题，设置多大空间的数据传输包
		fork/join
		知道几种锁
		原子操作去实现线程安全
		在循环中使用wait和notify
		synchronized锁类锁方法锁对象
		wait方法是否必须用在while循环体中？  -->是
		sychronized 与 可重入锁的区别 悲观锁与乐观锁
		对读写锁的了解
		java多线程有几种实现方式
		在java里面有一种线程安全的map是什么（synchronizedHashMap）
		volatile关键字：保证变量对所有线程的可见性，禁止指令重排序优化
		Java中的ConcurrentHashMap是如何实现的<1>
		熟悉线程间的同步吗，其同步方式有多少种？<2>
		
		简述并发包的数据结构：
			七个阻塞结构：
					ArrayBlockingQueue
					LinkedBlockingQueue
					LinkedBlockingDeque
					PriorityBlockingQueue
					SynchronousQueue
					DelayQueue
					TransferQueue
					
			五个并发结构：
					ConcurrentLinkedQueue
					ConcurrentLinkedDeque
					ConcurrentHashMap
					ConcurrentSkipListMap
					ConcurrentSkipListSet

			两个CopyOnWrite结构
					CopyOnWriteArrayList
					CopyOnWriteArraySet

--------------------------------------
	set:
		HashMap的实现原理
		vector,arraylist, linkedlist的区别是什么?
		HashTable, HashMap，TreeMap区别
		ArrayList跟LinkedList的区别详细说出？
		set和list的区别，一些个实现类，继承关系等等？
		arraylist和hashmap在内存中开销
		hashMap与hashTable的区别。
		threadlocal
		java的四个pipe类
		arraylist和linkedList的区别（查询和插入的时间复杂度有什么区别）
		treemap
		hashmap和hashtable的区别
		为什么hashmap不安全
		有4个接口继承Conllection接口：List, Queue, Set, Map;
		List中有ArrayList, Vector, LinkedList
		Set中有HashSet
		Map中HashMap, HashTable, ConcurrentTable
		读过HashMap的源代码
		用Collection中的类实现LRU算法
		
--------------------------------------
	framework:
		spring:
			AOP是什么，实现方式是什么
			对Spring的理解，项目中都用什么?怎么用的?对IOC、和AOP的理解及实现原理
			spirng有什么优点 解释ioc scope有哪几种，区别是什么
			spring版本从3.2.5升级到4.0.2以后有什么优势，具体有哪些改变
			spring 3 和以前的有什么区别吗 
			让你实现注解的话你怎么实现

		springmvc:
			MVC的各个部分都有那些技术来实现? 如何实现?
			如何实现@RequestMapping
			PathVariable实现原理
			REST实现原理
			RequestParam，HeaderParam，CookieParam等实现原理
			POJO实现原理
			对原生API的支持
			ModelAndView，BindingAwareModelMap参数，SessionAttribute实现原理
			ModelAttribute原理

		hibernate:
			谈谈Hibernate的理解，一级和二级缓存的作用，在项目中Hibernate都是怎么使用缓存的
			谈谈Hibernate与Ibatis的区别，哪个性能会更高一些
			如何在hibernate中查看原始的sql语句？
			在Hibernate中java的对象状态有哪些？

		struts2:
			描述struts的工作流程。
			struts2拦截器相关问题？
			struts2接受参数的方式？

		mybatis:
		
--------------------------------------
	rmi:
		java实现远程调用有哪些方式
--------------------------------------
	servlet:
		servelt是线程安全的吗
		session, cookie区别
		Servlet的生命周期
		redirect, foward区别
		servlet相关知识，doPost，doGet，一些内置对象
		post和get提交的区别,get的限制是协议本身限制的嘛
--------------------------------------
	io:
		java io和Nio的区别，使用场景
		Java中的NIO，BIO，AIO分别是什么
		java中IO包下面的inputstream运用了什么设计模式？请简述你知道的设计模式?
		java NIO的实现机制

--------------------------------------
	pattern:
		如何高效的创建的一个高效的单例？
--------------------------------------
	reflection:
		反射讲一讲，主要是概念,都在哪需要反射机制，反射的性能，如何优化

--------------------------------------
	general:
		String,StringBuffer, StringBuilder 的区别是什么?String为什么是不可变的
		抽象类和普通类的区别
		java中所有类的父类是什么？他都有什么方法？
		异常的相关问题？error和exception具体？
		java 1.6 1.7 1.8有何区别
		谈谈 final, finally, finalize 的区别<4>
		Anonymous Inner Class (匿名内部类) 是否可以 extends(继承)	其它类，是否可以 implements(实现)interface(接口)?<5>
		Static Nested Class 和 Inner Class 的不同，说得越多越好(	面试题有的很笼统)。<6>
		&和&&的区别<7>
		Collection 和 Collections 的区别<8>
		Overload 和 Override 的区别，Overloaded 	的方法是否可以改变返回值的类型?
		消息队列（ActiveMQ/Rabbitmq）在大型网站中的作用
		jms

-----------------------------------------------------
			<1>答：采用分段锁，将HashMap分成几个HashTable，由元素HashCode决定存放位置，然后还对比了一下HashTable和HashMap以及其实现上的不同	
					
				<2>答：临界区、互斥量、互斥锁、信号量，对每一种的概念、实现和运用实例都详细介绍了。

				<3>答：启动类/扩展类/系统类加载器和其父子继承关系，分别加载的是哪个路劲下的类加载过程为：装载、校验、准备、解析、初始化等，分别对每个步骤做什么详细解释了一番
					
				<4>答：final 用于声明属性，方法和类，分别表示属性不可变，方法不可覆盖，类不可继承。
						finally 是异常处理语句结构的一部分，表示总是执行。
						finalize 是 Object类的一个方法，在垃圾收集器执行的时候会调用被回收对象的此方法，可以覆盖此方法提供垃圾收集时的其他资源回收，例如关闭文件等。

					
				<5>答：可以继承其他类或完成其他接口，在 swing 编程中常用此方式。
					

				<6>答：Static Nested Class是被声明为静态（static）的内部类，它可以不依赖于外部类实例被实例化。而通常的内部类需要在外部类实例化后才能实例化。

					
				<7>答：&是位运算符，表示按位与运算，&&是逻辑运算符，表示逻辑与（and）.

				<8>答：Collection 是集合类的上级接口，继承与他的接口主要有 Set 和 List.Collections 是针对集合类的一个帮助类，他提供一系列静态方法实现对各种集合的搜索、排序、线程安全化等操作。

					

				
				<9>语言无关：公共子表达式消除
				语言相关：数组范围检查消除，隐式异常处理
				最重要的：方法内联
				最前沿的：逃逸分析：栈上分配，同步消除，标量替换

				
				<10>新建
				运行
				无限期等待
				限期等待
				阻塞
				结束
##########################################################################################################
server:
	session:
		Tomcat的session处理，如果让你实现一个tomcatserver，如何实现session机制
		session和cookie的区别？
		java有些类中为什么需要实现Serializable接口？
	lifecycle:
		servlet容器启动过程，生命周期？
		
##########################################################################################################
mysql:
	sql:
		数据库两个表做交集
		Statement与PreparedStatement的区别,什么是SQL注入，如何防止SQL注入
		sql的优化相关问题
		SQL关联关系？

--------------------------------------
	index:
		数据库中的索引的结构？什么情况下适合建索引？
		DB中索引原理，种类，使用索引的好处和问题是什么?
		B树B+树

--------------------------------------
	general:
		数据库中的范式有哪些
		mysql如何查看运行状态
		数据库事务隔离机制及其特点是什么？
		MySQL存储引擎有哪两种
		数据库连接池原理,自己写过连接池吗,连接池使用使用什么数据结构实现?
		mysql的执行引擎
		xss攻击
		常见的参数设置
		存储引擎怎么去选择
		常见的索引引擎，知道怎么去选择
		知道怎么去设计表
		怎么优化sql
		怎么根据执行计划去调优
		分库分表的设计和优化
		读写分离
		垂直与水平

--------------------------------------
	lock：
		表级锁行级锁
		悲观锁与乐观锁（mysql自带的行级锁）
		大规模的delete或insert操作是否会对引起表锁定，如何解决 分批次delete或insert
--------------------------------------

	transactional:
		数据库事务隔离级别，mysql默认的隔离级别，解释脏读和幻读
		数据库的事务（ACID）（MySQL的默认隔离级别）
		如何查看mysql使用索引来执行select语句 explain命令
		数据库设计时，字段可以选择默认值或者null，为何选择默认值null值在有些存储引擎中按最大字节数存储，占空间，null不能被索引，影响性能

##########################################################################################################
nosql:
	
	redis:
		Redis缓存机制
--------------------------------------

	memchached:

--------------------------------------

	mongodb:

--------------------------------------

	general:
		Mysql，redis和memcache区别
		redis，mongodb都是需要了解原理，需要会调整参数

##########################################################################################################
data structure:
	sort/index:
		冒泡排序
		快速排序，过程，复杂度
		说一下快速排序的原理？
		java的jkd中使用的是什么排序
		归并排序思想，快速排序的实现
		静态查找
		动态查找

		插值查找
		斐波那契查找

		线性索引
			稠密索引
			分块索引
			倒排索引

		二叉排序树
		平衡二叉排序树
		红黑树
		2-3树
		B树
--------------------------------------
	line:
		数组和链表的比较
		实现双向链表的基本操作（add或delete）
		顺序存储结构
		链式存储结构  头插法，尾插法   带头结点    不带头结点
		静态链表
		循环链表
		约瑟夫问题
		判断循环链表有环（2种方法）
		魔术师发牌问题
		双向链表
		循环队列
		斐波那契数列
		汉诺塔
		八皇后问题
		递归
		分治
		BF
		KMP：避免不必要的回溯（su），问题由模式串决定而不是问题串决定
--------------------------------------
	hash:
		常用的hash算法有哪些？
		什么是一致性哈希？
--------------------------------------
	tree:
		红黑树的特性
		什么是二叉平衡树，如何插入节点，删除节点，说出关键步骤。
		B+树和二叉树查找时间复杂度
		存储结构：双亲表示法（数组表示），孩子表示法（数组加链表表示），双亲孩子表示法
		二叉树：
				满二叉树
				完全二叉树
				性质：n0=n2+1
				遍历：前序遍历（先中间），中序遍历（先左边），后序遍历，层序遍历

		线索二叉树
		二叉树转树或森林，树或森林转二叉树
		赫夫曼树
		平衡二叉树
--------------------------------------
	map:
		存储结构：
			邻接矩阵，邻接表，十字链表，邻接多重表，边级数组

			图的深度优先
			马踏棋盘算法
			图的广度优先

			最小生成树
				普里姆算法
				克鲁斯卡尔算法
			最短路径
				迪杰斯特拉算法
				弗洛伊德算法
			拓扑排序（AOV网）
			关键路径（AOE网）
				etv（earliest time of vertex）:事件最早发生时间，就是定点的最早发生时间
				ltv（lastest time of vertex）：事件最晚发生时间，就是每个顶点对应的事件最晚需要开始的事件，如果超出此时间将会延误整个周期
				ete（earliest time of edge）：活动的最早开工时间，就是弧的最早发生时间
				lte（lastest time of edge）：活动的最晚发生时间，就是不推迟工期的最晚开工时间
--------------------------------------
	general:
		如何判断一个单链表是否有环
		时间复杂度：
					O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)
		动态规划

##########################################################################################################
net:
	TCP如何保证可靠传输？三次握手过程
	TCP和UDP区别？
	滑动窗口算法？
	HTTP报文包含内容？
	tcp三次握手和四次握手的具体实现
	http和webSocket的本质区别
	dns是基于tcp还是udp
	RMI和RPC
	socket是哪一层
--------------------------------------
	protocol:
		你知道的开源协议有哪些？
		HTTP 报文包含内容
		https 和http区别
		https如何加密

##########################################################################################################
os:
	linux:
		Linux下如何进行进程调度的？
		Linux下你常用的命令有哪些？
		如何查看命令的帮助文档：本地man，在线info
		怎么查看进程
		怎么去对一些文本里的内容做筛选然后显示
		top和grep加正则表达式
--------------------------------------

	shell:
		文件中查找以as开头的字符串，不区分大小写
		Shell脚本（for循环以及if判断，怕写错就没写）
--------------------------------------
	communication:
		进程间通信有哪几种方式？
--------------------------------------
	lock:
		操作系统什么情况下会死锁？	
--------------------------------------
	process:
		现在有一个进程挂起了，如何用工具查出原因？
--------------------------------------
	memory:
		操作系统如何进行分页调度

##########################################################################################################
c++:
##########################################################################################################

front end:
	UTF8与GBK有什么不同
	一次完整的http请求是什么样的
	GET POST区别
	xml解析方式
	html访问全过程
--------------------------------------
##########################################################################################################
distributed:
	lock:
		如何理解分布式锁？
--------------------------------------
	cache:
		关于Cache(Ehcache,Memcached)
--------------------------------------
	data structure:
		分布式一致哈希
--------------------------------------
	general:
		网站访问量巨大、如何提高效率
		负载均衡实现方式
		Zookeeper
		如何保证分布式事务的数据一致性
		分布式数据库也是，什么主从分离啊，分库、分表、分区啊，这些常见的解决方案
##########################################################################################################

hadoop:
	说说hadoop的组件有哪些？hdfs，hive,hbase,zookeeper。说下mapreduce编程模型。
	我谈到了HDFS的一些机制（块大小为64MB，副本为3个（据说通过数学证明的）及心跳机制）和MapReduce思想。

--------------------------------------
##########################################################################################################

software:
	你知道的开源软件有哪些？
	看过哪些开源项目
--------------------------------------

##########################################################################################################
security:
	DES（对称密钥加密），RSA（非对称密钥加密），MD5

##########################################################################################################

project:
	做一个秒杀系统