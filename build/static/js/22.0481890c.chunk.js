(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[22],{1272:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(83),l=a(56),s=a(108),u=a(60),i=a(753),o=a(900),m=a(208),d=a(7);function f(e){var t=Object(l.c)((function(e){return e.postReducer.postsById})),a=Object(l.c)((function(e){return e.userReducer.userById})),f=Object(l.c)((function(e){return e.userReducer.userInfo})),b=Object(l.c)((function(e){return e.uiReducer.loadingFetchData})),E=Object(l.b)(),p=Object(r.h)().idUser;Object(n.useEffect)((function(){return E(d.a.userActions.fetchUserById(p)),E(d.a.postActions.fetchPostById(p,1,10)),function(){E(d.a.postActions.unmountPostById())}}),[p,E]);var y=Object(n.useMemo)((function(){return c.a.createElement(o.a,{userInfo:a,userCurrentId:f._id})}),[a,f._id]);return b?c.a.createElement(m.c,null):c.a.createElement(i.a,null,c.a.createElement(s.a,{gutter:16},c.a.createElement(u.a,{xl:8,lg:8,md:8,sm:24,xs:24},y),c.a.createElement(u.a,{xl:16,lg:16,md:16,sm:24,xs:24},c.a.createElement(o.b,{userId:a._id,postsById:t}))))}a.d(t,"default",(function(){return f}))},887:function(e,t,a){},888:function(e,t,a){},889:function(e,t,a){},900:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(689),l=a(929),s=a(1275),u=a(1274),i=a(1273),o=(a(887),a(18)),m=a(50),d=a(966),f=a(682),b=a(793);a(888);function E(e){var t=e.idUser,a=e.userCurrentId,r=Object(n.useState)(!1),l=Object(m.a)(r,2),s=l[0],u=l[1],i=Object(n.useState)(""),E=Object(m.a)(i,2),p=E[0],y=E[1],v=Object(n.useState)([]),O=Object(m.a)(v,2),j=O[0],h=O[1],I=void 0;Object(n.useEffect)((function(){s&&I.focus()}),[s,I]);var g=function(){var e=p,t=j;e&&0===t.filter((function(t){return t.label===e})).length&&(t=[].concat(Object(o.a)(t),[{key:"new-".concat(t.length),label:e}])),h(Object(o.a)(t)),u(!1),y("")};return c.a.createElement("div",{className:"tags"},c.a.createElement("div",{className:"tagsTitle"},"Interests"),j.map((function(e){return c.a.createElement(f.a,{key:e.key,closable:!0,color:"gold",onClose:function(){return function(e){var t=j.filter((function(t){return t.key!==e.key}));h(t)}(e)}},e.label)})),s&&c.a.createElement(b.a,{ref:function(e){return I=e},type:"text",size:"small",style:{width:78},value:p,onChange:function(e){y(e.target.value)},onBlur:g,onPressEnter:g}),!s&&a===t&&c.a.createElement(f.a,{onClick:function(){u(!0)},style:{background:"#fff",borderStyle:"dashed"}},c.a.createElement(d.a,null)))}a(889);function p(){return c.a.createElement("div",{className:"team"},c.a.createElement("div",{className:"teamTitle"},"Skill"))}function y(e){var t=e.userInfo,a=e.userCurrentId;return c.a.createElement(r.a,{style:{marginBottom:24}},c.a.createElement("div",{className:"avatarHolder"},c.a.createElement("img",{alt:"avatar",src:t.photoURL}),c.a.createElement("div",{className:"name"},t.displayName),c.a.createElement("div",null,t.description)),c.a.createElement("div",{className:"detail"},c.a.createElement("p",null,c.a.createElement(s.a,{className:"icon-title"}),t.email),t.phonenumber&&c.a.createElement("p",null,c.a.createElement(u.a,{className:"icon-title"}),"+84".concat(t.phonenumber)),t.district&&t.provinceOrCity&&c.a.createElement("p",null,c.a.createElement(i.a,{className:"icon-title"}),"".concat(t.district.label," - ").concat(t.provinceOrCity.label))),c.a.createElement(l.a,{dashed:!0}),c.a.createElement(E,{idUser:t._id,userCurrentId:a}),c.a.createElement(l.a,{style:{marginTop:16},dashed:!0}),c.a.createElement(p,null))}var v=a(208),O=Object(n.lazy)((function(){return Promise.all([a.e(9),a.e(27)]).then(a.bind(null,1258))}));function j(e){var t=e.userId,a=e.postsById,l=Object(n.useState)("posts"),s=Object(m.a)(l,2),u=s[0],i=s[1],o=[{key:"posts",tab:c.a.createElement("span",null,"Posts"," ",c.a.createElement("span",{style:{fontSize:14}},"(".concat(a.length,")")))},{key:"applications",tab:c.a.createElement("span",null,"\u5e94\u7528"," ",c.a.createElement("span",{style:{fontSize:14}},"(8)"))}];return c.a.createElement(r.a,{className:"tabCard",tabList:o,activeTabKey:u,onTabChange:function(e){i(e)}},c.a.createElement(n.Suspense,{fallback:c.a.createElement(v.g,{size:"small"})},function(e,t,a){return"posts"===e?c.a.createElement(O,{userId:t,postsById:a}):"applications"===e?c.a.createElement("h1",null,"applications"):null}(u,t,a)))}a.d(t,"a",(function(){return y})),a.d(t,"b",(function(){return j}))}}]);