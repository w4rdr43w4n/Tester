(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{8647:function(e,s,t){Promise.resolve().then(t.bind(t,7102))},7102:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var n=t(7437);t(3107);var a=t(2265);t(8906);var r=t(2126);function i(e){let{notify:s}=e,[t,i]=(0,a.useState)({username:"",password:""}),c=e=>{let{name:s,value:t}=e.target;i(e=>({...e,[s]:[t]}))},l=async e=>{e.preventDefault();try{let e=await r.Z.post("/api/newEntry",{username:t.username.toString(),password:t.password.toString()});s(e.data.msg)}catch(e){console.log(e.message)}};return(0,n.jsxs)("form",{method:"POST",onSubmit:l,children:[(0,n.jsx)("h5",{children:"Database Entry"}),(0,n.jsx)("label",{htmlFor:"username",children:"Username"}),(0,n.jsx)("input",{type:"text",name:"username",placeholder:"username",onChange:c,value:t.username,required:!0}),(0,n.jsx)("label",{htmlFor:"password",children:"Passowrd"}),(0,n.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:c,value:t.password,required:!0}),(0,n.jsx)("button",{type:"submit",children:"Submit"})]})}function c(e){let{message:s,setDisplay:t}=e;return setTimeout(()=>t(!1),2e4),(0,n.jsxs)("div",{id:"box",className:"notif-box",children:[(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:()=>t(!1),children:"\xd7"})}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:s})})]})}function l(){let[e,s]=(0,a.useState)(!1),[t,r]=(0,a.useState)(!0),[l,o]=(0,a.useState)(!1),[u,d]=(0,a.useState)("");function m(e,s){let t=document.getElementsByClassName("tab");for(let e=0;e<t.length;e++)t[e].className=t[e].className.replace(" active","");switch(e.currentTarget.className+=" active",s){case 0:r(!0),o(!1);break;case 1:o(!0),r(!1)}}return(0,n.jsxs)("section",{className:"db-root-container",children:[(0,n.jsxs)("section",{className:"nav-menu",children:[(0,n.jsx)("h3",{children:"Database Management"}),(0,n.jsx)("button",{className:"tab active",onClick:e=>m(e,0),children:"New Entry"}),(0,n.jsx)("button",{className:"tab",onClick:e=>m(e,1),children:"All entries"})]}),(0,n.jsx)("section",{className:"db-main",children:t&&(0,n.jsx)(i,{notify:function(e){s(!0),d(e)}})}),(0,n.jsx)("section",{className:"db-notif",children:e&&(0,n.jsx)(c,{message:u,setDisplay:s})})]})}},3107:function(){},8906:function(){}},function(e){e.O(0,[221,126,971,23,744],function(){return e(e.s=8647)}),_N_E=e.O()}]);