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


'use strict';
var app = app || {};

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[49,288],"range":[37,288],"file":"todomvc/examples.lacunized.instrumented/mithril/js/models/storage.js","index":2,"label":"mithril"}');
	var STORAGE_ID = 'todos-mithril';
	app.storage = {
		get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[122,191],"range":[110,191],"file":"todomvc/examples.lacunized.instrumented/mithril/js/models/storage.js","index":0,"label":"mithril"}');
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},
		put: function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[217,282],"range":[200,282],"file":"todomvc/examples.lacunized.instrumented/mithril/js/models/storage.js","index":1,"label":"mithril"}');
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
})();
