import{az as b,r as g,c as x,aF as y,j as l,k as n,d as s,O as Q,l as r,I as i,F as d,aK as m,J as k,aJ as u,H as w,Q as q}from"./index.0517690a.js";import{Q as B,a as V,_ as A,b as F}from"./GuideCard.f6756b6b.js";import{Q as P}from"./QPageScroller.9e3223cd.js";import{u as $}from"./use-quasar.c7e5da00.js";import"./QResizeObserver.c6ed713b.js";import"./rtl.b51694b1.js";import"./QItem.222712b7.js";import"./QItemSection.53436c72.js";import"./QItemLabel.5e9a9f6d.js";import"./QImg.b6715264.js";const j=r("h3",{class:"text-center q-pa-lg"}," \u7F8E\u570B\u81EA\u7531\u884C\u653B\u7565 ",-1),E={class:"text-center"},G={class:"row"},I={class:"col-8 offset-2"},J={class:"q-pa-md q-gutter-y-md column flex justify-center items-center"},R={__name:"GuidesPage",setup(N){const p=$(),o=b([]),c=g("\u884C\u524D\u6E96\u5099"),f=[{name:"\u884C\u524D\u6E96\u5099",label:"\u884C\u524D\u6E96\u5099"},{name:"\u6CE8\u610F\u4E8B\u9805",label:"\u6CE8\u610F\u4E8B\u9805"},{name:"\u4EA4\u901A\u8CC7\u8A0A",label:"\u4EA4\u901A\u8CC7\u8A0A"},{name:"\u666F\u9EDE\u4ECB\u7D39",label:"\u666F\u9EDE\u4ECB\u7D39"}],_=x(()=>o.filter(t=>t.category===c.value)),h=t=>{const a=o.indexOf(t);console.log(a),o[a].archive=!o[a].archive};return(async()=>{try{const{data:t}=await y.get("/guides");o.push(...t.result)}catch{p.notify({position:"center",color:"negative",message:"\u5931\u6557",icon:"check_circle",timeout:2e3})}})(),(t,a)=>(l(),n(d,null,[j,s(Q,{inset:""}),r("div",E,[r("div",G,[r("div",I,[r("div",J,[s(B,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e)},{default:i(()=>[(l(),n(d,null,m(f,e=>s(V,u({key:e.name},e),null,16)),64))]),_:1},8,["modelValue"])]),(l(!0),n(d,null,m(k(_),(e,v)=>(l(),w(F,{key:v,class:"shadow-1 overflow-hidden q-ma-lg",style:{"border-radius":"30px"},label:e.title,icon:"explore","header-class":"bg-accent text-white","expand-icon-class":"text-white"},{default:i(()=>[s(A,u(e,{onArchive:O=>h(e)}),null,16,["onArchive"])]),_:2},1032,["label"]))),128))])])]),s(P,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:i(()=>[s(q,{fab:"",icon:"keyboard_arrow_up",color:"accent"})]),_:1})],64))}};export{R as default};