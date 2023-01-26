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


/*global dijon, dijondemo */
(function( ns ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[45,380],"range":[30,380],"file":"todomvc/examples.lacunized.instrumented/dijon/js/app.js","index":2,"label":"dijon"}');
	'use strict';

	ns.App = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[85,376],"range":[73,376],"file":"todomvc/examples.lacunized.instrumented/dijon/js/app.js","index":1,"label":"dijon"}');
		var system;
		return {
			startup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[135,368],"range":[124,368],"file":"todomvc/examples.lacunized.instrumented/dijon/js/app.js","index":0,"label":"dijon"}');
				system = new dijon.System();

				system.mapValue( 'system', system );
				system.mapOutlet('system');

				system.injectInto( new ns.Config() );

				system.notify('App:startup');
				system.notify('App:startupComplete');
			}
		};
	};

}( dijondemo ));

dijondemo.app = new dijondemo.App();
dijondemo.app.startup();
