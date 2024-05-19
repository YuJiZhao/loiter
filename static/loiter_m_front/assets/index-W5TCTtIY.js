import{E as R}from"./el-button-BiYwfNb7.js";import{E as ae}from"./el-pagination-_FHyq6Tc.js";import{E as le}from"./el-input-D9jqeYXg.js";import{E as Q,a as W}from"./el-select-DZX1Ptzy.js";import"./el-popper-XxQwgVmP.js";import{E as te,a as oe}from"./el-table-column-M44UI9A7.js";import"./el-tooltip-l0sNRNKZ.js";import{E as ne}from"./el-popover-CUqzKF0H.js";import{d as F,K as S,o as K,a as v,c as k,f as o,w as r,U as A,aa as $,n as N,h as z,i as E,j as C,E as d,at as X,au as Y,b as m,ax as Z,r as V,L as se,e as j,aC as U,ay as J,aB as re}from"./index-NHIm5-uZ.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as ie}from"./el-overlay-CHWBwd7q.js";import"./index-C1H9JqF_.js";import"./vnode-Ch83emUg.js";const ee=b=>(X("data-v-a9b78d49"),b=b(),Y(),b),ue={class:"condition"},pe=ee(()=>m("span",{class:"label"},"应用",-1)),ce=ee(()=>m("span",{class:"label"},"限流器",-1)),de=F({__name:"condition",emits:["search"],setup(b,{emit:y}){const w=y,i=S([]),L=S([]),_=S({appId:"",limiter:""});function l(){E.getAppDictionary().then(({code:f,msg:p,data:h})=>{if(f!=C.success){d({type:"error",message:"应用信息获取失败："+p});return}h.forEach((c,I)=>{i[I]={label:c.label,value:c.value}})})}function x(){E.getLimiterDictionary().then(({code:f,msg:p,data:h})=>{if(f!=C.success){d({type:"error",message:"限流器信息获取失败："+p});return}h.forEach((c,I)=>{L[I]={label:c.label,value:c.value}})})}function D(){w("search",_)}return K(()=>{l(),x()}),(f,p)=>{const h=Q,c=W,I=R;return v(),k("div",ue,[pe,o(c,{class:"select",modelValue:_.appId,"onUpdate:modelValue":p[0]||(p[0]=u=>_.appId=u),filterable:"",clearable:""},{default:r(()=>[(v(!0),k(A,null,$(i,u=>(v(),N(h,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),ce,o(c,{class:"select",modelValue:_.limiter,"onUpdate:modelValue":p[1]||(p[1]=u=>_.limiter=u),filterable:"",clearable:""},{default:r(()=>[(v(!0),k(A,null,$(L,u=>(v(),N(h,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(I,{class:"search",plain:"",onClick:D},{default:r(()=>[z("查询")]),_:1})])}}}),me=q(de,[["__scopeId","data-v-a9b78d49"]]),B=b=>(X("data-v-a1b33082"),b=b(),Y(),b),_e={class:"inputGroup"},fe=B(()=>m("span",{class:"label"},"应用名",-1)),ve={class:"inputGroup"},be=B(()=>m("span",{class:"label"},"限流器",-1)),ge={class:"inputGroup"},he=B(()=>m("span",{class:"label"},"限流模式",-1)),ye={class:"inputGroup"},Ie=B(()=>m("span",{class:"label"},"参数示例",-1)),Ve={class:"inputGroup"},Ee=B(()=>m("span",{class:"label"},"限流参数",-1)),Ce={class:"dialog-footer"},xe=F({__name:"save",props:{show:Number,flag:Number,data:Object},emits:["reload"],setup(b,{emit:y}){const w=y,i=b,L=Z(),_=V(!1),l=S({appId:"",limiter:"",mode:"",parameter:""}),x=V(""),D=S([]),f=S([]),p=S([]);se(()=>i.show,t=>{M(),i.flag==U.update&&P(),_.value=!0});function h(){E.getAppDictionary().then(({code:t,msg:e,data:n})=>{if(t!=C.success){d({type:"error",message:"应用信息获取失败："+e});return}n.forEach((s,g)=>{D[g]={label:s.label,value:s.value}})})}function c(){E.getLimiterDictionary().then(({code:t,msg:e,data:n})=>{if(t!=C.success){d({type:"error",message:"限流器信息获取失败："+e});return}n.forEach((s,g)=>{f[g]={label:s.label,value:s.value,appendix:s.appendix}})})}function I(){E.getLimiterModeDictionary().then(({code:t,msg:e,data:n})=>{if(t!=C.success){d({type:"error",message:"限流器模式信息获取失败："+e});return}n.forEach((s,g)=>{p[g]={label:s.label,value:s.value}})})}function u(t){for(let e in f)if(f[e].value==t){x.value=f[e].appendix||"";return}}function G(){if(l.parameter)try{JSON.parse(l.parameter)}catch{d({type:"error",message:"参数不为JSON格式！"});return}if(!L.checkAuth(J.admin)){d({type:"error",message:"权限不足！"});return}E.saveAppLimiter({...l,appId:l.appId?Number(l.appId):null}).then(({code:t,msg:e})=>{if(t!=C.success){d({type:"error",message:"保存失败："+e});return}_.value=!1,w("reload")})}function M(){l.appId="",l.limiter="",l.mode="",l.parameter="",x.value=""}function P(){l.appId=String(i.data.appId),l.limiter=i.data.limiterCode,l.mode=i.data.mode,l.parameter=i.data.parameter,u(i.data.limiterCode)}return K(()=>{h(),c(),I()}),(t,e)=>{const n=Q,s=W,g=le,O=R,T=ie;return v(),N(T,{class:"save",modelValue:_.value,"onUpdate:modelValue":e[6]||(e[6]=a=>_.value=a),title:i.flag==j(U).add?"新增应用限流器":"编辑应用限流器",width:"500"},{footer:r(()=>[m("div",Ce,[o(O,{onClick:e[5]||(e[5]=a=>_.value=!1)},{default:r(()=>[z("取消")]),_:1}),o(O,{type:"primary",onClick:G},{default:r(()=>[z("保存")]),_:1})])]),default:r(()=>[m("div",null,[m("div",_e,[fe,o(s,{class:"input",modelValue:l.appId,"onUpdate:modelValue":e[0]||(e[0]=a=>l.appId=a),disabled:i.flag!=j(U).add,filterable:"",clearable:""},{default:r(()=>[(v(!0),k(A,null,$(D,a=>(v(),N(n,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),m("div",ve,[be,o(s,{class:"input",modelValue:l.limiter,"onUpdate:modelValue":e[1]||(e[1]=a=>l.limiter=a),clearable:"",onChange:u},{default:r(()=>[(v(!0),k(A,null,$(f,a=>(v(),N(n,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),m("div",ge,[he,o(s,{class:"input",modelValue:l.mode,"onUpdate:modelValue":e[2]||(e[2]=a=>l.mode=a),clearable:""},{default:r(()=>[(v(!0),k(A,null,$(p,a=>(v(),N(n,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),m("div",ye,[Ie,o(g,{class:"input",modelValue:x.value,"onUpdate:modelValue":e[3]||(e[3]=a=>x.value=a),type:"textarea",autosize:"",disabled:""},null,8,["modelValue"])]),m("div",Ve,[Ee,o(g,{class:"input",modelValue:l.parameter,"onUpdate:modelValue":e[4]||(e[4]=a=>l.parameter=a),type:"textarea",autosize:""},null,8,["modelValue"])])])]),_:1},8,["modelValue","title"])}}}),De=q(xe,[["__scopeId","data-v-a1b33082"]]),ke={class:"limiter"},Le={class:"data"},Se="prev, pager, next",we=F({__name:"index",setup(b){let y={appId:"",limit:""};const w=Z(),i=V(1),L=V(10),_=V(0),l=V([]),x=[{prop:"appName",label:"应用名"},{prop:"limiterName",label:"限流器"},{prop:"mode",label:"方式"},{prop:"parameter",label:"参数配置"},{prop:"updatedAt",label:"更新时间"}],D=V(0),f=V(),p=V();function h(t){y.appId=t.appId,y.limit=t.limit,c()}function c(){E.getLimiterByPage({appId:y.appId?Number(y.appId):null,limit:y.limit,pageNo:i.value,pageSize:L.value}).then(({code:t,msg:e,data:n})=>{if(t!=C.success){d({type:"error",message:"应用限流器信息获取失败："+e});return}_.value=n.total,l.value=n.data})}function I(t){i.value=t}function u(){f.value=U.add,p.value=null,D.value++}function G(t){f.value=U.update,p.value=t.row,D.value++}function M(t){if(!w.checkAuth(J.admin)){d({type:"error",message:"权限不足"});return}E.refreshLimiter([t.row.appId]).then(({code:e,msg:n})=>{if(e!=C.success){d({type:"error",message:"限流器容器刷新失败："+n});return}d({type:"success",message:"限流器容器刷新成功"})})}function P(t){if(!w.checkAuth(J.admin)){d({type:"error",message:"权限不足"});return}E.deleteAppLimiter({appId:t.row.appId}).then(({code:e,msg:n})=>{if(e!=C.success){d({type:"error",message:"限流器容器删除失败："+n});return}d({type:"success",message:"限流器容器删除成功"}),c()})}return K(()=>{c()}),(t,e)=>{const n=oe,s=R,g=ne,O=te,T=ae;return v(),k("div",ke,[o(me,{onSearch:h}),m("div",Le,[o(O,{class:"table",border:!0,data:l.value},{default:r(()=>[o(n,{type:"index",align:"center"}),(v(),k(A,null,$(x,a=>o(n,{prop:a.prop,label:a.label,align:"center"},null,8,["prop","label"])),64)),o(n,{prop:"content",label:"操作",align:"center"},{default:r(a=>[o(s,{size:"small",onClick:H=>G(a)},{default:r(()=>[z("编辑")]),_:2},1032,["onClick"]),o(g,{title:"该操作将直接改变容器，请确保限流插件已关闭！",onConfirm:H=>P(a)},{reference:r(()=>[o(s,{size:"small"},{default:r(()=>[z("删除")]),_:1})]),_:2},1032,["onConfirm"]),o(g,{title:"确认刷新容器吗?",onConfirm:H=>M(a)},{reference:r(()=>[o(s,{size:"small"},{default:r(()=>[z("刷新容器")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),o(T,{class:"pagination","current-page":i.value,"page-size":L.value,total:_.value,layout:Se,onCurrentChange:I},null,8,["current-page","page-size","total"])]),o(s,{class:"saveBtn",icon:j(re),type:"primary",circle:"",size:"large",onClick:u},null,8,["icon"]),o(De,{show:D.value,flag:f.value,data:p.value,onReload:c},null,8,["show","flag","data"])])}}}),Re=q(we,[["__scopeId","data-v-a7ef6731"]]);export{Re as default};
