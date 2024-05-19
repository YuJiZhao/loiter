(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{415:function(t,e,v){"use strict";v.r(e);var _=v(10),r=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"问题排查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题排查"}},[t._v("#")]),t._v(" 问题排查")]),t._v(" "),e("p",[e("strong",[t._v("查询哪个进程占用CPU")])]),t._v(" "),e("p",[t._v("可以使用 "),e("code",[t._v("Top")]),t._v(" 或者 "),e("code",[t._v("top | grep 用户名")]),t._v("。比如这里我们可以使用 "),e("code",[t._v("top")]),t._v(" 查询有哪些进程比较占用 CPU，如下图，可以发现是进程 15913：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://hunt-cdn.eyescode.top/content/8c2b7604-c68d-2f5e-0253-4c0dd439c162.png",alt:"top命令"}})]),t._v(" "),e("p",[e("strong",[t._v("进程哪个线程占用CPU")])]),t._v(" "),e("p",[t._v("接着我们查看上述进程内是哪些线程在捣乱，使用命令"),e("code",[t._v("top -H -p PID")]),t._v("，加上 -H 选项可以该进程的相关线程信息。")]),t._v(" "),e("p",[t._v("在这里我们使用"),e("code",[t._v("top -H -p 15913")]),t._v("，结果如下图，从下图种可知最耗 CPU 的两个线程 PID 分别是 15924 和 15925，对应的 16 进制为 0x3e34 和 0x3e35：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://hunt-cdn.eyescode.top/content/931ef8df-220b-fcac-cc6b-82a43f63e3a4.png",alt:"排查线程"}})]),t._v(" "),e("p",[e("strong",[t._v("查询线程的堆栈信息")])]),t._v(" "),e("p",[t._v("jstack 命令可以得到线程堆栈信息，根据这些线程堆栈信息，可以去检查 Java 程序出现的问题，如检测死锁。")]),t._v(" "),e("p",[t._v("在这里我们要分两步：")]),t._v(" "),e("ol",[e("li",[t._v("将 tid 转换为 16 进制的数字：printf “%x\\n” tid")]),t._v(" "),e("li",[t._v("查询线程信息：jstack 15913 | grep -A 10 0x3e34")])]),t._v(" "),e("p",[t._v("由于站长没有执行这个命令，所以在网上找了个类似的图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://hunt-cdn.eyescode.top/content/977ca4d2-ec80-e632-a5ab-243bd4dca419.jpg",alt:"堆栈信息"}})]),t._v(" "),e("p",[t._v("看到具体代码后，就可以根据情况解决了。")]),t._v(" "),e("h1",{attrs:{id:"紧急解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#紧急解决方案"}},[t._v("#")]),t._v(" 紧急解决方案")]),t._v(" "),e("p",[t._v("导致 CPU 高占用的因素很多，具体情况具体分析，以下仅供参考：")]),t._v(" "),e("ul",[e("li",[t._v("kill问题进程，保全其他程序")]),t._v(" "),e("li",[t._v("紧急扩容")]),t._v(" "),e("li",[t._v("重启服务器")]),t._v(" "),e("li",[t._v("中断造成 CPU 高占用的任务")]),t._v(" "),e("li",[t._v("代码回滚")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("摘自：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/322597955",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPU飙高问题排查"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1400432",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPU占用100%排查过程"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("站长略有修改")])])}),[],!1,null,null,null);e.default=r.exports}}]);