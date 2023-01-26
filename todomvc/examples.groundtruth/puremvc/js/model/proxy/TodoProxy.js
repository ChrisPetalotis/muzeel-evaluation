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
 * @class TodoProxy
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 *
 */
puremvc.define({
		name: 'todomvc.model.proxy.TodoProxy',
		parent: puremvc.Proxy
	},

	// INSTANCE MEMBERS
	{
		todos: [],
		stats: {},
		filter: todomvc.AppConstants.FILTER_ALL,
		LOCAL_STORAGE: 'todos-puremvc',

		onRegister: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[374,399],"range":[363,399],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":0,"label":"puremvc"}');
			this.loadData();
		},

		loadData: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[425,711],"range":[414,711],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":1,"label":"puremvc"}');
			var storageObject;
			if ( !localStorage.getItem( this.LOCAL_STORAGE ) ) {
				this.saveData();
			}
			storageObject = JSON.parse( localStorage.getItem( this.LOCAL_STORAGE ) );
			this.todos = storageObject.todos;
			this.filter = storageObject.filter;
			this.computeStats();
		},

		saveData: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[737,887],"range":[726,887],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":2,"label":"puremvc"}');
			var storageObject = { todos:this.todos, filter:this.filter };
			localStorage.setItem( this.LOCAL_STORAGE, JSON.stringify( storageObject ) );
		},

		computeStats: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[917,1115],"range":[906,1115],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":3,"label":"puremvc"}');
			this.stats.totalTodo        = this.todos.length;
			this.stats.todoCompleted    = this.getCompletedCount();
			this.stats.todoLeft         = this.stats.totalTodo - this.stats.todoCompleted;
		},

		filterTodos: function ( filter ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1153,1795],"range":[1133,1795],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":4,"label":"puremvc"}');
			var i;
			this.filter = filter;
			this.saveData();

			i = this.todos.length,
				filtered = [];

			while ( i-- ) {
				if ( filter === todomvc.AppConstants.FILTER_ALL ) {
					filtered.push( this.todos[ i ] );
				} else if ( this.todos[i].completed === true && filter === todomvc.AppConstants.FILTER_COMPLETED ) {
					filtered.push( this.todos[ i ] );
				} else if ( this.todos[i].completed === false && filter === todomvc.AppConstants.FILTER_ACTIVE ) {
					filtered.push( this.todos[ i ] );
				}
			}

			this.sendNotification( todomvc.AppConstants.TODOS_FILTERED, { todos:filtered, stats:this.stats, filter:this.filter } );
		},

		todosModified: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1826,1891],"range":[1815,1891],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":5,"label":"puremvc"}');
			this.computeStats();
			this.filterTodos( this.filter );
		},

		removeTodosCompleted: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1929,2090],"range":[1918,2090],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":6,"label":"puremvc"}');
			var i = this.todos.length;
			while ( i-- ) {
				if ( this.todos[ i ].completed ) {
					this.todos.splice( i, 1 );
				}
			}
			this.todosModified();
		},

		deleteTodo: function( id ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2122,2279],"range":[2107,2279],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":7,"label":"puremvc"}');
			var i = this.todos.length;
			while ( i-- ) {
				if ( this.todos[i].id === id ) {
					this.todos.splice(i, 1);
				}
			}
			this.todosModified();
		},

		toggleCompleteStatus: function( status ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2325,2449],"range":[2306,2449],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":8,"label":"puremvc"}');
			var i = this.todos.length;
			while ( i-- ) {
				this.todos[ i ].completed = status;
			}
			this.todosModified();
		},

		updateTodo: function( todo ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2483,2709],"range":[2466,2709],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":9,"label":"puremvc"}');
			var i = this.todos.length;
			while ( i-- ) {
				if ( this.todos[ i ].id === todo.id ) {
					 this.todos[ i ].title = todo.title;
					 this.todos[ i ].completed = todo.completed;
				}
			}
			this.todosModified();
		},

		addTodo: function( newTodo ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2743,2839],"range":[2723,2839],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":10,"label":"puremvc"}');
			newTodo.id = this.getUuid();
			this.todos.unshift( newTodo );
			this.todosModified();
		},

		getCompletedCount: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2874,3037],"range":[2863,3037],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":11,"label":"puremvc"}');
			var i = this.todos.length,
				completed = 0;

			while ( i-- ) {
				if ( this.todos[ i ].completed ) {
					completed++;
				}
			}
			return completed;
		},

		getUuid: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3062,3356],"range":[3051,3356],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/model/proxy/TodoProxy.js","index":12,"label":"puremvc"}');
			var i, random, uuid = '';

			for ( i = 0; i < 32; i++ ) {
				random = Math.random() * 16 | 0;
				if ( i === 8 || i === 12 || i === 16 || i === 20 ) {
					uuid += '-';
				}
				uuid += ( i === 12 ? 4 : (i === 16 ? ( random & 3 | 8 ) : random) ).toString( 16 );
			}
			return uuid;
		}
	},

	// CLASS MEMBERS
	{
		NAME: 'TodoProxy'
	}
);
