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


/*global window, Ractive */
(function (window, Ractive) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56,4466],"range":[29,4466],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":17,"label":"ractive"}');
	'use strict';

	// Create some filter functions, which we'll need later
	var filters = {
		completed: function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[177,203],"range":[161,203],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":0,"label":"ractive"}'); return item.completed; },
		active: function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[231,258],"range":[215,258],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":1,"label":"ractive"}'); return !item.completed; }
	};

	// The keycode for the 'enter' and 'escape' keys
	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	// Create our Ractive instance
	var todoList = new Ractive({
		// Specify a target element - an ID, a CSS selector, or the element itself
		el: 'todoapp',

		// Specify a template, or the ID of a script tag containing the template
		template: '#main',

		// This is our viewmodel - as well as our list of tasks (which gets added
		// later from localStorage - see persistence.js), it includes helper
		// functions and computed values
		data: {
			filter: function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[831,1176],"range":[815,1176],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":2,"label":"ractive"}');
				// Because we're doing `this.get('currentFilter')`, Ractive understands
				// that this function needs to be re-executed reactively when the value of
				// `currentFilter` changes
				var currentFilter = this.get('currentFilter');

				if (currentFilter === 'all') {
					return true;
				}

				return filters[currentFilter](item);
			},

			// completedTasks() and activeTasks() are computed values, that will update
			// our app view reactively whenever `items` changes (including changes to
			// child properties like `items[1].completed`)
			completedTasks: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1416,1478],"range":[1404,1478],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":3,"label":"ractive"}');
				return this.get('items').filter(filters.completed);
			},

			activeTasks: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1509,1568],"range":[1497,1568],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":4,"label":"ractive"}');
				return this.get('items').filter(filters.active);
			},

			// By default, show all tasks. This value changes when the route changes
			// (see routes.js)
			currentFilter: 'all'
		},

		// We can define custom events. Here, we're defining an `enter` event,
		// and an `escape` event, which fire when the user hits those keys while
		// an input is focused:
		//
		// <input id="edit" class="edit" on-blur-enter="submit" on-escape="cancel" autofocus>
		events: (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1989,2544],"range":[1977,2544],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":9,"label":"ractive"}');
			var makeCustomEvent = function (keyCode) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2035,2441],"range":[2016,2441],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":8,"label":"ractive"}');
				return function (node, fire) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2070,2435],"range":[2048,2435],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":7,"label":"ractive"}');
					var keydownHandler = function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2115,2237],"range":[2098,2237],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":5,"label":"ractive"}');
						if (event.which === keyCode) {
							fire({
								node: node,
								original: event
							});
						}
					};

					node.addEventListener('keydown', keydownHandler, false);

					return {
						teardown: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2345,2421],"range":[2333,2421],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":6,"label":"ractive"}');
							node.removeEventListener('keydown', keydownHandler, false);
						}
					};
				};
			};

			return {
				enter: makeCustomEvent(ENTER_KEY),
				escape: makeCustomEvent(ESCAPE_KEY)
			};
		}())
	});


	// Here, we're defining how to respond to user interactions. Unlike many
	// libraries, where you use CSS selectors to dictate what event corresponds
	// to what action, in Ractive the 'meaning' of the event is baked into the
	// template itself (e.g. <button on-click='remove'>Remove</button>).
	todoList.on({

		// Removing a todo is as straightforward as splicing it out of the array -
		// Ractive intercepts calls to array mutator methods and updates the view
		// accordingly. The DOM is updated in the most efficient manner possible.
		remove: function (event, index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3131,3175],"range":[3107,3175],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":10,"label":"ractive"}');
			this.get('items').splice(index, 1);
		},

		// The `event` object contains useful properties for (e.g.) retrieving
		// data from the DOM
		newTodo: function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3302,3508],"range":[3285,3508],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":11,"label":"ractive"}');
			var description = event.node.value.trim();

			if (!description) {
				return;
			}

			this.get('items').push({
				description: description,
				completed: false
			});

			event.node.value = '';
		},

		edit: function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3536,3642],"range":[3519,3642],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":12,"label":"ractive"}');
			this.set(event.keypath + '.editing', true);
			this.nodes.edit.value = event.context.description;
		},

		submit: function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3672,3919],"range":[3655,3919],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":13,"label":"ractive"}');
			var description = event.node.value.trim();

			if (!description) {
				this.get('items').splice(event.index.i, 1);
				return;
			}

			this.set(event.keypath + '.description', description);
			this.set(event.keypath + '.editing', false);
		},

		cancel: function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3949,4002],"range":[3932,4002],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":14,"label":"ractive"}');
			this.set(event.keypath + '.editing', false);
		},

		clearCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4035,4183],"range":[4023,4183],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":15,"label":"ractive"}');
			var items = this.get('items');
			var i = items.length;

			while (i--) {
				if (items[i].completed) {
					items.splice(i, 1);
				}
			}
		},

		toggleAll: function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4216,4428],"range":[4199,4428],"file":"todomvc/examples.lacunized.instrumented/ractive/js/app.js","index":16,"label":"ractive"}');
			var i = this.get('items').length;
			var completed = event.node.checked;
			var changeHash = {};

			while (i--) {
				changeHash['items[' + i + '].completed'] = completed;
			}

			this.set(changeHash);
		}
	});

	window.todoList = todoList;

})(window, Ractive);
