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
 * @author Cliff Hall
 *
 * @class AppEvents
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({ name: 'todomvc.view.event.AppEvents' }, {},
	// STATIC MEMBERS
	{
		// Event name constants
		TOGGLE_COMPLETE_ALL:    'toggle_complete_all',
		TOGGLE_COMPLETE:        'toggle_complete',
		CLEAR_COMPLETED:        'clear_completed',
		DELETE_ITEM:            'delete_item',
		UPDATE_ITEM:            'update_item',
		ADD_ITEM:               'add_item',

		// Create event (cross-browser)
		createEvent: function( eventName ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[557,813],"range":[535,813],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/event/AppEvents.js","index":0,"label":"puremvc"}');
			var event;
			if ( document.createEvent ) {
				event = document.createEvent( 'Events' );
				event.initEvent( eventName, false, false );
			} else if ( document.createEventObject ) {
				event = document.createEventObject();
			}
			return event;
		},

		// Add event listener (cross-browser)
		addEventListener: function( object, type, listener, useCapture ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[923,1108],"range":[876,1108],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/event/AppEvents.js","index":1,"label":"puremvc"}');
			if ( object.addEventListener ) {
				object.addEventListener( type, listener, useCapture );
			} else if ( object.attachEvent ) {
				object.attachEvent( type, listener );
			}
		},

		// Dispatch event (cross-browser)
		dispatchEvent: function( object, event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1190,1347],"range":[1164,1347],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/event/AppEvents.js","index":2,"label":"puremvc"}');
			if ( object.dispatchEvent ) {
				object.dispatchEvent( event );
			} else if ( object.fireEvent ) {
				object.fireEvent( event.type, event );
			}
		},
	}
);
