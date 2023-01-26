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


/*global Router:false */
(function (todo, Router) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[50,466],"range":[26,466],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/router.js","index":3,"label":"somajs"}');

	'use strict';

	todo.Router = function (dispatcher) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[106,462],"range":[84,462],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/router.js","index":2,"label":"somajs"}');

		// create the router (director.js)
		var router = new Router().init().configure({
			notfound: render
		});

		// dispatch a custom event to render the template on a route change
		router.on(/.*/, render);

		function render() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[338,377],"range":[320,377],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/router.js","index":0,"label":"somajs"}');
			dispatcher.dispatch('render');
		}

		return {
			getRoute: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[415,454],"range":[403,454],"file":"todomvc/examples.lacunized.instrumented/somajs/js/models/router.js","index":1,"label":"somajs"}');
				return router.getRoute()[0];
			}
		};
	};

})(window.todo = window.todo || {}, Router);
