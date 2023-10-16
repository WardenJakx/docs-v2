"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[923],{6741:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var o=a(85893),n=a(11151);const s={},d="Get the AppData Hex",c={id:"cow-sdk/order-meta-data-appdata/get-the-appdata-hex",title:"Get the AppData Hex",description:"The AppData Hex points to an IPFS document with the meta-data attached to the order.",source:"@site/docs/cow-sdk/order-meta-data-appdata/get-the-appdata-hex.md",sourceDirName:"cow-sdk/order-meta-data-appdata",slug:"/cow-sdk/order-meta-data-appdata/get-the-appdata-hex",permalink:"/docs-v2/docs/cow-sdk/order-meta-data-appdata/get-the-appdata-hex",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cow-sdk/order-meta-data-appdata/get-the-appdata-hex.md",tags:[],version:"current",frontMatter:{}},p={},r=[];function i(t){const e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},(0,n.ah)(),t.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"get-the-appdata-hex",children:"Get the AppData Hex"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"AppData"})," Hex points to an IPFS document with the meta-data attached to the order."]}),"\n",(0,o.jsxs)(e.p,{children:["You can calculate the ",(0,o.jsx)(e.code,{children:"AppData"})," Hex, and its corresponding ",(0,o.jsx)(e.code,{children:"cidV0"})," using the SDK:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"import { MetadataApi } from '@cowprotocol/app-data'\n\nexport const metadataApi = new MetadataApi()\n\nconst { appDataHash, cidv0 } = await metadataApi.calculateAppDataHash(appDataDoc)\n"})}),"\n",(0,o.jsx)(e.p,{children:"Note how this operation is deterministic, so given the same document, it will always generate the same hash. Also, this operation is done locally, so it's not uploading anything to IPFS, its just calculating what will be the hash that maps to the provided document."}),"\n",(0,o.jsx)(e.p,{children:"This method can be used to calculate the actual hash before uploading the document to IPFS. This way, when you post an new order, you don't need to wait until the uploading to IPFS is completed."})]})}const h=function(t={}){const{wrapper:e}=Object.assign({},(0,n.ah)(),t.components);return e?(0,o.jsx)(e,Object.assign({},t,{children:(0,o.jsx)(i,t)})):i(t)}},11151:(t,e,a)=>{a.d(e,{Zo:()=>c,ah:()=>s});var o=a(67294);const n=o.createContext({});function s(t){const e=o.useContext(n);return o.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const d={};function c({components:t,children:e,disableParentContext:a}){let c;return c=a?"function"==typeof t?t({}):t||d:s(t),o.createElement(n.Provider,{value:c},e)}}}]);