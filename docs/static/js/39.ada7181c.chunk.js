(this.webpackJsonpdatakind=this.webpackJsonpdatakind||[]).push([[39],{157:function(t,c,a){"use strict";a.r(c);var n=a(49),e=a(46),i=a(11),s=a(93),o=a.n(s),l=a(2),r=a(54),d=a.n(r),u=a(97),b=a(114),f=a(19),O=void 0,j=function(t){var c=t.mapStatistic,a=t.setMapStatistic,s=Object(b.a)(),r=Object(e.a)(s,2),j=r[0],k=r[1].width,p=Object(l.useState)(!1),h=Object(e.a)(p,2),g=h[0],m=h[1],v=Object(l.useState)(0),x=Object(e.a)(v,2),S=x[0],w=x[1],y=i.k.indexOf(c)>=0,N=Object(u.useSpring)((function(){return{opacity:0,background:"".concat(i.z[c].color,"20"),transform:y?"translate3d(".concat(k*i.k.indexOf(c)/i.k.length,"px, 0, 0)"):null,width:"calc(".concat(100/i.k.length,"%)"),config:u.config.gentle}})),z=Object(e.a)(N,2),C=z[0],J=z[1];Object(l.useEffect)((function(){if(k>0){var t=i.k.indexOf(c)>=0;d.a.unstable_batchedUpdates((function(){var a;J.start({transform:t?"translate3d(".concat(k*i.k.indexOf(c)/i.k.length,"px, 0, 0)"):null,opacity:t?1:0,background:t?"".concat(null===(a=i.z[c])||void 0===a?void 0:a.color,"20"):null,delay:0===S?1500:0,onStart:m.bind(O,!0),onRest:m.bind(O,!1)})}))}}),[S,c,J,k]);var M=Object(l.useCallback)((function(t){w((function(t){return t+1})),a(t)}),[a]);return Object(f.jsxs)("div",{className:"MapSwitcher",ref:j,children:[Object(f.jsx)(u.animated.div,{className:"highlight",style:C}),i.k.map((function(t,c){return Object(f.jsx)("div",{className:o()("clickable",Object(n.a)({},"is-".concat(t),!g)),onClick:M.bind(O,t),style:{width:"calc(".concat(100/i.k.length,"%)")}},c)}))]})},k=function(t,c){return t.mapStatistic===c.mapStatistic};c.default=Object(l.memo)(j,k)}}]);
//# sourceMappingURL=39.ada7181c.chunk.js.map