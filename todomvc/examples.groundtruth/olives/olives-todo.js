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


(function e(t,n,r){instrumentation_log('{"type":"FunctionExpression","bodyRange":[18,441],"range":[1,441],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":2,"label":"olives"}');function s(o,u){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[34,355],"range":[19,355],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":1,"label":"olives"}');if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){instrumentation_log('{"type":"FunctionExpression","bodyRange":[279,313],"range":[268,313],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":0,"label":"olives"}');var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[479,1432],"range":[447,1432],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":3,"label":"olives"}');
'use strict';
var input = require('./uis/input');
var list = require('./uis/list');
var controls = require('./uis/controls');

var LocalStore = require('olives').LocalStore;
var Store = require('emily').Store;

// The tasks Store is told to init on an array
// so tasks are indexed by a number
// This store is shared among several UIs of this application
// that's why it's created here
var tasks = new LocalStore([]);

// Also create a shared stats store
var stats = new Store({
	nbItems: 0,
	nbLeft: 0,
	nbCompleted: 0,
	plural: 'items'
});

// Synchronize the store on 'todos-olives' localStorage
tasks.sync('todos-olives');

// Initialize Input UI by giving it a view and a model.
input(document.querySelector('#header input'), tasks);

// Init the List UI the same way, pass it the stats store too
list(document.querySelector('#main'), tasks, stats);

// Same goes for the control UI
controls(document.querySelector('#footer'), tasks, stats);

},{"./uis/controls":6,"./uis/input":7,"./uis/list":8,"emily":13,"olives":35}],2:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[1544,2680],"range":[1512,2680],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":9,"label":"olives"}');
'use strict';

var tools = require('./tools');

var routes = {
    '#/': 'show-all',
    '#/completed': 'show-completed',
    '#/active': 'show-active'
};

/**
 * A quick plugin to interface with a url-highway router.
 * @param {url highway} the router's instance
 * @constructor
 */
module.exports = function RouterPlugin(router) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1877,2676],"range":[1847,2676],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":8,"label":"olives"}');
    var currentRoute = router.getLastRoute();

    /**
     * Set a given className to a dom element if its hash matches with the url's hash
     * @param link
     * @param className
     */
    this.isLinkActive = function isLinkActive(link, className) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2134,2372],"range":[2095,2372],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":5,"label":"olives"}');
        if (router.getLastRoute() === link.hash) {
            link.classList.add(className);
        }

        router.watch(function (route) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2279,2364],"range":[2262,2364],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":4,"label":"olives"}');
            tools.toggleClass.call(link, link.hash === route, className);
        });
    };

    this.toggleClassOnRouteChange = function toggleClassOnRouteChange(list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2451,2648],"range":[2411,2648],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":7,"label":"olives"}');
        router.watch(function (route) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2491,2640],"range":[2474,2640],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":6,"label":"olives"}');
            list.classList.remove(routes[currentRoute]);
            list.classList.add(routes[route]);
            currentRoute = route;
        });
    };

    router.start('#/');
};

},{"./tools":5}],3:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[2731,2919],"range":[2699,2919],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":11,"label":"olives"}');
'use strict';

var UrlHighway = require('url-highway');

var urlHighway = new UrlHighway();

urlHighway.parse = function (hash) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2861,2885],"range":[2845,2885],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":10,"label":"olives"}');
    return [ hash ];
};

module.exports = urlHighway;

},{"url-highway":54}],4:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[2975,3022],"range":[2943,3022],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":12,"label":"olives"}');
arguments[4][2][0].apply(exports,arguments)
},{"./tools":5,"dup":2}],5:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[3081,3487],"range":[3049,3487],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":14,"label":"olives"}');
'use strict';

/*
 * A set of commonly used functions.
 * They're useful for several UIs in the app.
 * They could also be reused in other projects
 */
module.exports = {
	// className is set to the 'this' dom node according to the value's truthiness
	toggleClass: function (value, className) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3376,3481],"range":[3348,3481],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":13,"label":"olives"}');
		if (value) {
			this.classList.add(className);
		} else {
			this.classList.remove(className);
		}
	}
};

},{}],6:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[3527,5202],"range":[3495,5202],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":20,"label":"olives"}');
'use strict';
var OObject = require('olives').OObject;
var EventPlugin = require('olives')['Event.plugin'];
var BindPlugin = require('olives')['Bind.plugin'];
var tools = require('../lib/tools');
var router = require('../lib/router');
var RouterPlugin = require('../lib/RouterPlugin');

module.exports = function controlsInit(view, model, stats) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3875,5198],"range":[3833,5198],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":19,"label":"olives"}');
	// The OObject (the controller) inits with a default model which is a simple store
	// But it can be init'ed with any other store, like the LocalStore
	var controls = new OObject(model);

	// A function to get the completed tasks
	function getCompleted() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[4133,4276],"range":[4109,4276],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":16,"label":"olives"}');
		var completed = [];
		model.loop(function (value, id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4191,4251],"range":[4170,4251],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":15,"label":"olives"}');
			if (value.completed) {
				completed.push(id);
			}
		});
		return completed;
	}

	// Update all stats
	function updateStats() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[4323,4579],"range":[4300,4579],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":17,"label":"olives"}');
		var nbCompleted = getCompleted().length;

		stats.set('nbItems', model.count());
		stats.set('nbLeft', stats.get('nbItems') - nbCompleted);
		stats.set('nbCompleted', nbCompleted);
		stats.set('plural', stats.get('nbLeft') === 1 ? 'item' : 'items');
	}

	// Add plugins to the UI.
	controls.seam.addAll({
		event: new EventPlugin(controls),
		router: new RouterPlugin(router),
		stats: new BindPlugin(stats, {
			toggleClass: tools.toggleClass
		})
	});

	// Alive applies the plugins to the HTML view
	controls.alive(view);

	// Delete all tasks
	controls.delAll = function delAll() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4911,4947],"range":[4893,4947],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":18,"label":"olives"}');
		model.delAll(getCompleted());
	};

	// Update stats when the tasks list is modified
	model.watch('added', updateStats);
	model.watch('deleted', updateStats);
	model.watch('updated', updateStats);

	// I could either update stats at init or save them in a localStore
	updateStats();
};

},{"../lib/RouterPlugin":2,"../lib/router":3,"../lib/tools":5,"olives":35}],7:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[5312,6186],"range":[5280,6186],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":23,"label":"olives"}');
'use strict';
var OObject = require('olives').OObject;
var EventPlugin = require('olives')['Event.plugin'];

// It returns an init function
module.exports = function inputInit(view, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5503,6182],"range":[5471,6182],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":22,"label":"olives"}');
	// The OObject (the controller) inits with a default model which is a simple store
	// But it can be init'ed with any other store, like the LocalStore
	var input = new OObject(model);
	var ENTER_KEY = 13;

	// The event plugin that is added to the OObject
	// We have to tell it where to find the methods
	input.seam.add('event', new EventPlugin(input));

	// The method to add a new taks
	input.addTask = function addTask(event, node) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5942,6111],"range":[5912,6111],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":21,"label":"olives"}');
		if (event.keyCode === ENTER_KEY && node.value.trim()) {
			model.alter('push', {
				title: node.value.trim(),
				completed: false
			});
			node.value = '';
		}
	};

	// Alive applies the plugins to the HTML view
	input.alive(view);
};

},{"olives":35}],8:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[6237,8835],"range":[6205,8835],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":33,"label":"olives"}');
'use strict';
var OObject = require('olives').OObject;
var EventPlugin = require('olives')['Event.plugin'];
var BindPlugin = require('olives')['Bind.plugin'];
var tools = require('../lib/tools');
var router = require('../lib/router');
var RouterPlugin = require('../lib/routerPlugin');

module.exports = function listInit(view, model, stats) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6581,8831],"range":[6543,8831],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":32,"label":"olives"}');
	// The OObject (the controller) initializes with a default model which is a simple store
	// But it can be initialized with any other store, like the LocalStore
	var list = new OObject(model);
	var modelPlugin = new BindPlugin(model, {
		toggleClass: tools.toggleClass
	});
	var ENTER_KEY = 13;
	var ESC_KEY = 27;

	// The plugins
	list.seam.addAll({
		event: new EventPlugin(list),
		model: modelPlugin,
		router: new RouterPlugin(router),
		stats: new BindPlugin(stats, {
			toggleClass: tools.toggleClass,
			toggleCheck: function (value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7126,7188],"range":[7109,7188],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":24,"label":"olives"}');
				this.checked = model.count() === value ? 'on' : '';
			}
		})
	});

	// Remove the completed task
	list.remove = function remove(event, node) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7274,7327],"range":[7245,7327],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":25,"label":"olives"}');
		model.del(node.getAttribute('data-model_id'));
	};

	// Un/check all tasks
	list.toggleAll = function toggleAll(event, node) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7403,7533],"range":[7371,7533],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":27,"label":"olives"}');
		var checked = !!node.checked;

		model.loop(function (value, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7473,7521],"range":[7451,7521],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":26,"label":"olives"}');
			this.update(idx, 'completed', checked);
		}, model);
	};

	// Enter edit mode
	list.startEdit = function startEdit(event, node) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7606,7742],"range":[7574,7742],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":28,"label":"olives"}');
		var taskId = modelPlugin.getItemIndex(node);

		toggleEditing(taskId, true);
		getElementByModelId('input.edit', taskId).focus();
	};

	// Leave edit mode
	list.stopEdit = function stopEdit(event, node) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7813,8494],"range":[7782,8494],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":29,"label":"olives"}');
		var taskId = modelPlugin.getItemIndex(node);
		var value;

		if (event.keyCode === ENTER_KEY || event.type === 'blur') {
			value = node.value.trim();

			if (value) {
				model.update(taskId, 'title', value);
			} else {
				model.del(taskId);
			}

			// When task #n is removed, #n+1 becomes #n, the dom node is updated to the new value, so editing mode should exit anyway
			if (model.has(taskId)) {
				toggleEditing(taskId, false);
			}
		} else if (event.keyCode === ESC_KEY) {
			toggleEditing(taskId, false);
			// Also reset the input field to the previous value so that the blur event doesn't pick up the discarded one
			node.value = model.get(taskId).title;
		}
	};

	// Alive applies the plugins to the HTML view
	list.alive(view);

	function toggleEditing(taskId, bool) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[8602,8699],"range":[8565,8699],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":30,"label":"olives"}');
		var li = getElementByModelId('li', taskId);
		tools.toggleClass.call(li, bool, 'editing');
	}

	function getElementByModelId(selector, taskId) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[8749,8829],"range":[8702,8829],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":31,"label":"olives"}');
		return view.querySelector(selector + '[data-model_id="' + taskId + '"]');
	}
};

},{"../lib/router":3,"../lib/routerPlugin":4,"../lib/tools":5,"olives":35}],9:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[8945,20655],"range":[8913,20655],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":55,"label":"olives"}');
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[10996,12016],"range":[10963,12016],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":34,"label":"olives"}');
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[12137,12388],"range":[12107,12388],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":35,"label":"olives"}');
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && !isFinite(value)) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[12414,12517],"range":[12390,12517],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":36,"label":"olives"}');
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[12545,12714],"range":[12519,12714],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":37,"label":"olives"}');
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[13283,13461],"range":[13212,13461],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":38,"label":"olives"}');
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[13866,13928],"range":[13838,13928],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":39,"label":"olives"}');
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[14126,14208],"range":[14084,14208],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":40,"label":"olives"}');
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[14411,14506],"range":[14366,14506],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":41,"label":"olives"}');
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[14691,14805],"range":[14645,14805],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":42,"label":"olives"}');
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[14846,16697],"range":[14808,16697],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":43,"label":"olives"}');
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[16728,16804],"range":[16699,16804],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":44,"label":"olives"}');
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[16830,17989],"range":[16806,17989],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":45,"label":"olives"}');
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b)) {
    return a === b;
  }
  var aIsArgs = isArguments(a),
      bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  var ka = objectKeys(a),
      kb = objectKeys(b),
      key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[18185,18304],"range":[18136,18304],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":46,"label":"olives"}');
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[18512,18612],"range":[18464,18612],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":47,"label":"olives"}');
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[18841,18944],"range":[18790,18944],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":48,"label":"olives"}');
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[18992,19302],"range":[18947,19302],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":49,"label":"olives"}');
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[19360,20019],"range":[19304,20019],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":50,"label":"olives"}');
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[20178,20243],"range":[20122,20243],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":51,"label":"olives"}');
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[20366,20432],"range":[20329,20432],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":52,"label":"olives"}');
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[20466,20490],"range":[20452,20490],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":53,"label":"olives"}'); if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[20540,20651],"range":[20525,20651],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":54,"label":"olives"}');
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":57}],10:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[20706,22054],"range":[20674,22054],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":58,"label":"olives"}');
/**
* @license compare-numbers https://github.com/cosmosio/compare-numbers
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
 */
"use strict";

/**
 * Compares two numbers and tells if the first one is bigger (1), smaller (-1) or equal (0)
 * @param {Number} number1 the first number
 * @param {Number} number2 the second number
 * @returns 1 if number1>number2, -1 if number2>number1, 0 if equal
 */
function compareNumbers(number1, number2) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[21191,21342],"range":[21149,21342],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":56,"label":"olives"}');
      if (number1 > number2) {
        return 1;
      } else if (number1 < number2) {
        return -1;
      } else {
         return 0;
      }
}

module.exports = {

  /**
   * Compares two numbers and tells if the first one is bigger (1), smaller (-1) or equal (0)
   * @param {Number} number1 the first number
   * @param {Number} number2 the second number
   * @returns 1 if number1 > number2, -1 if number2 > number1, 0 if equal
   */
    "asc": compareNumbers,

    /**
     * Compares two numbers and tells if the first one is bigger (1), smaller (-1) or equal (0)
     * @param {Number} number1 the first number
     * @param {Number} number2 the second number
     * @returns 1 if number2 > number1, -1 if number1 > number2, 0 if equal
     */
    "desc": function desc(number1, number2) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[21994,22048],"range":[21962,22048],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":57,"label":"olives"}');
      return compareNumbers(number2, number1);
    }
};

},{}],11:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[22095,41351],"range":[22063,41351],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":104,"label":"olives"}');
/**
* @license data-binding-plugin https://github.com/flams/data-binding-plugin
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2015 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var Observable = require("watch-notify"),
    compareNumbers = require("compare-numbers"),
    simpleLoop = require("simple-loop"),
    toArray = require("to-array"),
    getClosest = require("get-closest"),
    nestedProperty = require("nested-property"),
    getNodes = require("get-nodes"),
    getDataset =  require("get-dataset");

function setAttribute(node, property, value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[22668,22936],"range":[22623,22936],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":59,"label":"olives"}');
    if ('ownerSVGElement' in node) {
        node.setAttribute(property, value);
        return true;
    } else if ('ownerDocument' in node) {
        node[property] = value;
        return true;
    } else {
        throw new Error("invalid element type");
    }
}

/**
 * @class
 * This plugin links dom nodes to a model
 */
