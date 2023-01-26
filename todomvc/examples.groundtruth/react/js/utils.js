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


var app = app || {};

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[35,988],"range":[23,988],"file":"todomvc/examples.lacunized.instrumented/react/js/utils.js","index":4,"label":"react"}');
	'use strict';

	app.Utils = {
		uuid: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88,415],"range":[76,415],"file":"todomvc/examples.lacunized.instrumented/react/js/utils.js","index":0,"label":"react"}');
			/*jshint bitwise:false */
			var i, random;
			var uuid = '';

			for (i = 0; i < 32; i++) {
				random = Math.random() * 16 | 0;
				if (i === 8 || i === 12 || i === 16 || i === 20) {
					uuid += '-';
				}
				uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
					.toString(16);
			}

			return uuid;
		},

		pluralize: function (count, word) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[454,502],"range":[431,502],"file":"todomvc/examples.lacunized.instrumented/react/js/utils.js","index":1,"label":"react"}');
			return count === 1 ? word : word + 's';
		},

		store: function (namespace, data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[541,727],"range":[514,727],"file":"todomvc/examples.lacunized.instrumented/react/js/utils.js","index":2,"label":"react"}');
			if (data) {
				return localStorage.setItem(namespace, JSON.stringify(data));
			}

			var store = localStorage.getItem(namespace);
			return (store && JSON.parse(store)) || [];
		},

		extend: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[752,982],"range":[740,982],"file":"todomvc/examples.lacunized.instrumented/react/js/utils.js","index":3,"label":"react"}');
			var newObj = {};
			for (var i = 0; i < arguments.length; i++) {
				var obj = arguments[i];
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						newObj[key] = obj[key];
					}
				}
			}
			return newObj;
		}
	};
})();
