(this.webpackJsonpdatakind=this.webpackJsonpdatakind||[]).push([[22,28],{111:function(e,t,i){"use strict";var r=i(2),n=function(){return n=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};var c=function(e){var t=e.animate,i=e.backgroundColor,c=e.backgroundOpacity,a=e.baseUrl,s=e.children,o=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,b=e.interval,j=e.rtl,f=e.speed,O=e.style,m=e.title,h=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=u||Math.random().toString(36).substring(6),v=g+"-diff",y=g+"-animated-diff",p=g+"-aria",x=j?{transform:"scaleX(-1)"}:null,N="0; "+b+"; 1",C=f+"s";return Object(r.createElement)("svg",n({"aria-labelledby":p,role:"img",style:n(n({},O),x)},h),m?Object(r.createElement)("title",{id:p},m):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+v+")",style:{fill:"url("+a+"#"+y+")"}}),Object(r.createElement)("defs",null,Object(r.createElement)("clipPath",{id:v},s),Object(r.createElement)("linearGradient",{id:y},Object(r.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:c},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:c},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite"})))))};c.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var a=function(e){return e.children?Object(r.createElement)(c,n({},e)):Object(r.createElement)(s,n({},e))},s=function(e){return Object(r.createElement)(a,n({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=a},139:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(25);function n(e,t){var i;if(void 0===t){var n,c=Object(r.a)(e);try{for(c.s();!(n=c.n()).done;){var a=n.value;null!=a&&(i>a||void 0===i&&a>=a)&&(i=a)}}catch(u){c.e(u)}finally{c.f()}}else{var s,o=-1,l=Object(r.a)(e);try{for(l.s();!(s=l.n()).done;){var d=s.value;null!=(d=t(d,++o,e))&&(i>d||void 0===i&&d>=d)&&(i=d)}}catch(u){l.e(u)}finally{l.f()}}return i}},173:function(e,t,i){"use strict";i.r(t);var r=i(102),n=i(46),c=i(111),a=i(19),s=function(){var e=window.innerWidth,t=e>=769?480:e,i=1200;return Object(a.jsxs)(c.a,{viewBox:"0 0 ".concat(t," ").concat(i),height:i,width:t,speed:2,children:[Object(a.jsx)("circle",{cx:.4*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.5*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.6*t,cy:600,r:"5"})]})},o=i(11),l=i(112),d=i(24),u=i(95),b=i(93),j=i.n(b),f=i(139),O=i(68),m=i(81),h=i(91),g=i.n(h),v=i(2),y=i(281),p=i(193),x=i(275),N=Object(v.lazy)((function(){return Object(d.l)((function(){return Promise.all([i.e(1),i.e(3),i.e(17)]).then(i.bind(null,287))}))})),C=Object(v.lazy)((function(){return Object(d.l)((function(){return Promise.all([i.e(1),i.e(3),i.e(16),i.e(42)]).then(i.bind(null,262))}))}));function k(e){var t,i=this,c=e.stateCode,b=e.timeseries,h=e.date,g=e.regionHighlighted,k=e.setRegionHighlighted,E=e.anchor,w=e.setAnchor,S=e.expandTable,D=void 0!==S&&S,H=e.hideVaccinated,M=void 0!==H&&H,R=e.noRegionHighlightedDistrictData,J=Object(y.a)().t,P=Object(p.a)("timeseriesLookbackDays",90),T=Object(n.a)(P,2),I=T[0],U=T[1],L=Object(p.a)("chartType","delta"),z=Object(n.a)(L,2),A=z[0],B=z[1],F=Object(p.a)("isUniform",!1),V=Object(n.a)(F,2),q=V[0],K=V[1],G=Object(p.a)("isLog",!1),W=Object(n.a)(G,2),X=W[0],Q=W[1],Y=Object(p.a)("isMovingAverage",!1),Z=Object(n.a)(Y,2),$=Z[0],_=Z[1],ee=Object.keys((null===b||void 0===b||null===(t=b[c])||void 0===t?void 0:t.dates)||{}),te=ee[0]||h||Object(d.h)(),ie=Object(f.a)([ee[ee.length-1],h||Object(d.h)()]),re=Object(v.useState)(ie),ne=Object(n.a)(re,2),ce=ne[0],ae=ne[1];Object(v.useEffect)((function(){ae(ie)}),[ie]);var se=null!==I?Object(O.a)(Object(m.a)(Object(d.k)(ce),I),{representation:"date"}):te,oe=Object(v.useRef)(),le=Object(l.a)(oe,{once:!0}),de=Object(x.a)().width,ue=Object(v.useMemo)((function(){var e;return(null===b||void 0===b||null===(e=b[g.stateCode])||void 0===e?void 0:e.districts)?{stateCode:g.stateCode,districtName:g.districtName}:{stateCode:g.stateCode,districtName:null}}),[b,g.stateCode,g.districtName]),be=Object(v.useMemo)((function(){var e,t,i,r;return ue.districtName?null===b||void 0===b||null===(e=b[ue.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(i=t[ue.districtName])||void 0===i?void 0:i.dates:null===b||void 0===b||null===(r=b[ue.stateCode])||void 0===r?void 0:r.dates}),[b,ue.stateCode,ue.districtName]),je=Object(v.useMemo)((function(){var e=Object.keys(b||{}).filter((function(e){return e!==c})).sort((function(e,t){return o.y[e].localeCompare(o.y[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(b||{}).reduce((function(e,t){var i;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===b||void 0===b||null===(i=b[t])||void 0===i?void 0:i.districts)||{}).reduce((function(e,i){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:i}])}),[])))}),[]);return[{stateCode:c,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[b,c]),fe=Object(v.useMemo)((function(){return je.find((function(e){return e.stateCode===g.stateCode&&e.districtName===g.districtName}))?je:[].concat(Object(r.a)(je),[{stateCode:g.stateCode,districtName:g.districtName}])}),[g.stateCode,g.districtName,je]),Oe=Object(v.useMemo)((function(){return Object.keys(be||{}).filter((function(e){return e<=ie}))}),[be,ie]),me=Object(v.useMemo)((function(){return Oe.filter((function(e){return se<=e&&e<=ce}))}),[Oe,se,ce]),he=Object(v.useCallback)((function(e){var t=e.target;k(JSON.parse(t.value))}),[k]),ge=Object(v.useCallback)((function(){k({stateCode:c,districtName:null})}),[c,k]),ve=Object(v.useMemo)((function(){return o.F.filter((function(e){var t;return(!("vaccinated"===(null===(t=o.z[e])||void 0===t?void 0:t.category))||!M)&&("delta"===A||"tpr"!==e)}))}),[A,M]);return Object(a.jsxs)("div",{className:j()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===E},{expanded:D}),style:{display:E&&"timeseries"!==E&&(!D||de<769)?"none":""},ref:oe,children:[Object(a.jsxs)("div",{className:"timeseries-header",children:[Object(a.jsx)("div",{className:j()("anchor","fadeInUp",{stickied:"timeseries"===E}),style:{display:D&&de>=769?"none":""},onClick:w&&w.bind(this,"timeseries"===E?null:"timeseries"),children:Object(a.jsx)(u.r,{})}),Object(a.jsx)("h1",{children:J("Spread Trends")}),Object(a.jsx)("div",{className:"tabs",children:Object.entries(o.D).map((function(e,t){var r=Object(n.a)(e,2),c=r[0],s=r[1];return Object(a.jsx)("div",{className:"tab ".concat(A===c?"focused":""),onClick:B.bind(i,c),children:Object(a.jsx)("h4",{children:J(s)})},c)}))}),Object(a.jsxs)("div",{className:"timeseries-options",children:[Object(a.jsxs)("div",{className:"scale-modes",children:[Object(a.jsx)("label",{className:"main",children:"".concat(J("Scale Modes"),":")}),Object(a.jsxs)("div",{className:"timeseries-mode",children:[Object(a.jsx)("label",{htmlFor:"timeseries-mode",children:J("Uniform")}),Object(a.jsx)("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:q,"aria-label":J("Checked by default to scale uniformly."),onChange:K.bind(this,!q)})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"!==A?"disabled":""),children:[Object(a.jsx)("label",{htmlFor:"timeseries-logmode",children:J("Logarithmic")}),Object(a.jsx)("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===A&&X,className:"switch",disabled:"total"!==A,onChange:Q.bind(this,!X)})]})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"===A?"disabled":""," moving-average"),children:[Object(a.jsx)("label",{htmlFor:"timeseries-moving-average",children:J("7 day Moving Average")}),Object(a.jsx)("input",{id:"timeseries-moving-average",type:"checkbox",checked:"delta"===A&&$,className:"switch",disabled:"delta"!==A,onChange:_.bind(this,!$)})]})]})]}),fe&&Object(a.jsxs)("div",{className:"state-selection",children:[Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)("select",{value:JSON.stringify(ue),onChange:he,children:fe.filter((function(e){return o.y[e.stateCode]!==e.districtName})).map((function(e){return Object(a.jsx)("option",{value:JSON.stringify(e),children:e.districtName?J(e.districtName):J(o.y[e.stateCode])},"".concat(e.stateCode,"-").concat(e.districtName))}))})}),Object(a.jsx)("div",{className:"reset-icon",onClick:ge,children:Object(a.jsx)(u.u,{})})]}),le&&Object(a.jsxs)(v.Suspense,{fallback:Object(a.jsx)(s,{}),children:[Object(a.jsx)(N,{timeseries:be,regionHighlighted:ue,dates:me,statistics:ve,endDate:ie,chartType:A,isUniform:q,isLog:X,isMovingAverage:$,noRegionHighlightedDistrictData:R}),Object(a.jsx)(C,{timeseries:be,regionHighlighted:ue,currentBrushSelection:[se,ce],animationIndex:ve.length,dates:Oe,endDate:ie,lookback:I,setBrushSelectionEnd:ae,setLookback:U})]}),!le&&Object(a.jsx)("div",{style:{height:"50rem"}}),Object(a.jsx)("div",{className:"pills fadeInUp",style:{animationDelay:"".concat(250*(1+ve.length),"ms")},children:o.E.map((function(e){return Object(a.jsx)("button",{type:"button",className:j()({selected:e===I}),onClick:U.bind(i,e),children:null!==e?"".concat(e," ").concat(J("days")):J("Beginning")},e)}))})]})}var E=function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!g()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!g()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!g()(t.date,e.date)&&(!!g()(t.anchor,e.anchor)&&(!!g()(t.expandTable,e.expandTable)&&(!!g()(t.hideVaccinated,e.hideVaccinated)&&!!g()(t.noRegionHighlightedDistrictData,e.noRegionHighlightedDistrictData))))))))};t.default=Object(v.memo)(k,E)},193:function(e,t,i){"use strict";var r=i(2),n=i(92);t.a=function(e,t,i){if(!n.a)return[t,n.b,n.b];if(!e)throw new Error("useLocalStorage key may not be falsy");var c=i?i.raw?function(e){return e}:i.deserializer:JSON.parse,a=Object(r.useRef)((function(e){try{var r=i?i.raw?String:i.serializer:JSON.stringify,n=localStorage.getItem(e);return null!==n?c(n):(t&&localStorage.setItem(e,r(t)),t)}catch(s){return t}})),s=Object(r.useState)((function(){return a.current(e)})),o=s[0],l=s[1];Object(r.useLayoutEffect)((function(){return l(a.current(e))}),[e]);var d=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(o):t;if("undefined"===typeof r)return;var n=void 0;n=i?i.raw?"string"===typeof r?r:JSON.stringify(r):i.serializer?i.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,n),l(c(n))}catch(s){}}),[e,l]),u=Object(r.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(s){}}),[e,l]);return[o,d,u]}},91:function(e,t,i){"use strict";e.exports=function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var r,n,c;if(Array.isArray(t)){if((r=t.length)!=i.length)return!1;for(n=r;0!==n--;)if(!e(t[n],i[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((r=(c=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(n=r;0!==n--;)if(!Object.prototype.hasOwnProperty.call(i,c[n]))return!1;for(n=r;0!==n--;){var a=c[n];if(!e(t[a],i[a]))return!1}return!0}return t!==t&&i!==i}}}]);
//# sourceMappingURL=22.52728b0f.chunk.js.map