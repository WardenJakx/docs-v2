"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[4483],{85835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(85893),s=n(11151);const a={},i="2. Get a Quote",r={id:"tutorials/how-to-submit-orders-via-the-api/query-the-fee-endpoint",title:"2. Get a Quote",description:"Placing an order is free in CoW Protocol and only requires signing an off chain message. Order execution is then done by so-called solvers and doesn\u2019t require you to pay any gas.",source:"@site/docs/tutorials/how-to-submit-orders-via-the-api/2.-query-the-fee-endpoint.md",sourceDirName:"tutorials/how-to-submit-orders-via-the-api",slug:"/tutorials/how-to-submit-orders-via-the-api/query-the-fee-endpoint",permalink:"/docs-v2/docs/tutorials/how-to-submit-orders-via-the-api/query-the-fee-endpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-submit-orders-via-the-api/2.-query-the-fee-endpoint.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{}},d={},c=[];function l(e){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",strong:"strong",em:"em"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"2-get-a-quote",children:"2. Get a Quote"}),"\n",(0,o.jsx)(t.p,{children:"Placing an order is free in CoW Protocol and only requires signing an off chain message. Order execution is then done by so-called solvers and doesn\u2019t require you to pay any gas."}),"\n",(0,o.jsx)(t.p,{children:"If your order is matched and executed the gas cost of settling it is taken over by the solver. As a consequence, solvers have to be reimbursed that cost in the form of a trading fee. This fee is charged in the token you are selling and the exact amount depends on the route and amount you are trading."}),"\n",(0,o.jsx)(t.p,{children:'Placing an order is free and only requires signing an off chain message. Order execution is then done by so-called "solvers". If your order is matched and executed the gas cost of settling it is taken over by the solver. As a consequence solvers have to be reimbursed that cost in the form of a trading fee. This fee is charged in the token you are selling and the exact amount mainly depends on the route and amount you are trading.'}),"\n",(0,o.jsx)(t.p,{children:"The API provides a single endpoint to get a quote (fee + amount estimate) for your order. Orders that don\u2019t specify a high enough fee will be rejected by the API. The fee estimate is valid for a short period of time (long enough for you to sign and send the final order)."}),"\n",(0,o.jsx)(t.p,{children:"In order to quote the current fee to trade 10,000 USDC for WETH you can query:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'curl -X POST -H  "accept: application/json" -H  "Content-Type: application/json"  -d \'{                                                                                                               \n  "sellToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n  "buyToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n  "receiver": "0x0000000000000000000000000000000000000000",\n  "validTo": 2281625458,\n  "appData": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "partiallyFillable": false,\n  "sellTokenBalance": "erc20",\n  "buyTokenBalance": "erc20",\n  "from": "0x55fe002aeff02f77364de339a1292923a15844b8",\n  "kind": "sell",\n  "sellAmountBeforeFee": "10000000000"\n}\' https://api.cow.fi/mainnet/api/v1/quote\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note, that the amount is given in \u201catoms\u201d"})," (smallest unit of the token, e.g. wei for ETH). With USDC having 6 decimals, 10k USDC equals 10e10 atoms.\\"]}),"\n",(0,o.jsx)(t.p,{children:"The response contains a quote object containing a ready to be signed order with all relevant fields as well as some metadata regarding the validity of the quote and the account that should be used for signing."}),"\n",(0,o.jsx)(t.p,{children:"``"}),"\n",(0,o.jsx)(t.p,{children:"In the example above the minimum fee for the order would be about 66 USDC and you would receive about 2.29 WETH."}),"\n",(0,o.jsxs)(t.p,{children:["The fee is always paid on top of the specified sell amount. In the query we asked to sell 10k USDC ",(0,o.jsx)(t.strong,{children:"before fees"})," meaning that the sell amount was reduced by the fee amount (feeAmount + sellAmount = 10k USDC in the response). You can also provide ",(0,o.jsx)(t.strong,{children:"sellAmountAfterFees"})," in which case the sell Amount will be exactly the specified amount (make sure to have sufficient additional balance to pay for the fee). For buy orders specify set ",(0,o.jsx)(t.code,{children:"kind"})," to ",(0,o.jsx)(t.em,{children:"buy"})," and pass ",(0,o.jsx)(t.strong,{children:"buyAmountAfterFee"})," (since fee is always taken in the sell token there is no differentiation in this case)"]}),"\n",(0,o.jsxs)(t.p,{children:["Depending on your use case you may discard the estimated buy/sell amount. In case you don't please note that ",(0,o.jsx)(t.strong,{children:"the provided quote"})," ",(0,o.jsx)(t.strong,{children:"doesn't include any slippage."}),' This means that the tiniest price move may make your order un-fillable. In order to increase your settlement chances especially in volatile conditions we advise you add a slippage tolerance of at least 0.3%. Our solvers ensure that setting a slippage on your order doesn\u2019t make you prone to MEV attacks is given in "atoms" - e.g. wei for ETH) ',(0,o.jsx)(t.strong,{children:"before fee"})]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>a});var o=n(67294);const s=o.createContext({});function a(e){const t=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||i:a(e),o.createElement(s.Provider,{value:r},t)}}}]);