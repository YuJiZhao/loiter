import{g as v,E as h}from"./el-button-C0k8b0Uu.js";import{F as x,G as z,aD as D,d as b,av as I,m as V,r as _,D as i,aw as $,a as p,n as c,w as s,b as f,a6 as a,e as t,Q as q,aq as A,ab as M,ai as g,h as u,t as m,f as C,q as R,v as F,y as G,a7 as L}from"./index-PF-Fl51z.js";import{u as E,E as Q}from"./el-popper-BcKKSjAX.js";const U=x({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:v,default:"primary"},cancelButtonType:{type:String,values:v,default:"text"},icon:{type:z,default:()=>D},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:E.teleported,persistent:E.persistent,width:{type:[String,Number],default:150}}),j={confirm:o=>o instanceof MouseEvent,cancel:o=>o instanceof MouseEvent},H=b({name:"ElPopconfirm"}),J=b({...H,props:U,emits:j,setup(o,{emit:d}){const r=o,{t:y}=I(),n=V("popconfirm"),B=_(),T=()=>{var e,l;(l=(e=B.value)==null?void 0:e.onClose)==null||l.call(e)},S=i(()=>({width:$(r.width)})),k=e=>{d("confirm",e),T()},P=e=>{d("cancel",e),T()},w=i(()=>r.confirmButtonText||y("el.popconfirm.confirmButtonText")),N=i(()=>r.cancelButtonText||y("el.popconfirm.cancelButtonText"));return(e,l)=>(p(),c(t(Q),F({ref_key:"tooltipRef",ref:B,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${t(n).namespace.value}-popover`,"popper-style":t(S),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:s(()=>[f("div",{class:a(t(n).b())},[f("div",{class:a(t(n).e("main"))},[!e.hideIcon&&e.icon?(p(),c(t(q),{key:0,class:a(t(n).e("icon")),style:A({color:e.iconColor})},{default:s(()=>[(p(),c(M(e.icon)))]),_:1},8,["class","style"])):g("v-if",!0),u(" "+m(e.title),1)],2),f("div",{class:a(t(n).e("action"))},[C(t(h),{size:"small",type:e.cancelButtonType==="text"?"":e.cancelButtonType,text:e.cancelButtonType==="text",onClick:P},{default:s(()=>[u(m(t(N)),1)]),_:1},8,["type","text"]),C(t(h),{size:"small",type:e.confirmButtonType==="text"?"":e.confirmButtonType,text:e.confirmButtonType==="text",onClick:k},{default:s(()=>[u(m(t(w)),1)]),_:1},8,["type","text"])],2)],2)]),default:s(()=>[e.$slots.reference?R(e.$slots,"reference",{key:0}):g("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var K=G(J,[["__file","popconfirm.vue"]]);const Y=L(K);export{Y as E};