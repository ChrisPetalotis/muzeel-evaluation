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


require.config({
	baseUrl: 'js',
	paths: {
		$: '../node_modules/jquery/dist/jquery',
		jquery: '../node_modules/jquery/dist/jquery',
		mout: '../node_modules/mout/src',
		dust: '../node_modules/dustjs-linkedin/dist/dust-full',
		'dust-helpers': '../node_modules/dustjs-helpers/dist/dust-helpers',
		rdust: 'libs/require-dust',
		lavaca: 'Lavaca',
		Lavaca: 'lavaca'
	},
	shim: {
		$: {
			exports: '$'
		},
		jquery: {
			exports: '$'
		},
		dust: {
			exports: 'dust'
		},
		'dust-helpers': {
			deps: ['dust']
		},
		templates: {
			deps: ['dust']
		}
	}
});
require(['app/app']);
