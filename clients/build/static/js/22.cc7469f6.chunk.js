(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[22],{660:function(e,t,n){"use strict";var i=n(1),a=(n(0),n(631)),r=n(2),c=function(e){return Object(r.jsx)(a.a,Object(i.a)(Object(i.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))};t.a=function(e){var t=e.name,n=e.suffix,i=e.subTitle,a=e.id,l=e.type,s=e.src,u=e.icon,o=e.size,j=e.shape,b=e.gap,d=e.text,O=e.onNameClick;return Object(r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[c({icon:u,src:s,type:l,size:o,shape:j,gap:b,text:d}),Object(r.jsxs)("div",{className:"ml-2",children:[Object(r.jsxs)("div",{children:[O?Object(r.jsx)("div",{onClick:function(){return O({name:t,subTitle:i,src:s,id:a})},className:"avatar-status-name clickable",children:t}):Object(r.jsx)("div",{className:"avatar-status-name",children:t}),Object(r.jsx)("span",{children:n})]}),Object(r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:i})]})]})}},664:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n(144),c=n(143),l=n(612),s=n(728),u=n(726),o=n(662),j=n(660),b=n(49),d=n(383),O=n(47),m=n(2);function f(e){var t=e.title,n=Object(b.h)(),f=Object(a.useState)((function(){var t,i,a,r,c=Object(d.a)({search:n.search,keys:["page","limit"]}),l=c.page,s=c.limit;return{page:Object(d.b)(l,null!==(t=null===e||void 0===e||null===(i=e.params)||void 0===i?void 0:i.page)&&void 0!==t?t:1),limit:Object(d.b)(s,null!==(a=null===e||void 0===e||null===(r=e.params)||void 0===r?void 0:r.limit)&&void 0!==a?a:10)}})),g=Object(i.a)(f,2),h=g[0],v=(g[1],Object(a.useState)(!1)),p=Object(i.a)(v,2),x=(p[0],p[1]),S=Object(a.useState)({pageSize:1,limit:10,total:100}),T=Object(i.a)(S,2),k=(T[0],T[1],Object(a.useState)([])),A=Object(i.a)(k,2);A[0],A[1];function N(){return Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)(r.a,{title:"Filterd Data",children:Object(m.jsx)(c.a,{type:"primary",ghost:!0,size:"small",icon:Object(m.jsx)(o.a,{})})})})}Object(a.useEffect)((function(){x(!0),new O.a({mode:"local",url:"/api/v1/templates.json"}).get().then((function(e){clearTimeout((function(){x(!1)}),3e3),clearTimeout()})).catch((function(e){x(!1)}))}),[h]);var w=[{title:"Date",render:function(){return"01/03/2023"}},{title:"Airlines",render:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.a,{src:"/img/avatars/thumb-1.jpg",name:"Garuda Indonesia"})})}},{title:"Airlines",render:function(){return"CGK01"}},{title:"FLIGHT NO",render:function(){return Object(m.jsx)(l.a,{color:"blue",children:"ID-5678"})}},{title:"SCHEDULE TIME",render:function(){return"11:30"}},{title:"ACTUAL TIME",render:function(){return"-"}},{title:"STATUS",render:function(){return"ARRIVED"}}];return Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(s.a,{title:t,extra:Object(m.jsx)(N,{}),children:Object(m.jsx)(u.a,{rowClassName:function(e,t){return 0===t?"!mk-bg-green-500 !mk-bg-opacity-20":""},pagination:!(null===e||void 0===e||!e.pagination)&&{pageSize:null===h||void 0===h?void 0:h.limit,total:100},columns:w,dataSource:[1,2,3,4,5]})})})}f.defaultProps={title:null,pagination:!1},t.a=f},669:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n(144),c=n(143),l=n(612),s=n(728),u=n(726),o=n(662),j=n(660),b=n(49),d=n(383),O=n(47),m=n(2);function f(e){var t=e.title,n=Object(b.h)(),f=Object(a.useState)((function(){var e=Object(d.a)({search:n.search,keys:["page","limit"]}),t=e.page,i=e.limit;return{page:Object(d.b)(t,1),limit:Object(d.b)(i,10)}})),g=Object(i.a)(f,2),h=g[0],v=(g[1],Object(a.useState)(!1)),p=Object(i.a)(v,2),x=(p[0],p[1]),S=Object(a.useState)({pageSize:1,limit:10,total:100}),T=Object(i.a)(S,2),k=(T[0],T[1],Object(a.useState)([])),A=Object(i.a)(k,2);A[0],A[1];function N(){return Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)(r.a,{title:"Filterd Data",children:Object(m.jsx)(c.a,{type:"primary",ghost:!0,size:"small",icon:Object(m.jsx)(o.a,{})})})})}Object(a.useEffect)((function(){x(!0),new O.a({mode:"local",url:"/api/v1/templates.json"}).get().then((function(e){clearTimeout((function(){x(!1)}),3e3),clearTimeout()})).catch((function(e){console.log({err:e})}))}),[h]);var w=[{title:"Date",render:function(){return"01/03/2023"}},{title:"Airlines",render:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.a,{src:"/img/avatars/thumb-1.jpg",name:"Garuda Indonesia"})})}},{title:"Airlines",render:function(){return"CGK01"}},{title:"FLIGHT NO",render:function(){return Object(m.jsx)(l.a,{color:"blue",children:"ID-5678"})}},{title:"SCHEDULE TIME",render:function(){return"11:30"}},{title:"ACTUAL TIME",render:function(){return"-"}},{title:"STATUS",render:function(){return"ARRIVED"}}];return Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(s.a,{title:t,extra:Object(m.jsx)(N,{}),children:Object(m.jsx)(u.a,{rowClassName:function(e,t){return 0===t?"!mk-bg-green-500 !mk-bg-opacity-20":""},pagination:!(null===e||void 0===e||!e.pagination)&&{pageSize:null===h||void 0===h?void 0:h.limit,total:100},columns:w,dataSource:[1,2,3,4,5]})})})}f.defaultProps={title:null,pagination:!1},t.a=f},683:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n(144),c=n(143),l=n(612),s=n(728),u=n(726),o=n(662),j=n(660),b=n(49),d=n(383),O=n(47),m=n(2);function f(e){var t=e.title,n=Object(b.h)(),f=Object(a.useState)((function(){var e=Object(d.a)({search:n.search,keys:["page","limit"]}),t=e.page,i=e.limit;return{page:Object(d.b)(t,1),limit:Object(d.b)(i,10)}})),g=Object(i.a)(f,2),h=g[0],v=(g[1],Object(a.useState)(!1)),p=Object(i.a)(v,2),x=(p[0],p[1]),S=Object(a.useState)({pageSize:1,limit:10,total:100}),T=Object(i.a)(S,2),k=(T[0],T[1],Object(a.useState)([])),A=Object(i.a)(k,2);A[0],A[1];function N(){return Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)(r.a,{title:"Filterd Data",children:Object(m.jsx)(c.a,{type:"primary",ghost:!0,size:"small",icon:Object(m.jsx)(o.a,{})})})})}Object(a.useEffect)((function(){x(!0),new O.a({mode:"local",url:"/api/v1/templates.json"}).get().then((function(e){clearTimeout((function(){x(!1)}),3e3),clearTimeout()})).catch((function(e){console.log({err:e})}))}),[h]);var w=[{title:"Date",render:function(){return"01/03/2023"}},{title:"Airlines",render:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.a,{src:"/img/avatars/thumb-1.jpg",name:"Garuda Indonesia"})})}},{title:"Airlines",render:function(){return"CGK01"}},{title:"FLIGHT NO",render:function(){return Object(m.jsx)(l.a,{color:"blue",children:"ID-5678"})}},{title:"SCHEDULE TIME",render:function(){return"11:30"}},{title:"ACTUAL TIME",render:function(){return"-"}},{title:"STATUS",render:function(){return"ARRIVED"}}];return Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(s.a,{title:t,extra:Object(m.jsx)(N,{}),children:Object(m.jsx)(u.a,{rowClassName:function(e,t){return 0===t?"!mk-bg-green-500 !mk-bg-opacity-20":""},pagination:!(null===e||void 0===e||!e.pagination)&&{pageSize:null===h||void 0===h?void 0:h.limit,total:100},columns:w,dataSource:[1,2,3,4,5]})})})}f.defaultProps={title:null,pagination:!1},t.a=f},684:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n(144),c=n(143),l=n(612),s=n(728),u=n(726),o=n(662),j=n(660),b=n(49),d=n(383),O=n(47),m=n(2);function f(e){var t=e.title,n=Object(b.h)(),f=Object(a.useState)((function(){var e=Object(d.a)({search:n.search,keys:["page","limit"]}),t=e.page,i=e.limit;return{page:Object(d.b)(t,1),limit:Object(d.b)(i,10)}})),g=Object(i.a)(f,2),h=g[0],v=(g[1],Object(a.useState)(!1)),p=Object(i.a)(v,2),x=(p[0],p[1]),S=Object(a.useState)({pageSize:1,limit:10,total:100}),T=Object(i.a)(S,2),k=(T[0],T[1],Object(a.useState)([])),A=Object(i.a)(k,2);A[0],A[1];function N(){return Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)(r.a,{title:"Filterd Data",children:Object(m.jsx)(c.a,{type:"primary",ghost:!0,size:"small",icon:Object(m.jsx)(o.a,{})})})})}Object(a.useEffect)((function(){x(!0),new O.a({mode:"local",url:"/api/v1/templates.json"}).get().then((function(e){clearTimeout((function(){x(!1)}),3e3),clearTimeout()})).catch((function(e){console.log({err:e})}))}),[h]);var w=[{title:"Date",render:function(){return"01/03/2023"}},{title:"Airlines",render:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.a,{src:"/img/avatars/thumb-1.jpg",name:"Garuda Indonesia"})})}},{title:"Airlines",render:function(){return"CGK01"}},{title:"FLIGHT NO",render:function(){return Object(m.jsx)(l.a,{color:"blue",children:"ID-5678"})}},{title:"SCHEDULE TIME",render:function(){return"11:30"}},{title:"ACTUAL TIME",render:function(){return"-"}},{title:"STATUS",render:function(){return"ARRIVED"}}];return Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(s.a,{title:null!==t&&void 0!==t?t:null,extra:Object(m.jsx)(N,{}),children:Object(m.jsx)(u.a,{rowClassName:function(e,t){return 0===t?"!mk-bg-green-500 !mk-bg-opacity-20":""},pagination:!(null===e||void 0===e||!e.pagination)&&{pageSize:null===h||void 0===h?void 0:h.limit,total:100},columns:w,dataSource:[1,2,3,4,5]})})})}f.defaultProps={title:null,pagination:!1},t.a=f},685:function(e,t,n){"use strict";var i=n(1),a=n(8),r=n(0),c=n(144),l=n(143),s=n(612),u=n(728),o=n(726),j=n(662),b=n(660),d=n(49),O=n(383),m=n(47),f=n(2);function g(e){var t=e.title,n=Object(d.h)(),g=Object(r.useState)((function(){var e=Object(O.a)({search:n.search,keys:["page","limit"]}),t=e.page,i=e.limit;return{page:Object(O.b)(t,1),limit:Object(O.b)(i,10)}})),h=Object(a.a)(g,2),v=h[0],p=h[1],x=Object(r.useState)(!1),S=Object(a.a)(x,2),T=(S[0],S[1]),k=Object(r.useState)({pageSize:1,limit:10,total:100}),A=Object(a.a)(k,2),N=(A[0],A[1],Object(r.useState)([])),w=Object(a.a)(N,2);w[0],w[1];function E(){return Object(f.jsx)("div",{className:"text-right",children:Object(f.jsx)(c.a,{title:"Filterd Data",children:Object(f.jsx)(l.a,{type:"primary",ghost:!0,size:"small",icon:Object(f.jsx)(j.a,{})})})})}Object(r.useEffect)((function(){T(!0),new m.a({mode:"local",url:"/api/v1/templates.json"}).get().then((function(e){clearTimeout((function(){T(!1)}),3e3),clearTimeout()})).catch((function(e){console.log({err:e})}))}),[v]);var I=[{title:"Date",render:function(){return"01/03/2023"}},{title:"Airlines",render:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(b.a,{src:"/img/avatars/thumb-1.jpg",name:"Garuda Indonesia"})})}},{title:"Airlines",render:function(){return"CGK01"}},{title:"FLIGHT NO",render:function(){return Object(f.jsx)(s.a,{color:"blue",children:"ID-5678"})}},{title:"SCHEDULE TIME",render:function(){return"11:30"}},{title:"ACTUAL TIME",render:function(){return"-"}},{title:"STATUS",render:function(){return"ARRIVED"}}];return Object(f.jsx)("div",{className:"w-full",children:Object(f.jsx)(u.a,{title:null!==t&&void 0!==t?t:null,extra:Object(f.jsx)(E,{}),children:Object(f.jsx)(o.a,{rowClassName:function(e,t){return 0===t?"!mk-bg-green-500 !mk-bg-opacity-20":""},pagination:!(null===e||void 0===e||!e.pagination)&&{pageSize:null===v||void 0===v?void 0:v.limit,total:100,onChange:function(e,t){p(Object(i.a)(Object(i.a)({},v),{},{page:e,limit:t}))}},columns:I,dataSource:[1,2,3,4,5]})})})}g.defaultProps={title:null,pagination:!1},t.a=g},686:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n(144),c=n(143),l=n(612),s=n(728),u=n(726),o=n(662),j=n(660),b=n(49),d=n(383),O=n(47),m=n(2);function f(e){var t=e.title,n=Object(b.h)(),f=Object(a.useState)((function(){var e=Object(d.a)({search:n.search,keys:["page","limit"]}),t=e.page,i=e.limit;return{page:Object(d.b)(t,1),limit:Object(d.b)(i,10)}})),g=Object(i.a)(f,2),h=g[0],v=(g[1],Object(a.useState)(!1)),p=Object(i.a)(v,2),x=(p[0],p[1]),S=Object(a.useState)({pageSize:1,limit:10,total:100}),T=Object(i.a)(S,2),k=(T[0],T[1],Object(a.useState)([])),A=Object(i.a)(k,2);A[0],A[1];function N(){return Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)(r.a,{title:"Filterd Data",children:Object(m.jsx)(c.a,{type:"primary",ghost:!0,size:"small",icon:Object(m.jsx)(o.a,{})})})})}Object(a.useEffect)((function(){x(!0),new O.a({mode:"local",url:"/api/v1/templates.json"}).get().then((function(e){clearTimeout((function(){x(!1)}),3e3),clearTimeout()})).catch((function(e){console.log({err:e})}))}),[h]);var w=[{title:"Date",render:function(){return"01/03/2023"}},{title:"Airlines",render:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.a,{src:"/img/avatars/thumb-1.jpg",name:"Garuda Indonesia"})})}},{title:"Airlines",render:function(){return"CGK01"}},{title:"FLIGHT NO",render:function(){return Object(m.jsx)(l.a,{color:"blue",children:"ID-5678"})}},{title:"SCHEDULE TIME",render:function(){return"11:30"}},{title:"ACTUAL TIME",render:function(){return"-"}},{title:"STATUS",render:function(){return"ARRIVED"}}];return Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(s.a,{title:null!==t&&void 0!==t?t:null,extra:Object(m.jsx)(N,{}),children:Object(m.jsx)(u.a,{rowClassName:function(e,t){return 0===t?"!mk-bg-green-500 !mk-bg-opacity-20":""},pagination:!(null===e||void 0===e||!e.pagination)&&{pageSize:null===h||void 0===h?void 0:h.limit,total:100},columns:w,dataSource:[1,2,3,4,5]})})})}f.defaultProps={title:null,pagination:!1},t.a=f},739:function(e,t,n){"use strict";n.r(t);var i=n(8),a=n(0),r=n.n(a),c=n(20),l=n(10),s=n(1),u=n(692),o=n(675),j=n(676),b=n(728),d=n(177),O=n(47),m=n(2);function f(e){var t=e.active,n=e.onChange,c=Object(a.useState)([]),f=Object(i.a)(c,2),g=f[0],h=f[1],v=Object(a.useState)(!1),p=Object(i.a)(v,2),x=(p[0],p[1]),S=Object(a.useState)({page:1,limit:20}),T=Object(i.a)(S,2),k=T[0],A=(T[1],Object(a.useState)(!1)),N=Object(i.a)(A,2),w=N[0],E=N[1];function I(e,t){var n=t.classes,i=void 0===n?"":n,a=t.classesActive;return e?["text-white",void 0===a?"":a,i].join(" "):i}return Object(a.useEffect)((function(){x(!0),new O.a({url:"/api/v1/master-data/airline-type",config:{params:Object(s.a)({},k)}}).get().then((function(e){x(!1),h(Object(l.a)(null===e||void 0===e?void 0:e.data.sort((function(e,t){return-1}))))})).catch((function(e){x(!1),h([])}))}),[k]),Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(u.a,{closable:!1,visible:w,onCancel:function(){return E(!w)},onOk:function(){return E(!1)},style:{minWidth:620},footer:null,children:Object(m.jsx)(o.a,{gutter:10,children:g.slice(4).map((function(e){var i,a;return Object(m.jsx)(j.a,{xs:{span:24},sm:{span:24},md:{span:8},lg:{span:8},children:Object(m.jsx)("div",{onClick:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(e),E(t)}(null===e||void 0===e?void 0:e.identifier,!1)},className:I(t===(null===e||void 0===e?void 0:e.identifier),{classes:"mk-cursor-pointer mk-w-full mk-min-h-[140px] !mk-rounded-xl mk-bg-white !mk-shadow-xl d-flex align-items-center justify-content-center",classesActive:"!mk-bg-blue-500 !mk-bg-opacity-50 !mk-border !mk-border-blue-500"}),children:Object(m.jsx)("h4",{className:I(t===(null===e||void 0===e?void 0:e.identifier),{classesActive:"!mk-text-white"}),children:null!==(i=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.name)&&void 0!==i?i:"-"})})})}))})}),Object(m.jsx)(d.a,{children:Object(m.jsxs)(o.a,{gutter:10,children:[Object(m.jsx)(j.a,{xs:{span:24},sm:{span:24},md:{span:20},lg:{span:20},children:Object(m.jsx)(o.a,{gutter:10,children:g.slice(0,4).map((function(e,i){var a,r;return Object(m.jsx)(j.a,{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:6},children:Object(m.jsx)(b.a,{bordered:!1,onClick:function(){return n(null===e||void 0===e?void 0:e.identifier)},title:Object(m.jsxs)("h4",{className:I(t===(null===e||void 0===e?void 0:e.identifier),{classes:"",classesActive:""}),children:[null!==(a=null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.name)&&void 0!==a?a:"-"," "]}),className:I(t===(null===e||void 0===e?void 0:e.identifier),{classesActive:"bg-primary",classes:"mk-cursor-pointer"}),children:Object(m.jsx)("h3",{className:I(t===(null===e||void 0===e?void 0:e.identifier),{classes:""}),children:"1"})})})}))})}),g.length>4&&Object(m.jsx)(j.a,{xs:{span:24},sm:{span:24},md:{span:4},lg:{span:4},children:Object(m.jsx)("div",{onClick:function(){return E(!0)},className:"!mk-bg-blue-500 !mk-bg-opacity-50 mk-cursor-pointer mk-w-full mk-min-h-[130px] !mk-rounded-xl mk-bg-white !mk-shadow-xl d-flex align-items-center justify-content-center",children:Object(m.jsx)("h4",{className:"!mk-text-white",children:"More"})})})]})})]})}f.defaultProps={active:"arrival"};var g=f,h=n(683),v=n(684),p=n(669),x=n(664),S=n(685),T=n(49),k=n(686),A=n(144),N=n(143),w=n(612),E=n(726),I=n(662),C=n(660),y=n(383);function D(e){var t=e.title,n=Object(T.h)(),r=Object(a.useState)((function(){var e=Object(y.a)({search:n.search,keys:["page","limit"]}),t=e.page,i=e.limit;return{page:Object(y.b)(t,1),limit:Object(y.b)(i,10)}})),c=Object(i.a)(r,2),l=c[0],s=(c[1],Object(a.useState)(!1)),u=Object(i.a)(s,2),o=(u[0],u[1]),j=Object(a.useState)({pageSize:1,limit:10,total:100}),d=Object(i.a)(j,2),f=(d[0],d[1],Object(a.useState)([])),g=Object(i.a)(f,2);g[0],g[1];function h(){return Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)(A.a,{title:"Filterd Data",children:Object(m.jsx)(N.a,{type:"primary",ghost:!0,size:"small",icon:Object(m.jsx)(I.a,{})})})})}Object(a.useEffect)((function(){o(!0),new O.a({mode:"local",url:"/api/v1/templates.json"}).get().then((function(e){clearTimeout((function(){o(!1)}),3e3),clearTimeout()})).catch((function(e){console.log({err:e})}))}),[l]);var v=[{title:"Date",render:function(){return"01/03/2023"}},{title:"Airlines",render:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C.a,{src:"/img/avatars/thumb-1.jpg",name:"Garuda Indonesia"})})}},{title:"Airlines",render:function(){return"CGK01"}},{title:"FLIGHT NO",render:function(){return Object(m.jsx)(w.a,{color:"blue",children:"ID-5678"})}},{title:"SCHEDULE TIME",render:function(){return"11:30"}},{title:"ACTUAL TIME",render:function(){return"-"}},{title:"STATUS",render:function(){return"ARRIVED"}}];return Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(b.a,{title:null!==t&&void 0!==t?t:null,extra:Object(m.jsx)(h,{}),children:Object(m.jsx)(E.a,{rowClassName:function(e,t){return 0===t?"!mk-bg-green-500 !mk-bg-opacity-20":""},pagination:!(null===e||void 0===e||!e.pagination)&&{pageSize:null===l||void 0===l?void 0:l.limit,total:100},columns:v,dataSource:[1,2,3,4,5]})})})}D.defaultProps={title:null,pagination:!1};var L=D;function z(e){switch(e.active){case"arrival":return Object(m.jsx)(h.a,{title:"Arrival"});case"departures":return Object(m.jsx)(v.a,{title:"Departures"});case"check-in":return Object(m.jsx)(p.a,{title:"Check In"});case"belt":return Object(m.jsx)(x.a,{title:"Belt"});case"on-boarding":return Object(m.jsx)(S.a,{title:"On Boarding"});case"gate":return Object(m.jsx)(k.a,{title:"Gate"});case"luggage":return Object(m.jsx)(L,{title:"Luggage"});default:return null}}t.default=Object(c.b)((function(e){var t=e.theme;return{sideNavTheme:t.sideNavTheme,topNavColor:t.topNavColor,theme:t}}),{})((function(e){var t=Object(T.h)(),n=Object(a.useState)((function(){var e,n=new URLSearchParams(t.search).get("tab");return n?null===(e=n.toString())||void 0===e?void 0:e.toLowerCase():"arrival"})),r=Object(i.a)(n,2),c=r[0],l=r[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{active:c,onChange:function(e){e!==c&&(l(e),function(e){if(window){var n=new URLSearchParams(window.location.search);n.get("tab")?(n.delete("tab"),n.append("tab",e)):n.append("tab",e);var i=[];n.forEach((function(e,t){i.push("".concat(t,"=").concat(e))}));var a=[window.origin,t.pathname].join("");window.history.pushState({article:"read-all"},"Read All Article",[a,i.join("&")].join("?"))}}(e))}}),Object(m.jsx)(d.a,{children:Object(m.jsx)(z,{active:c})})]})}))}}]);
//# sourceMappingURL=22.cc7469f6.chunk.js.map