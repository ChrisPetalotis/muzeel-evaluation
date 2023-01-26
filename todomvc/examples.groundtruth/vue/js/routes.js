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


/*global app, Router */

(function (app, Router) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[49,374],"range":[26,374],"file":"todomvc/examples.lacunized.instrumented/vue/js/routes.js","index":3,"label":"vue"}');

	'use strict';

	var router = new Router();

	['all', 'active', 'completed'].forEach(function (visibility) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[159,239],"range":[137,239],"file":"todomvc/examples.lacunized.instrumented/vue/js/routes.js","index":1,"label":"vue"}');
		router.on(visibility, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[197,234],"range":[185,234],"file":"todomvc/examples.lacunized.instrumented/vue/js/routes.js","index":0,"label":"vue"}');
			app.visibility = visibility;
		});
	});

	router.configure({
		notfound: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[287,349],"range":[275,349],"file":"todomvc/examples.lacunized.instrumented/vue/js/routes.js","index":2,"label":"vue"}');
			window.location.hash = '';
			app.visibility = 'all';
		}
	});

	router.init();

})(app, Router);
