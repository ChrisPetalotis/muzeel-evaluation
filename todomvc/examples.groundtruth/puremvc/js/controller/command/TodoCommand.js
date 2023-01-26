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
 * @class TodoCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define ({
		name: 'todomvc.controller.command.TodoCommand',
		parent: puremvc.SimpleCommand
	},

	// INSTANCE MEMBERS
	{
		/**
		 * Perform business logic (in this case, based on Notification name)
		 * @override
		 */
		execute: function ( note ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[389,1205],"range":[371,1205],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/controller/command/TodoCommand.js","index":0,"label":"puremvc"}');
			var proxy = this.facade.retrieveProxy( todomvc.model.proxy.TodoProxy.NAME );

			switch( note.getName() ) {
				case todomvc.AppConstants.ADD_TODO:
					proxy.addTodo( note.getBody() );
					break;

				case todomvc.AppConstants.DELETE_TODO:
					proxy.deleteTodo( note.getBody() );
					break;

				case todomvc.AppConstants.UPDATE_TODO:
					proxy.updateTodo( note.getBody() );
					break;

				case todomvc.AppConstants.TOGGLE_TODO_STATUS:
					proxy.toggleCompleteStatus( note.getBody() );
					break;

				case todomvc.AppConstants.REMOVE_TODOS_COMPLETED:
					proxy.removeTodosCompleted();
					break;

				case todomvc.AppConstants.FILTER_TODOS:
					proxy.filterTodos( note.getBody() );
					break;

				default:
					console.log('TodoCommand received an unsupported Notification');
					break;
			}
		}
	}
);
