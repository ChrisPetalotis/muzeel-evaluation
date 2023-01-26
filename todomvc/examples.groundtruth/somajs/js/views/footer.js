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


(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[17,1209],"range":[1,1209],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/footer.js","index":6,"label":"somajs"}');

	'use strict';

	todo.FooterView = function (scope, template, model, router, dispatcher) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109,1205],"range":[55,1205],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/footer.js","index":5,"label":"somajs"}');

		// get data from the injected model
		var items = model.get();

		// template function: returns a css class for the current filter (all/active/completed)
		scope.highlightFilter = function (filter) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[312,397],"range":[294,397],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/footer.js","index":0,"label":"somajs"}');
			var route = router.getRoute();
			return route === filter ? 'selected' : '';
		};

		// template function: returns the number of completed items
		scope.clearCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[499,594],"range":[487,594],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/footer.js","index":2,"label":"somajs"}');
			items = items.filter(function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[541,575],"range":[525,575],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/footer.js","index":1,"label":"somajs"}');
				return !item.completed;
			});
			update();
		};

		// save the changes to the model and dispatch a custom event to render the templates
		function update() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[704,764],"range":[686,764],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/footer.js","index":3,"label":"somajs"}');
			model.set(items);
			dispatcher.dispatch('render');
		}

		// listen to a custom event to render the footer view
		dispatcher.addEventListener('render', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[874,1199],"range":[862,1199],"file":"todomvc/examples.lacunized.instrumented/somajs/js/views/footer.js","index":4,"label":"somajs"}');
			items = model.get();
			scope.active = model.getActive();
			scope.completed = items.length - scope.active;
			scope.itemLabel = scope.active === 1 ? 'item' : 'items';
			scope.footerVisible = items.length > 0 ? true : false;
			scope.clearCompletedVisible = scope.completed > 0 ? true : false;
			template.render();
		});

	};

})(window.todo = window.todo || {});
