"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9723],{83611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=r(85893),o=r(11151);const a={description:"This sections is relevant for CoW Hooks"},s="Additional Order Preferences",d={id:"front-end/creating-app-ids/create-the-order-meta-data-file/additional-order-preferences",title:"Additional Order Preferences",description:"This sections is relevant for CoW Hooks",source:"@site/docs/front-end/creating-app-ids/create-the-order-meta-data-file/additional-order-preferences.md",sourceDirName:"front-end/creating-app-ids/create-the-order-meta-data-file",slug:"/front-end/creating-app-ids/create-the-order-meta-data-file/additional-order-preferences",permalink:"/docs-v2/docs/front-end/creating-app-ids/create-the-order-meta-data-file/additional-order-preferences",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/creating-app-ids/create-the-order-meta-data-file/additional-order-preferences.md",tags:[],version:"current",frontMatter:{description:"This sections is relevant for CoW Hooks"}},i={},c=[];function l(e){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"additional-order-preferences",children:"Additional Order Preferences"}),"\n",(0,n.jsxs)(t.p,{children:["App-data also allows for additional order options to be specified. These are options to extend CoW Protocol orders allowing for more advanced swap intents to be specified, while being signed and by virtue of being included in order\u2019s ",(0,n.jsx)(t.code,{children:"appData"}),". Thus, going from an trading engine to an execution engine. Currently, we support an additional optional \u201chooks\u201d field for configuring ",(0,n.jsx)(t.a,{href:"https://docs.cow.fi/overview/cow-hooks",children:"CoW Hooks for an order"}),".\\"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "version": "0.4.0",\n  "appCode": "MyAwesomeUi",\n  "metadata": {\n    "hooks": {\n      "pre": [\n        { "target": "<address>", "callData": "<hex encoded bytes>", "gasLimit": "<number>" },  \n      ],\n      "post": [\n        { "target": "<address>", "callData": "<hex encoded bytes>", "gasLimit": "<number>" },\n      ]\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Note that both pre and post hooks support multiple hooks, so feel free to mix and match!"})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,r)=>{r.d(t,{Zo:()=>d,ah:()=>a});var n=r(67294);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function d({components:e,children:t,disableParentContext:r}){let d;return d=r?"function"==typeof e?e({}):e||s:a(e),n.createElement(o.Provider,{value:d},t)}}}]);