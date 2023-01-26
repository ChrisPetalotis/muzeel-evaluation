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


/*jshint eqeqeq:false */
(function (window) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[44,3701],"range":[26,3701],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":10,"label":"vanillajs"}');
	'use strict';

	/**
	 * Creates a new client side storage object and will create an empty
	 * collection if no collection already exists.
	 *
	 * @param {string} name The name of our DB we want to use
	 * @param {function} callback Our fake DB uses callbacks because in
	 * real life you probably would be making AJAX calls
	 */
	function Store(name, callback) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[408,650],"range":[377,650],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":1,"label":"vanillajs"}');
		callback = callback || function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[447,449],"range":[435,449],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":0,"label":"vanillajs"}');};

		this._dbName = name;

		if (!localStorage[name]) {
			var data = {
				todos: []
			};

			localStorage[name] = JSON.stringify(data);
		}

		callback.call(this, JSON.parse(localStorage[name]));
	}

	/**
	 * Finds items based on a query given as a JS object
	 *
	 * @param {object} query The query to match against (i.e. {foo: 'bar'})
	 * @param {function} callback	 The callback to fire when the query has
	 * completed running
	 *
	 * @example
	 * db.find({foo: 'bar', hello: 'world'}, function (data) {
	 *	 // data will return any items that have foo: bar and
	 *	 // hello: world in their properties
	 * });
	 */
	Store.prototype.find = function (query, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1122,1386],"range":[1095,1386],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":3,"label":"vanillajs"}');
		if (!callback) {
			return;
		}

		var todos = JSON.parse(localStorage[this._dbName]).todos;

		callback.call(this, todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1271,1380],"range":[1255,1380],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":2,"label":"vanillajs"}');
			for (var q in query) {
				if (query[q] !== todo[q]) {
					return false;
				}
			}
			return true;
		}));
	};

	/**
	 * Will retrieve all data from the collection
	 *
	 * @param {function} callback The callback to fire upon retrieving data
	 */
	Store.prototype.findAll = function (callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1570,1684],"range":[1550,1684],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":5,"label":"vanillajs"}');
		callback = callback || function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1609,1611],"range":[1597,1611],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":4,"label":"vanillajs"}');};
		callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
	};

	/**
	 * Will save the given data to the DB. If no item exists it will create a new
	 * item, otherwise it'll simply update an existing item's properties
	 *
	 * @param {object} updateData The data to save back into the DB
	 * @param {function} callback The callback to fire after saving
	 * @param {number} id An optional param to enter an ID of an item to update
	 */
	Store.prototype.save = function (updateData, callback, id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2117,2789],"range":[2081,2789],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":7,"label":"vanillajs"}');
		var data = JSON.parse(localStorage[this._dbName]);
		var todos = data.todos;

		callback = callback || function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2236,2238],"range":[2224,2238],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":6,"label":"vanillajs"}');};

		// If an ID was actually given, find the item and update each property
		if (id) {
			for (var i = 0; i < todos.length; i++) {
				if (todos[i].id === id) {
					for (var key in updateData) {
						todos[i][key] = updateData[key];
					}
					break;
				}
			}

			localStorage[this._dbName] = JSON.stringify(data);
			callback.call(this, todos);
		} else {
			// Generate an ID
			updateData.id = new Date().getTime();

			todos.push(updateData);
			localStorage[this._dbName] = JSON.stringify(data);
			callback.call(this, [updateData]);
		}
	};

	/**
	 * Will remove an item from the Store based on its ID
	 *
	 * @param {number} id The ID of the item you want to remove
	 * @param {function} callback The callback to fire after saving
	 */
	Store.prototype.remove = function (id, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3037,3320],"range":[3013,3320],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":8,"label":"vanillajs"}');
		var data = JSON.parse(localStorage[this._dbName]);
		var todos = data.todos;

		for (var i = 0; i < todos.length; i++) {
			if (todos[i].id == id) {
				todos.splice(i, 1);
				break;
			}
		}

		localStorage[this._dbName] = JSON.stringify(data);
		callback.call(this, todos);
	};

	/**
	 * Will drop all storage and start fresh
	 *
	 * @param {function} callback The callback to fire after dropping the data
	 */
	Store.prototype.drop = function (callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3499,3617],"range":[3479,3617],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/store.js","index":9,"label":"vanillajs"}');
		var data = {todos: []};
		localStorage[this._dbName] = JSON.stringify(data);
		callback.call(this, data.todos);
	};

	// Export to window
	window.app = window.app || {};
	window.app.Store = Store;
})(window);
