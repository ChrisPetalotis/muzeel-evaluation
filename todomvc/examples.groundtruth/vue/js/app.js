/** (github.com/dynamic-deadfunction-detector)
* Instrumentation log function used by the instrumenter
* note that the data object is already stringified.
*/
var logHistory = [];
function instrumentation_log(data) {
    
                function exists(e) { return e.file == jData.file && e.range[0] == jData.range[0] && e.range[1] == jData.range[1]; }
                var jData = JSON.parse(data);
                if (logHistory.some(exists)){ return; }
                logHistory.push(jData);
    fetch("http://127.0.0.1:8004/alivefunction", {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: data
            }).then((response) => { });
}


/*global Vue, todoStorage */

(function (exports) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[50,2454],"range":[31,2454],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":18,"label":"vue"}');

	'use strict';

	var filters = {
		all: function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110,132],"range":[93,132],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":0,"label":"vue"}');
			return todos;
		},
		active: function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161,242],"range":[144,242],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":2,"label":"vue"}');
			return todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[202,236],"range":[186,236],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":1,"label":"vue"}');
				return !todo.completed;
			});
		},
		completed: function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[274,354],"range":[257,354],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":4,"label":"vue"}');
			return todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[315,348],"range":[299,348],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":3,"label":"vue"}');
				return todo.completed;
			});
		}
	};

	exports.app = new Vue({

		// the root element that will be compiled
		el: '.todoapp',

		// app initial state
		data: {
			todos: todoStorage.fetch(),
			newTodo: '',
			editedTodo: null,
			visibility: 'all'
		},

		// watch todos change for localStorage persistence
		watch: {
			todos: {
				deep: true,
				handler: todoStorage.save
			}
		},

		// computed properties
		// http://vuejs.org/guide/computed.html
		computed: {
			filteredTodos: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[821,876],"range":[809,876],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":5,"label":"vue"}');
				return filters[this.visibility](this.todos);
			},
			remaining: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[904,956],"range":[892,956],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":6,"label":"vue"}');
				return filters.active(this.todos).length;
			},
			allDone: {
				get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[993,1034],"range":[981,1034],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":7,"label":"vue"}');
					return this.remaining === 0;
				},
				set: function (value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1062,1150],"range":[1045,1150],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":9,"label":"vue"}');
					this.todos.forEach(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1104,1142],"range":[1088,1142],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":8,"label":"vue"}');
						todo.completed = value;
					});
				}
			}
		},

		// methods that implement data logic.
		// note there's no DOM manipulation here at all.
		methods: {

			pluralize: function (word, count) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1304,1354],"range":[1281,1354],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":10,"label":"vue"}');
				return word + (count === 1 ? '' : 's');
			},

			addTodo: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1381,1557],"range":[1369,1557],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":11,"label":"vue"}');
				var value = this.newTodo && this.newTodo.trim();
				if (!value) {
					return;
				}
				this.todos.push({ title: value, completed: false });
				this.newTodo = '';
			},

			removeTodo: function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1591,1672],"range":[1575,1672],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":12,"label":"vue"}');
				var index = this.todos.indexOf(todo);
				this.todos.splice(index, 1);
			},

			editTodo: function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1704,1777],"range":[1688,1777],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":13,"label":"vue"}');
				this.beforeEditCache = todo.title;
				this.editedTodo = todo;
			},

			doneEdit: function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1809,1983],"range":[1793,1983],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":14,"label":"vue"}');
				if (!this.editedTodo) {
					return;
				}
				this.editedTodo = null;
				todo.title = todo.title.trim();
				if (!todo.title) {
					this.removeTodo(todo);
				}
			},

			cancelEdit: function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2017,2090],"range":[2001,2090],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":15,"label":"vue"}');
				this.editedTodo = null;
				todo.title = this.beforeEditCache;
			},

			removeCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2125,2176],"range":[2113,2176],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":16,"label":"vue"}');
				this.todos = filters.active(this.todos);
			}
		},

		// a custom directive to wait for the DOM to be updated
		// before focusing on the input field.
		// http://vuejs.org/guide/custom-directive.html
		directives: {
			'todo-focus': function (el, binding) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2388,2442],"range":[2365,2442],"file":"todomvc/examples.lacunized.instrumented/vue/js/app.js","index":17,"label":"vue"}');
				if (binding.value) {
					el.focus();
				}
			}
		}
	});

})(window);
