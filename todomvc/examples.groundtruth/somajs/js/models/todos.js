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


(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[17,556],"range":[1,556],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/todos.js","index":5,"label":"somajs"}');

	'use strict';

	todo.Model = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[62,552],"range":[50,552],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/todos.js","index":4,"label":"somajs"}');

		var storeKey = 'todos-somajs';

		return {
			get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[130,242],"range":[118,242],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/todos.js","index":0,"label":"somajs"}');
				// get the data from the local storage
				return JSON.parse(localStorage.getItem(storeKey) || '[]');
			},
			set: function (items) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[269,375],"range":[252,375],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/todos.js","index":1,"label":"somajs"}');
				// set the data to the local storage
				localStorage.setItem(storeKey, JSON.stringify(items));
			},
			getActive: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[403,544],"range":[391,544],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/todos.js","index":3,"label":"somajs"}');
				// returns items that are not completed
				return this.get().filter(function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[494,530],"range":[478,530],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/todos.js","index":2,"label":"somajs"}');
					return !item.completed;
				}).length;
			}
		};
	};

})(window.todo = window.todo || {});
