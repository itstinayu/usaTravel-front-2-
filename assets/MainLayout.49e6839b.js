import{Q as B}from"./QImg.ed729948.js";import{h as s,A as C,B as G,C as z,D as T,E as P,r as I,G as Q,j as r,H as n,I as t,d as e,l as c,Q as f,J as a,k as R,K as i,q as u,L as p,M as V,N as D,O as x,P as h,R as y}from"./index.7bb95f54.js";import{Q as o}from"./QItemSection.5a07b221.js";import{Q as d}from"./QItem.09b02e6a.js";import{Q as $}from"./QBadge.163590e0.js";import{Q as L}from"./QList.cbe0a56a.js";import{Q as b}from"./QMenu.11873796.js";import{Q as E,_ as H}from"./statue-of-liberty.e6d58a67.js";import{Q as j,a as J,b as K}from"./QLayout.bd4128b8.js";import{u as O}from"./use-quasar.87ec5f77.js";import"./QResizeObserver.f04b9e4e.js";const U=[s("path",{d:"M0 50A50 50 0 0 1 50 0L50 50L0 50",fill:"currentColor",opacity:"0.5"},[s("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"0.8s",repeatCount:"indefinite"})]),s("path",{d:"M50 0A50 50 0 0 1 100 50L50 50L50 0",fill:"currentColor",opacity:"0.5"},[s("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"1.6s",repeatCount:"indefinite"})]),s("path",{d:"M100 50A50 50 0 0 1 50 100L50 50L100 50",fill:"currentColor",opacity:"0.5"},[s("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2.4s",repeatCount:"indefinite"})]),s("path",{d:"M50 100A50 50 0 0 1 0 50L50 50L50 100",fill:"currentColor",opacity:"0.5"},[s("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"3.2s",repeatCount:"indefinite"})])];var Y=C({name:"QSpinnerPie",props:G,setup(g){const{cSize:m,classes:l}=z(g);return()=>s("svg",{class:l.value,width:m.value,height:m.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},U)}});const F=s("div",{class:"q-space"});var W=C({name:"QSpace",setup(){return()=>F}});const X=c("h4",null,"\u7F8E\u597D\u81EA\u904A",-1),Z={class:"text-center"},ee={key:0,class:"GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"},te=c("a",{href:"#photoShare",class:"text-white photoShare"}," \u5206\u4EAB\u7246 ",-1),ae={class:"q-pl-sm q-gutter-sm row items-center no-wrap"},re={class:"row items-center no-wrap"},oe=["src"],ge={__name:"MainLayout",setup(g){const m=T(),{isLogin:l,isAdmin:k,cart:S,avatar:q}=P(m),{logout:M}=m,v=O(),A=I(!1);return(se,w)=>{const _=Q("router-link"),N=Q("router-view");return r(),n(j,{class:"bg-white"},{default:t(()=>[e(J,{elevated:"",class:"text-white",style:{background:"$primary"},"height-hint":"61.59"},{default:t(()=>[e(E,{class:"q-py-sm q-px-md"},{"no-option":t(()=>[e(d,null,{default:t(()=>[e(o,null,{default:t(()=>[c("div",Z,[e(Y,{color:"grey-5",size:"24px"})])]),_:1})]),_:1})]),default:t(()=>[e(f,{round:"",dense:"",flat:"",ripple:!1,size:"19px",color:"white",class:"q-mr-sm","no-caps":"",to:"/"},{default:t(()=>[e(B,{src:H,width:"48px",class:"logo"})]),_:1}),X,a(v).screen.gt.sm?(r(),R("div",ee,[e(_,{to:"/tickets/"},{default:t(()=>[i(" \u666F\u9EDE\u7968\u5238 ")]),_:1}),e(_,{to:"/map/"},{default:t(()=>[i(" \u5730\u5716\u5FEB\u641C ")]),_:1}),e(_,{to:"/guides/"},{default:t(()=>[i(" \u5E38\u898BQA ")]),_:1}),te])):u("",!0),e(W),c("div",ae,[a(v).screen.gt.xs?(r(),n(f,{key:0,outline:"",flat:""},{default:t(()=>[c("div",re,[a(l)?(r(),n(p,{key:0,name:"fa-solid fa-cart-shopping",size:"20px"})):u("",!0),a(l)?(r(),n($,{key:1,label:a(S),color:"red",floating:"",transparent:""},null,8,["label"])):u("",!0),a(l)?(r(),n(p,{key:2,name:"arrow_drop_down",size:"16px"})):u("",!0),e(b,{"auto-close":""},{default:t(()=>[e(L,{dense:"",style:{"min-width":"100px"}},{default:t(()=>[e(d,{clickable:"",class:"GL__menu-link",to:"/cart"},{default:t(()=>[e(o,null,{default:t(()=>[i("\u6211\u7684\u8CFC\u7269\u8ECA")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})):u("",!0),e(f,{dense:"",flat:"","no-wrap":""},{default:t(()=>[e(V,{rounded:"",size:"36px"},{default:t(()=>[c("img",{src:a(q)},null,8,oe)]),_:1}),e(p,{name:"arrow_drop_down",size:"16px"}),e(b,{"auto-close":""},{default:t(()=>[e(L,{dense:""},{default:t(()=>[e(d,{class:"GL__menu-link-signed-in"},{default:t(()=>[e(o,null,{default:t(()=>[c("div",null,[i("\u76EE\u524D\u767B\u5165\uFF1A "),c("strong",null,D(a(m).account),1)])]),_:1})]),_:1}),e(x),a(l)?u("",!0):(r(),n(d,{key:0,clickable:"",class:"GL__menu-link",label:"Prompt",color:"primary",to:"/login",onClick:w[0]||(w[0]=le=>A.value=!0)},{default:t(()=>[e(o,null,{default:t(()=>[i(" \u6703\u54E1\u767B\u5165 ")]),_:1})]),_:1})),a(l)&&a(k)?h((r(),n(d,{key:1,clickable:"",class:"GL__menu-link",to:"/admin"},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(p,{color:"primary",name:"fa-solid fa-gear"})]),_:1}),e(o,null,{default:t(()=>[i("\u5F8C\u53F0\u7BA1\u7406")]),_:1})]),_:1})),[[y]]):u("",!0),a(l)&&!a(k)?h((r(),n(d,{key:2,clickable:"",class:"GL__menu-link",to:"/user"},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(p,{color:"primary",name:"assignment_ind"})]),_:1}),e(o,null,{default:t(()=>[i("\u6211\u7684\u6A94\u6848")]),_:1})]),_:1})),[[y]]):u("",!0),e(x),a(l)?h((r(),n(d,{key:3,clickable:"",class:"GL__menu-link",onClick:a(M)},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(p,{color:"primary",name:"fa-solid fa-arrow-right-from-bracket"})]),_:1}),e(o,null,{default:t(()=>[i("\u767B\u51FA")]),_:1})]),_:1},8,["onClick"])),[[y]]):u("",!0)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),e(K,{style:{"padding-top":"0"}},{default:t(()=>[e(N)]),_:1})]),_:1})}}};export{ge as default};
