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


/*global ko, Router */
(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[36,6013],"range":[24,6013],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":29,"label":"knockoutjs"}');
	'use strict';

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	// A factory function we can use to create binding handlers for specific
	// keycodes.
	function keyhandlerBindingFactory(keyCode) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[230,933],"range":[187,933],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":3,"label":"knockoutjs"}');
		return {
			init: function (element, valueAccessor, allBindingsAccessor, data, bindingContext) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[329,925],"range":[252,925],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":2,"label":"knockoutjs"}');
				var wrappedHandler, newValueAccessor;

				// wrap the handler with a check for the enter key
				wrappedHandler = function (data, event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[473,572],"range":[450,572],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":0,"label":"knockoutjs"}');
					if (event.keyCode === keyCode) {
						valueAccessor().call(this, data, event);
					}
				};

				// create a valueAccessor with the options that we would want to pass to the event binding
				newValueAccessor = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[705,762],"range":[693,762],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":1,"label":"knockoutjs"}');
					return {
						keyup: wrappedHandler
					};
				};

				// call the real event binding's init function
				ko.bindingHandlers.event.init(element, newValueAccessor, allBindingsAccessor, data, bindingContext);
			}
		};
	}

	// a custom binding to handle the enter key
	ko.bindingHandlers.enterKey = keyhandlerBindingFactory(ENTER_KEY);

	// another custom binding, this time to handle the escape key
	ko.bindingHandlers.escapeKey = keyhandlerBindingFactory(ESCAPE_KEY);

	// wrapper to hasFocus that also selects text and applies focus async
	ko.bindingHandlers.selectAndFocus = {
		init: function (element, valueAccessor, allBindingsAccessor, bindingContext) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1372,1568],"range":[1301,1568],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":5,"label":"knockoutjs"}');
			ko.bindingHandlers.hasFocus.init(element, valueAccessor, allBindingsAccessor, bindingContext);
			ko.utils.registerEventHandler(element, 'focus', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1535,1562],"range":[1523,1562],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":4,"label":"knockoutjs"}');
				element.focus();
			});
		},
		update: function (element, valueAccessor) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1614,1846],"range":[1580,1846],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":7,"label":"knockoutjs"}');
			ko.utils.unwrapObservable(valueAccessor()); // for dependency
			// ensure that element is visible before trying to focus
			setTimeout(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1767,1837],"range":[1755,1837],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":6,"label":"knockoutjs"}');
				ko.bindingHandlers.hasFocus.update(element, valueAccessor);
			}, 0);
		}
	};

	// represent a single todo item
	var Todo = function (title, completed) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1925,2050],"range":[1897,2050],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":8,"label":"knockoutjs"}');
		this.title = ko.observable(title);
		this.completed = ko.observable(completed);
		this.editing = ko.observable(false);
	};

	// our main view model
	var ViewModel = function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2111,5665],"range":[2094,5665],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":28,"label":"knockoutjs"}');
		// map array of passed in todos to an observableArray of Todo objects
		this.todos = ko.observableArray(todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2245,2298],"range":[2229,2298],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":9,"label":"knockoutjs"}');
			return new Todo(todo.title, todo.completed);
		}));

		// store the new todo value being entered
		this.current = ko.observable();

		this.showMode = ko.observable('all');

		this.filteredTodos = ko.computed(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2470,2761],"range":[2458,2761],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":12,"label":"knockoutjs"}');
			switch (this.showMode()) {
			case 'active':
				return this.todos().filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2567,2605],"range":[2551,2605],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":10,"label":"knockoutjs"}');
					return !todo.completed();
				});
			case 'completed':
				return this.todos().filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2676,2713],"range":[2660,2713],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":11,"label":"knockoutjs"}');
					return todo.completed();
				});
			default:
				return this.todos();
			}
		}.bind(this));

		// add a new todo, when enter key is pressed
		this.add = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2848,2978],"range":[2836,2978],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":13,"label":"knockoutjs"}');
			var current = this.current().trim();
			if (current) {
				this.todos.push(new Todo(current));
				this.current('');
			}
		}.bind(this);

		// remove a single todo
		this.remove = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3050,3083],"range":[3034,3083],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":14,"label":"knockoutjs"}');
			this.todos.remove(todo);
		}.bind(this);

		// remove all completed todos
		this.removeCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3166,3246],"range":[3154,3246],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":16,"label":"knockoutjs"}');
			this.todos.remove(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3205,3240],"range":[3189,3240],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":15,"label":"knockoutjs"}');
				return todo.completed();
			});
		}.bind(this);

		// edit an item
		this.editItem = function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3312,3378],"range":[3296,3378],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":17,"label":"knockoutjs"}');
			item.editing(true);
			item.previousTitle = item.title();
		}.bind(this);

		// stop editing an item.  Remove the item, if it is now empty
		this.saveEditing = function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3493,3959],"range":[3477,3959],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":18,"label":"knockoutjs"}');
			item.editing(false);

			var title = item.title();
			var trimmedTitle = title.trim();

			// Observable value changes are not triggered if they're consisting of whitespaces only
			// Therefore we've to compare untrimmed version with a trimmed one to chech whether anything changed
			// And if yes, we've to set the new value manually
			if (title !== trimmedTitle) {
				item.title(trimmedTitle);
			}

			if (!trimmedTitle) {
				this.remove(item);
			}
		}.bind(this);

		// cancel editing an item and revert to the previous content
		this.cancelEditing = function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4075,4139],"range":[4059,4139],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":19,"label":"knockoutjs"}');
			item.editing(false);
			item.title(item.previousTitle);
		}.bind(this);

		// count of all completed todos
		this.completedCount = ko.computed(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4235,4331],"range":[4223,4331],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":21,"label":"knockoutjs"}');
			return this.todos().filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4283,4318],"range":[4267,4318],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":20,"label":"knockoutjs"}');
				return todo.completed();
			}).length;
		}.bind(this));

		// count of todos that are not complete
		this.remainingCount = ko.computed(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4436,4496],"range":[4424,4496],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":22,"label":"knockoutjs"}');
			return this.todos().length - this.completedCount();
		}.bind(this));

		// writeable computed observable to handle marking all complete/incomplete
		this.allCompleted = ko.computed({
			//always return true/false based on the done flag of all todos
			read: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4711,4752],"range":[4699,4752],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":23,"label":"knockoutjs"}');
				return !this.remainingCount();
			}.bind(this),
			// set all todos to the written value (true/false)
			write: function (newValue) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4849,5021],"range":[4829,5021],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":25,"label":"knockoutjs"}');
				this.todos().forEach(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4892,5014],"range":[4876,5014],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":24,"label":"knockoutjs"}');
					// set even if value is the same, as subscribers are not notified in that case
					todo.completed(newValue);
				});
			}.bind(this)
		});

		// helper function to keep expressions out of markup
		this.getLabel = function (count) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5130,5204],"range":[5113,5204],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":26,"label":"knockoutjs"}');
			return ko.utils.unwrapObservable(count) === 1 ? 'item' : 'items';
		}.bind(this);

		// internal computed observable that fires whenever anything changes in our todos
		ko.computed(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5328,5538],"range":[5316,5538],"file":"todomvc/examples.lacunized.instrumented/knockoutjs/js/app.js","index":27,"label":"knockoutjs"}');
			// store a clean copy to local storage, which also creates a dependency on
			// the observableArray and all observables in each item
			localStorage.setItem('todos-knockoutjs', ko.toJSON(this.todos));
		}.bind(this)).extend({
			rateLimit: { timeout: 500, method: 'notifyWhenChangesStop' }
		}); // save at most twice per second
	};

	// check local storage for todos
	var todos = ko.utils.parseJson(localStorage.getItem('todos-knockoutjs'));

	// bind a new instance of our view model to the page
	var viewModel = new ViewModel(todos || []);
	ko.applyBindings(viewModel);

	// set up filter routing
	/*jshint newcap:false */
	Router({ '/:filter': viewModel.showMode }).init();
}());
