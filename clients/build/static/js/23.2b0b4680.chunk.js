(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[23],{697:function(e,t,n){"use strict";var i=n(5),c=n(0),l=n(123),a=n(639),r=n(826),o=n(827),s=n(641),d=n(19),u=n(35),j=n(2),b=function(e){var t=e.children,n=e.background,l=e.className,a=e.overlap,r=e.navType,o=Object(c.useState)(0),s=Object(i.a)(o,2),d=s[0],b=s[1],m=Object(c.useRef)(null);Object(c.useEffect)((function(){if(r===u.d){var e=window.innerWidth,t=m.current.offsetWidth;b((e-t)/2)}}),[r]);return Object(j.jsx)("div",{ref:m,className:"page-header-alt ".concat(l||""," ").concat(a&&"overlap"),style:function(){var e={backgroundImage:n?"url(".concat(n,")"):"none"};return r===u.d&&(e.marginRight=-d,e.marginLeft=-d,e.paddingLeft=0,e.paddingRight=0),e}(),children:r===u.d?Object(j.jsx)("div",{className:"container",children:t}):Object(j.jsx)(j.Fragment,{children:t})})},m=(Object(d.b)((function(e){return{navType:e.theme.navType}}),{})(b),n(38)),v=n(114),f=n(698);function p(e){var t=e.thumbnail,n=e.containerType,d=e.name,u=e.positionName,p=e.loading,O=e.size,h=e.extra,x=e.lookup,g=e.description,y=Object(c.useState)((function(){return"cyan"})),k=Object(i.a)(y,2),N=k[0];k[1];function A(){var n,i;return Object(j.jsxs)(l.a,{className:"py-2",mobileFlex:!1,justifyContent:"between",alignItems:"center",children:[Object(j.jsxs)(l.a,{className:null!==x&&void 0!==x&&x.thumbnail?"py-2":"py-4",mobileFlex:!1,justifyContent:"start",alignItems:"center",children:[(null===x||void 0===x?void 0:x.thumbnail)&&Object(j.jsx)("div",{className:["mk-w-[80px] mk-h-[80px] mk-rounded-full mk-overflow-hidden mk-flex mk-items-center mk-justify-center",t?"":"mk-bg-cyan-500"].join(" "),children:Object(j.jsx)(a.a,{loading:p,style:{background:"transparent"},size:null!==O&&void 0!==O?O:50,src:t?Object(j.jsx)(r.a,{preview:null!==(n=null===e||void 0===e?void 0:e.isPreview)&&void 0!==n&&n,width:null!==O&&void 0!==O?O:50,height:null!==O&&void 0!==O?O:50,style:{objectFit:"cover"},fallback:m.c.defaultImage,src:t}):null,children:t?null:m.c.getNameInitial(null!==d&&void 0!==d?d:"-")})}),Object(j.jsxs)("div",{className:null!==x&&void 0!==x&&x.thumbnail?"mx-4":"",children:[Object(j.jsx)(o.a.Title,{level:3,style:{lineHeight:1},className:"m-0 mb-2",children:d}),"boolean"!==typeof g&&""!==g&&null!==g&&Object(j.jsx)("div",{className:"mb-2",children:Object(j.jsx)(o.a.Text,{children:g})}),(null===x||void 0===x?void 0:x.positionName)&&(u&&"string"===typeof u?Object(j.jsx)(s.a,{color:null!==(i=null===e||void 0===e?void 0:e.positionColor)&&void 0!==i?i:N,children:null!==u&&void 0!==u?u:"-"}):Array.isArray(u)&&u.length>0?Object(j.jsx)(l.a,{alignItems:"center",children:u.map((function(t,n){var i;return"string"===typeof t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a,{color:null!==(i=null===e||void 0===e?void 0:e.positionColor)&&void 0!==i?i:N,children:null!==t&&void 0!==t?t:"-"}),n<u.length-1&&Object(j.jsx)("div",{style:{width:"7px",height:"7px",borderRadius:"4px",margin:"0 10px 0 -2px",background:"#939393",opacity:.5}})]}):""}))}):null)]})]}),h&&h]})}return Object(j.jsx)(b,{className:"border-bottom",overlap:!0,children:function(e){switch(e){case"antd":case"primary":return Object(j.jsx)(f.a,{children:Object(j.jsx)(A,{})});default:return Object(j.jsx)(v.a,{children:Object(j.jsx)(A,{})})}}(n)})}p.defaultProps={containerType:"tailwind",lookup:{thumbnail:!0,positionName:!0},description:!1,name:null,positionName:null,loading:null,extra:null};t.a=p},698:function(e,t,n){"use strict";n(0);var i=n(2);t.a=function(e){return Object(i.jsx)("div",{className:"".concat(["mk-mx-auto mk-max-w-screen-xl",null===e||void 0===e?void 0:e.className].join(" ")),children:e.children})}},699:function(e,t,n){"use strict";var i=n(1),c=n(0),l=n.n(c),a=n(19),r=n(700),o=n(89),s=n(409),d=n(2);function u(e){var t,n=e.visible,c=e.config;return n?Object(d.jsx)(o.a,Object(i.a)(Object(i.a)({},c),{},{className:"btn-master",children:null!==(t=null===e||void 0===e?void 0:e.children)&&void 0!==t?t:null})):null}function j(e){var t,n,c,l=e.theme,a=e.config;switch(null===l||void 0===l?void 0:l.type){case"visible":return Object(d.jsx)(u,{visible:!0,config:Object(i.a)({},a),children:null!==(t=null===e||void 0===e?void 0:e.children)&&void 0!==t?t:null});case"disabled":return Object(d.jsx)(u,{visible:!0,config:Object(i.a)(Object(i.a)({},a),{},{disabled:!0}),children:null!==(n=null===e||void 0===e?void 0:e.children)&&void 0!==n?n:null});case"notification":return Object(d.jsx)(u,{visible:!0,config:Object(i.a)(Object(i.a)({},a),{},{onClick:function(){var t,n,i,c,l,a,r,o,d;s.a.open({message:null!==(t=null===e||void 0===e||null===(n=e.theme)||void 0===n||null===(i=n.property)||void 0===i?void 0:i.message)&&void 0!==t?t:"Access Denied",description:null!==(c=null===e||void 0===e||null===(l=e.theme)||void 0===l||null===(a=l.property)||void 0===a?void 0:a.description)&&void 0!==c?c:"Anda Tidak dapat Melakukan aksi",duration:null!==(r=null===e||void 0===e||null===(o=e.theme)||void 0===o||null===(d=o.property)||void 0===d?void 0:d.duration)&&void 0!==r?r:0})}}),children:null!==(c=null===e||void 0===e?void 0:e.children)&&void 0!==c?c:null});default:return null}}function b(e){var t,n,c=e.permission,l=e.role,a=e.config,r=e.theme;return c?"string"===typeof c&&c===l?Object(d.jsx)(u,{visible:!0,config:a,children:null!==(t=null===e||void 0===e?void 0:e.children)&&void 0!==t?t:null}):Array.isArray(c)&&c.filter((function(e){return e===l})).length>0?Object(d.jsx)(u,{visible:!0,config:a,children:null!==(n=null===e||void 0===e?void 0:e.children)&&void 0!==n?n:null}):Object(d.jsx)(j,Object(i.a)(Object(i.a)({},e),{},{theme:r})):Object(d.jsx)(j,Object(i.a)(Object(i.a)({},e),{},{theme:r}))}b.defaultProps={role:"admin",theme:{type:"element",property:{}},permission:r.a,config:{block:!1,danger:!1,disabled:!1,ghost:!1,href:null,icon:null,loading:!1,shape:"default",size:"large",target:null,type:"default",onClick:function(){}}},t.a=Object(a.b)((function(){return{}}),{})(l.a.memo(b))},700:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=["admin","operator","public","guest"]},714:function(e,t,n){"use strict";var i=n(0),c=n.n(i),l=n(19),a=n(2);function r(e){var t=e.title,n=e.description;return Object(a.jsxs)("div",{className:"w-full",children:[Object(a.jsx)("span",{children:t}),Object(a.jsx)("span",{children:n})]})}r.defaultProps={title:"Access Denied",description:"Anda tidak dapat mengakses component ini"};var o=r,s=n(318),d=n(700);function u(e){var t,n=e.permission,i=e.role,c=e.extra;return n?"string"===typeof n?n!==i?null:c||Object(a.jsx)(o,{title:"Access Denied"}):Array.isArray(n)&&n.length>0?n.filter((function(e){return e===i})).length>0?Object(a.jsx)(s.a,{children:null!==(t=null===e||void 0===e?void 0:e.children)&&void 0!==t?t:null}):c||Object(a.jsx)(o,{title:"Access Denied"}):null:null}u.defaultProps={role:"admin",permission:d.a,extra:null};t.a=Object(l.b)((function(){return{}}),{})(c.a.memo(u))},718:function(e,t,n){"use strict";n(0);var i=n(259),c=n(121),l=n(726),a=n(2),r=function(e){return Object(a.jsx)(i.a,{overlay:e.menu,placement:e.placement,trigger:["click"],children:Object(a.jsx)("div",{className:"ellipsis-dropdown",children:Object(a.jsx)(l.a,{})})})};r.defaultProps={trigger:"click",placement:"bottomRight",menu:Object(a.jsx)(c.a,{})},t.a=r},720:function(e,t,n){"use strict";var i=n(9),c=n(1),l=n(5),a=n(0),r=n(19),o=n(657),s=n(132),d=n(57),u=n(38),j=n(2);t.a=Object(r.b)((function(e){return{}}))((function(e){var t,n,r,b,m=e.form,v=e.select,f=e.keyValue,p=void 0===f?["id"]:f,O=e.keyDisplay,h=void 0===O?["ip_address"]:O,x=Object(a.useState)(!1),g=Object(l.a)(x,2),y=(g[0],g[1]),k=Object(a.useState)([]),N=Object(l.a)(k,2),A=N[0],C=N[1],w=Object(a.useState)((function(){return{page:1,limit:100}})),I=Object(l.a)(w,2),T=I[0],E=(I[1],Object(a.useState)((function(){var t,n,i,l;return"undefined"!==typeof(null===e||void 0===e?void 0:e.pagination)&&"object"===typeof(null===e||void 0===e?void 0:e.pagination)?Object(c.a)(Object(c.a)({},null===e||void 0===e?void 0:e.pagination),{},{page:null!==(t=null===e||void 0===e||null===(n=e.pagination)||void 0===n?void 0:n.page)&&void 0!==t?t:1,limit:null!==(i=null===e||void 0===e||null===(l=e.pagination)||void 0===l?void 0:l.limit)&&void 0!==i?i:10}):{page:1,limit:0}}))),P=Object(l.a)(E,2),S=P[0],z=P[1];return Object(a.useEffect)((function(){y(!0),C([]),new d.a({url:"/api/v1/thin-client",config:{params:Object(c.a)({},T)}}).get().then((function(e){C(Object(i.a)(null===e||void 0===e?void 0:e.data)),z(Object(c.a)(Object(c.a)(Object(c.a)({},S),null===e||void 0===e?void 0:e.pagination),null===e||void 0===e?void 0:e.paginate)),y(!1)})).catch((function(e){y(!1),C([])}))}),[T]),Object(j.jsx)(o.a.Item,Object(c.a)(Object(c.a)({},m),{},{hasFeedback:null===(t=null===m||void 0===m?void 0:m.hasFeedback)||void 0===t||t,name:null!==(n=null===m||void 0===m?void 0:m.name)&&void 0!==n?n:"thin_client",label:null!==(r=null===m||void 0===m?void 0:m.label)&&void 0!==r?r:"Thin Client",children:Object(j.jsx)(s.a,Object(c.a)(Object(c.a)({},v),{},{placeholder:null!==(b=null===v||void 0===v?void 0:v.placeholder)&&void 0!==b?b:"Select thin Client",children:A&&A.map((function(t,n){return null!==e&&void 0!==e&&e.children?"function"===typeof(null===e||void 0===e?void 0:e.children)?null===e||void 0===e?void 0:e.children({item:t,index:n}):null:Object(j.jsxs)(s.a.Option,{value:Object(u.d)(t,null!==p&&void 0!==p?p:["id"]),children:[Object(u.d)(t,["display_name"])," - ",Object(u.d)(t,null!==h&&void 0!==h?h:["ip_address"])]},Object(u.d)(t,null!==p&&void 0!==p?p:["id"]))}))}))}))}))},726:function(e,t,n){"use strict";var i=n(3),c=n(0),l=n(317),a=n(23),r=function(e,t){return c.createElement(a.a,Object(i.a)({},e,{ref:t,icon:l.a}))};t.a=c.forwardRef(r)},747:function(e,t,n){"use strict";var i=n(3),c=n(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},a=n(23),r=function(e,t){return c.createElement(a.a,Object(i.a)({},e,{ref:t,icon:l}))};t.a=c.forwardRef(r)},830:function(e,t,n){"use strict";n.r(t);var i=n(9),c=n(5),l=n(11),a=n(0),r=n.n(a),o=n(19),s=n(697),d=n(699),u=n(114),j=n(3),b=n(6),m=n.n(b),v=n(51),f=n(220),p=n(24),O=n(116),h=n(89),x=n(172),g=n(102),y=n(92),k=n(63),N=n(305),A=n(32),C=n(69),w=n(306),I=void 0,T=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(i=Object.getOwnPropertySymbols(e);c<i.length;c++)t.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(e,i[c])&&(n[i[c]]=e[i[c]])}return n},E=a.forwardRef((function(e,t){var n=a.useContext(k.b).getPrefixCls,i=Object(v.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),l=Object(c.a)(i,2),r=l[0],o=l[1],s=function(t,n){var i;o(t),null===(i=e.onVisibleChange)||void 0===i||i.call(e,t,n)},d=function(e){s(!1,e)},u=function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(I,t)},b=function(t){var n;s(!1,t),null===(n=e.onCancel)||void 0===n||n.call(I,t)},f=e.prefixCls,E=e.placement,P=e.children,S=e.overlayClassName,z=T(e,["prefixCls","placement","children","overlayClassName"]),F=n("popover",f),R=n("popconfirm",f),D=m()(R,S),V=a.createElement(g.a,{componentName:"Popconfirm",defaultLocale:y.a.Popconfirm},(function(t){return function(t,i){var c=e.okButtonProps,l=e.cancelButtonProps,r=e.title,o=e.cancelText,s=e.okText,m=e.okType,v=e.icon;return a.createElement("div",{className:"".concat(t,"-inner-content")},a.createElement("div",{className:"".concat(t,"-message")},v,a.createElement("div",{className:"".concat(t,"-message-title")},Object(N.a)(r))),a.createElement("div",{className:"".concat(t,"-buttons")},a.createElement(h.a,Object(j.a)({onClick:b,size:"small"},l),o||i.cancelText),a.createElement(w.a,{buttonProps:Object(j.a)(Object(j.a)({size:"small"},Object(x.a)(m)),c),actionFn:u,close:d,prefixCls:n("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},s||i.okText)))}(F,t)})),_=n();return a.createElement(O.a,Object(j.a)({},z,{prefixCls:F,placement:E,onVisibleChange:function(t){e.disabled||s(t)},visible:r,overlay:V,overlayClassName:D,ref:t,transitionName:Object(C.b)(_,"zoom-big",e.transitionName)}),Object(A.a)(P,{onKeyDown:function(e){var t,n;a.isValidElement(P)&&(null===(n=null===P||void 0===P?void 0:(t=P.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===p.a.ESC&&r&&s(!1,e)}(e)}}))}));E.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:a.createElement(f.a,null),disabled:!1};var P=E,S=n(121),z=n(651),F=n(657),R=n(408),D=n(638),V=n(640),_=n(656),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM404 683v77c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-77c-41.7-13.6-72-52.8-72-99s30.3-85.5 72-99V264c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v221c41.7 13.6 72 52.8 72 99s-30.3 85.5-72 99zm279.6-143.9c.2 0 .3-.1.4-.1v221c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V539c.2 0 .3.1.4.1-42-13.4-72.4-52.7-72.4-99.1 0-46.4 30.4-85.7 72.4-99.1-.2 0-.3.1-.4.1v-77c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v77c-.2 0-.3-.1-.4-.1 42 13.4 72.4 52.7 72.4 99.1 0 46.4-30.4 85.7-72.4 99.1zM616 440a36 36 0 1072 0 36 36 0 10-72 0zM403.4 566.5l-1.5-2.4c0-.1-.1-.1-.1-.2l-.9-1.2c-.1-.1-.2-.2-.2-.3-1-1.3-2-2.5-3.2-3.6l-.2-.2c-.4-.4-.8-.8-1.2-1.1-.8-.8-1.7-1.5-2.6-2.1h-.1l-1.2-.9c-.1-.1-.3-.2-.4-.3-1.2-.8-2.5-1.6-3.9-2.2-.2-.1-.5-.2-.7-.4-.4-.2-.7-.3-1.1-.5-.3-.1-.7-.3-1-.4-.5-.2-1-.4-1.5-.5-.4-.1-.9-.3-1.3-.4l-.9-.3-1.4-.3c-.2-.1-.5-.1-.7-.2-.7-.1-1.4-.3-2.1-.4-.2 0-.4 0-.6-.1-.6-.1-1.1-.1-1.7-.2-.2 0-.4 0-.7-.1-.8 0-1.5-.1-2.3-.1s-1.5 0-2.3.1c-.2 0-.4 0-.7.1-.6 0-1.2.1-1.7.2-.2 0-.4 0-.6.1-.7.1-1.4.2-2.1.4-.2.1-.5.1-.7.2l-1.4.3-.9.3c-.4.1-.9.3-1.3.4-.5.2-1 .4-1.5.5-.3.1-.7.3-1 .4-.4.2-.7.3-1.1.5-.2.1-.5.2-.7.4-1.3.7-2.6 1.4-3.9 2.2-.1.1-.3.2-.4.3l-1.2.9h-.1c-.9.7-1.8 1.4-2.6 2.1-.4.4-.8.7-1.2 1.1l-.2.2a54.8 54.8 0 00-3.2 3.6c-.1.1-.2.2-.2.3l-.9 1.2c0 .1-.1.1-.1.2l-1.5 2.4c-.1.2-.2.3-.3.5-2.7 5.1-4.3 10.9-4.3 17s1.6 12 4.3 17c.1.2.2.3.3.5l1.5 2.4c0 .1.1.1.1.2l.9 1.2c.1.1.2.2.2.3 1 1.3 2 2.5 3.2 3.6l.2.2c.4.4.8.8 1.2 1.1.8.8 1.7 1.5 2.6 2.1h.1l1.2.9c.1.1.3.2.4.3 1.2.8 2.5 1.6 3.9 2.2.2.1.5.2.7.4.4.2.7.3 1.1.5.3.1.7.3 1 .4.5.2 1 .4 1.5.5.4.1.9.3 1.3.4l.9.3 1.4.3c.2.1.5.1.7.2.7.1 1.4.3 2.1.4.2 0 .4 0 .6.1.6.1 1.1.1 1.7.2.2 0 .4 0 .7.1.8 0 1.5.1 2.3.1s1.5 0 2.3-.1c.2 0 .4 0 .7-.1.6 0 1.2-.1 1.7-.2.2 0 .4 0 .6-.1.7-.1 1.4-.2 2.1-.4.2-.1.5-.1.7-.2l1.4-.3.9-.3c.4-.1.9-.3 1.3-.4.5-.2 1-.4 1.5-.5.3-.1.7-.3 1-.4.4-.2.7-.3 1.1-.5.2-.1.5-.2.7-.4 1.3-.7 2.6-1.4 3.9-2.2.1-.1.3-.2.4-.3l1.2-.9h.1c.9-.7 1.8-1.4 2.6-2.1.4-.4.8-.7 1.2-1.1l.2-.2c1.1-1.1 2.2-2.4 3.2-3.6.1-.1.2-.2.2-.3l.9-1.2c0-.1.1-.1.1-.2l1.5-2.4c.1-.2.2-.3.3-.5 2.7-5.1 4.3-10.9 4.3-17s-1.6-12-4.3-17c-.1-.2-.2-.4-.3-.5z"}}]},name:"control",theme:"filled"},M=n(23),B=function(e,t){return a.createElement(M.a,Object(j.a)({},e,{ref:t,icon:L}))};var G=a.forwardRef(B),H=n(693),q=n(360),J=function(e,t){return a.createElement(M.a,Object(j.a)({},e,{ref:t,icon:q.a}))};var K=a.forwardRef(J),W=n(747),Q=n(696),U=n(718),X=n(123),Y=n(47),Z=n(38),$=n(714),ee=n(134),te=n(86),ne=n(720),ie=n(2);var ce=Object(o.b)((function(e){return{}}))((function(e){var t=e.form;return Object(ie.jsx)(F.a,{form:t,layout:"vertical",children:Object(ie.jsx)(ee.a,{gutter:24,children:Object(ie.jsx)(te.a,{span:12,children:Object(ie.jsx)(ne.a,{form:{name:"thin_client",label:"Thin Client",rules:[{required:!0,message:"Can't be empty!"}]},select:{placeholder:"Select 1 thin client"}})})})})})),le=n(376),ae=n(171),re=["__AnOpenPlayer"];function oe(e){var t=e.__AnOpenPlayer,n=(Object(l.a)(e,re),Object(a.useState)([{id:1},{id:1}])),o=Object(c.a)(n,2),j=o[0],b=(o[1],Object(a.useState)(!1)),m=Object(c.a)(b,2),v=m[0],f=m[1],p=Object(a.useState)(!1),O=Object(c.a)(p,2),x=O[0],g=(O[1],Object(a.useState)({page:1,limit:10})),y=Object(c.a)(g,2),k=(y[0],y[1],Object(a.useState)([])),N=Object(c.a)(k,2),A=(N[0],N[1]),C=Object(a.useState)([]),w=Object(c.a)(C,2),I=w[0],T=w[1],E=Object(a.useState)([]),L=Object(c.a)(E,2),M=L[0],B=L[1],q=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];A((function(t){var n=Object(i.a)(t);return n[e]=!0,n})),setTimeout((function(){A((function(t){var n=Object(i.a)(t);return n[e]=!1,n})),Array.isArray(n)&&n.length>0&&n.map((function(e){return"function"===typeof e?(e(),e()):e}))}),6e3)},J=[{dataIndex:"id",title:"No",width:70,render:function(e,t,n){return n+1}},{dataIndex:"id",title:"Type",render:function(e,t,n){return"TO-BOARDING-GATE"}},{dataIndex:"id",title:"Airlines",render:function(e,t,n){return"LION-AIR"}},{dataIndex:"id",title:"Code",render:function(e,t,n){return"LION-AIR"}},{dataIndex:"id",title:"To",render:function(e,t,n){return"LION-AIR"}},{dataIndex:"id",title:"Gate Number",render:function(e,t,n){return"LION-AIR"}},{dataIndex:"id",title:"Floor",render:function(e,t,n){return"LION-AIR"}},{render:function(e,n,c){return Object(ie.jsxs)("div",{className:"text-right mk-flex !mk-justify-end !mk-gap-2",children:[Object(ie.jsx)(P,{title:"Generate Announcement",description:"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",onConfirm:function(){return function(e,t){var n=T((function(e){var n=Object(i.a)(e);return n[t]=!0,n})),c=setTimeout((function(){T((function(e){var n=Object(i.a)(e);return n[t]=!1,n}))}),3e3);function l(){return new Promise((function(e){e(q(t,n,c))}))}return new Promise((function(e){return setTimeout((function(){return e(l)}),3e3)}))}(0,c)},okButtonProps:{loading:I[c]},children:Object(ie.jsx)(h.a,{icon:Object(ie.jsx)(G,{style:{fontSize:16}}),type:"primary",children:"Generate"})}),Object(ie.jsx)(d.a,{theme:{type:"notification",property:{message:"Access Denied"}},config:{icon:Object(ie.jsx)(H.a,{}),type:"primary",danger:!1,ghost:!1,shape:"circle",size:"small",onClick:function(){t({isType:"SELECTED"})}}}),Object(ie.jsx)(U.a,{menu:Object(ie.jsxs)(S.a,{children:[Object(ie.jsxs)(S.a.Item,{children:[Object(ie.jsxs)(X.a,{alignItems:"center",children:[Object(ie.jsx)(K,{}),Object(ie.jsx)("span",{className:"ml-2",children:"View Details"})]}),Object(ie.jsx)(Y.b,{to:Z.a.detail("city",null===e||void 0===e?void 0:e.id)})]}),Object(ie.jsx)($.a,{extra:Object(ie.jsx)(ie.Fragment,{}),permission:["public"],children:Object(ie.jsx)(S.a.Item,{children:Object(ie.jsxs)(X.a,{alignItems:"center",children:[Object(ie.jsx)(W.a,{}),Object(ie.jsx)("span",{className:"ml-2",children:"Edit"})]})})}),Object(ie.jsxs)($.a,{extra:Object(ie.jsx)(ie.Fragment,{}),permission:["admin"],children:[Object(ie.jsx)(z.a,{className:"my-0"}),Object(ie.jsx)(S.a.Item,{children:Object(ie.jsxs)(X.a,{alignItems:"center",children:[Object(ie.jsx)(W.a,{}),Object(ie.jsx)("span",{className:"ml-2",children:"Delete"})]})})]})]})})]})}}],ee=F.a.useForm(),te=Object(c.a)(ee,1)[0];return Object(ie.jsxs)(r.a.Fragment,{children:[Object(ie.jsx)(D.a,{title:"Halo",visible:v,onCancel:function(){return f(!1)},closable:!1,footer:[Object(ie.jsx)(d.a,{theme:{type:"notification",property:{message:"Access Denied"}},config:{type:"primary",size:"small",ghost:!0,onClick:function(){f(!1)}},children:"Close"}),Object(ie.jsx)(d.a,{permission:["guest","admin"],theme:{type:"notification",property:{message:"Access Denied"}},config:{type:"primary",size:"small",ghost:!1,onClick:function(){te.validateFields().then((function(e){M&&Array.isArray(M)&&M.length>0&&(M.map((function(e){return e()})),B([])),te.resetFields(),f(!1)})).catch((function(e){R.b.error("Error: Validatae Form")}))}},children:"Play Audio"})],children:Object(ie.jsx)(ce,{form:te})}),Object(ie.jsx)(s.a,{loading:!1,name:"Announcement",positionName:"General | Audio Announcement",thumbnail:null,extra:Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsx)(d.a,{permission:["admin"],theme:{type:"disabled",property:{message:"Access Denied"}},config:{type:"primary",size:"small"},children:"Create"})})}),Object(ie.jsx)("div",{style:{marginTop:90},children:Object(ie.jsx)(u.a,{children:Object(ie.jsx)(V.a,{extra:Object(ie.jsx)("div",{className:"text-right`",children:Object(ie.jsx)(d.a,{permission:["admin"],theme:{type:"disabled",property:{message:"Access Denied"}},config:{type:"primary",size:"small",ghost:!0,icon:Object(ie.jsx)(Q.a,{})},children:"Filter"})}),children:Object(ie.jsx)(_.a,{loading:x,dataSource:j,columns:J})})})})]})}oe.contextType=le.b;t.default=Object(o.b)((function(e){return{state:e}}),{__AnOpenPlayer:ae.c})(oe)}}]);
//# sourceMappingURL=23.2b0b4680.chunk.js.map