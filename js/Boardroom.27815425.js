(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Boardroom"],{"1a62":function(t,a,e){},"1d23":function(t,a,e){"use strict";e("3f99")},"23cc":function(t,a,e){"use strict";e("2831")},2831:function(t,a,e){},"3f99":function(t,a,e){},"4d63":function(t,a,e){var s=e("83ab"),o=e("da84"),r=e("94ca"),i=e("7156"),n=e("9bf2").f,c=e("241c").f,l=e("44e7"),u=e("ad6d"),d=e("9f7f"),_=e("6eeb"),h=e("d039"),m=e("69f3").set,b=e("2626"),p=e("b622"),v=p("match"),f=o.RegExp,C=f.prototype,g=/a/g,y=/a/g,w=new f(g)!==g,$=d.UNSUPPORTED_Y,x=s&&r("RegExp",!w||$||h((function(){return y[v]=!1,f(g)!=g||f(y)==y||"/a/i"!=f(g,"i")})));if(x){var k=function(t,a){var e,s=this instanceof k,o=l(t),r=void 0===a;if(!s&&o&&t.constructor===k&&r)return t;w?o&&!r&&(t=t.source):t instanceof k&&(r&&(a=u.call(t)),t=t.source),$&&(e=!!a&&a.indexOf("y")>-1,e&&(a=a.replace(/y/g,"")));var n=i(w?new f(t,a):f(t,a),s?this:C,k);return $&&e&&m(n,{sticky:e}),n},T=function(t){t in k||n(k,t,{configurable:!0,get:function(){return f[t]},set:function(a){f[t]=a}})},D=c(f),R=0;while(D.length>R)T(D[R++]);C.constructor=k,k.prototype=C,_(o,"RegExp",k)}b("RegExp")},"50fc":function(t,a,e){"use strict";e("9abb")},9661:function(t,a,e){"use strict";e("1a62")},"9abb":function(t,a,e){},daf5:function(t,a,e){},f332:function(t,a,e){"use strict";e("daf5")},fcf9:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"boardroom",class:[t.chainName,t.getLanguage]},[e("title-banner"),e("div",{staticClass:"boardroom__total text"},[e("div",{staticClass:"container"},[e("div",{staticClass:"boardroom__tab"},t._l(t.getTabList,(function(a,s){return e("div",{key:"tabListRander"+s,staticClass:"boardroom-tab__item text Bold",class:{"is-active":t.boardroomTab===s+1},on:{click:function(a){return t.changeBoardroomTab(s+1)}}},[t._v(" "+t._s(t.$t(""+a["name"]))+" ")])})),0),1===t.boardroomTab?e("div",{staticClass:"boardroom__total-warp numbers Medium"},t._l(t.getTabList[0]["paramList"],(function(a,s){return e("div",{key:"tabParam1_"+s,staticClass:"boardroom-total__item"},[e("div",{staticClass:"total__key"},[t._v(t._s(a["text"]))]),e("div",{staticClass:"total__value "},[t._v(" $"),e("CountUp",{attrs:{endVal:a["val"]}})],1)])})),0):t._e(),2===t.boardroomTab?e("div",{staticClass:"boardroom__total-warp"},t._l(t.getTabList[1]["paramList"],(function(a,s){return e("div",{key:"tabParam2_"+s,staticClass:"boardroom-total__item numbers Medium"},[e("div",{staticClass:"total__key"},[t._v(" "+t._s(a["text"])),0==s?e("el-tooltip",{attrs:{effect:"dark",content:t.$t("burnTip"),placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[e("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})]):t._e()],1),e("div",{staticClass:"total__value "},[e("span",{directives:[{name:"show",rawName:"v-show",value:2!==s,expression:"i !== 2"}]},[t._v("$")]),1!==s?e("CountUp",{attrs:{endVal:a["val"]}}):e("span",[t._v(t._s(a["val"]))]),2===s?e("span",[t._v("MDX")]):t._e()],1)])})),0):t._e(),3===t.boardroomTab?e("div",{staticClass:"boardroom__total-warp combustion-param"},[e("div",{staticClass:"combustion-list numbers Medium"},t._l(t.getTabList[2]["paramList"],(function(a,s){return e("div",{key:"tabParam1_"+s,staticClass:"boardroom-total__item combustion-item"},[e("div",{staticClass:"total__key"},[t._v(t._s(a["text"]))]),e("div",{staticClass:"total__value "},[1===s?e("span",[t._v("$")]):t._e(),e("CountUp",{attrs:{endVal:a["val"]}}),0===s?e("span",[t._v(" MDX")]):t._e()],1)])})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:3===t.boardroomTab,expression:"boardroomTab === 3"}],staticClass:"combustion-btn text Bold",on:{click:function(){return t.$router.push("/buyback")}}},[t._v(" "+t._s(t.$t("GoCombustion"))+" "),e("img",{attrs:{src:"Heco"===t.chainName?t.hecoJump:t.bscJump,alt:""}})])]):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:[1,2].includes(t.boardroomTab),expression:"[1,2].includes(boardroomTab)"}],staticClass:"boardroom-total__rule-button",on:{click:t.showRule}},[t._v(" "+t._s(t.$t("seeRule"))+" "),e("span",{staticClass:"rule__button-icon"})])])]),1===t.boardroomTab?e("Reward"):t._e(),2===t.boardroomTab?e("Repurchase"):t._e(),3===t.boardroomTab?e("Combustion"):t._e(),e("Rule",{ref:"rule"})],1)},o=[],r=(e("13d5"),e("a9e3"),e("c438")),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap text"},[e("div",{staticClass:"title text Bold"},[t._v(" "+t._s(t.$t("DestroyHistory"))+" "),e("a",{staticClass:"more",attrs:{href:t.transferUrl(t.getDestoryAdr,"address"),target:"_blank"}},[e("span",[t._v(" "+t._s(t.$t("seeMores")))]),e("img",{attrs:{src:t.rightArrow,alt:""}})])]),t.combustionData["destroy_list"].length>0?e("table",{staticClass:"table numbers"},[t.isPC?e("colgroup",t._l(t.pcWidthList,(function(t,a){return e("col",{key:"pcWidthList"+a,attrs:{width:t}})})),0):e("colgroup",t._l(t.mobileWidthList,(function(t,a){return e("col",{key:"mobileWidthList"+a,attrs:{width:t}})})),0),e("thead",{staticClass:"text Bold"},[e("tr",t._l(t.textList,(function(a,s){return e("th",{key:"textList"+s},[t._v(t._s(t.$t(a)))])})),0)]),e("tbody",t._l(t.combustionData["destroy_list"],(function(a,s){return e("tr",{key:"combustionList"+s},[e("td",[e("a",{attrs:{href:t.transferUrl(a["hash"]),target:"_blank"}},[t._v(t._s(t.transferAddress(a["hash"]))),e("img",{attrs:{src:t.direction,alt:""}})])]),e("td",[t._v(t._s(t.transferTime(1e3*a["destroy_time"])))]),e("td",[t._v(t._s(t._numComma(a["destroy_amount"],4)))]),e("td",[e("button",{on:{click:function(){return t.jumpHandle(a["hash"])}}},[t._v("Link")])])])})),0)]):e("div",{staticClass:"empty"},[e("img",{attrs:{src:"Heco"===t.chainName?t.hecoNodata:t.bscNodata}}),e("p",[t._v(t._s(t.$t("empptyData")))])])])},n=[],c=e("ae48"),l=e("32a9"),u={name:"Combustion",data:function(){return{bscNodata:e("7312"),hecoNodata:e("1427"),rightArrow:e("9678"),pcWidthList:["25%","25%","25%","25%"],mobileWidthList:["30%","27%","28%","15%"],textList:["jyhash","DestroyTime","DestroyNum"],direction:e("2b86")}},beforeCreate:function(){this.$store.dispatch("buyBack/getCombustionData")},computed:{combustionData:function(){return this.$store.state.buyBack.combustionData},getDestoryAdr:function(){return l["b"][this.chainName]}},methods:{jumpHandle:function(t){window.open(this.transferUrl(t))},transferTime:function(t){return Object(c["a"])(t,this.isPC?7:3)},transferAddress:function(t){return Object(c["f"])(t,this.isPC?6:4)},transferUrl:function(t,a){return Object(c["d"])(t,this.chainName,this.getLanguage,a)},_numComma:c["e"]}},d=u,_=(e("23cc"),e("2877")),h=Object(_["a"])(d,i,n,!1,null,"1fc34c24",null),m=h.exports,b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"modal"}},[t.modelShow?s("div",{staticClass:"model"},[s("div",{staticClass:"model-wrap"},[s("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:t.hideModel}}),s("h2",[t._v(t._s(t.$t("text1"))+"：")]),t.isdes?s("h3",[t._v(" "+t._s("Heco"==t.chainName?t.$t("text2_heco"):t.$t("text2_bsc"))+"：")]):t._e(),t.isdes?s("p",[t._v(t._s("Heco"==t.chainName?t.$t("text3_heco"):t.$t("text3_bsc")))]):t._e(),t.isairdrop?s("h3",[t._v(" "+t._s("Heco"==t.chainName?t.$t("text4_heco"):t.$t("text4_bsc"))+"：")]):t._e(),t.isairdrop?s("p",[t._v(t._s("Heco"==t.chainName?t.$t("text5_heco"):t.$t("text5_bsc")))]):t._e(),s("hr"),s("p",[t._v(t._s(t.$t("text6"))+t._s(t.$t("text7")))])])]):t._e()])},p=[],v={name:"Rule",data:function(){return{modelShow:!1,isairdrop:!1,isdes:!0}},methods:{showModel:function(t,a){this.isairdrop=t,this.isdes=a,this.modelShow=!0},hideModel:function(){this.isairdrop=!1,this.isdes=!1,this.modelShow=!1}}},f=v,C=(e("50fc"),Object(_["a"])(f,b,p,!1,null,"03d90eeb",null)),g=C.exports,y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"repurchase",class:t.chainName},[t.isPC?s("div",{staticClass:"container"},[s("div",{staticClass:"repo-record"},[s("div",{staticClass:"record-title text Bold"},[s("span",[t._v(" "+t._s(t.$t("buyHistory")))]),s("a",{attrs:{href:t.urlInfo[t.chainName],target:"_blank"}},[s("span",[t._v(" "+t._s(t.$t("seeMores")))]),s("span",{staticClass:"rule__button-icon"})])]),s("div",{staticClass:"record-table"},[t.listData.length?s("div",{staticClass:"repurchase__table"},[s("div",{staticClass:"repurchase__table-head text Bold"},[s("div",{staticClass:"repurchase__table-head-column column-1"},[t._v(" "+t._s(t.$t("hash"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-2"},[t._v(" "+t._s(t.$t("block"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-4"},[t._v(" "+t._s(t.$t("send"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-5"}),s("div",{staticClass:"repurchase__table-head-column column-6"},[t._v(" "+t._s(t.$t("receive"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-7"},[t._v(" "+t._s(t.$t("price"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-8"},[t._v(" "+t._s(t.$t("amount"))+" ")])]),s("div",{staticClass:"repurchase__table-body numbers"},t._l(t.listData,(function(a){return s("div",{key:a.trans_hash,staticClass:"repurchase__table-body-row"},[s("div",{staticClass:"repurchase__table-body-column column-1 text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/tx/"+a.trans_hash+"?"+t.globalLanguage}},[t._v(" "+t._s(a.trans_hash)+" ")])]),s("div",{staticClass:"repurchase__table-body-column column-2"},[t._v(" "+t._s(a.block_number)+" ")]),s("div",{staticClass:"repurchase__table-body-column column-4 text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/address/"+a.addr_from+"?"+t.globalLanguage}},[t._v(" "+t._s(a.addr_from))])]),t._m(0,!0),s("div",{staticClass:"repurchase__table-body-column column-6 text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/address/"+a.addr_to+"?"+t.globalLanguage}},[t._v(t._s(a.addr_to))])]),s("div",{staticClass:"repurchase__table-body-column column-7"},[t._v(" $"+t._s(Number(a.price).toFixed(4))+" ")]),s("div",{staticClass:"repurchase__table-body-column column-8"},[t._v(" "+t._s(Number(a.amount).toFixed(4))+" ")])])})),0)]):t._e(),t.listData.length?t._e():s("div",{staticClass:"empty"},[s("img",{attrs:{src:e("1427")}}),s("p",[t._v(t._s(t.$t("empptyData")))])])])])]):t._e(),t.isMobile?s("div",{staticClass:"container text"},[s("div",{staticClass:"repo-record"},[s("div",{staticClass:"record-title"},[t._v(" "+t._s(t.$t("buyHistory"))+" "),s("a",{attrs:{href:t.urlInfo[t.chainName],target:"_blank"}},[s("span",[t._v(" "+t._s(t.$t("seeMores")))]),s("span",{staticClass:"rule__button-icon"})])]),s("div",{staticClass:"record-table"},[t.listData.length?s("div",{staticClass:"repurchase__table"},[s("div",{staticClass:"repurchase__table-head text Bold"},[s("div",{staticClass:"repurchase__table-head-column column-1"},[s("div",{staticClass:"repurchase__table-head-row"},[t._v(t._s(t.$t("hash")))]),s("div",{staticClass:"repurchase__table-head-row margin-top-4"},[t._v(" "+t._s(t.$t("block"))+" ")])]),s("div",{staticClass:"repurchase__table-head-column column-2"},[s("div",{staticClass:"repurchase__table-head-row"},[t._v(t._s(t.$t("price")))]),s("div",{staticClass:"repurchase__table-head-row margin-top-4"},[t._v(" "+t._s(t.$t("amount"))+" ")])]),s("div",{staticClass:"repurchase__table-head-column column-3"},[s("div",{staticClass:"repurchase__table-head-row"},[t._v(t._s(t.$t("send")))]),s("div",{staticClass:"repurchase__table-head-row margin-top-4"},[t._v(" "+t._s(t.$t("receive"))+" ")])]),s("div",{staticClass:"repurchase__table-head-column column-4"})]),s("div",{staticClass:"repurchase__table-body numbers"},t._l(t.listData,(function(a){return s("div",{key:a.trans_hash,staticClass:"repurchase__table-body-row"},[s("div",{staticClass:"repurchase__table-body-column-warp column-1"},[s("div",{staticClass:"repurchase__table-body-column  text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/tx/"+a.trans_hash+"?"+t.globalLanguage}},[t._v(" "+t._s(a.trans_hash)+" ")])]),s("div",{staticClass:"repurchase__table-body-column"},[t._v(" "+t._s(a.block_number)+" ")])]),s("div",{staticClass:"repurchase__table-body-column-warp column-2"},[s("div",{staticClass:"repurchase__table-body-column"},[t._v(" $"+t._s(Number(a.price).toFixed(3))+" ")]),s("div",{staticClass:"repurchase__table-body-column"},[t._v(" "+t._s(Number(a.amount).toFixed(2))+" ")])]),s("div",{staticClass:"repurchase__table-body-column-warp column-3"},[s("div",{staticClass:"repurchase__table-body-column text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/address/"+a.addr_from+"?"+t.globalLanguage}},[t._v(" "+t._s(a.addr_from))])]),s("div",{staticClass:"repurchase__table-body-column text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/address/"+a.addr_to+"?"+t.globalLanguage}},[t._v(t._s(a.addr_to))])])]),s("div",{staticClass:"repurchase__table-body-column-warp column-4 numbers SemiBold"},[s("a",{staticClass:"repurchase__table-button",attrs:{target:"_blank",href:t.url[t.chainName]+"/tx/"+a.trans_hash+"?"+t.globalLanguage}},[t._v("Link")])])])})),0)]):t._e(),t.listData.length?t._e():s("div",{staticClass:"empty"},[s("img",{directives:[{name:"show",rawName:"v-show",value:"Bsc"==t.chainName,expression:"chainName=='Bsc'"}],attrs:{src:e("7312")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:"Heco"==t.chainName,expression:"chainName=='Heco'"}],attrs:{src:e("1427")}}),s("p",[t._v(t._s(t.$t("empptyData")))])])])])]):t._e()])},w=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"repurchase__table-body-column column-5"},[e("span",{staticClass:"repurchase__table-body-icon"})])}],$=e("ed08"),x=null,k={name:"Repurchase",data:function(){return{url:{Bsc:"https://bscscan.com",Heco:"https://hecoinfo.com"},urlInfo:{Bsc:" https://bscscan.com/address/0x1308AF6853B449d7604C7544cb2170248527110F",Heco:" https://hecoinfo.com/address/0x46900c0c18ace98baab81561b9906dc93287910c"}}},beforeCreate:function(){this.$store.dispatch("boardRoom/getDestroyList")},methods:{formatData:function(t){return Object($["d"])(t,"/").ymdhms}},computed:{listData:function(){return this.$store.state.boardRoom.destroyList}},beforeDestroy:function(){clearInterval(x)}},T=k,D=(e("f332"),Object(_["a"])(T,y,w,!1,null,"797f2926",null)),R=D.exports,N=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"boardroom__container"},[t.isPC?s("div",{staticClass:"container"},[s("selete-table",{ref:"operation",attrs:{autoTap:!0,list:"Heco"==t.chainName?t.listNameHeco:t.listNameBsc,inputText:t.isPC?t.$t("search"):t.$t("searchText"),kind:"Reward"},on:{"change-list":t.onList,"change-list-item":t.onListItem,"change-input":function(a){t.searchValue=a},"switch-change-list":function(a){t.switchStatus=a},onchenck:t.onActionChenck}}),s("div",{staticClass:"boardroom__content text"},[t._l(t.currentBoardroomData,(function(a,e){return[s("div",{directives:[{name:"show",rawName:"v-show",value:t.listShowStatus(a),expression:"listShowStatus(item)"}],key:e+"i",staticClass:"boardroom__content-item"},[s("div",{staticClass:"airdrop"},[s("img",{attrs:{src:t.getDigPic(a.pool_type),alt:""}}),t._l(t.getListHeaderInfo(a),(function(a,e){return s("div",{key:"getListHeaderInfo"+e,staticClass:"wait-airdrop"},[s("div",{staticClass:"wait-title"},[t._v(t._s(t.$t(a.text))+"($)")]),s("div",{staticClass:"wait-info numbers"},[s("CountUp",{attrs:{endVal:a.num}})],1)])}))],2),s("div",{staticClass:"icon-container"},[s("div",{staticClass:"icon-wrap"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:t.getLpImgUrl(a),alt:""}})]),s("div",{staticClass:"info"},[s("p",{staticClass:"ht-price textEn"},[t._v(t._s(a.name))])])]),s("div",{staticClass:"icon-wrap w200"},[t.isDoubleBenefit(a.earnedToken)?s("div",{staticClass:"icon-wrap"},[s("div",{staticClass:"centered-bar"},[s("div",{staticClass:"centered"},[s("img",{attrs:{src:t.getImgUrl(a.earned_token),alt:""}}),t._v(t._s(a.earned_token))]),s("div",{staticClass:"centered"},[s("img",{attrs:{src:t.getImgUrl(a.pool_name),alt:""}}),t._v(t._s(a.pool_name))])]),t._m(0,!0)]):s("div",{staticClass:"icon-wrap"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:t.getImgUrl(a.earnedToken),alt:""}})]),s("div",{staticClass:"info"},[s("p",{staticClass:"ht-price textEn"},[t._v(" "+t._s(a.earnedToken)+" "),s("span",[t._v("Earned")])])])])]),s("div",{staticClass:"value-warp"},[s("div",{staticClass:"key"},[t._v("APY")]),s("div",{staticClass:"value numbers"},[s("CountUp",{attrs:{endVal:Number(a.pool_apy>0?t.getApy(a):0)}}),t._v("% "),t.hoverIndex==e?s("div",{staticClass:"topic_content"},[s("ApyTopic",{attrs:{apy:Number(a.pool_apy||0),item:a,kind:3==a.pool_type?"lockup":"Reward"}})],1):t._e(),a.pool_apy>0?s("div",{staticClass:"topic"},[s("img",{attrs:{src:"Heco"==t.chainName?t.hecoTopic:t.bscTopic,alt:""},on:{mouseover:function(a){t.hoverIndex=e},mouseleave:function(a){t.hoverIndex=-1}}})]):t._e()],1)]),s("div",{staticClass:"value-warp w250"},[s("div",{staticClass:"key"},[t._v("TVL")]),s("div",{staticClass:"value value2 numbers"},[t._v(" $"),s("CountUp",{attrs:{endVal:Number(a.pool_tvl||0)}}),s("span",{staticClass:"pr5"}),3==a.pool_type?[t.hoverIndex==e+999?s("div",{staticClass:"topic_content"},[s("ApyTopic",{attrs:{apy:Number(a.pool_apy||0),item:a,kind:"lockup",type:"4"}})],1):t._e(),a.pool_apy>0?s("div",{staticClass:"topic"},[s("img",{attrs:{src:"Heco"==t.chainName?t.hecoTopic:t.bscTopic,alt:""},on:{mouseover:function(a){t.hoverIndex=e+999},mouseleave:function(a){t.hoverIndex=-1}}})]):t._e()]:t._e()],2)]),s("div",{staticClass:"value-warp w250"},[s("div",{staticClass:"key"},[t._v(t._s(t.$t("Reward")))]),s("div",{staticClass:"value"},[t.isDoubleBenefit(a.earnedToken)?s("div",[s("div",{staticClass:"numbers"},[s("div",[s("span",{staticClass:"numbers"},[s("CountUp",{attrs:{options:t.options,endVal:Number(a.__reward["earn"])}})],1),t._v(t._s(a.earned_token))]),s("div",[s("span",{staticClass:"numbers"},[s("CountUp",{attrs:{options:t.options,endVal:Number(a.__reward["mdx"])}})],1),t._v(t._s(a.pool_name))])])]):s("div",[s("span",{staticClass:"numbers"},[s("CountUp",{attrs:{options:t.options,endVal:Number(a.__reward)}})],1),s("span",{staticClass:"textEn"},[t._v(t._s(a.earnedToken))])])])]),s("div",{staticClass:"boardroom__content-button-warp"},[s("div",{staticClass:"boardroom__content-button"},[s("span",{staticClass:"span",on:{click:function(e){return t.toPool(a)}}},[t._v(t._s(t.$t("Stakeds")))]),s("span",[t._v("|")]),s("a",{staticClass:"span",attrs:{href:t.globalGetTokenConfig(a),target:"_blank"}},[t._v(t._s(t.$t("transactions")))])])])])])]})),t.currentBoardroomData.length?t._e():s("div",{staticClass:"empty"},[s("img",{attrs:{src:e("1427")}}),s("p",[t._v(t._s(t.$t("empptyData")))])])],2)],1):t._e(),t.isMobile?s("div",{staticClass:"container"},[s("selete-table",{ref:"operation",attrs:{list:"Heco"==t.chainName?t.listNameHeco:t.listNameBsc,inputText:t.isPC?t.$t("search"):t.$t("searchText"),kind:"Reward"},on:{"change-list":t.onList,"change-list-item":t.onListItem,"change-input":function(a){t.searchValue=a},"switch-change-list":function(a){t.switchStatus=a},onchenck:t.onh5Chenck}}),s("h5-table-title",{attrs:{name:2==t.tabValue?t.$t("TradesLP"):t.$t("Trades"),transaction:"TVL",kind:"Reward",PersonalIncome:t.$t("Reward"),reward:t.$t("DailyReward"),APY:"APY",sortType:t.sortType,sortSide:t.sortSide},on:{sort:t.onh5Sort}}),t._l(t.currentBoardroomData,(function(a,e){return s("h5-table",{key:e+"t",attrs:{name:a.name,transaction:a.pool_tvl,reward:a.amount,APY:a.pool_apy,PersonalIncome:a.__reward,show:t.boolChenck,index:e,item:a,needApy:!0,kind:"Reward"},on:{ontable:function(e){return t.toPool(a)}}})})),0==t.currentBoardroomData.length?s("p",{staticClass:"emptyData"},[t._v(t._s(t.$t("empptyData")))]):t._e()],2):t._e()])},L=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"info"},[e("p",{staticClass:"ht-price textEn"},[e("span",[t._v("Earned")])])])}],S=e("5530"),B=(e("159b"),e("4de4"),e("4d63"),e("ac1f"),e("25f0"),e("b0c0"),e("b64b"),e("99af"),e("caad"),e("2532"),e("837b")),A=e("e150"),H=e("896e"),P=e("fcd9"),V=e("a2e3"),I=e("99ee"),E={name:"Boardroom",data:function(){return{hoverIndex:-1,bscTopic:e("994b"),hecoTopic:e("5312"),PersonalIncome:0,actionChenck:!1,boolChenck:!1,sortType:"3",sortSide:"1",tabValue:1,options:{decimalPlaces:4},currencyTabValue:"all",searchValue:"",tableSortType:1,tableSortKey:"apy",switchStatus:!0}},components:{SeleteTable:A["a"],"h5-table-title":H["a"],"h5-table":P["a"],ApyTopic:V["a"],LockupTopic:I["a"]},computed:{listNameHeco:function(){return[{name:this.$t("all"),show:!0,child:[{name:this.$t("all"),show:!0},{name:"WHT",show:!1},{name:"MDX",show:!1}]}]},listNameBsc:function(){return[{name:this.$t("all"),show:!0,child:[{name:this.$t("all"),show:!0},{name:"HMDX",show:!1},{name:"MDX",show:!1}]}]},mobileCountUpOptions:function(){var t=this;return{formattingFn:function(a){return Object($["g"])(Object($["c"])(a,1e4),1)+t.$t("unit")}}},coinConfig:function(){return B["a"][this.chainId]},currentAddress:function(){return this.$store.getters.currentAddress},earn:function(){return this.$store.state.boardRoom.earn},boardroomData:function(){return 1===this.tabValue?this.boardRoomDataAll:2===this.tabValue?this.boardRoomDataLP:3===this.tabValue?this.boardRoomDataSingle:void 0},poolReward:function(){return this.$store.state.boardRoom.poolReward},currentBoardroomData:function(){var t=this,a=[],e=this.boardroomData,s=function(a){var e=t.poolReward[3==a.pool_type?"lock":a.earned_token.toLocaleLowerCase()];return e?e[a.pid]:0};if(e.forEach((function(t){var e=Object(S["a"])(Object(S["a"])({},t),{},{__reward:s(t)});a.push(e)})),"all"!==this.currencyTabValue&&(a=a.filter((function(a){return a.earnedToken.toUpperCase()===t.currencyTabValue.toUpperCase()}))),this.searchValue){var o=new RegExp(this.searchValue,"gi");a=a.filter((function(t){return o.test(t.earnedToken)||o.test(t.name)}))}return a=this.switchStatus?a.filter((function(t){return Number(t.amount||0)>0})):a.filter((function(t){return 0===Number(t.amount||0)})),this.tableSortType&&this.tableSortKey&&(1===this.tableSortType&&a.sort((function(a,e){return e[t.tableSortKey]-a[t.tableSortKey]})),2===this.tableSortType&&a.sort((function(a,e){return a[t.tableSortKey]-e[t.tableSortKey]}))),a},boardRoomDataLP:function(){return this.$store.getters["boardRoom/currentChainBoardRoomDataLP"]},boardRoomDataSingle:function(){return this.$store.getters["boardRoom/currentChainBoardRoomDataSingle"]},boardRoomDataAll:function(){return this.$store.getters["boardRoom/currentChainBoardRoomDataAll"]}},methods:{listShowStatus:function(t){return 2==t.pool_type?!this.actionChenck||0!=t.__reward["earn"]&&0!=t.__reward["mdx"]:!this.actionChenck||0!==Number(t.__reward)},getApy:function(t){if(3==t.pool_type){var a=t["weights"],e=Object.keys(a).length;return 100*Math.pow(1+t.pool_apy*a[e-1]/365/100,365)-100}return 100*Math.pow(1+t.pool_apy/365/100,365)-100},getDigPic:function(t){var a={1:e("2da7"),2:e("274e"),3:e("e40a")};return a[t]},getListHeaderInfo:function(t){return[{text:"TotalAirdropRewards",num:Number(t.total_amount||0)},{text:"CurrentAirdropRewards",num:Number(t.amount||0)},{text:"MounthAirdropRewards",num:Number(30*t.amount||0)}]},onh5Sort:function(t,a,e){t&&(this.sortType=t,this.tableSortKey=3==t?"pool_apy":1==t?"amount":4==t?"pool_tvl":"__reward",this.sortSide=1==e?"1":"0",this.tableSortType=e)},onList:function(t){var a=t.index;this.changeTabValue(a+1)},onListItem:function(t){var a=t.item,e=t.index,s=0===e?"all":a.name;this.changeCurrencyTabValue(s)},onActionChenck:function(){this.actionChenck=!this.actionChenck},onh5Chenck:function(t){this.boolChenck=t},toPool:function(t){if(1!=this.chainId){var a=t.earned_token.toLowerCase(),e=3==t.pool_type?"/pool/lockup/".concat(a):"/pool/boardroom/".concat(a,"/").concat(t.pid);this.$router.push({path:e})}},resetTable:function(){this.currencyTabValue="all",this.tableSortType=0,this.tableSortKey="",this.$refs.operation.resetTable()},changeTabValue:function(t){this.tabValue=t,this.resetTable()},changeCurrencyTabValue:function(t){this.currencyTabValue=t},sortTable:function(t){t===this.tableSortKey?this.tableSortType=1===this.tableSortType?2:1:this.tableSortType=1,this.tableSortKey=t},getImgUrl:function(t){return this.coinConfig?this.globalGetImgUrl(this.coinConfig[t.toLowerCase()]):""},getLpImgUrl:function(t){return this.globalGetImgUrl(t.lpAddress)},isDoubleBenefit:function(t){return t.includes("&")}}},O=E,U=(e("1d23"),Object(_["a"])(O,N,L,!1,null,"334941c2",null)),M=U.exports,j={name:"Boardroom",components:{Rule:g,Reward:M,Repurchase:R,Combustion:m,TitleBanner:r["a"]},data:function(){return{boardroomTab:1,tist:e("79e5"),stakedOptions:{decimalPlaces:4},hecoJump:e("5c91"),bscJump:e("173c")}},computed:{getTabList:function(){return[{name:"airdropRewards",paramList:[{text:"".concat(this.$i18n.t("PendingAirdropRewards"),"(HECO&BSC)"),val:this.allChainData.reward_amount||0},{text:"".concat(this.$i18n.t("TotalAirdropRewards"),"(HECO&BSC)"),val:this.allChainData.boardroom_rewards||0},{text:this.$i18n.t("TotalRewardAmountOfTheDay"),val:this.todayReward},{text:this.$i18n.t("EstimatedTotalRewardAmountOfTheMonth"),val:30*this.todayReward}]},{name:"Repurchase",paramList:[{text:"".concat(this.$i18n.t("AmountToBeRepurchased"),"(HECO&BSC)"),val:this.allChainData.repurch_amount||0},{text:this.$i18n.t("RepurchasePrice"),val:Math.round(1e4*this.rewardeData.destoryPrice)/1e4},{text:"".concat(this.$i18n.t("TotalRepurchaseAndDestructionQuantity"),"(HECO&BSC)"),val:this.allChainData.destroy_mdx||0},{text:"".concat(this.$i18n.t("TotalRepurchaseAmount"),"(HECO&BSC)"),val:this.allChainData.total_repurch||0}]},{name:"Combustion",paramList:[{text:"".concat(this.$i18n.t("CombustionNum"),"(HECO&BSC)"),val:+this.combustionData["total_destroy_mdx"]},{text:"".concat(this.$i18n.t("CombustionAmount"),"(HECO&BSC)"),val:+this.combustionData["total_destroy_usdt"]}]}]},allChainData:function(){return this.$store.state.allChain},rewardeData:function(){return this.$store.state.boardRoom.rewardeData},combustionData:function(){return this.$store.state.buyBack.combustionData},todayReward:function(){var t=0;if(this.$store.getters["boardRoom/currentChainBoardRoomData"]){var a=this.$store.getters["boardRoom/currentChainBoardRoomData"]["allData"];t=a.reduce((function(t,a){return t+Number(a.amount)}),0)}return t}},methods:{changeBoardroomTab:function(t){this.boardroomTab=t},showRule:function(){1===this.boardroomTab&&this.$refs.rule.showModel(!0,!1),2===this.boardroomTab&&this.$refs.rule.showModel(!1,!0)}}},K=j,F=(e("9661"),Object(_["a"])(K,s,o,!1,null,"4a79350e",null));a["default"]=F.exports}}]);