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
 * @class TodoForm
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
		name: 'todomvc.view.component.TodoForm',
		constructor: function(event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[221,1973],"range":[205,1973],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":3,"label":"puremvc"}');
			// data
			this.todos  = [];
			this.stats  = {};
			this.filter = '';

			// Fixed DOM elements managed by this view component
			this.todoApp           = document.querySelector( '#todoapp' );
			this.main               = this.todoApp.querySelector( '#main' );
			this.toggleAllCheckbox  = this.todoApp.querySelector( '#toggle-all' );
			this.newTodoField       = this.todoApp.querySelector( '#new-todo' );
			this.todoList           = this.todoApp.querySelector( '#todo-list' );
			this.footer             = this.todoApp.querySelector( '#footer' );
			this.todoCount          = this.todoApp.querySelector( '#todo-count' );
			this.clearButton        = this.todoApp.querySelector( '#clear-completed' );
			this.filters            = this.todoApp.querySelector( '#filters' );
			this.filterAll          = this.filters.querySelector( '#filterAll' );
			this.filterActive       = this.filters.querySelector( '#filterActive' );
			this.filterCompleted    = this.filters.querySelector( '#filterCompleted' );

			// Event listeners for fixed UI elements
			this.newTodoField.component = this;
			todomvc.view.event.AppEvents.addEventListener( this.newTodoField, 'keypress', function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1412,1543],"range":[1394,1543],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":0,"label":"puremvc"}');
					if ( event.keyCode === this.component.ENTER_KEY && this.value ) {
						this.component.dispatchAddTodo( event );
					}
			});

			this.clearButton.component = this;
			todomvc.view.event.AppEvents.addEventListener( this.clearButton, 'click', function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1680,1739],"range":[1662,1739],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":1,"label":"puremvc"}');
					this.component.dispatchClearCompleted( event );
			});


			this.toggleAllCheckbox.component = this;
			todomvc.view.event.AppEvents.addEventListener( this.toggleAllCheckbox, 'change', function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1890,1967],"range":[1872,1967],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":2,"label":"puremvc"}');
					this.component.dispatchToggleCompleteAll( event.target.checked );
			});
		}
	},

	// INSTANCE MEMBERS
	{
			ENTER_KEY: 13,
			ESC_KEY: 27,

			addEventListener: function ( type, listener, useCapture ){instrumentation_log('{"type":"FunctionExpression","bodyRange":[2098,2200],"range":[2059,2200],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":4,"label":"puremvc"}');
				todomvc.view.event.AppEvents.addEventListener ( this.todoApp, type, listener, useCapture );
			},

			createEvent: function( eventName ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2241,2315],"range":[2219,2315],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":5,"label":"puremvc"}');
			   return todomvc.view.event.AppEvents.createEvent( eventName );
			},

			dispatchEvent: function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2354,2433],"range":[2336,2433],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":6,"label":"puremvc"}');
			   todomvc.view.event.AppEvents.dispatchEvent( this.todoApp, event );
			},

			abandonEditTodo: function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2474,2870],"range":[2456,2870],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":7,"label":"puremvc"}');
				var todo, todoId, div, inputEditTodo;
				inputEditTodo = event.target;
				todoId = inputEditTodo.getAttribute( 'data-todo-id' )
				todo = this.getTodoById( todoId );
				inputEditTodo.value = todo.title;
				inputEditTodo.completed = todo.completed;
				div = document.getElementById( 'li_' + todoId );
				div.className = 'view';
				this.newTodoField.focus();
                        },

			dispatchToggleComplete: function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2918,3343],"range":[2900,3343],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":8,"label":"puremvc"}');
			   var todo, toggleItemCompleteEvent;
			   todo = this.getTodoById( event.target.getAttribute( 'data-todo-id' ) );
			   todo.id = event.target.getAttribute( 'data-todo-id' );
			   todo.completed = event.target.checked;
			   toggleItemCompleteEvent = this.createEvent( todomvc.view.event.AppEvents.TOGGLE_COMPLETE );
			   toggleItemCompleteEvent.todo = todo;
			   this.dispatchEvent( toggleItemCompleteEvent );
			},

			dispatchToggleCompleteAll: function( checked ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3396,3610],"range":[3376,3610],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":9,"label":"puremvc"}');
				var toggleCompleteAllEvent = this.createEvent( todomvc.view.event.AppEvents.TOGGLE_COMPLETE_ALL );
				toggleCompleteAllEvent.doToggleComplete = checked;
				this.dispatchEvent( toggleCompleteAllEvent );
			},

			dispatchClearCompleted: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3651,3798],"range":[3640,3798],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":10,"label":"puremvc"}');
				var clearCompleteEvent = this.createEvent( todomvc.view.event.AppEvents.CLEAR_COMPLETED );
				this.dispatchEvent( clearCompleteEvent );
			},

			dispatchDelete: function( id ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3835,4005],"range":[3820,4005],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":11,"label":"puremvc"}');
				var deleteItemEvent = this.createEvent( todomvc.view.event.AppEvents.DELETE_ITEM );
				deleteItemEvent.todoId = id;
				this.dispatchEvent( deleteItemEvent );
			},

			dispatchAddTodo: function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4046,4347],"range":[4028,4347],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":12,"label":"puremvc"}');
				var addItemEvent, todo = {};
				todo.completed = false;
				todo.title = this.newTodoField.value.trim();
				if ( todo.title === '' ) return;
				addItemEvent = this.createEvent( todomvc.view.event.AppEvents.ADD_ITEM );
				addItemEvent.todo = todo;
				this.dispatchEvent( addItemEvent );
			},

			dispatchUpdateTodo: function(event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4389,4868],"range":[4373,4868],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":13,"label":"puremvc"}');
				var eventType, updateItemEvent, todo = {};
				todo.id = event.target.id.slice(6);
				todo.title = event.target.value.trim();
				todo.completed = event.target.completed;
				eventType = ( todo.title === "" ) ?
					todomvc.view.event.AppEvents.DELETE_ITEM : todomvc.view.event.AppEvents.UPDATE_ITEM;
				updateItemEvent = this.createEvent( eventType );
				updateItemEvent.todo = todo;
				updateItemEvent.todoId = todo.id;
				this.dispatchEvent( updateItemEvent );
			},

			setFilteredTodoList: function( data ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4912,8527],"range":[4895,8527],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":20,"label":"puremvc"}');
				var todo, checkbox, label, deleteLink, divDisplay,
					inputEditTodo, li, i, todoId, div, inputEditTodo;

				// Update instance data
				this.todos  = data.todos;
				this.stats  = data.stats;
				this.filter = data.filter;

				// Hide main section if no todos
				this.main.style.display = this.stats.totalTodo ? 'block' : 'none';

				// Create Todo list
				this.todoList.innerHTML = '';
				this.newTodoField.value = '';
				for ( i=0; i < this.todos.length; i++ ) {

					todo = this.todos[i];

					// Create checkbox
					checkbox = document.createElement( 'input' );
					checkbox.className = 'toggle';
					checkbox.setAttribute( 'data-todo-id', todo.id );
					checkbox.type = 'checkbox';
					checkbox.component = this;
					todomvc.view.event.AppEvents.addEventListener( checkbox, 'change', function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5742,5804],"range":[5724,5804],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":14,"label":"puremvc"}');
						this.component.dispatchToggleComplete( event );
					});

					// Create div text
					label = document.createElement( 'label' );
					label.setAttribute( 'data-todo-id', todo.id );
					label.appendChild( document.createTextNode( todo.title ) );

					// Create delete button
					deleteLink = document.createElement( 'button' );
					deleteLink.className = 'destroy';
					deleteLink.setAttribute( 'data-todo-id', todo.id );
					deleteLink.component = this;
					todomvc.view.event.AppEvents.addEventListener( deleteLink, 'click', function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6302,6394],"range":[6284,6394],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":15,"label":"puremvc"}');
						this.component.dispatchDelete( event.target.getAttribute( 'data-todo-id' ) );
					});

					// Create divDisplay
					divDisplay = document.createElement( 'div' );
					divDisplay.className = 'view';
					divDisplay.setAttribute( 'data-todo-id', todo.id );
					divDisplay.appendChild( checkbox );
					divDisplay.appendChild( label );
					divDisplay.appendChild( deleteLink );
					todomvc.view.event.AppEvents.addEventListener( divDisplay, 'dblclick', function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6777,7083],"range":[6766,7083],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":16,"label":"puremvc"}');
						todoId = this.getAttribute( 'data-todo-id' );
						div = document.getElementById( 'li_' + todoId );
						inputEditTodo = document.getElementById( 'input_' + todoId );
						inputEditTodo.setAttribute( 'data-todo-id', todoId );
						div.className = 'editing';
						inputEditTodo.focus();

					});

					// Create todo input
					inputEditTodo = document.createElement( 'input' );
					inputEditTodo.id = 'input_' + todo.id;
					inputEditTodo.className = 'edit';
					inputEditTodo.value = todo.title;
					inputEditTodo.completed = todo.completed;
					inputEditTodo.component = this;
					todomvc.view.event.AppEvents.addEventListener( inputEditTodo, 'keypress', function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7472,7597],"range":[7454,7597],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":17,"label":"puremvc"}');
						if ( event.keyCode === this.component.ENTER_KEY ) {
							this.component.dispatchUpdateTodo( event );
						}
					});

					todomvc.view.event.AppEvents.addEventListener( inputEditTodo, 'keydown', function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7697,7817],"range":[7679,7817],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":18,"label":"puremvc"}');
						if ( event.keyCode === this.component.ESC_KEY ) {
							this.component.abandonEditTodo( event );
						}
					});

					todomvc.view.event.AppEvents.addEventListener( inputEditTodo, 'blur', function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7914,7972],"range":[7896,7972],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":19,"label":"puremvc"}');
						this.component.dispatchUpdateTodo( event );
					});

					// Create Todo ListItem and add to list
					li = document.createElement( 'li' );
					li.id = 'li_' + todo.id;
					li.appendChild( divDisplay );
					li.appendChild( inputEditTodo );
					if ( todo.completed ) {
						li.className += 'completed';
						checkbox.checked = true;
					}
					this.todoList.appendChild( li );
				}

				// Update UI
				this.footer.style.display = this.stats.totalTodo ? 'block' : 'none';
				this.updateToggleAllCheckbox();
				this.updateClearButton();
				this.updateTodoCount();
				this.updateFilter();

			},

			getTodoById: function( id ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[8561,8709],"range":[8546,8709],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":21,"label":"puremvc"}');
			   var i;
				for ( i = 0; i < this.todos.length; i++ ) {
					if ( this.todos[ i ].id === id ) {
						return this.todos[i];
					}
				}
			},

			updateFilter: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[8740,9083],"range":[8729,9083],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":22,"label":"puremvc"}');
				this.filterAll.className        = ( this.filter === todomvc.AppConstants.FILTER_ALL ) ? 'selected' : '';
				this.filterActive.className     = ( this.filter === todomvc.AppConstants.FILTER_ACTIVE ) ? 'selected' : '';
				this.filterCompleted.className  = ( this.filter === todomvc.AppConstants.FILTER_COMPLETED ) ? 'selected' : '';

			},

			updateToggleAllCheckbox: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9125,9372],"range":[9114,9372],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":23,"label":"puremvc"}');
				var i, checked = ( this.todos.length > 0 );
				for ( i = 0; i < this.todos.length; i++ ) {
					if ( this.todos[ i ].completed === false ) {
						checked = false;
						break;
					}
				}
				this.toggleAllCheckbox.checked = checked;
			},

			updateClearButton: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9408,9558],"range":[9397,9558],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":24,"label":"puremvc"}');
				this.clearButton.style.display = ( this.stats.todoCompleted === 0 ) ? 'none' : 'block';
				this.clearButton.innerHTML = 'Clear completed';
			},

			updateTodoCount: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9592,9920],"range":[9581,9920],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/component/TodoForm.js","index":25,"label":"puremvc"}');
				var number = document.createElement( 'strong' ),
					text   = ' ' + (this.stats.todoLeft === 1 ? 'item' : 'items' ) + ' left';
				number.innerHTML = this.stats.todoLeft;
				this.todoCount.innerHTML = null;
				this.todoCount.appendChild( number );
				this.todoCount.appendChild( document.createTextNode( text ) );
			}
	},

	// STATIC MEMBERS
	{
		NAME: 'TodoForm',
	}
);
