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


/*global Backbone, microtemplate, ENTER_KEY, ESCAPE_KEY */
var app = app || {};

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[94,2904],"range":[82,2904],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":9,"label":"exoskeleton"}');
	'use strict';

	// Todo Item View
	// --------------

	// The DOM element for a todo item...
	app.TodoView = Backbone.View.extend({
		//... is a list tag.
		tagName:  'li',

		// Cache the template function for a single item.
		template: microtemplate(document.querySelector('#item-template').innerHTML),

		// The DOM events specific to an item.
		events: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			// Not keypress since it doesn't work with escape.
			'keyup .edit': 'handleKey',
			// Not blur since it doesn't bubble up.
			'focusout .edit': 'close'
		},

		// The TodoView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **Todo** and a **TodoView** in this
		// app, we set a direct reference on the model for convenience.
		initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[968,1141],"range":[956,1141],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":0,"label":"exoskeleton"}');
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(this.model, 'visible', this.toggleVisible);
		},

		// Re-render the titles of the todo item.
		render: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1210,1463],"range":[1198,1463],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":1,"label":"exoskeleton"}');
			this.el.innerHTML = this.template(this.model.toJSON());
			var method = this.model.get('completed') ? 'add' : 'remove';
			this.el.classList[method]('completed');
			this.toggleVisible();
			this.input = this.$('.edit').item(0);
			return this;
		},

		toggleVisible: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1495,1568],"range":[1483,1568],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":2,"label":"exoskeleton"}');
			this.el.classList[this.isHidden() ? 'add' : 'remove']('hidden');
		},

		isHidden: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1595,1793],"range":[1583,1793],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":3,"label":"exoskeleton"}');
			var isCompleted = this.model.get('completed');
			return (// hidden cases only
				(!isCompleted && app.TodoFilter === 'completed') ||
				(isCompleted && app.TodoFilter === 'active')
			);
		},

		// Toggle the `"completed"` state of the model.
		toggleCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1877,1906],"range":[1865,1906],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":4,"label":"exoskeleton"}');
			this.model.toggle();
		},

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2002,2149],"range":[1990,2149],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":5,"label":"exoskeleton"}');
			this.el.classList.add('editing');
			this.input.focus();
			// Set the selection to the last char.
			this.input.value = this.input.value;
		},

		// Close the `"editing"` mode, saving changes to the todo.
		close: function (e, discard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2244,2490],"range":[2222,2490],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":6,"label":"exoskeleton"}');
			var value = discard ?
				this.model.get('title') : this.input.value.trim();
			this.input.value = value;

			if (value) {
				this.model.save({ title: value });
			} else {
				this.clear();
			}

			this.el.classList.remove('editing');
		},

		// If you hit `enter`, we're through editing the item.
		// If you hit `escape`, we're saving it with old value.
		handleKey: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2634,2762],"range":[2621,2762],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":7,"label":"exoskeleton"}');
			if (e.which === ENTER_KEY) {
				this.close();
			} else if (e.which === ESCAPE_KEY) {
				this.close(null, true);
			}
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2867,2897],"range":[2855,2897],"file":"todomvc/examples.lacunized.instrumented/exoskeleton/js/views/todo-view.js","index":8,"label":"exoskeleton"}');
			this.model.destroy();
		}
	});
})();
