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


/*global app, $on */
(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[34,599],"range":[22,599],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/app.js","index":2,"label":"vanillajs"}');
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function Todo(name) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[180,410],"range":[160,410],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/app.js","index":0,"label":"vanillajs"}');
		this.storage = new app.Store(name);
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
	}

	var todo = new Todo('todos-vanillajs');

	function setView() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[474,529],"range":[455,529],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/app.js","index":1,"label":"vanillajs"}');
		todo.controller.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();
