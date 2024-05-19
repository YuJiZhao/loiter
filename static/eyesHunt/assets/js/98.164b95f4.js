(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{380:function(a,t,s){"use strict";s.r(t);var n=s(10),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-9"}},[a._v("#")]),a._v(" Java 9")]),a._v(" "),t("p",[t("strong",[a._v("G1 成为默认垃圾回收器")])]),a._v(" "),t("p",[a._v("在 Java 8 的时候，默认垃圾回收器是 "),t("code",[a._v("Parallel Scavenge（新生代）+ Parallel Old（老年代）")]),a._v("。到了 Java 9, CMS 垃圾回收器被废弃了，G1（Garbage-First Garbage Collector） 成为了默认垃圾回收器。G1 还是在 Java 7 中被引入的，经过两个版本优异的表现成为成为默认垃圾回收器。")]),a._v(" "),t("p",[t("strong",[a._v("AOT（提前编译）技术")])]),a._v(" "),t("p",[a._v("JDK9 引入了 AOT 编译(提前编译，Ahead of Time)。这是与 JIT 编译（即时编译，Just in Time）相对立的一个概念。即时编译指的是在程序的运行过程中，将字节码转换为可在硬件上直接运行的机器码，并部署至托管环境中的过程。而 AOT 编译指的则是，在程序运行之前，便将字节码转换为机器码，以便在程序运行时直接使用本地代码。")]),a._v(" "),t("p",[a._v("AOT 的优缺点：")]),a._v(" "),t("ul",[t("li",[a._v("优点：Java 虚拟机加载已经预编译成的二进制库，可以直接执行。不必等待及时编译器的预热，减少 Java 应用给人带来“第一次运行慢” 的不良体验")]),a._v(" "),t("li",[a._v("缺点：Java 语言本身的动态特性给其带来了额外的复杂性，影响了 Java 程序静态编译代码的质量")])]),a._v(" "),t("p",[t("strong",[a._v("String 存储结构优化")])]),a._v(" "),t("p",[a._v("Java 8 及之前的版本，"),t("code",[a._v("String")]),a._v(" 一直是用 "),t("code",[a._v("char[]")]),a._v(" 存储。在 Java 9 之后，"),t("code",[a._v("String")]),a._v(" 的实现改用 "),t("code",[a._v("byte[]")]),a._v(" 数组存储字符串，节省了空间。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Serializable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Comparable")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// @Stable 注解表示变量最多被修改一次，称为“稳定的”。")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Stable")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("strong",[a._v("接口私有方法")])]),a._v(" "),t("p",[a._v("Java 9 允许在接口中使用私有方法。这样的话，接口的使用就更加灵活了，有点像是一个简化版的抽象类。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyInterface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("methodPrivate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h1",{attrs:{id:"java-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-10"}},[a._v("#")]),a._v(" Java 10")]),a._v(" "),t("p",[t("strong",[a._v("局部变量类型推断(var)")])]),a._v(" "),t("p",[a._v("由于太多 Java 开发者希望 Java 中引入局部变量推断，于是 Java 10 的时候它来了，也算是众望所归了！")]),a._v(" "),t("p",[a._v("Java 10 提供了 var 关键字声明局部变量。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" codefx "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://mp.weixin.qq.com/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" list "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" list "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" map "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashMap")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"src/test/java/Java9FeaturesTest.java"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" numbers "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"b"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"c"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("var 关键字只能用于带有构造器的局部变量和 for 循环中。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" count"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//❌编译不通过，不能声明为 null")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" r "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("random")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//❌编译不通过,不能声明为 Lambda表达式")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" array "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//❌编译不通过,不能声明数组")]),a._v("\n")])])]),t("p",[a._v("var 并不会改变 Java 是一门静态类型语言的事实，编译器负责推断出类型。另外，Scala 和 Kotlin 中已经有了 val 关键字 ( final var 组合关键字)。")]),a._v(" "),t("h1",{attrs:{id:"java-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-11"}},[a._v("#")]),a._v(" Java 11")]),a._v(" "),t("p",[t("strong",[a._v("ZGC(可伸缩低延迟垃圾收集器)")])]),a._v(" "),t("p",[a._v("ZGC 即 Z Garbage Collector，是一个可伸缩的、低延迟的垃圾收集器。")]),a._v(" "),t("p",[a._v("ZGC 主要为了满足如下目标进行设计：")]),a._v(" "),t("ul",[t("li",[a._v("GC 停顿时间不超过 10ms")]),a._v(" "),t("li",[a._v("即能处理几百 MB 的小堆，也能处理几个 TB 的大堆")]),a._v(" "),t("li",[a._v("应用吞吐能力不会下降超过 15%（与 G1 回收算法相比）")]),a._v(" "),t("li",[a._v("方便在此基础上引入新的 GC 特性和利用 colored 针以及 Load barriers 优化奠定基础")])]),a._v(" "),t("p",[a._v("ZGC 目前 处在实验阶段，只支持 "),t("code",[a._v("Linux/x64")]),a._v(" 平台。与 CMS 中的 ParNew 和 G1 类似，ZGC 也采用标记-复制算法，不过 ZGC 对该算法做了重大改进。在 ZGC 中出现 Stop The World 的情况会更少！")]),a._v(" "),t("h1",{attrs:{id:"java-19"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-19"}},[a._v("#")]),a._v(" Java 19")]),a._v(" "),t("p",[t("strong",[a._v("虚拟线程")])]),a._v(" "),t("p",[a._v("众所周知当前 Java 线程的实现是每个 Java 线程需要消耗一个操作系统线程。而操作系统线程这种资源是非常稀缺，非常宝贵的。而虚拟线程是"),t("code",[a._v("java.lang.Thread")]),a._v("一种用户态的实现，当我们在虚拟线程上使用同步 API 时，是不会阻塞任何操作系统线程，硬件利用率接近最佳。")]),a._v(" "),t("p",[a._v("JDK19 正式引入虚拟线程，意味着许多虚拟线程可以在同一个操作系统线程上运行它们的 Java 代码，从而有效地共享它。值得一提的是，它能做到在几个 G 的 JVM 堆上创建几百万个活动的虚拟线程（这在现在的 JDK 中几乎不可能实现），并且表现出和现在的线程几乎一样的行为。这些协程由 JVM 管理，因此它们也不会增加额外的上下文切换开销，因为它们作为普通 Java 对象存储在 RAM 中。")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("摘自：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://javaguide.cn/java/new-features/java8-common-new-features.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java新特性"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://space.eyescode.top/blog/details/263",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring知识点梳理"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://space.eyescode.top/blog/details/233",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM详解——执行引擎"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("站长略有修改")])])}),[],!1,null,null,null);t.default=e.exports}}]);