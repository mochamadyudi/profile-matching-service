(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[0],{731:function(e,t,n){"use strict";var r=n(4),i=n(3),a=n(0),o=n(7),l=n.n(o),c=n(45),s=n(69),p=n(54),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},u=function(e,t){var n=e.prefixCls,o=e.component,u=void 0===o?"article":o,f=e.className,y=e["aria-label"],h=e.setContentRef,b=e.children,v=d(e,["prefixCls","component","className","aria-label","setContentRef","children"]),m=t;return h&&(Object(p.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),m=Object(c.a)(t,h)),a.createElement(s.a,null,(function(e){var t=e.getPrefixCls,o=e.direction,c=u,s=t("typography",n),p=l()(s,Object(i.a)({},"".concat(s,"-rtl"),"rtl"===o),f);return a.createElement(c,Object(r.a)({className:p,"aria-label":y,ref:m},v),b)}))},f=a.forwardRef(u);f.displayName="Typography";var y=f,h=n(19),b=n(38),v=n(10),m=n(17),g=n(18),O=n(21),E=n(22),x=n(58),j=n(384),C=n.n(j),S=n(1),w=n(337),k=n(35),N=function(e,t){return a.createElement(k.a,Object(S.a)(Object(S.a)({},e),{},{ref:t,icon:w.a}))};N.displayName="EditOutlined";var T=a.forwardRef(N),P=n(291),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},I=function(e,t){return a.createElement(k.a,Object(S.a)(Object(S.a)({},e),{},{ref:t,icon:R}))};I.displayName="CopyOutlined";var z=a.forwardRef(I),A=n(98),H=n(25),L=n(142),M=n(34),B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},D={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},K=a.forwardRef((function(e,t){var n=e.style,i=e.noStyle,o=e.disabled,l=B(e,["style","noStyle","disabled"]),c={};return i||(c=Object(r.a)({},D)),o&&(c.pointerEvents="none"),c=Object(r.a)(Object(r.a)({},c),n),a.createElement("div",Object(r.a)({role:"button",tabIndex:0,ref:t},l,{onKeyDown:function(e){e.keyCode===M.a.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===M.a.ENTER&&r&&r()},style:c}))})),F=n(268),U=n(292),V=n(144),W=n(8),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},_=function(e,t){return a.createElement(k.a,Object(S.a)(Object(S.a)({},e),{},{ref:t,icon:J}))};_.displayName="EnterOutlined";var q,G=a.forwardRef(_),Q=n(336),X=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,o=e.style,c=e.direction,s=e.maxLength,p=e.autoSize,d=void 0===p||p,u=e.value,f=e.onSave,y=e.onCancel,h=e.onEnd,b=a.useRef(),v=a.useRef(!1),m=a.useRef(),g=a.useState(u),O=Object(W.a)(g,2),E=O[0],x=O[1];a.useEffect((function(){x(u)}),[u]),a.useEffect((function(){if(b.current&&b.current.resizableTextArea){var e=b.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var j=function(){f(E.trim())},C=l()(t,"".concat(t,"-edit-content"),Object(i.a)({},"".concat(t,"-rtl"),"rtl"===c),r);return a.createElement("div",{className:C,style:o},a.createElement(Q.a,{ref:b,maxLength:s,value:E,onChange:function(e){var t=e.target;x(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;v.current||(m.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,i=e.metaKey,a=e.shiftKey;m.current!==t||v.current||n||r||i||a||(t===M.a.ENTER?(j(),null===h||void 0===h||h()):t===M.a.ESC&&y())},onCompositionStart:function(){v.current=!0},onCompositionEnd:function(){v.current=!1},onBlur:function(){j()},"aria-label":n,autoSize:d}),a.createElement(G,{className:"".concat(t,"-edit-content-confirm")}))},Y=n(55),Z=1,$=3,ee={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function te(e,t){e.setAttribute("aria-hidden","true");var n,r=window.getComputedStyle(t),i=(n=r,Array.prototype.slice.apply(n).map((function(e){return"".concat(e,": ").concat(n.getPropertyValue(e),";")})).join(""));e.setAttribute("style",i),e.style.position="fixed",e.style.left="0",e.style.height="auto",e.style.minHeight="auto",e.style.maxHeight="auto",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.borderTopWidth="0",e.style.borderBottomWidth="0",e.style.top="-999999px",e.style.zIndex="-1000",e.style.textOverflow="clip",e.style.whiteSpace="normal",e.style.webkitLineClamp="none"}var ne=function(e,t,n,r,i){q||(q=document.createElement("div")).setAttribute("aria-hidden","true"),q.parentNode||document.body.appendChild(q);var o=t.rows,l=t.suffix,c=void 0===l?"":l,s=function(e){var t=document.createElement("div");te(t,e),t.appendChild(document.createTextNode("text")),document.body.appendChild(t);var n=t.getBoundingClientRect().height;return document.body.removeChild(t),n}(e),p=Math.round(s*o*100)/100;te(q,e);var d=function(e){var t=[];return e.forEach((function(e){var n=t[t.length-1];"string"===typeof e&&"string"===typeof n?t[t.length-1]+=e:t.push(e)})),t}(Object(x.a)(n));function u(){return Math.round(100*q.getBoundingClientRect().height)/100-.1<=p}if(Object(Y.render)(a.createElement("div",{style:ee},a.createElement("span",{style:ee},d,c),a.createElement("span",{style:ee},r)),q),u())return Object(Y.unmountComponentAtNode)(q),{content:n,text:q.innerHTML,ellipsis:!1};var f=Array.prototype.slice.apply(q.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){return 8!==e.nodeType})),y=Array.prototype.slice.apply(q.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(Y.unmountComponentAtNode)(q);var h=[];q.innerHTML="";var b=document.createElement("span");q.appendChild(b);var v=document.createTextNode(i+c);function m(e){b.insertBefore(e,v)}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=Math.floor((n+r)/2),o=t.slice(0,a);if(e.textContent=o,n>=r-1)for(var l=r;l>=n;l-=1){var c=t.slice(0,l);if(e.textContent=c,u()||!c)return l===t.length?{finished:!1,reactNode:t}:{finished:!0,reactNode:c}}return u()?g(e,t,a,r,a):g(e,t,n,a,i)}function O(e,t){var n=e.nodeType;if(n===Z)return m(e),u()?{finished:!1,reactNode:d[t]}:(b.removeChild(e),{finished:!0,reactNode:null});if(n===$){var r=e.textContent||"",i=document.createTextNode(r);return m(i),g(i,r)}return{finished:!1,reactNode:null}}return b.appendChild(v),y.forEach((function(e){q.appendChild(e)})),f.some((function(e,t){var n=O(e,t),r=n.finished,i=n.reactNode;return i&&h.push(i),r})),{content:h,text:q.innerHTML,ellipsis:!0}},re=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},ie=Object(U.a)("webkitLineClamp"),ae=Object(U.a)("textOverflow");function oe(e,t,n){return!0===e||void 0===e?t:e||n&&t}var le=function(e){Object(O.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.apply(this,arguments)).contentRef=a.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls;return(0,e.context.getPrefixCls)("typography",t)},e.onExpandClick=function(t){var n,r=e.getEllipsis().onExpand;e.setState({expanded:!0}),null===(n=r)||void 0===n||n(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var n=e.getEditable().onChange;null===n||void 0===n||n(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,n;null===(n=(t=e.getEditable()).onCancel)||void 0===n||n.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var n=e.props,i=n.children,a=n.copyable,o=Object(r.a)({},"object"===Object(h.a)(a)?a:null);void 0===o.text&&(o.text=String(i)),C()(o.text||""),e.setState({copied:!0},(function(){o.onCopy&&o.onCopy(),e.copyId=window.setTimeout((function(){e.setState({copied:!1})}),3e3)}))},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var n=e.getEditable().onStart;t&&n&&n(),e.setState({edit:t},(function(){!t&&e.editIcon&&e.editIcon.focus()}))},e.resizeOnNextFrame=function(){F.a.cancel(e.rafId),e.rafId=Object(F.a)((function(){e.syncEllipsis()}))},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(e){var t=this.props.children,n=this.getEllipsis(),r=this.getEllipsis(e);t===e.children&&n.rows===r.rows||this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),F.a.cancel(this.rafId)}},{key:"getEditable",value:function(e){var t=this.state.edit,n=(e||this.props).editable;return n?Object(r.a)({editing:t},"object"===Object(h.a)(n)?n:null):{editing:t}}},{key:"getEllipsis",value:function(e){var t=(e||this.props).ellipsis;return t?Object(r.a)({rows:1,expandable:!1},"object"===Object(h.a)(t)?t:null):{}}},{key:"canUseCSSEllipsis",value:function(){var e=this.state.clientRendered,t=this.props,n=t.editable,r=t.copyable,i=this.getEllipsis(),a=i.rows,o=i.expandable,l=i.suffix,c=i.onEllipsis,s=i.tooltip;return!l&&!s&&(!(n||r||o||!e||c)&&(1===a?ae:ie))}},{key:"syncEllipsis",value:function(){var e=this.state,t=e.ellipsisText,n=e.isEllipsis,r=e.expanded,i=this.getEllipsis(),a=i.rows,o=i.suffix,l=i.onEllipsis,c=this.props.children;if(a&&!(a<0)&&this.contentRef.current&&!r&&!this.canUseCSSEllipsis()){Object(p.a)(Object(x.a)(c).every((function(e){return"string"===typeof e})),"Typography","`ellipsis` should use string as children only.");var s=ne(this.contentRef.current,{rows:a,suffix:o},c,this.renderOperations(!0),"..."),d=s.content,u=s.text,f=s.ellipsis;t===u&&n===f||(this.setState({ellipsisText:u,ellipsisContent:d,isEllipsis:f}),n!==f&&l&&l(f))}}},{key:"renderExpand",value:function(e){var t,n=this.getEllipsis(),r=n.expandable,i=n.symbol,o=this.state,l=o.expanded,c=o.isEllipsis;return r&&(e||!l&&c)?(t=i||this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},t)):null}},{key:"renderEdit",value:function(){var e=this.props.editable;if(e){var t=e.icon,n=e.tooltip,r=Object(x.a)(n)[0]||this.editStr,i="string"===typeof r?r:"";return a.createElement(V.a,{key:"edit",title:!1===n?"":r},a.createElement(K,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":i},t||a.createElement(T,{role:"button"})))}}},{key:"renderCopy",value:function(){var e=this.state.copied,t=this.props.copyable;if(t){var n=this.getPrefixCls(),r=t.tooltips,i=t.icon,o=Array.isArray(r)?r:[r],c=Array.isArray(i)?i:[i],s=e?oe(o[1],this.copiedStr):oe(o[0],this.copyStr),p=e?this.copiedStr:this.copyStr,d="string"===typeof s?s:p;return a.createElement(V.a,{key:"copy",title:s},a.createElement(K,{className:l()("".concat(n,"-copy"),e&&"".concat(n,"-copy-success")),onClick:this.onCopyClick,"aria-label":d},e?oe(c[1],a.createElement(P.a,null),!0):oe(c[0],a.createElement(z,null),!0)))}}},{key:"renderEditInput",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,i=this.context.direction,o=this.getEditable(),l=o.maxLength,c=o.autoSize,s=o.onEnd;return a.createElement(X,{value:"string"===typeof t?t:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:s,prefixCls:this.getPrefixCls(),className:n,style:r,direction:i,maxLength:l,autoSize:c})}},{key:"renderOperations",value:function(e){return[this.renderExpand(e),this.renderEdit(),this.renderCopy()].filter((function(e){return e}))}},{key:"renderContent",value:function(){var e=this,t=this.state,n=t.ellipsisContent,o=t.isEllipsis,c=t.expanded,s=this.props,p=s.component,d=s.children,u=s.className,f=s.type,h=s.disabled,m=s.style,g=re(s,["component","children","className","type","disabled","style"]),O=this.context.direction,E=this.getEllipsis(),x=E.rows,j=E.suffix,C=E.tooltip,S=this.getPrefixCls(),w=Object(b.a)(g,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat(Object(v.a)(H.a))),k=this.canUseCSSEllipsis(),N=1===x&&k,T=x&&x>1&&k,P=d;if(x&&o&&!c&&!k){var R=g.title,I=R||"";R||"string"!==typeof d&&"number"!==typeof d||(I=String(d)),I=I.slice(String(n||"").length),P=a.createElement(a.Fragment,null,n,a.createElement("span",{title:I,"aria-hidden":"true"},"..."),j),C&&(P=a.createElement(V.a,{title:!0===C?d:C},a.createElement("span",null,P)))}else P=a.createElement(a.Fragment,null,d,j);return P=function(e,t){var n=e.mark,r=e.code,i=e.underline,o=e.delete,l=e.strong,c=e.keyboard,s=e.italic,p=t;function d(e,t){e&&(p=a.createElement(t,{},p))}return d(l,"strong"),d(i,"u"),d(o,"del"),d(r,"code"),d(n,"mark"),d(c,"kbd"),d(s,"i"),p}(this.props,P),a.createElement(L.a,{componentName:"Text"},(function(t){var n,c=t.edit,s=t.copy,d=t.copied,b=t.expand;return e.editStr=c,e.copyStr=s,e.copiedStr=d,e.expandStr=b,a.createElement(A.a,{onResize:e.resizeOnNextFrame,disabled:k},a.createElement(y,Object(r.a)({className:l()((n={},Object(i.a)(n,"".concat(S,"-").concat(f),f),Object(i.a)(n,"".concat(S,"-disabled"),h),Object(i.a)(n,"".concat(S,"-ellipsis"),x),Object(i.a)(n,"".concat(S,"-single-line"),1===x&&!o),Object(i.a)(n,"".concat(S,"-ellipsis-single-line"),N),Object(i.a)(n,"".concat(S,"-ellipsis-multiple-line"),T),n),u),style:Object(r.a)(Object(r.a)({},m),{WebkitLineClamp:T?x:void 0}),component:p,ref:e.contentRef,direction:O},w),P,e.renderOperations()))}))}},{key:"render",value:function(){return this.getEditable().editing?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.children,n=e.editable;return Object(p.a)(!n||"string"===typeof t,"Typography","When `editable` is enabled, the `children` should use string."),{}}}]),n}(a.Component);le.contextType=s.b,le.defaultProps={children:""};var ce=le,se=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},pe=function(e){var t=e.ellipsis,n=se(e,["ellipsis"]),i=a.useMemo((function(){return t&&"object"===Object(h.a)(t)?Object(b.a)(t,["expandable","rows"]):t}),[t]);return Object(p.a)("object"!==Object(h.a)(t)||!t||!("expandable"in t)&&!("rows"in t),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),a.createElement(ce,Object(r.a)({},n,{ellipsis:i,component:"span"}))},de=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},ue=function(e,t){var n=e.ellipsis,i=e.rel,o=de(e,["ellipsis","rel"]);Object(p.a)("object"!==Object(h.a)(n),"Typography.Link","`ellipsis` only supports boolean value.");var l=a.useRef(null);a.useImperativeHandle(t,(function(){var e;return null===(e=l.current)||void 0===e?void 0:e.contentRef.current}));var c=Object(r.a)(Object(r.a)({},o),{rel:void 0===i&&"_blank"===o.target?"noopener noreferrer":i});return delete c.navigate,a.createElement(ce,Object(r.a)({},c,{ref:l,ellipsis:!!n,component:"a"}))},fe=a.forwardRef(ue),ye=n(59),he=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},be=Object(ye.b)(1,2,3,4,5),ve=function(e){var t,n=e.level,i=void 0===n?1:n,o=he(e,["level"]);return-1!==be.indexOf(i)?t="h".concat(i):(Object(p.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),t="h1"),a.createElement(ce,Object(r.a)({},o,{component:t}))},me=function(e){return a.createElement(ce,Object(r.a)({},e,{component:"div"}))},ge=y;ge.Text=pe,ge.Link=fe,ge.Title=ve,ge.Paragraph=me;t.a=ge}}]);
//# sourceMappingURL=0.54cd1daf.chunk.js.map