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


(function (exports) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[20,291],"range":[1,291],"file":"todomvc/examples.lacunized.instrumented/riotjs/js/store.js","index":2,"label":"riotjs"}');

	'use strict';

	var STORAGE_KEY = 'todos-riotjs';

	exports.todoStorage = {
		fetch: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[121,191],"range":[109,191],"file":"todomvc/examples.lacunized.instrumented/riotjs/js/store.js","index":0,"label":"riotjs"}');
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		save: function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[218,284],"range":[201,284],"file":"todomvc/examples.lacunized.instrumented/riotjs/js/store.js","index":1,"label":"riotjs"}');
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};

})(window);
