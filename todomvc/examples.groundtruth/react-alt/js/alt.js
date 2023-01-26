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
/*global Alt */

var app = app || {};

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[104,145],"range":[92,145],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/alt.js","index":0,"label":"react-alt"}');
	'use strict';

	app.alt = new Alt();
})();
