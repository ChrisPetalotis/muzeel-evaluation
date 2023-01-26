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


/*global NodeList */
(function (window) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[40,1589],"range":[22,1589],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/helpers.js","index":6,"label":"vanillajs"}');
	'use strict';

	// Get element(s) by CSS selector:
	window.qs = function (selector, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[134,192],"range":[107,192],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/helpers.js","index":0,"label":"vanillajs"}');
		return (scope || document).querySelector(selector);
	};
	window.qsa = function (selector, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[235,296],"range":[208,296],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/helpers.js","index":1,"label":"vanillajs"}');
		return (scope || document).querySelectorAll(selector);
	};

	// addEventListener wrapper:
	window.$on = function (target, type, callback, useCapture) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[389,450],"range":[343,450],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/helpers.js","index":2,"label":"vanillajs"}');
		target.addEventListener(type, callback, !!useCapture);
	};

	// Attach a handler to event for all elements that match the selector,
	// now or in the future, based on a root element
	window.$delegate = function (target, selector, type, handler) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[638,1101],"range":[595,1101],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/helpers.js","index":4,"label":"vanillajs"}');
		function dispatchEvent(event) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[672,923],"range":[642,923],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/helpers.js","index":3,"label":"vanillajs"}');
			var targetElement = event.target;
			var potentialElements = window.qsa(selector, target);
			var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

			if (hasMatch) {
				handler.call(targetElement, event);
			}
		}

		// https://developer.mozilla.org/en-US/docs/Web/Events/blur
		var useCapture = type === 'blur' || type === 'focus';

		window.$on(target, type, dispatchEvent, useCapture);
	};

	// Find the element's parent with the given tag name:
	// $parent(qs('a'), 'div');
	window.$parent = function (element, tagName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1234,1446],"range":[1206,1446],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/helpers.js","index":5,"label":"vanillajs"}');
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.$parent(element.parentNode, tagName);
	};

	// Allow for looping on nodes by chaining:
	// qsa('.foo').forEach(function () {})
	NodeList.prototype.forEach = Array.prototype.forEach;
})(window);
