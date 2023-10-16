"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[5385],{84388:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var o=t(85893),n=t(11151);const r={},c="Sign and Post orders",i={id:"cow-sdk/sign-and-post-orders/README",title:"Sign and Post orders",description:"In order to trade, you will need to create a valid order first.",source:"@site/docs/cow-sdk/sign-and-post-orders/README.md",sourceDirName:"cow-sdk/sign-and-post-orders",slug:"/cow-sdk/sign-and-post-orders/",permalink:"/docs-v2/docs/cow-sdk/sign-and-post-orders/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cow-sdk/sign-and-post-orders/README.md",tags:[],version:"current",frontMatter:{}},d={},a=[];function l(e){const s=Object.assign({h1:"h1",p:"p",code:"code",ol:"ol",li:"li",strong:"strong",a:"a"},(0,n.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"sign-and-post-orders",children:"Sign and Post orders"}),"\n",(0,o.jsx)(s.p,{children:"In order to trade, you will need to create a valid order first."}),"\n",(0,o.jsxs)(s.p,{children:["On the contrary to other decentralised exchanges, creating orders is free in CoW Protocol. This is because, one of the most common ways to do it is by created offchain signed messages (meta-transactions, uses ",(0,o.jsx)(s.code,{children:"EIP-712"})," or ",(0,o.jsx)(s.code,{children:"EIP-1271"}),")."]}),"\n",(0,o.jsx)(s.p,{children:"Posting orders is a three steps process:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Get Market Price"}),": Fee & Price"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Sign the order"}),": Using off-chain signing or Meta-transactions"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Post the signed order to the API"}),": So, the order becomes ",(0,o.jsx)(s.code,{children:"OPEN"})]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["The next sections will guide you through the process of creating a valid order step by step. If you feel impatient and you want just a quick example, please out the the ",(0,o.jsx)(s.a,{href:"https://github.com/cowprotocol/cow-sdk/blob/main/examples/cra/src/pages/quickStart/index.tsx",children:"Quick start example"}),"."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>i,ah:()=>r});var o=t(67294);const n=o.createContext({});function r(e){const s=o.useContext(n);return o.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function i({components:e,children:s,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:r(e),o.createElement(n.Provider,{value:i},s)}}}]);