(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[1],{139:function(e,t,a){e.exports=a(227)},144:function(e,t,a){},21:function(e,t,a){e.exports={logo:"Header_logo__2pS7H",header_block:"Header_header_block__OA_Ih",login_block:"Header_login_block__SOdqg",login:"Header_login__17erq",logout:"Header_logout__3Ti7B",login_process:"Header_login_process__2NAal"}},227:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(48),s=a.n(o);a(144),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(37),c=a(38),u=a(40),l=a(39),p=a(9),d=a.n(p),f=a(6),m=a(11),g=a(22),_=a(18),h=a(21),v=a.n(h),b=function(e){return r.a.createElement("header",null,r.a.createElement("div",{className:v.a.header_block},r.a.createElement(m.b,{to:"/profile"},r.a.createElement("img",{className:v.a.logo,src:"/social-network/pic/buildlogo.jpg",alt:"logo"})),r.a.createElement("div",{className:v.a.login_block},e.isAuth?r.a.createElement(m.b,{to:"/profile"},r.a.createElement("button",{className:v.a.logout,onClick:e.logout},"Log out"),r.a.createElement("span",{className:v.a.login},e.login)):r.a.createElement(m.b,{to:"/login"}," Login "))))},E=a(26),w=a(27),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:v.a.login_process},this.props.isFetchingAuth?r.a.createElement(E.a,null):null),r.a.createElement("div",null,r.a.createElement(b,this.props)),r.a.createElement("div",null,this.props.isAuth?r.a.createElement(f.a,{to:"/profile"}):r.a.createElement(f.a,{to:"/login"})))}}]),a}(n.Component),j=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,isFetchingAuth:e.auth.isFetchingAuth}}),{logout:w.d})(O),k=a(35),y=a.n(k),S=a(36),N=a.n(S),C=a(88),U=a.n(C),A=function(e){var t=e.id,a=e.url,n=e.name,o="/dialogs/"+t;return r.a.createElement("div",{className:N.a.avatar_block},r.a.createElement("div",{className:N.a.avatar_photo},r.a.createElement(m.b,{to:o},r.a.createElement("img",{src:a,alt:""}))),r.a.createElement("div",{className:U()(N.a.avatar_name,N.a.avatar_active)},r.a.createElement(m.b,{to:o},n)))},T=a(58),P=a.n(T),x=function(e){var t=e.to,a=e.body;return r.a.createElement("div",{className:P.a.item},r.a.createElement(m.b,{to:t,activeClassName:P.a.activeLink},a))},L=function(e){var t=e.dialogsPage.dialogs.map((function(e){return r.a.createElement(A,{url:e.photoUrl,name:e.name,id:e.id,key:e.id})}));return r.a.createElement("nav",null,r.a.createElement(x,{to:"/profile",body:"Profile"}),r.a.createElement(x,{to:"/dialogs",body:"Messages"}),r.a.createElement(x,{to:"/users",body:"Users"}),r.a.createElement(x,{to:"/followers",body:"Followers"}),r.a.createElement(x,{to:"/news",body:"News"}),r.a.createElement(x,{to:"/music",body:"Music"}),r.a.createElement("div",{className:y.a.settings},r.a.createElement(x,{to:"/settings",body:"Settings"})),r.a.createElement("div",{className:y.a.friends},r.a.createElement(x,{to:"/friends",body:r.a.createElement("b",null,"FRIENDS")})),r.a.createElement("div",{className:y.a.avatar_block},r.a.createElement("div",{className:y.a.avatars_top},t[5],t[1],t[15])))},F=Object(g.b)((function(e){return{dialogsPage:e.dialogsPage}}))(L),I=a(2),M={initialized:!1,globalError:null},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{initialized:!0});default:return e}},D=a(61),G=a(76),B=a(83),H=a(89),z=a(82),W=Object(_.c)({profilePage:D.b,dialogsPage:G.a,usersPage:B.a,auth:w.a,form:z.a,app:R}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,V=Object(_.e)(W,K(Object(_.a)(H.a)));window.__store__=V;var X=V,Z=function(e){return function(t){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(E.a,null)},r.a.createElement(e,t))}},q=r.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,320))})),J=r.a.lazy((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,322))})),Q=r.a.lazy((function(){return a.e(6).then(a.bind(null,321))})),Y=r.a.lazy((function(){return a.e(11).then(a.bind(null,316))})),$=r.a.lazy((function(){return a.e(9).then(a.bind(null,317))})),ee=r.a.lazy((function(){return a.e(8).then(a.bind(null,318))})),te=r.a.lazy((function(){return a.e(10).then(a.bind(null,319))})),ae=r.a.lazy((function(){return a.e(12).then(a.bind(null,323))})),ne=r.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,324))})),re=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e,t){console.error(t),console.error(e),alert("Some error occurred")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:d.a.app_wrapper},r.a.createElement("div",{className:d.a.header},r.a.createElement(j,null)),r.a.createElement("div",{className:d.a.nav},r.a.createElement(F,null)),r.a.createElement("div",{className:d.a.app_wrapper_content},r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(f.a,{to:"/profile"})}})),r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{path:"/profile/:userId?",render:Z(q)})),r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{path:"/dialogs",render:Z(J)})),r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{path:"/users",render:Z(Q)})),r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{path:"/followers",render:Z(Y)})),r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{path:"/news",render:Z($)})),r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{path:"/music",render:Z(ee)})),r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{path:"/settings",render:Z(te)})),r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{path:"/friends",render:Z(ae)})),r.a.createElement("div",{className:d.a.content_wrapper},r.a.createElement(f.b,{path:"/login",render:Z(ne)})))):r.a.createElement(E.a,null)}}]),a}(r.a.Component),oe=Object(_.d)(f.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(w.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(re),se=function(){return r.a.createElement(m.a,{basename:"/social-network"},r.a.createElement(g.a,{store:X},r.a.createElement(oe,null)))};s.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(85),s=a.n(o),i=a(86),c=a.n(i);t.a=function(){return r.a.createElement("div",{className:c.a.preloader},r.a.createElement("img",{src:s.a,alt:""}))}},27:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return g})),a.d(t,"d",(function(){return h}));var n=a(4),r=a.n(n),o=a(8),s=a(2),i=a(7),c=a(29),u="social-network/auth/SET_USER_DATA",l="social-network/auth/TOGGLE_IS_FETCHING",p={id:null,email:null,login:null,isAuth:!1,isFetchingAuth:!0,captchaUrl:null},d=function(e,t,a,n){return{type:u,payload:{email:e,id:t,login:a,isAuth:n}}},f=function(e){return{type:"social-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},m=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,o,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,o=n.email,s=n.id,c=n.login,t({type:l,isFetchingAuth:!1}),t(d(o,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t,a,n){return function(){var s=Object(o.a)(r.a.mark((function o(s){var u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,a,n);case 2:0===(u=r.sent).data.resultCode?s(m()):(10===u.data.resultCode&&s(_()),l=u.data.messages.length>0?u.data.messages[0]:"Some error",s(Object(c.a)("login",{_error:l})));case 4:case"end":return r.stop()}}),o)})));return function(e){return s.apply(this,arguments)}}()},_=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptchaUrl();case 2:a=e.sent,n=a.data.url,t(f(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:case"social-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(s.a)(Object(s.a)({},e),t.payload);case l:return Object(s.a)(Object(s.a)({},e),{},{isFetchingAuth:t.isFetchingAuth});default:return e}}},35:function(e,t,a){e.exports={avatars_top:"NavBar_avatars_top__39MEv",avatar_block:"NavBar_avatar_block__3XZ2H",friends:"NavBar_friends__vV0W5",activeLink:"NavBar_activeLink__2KyJX",settings:"NavBar_settings__2sulx"}},36:function(e,t,a){e.exports={avatar_block:"NavBarFriends_avatar_block__2g_bw",avatar_photo:"NavBarFriends_avatar_photo__1sTEP",avatar_name:"NavBarFriends_avatar_name__7ydA-",avatar_active:"NavBarFriends_avatar_active__20Dyc"}},58:function(e,t,a){e.exports={item:"NavBarLink_item__2wsrX",activeLink:"NavBarLink_activeLink__10Vhv"}},61:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"d",(function(){return f})),a.d(t,"c",(function(){return m})),a.d(t,"g",(function(){return g})),a.d(t,"e",(function(){return _})),a.d(t,"f",(function(){return h}));var n=a(4),r=a.n(n),o=a(8),s=a(28),i=a(2),c=a(7),u=(a(0),a(29)),l={posts:[{id:1,message:"Hello!",likesCount:1005,dislikesCount:105,url:"https://pixy.org/src/480/thumbs190/4800648.jpg"},{id:2,message:'How"re you?',likesCount:100500,dislikesCount:1050,url:"https://cache.desktopnexus.com/thumbseg/1753/1753481-bigthumbnail.jpg"},{id:3,message:'How"s your life?',likesCount:1050,dislikesCount:150,url:"https://hdwallsbox.com/wallpapers/m/12/nature-flowers-macro-m11645.jpg"},{id:4,message:'How"s your day?',likesCount:150,dislikesCount:15,url:"https://avatars.mds.yandex.net/get-pdb/1590269/e908d30d-87d8-47e8-9c56-c5d92fd9ff79/s375"}],likesCountDefault:10,dislikesCountDefault:1,urlDefault:"https://www.akibanation.com/wp-content/uploads/2016/07/Kon.BLEACH.full_.170410-150x150.jpg",profile:null,status:"default status"},p=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.getProfile(e);case 2:n=t.sent,a({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:n=t.sent,a(d(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a,n){var o,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n().auth.id,t.next=3,c.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}a(f(o)),t.next=10;break;case 8:return a(Object(u.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:e.posts.length+1,message:t.newPostText,likesCount:e.likesCountDefault,dislikesCount:e.dislikesCountDefault,url:e.urlDefault};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[a])});case"DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},7:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return c}));var n=a(87),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"99557ee1-9f56-4ba8-a907-a3a9bd527d18"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method.Please use profileApi object//api.js line 27"),s.getProfile(e)}},s={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo/",t,{"Context-Type":"multipart/form-data"})},saveProfile:function(e){return r.put("profile/",e)}},i={me:function(){return r.get("auth/me/")},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login/",{email:e,password:t,rememberMe:a,captcha:n})},logout:function(){return r.delete("auth/login/")}},c={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},76:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var n=a(28),r=a(2),o={dialogs:[{id:1,name:"Peppa Pig",photoUrl:"https://sun9-28.userapi.com/c847021/v847021528/44667/lMWp94wS5jQ.jpg"},{id:2,name:"George",photoUrl:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/81/81dfb27a31316221ac10f3b1f9b6a3a55899d0af_medium.jpg"},{id:3,name:"Daddy Pig",photoUrl:"https://img.kp40.ru/avatars/30569.jpg?i=1"},{id:4,name:"Mummy Pig",photoUrl:"https://slovnet.ru/wp-content/uploads/2018/12/18-10-150x150.png"},{id:5,name:"April O`Neil",photoUrl:"/social-network/pic/avatars/April/April.png"},{id:6,name:"Bibop",photoUrl:"/social-network/pic/avatars/Bibop/Bibop.jpg"},{id:7,name:"Casey",photoUrl:"/social-network/pic/avatars/Casey/Casey.jpg"},{id:8,name:"Don",photoUrl:"/social-network/pic/avatars/Don/Don.jpg"},{id:9,name:"Karai",photoUrl:"/social-network/pic/avatars/Karai/Karai.jpg"},{id:10,name:"Krang",photoUrl:"/social-network/pic/avatars/Krang/Krang.jpg"},{id:11,name:"Leo",photoUrl:"/social-network/pic/avatars/Leo/Leo.jpg"},{id:12,name:"Mikey",photoUrl:"/social-network/pic/avatars/Mikey/Mikey.jpg"},{id:13,name:"Raph",photoUrl:"/social-network/pic/avatars/Raph/Raph.jpg"},{id:14,name:"Rockstady",photoUrl:"/social-network/pic/avatars/Rockstady/Rockstady.jpg"},{id:15,name:"Shredder",photoUrl:"/social-network/pic/avatars/Shredder/Shredder.png"},{id:16,name:"Splinter",photoUrl:"/social-network/pic/avatars/Splinter/Splinter.jpg"},{id:17,name:"Foot Ninja",photoUrl:"/social-network/pic/avatars/FootClan/Foot-Ninja.jpg"},{id:18,name:"Elite Foot Ninja",photoUrl:"/social-network/pic/avatars/FootClan/Elite-Foot-Ninja.jpg"}],messagesIn:[{id:1,message:"Message_in_1"},{id:2,message:"Message_in_2"},{id:3,message:"Message_in_3"},{id:4,message:"Message_in_4"},{id:5,message:"Message_in_5"},{id:6,message:"Message_in_6"},{id:7,message:"Message_in_7"},{id:8,message:"Message_in_8"},{id:9,message:"Message_in_9"},{id:10,message:"Message_in_10"}],messagesOut:[{id:1,message:"Message_out_1"},{id:2,message:"Message_out_2"},{id:3,message:"Message_out_3"},{id:4,message:"Message_out_4"},{id:5,message:"Message_out_5"},{id:6,message:"Message_out_6"},{id:7,message:"Message_out_7"},{id:8,message:"Message_out_8"},{id:9,message:"Message_out_9"},{id:10,message:"Message_out_10"}]},s=function(e){return{type:"SEND-MESSAGE-OUT",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE-OUT":var a=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messagesOut:[].concat(Object(n.a)(e.messagesOut),[{id:e.messagesOut.length+1,message:a}])});default:return e}}},83:function(e,t,a){"use strict";a.d(t,"d",(function(){return f})),a.d(t,"e",(function(){return g})),a.d(t,"c",(function(){return _})),a.d(t,"b",(function(){return v})),a.d(t,"f",(function(){return b}));var n=a(4),r=a.n(n),o=a(8),s=a(28),i=a(2),c=a(7),u=function(e,t,a,n){return e.map((function(e){return e[a]===t?Object(i.a)(Object(i.a)({},e),n):e}))},l={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},p=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},f=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},_=function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(m(!0)),n(f(e)),a.next=4,c.d.getUsers(e,t);case 4:o=a.sent,n(m(!1)),n({type:"SET_USERS",users:o.items}),n({type:"SET_TOTAL_USERS_COUNT",count:o.totalCount});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},h=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&t(o(a)),t(g(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=c.d.follow.bind(c.d),h(a,e,n,p);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=c.d.unfollow.bind(c.d),h(a,e,n,d);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},85:function(e,t,a){e.exports=a.p+"static/media/loading_gold_svg.f9b49bf2.svg"},86:function(e,t,a){e.exports={preloader:"Preloader_preloader__2mWV3"}},9:function(e,t,a){e.exports={app_wrapper:"App_app_wrapper__3pZqc",app_wrapper_content:"App_app_wrapper_content__3GhHK",header:"App_header__22Y0B",nav:"App_nav__2G3c1",content_wrapper:"App_content_wrapper__q5vQZ"}}},[[139,2,3]]]);
//# sourceMappingURL=main.9daa87e4.chunk.js.map