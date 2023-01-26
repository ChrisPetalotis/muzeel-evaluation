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
 * Time: 14:34
 */
(function( ns ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107,448],"range":[92,448],"file":"todomvc/examples.lacunized.instrumented/dijon/js/utils/Utils.js","index":2,"label":"dijon"}');
	'use strict';

	ns.utils.Utils = {
		// https://gist.github.com/1308368
		uuid: function( a, b ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[207,354],"range":[190,354],"file":"todomvc/examples.lacunized.instrumented/dijon/js/utils/Utils.js","index":0,"label":"dijon"}');
			for ( b = a = '' ; a++ < 36 ; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString( 16 ) : '_' );
			return b;
		},
		pluralize: function( count, word ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[393,441],"range":[369,441],"file":"todomvc/examples.lacunized.instrumented/dijon/js/utils/Utils.js","index":1,"label":"dijon"}');
			return count === 1 ? word : word + 's';
		}
	};

}( dijondemo ));
