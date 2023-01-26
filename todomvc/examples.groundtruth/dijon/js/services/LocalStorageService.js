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


/*global dijondemo */
/**
 * @author Camille Reynders
 * Date: 03/02/12
 * Time: 13:27
 */
(function( ns ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107,542],"range":[92,542],"file":"todomvc/examples.lacunized.instrumented/dijon/js/services/LocalStorageService.js","index":3,"label":"dijon"}');
	'use strict';

	ns.services.LocalStorageService = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171,538],"range":[160,538],"file":"todomvc/examples.lacunized.instrumented/dijon/js/services/LocalStorageService.js","index":2,"label":"dijon"}');
		return {
			system: undefined, //inject
			store: function( data ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[242,322],"range":[225,322],"file":"todomvc/examples.lacunized.instrumented/dijon/js/services/LocalStorageService.js","index":0,"label":"dijon"}');
				return localStorage.setItem( 'todos-dijon', JSON.stringify( data ) );
			},
			retrieve: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[348,530],"range":[337,530],"file":"todomvc/examples.lacunized.instrumented/dijon/js/services/LocalStorageService.js","index":1,"label":"dijon"}');
				var data = localStorage.getItem( 'todos-dijon' ),
					output = ( data && JSON.parse( data ) ) || [];
				this.system.notify( 'StorageService:retrieveCompleted', output );
			}
		};
	};

}( dijondemo ));
