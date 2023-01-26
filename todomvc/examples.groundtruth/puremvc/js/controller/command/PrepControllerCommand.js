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
 * @author Mike Britton, Cliff Hall
 *
 * @class PrepControllerCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
		name: 'todomvc.controller.command.PrepControllerCommand',
		parent: puremvc.SimpleCommand
	},

	// INSTANCE MEMBERS
	{
		/**
		 * Register Commands with the Controller
		 * @override
		 */
		execute: function (note) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[378,1330],"range":[362,1330],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/controller/command/PrepControllerCommand.js","index":0,"label":"puremvc"}');
			// This registers multiple notes to a single command which performs different logic based on the note name.
			// In a more complex app, we'd usually be registering a different command to each notification name.
			this.facade.registerCommand( todomvc.AppConstants.ADD_TODO,                  todomvc.controller.command.TodoCommand );
			this.facade.registerCommand( todomvc.AppConstants.REMOVE_TODOS_COMPLETED,    todomvc.controller.command.TodoCommand );
			this.facade.registerCommand( todomvc.AppConstants.DELETE_TODO,               todomvc.controller.command.TodoCommand );
			this.facade.registerCommand( todomvc.AppConstants.UPDATE_TODO,               todomvc.controller.command.TodoCommand );
			this.facade.registerCommand( todomvc.AppConstants.TOGGLE_TODO_STATUS,        todomvc.controller.command.TodoCommand );
			this.facade.registerCommand( todomvc.AppConstants.FILTER_TODOS,              todomvc.controller.command.TodoCommand );
		}
	}
);
