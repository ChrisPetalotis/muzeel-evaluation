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


/*global Backbone, microtemplate, ENTER_KEY */
var app = app || {};

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[82,4235],"range":[70,4235],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":16,"label":"exoskeleton"}');
	'use strict';

	var toggleEl = function (el, toggle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[138,185],"range":[116,185],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":0,"label":"exoskeleton"}');
		el.style.display = toggle ? '' : 'none';
	};

	var matchesSelector = function (node, selector) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[237,345],"range":[211,345],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":2,"label":"exoskeleton"}');
		return [].some.call(document.querySelectorAll(selector), function (el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[312,340],"range":[298,340],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":1,"label":"exoskeleton"}');
			return el === node;
		});
	};

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#todoapp',

		// Our template for the line of statistics at the bottom of the app.
		statsTemplate: microtemplate(document.querySelector('#stats-template').innerHTML),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keypress #new-todo': 'createOnEnter',
			'click #clear-completed': 'clearCompleted',
			'click #toggle-all': 'toggleAllComplete'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1243,1937],"range":[1231,1937],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":3,"label":"exoskeleton"}');
			this.allCheckbox = this.$('#toggle-all').item(0);
			this.input = this.$('#new-todo').item(0);
			this.footer = this.$('#footer').item(0);
			this.main = this.$('#main').item(0);

			this.listenTo(app.todos, 'add', this.addOne);
			this.listenTo(app.todos, 'reset', this.addAll);
			this.listenTo(app.todos, 'change:completed', this.filterOne);
			this.listenTo(app.todos, 'filter', this.filterAll);
			this.listenTo(app.todos, 'all', this.render);

			// Suppresses 'add' events with {reset: true} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			app.todos.fetch({reset: true});
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2069,2770],"range":[2057,2770],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":5,"label":"exoskeleton"}');
			var completed = app.todos.completed().length;
			var remaining = app.todos.remaining().length;
			var selector = '[href="#/' + (app.TodoFilter || '') + '"]';

			if (app.todos.length) {
				// TODO
				toggleEl(this.main, true);
				toggleEl(this.footer, true);

				this.footer.innerHTML = this.statsTemplate({
					completed: completed,
					remaining: remaining
				});

				[].forEach.call(this.$('#filters li a'), function (el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2507,2637],"range":[2493,2637],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":4,"label":"exoskeleton"}');
					el.classList.remove('selected');
					if (matchesSelector(el, selector)) {
						el.classList.add('selected');
					}
				});

			} else {
				toggleEl(this.main, false);
				toggleEl(this.footer, false);
			}

			this.allCheckbox.checked = !remaining;
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2912,3037],"range":[2896,3037],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":6,"label":"exoskeleton"}');
			var view = new app.TodoView({ model: todo });
			document.querySelector('#todo-list').appendChild(view.render().el);
		},

		// Add all items in the **Todos** collection at once.
		addAll: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3118,3212],"range":[3106,3212],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":7,"label":"exoskeleton"}');
			this.$('#todo-list').item(0).innerHTML = '';
			app.todos.forEach(this.addOne, this);
		},

		filterOne: function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3244,3277],"range":[3228,3277],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":8,"label":"exoskeleton"}');
			todo.trigger('visible');
		},

		filterAll: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3305,3354],"range":[3293,3354],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":9,"label":"exoskeleton"}');
			app.todos.forEach(this.filterOne, this);
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3436,3550],"range":[3424,3550],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":10,"label":"exoskeleton"}');
			return {
				title: this.input.value.trim(),
				order: app.todos.nextOrder(),
				completed: false
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3696,3848],"range":[3683,3848],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":11,"label":"exoskeleton"}');
			if (e.which !== ENTER_KEY || !this.input.value.trim()) {
				return;
			}

			app.todos.create(this.newAttributes());
			this.input.value = '';
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3943,4043],"range":[3931,4043],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":13,"label":"exoskeleton"}');
			app.todos.completed().forEach(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3994,4020],"range":[3978,4020],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":12,"label":"exoskeleton"}');
				todo.destroy();
			});
			return false;
		},

		toggleAllComplete: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4079,4228],"range":[4067,4228],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":15,"label":"exoskeleton"}');
			var completed = this.allCheckbox.checked;

			app.todos.forEach(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4164,4222],"range":[4148,4222],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/app-view.js","index":14,"label":"exoskeleton"}');
				todo.save({
					'completed': completed
				});
			});
		}
	});
})();
