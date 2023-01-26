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


/*jshint laxbreak:true */
(function (window) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[45,2801],"range":[27,2801],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/template.js","index":6,"label":"vanillajs"}');
	'use strict';

	var htmlEscapes = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&#x27;',
		'`': '&#x60;'
	};

	var escapeHtmlChar = function (chr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[223,254],"range":[208,254],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/template.js","index":0,"label":"vanillajs"}');
		return htmlEscapes[chr];
	};

	var reUnescapedHtml = /[&<>"'`]/g;
	var reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);

	var escape = function (string) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[388,511],"range":[370,511],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/template.js","index":1,"label":"vanillajs"}');
		return (string && reHasUnescapedHtml.test(string))
			? string.replace(reUnescapedHtml, escapeHtmlChar)
			: string;
	};

	/**
	 * Sets up defaults for all the Template methods such as a default template
	 *
	 * @constructor
	 */
	function Template() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[643,907],"range":[623,907],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/template.js","index":2,"label":"vanillajs"}');
		this.defaultTemplate
		=	'<li data-id="{{id}}" class="{{completed}}">'
		+		'<div class="view">'
		+			'<input class="toggle" type="checkbox" {{checked}}>'
		+			'<label>{{title}}</label>'
		+			'<button class="destroy"></button>'
		+		'</div>'
		+	'</li>';
	}

	/**
	 * Creates an <li> HTML string and returns it for placement in your app.
	 *
	 * NOTE: In real life you should be using a templating engine such as Mustache
	 * or Handlebars, however, this is a vanilla JS example.
	 *
	 * @param {object} data The object containing keys you want to find in the
	 *                      template to replace.
	 * @returns {string} HTML String of an <li> element
	 *
	 * @example
	 * view.show({
	 *	id: 1,
	 *	title: "Hello World",
	 *	completed: 0,
	 * });
	 */
	Template.prototype.show = function (data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1453,1991],"range":[1437,1991],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/template.js","index":3,"label":"vanillajs"}');
		var i, l;
		var view = '';

		for (i = 0, l = data.length; i < l; i++) {
			var template = this.defaultTemplate;
			var completed = '';
			var checked = '';

			if (data[i].completed) {
				completed = 'completed';
				checked = 'checked';
			}

			template = template.replace('{{id}}', data[i].id);
			template = template.replace('{{title}}', escape(data[i].title));
			template = template.replace('{{completed}}', completed);
			template = template.replace('{{checked}}', checked);

			view = view + template;
		}

		return view;
	};

	/**
	 * Displays a counter of how many to dos are left to complete
	 *
	 * @param {number} activeTodos The number of active todos.
	 * @returns {string} String containing the count
	 */
	Template.prototype.itemCounter = function (activeTodos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2238,2361],"range":[2215,2361],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/template.js","index":4,"label":"vanillajs"}');
		var plural = activeTodos === 1 ? '' : 's';

		return '<strong>' + activeTodos + '</strong> item' + plural + ' left';
	};

	/**
	 * Updates the text within the "Clear completed" button
	 *
	 * @param  {[type]} completedTodos The number of completed todos.
	 * @returns {string} String containing the count
	 */
	Template.prototype.clearCompletedButton = function (completedTodos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2621,2711],"range":[2595,2711],"file":"todomvc/examples.lacunized.instrumented/vanillajs/js/template.js","index":5,"label":"vanillajs"}');
		if (completedTodos > 0) {
			return 'Clear completed';
		} else {
			return '';
		}
	};

	// Export to window
	window.app = window.app || {};
	window.app.Template = Template;
})(window);
