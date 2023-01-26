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


/*jshint quotmark:false */
/*jshint newcap:false */

var app = app || {};

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88,477],"range":[76,477],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/actions/todoActions.js","index":1,"label":"react-alt"}');
	'use strict';

	var Utils = app.Utils;

	app.todoActions = app.alt.generateActions(
		'toggleAll',
		'toggle',
		'destroy',
		'save',
		'clearCompleted',
		'edit',
		'show'
	);

	app.todoActions = Utils.extend(
		app.todoActions,
		app.alt.createActions({
			addTodo: function (title) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[376,466],"range":[359,466],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/actions/todoActions.js","index":0,"label":"react-alt"}');
				return {
					id: Utils.uuid(),
					title: title,
					completed: false
				};
			}
		})
	);
})();
