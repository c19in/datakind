(this.webpackJsonpdatakind=this.webpackJsonpdatakind||[]).push([[36,35],{156:function(e,t,a){"use strict";a.r(t);var n=a(46),c=a(11),r=a(24),s=a(95),i=a(93),o=a.n(i),d=a(91),l=a.n(d),u=a(2),j=a(281),b=a(97),f=a(19);function h(e){var t=e.dose1,a=e.dose2,c=Object(j.a)().t,s=Object(u.useState)(2),i=Object(n.a)(s,2),d=i[0],l=i[1],h=Object(u.useRef)(!1),O=Object(b.useSpring)({dose1:t,dose2:a,from:{dose1:0,dose2:0},delay:h.current?0:2e3});return Object(u.useEffect)((function(){h.current=!0}),[]),Object(f.jsxs)("div",{className:"progress-bar-wrapper fadeInUp",style:{animationDelay:"".concat(2e3,"ms")},children:[Object(f.jsxs)("div",{className:o()("legend",{highlighted:1===d}),children:[Object(f.jsxs)("div",{className:"label-wrapper",children:[Object(f.jsx)(b.animated.div,{style:{width:O.dose1.to((function(e){return"calc(".concat(e,"% - 3rem)")}))}}),Object(f.jsx)("div",{className:"label",onMouseEnter:l.bind(this,1),onMouseLeave:l.bind(this,2),children:c("At least one dose")})]}),Object(f.jsx)(b.animated.div,{className:"arrow",style:{marginLeft:O.dose1.to((function(e){return"calc(".concat(e,"% - 0.3ch)")}))},children:"|"})]}),Object(f.jsxs)("div",{className:"progress-bar",children:[Object(f.jsx)(b.animated.div,{className:o()("progress-bar","value",{highlighted:1===d}),style:{width:O.dose1.to((function(e){return"".concat(e,"%")}))},onMouseEnter:l.bind(this,1),onMouseLeave:l.bind(this,2),children:Object(f.jsx)(b.animated.span,{children:O.dose1.to((function(e){return Object(r.f)(e,"%")}))})}),Object(f.jsx)(b.animated.div,{className:o()("progress-bar","value","opaque",{highlighted:2===d}),style:{width:O.dose2.to((function(e){return"".concat(e,"%")}))}})]}),a>0&&Object(f.jsxs)("div",{className:o()("legend",{highlighted:2===d}),children:[Object(f.jsx)(b.animated.div,{className:"arrow",style:{marginLeft:O.dose2.to((function(e){return"calc(".concat(e,"% - 0.3ch)")}))},children:"|"}),Object(f.jsxs)("div",{className:"label-wrapper",children:[Object(f.jsx)(b.animated.div,{style:{width:O.dose2.to((function(e){return"calc(".concat(e,"% - 4rem)")}))}}),Object(f.jsx)(b.animated.div,{className:"label",children:O.dose2.to((function(e){return"".concat(c("Fully vaccinated")," (").concat(Object(r.f)(e,"%"),")")}))})]})]})]})}function O(e){var t=e.data,a=Object(j.a)().t,n=Object(b.useSpring)({total:Object(r.i)(t,"total","vaccinated"),config:c.v}),i=c.z.vaccinated;return Object(f.jsxs)("div",{className:"level-vaccinated fadeInUp",style:{animationDelay:"".concat(1750,"ms")},children:[Object(f.jsx)(s.v,{}),Object(f.jsx)(b.animated.div,{children:n.total.to((function(e){return Object(r.f)(e,"long")}))}),Object(f.jsx)("div",{children:a(i.displayName)})]})}function v(e){var t=e.data,a=Object(r.i)(t,"total","vaccinated1",{normalizedByPopulationPer:"hundred"}),n=Object(r.i)(t,"total","vaccinated2",{normalizedByPopulationPer:"hundred"});return Object(f.jsxs)("div",{className:"VaccinationHeader",children:[Object(f.jsx)(O,{data:t}),Object(f.jsx)(h,{dose1:a,dose2:n})]})}b.Globals.assign({colors:null});var m=function(e,t){return!!l()(e.data,t.data)};t.default=Object(u.memo)(v,m)},91:function(e,t,a){"use strict";e.exports=function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var n,c,r;if(Array.isArray(t)){if((n=t.length)!=a.length)return!1;for(c=n;0!==c--;)if(!e(t[c],a[c]))return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((n=(r=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=n;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,r[c]))return!1;for(c=n;0!==c--;){var s=r[c];if(!e(t[s],a[s]))return!1}return!0}return t!==t&&a!==a}}}]);
//# sourceMappingURL=36.0feb40a6.chunk.js.map