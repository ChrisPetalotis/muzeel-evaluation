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


(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[17,2832],"range":[1,2832],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":13,"label":"somajs"}');
	'use strict';

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	todo.MainView = function (scope, template, model, router, dispatcher) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[150,2828],"range":[96,2828],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":12,"label":"somajs"}');

		// get data from the injected model
		var items = model.get();

		// template function: returns an array of items to display
		// can be different depending on the filter selected
		scope.items = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[363,565],"range":[351,565],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":1,"label":"somajs"}');
			var filter = router.getRoute();
			if (filter === '') {
				return items;
			}
			return items.filter(function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[486,559],"range":[470,559],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":0,"label":"somajs"}');
				return filter === 'active' ? !item.completed : item.completed;
			});
		};

		// template function: set all items to either completed or not completed
		scope.toggleAll = function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[680,790],"range":[663,790],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":3,"label":"somajs"}');
			items.forEach(function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[715,771],"range":[699,771],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":2,"label":"somajs"}');
				item.completed = event.currentTarget.checked;
			});
			update();
		};

		// template function: set 1 item to either completed or not completed
		scope.toggle = function (event, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[905,960],"range":[882,960],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":4,"label":"somajs"}');
			item.completed = !item.completed;
			update();
		};

		// template function: returns a css class depending if the item is completed or not completed
		scope.completedClass = function (completed) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1105,1150],"range":[1084,1150],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":5,"label":"somajs"}');
			return completed ? 'completed' : '';
		};

		// template function: removes an item
		scope.remove = function (event, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1233,1314],"range":[1210,1314],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":6,"label":"somajs"}');
			if (item) {
				items.splice(items.indexOf(item), 1);
				update();
			}
		};

		// template function: edit an item (used on a double click event)
		scope.edit = function (event, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1423,1531],"range":[1400,1531],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":7,"label":"somajs"}');
			item.editing = 'editing';
			template.render();
			template.element.querySelector('.edit').focus();
		};

		// template function: during edit mode, changes the value of an item after an enter key press
		scope.update = function (event, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1670,2028],"range":[1647,2028],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":8,"label":"somajs"}');
			if (cancelEditing(event, item)) {
				return;
			}
			var value = event.currentTarget.value.trim();
			if (event.which === ENTER_KEY || event.type === 'blur') {
				if (value) {
					item.title = value;
				}
				else {
					items.splice(items.indexOf(item), 1);
				}
				item.editing = '';
				event.currentTarget.value = value;
				update();
			}
		};

		// escape has been pressed, revert the value of the input
		function cancelEditing(event, item) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[2129,2316],"range":[2093,2316],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":9,"label":"somajs"}');
			if (event.which === ESCAPE_KEY) {
				event.currentTarget.value = item.title;
				event.currentTarget.blur();
				update();
				return true;
			}
			else {
				return false;
			}
		}

		// save the changes to the model and dispatch a custom event to render the templates
		function update() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[2425,2485],"range":[2407,2485],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":10,"label":"somajs"}');
			model.set(items);
			dispatcher.dispatch('render');
		}

		// listen to a custom event to render the main view
		dispatcher.addEventListener('render', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2593,2822],"range":[2581,2822],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/main.js","index":11,"label":"somajs"}');
			items = model.get();
			scope.active = model.getActive();
			scope.isVisible = scope.items().length > 0 ? true : false;
			scope.allCompleted = items.length > 0 && scope.active === 0 ? true : false;
			template.render();
		});

	};

})(window.todo = window.todo || {});
