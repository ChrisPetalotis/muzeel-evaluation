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


/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

document.addEventListener('DOMContentLoaded', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[160,241],"range":[148,241],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/app.js","index":0,"label":"exoskeleton"}');
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
}, false);
