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


/* */ 
"format cjs";
/* global _ */
(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[49,7268],"range":[37,7268],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":17,"label":"aurelia"}');
	'use strict';

	/* jshint ignore:start */
	// Underscore's Template Module
	// Courtesy of underscorejs.org
	var _ = (function (_) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[183,3370],"range":[170,3370],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":5,"label":"aurelia"}');
		_.defaults = function (object) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[218,569],"range":[200,569],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":0,"label":"aurelia"}');
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
		_.template = function(text, data, settings) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1609,3353],"range":[1578,3353],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":4,"label":"aurelia"}');
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
			text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2145,2589],"range":[2090,2589],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":2,"label":"aurelia"}');
				source += text.slice(index, offset)
					.replace(escaper, function(match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2226,2259],"range":[2210,2259],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":1,"label":"aurelia"}'); return '\\' + escapes[match]; });

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
			var template = function(data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3112,3157],"range":[3097,3157],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":3,"label":"aurelia"}');
				return render.call(this, data, _);
			};

			// Provide the compiled function source as a convenience for precompilation.
			template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

			return template;
		};

		return _;
	})({});

	if (location.hostname === 'todomvc.com') {
		(function(i,s,o,g,r,a,m){instrumentation_log('{"type":"FunctionExpression","bodyRange":[3448,3667],"range":[3425,3667],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":7,"label":"aurelia"}');i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[3499,3539],"range":[3489,3539],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":6,"label":"aurelia"}');
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-31081062-1', 'auto');
		ga('send', 'pageview');
	}
	/* jshint ignore:end */

	function redirect() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[3866,4011],"range":[3846,4011],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":8,"label":"aurelia"}');
		if (location.hostname === 'tastejs.github.io') {
			location.href = location.href.replace('tastejs.github.io/todomvc', 'todomvc.com');
		}
	}

	function findRoot() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[4034,4127],"range":[4014,4127],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":9,"label":"aurelia"}');
		var base = location.href.indexOf('examples/');
		return location.href.substr(0, base);
	}

	function getFile(file, callback) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[4163,4505],"range":[4130,4505],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":11,"label":"aurelia"}');
		if (!location.host) {
			return console.info('Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.');
		}

		var xhr = new XMLHttpRequest();

		xhr.open('GET', findRoot() + file, true);
		xhr.send();

		xhr.onload = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4418,4501],"range":[4406,4501],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":10,"label":"aurelia"}');
			if (xhr.status === 200 && callback) {
				callback(xhr.responseText);
			}
		};
	}

	function Learn(learnJSON, config) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[4542,5467],"range":[4508,5467],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":12,"label":"aurelia"}');
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
			this.frameworkJSON.issueLabel = framework;
			this.append({
				backend: true
			});
		} else if (learnJSON[framework]) {
			this.frameworkJSON = learnJSON[framework];
			this.frameworkJSON.issueLabel = framework;
			this.append();
		}

		this.fetchIssueCount();
	}

	Learn.prototype.append = function (opts) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5511,6550],"range":[5495,6550],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":14,"label":"aurelia"}');
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
			Array.prototype.forEach.call(demoLinks, function (demoLink) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6239,6396],"range":[6219,6396],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":13,"label":"aurelia"}');
				if (demoLink.getAttribute('href').substr(0, 4) !== 'http') {
					demoLink.setAttribute('href', findRoot() + demoLink.getAttribute('href'));
				}
			});
		}

		document.body.className = (document.body.className + ' learn-bar').trim();
		document.body.insertAdjacentHTML('afterBegin', aside.outerHTML);
	};

	Learn.prototype.fetchIssueCount = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6600,7220],"range":[6588,7220],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":16,"label":"aurelia"}');
		var issueLink = document.getElementById('issue-count-link');
		if (issueLink) {
			var url = issueLink.href.replace('https://github.com', 'https://api.github.com/repos');
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.onload = function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6870,7197],"range":[6857,7197],"file":"todomvc/examples.lacunized.instrumented/aurelia/jspm_packages/npm/todomvc-common@1.0.2/base.js","index":15,"label":"aurelia"}');
				var parsedResponse = JSON.parse(e.target.responseText);
				if (parsedResponse instanceof Array) {
					var count = parsedResponse.length;
					if (count !== 0) {
						issueLink.innerHTML = 'This app has ' + count + ' open issues';
						document.getElementById('issue-count').style.display = 'inline';
					}
				}
			};
			xhr.send();
		}
	};

	redirect();
	getFile('learn.json', Learn);
})();
