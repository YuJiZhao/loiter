(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{389:function(_,v,t){"use strict";t.r(v);var i=t(10),l=Object(i.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"服务器硬件的优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务器硬件的优化"}},[_._v("#")]),_._v(" 服务器硬件的优化")]),_._v(" "),v("p",[_._v("提升硬件设备，例如选择尽量高频率的内存（频率不能高于主板的支持）、提升网络带宽、使用 SSD 高速磁盘、提升 CPU 性能等。")]),_._v(" "),v("p",[_._v("CPU 的选择（CPU 有两个关键因素：核数、主频）：")]),_._v(" "),v("ul",[v("li",[_._v("CPU 密集型：计算比较多，频繁执行复杂 SQL 的场景，此时 CPU 的频率越高越好")]),_._v(" "),v("li",[_._v("IO 密集型：并发比较高的场景，此时 CPU 的数量比频率重要")])]),_._v(" "),v("p",[_._v("内存的选择：")]),_._v(" "),v("ul",[v("li",[_._v("OLAP 类型数据库，需要更多内存，和数据获取量级有关")]),_._v(" "),v("li",[_._v("OLTP 类型数据一般内存是 cpu 核心数量的 2 倍到 4 倍，没有最佳实践")])]),_._v(" "),v("p",[_._v("存储方面：")]),_._v(" "),v("ul",[v("li",[_._v("根据存储数据种类的不同，选择不同的存储设备")]),_._v(" "),v("li",[_._v("配置合理的 RAID 级别（raid5、raid10、热备盘）")]),_._v(" "),v("li",[_._v("对与操作系统来讲，不需要太特殊的选择，最好做好冗余（raid1）（ssd、sas 、sata）")])]),_._v(" "),v("p",[_._v("raid卡：")]),_._v(" "),v("ul",[v("li",[_._v("实现操作系统磁盘的冗余（raid1）")]),_._v(" "),v("li",[_._v("平衡内存和磁盘资源")]),_._v(" "),v("li",[_._v("随机的 I/O 和顺序的 I/O")]),_._v(" "),v("li",[_._v("主机 RAID 卡的 BBU(Battery Backup Unit) 要关闭。")])]),_._v(" "),v("p",[_._v("网络设备方面：")]),_._v(" "),v("ul",[v("li",[_._v("使用流量支持更高的网络设备（交换机、路由器、网线、网卡、HBA卡）")])]),_._v(" "),v("h1",{attrs:{id:"结构优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结构优化"}},[_._v("#")]),_._v(" 结构优化")]),_._v(" "),v("ul",[v("li",[_._v("垂直分表，降低单表的复杂度")]),_._v(" "),v("li",[_._v("水平分表，降低单表数据量")]),_._v(" "),v("li",[_._v("主从复制，读写分离")]),_._v(" "),v("li",[_._v("对于历史数据，如果不再使用，可以同步到 Hive 离线存储，然后删掉")]),_._v(" "),v("li",[_._v("冷热分离")])]),_._v(" "),v("h1",{attrs:{id:"mysql数据库配置优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库配置优化"}},[_._v("#")]),_._v(" MySQL数据库配置优化")]),_._v(" "),v("ul",[v("li",[_._v("innodb_buffer_pool_size：表示缓冲池字节大小。推荐值为物理内存的 50%~80%")]),_._v(" "),v("li",[_._v("innodb_flush_log_at_trx_commit：用来控制 redo log 刷新到磁盘的策略")]),_._v(" "),v("li",[_._v("sync_binlog：每提交 n 次事务就同步写到磁盘中")]),_._v(" "),v("li",[_._v("innodb_max_dirty_pages_pct：脏页占到该比例时，触发刷脏页到磁盘。推荐值为 25%~50%。")]),_._v(" "),v("li",[_._v("innodb_io_capacity：后台进程最大 IO 性能指标。默认200，如果是 SSD 磁盘，可以调整为 5000~20000")]),_._v(" "),v("li",[_._v("innodb_data_file_path：指定innodb共享表空间文件的大小")]),_._v(" "),v("li",[_._v("long_qurey_time：慢查询日志的阈值设置，单位秒")]),_._v(" "),v("li",[_._v("binlog_format=row：mysql 复制的形式，row 为 MySQL8.0 的默认形式")]),_._v(" "),v("li",[_._v("max_connections：最大连接数，调高该参数则应降低 interactive_timeout、wait_timeout 的值")]),_._v(" "),v("li",[_._v("innodb_log_file_size：过大，实例恢复时间长；过小，造成日志切换频繁")]),_._v(" "),v("li",[_._v("general_log：是否开启全量日志，默认关闭")])]),_._v(" "),v("h1",{attrs:{id:"存储引擎的选择"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎的选择"}},[_._v("#")]),_._v(" 存储引擎的选择")]),_._v(" "),v("ul",[v("li",[_._v("Myisam：适合并发量不大，读多写少，而且都能很好的用到索引，且sql语句比较简单的应用，比如，数据仓库。")]),_._v(" "),v("li",[_._v("Innodb：适合并发访问大，写操作比较多，有外键、事务等需求的应用，系统内存较大。")])]),_._v(" "),v("h1",{attrs:{id:"索引优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引优化"}},[_._v("#")]),_._v(" 索引优化")]),_._v(" "),v("ul",[v("li",[_._v("遵守最左前缀规则")]),_._v(" "),v("li",[_._v("避免模糊查询不能利用索引的情况，比如避免"),v("code",[_._v("like '%XX'或者like '%XX%'")])]),_._v(" "),v("li",[_._v("不要过多创建索引")]),_._v(" "),v("li",[_._v("索引长度尽量短")]),_._v(" "),v("li",[_._v("索引更新不能频繁")]),_._v(" "),v("li",[_._v("索引列不能参与计算")])]),_._v(" "),v("h1",{attrs:{id:"查询时优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查询时优化"}},[_._v("#")]),_._v(" 查询时优化")]),_._v(" "),v("ul",[v("li",[_._v("小表驱动大表")]),_._v(" "),v("li",[_._v("避免全表扫描")]),_._v(" "),v("li",[_._v("利用覆盖索引，少使用 "),v("code",[_._v("select *")])]),_._v(" "),v("li",[_._v("order by 排序应该遵循最佳左前缀查询")]),_._v(" "),v("li",[_._v("谨慎使用 for update")])]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("摘自：")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1807455",target:"_blank",rel:"noopener noreferrer"}},[_._v("一文搞定MySQL性能调优"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/46647057",target:"_blank",rel:"noopener noreferrer"}},[_._v("超详细MySQL高性能优化实战总结！"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://www.cnblogs.com/Java3y/p/15396099.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("面试官问我MySQL调优，我真的是"),v("OutboundLink")],1)])]),_._v(" "),v("p",[_._v("站长略有修改")])])}),[],!1,null,null,null);v.default=l.exports}}]);