module.exports = function BindPluginConstructor($model, $bindings) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[23065,41347],"range":[23015,41347],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":103,"label":"olives"}');

    /**
     * The model to watch
     * @private
     */
    var _model = null,

    /**
     * The list of custom bindings
     * @private
     */
    _bindings = {},

    /**
     * The list of itemRenderers
     * each foreach has its itemRenderer
     * @private
     */
    _itemRenderers = {},

    /**
     * The observers handlers
     * @private
     */
    _observers = {};

    /**
     * Exposed for debugging purpose
     * @private
     */
    this.observers = _observers;

    function _removeObserversForId(id) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[23596,23796],"range":[23561,23796],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":61,"label":"olives"}');
        if (_observers[id]) {
            _observers[id].forEach(function (handler) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[23682,23743],"range":[23663,23743],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":60,"label":"olives"}');
                _model.unwatchValue(handler);
            });
            delete _observers[id];
        }
    }

    /**
     * Define the model to watch for
     * @param {Store} model the model to watch for changes
     * @returns {Boolean} true if the model was set
     */
    this.setModel = function setModel(model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[24007,24038],"range":[23982,24038],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":62,"label":"olives"}');
        _model = model;
    };

    /**
     * Get the store that is watched for
     * for debugging only
     * @private
     * @returns the Store
     */
    this.getModel = function getModel() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[24206,24236],"range":[24186,24236],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":63,"label":"olives"}');
        return _model;
    };

    /**
     * The item renderer defines a dom node that can be duplicated
     * It is made available for debugging purpose, don't use it
     * @private
     */
    this.ItemRenderer = function ItemRenderer($plugins, $rootNode) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[24469,32539],"range":[24426,32539],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":82,"label":"olives"}');

        /**
         * The node that will be cloned
         * @private
         */
        var _node = null,

        /**
         * The object that contains plugins.name and plugins.apply
         * @private
         */
        _plugins = null,

        /**
         * The _rootNode where to append the created items
         * @private
         */
        _rootNode = null,

        /**
         * The lower boundary
         * @private
         */
        _start = null,

        /**
         * The number of item to display
         * @private
         */
        _nb = null;

        /**
         * Set the duplicated node
         * @private
         */
        this.setRenderer = function setRenderer(node) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[25187,25249],"range":[25160,25249],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":64,"label":"olives"}');
            _node = node;
            return true;
        };

        /**
         * Returns the node that is going to be used for rendering
         * @private
         * @returns the node that is duplicated
         */
        this.getRenderer = function getRenderer() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[25461,25498],"range":[25438,25498],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":65,"label":"olives"}');
            return _node;
        };

        /**
         * Sets the rootNode and gets the node to copy
         * @private
         * @param {HTMLElement|SVGElement} rootNode
         * @returns
         */
        this.setRootNode = function setRootNode(rootNode) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[25730,25985],"range":[25699,25985],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":66,"label":"olives"}');
            var renderer;
            _rootNode = rootNode;
            renderer = _rootNode.querySelector("*");
            this.setRenderer(renderer);
            if (renderer) {
                _rootNode.removeChild(renderer);
            }
        };

        /**
         * Gets the rootNode
         * @private
         * @returns _rootNode
         */
        this.getRootNode = function getRootNode() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[26141,26182],"range":[26118,26182],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":67,"label":"olives"}');
            return _rootNode;
        };

        /**
         * Set the plugins objet that contains the name and the apply function
         * @private
         * @param plugins
         * @returns true
         */
        this.setPlugins = function setPlugins(plugins) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[26414,26482],"range":[26385,26482],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":68,"label":"olives"}');
            _plugins = plugins;
            return true;
        };

        /**
         * Get the plugins object
         * @private
         * @returns the plugins object
         */
        this.getPlugins = function getPlugins() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[26650,26690],"range":[26628,26690],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":69,"label":"olives"}');
            return _plugins;
        };

        /**
         * The nodes created from the items are stored here
         * @private
         */
        this.items = {};

        /**
         * Set the start limit
         * @private
         * @param {Number} start the value to start rendering the items from
         * @returns the value
         */
        this.setStart = function setStart(start) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[27054,27134],"range":[27029,27134],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":70,"label":"olives"}');
            _start = parseInt(start, 10);
            return _start;
        };

        /**
         * Get the start value
         * @private
         * @returns the start value
         */
        this.getStart = function getStart() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[27292,27330],"range":[27272,27330],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":71,"label":"olives"}');
            return _start;
        };

        /**
         * Set the number of item to display
         * @private
         * @param {Number/String} nb the number of item to display or "*" for all
         * @returns the value
         */
        this.setNb = function setNb(nb) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[27574,27662],"range":[27555,27662],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":72,"label":"olives"}');
            _nb = nb == "*" ? nb : parseInt(nb, 10);
            return _nb;
        };

        /**
         * Get the number of item to display
         * @private
         * @returns the value
         */
        this.getNb = function getNb() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[27822,27857],"range":[27805,27857],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":73,"label":"olives"}');
            return _nb;
        };

        /**
         * Adds a new item and adds it in the items list
         * @private
         * @param {Number} id the id of the item
         * @returns
         */
        this.addItem = function addItem(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[28074,28799],"range":[28053,28799],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":74,"label":"olives"}');
            var node,
                next;

            if (typeof id == "number" && !this.items[id]) {
                next = this.getNextItem(id);
                node = this.create(id);
                if (node) {
                    // IE (until 9) apparently fails to appendChild when insertBefore's second argument is null, hence this.
                    if (next) {
                        _rootNode.insertBefore(node, next);
                    } else {
                        _rootNode.appendChild(node);
                    }
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        };

        /**
         * Get the next item in the item store given an id.
         * @private
         * @param {Number} id the id to start from
         * @returns
         */
        this.getNextItem = function getNextItem(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[29029,29460],"range":[29004,29460],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":76,"label":"olives"}');
            var keys = Object.keys(this.items).map(function (string) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[29100,29162],"range":[29082,29162],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":75,"label":"olives"}');
                    return Number(string);
                }),
                closest = getClosest.greaterNumber(id, keys),
                closestId = keys[closest];

            // Only return if different
            if (closestId != id) {
                return this.items[closestId];
            } else {
                return;
            }
        };

        /**
         * Remove an item from the dom and the items list
         * @private
         * @param {Number} id the id of the item to remove
         * @returns
         */
        this.removeItem = function removeItem(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[29694,29989],"range":[29670,29989],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":77,"label":"olives"}');
            var item = this.items[id];
            if (item) {
                _rootNode.removeChild(item);
                delete this.items[id];
                _removeObserversForId(id);
                return true;
            } else {
                return false;
            }
        };

        /**
         * create a new node. Actually makes a clone of the initial one
         * and adds pluginname_id to each node, then calls plugins.apply to apply all plugins
         * @private
         * @param id
         * @param pluginName
         * @returns the associated node
         */
        this.create = function create(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[30334,30759],"range":[30314,30759],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":79,"label":"olives"}');
            if (_model.has(id)) {
                var newNode = _node.cloneNode(true),
                nodes = getNodes(newNode);

                toArray(nodes).forEach(function (child) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[30523,30617],"range":[30506,30617],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":78,"label":"olives"}');
                    child.setAttribute("data-" + _plugins.name+"_id", id);
                });

                this.items[id] = newNode;
                _plugins.apply(newNode);
                return newNode;
            }
        };

        /**
         * Renders the dom tree, adds nodes that are in the boundaries
         * and removes the others
         * @private
         * @returns true boundaries are set
         */
        this.render = function render() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[30995,32382],"range":[30977,32382],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":81,"label":"olives"}');
            // If the number of items to render is all (*)
            // Then get the number of items
            var _tmpNb = _nb == "*" ? _model.count() : _nb;

            // This will store the items to remove
            var marked = [];

            // Render only if boundaries have been set
            if (_nb !== null && _start !== null) {

                // Loop through the existing items
                simpleLoop(this.items, function (value, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[31461,31764],"range":[31439,31764],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":80,"label":"olives"}');
                    // If an item is out of the boundary
                    idx = Number(idx);

                    if (idx < _start || idx >= (_start + _tmpNb) || !_model.has(idx)) {
                        // Mark it
                        marked.push(idx);
                    }
                }, this);

                // Remove the marked item from the highest id to the lowest
                // Doing this will avoid the id change during removal
                // (removing id 2 will make id 3 becoming 2)
                marked.sort(compareNumbers.desc).forEach(this.removeItem, this);

                // Now that we have removed the old nodes
                // Add the missing one
                for (var i=_start, l=_tmpNb+_start; i<l; i++) {
                    this.addItem(i);
                }
                return true;
            } else {
                return false;
            }
        };

        if ($plugins) {
            this.setPlugins($plugins);
        }
        if ($rootNode) {
            this.setRootNode($rootNode);
        }
    };

    /**
     * Save an itemRenderer according to its id
     * @private
     * @param {String} id the id of the itemRenderer
     * @param {ItemRenderer} itemRenderer an itemRenderer object
     */
    this.setItemRenderer = function setItemRenderer(id, itemRenderer) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[32810,32890],"range":[32767,32890],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":83,"label":"olives"}');
        id = id || "default";
        _itemRenderers[id] = itemRenderer;
    };

    /**
     * Get an itemRenderer
     * @private
     * @param {String} id the name of the itemRenderer
     * @returns the itemRenderer
     */
    this.getItemRenderer = function getItemRenderer(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[33096,33138],"range":[33067,33138],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":84,"label":"olives"}');
        return _itemRenderers[id];
    };

    /**
     * Expands the inner dom nodes of a given dom node, filling it with model's values
     * @param {HTMLElement|SVGElement} node the dom node to apply foreach to
     */
    this.foreach = function foreach(node, idItemRenderer, start, nb) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[33390,33965],"range":[33340,33965],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":86,"label":"olives"}');
        var itemRenderer = new this.ItemRenderer(this.plugins, node);

        itemRenderer.setStart(start || 0);
        itemRenderer.setNb(nb || "*");

        itemRenderer.render();

        // Add the newly created item
        _model.watch("added", itemRenderer.render, itemRenderer);

        // If an item is deleted
        _model.watch("deleted", function (idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[33763,33890],"range":[33748,33890],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":85,"label":"olives"}');
            itemRenderer.render();
            // Also remove all observers
            _removeObserversForId(idx);
        },this);

        this.setItemRenderer(idItemRenderer, itemRenderer);
     };

     /**
      * Update the lower boundary of a foreach
      * @param {String} id the id of the foreach to update
      * @param {Number} start the new value
      * @returns true if the foreach exists
      */
     this.updateStart = function updateStart(id, start) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[34236,34452],"range":[34204,34452],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":87,"label":"olives"}');
         var itemRenderer = this.getItemRenderer(id);
         if (itemRenderer) {
             itemRenderer.setStart(start);
             return true;
         } else {
             return false;
         }
     };

     /**
      * Update the number of item to display in a foreach
      * @param {String} id the id of the foreach to update
      * @param {Number} nb the number of items to display
      * @returns true if the foreach exists
      */
     this.updateNb = function updateNb(id, nb) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[34739,34949],"range":[34713,34949],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":88,"label":"olives"}');
         var itemRenderer = this.getItemRenderer(id);
         if (itemRenderer) {
             itemRenderer.setNb(nb);
             return true;
         } else {
             return false;
         }
     };

     /**
      * Refresh a foreach after having modified its limits
      * @param {String} id the id of the foreach to refresh
      * @returns true if the foreach exists
      */
     this.refresh = function refresh(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[35174,35376],"range":[35153,35376],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":89,"label":"olives"}');
        var itemRenderer = this.getItemRenderer(id);
        if (itemRenderer) {
            itemRenderer.render();
            return true;
        } else {
            return false;
        }
     };

    /**
     * Both ways binding between a dom node attributes and the model
     * @param {HTMLElement|SVGElement} node the dom node to apply the plugin to
     * @param {String} name the name of the property to look for in the model's value
     * @returns
     */
    this.bind = function bind(node, property, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[35698,38147],"range":[35662,38147],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":92,"label":"olives"}');

        // Name can be unset if the value of a row is plain text
        name = name || "";

        // In case of an array-like model the id is the index of the model's item to look for.
        // The _id is added by the foreach function
        var id = node.getAttribute("data-" + this.plugins.name+"_id"),

        // Else, it is the first element of the following
        split = name.split("."),

        // So the index of the model is either id or the first element of split
        modelIdx = id || split.shift(),

        // And the name of the property to look for in the value is
        prop = id ? name : split.join("."),

        // Get the model's value
        get = nestedProperty.get(_model.get(modelIdx), prop),

        // When calling bind like bind:newBinding,param1, param2... we need to get them
        extraParam = toArray(arguments).slice(3);

        // 0 and false are acceptable falsy values
        if (get || get === 0 || get === false) {
            // If the binding hasn't been overriden
            if (!this.execBinding.apply(this,
                    [node, property, get]
                // Extra params are passed to the new binding too
                    .concat(extraParam))) {
                // Execute the default one which is a simple assignation
                //node[property] = get;
                setAttribute(node, property, get);
            }
        }

        // Only watch for changes (double way data binding) if the binding
        // has not been redefined
        if (!this.hasBinding(property)) {
            node.addEventListener("change", function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[37325,37618],"range":[37308,37618],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":90,"label":"olives"}');
                if (_model.has(modelIdx)) {
                    if (prop) {
                        _model.update(modelIdx, name, node[property]);
                    } else {
                        _model.set(modelIdx, node[property]);
                    }
                }
            }, true);

        }

        // Watch for changes
        this.observers[modelIdx] = this.observers[modelIdx] || [];
        this.observers[modelIdx].push(_model.watchValue(modelIdx, function (value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[37818,38131],"range":[37801,38131],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":91,"label":"olives"}');
            if (!this.execBinding.apply(this,
                    [node, property, nestedProperty.get(value, prop)]
                    // passing extra params too
                    .concat(extraParam))) {

                setAttribute(node, property, nestedProperty.get(value, prop));
            }
        }, this));

    };

    /**
     * Set the node's value into the model, the name is the model's property
     * @private
     * @param {HTMLElement|SVGElement} node
     * @returns true if the property is added
     */
    this.set = function set(node) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[38383,38540],"range":[38364,38540],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":93,"label":"olives"}');
        if (node.name) {
            _model.set(node.name, node.value);
            return true;
        } else {
            return false;
        }
    };

    this.getItemIndex = function getElementId(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[38594,38833],"range":[38567,38833],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":94,"label":"olives"}');
        var dataset = getDataset(dom);

        if (dataset && typeof dataset[this.plugins.name + "_id"] != "undefined") {
            return +dataset[this.plugins.name + "_id"];
        } else {
            return false;
        }
    };

    /**
     * Prevents the submit and set the model with all form's inputs
     * @param {HTMLFormElement} DOMfrom
     * @returns true if valid form
     */
    this.form = function form(DOMform) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[39034,39414],"range":[39011,39414],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":96,"label":"olives"}');
        if (DOMform && DOMform.nodeName == "FORM") {
            var that = this;
            DOMform.addEventListener("submit", function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[39182,39322],"range":[39165,39322],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":95,"label":"olives"}');
                toArray(DOMform.querySelectorAll("[name]")).forEach(that.set, that);
                event.preventDefault();
            }, true);
            return true;
        } else {
            return false;
        }
    };

    /**
     * Add a new way to handle a binding
     * @param {String} name of the binding
     * @param {Function} binding the function to handle the binding
     * @returns
     */
    this.addBinding = function addBinding(name, binding) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[39658,39861],"range":[39623,39861],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":97,"label":"olives"}');
        if (name && typeof name == "string" && typeof binding == "function") {
            _bindings[name] = binding;
            return true;
        } else {
            return false;
        }
    };

    /**
     * Execute a binding
     * Only used by the plugin
     * @private
     * @param {HTMLElement} node the dom node on which to execute the binding
     * @param {String} name the name of the binding
     * @param {Any type} value the value to pass to the function
     * @returns
     */
    this.execBinding = function execBinding(node, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[40219,40424],"range":[40186,40424],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":98,"label":"olives"}');
        if (this.hasBinding(name)) {
            _bindings[name].apply(node, Array.prototype.slice.call(arguments, 2));
            return true;
        } else {
            return false;
        }
    };

    /**
     * Check if the binding exists
     * @private
     * @param {String} name the name of the binding
     * @returns
     */
    this.hasBinding = function hasBinding(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[40610,40664],"range":[40584,40664],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":99,"label":"olives"}');
        return _bindings.hasOwnProperty(name);
    };

    /**
     * Get a binding
     * For debugging only
     * @private
     * @param {String} name the name of the binding
     * @returns
     */
    this.getBinding = function getBinding(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[40862,40901],"range":[40836,40901],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":100,"label":"olives"}');
        return _bindings[name];
    };

    /**
     * Add multiple binding at once
     * @param {Object} list the list of bindings to add
     * @returns
     */
    this.addBindings = function addBindings(list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[41078,41206],"range":[41051,41206],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":102,"label":"olives"}');
        return simpleLoop(list, function (binding, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[41137,41192],"range":[41112,41192],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":101,"label":"olives"}');
            this.addBinding(name, binding);
        }, this);
    };

    // Inits the model
    this.setModel($model);
    // Inits bindings

    if ($bindings) {
        this.addBindings($bindings);
    }
};

},{"compare-numbers":10,"get-closest":16,"get-dataset":17,"get-nodes":19,"nested-property":25,"simple-loop":44,"to-array":52,"watch-notify":58}],12:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[41531,48829],"range":[41499,48829],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":128,"label":"olives"}');
/**
* @license dom-stack https://github.com/cosmosio/dom-stack
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var toArray = require("to-array");

/**
 * @class
 * A Stack is a tool for managing DOM elements as groups. Within a group, dom elements
 * can be added, removed, moved around. The group can be moved to another parent node
 * while keeping the DOM elements in the same order, excluding the parent dom elements's
 * children that are not in the Stack.
 */
module.exports = function StackConstructor($parent) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[42107,48825],"range":[42072,48825],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":127,"label":"olives"}');

	/**
	 * The parent DOM element is a documentFragment by default
	 * @private
	 */
	var _parent = document.createDocumentFragment(),

	/**
	 * The place where the dom elements hide
	 * @private
	 */
	_hidePlace = document.createElement("div"),

	/**
	 * The list of dom elements that are part of the stack
	 * Helps for excluding elements that are not part of it
	 * @private
	 */
	_childNodes = [],

	_lastTransit = null;

	/**
	 * Add a DOM element to the stack. It will be appended.
	 * @param {HTMLElement} dom the DOM element to add
	 * @returns {HTMLElement} dom
	 */
	this.add = function add(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[42714,42844],"range":[42696,42844],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":105,"label":"olives"}');
		if (!this.has(dom)) {
			_parent.appendChild(dom);
			_childNodes.push(dom);
			return dom;
		} else {
			return false;
		}
	};

	/**
	 * Remove a DOM element from the stack.
	 * @param {HTMLElement} dom the DOM element to remove
	 * @returns {HTMLElement} dom
	 */
	this.remove = function remove(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[43020,43206],"range":[42999,43206],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":106,"label":"olives"}');
		var index;
		if (this.has(dom)) {
			index = _childNodes.indexOf(dom);
			_parent.removeChild(dom);
			_childNodes.splice(index, 1);
			return dom;
		} else {
			return false;
		}
	};

	/**
	 * Place a stack by appending its DOM elements to a new parent
	 * @param {HTMLElement} newParentDom the new DOM element to append the stack to
	 * @returns {HTMLElement} newParentDom
	 */
	this.place = function place(newParentDom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[43447,43643],"range":[43418,43643],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":108,"label":"olives"}');
		[].slice.call(_parent.childNodes).forEach(function (childDom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[43513,43592],"range":[43493,43592],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":107,"label":"olives"}');
			if (this.has(childDom)) {
				newParentDom.appendChild(childDom);
			}
		}, this);
		return this._setParent(newParentDom);
	};

	/**
	 * Move an element up in the stack
	 * @param {HTMLElement} dom the dom element to move up
	 * @returns {HTMLElement} dom
	 */
	this.up = function up(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[43807,43961],"range":[43790,43961],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":109,"label":"olives"}');
		if (this.has(dom)) {
			var domPosition = this.getPosition(dom);
			this.move(dom, domPosition + 1);
			return dom;
		} else {
			return false;
		}
	};

	/**
	 * Move an element down in the stack
	 * @param {HTMLElement} dom the dom element to move down
	 * @returns {HTMLElement} dom
	 */
	this.down = function down(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[44133,44287],"range":[44114,44287],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":110,"label":"olives"}');
		if (this.has(dom)) {
			var domPosition = this.getPosition(dom);
			this.move(dom, domPosition - 1);
			return dom;
		} else {
			return false;
		}
	};

	/**
	 * Move an element that is already in the stack to a new position
	 * @param {HTMLElement} dom the dom element to move
	 * @param {Number} position the position to which to move the DOM element
	 * @returns {HTMLElement} dom
	 */
	this.move = function move(dom, position) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[44568,45018],"range":[44539,45018],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":111,"label":"olives"}');
		if (this.has(dom)) {
			var domIndex = _childNodes.indexOf(dom);
			_childNodes.splice(domIndex, 1);
			// Preventing a bug in IE when insertBefore is not given a valid
			// second argument
			var nextElement = getNextElementInDom(position);
			if (nextElement) {
				_parent.insertBefore(dom, nextElement);
			} else {
				_parent.appendChild(dom);
			}
			_childNodes.splice(position, 0, dom);
			return dom;
		} else {
			return false;
		}
	};

	function getNextElementInDom(position) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[45061,45309],"range":[45022,45309],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":112,"label":"olives"}');
		if (position >= _childNodes.length) {
			return;
		}
		var nextElement = _childNodes[position];
		if (toArray(_parent.childNodes).indexOf(nextElement) == -1) {
			return getNextElementInDom(position +1);
		} else {
			return nextElement;
		}
	}

	/**
	 * Insert a new element at a specific position in the stack
	 * @param {HTMLElement} dom the dom element to insert
	 * @param {Number} position the position to which to insert the DOM element
	 * @returns {HTMLElement} dom
	 */
	this.insert = function insert(dom, position) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[45591,45767],"range":[45560,45767],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":113,"label":"olives"}');
		if (!this.has(dom)) {
			_childNodes.splice(position, 0, dom);
			_parent.insertBefore(dom, _parent.childNodes[position]);
			return dom;
		} else {
			return false;
		}
	};

	/**
	 * Get the position of an element in the stack
	 * @param {HTMLElement} dom the dom to get the position from
	 * @returns {HTMLElement} dom
	 */
	this.getPosition = function getPosition(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[45967,46006],"range":[45941,46006],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":114,"label":"olives"}');
		return _childNodes.indexOf(dom);
	};

	/**
	 * Count the number of elements in a stack
	 * @returns {Number} the number of items
	 */
	this.count = function count() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[46136,46176],"range":[46119,46176],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":115,"label":"olives"}');
		return _parent.childNodes.length;
	};

	/**
	 * Tells if a DOM element is in the stack
	 * @param {HTMLElement} dom the dom to tell if its in the stack
	 * @returns {HTMLElement} dom
	 */
	this.has = function has(childDom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[46363,46409],"range":[46340,46409],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":116,"label":"olives"}');
		return this.getPosition(childDom) >= 0;
	};

	/**
	 * Hide a dom element that was previously added to the stack
	 * It will be taken out of the dom until displayed again
	 * @param {HTMLElement} dom the dom to hide
	 * @return {boolean} if dom element is in the stack
	 */
	this.hide = function hide(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[46672,46779],"range":[46653,46779],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":117,"label":"olives"}');
		if (this.has(dom)) {
			_hidePlace.appendChild(dom);
			return true;
		} else {
			return false;
		}
	};

	/**
	 * Show a dom element that was previously hidden
	 * It will be added back to the dom
	 * @param {HTMLElement} dom the dom to show
	 * @return {boolean} if dom element is current hidden
	 */
	this.show = function show(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47011,47164],"range":[46992,47164],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":118,"label":"olives"}');
		if (this.has(dom) && dom.parentNode === _hidePlace) {
			this.move(dom, _childNodes.indexOf(dom));
			return true;
		} else {
			return false;
		}
	};

	/**
	 * Helper function for hiding all the dom elements
	 */
	this.hideAll = function hideAll() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47264,47308],"range":[47245,47308],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":119,"label":"olives"}');
		_childNodes.forEach(this.hide, this);
	};

	/**
	 * Helper function for showing all the dom elements
	 */
	this.showAll = function showAll() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47409,47453],"range":[47390,47453],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":120,"label":"olives"}');
		_childNodes.forEach(this.show, this);
	};

	/**
	 * Get the parent node that a stack is currently attached to
	 * @returns {HTMLElement} parent node
	 */
	this.getParent = function getParent() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47606,47628],"range":[47585,47628],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":121,"label":"olives"}');
		return _parent;
	};

	/**
	 * Set the parent element (without appending the stacks dom elements to)
	 * @private
	 */
	this._setParent = function _setParent(parent) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47775,47820],"range":[47747,47820],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":122,"label":"olives"}');
		_parent = parent;
		return _parent;
    };

	/**
	 * Get the place where the DOM elements are hidden
	 * @private
	 */
	this.getHidePlace = function getHidePlace() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47943,47968],"range":[47919,47968],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":123,"label":"olives"}');
		return _hidePlace;
	};

	/**
	 * Set the place where the DOM elements are hidden
	 * @private
	 */
	this.setHidePlace = function setHidePlace(hidePlace) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[48100,48130],"range":[48067,48130],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":124,"label":"olives"}');
		_hidePlace = hidePlace;
	};

	/**
	 * Get the last dom element that the stack transitted to
	 * @returns {HTMLElement} the last dom element
	 */
	this.getLastTransit = function getLastTransit() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[48298,48325],"range":[48272,48325],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":125,"label":"olives"}');
		return _lastTransit;
	};

	/**
	 * Transit between views, will show the new one and hide the previous
	 * element that the stack transitted to, if any.
	 * @param {HTMLElement} dom the element to transit to
	 * @returns {Boolean} false if the element can't be shown
	 */
	this.transit = function transit(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[48611,48764],"range":[48589,48764],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":126,"label":"olives"}');
		if (_lastTransit) {
			this.hide(_lastTransit);
		}
		if (this.show(dom)) {
			_lastTransit = dom;
			return true;
		} else {
			return false;
		}
	};

    if ($parent) {
	    this._setParent($parent);
    }

};

},{"to-array":52}],13:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[48883,50010],"range":[48851,50010],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":129,"label":"olives"}');
/**
 * Emily.js - http://flams.github.com/emily/
 * Copyright(c) 2012-2015 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
 var compareNumbers = require("compare-numbers"),
     nestedProperty = require("nested-property"),
     getClosest = require("get-closest");

module.exports = {
    Observable: require("watch-notify"),
    Promise: require("./Promise"),
    Router: require("highway"),
    StateMachine: require("synchronous-fsm"),
    Store: require("observable-store"),
    Tools: {
         getGlobal: require("get-global"),
         mixin: require("simple-object-mixin"),
         count: require("object-count"),
         compareNumbers: compareNumbers.asc,
         toArray: require("to-array"),
         loop: require("simple-loop"),
         objectsDiffs : require("shallow-diff"),
         clone: require("shallow-copy"),
         getNestedProperty: nestedProperty.get,
         setNestedProperty: nestedProperty.set,
         closest: getClosest.number,
         closestGreater: getClosest.greaterNumber,
         closestLower: getClosest.lowerNumber
     },
    Transport: require("transport")
};

},{"./Promise":14,"compare-numbers":10,"get-closest":16,"get-global":18,"highway":20,"nested-property":25,"object-count":26,"observable-store":27,"shallow-copy":42,"shallow-diff":43,"simple-loop":44,"simple-object-mixin":45,"synchronous-fsm":50,"to-array":52,"transport":53,"watch-notify":58}],14:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[50339,57707],"range":[50307,57707],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":152,"label":"olives"}');
/**
* Emily.js - http://flams.github.com/emily/
* Copyright(c) 2012-2015 Olivier Scherrer <pode.fr@gmail.com>
* MIT Licensed
*/
"use strict";

