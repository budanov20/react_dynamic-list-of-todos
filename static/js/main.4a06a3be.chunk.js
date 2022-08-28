(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(9),c(10),c(0)),r=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:c&&c.id===e.id?"has-background-info-light":"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:"has-text-".concat(e.completed?"success":"danger"),children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye".concat(c&&c.id===e.id?"-slash":"")})})})})]},e.id)}))})]})},d=function(e){var t=e.setFilter,c=e.setSearchText,s=e.searchText;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},o=(c(12),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var b=function(e){var t=e.todo,c=e.selectedTodo,s=Object(l.useState)(),a=Object(n.a)(s,2),r=a[0],d=a[1],b=Object(l.useState)(!1),u=Object(n.a)(b,2),h=u[0],m=u[1];return Object(l.useEffect)((function(){var e;(e=t.userId,j("/users/".concat(e))).then(d).finally((function(){return m(!0)})).catch((function(){return d(void 0)}))}),[]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),h?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",r&&Object(i.jsx)("a",{href:"mailto:".concat(r.email),children:r.name})]})]})]}):Object(i.jsx)(o,{})]})},u=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),u=Object(n.a)(a,2),h=u[0],m=u[1],O=Object(l.useState)(),x=Object(n.a)(O,2),f=x[0],N=x[1],p=Object(l.useState)("all"),v=Object(n.a)(p,2),y=v[0],g=v[1],S=Object(l.useState)(""),T=Object(n.a)(S,2),k=T[0],w=T[1];Object(l.useEffect)((function(){j("/todos").then((function(e){return s(e)})).finally((function(){return m(!0)}))}),[]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(d,{setFilter:g,searchText:k,setSearchText:w})}),Object(i.jsx)("div",{className:"block",children:h?Object(i.jsx)(r,{todos:function(){var e=k.toLowerCase();return function(){switch(y){case"all":return c;case"active":return c.filter((function(e){return!e.completed}));default:return c.filter((function(e){return e.completed}))}}().filter((function(t){return t.title.toLowerCase().includes(e)}))}(),selectedTodo:f,setSelectedTodo:N}):Object(i.jsx)(o,{})})]})})}),f&&Object(i.jsx)(b,{todo:f,selectedTodo:N})]})};a.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4a06a3be.chunk.js.map