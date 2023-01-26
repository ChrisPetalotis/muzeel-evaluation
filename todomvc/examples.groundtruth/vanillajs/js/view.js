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


/*global qs, qsa, $on, $parent, $delegate */

(function (window) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[65,5669],"range":[47,5669],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":33,"label":"vanillajs"}');
	'use strict';

	/**
	     * View that abstracts away the browser's DOM completely.
	     * It has two simple entry points:
	     *
	     *   - bind(eventName, handler)
	     *     Takes a todo application event and registers the handler
	     *   - render(command, parameterObject)
	     *     Renders the given command with the options
	     */
	function View(template) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[439,785],"range":[415,785],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":0,"label":"vanillajs"}');
		this.template = template;

		this.ENTER_KEY = 13;
		this.ESCAPE_KEY = 27;

		this.$todoList = qs('.todo-list');
		this.$todoItemCounter = qs('.todo-count');
		this.$clearCompleted = qs('.clear-completed');
		this.$main = qs('.main');
		this.$footer = qs('.footer');
		this.$toggleAll = qs('.toggle-all');
		this.$newTodo = qs('.new-todo');
	}

	View.prototype._removeItem = function (id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[831,934],"range":[817,934],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":1,"label":"vanillajs"}');
		var elem = qs('[data-id="' + id + '"]');

		if (elem) {
			this.$todoList.removeChild(elem);
		}
	};

	View.prototype._clearCompletedButton = function (completedCount, visible) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1012,1170],"range":[977,1170],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":2,"label":"vanillajs"}');
		this.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount);
		this.$clearCompleted.style.display = visible ? 'block' : 'none';
	};

	View.prototype._setFilter = function (currentPage) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1225,1344],"range":[1202,1344],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":3,"label":"vanillajs"}');
		qs('.filters .selected').className = '';
		qs('.filters [href="#/' + currentPage + '"]').className = 'selected';
	};

	View.prototype._elementComplete = function (id, completed) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1407,1668],"range":[1382,1668],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":4,"label":"vanillajs"}');
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		listItem.className = completed ? 'completed' : '';

		// In case it was toggled from an event and not by clicking the checkbox
		qs('input', listItem).checked = completed;
	};

	View.prototype._editItem = function (id, title) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1720,2011],"range":[1699,2011],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":5,"label":"vanillajs"}');
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		listItem.className = listItem.className + ' editing';

		var input = document.createElement('input');
		input.className = 'edit';

		listItem.appendChild(input);
		input.focus();
		input.value = title;
	};

	View.prototype._editItemDone = function (id, title) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2067,2383],"range":[2046,2383],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":7,"label":"vanillajs"}');
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		var input = qs('input.edit', listItem);
		listItem.removeChild(input);

		listItem.className = listItem.className.replace('editing', '');

		qsa('label', listItem).forEach(function (label) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2343,2378],"range":[2326,2378],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":6,"label":"vanillajs"}');
			label.textContent = title;
		});
	};

	View.prototype.render = function (viewCmd, parameter) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2441,3560],"range":[2411,3560],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":19,"label":"vanillajs"}');
		var self = this;
		var viewCommands = {
			showEntries: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2513,2581],"range":[2501,2581],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":8,"label":"vanillajs"}');
				self.$todoList.innerHTML = self.template.show(parameter);
			},
			removeItem: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2610,2649],"range":[2598,2649],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":9,"label":"vanillajs"}');
				self._removeItem(parameter);
			},
			updateElementCount: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2686,2768],"range":[2674,2768],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":10,"label":"vanillajs"}');
				self.$todoItemCounter.innerHTML = self.template.itemCounter(parameter);
			},
			clearCompletedButton: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2807,2885],"range":[2795,2885],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":11,"label":"vanillajs"}');
				self._clearCompletedButton(parameter.completed, parameter.visible);
			},
			contentBlockVisibility: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2926,3030],"range":[2914,3030],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":12,"label":"vanillajs"}');
				self.$main.style.display = self.$footer.style.display = parameter.visible ? 'block' : 'none';
			},
			toggleAll: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3058,3113],"range":[3046,3113],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":13,"label":"vanillajs"}');
				self.$toggleAll.checked = parameter.checked;
			},
			setFilter: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3141,3179],"range":[3129,3179],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":14,"label":"vanillajs"}');
				self._setFilter(parameter);
			},
			clearNewTodo: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3210,3246],"range":[3198,3246],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":15,"label":"vanillajs"}');
				self.$newTodo.value = '';
			},
			elementComplete: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3280,3348],"range":[3268,3348],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":16,"label":"vanillajs"}');
				self._elementComplete(parameter.id, parameter.completed);
			},
			editItem: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3375,3432],"range":[3363,3432],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":17,"label":"vanillajs"}');
				self._editItem(parameter.id, parameter.title);
			},
			editItemDone: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3463,3524],"range":[3451,3524],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":18,"label":"vanillajs"}');
				self._editItemDone(parameter.id, parameter.title);
			}
		};

		viewCommands[viewCmd]();
	};

	View.prototype._itemId = function (element) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3608,3685],"range":[3589,3685],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":20,"label":"vanillajs"}');
		var li = $parent(element, 'li');
		return parseInt(li.dataset.id, 10);
	};

	View.prototype._bindItemEditDone = function (handler) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3743,4190],"range":[3724,4190],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":23,"label":"vanillajs"}');
		var self = this;
		$delegate(self.$todoList, 'li .edit', 'blur', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3824,3943],"range":[3812,3943],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":21,"label":"vanillajs"}');
			if (!this.dataset.iscanceled) {
				handler({
					id: self._itemId(this),
					title: this.value
				});
			}
		});

		$delegate(self.$todoList, 'li .edit', 'keypress', function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4016,4185],"range":[3999,4185],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":22,"label":"vanillajs"}');
			if (event.keyCode === self.ENTER_KEY) {
				// Remove the cursor from the input when you hit enter just like if it
				// were a real form
				this.blur();
			}
		});
	};

	View.prototype._bindItemEditCancel = function (handler) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4250,4489],"range":[4231,4489],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":25,"label":"vanillajs"}');
		var self = this;
		$delegate(self.$todoList, 'li .edit', 'keyup', function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4337,4484],"range":[4320,4484],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":24,"label":"vanillajs"}');
			if (event.keyCode === self.ESCAPE_KEY) {
				this.dataset.iscanceled = true;
				this.blur();

				handler({id: self._itemId(this)});
			}
		});
	};

	View.prototype.bind = function (event, handler) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4541,5587],"range":[4515,5587],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":32,"label":"vanillajs"}');
		var self = this;
		if (event === 'newTodo') {
			$on(self.$newTodo, 'change', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4635,4675],"range":[4623,4675],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":26,"label":"vanillajs"}');
				handler(self.$newTodo.value);
			});

		} else if (event === 'removeCompleted') {
			$on(self.$clearCompleted, 'click', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4773,4794],"range":[4761,4794],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":27,"label":"vanillajs"}');
				handler();
			});

		} else if (event === 'toggleAll') {
			$on(self.$toggleAll, 'click', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4881,4927],"range":[4869,4927],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":28,"label":"vanillajs"}');
				handler({completed: this.checked});
			});

		} else if (event === 'itemEdit') {
			$delegate(self.$todoList, 'li label', 'dblclick', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5033,5078],"range":[5021,5078],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":29,"label":"vanillajs"}');
				handler({id: self._itemId(this)});
			});

		} else if (event === 'itemRemove') {
			$delegate(self.$todoList, '.destroy', 'click', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5183,5228],"range":[5171,5228],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":30,"label":"vanillajs"}');
				handler({id: self._itemId(this)});
			});

		} else if (event === 'itemToggle') {
			$delegate(self.$todoList, '.toggle', 'click', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5332,5418],"range":[5320,5418],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/view.js","index":31,"label":"vanillajs"}');
				handler({
					id: self._itemId(this),
					completed: this.checked
				});
			});

		} else if (event === 'itemEditDone') {
			self._bindItemEditDone(handler);

		} else if (event === 'itemEditCancel') {
			self._bindItemEditCancel(handler);
		}
	};

	// Export to window
	window.app = window.app || {};
	window.app.View = View;
}(window));
