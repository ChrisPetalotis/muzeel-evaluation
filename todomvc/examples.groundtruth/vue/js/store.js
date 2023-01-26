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


/*jshint unused:false */

(function (exports) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[46,316],"range":[27,316],"file":"todomvc/examples.lacunized.instrumented/vue/js/store.js","index":2,"label":"vue"}');

	'use strict';

	var STORAGE_KEY = 'todos-vuejs';

	exports.todoStorage = {
		fetch: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[146,216],"range":[134,216],"file":"todomvc/examples.lacunized.instrumented/vue/js/store.js","index":0,"label":"vue"}');
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		save: function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[243,309],"range":[226,309],"file":"todomvc/examples.lacunized.instrumented/vue/js/store.js","index":1,"label":"vue"}');
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};

})(window);
