(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){e.exports=a.p+"static/media/bg.6dc79205.jpg"},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),s=(a(74),a(42)),u=a(13),i=a.n(u),o=a(16),m=a(9),d=(a(76),a(77),a(144)),E=a(142),f=a(133),p=a(134),b=a(135),v=a(136),h=(a(78),Object(n.createContext)()),g=function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(h.Provider,{value:Object(n.useReducer)(t,a)},c)},y=function(){return Object(n.useContext)(h)},j=a(27),O=a.n(j);var N=function(e){var t=e.user,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],s=c[1],u=y(),i=Object(m.a)(u,2),o=i[0],E=o.myMessages,f=o.currentPeer,p=i[1];return Object(n.useEffect)((function(){E.map((function(e){console.log("yesss"),e.sender!==t.id&&e.receiver!==t.id||s(e)}))}),[E]),r.a.createElement("div",{onClick:function(){p({type:"SET_PEER",peer:t})},className:"sidebarChat d-flex align-items-center ".concat((null===f||void 0===f?void 0:f.id)===t.id&&"current bg-secondary text-white")},r.a.createElement("div",{className:" sidebarChat__avatar mr-3"},r.a.createElement(d.a,{src:"p",alt:t.name})),r.a.createElement("div",{className:"sidebarChat__info"},r.a.createElement("h5",{className:"m-0 p-0"},t.name),r.a.createElement("p",{className:"m-0 p-0"},l.sender===t.id?"You":l.name," :",l.message)),r.a.createElement("div",{className:"ml-auto"},r.a.createElement("small",null,O()(parseInt(l.timestamp)).format("lll")||"just now")))},S=a(60),w=a.n(S).a.create({baseURL:"http://localhost:9000"}),x=function(){var e=y(),t=Object(m.a)(e,2),a=t[0],c=a.users,l=a.user,s=t[1],u=Object(n.useState)(""),h=Object(m.a)(u,2),g=h[0],j=h[1],O=Object(n.useState)([]),S=Object(m.a)(O,2);S[0],S[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/users").then((function(e){s({type:"SET_USERS",users:e.data.users.filter((function(e){return e.id!==(null===l||void 0===l?void 0:l.id)})).filter((function(e){return e.name.toLowerCase().includes(g.trim().toLowerCase())}))})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l,g]),Object(n.useEffect)((function(){})),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"p-2 sidebar__header d-flex"},r.a.createElement("div",{className:"mr-2"},r.a.createElement(d.a,{src:"ak",alt:null===l||void 0===l?void 0:l.name})),r.a.createElement("h2",{className:"text-info"},null===l||void 0===l?void 0:l.name),r.a.createElement("div",{className:"ml-auto"},r.a.createElement(E.a,null,r.a.createElement(f.a,null)),r.a.createElement(E.a,null,r.a.createElement(p.a,null)),r.a.createElement(E.a,null,r.a.createElement(b.a,null)))),r.a.createElement("div",{className:"sidebar__search my-3"},r.a.createElement(v.a,null),r.a.createElement("input",{type:"text",value:g,onChange:function(e){return j(e.target.value)},placeholder:"Search or start new chat",className:"ml-3 search-input outline-none"})),r.a.createElement("div",{className:"sidebar__chats bg-white"},null===c||void 0===c?void 0:c.map((function(e){return r.a.createElement(N,{key:e.id,user:e})}))))},_=(a(100),a(101),a(137)),k=a(138),T=a(139),C=function(){var e=y(),t=Object(m.a)(e,2),a=t[0],c=a.user,l=a.currentPeer,u=a.myMessages,f=t[1],p=Object(n.useState)(""),h=Object(m.a)(p,2),g=h[0],j=h[1],N=Object(n.useState)(),S=Object(m.a)(N,2),x=S[0],C=S[1];Object(n.useEffect)((function(){C(u.filter((function(e){return e.sender===(null===l||void 0===l?void 0:l.id)||e.receiver===(null===l||void 0===l?void 0:l.id)})))}),[l,u]);var I=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,w.post("/messages/new",{message:g,name:c.name,timestamp:O()(),receive:!1,sender:c.id,receiver:l.id});case 3:f({type:"SET_MESSAGES",array:[].concat(Object(s.a)(u),[{message:g,name:c.name,timestamp:O()(),receive:!1,sender:c.id,receiver:l.id}])}),j("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container chat  py-3"},r.a.createElement("div",{className:"chat__header d-flex align-items-center"},r.a.createElement(d.a,{src:"A",alt:null===l||void 0===l?void 0:l.name}),r.a.createElement("div",{className:"chat__headerInfo ml-3"},r.a.createElement("h4",{className:"m-0 p-0"},null===l||void 0===l?void 0:l.name),r.a.createElement("p",{className:"m-0 p-0"},"Last seen at...")),r.a.createElement("div",{className:"row ml-auto"},r.a.createElement("div",{className:"chat__headerRight ml-auto"},r.a.createElement(E.a,null,r.a.createElement(v.a,null)),r.a.createElement(E.a,null,r.a.createElement(_.a,null)),r.a.createElement(E.a,null,r.a.createElement(b.a,null))))),r.a.createElement("div",{className:"chat__body"},null===x||void 0===x?void 0:x.map((function(e){return r.a.createElement("p",{key:e.id,className:"message ".concat(e.sender===c.id&&"own-message")},r.a.createElement("h6",{className:"m-0 p-0"},e.message),r.a.createElement("small",{className:"chat__timestamp m-0 ml-auto"},r.a.createElement("i",null,O()(parseInt(e.timestamp)).format("LT")||"Just now")))}))),r.a.createElement("div",{className:"mt-auto"},r.a.createElement("form",{onSubmit:I,className:"chat__footer d-flex justify-content-center align-items-center"},r.a.createElement(k.a,null),r.a.createElement("input",{className:"outline-none form-control",type:"text",value:g,onChange:function(e){return j(e.target.value)},placeholder:"Type a message"}),r.a.createElement("button",{type:"submit",className:"send-button ".concat(!g&&"d-none")},r.a.createElement(T.a,null)))))},I=a(61),M=a.n(I),B=a(140),P=a(143),R=a(141);function U(){return Math.round(20*Math.random())-10}function L(){var e=50+U(),t=50+U();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var A=Object(B.a)((function(e){return{paper:{position:"absolute",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function G(){var e=A(),t=y(),a=Object(m.a)(t,2),c=a[0].user,l=a[1],s=Object(n.useState)(L),u=Object(m.a)(s,1)[0],d=Object(n.useState)(!0),E=Object(m.a)(d,2),f=E[0],p=E[1],b=Object(n.useState)(""),v=Object(m.a)(b,2),h=v[0],g=v[1],j=Object(n.useState)(""),O=Object(m.a)(j,2),N=O[0],S=O[1],x=Object(n.useState)(""),_=Object(m.a)(x,2),k=_[0],T=_[1],C=Object(n.useState)(!0),I=Object(m.a)(C,2),M=I[0],B=I[1];Object(n.useEffect)((function(){c&&p(!1)}),[c]);var U=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),document.getElementById("err").innerText="",h.trim()){e.next=5;break}return document.getElementById("err").innerText="Enter email",e.abrupt("return");case 5:if(N.trim()){e.next=8;break}return document.getElementById("err").innerText="Enter password",e.abrupt("return");case 8:return e.next=10,w.post("/login",{email:h.trim(),password:N}).then((function(e){200===e.status&&l({type:"SET_USER",user:e.data.user})})).catch((function(e){document.getElementById("err").innerText="No account or wrong password, please try again"}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),document.getElementById("err").innerText="",k.trim()){e.next=5;break}return document.getElementById("err").innerText="Enter You name",e.abrupt("return");case 5:if(h.trim()){e.next=8;break}return document.getElementById("err").innerText="Enter email",e.abrupt("return");case 8:if(N.trim()){e.next=11;break}return document.getElementById("err").innerText="Enter password",e.abrupt("return");case 11:return e.next=13,w.post("/users/new",{name:k,email:h.trim(),password:N}).then((function(e){201===e.status&&l({type:"SET_USER",user:e.data.user})})).catch((function(e){document.getElementById("err").innerText="Sign up fail, please try again"}));case 13:p(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(P.a,{open:f,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{style:u,className:e.paper},M&&r.a.createElement("div",null,r.a.createElement("h2",{id:"simple-modal-title"},"Login with your Email and Password"),r.a.createElement("form",{onSubmit:U,className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(R.a,{id:"outlined-basic",label:"Enter email",type:"email",value:h,onChange:function(e){return g(e.target.value)},variant:"outlined",className:"form-control mt-2"}),r.a.createElement(R.a,{id:"outlined-basic",label:"Enter password (at least 6 character)",type:"password",value:N,onChange:function(e){return S(e.target.value)},variant:"outlined",className:"form-control my-5"}),r.a.createElement("p",{id:"err",className:"text-danger"}),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"LOG IN")),r.a.createElement("p",null,"No account?"," ",r.a.createElement("button",{className:"btn text-danger",onClick:function(){return B(!1)}},"Sign Up")," ","here")),!M&&r.a.createElement("div",null,r.a.createElement("h2",{id:"simple-modal-title"},"Sign Up with your Email,Password and name"),r.a.createElement("form",{onSubmit:G,className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(R.a,{id:"outlined-basic",label:"Enter your name",type:"text",value:k,onChange:function(e){return T(e.target.value)},variant:"outlined",className:"form-control my-5"}),r.a.createElement(R.a,{id:"outlined-basic",label:"Enter email",type:"email",value:h,onChange:function(e){return g(e.target.value)},variant:"outlined",className:"form-control mt-2"}),r.a.createElement(R.a,{id:"outlined-basic",label:"Enter password (at least 6 character)",type:"password",value:N,onChange:function(e){return S(e.target.value)},variant:"outlined",className:"form-control my-5"}),r.a.createElement("p",{id:"err",className:"text-danger"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"SIGN UP")),r.a.createElement("p",null,"Already have a account?",r.a.createElement("button",{className:"btn text-danger",onClick:function(){return B(!0)}},"Login"),"here")))))}var D=function(){var e=y(),t=Object(m.a)(e,2),a=t[0],c=a.myMessages,l=a.user,u=t[1];return Object(n.useEffect)((function(){l&&function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/messages/".concat(l.id)).then((function(e){u({type:"SET_MESSAGES",array:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l]),Object(n.useEffect)((function(){var e=new M.a("4bccf108508cfaa75620",{cluster:"mt1"}).subscribe("messages");return e.bind("inserted",(function(e){u({type:"SET_MESSAGES",array:[].concat(Object(s.a)(c),[e])})})),function(){e.unbind_all(),e.unsubscribe()}}),[c]),r.a.createElement("div",{className:"app"},r.a.createElement(G,null),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"row mt-4 app__body"},r.a.createElement("div",{className:"col-lg-4 col-md-5"},r.a.createElement(x,null)),r.a.createElement("div",{className:"col-lg-8 col-md-7"},r.a.createElement(C,{messages:c})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(17),V=function(e,t){switch(t.type){case"SET_USER":return Object(J.a)(Object(J.a)({},e),{},{user:t.user});case"SET_MESSAGES":return Object(J.a)(Object(J.a)({},e),{},{myMessages:t.array});case"SET_USERS":return Object(J.a)(Object(J.a)({},e),{},{users:t.users});case"SET_PEER":return Object(J.a)(Object(J.a)({},e),{},{currentPeer:t.peer});default:return e}};l.a.render(r.a.createElement(g,{initialState:{user:null,myMessages:[],allUser:[],currentPeer:null,currentMessage:[]},reducer:V},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a(102)},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.999a7143.chunk.js.map