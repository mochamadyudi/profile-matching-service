(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[20],{658:function(e,n,t){"use strict";var a=t(8),i=t(0),l=t(101),c=t(631),o=t(730),r=t(731),s=t(612),d=t(20),u=t(28),b=t(2),j=function(e){var n=e.children,t=e.background,l=e.className,c=e.overlap,o=e.navType,r=Object(i.useState)(0),s=Object(a.a)(r,2),d=s[0],j=s[1],v=Object(i.useRef)(null);Object(i.useEffect)((function(){if(o===u.d){var e=window.innerWidth,n=v.current.offsetWidth;j((e-n)/2)}}),[o]);return Object(b.jsx)("div",{ref:v,className:"page-header-alt ".concat(l||""," ").concat(c&&"overlap"),style:function(){var e={backgroundImage:t?"url(".concat(t,")"):"none"};return o===u.d&&(e.marginRight=-d,e.marginLeft=-d,e.paddingLeft=0,e.paddingRight=0),e}(),children:o===u.d?Object(b.jsx)("div",{className:"container",children:n}):Object(b.jsx)(b.Fragment,{children:n})})},v=(Object(d.b)((function(e){return{navType:e.theme.navType}}),{})(j),t(33)),h=t(177);var m=function(e){return Object(b.jsx)("div",{className:"".concat(["mk-mx-auto mk-max-w-screen-xl",null===e||void 0===e?void 0:e.className].join(" ")),children:e.children})};function f(e){var n=e.thumbnail,t=e.containerType,d=e.name,u=e.positionName,f=e.loading,p=e.size,g=e.extra,O=e.lookup,x=e.description,y=Object(i.useState)((function(){return"cyan"})),k=Object(a.a)(y,2),w=k[0];k[1];function C(){var t,a;return Object(b.jsxs)(l.a,{className:"py-2",mobileFlex:!1,justifyContent:"between",alignItems:"center",children:[Object(b.jsxs)(l.a,{className:null!==O&&void 0!==O&&O.thumbnail?"py-2":"py-4",mobileFlex:!1,justifyContent:"start",alignItems:"center",children:[(null===O||void 0===O?void 0:O.thumbnail)&&Object(b.jsx)("div",{className:["mk-w-[80px] mk-h-[80px] mk-rounded-full mk-overflow-hidden mk-flex mk-items-center mk-justify-center",n?"":"mk-bg-cyan-500"].join(" "),children:Object(b.jsx)(c.a,{loading:f,style:{background:"transparent"},size:null!==p&&void 0!==p?p:50,src:n?Object(b.jsx)(o.a,{preview:null!==(t=null===e||void 0===e?void 0:e.isPreview)&&void 0!==t&&t,width:null!==p&&void 0!==p?p:50,height:null!==p&&void 0!==p?p:50,style:{objectFit:"cover"},fallback:v.a.defaultImage,src:n}):null,children:n?null:v.a.getNameInitial(null!==d&&void 0!==d?d:"-")})}),Object(b.jsxs)("div",{className:null!==O&&void 0!==O&&O.thumbnail?"mx-4":"",children:[Object(b.jsx)(r.a.Title,{level:3,style:{lineHeight:1},className:"m-0 mb-2",children:d}),"boolean"!==typeof x&&""!==x&&null!==x&&Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsx)(r.a.Text,{children:x})}),(null===O||void 0===O?void 0:O.positionName)&&(u&&"string"===typeof u?Object(b.jsx)(s.a,{color:null!==(a=null===e||void 0===e?void 0:e.positionColor)&&void 0!==a?a:w,children:null!==u&&void 0!==u?u:"-"}):Array.isArray(u)&&u.length>0?Object(b.jsx)(l.a,{alignItems:"center",children:u.map((function(n,t){var a;return"string"===typeof n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{color:null!==(a=null===e||void 0===e?void 0:e.positionColor)&&void 0!==a?a:w,children:null!==n&&void 0!==n?n:"-"}),t<u.length-1&&Object(b.jsx)("div",{style:{width:"7px",height:"7px",borderRadius:"4px",margin:"0 10px 0 -2px",background:"#939393",opacity:.5}})]}):""}))}):null)]})]}),g&&g]})}return Object(b.jsx)(j,{className:"border-bottom",overlap:!0,children:function(e){switch(e){case"antd":case"primary":return Object(b.jsx)(m,{children:Object(b.jsx)(C,{})});default:return Object(b.jsx)(h.a,{children:Object(b.jsx)(C,{})})}}(t)})}f.defaultProps={containerType:"tailwind",lookup:{thumbnail:!0,positionName:!0},description:!1,name:null,positionName:null,loading:null,extra:null};n.a=f},659:function(e,n,t){"use strict";var a=t(1),i=t(0),l=t.n(i),c=t(20),o=t(143),r=t(381),s=t(2);function d(e){var n,t=e.visible,i=e.config;return t?Object(s.jsx)(o.a,Object(a.a)(Object(a.a)({},i),{},{className:"btn-master",children:null!==(n=null===e||void 0===e?void 0:e.children)&&void 0!==n?n:null})):null}function u(e){var n,t,i,l=e.theme,c=e.config;switch(null===l||void 0===l?void 0:l.type){case"visible":return Object(s.jsx)(d,{visible:!0,config:Object(a.a)({},c),children:null!==(n=null===e||void 0===e?void 0:e.children)&&void 0!==n?n:null});case"disabled":return Object(s.jsx)(d,{visible:!0,config:Object(a.a)(Object(a.a)({},c),{},{disabled:!0}),children:null!==(t=null===e||void 0===e?void 0:e.children)&&void 0!==t?t:null});case"notification":return Object(s.jsx)(d,{visible:!0,config:Object(a.a)(Object(a.a)({},c),{},{onClick:function(){var n,t,a,i,l,c,o,s,d;r.a.open({message:null!==(n=null===e||void 0===e||null===(t=e.theme)||void 0===t||null===(a=t.property)||void 0===a?void 0:a.message)&&void 0!==n?n:"Access Denied",description:null!==(i=null===e||void 0===e||null===(l=e.theme)||void 0===l||null===(c=l.property)||void 0===c?void 0:c.description)&&void 0!==i?i:"Anda Tidak dapat Melakukan aksi",duration:null!==(o=null===e||void 0===e||null===(s=e.theme)||void 0===s||null===(d=s.property)||void 0===d?void 0:d.duration)&&void 0!==o?o:0})}}),children:null!==(i=null===e||void 0===e?void 0:e.children)&&void 0!==i?i:null});default:return null}}function b(e){var n,t,i=e.permission,l=e.role,c=e.config,o=e.theme;return i?"string"===typeof i&&i===l?Object(s.jsx)(d,{visible:!0,config:c,children:null!==(n=null===e||void 0===e?void 0:e.children)&&void 0!==n?n:null}):Array.isArray(i)&&i.filter((function(e){return e===l})).length>0?Object(s.jsx)(d,{visible:!0,config:c,children:null!==(t=null===e||void 0===e?void 0:e.children)&&void 0!==t?t:null}):Object(s.jsx)(u,Object(a.a)(Object(a.a)({},e),{},{theme:o})):Object(s.jsx)(u,Object(a.a)(Object(a.a)({},e),{},{theme:o}))}b.defaultProps={role:"admin",theme:{type:"element",property:{}},permission:["admin","operator","public","guest"],config:{block:!1,danger:!1,disabled:!1,ghost:!1,href:null,icon:null,loading:!1,shape:"default",size:"large",target:null,type:"default",onClick:function(){}}};n.a=Object(c.b)((function(){return{}}),{})(l.a.memo(b))},661:function(e,n,t){"use strict";var a=t(0),i=t.n(a),l=t(20),c=t(658),o=(t(659),t(177)),r=t(1),s=t(8),d=t(278),u=t(630),b=t(33),j=t(672),v=t(2),h=d.a.useBreakpoint,m=function(e){var n=e.sideContent,t=e.sideContentWidth,a=void 0===t?250:t,i=e.border;return Object(v.jsx)("div",{className:"side-content ".concat(i?"with-border":""),style:{width:"".concat(a,"px")},children:n})},f=function(e){var n=e.sideContent,t=e.visible,a=e.onSideContentClose;return Object(v.jsx)(u.a,{width:320,placement:"left",closable:!1,onClose:a,visible:t,bodyStyle:{paddingLeft:0,paddingRight:0},children:Object(v.jsx)("div",{className:"h-100",children:n})})},p=function(e){var n=e.mainContent,t=e.pageHeader,i=e.sideContentGutter,l=void 0===i||i,c=!b.a.getBreakPoint(h()).includes("lg"),o=Object(a.useState)(!1),d=Object(s.a)(o,2),u=d[0],p=d[1];return Object(v.jsxs)("div",{className:"inner-app-layout",children:[c?Object(v.jsx)(f,Object(r.a)({visible:u,onSideContentClose:function(e){p(!1)}},e)):Object(v.jsx)(m,Object(r.a)({},e)),Object(v.jsxs)("div",{className:"main-content ".concat(t?"has-page-header":""," ").concat(l?"gutter":"no-gutter"),children:[c?Object(v.jsx)("div",{className:"font-size-lg mb-3 ".concat(l?"":"pt-3 px-3"),children:Object(v.jsx)(j.a,{onClick:function(){p(!0)}})}):null,n]})]})},g=t(42),O=t(49),x=t(267),y=t(673),k=t(668),w=t(641),C=t(73),N=[{pathname:"/dashboard/settings/edit-profile",label:"Edit Profile",icon:Object(v.jsx)(y.a,{}),Pages:i.a.lazy((function(){return Promise.all([t.e(4),t.e(5),t.e(7)]).then(t.bind(null,696))}))},{pathname:"/dashboard/settings/change-password",label:"Change Password",icon:Object(v.jsx)(k.a,{}),Pages:i.a.lazy((function(){return Promise.all([t.e(4),t.e(5),t.e(7)]).then(t.bind(null,696))}))},{pathname:"/dashboard/settings/announcement",label:"Announcement",icon:Object(v.jsx)(w.a,{}),Pages:i.a.lazy((function(){return Promise.all([t.e(4),t.e(5),t.e(7)]).then(t.bind(null,696))}))},{pathname:"/dashboard/settings/options",label:"General",icon:Object(v.jsx)(w.a,{}),Pages:i.a.lazy((function(){return Promise.all([t.e(4),t.e(5),t.e(7)]).then(t.bind(null,696))}))},{pathname:"/dashboard/settings/license",label:"License",icon:Object(v.jsx)(w.a,{}),Pages:i.a.lazy((function(){return Promise.all([t.e(4),t.e(5),t.e(7)]).then(t.bind(null,696))}))}];function P(e){var n=e.match,t=e.location;return Object(v.jsx)(x.a,{defaultSelectedKeys:"".concat(n.url,"/edit-profile"),mode:"inline",selectedKeys:[t.pathname],children:N.map((function(e,n){return Object(v.jsxs)(x.a.Item,{children:[(null===e||void 0===e?void 0:e.icon)&&(null===e||void 0===e?void 0:e.icon),Object(v.jsx)("span",{children:e.label}),Object(v.jsx)(g.b,{to:"".concat(e.pathname)})]},"".concat(e.pathname))}))})}n.a=Object(l.b)((function(e){return{}}),{GetGeneralSetting:C.c})((function(e){var n,t,i,l=e.GetGeneralSetting,r=Object(O.g)();return Object(a.useEffect)((function(){l({params:{page:1,limit:200}})}),[l]),Object(v.jsxs)("div",{children:[Object(v.jsx)(c.a,{loading:!1,name:null!==(n=null===e||void 0===e?void 0:e.name)&&void 0!==n?n:"",positionName:null!==(t=null===e||void 0===e?void 0:e.positionName)&&void 0!==t?t:["Settings"],positionColor:"cyan",thumbnail:null}),Object(v.jsx)(o.a,{style:{marginTop:90},children:Object(v.jsx)(p,{sideContentWidth:320,sideContent:Object(v.jsx)(P,{match:{url:"/dashboard/settings"},location:{pathname:null===(i=r.location)||void 0===i?void 0:i.pathname}}),mainContent:e.children})})]})}))},668:function(e,n,t){"use strict";var a=t(4),i=t(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},c=t(24),o=function(e,n){return i.createElement(c.a,Object(a.a)({},e,{ref:n,icon:l}))};n.a=i.forwardRef(o)},672:function(e,n,t){"use strict";var a=t(4),i=t(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},c=t(24),o=function(e,n){return i.createElement(c.a,Object(a.a)({},e,{ref:n,icon:l}))};n.a=i.forwardRef(o)},673:function(e,n,t){"use strict";var a=t(4),i=t(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M759 335c0-137-111-248-248-248S263 198 263 335c0 82.8 40.6 156.2 103 201.2-.4.2-.7.3-.9.4-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00136 874.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C356 614.2 431 583 511 583c137 0 248-111 248-248zM511 507c-95 0-172-77-172-172s77-172 172-172 172 77 172 172-77 172-172 172zm105 221h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H703.5l47.2-60.1a8.1 8.1 0 001.7-4.9c0-4.4-3.6-8-8-8h-72.6c-4.9 0-9.5 2.3-12.6 6.1l-68.5 87.1c-4.4 5.6-6.8 12.6-6.8 19.8.1 17.7 14.4 32 32.1 32zm240 64H592c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h176.5l-47.2 60.1a8.1 8.1 0 00-1.7 4.9c0 4.4 3.6 8 8 8h72.6c4.9 0 9.5-2.3 12.6-6.1l68.5-87.1c4.4-5.6 6.8-12.6 6.8-19.8-.1-17.7-14.4-32-32.1-32z"}}]},name:"user-switch",theme:"outlined"},c=t(24),o=function(e,n){return i.createElement(c.a,Object(a.a)({},e,{ref:n,icon:l}))};n.a=i.forwardRef(o)},675:function(e,n,t){"use strict";var a=t(289);n.a=a.a},676:function(e,n,t){"use strict";var a=t(279);n.a=a.a},711:function(e,n,t){"use strict";t.r(n);var a=t(8),i=t(0),l=t.n(i),c=t(20),o=(t(658),t(659)),r=(t(177),t(691)),s=t(380),d=t(143),u=t(675),b=t(676),j=t(611),v=t(47),h=t(661),m=t(33),f=t(645),p=t(668),g=t(101),O=t(49),x=t(2);n.default=Object(c.b)((function(e){return{}}))((function(){var e=Object(O.g)(),n=Object(i.useState)(!1),t=Object(a.a)(n,2),c=t[0],y=t[1],k=r.a.useForm(),w=Object(a.a)(k,1)[0];return Object(x.jsx)(l.a.Fragment,{children:Object(x.jsxs)(h.a,{name:"Change Password",positionName:"Settings",children:[Object(x.jsx)(g.a,{alignItems:"center",justifyContent:"start",className:"mb-4",children:Object(x.jsx)(d.a,{type:"link",onClick:function(){return e.goBack()},icon:Object(x.jsx)(f.a,{}),children:"Back"})}),Object(x.jsx)("h2",{children:"Change Password"}),Object(x.jsx)(r.a,{form:w,layout:"vertical",children:Object(x.jsxs)(u.a,{gutter:24,children:[Object(x.jsx)(b.a,{xs:24,md:24,children:Object(x.jsx)(r.a.Item,{name:"old_password",label:"Old Password",rules:[m.a.rules("initial").instance("Required!")],children:Object(x.jsx)(j.a.Password,{prefix:Object(x.jsx)(p.a,{className:"text-primary"})})})}),Object(x.jsx)(b.a,{xs:24,md:12,children:Object(x.jsx)(r.a.Item,{hasFeedback:!0,name:"new_password",label:"Password",rules:[m.a.rules("initial").instance("Required!"),m.a.rules("password").instance],children:Object(x.jsx)(j.a.Password,{placeholder:"input Password"})})}),Object(x.jsx)(b.a,{xs:24,md:12,children:Object(x.jsx)(r.a.Item,{hasFeedback:!0,name:"confirm_password",label:"Confirm Password",rules:[m.a.rules("initial").instance,m.a.rules("validatePassword").instance("new_password")],children:Object(x.jsx)(j.a.Password,{placeholder:"input username"})})})]})}),Object(x.jsx)(o.a,{permission:["admin"],theme:{type:"notification",property:{description:"Mohon maaf nada tidak dapat melakukan aksi",message:"Access Denied"}},config:{loading:c,onClick:function(){y(!0);var e="created";s.b.loading({key:e,content:"Loading...",duration:4}),w.validateFields().then((function(n){new v.a({url:"/api/v1/",body:n}).post().then((function(n){var t,a;null!==n&&void 0!==n&&n.message?s.b.success({key:e,content:null!==(t=null===n||void 0===n?void 0:n.message)&&void 0!==t?t:"Successfully created category",duration:3}):s.b.error({key:e,content:null!==(a=null===n||void 0===n?void 0:n.message)&&void 0!==a?a:"Error: created category",duration:3});y(!1)})).catch((function(n){var t;s.b.error({key:e,content:null!==(t=null===n||void 0===n?void 0:n.message)&&void 0!==t?t:"Error: created category",duration:3}),y(!1)}))})).catch((function(e){var n;s.b.error(null!==(n=null===e||void 0===e?void 0:e.message)&&void 0!==n?n:"Some Error")}))},type:"primary",size:"small"},children:"Create"})]})})}))}}]);
//# sourceMappingURL=20.a5f965e3.chunk.js.map