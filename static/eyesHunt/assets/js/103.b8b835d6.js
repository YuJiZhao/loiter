(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{385:function(a,e,r){"use strict";r.r(e);var v=r(10),i=Object(v.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"序列化与反序列化是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#序列化与反序列化是什么"}},[a._v("#")]),a._v(" 序列化与反序列化是什么")]),a._v(" "),e("p",[a._v("Java 序列化是指把 Java 对象转换为字节序列的过程，而 Java 反序列化是指把字节序列恢复为 Java 对象的过程：")]),a._v(" "),e("ul",[e("li",[a._v("序列化：序列化是把对象转换成有序字节流，以便在网络上传输或者保存在本地文件中。核心作用是对象状态的保存与重建。我们都知道，Java 对象是保存在 JVM 的堆内存中的，也就是说，如果 JVM 堆不存在了，那么对象也就跟着消失了。而序列化提供了一种方案，可以让你在即使JVM停机的情况下也能把对象保存下来的方案。就像我们平时用的U盘一样。把 Java 对象序列化成可存储或传输的形式（如二进制流），比如保存在文件中。这样，当再次需要这个对象的时候，从文件中读取出二进制流，再从二进制流中反序列化出对象。")]),a._v(" "),e("li",[a._v("反序列化：客户端从文件中或网络上获得序列化后的对象字节流，根据字节流中所保存的对象状态及描述信息，通过反序列化重建对象。")])]),a._v(" "),e("h1",{attrs:{id:"为什么需要序列化与反序列化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要序列化与反序列化"}},[a._v("#")]),a._v(" 为什么需要序列化与反序列化")]),a._v(" "),e("p",[a._v("简要描述：对内存中的对象进行持久化或网络传输, 这个时候都需要序列化和反序列化")]),a._v(" "),e("p",[a._v("深入描述：")]),a._v(" "),e("ul",[e("li",[a._v("对象序列化可以实现分布式对象。主要应用例如：RMI(即远程调用 Remote Method Invocation )要利用对象序列化运行远程主机上的服务，就像在本地机上运行对象时一样。")]),a._v(" "),e("li",[a._v('java对象序列化不仅保留一个对象的数据，而且递归保存对象引用的每个对象的数据。可以将整个对象层次写入字节流中，可以保存在文件中或在网络连接上传递。利用对象序列化可以进行对象的"深复制"，即复制对象本身及引用的对象本身。序列化一个对象可能得到整个对象序列。')]),a._v(" "),e("li",[a._v("序列化可以将内存中的类写入文件或数据库中。比如：将某个类序列化后存为文件，下次读取时只需将文件中的数据反序列化就可以将原先的类还原到内存中。也可以将类序列化为流数据进行传输。总的来说就是将一个已经实例化的类转成文件存储，下次需要实例化的时候只要反序列化即可将类实例化到内存中并保留序列化时类中的所有变量和状态。")]),a._v(" "),e("li",[a._v("对象、文件、数据，有许多不同的格式，很难统一传输和保存。序列化以后就都是字节流了，无论原来是什么东西，都能变成一样的东西，就可以进行通用的格式传输或保存，传输结束以后，要再次使用，就进行反序列化还原，这样对象还是对象，文件还是文件。")])]),a._v(" "),e("h1",{attrs:{id:"序列化实现的方式有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#序列化实现的方式有哪些"}},[a._v("#")]),a._v(" 序列化实现的方式有哪些")]),a._v(" "),e("p",[a._v("实现 Serializable 接口或者 Externalizable 接口。")]),a._v(" "),e("ul",[e("li",[a._v("Serializable：类可以通过实现"),e("code",[a._v("java.io.Serializable")]),a._v("接口以启用其序列化功能。可序列化类的所有子类型本身都是可序列化的。序列化接口没有方法或字段，仅用于标识可序列化的语义。")]),a._v(" "),e("li",[a._v("Externalizable：继承自 Serializable，该接口中定义了两个抽象方法："),e("code",[a._v("writeExternal()")]),a._v("与"),e("code",[a._v("readExternal()")]),a._v("。当使用 Externalizable 接口来进行序列化与反序列化的时候需要开发人员重写"),e("code",[a._v("writeExternal()")]),a._v("与"),e("code",[a._v("readExternal()")]),a._v("方法。否则所有变量的值都会变成默认值。")])]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("实现Serializable接口")]),a._v(" "),e("th",[a._v("实现Externalizable接口")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("系统自动存储必要的信息")]),a._v(" "),e("td",[a._v("程序员决定存储哪些信息")])]),a._v(" "),e("tr",[e("td",[a._v("Java内建支持，易于实现，只需要实现该接口即可，无需任何代码支持")]),a._v(" "),e("td",[a._v("必须实现接口内的两个方法")])]),a._v(" "),e("tr",[e("td",[a._v("性能略差")]),a._v(" "),e("td",[a._v("性能略好")])])])]),a._v(" "),e("h1",{attrs:{id:"什么是serialversionuid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是serialversionuid"}},[a._v("#")]),a._v(" 什么是serialVersionUID")]),a._v(" "),e("p",[a._v("serialVersionUID 用来表明类的不同版本间的兼容性")]),a._v(" "),e("p",[a._v("Java的序列化机制是通过在运行时判断类的 serialVersionUID 来验证版本一致性的。在进行反序列化时，JVM 会把传来的字节流中的 serialVersionUID 与本地相应实体（类）的 serialVersionUID 进行比较，如果相同就认为是一致的，可以进行反序列化，否则就会出现序列化版本不一致的异常。")]),a._v(" "),e("h1",{attrs:{id:"为什么还要显式指定serialversionuid的值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么还要显式指定serialversionuid的值"}},[a._v("#")]),a._v(" 为什么还要显式指定serialVersionUID的值")]),a._v(" "),e("p",[a._v("如果不显式指定 serialVersionUID, JVM 在序列化时会根据属性自动生成一个 serialVersionUID, 然后与属性一起序列化, 再进行持久化或网络传输。在反序列化时, JVM 会再根据属性自动生成一个新版 serialVersionUID, 然后将这个新版 serialVersionUID 与序列化时生成的旧版 serialVersionUID 进行比较, 如果相同则反序列化成功, 否则报错。")]),a._v(" "),e("p",[a._v("如果显式指定了, JVM 在序列化和反序列化时仍然都会生成一个 serialVersionUID, 但值为我们显式指定的值, 这样在反序列化时新旧版本的 serialVersionUID 就一致了.")]),a._v(" "),e("p",[a._v("在实际开发中, 不显式指定 serialVersionUID 的情况会导致什么问题? 如果我们的类写完后不再修改, 那当然不会有问题, 但这在实际开发中是不可能的, 我们的类会不断迭代, 一旦类被修改了, 那旧对象反序列化就会报错。所以在实际开发中, 我们都会显式指定一个 serialVersionUID, 值是多少无所谓, 只要不变就行。")]),a._v(" "),e("h1",{attrs:{id:"java-序列化中如果有些字段不想进行序列化-怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-序列化中如果有些字段不想进行序列化-怎么办"}},[a._v("#")]),a._v(" Java 序列化中如果有些字段不想进行序列化，怎么办？")]),a._v(" "),e("p",[a._v("对于不想进行序列化的变量，使用 transient 关键字修饰。")]),a._v(" "),e("p",[a._v("transient 关键字的作用是控制变量的序列化，在变量声明前加上该关键字，可以阻止该变量被序列化到文件中，在被反序列化后，transient 变量的值被设为初始值，如 int 型的是 0，对象型的是 null。transient 只能修饰变量，不能修饰类和方法。")]),a._v(" "),e("h1",{attrs:{id:"静态变量会被序列化吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态变量会被序列化吗"}},[a._v("#")]),a._v(" 静态变量会被序列化吗")]),a._v(" "),e("p",[a._v("不会。因为序列化是针对对象而言的, 而静态变量优先于对象存在, 随着类的加载而加载, 所以不会被序列化.")]),a._v(" "),e("p",[a._v("看到这个结论, 是不是有人会问, serialVersionUID 也被 static 修饰, 为什么 serialVersionUID 会被序列化? 其实 serialVersionUID 属性并没有被序列化, JVM 在序列化对象时会自动生成一个 serialVersionUID, 然后将我们显示指定的 serialVersionUID 属性值赋给自动生成的 serialVersionUID。")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("原作者：库森")]),a._v(" "),e("p",[a._v("原文链接："),e("a",{attrs:{href:"https://www.javalearn.cn/#/doc/Java%E5%9F%BA%E7%A1%80/%E9%9D%A2%E8%AF%95%E9%A2%98?id=%e5%ba%8f%e5%88%97%e5%8c%96",target:"_blank",rel:"noopener noreferrer"}},[a._v("序列化"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("站长略有修改")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("推荐阅读：")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6844903746682486791",target:"_blank",rel:"noopener noreferrer"}},[a._v("为什么阿里巴巴要求程序员谨慎修改 serialVersionUID 字段的值"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=i.exports}}]);