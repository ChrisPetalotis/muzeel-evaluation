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


/**
 * @author Mike Britton
 *
 * @class PrepModelCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
		name: 'todomvc.controller.command.PrepModelCommand',
		parent: puremvc.SimpleCommand
	},

	// INSTANCE MEMBERS
	{
		/**
		 * Register Proxies with the Model
		 * @override
		 */
		execute: function(note) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[349,423],"range":[334,423],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/controller/command/PrepModelCommand.js","index":0,"label":"puremvc"}');
			this.facade.registerProxy( new todomvc.model.proxy.TodoProxy() );
		}
	}
);
