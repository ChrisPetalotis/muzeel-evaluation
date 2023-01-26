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
/*global m */
var app = app || {};

var uniqueId = (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78,141],"range":[66,141],"file":"todomvc/examples.lacunized.instrumented/mithril/js/models/todo.js","index":1,"label":"mithril"}');
	var count = 0;
	return function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[116,138],"range":[104,138],"file":"todomvc/examples.lacunized.instrumented/mithril/js/models/todo.js","index":0,"label":"mithril"}');
		return ++count;
	};
}());

// Todo Model
app.Todo = function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[188,347],"range":[172,347],"file":"todomvc/examples.lacunized.instrumented/mithril/js/models/todo.js","index":2,"label":"mithril"}');
	this.title = m.prop(data.title);
	this.completed = m.prop(data.completed || false);
	this.editing = m.prop(data.editing || false);
	this.key = uniqueId();
};
