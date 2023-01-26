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


/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function ($) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88,3520],"range":[75,3520],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":10,"label":"backbone"}');
	'use strict';

	// Todo Item View
	// --------------

	// The DOM element for a todo item...
	app.TodoView = Backbone.View.extend({
		//... is a list tag.
		tagName:  'li',

		// Cache the template function for a single item.
		template: _.template($('#item-template').html()),

		// The DOM events specific to an item.
		events: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			'keypress .edit': 'updateOnEnter',
			'keydown .edit': 'revertOnEscape',
			'blur .edit': 'close'
		},

		// The TodoView listens for changes to its model, re-rendering. Since
		// there's a one-to-one correspondence between a **Todo** and a
		// **TodoView** in this app, we set a direct reference on the model for
		// convenience.
		initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[884,1057],"range":[872,1057],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":0,"label":"backbone"}');
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(this.model, 'visible', this.toggleVisible);
		},

		// Re-render the titles of the todo item.
		render: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1126,1824],"range":[1114,1824],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":1,"label":"backbone"}');
			// Backbone LocalStorage is adding `id` attribute instantly after
			// creating a model.  This causes our TodoView to render twice. Once
			// after creating a model and once on `id` change.  We want to
			// filter out the second redundant render, which is caused by this
			// `id` change.  It's known Backbone LocalStorage bug, therefore
			// we've to create a workaround.
			// https://github.com/tastejs/todomvc/issues/469
			if (this.model.changed.id !== undefined) {
				return;
			}

			this.$el.html(this.template(this.model.toJSON()));
			this.$el.toggleClass('completed', this.model.get('completed'));
			this.toggleVisible();
			this.$input = this.$('.edit');
			return this;
		},

		toggleVisible: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1856,1913],"range":[1844,1913],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":2,"label":"backbone"}');
			this.$el.toggleClass('hidden', this.isHidden());
		},

		isHidden: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1940,2055],"range":[1928,2055],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":3,"label":"backbone"}');
			return this.model.get('completed') ?
				app.TodoFilter === 'active' :
				app.TodoFilter === 'completed';
		},

		// Toggle the `"completed"` state of the model.
		toggleCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2139,2168],"range":[2127,2168],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":4,"label":"backbone"}');
			this.model.toggle();
		},

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2264,2326],"range":[2252,2326],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":5,"label":"backbone"}');
			this.$el.addClass('editing');
			this.$input.focus();
		},

		// Close the `"editing"` mode, saving changes to the todo.
		close: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2411,2909],"range":[2399,2909],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":6,"label":"backbone"}');
			var value = this.$input.val();
			var trimmedValue = value.trim();

			// We don't want to handle blur events from an item that is no
			// longer being edited. Relying on the CSS class here has the
			// benefit of us not having to maintain state in the DOM and the
			// JavaScript logic.
			if (!this.$el.hasClass('editing')) {
				return;
			}

			if (trimmedValue) {
				this.model.save({ title: trimmedValue });
			} else {
				this.clear();
			}

			this.$el.removeClass('editing');
		},

		// If you hit `enter`, we're through editing the item.
		updateOnEnter: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2999,3059],"range":[2986,3059],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":7,"label":"backbone"}');
			if (e.which === ENTER_KEY) {
				this.close();
			}
		},

		// If you're pressing `escape` we revert your change by simply leaving
		// the `editing` state.
		revertOnEscape: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3192,3378],"range":[3179,3378],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":8,"label":"backbone"}');
			if (e.which === ESC_KEY) {
				this.$el.removeClass('editing');
				// Also reset the hidden input back to the original value.
				this.$input.val(this.model.get('title'));
			}
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3483,3513],"range":[3471,3513],"file":"todomvc/examples.lacunized.instrumented/backbone/js/views/todo-view.js","index":9,"label":"backbone"}');
			this.model.destroy();
		}
	});
})(jQuery);
