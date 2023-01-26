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


(function (window) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[19,6785],"range":[1,6785],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":38,"label":"vanillajs"}');
	'use strict';

	/**
	 * Takes a model and view and acts as the controller between them
	 *
	 * @constructor
	 * @param {object} model The model instance
	 * @param {object} view The view instance
	 */
	function Controller(model, view) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[257,1048],"range":[224,1048],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":8,"label":"vanillajs"}');
		var self = this;
		self.model = model;
		self.view = view;

		self.view.bind('newTodo', function (title) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[366,395],"range":[349,395],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":0,"label":"vanillajs"}');
			self.addItem(title);
		});

		self.view.bind('itemEdit', function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[444,476],"range":[428,476],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":1,"label":"vanillajs"}');
			self.editItem(item.id);
		});

		self.view.bind('itemEditDone', function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[529,577],"range":[513,577],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":2,"label":"vanillajs"}');
			self.editItemSave(item.id, item.title);
		});

		self.view.bind('itemEditCancel', function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[632,670],"range":[616,670],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":3,"label":"vanillajs"}');
			self.editItemCancel(item.id);
		});

		self.view.bind('itemRemove', function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[721,755],"range":[705,755],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":4,"label":"vanillajs"}');
			self.removeItem(item.id);
		});

		self.view.bind('itemToggle', function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[806,860],"range":[790,860],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":5,"label":"vanillajs"}');
			self.toggleComplete(item.id, item.completed);
		});

		self.view.bind('removeCompleted', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[912,949],"range":[900,949],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":6,"label":"vanillajs"}');
			self.removeCompletedItems();
		});

		self.view.bind('toggleAll', function (status) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1001,1043],"range":[983,1043],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":7,"label":"vanillajs"}');
			self.toggleAll(status.completed);
		});
	}

	/**
	 * Loads and initialises the view
	 *
	 * @param {string} '' | 'active' | 'completed'
	 */
	Controller.prototype.setView = function (locationHash) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1203,1308],"range":[1179,1308],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":9,"label":"vanillajs"}');
		var route = locationHash.split('/')[1];
		var page = route || '';
		this._updateFilterState(page);
	};

	/**
	 * An event to fire on load. Will get all items and display them in the
	 * todo-list
	 */
	Controller.prototype.showAll = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1452,1559],"range":[1440,1559],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":11,"label":"vanillajs"}');
		var self = this;
		self.model.read(function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1507,1554],"range":[1491,1554],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":10,"label":"vanillajs"}');
			self.view.render('showEntries', data);
		});
	};

	/**
	 * Renders all active tasks
	 */
	Controller.prototype.showActive = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1648,1777],"range":[1636,1777],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":13,"label":"vanillajs"}');
		var self = this;
		self.model.read({ completed: false }, function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1725,1772],"range":[1709,1772],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":12,"label":"vanillajs"}');
			self.view.render('showEntries', data);
		});
	};

	/**
	 * Renders all completed tasks
	 */
	Controller.prototype.showCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1872,2000],"range":[1860,2000],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":15,"label":"vanillajs"}');
		var self = this;
		self.model.read({ completed: true }, function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1948,1995],"range":[1932,1995],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":14,"label":"vanillajs"}');
			self.view.render('showEntries', data);
		});
	};

	/**
	 * An event to fire whenever you want to add an item. Simply pass in the event
	 * object and it'll handle the DOM insertion and saving of the new item.
	 */
	Controller.prototype.addItem = function (title) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2216,2392],"range":[2199,2392],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":17,"label":"vanillajs"}');
		var self = this;

		if (title.trim() === '') {
			return;
		}

		self.model.create(title, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2322,2387],"range":[2310,2387],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":16,"label":"vanillajs"}');
			self.view.render('clearNewTodo');
			self._filter(true);
		});
	};

	/*
	 * Triggers the item editing mode.
	 */
	Controller.prototype.editItem = function (id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2487,2621],"range":[2473,2621],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":19,"label":"vanillajs"}');
		var self = this;
		self.model.read(id, function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2546,2616],"range":[2530,2616],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":18,"label":"vanillajs"}');
			self.view.render('editItem', {id: id, title: data[0].title});
		});
	};

	/*
	 * Finishes the item editing mode successfully.
	 */
	Controller.prototype.editItemSave = function (id, title) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2740,2979],"range":[2719,2979],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":21,"label":"vanillajs"}');
		var self = this;
		title = title.trim();

		if (title.length !== 0) {
			self.model.update(id, {title: title}, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2867,2935],"range":[2855,2935],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":20,"label":"vanillajs"}');
				self.view.render('editItemDone', {id: id, title: title});
			});
		} else {
			self.removeItem(id);
		}
	};

	/*
	 * Cancels the item editing mode.
	 */
	Controller.prototype.editItemCancel = function (id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3079,3217],"range":[3065,3217],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":23,"label":"vanillajs"}');
		var self = this;
		self.model.read(id, function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3138,3212],"range":[3122,3212],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":22,"label":"vanillajs"}');
			self.view.render('editItemDone', {id: id, title: data[0].title});
		});
	};

	/**
	 * By giving it an ID it'll find the DOM element matching that ID,
	 * remove it from the DOM and also remove it from storage.
	 *
	 * @param {number} id The ID of the item to remove from the DOM and
	 * storage
	 */
	Controller.prototype.removeItem = function (id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3492,3617],"range":[3478,3617],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":25,"label":"vanillajs"}');
		var self = this;
		self.model.remove(id, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3549,3593],"range":[3537,3593],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":24,"label":"vanillajs"}');
			self.view.render('removeItem', id);
		});

		self._filter();
	};

	/**
	 * Will remove all completed items from the DOM and storage.
	 */
	Controller.prototype.removeCompletedItems = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3749,3925],"range":[3737,3925],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":28,"label":"vanillajs"}');
		var self = this;
		self.model.read({ completed: true }, function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3825,3901],"range":[3809,3901],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":27,"label":"vanillajs"}');
			data.forEach(function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3859,3895],"range":[3843,3895],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":26,"label":"vanillajs"}');
				self.removeItem(item.id);
			});
		});

		self._filter();
	};

	/**
	 * Give it an ID of a model and a checkbox and it will update the item
	 * in storage based on the checkbox's state.
	 *
	 * @param {number} id The ID of the element to complete or uncomplete
	 * @param {object} checkbox The checkbox to check the state of complete
	 *                          or not
	 * @param {boolean|undefined} silent Prevent re-filtering the todo items
	 */
	Controller.prototype.toggleComplete = function (id, completed, silent) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4386,4605],"range":[4353,4605],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":30,"label":"vanillajs"}');
		var self = this;
		self.model.update(id, { completed: completed }, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4469,4559],"range":[4457,4559],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":29,"label":"vanillajs"}');
			self.view.render('elementComplete', {
				id: id,
				completed: completed
			});
		});

		if (!silent) {
			self._filter();
		}
	};

	/**
	 * Will toggle ALL checkboxes' on/off state and completeness of models.
	 * Just pass in the event object.
	 */
	Controller.prototype.toggleAll = function (completed) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4781,4984],"range":[4760,4984],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":33,"label":"vanillajs"}');
		var self = this;
		self.model.read({ completed: !completed }, function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4863,4960],"range":[4847,4960],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":32,"label":"vanillajs"}');
			data.forEach(function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4897,4954],"range":[4881,4954],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":31,"label":"vanillajs"}');
				self.toggleComplete(item.id, completed, true);
			});
		});

		self._filter();
	};

	/**
	 * Updates the pieces of the page which change depending on the remaining
	 * number of todos.
	 */
	Controller.prototype._updateCount = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5142,5541],"range":[5130,5541],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":35,"label":"vanillajs"}');
		var self = this;
		self.model.getCount(function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5202,5536],"range":[5185,5536],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":34,"label":"vanillajs"}');
			self.view.render('updateElementCount', todos.active);
			self.view.render('clearCompletedButton', {
				completed: todos.completed,
				visible: todos.completed > 0
			});

			self.view.render('toggleAll', {checked: todos.completed === todos.total});
			self.view.render('contentBlockVisibility', {visible: todos.total > 0});
		});
	};

	/**
	 * Re-filters the todo items, based on the active route.
	 * @param {boolean|undefined} force  forces a re-painting of todo items.
	 */
	Controller.prototype._filter = function (force) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5735,6264],"range":[5718,6264],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":36,"label":"vanillajs"}');
		var activeRoute = this._activeRoute.charAt(0).toUpperCase() + this._activeRoute.substr(1);

		// Update the elements on the page, which change with each completed todo
		this._updateCount();

		// If the last active route isn't "All", or we're switching routes, we
		// re-create the todo item elements, calling:
		//   this.show[All|Active|Completed]();
		if (force || this._lastActiveRoute !== 'All' || this._lastActiveRoute !== activeRoute) {
			this['show' + activeRoute]();
		}

		this._lastActiveRoute = activeRoute;
	};

	/**
	 * Simply updates the filter nav's selected states
	 */
	Controller.prototype._updateFilterState = function (currentPage) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6395,6691],"range":[6372,6691],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/controller.js","index":37,"label":"vanillajs"}');
		// Store a reference to the active route, allowing us to re-filter todo
		// items as they are marked complete or incomplete.
		this._activeRoute = currentPage;

		if (currentPage === '') {
			this._activeRoute = 'All';
		}

		this._filter();

		this.view.render('setFilter', currentPage);
	};

	// Export to window
	window.app = window.app || {};
	window.app.Controller = Controller;
})(window);
