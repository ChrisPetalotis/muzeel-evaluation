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
 * @author Camille Reynders
 * Date: 03/02/12
 * Time: 15:23
 */
var dijondemo = {};

(function( ns ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[106,2060],"range":[91,2060],"file":"todomvc/examples.lacunized.instrumented/dijon/js/config.js","index":2,"label":"dijon"}');
	'use strict';

	ns.views = {};
	ns.models = {};
	ns.controllers = {};
	ns.services = {};
	ns.utils = {};
	ns.Config = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[238,2056],"range":[227,2056],"file":"todomvc/examples.lacunized.instrumented/dijon/js/config.js","index":1,"label":"dijon"}');
		return {
			system: undefined, //inject
			setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[303,2048],"range":[292,2048],"file":"todomvc/examples.lacunized.instrumented/dijon/js/config.js","index":0,"label":"dijon"}');

				this.system.autoMapOutlets = true;

				// Values
				this.system.mapValue( 'enterKey', 13 );
				this.system.mapValue( 'uuidUtil', ns.utils.Utils );
				this.system.mapValue( 'pluralizeUtil', ns.utils.Utils );

				// Models
				this.system.mapSingleton( 'todosModel', ns.models.TodosModel );

				// Services
				this.system.mapSingleton( 'storageService', ns.services.LocalStorageService );

				// Views
				this.system.mapSingleton( 'footerView', ns.views.FooterView );

				this.system.mapSingleton( 'formView', ns.views.TodoFormView );

				this.system.mapSingleton( 'listView', ns.views.TodoListView );

				//Handlers
				this.system.mapHandler( 'TodoFormView:addTodo', 'todosModel', 'add' );
				this.system.mapHandler( 'TodoListView:toggleDoneOfTodo', 'todosModel', 'toggleDone' );
				this.system.mapHandler( 'TodoListView:setTitleOfTodo', 'todosModel', 'setTitle' );
				this.system.mapHandler( 'TodoListView:removeTodo', 'todosModel', 'remove' );
				this.system.mapHandler( 'TodoListView:setDoneForAllTodos', 'todosModel', 'setDoneForAll' );
				this.system.mapHandler( 'TodoListView:removeAllDoneTodos', 'todosModel', 'removeAllDone' );
				this.system.mapHandler( 'StorageService:retrieveCompleted', 'todosModel', 'setList' );
				this.system.mapHandler( 'TodosModel:todosListUpdated', 'listView', 'render' );
				this.system.mapHandler( 'TodosModel:todosListUpdated', 'footerView', 'render' );
				this.system.mapHandler( 'TodosModel:todosListUpdated', 'storageService', 'store' );
				this.system.mapHandler( 'App:startup', 'storageService', 'retrieve' );
				this.system.mapHandler( 'App:startupComplete', 'formView', 'render' );
				this.system.mapHandler( 'App:startupComplete', 'storageService', 'retrieve' );

			}
		};
	};

}( dijondemo ));
