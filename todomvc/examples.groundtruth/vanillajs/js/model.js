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


(function (window) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[19,3149],"range":[1,3149],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":11,"label":"vanillajs"}');
	'use strict';

	/**
	 * Creates a new Model instance and hooks up the storage.
	 *
	 * @constructor
	 * @param {object} storage A reference to the client side storage class
	 */
	function Model(storage) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[225,255],"range":[201,255],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":0,"label":"vanillajs"}');
		this.storage = storage;
	}

	/**
	 * Creates a new todo model
	 *
	 * @param {string} [title] The title of the task
	 * @param {function} [callback] The callback to fire after the model is created
	 */
	Model.prototype.create = function (title, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[484,661],"range":[457,661],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":2,"label":"vanillajs"}');
		title = title || '';
		callback = callback || function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[546,548],"range":[534,548],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":1,"label":"vanillajs"}');};

		var newItem = {
			title: title.trim(),
			completed: false
		};

		this.storage.save(newItem, callback);
	};

	/**
	 * Finds and returns a model in storage. If no query is given it'll simply
	 * return everything. If you pass in a string or number it'll look that up as
	 * the ID of the model to find. Lastly, you can pass it an object to match
	 * against.
	 *
	 * @param {string|number|object} [query] A query to match models against
	 * @param {function} [callback] The callback to fire after the model is found
	 *
	 * @example
	 * model.read(1, func); // Will find the model with an ID of 1
	 * model.read('1'); // Same as above
	 * //Below will find a model with foo equalling bar and hello equalling world.
	 * model.read({ foo: 'bar', hello: 'world' });
	 */
	Model.prototype.read = function (query, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1373,1746],"range":[1346,1746],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":4,"label":"vanillajs"}');
		var queryType = typeof query;
		callback = callback || function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1444,1446],"range":[1432,1446],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":3,"label":"vanillajs"}');};

		if (queryType === 'function') {
			callback = query;
			return this.storage.findAll(callback);
		} else if (queryType === 'string' || queryType === 'number') {
			query = parseInt(query, 10);
			this.storage.find({ id: query }, callback);
		} else {
			this.storage.find(query, callback);
		}
	};

	/**
	 * Updates a model by giving it an ID, data to update, and a callback to fire when
	 * the update is complete.
	 *
	 * @param {number} id The id of the model to update
	 * @param {object} data The properties to update and their new value
	 * @param {function} callback The callback to fire when the update is complete.
	 */
	Model.prototype.update = function (id, data, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2135,2180],"range":[2105,2180],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":5,"label":"vanillajs"}');
		this.storage.save(data, callback, id);
	};

	/**
	 * Removes a model from storage
	 *
	 * @param {number} id The ID of the model to remove
	 * @param {function} callback The callback to fire when the removal is complete.
	 */
	Model.prototype.remove = function (id, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2415,2456],"range":[2391,2456],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":6,"label":"vanillajs"}');
		this.storage.remove(id, callback);
	};

	/**
	 * WARNING: Will remove ALL data from storage.
	 *
	 * @param {function} callback The callback to fire when the storage is wiped.
	 */
	Model.prototype.removeAll = function (callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2649,2684],"range":[2629,2684],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":7,"label":"vanillajs"}');
		this.storage.drop(callback);
	};

	/**
	 * Returns a count of all todos
	 */
	Model.prototype.getCount = function (callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2778,3065],"range":[2758,3065],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":10,"label":"vanillajs"}');
		var todos = {
			active: 0,
			completed: 0,
			total: 0
		};

		this.storage.findAll(function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2884,3060],"range":[2868,3060],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":9,"label":"vanillajs"}');
			data.forEach(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2918,3034],"range":[2902,3034],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/model.js","index":8,"label":"vanillajs"}');
				if (todo.completed) {
					todos.completed++;
				} else {
					todos.active++;
				}

				todos.total++;
			});
			callback(todos);
		});
	};

	// Export to window
	window.app = window.app || {};
	window.app.Model = Model;
})(window);
