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


/* global $, can */
(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[33,277],"range":[21,277],"file":"todomvc/examples.lacunized.instrumented/canjs/js/app.js","index":1,"label":"canjs"}');
	'use strict';

	$(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[66,273],"range":[54,273],"file":"todomvc/examples.lacunized.instrumented/canjs/js/app.js","index":0,"label":"canjs"}');
		// Set up a route that maps to the `filter` attribute
		can.route(':filter');

		// Render #app-template
		$('#todoapp').html(can.view('app-template', {}));

		// Start the router
		can.route.ready();
	});
})();
