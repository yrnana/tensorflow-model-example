import{x as Vt,y as Lt,z as Ft,A as Ct,C as Pt,D as jt,E as Rt,h as xt,F as Bt,G as Ht,e as qt,m as Wt,H as Gt,I as Ut,o as Kt,J as Qt,K as Xt,L as Yt,M as lt,P as Zt,Q as Jt,S as Mt,U as te,V as ee,W as ae,X as se,Y as re,Z as ne,_ as ie,$ as pe,n as ue,a0 as me,a1 as oe,a2 as le,a3 as ye,a4 as ce,a5 as de,a6 as he,a7 as fe,a8 as ge,a9 as Ne,aa as be,ab as Te,ac as Se,ad as _e,ae as Oe,af as we,ag as Ae,ah as Ie,ai as Ee,aj as ve,ak as ke,al as De,am as $e,an as ze,ao as Ve,ap as Le,aq as F,ar as E,as as D,at as x,au as C,v as U,av as P,g as b,w,f as K,aw as Fe,ax as Ce,ay as Pe,az as je,aA as Re,aB as xe,aC as Be,aD as He,aE as qe,aF as We,aG as Ge,aH as Ue,aI as Ke,aJ as Qe,aK as Xe,aL as Ye,aM as Ze,aN as Je,aO as Me,aP as ta,aQ as ea,aR as aa,aS as sa,aT as ra,aU as na,u as j,aV as ia,i as z,aW as yt,aX as pa,d as ct,aY as ua,aZ as ma,a_ as oa,a$ as la,b0 as ya,b1 as ca,b2 as da,b3 as ha,b4 as fa,b5 as ga,b6 as Na,b7 as ba,b8 as Ta,b9 as Sa,ba as dt,bb as _a,bc as Oa,bd as wa,be as ht,bf as Aa,bg as Ia,bh as Ea,bi as va,bj as ka,bk as Da,bl as $a,bm as za,bn as Va,bo as La,bp as Fa,bq as Ca,br as Pa,bs as ja,bt as Ra,k as Q,bu as ft,bv as xa,bw as gt,bx as Nt,by as B,bz as Ba,bA as Ha,bB as qa,bC as Wa,bD as X,bE as Ga,bF as Ua,bG as Ka,bH as Qa,bI as Xa,bJ as Ya,bK as Za,q as Ja,bL as Y,bM as bt,bN as Ma,bO as ts,bP as es,T as as}from"./vendor.a4162548.js";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var A;(function(a){a[a.DT_INVALID=0]="DT_INVALID",a[a.DT_FLOAT=1]="DT_FLOAT",a[a.DT_DOUBLE=2]="DT_DOUBLE",a[a.DT_INT32=3]="DT_INT32",a[a.DT_UINT8=4]="DT_UINT8",a[a.DT_INT16=5]="DT_INT16",a[a.DT_INT8=6]="DT_INT8",a[a.DT_STRING=7]="DT_STRING",a[a.DT_COMPLEX64=8]="DT_COMPLEX64",a[a.DT_INT64=9]="DT_INT64",a[a.DT_BOOL=10]="DT_BOOL",a[a.DT_QINT8=11]="DT_QINT8",a[a.DT_QUINT8=12]="DT_QUINT8",a[a.DT_QINT32=13]="DT_QINT32",a[a.DT_BFLOAT16=14]="DT_BFLOAT16",a[a.DT_FLOAT_REF=101]="DT_FLOAT_REF",a[a.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",a[a.DT_INT32_REF=103]="DT_INT32_REF",a[a.DT_UINT8_REF=104]="DT_UINT8_REF",a[a.DT_INT16_REF=105]="DT_INT16_REF",a[a.DT_INT8_REF=106]="DT_INT8_REF",a[a.DT_STRING_REF=107]="DT_STRING_REF",a[a.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",a[a.DT_INT64_REF=109]="DT_INT64_REF",a[a.DT_BOOL_REF=110]="DT_BOOL_REF",a[a.DT_QINT8_REF=111]="DT_QINT8_REF",a[a.DT_QUINT8_REF=112]="DT_QUINT8_REF",a[a.DT_QINT32_REF=113]="DT_QINT32_REF",a[a.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF"})(A||(A={}));var Tt;(function(a){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(a.CheckpointFormatVersion||(a.CheckpointFormatVersion={}))})(Tt||(Tt={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z={};function Ir(a,t){const e={tfOpName:a,category:"custom",inputs:[],attrs:[],customExecutor:t};Z[a]=e}function St(a){return Z[a]}function Er(a){delete Z[a]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r(a,t,e,s,i){const n=t.inputParams[a];if(n&&n.inputIndexStart!==void 0){const u=n.inputIndexStart,m=n.inputIndexEnd===0?void 0:n.inputIndexEnd===void 0?u+1:n.inputIndexEnd;if(n.type==="tensor")return S(t.inputNames[n.inputIndexStart],e,s,i);if(n.type==="tensors")return t.inputNames.slice(u,m).map(c=>S(c,e,s,i));const o=S(t.inputNames.slice(u)[0],e,s,i),l=o.dataSync();return n.type==="number"?l[0]:Vt(o.shape,l)}const p=t.attrParams[a];return p&&p.value}function S(a,t,e,s){const[i,n]=_(a);if(s!=null){const u=s.getHashTableHandleByName(i);if(u!=null)return u}const p=e.currentContextIds.find(u=>!!t[H(i,u)]);return p!==void 0?t[H(i,p)][n]:void 0}function ss(a,t,e){return t[H(a,e.currentContextId)]}function v(a,t){const[e,s,i]=_(a);return[H(e,t&&t.currentContextId),s,i]}function H(a,t){return t?`${a}-${t}`:a}function _(a){const t=a.split(":");if(t.length===1)return[a,0,void 0];const e=t[0],s=t.length===3?t[1]:void 0,i=Number(t[t.length-1]);return[e,i,s]}function q(a,t,e){let s=r("pad",a,t,e);if(s==="explicit"){s=r("explicitPaddings",a,t,e);const i=[[0,0],[0,0],[0,0],[0,0]];for(let n=0;n<4;n++)i[n][0]=s[n*2],i[n][1]=s[n*2+1];return i}return s}function k(a){return a.kept?a:Lt(a)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rs=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var ns=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:rs});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const is=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var ps=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:is});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const us=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]}];var ms=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:us});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const os=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number"}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var ls=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:os});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ys=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var cs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:ys});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ds=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var hs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:ds});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fs=[{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var gs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:fs});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ns=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var bs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:Ns});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ts=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}];var Ss=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:Ts});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _s=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]}];var Os=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:_s});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ws=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var As=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:ws});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Is=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}];var Es=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:Is});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vs=[{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}];var ks=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:vs});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ds=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var $s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:Ds});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zs=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}];var Vs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:zs});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ls=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var Fs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:Ls});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cs=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var Ps=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:Cs});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const js=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var Rs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:js});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xs=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var Bs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",json:xs});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _t{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[ns,ps,ms,ls,cs,hs,gs,bs,Ss,Os,As,Es,ks,$s,Vs,Fs,Ps,Rs,Bs],e=[].concat(...t.map(s=>s.json));this.opMappers=e.reduce((s,i)=>(s[i.tfOpName]=i,s),{})}transformGraph(t,e={}){const s=t.node,i=[],n=[],p=[],u=s.reduce((f,h)=>(f[h.name]=this.mapNode(h),h.op.startsWith("Placeholder")?i.push(f[h.name]):h.op==="Const"?n.push(f[h.name]):(h.input==null||h.input.length===0)&&p.push(f[h.name]),f),{});let m=[];const o=[];let l={},y={};e!=null&&(l=this.mapSignatureEntries(e.inputs),y=this.mapSignatureEntries(e.outputs));const c=Object.keys(u);c.forEach(f=>{const h=u[f];h.inputNames.forEach((T,I)=>{const[N,,G]=v(T),$=u[N];if($.outputs!=null){const L=$.outputs.indexOf(G);if(L!==-1){const zt=`${N}:${L}`;h.inputNames[I]=zt}}h.inputs.push($),$.children.push(h)})}),Object.keys(y).length===0?c.forEach(f=>{const h=u[f];h.children.length===0&&o.push(h)}):Object.keys(y).forEach(f=>{const[h]=v(f),T=u[h];T!=null&&(T.signatureKey=y[f],o.push(T))}),Object.keys(l).length>0?Object.keys(l).forEach(f=>{const[h]=v(f),T=u[h];T&&(T.signatureKey=l[f],m.push(T))}):m=i;let d={};t.library!=null&&t.library.function!=null&&(d=t.library.function.reduce((f,h)=>(f[h.signature.name]=this.mapFunction(h),f),{}));const g={nodes:u,inputs:m,outputs:o,weights:n,placeholders:i,signature:e,functions:d};return p.length>0&&(g.initNodes=p),g}mapSignatureEntries(t){return Object.keys(t||{}).reduce((e,s)=>(e[t[s].name]=s,e),{})}mapNode(t){const e=St(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const s={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map(i=>i.startsWith("^")?i.substr(1):i),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:e.outputs};return e.inputs!=null&&(s.inputParams=e.inputs.reduce((i,n)=>(i[n.name]={type:n.type,inputIndexStart:n.start,inputIndexEnd:n.end},i),{})),e.attrs!=null&&(s.attrParams=e.attrs.reduce((i,n)=>{const p=n.type;let u;switch(n.type){case"string":u=J(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=J(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":u=it(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=it(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":u=tt(t.attr,n.tfName,n.defaultValue||0),u===void 0&&!!n.tfDeprecatedName&&(u=tt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":u=nt(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=nt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":u=M(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=M(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":u=ut(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=ut(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":u=rt(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=rt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":u=pt(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=pt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":u=at(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=at(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":u=st(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=st(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":u=wt(t.attr,n.tfName,n.defaultValue),u===void 0&&!!n.tfDeprecatedName&&(u=wt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${t.op}`)}return i[n.name]={value:u,type:p},i},{})),s}mapFunction(t){const e=t.nodeDef,s=[],i=[];let n={};e!=null&&(n=e.reduce((y,c)=>(y[c.name]=this.mapNode(c),c.op==="Const"&&i.push(y[c.name]),y),{}));const p=[],u=[];t.signature.inputArg.forEach(y=>{const[c]=v(y.name),d={name:c,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:et(y.type),type:"dtype"}},children:[]};d.signatureKey=y.name,p.push(d),n[c]=d}),Object.keys(n).forEach(y=>{const c=n[y];c.inputNames.forEach((d,g)=>{const[f,,h]=v(d),T=n[f];if(T.outputs!=null){const I=T.outputs.indexOf(h);if(I!==-1){const N=`${f}:${I}`;c.inputNames[g]=N}}c.inputs.push(T),T.children.push(c)})});const o=t.ret;t.signature.outputArg.forEach(y=>{const[c,d]=v(o[y.name]),g=n[c];g!=null&&(g.defaultOutput=d,u.push(g))});const l=this.mapArgsToSignature(t);return{nodes:n,inputs:p,outputs:u,weights:i,placeholders:s,signature:l}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((e,s)=>(e[s.name]=this.mapArgToTensorInfo(s),e),{}),outputs:t.signature.outputArg.reduce((e,s)=>(e[s.name]=this.mapArgToTensorInfo(s,t.ret),e),{})}}mapArgToTensorInfo(t,e){let s=t.name;return e!=null&&(s=e[s]),{name:s,dtype:t.type}}}function Hs(a){const t=Ft().global;if(typeof t.atob!="undefined")return t.atob(a);if(typeof Buffer!="undefined")return new Buffer(a,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Ot(a,t){const e=Array.isArray(a)?String.fromCharCode.apply(null,a):Hs(a);return t?e:e.toLowerCase()}function J(a,t,e,s=!1){const i=a[t];return i!=null?Ot(i.s,s):e}function M(a,t,e){const s=a[t];return s?s.b:e}function tt(a,t,e){const s=a[t]||{},i=s.i!=null?s.i:s.f!=null?s.f:e;return typeof i=="number"?i:parseInt(i,10)}function et(a){switch(typeof a=="string"&&(a=A[a]),a){case A.DT_FLOAT:return"float32";case A.DT_INT32:case A.DT_INT64:case A.DT_INT8:case A.DT_UINT8:return"int32";case A.DT_BOOL:return"bool";case A.DT_DOUBLE:return"float32";case A.DT_STRING:return"string";default:return null}}function wt(a,t,e){const s=a[t];return s&&s.func?s.func.name:e}function at(a,t,e){const s=a[t];return s&&s.type?et(s.type):e}function st(a,t,e){const s=a[t];return s&&s.list&&s.list.type?s.list.type.map(i=>et(i)):e}function At(a){if(!a.unknownRank)return a.dim!=null?a.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function rt(a,t,e){const s=a[t];return s&&s.shape?At(s.shape):e}function nt(a,t,e){const s=a[t];return s?((s.list.f&&s.list.f.length?s.list.f:s.list.i)||[]).map(i=>typeof i=="number"?i:parseInt(i,10)):e}function it(a,t,e,s=!1){const i=a[t];return i&&i.list&&i.list.s?i.list.s.map(n=>Ot(n,s)):e}function pt(a,t,e){const s=a[t];return s&&s.list&&s.list.shape?s.list.shape.map(i=>At(i)):e}function ut(a,t,e){const s=a[t];return s&&s.list&&s.list.b?s.list.b:e}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qs{constructor(t,e,s){this.node=t,this.tensorMap=e,this.context=s,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(i=>this.getInput(i)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((i,n)=>(i[n]=this.getAttr(n),i),{}))}getInput(t){return S(t,this.tensorMap,this.context)}getAttr(t,e){const s=this.node.rawAttrs[t];if(s.tensor!=null)return S(t,this.tensorMap,this.context);if(s.i!=null||s.f!=null)return tt(this.node.rawAttrs,t,e);if(s.s!=null)return J(this.node.rawAttrs,t,e);if(s.b!=null)return M(this.node.rawAttrs,t,e);if(s.shape!=null)return rt(this.node.rawAttrs,t,e);if(s.type!=null)return at(this.node.rawAttrs,t,e);if(s.list!=null){if(s.list.i!=null||s.list.f!=null)return nt(this.node.rawAttrs,t,e);if(s.list.s!=null)return it(this.node.rawAttrs,t,e);if(s.list.shape!=null)return pt(this.node.rawAttrs,t,e);if(s.list.b!=null)return ut(this.node.rawAttrs,t,e);if(s.list.type!=null)return st(this.node.rawAttrs,t,e)}return e}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ws=(a,t,e)=>{switch(a.op){case"BiasAdd":case"AddV2":case"Add":return[Kt(r("a",a,t,e),r("b",a,t,e))];case"AddN":return[Ut(r("tensors",a,t,e))];case"FloorMod":case"Mod":return[Gt(r("a",a,t,e),r("b",a,t,e))];case"Mul":return[Wt(r("a",a,t,e),r("b",a,t,e))];case"RealDiv":case"Div":return[qt(r("a",a,t,e),r("b",a,t,e))];case"DivNoNan":return[Ht(r("a",a,t,e),r("b",a,t,e))];case"FloorDiv":return[Bt(r("a",a,t,e),r("b",a,t,e))];case"Sub":return[xt(r("a",a,t,e),r("b",a,t,e))];case"Minimum":return[Rt(r("a",a,t,e),r("b",a,t,e))];case"Maximum":return[jt(r("a",a,t,e),r("b",a,t,e))];case"Pow":return[Pt(r("a",a,t,e),r("b",a,t,e))];case"SquaredDifference":return[Ct(r("a",a,t,e),r("b",a,t,e))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gs=(a,t,e)=>{switch(a.op){case"Abs":case"ComplexAbs":return[Le(r("x",a,t,e))];case"Acos":return[Ve(r("x",a,t,e))];case"Acosh":return[ze(r("x",a,t,e))];case"Asin":return[$e(r("x",a,t,e))];case"Asinh":return[De(r("x",a,t,e))];case"Atan":return[ke(r("x",a,t,e))];case"Atan2":return[ve(r("x",a,t,e),r("y",a,t,e))];case"Atanh":return[Ee(r("x",a,t,e))];case"Ceil":return[Ie(r("x",a,t,e))];case"Complex":return[Ae(r("real",a,t,e),r("imag",a,t,e))];case"Cos":return[we(r("x",a,t,e))];case"Cosh":return[Oe(r("x",a,t,e))];case"Elu":return[_e(r("x",a,t,e))];case"Erf":return[Se(r("x",a,t,e))];case"Exp":return[Te(r("x",a,t,e))];case"Expm1":return[be(r("x",a,t,e))];case"Floor":return[Ne(r("x",a,t,e))];case"Log":return[ge(r("x",a,t,e))];case"Log1p":return[fe(r("x",a,t,e))];case"Imag":return[he(r("x",a,t,e))];case"Neg":return[de(r("x",a,t,e))];case"Reciprocal":return[ce(r("x",a,t,e))];case"Real":return[ye(r("x",a,t,e))];case"Relu":return[le(r("x",a,t,e))];case"Round":return[oe(r("x",a,t,e))];case"Selu":return[me(r("x",a,t,e))];case"Sigmoid":return[ue(r("x",a,t,e))];case"Sin":return[pe(r("x",a,t,e))];case"Sign":return[ie(r("x",a,t,e))];case"Sinh":return[ne(r("x",a,t,e))];case"Softplus":return[re(r("x",a,t,e))];case"Sqrt":return[se(r("x",a,t,e))];case"Square":return[ae(r("x",a,t,e))];case"Tanh":return[ee(r("x",a,t,e))];case"Tan":return[te(r("x",a,t,e))];case"ClipByValue":return[Mt(r("x",a,t,e),r("clipValueMin",a,t,e),r("clipValueMax",a,t,e))];case"Relu6":return[Jt(r("x",a,t,e))];case"Rsqrt":return[Zt(S(a.inputNames[0],t,e))];case"Prod":return[lt(r("x",a,t,e),r("axes",a,t,e))];case"LeakyRelu":return[Yt(r("x",a,t,e),r("alpha",a,t,e))];case"Prelu":return[Xt(r("x",a,t,e),r("alpha",a,t,e))];case"IsNan":return[Qt(S(a.inputNames[0],t,e))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O(a,t,e=""){if(!(typeof a=="number"||typeof t=="number")){F(a.length===t.length,()=>e+` Shapes ${a} and ${t} must match`);for(let s=0;s<a.length;s++){const i=a[s],n=t[s];F(i<0||n<0||i===n,()=>e+` Shapes ${a} and ${t} must match`)}}}function It(a){return!(typeof a=="number"||a.some(t=>t<0))}function R(a,t,e){let s=mt(a,e);const i=!It(s);if(i&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${s}`);if(i&&t.forEach(n=>{s=mt(n.shape,s)}),!It(s))throw new Error(`Non-fully-defined elementShape: ${s}`);return s}function mt(a,t){if(typeof a=="number")return t;if(typeof t=="number")return a;if(a.length!==t.length)throw new Error(`Incompatible ranks during merge: ${a} vs. ${t}`);const e=[];for(let s=0;s<a.length;++s){const i=a[s],n=t[s];if(i>=0&&n>=0&&i!==n)throw new Error(`Incompatible shape during merge: ${a} vs. ${t}`);e[s]=i>=0?i:n}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Us{constructor(t,e,s,i,n,p,u){this.name=t,this.dtype=e,this.maxSize=s,this.elementShape=i,this.identicalElementShapes=n,this.dynamicSize=p,this.clearAfterRead=u,this.tensors=[],this.closed_=!1,this.idTensor=E(0),D(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.tensor.id))&&e.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map(e=>this.read(e))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const s=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=e.shape),O(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),s.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(s.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);s.tensor=e,D(e),s.written=!0,this.tensors[t]=s}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach((s,i)=>this.write(s,e[i]))}gather(t,e){if(!!e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let i=0;i<this.size();i++)t.push(i)}if(t.length===0)return x([],[0].concat(this.elementShape));const s=this.readMany(t);return O(this.elementShape,s[0].shape,"TensorArray shape mismatch: "),C(s,0)}concat(t){if(!!t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return x([],[0].concat(this.elementShape));const e=[];for(let i=0;i<this.size();i++)e.push(i);const s=this.readMany(e);return O(this.elementShape,s[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${s[0].shape})`),U(s,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const s=Math.max(...t);if(!this.dynamicSize&&s>=this.maxSize)throw new Error(`Max index must be < array size (${s}  vs. ${this.maxSize})`);this.writeMany(t,P(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let s=0;const i=t.map(m=>(s+=m,s));if(s!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const n=s===0?0:e.size/s,p=[];b(()=>{e=w(e,[1,s,n]);for(let m=0;m<t.length;++m){const o=m===0?0:i[m-1],l=[0,o,0],y=[1,t[m],n];p[m]=w(K(e,l,y),this.elementShape)}return p});const u=[];for(let m=0;m<t.length;m++)u[m]=m;this.writeMany(u,p)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class V{constructor(t,e,s,i=-1){this.tensors=t,this.elementShape=e,this.elementDtype=s,t!=null&&t.forEach(n=>{if(s!==n.dtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${n.dtype}`);O(e,n.shape,"TensorList shape mismatch: "),D(n)}),this.idTensor=E(0),this.maxNumElements=i,D(this.idTensor)}get id(){return this.idTensor.id}copy(){return new V([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.id))&&e.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,s=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(s!==-1&&this.tensors.length!==s)throw new Error(`Operation expected a list with ${s} elements but got a list with ${this.tensors.length} elements.`);O(t,this.elementShape,"TensorList shape mismatch: ");const i=R(this.elementShape,this.tensors,t);return b(()=>{const n=this.tensors.map(p=>w(p,i));return C(n,0)})}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const s=R(this.elementShape,this.tensors,t),i=this.tensors.pop();return O(i.shape,t,"TensorList shape mismatch: "),w(i,s)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(O(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");D(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);this.tensors.length=t}getItem(t,e,s){if(s!==this.elementDtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);O(this.tensors[t].shape,e,"TensorList shape mismatch: ");const i=R(this.elementShape,this.tensors,e);return w(this.tensors[t],i)}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);O(this.elementShape,e.shape,"TensorList shape mismatch: "),D(e),this.tensors[t]=e}gather(t,e,s){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);O(this.elementShape,s,"TensorList shape mismatch: "),t=t.slice(0,this.size());const i=R(this.elementShape,this.tensors,s);return t.length===0?x([],[0].concat(i)):b(()=>{const n=t.map(p=>w(this.tensors[p],i));return C(n,0)})}concat(t,e){if(!!t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);O(this.elementShape,e,"TensorList shape mismatch: ");const s=R(this.elementShape,this.tensors,e);return this.size()===0?x([],[0].concat(s)):b(()=>{const i=this.tensors.map(n=>w(n,s));return U(i,0)})}}function Ks(a,t,e){const s=a.dtype;if(a.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${a.shape}`);if(a.dtype!==e)throw new Error(`Invalid data types; op elements ${a.dtype}, but list elements ${e}`);const i=a.shape.slice(1);O(i,t,"TensorList shape mismatch: ");const n=P(a);return new V(n,t,s)}function Qs(a,t,e){return new V([],a,t,e)}function Xs(a,t,e,s){if(t.length!==a.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${a.shape[0]}`);const i=Math.max(...t);if(s!=null&&s!==-1&&i>=s)throw new Error(`Max index must be < array size (${i}  vs. ${s})`);const n=new V([],e,a.dtype,s),p=P(a,0);return t.forEach((u,m)=>{n.setItem(u,p[m])}),n}function Ys(a,t,e){let s=0;const i=t.map(l=>(s+=l,s));if(s!==a.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${a.shape}`);const n=a.shape.slice(1),p=mt(n,e),u=s===0?0:a.size/s,m=b(()=>{const l=[];a=w(a,[1,s,u]);for(let y=0;y<t.length;++y){const c=y===0?0:i[y-1],d=[0,c,0],g=[1,t[y],u];l[y]=w(K(a,d,g),p)}return a.dispose(),l}),o=new V([],e,a.dtype,t.length);for(let l=0;l<m.length;l++)o.setItem(l,m[l]);return o}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zs=async(a,t,e)=>{switch(a.op){case"If":case"StatelessIf":{const s=r("thenBranch",a,t,e),i=r("elseBranch",a,t,e),n=r("cond",a,t,e),p=r("args",a,t,e);return(await n.data())[0]?e.functionMap[s].executeFunctionAsync(p,e.tensorArrayMap,e.tensorListMap):e.functionMap[i].executeFunctionAsync(p,e.tensorArrayMap,e.tensorListMap)}case"While":case"StatelessWhile":{const s=r("body",a,t,e),i=r("cond",a,t,e),n=r("args",a,t,e),p=await e.functionMap[i].executeFunctionAsync(n,e.tensorArrayMap,e.tensorListMap),u=n.map(l=>l.id);let m=await p[0].data();p.forEach(l=>{!l.kept&&u.indexOf(l.id)===-1&&l.dispose()});let o=n;for(;m[0];){const l=o;o=await e.functionMap[s].executeFunctionAsync(o,e.tensorArrayMap,e.tensorListMap);const y=o.map(d=>d.id);l.forEach(d=>{!d.kept&&u.indexOf(d.id)===-1&&y.indexOf(d.id)===-1&&d.dispose()});const c=await e.functionMap[i].executeFunctionAsync(o,e.tensorArrayMap,e.tensorListMap);m=await c[0].data(),c.forEach(d=>{!d.kept&&u.indexOf(d.id)===-1&&y.indexOf(d.id)===-1&&d.dispose()})}return o}case"LoopCond":{const s=r("pred",a,t,e);return[k(s)]}case"Switch":{const s=r("pred",a,t,e);let i=r("data",a,t,e);return i.kept||(i=k(i)),(await s.data())[0]?[void 0,i]:[i,void 0]}case"Merge":{const s=a.inputNames.find(i=>S(i,t,e)!==void 0);if(s){const i=S(s,t,e);return[k(i)]}return}case"Enter":{const s=r("frameName",a,t,e),i=r("tensor",a,t,e);return e.enterFrame(s),[k(i)]}case"Exit":{const s=r("tensor",a,t,e);return e.exitFrame(),[k(s)]}case"NextIteration":{const s=r("tensor",a,t,e);return e.nextIteration(),[k(s)]}case"TensorArrayV3":{const s=r("size",a,t,e),i=r("dtype",a,t,e),n=r("elementShape",a,t,e),p=r("dynamicSize",a,t,e),u=r("clearAfterRead",a,t,e),m=r("identicalElementShapes",a,t,e),o=r("name",a,t,e),l=new Us(o,i,s,n,m,p,u);return e.addTensorArray(l),[l.idTensor,E(1)]}case"TensorArrayWriteV3":{const s=r("tensorArrayId",a,t,e),i=r("index",a,t,e),n=r("tensor",a,t,e),p=e.getTensorArray(s.id);return p.write(i,n),[p.idTensor]}case"TensorArrayReadV3":{const s=r("tensorArrayId",a,t,e),i=r("index",a,t,e);return[e.getTensorArray(s.id).read(i)]}case"TensorArrayGatherV3":{const s=r("tensorArrayId",a,t,e),i=r("indices",a,t,e),n=r("dtype",a,t,e);return[e.getTensorArray(s.id).gather(i,n)]}case"TensorArrayScatterV3":{const s=r("tensorArrayId",a,t,e),i=r("indices",a,t,e),n=r("tensor",a,t,e),p=e.getTensorArray(s.id);return p.scatter(i,n),[p.idTensor]}case"TensorArrayConcatV3":{const s=r("tensorArrayId",a,t,e),i=e.getTensorArray(s.id),n=r("dtype",a,t,e);return[i.concat(n)]}case"TensorArraySplitV3":{const s=r("tensorArrayId",a,t,e),i=r("tensor",a,t,e),n=r("lengths",a,t,e),p=e.getTensorArray(s.id);return p.split(n,i),[p.idTensor]}case"TensorArraySizeV3":{const s=r("tensorArrayId",a,t,e),i=e.getTensorArray(s.id);return[E(i.size(),"int32")]}case"TensorArrayCloseV3":{const s=r("tensorArrayId",a,t,e),i=e.getTensorArray(s.id);return i.clearAndClose(),[i.idTensor]}case"TensorListSetItem":{const s=r("tensorListId",a,t,e),i=r("index",a,t,e),n=r("tensor",a,t,e),p=e.getTensorList(s.id);return p.setItem(i,n),[p.idTensor]}case"TensorListGetItem":{const s=r("tensorListId",a,t,e),i=r("index",a,t,e),n=r("elementShape",a,t,e),p=r("elementDType",a,t,e);return[e.getTensorList(s.id).getItem(i,n,p)]}case"TensorListScatterV2":case"TensorListScatter":{const s=r("indices",a,t,e),i=r("tensor",a,t,e),n=r("elementShape",a,t,e),p=r("numElements",a,t,e),u=Xs(i,s,n,p);return e.addTensorList(u),[u.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const s=r("elementShape",a,t,e),i=r("elementDType",a,t,e);let n;a.op==="TensorListReserve"?n="numElements":n="maxNumElements";const p=r(n,a,t,e),u=Qs(s,i,p);return e.addTensorList(u),[u.idTensor]}case"TensorListGather":{const s=r("tensorListId",a,t,e),i=r("indices",a,t,e),n=r("elementShape",a,t,e),p=r("elementDType",a,t,e);return[e.getTensorList(s.id).gather(i,p,n)]}case"TensorListStack":{const s=r("tensorListId",a,t,e),i=r("elementShape",a,t,e),n=r("elementDType",a,t,e),p=r("numElements",a,t,e);return[e.getTensorList(s.id).stack(i,n,p)]}case"TensorListFromTensor":{const s=r("tensor",a,t,e),i=r("elementShape",a,t,e),n=r("elementDType",a,t,e),p=Ks(s,i,n);return e.addTensorList(p),[p.idTensor]}case"TensorListConcat":{const s=r("tensorListId",a,t,e),i=e.getTensorList(s.id),n=r("dtype",a,t,e),p=r("elementShape",a,t,e);return[i.concat(n,p)]}case"TensorListPushBack":{const s=r("tensorListId",a,t,e),i=r("tensor",a,t,e),n=e.getTensorList(s.id);return n.pushBack(i),[n.idTensor]}case"TensorListPopBack":{const s=r("tensorListId",a,t,e),i=r("elementShape",a,t,e),n=r("elementDType",a,t,e);return[e.getTensorList(s.id).popBack(i,n)]}case"TensorListSplit":{const s=r("tensor",a,t,e),i=r("elementShape",a,t,e),n=r("lengths",a,t,e),p=Ys(s,n,i);return e.addTensorList(p),[p.idTensor]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Et(a,t,e){const[s,i]=r("fusedOps",a,t,e),n=s==="biasadd",p=!n,u=i==="prelu",m=s==="fusedbatchnorm",o=r("numArgs",a,t,e);if(n){if(u&&o!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!u&&n&&o!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(m)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const l=r("strides",a,t,e),y=q(a,t,e),c=r("dataFormat",a,t,e).toUpperCase(),d=r("dilations",a,t,e);let[g,f]=r("args",a,t,e);p&&(f=g,g=void 0);const h=r("leakyreluAlpha",a,t,e);return{stride:l,pad:y,dataFormat:c,dilations:d,biasArg:g,preluArg:f,activationFunc:i,leakyreluAlpha:h}}const Js=(a,t,e)=>{switch(a.op){case"Conv1D":{const s=r("stride",a,t,e),i=r("pad",a,t,e),n=r("dataFormat",a,t,e).toUpperCase(),p=r("dilation",a,t,e);return[Ke(r("x",a,t,e),r("filter",a,t,e),s,i,n,p)]}case"Conv2D":{const s=r("strides",a,t,e),i=q(a,t,e),n=r("dataFormat",a,t,e).toUpperCase(),p=r("dilations",a,t,e);return[Ue(r("x",a,t,e),r("filter",a,t,e),[s[1],s[2]],i,n,[p[1],p[2]])]}case"_FusedConv2D":{const{stride:s,pad:i,dataFormat:n,dilations:p,biasArg:u,preluArg:m,activationFunc:o,leakyreluAlpha:l}=Et(a,t,e);return[Ge({x:r("x",a,t,e),filter:r("filter",a,t,e),strides:[s[1],s[2]],pad:i,dataFormat:n,dilations:[p[1],p[2]],bias:u,activation:o,preluActivationWeights:m,leakyreluAlpha:l})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:i,dataFormat:n,dilations:p,biasArg:u,preluArg:m,activationFunc:o,leakyreluAlpha:l}=Et(a,t,e);return[We({x:r("x",a,t,e),filter:r("filter",a,t,e),strides:[s[1],s[2]],pad:i,dataFormat:n,dilations:[p[1],p[2]],bias:u,activation:o,preluActivationWeights:m,leakyreluAlpha:l})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=r("outputShape",a,t,e),i=r("strides",a,t,e),n=q(a,t,e);return[qe(r("x",a,t,e),r("filter",a,t,e),s,[i[1],i[2]],n)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=r("strides",a,t,e),i=q(a,t,e),n=r("dilations",a,t,e),p=r("dataFormat",a,t,e).toUpperCase();return[He(r("input",a,t,e),r("filter",a,t,e),[s[1],s[2]],i,p,[n[1],n[2]])]}case"Conv3D":{const s=r("strides",a,t,e),i=r("pad",a,t,e),n=r("dataFormat",a,t,e).toUpperCase(),p=r("dilations",a,t,e);return[Be(r("x",a,t,e),r("filter",a,t,e),[s[1],s[2],s[3]],i,n,[p[1],p[2],p[3]])]}case"AvgPool":{const s=r("strides",a,t,e),i=r("pad",a,t,e),n=r("kernelSize",a,t,e);return[xe(r("x",a,t,e),[n[1],n[2]],[s[1],s[2]],i)]}case"MaxPool":{const s=r("strides",a,t,e),i=r("pad",a,t,e),n=r("kernelSize",a,t,e);return[Re(r("x",a,t,e),[n[1],n[2]],[s[1],s[2]],i)]}case"MaxPoolWithArgmax":{const s=r("strides",a,t,e),i=r("pad",a,t,e),n=r("kernelSize",a,t,e),p=r("includeBatchInIndex",a,t,e),{result:u,indexes:m}=je(r("x",a,t,e),[n[1],n[2]],[s[1],s[2]],i,p);return[u,m]}case"AvgPool3D":{const s=r("strides",a,t,e),i=r("pad",a,t,e),n=r("kernelSize",a,t,e);return[Pe(r("x",a,t,e),[n[1],n[2],n[3]],[s[1],s[2],s[3]],i)]}case"MaxPool3D":{const s=r("strides",a,t,e),i=r("pad",a,t,e),n=r("kernelSize",a,t,e);return[Ce(r("x",a,t,e),[n[1],n[2],n[3]],[s[1],s[2],s[3]],i)]}case"Dilation2D":{const s=r("strides",a,t,e),i=r("pad",a,t,e),n=r("dilations",a,t,e),p=s[1],u=s[2],m=n[1],o=n[2];return[Fe(r("x",a,t,e),r("filter",a,t,e),[p,u],i,[m,o],"NHWC")]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ms=(a,t,e)=>{switch(a.op){case"Fill":{const s=r("shape",a,t,e),i=r("dtype",a,t,e),n=r("value",a,t,e);return[ra(s,n,i)]}case"LinSpace":{const s=r("start",a,t,e),i=r("stop",a,t,e),n=r("num",a,t,e);return[sa(s,i,n)]}case"Multinomial":{const s=r("logits",a,t,e),i=r("numSamples",a,t,e),n=r("seed",a,t,e);return[aa(s,i,n)]}case"OneHot":{const s=r("indices",a,t,e),i=r("depth",a,t,e),n=r("onValue",a,t,e),p=r("offValue",a,t,e);return[ea(s,i,n,p)]}case"Ones":return[ta(r("shape",a,t,e),r("dtype",a,t,e))];case"OnesLike":return[Me(r("x",a,t,e))];case"RandomUniform":return[Je(r("shape",a,t,e),r("minval",a,t,e),r("maxval",a,t,e),r("dtype",a,t,e))];case"Range":{const s=r("start",a,t,e),i=r("stop",a,t,e),n=r("step",a,t,e);return[Ze(s,i,n,r("dtype",a,t,e))]}case"TruncatedNormal":{const s=r("shape",a,t,e),i=r("mean",a,t,e),n=r("stdDev",a,t,e),p=r("seed",a,t,e);return[Ye(s,i,n,r("dtype",a,t,e),p)]}case"Zeros":return[Xe(r("shape",a,t,e),r("dtype",a,t,e))];case"ZerosLike":return[Qe(r("x",a,t,e))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ot(a,t,e){const s=r("boxes",a,t,e),i=r("scores",a,t,e),n=r("maxOutputSize",a,t,e),p=r("iouThreshold",a,t,e),u=r("scoreThreshold",a,t,e),m=r("softNmsSigma",a,t,e);return{boxes:s,scores:i,maxOutputSize:n,iouThreshold:p,scoreThreshold:u,softNmsSigma:m}}const tr=async(a,t,e)=>{switch(a.op){case"NonMaxSuppressionV5":{const{boxes:s,scores:i,maxOutputSize:n,iouThreshold:p,scoreThreshold:u,softNmsSigma:m}=ot(a,t,e),o=await z.nonMaxSuppressionWithScoreAsync(s,i,n,p,u,m);return[o.selectedIndices,o.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:s,scores:i,maxOutputSize:n,iouThreshold:p,scoreThreshold:u}=ot(a,t,e),m=r("padToMaxOutputSize",a,t,e),o=await z.nonMaxSuppressionPaddedAsync(s,i,n,p,u,m);return[o.selectedIndices,o.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:s,scores:i,maxOutputSize:n,iouThreshold:p,scoreThreshold:u}=ot(a,t,e);return[await z.nonMaxSuppressionAsync(s,i,n,p,u)]}case"Where":{const s=j(r("condition",a,t,e),"bool"),i=[await ia(s)];return s.dispose(),i}case"ListDiff":return na(r("x",a,t,e),r("y",a,t,e));default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const er=(a,t,e)=>{switch(a.op){case"TopKV2":{const s=r("x",a,t,e),i=r("k",a,t,e),n=r("sorted",a,t,e),p=pa(s,i,n);return[p.values,p.indices]}case"Unique":{const s=r("x",a,t,e),i=yt(s);return[i.values,i.indices]}case"UniqueV2":{const s=r("x",a,t,e),i=r("axis",a,t,e),n=yt(s,i);return[n.values,n.indices]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ar=(a,t,e)=>{switch(a.op){case"Const":return t[a.name];case"PlaceholderWithDefault":const s=r("default",a,t,e);return[S(a.name,t,e)||s];case"Placeholder":return[S(a.name,t,e)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const o=r("x",a,t,e);return[k(o)]}case"IdentityN":return r("x",a,t,e).map(o=>k(o));case"Snapshot":const i=r("x",a,t,e);return[k(i)];case"Shape":return[ct(r("x",a,t,e).shape,"int32")];case"ShapeN":return r("x",a,t,e).map(o=>ct(o.shape));case"Size":return[E(r("x",a,t,e).size,"int32")];case"Rank":return[E(r("x",a,t,e).rank,"int32")];case"NoOp":return[E(1)];case"Print":const n=r("x",a,t,e),p=r("data",a,t,e),u=r("message",a,t,e),m=r("summarize",a,t,e);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let o=0;o<p.length;o++)console.log(Array.prototype.slice.call(p[o].dataSync()).slice(0,m));return[n];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sr{constructor(t,e){this.keyDType=t,this.valueDType=e,this.handle=E(0),this.tensorMap=new Map,D(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return E(this.size(),"int32")}async import(t,e){this.checkKeyAndValueTensor(t,e);const s=await t.data();return this.tensorMap.forEach(i=>i.dispose()),this.tensorMap.clear(),b(()=>{const i=P(e),n=s.length,p=i.length;F(n===p,()=>`The number of elements doesn't match, keys has ${n} elements, the values has ${p} elements.`);for(let u=0;u<n;u++){const m=s[u],o=i[u];D(o),this.tensorMap.set(m,o)}return this.handle})}async find(t,e){this.checkKeyAndValueTensor(t,e);const s=await t.data();return b(()=>{const i=[];for(let n=0;n<s.length;n++){const p=s[n],u=this.findWithDefault(p,e);i.push(u)}return C(i)})}findWithDefault(t,e){const s=this.tensorMap.get(t);return s!=null?s:e}checkKeyAndValueTensor(t,e){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(e.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${e.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rr=async(a,t,e,s)=>{switch(a.op){case"HashTable":case"HashTableV2":{const i=r("keyDType",a,t,e),n=r("valueDType",a,t,e),p=new sr(i,n);return s.addHashTable(a.name,p),[p.handle]}case"LookupTableImport":case"LookupTableImportV2":{const i=r("tableHandle",a,t,e,s),n=r("keys",a,t,e),p=r("values",a,t,e);return[await s.getHashTableById(i.id).import(n,p)]}case"LookupTableFind":case"LookupTableFindV2":{const i=r("tableHandle",a,t,e,s),n=r("keys",a,t,e),p=r("defaultValue",a,t,e);return[await s.getHashTableById(i.id).find(n,p)]}case"LookupTableSize":case"LookupTableSizeV2":{const i=r("tableHandle",a,t,e,s);return[s.getHashTableById(i.id).tensorSize()]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nr=(a,t,e)=>{switch(a.op){case"ResizeBilinear":{const s=r("images",a,t,e),i=r("size",a,t,e),n=r("alignCorners",a,t,e),p=r("halfPixelCenters",a,t,e);return[z.resizeBilinear(s,[i[0],i[1]],n,p)]}case"ResizeNearestNeighbor":{const s=r("images",a,t,e),i=r("size",a,t,e),n=r("alignCorners",a,t,e),p=r("halfPixelCenters",a,t,e);return[z.resizeNearestNeighbor(s,[i[0],i[1]],n,p)]}case"CropAndResize":{const s=r("image",a,t,e),i=r("boxes",a,t,e),n=r("boxInd",a,t,e),p=r("cropSize",a,t,e),u=r("method",a,t,e),m=r("extrapolationValue",a,t,e);return[z.cropAndResize(s,i,n,p,u,m)]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ir=(a,t,e)=>{switch(a.op){case"Equal":return[ga(r("a",a,t,e),r("b",a,t,e))];case"NotEqual":return[fa(r("a",a,t,e),r("b",a,t,e))];case"Greater":return[ha(r("a",a,t,e),r("b",a,t,e))];case"GreaterEqual":return[da(r("a",a,t,e),r("b",a,t,e))];case"Less":return[ca(r("a",a,t,e),r("b",a,t,e))];case"LessEqual":return[ya(r("a",a,t,e),r("b",a,t,e))];case"LogicalAnd":return[la(r("a",a,t,e),r("b",a,t,e))];case"LogicalNot":return[oa(r("a",a,t,e))];case"LogicalOr":return[ma(r("a",a,t,e),r("b",a,t,e))];case"Select":case"SelectV2":return[ua(r("condition",a,t,e),r("a",a,t,e),r("b",a,t,e))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pr=(a,t,e)=>{switch(a.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[Sa(r("a",a,t,e),r("b",a,t,e),r("transposeA",a,t,e),r("transposeB",a,t,e))];case"Einsum":return[Ta(r("equation",a,t,e),...r("tensors",a,t,e))];case"Transpose":return[ba(r("x",a,t,e),r("perm",a,t,e))];case"_FusedMatMul":const[s,i]=r("fusedOps",a,t,e),n=s==="biasadd",p=i==="prelu",u=r("numArgs",a,t,e),m=r("leakyreluAlpha",a,t,e);if(n){if(p&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!p&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[o,l]=r("args",a,t,e);return[Na({a:r("a",a,t,e),b:r("b",a,t,e),transposeA:r("transposeA",a,t,e),transposeB:r("transposeB",a,t,e),bias:o,activation:i,preluActivationWeights:l,leakyreluAlpha:m})];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ur=(a,t,e)=>{switch(a.op){case"FusedBatchNorm":case"FusedBatchNormV2":return[ht(r("x",a,t,e),r("mean",a,t,e),r("variance",a,t,e),r("offset",a,t,e),r("scale",a,t,e),r("epsilon",a,t,e))];case"FusedBatchNormV3":return[ht(r("x",a,t,e),r("mean",a,t,e),r("variance",a,t,e),r("offset",a,t,e),r("scale",a,t,e),r("epsilon",a,t,e))];case"LRN":return[wa(r("x",a,t,e),r("radius",a,t,e),r("bias",a,t,e),r("alpha",a,t,e),r("beta",a,t,e))];case"Softmax":return[Oa(r("x",a,t,e))];case"LogSoftmax":return[_a(r("x",a,t,e))];case"SparseToDense":return[dt(r("sparseIndices",a,t,e),r("outputShape",a,t,e),r("sparseValues",a,t,e),r("defaultValue",a,t,e))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mr=(a,t,e)=>{switch(a.op){case"Max":{const p=r("axis",a,t,e),u=r("keepDims",a,t,e);return[Fa(r("x",a,t,e),p,u)]}case"Mean":{const p=r("axis",a,t,e),u=r("keepDims",a,t,e);return[La(r("x",a,t,e),p,u)]}case"Min":{const p=r("axis",a,t,e),u=r("keepDims",a,t,e);return[Va(r("x",a,t,e),p,u)]}case"Sum":{const p=r("axis",a,t,e),u=r("keepDims",a,t,e);return[za(r("x",a,t,e),p,u)]}case"All":{const p=r("axis",a,t,e),u=r("keepDims",a,t,e);return[$a(r("x",a,t,e),p,u)]}case"Any":{const p=r("axis",a,t,e),u=r("keepDims",a,t,e);return[Da(r("x",a,t,e),p,u)]}case"ArgMax":{const p=r("axis",a,t,e);return[ka(r("x",a,t,e),p)]}case"ArgMin":{const p=r("axis",a,t,e);return[va(r("x",a,t,e),p)]}case"Prod":{const p=r("axis",a,t,e),u=r("keepDims",a,t,e);return[lt(r("x",a,t,e),p,u)]}case"Cumsum":{const p=r("axis",a,t,e),u=r("exclusive",a,t,e),m=r("reverse",a,t,e);return[Ea(r("x",a,t,e),p,u,m)]}case"Bincount":const s=r("x",a,t,e),i=r("weights",a,t,e),n=r("size",a,t,e);return[Ia(s,i,n)];case"DenseBincount":{const p=r("x",a,t,e),u=r("weights",a,t,e),m=r("size",a,t,e),o=r("binaryOutput",a,t,e);return[Aa(p,u,m,o)]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const or=(a,t,e)=>{switch(a.op){case"ConcatV2":case"Concat":{const s=r("n",a,t,e),i=r("axis",a,t,e);let n=r("tensors",a,t,e);return n=n.slice(0,s),[U(n,i)]}case"Gather":{const s=r("x",a,t,e),i=r("indices",a,t,e);return[Nt(s,j(i,"int32"),0)]}case"GatherV2":{const s=r("axis",a,t,e),i=r("batchDims",a,t,e),n=r("x",a,t,e),p=r("indices",a,t,e);return[Nt(n,j(p,"int32"),s,i)]}case"Reverse":{const s=r("dims",a,t,e),i=[];for(let p=0;p<s.length;p++)s[p]&&i.push(p);const n=r("x",a,t,e);return[gt(n,i)]}case"ReverseV2":{const s=r("axis",a,t,e),i=r("x",a,t,e);return[gt(i,s)]}case"Slice":{const s=r("begin",a,t,e),i=r("size",a,t,e);return[K(r("x",a,t,e),s,i)]}case"StridedSlice":{const s=r("begin",a,t,e),i=r("end",a,t,e),n=r("strides",a,t,e),p=r("beginMask",a,t,e),u=r("endMask",a,t,e),m=r("ellipsisMask",a,t,e),o=r("newAxisMask",a,t,e),l=r("shrinkAxisMask",a,t,e),y=r("x",a,t,e);return[xa(y,s,i,n,p,u,m,o,l)]}case"Pack":return b(()=>{const s=r("axis",a,t,e),i=r("tensors",a,t,e),n=i[0].shape,p=Q(i[0]).shape,u=i.map(m=>{const o=ft(m.shape,n);if(!o&&!ft(Q(m).shape,p))throw new Error("the input tensors shape does not match");return o?m:w(m,n)});return[C(u,s)]});case"Unpack":{const s=r("axis",a,t,e),i=r("tensor",a,t,e);return P(i,s)}case"Tile":{const s=r("reps",a,t,e);return[Ra(r("x",a,t,e),s)]}case"Split":case"SplitV":{const s=r("axis",a,t,e),i=r("numOrSizeSplits",a,t,e),n=r("x",a,t,e);return ja(n,i,s)}case"ScatterNd":{const s=r("indices",a,t,e),i=r("values",a,t,e),n=r("shape",a,t,e);return[Pa(s,i,n)]}case"GatherNd":{const s=r("x",a,t,e),i=r("indices",a,t,e);return[Ca(s,i)]}case"SparseToDense":{const s=r("sparseIndices",a,t,e),i=r("outputShape",a,t,e),n=r("sparseValues",a,t,e),p=r("defaultValue",a,t,e);return[dt(s,n,i,n.dtype===p.dtype?p:j(p,n.dtype))]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lr=(a,t,e)=>{switch(a.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:i,emptyRowIndicator:n,reverseIndexMap:p}=B.sparseFillEmptyRows(r("indices",a,t,e),r("values",a,t,e),r("denseShape",a,t,e),r("defaultValue",a,t,e));return[s,i,n,p]}case"SparseReshape":{const{outputIndices:s,outputShape:i}=B.sparseReshape(r("inputIndices",a,t,e),r("inputShape",a,t,e),r("newShape",a,t,e));return[s,i]}case"SparseSegmentMean":return[B.sparseSegmentMean(r("data",a,t,e),r("indices",a,t,e),r("segmentIds",a,t,e))];case"SparseSegmentSum":return[B.sparseSegmentSum(r("data",a,t,e),r("indices",a,t,e),r("segmentIds",a,t,e))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yr=(a,t,e)=>{switch(a.op){case"FFT":return[Wa(r("x",a,t,e))];case"IFFT":return[qa(r("x",a,t,e))];case"RFFT":return[Ha(r("x",a,t,e))];case"IRFFT":return[Ba(r("x",a,t,e))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cr=(a,t,e)=>{switch(a.op){case"StringNGrams":{const{nGrams:s,nGramsSplits:i}=X.stringNGrams(r("data",a,t,e),r("dataSplits",a,t,e),r("separator",a,t,e),r("nGramWidths",a,t,e),r("leftPad",a,t,e),r("rightPad",a,t,e),r("padWidth",a,t,e),r("preserveShortSequences",a,t,e));return[s,i]}case"StringSplit":{const{indices:s,values:i,shape:n}=X.stringSplit(r("input",a,t,e),r("delimiter",a,t,e),r("skipEmpty",a,t,e));return[s,i,n]}case"StringToHashBucketFast":return[X.stringToHashBucketFast(r("input",a,t,e),r("numBuckets",a,t,e))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dr=(a,t,e)=>{switch(a.op){case"Cast":return[j(r("x",a,t,e),r("dtype",a,t,e))];case"ExpandDims":{const s=r("axis",a,t,e);return[Ja(r("x",a,t,e),s)]}case"Squeeze":{const s=r("axis",a,t,e);return[Q(r("x",a,t,e),s)]}case"Reshape":return[w(r("x",a,t,e),r("shape",a,t,e))];case"MirrorPad":return[Za(r("x",a,t,e),r("padding",a,t,e),r("mode",a,t,e))];case"PadV2":case"Pad":return[Ya(r("x",a,t,e),r("padding",a,t,e),r("constantValue",a,t,e))];case"SpaceToBatchND":{const s=r("blockShape",a,t,e),i=r("paddings",a,t,e);return[Xa(r("x",a,t,e),s,i)]}case"BatchToSpaceND":{const s=r("blockShape",a,t,e),i=r("crops",a,t,e);return[Qa(r("x",a,t,e),s,i)]}case"DepthToSpace":{const s=r("blockSize",a,t,e),i=r("dataFormat",a,t,e).toUpperCase();return[Ka(r("x",a,t,e),s,i)]}case"BroadcastTo":return[Ua(r("x",a,t,e),r("shape",a,t,e))];case"BroadcastArgs":return[Ga(r("s0",a,t,e),r("s1",a,t,e))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vt(a,t,e,s){const i=((n,p,u)=>{switch(n.category){case"arithmetic":return b(()=>Ws(n,p,u));case"basic_math":return b(()=>Gs(n,p,u));case"control":return Zs(n,p,u);case"convolution":return b(()=>Js(n,p,u));case"creation":return b(()=>Ms(n,p,u));case"dynamic":return tr(n,p,u);case"evaluation":return b(()=>er(n,p,u));case"image":return b(()=>nr(n,p,u));case"graph":return b(()=>ar(n,p,u));case"logical":return b(()=>ir(n,p,u));case"matrices":return b(()=>pr(n,p,u));case"normalization":return b(()=>ur(n,p,u));case"reduction":return b(()=>mr(n,p,u));case"slice_join":return b(()=>or(n,p,u));case"sparse":return b(()=>lr(n,p,u));case"spectral":return b(()=>yr(n,p,u));case"string":return b(()=>cr(n,p,u));case"transformation":return b(()=>dr(n,p,u));case"hash_table":return rr(n,p,u,s);case"custom":const m=St(n.op);if(m&&m.customExecutor)return m.customExecutor(new qs(n,p,u));throw TypeError(`Custom op ${n.op} is not registered.`);default:throw TypeError(`Unknown op '${n.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(a,t,e);return Y(i)?i.then(n=>[].concat(n)):[].concat(i)}class kt{constructor(t={},e={},s={},i={}){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=s,this.functionMap=i,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let e=0;e<this.contexts.length-1;e++){const s=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(s))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(e=>e.id===0&&e.iterationId===0?"":`${e.frameName}-${e.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const e in this.tensorArrayMap)this.tensorArrayMap[e].clearAndClose(t);for(const e in this.tensorListMap)this.tensorListMap[e].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dt(a,t,e,s){const i=new Set,n=[];let p=null,u=null;const m=new Set,o=Object.keys(a).map(c=>_(c)[0]);let l=[];s!=null&&(l=s.map(c=>_(c.name)[0]));const y=[...t];for(;y.length>0;){const c=y.pop();if(($t(c)||br(c)||Tr(c))&&p==null&&(p=c,u=p.children.map(d=>d.name).filter(d=>i.has(d))),i.add(c.name),e[c.name]==null&&o.indexOf(c.name)===-1&&l.indexOf(c.name)===-1){if(c.inputs.length===0){n.push(c.name);continue}c.inputs.forEach(d=>{m.has(d.name)||(m.add(d.name),y.push(d))})}}return{inputs:a,outputs:t,usedNodes:i,missingInputs:n,dynamicNode:p,syncInputs:u}}function hr(a,t,e){const{usedNodes:s,inputs:i}=e,n=[],p=Object.keys(i).map(l=>_(l)[0]).map(l=>a.nodes[l]),u=a.initNodes;p.forEach(l=>{s.has(l.name)&&n.push(l)}),a.weights.forEach(l=>{s.has(l.name)&&n.push(l)}),u!=null&&u.forEach(l=>{s.has(l.name)&&n.push(l)});const m=new Set,o=[];for(;n.length>0;){const l=n.pop();m.add(l.name),t[l.name]||o.push(l),l.children.forEach(y=>{!m.has(y.name)&&s.has(y.name)&&y.inputs.every(c=>m.has(c.name))&&n.push(y)})}return o}const fr=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],gr=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],Nr=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function $t(a){return fr.indexOf(a.op)>=0}function br(a){return gr.indexOf(a.op)>=0}function Tr(a){return Nr.indexOf(a.op)>=0}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class W{constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(s=>{this._functionExecutorMap[s]=new W(t.functions[s],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const e=Object.keys(t).map(s=>t[s].map(i=>i.id));this._weightIds=[].concat(...e),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e})}get functions(){return Object.keys(this._functions).reduce((t,e)=>(t[e]=this._functions[e].signature,t),{})}getCompilationKey(t,e){const s=t.map(n=>n.name).sort(),i=e.map(n=>n.name).sort();return s.join(this.SEPERATOR)+"--"+i.join(this.SEPERATOR)}compile(t,e){const s=Dt(t,e,this.weightMap,this._initNodes),{missingInputs:i,dynamicNode:n,syncInputs:p}=s;if(n!=null)throw new Error(`This execution contains the node '${n.name}', which has the dynamic op '${n.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${p}]`);if(i.length>0){const u=e.map(o=>o.name),m=Object.keys(t);throw new Error(`Cannot compute the outputs [${u}] from the provided inputs [${m}]. Missing the following inputs: [${i}]`)}return hr(this.graph,this.weightMap,s)}execute(t,e){t=this.mapInputs(t);const s=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);const i=s.map(y=>this.graph.nodes[_(y)[0]]),n=e.map(y=>_(y)[0]);let p=n.map(y=>this.graph.nodes[y]);p.length===0&&(p=this._outputs);const u=this.getCompilationKey(i,p);let m=this.compiledMap.get(u);m==null&&(m=this.compile(t,p),this.compiledMap.set(u,m));const o={},l={};return b(()=>{const y=new kt(this.weightMap,o,l,this.functionExecutorMap),c=Object.assign({},this.weightMap);Object.keys(t).forEach(f=>{const[h,T]=_(f),I=[];I[T]=t[f],c[h]=I});const d=this.getFrozenTensorIds(c),g={};for(let f=0;f<m.length;f++){const h=m[f];if(!c[h.name]){const T=vt(h,c,y,this._resourceManager);if(Y(T))throw new Error(`The execution of the op '${h.op}' returned a promise. Please use model.executeAsync() instead.`);c[h.name]=T,this.checkTensorForDisposal(h.name,h,c,y,d,n,g)}}return this.parent==null&&y.dispose(d),e.map(f=>S(f,c,y))})}getFrozenTensorIds(t){const e=[].concat.apply([],Object.keys(t).map(s=>t[s]).map(s=>s.map(i=>i.id)));return new Set(e)}checkTensorForDisposal(t,e,s,i,n,p,u){e.category==="control"||p.indexOf(t)!==-1||(s[t].forEach(m=>{m!=null&&(u[m.id]=(u[m.id]||0)+e.children.length)}),e.inputs.forEach(m=>{if(m.category!=="control"){const o=ss(m.name,s,i);o!=null&&o.forEach(l=>{if(l&&!l.kept&&!n.has(l.id)){const y=u[l.id];y===1?(l.dispose(),delete u[l.id]):y!=null&&u[l.id]--}})}}))}async executeAsync(t,e){return this._executeAsync(t,e)}async _executeAsync(t,e,s=!1,i={},n={}){s||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));const p=new kt(this.weightMap,i,n,this.functionExecutorMap),u=await this.executeWithControlFlow(t,p,e,s),m=e.map(c=>S(c,u,p)),o=m.map(c=>c.id),l=Object.keys(t).map(c=>t[c].id),y=new Set([...o,...l,...this.weightIds]);return Object.keys(u).forEach(c=>{u[c].forEach(g=>{g&&!g.kept&&!g.isDisposed&&!y.has(g.id)&&g.dispose()})}),this.parent==null&&p.dispose(y),m}async executeFunctionAsync(t,e,s){const i=t.reduce((n,p,u)=>(n[this.inputs[u].name]=p,n),{});return this._executeAsync(i,this.outputNodes,!0,e,s)}async executeWithControlFlow(t,e,s,i){const n=Object.keys(t),p=n.map(N=>this.graph.nodes[_(N)[0]]),u=s.map(N=>_(N)[0]);let m=u.map(N=>this.graph.nodes[N]);m.length===0&&(m=this._outputs);const{usedNodes:o,missingInputs:l,dynamicNode:y,syncInputs:c}=Dt(t,m,this.weightMap,this._initNodes),d=[...p,...this.graph.weights,...this._initNodes||[]].map(N=>({node:N,contexts:e.currentContext})),g=Object.assign({},this.weightMap);Object.keys(t).forEach(N=>{const[G,$]=_(N),L=[];L[$]=t[N],g[G]=L});const f={},h=this.getFrozenTensorIds(g),T={};for(;d.length>0;){const N=this.processStack(p,d,e,g,T,h,u,f,o);await Promise.all(N)}y==null&&!i&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const I=m.filter(N=>!$t(N)&&!S(N.name,g,e)).map(N=>N.name);if(I.length>0){let N="";throw y!=null&&(N=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${c}]`),new Error(`Cannot compute the outputs [${I}] from the provided inputs [${n}]. Consider providing the following inputs: [${l}]. ${N}`)}return g}processStack(t,e,s,i,n,p,u,m,o){const l=[];for(;e.length>0;){const y=e.pop();s.currentContext=y.contexts;let c="";if(y.node.op==="Enter"&&r("isConstant",y.node,i,s)&&([c]=v(y.node.name,s)),i[y.node.name]==null){const d=vt(y.node,i,s,this._resourceManager);c||([c]=v(y.node.name,s));const g=s.currentContext;Y(d)?l.push(d.then(f=>(i[c]=f,s.currentContext=g,this.checkTensorForDisposal(c,y.node,i,s,p,u,m),this.processChildNodes(y.node,e,s,i,n,o),f))):(i[c]=d,this.checkTensorForDisposal(c,y.node,i,s,p,u,m),this.processChildNodes(y.node,e,s,i,n,o))}else this.processChildNodes(y.node,e,s,i,n,o)}return l}processChildNodes(t,e,s,i,n,p){t.children.forEach(u=>{const[m]=v(u.name,s);n[m]||!p.has(u.name)||(u.op==="Merge"?u.inputNames.some(o=>!!S(o,i,s))&&(n[m]=!0,e.push({contexts:s.currentContext,node:u})):u.inputNames.every(o=>!!S(o,i,s))&&(n[m]=!0,e.push({contexts:s.currentContext,node:u})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(e=>e.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(e=>{const s=t[e],[i]=_(e),n=this.graph.nodes[i];if(n.attrParams.shape&&n.attrParams.shape.value){const p=n.attrParams.shape.value,u=p.length===s.shape.length&&s.shape.every((m,o)=>p[o]===-1||p[o]===m);F(u,()=>`The shape of dict['${n.name}'] provided in model.execute(dict) must be [${p}], but was [${s.shape}]`)}n.attrParams.dtype&&n.attrParams.dtype.value&&F(s.dtype===n.attrParams.dtype.value,()=>`The dtype of dict['${n.name}'] provided in model.execute(dict) must be ${n.attrParams.dtype.value}, but was ${s.dtype}`)})}mapInputs(t){const e={};for(const s in t)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[s]!=null){const i=this._signature.inputs[s];e[i.name]=t[s]}else e[s]=t[s];return e}checkInputs(t){const e=Object.keys(t).filter(s=>{const[i]=_(s);return this.graph.nodes[i]==null});if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map(e=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[e]!=null?this._signature.outputs[e].name:e,{})}checkOutputs(t){t.forEach(e=>{const[s]=_(e);if(!this.graph.nodes[s])throw new Error(`The output '${e}' is not found in the graph`)})}}class Sr{constructor(t={},e={}){this.hashTableNameToHandle=t,this.hashTableMap=e}addHashTable(t,e){this.hashTableNameToHandle[t]=e.handle,this.hashTableMap[e.id]=e}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _r="?tfjs-format=file",Or="model.json";class wr{constructor(t,e={}){this.modelUrl=t,this.loadOptions=e,this.version="n/a",e==null&&(this.loadOptions={}),this.resourceManager=new Sr}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=bt(t,this.loadOptions);else{const e=Ma(t,this.loadOptions);if(e.length===0)e.push(bt(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}async load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=await this.handler.load();return this.loadSync(t)}loadSync(t){this.artifacts=t;const e=this.artifacts.modelTopology;let s;this.artifacts.userDefinedMetadata!=null&&this.artifacts.userDefinedMetadata.signature!=null?s=this.artifacts.userDefinedMetadata.signature:s=this.artifacts.signature,this.signature=s,this.version=`${e.versions.producer}.${e.versions.minConsumer}`;const i=ts(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new W(_t.Instance.transformGraph(e,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(i),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const n=_t.Instance.transformGraph(t.modelInitializer);this.initializer=new W(n),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(t,e){if(typeof t=="string"){const s=es(t);if(s.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(s.length>1)throw new Error(`Found more than one (${s.length}) save handlers for URL '${t}'`);t=s[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,e){return this.execute(t,this.outputNodes)}normalizeInputs(t){if(!(t instanceof as)&&!Array.isArray(t))return t;if(t=Array.isArray(t)?t:[t],t.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce((e,s,i)=>(e[s]=t[i],e),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const s=this.executor.execute(t,e);return s.length>1?s:s[0]}async executeAsync(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const s=await this.executor.executeAsync(t,e);return s.length>1?s:s[0]}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((e,s)=>(e[s]=[t[s]],e),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function vr(a,t={}){if(a==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&a.load==null&&(a.endsWith("/")||(a=a+"/"),a=`${a}${Or}${_r}`);const e=new wr(a,t);return await e.load(),e}export{wr as G,Er as d,vr as l,Ir as r};
//# sourceMappingURL=graph_model.6c4c3382.js.map
