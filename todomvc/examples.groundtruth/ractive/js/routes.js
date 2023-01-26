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


/*global window, Router, todoList */
(function (window, Router, todoList) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74,493],"range":[38,493],"file":"todomvc/examples.lacunized.instrumented/ractive/js/routes.js","index":3,"label":"ractive"}');
	'use strict';

	// We're using https://github.com/flatiron/director for routing

	var router = new Router({
		'/active': function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[210,259],"range":[198,259],"file":"todomvc/examples.lacunized.instrumented/ractive/js/routes.js","index":0,"label":"ractive"}');
			todoList.set('currentFilter', 'active');
		},
		'/completed': function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[289,341],"range":[277,341],"file":"todomvc/examples.lacunized.instrumented/ractive/js/routes.js","index":1,"label":"ractive"}');
			todoList.set('currentFilter', 'completed');
		}
	});

	router.configure({
		notfound: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[392,468],"range":[380,468],"file":"todomvc/examples.lacunized.instrumented/ractive/js/routes.js","index":2,"label":"ractive"}');
			window.location.hash = '';
			todoList.set('currentFilter', 'all');
		}
	});

	router.init();

})(window, Router, todoList);
