"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9439],{52657:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=n(85893),s=n(11151);const r={},c="Configuration",i={id:"overview/cow-hooks/cow-hooks-example/configuration",title:"Configuration",description:"First things first, we need to configure some required user-specific things:",source:"@site/docs/overview/cow-hooks/cow-hooks-example/configuration.md",sourceDirName:"overview/cow-hooks/cow-hooks-example",slug:"/overview/cow-hooks/cow-hooks-example/configuration",permalink:"/docs-v2/docs/overview/cow-hooks/cow-hooks-example/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview/cow-hooks/cow-hooks-example/configuration.md",tags:[],version:"current",frontMatter:{}},a={},d=[];function u(e){const o=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(o.p,{children:"First things first, we need to configure some required user-specific things:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"A URL of an Ethereum node to connect to"}),"\n",(0,t.jsx)(o.li,{children:"The private key of the account to trade"}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'# Configure the following values...\nexport NODE_URL="...";\nexport PRIVATE_KEY="...";\n'})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-javascript",children:'import { ethers } from "https://unpkg.com/ethers@5.7.2/dist/ethers.esm.js";\n\nconst provider = new ethers.providers.JsonRpcProvider(Deno.env.get("NODE_URL"));\nconst wallet = new ethers.Wallet(Deno.env.get("PRIVATE_KEY"), provider);\n\nconst { chainId } = await provider.getNetwork();\nconsole.log(`connected to chain ${chainId} with account ${wallet.address}`);\n'})})]})}const h=function(e={}){const{wrapper:o}=Object.assign({},(0,s.ah)(),e.components);return o?(0,t.jsx)(o,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,o,n)=>{n.d(o,{Zo:()=>i,ah:()=>r});var t=n(67294);const s=t.createContext({});function r(e){const o=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const c={};function i({components:e,children:o,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(s.Provider,{value:i},o)}}}]);