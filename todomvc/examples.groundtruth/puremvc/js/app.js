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
 * @class todomvc.Application
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
		name: 'todomvc.Application',
		constructor: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[203,431],"range":[192,431],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/app.js","index":0,"label":"puremvc"}');
			// register the startup command and trigger it.
			this.facade.registerCommand( todomvc.AppConstants.STARTUP, todomvc.controller.command.StartupCommand );
			this.facade.sendNotification( todomvc.AppConstants.STARTUP );
		}
	},

	// INSTANCE MEMBERS
	{
		// Define the startup notification name
		STARTUP: 'startup',

		// Get an instance of the PureMVC Facade. This creates the Model, View, and Controller instances.
		facade: puremvc.Facade.getInstance( todomvc.AppConstants.CORE_NAME )
	}
);
