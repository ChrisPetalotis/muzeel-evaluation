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


/*global jQuery, sap */
/*jshint unused:false */

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63,345],"range":[51,345],"file":"todomvc/examples.lacunized.instrumented/sapui5/js/app.js","index":0,"label":"sapui5"}');
	'use strict';

	var oRootView;

	jQuery.sap.registerModulePath('todo', 'js/todo');

	// build the application root view and place on page
	oRootView = sap.ui.view({
		type: sap.ui.core.mvc.ViewType.JS,
		id: 'todoView',
		viewName: 'todo.Todo'
	});

	oRootView.placeAt('main');
})();
