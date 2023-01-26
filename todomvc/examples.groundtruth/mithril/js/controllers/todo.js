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


'use strict';
/*global m */

var app = app || {};
app.controller = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[79,2244],"range":[67,2244],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":13,"label":"mithril"}');

	// Todo collection
	this.list = app.storage.get();

	// Update with props
	this.list = this.list.map(function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[200,233],"range":[184,233],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":0,"label":"mithril"}');
		return new app.Todo(item);
	});

	// Temp title placeholder
	this.title = m.prop('');

	// Todo list filter
	this.filter = m.prop(m.route.param('filter') || '');

	this.add = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391,547],"range":[379,547],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":1,"label":"mithril"}');
		var title = this.title().trim();
		if (title) {
			this.list.push(new app.Todo({title: title}));
			app.storage.put(this.list);
		}
		this.title('');
	};

	this.isVisible = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[584,746],"range":[568,746],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":2,"label":"mithril"}');
		switch (this.filter()) {
			case 'active':
				return !todo.completed();
			case 'completed':
				return todo.completed();
			default:
				return true;
		}
	};

	this.complete = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[782,908],"range":[766,908],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":3,"label":"mithril"}');
		if (todo.completed()) {
			todo.completed(false);
		} else {
			todo.completed(true);
		}
		app.storage.put(this.list);
	};

	this.edit = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[940,1003],"range":[924,1003],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":4,"label":"mithril"}');
		todo.previousTitle = todo.title();
		todo.editing(true);
	};

	this.doneEditing = function (todo, index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1049,1240],"range":[1026,1240],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":5,"label":"mithril"}');
		if (!todo.editing()) {
			return;
		}

		todo.editing(false);
		todo.title(todo.title().trim());
		if (!todo.title()) {
			this.list.splice(index, 1);
		}
		app.storage.put(this.list);
	};

	this.cancelEditing = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1281,1342],"range":[1265,1342],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":6,"label":"mithril"}');
		todo.title(todo.previousTitle);
		todo.editing(false);
	};

	this.clearTitle = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1376,1398],"range":[1364,1398],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":7,"label":"mithril"}');
		this.title('');
	};

	this.remove = function (key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1431,1493],"range":[1416,1493],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":8,"label":"mithril"}');
		this.list.splice(key, 1);
		app.storage.put(this.list);
	};

	this.clearCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1531,1689],"range":[1519,1689],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":9,"label":"mithril"}');
		for (var i = this.list.length - 1; i >= 0; i--) {
			if (this.list[i].completed()) {
				this.list.splice(i, 1);
			}
		}
		app.storage.put(this.list);
	};

	this.amountCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1728,1872],"range":[1716,1872],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":10,"label":"mithril"}');
		var amount = 0;
		for (var i = 0; i < this.list.length; i++) {
			if (this.list[i].completed()) {
				amount++;
			}
		}
		return amount;
	};

	this.allCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1908,2037],"range":[1896,2037],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":11,"label":"mithril"}');
		for (var i = 0; i < this.list.length; i++) {
			if (!this.list[i].completed()) {
				return false;
			}
		}
		return true;
	};

	this.completeAll = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2072,2241],"range":[2060,2241],"file":"todomvc/examples.lacunized.instrumented/mithril/js/controllers/todo.js","index":12,"label":"mithril"}');
		var allCompleted = this.allCompleted();
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].completed(!allCompleted);
		}
		app.storage.put(this.list);
	};
};
