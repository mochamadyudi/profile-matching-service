(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[26],{658:function(e,t,n){"use strict";var i=n(8),a=n(0),c=n(101),r=n(631),l=n(730),s=n(731),o=n(612),u=n(20),d=n(28),j=n(2),b=function(e){var t=e.children,n=e.background,c=e.className,r=e.overlap,l=e.navType,s=Object(a.useState)(0),o=Object(i.a)(s,2),u=o[0],b=o[1],m=Object(a.useRef)(null);Object(a.useEffect)((function(){if(l===d.d){var e=window.innerWidth,t=m.current.offsetWidth;b((e-t)/2)}}),[l]);return Object(j.jsx)("div",{ref:m,className:"page-header-alt ".concat(c||""," ").concat(r&&"overlap"),style:function(){var e={backgroundImage:n?"url(".concat(n,")"):"none"};return l===d.d&&(e.marginRight=-u,e.marginLeft=-u,e.paddingLeft=0,e.paddingRight=0),e}(),children:l===d.d?Object(j.jsx)("div",{className:"container",children:t}):Object(j.jsx)(j.Fragment,{children:t})})},m=(Object(u.b)((function(e){return{navType:e.theme.navType}}),{})(b),n(33)),h=n(177);var O=function(e){return Object(j.jsx)("div",{className:"".concat(["mk-mx-auto mk-max-w-screen-xl",null===e||void 0===e?void 0:e.className].join(" ")),children:e.children})};function p(e){var t=e.thumbnail,n=e.containerType,u=e.name,d=e.positionName,p=e.loading,v=e.size,f=e.extra,x=e.lookup,g=e.description,y=Object(a.useState)((function(){return"cyan"})),N=Object(i.a)(y,2),k=N[0];N[1];function T(){var n,i;return Object(j.jsxs)(c.a,{className:"py-2",mobileFlex:!1,justifyContent:"between",alignItems:"center",children:[Object(j.jsxs)(c.a,{className:null!==x&&void 0!==x&&x.thumbnail?"py-2":"py-4",mobileFlex:!1,justifyContent:"start",alignItems:"center",children:[(null===x||void 0===x?void 0:x.thumbnail)&&Object(j.jsx)("div",{className:["mk-w-[80px] mk-h-[80px] mk-rounded-full mk-overflow-hidden mk-flex mk-items-center mk-justify-center",t?"":"mk-bg-cyan-500"].join(" "),children:Object(j.jsx)(r.a,{loading:p,style:{background:"transparent"},size:null!==v&&void 0!==v?v:50,src:t?Object(j.jsx)(l.a,{preview:null!==(n=null===e||void 0===e?void 0:e.isPreview)&&void 0!==n&&n,width:null!==v&&void 0!==v?v:50,height:null!==v&&void 0!==v?v:50,style:{objectFit:"cover"},fallback:m.a.defaultImage,src:t}):null,children:t?null:m.a.getNameInitial(null!==u&&void 0!==u?u:"-")})}),Object(j.jsxs)("div",{className:null!==x&&void 0!==x&&x.thumbnail?"mx-4":"",children:[Object(j.jsx)(s.a.Title,{level:3,style:{lineHeight:1},className:"m-0 mb-2",children:u}),"boolean"!==typeof g&&""!==g&&null!==g&&Object(j.jsx)("div",{className:"mb-2",children:Object(j.jsx)(s.a.Text,{children:g})}),(null===x||void 0===x?void 0:x.positionName)&&(d&&"string"===typeof d?Object(j.jsx)(o.a,{color:null!==(i=null===e||void 0===e?void 0:e.positionColor)&&void 0!==i?i:k,children:null!==d&&void 0!==d?d:"-"}):Array.isArray(d)&&d.length>0?Object(j.jsx)(c.a,{alignItems:"center",children:d.map((function(t,n){var i;return"string"===typeof t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.a,{color:null!==(i=null===e||void 0===e?void 0:e.positionColor)&&void 0!==i?i:k,children:null!==t&&void 0!==t?t:"-"}),n<d.length-1&&Object(j.jsx)("div",{style:{width:"7px",height:"7px",borderRadius:"4px",margin:"0 10px 0 -2px",background:"#939393",opacity:.5}})]}):""}))}):null)]})]}),f&&f]})}return Object(j.jsx)(b,{className:"border-bottom",overlap:!0,children:function(e){switch(e){case"antd":case"primary":return Object(j.jsx)(O,{children:Object(j.jsx)(T,{})});default:return Object(j.jsx)(h.a,{children:Object(j.jsx)(T,{})})}}(n)})}p.defaultProps={containerType:"tailwind",lookup:{thumbnail:!0,positionName:!0},description:!1,name:null,positionName:null,loading:null,extra:null};t.a=p},660:function(e,t,n){"use strict";var i=n(1),a=(n(0),n(631)),c=n(2),r=function(e){return Object(c.jsx)(a.a,Object(i.a)(Object(i.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))};t.a=function(e){var t=e.name,n=e.suffix,i=e.subTitle,a=e.id,l=e.type,s=e.src,o=e.icon,u=e.size,d=e.shape,j=e.gap,b=e.text,m=e.onNameClick;return Object(c.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[r({icon:o,src:s,type:l,size:u,shape:d,gap:j,text:b}),Object(c.jsxs)("div",{className:"ml-2",children:[Object(c.jsxs)("div",{children:[m?Object(c.jsx)("div",{onClick:function(){return m({name:t,subTitle:i,src:s,id:a})},className:"avatar-status-name clickable",children:t}):Object(c.jsx)("div",{className:"avatar-status-name",children:t}),Object(c.jsx)("span",{children:n})]}),Object(c.jsx)("div",{className:"text-muted avatar-status-subtitle",children:i})]})]})}},662:function(e,t,n){"use strict";var i=n(4),a=n(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"}}]},name:"filter",theme:"outlined"},r=n(24),l=function(e,t){return a.createElement(r.a,Object(i.a)({},e,{ref:t,icon:c}))};t.a=a.forwardRef(l)},664:function(e,t,n){"use strict";var i=n(8),a=n(0),c=n(144),r=n(143),l=n(612),s=n(728),o=n(726),u=n(662),d=n(660),j=n(49),b=n(383),m=n(47),h=n(2);function O(e){var t=e.title,n=Object(j.h)(),O=Object(a.useState)((function(){var t,i,a,c,r=Object(b.a)({search:n.search,keys:["page","limit"]}),l=r.page,s=r.limit;return{page:Object(b.b)(l,null!==(t=null===e||void 0===e||null===(i=e.params)||void 0===i?void 0:i.page)&&void 0!==t?t:1),limit:Object(b.b)(s,null!==(a=null===e||void 0===e||null===(c=e.params)||void 0===c?void 0:c.limit)&&void 0!==a?a:10)}})),p=Object(i.a)(O,2),v=p[0],f=(p[1],Object(a.useState)(!1)),x=Object(i.a)(f,2),g=(x[0],x[1]),y=Object(a.useState)({pageSize:1,limit:10,total:100}),N=Object(i.a)(y,2),k=(N[0],N[1],Object(a.useState)([])),T=Object(i.a)(k,2);T[0],T[1];function w(){return Object(h.jsx)("div",{className:"text-right",children:Object(h.jsx)(c.a,{title:"Filterd Data",children:Object(h.jsx)(r.a,{type:"primary",ghost:!0,size:"small",icon:Object(h.jsx)(u.a,{})})})})}Object(a.useEffect)((function(){g(!0),new m.a({mode:"local",url:"/api/v1/templates.json"}).get().then((function(e){clearTimeout((function(){g(!1)}),3e3),clearTimeout()})).catch((function(e){g(!1)}))}),[v]);var S=[{title:"Date",render:function(){return"01/03/2023"}},{title:"Airlines",render:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(d.a,{src:"/img/avatars/thumb-1.jpg",name:"Garuda Indonesia"})})}},{title:"Airlines",render:function(){return"CGK01"}},{title:"FLIGHT NO",render:function(){return Object(h.jsx)(l.a,{color:"blue",children:"ID-5678"})}},{title:"SCHEDULE TIME",render:function(){return"11:30"}},{title:"ACTUAL TIME",render:function(){return"-"}},{title:"STATUS",render:function(){return"ARRIVED"}}];return Object(h.jsx)("div",{className:"w-full",children:Object(h.jsx)(s.a,{title:t,extra:Object(h.jsx)(w,{}),children:Object(h.jsx)(o.a,{rowClassName:function(e,t){return 0===t?"!mk-bg-green-500 !mk-bg-opacity-20":""},pagination:!(null===e||void 0===e||!e.pagination)&&{pageSize:null===v||void 0===v?void 0:v.limit,total:100},columns:S,dataSource:[1,2,3,4,5]})})})}O.defaultProps={title:null,pagination:!1},t.a=O},669:function(e,t,n){"use strict";var i=n(8),a=n(0),c=n(144),r=n(143),l=n(612),s=n(728),o=n(726),u=n(662),d=n(660),j=n(49),b=n(383),m=n(47),h=n(2);function O(e){var t=e.title,n=Object(j.h)(),O=Object(a.useState)((function(){var e=Object(b.a)({search:n.search,keys:["page","limit"]}),t=e.page,i=e.limit;return{page:Object(b.b)(t,1),limit:Object(b.b)(i,10)}})),p=Object(i.a)(O,2),v=p[0],f=(p[1],Object(a.useState)(!1)),x=Object(i.a)(f,2),g=(x[0],x[1]),y=Object(a.useState)({pageSize:1,limit:10,total:100}),N=Object(i.a)(y,2),k=(N[0],N[1],Object(a.useState)([])),T=Object(i.a)(k,2);T[0],T[1];function w(){return Object(h.jsx)("div",{className:"text-right",children:Object(h.jsx)(c.a,{title:"Filterd Data",children:Object(h.jsx)(r.a,{type:"primary",ghost:!0,size:"small",icon:Object(h.jsx)(u.a,{})})})})}Object(a.useEffect)((function(){g(!0),new m.a({mode:"local",url:"/api/v1/templates.json"}).get().then((function(e){clearTimeout((function(){g(!1)}),3e3),clearTimeout()})).catch((function(e){console.log({err:e})}))}),[v]);var S=[{title:"Date",render:function(){return"01/03/2023"}},{title:"Airlines",render:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(d.a,{src:"/img/avatars/thumb-1.jpg",name:"Garuda Indonesia"})})}},{title:"Airlines",render:function(){return"CGK01"}},{title:"FLIGHT NO",render:function(){return Object(h.jsx)(l.a,{color:"blue",children:"ID-5678"})}},{title:"SCHEDULE TIME",render:function(){return"11:30"}},{title:"ACTUAL TIME",render:function(){return"-"}},{title:"STATUS",render:function(){return"ARRIVED"}}];return Object(h.jsx)("div",{className:"w-full",children:Object(h.jsx)(s.a,{title:t,extra:Object(h.jsx)(w,{}),children:Object(h.jsx)(o.a,{rowClassName:function(e,t){return 0===t?"!mk-bg-green-500 !mk-bg-opacity-20":""},pagination:!(null===e||void 0===e||!e.pagination)&&{pageSize:null===v||void 0===v?void 0:v.limit,total:100},columns:S,dataSource:[1,2,3,4,5]})})})}O.defaultProps={title:null,pagination:!1},t.a=O},701:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(20),r=(n(664),n(177)),l=n(658),s=n(42),o=n(143),u=n(669),d=n(2);function j(){return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(l.a,{loading:!1,name:"Check In",positionName:"data list Check In",thumbnail:null,extra:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.b,{to:"/user/update/instructor/",children:Object(d.jsx)(o.a,{size:"small",type:"primary",ghost:!0,children:"Update"})})})}),Object(d.jsx)(r.a,{className:"!mk-py-10",style:{marginTop:60},children:Object(d.jsx)(u.a,{title:"",params:{page:1,limit:10},pagination:!0})})]})}t.default=Object(c.b)((function(){return{}}),{})(a.a.memo(j))}}]);
//# sourceMappingURL=26.12bb9a5c.chunk.js.map