(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[28],{1267:function(e,t,n){"use strict";n.r(t);var r=n(50),a=n(0),o=n.n(a),c=n(1265),i=n(1252),s=n(793),l=n(968),u=c.a.Item;function f(e){var t=e.form;return o.a.createElement(c.a,Object.assign({form:t},{labelCol:{span:9},wrapperCol:{span:12}},{name:"changePasswordForm"}),o.a.createElement(u,{label:"Current password",name:"current_password",rules:[{required:!0,message:"Please input your current password"},{min:6,message:"Password must be more than 6 characters"}]},o.a.createElement(s.a.Password,{prefix:o.a.createElement(l.a,{className:"site-form-item-icon"}),placeholder:"Current password"})),o.a.createElement(u,{label:"New password",name:"new_password",rules:[{required:!0,message:"Please input your new password"},{min:6,message:"Password must be more than 6 characters"}]},o.a.createElement(s.a.Password,{prefix:o.a.createElement(l.a,{className:"site-form-item-icon"}),placeholder:"New password"})),o.a.createElement(u,{label:"Confirm password",name:"password_comfirm",rules:[{required:!0,message:"Please input your confirm password"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("new_password")!==n?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},o.a.createElement(s.a.Password,{prefix:o.a.createElement(l.a,null),placeholder:"Confirm password"})))}var d=n(54),m=n(925),p=n.n(m),h=n(4),w=n.n(h),b=n(32),v=n(127),y=n.n(v),g=n(148),E=n(43),O=n(41),P=n(91);function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=_(this,N(t).call(this,e))).saveSwitch=function(e){n.rcSwitch=e},n.renderSwitch=function(e){var t=e.getPrefixCls,r=e.direction,o=n.props,c=o.prefixCls,i=o.size,s=o.loading,l=o.className,u=void 0===l?"":l,f=o.disabled,d=t("switch",c),m=s?a.createElement(y.a,{className:"".concat(d,"-loading-icon")}):null;return a.createElement(P.b.Consumer,null,(function(e){var t,o=w()(u,(S(t={},"".concat(d,"-small"),"small"===(i||e)),S(t,"".concat(d,"-loading"),s),S(t,"".concat(d,"-rtl"),"rtl"===r),t));return a.createElement(g.a,{insertExtraNode:!0},a.createElement(p.a,j({},Object(b.default)(n.props,["loading"]),{prefixCls:d,className:o,disabled:f||s,ref:n.saveSwitch,loadingIcon:m})))}))},Object(O.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),n=t,(r=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return a.createElement(E.a,null,this.renderSwitch)}}])&&k(n.prototype,r),o&&k(n,o),t}(a.Component);function M(e){return[{name:"Account Password",action:o.a.createElement(d.a,{htmlType:"button",type:"link",onClick:function(){return e()},style:{margin:0,padding:0}},"Modify"),description:"Account passwords may be modify"},{name:"Security Phone",action:o.a.createElement(F,{checkedChildren:"Show",unCheckedChildren:"Hide",defaultChecked:!1}),description:"Phone numbers can be shown or hidden to everyone"}]}F.__ANT_SWITCH=!0;var z=n(208);function I(e){var t=e.updatePass,n=e.loadingButton,s=e.visible,l=e.showModal,u=e.closeModal,d=c.a.useForm(),m=Object(r.a)(d,1)[0],p=Object(a.useRef)();Object(a.useEffect)((function(){p.current=s}),[s]);var h=p.current;Object(a.useEffect)((function(){!s&&h&&m.resetFields()}),[s,m,h]);var w=Object(a.useCallback)((function(){m.submit()}),[m]);return o.a.createElement(c.a.Provider,{onFormFinish:function(e,n){var r=n.values;n.forms;"changePasswordForm"===e&&t(r)}},o.a.createElement(i.a,{itemLayout:"horizontal",dataSource:M(l),renderItem:function(e){return o.a.createElement(i.a.Item,{actions:[e.action]},o.a.createElement(i.a.Item.Meta,{title:e.name,description:e.description}))}}),o.a.createElement(z.h,{title:"Change the password",width:500,visible:s,handleCancel:function(){m.resetFields(),u()},handleOk:w,confirmLoading:n,content:o.a.createElement(f,{form:m})}))}n.d(t,"default",(function(){return I}))},968:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o={name:"lock",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]}},c=n(26),i=function(e,t){return a.a.createElement(c.a,Object.assign({},e,{ref:t,icon:o}))};i.displayName="LockOutlined";t.a=a.a.forwardRef(i)}}]);