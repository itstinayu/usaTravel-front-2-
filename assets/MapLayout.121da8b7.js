import{bH as q,j as m,H as f,I as t,d as e,J as a,aU as L,K as p,N as o,l as u,L as x,q as C,aD as N,Q as h,aE as T,r as y,D as V,E as B,c as I,G as A,k as D,aK as H,F as $}from"./index.78eb2a62.js";import{Q as k}from"./QImg.cd8f8e7b.js";import{a as E,Q as P}from"./QToolbarTitle.ad0ab670.js";import{Q as U}from"./QToolbar.3cd962e9.js";import{Q as F,a as K,b as M}from"./QLayout.5e0fbc3d.js";import{Q as j}from"./QItem.6e9922db.js";import{Q as S}from"./QList.bf1b17b7.js";import{Q as z,a as G}from"./QDrawer.184a39aa.js";import{_ as J}from"./statue-of-liberty.0ebc6243.js";import{u as O}from"./map.3e40f839.js";import{Q as c}from"./QItemLabel.16974f78.js";import"./QResizeObserver.077481cb.js";import"./TouchPan.348ef072.js";import"./format.3e32b8d9.js";const W={class:"q-mt-md"},X={__name:"PlaceCard",props:{name:String,photo:String,rating:Number,numReviews:Number,address:String,web_url:String},setup(g){const l=g,{name:n,photo:_,rating:w,numReviews:Q,address:d}=q(l),b=()=>{window.open("https://www.tripadvisor.com/")},i=r=>{window.open(r)};return(r,v)=>(m(),f(T,null,{default:t(()=>[e(k,{src:a(_),alt:a(_),style:{height:"100px"}},null,8,["src","alt"]),e(L,null,{default:t(()=>[e(c,{header:"",class:"text-h5"},{default:t(()=>[p(o(a(n)),1)]),_:1}),u("div",W,[e(c,{caption:""},{default:t(()=>[e(x,{name:"remove_red_eye",class:"q-mr-sm"}),p(" "+o(a(Q))+" \u700F\u89BD\u6B21\u6578 ",1)]),_:1})]),e(c,null,{default:t(()=>[a(d)?(m(),f(c,{key:0,caption:""},{default:t(()=>[e(x,{name:"star",class:"q-mr-sm"}),p(" "+o(a(w))+" \u8A55\u5206 ",1)]),_:1})):C("",!0),a(d)?(m(),f(c,{key:1,caption:""},{default:t(()=>[e(x,{name:"location_on",class:"q-mr-sm"}),p(" "+o(a(d)),1)]),_:1})):C("",!0)]),_:1})]),_:1}),e(N,{align:"center"},{default:t(()=>[e(h,{label:"Trip Advisor",color:"primary",onClick:b}),e(h,{label:"Review",color:"accent",onClick:v[0]||(v[0]=s=>i(g.web_url))})]),_:1})]),_:1}))}},Y=u("h6",{align:"center"},"\u5730\u9EDE\u8A55\u50F9\u63A2\u7D22",-1),Z={class:"absolute-bottom bg-transparent",clickable:""},ee=["title"],_e={__name:"MapLayout",setup(g){const l=y(!1),n=V(),{account:_}=B(n),w=O(),Q=y("restaurants"),d=y(0),b=I(()=>w.locations[Q.value].filter(i=>d.value===0?!0:(i==null?void 0:i[4])>=d.value));return(i,r)=>{const v=A("router-view");return m(),f(F,{view:"hHh Lpr lff",container:"",style:{height:"1080px"},class:"overflow-hidden shadow-2 rounded-borders"},{default:t(()=>[e(K,{elevated:"",class:"primary"},{default:t(()=>[e(U,null,{default:t(()=>[e(h,{flat:"",onClick:r[0]||(r[0]=s=>l.value=!l.value),round:"",dense:"",icon:"menu"}),e(h,{round:"",dense:"",flat:"",ripple:!1,size:"19px",color:"white",class:"q-mr-sm","no-caps":"",to:"/"},{default:t(()=>[e(k,{src:J,width:"48px",class:"logo"})]),_:1}),e(E,null,{default:t(()=>[p(o(a(n).account)+"\u7684\u5730\u5716\u5FEB\u641C",1)]),_:1})]),_:1})]),_:1}),e(G,{modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=s=>l.value=s),"show-if-above":"",width:300,breakpoint:400},{default:t(()=>[e(z,{style:{height:"calc(100% - 150px)","margin-top":"100px","border-right":"1px solid #ddd"}},{default:t(()=>[e(S,{padding:""},{default:t(()=>[Y,e(S,{bordered:"",class:"q-my-md"},{default:t(()=>[(m(!0),D($,null,H(a(b),(s,R)=>(m(),f(j,{key:R},{default:t(()=>[e(X,{name:s[2],photo:s[6],rating:s[4],numReviews:s[5],address:s[3]},null,8,["name","photo","rating","numReviews","address"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(k,{class:"absolute-top",src:"https://picsum.photos/300/200/?random=10",style:{height:"100px"}},{default:t(()=>[u("div",Z,[u("div",{class:"text-weight-bold",title:a(_)},[u("strong",null,o(a(n).account),1)],8,ee),u("div",null,o(a(n).email),1)])]),_:1})]),_:1},8,["modelValue"]),e(M,null,{default:t(()=>[e(P,{padding:""},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1})}}};export{_e as default};