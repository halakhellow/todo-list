(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),s=a.n(i),l=(a(16),a(6)),d=a(10),c=a(2),r=a(3),u=a(1),h=a(5),m=a(4),p=(a(17),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={edit:!1,newTask:n.props.task},n.handleRemove=n.handleRemove.bind(Object(u.a)(n)),n.handleEdit=n.handleEdit.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleCompletion=n.handleCompletion.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"handleRemove",value:function(){this.props.remove(this.props.id)}},{key:"handleEdit",value:function(){this.setState({edit:!0})}},{key:"handleChange",value:function(e){this.setState({newTask:e.target.value})}},{key:"handleCompletion",value:function(){this.props.complete(this.props.id)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.edit(this.props.id,this.state.newTask),this.setState({edit:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.edit?o.a.createElement("form",{className:"TodoItem-edit",onSubmit:this.handleSubmit},o.a.createElement("input",{value:this.state.newTask,onChange:this.handleChange}),o.a.createElement("button",null,o.a.createElement("i",{className:"fa fa-check"}))):o.a.createElement("div",{className:"TodoItem"},o.a.createElement("li",{className:this.props.completed?"TodoItem-strike":"",onClick:this.handleCompletion},this.props.task),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.handleEdit},o.a.createElement("i",{className:"fa fa-pencil"})),o.a.createElement("button",{onClick:this.handleRemove},o.a.createElement("i",{className:"fa fa-trash"})))))}}]),a}(n.Component)),b=a(9),v=a.n(b),f=(a(18),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={todo:""},n.handelChange=n.handelChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"handelChange",value:function(e){this.setState({todo:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.add({task:this.state.todo,id:v()(),completed:!1}),this.setState({todo:""})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"TodoForm"},o.a.createElement("input",{placeholder:"Add new task ..",value:this.state.todo,onChange:this.handelChange}),o.a.createElement("button",null,"+"))}}]),a}(n.Component)),k=(a(19),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={todos:[]},n.addTodo=n.addTodo.bind(Object(u.a)(n)),n.removeTodo=n.removeTodo.bind(Object(u.a)(n)),n.editTask=n.editTask.bind(Object(u.a)(n)),n.completedTask=n.completedTask.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"addTodo",value:function(e){this.setState({todos:[].concat(Object(d.a)(this.state.todos),[e])})}},{key:"removeTodo",value:function(e){var t=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:t})}},{key:"editTask",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{task:t}):a}));this.setState({todos:a})}},{key:"completedTask",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(p,{id:t.id,key:t.id,task:t.task,completed:t.completed,remove:e.removeTodo,edit:e.editTask,complete:e.completedTask})}));return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,o.a.createElement("span",null,"Todo"),"List"),o.a.createElement(f,{add:this.addTodo}),o.a.createElement("div",null,t))}}]),a}(n.Component));a(20);var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.348200a7.chunk.js.map