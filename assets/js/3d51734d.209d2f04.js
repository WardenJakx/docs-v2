"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[8407],{31114:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=s(85893),o=s(11151);const r={},i="Introduction",a={id:"solvers/solvers",title:"Introduction",description:"Intent-based trading",source:"@site/docs/solvers/solvers.md",sourceDirName:"solvers",slug:"/solvers/",permalink:"/docs-v2/docs/solvers/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/solvers/solvers.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Intent-based trading",id:"intent-based-trading",level:2},{value:"Solvers",id:"solvers",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.h2,{id:"intent-based-trading",children:"Intent-based trading"}),"\n",(0,n.jsxs)(t.p,{children:["CoW protocol uses an intent-based trading model. Unlike on other DEXs, users on CoSwap don't execute their trades themselves. Instead of creating an Ethereum transaction for swapping token A for B (which costs gas, may fail, etc.) they sign an ",(0,n.jsx)(t.strong,{children:"intent"})," to trade the two tokens at a specified limit price."]}),"\n",(0,n.jsxs)(t.p,{children:["This intent is then handed off to third parties - the so-called ",(0,n.jsx)(t.strong,{children:"solvers"})," - who compete for the user's order flow by trying to give them the best possible price. The solver that offers the best execution price is granted the right to settle the user's order. The actual settlement transaction is then created and signed by the solver."]}),"\n",(0,n.jsx)(t.h2,{id:"solvers",children:"Solvers"}),"\n",(0,n.jsx)(t.p,{children:"Solvers can move tokens on behalf of the user (using the ERC20 approvals the user granted to the settlement contract) while the contract verifies the signature of the user's intent and that execution is done according to the limit price and quantity specified by the user."}),"\n",(0,n.jsx)(t.p,{children:"In the following sections we describe in more detail how the competition works today, provide a concrete guide on how to become a solver yourself and give an outlook on how we plan to fully decentralize this competition"})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>r});var n=s(67294);const o=n.createContext({});function r(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:r(e),n.createElement(o.Provider,{value:a},t)}}}]);