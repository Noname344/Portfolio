(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/1.c5e2465c.jpg"},,,,,,,function(e,t,n){e.exports=n.p+"static/media/gitIcon.f3db7505.png"},,function(e,t,n){e.exports=n.p+"static/media/CalculatorImg.e9f5604c.jpg"},function(e,t,n){e.exports=n.p+"static/media/56756.7dc81e89.jpg"},function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Warrior_myfirstreact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_Warrior_myfirstreact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_Warrior_myfirstreact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_Warrior_myfirstreact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(48),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(26),_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(27),App=function(_Component){Object(C_Users_Warrior_myfirstreact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(C_Users_Warrior_myfirstreact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(e){var t;return Object(C_Users_Warrior_myfirstreact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(t=_super.call(this,e)).reset=function(){t.setState({result:"0"})},t.handleKey=function(e){var n=e.key||e,a=t.state.result,r=a.split(/[*/+\-%]/);/Enter|=/.test(n)?t.calculate():/^c$|^\u0441$/i.test(n)?t.reset():/Backspace/.test(n)?t.clearLastChar():a.length<=47&&/[*/+\-%().]|^\d$/.test(n)&&(/error|infinity|-infinity|NaN|undefined/i.test(a)||/\d/.test(n)&&"0"===a?t.setState({result:n}):"."===n&&a.match(/\d$/)&&!/[d.]/.test(r[r.length-1])?t.setState({result:a+n}):("+"!==n||"0"===a||/[*./+\-(%]$/.test(a))&&("-"!==n||"0"===a||/[*./+\-(%]$/.test(a))&&("*"!==n||"0"===a||/[*./+\-(%]$/.test(a))&&("/"!==n||"0"===a||/[*./+\-(%]$/.test(a))&&("%"!==n||"0"===a||/[*./+\-(%]$/.test(a))?")"===n&&/\(/.test(a)&&!/\)/.test(a)&&!/\(/.test(r[r.length-1])&&a.match(/\d$/)||")"===n&&a.match(/\d$/)&&/\(/.test(a)&&!/\(/.test(r[r.length-1])&&a.match(/\(/g).length!==a.match(/\)/g).length?t.setState({result:a+n}):"("===n&&"0"===a?t.setState({result:n}):("("===n&&"0"!==a&&!/[(.]$/.test(a)&&/[*/+\-%]$/.test(a)||"0"===n&&"0"!==a&&!/[(.]$/.test(a)&&/[*/+\-%]$/.test(a)||/\d/.test(n)&&!/\)$/.test(a))&&t.setState({result:a+n}):t.setState({result:a+n}))},t.state={result:"0"},t}return Object(C_Users_Warrior_myfirstreact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"calculate",value:function calculate(){try{var x=eval(this.state.result).toString(),Rnd=x.length>13?Number(x).toPrecision(13):x;this.setState({result:Rnd})}catch(e){this.setState({result:"error"})}}},{key:"clearLastChar",value:function(){/error|infinity|-infinity|NaN|undefined/i.test(this.state.result)?this.reset():this.setState({result:this.state.result.substring(0,this.state.result.length-1)||"0"})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKey)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.handleKey}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(5),l=n(4),o=n(0),i=n.n(o),s=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.result;return i.a.createElement("div",{className:"result"},i.a.createElement("p",null,e))}}]),n}(o.Component);t.a=s},function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(5),l=n(4),o=n(0),i=n.n(o),s=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"button"},i.a.createElement("button",{name:"(",onClick:function(t){return e.props.onClick(t.target.name)}},"("),i.a.createElement("button",{name:")",onClick:function(t){return e.props.onClick(t.target.name)}},")"),i.a.createElement("button",{className:"width2",name:"Backspace",style:{fontSize:"38px",padding:"15.7px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"\u21a4"),i.a.createElement("button",{name:"%",onClick:function(t){return e.props.onClick(t.target.name)}},"%"),i.a.createElement("button",{name:"*",style:{fontSize:"45px",padding:"8.8px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"*"),i.a.createElement("button",{name:"/",style:{fontSize:"36px",padding:"16.6px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"/"),i.a.createElement("button",{name:"C",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),i.a.createElement("button",{name:"7",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),i.a.createElement("button",{name:"8",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),i.a.createElement("button",{name:"9",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),i.a.createElement("button",{name:"-",style:{fontSize:"55px",padding:"7.27px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"-"),i.a.createElement("button",{name:"4",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),i.a.createElement("button",{name:"5",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),i.a.createElement("button",{name:"6",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),i.a.createElement("button",{name:"+",style:{fontSize:"53px",padding:"7.54px 0",fontWeight:"normal"},onClick:function(t){return e.props.onClick(t.target.name)}},"+"),i.a.createElement("button",{name:"1",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),i.a.createElement("button",{name:"2",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),i.a.createElement("button",{name:"3",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),i.a.createElement("button",{name:"=",className:"height2",style:{fontSize:"40px",padding:"10px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"="),i.a.createElement("button",{name:"0",className:"width2",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),i.a.createElement("button",{name:".",style:{fontSize:"45px",padding:"8.8px 0"},onClick:function(t){return e.props.onClick(t.target.name)}},"."))}}]),n}(o.Component);t.a=s},function(e,t,n){e.exports=n.p+"static/media/bluredImg.17441f72.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.07da2614.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.be4f8d6b.jpg"},function(e,t,n){e.exports=n.p+"static/media/4.8109a056.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.07edc018.jpg"},function(e,t,n){e.exports=n.p+"static/media/6.2e971e5b.jpg"},function(e,t,n){e.exports=n.p+"static/media/7.c3754396.jpg"},function(e,t,n){e.exports=n.p+"static/media/8.7bb32ac8.jpg"},function(e,t,n){e.exports=n(49)},,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),l=n.n(c),o=n(11),i=n(1),s=(n(41),n(42),n(2)),u=n(3),m=n(5),_=n(4),d=n(21),p=n.n(d),h=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"gitIcon"},r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/Ivan-Kononchuk",target:"_blank"},r.a.createElement("img",{onClick:this.props.onClick,src:p.a,alt:"gitIcon"})))}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).openNav=function(){a.setState({width:"100%"}),document.body.style.overflow="hidden"},a.closeNav=function(){a.setState({width:"",overflow:""}),document.body.style.overflow="visible"},a.state={NavItemActive:"",width:"",overflow:""},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("button",{onClick:this.openNav,id:"openBtn"},"\u2630"),r.a.createElement("ul",{id:"Navbar",style:{width:this.state.width}},r.a.createElement("li",{id:"container"},r.a.createElement("button",{id:"closebtn",onClick:this.closeNav},"\xd7")),r.a.createElement("li",{className:"Navbarli"},r.a.createElement(o.c,{className:"Navbarlink",activeClassName:"active",onClick:this.closeNav,to:"/Portfolio/"},"Projects")),r.a.createElement("li",{className:"Navbarli"},r.a.createElement(o.c,{className:"Navbarlink",activeClassName:"active",onClick:this.closeNav,to:"/Portfolio/Skills_N_Contact"},"Skills & Contact")),r.a.createElement(h,{onClick:this.closeNav})))}}]),n}(a.Component),E=n(7),b=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={message:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(a)),a.sendEffect=a.sendEffect.bind(Object(E.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();this.sendFeedback("template_w1dmWdUc",{message_html:this.state.message})}},{key:"transition2",value:function(e){e.innerHTML="#mail-area::placeholder{ opacity: 0; visibility: hidden; transition: all 4s; }",document.getElementsByTagName("head")[0].appendChild(e)}},{key:"transition3",value:function(){var e=document.getElementsByTagName("head")[0].lastChild;document.getElementsByTagName("head")[0].removeChild(e)}},{key:"sendEffect",value:function(){var e=this;this.setState({message:""});var t=document.createElement("style");t.type="text/css",t.innerHTML="#mail-area::placeholder{ opacity: 1; visibility: visible; transition: opacity .5s;}",document.getElementsByTagName("head")[0].appendChild(t),setTimeout((function(n){return e.transition2(t)}),500),setTimeout(this.transition3,4e3)}},{key:"sendFeedback",value:function(e,t){var n=this;window.emailjs.send("gmail",e,t).then((function(e){n.sendEffect()})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){return r.a.createElement("form",{id:"mail-form",onSubmit:this.handleSubmit},r.a.createElement("textarea",{id:"mail-area",onChange:this.handleChange,required:!0,placeholder:"Mail has been successfully sent",value:this.state.message}),r.a.createElement("input",{type:"submit",id:"submit",className:"projectLink"}))}}]),n}(r.a.Component),k=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).copyMail=a.copyMail.bind(Object(E.a)(a)),a}return Object(u.a)(n,[{key:"copyMail",value:function(e,t){var n=document.getElementById(e);n.setAttribute("type","text"),n.select(),document.execCommand("copy"),n.setAttribute("type","hidden"),document.getElementById("gmail-span").textContent="Copy",document.getElementById("email-span").textContent="Copy",document.getElementById(t).textContent="Copied!"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Content"},r.a.createElement("div",{className:"fleft clearfix"},r.a.createElement("div",{className:"narrow"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Skills")),r.a.createElement("tr",null,r.a.createElement("td",null,"HTML")),r.a.createElement("tr",null,r.a.createElement("td",null,"CSS")),r.a.createElement("tr",null,r.a.createElement("td",null,"JavaScript")),r.a.createElement("tr",null,r.a.createElement("td",null,"ReactJS"))))),r.a.createElement("div",{className:"tooltip"},r.a.createElement("button",{onClick:function(t){return e.copyMail("email","email-span")},className:"projectLink"},"Email"),r.a.createElement("span",{className:"tooltiptext",id:"email-span"},"Copy"),r.a.createElement("input",{type:"hidden",id:"email",value:"zoibertonfd@mail.ru"})),r.a.createElement("div",{className:"tooltip"},r.a.createElement("button",{onClick:function(t){return e.copyMail("gmail","gmail-span")},className:"projectLink"},"Gmail"),r.a.createElement("span",{className:"tooltiptext",id:"gmail-span"},"Copy"),r.a.createElement("input",{type:"hidden",id:"gmail",value:"myyzrik@gmail.com"}))),r.a.createElement(b,null))}}]),n}(a.Component),C=n(23),v=n.n(C),g=n(24),y=n.n(g),O=n(14),j=n.n(O),N=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"openFullScreen",value:function(){document.getElementById("BlackChromeBackground").classList.add("enlarge"),document.body.style.overflow="hidden"}},{key:"closeFullScreen",value:function(){document.getElementById("BlackChromeBackground").classList.remove("enlarge"),document.body.style.overflow="visible"}},{key:"componentDidMount",value:function(){document.getElementById("BlackChromeBackground").addEventListener("click",this.closeFullScreen)}},{key:"componentWillUnmount",value:function(){document.getElementById("BlackChromeBackground").removeEventListener("click",this.closeFullScreen)}},{key:"render",value:function(){return r.a.createElement("div",{className:"projectsContainer"},r.a.createElement("div",{className:"projectContainer"},r.a.createElement("h1",null,"This Website"),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/Ivan-Kononchuk/Portfolio",target:"_blank",className:"projectLink"},"See code")),r.a.createElement("div",{className:"projectContainer"},r.a.createElement("div",{id:"calcAlign"},r.a.createElement("img",{id:"calcImage",src:v.a,alt:"Calculator"})),r.a.createElement("div",{className:"calculatorContent"},r.a.createElement("h1",{className:"fullWidth"},"Calculator on React"),r.a.createElement(o.b,{to:"/Portfolio/projects/calculator",className:"projectLink r-offset"},"Try it"),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/Ivan-Kononchuk/Calculator-on-React",target:"_blank",className:"projectLink r-offset"},"See code"))),r.a.createElement("div",{className:"BlackBackgroundContenteiner"},r.a.createElement("img",{src:y.a,alt:"Black Chrome",id:"BlackChromeBackground",className:"ImageBackground"}),r.a.createElement("div",{className:"BlackBackgroundContent"},r.a.createElement("h1",{className:"BlackBackgroundHeader"},"Black Chrome Theme"),r.a.createElement("button",{className:"projectLink invisible",onClick:this.openFullScreen},"Enlarge"),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/Ivan-Kononchuk/Black-Chrome",target:"_blank",className:"projectLink projectLink2"},"See code"))),r.a.createElement("div",{className:"BlackBackgroundContenteiner"},r.a.createElement("img",{src:j.a,alt:"Black Google",className:"ImageBackground"}),r.a.createElement("div",{className:"BlackBackgroundContent"},r.a.createElement("h1",{className:"BlackBackgroundHeader"},"Black Google Theme"),r.a.createElement(o.b,{to:"/Portfolio/projects/Black-Google",className:"projectLink projectLink2"},"See more"),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/Ivan-Kononchuk/Black-Google",target:"_blank",className:"projectLink"},"See code"))))}}]),n}(a.Component),B=n(25),P=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(B.a,{className:"Content"})}}]),n}(a.Component),x=n(28),M=n.n(x),D=n(29),I=n.n(D),S=n(30),w=n.n(S),L=n(31),K=n.n(L),A=n(32),W=n.n(A),T=n(33),U=n.n(T),R=n(34),$=n.n(R),q=n(35),z=n.n(q),F=[j.a,I.a,w.a,K.a,W.a,U.a,$.a,z.a],G=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentIndex:null},a.closeModal=a.closeModal.bind(Object(E.a)(a)),a.findNext=a.findNext.bind(Object(E.a)(a)),a.findPrev=a.findPrev.bind(Object(E.a)(a)),a.renderImageContent=a.renderImageContent.bind(Object(E.a)(a)),a}return Object(u.a)(n,[{key:"renderImageContent",value:function(e,t){var n=this;return r.a.createElement("img",{onClick:function(e){return n.openModal(e,t)},src:e,key:e,alt:"Black Goggle",className:"googleImages pointer"})}},{key:"openModal",value:function(e,t){this.setState({currentIndex:t}),document.body.style.overflow="hidden"}},{key:"closeModal",value:function(e){void 0!==e&&e.preventDefault(),this.setState({currentIndex:null}),document.body.style.overflow="visible"}},{key:"findPrev",value:function(e){void 0!==e&&e.preventDefault(),this.setState((function(e){return{currentIndex:e.currentIndex-1}}))}},{key:"findNext",value:function(e){void 0!==e&&e.preventDefault(),this.setState((function(e){return{currentIndex:e.currentIndex+1}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"projectsContainer"},F.map(this.renderImageContent),r.a.createElement(H,{closeModal:this.closeModal,findPrev:this.findPrev,findNext:this.findNext,hasPrev:this.state.currentIndex>0,hasNext:this.state.currentIndex+1<F.length,src:F[this.state.currentIndex]}))}}]),n}(r.a.Component),H=function(e){Object(m.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleKeyDown=e.handleKeyDown.bind(Object(E.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.body.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){27===e.keyCode&&this.props.closeModal(),37===e.keyCode&&this.props.hasPrev&&this.props.findPrev(),39===e.keyCode&&this.props.hasNext&&this.props.findNext()}},{key:"render",value:function(){var e=this.props,t=e.closeModal,n=e.hasNext,a=e.hasPrev,c=e.findNext,l=e.findPrev,o=e.src;return o?r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-body"},a&&r.a.createElement("button",{className:"modal-prev",onClick:l,onKeyDown:this.handleKeyDown},"\u2039"),n&&r.a.createElement("button",{className:"modal-next",onClick:c,onKeyDown:this.handleKeyDown},"\u203a"),r.a.createElement("img",{src:o,onClick:t,className:"pointer",onKeyDown:this.handleKeyDown,alt:"Black Google"}))):null}}]),n}(r.a.Component),J=G;var Q=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{id:"App"},r.a.createElement(f,null),r.a.createElement("img",{id:"bluredImg",src:M.a,alt:""}),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/Portfolio/"},r.a.createElement(N,null)),r.a.createElement(i.a,{exact:!0,path:"/Portfolio/Skills_N_Contact"},r.a.createElement(k,null)),r.a.createElement(i.a,{exact:!0,path:"/Portfolio/projects/calculator"},r.a.createElement(P,null)),r.a.createElement(i.a,{exact:!0,path:"/Portfolio/projects/Black-Google"},r.a.createElement(J,null)))))};l.a.render(r.a.createElement(Q,null),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.82567e2f.chunk.js.map