var Observable = require("watch-notify"),
StateMachine = require("synchronous-fsm");

/**
* @class
* Create a promise/A+
*/
module.exports = function PromiseConstructor() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[50655,57703],"range":[50625,57703],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":151,"label":"olives"}');

    /**
     * The fulfilled value
     * @private
     */
    var _value = null,

    /**
     * The rejection reason
     * @private
     */
    _reason = null,

    /**
     * The funky observable
     * @private
     */
    _observable = new Observable(),

    /**
     * The stateMachine
     * @private
     */
    _stateMachine = new StateMachine("Pending", {

        // The promise is pending
        "Pending": [

            // It can only be fulfilled when pending
            ["fulfill", function onFulfill(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[51185,51341],"range":[51159,51341],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":130,"label":"olives"}');
                _value = value;
                _observable.notify("fulfill", value);
            // Then it transits to the fulfilled state
            }, "Fulfilled"],

            // it can only be rejected when pending
            ["reject", function onReject(reason) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[51459,51616],"range":[51433,51616],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":131,"label":"olives"}');
                _reason = reason;
                _observable.notify("reject", reason);
            // Then it transits to the rejected state
            }, "Rejected"],

            // When pending, add the resolver to an observable
            ["toFulfill", function toFulfill(resolver) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[51750,51821],"range":[51721,51821],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":132,"label":"olives"}');
                _observable.watch("fulfill", resolver);
            }],

            // When pending, add the resolver to an observable
            ["toReject", function toReject(resolver) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[51941,52011],"range":[51913,52011],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":133,"label":"olives"}');
                _observable.watch("reject", resolver);
            }]],

        // When fulfilled,
        "Fulfilled": [
            // We directly call the resolver with the value
            ["toFulfill", function toFulfill(resolver) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[52181,52233],"range":[52152,52233],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":134,"label":"olives"}');
                   resolver(_value);
            }]],

        // When rejected
        "Rejected": [
            // We directly call the resolver with the reason
            ["toReject", function toReject(resolver) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[52399,52452],"range":[52371,52452],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":135,"label":"olives"}');
                   resolver(_reason);
            }]]
    });

    /**
     * Fulfilled the promise.
     * A promise can be fulfilld only once.
     * @param the fulfillment value
     * @returns the promise
     */
    this.fulfill = function fulfill(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[52661,52789],"range":[52637,52789],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":137,"label":"olives"}');
        setTimeout(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[52694,52756],"range":[52682,52756],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":136,"label":"olives"}');
            _stateMachine.event("fulfill", value);
        }, 0);
        return this;

    };

    /**
     * Reject the promise.
     * A promise can be rejected only once.
     * @param the rejection value
     * @returns true if the rejection function was called
     */
    this.reject = function reject(reason) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[53013,53140],"range":[52989,53140],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":139,"label":"olives"}');
        setTimeout(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[53046,53108],"range":[53034,53108],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":138,"label":"olives"}');
            _stateMachine.event("reject", reason);
        }, 0);
        return this;
    };

    /**
     * The callbacks to call after fulfillment or rejection
     * @param {Function} fulfillmentCallback the first parameter is a success function, it can be followed by a scope
     * @param {Function} the second, or third parameter is the rejection callback, it can also be followed by a scope
     * @examples:
     *
     * then(fulfillment)
     * then(fulfillment, scope, rejection, scope)
     * then(fulfillment, rejection)
     * then(fulfillment, rejection, scope)
     * then(null, rejection, scope)
     * @returns {Promise} the new promise
     */
    this.then = function then() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[53744,55459],"range":[53728,55459],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":142,"label":"olives"}');
        var promise = new PromiseConstructor();

        // If a fulfillment callback is given
        if (arguments[0] instanceof Function) {
            // If the second argument is also a function, then no scope is given
            if (arguments[1] instanceof Function) {
                _stateMachine.event("toFulfill", this.makeResolver(promise, arguments[0]));
            } else {
                // If the second argument is not a function, it's the scope
                _stateMachine.event("toFulfill", this.makeResolver(promise, arguments[0], arguments[1]));
            }
        } else {
            // If no fulfillment callback given, give a default one
            _stateMachine.event("toFulfill", this.makeResolver(promise, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[54500,54556],"range":[54488,54556],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":140,"label":"olives"}');
                promise.fulfill(_value);
            }));
        }

        // if the second arguments is a callback, it's the rejection one, and the next argument is the scope
        if (arguments[1] instanceof Function) {
            _stateMachine.event("toReject", this.makeResolver(promise, arguments[1], arguments[2]));
        }

        // if the third arguments is a callback, it's the rejection one, and the next arguments is the sopce
        if (arguments[2] instanceof Function) {
            _stateMachine.event("toReject", this.makeResolver(promise, arguments[2], arguments[3]));
        }

        // If no rejection callback is given, give a default one
        if (!(arguments[1] instanceof Function) &&
            !(arguments[2] instanceof Function)) {
            _stateMachine.event("toReject", this.makeResolver(promise, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[55359,55415],"range":[55347,55415],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":141,"label":"olives"}');
                promise.reject(_reason);
            }));
        }

        return promise;
    };

    /**
     * Cast a thenable into an Emily promise
     * @returns {Boolean} false if the given promise is not a thenable
     */
    this.cast = function cast(thenable) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[55634,55959],"range":[55610,55959],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":143,"label":"olives"}');
        if (thenable instanceof PromiseConstructor ||
            typeof thenable == "object" ||
            typeof thenable == "function") {

            thenable.then(this.fulfill.bind(this),
                    this.reject.bind(this));

            return true;
        } else {
            return false;
        }
    };

    /**
     * Make a resolver
     * for debugging only
     * @private
     * @returns {Function} a closure
     */
    this.makeResolver = function makeResolver(promise, func, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56148,56754],"range":[56104,56754],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":145,"label":"olives"}');
        return function resolver(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56190,56747],"range":[56165,56747],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":144,"label":"olives"}');
            var returnedPromise;

            try {
                returnedPromise = func.call(scope, value);
                if (returnedPromise === promise) {
                    throw new TypeError("Promise A+ 2.3.1: If `promise` and `x` refer to the same object, reject `promise` with a `TypeError' as the reason.");
                }
                if (!promise.cast(returnedPromise)) {
                    promise.fulfill(returnedPromise);
                }
            } catch (err) {
                promise.reject(err);
            }

        };
    };

    /**
     * Returns the reason
     * for debugging only
     * @private
     */
    this.getReason = function getReason() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56883,56914],"range":[56862,56914],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":146,"label":"olives"}');
        return _reason;
    };

    /**
     * Returns the reason
     * for debugging only
     * @private
     */
    this.getValue = function getValue() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57041,57071],"range":[57021,57071],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":147,"label":"olives"}');
        return _value;
    };

    /**
     * Get the promise's observable
     * for debugging only
     * @private
     * @returns {Observable}
     */
    this.getObservable = function getObservable() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57247,57282],"range":[57222,57282],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":148,"label":"olives"}');
        return _observable;
    };

    /**
     * Get the promise's stateMachine
     * for debugging only
     * @private
     * @returns {StateMachine}
     */
    this.getStateMachine = function getStateMachine() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57466,57503],"range":[57439,57503],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":149,"label":"olives"}');
        return _stateMachine;
    };

    /**
     * Get the statesMachine's states
     * for debugging only
     * @private
     * @returns {Object}
     */
    this.getStates = function getStates() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57669,57700],"range":[57648,57700],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":150,"label":"olives"}');
        return _states;
    };
};

},{"synchronous-fsm":50,"watch-notify":58}],15:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[57786,61505],"range":[57754,61505],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":163,"label":"olives"}');
/**
* @license event-plugin https://github.com/flams/event-plugin
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com> - Olivier Wietrich <olivier.wietrich@gmail.com>
*/
"use strict";

/**
* @class
* @requires Utils
* Event plugin adds events listeners to DOM nodes.
* It can also delegate the event handling to a parent dom node
* The event plugin constructor.
* ex: new EventPlugin({method: function(){} ...}, false);
* @param {Object} the object that has the event handling methods
* @param {Boolean} $isMobile if the event handler has to map with touch events
*/
module.exports = function EventPluginConstructor($parent, $isMobile) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[58457,61501],"range":[58405,61501],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":162,"label":"olives"}');

    /**
     * The parent callback
     * @private
     */
    var _parent = null,

    /**
     * Load the tool at runtime so that it doesn't throw an error
     * when not loaded in a browser
     */
    matchesSelector = require("matches-selector"),

    /**
     * The mapping object.
     * @private
     */
    _map = {
        "mousedown" : "touchstart",
        "mouseup" : "touchend",
        "mousemove" : "touchmove"
    },

    /**
     * Is touch device.
     * @private
     */
    _isMobile = !!$isMobile;

    /**
     * Add mapped event listener (for testing purpose).
     * @private
     */
    this.addEventListener = function addEventListener(node, event, callback, useCapture) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59159,59238],"range":[59098,59238],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":153,"label":"olives"}');
        node.addEventListener(this.map(event), callback, !!useCapture);
    };

    /**
     * Listen to DOM events.
     * @param {Object} node DOM node
     * @param {String} name event's name
     * @param {String} listener callback's name
     * @param {String} useCapture string
     */
    this.listen = function listen(node, name, listener, useCapture) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59521,59663],"range":[59471,59663],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":155,"label":"olives"}');
        this.addEventListener(node, name, function(e){instrumentation_log('{"type":"FunctionExpression","bodyRange":[59576,59641],"range":[59565,59641],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":154,"label":"olives"}');
            _parent[listener].call(_parent, e, node);
        }, !!useCapture);
    };

    /**
     * Delegate the event handling to a parent DOM element
     * @param {Object} node DOM node
     * @param {String} selector CSS3 selector to the element that listens to the event
     * @param {String} name event's name
     * @param {String} listener callback's name
     * @param {String} useCapture string
     */
    this.delegate = function delegate(node, selector, name, listener, useCapture) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[60077,60304],"range":[60015,60304],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":157,"label":"olives"}');
        this.addEventListener(node, name, function(event){instrumentation_log('{"type":"FunctionExpression","bodyRange":[60136,60282],"range":[60121,60282],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":156,"label":"olives"}');
            if (matchesSelector(event.target, selector)) {
                _parent[listener].call(_parent, event, node);
            }
        }, !!useCapture);
    };

    /**
     * Get the parent object.
     * @return {Object} the parent object
     */
    this.getParent = function getParent() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[60437,60468],"range":[60416,60468],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":158,"label":"olives"}');
        return _parent;
    };

    /**
     * Set the parent object.
     * The parent object is an object which the functions are called by node listeners.
     * @param {Object} the parent object
     * @return true if object has been set
     */
    this.setParent = function setParent(parent) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[60737,60870],"range":[60710,60870],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":159,"label":"olives"}');
        if (parent instanceof Object){
            _parent = parent;
            return true;
        }
        return false;
    };

    /**
     * Get event mapping.
     * @param {String} event's name
     * @return the mapped event's name
     */
    this.map = function map(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[61024,61087],"range":[61005,61087],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":160,"label":"olives"}');
        return _isMobile ? (_map[name] || name) : name;
    };

    /**
     * Set event mapping.
     * @param {String} event's name
     * @param {String} event's value
     * @return true if mapped
     */
    this.setMap = function setMap(name, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[61282,61457],"range":[61253,61457],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":161,"label":"olives"}');
        if (typeof name == "string" &&
            typeof value == "string") {
            _map[name] = value;
            return true;
        }
        return false;
    };

    //init
    this.setParent($parent);
};

},{"matches-selector":24}],16:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[61567,64873],"range":[61535,64873],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":173,"label":"olives"}');
/**
* @license get-closest https://github.com/cosmosio/get-closest
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var assert = require("assert");

/**
 * Get the closest number in an array
 * @param {Number} item the base number
 * @param {Array} array the array to search into
 * @param {Function} getDiff returns the difference between the base number and
 *   and the currently read item in the array. The item which returned the smallest difference wins.
 * @private
 */
function _getClosest(item, array, getDiff) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[62144,62570],"range":[62101,62570],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":165,"label":"olives"}');
    var closest,
        diff;

    assert(Array.isArray(array), "Get closest expects an array as second argument");

    array.forEach(function (comparedItem, comparedItemIndex) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[62325,62545],"range":[62282,62545],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":164,"label":"olives"}');
        var thisDiff = getDiff(comparedItem, item);

        if (thisDiff >= 0 && (typeof diff == "undefined" || thisDiff < diff)) {
            diff = thisDiff;
            closest = comparedItemIndex;
        }
    });

    return closest;
}

module.exports = {

  /**
   * Get the closest number in an array given a base number
   * Example: closest(30, [20, 0, 50, 29]) will return 3 as 29 is the closest item
   * @param {Number} item the base number
   * @param {Array} array the array of numbers to search into
   * @returns {Number} the index of the closest item in the array
   */
  number: function closestNumber(item, array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[62963,63096],"range":[62927,63096],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":167,"label":"olives"}');
      return _getClosest(item, array, function (comparedItem, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63033,63090],"range":[63003,63090],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":166,"label":"olives"}');
          return Math.abs(comparedItem - item);
      });
  },

  /**
   * Get the closest greater number in an array given a base number
   * Example: closest(30, [20, 0, 50, 29]) will return 2 as 50 is the closest greater item
   * @param {Number} item the base number
   * @param {Array} array the array of numbers to search into
   * @returns {Number} the index of the closest item in the array
   */
  greaterNumber: function closestGreaterNumber(item, array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63500,63623],"range":[63457,63623],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":169,"label":"olives"}');
      return _getClosest(item, array, function (comparedItem, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63570,63617],"range":[63540,63617],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":168,"label":"olives"}');
          return comparedItem - item;
      });
  },

  /**
   * Get the closest lower number in an array given a base number
   * Example: closest(30, [20, 0, 50, 29]) will return 0 as 20 is the closest lower item
   * @param {Number} item the base number
   * @param {Array} array the array of numbers to search into
   * @returns {Number} the index of the closest item in the array
   */
  lowerNumber: function closestLowerNumber(item, array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[64019,64136],"range":[63978,64136],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":171,"label":"olives"}');
    return _getClosest(item, array, function (comparedItem, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[64087,64130],"range":[64057,64130],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":170,"label":"olives"}');
        return item - comparedItem;
    });
  },

  /**
   * Get the closest item in an array given a base item and a comparator function
   * Example (closest("lundi", ["mundi", "mardi"], getLevenshteinDistance)) will return 0 for "lundi"
   * @param {*} item the base item
   * @param {Array} array an array of items
   * @param {Function} comparator a comparatof function to compare the items
   *
   * The function looks like:
   *
   * // comparedItem comes from the array
   * // baseItem is the item to compare the others to
   * // It returns a number
   * function comparator(comparedItem, baseItem) {
   *     return comparedItem - baseItem;
   * }
   */
  custom: function closestCustom(item, array, comparator) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[64812,64866],"range":[64764,64866],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":172,"label":"olives"}');
    return _getClosest(item, array, comparator);
  }

};

},{"assert":9}],17:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[64924,65752],"range":[64892,65752],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":175,"label":"olives"}');
/**
* @license get-dataset https://github.com/cosmios/get-dataset
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

/**
 * Get a domNode's dataset attribute. If dataset doesn't exist (IE)
 * then the domNode is looped through to collect them.
 * @param {HTMLElement|SVGElement} dom
 * @returns {Object} dataset
 */
 module.exports = function getDataset(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[65338,65748],"range":[65313,65748],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":174,"label":"olives"}');
    var dataset = {},
        i, l, split,join;

    if ("dataset" in dom) {
        return dom.dataset;
    } else {
        for (i=0, l=dom.attributes.length; i<l; i++) {
            split = dom.attributes[i].name.split("-");
            if (split.shift() == "data") {
                dataset[join = split.join("-")] = dom.getAttribute("data-"+join);
            }
        }
        return dataset;
    }
};

},{}],18:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[65793,66382],"range":[65761,66382],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":177,"label":"olives"}');
/**
 * @license get-global https://github.com/cosmosio/get-global
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
 */
"use strict";

/**
 * Return the global object, whatever the runtime is.
 * As we're in use strict mode, we can't just call a function and return this. Instead, we spawn a new
 * function via eval that won't be affected by 'use strict'.
 * Strict mode is enforced so it allows this code to work when packed in another 'strict mode' module.
 */
module.exports = function getGlobal() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[66337,66378],"range":[66316,66378],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":176,"label":"olives"}');
    return Function('return this')();
};

},{}],19:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[66423,66838],"range":[66391,66838],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":179,"label":"olives"}');
/**
* @license get-nodes https://github.com/cosmios/get-nodes
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var toArray = require("to-array");

module.exports = function getNodes(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[66667,66834],"range":[66644,66834],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":178,"label":"olives"}');
    var domElements = dom.querySelectorAll("*"),
        arrayDomElements = toArray(domElements);

    arrayDomElements.unshift(dom);

    return arrayDomElements;
};

},{"to-array":52}],20:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[66892,72789],"range":[66860,72789],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":198,"label":"olives"}');
/**
* @license highway https://github.com/cosmosio/highway
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2015 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var Observable = require("watch-notify"),
    toArray = require("to-array");

/**
 * @class
 * Routing allows for navigating in an application by defining routes.
 */
