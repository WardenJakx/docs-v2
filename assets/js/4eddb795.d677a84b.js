"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[3794],{63367:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(85893),a=s(11151);const o={},r="Running the tx from the safe",c={id:"tutorials/cowswap-trades-with-a-gnosis-safe-wallet/running-the-tx-from-the-safe",title:"Running the tx from the safe",description:"The last step is running a tx submission to the multisign using the previous method.",source:"@site/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/running-the-tx-from-the-safe.md",sourceDirName:"tutorials/cowswap-trades-with-a-gnosis-safe-wallet",slug:"/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/running-the-tx-from-the-safe",permalink:"/docs-v2/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/running-the-tx-from-the-safe",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/running-the-tx-from-the-safe.md",tags:[],version:"current",frontMatter:{}},i={},d=[];function l(e){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"running-the-tx-from-the-safe",children:"Running the tx from the safe"}),"\n",(0,n.jsx)(t.p,{children:"The last step is running a tx submission to the multisign using the previous method."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'def run_trade_sep_21():\n    safe = ApeSafe("0xMySafeAddress")\n\n    yfi = safe.contract("0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e")\n    usdc = safe.contract("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")\n    link = safe.contract("0x514910771AF9Ca656af840dff83E8264EcF986CA")\n    gusd = safe.contract("0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd")\n\n    cowswap_sell(safe, yfi, gusd)\n    cowswap_sell(safe, usdc, gusd)\n    cowswap_sell(safe, link, gusd)\n\n    safe_tx = safe.multisend_from_receipts()\n    account = click.prompt("signer", type=click.Choice(accounts.load()))\n    safe_tx.sign(accounts.load(account).private_key)\n    safe.preview(safe_tx, events=False, call_trace=False)\n    safe.post_transaction(safe_tx)\n'})}),"\n",(0,n.jsx)(t.p,{children:"This run will not be the typical ape safe tx. When you run the code you are actually calling the api and creating an order. You can create as many orders as you want BUT they are not valid until you sign them. In our case, executing the tx in the multisign will do the trick."}),"\n",(0,n.jsxs)(t.p,{children:["Once the tx is signed, you can query the ",(0,n.jsx)(t.code,{children:"/solvable_orders"})," endpoint to see your trades avaiable to solvers. You can check the output from ",(0,n.jsx)(t.a,{href:"https://api.cow.fi/mainnet/#/default/get_api_v1_solvable_orders",children:"https://api.cow.fi/mainnet/#/default/get_api_v1_solvable_orders"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["After a few minutes I got two transfers, the first was ",(0,n.jsx)(t.code,{children:"yfi"})," and ",(0,n.jsx)(t.code,{children:"link"})," converted to ",(0,n.jsx)(t.code,{children:"gusd"})," and on the second one ",(0,n.jsx)(t.code,{children:"usdc"})," converted to ",(0,n.jsx)(t.code,{children:"gusd"}),"."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>o});var n=s(67294);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:o(e),n.createElement(a.Provider,{value:c},t)}}}]);