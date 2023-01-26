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


/*global jQuery, Handlebars, Router */
jQuery(function ($) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59,4840],"range":[46,4840],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":24,"label":"jquery"}');
	'use strict';

	Handlebars.registerHelper('eq', function (a, b, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[135,200],"range":[110,200],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":0,"label":"jquery"}');
		return a === b ? options.fn(this) : options.inverse(this);
	});

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	var util = {
		uuid: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[282,603],"range":[270,603],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":1,"label":"jquery"}');
			/*jshint bitwise:false */
			var i, random;
			var uuid = '';

			for (i = 0; i < 32; i++) {
				random = Math.random() * 16 | 0;
				if (i === 8 || i === 12 || i === 16 || i === 20) {
					uuid += '-';
				}
				uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
			}

			return uuid;
		},
		pluralize: function (count, word) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[641,689],"range":[618,689],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":2,"label":"jquery"}');
			return count === 1 ? word : word + 's';
		},
		store: function (namespace, data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[727,942],"range":[700,942],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":3,"label":"jquery"}');
			if (arguments.length > 1) {
				return localStorage.setItem(namespace, JSON.stringify(data));
			} else {
				var store = localStorage.getItem(namespace);
				return (store && JSON.parse(store)) || [];
			}
		}
	};

	var App = {
		init: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[981,1335],"range":[969,1335],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":5,"label":"jquery"}');
			this.todos = util.store('todos-jquery');
			this.todoTemplate = Handlebars.compile($('#todo-template').html());
			this.footerTemplate = Handlebars.compile($('#footer-template').html());
			this.bindEvents();

			new Router({
				'/:filter': function (filter) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1246,1300],"range":[1228,1300],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":4,"label":"jquery"}');
					this.filter = filter;
					this.render();
				}.bind(this)
			}).init('/all');
		},
		bindEvents: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1363,1858],"range":[1351,1858],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":6,"label":"jquery"}');
			$('#new-todo').on('keyup', this.create.bind(this));
			$('#toggle-all').on('change', this.toggleAll.bind(this));
			$('#footer').on('click', '#clear-completed', this.destroyCompleted.bind(this));
			$('#todo-list')
				.on('change', '.toggle', this.toggle.bind(this))
				.on('dblclick', 'label', this.editingMode.bind(this))
				.on('keyup', '.edit', this.editKeyup.bind(this))
				.on('focusout', '.edit', this.update.bind(this))
				.on('click', '.destroy', this.destroy.bind(this));
		},
		render: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1882,2185],"range":[1870,2185],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":7,"label":"jquery"}');
			var todos = this.getFilteredTodos();
			$('#todo-list').html(this.todoTemplate(todos));
			$('#main').toggle(todos.length > 0);
			$('#toggle-all').prop('checked', this.getActiveTodos().length === 0);
			this.renderFooter();
			$('#new-todo').focus();
			util.store('todos-jquery', this.todos);
		},
		renderFooter: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2215,2587],"range":[2203,2587],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":8,"label":"jquery"}');
			var todoCount = this.todos.length;
			var activeTodoCount = this.getActiveTodos().length;
			var template = this.footerTemplate({
				activeTodoCount: activeTodoCount,
				activeTodoWord: util.pluralize(activeTodoCount, 'item'),
				completedTodos: todoCount - activeTodoCount,
				filter: this.filter
			});

			$('#footer').toggle(todoCount > 0).html(template);
		},
		toggleAll: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2615,2767],"range":[2602,2767],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":10,"label":"jquery"}');
			var isChecked = $(e.target).prop('checked');

			this.todos.forEach(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2704,2742],"range":[2688,2742],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":9,"label":"jquery"}');
				todo.completed = isChecked;
			});

			this.render();
		},
		getActiveTodos: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2799,2885],"range":[2787,2885],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":12,"label":"jquery"}');
			return this.todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2845,2879],"range":[2829,2879],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":11,"label":"jquery"}');
				return !todo.completed;
			});
		},
		getCompletedTodos: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2920,3005],"range":[2908,3005],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":14,"label":"jquery"}');
			return this.todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2966,2999],"range":[2950,2999],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":13,"label":"jquery"}');
				return todo.completed;
			});
		},
		getFilteredTodos: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3039,3222],"range":[3027,3222],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":15,"label":"jquery"}');
			if (this.filter === 'active') {
				return this.getActiveTodos();
			}

			if (this.filter === 'completed') {
				return this.getCompletedTodos();
			}

			return this.todos;
		},
		destroyCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3256,3342],"range":[3244,3342],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":16,"label":"jquery"}');
			this.todos = this.getActiveTodos();
			this.filter = 'all';
			this.render();
		},
		// accepts an element from inside the `.item` div and
		// returns the corresponding index in the `todos` array
		getIndexFromEl: function (el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3490,3665],"range":[3476,3665],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":17,"label":"jquery"}');
			var id = $(el).closest('li').data('id');
			var todos = this.todos;
			var i = todos.length;

			while (i--) {
				if (todos[i].id === id) {
					return i;
				}
			}
		},
		create: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3690,3942],"range":[3677,3942],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":18,"label":"jquery"}');
			var $input = $(e.target);
			var val = $input.val().trim();

			if (e.which !== ENTER_KEY || !val) {
				return;
			}

			this.todos.push({
				id: util.uuid(),
				title: val,
				completed: false
			});

			$input.val('');

			this.render();
		},
		toggle: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3967,4087],"range":[3954,4087],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":19,"label":"jquery"}');
			var i = this.getIndexFromEl(e.target);
			this.todos[i].completed = !this.todos[i].completed;
			this.render();
		},
		editingMode: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4117,4236],"range":[4104,4236],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":20,"label":"jquery"}');
			var $input = $(e.target).closest('li').addClass('editing').find('.edit');
			$input.val($input.val()).focus();
		},
		editKeyup: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4264,4410],"range":[4251,4410],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":21,"label":"jquery"}');
			if (e.which === ENTER_KEY) {
				e.target.blur();
			}

			if (e.which === ESCAPE_KEY) {
				$(e.target).data('abort', true).blur();
			}
		},
		update: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4435,4715],"range":[4422,4715],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":22,"label":"jquery"}');
			var el = e.target;
			var $el = $(el);
			var val = $el.val().trim();

			if (!val) {
				this.destroy(e);
				return;
			}

			if ($el.data('abort')) {
				$el.data('abort', false);
			} else {
				this.todos[this.getIndexFromEl(el)].title = val;
			}

			this.render();
		},
		destroy: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4741,4820],"range":[4728,4820],"file":"todomvc/examples.lacunized.instrumented/jquery/js/app.js","index":23,"label":"jquery"}');
			this.todos.splice(this.getIndexFromEl(e.target), 1);
			this.render();
		}
	};

	App.init();
});
