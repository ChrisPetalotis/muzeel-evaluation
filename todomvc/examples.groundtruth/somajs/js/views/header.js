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


(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[17,1000],"range":[1,1000],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/header.js","index":5,"label":"somajs"}');

	'use strict';

	var ENTER_KEY = 13;

	todo.HeaderView = function (scope, template, model, dispatcher) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[123,996],"range":[77,996],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/header.js","index":4,"label":"somajs"}');

		// get data from the injected model
		var items = model.get();

		// template function: add a new item on an enter key press
		scope.add = function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[284,511],"range":[267,511],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/header.js","index":0,"label":"somajs"}');
			var value = event.currentTarget.value.trim();
			if (event.which === ENTER_KEY && value !== '') {
				items.push({
					title: value,
					completed: false
				});
				event.currentTarget.value = '';
				update();
			}
		};

		// template function: remove text from the input (used on blur event)
		scope.clear = function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[619,659],"range":[602,659],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/header.js","index":1,"label":"somajs"}');
			event.currentTarget.value = '';
		};

		// save the changes to the model and dispatch a custom event to render the templates
		function update() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[769,829],"range":[751,829],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/header.js","index":2,"label":"somajs"}');
			model.set(items);
			dispatcher.dispatch('render');
		}

		// listen to a custom event to render the header view
		dispatcher.addEventListener('render', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[939,990],"range":[927,990],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/header.js","index":3,"label":"somajs"}');
			items = model.get();
			template.render();
		});

	};

})(window.todo = window.todo || {});