module.exports = function RouterConstructor() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[67275,72785],"range":[67246,72785],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":197,"label":"olives"}');

    /**
     * The routes observable (the applications use it)
     * @private
     */
    var _routes = new Observable(),

    /**
     * The events observable (used by Routing)
     * @private
     */
    _events = new Observable(),

    /**
     * The routing history
     * @private
     */
    _history = [],

    /**
     * For navigating through the history, remembers the current position
     * @private
     */
    _currentPos = -1,

    /**
     * The depth of the history
     * @private
     */
    _maxHistory = 10;

    /**
     * Only for debugging
     * @private
     */
    this.getRoutesObservable = function getRoutesObservable() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[67929,67960],"range":[67898,67960],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":180,"label":"olives"}');
        return _routes;
    };

    /**
     * Only for debugging
     * @private
     */
    this.getEventsObservable = function getEventsObservable() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[68083,68114],"range":[68052,68114],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":181,"label":"olives"}');
        return _events;
    };

    /**
     * Set the maximum length of history
     * As the user navigates through the application, the
     * routeur keeps track of the history. Set the depth of the history
     * depending on your need and the amount of memory that you can allocate it
     * @param {Number} maxHistory the depth of history
     * @returns {Boolean} true if maxHistory is equal or greater than 0
     */
    this.setMaxHistory = function setMaxHistory(maxHistory) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[68571,68726],"range":[68536,68726],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":182,"label":"olives"}');
        if (maxHistory >= 0) {
            _maxHistory = maxHistory;
            return true;
        } else {
            return false;
        }

    };

    /**
     * Get the current max history setting
     * @returns {Number} the depth of history
     */
    this.getMaxHistory = function getMaxHistory() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[68884,68919],"range":[68859,68919],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":183,"label":"olives"}');
        return _maxHistory;
    };

    /**
     * Set a new route
     * @param {String} route the name of the route
     * @param {Function} func the function to be execute when navigating to the route
     * @param {Object} scope the scope in which to execute the function
     * @returns a handle to remove the route
     */
    this.set = function set() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69245,69308],"range":[69230,69308],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":184,"label":"olives"}');
        return _routes.watch.apply(_routes, arguments);
    };

    /**
     * Remove a route
     * @param {Object} handle the handle provided by the set method
     * @returns true if successfully removed
     */
    this.unset = function unset(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69502,69549],"range":[69479,69549],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":185,"label":"olives"}');
        return _routes.unwatch(handle);
    };

    /**
     * Navigate to a route
     * @param {String} route the route to navigate to
     * @param {*} *params
     * @returns
     */
    this.navigate = function get(route) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69731,70156],"range":[69711,70156],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":186,"label":"olives"}');
        if (this.load.apply(this, arguments)) {
            // Before adding a new route to the history, we must clear the forward history
            _history.splice(_currentPos +1, _history.length);
            _history.push(toArray(arguments));
            this.ensureMaxHistory(_history);
            _currentPos = _history.length -1;
            return true;
        } else {
            return false;
        }

    };

    /**
     * Ensure that history doesn't grow bigger than the max history setting
     * @param {Store} history the history store
     * @private
     */
    this.ensureMaxHistory = function ensureMaxHistory(history) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[70378,70571],"range":[70343,70571],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":187,"label":"olives"}');
        var count = history.length,
            max = this.getMaxHistory(),
            excess = count - max;

        if (excess > 0) {
            history.splice(0, excess);
        }
    };

    /**
     * Actually loads the route
     * @private
     */
    this.load = function load() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[70670,70930],"range":[70654,70930],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":188,"label":"olives"}');
        var copy = toArray(arguments);

        if (_routes.notify.apply(_routes, copy)) {
            copy.unshift("route");
            _events.notify.apply(_events, copy);
            return true;
        } else {
            return false;
        }
    };

    /**
     * Watch for route changes
     * @param {Function} func the func to execute when the route changes
     * @param {Object} scope the scope in which to execute the function
     * @returns {Object} the handle to unwatch for route changes
     */
    this.watch = function watch(func, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71235,71294],"range":[71207,71294],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":189,"label":"olives"}');
        return _events.watch("route", func, scope);
    };

    /**
     * Unwatch routes changes
     * @param {Object} handle the handle was returned by the watch function
     * @returns true if unwatch
     */
    this.unwatch = function unwatch(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71495,71542],"range":[71470,71542],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":190,"label":"olives"}');
        return _events.unwatch(handle);
    };

    /**
     * Get the history store, for debugging only
     * @private
     */
    this.getHistoryStore = function getHistoryStore() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71680,71712],"range":[71653,71712],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":191,"label":"olives"}');
        return _history;
    };

    /**
     * Get the current length of history
     * @returns {Number} the length of history
     */
    this.getHistoryCount = function getHistoryCount() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71873,71912],"range":[71846,71912],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":192,"label":"olives"}');
        return _history.length;
    };

    /**
     * Flush the entire history
     */
    this.clearHistory = function clearHistory() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72011,72047],"range":[71987,72047],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":193,"label":"olives"}');
        _history.length = 0;
    };

    /**
     * Go back and forth in the history
     * @param {Number} nb the amount of history to rewind/forward
     * @returns true if history exists
     */
    this.go = function go(nb) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72241,72474],"range":[72225,72474],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":194,"label":"olives"}');
        var history = _history[_currentPos + nb];
        if (history) {
            _currentPos += nb;
            this.load.apply(this, history);
            return true;
        } else {
            return false;
        }
    };

    /**
     * Go back in the history, short for go(-1)
     * @returns
     */
    this.back = function back() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72589,72624],"range":[72573,72624],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":195,"label":"olives"}');
        return this.go(-1);
    };

    /**
     * Go forward in the history, short for go(1)
     * @returns
     */
    this.forward = function forward() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72747,72781],"range":[72728,72781],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":196,"label":"olives"}');
        return this.go(1);
    };

};

},{"to-array":52,"watch-notify":58}],21:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[72861,73537],"range":[72829,73537],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":202,"label":"olives"}');
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[73016,73243],"range":[72981,73243],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":199,"label":"olives"}');
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[73346,73532],"range":[73311,73532],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":201,"label":"olives"}');
    ctor.super_ = superCtor
    var TempCtor = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[73407,73409],"range":[73395,73409],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":200,"label":"olives"}');}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],22:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[73578,76222],"range":[73546,76222],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":210,"label":"olives"}');
/**
* @license local-observable-store https://github.com/cosmosio/local-observable-store
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2015 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var Store = require("observable-store"),
    loop = require("simple-loop");

/**
 * @class
 * LocalStore is an Emily's Store that can be synchronized with localStorage
 * Synchronize the store, reload your page/browser and resynchronize it with the same value
 * and it gets restored.
 * Only valid JSON data will be stored
 */
function LocalStoreConstructor() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[74139,76068],"range":[74106,76068],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":208,"label":"olives"}');

    /**
     * The name of the property in which to store the data
     * @private
     */
    var _name = null,

    /**
     * The localStorage
     * @private
     */
    _localStorage = localStorage;

    /**
     * Saves the current values in localStorage
     * @private
     */
    function persistLocalStorage() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[74462,74522],"range":[74431,74522],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":203,"label":"olives"}');
        _localStorage.setItem(_name, this.toJSON());
    }

    /**
     * Override default localStorage with a new one
     * @param local$torage the new localStorage
     * @returns {Boolean} true if success
     * @private
     */
    this.setLocalStorage = function setLocalStorage(local$torage) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74764,74964],"range":[74725,74964],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":204,"label":"olives"}');
        if (local$torage && typeof local$torage.setItem == "function") {
            _localStorage = local$torage;
            return true;
        } else {
            return false;
        }
    };

    /**
     * Get the current localStorage
     * @returns localStorage
     * @private
     */
    this.getLocalStorage = function getLocalStorage() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[75118,75155],"range":[75091,75155],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":205,"label":"olives"}');
        return _localStorage;
    };

    /**
     * Synchronize the store with localStorage
     * @param {String} name the name in which to save the data
     * @returns {Boolean} true if the param is a string
     */
    this.sync = function sync(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[75376,76065],"range":[75356,76065],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":207,"label":"olives"}');
        var json;

        if (typeof name == "string") {
            _name = name;
            json = JSON.parse(_localStorage.getItem(name));

            loop(json, function (value, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[75568,75681],"range":[75546,75681],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":206,"label":"olives"}');
                if (!this.has(idx)) {
                    this.set(idx, value);
                }
            }, this);

            persistLocalStorage.call(this);

            // Watch for modifications to update localStorage
            this.watch("added", persistLocalStorage, this);
            this.watch("updated", persistLocalStorage, this);
            this.watch("deleted", persistLocalStorage, this);
            return true;
        } else {
            return false;
        }
    };
}

module.exports = function LocalStoreFactory(init) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[76120,76218],"range":[76087,76218],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":209,"label":"olives"}');
    LocalStoreConstructor.prototype = new Store(init);
    return new LocalStoreConstructor();
};

},{"observable-store":27,"simple-loop":23}],23:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[76301,77366],"range":[76269,77366],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":212,"label":"olives"}');
/**
* @license simple-loop https://github.com/flams/simple-loop
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var assert = require("assert");

/**
 * Small abstraction for looping over objects and arrays
 * Warning: it's not meant to be used with nodeList
 * To use with nodeList, convert to array first
 * @param {Array/Object} iterated the array or object to loop through
 * @param {Function} callback the function to execute for each iteration
 * @param {Object} scope the scope in which to execute the callback
 */
module.exports = function loop(iterated, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[76938,77362],"range":[76897,77362],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":211,"label":"olives"}');
  assert(typeof iterated == "object", "simple-loop: iterated must be an array/object");
  assert(typeof callback == "function", "simple-loop: callback must be a function");

  if (Array.isArray(iterated)) {
      iterated.forEach(callback, scope);
  } else {
      for (var i in iterated) {
          if (iterated.hasOwnProperty(i)) {
              callback.call(scope, iterated[i], i, iterated);
          }
      }
  }
};

},{"assert":9}],24:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[77417,78032],"range":[77385,78032],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":214,"label":"olives"}');
'use strict';

var proto = Element.prototype;
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[77823,78030],"range":[77794,78030],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":213,"label":"olives"}');
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}
},{}],25:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[78073,83035],"range":[78041,83035],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":224,"label":"olives"}');
/**
* @license nested-property https://github.com/cosmosio/nested-property
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2015 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var assert = require("assert");

module.exports = {
  set: setNestedProperty,
  get: getNestedProperty,
  has: hasNestedProperty,
  hasOwn: function (object, property, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78436,78506],"range":[78399,78506],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":215,"label":"olives"}');
      return this.has(object, property, options || {own: true});
  },
  isIn: isInNestedProperty
};

/**
 * Get the property of an object nested in one or more objects
 * given an object such as a.b.c.d = 5, getNestedProperty(a, "b.c.d") will return 5.
 * @param {Object} object the object to get the property from
 * @param {String} property the path to the property as a string
 * @returns the object or the the property value if found
 */
function getNestedProperty(object, property) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[78925,79385],"range":[78880,79385],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":217,"label":"olives"}');
    if (object && typeof object == "object") {
        if (typeof property == "string" && property !== "") {
            var split = property.split(".");
            return split.reduce(function (obj, prop) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[79134,79190],"range":[79113,79190],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":216,"label":"olives"}');
                return obj && obj[prop];
            }, object);
        } else if (typeof property == "number") {
            return object[property];
        } else {
            return object;
        }
    } else {
        return object;
    }
}

/**
 * Tell if a nested object has a given property (or array a given index)
 * given an object such as a.b.c.d = 5, hasNestedProperty(a, "b.c.d") will return true.
 * It also returns true if the property is in the prototype chain.
 * @param {Object} object the object to get the property from
 * @param {String} property the path to the property as a string
 * @param {Object} options:
 *  - own: set to reject properties from the prototype
 * @returns true if has (property in object), false otherwise
 */
function hasNestedProperty(object, property, options) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[79949,80764],"range":[79895,80764],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":219,"label":"olives"}');
    options = options || {};

    if (object && typeof object == "object") {
        if (typeof property == "string" && property !== "") {
            var split = property.split(".");
            return split.reduce(function (obj, prop, idx, array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[80200,80569],"range":[80167,80569],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":218,"label":"olives"}');
                if (idx == array.length - 1) {
                    if (options.own) {
                        return !!(obj && obj.hasOwnProperty(prop));
                    } else {
                        return !!(obj !== null && typeof obj == "object" && prop in obj);
                    }
                }
                return obj && obj[prop];
            }, object);
        } else if (typeof property == "number") {
            return property in object;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * Set the property of an object nested in one or more objects
 * If the property doesn't exist, it gets created.
 * @param {Object} object
 * @param {String} property
 * @param value the value to set
 * @returns object if no assignment was made or the value if the assignment was made
 */
function setNestedProperty(object, property, value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[81112,81759],"range":[81060,81759],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":221,"label":"olives"}');
    if (object && typeof object == "object") {
        if (typeof property == "string" && property !== "") {
            var split = property.split(".");
            return split.reduce(function (obj, prop, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[81326,81526],"range":[81300,81526],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":220,"label":"olives"}');
                obj[prop] = obj[prop] || {};
                if (split.length == (idx + 1)) {
                    obj[prop] = value;
                }
                return obj[prop];
            }, object);
        } else if (typeof property == "number") {
            object[property] = value;
            return object[property];
        } else {
            return object;
        }
    } else {
        return object;
    }
}

/**
 * Tell if an object is on the path to a nested property
 * If the object is on the path, and the path exists, it returns true, and false otherwise.
 * @param {Object} object to get the nested property from
 * @param {String} property name of the nested property
 * @param {Object} objectInPath the object to check
 * @param {Object} options:
 *  - validPath: return false if the path is invalid, even if the object is in the path
 * @returns {boolean} true if the object is on the path
 */
function isInNestedProperty(object, property, objectInPath, options) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[82325,83032],"range":[82256,83032],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":223,"label":"olives"}');
    options = options || {};

    if (object && typeof object == "object") {
        if (typeof property == "string" && property !== "") {
            var split = property.split("."),
                isIn = false,
                pathExists;

            pathExists = !!split.reduce(function (obj, prop) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[82631,82781],"range":[82610,82781],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":222,"label":"olives"}');
                isIn = isIn || obj === objectInPath || (!!obj && obj[prop] === objectInPath);
                return obj && obj[prop];
            }, object);

            if (options.validPath) {
                return isIn && pathExists;
            } else {
                return isIn;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

},{"assert":9}],26:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[83086,83770],"range":[83054,83770],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":226,"label":"olives"}');
/**
* @license object-count https://github.com/cosmosio/object-count
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var assert = require("assert");

/**
 * Count the number of properties in an object or the number or items
 * in an array.
 * It doesn't look up in the prototype chain
 * @param {Object} object the object to get the number of items/properties from
 * @returns {Number}
 */
module.exports = function count(object) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[83574,83766],"range":[83551,83766],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":225,"label":"olives"}');
  assert(typeof object == "object", "object must be an array or an object");

  if (Array.isArray(object)) {
    return object.length;
  } else {
    return count(Object.keys(object));
  }
};

},{"assert":9}],27:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[83821,95523],"range":[83789,95523],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":256,"label":"olives"}');
/**
* @license observable-store https://github.com/flams/observable-store
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var Observable = require("watch-notify"),
    diff = require("shallow-diff"),
    clone = require("shallow-copy"),
    compareNumbers = require("compare-numbers"),
    count = require("object-count"),
    nestedProperty = require("nested-property"),
    simpleLoop = require("simple-loop");

/**
 * @class
 * Store creates an observable structure based on a key/values object
 * or on an array
 * @param {Array/Object} the data to initialize the store with
 * @returns
 */
