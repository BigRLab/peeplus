(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7e0910c"],{"0b8d":function(t,a,s){},"2f3a":function(t,a,s){"use strict";s.r(a);for(var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-header-index-wide"},[s("a-row",{attrs:{gutter:24}},[s("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[s("chart-card",{attrs:{loading:t.loading,title:"总销售额",total:"￥126,560"}},[s("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[s("a-icon",{attrs:{type:"info-circle-o"}})],1),s("div",[s("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[s("span",{attrs:{slot:"term"},slot:"term"},[t._v("周同比")]),t._v("\n            12%\n          ")]),s("trend",{attrs:{flag:"down"}},[s("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v("\n            11%\n          ")])],1),s("template",{slot:"footer"},[t._v("日均销售额"),s("span",[t._v("￥ 234.56")])])],2)],1),s("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[s("chart-card",{attrs:{loading:t.loading,title:"访问量",total:t._f("NumberFormat")(8846)}},[s("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[s("a-icon",{attrs:{type:"info-circle-o"}})],1),s("div",[s("mini-area")],1),s("template",{slot:"footer"},[t._v("日访问量"),s("span",[t._v(" "+t._s(t._f("NumberFormat")("1234")))])])],2)],1),s("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[s("chart-card",{attrs:{loading:t.loading,title:"支付笔数",total:t._f("NumberFormat")(6560)}},[s("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[s("a-icon",{attrs:{type:"info-circle-o"}})],1),s("div",[s("mini-bar")],1),s("template",{slot:"footer"},[t._v("转化率 "),s("span",[t._v("60%")])])],2)],1),s("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[s("chart-card",{attrs:{loading:t.loading,title:"运营活动效果",total:"78%"}},[s("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[s("a-icon",{attrs:{type:"info-circle-o"}})],1),s("div",[s("mini-progress",{attrs:{color:"rgb(19, 194, 194)",target:80,percentage:78,height:"8px"}})],1),s("template",{slot:"footer"},[s("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"down"}},[s("span",{attrs:{slot:"term"},slot:"term"},[t._v("同周比")]),t._v("\n            12%\n          ")]),s("trend",{attrs:{flag:"up"}},[s("span",{attrs:{slot:"term"},slot:"term"},[t._v("日环比")]),t._v("\n            80%\n          ")])],1)],2)],1)],1),s("a-card",{attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"0"}}},[s("div",{staticClass:"salesCard"},[s("a-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[s("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[s("div",{staticClass:"extra-item"},[s("a",[t._v("今日")]),s("a",[t._v("本周")]),s("a",[t._v("本月")]),s("a",[t._v("本年")])]),s("a-range-picker",{style:{width:"256px"}})],1),s("a-tab-pane",{key:"1",attrs:{loading:"true",tab:"销售额"}},[s("a-row",[s("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[s("bar",{attrs:{data:t.barData,title:"销售额排行"}})],1),s("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[s("rank-list",{attrs:{title:"门店销售排行榜",list:t.rankList}})],1)],1)],1),s("a-tab-pane",{key:"2",attrs:{tab:"访问量"}},[s("a-row",[s("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[s("bar",{attrs:{data:t.barData2,title:"销售额趋势"}})],1),s("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[s("rank-list",{attrs:{title:"门店销售排行榜",list:t.rankList}})],1)],1)],1)],1)],1)]),s("div",{staticClass:"antd-pro-pages-dashboard-analysis-twoColLayout",class:t.isDesktop()?"desktop":""},[s("a-row",{attrs:{gutter:24}},[s("a-col",{attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[s("a-card",{style:{marginTop:"24px",minHeight:"500px"},attrs:{loading:t.loading,bordered:!1,title:"线上热门搜索"}},[s("a-dropdown",{attrs:{slot:"extra",trigger:["click"],placement:"bottomLeft"},slot:"extra"},[s("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[s("a-icon",{attrs:{type:"ellipsis"}})],1),s("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[t._v("操作一")])]),s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[t._v("操作二")])])],1)],1),s("a-row",{attrs:{gutter:68}},[s("a-col",{style:{marginBottom:" 24px"},attrs:{xs:24,sm:12}},[s("number-info",{attrs:{total:12321,"sub-total":17.1}},[s("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[s("span",[t._v("搜索用户数")]),s("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[s("a-icon",{style:{marginLeft:"8px"},attrs:{type:"info-circle-o"}})],1)],1)]),s("div",[s("mini-smooth-area",{style:{height:"45px"},attrs:{dataSource:t.searchUserData,scale:t.searchUserScale}})],1)],1),s("a-col",{style:{marginBottom:" 24px"},attrs:{xs:24,sm:12}},[s("number-info",{attrs:{total:2.7,"sub-total":26.2,status:"down"}},[s("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[s("span",[t._v("人均搜索次数")]),s("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[s("a-icon",{style:{marginLeft:"8px"},attrs:{type:"info-circle-o"}})],1)],1)]),s("div",[s("mini-smooth-area",{style:{height:"45px"},attrs:{dataSource:t.searchUserData,scale:t.searchUserScale}})],1)],1)],1),s("div",{staticClass:"ant-table-wrapper"},[s("a-table",{attrs:{"row-key":"index",size:"small",columns:t.searchTableColumns,dataSource:t.searchData,pagination:{pageSize:5}},scopedSlots:t._u([{key:"range",fn:function(a,e){return s("span",{},[s("trend",{attrs:{flag:0===e.status?"up":"down"}},[t._v("\n                  "+t._s(a)+"%\n                ")])],1)}}])})],1)],1)],1),s("a-col",{attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[s("a-card",{staticClass:"antd-pro-pages-dashboard-analysis-salesCard",style:{marginTop:"24px",minHeight:"500px"},attrs:{loading:t.loading,bordered:!1,title:"销售额类别占比"}},[s("div",{staticStyle:{height:"inherit"},attrs:{slot:"extra"},slot:"extra"},[s("span",{staticClass:"dashboard-analysis-iconGroup"},[s("a-dropdown",{attrs:{trigger:["click"],placement:"bottomLeft"}},[s("a-icon",{staticClass:"ant-dropdown-link",attrs:{type:"ellipsis"}}),s("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[t._v("操作一")])]),s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[t._v("操作二")])])],1)],1)],1),s("div",{staticClass:"analysis-salesTypeRadio"},[s("a-radio-group",{attrs:{defaultValue:"a"}},[s("a-radio-button",{attrs:{value:"a"}},[t._v("全部渠道")]),s("a-radio-button",{attrs:{value:"b"}},[t._v("线上")]),s("a-radio-button",{attrs:{value:"c"}},[t._v("门店")])],1)],1)]),s("h4",[t._v("销售额")]),s("div",[s("div",[s("v-chart",{attrs:{"force-fit":!0,height:405,data:t.pieData,scale:t.pieScale}},[s("v-tooltip",{attrs:{showTitle:!1,dataKey:"item*percent"}}),s("v-axis"),s("v-legend",{attrs:{dataKey:"item"}}),s("v-pie",{attrs:{position:"percent",color:"item",vStyle:t.pieStyle}}),s("v-coord",{attrs:{type:"theta",radius:.75,innerRadius:.6}})],1)],1)])])],1)],1)],1)],1)},r=[],o=s("c1df"),i=s.n(o),l=s("2af9"),n=s("ac0d"),c=[],d=[],m=0;m<12;m+=1)c.push({x:"".concat(m+1,"月"),y:Math.floor(1e3*Math.random())+200}),d.push({x:"".concat(m+1,"月"),y:Math.floor(1e3*Math.random())+200});for(var p=[],u=0;u<7;u++)p.push({name:"白鹭岛 "+(u+1)+" 号店",total:1234.56-100*u});for(var g=[],v=0;v<7;v++)g.push({x:i()().add(v,"days").format("YYYY-MM-DD"),y:Math.ceil(10*Math.random())});for(var h=[{dataKey:"x",alias:"时间"},{dataKey:"y",alias:"用户数",min:0,max:10}],f=[{dataIndex:"index",title:"排名",width:90},{dataIndex:"keyword",title:"搜索关键词"},{dataIndex:"count",title:"用户数"},{dataIndex:"range",title:"周涨幅",align:"right",sorter:function(t,a){return t.range-a.range},scopedSlots:{customRender:"range"}}],x=[],y=0;y<50;y+=1)x.push({index:y+1,keyword:"搜索关键词-".concat(y),count:Math.floor(1e3*Math.random()),range:Math.floor(100*Math.random()),status:Math.floor(10*Math.random()%2)});var b=s("7104"),_=[{item:"家用电器",count:32.2},{item:"食用酒水",count:21},{item:"个护健康",count:17},{item:"服饰箱包",count:13},{item:"母婴产品",count:9},{item:"其他",count:7.8}],w=[{dataKey:"percent",min:0,formatter:".0%"}],k=(new b.View).source(_);k.transform({type:"percent",field:"count",dimension:"item",as:"percent"});var C=k.rows,M={name:"Analysis",mixins:[n["c"]],components:{ChartCard:l["d"],MiniArea:l["h"],MiniBar:l["i"],MiniProgress:l["j"],RankList:l["n"],Bar:l["c"],Trend:l["s"],NumberInfo:l["l"],MiniSmoothArea:l["k"]},data:function(){return{loading:!0,rankList:p,searchUserData:g,searchUserScale:h,searchTableColumns:f,searchData:x,barData:c,barData2:d,pieScale:w,pieData:C,sourceData:_,pieStyle:{stroke:"#fff",lineWidth:1}}},created:function(){var t=this;setTimeout(function(){t.loading=!t.loading},1e3)}},S=M,D=(s("4f92"),s("2877")),B=Object(D["a"])(S,e,r,!1,null,"f930a2d6",null);a["default"]=B.exports},"4f92":function(t,a,s){"use strict";var e=s("0b8d"),r=s.n(e);r.a}}]);