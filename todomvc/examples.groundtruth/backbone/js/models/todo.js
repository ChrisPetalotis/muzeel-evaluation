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

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56,531],"range":[44,531],"file":"todomvc/examples.lacunized.instrumented/backbone/js/models/todo.js","index":1,"label":"backbone"}');
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[459,524],"range":[447,524],"file":"todomvc/examples.lacunized.instrumented/backbone/js/models/todo.js","index":0,"label":"backbone"}');
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
