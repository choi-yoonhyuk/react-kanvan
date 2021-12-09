(this["webpackJsonpreact-kanvan"]=this["webpackJsonpreact-kanvan"]||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var o,r=t(9),a=t(0),i=t.n(a),c=t(12),d=t.n(c),b=t(11),l=t(8),s=t(7),p=t(1),g=t(6),j=t(3),u=t(14),O=localStorage.getItem("todos"),x=Object(b.b)({key:"todos",default:O?JSON.parse(O):{"To Do":[],Doing:[],Done:[]}}),f=t(4),h=l.c.div(o||(o=Object(r.a)(["\n  border-radius: 5px;\n  margin-bottom: 5px;\n  padding: 10px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(e){return e.isDragging?"#e4f2ff":e.theme.cardColor}),(function(e){return e.isDragging?"0px 2px 5px rgba(0, 0, 0, 0.05)":"none"}));function m(e){var n=e.toDoId,t=e.toDoText,o=e.index;return Object(f.jsx)(u.b,{draggableId:n.toString(),index:o,children:function(e,n){return Object(f.jsx)(h,Object(p.a)(Object(p.a)(Object(p.a)({isDragging:n.isDragging,ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:t}))}})}var v,y,D,I,w=i.a.memo(m),k=t(21),S=l.c.div(v||(v=Object(r.a)(["\n  width: 300px;\n  padding-top: 10px;\n  background-color: ",";\n  border-radius: 5px;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n"])),(function(e){return e.theme.boardColor})),q=l.c.h2(y||(y=Object(r.a)(["\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-size: 18px;\n"]))),T=l.c.div(D||(D=Object(r.a)(["\n  background-color: ",";\n  flex-grow: 1;\n  transition: background-color 0.3s ease-in-out;\n  padding: 20px;\n"])),(function(e){return e.isDraggingOver?"#dfe6e9":e.isDraggingFromThis?"#b2bec3":"transparent"})),C=l.c.form(I||(I=Object(r.a)(["\n  width: 100%;\n  input {\n    width: 100%;\n  }\n"])));var J,N,P,A,F=function(e){var n=e.toDos,t=e.boardId,o=Object(b.d)(x),r=Object(k.a)(),a=r.register,i=r.setValue,c=r.handleSubmit;return Object(f.jsxs)(S,{children:[Object(f.jsx)(q,{children:t}),Object(f.jsx)(C,{onSubmit:c((function(e){var n=e.toDo,r={id:Date.now(),text:n};o((function(e){return localStorage.setItem("todos",JSON.stringify(Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},t,[r].concat(Object(g.a)(e[t])))))),Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},t,[r].concat(Object(g.a)(e[t]))))})),console.log([t],[r]),i("toDo","")})),children:Object(f.jsx)("input",Object(p.a)(Object(p.a)({},a("toDo",{required:!0})),{},{type:"text",placeholder:"Add task on ".concat(t)}))}),Object(f.jsx)(u.c,{droppableId:t,children:function(e,t){return Object(f.jsxs)(T,Object(p.a)(Object(p.a)({isDraggingOver:t.isDraggingOver,isDraggingFromThis:Boolean(t.draggingFromThisWith),ref:e.innerRef},e.droppableProps),{},{children:[n.map((function(e,n){return Object(f.jsx)(w,{index:n,toDoId:e.id,toDoText:e.text},e.id)})),e.placeholder]}))}})]})},z=l.c.div(J||(J=Object(r.a)(["\n  margin-top: 100px;\n  padding-left: 40%;\n"]))),B=l.c.form(N||(N=Object(r.a)(["\n  max-width: 300px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  padding: 20px 10px;\n  margin-left: 20px;\n  margin-bottom: 300px;\n  border-radius: 20px;\n  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);\n  flex-grow: 1;\n"])),(function(e){return e.theme.boardColor})),E=l.c.input(P||(P=Object(r.a)(["\n  text-align: center;\n"]))),H=l.c.button(A||(A=Object(r.a)([""])));var L,M,R=function(){var e=Object(b.c)(x),n=Object(j.a)(e,2),t=(n[0],n[1]),o=Object(k.a)(),r=o.register,a=o.setValue,i=o.handleSubmit;return Object(f.jsx)(z,{children:Object(f.jsxs)(B,{onSubmit:i((function(e){var n=e.board,o=Object(s.a)({},n,[]);console.log(o),t((function(e){return localStorage.setItem("board",JSON.stringify(Object(p.a)(Object(p.a)({},e),o))),Object(p.a)(Object(p.a)({},e),o)})),a("board","")})),children:[Object(f.jsx)(E,Object(p.a)(Object(p.a)({},r("board",{required:!0})),{},{type:"text",placeholder:"Add",maxLength:15})),Object(f.jsx)(H,{children:"Add Board"})]})})},V=l.c.div(L||(L=Object(r.a)(["\n  display: flex;\n  margin: 0 auto;\n  max-width: 700px;\n  width: 100%;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100vh;\n"]))),W=l.c.div(M||(M=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: minmax(250px, 1fr);\n  place-content: center center;\n  gap: 10px;\n  width: 100%;\n"])));var G,K=function(){var e=Object(b.c)(x),n=Object(j.a)(e,2),t=n[0],o=n[1];return Object(f.jsxs)(u.a,{onDragEnd:function(e){var n=e.destination,t=e.source;n&&((null===n||void 0===n?void 0:n.droppableId)===t.droppableId&&o((function(e){var o=Object(g.a)(e[t.droppableId]);console.log(o);var r=o[t.index];return console.log(r),o.splice(t.index,1),o.splice(null===n||void 0===n?void 0:n.index,0,r),localStorage.setItem("todos",JSON.stringify(Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},t.droppableId,o)))),Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},t.droppableId,o))})),(null===n||void 0===n?void 0:n.droppableId)!==t.droppableId&&o((function(e){var o,r,a=Object(g.a)(e[t.droppableId]),i=a[t.index],c=Object(g.a)(e[n.droppableId]);return a.splice(t.index,1),c.splice(null===n||void 0===n?void 0:n.index,0,i),localStorage.setItem("todos",JSON.stringify(Object(p.a)(Object(p.a)({},e),{},(o={},Object(s.a)(o,t.droppableId,a),Object(s.a)(o,n.droppableId,c),o)))),Object(p.a)(Object(p.a)({},e),{},(r={},Object(s.a)(r,t.droppableId,a),Object(s.a)(r,n.droppableId,c),r))})))},children:[Object(f.jsx)(R,{}),Object(f.jsx)(V,{children:Object(f.jsx)(W,{children:Object.keys(t).map((function(e){return Object(f.jsx)(F,{boardId:e,toDos:t[e]},e)}))})})]})},Q=Object(l.b)(G||(G=Object(r.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color: black;\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}));d.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(l.a,{theme:{bgColor:"#3498db",boardColor:"#DADFE9",cardColor:"white"},children:[Object(f.jsx)(Q,{}),Object(f.jsx)(K,{})]})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.892750d0.chunk.js.map