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


/*global can */
(function (namespace) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[38,973],"range":[17,973],"file":"todomvc/examples.lacunized.instrumented/canjs/js/models/todo.js","index":8,"label":"canjs"}');
	'use strict';

	// Basic Todo entry model
	var Todo = can.Model.LocalStorage.extend({
		storageName: 'todos-canjs'
	}, {
		init: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[182,377],"range":[170,377],"file":"todomvc/examples.lacunized.instrumented/canjs/js/models/todo.js","index":1,"label":"canjs"}');
			// Autosave when changing the text or completing the todo
			this.on('change', function (ev, prop) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[286,371],"range":[266,371],"file":"todomvc/examples.lacunized.instrumented/canjs/js/models/todo.js","index":0,"label":"canjs"}');
				if (prop === 'text' || prop === 'complete') {
					ev.target.save();
				}
			});
		}
	});

	// List for Todos
	Todo.List = Todo.List.extend({
		filter: function (check) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[462,592],"range":[445,592],"file":"todomvc/examples.lacunized.instrumented/canjs/js/models/todo.js","index":3,"label":"canjs"}');
			var list = [];

			this.each(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[512,569],"range":[496,569],"file":"todomvc/examples.lacunized.instrumented/canjs/js/models/todo.js","index":2,"label":"canjs"}');
				if (check(todo)) {
					list.push(todo);
				}
			});

			return list;
		},

		completed: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[620,706],"range":[608,706],"file":"todomvc/examples.lacunized.instrumented/canjs/js/models/todo.js","index":5,"label":"canjs"}');
			return this.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[660,700],"range":[644,700],"file":"todomvc/examples.lacunized.instrumented/canjs/js/models/todo.js","index":4,"label":"canjs"}');
				return todo.attr('complete');
			});
		},

		remaining: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[734,796],"range":[722,796],"file":"todomvc/examples.lacunized.instrumented/canjs/js/models/todo.js","index":6,"label":"canjs"}');
			return this.attr('length') - this.completed().length;
		},

		allComplete: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[826,890],"range":[814,890],"file":"todomvc/examples.lacunized.instrumented/canjs/js/models/todo.js","index":7,"label":"canjs"}');
			return this.attr('length') === this.completed().length;
		}
	});

	namespace.Models = namespace.Models || {};
	namespace.Models.Todo = Todo;
})(this);
