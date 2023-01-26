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


/* global can */
(function (namespace) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[39,2316],"range":[18,2316],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":13,"label":"canjs"}');
	'use strict';

	var ESCAPE_KEY = 27;

	can.Component.extend({
		// Create this component on a tag  like `<todo-app>`.
		tag: 'todo-app',
		scope: {
			// Store the Todo model in the scope
			Todo: namespace.Models.Todo,
			// A list of all Todos retrieved from LocalStorage
			todos: new namespace.Models.Todo.List({}),
			// Edit a Todo
			edit: function (todo, el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[409,494],"range":[389,494],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":0,"label":"canjs"}');
				todo.attr('editing', true);
				el.parents('.todo').find('.edit').focus();
			},
			cancelEditing: function (todo, el, ev) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[538,651],"range":[514,651],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":1,"label":"canjs"}');
				if (ev.which === ESCAPE_KEY) {
					el.val(todo.attr('text'));
					todo.attr('editing', false);
				}
			},
			// Returns a list of Todos filtered based on the route
			displayList: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[739,1017],"range":[727,1017],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":3,"label":"canjs"}');
				var filter = can.route.attr('filter');
				return this.todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[829,1010],"range":[813,1010],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":2,"label":"canjs"}');
					if (filter === 'completed') {
						return todo.attr('complete');
					}

					if (filter === 'active') {
						return !todo.attr('complete');
					}

					return true;
				});
			},
			updateTodo: function (todo, el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1054,1227],"range":[1034,1227],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":4,"label":"canjs"}');
				var value = can.trim(el.val());

				if (value === '') {
					todo.destroy();
				} else {
					todo.attr({
						editing: false,
						text: value
					});
				}
			},
			createTodo: function (context, el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1267,1504],"range":[1244,1504],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":5,"label":"canjs"}');
				var value = can.trim(el.val());
				var TodoModel = this.Todo;

				if (value !== '') {
					new TodoModel({
						text: value,
						complete: false
					}).save();

					can.route.removeAttr('filter');
					el.val('');
				}
			},
			toggleAll: function (scope, el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1541,1674],"range":[1520,1674],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":7,"label":"canjs"}');
				var toggle = el.prop('checked');
				this.attr('todos').each(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1624,1667],"range":[1608,1667],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":6,"label":"canjs"}');
					todo.attr('complete', toggle);
				});
			},
			clearCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1707,1803],"range":[1695,1803],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":9,"label":"canjs"}');
				this.attr('todos').completed().forEach(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1768,1796],"range":[1752,1796],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":8,"label":"canjs"}');
					todo.destroy();
				});
			}
		},
		events: {
			// When a new Todo has been created, add it to the todo list
			'{Todo} created': function (Construct, ev, todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1937,1984],"range":[1906,1984],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":10,"label":"canjs"}');
				this.scope.attr('todos').push(todo);
			}
		},
		helpers: {
			link: function (name, filter) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2036,2209],"range":[2012,2209],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":11,"label":"canjs"}');
				var data = filter ? { filter: filter } : {};
				return can.route.link(name, data, {
					className: can.route.attr('filter') === filter ? 'selected' : ''
				});
			},
			plural: function (singular, num) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2247,2305],"range":[2222,2305],"file":"todomvc/examples.lacunized.instrumented/canjs/js/components/todo-app.js","index":12,"label":"canjs"}');
				return num() === 1 ? singular : singular + 's';
			}
		}
	});
})(this);
