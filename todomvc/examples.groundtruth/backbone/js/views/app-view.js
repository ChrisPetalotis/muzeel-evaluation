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


/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[79,3707],"range":[66,3707],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":11,"label":"backbone"}');
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '.todoapp',

		// Our template for the line of statistics at the bottom of the app.
		statsTemplate: _.template($('#stats-template').html()),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keypress .new-todo': 'createOnEnter',
			'click .clear-completed': 'clearCompleted',
			'click .toggle-all': 'toggleAllComplete'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[965,1681],"range":[953,1681],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":0,"label":"backbone"}');
			this.allCheckbox = this.$('.toggle-all')[0];
			this.$input = this.$('.new-todo');
			this.$footer = this.$('.footer');
			this.$main = this.$('.main');
			this.$list = $('.todo-list');

			this.listenTo(app.todos, 'add', this.addOne);
			this.listenTo(app.todos, 'reset', this.addAll);
			this.listenTo(app.todos, 'change:completed', this.filterOne);
			this.listenTo(app.todos, 'filter', this.filterAll);
			this.listenTo(app.todos, 'all', _.debounce(this.render, 0));

			// Suppresses 'add' events with {reset: true} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			app.todos.fetch({reset: true});
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1813,2351],"range":[1801,2351],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":1,"label":"backbone"}');
			var completed = app.todos.completed().length;
			var remaining = app.todos.remaining().length;

			if (app.todos.length) {
				this.$main.show();
				this.$footer.show();

				this.$footer.html(this.statsTemplate({
					completed: completed,
					remaining: remaining
				}));

				this.$('.filters li a')
					.removeClass('selected')
					.filter('[href="#/' + (app.TodoFilter || '') + '"]')
					.addClass('selected');
			} else {
				this.$main.hide();
				this.$footer.hide();
			}

			this.allCheckbox.checked = !remaining;
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2493,2587],"range":[2477,2587],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":2,"label":"backbone"}');
			var view = new app.TodoView({ model: todo });
			this.$list.append(view.render().el);
		},

		// Add all items in the **Todos** collection at once.
		addAll: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2668,2735],"range":[2656,2735],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":3,"label":"backbone"}');
			this.$list.html('');
			app.todos.each(this.addOne, this);
		},

		filterOne: function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2767,2800],"range":[2751,2800],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":4,"label":"backbone"}');
			todo.trigger('visible');
		},

		filterAll: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2828,2874],"range":[2816,2874],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":5,"label":"backbone"}');
			app.todos.each(this.filterOne, this);
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2956,3071],"range":[2944,3071],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":6,"label":"backbone"}');
			return {
				title: this.$input.val().trim(),
				order: app.todos.nextOrder(),
				completed: false
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3217,3356],"range":[3204,3356],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":7,"label":"backbone"}');
			if (e.which === ENTER_KEY && this.$input.val().trim()) {
				app.todos.create(this.newAttributes());
				this.$input.val('');
			}
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3451,3520],"range":[3439,3520],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":8,"label":"backbone"}');
			_.invoke(app.todos.completed(), 'destroy');
			return false;
		},

		toggleAllComplete: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3556,3700],"range":[3544,3700],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":10,"label":"backbone"}');
			var completed = this.allCheckbox.checked;

			app.todos.each(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3638,3694],"range":[3622,3694],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/app-view.js","index":9,"label":"backbone"}');
				todo.save({
					completed: completed
				});
			});
		}
	});
})(jQuery);
