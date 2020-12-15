(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/thumbtack.6f354303.png"},20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(2),s=a.n(i),d=(a(25),a(18)),c=a(8),r=a(19),l=a(3),h=a(4),u=a(1),m=a(6),p=a(5),b=(a(26),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={edit:!1,newTask:n.props.task},n.handleRemove=n.handleRemove.bind(Object(u.a)(n)),n.handleEdit=n.handleEdit.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleCompletion=n.handleCompletion.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"handleRemove",value:function(){this.props.remove(this.props.id)}},{key:"handleEdit",value:function(){this.setState({edit:!0})}},{key:"handleChange",value:function(e){this.setState({newTask:e.target.value})}},{key:"handleCompletion",value:function(){this.props.complete(this.props.id)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.edit(this.props.id,this.state.newTask),this.setState({edit:!1})}},{key:"render",value:function(){var e=this.props,t=e.provided,a=e.innerRef;return o.a.createElement("div",Object.assign({},t.draggableProps,t.dragHandleProps,{ref:a}),this.state.edit?o.a.createElement("form",{className:"TodoItem-edit",onSubmit:this.handleSubmit},o.a.createElement("input",{value:this.state.newTask,onChange:this.handleChange}),o.a.createElement("button",null,o.a.createElement("i",{className:"fa fa-check"}))):o.a.createElement("div",{className:"TodoItem"},o.a.createElement("div",null,o.a.createElement("span",{className:"fas fa-grip-horizontal"}),o.a.createElement("label",{htmlFor:this.props.id,className:" container ".concat(this.props.completed?"checked":"")},o.a.createElement("span",null,this.props.task),o.a.createElement("input",{id:this.props.id,type:"checkbox",onClick:this.handleCompletion,checked:this.props.checked}),o.a.createElement("span",{className:"checkmark"}))),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.handleEdit},o.a.createElement("i",{className:"fa fa-pencil"})),o.a.createElement("button",{onClick:this.handleRemove},o.a.createElement("i",{className:"fa fa-trash"})))))}}]),a}(n.Component)),f=a(15),v=a.n(f),k=(a(27),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={todo:"",disabled:!0},n.handelChange=n.handelChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"handelChange",value:function(e){var t=this;this.setState({todo:e.target.value},(function(){""!==t.state.todo?t.setState({disabled:!1}):t.setState({disabled:!0})}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.add({task:this.state.todo,id:v()(),completed:!1}),this.setState({todo:"",disabled:!0})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"TodoForm"},o.a.createElement("input",{placeholder:"Add new task ..",value:this.state.todo,onChange:this.handelChange}),o.a.createElement("button",{disabled:this.state.disabled},"+"))}}]),a}(n.Component)),E=a(16),g=a.n(E),O=(a(28),a(10)),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={todos:JSON.parse(window.localStorage.getItem("todos")||"[]")},n.addTodo=n.addTodo.bind(Object(u.a)(n)),n.removeTodo=n.removeTodo.bind(Object(u.a)(n)),n.editTask=n.editTask.bind(Object(u.a)(n)),n.completedTask=n.completedTask.bind(Object(u.a)(n)),n.handleOnDragEnd=n.handleOnDragEnd.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"addTodo",value:function(e){var t=this;this.setState({todos:[].concat(Object(r.a)(this.state.todos),[e])},(function(){return window.localStorage.setItem("todos",JSON.stringify(t.state.todos))}))}},{key:"removeTodo",value:function(e){var t=this,a=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:a},(function(){return window.localStorage.setItem("todos",JSON.stringify(t.state.todos))}))}},{key:"editTask",value:function(e,t){var a=this,n=this.state.todos.map((function(a){return a.id===e?Object(c.a)(Object(c.a)({},a),{},{task:t}):a}));this.setState({todos:n},(function(){return window.localStorage.setItem("todos",JSON.stringify(a.state.todos))}))}},{key:"completedTask",value:function(e){var t=this,a=this.state.todos.map((function(t){return t.id===e?Object(c.a)(Object(c.a)({},t),{},{completed:!t.completed,checked:!t.checked}):t}));this.setState({todos:a},(function(){return window.localStorage.setItem("todos",JSON.stringify(t.state.todos))}))}},{key:"handleOnDragEnd",value:function(e){if(e.destination&&(e.source.droppableId!==e.destination.droppableId||e.source.index!==e.destination.index)){var t=this.state.todos,a=t.splice(e.source.index,1),n=Object(d.a)(a,1)[0];t.splice(e.destination.index,0,n),this.setState({todos:t})}}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t,a){return o.a.createElement(O.b,{key:t.id,draggableId:t.task,index:a},(function(a){return o.a.createElement(b,{innerRef:a.innerRef,provided:a,id:t.id,task:t.task,completed:t.completed,checked:t.checked,remove:e.removeTodo,edit:e.editTask,complete:e.completedTask})}))}));return o.a.createElement("div",null,o.a.createElement("h1",{className:"TodoList-title"},"To Do :",o.a.createElement("img",{src:g.a})),o.a.createElement("div",{className:"TodoList"},o.a.createElement(k,{add:this.addTodo}),o.a.createElement(O.a,{onDragEnd:this.handleOnDragEnd},o.a.createElement(O.c,{droppableId:"todo-items"},(function(e){return o.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef}),t,e.placeholder)})))))}}]),a}(n.Component);a(35);var j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.807694c8.chunk.js.map