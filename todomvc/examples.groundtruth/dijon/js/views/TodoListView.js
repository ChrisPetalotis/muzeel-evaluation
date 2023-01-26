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


/*global dijondemo, $, Handlebars */
/**
 * @author Camille Reynders
 * Date: 03/02/12
 * Time: 13:39
 */
(function( ns ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[122,1867],"range":[107,1867],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":9,"label":"dijon"}');
	'use strict';

	ns.views.TodoListView = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[176,1863],"range":[165,1863],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":8,"label":"dijon"}');
		var _template = Handlebars.compile( $('#todo-template').html() ),
			$toggleAll = $('#toggle-all'),
			$todoList = $('#todo-list'),
			$main = $('#main'),
			$count = $('#todo-count');
		return {
			system: undefined, //inject
			enterKey: undefined,
			todosModel: undefined, //inject
			setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[487,1628],"range":[476,1628],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":6,"label":"dijon"}');
				var self = this;
				$todoList.on( 'change', '.toggle', function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[560,681],"range":[549,681],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":0,"label":"dijon"}');
					var id = $( this ).closest('li').data('id');
					self.system.notify( 'TodoListView:toggleDoneOfTodo', id );
				});
				$todoList.on( 'dblclick', 'label', function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[734,813],"range":[723,813],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":1,"label":"dijon"}');
					$( this ).closest('li').addClass('editing').find('.edit').focus();
				} );
				$todoList.on( 'keypress', '.edit', function( e ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[870,947],"range":[856,947],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":2,"label":"dijon"}');
					if ( e.which === self.enterKey ) {
						e.target.blur();
					}
				});
				$todoList.on( 'blur', '.edit', function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[996,1280],"range":[985,1280],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":3,"label":"dijon"}');
					var id = $( this ).closest('li').data('id'),
						val = $.trim( $( this ).removeClass('editing').val() );
					if ( val ){
						self.system.notify( 'TodoListView:setTitleOfTodo', id, val );
					} else {
						self.system.notify( 'TodoListView:removeTodo', id );
					}
				});
				$todoList.on( 'click', '.destroy', function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1333,1448],"range":[1322,1448],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":4,"label":"dijon"}');
					var id = $( this ).closest('li').data('id');
					self.system.notify( 'TodoListView:removeTodo', id );
				});
				$toggleAll.on( 'change', function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1491,1621],"range":[1480,1621],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":5,"label":"dijon"}');
					var isChecked = !!$( this ).prop('checked');
					self.system.notify( 'TodoListView:setDoneForAllTodos', isChecked );
				});
			},
			render: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1652,1855],"range":[1641,1855],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoListView.js","index":7,"label":"dijon"}');
				var todoList = this.todosModel.getList();
				$todoList.html( _template( todoList ) );
				$main.toggle( !!todoList.length );
				$toggleAll.prop( 'checked', !this.todosModel.getNumActive() );
			}
		};
	};

}( dijondemo ));
