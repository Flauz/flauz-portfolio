(this["webpackJsonpflauz-portfolio"]=this["webpackJsonpflauz-portfolio"]||[]).push([[0],{154:function(e,t,a){e.exports=a(376)},375:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),o=a(13),l=a.n(o),m=a(15),c=a(24),s=a(98),u=a(95),d=a(53),p=a(411),g=a(23),h=a(5),E=(a(413),a(415),a(137),a(138),a(139),Object(p.a)({root:{"& .MuiBottomNavigationAction-root":{minWidth:0,maxWidth:250},"& .MuiSvgIcon-root":{fill:"tan","&:hover":{fill:"tomato",fontSize:"1.8rem"}}}}),a(439)),b=a(141),f=a.n(b),v=a(142),y=a.n(v),x=a(437),w=a(420),N=a(421),j=a(422),L=a(423),q=a(424),S=a(425),C=a(426),O=a(427),k=a(81),I=a(416),z=a(417),B=a(418),W=a(419),T=a(140),P=a.n(T),D=Object(p.a)((function(e){return{menuSliderContainer:{marginTop:40,width:250,background:"#343a40",height:"100vh"},listItem:{color:"primary"},root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0,background:"grey"},drawerPaper:{width:240,background:"#343a40",opacity:.95},drawerHeader:Object(u.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),H=[{listIcon:i.a.createElement(I.a,null),listText:"Home",listPath:"/"},{listIcon:i.a.createElement(z.a,null),listText:"Resume",listPath:"/resume"},{listIcon:i.a.createElement(B.a,null),listText:"Portfolio",listPath:"/portfolio"},{listIcon:i.a.createElement(W.a,null),listText:"Contacts",listPath:"/contacts"}],F=function(){var e=Object(r.useState)({right:!1}),t=Object(s.a)(e,2),a=(t[0],t[1],i.a.useState(!1)),n=Object(s.a)(a,2),o=n[0],l=n[1],m=D(),u=Object(g.a)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{component:"nav"},i.a.createElement(S.a,{position:"fixed",style:{zIndex:1,top:0,background:"#222"},className:Object(h.a)(m.appBar,Object(c.a)({},m.appBarShift,o))},i.a.createElement(C.a,null,i.a.createElement(O.a,{onClick:function(){l(!0)},edge:"start","aria-label":"inherit",className:Object(h.a)(m.menuButton,o&&m.hide)},i.a.createElement(P.a,null)),i.a.createElement(k.a,{variant:"h5",noWrap:!0},"Flauz's Portfolio"))),i.a.createElement(E.a,{className:m.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:m.drawerPaper}},i.a.createElement("div",{className:m.drawerHeader},i.a.createElement(O.a,{onClick:function(){l(!1)}},"ltr"===u.direction?i.a.createElement(f.a,null):i.a.createElement(y.a,null))),i.a.createElement(x.a,{component:"div",style:{background:"#343a40"}},i.a.createElement(w.a,null),i.a.createElement(N.a,null,H.map((function(e,t){return i.a.createElement(j.a,{button:!0,key:t,component:d.b,to:e.listPath},i.a.createElement(L.a,{className:m.listItem},e.listIcon),i.a.createElement(q.a,{className:m.listItem,primary:e.listText}))})))))))},U=a(80),M=a.n(U),A=Object(p.a)((function(e){return{avatar:{width:e.spacing(15),height:e.spacing(15),margin:e.spacing(1)},title:{color:"#adb5bd"},subtitle:{color:"#dfe7ef",marginBottom:"3rem"},typedContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100vw",textAlign:"center",zIndex:1}}})),Y=function(){var e=A();return i.a.createElement(x.a,{className:e.typedContainer},i.a.createElement(k.a,{className:e.title,variant:"h4"},i.a.createElement(M.a,{strings:["Florian Guillot"],typeSpeed:40})),i.a.createElement("br",null),i.a.createElement(k.a,{className:e.subtitle,variant:"h5"},i.a.createElement(M.a,{strings:["Web Developer"],typeSpeed:40}),i.a.createElement("br",null),i.a.createElement(M.a,{strings:["React.js/Node.js"],typeSpeed:40})))},J=a(143),R=a.n(J),G=a(378),_=Object(G.a)({particlesCanva:{position:"absolute",opacity:"0.3"}}),$=function(){var e=_();return i.a.createElement("div",{style:{height:"100%",width:"100%"}},i.a.createElement(F,null),i.a.createElement(R.a,{canvasClassName:e.particlesCanva,height:"100%",width:"100%",params:{particles:{number:{value:55,density:{enable:!0,value_area:500}},shape:{type:"circle",strole:{width:1,color:"tomato"}},size:{value:8,random:!0,anim:{enable:!0,speed:10,size_min:.1,sync:!1}}}}}),i.a.createElement(Y,null))},K=Object(p.a)((function(e){return{maintContainer:{background:"#233",opacity:.9,marginTop:20},timeLine:Object(c.a)({position:"relative",padding:"1rem",margin:"0 auto","&:before":{content:"''",position:"absolute",height:"100%",border:"1px solid white",right:"40px",top:0},"&:after":{content:"''",display:"table",clear:"both"}},e.breakpoints.up("md"),{padding:"2rem","&:before":{left:"calc(50% - 1px)",right:"auto"}}),timeLineItem:Object(c.a)({padding:"1rem",borderBottom:"2px solid tan",position:"relative",margin:"1rem 3rem 1rem 1rem",clear:"both","&:after":{content:"''",position:"absolute"},"&:before":{content:"''",position:"absolute",right:"-0.625rem",top:"calc(50% - 5px)",borderStyle:"solid",borderColor:"white white transparent transparent",borderWith:"0.625rem",transform:"rotate(45deg)"}},e.breakpoints.up("md"),{width:"44%",margin:"1rem","&:nth-of-type(2n)":{float:"right",margin:"1rem",borderColor:"tan"},"&:nth-of-type(2n):before":{right:"auto",left:"-0.625rem",borderColor:"transparent transparent tomato tomato"}}),timeLineYear:Object(c.a)({textAlign:"center",maxWidth:"9.375rem",margin:"0 3rem 0 auto",fontSize:"1.8rem",background:"primary",color:"white",lineHeight:1,padding:"0.5 rem 0 1rem","&:before":{display:"none"}},e.breakpoints.up("md"),{textAlign:"center",margin:"0 auto","&:nth-of-type(2n)":{float:"none",margin:"0 auto"},"&:nth-of-type(2n):before":{display:"none"}}),heading:{color:"primary",padding:"3rem 0",textTransform:"uppercase"},subHeading:{color:"white",padding:"0",textTransform:"uppercase"}}})),Q=function(){var e=K();return i.a.createElement(i.a.Fragment,null,i.a.createElement(F,null),i.a.createElement(x.a,{component:"header",className:e.maintContainer},i.a.createElement(k.a,{variant:"h4",align:"center",className:e.heading},"Working Experience"),i.a.createElement(x.a,{component:"div",className:e.timeLine},i.a.createElement(k.a,{variant:"h2",className:"".concat(e.timeLineYear," ").concat(e.timeLineItem)},"2018"),i.a.createElement(x.a,{component:"div",className:e.timeLineItem},i.a.createElement(k.a,{variant:"h5",align:"center",className:e.subHeading},"html & css"),i.a.createElement(k.a,{variant:"body1",align:"center",style:{color:"white"}},"Lorem ipsum"),i.a.createElement(k.a,{variant:"subtitle1",align:"center",style:{color:"white"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(k.a,{variant:"h2",className:"".concat(e.timeLineYear," ").concat(e.timeLineItem)},"2019"),i.a.createElement(x.a,{component:"div",className:e.timeLineItem},i.a.createElement(k.a,{variant:"h5",align:"center",className:e.subHeading},"Javascript"),i.a.createElement(k.a,{variant:"body1",align:"center",style:{color:"white"}},"Lorem ipsum"),i.a.createElement(k.a,{variant:"subtitle1",align:"center",style:{color:"white"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(k.a,{variant:"h2",className:"".concat(e.timeLineYear," ").concat(e.timeLineItem)},"2020"),i.a.createElement(x.a,{component:"div",className:e.timeLineItem},i.a.createElement(k.a,{variant:"h5",align:"center",className:e.subHeading},"react | redux"),i.a.createElement(k.a,{variant:"body1",align:"center",style:{color:"white"}},"Lorem ipsum"),i.a.createElement(k.a,{variant:"subtitle1",align:"center",style:{color:"white"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),i.a.createElement("br",null),i.a.createElement("br",null))))},V=a(6),X=a(436),Z=a(428),ee=a(429),te=a(144),ae=a.n(te),ne=Object(p.a)((function(e){return{form:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute"},button:{marginTop:"1rem",color:"#dfe7ef",borderColor:"#dfe7ef"}}})),re=Object(V.a)({root:{"& label.Mui-focused":{color:"#dfe7ef"},"& label":{color:"#dfe7ef"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#dfe7ef"}},"& .Mui-focused fieldset":{borderColor:"#dfe7ef"}}})(X.a),ie=function(){var e=ne();return i.a.createElement(i.a.Fragment,null,i.a.createElement(F,null),i.a.createElement(x.a,{component:"div",style:{opacity:.8,background:"#233",height:"100vh"}},i.a.createElement(Z.a,{container:!0,justify:"center"},i.a.createElement(x.a,{component:"form",className:e.form},i.a.createElement(k.a,{variant:"h5",style:{color:"#7e858d",textAlign:"center",textTransform:"uppercase"}},"hire or contact me..."),i.a.createElement(re,{fullWidth:!0,label:"Name",variant:"outlined",margin:"dense",size:"medium",inputProps:{style:{color:"white"}}}),i.a.createElement("br",null),i.a.createElement(re,{fullWidth:!0,label:"Email",variant:"outlined",margin:"dense",size:"medium",inputProps:{style:{color:"white"}}}),i.a.createElement("br",null),i.a.createElement(re,{fullWidth:!0,label:"Message",variant:"outlined",margin:"dense",size:"medium",inputProps:{style:{color:"white"}}}),i.a.createElement("br",null),i.a.createElement(ee.a,{className:e.button,variant:"outlined",fullWidth:!0,endIcon:i.a.createElement(ae.a,null)},"contact me")))))},oe=a(64),le=a.n(oe),me=a(430),ce=a(431),se=a(432),ue=a(433),de=a(434),pe=Object(p.a)({mainContainer:{background:"#233",height:"100%"},cardContainer:(n={maxWidth:345,margin:"3rem"},Object(c.a)(n,"margin","5rem auto"),Object(c.a)(n,"background","#adb5bd"),n)}),ge=function(){var e=pe();return i.a.createElement(i.a.Fragment,null,i.a.createElement(F,null),i.a.createElement(x.a,{component:"div",className:e.mainContainer,style:{marginTop:30,opacity:.8}},i.a.createElement(Z.a,{container:!0,justify:"center"},i.a.createElement(Z.a,{item:!0,xs:12,sm:8,md:6},i.a.createElement(me.a,{className:e.cardContainer},i.a.createElement(ce.a,null,i.a.createElement(se.a,{component:"img",alt:"",height:"140",image:le.a}),i.a.createElement(ue.a,null,i.a.createElement(k.a,{gutterBottom:!0,variant:"h5"},"projet 1"),i.a.createElement(k.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"))),i.a.createElement(de.a,null,i.a.createElement(ee.a,{size:"small",color:"primary"},"Share"),i.a.createElement(ee.a,{size:"small",color:"primary"},"Live Demo")))),i.a.createElement(Z.a,{item:!0,xs:12,sm:8,md:6},i.a.createElement(me.a,{className:e.cardContainer},i.a.createElement(ce.a,null,i.a.createElement(se.a,{component:"img",alt:"",height:"140",image:le.a}),i.a.createElement(ue.a,null,i.a.createElement(k.a,{gutterBottom:!0,variant:"h5"},"projet 2"),i.a.createElement(k.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"))),i.a.createElement(de.a,null,i.a.createElement(ee.a,{size:"small",color:"primary"},"Share"),i.a.createElement(ee.a,{size:"small",color:"primary"},"Live Demo")))),i.a.createElement(Z.a,{item:!0,xs:12,sm:8,md:6},i.a.createElement(me.a,{className:e.cardContainer},i.a.createElement(ce.a,null,i.a.createElement(se.a,{component:"img",alt:"",height:"140",image:le.a}),i.a.createElement(ue.a,null,i.a.createElement(k.a,{gutterBottom:!0,variant:"h5"},"projet 3"),i.a.createElement(k.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"))),i.a.createElement(de.a,null,i.a.createElement(ee.a,{size:"small",color:"primary"},"Share"),i.a.createElement(ee.a,{size:"small",color:"primary"},"Live Demo")))),i.a.createElement(Z.a,{item:!0,xs:12,sm:8,md:6},i.a.createElement(me.a,{className:e.cardContainer},i.a.createElement(ce.a,null,i.a.createElement(se.a,{component:"img",alt:"",height:"140",image:le.a}),i.a.createElement(ue.a,null,i.a.createElement(k.a,{gutterBottom:!0,variant:"h5"},"projet 4"),i.a.createElement(k.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"))),i.a.createElement(de.a,null,i.a.createElement(ee.a,{size:"small",color:"primary"},"Share"),i.a.createElement(ee.a,{size:"small",color:"primary"},"Live Demo")))))))},he=a(435);a(375);var Ee=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(he.a,null),i.a.createElement(m.a,{exact:!0,path:"/",component:$}),i.a.createElement(m.a,{path:"/resume",component:Q}),i.a.createElement(m.a,{path:"/portfolio",component:ge}),i.a.createElement(m.a,{path:"/contacts",component:ie}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(d.a,null,i.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a.p+"static/media/imageTest.ef526a7d.jpg"}},[[154,1,2]]]);
//# sourceMappingURL=main.4b63265e.chunk.js.map