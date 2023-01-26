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


/*global window, todoList */
(function (window, todoList) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[58,1221],"range":[30,1221],"file":"todomvc/examples.lacunized.instrumented/ractive/js/persistence.js","index":2,"label":"ractive"}');
	'use strict';

	// In Ractive, 'models' are usually just POJOs - plain old JavaScript objects.
	// Our todo list is simply an array of objects, which is handy for fetching
	// and persisting from/to localStorage

	var items, localStorage, removeEditingState;

	// Firefox throws a SecurityError if you try to access localStorage while
	// cookies are disabled
	try {
		localStorage = window.localStorage;
	} catch (err) {
		todoList.set('items', []);
		return;
	}

	if (localStorage) {
		items = JSON.parse(localStorage.getItem('todos-ractive')) || [];

		// Editing state should not be persisted, so we remove it
		// (https://github.com/tastejs/todomvc/blob/master/app-spec.md#persistence)
		removeEditingState = function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[792,880],"range":[776,880],"file":"todomvc/examples.lacunized.instrumented/ractive/js/persistence.js","index":0,"label":"ractive"}');
			return {
				description: item.description,
				completed: item.completed
			};
		};

		// Whenever the model changes (including child properties like
		// `items[1].completed`)...
		todoList.observe('items', function (items) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1023,1157],"range":[1006,1157],"file":"todomvc/examples.lacunized.instrumented/ractive/js/persistence.js","index":1,"label":"ractive"}');

			// ...we persist it to localStorage
			localStorage.setItem('todos-ractive', JSON.stringify(items.map(removeEditingState)));
		});
	} else {
		items = [];
	}

	todoList.set('items', items);

})(window, todoList);
