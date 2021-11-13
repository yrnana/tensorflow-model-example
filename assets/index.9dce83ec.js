var E=Object.defineProperty,v=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(r,t,n)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,_=(r,t)=>{for(var n in t||(t={}))j.call(t,n)&&f(r,n,t[n]);if(h)for(var n of h(t))B.call(t,n)&&f(r,n,t[n]);return r},C=(r,t)=>v(r,A(t));import{j as m,O as L,N as g,r as c,B as P,R as O,a as i,s as R,b,c as k}from"./vendor.a4162548.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};z();const I="modulepreload",x={},T="/tensorflow-model-example/",l=function(t,n){return!n||n.length===0?t():Promise.all(n.map(d=>{if(d=`${T}${d}`,d in x)return;x[d]=!0;const o=d.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":I,o||(a.as="script",a.crossOrigin=""),a.href=d,document.head.appendChild(a),o)return new Promise((D,y)=>{a.addEventListener("load",D),a.addEventListener("error",y)})})).then(()=>t())},e=m.exports.jsx,p=m.exports.jsxs,X=m.exports.Fragment,F=()=>e("div",{className:"container mx-auto px-4",children:p("div",{className:"flex flex-col min-h-screen",children:[e("header",{className:"py-4 flex-shrink-0 overflow-x-auto",children:p("nav",{className:"flex items-center space-x-4",children:[e(u,{to:"/",children:"Home"}),e(u,{to:"/object-detection",children:"\uAC1D\uCCB4 \uAC10\uC9C0"}),e(u,{to:"/body-pix",children:"\uC2E0\uCCB4 \uBD84\uC808\uD654"}),e(u,{to:"/pose-detection",children:"\uC790\uC138 \uC778\uC2DD"}),e(u,{to:"/toxicity",children:"\uC545\uC131 \uD14D\uC2A4\uD2B8 \uAC10\uC9C0"}),e(u,{to:"/speech-commands",children:"\uC74C\uC131 \uC778\uC2DD"}),e(u,{to:"/face-detection",children:"\uC5BC\uAD74 \uC778\uC2DD"}),e(u,{to:"/semantic-segmentation",children:"\uC2DC\uB9E8\uD2F1 \uC138\uBD84\uD654"}),e(u,{to:"/face-landmarks-detection",children:"\uC5BC\uAD74 \uB79C\uB4DC\uB9C8\uD06C \uAC10\uC9C0"}),e(u,{to:"/hand-pose",children:"\uC190 \uBAA8\uC591 \uC778\uC2DD"}),e(u,{to:"/qna",children:"\uC790\uC5F0\uC5B4 \uC9C8\uBB38 \uB2F5\uBCC0"})]})}),e("div",{className:"flex-grow",children:e(L,{})})]})}),u=r=>e(g,C(_({},r),{className:({isActive:t})=>t?"text-purple-500 flex-shrink-0":"text-gray-500 flex-shrink-0"})),N=c.exports.lazy(()=>l(()=>import("./BodyPix.fa4fc3e9.js"),["assets/BodyPix.fa4fc3e9.js","assets/vendor.a4162548.js"])),S=c.exports.lazy(()=>l(()=>import("./FaceDetection.f58e71c1.js"),["assets/FaceDetection.f58e71c1.js","assets/vendor.a4162548.js","assets/graph_model.6c4c3382.js","assets/canvas.fb29c340.js"])),V=c.exports.lazy(()=>l(()=>import("./FaceLandmarksDetection.97a8c838.js"),["assets/FaceLandmarksDetection.97a8c838.js","assets/vendor.a4162548.js","assets/graph_model.6c4c3382.js","assets/canvas.fb29c340.js"])),w=c.exports.lazy(()=>l(()=>import("./HandPose.485fbcfc.js"),["assets/HandPose.485fbcfc.js","assets/vendor.a4162548.js","assets/graph_model.6c4c3382.js","assets/canvas.fb29c340.js"])),H=c.exports.lazy(()=>l(()=>import("./Home.4a07776d.js"),["assets/Home.4a07776d.js","assets/vendor.a4162548.js"])),q=c.exports.lazy(()=>l(()=>import("./ObjectDetection.13b245f0.js"),["assets/ObjectDetection.13b245f0.js","assets/vendor.a4162548.js","assets/graph_model.6c4c3382.js"])),$=c.exports.lazy(()=>l(()=>import("./PoseDetection.81b8d7c6.js"),["assets/PoseDetection.81b8d7c6.js","assets/vendor.a4162548.js"])),M=c.exports.lazy(()=>l(()=>import("./QnA.cef240e1.js"),["assets/QnA.cef240e1.js","assets/vendor.a4162548.js"])),Q=c.exports.lazy(()=>l(()=>import("./SemanticSegmentation.a9284483.js"),["assets/SemanticSegmentation.a9284483.js","assets/vendor.a4162548.js"])),K=c.exports.lazy(()=>l(()=>import("./SpeechCommandRecognizer.9e2e093c.js"),["assets/SpeechCommandRecognizer.9e2e093c.js","assets/vendor.a4162548.js"])),W=c.exports.lazy(()=>l(()=>import("./Toxicity.c5b31f78.js"),["assets/Toxicity.c5b31f78.js","assets/vendor.a4162548.js"]));function G(){return e(c.exports.Suspense,{fallback:null,children:e(P,{children:e(O,{children:p(i,{path:"/",element:e(F,{}),children:[e(i,{index:!0,element:e(H,{})}),e(i,{path:"object-detection",element:e(q,{})}),e(i,{path:"body-pix",element:e(N,{})}),e(i,{path:"pose-detection",element:e($,{})}),e(i,{path:"toxicity",element:e(W,{})}),e(i,{path:"speech-commands",element:e(K,{})}),e(i,{path:"face-detection",element:e(S,{})}),e(i,{path:"semantic-segmentation",element:e(Q,{})}),e(i,{path:"face-landmarks-detection",element:e(V,{})}),e(i,{path:"hand-pose",element:e(w,{})}),e(i,{path:"qna",element:e(M,{})})]})})})})}R("webgl").then(()=>{b.render(e(k.StrictMode,{children:e(G,{})}),document.getElementById("root"))});export{X as F,p as a,e as j};
//# sourceMappingURL=index.9dce83ec.js.map