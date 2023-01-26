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


(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13,6231],"range":[1,6231],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":14,"label":"sapui5"}');
	'use strict';

	// Underscore's Template Module
	// Courtesy of underscorejs.org
	var _ = (function (_) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[120,3307],"range":[107,3307],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":5,"label":"sapui5"}');
		_.defaults = function (object) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[155,506],"range":[137,506],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":0,"label":"sapui5"}');
			if (!object) {
				return object;
			}
			for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
				var iterable = arguments[argsIndex];
				if (iterable) {
					for (var key in iterable) {
						if (object[key] == null) {
							object[key] = iterable[key];
						}
					}
				}
			}
			return object;
		}

		// By default, Underscore uses ERB-style template delimiters, change the
		// following template settings to use alternative delimiters.
		_.templateSettings = {
			evaluate    : /<%([\s\S]+?)%>/g,
			interpolate : /<%=([\s\S]+?)%>/g,
			escape      : /<%-([\s\S]+?)%>/g
		};

		// When customizing `templateSettings`, if you don't want to define an
		// interpolation, evaluation or escaping regex, we need one that is
		// guaranteed not to match.
		var noMatch = /(.)^/;

		// Certain characters need to be escaped so that they can be put into a
		// string literal.
		var escapes = {
			"'":      "'",
			'\\':     '\\',
			'\r':     'r',
			'\n':     'n',
			'\t':     't',
			'\u2028': 'u2028',
			'\u2029': 'u2029'
		};

		var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

		// JavaScript micro-templating, similar to John Resig's implementation.
		// Underscore templating handles arbitrary delimiters, preserves whitespace,
		// and correctly escapes quotes within interpolated code.
		_.template = function(text, data, settings) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1546,3290],"range":[1515,3290],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":4,"label":"sapui5"}');
			var render;
			settings = _.defaults({}, settings, _.templateSettings);

			// Combine delimiters into one regular expression via alternation.
			var matcher = new RegExp([
				(settings.escape || noMatch).source,
				(settings.interpolate || noMatch).source,
				(settings.evaluate || noMatch).source
			].join('|') + '|$', 'g');

			// Compile the template source, escaping string literals appropriately.
			var index = 0;
			var source = "__p+='";
			text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2082,2526],"range":[2027,2526],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":2,"label":"sapui5"}');
				source += text.slice(index, offset)
					.replace(escaper, function(match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2163,2196],"range":[2147,2196],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":1,"label":"sapui5"}'); return '\\' + escapes[match]; });

				if (escape) {
					source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
				}
				if (interpolate) {
					source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
				}
				if (evaluate) {
					source += "';\n" + evaluate + "\n__p+='";
				}
				index = offset + match.length;
				return match;
			});
			source += "';\n";

			// If a variable is not specified, place data values in local scope.
			if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

			source = "var __t,__p='',__j=Array.prototype.join," +
				"print=function(){__p+=__j.call(arguments,'');};\n" +
				source + "return __p;\n";

			try {
				render = new Function(settings.variable || 'obj', '_', source);
			} catch (e) {
				e.source = source;
				throw e;
			}

			if (data) return render(data, _);
			var template = function(data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3049,3094],"range":[3034,3094],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":3,"label":"sapui5"}');
				return render.call(this, data, _);
			};

			// Provide the compiled function source as a convenience for precompilation.
			template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

			return template;
		};

		return _;
	})({});

	if (location.hostname === 'todomvc.com') {
		window._gaq = [['_setAccount','UA-31081062-1'],['_trackPageview']];(function(d,t){instrumentation_log('{"type":"FunctionExpression","bodyRange":[3442,3571],"range":[3429,3571],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":6,"label":"sapui5"}');var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src='//www.google-analytics.com/ga.js';s.parentNode.insertBefore(g,s)}(document,'script'));
	}

	function redirect() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[3618,3763],"range":[3598,3763],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":7,"label":"sapui5"}');
		if (location.hostname === 'tastejs.github.io') {
			location.href = location.href.replace('tastejs.github.io/todomvc', 'todomvc.com');
		}
	}

	function findRoot() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[3786,3879],"range":[3766,3879],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":8,"label":"sapui5"}');
		var base = location.href.indexOf('examples/');
		return location.href.substr(0, base);
	}

	function getFile(file, callback) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[3915,4257],"range":[3882,4257],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":10,"label":"sapui5"}');
		if (!location.host) {
			return console.info('Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.');
		}

		var xhr = new XMLHttpRequest();

		xhr.open('GET', findRoot() + file, true);
		xhr.send();

		xhr.onload = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4170,4253],"range":[4158,4253],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":9,"label":"sapui5"}');
			if (xhr.status === 200 && callback) {
				callback(xhr.responseText);
			}
		};
	}

	function Learn(learnJSON, config) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[4294,5100],"range":[4260,5100],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":11,"label":"sapui5"}');
		if (!(this instanceof Learn)) {
			return new Learn(learnJSON, config);
		}

		var template, framework;

		if (typeof learnJSON !== 'object') {
			try {
				learnJSON = JSON.parse(learnJSON);
			} catch (e) {
				return;
			}
		}

		if (config) {
			template = config.template;
			framework = config.framework;
		}

		if (!template && learnJSON.templates) {
			template = learnJSON.templates.todomvc;
		}

		if (!framework && document.querySelector('[data-framework]')) {
			framework = document.querySelector('[data-framework]').dataset.framework;
		}

		this.template = template;

		if (learnJSON.backend) {
			this.frameworkJSON = learnJSON.backend;
			this.append({
				backend: true
			});
		} else if (learnJSON[framework]) {
			this.frameworkJSON = learnJSON[framework];
			this.append();
		}
	}

	Learn.prototype.append = function (opts) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5144,6183],"range":[5128,6183],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":13,"label":"sapui5"}');
		var aside = document.createElement('aside');
		aside.innerHTML = _.template(this.template, this.frameworkJSON);
		aside.className = 'learn';

		if (opts && opts.backend) {
			// Remove demo link
			var sourceLinks = aside.querySelector('.source-links');
			var heading = sourceLinks.firstElementChild;
			var sourceLink = sourceLinks.lastElementChild;
			// Correct link path
			var href = sourceLink.getAttribute('href');
			sourceLink.setAttribute('href', href.substr(href.lastIndexOf('http')));
			sourceLinks.innerHTML = heading.outerHTML + sourceLink.outerHTML;
		} else {
			// Localize demo links
			var demoLinks = aside.querySelectorAll('.demo-link');
			Array.prototype.forEach.call(demoLinks, function (demoLink) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5872,6029],"range":[5852,6029],"file":"todomvc/examples.lacunized.instrumented/sapui5/bower_components/todomvc-common/base.js","index":12,"label":"sapui5"}');
				if (demoLink.getAttribute('href').substr(0, 4) !== 'http') {
					demoLink.setAttribute('href', findRoot() + demoLink.getAttribute('href'));
				}
			});
		}

		document.body.className = (document.body.className + ' learn-bar').trim();
		document.body.insertAdjacentHTML('afterBegin', aside.outerHTML);
	};

	redirect();
	getFile('learn.json', Learn);
})();
