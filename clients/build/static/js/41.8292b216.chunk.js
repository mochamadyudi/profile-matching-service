(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[41],{687:function(e,t,s){"use strict";var n=s(100),a=s.n(n),r=s(46),i=s(61).a(),o=s(40),c=s(381),l=a.a.create({baseURL:r.a,timeout:6e4}),u="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(o.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(i.push(u),window.location.reload()),e}),(function(e){c.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(o.b),i.push(u),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),c.a.error(t),Promise.reject(e)}))},737:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),r=s(9),i=s(48),o=s(20),c=s(380),l=s(740),u=s(691),d=s(611),m=s(143),j=s(651),h=s(668),g=(s(65),s(622),s(2)),b=s(51),v=(s(687),s(49)),x=s(693),f=s(47),p=function(e){var t=Object(v.g)(),s=e.otherSignIn,a=e.showForgetPassword,o=e.hideAuthMessage,b=e.onForgetPasswordClick,p=e.showLoading,O=e.extra,w=e.loading,y=e.showMessage,k=(e.authenticated,e.showAuthMessage),I=e.token,P=e.redirect,N=e.allowRedirect,S=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(),"fakeToken",p(),!/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(null===t||void 0===t?void 0:t.email)){e.next=7;break}return e.next=7,new f.a({url:"/api/v1/auth/signIn",body:t}).post().then((function(e){var t,s,n=null!==(t=null===e||void 0===e?void 0:e.data)&&void 0!==t?t:void 0;null!==e&&void 0!==e&&e.error?k(null===e||void 0===e?void 0:e.message):("undefined"!==typeof(null===n||void 0===n?void 0:n.token)&&""!==(null===n||void 0===n?void 0:n.token)&&null!==(null===n||void 0===n?void 0:n.token)?localStorage.setItem("token",null===n||void 0===n?void 0:n.token):localStorage.removeItem("token"),c.b.success(null!==(s=null===e||void 0===e?void 0:e.message)&&void 0!==s?s:"Successfully!"),setTimeout((function(){window.location.href="/"}),1e3))})).catch((function(e){k(null===e||void 0===e?void 0:e.message)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){null!==I&&N&&t.push(P),y&&setTimeout((function(){o()}),3e3)}));var F=Object(g.jsx)("div",{});return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(x.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:y?1:0,marginBottom:y?20:0},children:Object(g.jsx)(l.a,{type:"error",showIcon:!0,message:null===e||void 0===e?void 0:e.message})}),Object(g.jsxs)(u.a,{layout:"vertical",name:"login-form",onFinish:S,children:[Object(g.jsx)(u.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(g.jsx)(d.a,{prefix:Object(g.jsx)(j.a,{className:"text-primary"})})}),Object(g.jsx)(u.a.Item,{name:"password",label:Object(g.jsxs)("div",{className:"".concat(a?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(g.jsx)("span",{children:"Password"}),a&&Object(g.jsx)("span",{onClick:function(){return b},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(g.jsx)(d.a.Password,{prefix:Object(g.jsx)(h.a,{className:"text-primary"})})}),Object(g.jsx)(u.a.Item,{children:Object(g.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:w,children:"Sign In"})}),s?F:null,O]})]})};p.defaultProps={otherSignIn:!0,showForgetPassword:!1};var O={showAuthMessage:b.e,showLoading:b.f,hideAuthMessage:b.d,authenticated:b.c},w=Object(o.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),O)(p),y=s(675),k=s(676),I=s(728),P=s(42),N=function(e){Object(o.c)((function(e){return e.theme.currentTheme}));return Object(g.jsx)("div",{className:"h-100",children:Object(g.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(g.jsx)(y.a,{justify:"center",children:Object(g.jsx)(k.a,{xs:20,sm:20,md:20,lg:7,children:Object(g.jsx)(I.a,{children:Object(g.jsxs)("div",{className:"my-4",children:[Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)("img",{className:"fluid mb-3",src:"/".concat("logo.png"),alt:"logo-fids-notifbox",style:{height:"26px",objectFit:"contain"}})}),Object(g.jsx)(y.a,{justify:"center",children:Object(g.jsx)(k.a,{xs:24,sm:24,md:20,lg:20,children:Object(g.jsx)(w,Object(a.a)(Object(a.a)({},e),{},{extra:Object(g.jsx)("div",{className:"text-right",children:Object(g.jsx)(P.b,{to:"/auth/register",children:"Sign Up"})})}))})})]})})})})})})};t.default=function(){return Object(g.jsx)(N,{allowRedirect:!0})}}}]);
//# sourceMappingURL=41.8292b216.chunk.js.map