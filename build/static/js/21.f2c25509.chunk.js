(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[21],{1289:function(e,n,t){"use strict";t.r(n);var r=t(232),a=t(0),c=t.n(a),i=t(38),s=t(871),d=t(872),o=t(5);function l(){var e=Object(a.useState)(""),n=Object(r.a)(e,2),t=n[0],l=n[1],u=Object(i.c)((function(e){return e.uiReducer.loadingData})),f=Object(i.c)((function(e){return e.userReducer.searchUsers})),m=Object(i.c)((function(e){return e.userReducer.userInfo})),h=Object(i.c)((function(e){return e.uiReducer.visible})),E=Object(i.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{searchUser:function(e){E(o.a.userActions.searchUser(e,m._id))},showCardUser:function(e){l(e),E(o.a.uiActions.changeVisible(!0))},loadingData:u,searchUsers:f,friends:m.friends,searchEmpty:function(){E(o.a.userActions.searchUserEmpty())}}),h&&c.a.createElement(d.a,{visible:h,onCancelFlowUser:function(){E(o.a.uiActions.changeVisible(!1))},idFriend:t,userCurrent:m}))}t.d(n,"default",(function(){return l}))},871:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=t(797),i=t(13),s=t(912).a.Search;function d(e){var n=e.searchUser,t=e.loadingData,r=e.searchEmpty;return a.a.createElement(s,{placeholder:Object(i.formatMessage)({id:"home.friends.searchPlacehoder"}),loading:t,onSearch:function(e,t){e&&n(e)},onChange:function(e){e.target.value||r()}})}var o=t(1292),l=t(34),u=t(791),f=t(231),m=t(789);function h(e,n,t,r){return a.a.createElement(m.a,null,a.a.createElement(m.a.Item,{onClick:function(){return e(n)}},Object(i.formatMessage)({id:"home.friends.viewDetail"})),-1!==t.findIndex((function(e){return e.idUser._id===n}))&&a.a.createElement(m.a.Item,{onClick:function(){return r(n)}},Object(i.formatMessage)({id:"home.friends.cancelFriend"})))}var E=o.b.Item;function b(e){var n=e.friend,t=e.showCardUser,r=e.friends,c=e.cancelFriend;return a.a.createElement(E,{key:n._id,extra:a.a.createElement(f.c,{key:"more",menu:h(t,n._id,r,c)})},a.a.createElement(E.Meta,{avatar:a.a.createElement(u.a,{src:n.photoURL}),title:a.a.createElement(l.a,{to:"/profile/".concat(n._id)},n.displayName),description:-1!==r.findIndex((function(e){return e.idUser._id===n._id}))&&Object(i.formatMessage)({id:"home.friends.follow"})}))}t(898);function U(e){var n=e.searchUsers,t=e.showCardUser,r=e.friends,c=e.cancelFriend;return a.a.createElement("div",{className:"list-friend-container"},a.a.createElement(o.b,{dataSource:0===n.length?r:n,renderItem:function(e){return a.a.createElement(b,{friend:0===n.length?e.idUser:e,showCardUser:t,friends:r,cancelFriend:c})}}))}function v(e){var n=e.searchUser,t=e.loadingData,r=e.searchUsers,s=e.searchEmpty,o=e.showCardUser,l=e.friends,u=e.cancelFriend;return a.a.createElement(c.a,{title:Object(i.formatMessage)({id:"home.friends.title"}),size:"small"},a.a.createElement(d,{searchUser:n,loadingData:t,searchEmpty:s}),a.a.createElement(U,{searchUsers:r,showCardUser:o,friends:l,cancelFriend:u}))}t.d(n,"a",(function(){return v}))},872:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=t(34),i=t(797),s=t(798),d=t(796),o=t(72),l=t(1147),u=t(799),f=t(13),m=t(38),h=t(1267),E=t(813),b=t(1266),U=t(988),v=t(987),g=t(251),p=(t(388),t(231)),w=t(5),O=(t(899),i.a.Meta);function j(e){var n=e.visible,t=e.onCancelFlowUser,j=e.idFriend,F=e.userCurrent,y=e.socketRef,C=Object(m.b)(),I=Object(m.c)((function(e){return e.userReducer.userById})),A=Object(m.c)((function(e){return e.userReducer.statusAddFriend}));Object(r.useEffect)((function(){return C(w.a.userActions.fetchUserById(j,F._id)),function(){C(w.a.userActions.cleanUserById())}}),[C,j,F._id]),Object(r.useEffect)((function(){var e=y.current;return e.on("sendAddFriendSuccess",(function(e){C(w.a.userActions.sendAddFriendSuccess(e))})),function(){e.off("sendAddFriendSuccess")}}),[y,C]);return a.a.createElement(d.a,{visible:n,onCancel:t,footer:null,width:350,centered:!1},0===Object.keys(I).length?a.a.createElement(p.d,null):a.a.createElement(i.a,{bordered:!1,cover:a.a.createElement("div",null,a.a.createElement(g.LazyLoadImage,{alt:"",height:200,width:"100%",src:I.photoURL,effect:"blur"})),actions:[a.a.createElement(o.a,{title:Object(f.formatMessage)({id:"home.modalViewUser.viewProfile"})},a.a.createElement(c.a,{to:"/profile/".concat(j)},a.a.createElement(h.a,{key:"view-profile"}))),a.a.createElement(o.a,{title:-1!==F.friends.findIndex((function(e){return e.idUser._id===j}))?Object(f.formatMessage)({id:"home.modalViewUser.follow"}):Object(f.formatMessage)({id:"home.modalViewUser.addFriend"})},-1!==F.friends.findIndex((function(e){return e.idUser._id===j}))?a.a.createElement(E.a,{style:{color:"#1890FF"}}):a.a.createElement(b.a,{style:{color:A&&"#1890FF"},key:"add-user",onClick:function(){A||y.current.emit("sendAddFriend",{idSender:F._id,idReceiver:j},(function(e){s.a.error(e,4)}))}}))]},a.a.createElement(O,{title:a.a.createElement("p",null,I.displayName),description:a.a.createElement("div",null,a.a.createElement(l.a,{direction:"vertical"},""!==I.district&&""!==I.provinceOrCity&&a.a.createElement(u.a,null,a.a.createElement(U.a,null)," ","".concat(I.district.label," - ").concat(I.provinceOrCity.label)),""!==I.phonenumber&&a.a.createElement(u.a,null,a.a.createElement(v.a,null)," ","+84".concat(I.phonenumber)),a.a.createElement(u.a,null,a.a.createElement(E.a,null)," ","".concat(I.friends.length," ").concat(Object(f.formatMessage)({id:"home.modalViewUser.friends"})))))})))}t.d(n,"a",(function(){return j}))},898:function(e,n,t){},899:function(e,n,t){}}]);