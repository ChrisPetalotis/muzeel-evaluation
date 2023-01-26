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


/*global soma:false */
(function (todo, soma) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[46,776],"range":[24,776],"file":"todomvc/examples.lacunized.instrumented/somajs/js/app.js","index":2,"label":"somajs"}');

	'use strict';

	todo.TodoApp = soma.Application.extend({
		init: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[127,598],"range":[115,598],"file":"todomvc/examples.lacunized.instrumented/somajs/js/app.js","index":0,"label":"somajs"}');
			// mapping rules so the model and router can be injected
			this.injector.mapClass('model', todo.Model, true);
			this.injector.mapClass('router', todo.Router, true);
			// create templates for DOM Elements (optional soma-template plugin)
			this.createTemplate(todo.HeaderView, document.getElementById('header'));
			this.createTemplate(todo.MainView, document.getElementById('main'));
			this.createTemplate(todo.FooterView, document.getElementById('footer'));
		},
		start: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[621,719],"range":[609,719],"file":"todomvc/examples.lacunized.instrumented/somajs/js/app.js","index":1,"label":"somajs"}');
			// dispatch a custom event to render the templates
			this.dispatcher.dispatch('render');
		}
	});

	// create the application
	new todo.TodoApp();

})(window.todo = window.todo || {}, soma);
