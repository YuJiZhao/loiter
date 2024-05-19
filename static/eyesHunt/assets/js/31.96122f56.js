(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{313:function(v,t,_){"use strict";_.r(t);var p=_(10),n=Object(p.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("有 1w 个数组，每个数组有 500 个元素，并且有序排列。如何在这 10000*500 个数中找出前 500 的数？")]),v._v(" "),t("p",[t("strong",[v._v("方法1")])]),v._v(" "),t("p",[v._v("题目中每个数组是排好序的，可以使用归并的方法。")]),v._v(" "),t("p",[v._v("先将第 1 个和第 2 个归并，得到 500 个数据。然后再将结果和第 3 个数组归并，得到 500 个数据，以此类推，直到最后找出前 500 个的数。")]),v._v(" "),t("p",[t("strong",[v._v("方法2")])]),v._v(" "),t("p",[v._v("对于这种 topk 问题，更常用的方法是使用堆排序。")]),v._v(" "),t("p",[v._v("对本题而言，由于数组降序排列，可以采用以下方法：")]),v._v(" "),t("ol",[t("li",[v._v("首先建立大顶堆，堆的大小为数组的个数，即为 10000，把每个数组最大的值存到堆中")]),v._v(" "),t("li",[v._v("接着删除堆顶元素，保存到另一个大小为 500 的数组中，然后向大顶堆插入删除的元素所在数组的下一个元素")]),v._v(" "),t("li",[v._v("重复上面的步骤，直到删除完第 500 个元素，也即找出了最大的前 500 个数。")])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("原作者：大彬")]),v._v(" "),t("p",[v._v("原文链接：https://topjavaer.cn/mass-data/6-top-500-num.html")]),v._v(" "),t("p",[v._v("站长略有修改")])])}),[],!1,null,null,null);t.default=n.exports}}]);