module.exports = function StoreConstructor($data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[84524,95519],"range":[84491,95519],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":255,"label":"olives"}');

    /**
     * Where the data is stored
     * @private
     */
    var _data = clone($data) || {},

    /**
     * The observable for publishing changes on the store iself
     * @private
     */
    _storeObservable = new Observable(),

    /**
     * The observable for publishing changes on a value
     * @private
     */
    _valueObservable = new Observable(),

    /**
     * Saves the handles for the subscriptions of the computed properties
     * @private
     */
    _computed = [],

    /**
     * Gets the difference between two objects and notifies them
     * @private
     * @param {Object} previousData
     */
    _notifyDiffs = function _notifyDiffs(previousData) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[85211,85648],"range":[85175,85648],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":229,"label":"olives"}');
        var diffs = diff(previousData, _data);
        ["updated",
         "deleted",
         "added"].forEach(function (value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[85343,85640],"range":[85326,85640],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":228,"label":"olives"}');
             diffs[value].forEach(function (dataIndex) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[85400,85628],"range":[85379,85628],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":227,"label":"olives"}');
                    _storeObservable.notify(value, dataIndex, _data[dataIndex], previousData[dataIndex]);
                    _valueObservable.notify(dataIndex, _data[dataIndex], value, previousData[dataIndex]);
             });
        });
    };

   /**
    * Get the number of items in the store
    * @returns {Number} the number of items in the store
    */
    this.count = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[85793,85829],"range":[85782,85829],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":230,"label":"olives"}');
        return count(_data);
    };

    /**
     * Get a value from its index
     * @param {String} name the name of the index
     * @returns the value
     */
    this.get = function get(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[85992,86027],"range":[85973,86027],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":231,"label":"olives"}');
        return _data[name];
    };

    /**
     * Checks if the store has a given value
     * @param {String} name the name of the index
     * @returns {Boolean} true if the value exists
     */
    this.has = function has(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86226,86276],"range":[86207,86276],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":232,"label":"olives"}');
        return _data.hasOwnProperty(name);
    };

    /**
     * Set a new value and overrides an existing one
     * @param {String} name the name of the index
     * @param value the value to assign
     * @returns true if value is set
     */
    this.set = function set(name, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86516,87049],"range":[86490,87049],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":233,"label":"olives"}');
        var hasPrevious,
            previousValue,
            action;

        if (typeof name != "undefined") {
            hasPrevious = this.has(name);
            previousValue = this.get(name);
            _data[name] = value;
            action = hasPrevious ? "updated" : "added";
            _storeObservable.notify(action, name, _data[name], previousValue);
            _valueObservable.notify(name, _data[name], action, previousValue);
            return true;
        } else {
            return false;
        }
    };

    /**
     * Update the property of an item.
     * @param {String} name the name of the index
     * @param {String} property the property to modify.
     * @param value the value to assign
     * @returns false if the Store has no name index
     */
    this.update = function update(name, property, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87363,87711],"range":[87324,87711],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":234,"label":"olives"}');
        var item;
        if (this.has(name)) {
            item = this.get(name);
            nestedProperty.set(item, property, value);
            _storeObservable.notify("updated", property, value);
            _valueObservable.notify(name, item, "updated");
            return true;
        } else {
            return false;
        }
    };

    /**
     * Delete value from its index
     * @param {String} name the name of the index from which to delete the value
     * @returns true if successfully deleted.
     */
    this.del = function del(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87926,88363],"range":[87907,88363],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":235,"label":"olives"}');
        var previous;
        if (this.has(name)) {
            if (!this.alter("splice", name, 1)) {
                previous = _data[name];
                delete _data[name];
                _storeObservable.notify("deleted", name, undefined, previous);
                _valueObservable.notify(name, _data[name], "deleted", previous);
            }
            return true;
        } else {
            return false;
        }
    };

    /**
     * Delete multiple indexes. Prefer this one over multiple del calls.
     * @param {Array}
     * @returns false if param is not an array.
     */
    this.delAll = function delAll(indexes) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88568,88996],"range":[88543,88996],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":236,"label":"olives"}');
        if (Array.isArray(indexes)) {
            // Indexes must be removed from the greatest to the lowest
            // To avoid trying to remove indexes that don't exist.
            // i.e: given [0, 1, 2], remove 1, then 2, 2 doesn't exist anymore
            indexes.sort(compareNumbers.desc)
                .forEach(this.del, this);
            return true;
        } else {
            return false;
        }
    };

    /**
     * Alter the data by calling one of it's method
     * When the modifications are done, it notifies on changes.
     * If the function called doesn't alter the data, consider using proxy instead
     * which is much, much faster.
     * @param {String} func the name of the method
     * @params {*} any number of params to be given to the func
     * @returns the result of the method call
     */
    this.alter = function alter(func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[89448,89812],"range":[89427,89812],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":237,"label":"olives"}');
        var apply,
            previousData;

        if (_data[func]) {
            previousData = clone(_data);
            apply = this.proxy.apply(this, arguments);
            _notifyDiffs(previousData);
            _storeObservable.notify("altered", _data, previousData);
            return apply;
        } else {
            return false;
        }
    };

    /**
     * Proxy is similar to alter but doesn't trigger events.
     * It's preferable to call proxy for functions that don't
     * update the interal data source, like slice or filter.
     * @param {String} func the name of the method
     * @params {*} any number of params to be given to the func
     * @returns the result of the method call
     */
    this.proxy = function proxy(func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90214,90388],"range":[90193,90388],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":238,"label":"olives"}');
        if (_data[func]) {
            return _data[func].apply(_data, Array.prototype.slice.call(arguments, 1));
        } else {
            return false;
        }
    };

    /**
     * Watch the store's modifications
     * @param {String} added/updated/deleted
     * @param {Function} func the function to execute
     * @param {Object} scope the scope in which to execute the function
     * @returns {Handle} the subscribe's handler to use to stop watching
     */
    this.watch = function watch(name, func, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90741,90806],"range":[90707,90806],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":239,"label":"olives"}');
        return _storeObservable.watch(name, func, scope);
    };

    /**
     * Unwatch the store modifications
     * @param {Handle} handle the handler returned by the watch function
     * @returns
     */
    this.unwatch = function unwatch(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90997,91053],"range":[90972,91053],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":240,"label":"olives"}');
        return _storeObservable.unwatch(handle);
    };

    /**
     * Get the observable used for watching store's modifications
     * Should be used only for debugging
     * @returns {Observable} the Observable
     */
    this.getStoreObservable = function getStoreObservable() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91283,91323],"range":[91253,91323],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":241,"label":"olives"}');
        return _storeObservable;
    };

    /**
     * Watch a value's modifications
     * @param {String} name the name of the value to watch for
     * @param {Function} func the function to execute
     * @param {Object} scope the scope in which to execute the function
     * @returns handler to pass to unwatchValue
     */
    this.watchValue = function watchValue(name, func, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91677,91742],"range":[91638,91742],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":242,"label":"olives"}');
        return _valueObservable.watch(name, func, scope);
    };

    /**
     * Unwatch the value's modifications
     * @param {Handler} handler the handler returned by the watchValue function
     * @private
     * @returns true if unwatched
     */
    this.unwatchValue = function unwatchValue(handler) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91987,92044],"range":[91956,92044],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":243,"label":"olives"}');
        return _valueObservable.unwatch(handler);
    };

    /**
     * Get the observable used for watching value's modifications
     * Should be used only for debugging
     * @private
     * @returns {Observable} the Observable
     */
    this.getValueObservable = function getValueObservable() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[92290,92330],"range":[92260,92330],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":244,"label":"olives"}');
        return _valueObservable;
    };

    /**
     * Loop through the data
     * @param {Function} func the function to execute on each data
     * @param {Object} scope the scope in wich to run the callback
     */
    this.loop = function loop(func, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[92555,92602],"range":[92528,92602],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":245,"label":"olives"}');
        simpleLoop(_data, func, scope);
    };

    /**
     * Reset all data and get notifications on changes
     * @param {Arra/Object} data the new data
     * @returns {Boolean}
     */
    this.reset = function reset(data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[92786,93105],"range":[92765,93105],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":246,"label":"olives"}');
        if (typeof data == "object") {
            var previousData = clone(_data);
            _data = clone(data) || {};
            _notifyDiffs(previousData);
            _storeObservable.notify("resetted", _data, previousData);
            return true;
        } else {
            return false;
        }

    };

    /**
     * Compute a new property from other properties.
     * The computed property will look exactly similar to any none
     * computed property, it can be watched upon.
     * @param {String} name the name of the computed property
     * @param {Array} computeFrom a list of properties to compute from
     * @param {Function} callback the callback to compute the property
     * @param {Object} scope the scope in which to execute the callback
     * @returns {Boolean} false if wrong params given to the function
     */
    this.compute = function compute(name, computeFrom, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[93712,94317],"range":[93659,94317],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":249,"label":"olives"}');
        var args = [];

        if (typeof name == "string" &&
            typeof computeFrom == "object" &&
            typeof callback == "function" &&
            !this.isCompute(name)) {

            _computed[name] = [];

            simpleLoop(computeFrom, function (property) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[93997,94174],"range":[93977,94174],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":248,"label":"olives"}');
                _computed[name].push(this.watchValue(property, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[94074,94151],"range":[94062,94151],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":247,"label":"olives"}');
                    this.set(name, callback.call(scope));
                }, this));
            }, this);

            this.set(name, callback.call(scope));
            return true;
        } else {
            return false;
        }
    };

    /**
     * Remove a computed property
     * @param {String} name the name of the computed to remove
     * @returns {Boolean} true if the property is removed
     */
    this.removeCompute = function removeCompute(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[94545,94856],"range":[94516,94856],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":251,"label":"olives"}');
        if (this.isCompute(name)) {
            simpleLoop(_computed[name], function (handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[94641,94699],"range":[94623,94699],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":250,"label":"olives"}');
                this.unwatchValue(handle);
            }, this);
            this.del(name);

            delete _computed[name];
            return true;
        } else {
            return false;
        }
    };

    /**
     * Tells if a property is a computed property
     * @param {String} name the name of the property to test
     * @returns {Boolean} true if it's a computed property
     */
    this.isCompute = function isCompute(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95091,95132],"range":[95066,95132],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":252,"label":"olives"}');
        return !!_computed[name];
    };

    /**
     * Returns a JSON version of the data
     * Use dump if you want all the data as a plain js object
     * @returns {String} the JSON
     */
    this.toJSON = function toJSON() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95325,95370],"range":[95307,95370],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":253,"label":"olives"}');
        return JSON.stringify(_data);
    };

    /**
     * Returns the store's data
     * @returns {Object} the data
     */
    this.dump = function dump() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95487,95516],"range":[95471,95516],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":254,"label":"olives"}');
        return _data;
    };
};

},{"compare-numbers":10,"nested-property":25,"object-count":26,"shallow-copy":42,"shallow-diff":28,"simple-loop":30,"watch-notify":58}],28:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[95694,97616],"range":[95662,97616],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":260,"label":"olives"}');
/**
* @license shallow-diff https://github.com/cosmosio/shallow-diff
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var assert = require("assert"),
  loop = require("simple-loop");

/**
 * Make a diff between two objects
 * @param {Array/Object} base the base object
 * @param {Array/Object} compared the object to compare the base with
 * @example:
 *  With objects:
 *
 *  base = {a:1, b:2, c:3, d:4, f:6}
 *  compared = {a:1, b:20, d: 4, e: 5}
 *  will return :
 *  {
 *      unchanged: ["a", "d"],
 *      updated: ["b"],
 *      deleted: ["f"],
 *      added: ["e"]
 *  }
 *
 * It also works with Arrays:
 *
 *  base = [10, 20, 30]
 *  compared = [15, 20]
 *  will return :
 *  {
 *      unchanged: [1],
 *      updated: [0],
 *      deleted: [2],
 *      added: []
 *  }
 *
 * @returns object
 */
module.exports = function shallowDiff(base, compared) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[96610,97612],"range":[96573,97612],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":259,"label":"olives"}');
  assert(typeof base == "object", "the first object to compare with shallowDiff needs to be an object");
  assert(typeof compared == "object", "the second object to compare with shallowDiff needs to be an object");

  var unchanged = [],
      updated = [],
      deleted = [],
      added = [];

   // Loop through the compared object
   loop(compared, function (value, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[96988,97298],"range":[96966,97298],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":257,"label":"olives"}');

       // To get the added
       if (typeof base[idx] == "undefined") {
           added.push(idx);

       // The updated
     } else if (value !== base[idx]) {
           updated.push(idx);

       // And the unchanged
     } else if (value === base[idx]) {
           unchanged.push(idx);
       }

   });

   // Loop through the before object
   loop(base, function (value, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[97375,97496],"range":[97353,97496],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":258,"label":"olives"}');

      // To get the deleted
      if (typeof compared[idx] == "undefined") {
          deleted.push(idx);
      }
   });

  return {
      updated: updated,
      unchanged: unchanged,
      added: added,
      deleted: deleted
  };
};

},{"assert":9,"simple-loop":29}],29:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[97684,97732],"range":[97652,97732],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":261,"label":"olives"}');
arguments[4][23][0].apply(exports,arguments)
},{"assert":9,"dup":23}],30:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[97792,98928],"range":[97760,98928],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":263,"label":"olives"}');
/**
* @license simple-loop https://github.com/flams/simple-loop
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var assert = require("assert");

/**
 * Small abstraction for looping over objects and arrays
 * Warning: it's not meant to be used with nodeList
 * To use with nodeList, convert to array first
 * @param {Array/Object} iterated the array or object to loop through
 * @param {Function} callback the function to execute for each iteration
 * @param {Object} scope the scope in which to execute the callback
 */
module.exports = function loop(iterated, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98429,98924],"range":[98388,98924],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":262,"label":"olives"}');
  assert(typeof iterated == "object", "simple-loop: iterated must be an array/object");
  assert(typeof callback == "function", "simple-loop: callback must be a function");

  if (Array.isArray(iterated)) {
      for (var i=0; i<iterated.length; i++) {
          callback.call(scope, iterated[i], i, iterated);
      }
  } else {
      for (var i in iterated) {
          if (iterated.hasOwnProperty(i)) {
              callback.call(scope, iterated[i], i, iterated);
          }
      }
  }
};

},{"assert":9}],31:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[98979,104871],"range":[98947,104871],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":282,"label":"olives"}');
/**
* @license highway https://github.com/cosmosio/highway
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var Observable = require("watch-notify"),
    toArray = require("to-array");

/**
 * @class
 * Routing allows for navigating in an application by defining routes.
 */
module.exports = function RouterConstructor() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[99357,104867],"range":[99328,104867],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":281,"label":"olives"}');

    /**
     * The routes observable (the applications use it)
     * @private
     */
    var _routes = new Observable(),

    /**
     * The events observable (used by Routing)
     * @private
     */
    _events = new Observable(),

    /**
     * The routing history
     * @private
     */
    _history = [],

    /**
     * For navigating through the history, remembers the current position
     * @private
     */
    _currentPos = -1,

    /**
     * The depth of the history
     * @private
     */
    _maxHistory = 10;

    /**
     * Only for debugging
     * @private
     */
    this.getRoutesObservable = function getRoutesObservable() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[100011,100042],"range":[99980,100042],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":264,"label":"olives"}');
        return _routes;
    };

    /**
     * Only for debugging
     * @private
     */
    this.getEventsObservable = function getEventsObservable() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[100165,100196],"range":[100134,100196],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":265,"label":"olives"}');
        return _events;
    };

    /**
     * Set the maximum length of history
     * As the user navigates through the application, the
     * routeur keeps track of the history. Set the depth of the history
     * depending on your need and the amount of memory that you can allocate it
     * @param {Number} maxHistory the depth of history
     * @returns {Boolean} true if maxHistory is equal or greater than 0
     */
    this.setMaxHistory = function setMaxHistory(maxHistory) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[100653,100808],"range":[100618,100808],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":266,"label":"olives"}');
        if (maxHistory >= 0) {
            _maxHistory = maxHistory;
            return true;
        } else {
            return false;
        }

    };

    /**
     * Get the current max history setting
     * @returns {Number} the depth of history
     */
    this.getMaxHistory = function getMaxHistory() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[100966,101001],"range":[100941,101001],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":267,"label":"olives"}');
        return _maxHistory;
    };

    /**
     * Set a new route
     * @param {String} route the name of the route
     * @param {Function} func the function to be execute when navigating to the route
     * @param {Object} scope the scope in which to execute the function
     * @returns a handle to remove the route
     */
    this.set = function set() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[101327,101390],"range":[101312,101390],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":268,"label":"olives"}');
        return _routes.watch.apply(_routes, arguments);
    };

    /**
     * Remove a route
     * @param {Object} handle the handle provided by the set method
     * @returns true if successfully removed
     */
    this.unset = function unset(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[101584,101631],"range":[101561,101631],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":269,"label":"olives"}');
        return _routes.unwatch(handle);
    };

    /**
     * Navigate to a route
     * @param {String} route the route to navigate to
     * @param {*} *params
     * @returns
     */
    this.navigate = function get(route) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[101813,102238],"range":[101793,102238],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":270,"label":"olives"}');
        if (this.load.apply(this, arguments)) {
            // Before adding a new route to the history, we must clear the forward history
            _history.splice(_currentPos +1, _history.length);
            _history.push(toArray(arguments));
            this.ensureMaxHistory(_history);
            _currentPos = _history.length -1;
            return true;
        } else {
            return false;
        }

    };

    /**
     * Ensure that history doesn't grow bigger than the max history setting
     * @param {Store} history the history store
     * @private
     */
    this.ensureMaxHistory = function ensureMaxHistory(history) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[102460,102653],"range":[102425,102653],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":271,"label":"olives"}');
        var count = history.length,
            max = this.getMaxHistory(),
            excess = count - max;

        if (excess > 0) {
            history.splice(0, excess);
        }
    };

    /**
     * Actually loads the route
     * @private
     */
    this.load = function load() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[102752,103012],"range":[102736,103012],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":272,"label":"olives"}');
        var copy = toArray(arguments);

        if (_routes.notify.apply(_routes, copy)) {
            copy.unshift("route");
            _events.notify.apply(_events, copy);
            return true;
        } else {
            return false;
        }
    };

    /**
     * Watch for route changes
     * @param {Function} func the func to execute when the route changes
     * @param {Object} scope the scope in which to execute the function
     * @returns {Object} the handle to unwatch for route changes
     */
    this.watch = function watch(func, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[103317,103376],"range":[103289,103376],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":273,"label":"olives"}');
        return _events.watch("route", func, scope);
    };

    /**
     * Unwatch routes changes
     * @param {Object} handle the handle was returned by the watch function
     * @returns true if unwatch
     */
    this.unwatch = function unwatch(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[103577,103624],"range":[103552,103624],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":274,"label":"olives"}');
        return _events.unwatch(handle);
    };

    /**
     * Get the history store, for debugging only
     * @private
     */
    this.getHistoryStore = function getHistoryStore() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[103762,103794],"range":[103735,103794],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":275,"label":"olives"}');
        return _history;
    };

    /**
     * Get the current length of history
     * @returns {Number} the length of history
     */
    this.getHistoryCount = function getHistoryCount() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[103955,103994],"range":[103928,103994],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":276,"label":"olives"}');
        return _history.length;
    };

    /**
     * Flush the entire history
     */
    this.clearHistory = function clearHistory() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[104093,104129],"range":[104069,104129],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":277,"label":"olives"}');
        _history.length = 0;
    };

    /**
     * Go back and forth in the history
     * @param {Number} nb the amount of history to rewind/forward
     * @returns true if history exists
     */
    this.go = function go(nb) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[104323,104556],"range":[104307,104556],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":278,"label":"olives"}');
        var history = _history[_currentPos + nb];
        if (history) {
            _currentPos += nb;
            this.load.apply(this, history);
            return true;
        } else {
            return false;
        }
    };

    /**
     * Go back in the history, short for go(-1)
     * @returns
     */
    this.back = function back() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[104671,104706],"range":[104655,104706],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":279,"label":"olives"}');
        return this.go(-1);
    };

    /**
     * Go forward in the history, short for go(1)
     * @returns
     */
    this.forward = function forward() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[104829,104863],"range":[104810,104863],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":280,"label":"olives"}');
        return this.go(1);
    };

};

},{"to-array":52,"watch-notify":34}],32:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[104943,104991],"range":[104911,104991],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":283,"label":"olives"}');
arguments[4][23][0].apply(exports,arguments)
},{"assert":9,"dup":23}],33:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[105051,110506],"range":[105019,110506],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":299,"label":"olives"}');
/**
* @license url-highway https://github.com/cosmosio/url-highway
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var Highway = require("highway"),
    toArray = require("to-array");

/**
 * @class
 * UrlHighway is a router which navigates to the route defined in the URL and updates this URL
 * while navigating. It's a subtype of Highway
 */
function UrlHighway() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[105476,110342],"range":[105454,110342],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":297,"label":"olives"}');

    /**
     * The handle on the watch
     * @private
     */
    var _watchHandle,

    /**
     * The default route to navigate to when nothing is supplied in the url
     * @private
     */
    _defaultRoute = "",

    /**
     * The last route that was navigated to
     * @private
     */
    _lastRoute = window.location.hash;

    /**
     * Navigates to the current hash or to the default route if none is supplied in the url
     * @private
     */
     /*jshint validthis:true*/
    function doNavigate() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[105995,106215],"range":[105973,106215],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":284,"label":"olives"}');
        if (!hashIsEmpty()) {
            var parsedHash = this.parse(window.location.hash);
            this.navigate.apply(this, parsedHash);
        } else {
            this.navigate(_defaultRoute);
        }
    }

    /**
     * An empty string or # are both empty hashes
     */
    function hashIsEmpty() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[106310,106386],"range":[106287,106386],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":285,"label":"olives"}');
        return !window.location.hash || window.location.hash == "#";
    }

    /**
     * Set the default route to navigate to when nothing is defined in the url
     * @param {String} defaultRoute the defaultRoute to navigate to
     * @returns {Boolean} true if it's not an empty string
     */
    this.setDefaultRoute = function setDefaultRoute(defaultRoute) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[106676,106866],"range":[106637,106866],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":286,"label":"olives"}');
        if (defaultRoute && typeof defaultRoute == "string") {
            _defaultRoute = defaultRoute;
            return true;
        } else {
            return false;
        }
    };

    /**
     * Get the currently set default route
     * @returns {String} the default route
     */
    this.getDefaultRoute = function getDefaultRoute() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107025,107062],"range":[106998,107062],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":287,"label":"olives"}');
        return _defaultRoute;
    };

    /**
     * The function that parses the url to determine the route to navigate to.
     * It has a default behavior explained below, but can be overriden as long as
     * it has the same contract.
     * @param {String} hash the hash coming from window.location.has
     * @returns {Array} has to return an array with the list of arguments to call
     *    navigate with. The first item of the array must be the name of the route.
     *
     * Example: #album/holiday/2013
     *      will navigate to the route "album" and give two arguments "holiday" and "2013"
     */
    this.parse = function parse(hash) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107682,107738],"range":[107661,107738],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":288,"label":"olives"}');
        return hash.split("#").pop().split("/");
    };

    /**
     * The function that converts, or serialises the route and its arguments to a valid URL.
     * It has a default behavior below, but can be overriden as long as it has the same contract.
     * @param {Array} args the list of arguments to serialize
     * @returns {String} the serialized arguments to add to the url hashmark
     *
     * Example:
     *      ["album", "holiday", "2013"];
     *      will give "album/holiday/2013"
     *
     */
    this.toUrl = function toUrl(args) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108240,108278],"range":[108219,108278],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":289,"label":"olives"}');
        return args.join("/");
    };

    /**
     * When all the routes and handlers have been defined, start the location router
     * so it parses the URL and navigates to the corresponding route.
     * It will also start listening to route changes and hashmark changes to navigate.
     * While navigating, the hashmark itself will also change to reflect the current route state
     */
    this.start = function start(defaultRoute) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108682,108831],"range":[108653,108831],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":290,"label":"olives"}');
        this.setDefaultRoute(defaultRoute);
        doNavigate.call(this);
        this.bindOnHashChange();
        this.bindOnRouteChange();
    };

    /**
     * Remove the events handler for cleaning.
     */
    this.destroy = function destroy() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108935,109058],"range":[108916,109058],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":291,"label":"olives"}');
        this.unwatch(_watchHandle);
        window.removeEventListener("hashchange", this.boundOnHashChange, true);
    };

    /**
     * Parse the hash and navigate to the corresponding url
     * @private
     */
    this.onHashChange  = function onHashChange() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109202,109304],"range":[109178,109304],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":292,"label":"olives"}');
        if (window.location.hash != _lastRoute) {
            doNavigate.call(this);
        }
    };

    /**
     * The bound version of onHashChange for add/removeEventListener
     * @private
     */
    this.boundOnHashChange = this.onHashChange.bind(this);

    /**
     * Add an event listener to hashchange to navigate to the corresponding route
     * when it changes
     * @private
     */
    this.bindOnHashChange = function bindOnHashChange() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109661,109745],"range":[109633,109745],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":293,"label":"olives"}');
        window.addEventListener("hashchange", this.boundOnHashChange, true);
    };

    /**
     * Watch route change events from the router to update the location
     * @private
     */
    this.bindOnRouteChange = function bindOnRouteChange() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109910,109978],"range":[109881,109978],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":294,"label":"olives"}');
        _watchHandle = this.watch(this.onRouteChange, this);
    };

    /**
     * The handler for when the route changes
     * It updates the location
     * @private
     */
    this.onRouteChange = function onRouteChange() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110140,110253],"range":[110115,110253],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":295,"label":"olives"}');
        window.location.hash = this.toUrl(toArray(arguments));
        _lastRoute = window.location.hash;
    };

    this.getLastRoute = function getLastRoute() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110304,110338],"range":[110280,110338],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":296,"label":"olives"}');
        return _lastRoute;
    };

}

