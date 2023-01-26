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
 * @class TodoFormMediator
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
		name: 'todomvc.view.mediator.TodoFormMediator',
		parent: puremvc.Mediator
	},

	// INSTANCE MEMBERS
	{
		// Notifications this mediator is interested in
		listNotificationInterests: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[339,395],"range":[328,395],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/mediator/TodoFormMediator.js","index":0,"label":"puremvc"}');
			return [ todomvc.AppConstants.TODOS_FILTERED ];
		},

		// Code to be executed when the Mediator instance is registered with the View
		onRegister: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[503,1126],"range":[492,1126],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/mediator/TodoFormMediator.js","index":1,"label":"puremvc"}');
			this.setViewComponent( new todomvc.view.component.TodoForm );
			this.viewComponent.addEventListener( todomvc.view.event.AppEvents.TOGGLE_COMPLETE, this );
			this.viewComponent.addEventListener( todomvc.view.event.AppEvents.TOGGLE_COMPLETE_ALL, this );
			this.viewComponent.addEventListener( todomvc.view.event.AppEvents.UPDATE_ITEM, this );
			this.viewComponent.addEventListener( todomvc.view.event.AppEvents.DELETE_ITEM, this );
			this.viewComponent.addEventListener( todomvc.view.event.AppEvents.ADD_ITEM, this );
			this.viewComponent.addEventListener( todomvc.view.event.AppEvents.CLEAR_COMPLETED, this );
		},

		// Handle events from the view component
		handleEvent: function ( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1206,2024],"range":[1187,2024],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/mediator/TodoFormMediator.js","index":2,"label":"puremvc"}');
			switch( event.type ) {
				case todomvc.view.event.AppEvents.TOGGLE_COMPLETE_ALL:
					this.sendNotification( todomvc.AppConstants.TOGGLE_TODO_STATUS, event.doToggleComplete );
					break;

				case todomvc.view.event.AppEvents.DELETE_ITEM:
					this.sendNotification( todomvc.AppConstants.DELETE_TODO, event.todoId );
					break;

				case todomvc.view.event.AppEvents.ADD_ITEM:
					this.sendNotification( todomvc.AppConstants.ADD_TODO, event.todo );
					break;

				case todomvc.view.event.AppEvents.CLEAR_COMPLETED:
					this.sendNotification( todomvc.AppConstants.REMOVE_TODOS_COMPLETED );
					break;

				case todomvc.view.event.AppEvents.TOGGLE_COMPLETE:
				case todomvc.view.event.AppEvents.UPDATE_ITEM:
					this.sendNotification( todomvc.AppConstants.UPDATE_TODO, event.todo );
					break;
			 }

		},

		// Handle notifications from other PureMVC actors
		handleNotification: function( note ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2118,2280],"range":[2101,2280],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/mediator/TodoFormMediator.js","index":3,"label":"puremvc"}');
			switch ( note.getName() ) {
				case todomvc.AppConstants.TODOS_FILTERED:
					this.viewComponent.setFilteredTodoList( note.getBody() );
					break;
			}
		},
	},

	// STATIC MEMBERS
	{
		NAME: 'TodoFormMediator'
	}
);
