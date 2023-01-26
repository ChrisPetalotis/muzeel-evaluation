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
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
var app = app || {};

(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[138,2183],"range":[126,2183],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":15,"label":"react"}');
	'use strict';

	var Utils = app.Utils;
	// Generic "model" object. You can use whatever
	// framework you want. For this application it
	// may not even be worth separating this logic
	// out, but we do this to demonstrate one way to
	// separate out parts of your application.
	app.TodoModel = function (key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[451,529],"range":[436,529],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":0,"label":"react"}');
		this.key = key;
		this.todos = Utils.store(key);
		this.onChanges = [];
	};

	app.TodoModel.prototype.subscribe = function (onChange) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[589,626],"range":[569,626],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":1,"label":"react"}');
		this.onChanges.push(onChange);
	};

	app.TodoModel.prototype.inform = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[675,767],"range":[663,767],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":3,"label":"react"}');
		Utils.store(this.key, this.todos);
		this.onChanges.forEach(function (cb) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[753,762],"range":[739,762],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":2,"label":"react"}'); cb(); });
	};

	app.TodoModel.prototype.addTodo = function (title) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[822,943],"range":[805,943],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":4,"label":"react"}');
		this.todos = this.todos.concat({
			id: Utils.uuid(),
			title: title,
			completed: false
		});

		this.inform();
	};

	app.TodoModel.prototype.toggleAll = function (checked) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1002,1391],"range":[983,1391],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":6,"label":"react"}');
		// Note: it's usually better to use immutable data structures since they're
		// easier to reason about and React works very well with them. That's why
		// we use map() and filter() everywhere instead of mutating the array or
		// todo items themselves.
		this.todos = this.todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1307,1368],"range":[1291,1368],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":5,"label":"react"}');
			return Utils.extend({}, todo, {completed: checked});
		});

		this.inform();
	};

	app.TodoModel.prototype.toggle = function (todoToToggle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1452,1631],"range":[1428,1631],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":8,"label":"react"}');
		this.todos = this.todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1500,1608],"range":[1484,1608],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":7,"label":"react"}');
			return todo !== todoToToggle ?
				todo :
				Utils.extend({}, todo, {completed: !todo.completed});
		});

		this.inform();
	};

	app.TodoModel.prototype.destroy = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1685,1799],"range":[1669,1799],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":10,"label":"react"}');
		this.todos = this.todos.filter(function (candidate) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1741,1776],"range":[1720,1776],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":9,"label":"react"}');
			return candidate !== todo;
		});

		this.inform();
	};

	app.TodoModel.prototype.save = function (todoToSave, text) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1862,2016],"range":[1834,2016],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":12,"label":"react"}');
		this.todos = this.todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1910,1993],"range":[1894,1993],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":11,"label":"react"}');
			return todo !== todoToSave ? todo : Utils.extend({}, todo, {title: text});
		});

		this.inform();
	};

	app.TodoModel.prototype.clearCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2073,2179],"range":[2061,2179],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":14,"label":"react"}');
		this.todos = this.todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2124,2156],"range":[2108,2156],"file":"todomvc/examples.lacunized.instrumented/react/js/todoModel.js","index":13,"label":"react"}');
			return !todo.completed;
		});

		this.inform();
	};

})();
