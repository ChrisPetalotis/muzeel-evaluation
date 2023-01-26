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


(function (global) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[19,612],"range":[1,612],"file":"todomvc/examples.lacunized.instrumented/dojo/js/main.js","index":1,"label":"dojo"}');
	'use strict';

	global.require = {
		async: true,
		baseUrl: '.',
		callback: function (parser) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[118,142],"range":[100,142],"file":"todomvc/examples.lacunized.instrumented/dojo/js/main.js","index":0,"label":"dojo"}');
			parser.parse();
		},
		deps: ['dojo/parser'],
		packages: [
			{
				name: 'dojo',
				location: './node_modules/dojo'
			},
			{
				name: 'dijit',
				location: './node_modules/dijit'
			},
			{
				name: 'dojox',
				location: './node_modules/dojox'
			},
			{
				name: 'todo',
				location: './js/todo'
			}
		],
		map: {
			// TodoMVC application does not use template from file system
			'dijit/_TemplatedMixin': {
				'dojo/cache': 'todo/empty'
			}
		},
		parseOnLoad: false
	};
})(this);
