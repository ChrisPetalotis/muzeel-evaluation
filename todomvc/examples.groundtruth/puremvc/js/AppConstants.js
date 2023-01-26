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
 * @class AppConstants
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 *
 * Define the core and notification constants.
 *
 * PureMVC JS is multi-core, meaning you may have multiple,
 * named and isolated PureMVC cores. This app only has one.
 */
puremvc.define({ name: 'todomvc.AppConstants' }, {}, {
	// The multiton key for this app's single core
	CORE_NAME:                'TodoMVC',

	// Notifications
	STARTUP:                  'startup',
	ADD_TODO:                 'add_todo',
	DELETE_TODO:              'delete_todo',
	UPDATE_TODO:              'update_todo',
	TOGGLE_TODO_STATUS:       'toggle_todo_status',
	REMOVE_TODOS_COMPLETED:   'remove_todos_completed',
	FILTER_TODOS:             'filter_todos',
	TODOS_FILTERED:           'todos_filtered',

	// Filter routes
	FILTER_ALL:                'all',
	FILTER_ACTIVE:             'active',
	FILTER_COMPLETED:          'completed'
});
