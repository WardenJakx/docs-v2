"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[6064],{50647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(85893),r=n(11151);const o={},s="5. Checking order status",i={id:"tutorials/how-to-submit-orders-via-the-api/checking-order-status",title:"5. Checking order status",description:"In order to follow if/when your order has been matched you can either subscribe to \u201cTrade\u201d events by the Settlement Contract:",source:"@site/docs/tutorials/how-to-submit-orders-via-the-api/6.-checking-order-status.md",sourceDirName:"tutorials/how-to-submit-orders-via-the-api",slug:"/tutorials/how-to-submit-orders-via-the-api/checking-order-status",permalink:"/docs-v2/docs/tutorials/how-to-submit-orders-via-the-api/checking-order-status",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-submit-orders-via-the-api/6.-checking-order-status.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{}},d={},c=[];function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",strong:"strong"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"5-checking-order-status",children:"5. Checking order status"}),"\n",(0,a.jsxs)(t.p,{children:["In order to follow if/when your order has been matched you can either subscribe to \u201cTrade\u201d events by the ",(0,a.jsx)(t.a,{href:"https://etherscan.io/address/0x3328f5f2cEcAF00a2443082B657CedEAf70bfAEf",children:"Settlement Contract"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'import GPv2SettlementArtefact from "@gnosis.pm/gp-v2-contracts/deployments/mainnet/GPv2Settlement.json";\nimport { Contract, ethers } from "ethers";\n\nconst uid = <uid to follow>;\nconst TRADE_TIMEOUT_SECONDS = 30*60\n\nconst settlement = new Contract(\u201c0x9008D19f58AAbD9eD0D60971565AA8510560ab41\u201d, GPv2SettlementArtefact.abi, ethers.provider)\nconst traded = new Promise((resolve: (value: boolean) => void) => {\n    ethers.provider.on(settlement.filters.Trade(trader), (log) => {\n      // Hacky way to verify that the UID is part of the event data\n      if (log.data.includes(uid.substring(2))) {\n        resolve(true);\n      }\n    });\n  });\n\nconst timeout = new Promise((resolve: (value: boolean) => void) => {\n    setTimeout(resolve, TRADE_TIMEOUT_SECONDS*1000, false);\n  });\n\nconst hasTraded = await Promise.race([traded, timeout]);\n'})}),"\n",(0,a.jsx)(t.p,{children:"This script waits up to 30 minutes to find a trade event before eventually timing out."}),"\n",(0,a.jsx)(t.p,{children:"Or you can query our API using the order ID that you generated earlier"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://api.cow.fi/mainnet/api/v1/trades?orderUid=0xc21b7756caf1f6df13e9947767204620371ca791a4b91db8620f04905d25b608e0b3700e0aadcb18ed8d4bff648bc99896a18ad160ef0bca",children:"https://api.cow.fi/mainnet/api/v1/trades?orderUid=0xc21b7756caf1f6df13e9947767204620371ca791a4b91db8620f04905d25b608e0b3700e0aadcb18ed8d4bff648bc99896a18ad160ef0bca"})})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'[\n  {\n    "blockNumber": 12826021,\n    "logIndex": 31,\n    "orderUid": "0xc21b7756caf1f6df13e9947767204620371ca791a4b91db8620f04905d25b608e0b3700e0aadcb18ed8d4bff648bc99896a18ad160ef0bca",\n    "buyAmount": "80623566",\n    "sellAmount": "100000000000000000000",\n    "sellAmountBeforeFees": "89287648398497935360",\n    "owner": "0xe0b3700e0aadcb18ed8d4bff648bc99896a18ad1",\n    "buyToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n    "sellToken": "0x1a5f9352af8af974bfc03399e3767df6370d82e4",\n    "txHash": "0xbcdd49946b56564b7ba7403ab63a2316ece5c6e12657782ffda620d192e591a0"\n  }\n]\n'})}),"\n",(0,a.jsx)(t.p,{children:"If your order was partially fillable and traded in multiple chunks you may find one entry per trade."}),"\n",(0,a.jsxs)(t.p,{children:["This is it. We hope you have been able to follow this tutorial end to end and made a successful trade. If you have any questions or are planning to write some utility software (e.g. signing logic in another language) please reach out to us on ",(0,a.jsx)(t.a,{href:"https://discord.gg/cowswap",children:"Discord"}),", we are always happy to help.\\"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Happy Trading!"}),"\\"]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var a=n(67294);const r=a.createContext({});function o(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:o(e),a.createElement(r.Provider,{value:i},t)}}}]);