module.exports = function UrlHighwayFactory() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110390,110502],"range":[110361,110502],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":298,"label":"olives"}');
    UrlHighway.prototype = new Highway();
    UrlHighway.constructor = Highway;
    return new UrlHighway();
};

},{"highway":31,"to-array":52}],34:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[110573,114630],"range":[110541,114630],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":311,"label":"olives"}');
/**
* @license watch-notify https://github.com/flams/watch-notify
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var assert = require("assert");

var loop = require("simple-loop"),
  toArray = require("to-array");

/**
* @class
* Observable is an implementation of the Observer design pattern,
* which is also known as publish/subscribe.
*
* This service creates an Observable to which you can add subscribers.
*
* @returns {Observable}
*/
module.exports = function WatchNotifyConstructor() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[111123,114626],"range":[111089,114626],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":310,"label":"olives"}');

    /**
     * The list of topics
     * @private
     */
    var _topics = {};

    /**
     * Add an observer
     * @param {String} topic the topic to observe
     * @param {Function} callback the callback to execute
     * @param {Object} scope the scope in which to execute the callback
     * @returns handle
     */
    this.watch = function watch(topic, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[111505,111815],"range":[111466,111815],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":300,"label":"olives"}');
        if (typeof callback == "function") {
            var observers = _topics[topic] = _topics[topic] || [],
            observer = [callback, scope];

            observers.push(observer);
            return [topic,observers.indexOf(observer)];

        } else {
            return false;
        }
    };

    /**
     * Listen to an event just once before removing the handler
     * @param {String} topic the topic to observe
     * @param {Function} callback the callback to execute
     * @param {Object} scope the scope in which to execute the callback
     * @returns handle
     */
    this.once = function once(topic, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[112155,112336],"range":[112117,112336],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":302,"label":"olives"}');
        var handle = this.watch(topic, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[112208,112299],"range":[112196,112299],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":301,"label":"olives"}');
            callback.apply(scope, arguments);
            this.unwatch(handle);
        }, this);
        return handle;
    };

    /**
     * Remove an observer
     * @param {Handle} handle returned by the watch method
     * @returns {Boolean} true if there were subscribers
     */
    this.unwatch = function unwatch(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[112541,113050],"range":[112516,113050],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":304,"label":"olives"}');
        var topic = handle[0], idx = handle[1];
        if (_topics[topic] && _topics[topic][idx]) {
            // delete value so the indexes don't move
            delete _topics[topic][idx];
            // If the topic is only set with falsy values, delete it;
            if (!_topics[topic].some(function (value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[112862,112909],"range":[112845,112909],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":303,"label":"olives"}');
                return !!value;
            })) {
                delete _topics[topic];
            }
            return true;
        } else {
            return false;
        }
    };

    /**
     * Notifies observers that a topic has a new message
     * @param {String} topic the name of the topic to publish to
     * @param subject
     * @returns {Boolean} true if there was subscribers
     */
    this.notify = function notify(topic) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[113310,113747],"range":[113287,113747],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":306,"label":"olives"}');
        var observers = _topics[topic],
            args = toArray(arguments).slice(1);

        if (observers) {
            loop(observers, function (value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[113471,113661],"range":[113454,113661],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":305,"label":"olives"}');
                try {
                    if (value) {
                        value[0].apply(value[1] || null, args);
                    }
                } catch (err) { }
            });
            return true;
        } else {
            return false;
        }
    };

    /**
     * Check if topic has the described observer
     * @param {Handle}
     * @returns {Boolean} true if exists
     */
    this.hasObserver = function hasObserver(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[113931,114021],"range":[113902,114021],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":307,"label":"olives"}');
        return !!( handle && _topics[handle[0]] && _topics[handle[0]][handle[1]]);
    };

    /**
     * Check if a topic has observers
     * @param {String} topic the name of the topic
     * @returns {Boolean} true if topic is listened
     */
    this.hasTopic = function hasTopic(topic) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[114226,114266],"range":[114201,114266],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":308,"label":"olives"}');
        return !!_topics[topic];
    };

    /**
     * Unwatch all or unwatch all from topic
     * @param {String} topic optional unwatch all from topic
     * @returns {Boolean} true if ok
     */
    this.unwatchAll = function unwatchAll(topic) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[114477,114623],"range":[114450,114623],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":309,"label":"olives"}');
        if (_topics[topic]) {
            delete _topics[topic];
        } else {
            _topics = {};
        }
        return true;
    };
};

},{"assert":9,"simple-loop":32,"to-array":52}],35:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[114712,115339],"range":[114680,115339],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":312,"label":"olives"}');
/**
 * Olives http://flams.github.com/olives
 * The MIT License (MIT)
 * Copyright (c) 2012-2015 Olivier Scherrer <pode.fr@gmail.com> - Olivier Wietrich <olivier.wietrich@gmail.com>
 */
 "use strict";

module.exports = {
    "Bind.plugin": require("data-binding-plugin"),
    "LocalStore": require("local-observable-store"),
    "LocationRouter": require("url-highway"),
    "OObject": require("seam-view"),
    "Event.plugin": require("event-plugin"),
    "Place.plugin": require("place-plugin"),
    "Plugins": require("seam"),
    "SocketIOTransport": require("socketio-transport"),
    "Stack": require("dom-stack")
};

},{"data-binding-plugin":11,"dom-stack":12,"event-plugin":15,"local-observable-store":22,"place-plugin":36,"seam":40,"seam-view":39,"socketio-transport":48,"url-highway":33}],36:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[115549,117940],"range":[115517,117940],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":320,"label":"olives"}');
/**
* @license place-plugin https://github.com/flams/place-plugin
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var simpleLoop = require("simple-loop");

/**
* @class
* Place plugin places SeamViews in the DOM.
*/
function isSeamView(ui) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[115847,115925],"range":[115823,115925],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":313,"label":"olives"}');
    return typeof ui == "object" &&
        typeof ui.place == "function";
}

/**
 * Intilialize a Place.plugin with a list of SeamViews
 * @param {Object} $uis a list of SeamViews such as:
 *   {
 *      "header": new SeamView(),
 *      "list": new SeamView()
 *   }
 * @Constructor
 */
module.exports = function PlacePluginConstructor($uis) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[116193,117936],"range":[116155,117936],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":319,"label":"olives"}');

    /**
     * The list of uis currently set in this place plugin
     * @private
     */
    var _uis = {};

    /**
     * Attach a SeamView to this DOM element
     * @param {HTML|SVGElement} node the dom node where to attach the SeamView
     * @param {String} the name of the SeamView to attach
     * @throws {NoSuchSeamView} an error if there's no SeamView for the given name
     */
    this.place = function place(node, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[116631,116806],"range":[116604,116806],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":314,"label":"olives"}');
        if (_uis[name]) {
            _uis[name].place(node);
        } else {
            throw new Error(name + " is not a SeamView UI in place: " + name);
        }
    };

    /**
     * Add an SeamView that can be attached to a dom element
     * @param {String} the name of the SeamView to add to the list
     * @param {SeamView} ui the SeamView to add the list
     * @returns {Boolean} true if the SeamView was added
     */
    this.set = function set(name, ui) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117105,117276],"range":[117082,117276],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":315,"label":"olives"}');
        if (typeof name == "string" && isSeamView(ui)) {
            _uis[name] = ui;
            return true;
        } else {
            return false;
        }
    };

    /**
     * Add multiple dom elements at once
     * @param {Object} $uis a list of SeamViews such as:
     *   {
     *      "header": new SeamView(),
     *      "list": new SeamView()
     *   }
     */
    this.setAll = function setAll(uis) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117527,117630],"range":[117506,117630],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":317,"label":"olives"}');
        simpleLoop(uis, function (ui, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117573,117616],"range":[117553,117616],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":316,"label":"olives"}');
            this.set(name, ui);
        }, this);
    };

    /**
     * Returns a SeamView from the list given its name
     * @param {String} the name of the SeamView to get
     * @returns {SeamView} SeamView for the given name
     */
    this.get = function get(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117848,117882],"range":[117829,117882],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":318,"label":"olives"}');
        return _uis[name];
    };

    if ($uis) {
        this.setAll($uis);
    }

};

},{"simple-loop":37}],37:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[117997,118045],"range":[117965,118045],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":321,"label":"olives"}');
arguments[4][23][0].apply(exports,arguments)
},{"assert":9,"dup":23}],38:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[118105,119354],"range":[118073,119354],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":329,"label":"olives"}');
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[118241,118569],"range":[118219,118569],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":322,"label":"olives"}');
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[118604,118690],"range":[118589,118690],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":323,"label":"olives"}');
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[118882,118884],"range":[118866,118884],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":324,"label":"olives"}');}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[119096,119156],"range":[119080,119156],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":325,"label":"olives"}');
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[119203,119217],"range":[119191,119217],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":326,"label":"olives"}'); return '/' };
process.chdir = function (dir) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[119250,119308],"range":[119235,119308],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":327,"label":"olives"}');
    throw new Error('process.chdir is not supported');
};
process.umask = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[119337,119350],"range":[119326,119350],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":328,"label":"olives"}'); return 0; };

},{}],39:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[119395,125366],"range":[119363,125366],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":340,"label":"olives"}');
/**
* @license seam-view https://github.com/flams/seam-view
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var StateMachine = require("synchronous-fsm"),
    Seam = require("seam"),
    toArray = require("to-array");

function isAcceptedType(dom) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[119701,119734],"range":[119672,119734],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":330,"label":"olives"}');
    return dom.nodeType >= 1;
}

/**
* @class
* OObject is a container for dom elements. It will also bind
* the dom to additional plugins like Data binding
* @requires StateMachine
*/
module.exports = function SeamViewConstructor() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[119936,125362],"range":[119905,125362],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":339,"label":"olives"}');

    /**
     * This function creates the dom of the UI from its template
     * It then queries the dom for data- attributes
     * It can't be executed if the template is not set
     * @private
     */
    function render(UI) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[120167,121608],"range":[120147,121608],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":331,"label":"olives"}');

        // The place where the template will be created
        // is either the currentPlace where the node is placed
        // or a temporary div
        var baseNode = _currentPlace || document.createElement("div");

        // If the template is set
        if (UI.template) {
            // In this function, the thisObject is the UI's prototype
            // UI is the UI that has OObject as prototype
            if (typeof UI.template == "string") {
                // Let the browser do the parsing, can't be faster & easier.
                baseNode.innerHTML = UI.template.trim();
            } else if (isAcceptedType(UI.template)) {
                // If it's already an HTML element
                baseNode.appendChild(UI.template);
            }

            // The UI must be placed in a unique dom node
            // If not, there can't be multiple UIs placed in the same parentNode
            // as it wouldn't be possible to know which node would belong to which UI
            // This is probably a DOM limitation.
            if (baseNode.childNodes.length > 1) {
                throw new Error("UI.template should have only one parent node");
            } else {
                UI.dom = baseNode.childNodes[0];
            }

            UI.seam.apply(UI.dom);

        } else {
            // An explicit message I hope
            throw new Error("UI.template must be set prior to render");
        }
    }

    /**
     * This function appends the dom tree to the given dom node.
     * This dom node should be somewhere in the dom of the application
     * @private
     */
    function place(UI, DOMplace, beforeNode) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[121823,122286],"range":[121782,122286],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":332,"label":"olives"}');
        if (DOMplace) {
            // IE (until 9) apparently fails to appendChild when insertBefore's second argument is null, hence this.
            if (beforeNode) {
                DOMplace.insertBefore(UI.dom, beforeNode);
            } else {
                DOMplace.appendChild(UI.dom);
            }
            // Also save the new place, so next renderings
            // will be made inside it
            _currentPlace = DOMplace;
        }
    }

    /**
     * Does rendering & placing in one function
     * @private
     */
    function renderNPlace(UI, dom) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[122403,122477],"range":[122372,122477],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":333,"label":"olives"}');
        render(UI);
        place.apply(null, toArray(arguments));
    }

    /**
     * This stores the current place
     * If this is set, this is the place where new templates
     * will be appended
     * @private
     */
    var _currentPlace = null,

    /**
     * The UI's stateMachine.
     * Much better than if(stuff) do(stuff) else if (!stuff and stuff but not stouff) do (otherstuff)
     * Please open an issue if you want to propose a better one
     * @private
     */
    _stateMachine = new StateMachine("Init", {
        "Init": [["render", render, this, "Rendered"],
                 ["place", renderNPlace, this, "Rendered"]],
        "Rendered": [["place", place, this],
                     ["render", render, this]]
    });

    /**
     * The module that will manage the plugins for this UI
     * @see Olives/Plugins' doc for more info on how it works.
     */
    this.seam = new Seam();

    /**
     * Describes the template, can either be like "&lt;p&gt;&lt;/p&gt;" or HTMLElements
     * @type string or HTMLElement|SVGElement
     */
    this.template = null;

    /**
     * This will hold the dom nodes built from the template.
     */
    this.dom = null;

    /**
     * Place the UI in a given dom node
     * @param  node the node on which to append the UI
     * @param  beforeNode the dom before which to append the UI
     */
    this.place = function place(node, beforeNode) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[123824,123893],"range":[123791,123893],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":334,"label":"olives"}');
        _stateMachine.event("place", this, node, beforeNode);
    };

    /**
     * Renders the template to dom nodes and applies the plugins on it
     * It requires the template to be set first
     */
    this.render = function render() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[124067,124119],"range":[124049,124119],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":335,"label":"olives"}');
        _stateMachine.event("render", this);
    };

    /**
     * Set the UI's template from a DOM element
     * @param {HTMLElement|SVGElement} dom the dom element that'll become the template of the UI
     * @returns true if dom is an HTMLElement|SVGElement
     */
    this.setTemplateFromDom = function setTemplateFromDom(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[124403,124556],"range":[124370,124556],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":336,"label":"olives"}');
        if (isAcceptedType(dom)) {
            this.template = dom;
            return true;
        } else {
            return false;
        }
    };

    /**
     * Transforms dom nodes into a UI.
     * It basically does a setTemplateFromDOM, then a place
     * It's a helper function
     * @param {HTMLElement|SVGElement} node the dom to transform to a UI
     * @returns true if dom is an HTMLElement|SVGElement
     */
    this.alive = function alive(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[124871,125098],"range":[124851,125098],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":337,"label":"olives"}');
        if (isAcceptedType(dom)) {
            this.setTemplateFromDom(dom);
            this.place(dom.parentNode, dom.nextElementSibling);
            return true;
        } else {
            return false;
        }

    };

    /**
     * Get the current dom node where the UI is placed.
     * for debugging purpose
     * @private
     * @return {HTMLElement} node the dom where the UI is placed.
     */
    this.getCurrentPlace = function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[125321,125358],"range":[125311,125358],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":338,"label":"olives"}');
        return _currentPlace;
    };

};

},{"seam":40,"synchronous-fsm":50,"to-array":52}],40:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[125451,129776],"range":[125419,129776],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":354,"label":"olives"}');
/**
* @license seam https://github.com/flams/seam
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var toArray = require("to-array"),
    simpleLoop = require("simple-loop"),
    getNodes = require("get-nodes"),
    getDataset = require("get-dataset");

/**
 * Seam makes it easy to attach JS behavior to your HTML/SVG via the data- attribute.
 * <div data-plugin="method: param, param, ..."></tag>
 *
 * JS behaviors are defined in plugins, which are plain JS objects with data and methods.
 */
module.exports = function Seam($plugins) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126045,129772],"range":[126021,129772],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":353,"label":"olives"}');

    /**
     * The list of plugins
     * @private
     */
    var _plugins = {},

    /**
     * Just a "functionalification" of trim
     * for code readability
     * @private
     */
    trim = function trim(string) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126268,126305],"range":[126246,126305],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":341,"label":"olives"}');
        return string.trim();
    },

    /**
     * Call the plugins methods, passing them the dom node
     * A phrase can be :
     * <tag data-plugin='method: param, param; method:param...'/>
     * the function has to call every method of the plugin
     * passing it the node, and the given params
     * @private
     */
    applyPlugin = function applyPlugin(node, phrase, plugin) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126659,127411],"range":[126616,127411],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":343,"label":"olives"}');
        // Split the methods
        phrase.split(";")
        .forEach(function (couple) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126751,127403],"range":[126733,127403],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":342,"label":"olives"}');
            // Split the result between method and params
            var split = couple.split(":"),
            // Trim the name
            method = split[0].trim(),
            // And the params, if any
            params = split[1] ? split[1].split(",").map(trim) : [];

            // The first param must be the dom node
            params.unshift(node);

            if (_plugins[plugin] && _plugins[plugin][method]) {
                // Call the method with the following params for instance :
                // [node, "param1", "param2" .. ]
                _plugins[plugin][method].apply(_plugins[plugin], params);
            }

        });
    };

    /**
     * Add a plugin
     *
     * Note that once added, the function adds a "plugins" property to the plugin.
     * It's an object that holds a name property, with the registered name of the plugin
     * and an apply function, to use on new nodes that the plugin would generate
     *
     * @param {String} name the name of the data that the plugin should look for
     * @param {Object} plugin the plugin that has the functions to execute
     * @returns true if plugin successfully added.
     */
    this.add = function add(name, plugin) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[127966,128435],"range":[127939,128435],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":345,"label":"olives"}');
        var propertyName = "plugins";

        if (typeof name == "string" && typeof plugin == "object" && plugin) {
            _plugins[name] = plugin;

            plugin[propertyName] = {
                    name: name,
                    apply: function apply() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[128236,128325],"range":[128219,128325],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":344,"label":"olives"}');
                        return this.apply.apply(this, arguments);
                    }.bind(this)
            };
            return true;
        } else {
            return false;
        }
    };

    /**
     * Add multiple plugins at once
     * @param {Object} list key is the plugin name and value is the plugin
     * @returns true if correct param
     */
    this.addAll = function addAll(list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[128643,128762],"range":[128621,128762],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":347,"label":"olives"}');
        return simpleLoop(list, function (plugin, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[128701,128748],"range":[128677,128748],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":346,"label":"olives"}');
            this.add(name, plugin);
        }, this);
    };

    /**
     * Get a previously added plugin
     * @param {String} name the name of the plugin
     * @returns {Object} the plugin
     */
    this.get = function get(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[128939,128977],"range":[128920,128977],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":348,"label":"olives"}');
        return _plugins[name];
    };

    /**
     * Delete a plugin from the list
     * @param {String} name the name of the plugin
     * @returns {Boolean} true if success
     */
    this.del = function del(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[129160,129205],"range":[129141,129205],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":349,"label":"olives"}');
        return delete _plugins[name];
    };

    /**
     * Apply the plugins to a NodeList
     * @param {HTMLElement|SVGElement} dom the dom nodes on which to apply the plugins
     * @returns {Boolean} true if the param is a dom node
     */
    this.apply = function apply(dom) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[129445,129710],"range":[129425,129710],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":352,"label":"olives"}');
        var nodes = getNodes(dom);

        simpleLoop(toArray(nodes), function (node) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[129534,129681],"range":[129518,129681],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":351,"label":"olives"}');
            simpleLoop(getDataset(node), function (phrase, plugin) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[129603,129669],"range":[129577,129669],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":350,"label":"olives"}');
                applyPlugin(node, phrase, plugin);
            });
        });

        return dom;
    };

    if ($plugins) {
        this.addAll($plugins);
    }

};

},{"get-dataset":17,"get-nodes":19,"simple-loop":41,"to-array":52}],41:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[129879,129927],"range":[129847,129927],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":355,"label":"olives"}');
arguments[4][23][0].apply(exports,arguments)
},{"assert":9,"dup":23}],42:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[129987,130789],"range":[129955,130789],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":359,"label":"olives"}');
module.exports = function (obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[130021,130496],"range":[130006,130496],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":356,"label":"olives"}');
    if (!obj || typeof obj !== 'object') return obj;
    
    var copy;
    
    if (isArray(obj)) {
        var len = obj.length;
        copy = Array(len);
        for (var i = 0; i < len; i++) {
            copy[i] = obj[i];
        }
    }
    else {
        var keys = objectKeys(obj);
        copy = {};
        
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            copy[key] = obj[key];
        }
    }
    return copy;
};

var objectKeys = Object.keys || function (obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[130546,130680],"range":[130531,130680],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":357,"label":"olives"}');
    var keys = [];
    for (var key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) keys.push(key);
    }
    return keys;
};

var isArray = Array.isArray || function (xs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[130728,130785],"range":[130714,130785],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":358,"label":"olives"}');
    return {}.toString.call(xs) === '[object Array]';
};

},{}],43:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[130830,132884],"range":[130798,132884],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":364,"label":"olives"}');
/**
 * @license shallow-diff https://github.com/cosmosio/shallow-diff
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2015 Olivier Scherrer <pode.fr@gmail.com>
 */
"use strict";

