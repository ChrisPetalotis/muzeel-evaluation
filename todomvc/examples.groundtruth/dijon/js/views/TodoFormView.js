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
 * Time: 13:38
 */
(function( ns ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110,736],"range":[95,736],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoFormView.js","index":4,"label":"dijon"}');
	'use strict';

	ns.views.TodoFormView = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164,732],"range":[153,732],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoFormView.js","index":3,"label":"dijon"}');
		var $newTodo = $('#new-todo');
		return {
			system: undefined, //inject
			enterKey: undefined, //inject
			uuidUtil: undefined, //inject
			setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[328,698],"range":[317,698],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoFormView.js","index":1,"label":"dijon"}');
				var self = this;
				$newTodo.on( 'keyup', function( e ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391,690],"range":[377,690],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoFormView.js","index":0,"label":"dijon"}');
					var $input = $( this ),
						val = $.trim( $input.val() );

					if ( e.which !== self.enterKey || !val ) {
						return;
					}

					self.system.notify( 'TodoFormView:addTodo', {
						title: val,
						id: self.uuidUtil.uuid(),
						completed: false
					} );

					$input.val('');
				} );
			},
			render: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[722,724],"range":[711,724],"file":"todomvc/examples.lacunized.instrumented/dijon/js/views/TodoFormView.js","index":2,"label":"dijon"}');}
		};
	};

}( dijondemo ));
