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


/*jshint quotmark:false */
/*jshint newcap:false */


var app = app || {};

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[89,2935],"range":[77,2935],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":14,"label":"react-alt"}');
	'use strict';

	var Utils = app.Utils;
	var LOCALSTORAGE_NAMESPACE = 'react-alt-todo';

	var TodoStore = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[209,770],"range":[197,770],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":0,"label":"react-alt"}');
		this.state = {
			todos: Utils.store(LOCALSTORAGE_NAMESPACE + '.todos'),
			nowShowing: Utils.store(LOCALSTORAGE_NAMESPACE + '.nowShowing') || app.ALL_TODOS,
			editing: Utils.store(LOCALSTORAGE_NAMESPACE + '.editing') || null
		};

		this.bindListeners({
			addTodo: app.todoActions.addTodo,
			toggleAll: app.todoActions.toggleAll,
			toggle: app.todoActions.toggle,
			destroy: app.todoActions.destroy,
			save: app.todoActions.save,
			clearCompleted: app.todoActions.clearCompleted,
			edit: app.todoActions.edit,
			show: app.todoActions.show
		});
	};

	TodoStore.prototype.addTodo = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[820,957],"range":[804,957],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":1,"label":"react-alt"}');
		this.setState({
			todos: this.state.todos.concat(todo)
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.state.todos);
	};

	TodoStore.prototype.toggleAll = function (checked) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1012,1255],"range":[993,1255],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":3,"label":"react-alt"}');
		var updatedTodos = this.state.todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1072,1133],"range":[1056,1133],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":2,"label":"react-alt"}');
			return Utils.extend({}, todo, {completed: checked});
		});

		this.setState({
			todos: updatedTodos
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.state.todos);
	};

	TodoStore.prototype.toggle = function (todoToToggle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1312,1602],"range":[1288,1602],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":5,"label":"react-alt"}');
		var updatedTodos = this.state.todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1372,1480],"range":[1356,1480],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":4,"label":"react-alt"}');
			return todo !== todoToToggle ?
				todo :
				Utils.extend({}, todo, {completed: !todo.completed});
		});

		this.setState({
			todos: updatedTodos
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.state.todos);
	};

	TodoStore.prototype.destroy = function (todoToDestroy) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1661,1885],"range":[1636,1885],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":7,"label":"react-alt"}');
		var updatedTodos = this.state.todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1724,1763],"range":[1708,1763],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":6,"label":"react-alt"}');
			return todo !== todoToDestroy;
		});

		this.setState({
			todos: updatedTodos
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.state.todos);
	};

	TodoStore.prototype.save = function (command) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1935,2238],"range":[1916,2238],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":9,"label":"react-alt"}');
		var updatedTodos = this.state.todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1995,2116],"range":[1979,2116],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":8,"label":"react-alt"}');
			return todo !== command.todoToSave ?
				todo :
				Utils.extend({}, command.todoToSave, {title: command.text});
		});

		this.setState({
			todos: updatedTodos
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.state.todos);
	};

	TodoStore.prototype.clearCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2291,2508],"range":[2279,2508],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":11,"label":"react-alt"}');
		var updatedTodos = this.state.todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2354,2386],"range":[2338,2386],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":10,"label":"react-alt"}');
			return !todo.completed;
		});

		this.setState({
			todos: updatedTodos
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.todos', this.state.todos);
	};

	TodoStore.prototype.edit = function (id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2553,2663],"range":[2539,2663],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":12,"label":"react-alt"}');
		this.setState({
			editing: id
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.editing', this.editing);
	};

	TodoStore.prototype.show = function (nowShowing) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2716,2843],"range":[2694,2843],"file":"todomvc/examples.lacunized.instrumented/react-alt/js/stores/todoStore.js","index":13,"label":"react-alt"}');
		this.setState({
			nowShowing: nowShowing
		});

		Utils.store(LOCALSTORAGE_NAMESPACE + '.nowShowing', this.nowShowing);
	};

	TodoStore.displayName = 'TodoStore';

	app.todoStore = app.alt.createStore(TodoStore);
})();