function assert(assertion, error) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[131050,131134],"range":[131016,131134],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":360,"label":"olives"}');
    if (assertion) {
        throw new TypeError("simple-loop: " + error);
    }
}

var loop = require("simple-loop");

/**
 * Make a diff between two objects
 * @param {Array/Object} base the base object
 * @param {Array/Object} compared the object to compare the base with
 * @example:
 *  With objects:
 *
 *  base = {a:1, b:2, c:3, d:4, f:6}
 *  compared = {a:1, b:20, d: 4, e: 5}
 *  will return :
 *  {
 *      unchanged: ["a", "d"],
 *      updated: ["b"],
 *      deleted: ["f"],
 *      added: ["e"]
 *  }
 *
 * It also works with Arrays:
 *
 *  base = [10, 20, 30]
 *  compared = [15, 20]
 *  will return :
 *  {
 *      unchanged: [1],
 *      updated: [0],
 *      deleted: [2],
 *      added: []
 *  }
 *
 * @returns object
 */
module.exports = function shallowDiff(base, compared) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[131847,132880],"range":[131810,132880],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":363,"label":"olives"}');
    assert(typeof base != "object", "the first object to compare with shallowDiff needs to be an object");
    assert(typeof compared != "object", "the second object to compare with shallowDiff needs to be an object");

    var unchanged = [],
        updated = [],
        deleted = [],
        added = [];

    // Loop through the compared object
    loop(compared, function(value, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[132238,132556],"range":[132217,132556],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":361,"label":"olives"}');
        // To get the added items
        if (!(idx in base)) {
            added.push(idx);

        // The updated items
        } else if (value !== base[idx]) {
            updated.push(idx);

        // And the unchanged
        } else if (value === base[idx]) {
            unchanged.push(idx);
        }
    });

    // Loop through the before object
    loop(base, function(value, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[132634,132752],"range":[132613,132752],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":362,"label":"olives"}');
        // To get the deleted items
        if (!(idx in compared)) {
            deleted.push(idx);
        }
    });

    return {
        updated: updated,
        unchanged: unchanged,
        added: added,
        deleted: deleted
    };
};

},{"simple-loop":44}],44:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[132941,134183],"range":[132909,134183],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":367,"label":"olives"}');
/**
 * @license simple-loop https://github.com/flams/simple-loop
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2015 Olivier Scherrer <pode.fr@gmail.com>
 */
"use strict";

function assert(assertion, error) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[133156,133240],"range":[133122,133240],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":365,"label":"olives"}');
    if (assertion) {
        throw new TypeError("simple-loop: " + error);
    }
}

/**
 * Small abstraction for looping over objects and arrays
 * Warning: it's not meant to be used with nodeList
 * To use with nodeList, convert to array first
 * @param {Array/Object} iterated the array or object to loop through
 * @param {Function} callback the function to execute for each iteration
 * @param {Object} scope the scope in which to execute the callback
 */
module.exports = function loop(iterated, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[133676,134179],"range":[133635,134179],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":366,"label":"olives"}');
    assert(typeof iterated != "object", "iterated must be an array/object");
    assert(typeof callback != "function", "callback must be a function");

    var i;

    if (Array.isArray(iterated)) {
        for (i = 0; i < iterated.length; i++) {
            callback.call(scope, iterated[i], i, iterated);
        }
    } else {
        for (i in iterated) {
            if (iterated.hasOwnProperty(i)) {
                callback.call(scope, iterated[i], i, iterated);
            }
        }
    }
};

},{}],45:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[134224,134947],"range":[134192,134947],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":370,"label":"olives"}');
/**
* @license simple-mixin https://github.com/flams/simple-object-mixin
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var loop = require("simple-loop");

/**
 * Mixes an object into another
 * @param {Object} source object to get values from
 * @param {Object} destination object to mix values into
 * @param {Boolean} optional, set to true to prevent overriding
 * @returns {Object} the destination object
 */
module.exports = function mixin(source, destination, dontOverride) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[134763,134943],"range":[134713,134943],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":369,"label":"olives"}');
    loop(source, function (value, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[134804,134915],"range":[134782,134915],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":368,"label":"olives"}');
        if (!destination[idx] || !dontOverride) {
            destination[idx] = source[idx];
        }
    });
    return destination;
};

},{"simple-loop":46}],46:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[135004,135052],"range":[134972,135052],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":371,"label":"olives"}');
arguments[4][23][0].apply(exports,arguments)
},{"assert":9,"dup":23}],47:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[135112,139030],"range":[135080,139030],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":384,"label":"olives"}');
/**
* @license socketio-transport https://github.com/cosmosio/socketio-transport
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

/**
 * Defines the SocketIOTransport
 * @private
 * @param {Object} $io socket.io's object
 * @returns
 */
module.exports = function SocketIOTransportConstructor($socket) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[135470,139026],"range":[135423,139026],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":383,"label":"olives"}');

	/**
	 * @private
	 * The socket.io's socket
	 */
	var _socket = null;

	/**
	 * Set the socket created by SocketIO
	 * @param {Object} socket the socket.io socket
	 * @returns true if it seems to be a socket.io socket
	 */
	this.setSocket = function setSocket(socket) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[135742,135867],"range":[135715,135867],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":372,"label":"olives"}');
		if (socket && typeof socket.emit == "function") {
			_socket = socket;
			return true;
		} else {
			return false;
		}
	};

	/**
	 * Get the socket, for debugging purpose
	 * @private
	 * @returns {Object} the socket
	 */
	this.getSocket = function getSocket() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[136007,136029],"range":[135986,136029],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":373,"label":"olives"}');
		return _socket;
	};

	/**
	 * Subscribe to a socket event
	 * @param {String} event the name of the event
	 * @param {Function} func the function to execute when the event fires
	 */
	this.on = function on(event, func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[136230,136268],"range":[136205,136268],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":374,"label":"olives"}');
		return _socket.on(event, func);
	};

	/**
	 * Subscribe to a socket event but disconnect as soon as it fires.
	 * @param {String} event the name of the event
	 * @param {Function} func the function to execute when the event fires
	 */
	this.once = function once(event, func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[136509,136549],"range":[136482,136549],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":375,"label":"olives"}');
		return _socket.once(event, func);
	};

	/**
	 * Publish an event on the socket
	 * @param {String} event the event to publish
	 * @param data
	 * @param {Function} callback is the function to be called for ack
	 */
	this.emit = function emit(event, data, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[136778,136828],"range":[136741,136828],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":376,"label":"olives"}');
		return _socket.emit(event, data, callback);
	};

	/**
	 * Stop listening to events on a channel
	 * @param {String} event the event to publish
	 * @param data
	 * @param {Function} callback is the function to be called for ack
	 */
	this.removeListener = function removeListener(event, data, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[137084,137144],"range":[137037,137144],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":377,"label":"olives"}');
		return _socket.removeListener(event, data, callback);
	};

	/**
	 * Make a request on the node server
	 * @param {String} channel watch the server's documentation to see available channels
	 * @param data the request data, it could be anything
	 * @param {Function} func the callback that will get the response.
	 * @param {Object} scope the scope in which to execute the callback
	 */
	this.request = function request(channel, data, func, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[137535,137948],"range":[137490,137948],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":379,"label":"olives"}');
		if (typeof channel == "string" &&
				typeof data != "undefined") {

			var reqData = {
					eventId: Date.now() + Math.floor(Math.random()*1e6),
					data: data
				},
				boundCallback = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[137740,137815],"range":[137728,137815],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":378,"label":"olives"}');
					if (func) {
						func.apply(scope || null, arguments);
					}
				};

			this.once(reqData.eventId, boundCallback);

			this.emit(channel, reqData);

			return true;
		} else {
			return false;
		}
	};

	/**
	 * Listen to an url and get notified on new data
	 * @param {String} channel watch the server's documentation to see available channels
	 * @param data the request data, it could be anything
	 * @param {Function} func the callback that will get the data
	 * @param {Object} scope the scope in which to execute the callback
	 * @returns
	 */
	this.listen = function listen(channel, data, func, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[138357,138963],"range":[138313,138963],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":382,"label":"olives"}');
		if (typeof channel == "string" &&
				typeof data != "undefined" &&
				typeof func == "function") {

			var reqData = {
					eventId: Date.now() + Math.floor(Math.random()*1e6),
					data: data,
					keepAlive: true
				},
				boundCallback = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[138617,138692],"range":[138605,138692],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":380,"label":"olives"}');
					if (func) {
						func.apply(scope || null, arguments);
					}
				},
				that = this;

			this.on(reqData.eventId, boundCallback);

			this.emit(channel, reqData);

			return function stop() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[138816,138927],"range":[138800,138927],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":381,"label":"olives"}');
				that.emit("disconnect-" + reqData.eventId);
				that.removeListener(reqData.eventId, boundCallback);
			};
		} else {
			return false;
		}
	};

	/**
	 * Sets the socket.io
	 */
	this.setSocket($socket);
};

},{}],48:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[139071,139359],"range":[139039,139359],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":385,"label":"olives"}');
/**
* @license socketio-transport https://github.com/cosmosio/socketio-transport
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

module.exports = {
    Client: require("./client/index"),
    Server: require("./server/index")
};

},{"./client/index":47,"./server/index":49}],49:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[139439,141316],"range":[139407,141316],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":392,"label":"olives"}');
/**
* @license socketio-transport https://github.com/cosmosio/socketio-transport
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
 */
var isConnected = false;

module.exports = function registerSocketIO(io, handlers) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139695,141312],"range":[139655,141312],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":391,"label":"olives"}');

    if (isConnected) {
        return false;
    } else {

        // On connection we'll reference the handlers in socket.io
        io.sockets.on("connection", function (socket) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139878,141273],"range":[139860,141273],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":390,"label":"olives"}');

            var connectHandler = function (func, handler) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139939,141027],"range":[139914,141027],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":389,"label":"olives"}');
                // When a handler is called
                socket.on(handler, function (reqData) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[140039,141010],"range":[140020,141010],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":388,"label":"olives"}');

                    // Add socket.io's handshake for session management
                    reqData.data.handshake = socket.handshake;

                    // pass it the requests data
                    var stop = func(reqData.data,
                        // The function to handle the result
                        function onEnd(body) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[140383,140474],"range":[140362,140474],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":386,"label":"olives"}');
                            socket.emit(reqData.eventId, body);
                        },
                        // The function to handle chunks for a kept alive socket
                        function onData(chunk) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[140604,140720],"range":[140581,140720],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":387,"label":"olives"}');
                            reqData.keepAlive && socket.emit(reqData.eventId, ""+chunk);
                        });

                    // If func returned a stop function
                    if (typeof stop == "function") {
                        // Subscribe to disconnect-eventId event
                        socket.on("disconnect-"+reqData.eventId, stop);
                    }

                });

            };

            // for each handler, described in Emily as they can be used from node.js as well
            handlers.loop(connectHandler);
            // Also connect on new handlers
            handlers.watch("added", connectHandler);

        });

        isConnected = true;
    }
};

},{}],50:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[141357,147985],"range":[141325,147985],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":408,"label":"olives"}');
/**
* @license synchronous-fsm https://github.com/flams/synchronous-fsm
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var toArray = require("to-array"),
    simpleLoop = require("simple-loop");

/**
 * @class
 * Creates a stateMachine
 *
 * @param initState {String} the initial state
 * @param diagram {Object} the diagram that describes the state machine
 * @example
 *
 *      diagram = {
 *              "State1" : [
 *                      [ message1, action, nextState], // Same as the state's add function
 *                      [ message2, action2, nextState]
 *              ],
 *
 *              "State2" :
 *                       [ message3, action3, scope3, nextState]
 *                      ... and so on ....
 *
 *   }
 *
 * @return the stateMachine object
 */
module.exports = function StateMachineConstructor($initState, $diagram) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[142267,145560],"range":[142212,145560],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":402,"label":"olives"}');

    /**
     * The list of states
     * @private
     */
    var _states = {},

    /**
     * The current state
     * @private
     */
    _currentState = "";

    /**
     * Set the initialization state
     * @param {String} name the name of the init state
     * @returns {Boolean}
     */
    this.init = function init(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[142602,142774],"range":[142582,142774],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":393,"label":"olives"}');
            if (_states[name]) {
                _currentState = name;
                return true;
            } else {
                return false;
            }
    };

    /**
     * Add a new state
     * @private
     * @param {String} name the name of the state
     * @returns {State} a new state
     */
    this.add = function add(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[142952,143144],"range":[142933,143144],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":394,"label":"olives"}');
        if (!_states[name]) {
            var transition = _states[name] = new Transition();
            return transition;
        } else {
            return _states[name];
        }
    };

    /**
     * Get an existing state
     * @private
     * @param {String} name the name of the state
     * @returns {State} the state
     */
    this.get = function get(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[143326,143363],"range":[143307,143363],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":395,"label":"olives"}');
        return _states[name];
    };

    /**
     * Get the current state
     * @returns {String}
     */
    this.getCurrent = function getCurrent() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[143480,143517],"range":[143458,143517],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":396,"label":"olives"}');
        return _currentState;
    };

    /**
     * Tell if the state machine has the given state
     * @param {String} state the name of the state
     * @returns {Boolean} true if it has the given state
     */
    this.has = function has(state) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[143732,143785],"range":[143712,143785],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":397,"label":"olives"}');
        return _states.hasOwnProperty(state);
    };

    /**
     * Advances the state machine to a given state
     * @param {String} state the name of the state to advance the state machine to
     * @returns {Boolean} true if it has the given state
     */
    this.advance = function advance(state) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[144038,144189],"range":[144014,144189],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":398,"label":"olives"}');
        if (this.has(state)) {
            _currentState = state;
            return true;
        } else {
            return false;
        }
    };

    /**
     * Pass an event to the state machine
     * @param {String} name the name of the event
     * @returns {Boolean} true if the event exists in the current state
     */
    this.event = function event(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[144410,145145],"range":[144389,145145],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":399,"label":"olives"}');
        var nextState;

        nextState = _states[_currentState].event.apply(_states[_currentState].event, toArray(arguments));
        // False means that there's no such event
        // But undefined means that the state doesn't change
        if (nextState === false) {
            return false;
        } else {
            // There could be no next state, so the current one remains
            if (nextState) {
                // Call the exit action if any
                _states[_currentState].event("exit");
                _currentState = nextState;
                // Call the new state's entry action if any
                _states[_currentState].event("entry");
            }
            return true;
        }
    };

    /**
     * Initializes the StateMachine with the given diagram
     */
    if ($diagram) {
        simpleLoop($diagram, function (transition, state) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[145301,145470],"range":[145272,145470],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":401,"label":"olives"}');
            var myState = this.add(state);
            transition.forEach(function (params){instrumentation_log('{"type":"FunctionExpression","bodyRange":[145394,145458],"range":[145377,145458],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":400,"label":"olives"}');
                myState.add.apply(null, params);
            });
        }, this);
    }

    /**
     * Sets its initial state
     */
    this.init($initState);
};

/**
 * Each state has associated transitions
 * @constructor
 */
function Transition() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[145650,147982],"range":[145628,147982],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":407,"label":"olives"}');

    /**
     * The list of transitions associated to a state
     * @private
     */
    var _transitions = {};

    /**
     * Add a new transition
     * @private
     * @param {String} event the event that will trigger the transition
     * @param {Function} action the function that is executed
     * @param {Object} scope [optional] the scope in which to execute the action
     * @param {String} next [optional] the name of the state to transit to.
     * @returns {Boolean} true if success, false if the transition already exists
     */
    this.add = function add(event, action, scope, next) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[146255,146888],"range":[146214,146888],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":403,"label":"olives"}');

        var arr = [];

        if (_transitions[event]) {
            return false;
        }

        if (typeof event == "string" &&
            typeof action == "function") {

                arr[0] = action;

                if (typeof scope == "object") {
                    arr[1] = scope;
                }

                if (typeof scope == "string") {
                    arr[2] = scope;
                }

                if (typeof next == "string") {
                    arr[2] = next;
                }

                _transitions[event] = arr;
                return true;
        }

        return false;
    };

    /**
     * Check if a transition can be triggered with given event
     * @private
     * @param {String} event the name of the event
     * @returns {Boolean} true if exists
     */
    this.has = function has(event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[147113,147158],"range":[147093,147158],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":404,"label":"olives"}');
        return !!_transitions[event];
    };

    /**
     * Get a transition from it's event
     * @private
     * @param {String} event the name of the event
     * @return the transition
     */
    this.get = function get(event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[147349,147401],"range":[147329,147401],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":405,"label":"olives"}');
        return _transitions[event] || false;
    };

    /**
     * Execute the action associated to the given event
     * @param {String} event the name of the event
     * @param {params} params to pass to the action
     * @private
     * @returns false if error, the next state or undefined if success (that sounds weird)
     */
    this.event = function event(newEvent) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[147728,147979],"range":[147703,147979],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":406,"label":"olives"}');
        var _transition = _transitions[newEvent];
        if (_transition) {
            _transition[0].apply(_transition[1], toArray(arguments).slice(1));
            return _transition[2];
        } else {
            return false;
        }
    };
}

},{"simple-loop":51,"to-array":52}],51:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[148056,148104],"range":[148024,148104],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":409,"label":"olives"}');
arguments[4][23][0].apply(exports,arguments)
},{"assert":9,"dup":23}],52:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[148164,148384],"range":[148132,148384],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":411,"label":"olives"}');
module.exports = toArray

function toArray(list, index) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[148222,148381],"range":[148192,148381],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":410,"label":"olives"}');
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}],53:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[148425,151848],"range":[148393,151848],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":419,"label":"olives"}');
/**
* @license transport https://github.com/cosmosio/transport
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

/**
 * @class
 * Transport hides and centralizes the logic behind requests.
 * It can issue requests to request handlers, which in turn can issue requests
 * to anything your node.js server has access to (HTTP, FileSystem, SIP...)
 * @param {Emily Store} [optionanl] $reqHandlers an object containing the request handlers
 * @returns
 */
module.exports = function TransportConstructor($reqHandlers) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[148993,151844],"range":[148949,151844],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":418,"label":"olives"}');

    /**
     * The request handlers
     * @private
     */
    var _reqHandlers = null;

    /**
     * Set the requests handlers object
     * @param {Emily Store} reqHandlers an object containing the requests handlers
     * @returns
     */
    this.setReqHandlers = function setReqHandlers(reqHandlers) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[149304,149475],"range":[149267,149475],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":412,"label":"olives"}');
        if (typeof reqHandlers == "object") {
            _reqHandlers = reqHandlers;
            return true;
        } else {
            return false;
        }
    };

    /**
     * Get the requests handlers
     * @returns{ Emily Store} reqHandlers the object containing the requests handlers
     */
    this.getReqHandlers = function getReqHandlers() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[149665,149701],"range":[149639,149701],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":413,"label":"olives"}');
        return _reqHandlers;
    };

    /**
     * Issue a request to a request handler
     * @param {String} reqHandler the name of the request handler to issue the request to
     * @param {Object} data the data, or payload, to send to the request handler
     * @param {Function} callback the function to execute with the result
     * @param {Object} scope the scope in which to execute the callback
     * @returns
     */
    this.request = function request(reqHandler, data, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[150168,150521],"range":[150116,150521],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":415,"label":"olives"}');
        if (_reqHandlers.has(reqHandler) &&
            typeof data != "undefined") {

            _reqHandlers.get(reqHandler)(data, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[150316,150435],"range":[150304,150435],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":414,"label":"olives"}');
                if (callback) {
                    callback.apply(scope, arguments);
                }
            });
            return true;
        } else {
            return false;
        }
    };

    /**
     * Issue a request to a reqHandler but keep listening for the response as it can be sent in several chunks
     * or remain open as long as the abort funciton is not called
     * @param {String} reqHandler the name of the request handler to issue the request to
     * @param {Object} data the data, or payload, to send to the request handler
     * @param {Function} callback the function to execute with the result
     * @param {Object} scope the scope in which to execute the callback
     * @returns {Function} the abort function to call to stop listening
     */
    this.listen = function listen(reqHandler, data, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[151175,151800],"range":[151124,151800],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":417,"label":"olives"}');
        var func,
            abort;

        if (_reqHandlers.has(reqHandler) &&
            typeof data != "undefined" &&
            typeof callback == "function") {

            func = callback.bind(scope);
            abort = _reqHandlers.get(reqHandler)(data, func, func);

            return function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[151488,151740],"range":[151476,151740],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":416,"label":"olives"}');
                if (typeof abort == "function") {
                    abort();
                } else if (typeof abort == "object" && typeof abort.func == "function") {
                    abort.func.call(abort.scope);
                }
            };
        } else {
            return false;
        }
    };

    this.setReqHandlers($reqHandlers);

};

},{}],54:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[151889,157421],"range":[151857,157421],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":435,"label":"olives"}');
/**
* @license url-highway https://github.com/cosmosio/url-highway
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2016 Olivier Scherrer <pode.fr@gmail.com>
*/
var Highway = require("highway"),
    toArray = require("to-array");

