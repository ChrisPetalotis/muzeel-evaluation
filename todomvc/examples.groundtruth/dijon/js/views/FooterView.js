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


/*global dijondemo, $ */
/**
 * @author Camille Reynders
 * Date: 03/02/12
 * Time: 14:20
 */
(function( ns ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110,1115],"range":[95,1115],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/FooterView.js","index":5,"label":"dijon"}');
	'use strict';

	ns.views.FooterView = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162,1111],"range":[151,1111],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/FooterView.js","index":4,"label":"dijon"}');
		var $count = $('#todo-count'),
			$clearBtn = $('#clear-completed'),
			$footer = $('#todoapp').find('footer');

		return {
			system: undefined, //inject
			pluralizeUtil: undefined, //inject,
			todosModel: undefined, //inject
			setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[416,554],"range":[405,554],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/FooterView.js","index":1,"label":"dijon"}');
				var self = this;
				$clearBtn.on( 'click', function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[477,546],"range":[466,546],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/FooterView.js","index":0,"label":"dijon"}');
					self.system.notify( 'TodoListView:removeAllDoneTodos' );
				});

			},
			render: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[578,672],"range":[567,672],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/FooterView.js","index":2,"label":"dijon"}');
				this.renderCounts( this.todosModel.getNumTotal(), this.todosModel.getNumActive() );
			},
			renderCounts: function( numTodosTotal, numTodosActive ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[733,1103],"range":[691,1103],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/FooterView.js","index":3,"label":"dijon"}');
				var numTodosCompleted = numTodosTotal - numTodosActive,
					countTitle = '<strong>' + numTodosActive + '</strong> ' + this.pluralizeUtil.pluralize( numTodosActive, 'item' ) + ' left';

				// Only show the footer when there are at least one todo.
				$footer.toggle( !!numTodosTotal );

				// Toggle clear button
				$clearBtn.toggle( !!numTodosCompleted );
			}
		};
	};

}( dijondemo ));
