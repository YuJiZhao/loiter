import{E as v}from"./el-button-BiYwfNb7.js";import{E as x}from"./el-input-D9jqeYXg.js";import{d as h,u as V,r as d,o as w,a as k,c as E,b as t,t as L,e as l,s as o,f as r,g as M,l as C,w as y,h as B,E as i,i as P,j as b,k as I,p as N}from"./index-NHIm5-uZ.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const U={class:"login"},j={class:"title"},D={class:"form"},H=h({__name:"index",setup(R){const p=V(),s=d(""),a=d("");function m(){i("暂不支持修改密码，请联系超级管理员重置！")}function f(){if(s.value.length>o.usernameMaxLen||s.value.length<o.usernameMinLen||a.value.length>o.userPasMaxLen||a.value.length<o.userPasMinLen){i({type:"warning",message:"登录信息格式不规范"});return}P.doLogin({username:s.value,password:a.value}).then(({code:u,msg:e})=>{u==b.success?location.reload():i({type:"error",message:"登录失败："+e})})}function _(){localStorage.getItem(I.token)&&p.replace(N.home)}return w(()=>{_()}),(u,e)=>{const c=x,g=v;return k(),E("div",U,[t("div",j,L(l(o).name),1),t("div",D,[r(c,{class:"input",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=n=>s.value=n),"prefix-icon":l(M),placeholder:"请输入账号"},null,8,["modelValue","prefix-icon"]),r(c,{class:"input",type:"password",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=n=>a.value=n),"show-password":"","prefix-icon":l(C),placeholder:"请输入密码"},null,8,["modelValue","prefix-icon"])]),t("div",{class:"forget"},[t("span",{onClick:m},"忘记密码？")]),r(g,{plain:"",class:"action",onClick:f},{default:y(()=>[B("登录")]),_:1})])}}}),F=S(H,[["__scopeId","data-v-d8a62ec9"]]);export{F as default};