/**
 * @class
 * UrlHighway is a router which navigates to the route defined in the URL and updates this URL
 * while navigating. It's a subtype of Highway
 */
function UrlHighway() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[152304,157257],"range":[152282,157257],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":433,"label":"olives"}');
    "use strict";

    /**
     * The handle on the watch
     * @private
     */
    var _watchHandle,

    /**
     * The default route to navigate to when nothing is supplied in the url
     * @private
     */
    _defaultRoute = "",

    /**
     * The last route that was navigated to
     * @private
     */
    _lastRoute;

    /**
     * Navigates to the current hash or to the default route if none is supplied in the url
     * @private
     */
     /*jshint validthis:true*/
    function doNavigate() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[152818,153038],"range":[152796,153038],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":420,"label":"olives"}');
        if (!hashIsEmpty()) {
            var parsedHash = this.parse(window.location.hash);
            this.navigate.apply(this, parsedHash);
        } else {
            this.navigate(_defaultRoute);
        }
    }

    /**
     * An empty string or # are both empty hashes
     */
    function hashIsEmpty() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[153133,153209],"range":[153110,153209],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":421,"label":"olives"}');
        return !window.location.hash || window.location.hash == "#";
    }

    /**
     * Set the default route to navigate to when nothing is defined in the url
     * @param {String} defaultRoute the defaultRoute to navigate to
     * @returns {Boolean} true if it's not an empty string
     */
    this.setDefaultRoute = function setDefaultRoute(defaultRoute) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[153499,153689],"range":[153460,153689],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":422,"label":"olives"}');
        if (defaultRoute && typeof defaultRoute == "string") {
            _defaultRoute = defaultRoute;
            return true;
        } else {
            return false;
        }
    };

    /**
     * Get the currently set default route
     * @returns {String} the default route
     */
    this.getDefaultRoute = function getDefaultRoute() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[153848,153885],"range":[153821,153885],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":423,"label":"olives"}');
        return _defaultRoute;
    };

    /**
     * The function that parses the url to determine the route to navigate to.
     * It has a default behavior explained below, but can be overriden as long as
     * it has the same contract.
     * @param {String} hash the hash coming from window.location.has
     * @returns {Array} has to return an array with the list of arguments to call
     *    navigate with. The first item of the array must be the name of the route.
     *
     * Example: #album/holiday/2013
     *      will navigate to the route "album" and give two arguments "holiday" and "2013"
     */
    this.parse = function parse(hash) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[154505,154561],"range":[154484,154561],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":424,"label":"olives"}');
        return hash.split("#").pop().split("/");
    };

    /**
     * The function that converts, or serialises the route and its arguments to a valid URL.
     * It has a default behavior below, but can be overriden as long as it has the same contract.
     * @param {Array} args the list of arguments to serialize
     * @returns {String} the serialized arguments to add to the url hashmark
     *
     * Example:
     *      ["album", "holiday", "2013"];
     *      will give "album/holiday/2013"
     *
     */
    this.toUrl = function toUrl(args) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[155063,155101],"range":[155042,155101],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":425,"label":"olives"}');
        return args.join("/");
    };

    /**
     * When all the routes and handlers have been defined, start the location router
     * so it parses the URL and navigates to the corresponding route.
     * It will also start listening to route changes and hashmark changes to navigate.
     * While navigating, the hashmark itself will also change to reflect the current route state
     */
    this.start = function start(defaultRoute) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[155505,155654],"range":[155476,155654],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":426,"label":"olives"}');
        this.setDefaultRoute(defaultRoute);
        doNavigate.call(this);
        this.bindOnHashChange();
        this.bindOnRouteChange();
    };

    /**
     * Remove the events handler for cleaning.
     */
    this.stop = function stop() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[155752,155875],"range":[155736,155875],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":427,"label":"olives"}');
        this.unwatch(_watchHandle);
        window.removeEventListener("hashchange", this.boundOnHashChange, true);
    };

    /**
     * Parse the hash and navigate to the corresponding url
     * @private
     */
    this.onHashChange  = function onHashChange() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156019,156121],"range":[155995,156121],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":428,"label":"olives"}');
        if (window.location.hash != _lastRoute) {
            doNavigate.call(this);
        }
    };

    /**
     * The bound version of onHashChange for add/removeEventListener
     * @private
     */
    this.boundOnHashChange = this.onHashChange.bind(this);

    /**
     * Add an event listener to hashchange to navigate to the corresponding route
     * when it changes
     * @private
     */
    this.bindOnHashChange = function bindOnHashChange() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156478,156562],"range":[156450,156562],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":429,"label":"olives"}');
        window.addEventListener("hashchange", this.boundOnHashChange, true);
    };

    /**
     * Watch route change events from the router to update the location
     * @private
     */
    this.bindOnRouteChange = function bindOnRouteChange() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156727,156795],"range":[156698,156795],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":430,"label":"olives"}');
        _watchHandle = this.watch(this.onRouteChange, this);
    };

    /**
     * The handler for when the route changes
     * It updates the location
     * @private
     */
    this.onRouteChange = function onRouteChange() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156957,157070],"range":[156932,157070],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":431,"label":"olives"}');
        window.location.hash = this.toUrl(toArray(arguments));
        _lastRoute = window.location.hash;
    };

    /**
     * Get the last, or current, route we've navigated to
     * @returns {string}
     */
    this.getLastRoute = function getLastRoute() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[157220,157254],"range":[157196,157254],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":432,"label":"olives"}');
        return _lastRoute;
    };
}

module.exports = function UrlHighwayFactory() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[157305,157417],"range":[157276,157417],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":434,"label":"olives"}');
    UrlHighway.prototype = new Highway();
    UrlHighway.constructor = Highway;
    return new UrlHighway();
};

},{"highway":55,"to-array":52}],55:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[157488,162990],"range":[157456,162990],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":453,"label":"olives"}');
/**
 * @license highway https://github.com/cosmosio/highway
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Olivier Scherrer <pode.fr@gmail.com>
 */
"use strict";

var Observable = require("watch-notify"),
    toArray = require("to-array");

/**
 * @class
 * Routing allows for navigating in an application by defining routes.
 */
module.exports = function HighwayConstructor() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[157878,162986],"range":[157848,162986],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":452,"label":"olives"}');

    /**
     * The routes observable (the applications use it)
     * @private
     */
    var _routes = new Observable(),

        /**
         * The events observable (used by Routing)
         * @private
         */
        _events = new Observable(),

        /**
         * The routing history
         * @private
         */
        _history = [],

        /**
         * For navigating through the history, remembers the current position
         * @private
         */
        _currentPos = -1,

        /**
         * The max history depth
         * @private
         */
        _maxHistory = 10;

    /**
     * Set a new route
     * @param {String} route the name of the route
     * @param {Function} func the function to be execute when navigating to the route
     * @param {Object} scope the scope in which to execute the function
     * @returns a handle to remove the route
     */
    this.set = function set() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[158812,158875],"range":[158797,158875],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":436,"label":"olives"}');
        return _routes.watch.apply(_routes, arguments);
    };

    /**
     * Remove a route
     * @param {Object} handle the handle provided by the set method
     * @returns true if successfully removed
     */
    this.unset = function unset(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[159069,159116],"range":[159046,159116],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":437,"label":"olives"}');
        return _routes.unwatch(handle);
    };

    /**
     * Navigate to a route
     * @param {String} route the route to navigate to
     * @param {*} as many params as necessary
     * @returns
     */
    this.navigate = function navigate(route) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[159323,159512],"range":[159298,159512],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":438,"label":"olives"}');
        clearForwardHistory();
        _history.push(toArray(arguments));
        ensureMaxHistory();
        _currentPos = _history.length - 1;
        load.apply(this, arguments);
    };

    /**
     * Go back and forth in the history
     * @param {Number} nb the number of jumps in the history. Use negative number to go back.
     * @returns true if history exists
     */
    this.go = function go(nb) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[159734,159962],"range":[159718,159962],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":439,"label":"olives"}');
        var history = _history[_currentPos + nb];
        if (history) {
            _currentPos += nb;
            load.apply(this, history);
            return true;
        } else {
            return false;
        }
    };

    /**
     * Go back in the history, short for go(-1)
     * @returns true if it was able to go back
     */
    this.back = function back() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[160108,160143],"range":[160092,160143],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":440,"label":"olives"}');
        return this.go(-1);
    };

    /**
     * Go forward in the history, short for go(1)
     * @returns true if it was able to go forward
     */
    this.forward = function forward() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[160300,160334],"range":[160281,160334],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":441,"label":"olives"}');
        return this.go(1);
    };

    /**
     * Watch for route changes
     * @param {Function} func the func to execute when the route changes
     * @param {Object} scope the scope in which to execute the function
     * @returns {Object} the handle to unwatch for route changes
     */
    this.watch = function watch(func, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[160639,160698],"range":[160611,160698],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":442,"label":"olives"}');
        return _events.watch("route", func, scope);
    };

    /**
     * Unwatch routes changes
     * @param {Object} handle the handle was returned by the watch function
     * @returns true if unwatch
     */
    this.unwatch = function unwatch(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[160899,160946],"range":[160874,160946],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":443,"label":"olives"}');
        return _events.unwatch(handle);
    };

    /**
     * Set the maximum length of history
     * As the user navigates through the application, the
     * router keeps track of the history. Set the depth of the history
     * depending on your need and the amount of memory that you can allocate it
     * @param {Number} maxHistory the depth of history
     * @returns {Boolean} true if maxHistory is equal or greater than 0
     */
    this.setMaxHistory = function setMaxHistory(maxHistory) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161402,161588],"range":[161367,161588],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":444,"label":"olives"}');
        if (maxHistory >= 0) {
            _maxHistory = maxHistory;
            ensureMaxHistory();
            return true;
        } else {
            return false;
        }
    };

    /**
     * Get the current max history setting
     * @returns {Number} the depth of history
     */
    this.getMaxHistory = getMaxHistory;

    /**
     * Get the current length of history
     * @returns {Number} the length of history
     */
    this.getHistoryCount = function getHistoryCount() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161895,161934],"range":[161868,161934],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":445,"label":"olives"}');
        return _history.length;
    };

    /**
     * Flush the entire history
     */
    this.clearHistory = function clearHistory() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162033,162069],"range":[162009,162069],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":446,"label":"olives"}');
        _history.length = 0;
    };

    /**
     * Get a route from the history or the entire historic
     * @param index
     * @returns {*}
     */
    this.getHistory = function getHistory(index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162236,162400],"range":[162209,162400],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":447,"label":"olives"}');
        if (typeof index == "undefined") {
            return _history;
        } else {
            return _history[_history.length - index - 1];
        }
    };

    function load() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[162423,162591],"range":[162407,162591],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":448,"label":"olives"}');
        var copy = toArray(arguments);

        _routes.notify.apply(_routes, copy);
        copy.unshift("route");
        _events.notify.apply(_events, copy);
    }

    function getMaxHistory() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[162622,162657],"range":[162597,162657],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":449,"label":"olives"}');
        return _maxHistory;
    }

    function ensureMaxHistory() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[162691,162881],"range":[162663,162881],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":450,"label":"olives"}');
        var count = _history.length,
            max = getMaxHistory(),
            excess = count - max;

        if (excess > 0) {
            _history.splice(0, excess);
        }
    }

    function clearForwardHistory() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[162918,162984],"range":[162887,162984],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":451,"label":"olives"}');
        _history.splice(_currentPos + 1, _history.length);
    }
};

},{"to-array":52,"watch-notify":58}],56:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[163062,163269],"range":[163030,163269],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":455,"label":"olives"}');
module.exports = function isBuffer(arg) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163104,163267],"range":[163081,163267],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":454,"label":"olives"}');
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],57:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[163310,179061],"range":[163278,179061],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":501,"label":"olives"}');
(function (process,global){instrumentation_log('{"type":"FunctionExpression","bodyRange":[163338,178905],"range":[163313,178905],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":500,"label":"olives"}');
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164534,165357],"range":[164522,165357],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":457,"label":"olives"}');
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164831,165176],"range":[164819,165176],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":456,"label":"olives"}');
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[165552,166167],"range":[165534,166167],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":460,"label":"olives"}');
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[165678,165749],"range":[165667,165749],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":458,"label":"olives"}');
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[165862,166143],"range":[165840,166143],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":459,"label":"olives"}');
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[166239,166702],"range":[166225,166702],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":463,"label":"olives"}');
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[166499,166619],"range":[166488,166619],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":461,"label":"olives"}');
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[166665,166667],"range":[166654,166667],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":462,"label":"olives"}');};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[167023,167728],"range":[166995,167728],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":464,"label":"olives"}');
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[168439,168647],"range":[168397,168647],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":465,"label":"olives"}');
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[168690,168707],"range":[168650,168707],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":466,"label":"olives"}');
  return str;
}


function arrayToHash(array) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[168738,168840],"range":[168710,168840],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":468,"label":"olives"}');
  var hash = {};

  array.forEach(function(val, idx) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[168793,168820],"range":[168774,168820],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":467,"label":"olives"}');
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[168890,171959],"range":[168843,171959],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":470,"label":"olives"}');
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171791,171878],"range":[171777,171878],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":469,"label":"olives"}');
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[171999,172628],"range":[171962,172628],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":471,"label":"olives"}');
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[172659,172721],"range":[172631,172721],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":472,"label":"olives"}');
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[172790,173239],"range":[172724,173239],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":474,"label":"olives"}');
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173081,173218],"range":[173067,173218],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":473,"label":"olives"}');
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[173317,174859],"range":[173242,174859],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":477,"label":"olives"}');
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174080,174125],"range":[174065,174125],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":475,"label":"olives"}');
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174224,174270],"range":[174209,174270],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":476,"label":"olives"}');
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[174914,175389],"range":[174862,175389],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":479,"label":"olives"}');
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174988,175124],"range":[174968,175124],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":478,"label":"olives"}');
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[175562,175593],"range":[175541,175593],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":480,"label":"olives"}');
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[175646,175684],"range":[175622,175684],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":481,"label":"olives"}');
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[175738,175764],"range":[175717,175764],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":482,"label":"olives"}');
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[175823,175848],"range":[175791,175848],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":483,"label":"olives"}');
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[175920,175957],"range":[175897,175957],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":484,"label":"olives"}');
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[176011,176048],"range":[175988,176048],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":485,"label":"olives"}');
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[176102,176139],"range":[176079,176139],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":486,"label":"olives"}');
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[176196,176224],"range":[176170,176224],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":487,"label":"olives"}');
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[176283,176353],"range":[176261,176353],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":488,"label":"olives"}');
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[176407,176460],"range":[176384,176460],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":489,"label":"olives"}');
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[176510,176576],"range":[176491,176576],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":490,"label":"olives"}');
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[176623,176720],"range":[176603,176720],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":491,"label":"olives"}');
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[176774,176813],"range":[176749,176813],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":492,"label":"olives"}');
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[176874,177099],"range":[176848,177099],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":493,"label":"olives"}');
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[177214,177261],"range":[177187,177261],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":494,"label":"olives"}');
  return Object.prototype.toString.call(o);
}


function pad(n) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[177280,177340],"range":[177264,177340],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":495,"label":"olives"}');
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[177497,177698],"range":[177476,177698],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":496,"label":"olives"}');
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[177797,177881],"range":[177786,177881],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":497,"label":"olives"}');
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[178581,178803],"range":[178559,178803],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":498,"label":"olives"}');
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[178841,178902],"range":[178806,178902],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":499,"label":"olives"}');
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":56,"_process":38,"inherits":21}],58:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[179153,183338],"range":[179121,183338],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":513,"label":"olives"}');
/**
* @license watch-notify https://github.com/flams/watch-notify
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2015 Olivier Scherrer <pode.fr@gmail.com>
*/
"use strict";

var assert = require("assert");

var loop = require("simple-loop"),
  toArray = require("to-array");

/**
* @class
* Observable is an implementation of the Observer design pattern,
* which is also known as publish/subscribe.
*
* This service creates an Observable to which you can add subscribers.
*
* @returns {Observable}
*/
module.exports = function WatchNotifyConstructor() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[179708,183334],"range":[179674,183334],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":512,"label":"olives"}');

    /**
     * The list of topics
     * @private
     */
    var _topics = {};

    /**
     * Add an observer
     * @param {String} topic the topic to observe
     * @param {Function} callback the callback to execute
     * @param {Object} scope the scope in which to execute the callback
     * @returns handle
     */
    this.watch = function watch(topic, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[180090,180400],"range":[180051,180400],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":502,"label":"olives"}');
        if (typeof callback == "function") {
            var observers = _topics[topic] = _topics[topic] || [],
            observer = [callback, scope];

            observers.push(observer);
            return [topic, observers.indexOf(observer)];
        } else {
            return false;
        }
    };

    /**
     * Listen to an event just once before removing the handler
     * @param {String} topic the topic to observe
     * @param {Function} callback the callback to execute
     * @param {Object} scope the scope in which to execute the callback
     * @returns handle
     */
    this.once = function once(topic, callback, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[180740,180921],"range":[180702,180921],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":504,"label":"olives"}');
        var handle = this.watch(topic, function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[180793,180884],"range":[180781,180884],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":503,"label":"olives"}');
            callback.apply(scope, arguments);
            this.unwatch(handle);
        }, this);
        return handle;
    };

    /**
     * Remove an observer
     * @param {Handle} handle returned by the watch method
     * @returns {Boolean} true if there were subscribers
     */
    this.unwatch = function unwatch(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[181126,181635],"range":[181101,181635],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":506,"label":"olives"}');
        var topic = handle[0], idx = handle[1];
        if (_topics[topic] && _topics[topic][idx]) {
            // delete value so the indexes don't move
            delete _topics[topic][idx];
            // If the topic is only set with falsy values, delete it;
            if (!_topics[topic].some(function (value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[181447,181494],"range":[181430,181494],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":505,"label":"olives"}');
                return !!value;
            })) {
                delete _topics[topic];
            }
            return true;
        } else {
            return false;
        }
    };

    /**
     * Notifies observers that a topic has a new message
     * @param {String} topic the name of the topic to publish to
     * @param subject
     * @returns {Boolean} true if there was subscribers
     */
    this.notify = function notify(topic) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[181895,182455],"range":[181872,182455],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":508,"label":"olives"}');
        var observers = _topics[topic],
            args = toArray(arguments).slice(1);

        if (observers) {
            loop(observers, function (value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[182056,182369],"range":[182039,182369],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":507,"label":"olives"}');
                try {
                    if (value) {
                        value[0].apply(value[1] || null, args);
                    }
                } catch (err) {
                    console.error("[Watch-notify] publishing on '" + topic + "'' threw an error: " + err);
                }
            });
            return true;
        } else {
            return false;
        }
    };

    /**
     * Check if topic has the described observer
     * @param {Handle}
     * @returns {Boolean} true if exists
     */
    this.hasObserver = function hasObserver(handle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[182639,182729],"range":[182610,182729],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":509,"label":"olives"}');
        return !!( handle && _topics[handle[0]] && _topics[handle[0]][handle[1]]);
    };

    /**
     * Check if a topic has observers
     * @param {String} topic the name of the topic
     * @returns {Boolean} true if topic is listened
     */
    this.hasTopic = function hasTopic(topic) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[182934,182974],"range":[182909,182974],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":510,"label":"olives"}');
        return !!_topics[topic];
    };

    /**
     * Unwatch all or unwatch all from topic
     * @param {String} topic optional unwatch all from topic
     * @returns {Boolean} true if ok
     */
    this.unwatchAll = function unwatchAll(topic) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[183185,183331],"range":[183158,183331],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":511,"label":"olives"}');
        if (_topics[topic]) {
            delete _topics[topic];
        } else {
            _topics = {};
        }
        return true;
    };
};

},{"assert":9,"simple-loop":59,"to-array":52}],59:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[183420,183468],"range":[183388,183468],"file":"todomvc/examples.lacunized.instrumented/olives/olives-todo.js","index":514,"label":"olives"}');
arguments[4][23][0].apply(exports,arguments)
},{"assert":9,"dup":23}]},{},[1]);
