(this.webpackJsonpTodoApp=this.webpackJsonpTodoApp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=n(6),l=n(2);var d=n(0),u=c.a.createContext(),i=function(e){var t=function(e,t){var n=Object(o.useState)(!0),c=Object(l.a)(n,2),a=c[0],r=c[1],s=Object(o.useState)(!1),d=Object(l.a)(s,2),u=d[0],i=d[1],j=Object(o.useState)(t),O=Object(l.a)(j,2),b=O[0],m=O[1];return Object(o.useEffect)((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),m(n),r(!1)}catch(u){i(u)}}),1e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(u){i(u)}},loading:a,error:u}}("TODOS_V1",[]),n=t.item,c=t.saveItem,a=t.loading,r=t.error,i=Object(o.useState)(""),j=Object(l.a)(i,2),O=j[0],b=j[1],m=Object(o.useState)(!1),x=Object(l.a)(m,2),p=x[0],h=x[1],f=n.filter((function(e){return!!e.completed})).length,T=n.length,v=[];v=!O.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=O.toLowerCase();return t.includes(n)}));return Object(d.jsx)(u.Provider,{value:{loading:a,error:r,totalTodos:T,completedTodos:f,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),c(t)},searchValue:O,setSearchValue:b,searchedTodos:v,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(s.a)(n);o[t].completed=!0,c(o)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(s.a)(n);o.splice(t,1),c(o)},openModal:p,setOpenModal:h},children:e.children})},j=(n(13),function(){var e=Object(o.useContext)(u),t=e.totalTodos,n=e.completedTodos;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"TodoCounterTitle",children:"TODO App"}),Object(d.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})]})}),O=(n(14),function(){var e=Object(o.useContext)(u),t=e.searchValue,n=e.setSearchValue;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",{className:"TodoSearch",placeholder:"Busca un TODO",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})})}),b=(n(15),function(e){var t=e.children;return Object(d.jsx)("section",{children:Object(d.jsx)("ul",{children:t})})}),m=(n(16),function(e){var t=e.text,n=e.onComplete,o=e.onDeleteTodo,c=e.completed;return Object(d.jsxs)("li",{className:"TodoItem",children:[Object(d.jsx)("span",{className:"Icon Icon-check ".concat(c&&"Icon-check--active"),onClick:n,children:"\u221a"}),Object(d.jsx)("p",{className:"TodoItem-p ".concat(c&&"TodoItem-p--complete"),children:t}),Object(d.jsx)("span",{className:"Icon Icon-delete",onClick:o,children:"X"})]})}),x=(n(17),function(e){var t=e.setOpenModal,n=e.openModal;return Object(d.jsx)("button",{className:"CreateTodoButtom",onClick:function(){t(!n)},children:"+"})}),p=(n(18),function(e){var t=e.children;return r.a.createPortal(Object(d.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}),h=(n(19),function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(o.useContext)(u),r=a.addTodo,s=a.setOpenModal;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),s(!1)},children:[Object(d.jsxs)("label",{children:["...",Object(d.jsx)("textarea",{value:n,onChange:function(e){c(e.target.value)},placeholder:"Escribe una nueva tarea"})]}),Object(d.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(d.jsx)("button",{type:"button",onClick:function(){s(!1)},className:"TodoForm-button TodoForm-button-cancel",children:"Cancelar"}),Object(d.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button-add",children:"A\xf1adir TODO"})]})]})}),f=function(e){var t=e.error;return Object(d.jsxs)("p",{children:["Hubo un ",t]})},T=(n(20),function(){return Object(d.jsxs)("div",{className:"LoadingTodo-container",children:[Object(d.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(d.jsx)("p",{className:"LoadingTodo-text",children:"Estamos cargando, no desesperes"}),Object(d.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}),v=function(){return Object(d.jsx)("p",{children:"Crea tu primer TODO!"})},g=function(){var e=Object(o.useContext)(u),t=e.error,n=e.loading,c=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(O,{}),Object(d.jsxs)(b,{children:[t&&Object(d.jsx)(f,{error:t}),n&&Object(d.jsx)(T,{}),!n&&!c.length&&Object(d.jsx)(v,{}),c.map((function(e){return Object(d.jsx)(m,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDeleteTodo:function(){return r(e.text)}},e.text)}))]}),!!s&&Object(d.jsx)(p,{children:Object(d.jsx)(h,{})}),Object(d.jsx)(x,{setOpenModal:l,openModal:s})]})};var C=function(){return Object(d.jsx)(i,{children:Object(d.jsx)(g,{})})};r.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.3a3b37a4.chunk.js.map