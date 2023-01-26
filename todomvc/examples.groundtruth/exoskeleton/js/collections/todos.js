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


/*global Backbone */
var app = app || {};

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56,1278],"range":[44,1278],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/collections/todos.js","index":4,"label":"exoskeleton"}');
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var Todos = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Todo,

		// Save all of the todo items under the `"todos"` namespace.
		localStorage: new Backbone.LocalStorage('todos-exoskeleton'),

		// Filter down the list of all todo items that are finished.
		completed: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[524,570],"range":[512,570],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/collections/todos.js","index":0,"label":"exoskeleton"}');
			return this.where({completed: true});
		},

		// Filter down the list to only todo items that are still not finished.
		remaining: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[672,719],"range":[660,719],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/collections/todos.js","index":1,"label":"exoskeleton"}');
			return this.where({completed: false});
		},

		// Return last item on list if any. Otherwise return null.
		last: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[803,869],"range":[791,869],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/collections/todos.js","index":2,"label":"exoskeleton"}');
			return this.length > 0 ? this.at(this.length - 1) : null;
		},

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1053,1116],"range":[1041,1116],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/collections/todos.js","index":3,"label":"exoskeleton"}');
			return this.length ? this.last().get('order') + 1 : 1;
		},

		// Todos are sorted by their original insertion order.
		comparator: 'order'
	});

	// Create our global collection of **Todos**.
	app.todos = new Todos();
})();
