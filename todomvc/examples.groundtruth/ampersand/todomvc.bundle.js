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


(function e(t,n,r){instrumentation_log('{"type":"FunctionExpression","bodyRange":[18,441],"range":[1,441],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":2,"label":"ampersand"}');function s(o,u){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[34,355],"range":[19,355],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":1,"label":"ampersand"}');if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){instrumentation_log('{"type":"FunctionExpression","bodyRange":[279,313],"range":[268,313],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":0,"label":"ampersand"}');var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[479,1021],"range":[447,1021],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":4,"label":"ampersand"}');
'use strict';

var MainView = require('./views/main');
var Me = require('./models/me');
var Router = require('./router');


window.app = {
	init: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[639,995],"range":[627,995],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":3,"label":"ampersand"}');
		// Model representing state for
		// user using the app. Calling it
		// 'me' is a bit of convention but
		// it's basically 'app state'.
		this.me = new Me();
		// Our main view
		this.view = new MainView({
			el: document.body,
			model: this.me
		});
		// Create and fire up the router
		this.router = new Router();
		this.router.history.start();
	}
};

window.app.init();

},{"./models/me":2,"./router":5,"./views/main":7}],2:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[1106,3590],"range":[1074,3590],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":9,"label":"ampersand"}');
// typically we us a 'me' model to represent state for the
// user of the app. So in an app where you have a logged in
// user this is where we'd store username, etc.
// We also use it to store session properties, which is the
// non-persisted state that we use to track application
// state for this user in this session.
'use strict';

var State = require('ampersand-state');
var Todos = require('./todos');


module.exports = State.extend({
	initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1577,1987],"range":[1565,1987],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":5,"label":"ampersand"}');
		// Listen to changes to the todos collection that will
		// affect lengths we want to calculate.
		this.listenTo(this.todos, 'change:completed add remove', this.handleTodosUpdate);
		// We also want to calculate these values once on init
		this.handleTodosUpdate();
		// Listen for changes to `mode` so we can update
		// the collection mode.
		this.listenTo(this, 'change:mode', this.handleModeChange);
	},
	collections: {
		todos: Todos
	},
	// We used only session properties here because there's
	// no API or persistance layer for these in this app.
	session: {
		activeCount: {
			type: 'number',
			default: 0
		},
		completedCount: {
			type: 'number',
			default: 0
		},
		totalCount:{
			type: 'number',
			default: 0
		},
		allCompleted: {
			type: 'boolean',
			default: false
		},
		mode: {
			type: 'string',
			values: [
				'all',
				'completed',
				'active'
			],
			default: 'all'
		}
	},
	derived: {
		// We produce this as an HTML snippet here
		// for convenience since it also has to be
		// pluralized it was easier this way.
		itemsLeftHtml: {
			deps: ['activeCount'],
			fn: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2696,2836],"range":[2684,2836],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":6,"label":"ampersand"}');
				var plural = (this.activeCount === 1) ? '' : 's';
				return '<strong>' + this.activeCount + '</strong> item' + plural + ' left';
			}
		}
	},
	// Calculate and set various lengths we're
	// tracking. We set them as session properties
	// so they're easy to listen to and bind to DOM
	// where needed.
	handleTodosUpdate: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3036,3513],"range":[3024,3513],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":7,"label":"ampersand"}');
		var total = this.todos.length;
		// use a method we defined on the collection itself
		// to count how many todos are completed
		var completed = this.todos.getCompletedCount();
		// We use `set` here in order to update multiple attributes at once
		// It's possible to set directely using `this.completedCount = completed` ...
		this.set({
			completedCount: completed,
			activeCount: total - completed,
			totalCount: total,
			allCompleted: total === completed
		});
	},
	handleModeChange: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3546,3583],"range":[3534,3583],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":8,"label":"ampersand"}');
		this.todos.setMode(this.mode);
	}
});

},{"./todos":4,"ampersand-state":22}],3:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[3662,4312],"range":[3630,4312],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":11,"label":"ampersand"}');
'use strict';

// We're using 'ampersand-state' here instead of 'ampersand-model'
// because we don't need any of the RESTful
// methods for this app.
var State = require('ampersand-state');


module.exports = State.extend({
	// Properties this model will store
	props: {
		title: {
			type: 'string',
			default: ''
		},
		completed: {
			type: 'boolean',
			default: false
		}
	},
	// session properties work the same way as `props`
	// but will not be included when serializing.
	session: {
		editing: {
			type: 'boolean',
			default: false
		}
	},
	destroy: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4239,4305],"range":[4227,4305],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":10,"label":"ampersand"}');
		if (this.collection) {
			this.collection.remove(this);
		}
	}
});

},{"ampersand-state":22}],4:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[4372,6557],"range":[4340,6557],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":21,"label":"ampersand"}');
'use strict';

var Collection = require('ampersand-collection');
var SubCollection = require('ampersand-subcollection');
var debounce = require('debounce');
var Todo = require('./todo');
var STORAGE_KEY = 'todos-ampersand';


module.exports = Collection.extend({
	model: Todo,
	initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4676,5385],"range":[4664,5385],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":12,"label":"ampersand"}');
		// Attempt to read from localStorage
		this.readFromLocalStorage();

		// This is what we'll actually render
		// it's a subcollection of the whole todo collection
		// that we'll add/remove filters to accordingly.
		this.subset = new SubCollection(this);

		// We put a slight debounce on this since it could possibly
		// be called in rapid succession.
		this.writeToLocalStorage = debounce(this.writeToLocalStorage, 100);

		// Listen for storage events on the window to keep multiple
		// tabs in sync
		window.addEventListener('storage', this.handleStorageEvent.bind(this));

		// We listen for changes to the collection
		// and persist on change
		this.on('all', this.writeToLocalStorage, this);
	},
	getCompletedCount: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5418,5519],"range":[5407,5519],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":14,"label":"ampersand"}');
		return this.reduce(function(total, todo){instrumentation_log('{"type":"FunctionExpression","bodyRange":[5462,5511],"range":[5441,5511],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":13,"label":"ampersand"}');
			return todo.completed ? ++total : total;
		}, 0);
	},
	// Helper for removing all completed items
	clearCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5594,5702],"range":[5582,5702],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":16,"label":"ampersand"}');
		var toRemove = this.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5641,5672],"range":[5625,5672],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":15,"label":"ampersand"}');
			return todo.completed;
		});
		this.remove(toRemove);
	},
	// Updates the collection to the appropriate mode.
	// mode can 'all', 'completed', or 'active'
	setMode: function (mode) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5827,5997],"range":[5811,5997],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":17,"label":"ampersand"}');
		if (mode === 'all') {
			this.subset.clearFilters();
		} else {
			this.subset.configure({
				where: {
					completed: mode === 'completed'
				}
			}, true);
		}
	},
	// The following two methods are all we need in order
	// to add persistance to localStorage
	writeToLocalStorage: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6127,6183],"range":[6115,6183],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":18,"label":"ampersand"}');
		localStorage[STORAGE_KEY] = JSON.stringify(this);
	},
	readFromLocalStorage: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6220,6337],"range":[6208,6337],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":19,"label":"ampersand"}');
		var existingData = localStorage[STORAGE_KEY];
		if (existingData) {
			this.set(JSON.parse(existingData));
		}
	},
	// Handles events from localStorage. Browsers will fire
	// this event in other tabs on the same domain.
	handleStorageEvent: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6479,6550],"range":[6466,6550],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":20,"label":"ampersand"}');
		if (e.key === STORAGE_KEY) {
			this.readFromLocalStorage();
		}
	}
});

},{"./todo":3,"ampersand-collection":9,"ampersand-subcollection":28,"debounce":53}],5:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[6675,6893],"range":[6643,6893],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":23,"label":"ampersand"}');
'use strict';
/*global app */

var Router = require('ampersand-router');


module.exports = Router.extend({
	routes: {
		'*filter': 'setFilter'
	},
	setFilter: function (arg) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6852,6886],"range":[6837,6886],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":22,"label":"ampersand"}');
		app.me.mode = arg || 'all';
	}
});

},{"ampersand-router":16}],6:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[6954,7373],"range":[6922,7373],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":25,"label":"ampersand"}');
var jade = require("jade/runtime");

module.exports = function template(locals) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7036,7370],"range":[7010,7370],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":24,"label":"ampersand"}');
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<li><div class=\"view\"><input type=\"checkbox\" data-hook=\"checkbox\" class=\"toggle\"/><label data-hook=\"title\"></label><button data-hook=\"action-delete\" class=\"destroy\"></button></div><input data-hook=\"input\" class=\"edit\"/></li>");;return buf.join("");
};
},{"jade/runtime":55}],7:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[7430,9840],"range":[7398,9840],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":31,"label":"ampersand"}');
'use strict';
/*global app */

var View = require('ampersand-view');
var TodoView = require('./todo');
var ENTER_KEY = 13;


module.exports = View.extend({
	events: {
		'keypress [data-hook~=todo-input]': 'handleMainInput',
		'click [data-hook~=mark-all]': 'handleMarkAllClick',
		'click [data-hook~=clear-completed]': 'handleClearClick'
	},
	// Declaratively bind all our data to the template.
	// This means only changed data in the DOM is updated
	// with this approach we *only* ever touch the DOM with
	// appropriate dom methods. Not just `innerHTML` which
	// makes it about as fast as possible.
	// These get re-applied if the view's element is replaced
	// or if the model isn't there yet, etc.
	// Binding type reference:
	// http://ampersandjs.com/docs#ampersand-dom-bindings-binding-types
	bindings: {
		// Show hide main and footer
		// based on truthiness of totalCount
		'model.totalCount': {
			type: 'toggle',
			selector: '#main, #footer'
		},
		'model.completedCount': [
			// Hides when there are none
			{
				type: 'toggle',
				hook: 'clear-completed'
			},
			// Inserts completed count
			{
				type: 'text',
				hook: 'completed-count'
			}
		],
		// Inserts HTML from model that also
		// does pluralizing.
		'model.itemsLeftHtml': {
			type: 'innerHTML',
			hook: 'todo-count'
		},
		// Add 'selected' to right
		// element
		'model.mode': {
			type: 'switchClass',
			name: 'selected',
			cases: {
				'all': '[data-hook=all-mode]',
				'active': '[data-hook=active-mode]',
				'completed': '[data-hook=completed-mode]',
			}
		},
		// Bind 'checked' state of checkbox
		'model.allCompleted': {
			type: 'booleanAttribute',
			name: 'checked',
			hook: 'mark-all'
		}
	},
	// cache
	initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9168,9315],"range":[9156,9315],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":26,"label":"ampersand"}');
		this.mainInput = this.queryByHook('todo-input');
		this.renderCollection(app.me.todos.subset, TodoView, this.queryByHook('todo-container'));
	},
	// handles DOM event from main input
	handleMainInput: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9386,9538],"range":[9373,9538],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":27,"label":"ampersand"}');
		var val = this.mainInput.value.trim();
		if (e.which === ENTER_KEY && val) {
			app.me.todos.add({title: val});
			this.mainInput.value = '';
		}
	},
	// Here we set all to state provided.
	handleMarkAllClick: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9612,9735],"range":[9600,9735],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":29,"label":"ampersand"}');
		var targetState = !app.me.allCompleted;
		app.me.todos.each(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9692,9730],"range":[9676,9730],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":28,"label":"ampersand"}');
			todo.completed = targetState;
		});
	},
	// Handler for clear click
	handleClearClick: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9796,9833],"range":[9784,9833],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":30,"label":"ampersand"}');
		app.me.todos.clearCompleted();
	}
});

},{"./todo":8,"ampersand-view":35}],8:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[9910,12376],"range":[9878,12376],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":38,"label":"ampersand"}');
'use strict';

var View = require('ampersand-view');
var todoTemplate = require('../templates/todo.jade');
var ENTER_KEY = 13;
var ESC_KEY = 27;


module.exports = View.extend({
	// note that Ampersand is extrememly flexible with templating.
	// This template property can be:
	//   1. A plain HTML string
	//   2. A function that returns an HTML string
	//   3. A function that returns a DOM element
	//
	// Here we're using a jade template. A browserify transform
	// called 'jadeify' lets us require a ".jade" file as if
	// it were a module and it will compile it to a function
	// for us. This function returns HTML as per #2 above.
	template: todoTemplate,
	// Events work like backbone they're all delegated to
	// root element.
	events: {
		'change [data-hook=checkbox]': 'handleCheckboxChange',
		'click [data-hook=action-delete]': 'handleDeleteClick',
		'dblclick [data-hook=title]': 'handleDoubleClick',
		'keyup [data-hook=input]': 'handleKeypress',
		'blur [data-hook=input]': 'handleBlur'
	},
	// Declarative data bindings
	bindings: {
		'model.title': [
			{
				type: 'text',
				hook: 'title'
			},
			{
				type: 'value',
				hook: 'input'
			}
		],
		'model.editing': [
			{
				type: 'toggle',
				yes: '[data-hook=input]',
				no: '[data-hook=view]'
			},
			{
				type: 'booleanClass'
			}
		],
		'model.completed': [
			{
				type: 'booleanAttribute',
				name: 'checked',
				hook: 'checkbox'
			},
			{
				type: 'booleanClass'
			}
		]
	},
	render: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11399,11632],"range":[11387,11632],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":32,"label":"ampersand"}');
		// Render this with template provided.
		// Note that unlike backbone this includes the root element.
		this.renderWithTemplate();
		// cache reference to `input` for speed/convenience
		this.input = this.queryByHook('input');
	},
	handleCheckboxChange: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11670,11717],"range":[11657,11717],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":33,"label":"ampersand"}');
		this.model.completed = e.target.checked;
	},
	handleDeleteClick: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11751,11779],"range":[11739,11779],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":34,"label":"ampersand"}');
		this.model.destroy();
	},
	// Just put us in edit mode and focus
	handleDoubleClick: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11852,11907],"range":[11840,11907],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":35,"label":"ampersand"}');
		this.model.editing = true;
		this.input.focus();
	},
	handleKeypress: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11939,12098],"range":[11926,12098],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":36,"label":"ampersand"}');
		if (e.which === ENTER_KEY) {
			this.input.blur();
		} else if (e.which === ESC_KEY) {
			this.input.value = this.model.title;
			this.input.blur();
		}
	},
	// Since we always blur even in the other
	// scenarios we use this as a 'save' point.
	handleBlur: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12213,12369],"range":[12201,12369],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":37,"label":"ampersand"}');
		var val = this.input.value.trim();
		if (val) {
			this.model.set({
				title: val,
				editing: false
			});
		} else {
			this.model.destroy();
		}
	}
});

},{"../templates/todo.jade":6,"ampersand-view":35}],9:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[12462,25050],"range":[12430,25050],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":65,"label":"ampersand"}');
var BackboneEvents = require('backbone-events-standalone');
var classExtend = require('ampersand-class-extend');
var isArray = require('is-array');
var extend = require('extend-object');
var slice = [].slice;


function Collection(models, options) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[12712,13226],"range":[12675,13226],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":39,"label":"ampersand"}');
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator) this.comparator = options.comparator;
    if (options.parent) this.parent = options.parent;
    if (!this.mainIndex) {
        var idAttribute = this.model && this.model.prototype && this.model.prototype.idAttribute;
        this.mainIndex = idAttribute || 'id';
    }
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, extend({silent: true}, options));
}

extend(Collection.prototype, BackboneEvents, {
    initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13303,13305],"range":[13291,13305],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":40,"label":"ampersand"}');},

    indexes: [],

    isModel: function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13356,13421],"range":[13339,13421],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":41,"label":"ampersand"}');
        return this.model && model instanceof this.model;
    },

    add: function (models, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13460,13559],"range":[13433,13559],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":42,"label":"ampersand"}');
        return this.set(models, extend({merge: false, add: true, remove: false}, options));
    },

    // overridable parse method
    parse: function (res, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13629,13656],"range":[13605,13656],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":43,"label":"ampersand"}');
        return res;
    },

    // overridable serialize method
    serialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13722,14029],"range":[13710,14029],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":45,"label":"ampersand"}');
        return this.map(function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13765,14021],"range":[13748,14021],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":44,"label":"ampersand"}');
            if (model.serialize) {
                return model.serialize();
            } else {
                var out = {};
                extend(out, model);
                delete out.collection;
                return out;
            }
        });
    },

    toJSON: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[14056,14096],"range":[14044,14096],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":46,"label":"ampersand"}');
        return this.serialize();
    },

    set: function (models, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[14135,18668],"range":[14108,18668],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":47,"label":"ampersand"}');
        options = extend({add: true, remove: true, merge: true}, options);
        if (options.parse) models = this.parse(models, options);
        var singular = !isArray(models);
        models = singular ? (models ? [models] : []) : models.slice();
        var id, model, attrs, existing, sort, i, length;
        var at = options.at;
        var sortable = this.comparator && (at == null) && options.sort !== false;
        var sortAttr = ('string' === typeof this.comparator) ? this.comparator : null;
        var toAdd = [], toRemove = [], modelMap = {};
        var add = options.add, merge = options.merge, remove = options.remove;
        var order = !sortable && add && remove ? [] : false;
        var targetProto = this.model && this.model.prototype || Object.prototype;

        // Turn bare objects into model references, and prevent invalid models
        // from being added.
        for (i = 0, length = models.length; i < length; i++) {
            attrs = models[i] || {};
            if (this.isModel(attrs)) {
                id = model = attrs;
            } else if (targetProto.generateId) {
                id = targetProto.generateId(attrs);
            } else {
                id = attrs[targetProto.idAttribute || this.mainIndex];
            }

            // If a duplicate is found, prevent it from being added and
            // optionally merge it into the existing model.
            if (existing = this.get(id)) {
                if (remove) modelMap[existing.cid || existing[this.mainIndex]] = true;
                if (merge) {
                    attrs = attrs === model ? model.attributes : attrs;
                    if (options.parse) attrs = existing.parse(attrs, options);
                    // if this is model
                    if (existing.set) {
                        existing.set(attrs, options);
                        if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
                    } else {
                        // if not just update the properties
                        extend(existing, attrs);
                    }
                }
                models[i] = existing;

            // If this is a new, valid model, push it to the `toAdd` list.
            } else if (add) {
                model = models[i] = this._prepareModel(attrs, options);
                if (!model) continue;
                toAdd.push(model);
                this._addReference(model, options);
            }

            // Do not add multiple models with the same `id`.
            model = existing || model;
            if (!model) continue;
            if (order && ((model.isNew && model.isNew() || !model[this.mainIndex]) || !modelMap[model.cid || model[this.mainIndex]])) order.push(model);
            modelMap[model[this.mainIndex]] = true;
        }

        // Remove nonexistent models if appropriate.
        if (remove) {
            for (i = 0, length = this.length; i < length; i++) {
                model = this.models[i];
                if (!modelMap[model.cid || model[this.mainIndex]]) toRemove.push(model);
            }
            if (toRemove.length) this.remove(toRemove, options);
        }

        // See if sorting is needed, update `length` and splice in new models.
        if (toAdd.length || (order && order.length)) {
            if (sortable) sort = true;
            if (at != null) {
                for (i = 0, length = toAdd.length; i < length; i++) {
                    this.models.splice(at + i, 0, toAdd[i]);
                }
            } else {
                var orderedModels = order || toAdd;
                for (i = 0, length = orderedModels.length; i < length; i++) {
                    this.models.push(orderedModels[i]);
                }
            }
        }

        // Silently sort the collection if appropriate.
        if (sort) this.sort({silent: true});

        // Unless silenced, it's time to fire all appropriate add/sort events.
        if (!options.silent) {
            for (i = 0, length = toAdd.length; i < length; i++) {
                model = toAdd[i];
                if (model.trigger) {
                    model.trigger('add', model, this, options);
                } else {
                    this.trigger('add', model, this, options);
                }
            }
            if (sort || (order && order.length)) this.trigger('sort', this, options);
        }

        // Return the added (or merged) model (or models).
        return singular ? models[0] : models;
    },

    get: function (query, indexName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[18708,18900],"range":[18680,18900],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":48,"label":"ampersand"}');
        if (!query) return;
        var index = this._indexes[indexName || this.mainIndex];
        return index[query] || index[query[this.mainIndex]] || this._indexes.cid[query.cid];
    },

    // Get the model at the given index.
    at: function (index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[18969,19011],"range":[18952,19011],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":49,"label":"ampersand"}');
        return this.models[index];
    },

    remove: function (models, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[19053,19915],"range":[19026,19915],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":50,"label":"ampersand"}');
        var singular = !isArray(models);
        var i, length, model, index;

        models = singular ? [models] : slice.call(models);
        options || (options = {});
        for (i = 0, length = models.length; i < length; i++) {
            model = models[i] = this.get(models[i]);
            if (!model) continue;
            this._deIndex(model);
            index = this.models.indexOf(model);
            this.models.splice(index, 1);
            if (!options.silent) {
                options.index = index;
                if (model.trigger) {
                    model.trigger('remove', model, this, options);
                } else {
                    this.trigger('remove', model, this, options);
                }
            }
            this._removeReference(model, options);
        }
        return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function (models, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[20239,20650],"range":[20212,20650],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":51,"label":"ampersand"}');
        options || (options = {});
        for (var i = 0, length = this.models.length; i < length; i++) {
            this._removeReference(this.models[i], options);
        }
        options.previousModels = this.models;
        this._reset();
        models = this.add(models, extend({silent: true}, options));
        if (!options.silent) this.trigger('reset', this, options);
        return models;
    },

    sort: function (options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[20682,21943],"range":[20663,21943],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":54,"label":"ampersand"}');
        var self = this;
        if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
        options || (options = {});

        if (typeof this.comparator === 'string') {
            this.models.sort(function (left, right) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[20937,21393],"range":[20914,21393],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":52,"label":"ampersand"}');
                if (left.get) {
                    left = left.get(self.comparator);
                    right = right.get(self.comparator);
                } else {
                    left = left[self.comparator];
                    right = right[self.comparator];
                }
                if (left > right || left === void 0) return 1;
                if (left < right || right === void 0) return -1;
                return 0;
            });
        } else if (this.comparator.length === 1) {
            this.models.sort(function (left, right) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[21499,21762],"range":[21476,21762],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":53,"label":"ampersand"}');
                left = self.comparator(left);
                right = self.comparator(right);
                if (left > right || left === void 0) return 1;
                if (left < right || right === void 0) return -1;
                return 0;
            });
        } else {
            this.models.sort(this.comparator.bind(this));
        }

        if (!options.silent) this.trigger('sort', this, options);
        return this;
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[22086,22375],"range":[22074,22375],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":55,"label":"ampersand"}');
        var list = this.indexes || [];
        var i = 0;
        list.push(this.mainIndex);
        list.push('cid');
        var l = list.length;
        this.models = [];
        this._indexes = {};
        for (; i < l; i++) {
            this._indexes[list[i]] = {};
        }
    },

    _prepareModel: function (attrs, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[22423,22984],"range":[22397,22984],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":56,"label":"ampersand"}');
        // if we haven't defined a constructor, skip this
        if (!this.model) return attrs;

        if (this.isModel(attrs)) {
            if (!attrs.collection) attrs.collection = this;
            return attrs;
        } else {
            options = options ? extend({}, options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model.validationError) return model;
            this.trigger('invalid', this, model.validationError, options);
            return false;
        }
    },

    _deIndex: function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[23018,23164],"range":[23001,23164],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":57,"label":"ampersand"}');
        for (var name in this._indexes) {
            delete this._indexes[name][model[name] || (model.get && model.get(name))];
        }
    },

    _index: function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[23196,23394],"range":[23179,23394],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":58,"label":"ampersand"}');
        for (var name in this._indexes) {
            var indexVal = model[name] || (model.get && model.get(name));
            if (indexVal) this._indexes[name][indexVal] = model;
        }
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function (model, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[23507,23663],"range":[23481,23663],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":59,"label":"ampersand"}');
        this._index(model);
        if (!model.collection) model.collection = this;
        if (model.on) model.on('all', this._onModelEvent, this);
    },

        // Internal method to sever a model's ties to a collection.
    _removeReference: function (model, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[23782,23950],"range":[23756,23950],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":60,"label":"ampersand"}');
        if (this === model.collection) delete model.collection;
        this._deIndex(model);
        if (model.off) model.off('all', this._onModelEvent, this);
    },

    _onModelEvent: function (event, model, collection, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[24017,24352],"range":[23972,24352],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":61,"label":"ampersand"}');
        if ((event === 'add' || event === 'remove') && collection !== this) return;
        if (event === 'destroy') this.remove(model, options);
        if (model && event === 'change:' + this.mainIndex) {
            this._deIndex(model);
            this._index(model);
        }
        this.trigger.apply(this, arguments);
    }
});

Object.defineProperties(Collection.prototype, {
    length: {
        get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[24445,24495],"range":[24433,24495],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":62,"label":"ampersand"}');
            return this.models.length;
        }
    },
    isCollection: {
        value: true
    }
});

var arrayMethods = [
    'indexOf',
    'lastIndexOf',
    'every',
    'some',
    'forEach',
    'map',
    'filter',
    'reduce',
    'reduceRight'
];

arrayMethods.forEach(function (method) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[24749,24874],"range":[24731,24874],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":64,"label":"ampersand"}');
    Collection.prototype[method] = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[24798,24871],"range":[24786,24871],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":63,"label":"ampersand"}');
        return this.models[method].apply(this.models, arguments);
    };
});

// alias each/forEach for maximum compatibility
Collection.prototype.each = Collection.prototype.forEach;

Collection.extend = classExtend;

module.exports = Collection;

},{"ampersand-class-extend":10,"backbone-events-standalone":12,"extend-object":13,"is-array":14}],10:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[25183,26763],"range":[25151,26763],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":69,"label":"ampersand"}');
var objectExtend = require('extend-object');


/// Following code is largely pasted from Backbone.js

// Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
var extend = function(protoProps) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[25508,26703],"range":[25487,26703],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":68,"label":"ampersand"}');
    var parent = this;
    var child;
    var args = [].slice.call(arguments);

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
        child = protoProps.constructor;
    } else {
        child = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[25947,26008],"range":[25935,26008],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":66,"label":"ampersand"}');
            return parent.apply(this, arguments);
        };
    }

    // Add static properties to the constructor function from parent
    objectExtend(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[26263,26292],"range":[26253,26292],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":67,"label":"ampersand"}'); this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();

    // Mix in all prototype properties to the subclass if supplied.
    if (protoProps) {
        args.unshift(child.prototype);
        objectExtend.apply(null, args);
    }

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
};

// Expose the extend function
module.exports = extend;

},{"extend-object":13}],11:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[26822,36033],"range":[26790,36033],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":90,"label":"ampersand"}');
/**
 * Standalone extraction of Backbone.Events, no external dependency required.
 * Degrades nicely when Backone/underscore are already available in the current
 * global context.
 *
 * Note that docs suggest to use underscore's `_.extend()` method to add Events
 * support to some given object. A `mixin()` method has been added to the Events
 * prototype to avoid using underscore for that sole purpose:
 *
 *     var myEventEmitter = BackboneEvents.mixin({});
 *
 * Or for a function constructor:
 *
 *     function MyConstructor(){}
 *     MyConstructor.prototype.foo = function(){}
 *     BackboneEvents.mixin(MyConstructor.prototype);
 *
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * (c) 2013 Nicolas Perriault
 */
/* global exports:true, define, module */
(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[27610,36022],"range":[27599,36022],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":89,"label":"ampersand"}');
  var root = this,
      breaker = {},
      nativeForEach = Array.prototype.forEach,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      slice = Array.prototype.slice,
      idCounter = 0;

  // Returns a partial implementation matching the minimal API subset required
  // by Backbone.Events
  function miniscore() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[27939,29046],"range":[27918,29046],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":75,"label":"ampersand"}');
    return {
      keys: Object.keys,

      uniqueId: function(prefix) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[28013,28099],"range":[27996,28099],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":70,"label":"ampersand"}');
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
      },

      has: function(obj, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[28132,28187],"range":[28113,28187],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":71,"label":"ampersand"}');
        return hasOwnProperty.call(obj, key);
      },

      each: function(obj, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[28235,28780],"range":[28202,28780],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":72,"label":"ampersand"}');
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
          obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
          for (var i = 0, l = obj.length; i < l; i++) {
            if (iterator.call(context, obj[i], i, obj) === breaker) return;
          }
        } else {
          for (var key in obj) {
            if (this.has(obj, key)) {
              if (iterator.call(context, obj[key], key, obj) === breaker) return;
            }
          }
        }
      },

      once: function(func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[28810,29035],"range":[28795,29035],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":74,"label":"ampersand"}');
        var ran = false, memo;
        return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[28869,29026],"range":[28858,29026],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":73,"label":"ampersand"}');
          if (ran) return memo;
          ran = true;
          memo = func.apply(this, arguments);
          func = null;
          return memo;
        };
      }
    };
  }

  var _ = miniscore(), Events;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[29715,30020],"range":[29681,30020],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":76,"label":"ampersand"}');
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[30197,30510],"range":[30163,30510],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":78,"label":"ampersand"}');
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[30346,30426],"range":[30335,30426],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":77,"label":"ampersand"}');
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[30801,31713],"range":[30767,31713],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":79,"label":"ampersand"}');
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = {};
        return this;
      }

      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[32041,32396],"range":[32026,32396],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":80,"label":"ampersand"}');
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[32575,32978],"range":[32545,32978],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":81,"label":"ampersand"}');
      var listeners = this._listeners;
      if (!listeners) return this;
      var deleteListener = !name && !callback;
      if (typeof name === 'object') callback = this;
      if (obj) (listeners = {})[obj._listenerId] = obj;
      for (var id in listeners) {
        listeners[id].off(name, callback, this);
        if (deleteListener) delete this._listeners[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[33301,33812],"range":[33267,33812],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":82,"label":"ampersand"}');
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[34050,34583],"range":[34027,34583],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":83,"label":"ampersand"}');
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[34875,35224],"range":[34842,35224],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":85,"label":"ampersand"}');
    Events[method] = function(obj, name, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[34928,35219],"range":[34898,35219],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":84,"label":"ampersand"}');
      var listeners = this._listeners || (this._listeners = {});
      var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
      listeners[id] = obj;
      if (typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Mixin utility
  Events.mixin = function(proto) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[35382,35622],"range":[35366,35622],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":87,"label":"ampersand"}');
    var exports = ['on', 'once', 'off', 'trigger', 'stopListening', 'listenTo',
                   'listenToOnce', 'bind', 'unbind'];
    _.each(exports, function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[35553,35592],"range":[35538,35592],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":86,"label":"ampersand"}');
      proto[name] = this[name];
    }, this);
    return proto;
  };

  // Export Events as BackboneEvents depending on current context
  if (typeof define === "function") {
    define(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[35751,35779],"range":[35740,35779],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":88,"label":"ampersand"}');
      return Events;
    });
  } else if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Events;
    }
    exports.BackboneEvents = Events;
  } else {
    root.BackboneEvents = Events;
  }
})(this);

},{}],12:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[36074,36136],"range":[36042,36136],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":91,"label":"ampersand"}');
module.exports = require('./backbone-events-standalone');

},{"./backbone-events-standalone":11}],13:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[36210,36523],"range":[36178,36523],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":94,"label":"ampersand"}');
var arr = [];
var each = arr.forEach;
var slice = arr.slice;


module.exports = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[36306,36519],"range":[36292,36519],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":93,"label":"ampersand"}');
    each.call(slice.call(arguments, 1), function(source) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[36365,36499],"range":[36348,36499],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":92,"label":"ampersand"}');
        if (source) {
            for (var prop in source) {
                obj[prop] = source[prop];
            }
        }
    });
    return obj;
};

},{}],14:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[36564,37038],"range":[36532,37038],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":96,"label":"ampersand"}');

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[36977,37034],"range":[36962,37034],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":95,"label":"ampersand"}');
  return !! val && '[object Array]' == str.call(val);
};

},{}],15:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[37079,46109],"range":[37047,46109],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":110,"label":"ampersand"}');
var Events = require('backbone-events-standalone');
var _ = require('underscore');


// Handles cross-browser history management, based on either
// [pushState](http://diveintohtml5.info/history.html) and real URLs, or
// [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
// and URL fragments. If the browser supports neither.
var History = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[37465,37734],"range":[37453,37734],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":97,"label":"ampersand"}');
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
        this.location = window.location;
        this.history = window.history;
    }
};

// Cached regex for stripping a leading hash/slash and trailing space.
var routeStripper = /^[#\/]|\s+$/g;

// Cached regex for stripping leading and trailing slashes.
var rootStripper = /^\/+|\/+$/g;

// Cached regex for stripping urls of hash.
var pathStripper = /#.*$/;

// Has the history handling already been started?
History.started = false;

// Set up all inheritable **Backbone.History** properties and methods.
_.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[38372,38507],"range":[38360,38507],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":98,"label":"ampersand"}');
        var path = this.location.pathname.replace(/[^\/]$/, '$&/');
        return path === this.root && !this.location.search;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function (window) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[38681,38794],"range":[38663,38794],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":99,"label":"ampersand"}');
        var match = (window || this).location.href.match(/#(.*)$/);
        return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[38883,39105],"range":[38871,39105],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":100,"label":"ampersand"}');
        var path = decodeURI(this.location.pathname + this.location.search);
        var root = this.root.slice(0, -1);
        if (!path.indexOf(root)) path = path.slice(root.length);
        return path.slice(1);
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function (fragment) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[39221,39507],"range":[39201,39507],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":101,"label":"ampersand"}');
        if (fragment == null) {
            if (this._hasPushState || !this._wantsHashChange) {
                fragment = this.getPath();
            } else {
                fragment = this.getHash();
            }
        }
        return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function (options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[39672,42098],"range":[39653,42098],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":102,"label":"ampersand"}');
        if (History.started) throw new Error("Backbone.history has already been started");
        History.started = true;

        // Figure out the initial configuration.
        // Is pushState desired ... is it available?
        this.options          = _.extend({root: '/'}, this.options, options);
        this.root             = this.options.root;
        this._wantsHashChange = this.options.hashChange !== false;
        this._hasHashChange   = 'onhashchange' in window;
        this._wantsPushState  = !!this.options.pushState;
        this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
        this.fragment         = this.getFragment();

        // Add a cross-platform `addEventListener` shim for older browsers.
        var addEventListener = window.addEventListener;

        // Normalize root to always include a leading and trailing slash.
        this.root = ('/' + this.root + '/').replace(rootStripper, '/');

        // Depending on whether we're using pushState or hashes, and whether
        // 'onhashchange' is supported, determine how we check the URL state.
        if (this._hasPushState) {
            addEventListener('popstate', this.checkUrl, false);
        } else if (this._wantsHashChange && this._hasHashChange) {
            addEventListener('hashchange', this.checkUrl, false);
        } else if (this._wantsHashChange) {
            this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
        }

        // Transition from hashChange to pushState or vice versa if both are
        // requested.
        if (this._wantsHashChange && this._wantsPushState) {

            // If we've started off with a route from a `pushState`-enabled
            // browser, but we're currently in a browser that doesn't support it...
            if (!this._hasPushState && !this.atRoot()) {
                this.location.replace(this.root + '#' + this.getPath());
                // Return immediately as browser will do redirect to new url
                return true;

            // Or if we've started out with a hash-based route, but we're currently
            // in a browser where it could be `pushState`-based instead...
            } else if (this._hasPushState && this.atRoot()) {
                this.navigate(this.getHash(), {replace: true});
            }
        }

        if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[42256,42874],"range":[42244,42874],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":103,"label":"ampersand"}');
        // Add a cross-platform `removeEventListener` shim for older browsers.
        var removeEventListener = window.removeEventListener;

        // Remove window listeners.
        if (this._hasPushState) {
            removeEventListener('popstate', this.checkUrl, false);
        } else if (this._wantsHashChange && this._hasHashChange) {
            removeEventListener('hashchange', this.checkUrl, false);
        }

        // Some environments will throw when clearing an undefined interval.
        if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
        History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function (route, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[43030,43104],"range":[43003,43104],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":104,"label":"ampersand"}');
        this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`.
    checkUrl: function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[43229,43355],"range":[43216,43355],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":105,"label":"ampersand"}');
        var current = this.getFragment();
        if (current === this.fragment) return false;
        this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function (fragment) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[43564,43836],"range":[43544,43836],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":107,"label":"ampersand"}');
        fragment = this.fragment = this.getFragment(fragment);
        return this.handlers.some(function (handler) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[43682,43828],"range":[43663,43828],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":106,"label":"ampersand"}');
            if (handler.route.test(fragment)) {
                handler.callback(fragment);
                return true;
            }
        });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function (fragment, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[44319,45592],"range":[44290,45592],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":108,"label":"ampersand"}');
        if (!History.started) return false;
        if (!options || options === true) options = {trigger: !!options};

        var url = this.root + (fragment = this.getFragment(fragment || ''));

        // Strip the hash and decode for matching.
        fragment = decodeURI(fragment.replace(pathStripper, ''));

        if (this.fragment === fragment) return;
        this.fragment = fragment;

        // Don't include a trailing slash on the root.
        if (fragment === '' && url !== '/') url = url.slice(0, -1);

        // If pushState is available, we use it to set the fragment as a real URL.
        if (this._hasPushState) {
            this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

            // If hash changes haven't been explicitly disabled, update the hash
            // fragment to store history.
        } else if (this._wantsHashChange) {
            this._updateHash(this.location, fragment, options.replace);
            // If you've told us that you explicitly don't want fallback hashchange-
            // based history, then `navigate` becomes a page refresh.
        } else {
            return this.location.assign(url);
        }
        if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function (location, fragment, replace) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[45771,46068],"range":[45732,46068],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":109,"label":"ampersand"}');
        if (replace) {
            var href = location.href.replace(/(javascript:|#).*$/, '');
            location.replace(href + '#' + fragment);
        } else {
            // Some browsers require that `hash` contains a leading #.
            location.hash = '#' + fragment;
        }
    }

});

module.exports = new History();

},{"backbone-events-standalone":20,"underscore":21}],16:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[46197,50667],"range":[46165,50667],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":123,"label":"ampersand"}');
;window.ampersand = window.ampersand || {};window.ampersand["ampersand-router"] = window.ampersand["ampersand-router"] || [];window.ampersand["ampersand-router"].push("1.0.6");
var classExtend = require('ampersand-class-extend');
var Events = require('backbone-events-standalone');
var ampHistory = require('./ampersand-history');
var _ = require('underscore');


// Routers map faux-URLs to actions, and fire events when routes are
// matched. Creating a new one sets its `routes` hash, if not set statically.
var Router = module.exports = function (options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[46759,46965],"range":[46740,46965],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":111,"label":"ampersand"}');
    options || (options = {});
    this.history = options.history || ampHistory;
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
};

// Cached regular expressions for matching named param parts and splatted
// parts of route strings.
var optionalParam = /\((.*?)\)/g;
var namedParam    = /(\(\?)?:\w+/g;
var splatParam    = /\*\w+/g;
var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

// Set up all inheritable **Backbone.Router** properties and methods.
_.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47460,47462],"range":[47448,47462],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":112,"label":"ampersand"}');},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function (query, num) {
    //       ...
    //     });
    //
    route: function (route, name, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47704,48384],"range":[47671,48384],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":114,"label":"ampersand"}');
        if (!_.isRegExp(route)) route = this._routeToRegExp(route);
        if (_.isFunction(name)) {
            callback = name;
            name = '';
        }
        if (!callback) callback = this[name];
        var router = this;
        this.history.route(route, function (fragment) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47997,48355],"range":[47977,48355],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":113,"label":"ampersand"}');
            var args = router._extractParameters(route, fragment);
            if (router.execute(callback, args, name) !== false) {
                router.trigger.apply(router, ['route:' + name].concat(args));
                router.trigger('route', name, args);
                router.history.trigger('route', router, name, args);
            }
        });
        return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function (callback, args, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[48573,48630],"range":[48541,48630],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":115,"label":"ampersand"}');
        if (callback) callback.apply(this, args);
    },

    // Simple proxy to `ampHistory` to save a fragment into the history.
    navigate: function (fragment, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[48749,48827],"range":[48720,48827],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":116,"label":"ampersand"}');
        this.history.navigate(fragment, options);
        return this;
    },

    // Helper for doing `internal` redirects without adding to history
    // and thereby breaking backbutton functionality.
    redirectTo: function (newUrl) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[48989,49059],"range":[48971,49059],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":117,"label":"ampersand"}');
        this.navigate(newUrl, {replace: true, trigger: true});
    },

    // Bind all defined routes to `history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[49295,49548],"range":[49283,49548],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":118,"label":"ampersand"}');
        if (!this.routes) return;
        this.routes = _.result(this, 'routes');
        var route, routes = Object.keys(this.routes);
        while ((route = routes.pop()) != null) {
            this.route(route, this.routes[route]);
        }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function (route) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[49709,50070],"range":[49692,50070],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":120,"label":"ampersand"}');
        route = route
            .replace(escapeRegExp, '\\$&')
            .replace(optionalParam, '(?:$1)?')
            .replace(namedParam, function (match, optional) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[49883,49952],"range":[49856,49952],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":119,"label":"ampersand"}');
                return optional ? match : '([^/?]+)';
            })
            .replace(splatParam, '([^?]*?)');
        return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function (route, fragment) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[50339,50629],"range":[50312,50629],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":122,"label":"ampersand"}');
        var params = route.exec(fragment).slice(1);
        return params.map(function (param, i) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[50439,50621],"range":[50419,50621],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":121,"label":"ampersand"}');
            // Don't decode the search params.
            if (i === params.length - 1) return param || null;
            return param ? decodeURIComponent(param) : null;
        });
    }

});

Router.extend = classExtend;

},{"./ampersand-history":15,"ampersand-class-extend":17,"backbone-events-standalone":20,"underscore":21}],17:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[50808,50838],"range":[50776,50838],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":124,"label":"ampersand"}');
module.exports=require(10)
},{"extend-object":18}],18:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[50897,50927],"range":[50865,50927],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":125,"label":"ampersand"}');
module.exports=require(13)
},{}],19:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[50968,50998],"range":[50936,50998],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":126,"label":"ampersand"}');
module.exports=require(11)
},{}],20:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[51039,51069],"range":[51007,51069],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":127,"label":"ampersand"}');
module.exports=require(12)
},{"./backbone-events-standalone":19}],21:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[51143,96634],"range":[51111,96634],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":285,"label":"ampersand"}');
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[51373,96618],"range":[51362,96618],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":284,"label":"ampersand"}');

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[52883,53000],"range":[52869,53000],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":128,"label":"ampersand"}');
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[53806,54347],"range":[53773,54347],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":129,"label":"ampersand"}');
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[54535,54815],"range":[54502,54815],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":131,"label":"ampersand"}');
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[54718,54789],"range":[54689,54789],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":130,"label":"ampersand"}');
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[55117,55663],"range":[55078,55663],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":133,"label":"ampersand"}');
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[55425,55588],"range":[55396,55588],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":132,"label":"ampersand"}');
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[55874,56626],"range":[55835,56626],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":135,"label":"ampersand"}');
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56330,56551],"range":[56301,56551],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":134,"label":"ampersand"}');
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56761,56963],"range":[56727,56963],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":137,"label":"ampersand"}');
    var result;
    any(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56821,56938],"range":[56792,56938],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":136,"label":"ampersand"}');
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57170,57475],"range":[57136,57475],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":139,"label":"ampersand"}');
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57366,57449],"range":[57337,57449],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":138,"label":"ampersand"}');
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57584,57721],"range":[57550,57721],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":141,"label":"ampersand"}');
    return _.filter(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57640,57706],"range":[57611,57706],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":140,"label":"ampersand"}');
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57930,58292],"range":[57896,58292],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":143,"label":"ampersand"}');
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[58165,58265],"range":[58136,58265],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":142,"label":"ampersand"}');
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[58521,58879],"range":[58487,58879],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":145,"label":"ampersand"}');
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[58753,58852],"range":[58724,58852],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":144,"label":"ampersand"}');
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59034,59241],"range":[59012,59241],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":147,"label":"ampersand"}');
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59197,59235],"range":[59181,59235],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":146,"label":"ampersand"}');
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59348,59548],"range":[59326,59548],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":149,"label":"ampersand"}');
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59468,59542],"range":[59452,59542],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":148,"label":"ampersand"}');
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59659,59704],"range":[59640,59704],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":150,"label":"ampersand"}');
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59866,59915],"range":[59845,59915],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":151,"label":"ampersand"}');
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[60081,60128],"range":[60060,60128],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":152,"label":"ampersand"}');
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[60381,60827],"range":[60348,60827],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":154,"label":"ampersand"}');
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[60609,60802],"range":[60580,60802],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":153,"label":"ampersand"}');
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[60937,61381],"range":[60904,61381],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":156,"label":"ampersand"}');
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[61163,61356],"range":[61134,61356],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":155,"label":"ampersand"}');
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[61547,61775],"range":[61533,61775],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":158,"label":"ampersand"}');
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[61635,61748],"range":[61619,61748],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":157,"label":"ampersand"}');
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[61996,62192],"range":[61972,62192],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":159,"label":"ampersand"}');
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[62290,62410],"range":[62274,62410],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":160,"label":"ampersand"}');
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[62529,63037],"range":[62496,63037],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":163,"label":"ampersand"}');
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[62631,62767],"range":[62602,62767],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":161,"label":"ampersand"}');
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[62796,63021],"range":[62774,63021],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":162,"label":"ampersand"}');
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63141,63436],"range":[63122,63436],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":166,"label":"ampersand"}');
    return function(obj, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63187,63431],"range":[63154,63431],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":165,"label":"ampersand"}');
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63294,63402],"range":[63271,63402],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":164,"label":"ampersand"}');
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63627,63706],"range":[63598,63706],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":167,"label":"ampersand"}');
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63896,63926],"range":[63867,63926],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":168,"label":"ampersand"}');
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[64138,64201],"range":[64116,64201],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":169,"label":"ampersand"}');
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[64415,64706],"range":[64375,64706],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":170,"label":"ampersand"}');
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[64799,64970],"range":[64785,64970],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":171,"label":"ampersand"}');
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[65047,65158],"range":[65033,65158],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":172,"label":"ampersand"}');
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[65451,65603],"range":[65425,65603],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":173,"label":"ampersand"}');
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[65890,65975],"range":[65864,65975],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":174,"label":"ampersand"}');
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[66169,66335],"range":[66143,66335],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":175,"label":"ampersand"}');
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[66652,66717],"range":[66626,66717],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":176,"label":"ampersand"}');
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[66796,66841],"range":[66780,66841],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":177,"label":"ampersand"}');
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[66957,67303],"range":[66924,67303],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":179,"label":"ampersand"}');
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[67087,67278],"range":[67071,67278],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":178,"label":"ampersand"}');
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[67424,67469],"range":[67399,67469],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":180,"label":"ampersand"}');
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[67583,67646],"range":[67567,67646],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":181,"label":"ampersand"}');
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[67843,67994],"range":[67816,67994],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":183,"label":"ampersand"}');
    var pass = [], fail = [];
    each(array, function(elem) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[67906,67963],"range":[67891,67963],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":182,"label":"ampersand"}');
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[68234,68703],"range":[68189,68703],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":185,"label":"ampersand"}');
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[68505,68677],"range":[68482,68677],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":184,"label":"ampersand"}');
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[68837,68889],"range":[68826,68889],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":186,"label":"ampersand"}');
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69020,69221],"range":[69004,69221],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":189,"label":"ampersand"}');
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69113,69215],"range":[69098,69215],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":188,"label":"ampersand"}');
      return _.every(rest, function(other) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69158,69207],"range":[69142,69207],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":187,"label":"ampersand"}');
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69398,69551],"range":[69382,69551],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":191,"label":"ampersand"}');
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){instrumentation_log('{"type":"FunctionExpression","bodyRange":[69509,69545],"range":[69494,69545],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":190,"label":"ampersand"}'); return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69678,69896],"range":[69667,69896],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":192,"label":"ampersand"}');
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[70126,70392],"range":[70103,70392],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":193,"label":"ampersand"}');
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[70851,71345],"range":[70819,71345],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":194,"label":"ampersand"}');
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71466,71807],"range":[71438,71807],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":195,"label":"ampersand"}');
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72062,72396],"range":[72034,72396],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":196,"label":"ampersand"}');
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[72536,72538],"range":[72526,72538],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":197,"label":"ampersand"}');};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72749,73345],"range":[72725,73345],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":199,"label":"ampersand"}');
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72994,73340],"range":[72983,73340],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":198,"label":"ampersand"}');
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[73614,74000],"range":[73599,74000],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":201,"label":"ampersand"}');
    var boundArgs = slice.call(arguments, 1);
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[73684,73995],"range":[73673,73995],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":200,"label":"ampersand"}');
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74227,74440],"range":[74213,74440],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":203,"label":"ampersand"}');
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74385,74418],"range":[74373,74418],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":202,"label":"ampersand"}'); obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74539,74765],"range":[74516,74765],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":205,"label":"ampersand"}');
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74619,74760],"range":[74608,74760],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":204,"label":"ampersand"}');
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74914,75035],"range":[74893,75035],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":207,"label":"ampersand"}');
    var args = slice.call(arguments, 2);
    return setTimeout(function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[74989,75023],"range":[74979,75023],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":206,"label":"ampersand"}'); return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[75157,75235],"range":[75142,75235],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":208,"label":"ampersand"}');
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[75670,76503],"range":[75640,76503],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":211,"label":"ampersand"}');
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[75807,75965],"range":[75796,75965],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":209,"label":"ampersand"}');
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[75989,76498],"range":[75978,76498],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":210,"label":"ampersand"}');
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[76830,77545],"range":[76798,77545],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":214,"label":"ampersand"}');
    var timeout, args, context, timestamp, result;

    var later = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[76911,77193],"range":[76900,77193],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":212,"label":"ampersand"}');
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[77218,77540],"range":[77207,77540],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":213,"label":"ampersand"}');
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[77708,77897],"range":[77693,77897],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":216,"label":"ampersand"}');
    var ran = false, memo;
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[77759,77892],"range":[77748,77892],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":215,"label":"ampersand"}');
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78124,78166],"range":[78100,78166],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":217,"label":"ampersand"}');
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78333,78551],"range":[78322,78551],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":219,"label":"ampersand"}');
    var funcs = arguments;
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78384,78546],"range":[78373,78546],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":218,"label":"ampersand"}');
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78667,78780],"range":[78645,78780],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":221,"label":"ampersand"}');
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78691,78775],"range":[78680,78775],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":220,"label":"ampersand"}');
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78962,79146],"range":[78948,79146],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":222,"label":"ampersand"}');
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[79228,79423],"range":[79214,79423],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":223,"label":"ampersand"}');
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[79512,79715],"range":[79498,79715],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":224,"label":"ampersand"}');
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[79824,80002],"range":[79810,80002],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":225,"label":"ampersand"}');
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[80146,80280],"range":[80132,80280],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":226,"label":"ampersand"}');
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[80385,80577],"range":[80371,80577],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":228,"label":"ampersand"}');
    each(slice.call(arguments, 1), function(source) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[80439,80555],"range":[80422,80555],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":227,"label":"ampersand"}');
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[80682,80873],"range":[80668,80873],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":230,"label":"ampersand"}');
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[80799,80850],"range":[80785,80850],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":229,"label":"ampersand"}');
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[80971,81168],"range":[80957,81168],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":231,"label":"ampersand"}');
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[81253,81471],"range":[81239,81471],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":233,"label":"ampersand"}');
    each(slice.call(arguments, 1), function(source) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[81307,81449],"range":[81290,81449],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":232,"label":"ampersand"}');
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[81555,81659],"range":[81541,81659],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":234,"label":"ampersand"}');
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[81911,81954],"range":[81884,81954],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":235,"label":"ampersand"}');
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[82058,85850],"range":[82027,85850],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":236,"label":"ampersand"}');
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[85948,85982],"range":[85933,85982],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":237,"label":"ampersand"}');
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86118,86302],"range":[86104,86302],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":238,"label":"ampersand"}');
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86372,86419],"range":[86358,86419],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":239,"label":"ampersand"}');
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86546,86602],"range":[86532,86602],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":240,"label":"ampersand"}');
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86670,86707],"range":[86656,86707],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":241,"label":"ampersand"}');
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86890,86999],"range":[86875,86999],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":243,"label":"ampersand"}');
    _['is' + name] = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86927,86994],"range":[86913,86994],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":242,"label":"ampersand"}');
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87198,87251],"range":[87184,87251],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":244,"label":"ampersand"}');
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87371,87418],"range":[87357,87418],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":245,"label":"ampersand"}');
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87494,87552],"range":[87480,87552],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":246,"label":"ampersand"}');
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87666,87714],"range":[87652,87714],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":247,"label":"ampersand"}');
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87780,87871],"range":[87766,87871],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":248,"label":"ampersand"}');
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87938,87968],"range":[87924,87968],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":249,"label":"ampersand"}');
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88039,88071],"range":[88025,88071],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":250,"label":"ampersand"}');
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88235,88282],"range":[88216,88282],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":251,"label":"ampersand"}');
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88506,88561],"range":[88495,88561],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":252,"label":"ampersand"}');
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88657,88680],"range":[88641,88680],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":253,"label":"ampersand"}');
    return value;
  };

  _.constant = function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88714,88771],"range":[88698,88771],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":255,"label":"ampersand"}');
    return function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88739,88766],"range":[88727,88766],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":254,"label":"ampersand"}');
      return value;
    };
  };

  _.property = function(key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88803,88865],"range":[88789,88865],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":257,"label":"ampersand"}');
    return function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88830,88860],"range":[88816,88860],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":256,"label":"ampersand"}');
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[88992,89226],"range":[88976,89226],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":259,"label":"ampersand"}');
    return function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[89019,89222],"range":[89005,89222],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":258,"label":"ampersand"}');
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[89305,89437],"range":[89274,89437],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":260,"label":"ampersand"}');
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[89534,89662],"range":[89515,89662],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":261,"label":"ampersand"}');
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[89771,89803],"range":[89760,89803],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":262,"label":"ampersand"}'); return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90430,90641],"range":[90413,90641],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":265,"label":"ampersand"}');
    _[method] = function(string) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90465,90636],"range":[90448,90636],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":264,"label":"ampersand"}');
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90578,90628],"range":[90562,90628],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":263,"label":"ampersand"}');
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90813,90952],"range":[90786,90952],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":266,"label":"ampersand"}');
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91042,91313],"range":[91028,91313],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":269,"label":"ampersand"}');
    each(_.functions(obj), function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91086,91307],"range":[91071,91307],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":268,"label":"ampersand"}');
      var func = _[name] = obj[name];
      _.prototype[name] = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91163,91300],"range":[91152,91300],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":267,"label":"ampersand"}');
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91481,91555],"range":[91464,91555],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":270,"label":"ampersand"}');
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

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
  _.template = function(text, data, settings) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[92606,94421],"range":[92575,94421],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":274,"label":"ampersand"}');
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
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[93157,93632],"range":[93102,93632],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":272,"label":"ampersand"}');
      source += text.slice(index, offset)
        .replace(escaper, function(match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[93243,93276],"range":[93227,93276],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":271,"label":"ampersand"}'); return '\\' + escapes[match]; });

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
    var template = function(data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[94174,94222],"range":[94159,94222],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":273,"label":"ampersand"}');
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[94515,94547],"range":[94501,94547],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":275,"label":"ampersand"}');
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[94884,94936],"range":[94870,94936],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":276,"label":"ampersand"}');
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95159,95431],"range":[95144,95431],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":278,"label":"ampersand"}');
    var method = ArrayProto[name];
    _.prototype[name] = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95231,95426],"range":[95220,95426],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":277,"label":"ampersand"}');
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95540,95696],"range":[95525,95696],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":280,"label":"ampersand"}');
    var method = ArrayProto[name];
    _.prototype[name] = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95612,95691],"range":[95601,95691],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":279,"label":"ampersand"}');
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95800,95852],"range":[95789,95852],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":281,"label":"ampersand"}');
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95939,95974],"range":[95928,95974],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":282,"label":"ampersand"}');
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[96587,96610],"range":[96576,96610],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":283,"label":"ampersand"}');
      return _;
    });
  }
}).call(this);

},{}],22:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[96675,123320],"range":[96643,123320],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":360,"label":"ampersand"}');
;window.ampersand = window.ampersand || {};window.ampersand["ampersand-state"] = window.ampersand["ampersand-state"] || [];window.ampersand["ampersand-state"].push("4.3.14");
var _ = require('underscore');
var BBEvents = require('backbone-events-standalone');
var KeyTree = require('key-tree-store');
var arrayNext = require('array-next');
var changeRE = /^change:/;

function Base(attrs, options) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[97075,97765],"range":[97045,97765],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":286,"label":"ampersand"}');
    options || (options = {});
    this.cid || (this.cid = _.uniqueId('state'));
    this._events = {};
    this._values = {};
    this._definition = Object.create(this._definition);
    if (options.parse) attrs = this.parse(attrs, options);
    this.parent = options.parent;
    this.collection = options.collection;
    this._keyTree = new KeyTree();
    this._initCollections();
    this._initChildren();
    this._cache = {};
    this._previousAttributes = {};
    if (attrs) this.set(attrs, _.extend({silent: true, initial: true}, options));
    this._changed = {};
    if (this._derived) this._initDerived();
    if (options.init !== false) this.initialize.apply(this, arguments);
}


_.extend(Base.prototype, BBEvents, {
    // can be allow, ignore, reject
    extraProperties: 'ignore',

    idAttribute: 'id',

    namespaceAttribute: 'namespace',

    typeAttribute: 'modelType',

    // Stubbed out to be overwritten
    initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98033,98061],"range":[98021,98061],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":287,"label":"ampersand"}');
        return this;
    },

    // Get ID of model per configuration.
    // Should *always* be how ID is determined by other code.
    getId: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98191,98237],"range":[98179,98237],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":288,"label":"ampersand"}');
        return this[this.idAttribute];
    },

    // Get namespace of model per configuration.
    // Should *always* be how namespace is determined by other code.
    getNamespace: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98388,98441],"range":[98376,98441],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":289,"label":"ampersand"}');
        return this[this.namespaceAttribute];
    },

    // Get type of model per configuration.
    // Should *always* be how type is determined by other code.
    getType: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98577,98625],"range":[98565,98625],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":290,"label":"ampersand"}');
        return this[this.typeAttribute];
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98732,98776],"range":[98720,98776],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":291,"label":"ampersand"}');
        return this.getId() == null;
    },

    // get HTML-escaped value of attribute
    escape: function (attr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98850,98898],"range":[98834,98898],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":292,"label":"ampersand"}');
        return _.escape(this.get(attr));
    },

    // Check if the model is currently in a valid state.
    isValid: function (options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98990,99077],"range":[98971,99077],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":293,"label":"ampersand"}');
        return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Parse can be used remap/restructure/rename incoming properties
    // before they are applied to attributes.
    parse: function (resp, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[99232,99260],"range":[99207,99260],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":294,"label":"ampersand"}');
        return resp;
    },

    // Serialize is the inverse of `parse` it lets you massage data
    // on the way out. Before, sending to server, for example.
    serialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[99421,99748],"range":[99409,99748],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":297,"label":"ampersand"}');
        var res = this.getAttributes({props: true}, true);
        _.each(this._children, function (value, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[99535,99592],"range":[99513,99592],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":295,"label":"ampersand"}');
            res[key] = this[key].serialize();
        }, this);
        _.each(this._collections, function (value, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[99657,99714],"range":[99635,99714],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":296,"label":"ampersand"}');
            res[key] = this[key].serialize();
        }, this);
        return res;
    },

    // Main set method used by generated setters/getters and can
    // be used directly if you need to pass options or set multiple
    // properties at once.
    set: function (key, value, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[99951,105289],"range":[99920,105289],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":300,"label":"ampersand"}');
        var self = this;
        var extraProperties = this.extraProperties;
        var triggers = [];
        var changing, changes, newType, newVal, def, cast, err, attr,
            attrs, dataType, silent, unset, currentVal, initial, hasChanged, isEqual;

        // Handle both `"key", value` and `{key: value}` -style arguments.
        if (_.isObject(key) || key === null) {
            attrs = key;
            options = value;
        } else {
            attrs = {};
            attrs[key] = value;
        }

        options = options || {};

        if (!this._validate(attrs, options)) return false;

        // Extract attributes and options.
        unset = options.unset;
        silent = options.silent;
        initial = options.initial;

        changes = [];
        changing = this._changing;
        this._changing = true;

        // if not already changing, store previous
        if (!changing) {
            this._previousAttributes = this.attributes;
            this._changed = {};
        }

        // For each `set` attribute...
        for (attr in attrs) {
            newVal = attrs[attr];
            newType = typeof newVal;
            currentVal = this._values[attr];
            def = this._definition[attr];


            if (!def) {
                // if this is a child model or collection
                if (this._children[attr] || this._collections[attr]) {
                    this[attr].set(newVal, options);
                    continue;
                } else if (extraProperties === 'ignore') {
                    continue;
                } else if (extraProperties === 'reject') {
                    throw new TypeError('No "' + attr + '" property defined on ' + (this.type || 'this') + ' model and extraProperties not set to "ignore" or "allow"');
                } else if (extraProperties === 'allow') {
                    def = this._createPropertyDefinition(attr, 'any');
                }
            }

            isEqual = this._getCompareForType(def.type);
            dataType = this._dataTypes[def.type];

            // check type if we have one
            if (dataType && dataType.set) {
                cast = dataType.set(newVal);
                newVal = cast.val;
                newType = cast.type;
            }

            // If we've defined a test, run it
            if (def.test) {
                err = def.test.call(this, newVal, newType);
                if (err) {
                    throw new TypeError('Property \'' + attr + '\' failed validation with error: ' + err);
                }
            }

            // If we are required but undefined, throw error.
            // If we are null and are not allowing null, throw error
            // If we have a defined type and the new type doesn't match, and we are not null, throw error.

            if (_.isUndefined(newVal) && def.required) {
                throw new TypeError('Required property \'' + attr + '\' must be of type ' + def.type + '. Tried to set ' + newVal);
            }
            if (_.isNull(newVal) && def.required && !def.allowNull) {
                throw new TypeError('Property \'' + attr + '\' must be of type ' + def.type + ' (cannot be null). Tried to set ' + newVal);
            }
            if ((def.type && def.type !== 'any' && def.type !== newType) && !_.isNull(newVal) && !_.isUndefined(newVal)) {
                throw new TypeError('Property \'' + attr + '\' must be of type ' + def.type + '. Tried to set ' + newVal);
            }
            if (def.values && !_.contains(def.values, newVal)) {
                throw new TypeError('Property \'' + attr + '\' must be one of values: ' + def.values.join(', '));
            }

            hasChanged = !isEqual(currentVal, newVal, attr);

            // enforce `setOnce` for properties if set
            if (def.setOnce && currentVal !== undefined && hasChanged) {
                throw new TypeError('Property \'' + key + '\' can only be set once.');
            }

            // keep track of changed attributes
            // and push to changes array
            if (hasChanged) {
                changes.push({prev: currentVal, val: newVal, key: attr});
                self._changed[attr] = newVal;
            } else {
                delete self._changed[attr];
            }
        }

        // actually update our values
        _.each(changes, function (change) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[104367,104606],"range":[104349,104606],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":298,"label":"ampersand"}');
            self._previousAttributes[change.key] = change.prev;
            if (unset) {
                delete self._values[change.key];
            } else {
                self._values[change.key] = change.val;
            }
        });

        if (!silent && changes.length) self._pending = true;
        if (!silent) {
            _.each(changes, function (change) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[104740,104836],"range":[104722,104836],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":299,"label":"ampersand"}');
                self.trigger('change:' + change.key, self, change.val, options);
            });
        }

        // You might be wondering why there's a `while` loop here. Changes can
        // be recursively nested within `"change"` events.
        if (changing) return this;
        if (!silent) {
            while (this._pending) {
                this._pending = false;
                this.trigger('change', this, options);
            }
        }
        this._pending = false;
        this._changing = false;
        return this;
    },

    get: function (attr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[105317,105351],"range":[105301,105351],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":301,"label":"ampersand"}');
        return this[attr];
    },

    // Toggle boolean properties or properties that have a `values`
    // array in its definition.
    toggle: function (property) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[105486,106052],"range":[105466,106052],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":302,"label":"ampersand"}');
        var def = this._definition[property];
        if (def.type === 'boolean') {
            // if it's a bool, just flip it
            this[property] = !this[property];
        } else if (def && def.values) {
            // If it's a property with an array of values
            // skip to the next one looping back if at end.
            this[property] = arrayNext(def.values, this[property]);
        } else {
            throw new TypeError('Can only toggle properties that are type `boolean` or have `values` array.');
        }
        return this;
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[106190,106247],"range":[106178,106247],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":303,"label":"ampersand"}');
        return _.clone(this._previousAttributes);
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function (attr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[106439,106549],"range":[106423,106549],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":304,"label":"ampersand"}');
        if (attr == null) return !_.isEmpty(this._changed);
        return _.has(this._changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function (diff) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107017,107533],"range":[107001,107533],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":305,"label":"ampersand"}');
        if (!diff) return this.hasChanged() ? _.clone(this._changed) : false;
        var val, changed = false;
        var old = this._changing ? this._previousAttributes : this.attributes;
        var def, isEqual;
        for (var attr in diff) {
            def = this._definition[attr];
            isEqual = this._getCompareForType(def && def.type);
            if (isEqual(old[attr], (val = diff[attr]))) continue;
            (changed || (changed = {}))[attr] = val;
        }
        return changed;
    },

    toJSON: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107560,107600],"range":[107548,107600],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":306,"label":"ampersand"}');
        return this.serialize();
    },

    unset: function (attr, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107639,107960],"range":[107614,107960],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":307,"label":"ampersand"}');
        var def = this._definition[attr];
        var type = def.type;
        var val;
        if (def.required) {
            val = _.result(def, 'default');
            return this.set(attr, val, options);
        } else {
            return this.set(attr, val, _.extend({}, options, {unset: true}));
        }
    },

    clear: function (options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107993,108153],"range":[107974,108153],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":309,"label":"ampersand"}');
        var self = this;
        _.each(_.keys(this.attributes), function (key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108075,108124],"range":[108060,108124],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":308,"label":"ampersand"}');
            self.unset(key, options);
        });
        return this;
    },

    previous: function (attr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108186,108328],"range":[108170,108328],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":310,"label":"ampersand"}');
        if (attr == null || !Object.keys(this._previousAttributes).length) return null;
        return this._previousAttributes[attr];
    },

    // Get default values for a certain type
    _getDefaultForType: function (type) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108416,108514],"range":[108400,108514],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":311,"label":"ampersand"}');
        var dataType = this._dataTypes[type];
        return dataType && dataType.default;
    },

    // Determine which comparison algorithm to use for comparing a property
    _getCompareForType: function (type) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108633,108793],"range":[108617,108793],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":312,"label":"ampersand"}');
        var dataType = this._dataTypes[type];
        if (dataType && dataType.compare) return _.bind(dataType.compare, this);
        return _.isEqual;
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function (attrs, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108988,109345],"range":[108962,109345],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":313,"label":"ampersand"}');
        if (!options.validate || !this.validate) return true;
        attrs = _.extend({}, this.attributes, attrs);
        var error = this.validationError = this.validate(attrs, options) || null;
        if (!error) return true;
        this.trigger('invalid', this, error, _.extend(options || {}, {validationError: error}));
        return false;
    },

    _createPropertyDefinition: function (name, desc, isSession) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109412,109489],"range":[109379,109489],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":314,"label":"ampersand"}');
        return createPropertyDefinition(this, name, desc, isSession);
    },

    // just makes friendlier errors when trying to define a new model
    // only used when setting up original property definitions
    _ensureValidType: function (type) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109663,109821],"range":[109647,109821],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":315,"label":"ampersand"}');
        return _.contains(['string', 'number', 'boolean', 'array', 'object', 'date', 'any'].concat(_.keys(this._dataTypes)), type) ? type : undefined;
    },

    getAttributes: function (options, raw) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109867,110609],"range":[109843,110609],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":316,"label":"ampersand"}');
        options || (options = {});
        _.defaults(options, {
            session: false,
            props: false,
            derived: false
        });
        var res = {};
        var val, item, def;
        for (item in this._definition) {
            def = this._definition[item];
            if ((options.session && def.session) || (options.props && !def.session)) {
                val = (raw) ? this._values[item] : this[item];
                if (typeof val === 'undefined') val = _.result(def, 'default');
                if (typeof val !== 'undefined') res[item] = val;
            }
        }
        if (options.derived) {
            for (item in this._derived) res[item] = this[item];
        }
        return res;
    },

    _initDerived: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110642,111695],"range":[110630,111695],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":322,"label":"ampersand"}');
        var self = this;

        _.each(this._derived, function (value, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110723,111435],"range":[110700,111435],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":319,"label":"ampersand"}');
            var def = self._derived[name];
            def.deps = def.depList;

            var update = function (options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110849,111299],"range":[110830,111299],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":317,"label":"ampersand"}');
                options = options || {};

                var newVal = def.fn.call(self);

                if (self._cache[name] !== newVal || !def.cache) {
                    if (def.cache) {
                        self._previousAttributes[name] = self._cache[name];
                    }
                    self._cache[name] = newVal;
                    self.trigger('change:' + name, self, self._cache[name]);
                }
            };

            def.deps.forEach(function (propString) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[111353,111423],"range":[111331,111423],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":318,"label":"ampersand"}');
                self._keyTree.add(propString, update);
            });
        });

        this.on('all', function (eventName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[111483,111681],"range":[111462,111681],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":321,"label":"ampersand"}');
            if (changeRE.test(eventName)) {
                self._keyTree.get(eventName.split(':')[1]).forEach(function (fn) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[111610,111655],"range":[111596,111655],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":320,"label":"ampersand"}');
                    fn();
                });
            }
        }, this);
    },

    _getDerivedProperty: function (name, flushCache) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[111751,112191],"range":[111723,112191],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":323,"label":"ampersand"}');
        // is this a derived property that is cached
        if (this._derived[name].cache) {
            //set if this is the first time, or flushCache is set
            if (flushCache || !this._cache.hasOwnProperty(name)) {
                this._cache[name] = this._derived[name].fn.apply(this);
            }
            return this._cache[name];
        } else {
            return this._derived[name].fn.apply(this);
        }
    },

    _initCollections: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[112228,112421],"range":[112216,112421],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":324,"label":"ampersand"}');
        var coll;
        if (!this._collections) return;
        for (coll in this._collections) {
            this[coll] = new this._collections[coll](null, {parent: this});
        }
    },

    _initChildren: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[112455,112726],"range":[112443,112726],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":325,"label":"ampersand"}');
        var child;
        if (!this._children) return;
        for (child in this._children) {
            this[child] = new this._children[child]({}, {parent: this});
            this.listenTo(this[child], 'all', this._getEventBubblingHandler(child));
        }
    },

    // Returns a bound handler for doing event bubbling while
    // adding a name to the change string.
    _getEventBubblingHandler: function (propertyName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[112888,113213],"range":[112864,113213],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":327,"label":"ampersand"}');
        return _.bind(function (name, model, newValue) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[112945,113199],"range":[112912,113199],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":326,"label":"ampersand"}');
            if (changeRE.test(name)) {
                this.trigger('change:' + propertyName + '.' + name.split(':')[1], model, newValue);
            } else if (name === 'change') {
                this.trigger('change', this);
            }
        }, this);
    },

    // Check that all required attributes are present
    _verifyRequired: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[113303,113579],"range":[113291,113579],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":328,"label":"ampersand"}');
        var attrs = this.attributes; // should include session
        for (var def in this._definition) {
            if (this._definition[def].required && typeof attrs[def] === 'undefined') {
                return false;
            }
        }
        return true;
    }
});

// getter for attributes
Object.defineProperties(Base.prototype, {
    attributes: {
        get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[113695,113775],"range":[113683,113775],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":329,"label":"ampersand"}');
            return this.getAttributes({props: true, session: true});
        }
    },
    all: {
        get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[113819,113976],"range":[113807,113976],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":330,"label":"ampersand"}');
            return this.getAttributes({
                session: true,
                props: true,
                derived: true
            });
        }
    },
    isState: {
        get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[114024,114040],"range":[114012,114040],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":331,"label":"ampersand"}'); return true; },
        set: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[114067,114070],"range":[114055,114070],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":332,"label":"ampersand"}'); }
    }
});

// helper for creating/storing property definitions and creating
// appropriate getters/setters
function createPropertyDefinition(object, name, desc, isSession) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[114243,116138],"range":[114178,116138],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":335,"label":"ampersand"}');
    var def = object._definition[name] = {};
    var type, descArray;

    if (_.isString(desc)) {
        // grab our type if all we've got is a string
        type = object._ensureValidType(desc);
        if (type) def.type = type;
    } else {

        //Transform array of ['type', required, default] to object form
        if (_.isArray(desc)) {
            descArray = desc;
            desc = {
                type: descArray[0],
                required: descArray[1],
                default: descArray[2]
            };
        }

        type = object._ensureValidType(desc.type);
        if (type) def.type = type;

        if (desc.required) def.required = true;

        if (desc.default && typeof desc.default === 'object') {
            throw new TypeError('The default value for ' + name + ' cannot be an object/array, must be a value or a function which returns a value/object/array');
        }
        def.default = desc.default;

        def.allowNull = desc.allowNull ? desc.allowNull : false;
        if (desc.setOnce) def.setOnce = true;
        if (def.required && _.isUndefined(def.default)) def.default = object._getDefaultForType(type);
        def.test = desc.test;
        def.values = desc.values;
    }
    if (isSession) def.session = true;

    // define a getter/setter on the prototype
    // but they get/set on the instance
    Object.defineProperty(object, name, {
        set: function (val) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[115678,115722],"range":[115663,115722],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":333,"label":"ampersand"}');
            this.set(name, val);
        },
        get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[115749,116111],"range":[115737,116111],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":334,"label":"ampersand"}');
            var result = this._values[name];
            var typeDef = this._dataTypes[def.type];
            if (typeof result !== 'undefined') {
                if (typeDef && typeDef.get) {
                    result = typeDef.get(result);
                }
                return result;
            }
            return _.result(def, 'default');
        }
    });

    return def;
}

// helper for creating derived property definitions
function createDerivedProperty(modelProto, name, definition) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[116253,116961],"range":[116192,116961],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":339,"label":"ampersand"}');
    var def = modelProto._derived[name] = {
        fn: _.isFunction(definition) ? definition : definition.fn,
        cache: (definition.cache !== false),
        depList: definition.deps || []
    };

    // add to our shared dependency list
    _.each(def.depList, function (dep) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[116538,116623],"range":[116523,116623],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":336,"label":"ampersand"}');
        modelProto._deps[dep] = _(modelProto._deps[dep] || []).union([name]);
    });

    // defined a top-level getter for derived names
    Object.defineProperty(modelProto, name, {
        get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[116750,116812],"range":[116738,116812],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":337,"label":"ampersand"}');
            return this._getDerivedProperty(name);
        },
        set: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[116839,116951],"range":[116827,116951],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":338,"label":"ampersand"}');
            throw new TypeError('"' + name + '" is a derived property, it can\'t be set directly.');
        }
    });
}

var dataTypes = {
    string: {
        default: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117024,117058],"range":[117012,117058],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":340,"label":"ampersand"}');
            return '';
        }
    },
    date: {
        set: function (newVal) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117109,117768],"range":[117091,117768],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":341,"label":"ampersand"}');
            var newType;
            if (!_.isDate(newVal)) {
                try {
                    newVal = new Date(parseInt(newVal, 10));
                    if (!_.isDate(newVal)) throw TypeError;
                    newVal = newVal.valueOf();
                    if (_.isNaN(newVal)) throw TypeError;
                    newType = 'date';
                } catch (e) {
                    newType = typeof newVal;
                }
            } else {
                newType = 'date';
                newVal = newVal.valueOf();
            }
            return {
                val: newVal,
                type: newType
            };
        },
        get: function (val) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117798,117843],"range":[117783,117843],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":342,"label":"ampersand"}');
            return new Date(val);
        },
        default: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117874,117916],"range":[117862,117916],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":343,"label":"ampersand"}');
            return new Date();
        }
    },
    array: {
        set: function (newVal) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117968,118110],"range":[117950,118110],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":344,"label":"ampersand"}');
            return {
                val: newVal,
                type: _.isArray(newVal) ? 'array' : typeof newVal
            };
        },
        default: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[118141,118175],"range":[118129,118175],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":345,"label":"ampersand"}');
            return [];
        }
    },
    object: {
        set: function (newVal) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[118228,118730],"range":[118210,118730],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":346,"label":"ampersand"}');
            var newType = typeof newVal;
            // we have to have a way of supporting "missing" objects.
            // Null is an object, but setting a value to undefined
            // should work too, IMO. We just override it, in that case.
            if (newType !== 'object' && _.isUndefined(newVal)) {
                newVal = null;
                newType = 'object';
            }
            return {
                val: newVal,
                type: newType
            };
        },
        default: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[118761,118795],"range":[118749,118795],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":347,"label":"ampersand"}');
            return {};
        }
    },
    // the `state` data type is a bit special in that setting it should
    // also bubble events
    state: {
        set: function (newVal) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[118945,119332],"range":[118927,119332],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":348,"label":"ampersand"}');
            var isInstance = newVal instanceof Base || (newVal && newVal.isState);
            if (isInstance) {
                return {
                    val: newVal,
                    type: 'state'
                };
            } else {
                return {
                    val: newVal,
                    type: typeof newVal
                };
            }
        },
        compare: function (currentVal, newVal, attributeName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[119396,119873],"range":[119351,119873],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":349,"label":"ampersand"}');
            var isSame = currentVal === newVal;

            // if this has changed we want to also handle
            // event propagation
            if (!isSame) {
                if (currentVal) {
                    this.stopListening(currentVal);
                }

                if (newVal != null) {
                    this.listenTo(newVal, 'all', this._getEventBubblingHandler(attributeName));
                }
            }

            return isSame;
        }
    }
};

// the extend method used to extend prototypes, maintain inheritance chains for instanceof
// and allow for additions to the model definitions.
function extend(protoProps) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[120056,123250],"range":[120028,123250],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":359,"label":"ampersand"}');
    var parent = this;
    var child;
    var args = [].slice.call(arguments);
    var prop, item;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
        child = protoProps.constructor;
    } else {
        child = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[120515,120576],"range":[120503,120576],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":350,"label":"ampersand"}');
            return parent.apply(this, arguments);
        };
    }

    // Add static properties to the constructor function from parent
    _.extend(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[120829,120858],"range":[120817,120858],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":351,"label":"ampersand"}'); this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();

    // set prototype level objects
    child.prototype._derived =  _.extend({}, parent.prototype._derived);
    child.prototype._deps = _.extend({}, parent.prototype._deps);
    child.prototype._definition = _.extend({}, parent.prototype._definition);
    child.prototype._collections = _.extend({}, parent.prototype._collections);
    child.prototype._children = _.extend({}, parent.prototype._children);
    child.prototype._dataTypes = _.extend({}, parent.prototype._dataTypes || dataTypes);

    // Mix in all prototype properties to the subclass if supplied.
    if (protoProps) {
        args.forEach(function processArg(def) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[121576,123044],"range":[121551,123044],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":358,"label":"ampersand"}');
            if (def.dataTypes) {
                _.each(def.dataTypes, function (def, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[121670,121749],"range":[121649,121749],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":352,"label":"ampersand"}');
                    child.prototype._dataTypes[name] = def;
                });
                delete def.dataTypes;
            }
            if (def.props) {
                _.each(def.props, function (def, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[121888,121981],"range":[121867,121981],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":353,"label":"ampersand"}');
                    createPropertyDefinition(child.prototype, name, def);
                });
                delete def.props;
            }
            if (def.session) {
                _.each(def.session, function (def, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[122120,122219],"range":[122099,122219],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":354,"label":"ampersand"}');
                    createPropertyDefinition(child.prototype, name, def, true);
                });
                delete def.session;
            }
            if (def.derived) {
                _.each(def.derived, function (def, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[122360,122450],"range":[122339,122450],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":355,"label":"ampersand"}');
                    createDerivedProperty(child.prototype, name, def);
                });
                delete def.derived;
            }
            if (def.collections) {
                _.each(def.collections, function (constructor, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[122607,122696],"range":[122578,122696],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":356,"label":"ampersand"}');
                    child.prototype._collections[name] = constructor;
                });
                delete def.collections;
            }
            if (def.children) {
                _.each(def.children, function (constructor, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[122851,122937],"range":[122822,122937],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":357,"label":"ampersand"}');
                    child.prototype._children[name] = constructor;
                });
                delete def.children;
            }
            _.extend(child.prototype, def);
        });
    }

    var toString = Object.prototype.toString;

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
}

Base.extend = extend;

// Our main exports
module.exports = Base;

},{"array-next":23,"backbone-events-standalone":25,"key-tree-store":26,"underscore":27}],23:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[123444,123660],"range":[123412,123660],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":362,"label":"ampersand"}');
module.exports = function arrayNext(array, currentItem) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[123502,123656],"range":[123463,123656],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":361,"label":"ampersand"}');
    var len = array.length;
    var newIndex = array.indexOf(currentItem) + 1;
    if (newIndex > (len - 1)) newIndex = 0;
    return array[newIndex];
};

},{}],24:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[123701,123731],"range":[123669,123731],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":363,"label":"ampersand"}');
module.exports=require(11)
},{}],25:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[123772,123802],"range":[123740,123802],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":364,"label":"ampersand"}');
module.exports=require(12)
},{"./backbone-events-standalone":24}],26:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[123876,124768],"range":[123844,124768],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":370,"label":"ampersand"}');
function KeyTreeStore() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[123902,123928],"range":[123878,123928],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":365,"label":"ampersand"}');
    this.storage = {};
}

// add an object to the store
KeyTreeStore.prototype.add = function (keypath, obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[124013,124104],"range":[123989,124104],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":366,"label":"ampersand"}');
    var arr = this.storage[keypath] || (this.storage[keypath] = []);
    arr.push(obj);
};

// remove an object
KeyTreeStore.prototype.remove = function (obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[124174,124436],"range":[124159,124436],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":368,"label":"ampersand"}');
    var path, arr;
    for (path in this.storage) {
        arr = this.storage[path];
        arr.some(function (item, index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[124302,124426],"range":[124279,124426],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":367,"label":"ampersand"}');
            if (item === obj) {
                arr.splice(index, 1);
                return true;
            }
        });
    }
};

// grab all relevant objects
KeyTreeStore.prototype.get = function (keypath) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[124516,124732],"range":[124497,124732],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":369,"label":"ampersand"}');
    var res = [];
    var key;

    for (key in this.storage) {
        if (keypath === key || key.indexOf(keypath + '.') === 0) {
            res = res.concat(this.storage[key]);
        }
    }

    return res;
};

module.exports = KeyTreeStore;

},{}],27:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[124809,172368],"range":[124777,172368],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":521,"label":"ampersand"}');
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[125039,172352],"range":[125028,172352],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":520,"label":"ampersand"}');

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126047,126164],"range":[126033,126164],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":371,"label":"ampersand"}');
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.7.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var createCallback = function(func, context, argCount) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126806,127457],"range":[126772,127457],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":377,"label":"ampersand"}');
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126933,126984],"range":[126917,126984],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":372,"label":"ampersand"}');
        return func.call(context, value);
      };
      case 2: return function(value, other) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[127030,127088],"range":[127007,127088],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":373,"label":"ampersand"}');
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[127146,127216],"range":[127111,127216],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":374,"label":"ampersand"}');
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[127287,127370],"range":[127239,127370],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":375,"label":"ampersand"}');
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[127400,127452],"range":[127389,127452],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":376,"label":"ampersand"}');
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  _.iteratee = function(value, context, argCount) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[127742,127949],"range":[127707,127949],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":378,"label":"ampersand"}');
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[128235,128642],"range":[128202,128642],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":379,"label":"ampersand"}');
    if (obj == null) return obj;
    iteratee = createCallback(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
      for (i = 0; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[128766,129190],"range":[128733,129190],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":380,"label":"ampersand"}');
    if (obj == null) return [];
    iteratee = _.iteratee(iteratee, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length),
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[129430,129959],"range":[129391,129959],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":381,"label":"ampersand"}');
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index = 0, currentKey;
    if (arguments.length < 3) {
      if (!length) throw new TypeError(reduceError);
      memo = obj[keys ? keys[index++] : index++];
    }
    for (; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[130098,130599],"range":[130059,130599],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":382,"label":"ampersand"}');
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== + obj.length && _.keys(obj),
        index = (keys || obj).length,
        currentKey;
    if (arguments.length < 3) {
      if (!index) throw new TypeError(reduceError);
      memo = obj[keys ? keys[--index] : --index];
    }
    while (index--) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[130734,130973],"range":[130700,130973],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":384,"label":"ampersand"}');
    var result;
    predicate = _.iteratee(predicate, context);
    _.some(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[130845,130948],"range":[130816,130948],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":383,"label":"ampersand"}');
      if (predicate(value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[131113,131362],"range":[131079,131362],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":386,"label":"ampersand"}');
    var results = [];
    if (obj == null) return results;
    predicate = _.iteratee(predicate, context);
    _.each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[131267,131336],"range":[131238,131336],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":385,"label":"ampersand"}');
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[131471,131544],"range":[131437,131544],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":387,"label":"ampersand"}');
    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[131687,132085],"range":[131653,132085],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":388,"label":"ampersand"}');
    if (obj == null) return true;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[132239,132637],"range":[132205,132637],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":389,"label":"ampersand"}');
    if (obj == null) return false;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[132792,132929],"range":[132770,132929],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":390,"label":"ampersand"}');
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = _.values(obj);
    return _.indexOf(obj, target) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[133036,133236],"range":[133014,133236],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":392,"label":"ampersand"}');
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[133156,133230],"range":[133140,133230],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":391,"label":"ampersand"}');
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[133347,133392],"range":[133328,133392],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":393,"label":"ampersand"}');
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[133554,133603],"range":[133533,133603],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":394,"label":"ampersand"}');
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[133769,133816],"range":[133748,133816],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":395,"label":"ampersand"}');
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[133926,134629],"range":[133893,134629],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":397,"label":"ampersand"}');
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[134380,134598],"range":[134351,134598],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":396,"label":"ampersand"}');
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[134739,135438],"range":[134706,135438],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":399,"label":"ampersand"}');
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[135191,135407],"range":[135162,135407],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":398,"label":"ampersand"}');
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[135608,135959],"range":[135594,135959],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":400,"label":"ampersand"}');
    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[136180,136376],"range":[136156,136376],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":401,"label":"ampersand"}');
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[136495,136994],"range":[136462,136994],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":404,"label":"ampersand"}');
    iteratee = _.iteratee(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[136602,136724],"range":[136573,136724],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":402,"label":"ampersand"}');
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[136753,136978],"range":[136731,136978],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":403,"label":"ampersand"}');
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[137098,137386],"range":[137079,137386],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":407,"label":"ampersand"}');
    return function(obj, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[137144,137381],"range":[137111,137381],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":406,"label":"ampersand"}');
      var result = {};
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[137258,137352],"range":[137235,137352],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":405,"label":"ampersand"}');
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[137577,137663],"range":[137548,137663],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":408,"label":"ampersand"}');
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[137853,137883],"range":[137824,137883],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":409,"label":"ampersand"}');
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[138102,138172],"range":[138073,138172],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":410,"label":"ampersand"}');
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[138386,138662],"range":[138346,138662],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":411,"label":"ampersand"}');
    iteratee = _.iteratee(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = low + high >>> 1;
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[138755,138926],"range":[138741,138926],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":412,"label":"ampersand"}');
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139003,139112],"range":[138989,139112],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":413,"label":"ampersand"}');
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139320,139542],"range":[139286,139542],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":415,"label":"ampersand"}');
    predicate = _.iteratee(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139442,139511],"range":[139416,139511],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":414,"label":"ampersand"}');
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139835,139985],"range":[139809,139985],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":416,"label":"ampersand"}');
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[140272,140368],"range":[140246,140368],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":417,"label":"ampersand"}');
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[140562,140726],"range":[140536,140726],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":418,"label":"ampersand"}');
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[141043,141106],"range":[141017,141106],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":419,"label":"ampersand"}');
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[141185,141230],"range":[141169,141230],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":420,"label":"ampersand"}');
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[141354,141802],"range":[141313,141802],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":421,"label":"ampersand"}');
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
      var value = input[i];
      if (!_.isArray(value) && !_.isArguments(value)) {
        if (!strict) output.push(value);
      } else if (shallow) {
        push.apply(output, value);
      } else {
        flatten(value, shallow, strict, output);
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[141923,141975],"range":[141898,141975],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":422,"label":"ampersand"}');
    return flatten(array, shallow, false, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[142089,142152],"range":[142073,142152],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":423,"label":"ampersand"}');
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[142392,143149],"range":[142347,143149],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":424,"label":"ampersand"}');
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i];
      if (isSorted) {
        if (!i || seen !== value) result.push(value);
        seen = value;
      } else if (iteratee) {
        var computed = iteratee(value, i, array);
        if (_.indexOf(seen, computed) < 0) {
          seen.push(computed);
          result.push(value);
        }
      } else if (_.indexOf(result, value) < 0) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[143283,143343],"range":[143272,143343],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":425,"label":"ampersand"}');
    return _.uniq(flatten(arguments, true, true, []));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[143474,143885],"range":[143458,143885],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":426,"label":"ampersand"}');
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[144062,144224],"range":[144046,144224],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":428,"label":"ampersand"}');
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return _.filter(array, function(value){instrumentation_log('{"type":"FunctionExpression","bodyRange":[144172,144218],"range":[144157,144218],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":427,"label":"ampersand"}');
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function(array) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[144356,144587],"range":[144340,144587],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":429,"label":"ampersand"}');
    if (array == null) return [];
    var length = _.max(arguments, 'length').length;
    var results = Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[144817,145083],"range":[144794,145083],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":430,"label":"ampersand"}');
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[145368,145764],"range":[145336,145764],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":431,"label":"ampersand"}');
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[145813,146061],"range":[145785,146061],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":432,"label":"ampersand"}');
    if (array == null) return -1;
    var idx = array.length;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[146316,146632],"range":[146288,146632],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":433,"label":"ampersand"}');
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var Ctor = function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[146772,146774],"range":[146762,146774],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":434,"label":"ampersand"}');};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[146985,147622],"range":[146961,147622],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":436,"label":"ampersand"}');
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    args = slice.call(arguments, 2);
    bound = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[147260,147599],"range":[147249,147599],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":435,"label":"ampersand"}');
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      Ctor.prototype = func.prototype;
      var self = new Ctor;
      Ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (_.isObject(result)) return result;
      return self;
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[147891,148277],"range":[147876,148277],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":438,"label":"ampersand"}');
    var boundArgs = slice.call(arguments, 1);
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[147961,148272],"range":[147950,148272],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":437,"label":"ampersand"}');
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[148504,148754],"range":[148490,148754],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":439,"label":"ampersand"}');
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[148853,149151],"range":[148830,149151],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":441,"label":"ampersand"}');
    var memoize = function(key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[148887,149102],"range":[148873,149102],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":440,"label":"ampersand"}');
      var cache = memoize.cache;
      var address = hasher ? hasher.apply(this, arguments) : key;
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[149300,149431],"range":[149279,149431],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":443,"label":"ampersand"}');
    var args = slice.call(arguments, 2);
    return setTimeout(function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[149375,149419],"range":[149365,149419],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":442,"label":"ampersand"}');
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[149553,149631],"range":[149538,149631],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":444,"label":"ampersand"}');
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[150066,150948],"range":[150036,150948],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":447,"label":"ampersand"}');
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[150204,150376],"range":[150193,150376],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":445,"label":"ampersand"}');
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[150400,150943],"range":[150389,150943],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":446,"label":"ampersand"}');
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[151275,151999],"range":[151243,151999],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":450,"label":"ampersand"}');
    var timeout, args, context, timestamp, result;

    var later = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[151356,151665],"range":[151345,151665],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":448,"label":"ampersand"}');
      var last = _.now() - timestamp;

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[151690,151994],"range":[151679,151994],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":449,"label":"ampersand"}');
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[152226,152268],"range":[152202,152268],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":451,"label":"ampersand"}');
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[152363,152447],"range":[152343,152447],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":453,"label":"ampersand"}');
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[152387,152442],"range":[152376,152442],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":452,"label":"ampersand"}');
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[152614,152861],"range":[152603,152861],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":455,"label":"ampersand"}');
    var args = arguments;
    var start = args.length - 1;
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[152697,152856],"range":[152686,152856],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":454,"label":"ampersand"}');
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[152977,153090],"range":[152955,153090],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":457,"label":"ampersand"}');
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[153001,153085],"range":[152990,153085],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":456,"label":"ampersand"}');
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed before being called N times.
  _.before = function(times, func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[153208,153390],"range":[153186,153390],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":459,"label":"ampersand"}');
    var memo;
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[153246,153385],"range":[153235,153385],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":458,"label":"ampersand"}');
      if (--times > 0) {
        memo = func.apply(this, arguments);
      } else {
        func = null;
      }
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[153742,153926],"range":[153728,153926],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":460,"label":"ampersand"}');
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[154008,154199],"range":[153994,154199],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":461,"label":"ampersand"}');
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[154288,154487],"range":[154274,154487],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":462,"label":"ampersand"}');
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[154596,154774],"range":[154582,154774],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":463,"label":"ampersand"}');
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[154918,155052],"range":[154904,155052],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":464,"label":"ampersand"}');
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[155157,155473],"range":[155143,155473],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":465,"label":"ampersand"}');
    if (!_.isObject(obj)) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
        }
      }
    }
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[155597,156143],"range":[155564,156143],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":466,"label":"ampersand"}');
    var result = {}, key;
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      iteratee = createCallback(iteratee, context);
      for (key in obj) {
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
    } else {
      var keys = concat.apply([], slice.call(arguments, 1));
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156260,156562],"range":[156227,156562],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":468,"label":"ampersand"}');
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
      iteratee = function(value, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156460,156508],"range":[156439,156508],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":467,"label":"ampersand"}');
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156647,156912],"range":[156633,156912],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":469,"label":"ampersand"}');
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156996,157100],"range":[156982,157100],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":470,"label":"ampersand"}');
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[157352,157395],"range":[157325,157395],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":471,"label":"ampersand"}');
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[157499,161182],"range":[157468,161182],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":472,"label":"ampersand"}');
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (
      aCtor !== bCtor &&
      // Handle Object.create(x) cases
      'constructor' in a && 'constructor' in b &&
      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
        _.isFunction(bCtor) && bCtor instanceof bCtor)
    ) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size, result;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size === b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      size = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      result = _.keys(b).length === size;
      if (result) {
        while (size--) {
          // Deep compare each member
          key = keys[size];
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161280,161314],"range":[161265,161314],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":473,"label":"ampersand"}');
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161450,161656],"range":[161436,161656],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":474,"label":"ampersand"}');
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161726,161773],"range":[161712,161773],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":475,"label":"ampersand"}');
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161900,161957],"range":[161886,161957],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":476,"label":"ampersand"}');
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162025,162119],"range":[162011,162119],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":477,"label":"ampersand"}');
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162304,162414],"range":[162289,162414],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":479,"label":"ampersand"}');
    _['is' + name] = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162341,162409],"range":[162327,162409],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":478,"label":"ampersand"}');
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162613,162655],"range":[162599,162655],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":480,"label":"ampersand"}');
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
  if (typeof /./ !== 'function') {
    _.isFunction = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162799,162854],"range":[162785,162854],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":481,"label":"ampersand"}');
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162930,162988],"range":[162916,162988],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":482,"label":"ampersand"}');
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163102,163151],"range":[163088,163151],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":483,"label":"ampersand"}');
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163217,163309],"range":[163203,163309],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":484,"label":"ampersand"}');
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163376,163406],"range":[163362,163406],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":485,"label":"ampersand"}');
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163477,163509],"range":[163463,163509],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":486,"label":"ampersand"}');
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163673,163735],"range":[163654,163735],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":487,"label":"ampersand"}');
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163959,164014],"range":[163948,164014],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":488,"label":"ampersand"}');
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164110,164133],"range":[164094,164133],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":489,"label":"ampersand"}');
    return value;
  };

  _.constant = function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164167,164223],"range":[164151,164223],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":491,"label":"ampersand"}');
    return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164191,164218],"range":[164180,164218],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":490,"label":"ampersand"}');
      return value;
    };
  };

  _.noop = function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[164247,164249],"range":[164237,164249],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":492,"label":"ampersand"}');};

  _.property = function(key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164281,164343],"range":[164267,164343],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":494,"label":"ampersand"}');
    return function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164308,164338],"range":[164294,164338],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":493,"label":"ampersand"}');
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164470,164809],"range":[164454,164809],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":496,"label":"ampersand"}');
    var pairs = _.pairs(attrs), length = pairs.length;
    return function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164552,164804],"range":[164538,164804],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":495,"label":"ampersand"}');
      if (obj == null) return !length;
      obj = new Object(obj);
      for (var i = 0; i < length; i++) {
        var pair = pairs[i], key = pair[0];
        if (pair[1] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164888,165059],"range":[164857,165059],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":497,"label":"ampersand"}');
    var accum = Array(Math.max(0, n));
    iteratee = createCallback(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[165156,165284],"range":[165137,165284],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":498,"label":"ampersand"}');
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[165393,165431],"range":[165382,165431],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":499,"label":"ampersand"}');
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[165766,166212],"range":[165752,166212],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":502,"label":"ampersand"}');
    var escaper = function(match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[165802,165834],"range":[165786,165834],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":500,"label":"ampersand"}');
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[166062,166207],"range":[166045,166207],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":501,"label":"ampersand"}');
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[166465,166604],"range":[166438,166604],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":503,"label":"ampersand"}');
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? object[property]() : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[166772,166846],"range":[166755,166846],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":504,"label":"ampersand"}');
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

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
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[167651,167690],"range":[167635,167690],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":505,"label":"ampersand"}');
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[168023,169885],"range":[167985,169885],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":508,"label":"ampersand"}');
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[168612,169112],"range":[168557,169112],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":506,"label":"ampersand"}');
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[169620,169668],"range":[169605,169668],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":507,"label":"ampersand"}');
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[169987,170068],"range":[169973,170068],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":509,"label":"ampersand"}');
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[170405,170457],"range":[170391,170457],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":510,"label":"ampersand"}');
    return this._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[170547,170820],"range":[170533,170820],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":513,"label":"ampersand"}');
    _.each(_.functions(obj), function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[170593,170814],"range":[170578,170814],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":512,"label":"ampersand"}');
      var func = _[name] = obj[name];
      _.prototype[name] = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[170670,170807],"range":[170659,170807],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":511,"label":"ampersand"}');
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171045,171319],"range":[171030,171319],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":515,"label":"ampersand"}');
    var method = ArrayProto[name];
    _.prototype[name] = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171117,171314],"range":[171106,171314],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":514,"label":"ampersand"}');
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171430,171586],"range":[171415,171586],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":517,"label":"ampersand"}');
    var method = ArrayProto[name];
    _.prototype[name] = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171502,171581],"range":[171491,171581],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":516,"label":"ampersand"}');
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171683,171714],"range":[171672,171714],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":518,"label":"ampersand"}');
    return this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[172321,172344],"range":[172310,172344],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":519,"label":"ampersand"}');
      return _;
    });
  }
}.call(this));

},{}],28:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[172409,178363],"range":[172377,178363],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":545,"label":"ampersand"}');
var _ = require('underscore');
var Events = require('backbone-events-standalone');
var classExtend = require('ampersand-class-extend');
var underscoreMixins = require('ampersand-collection-underscore-mixin');
var slice = Array.prototype.slice;


function SubCollection(collection, spec) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[172698,172941],"range":[172657,172941],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":522,"label":"ampersand"}');
    spec || (spec = {});
    this.collection = collection;
    this._reset();
    this._watched = spec.watched || [];
    this._parseFilters(spec);
    this._runFilters();
    this.listenTo(this.collection, 'all', this._onCollectionEvent);
}


_.extend(SubCollection.prototype, Events, underscoreMixins, {
    // add a filter function directly
    addFilter: function (filter) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173077,173145],"range":[173059,173145],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":523,"label":"ampersand"}');
        this._addFilter(filter);
        this._runFilters();
    },

    // remove filter function directly
    removeFilter: function (filter) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173223,173294],"range":[173205,173294],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":524,"label":"ampersand"}');
        this._removeFilter(filter);
        this._runFilters();
    },

    // clears filters fires events for changes
    clearFilters: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173374,173432],"range":[173362,173432],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":525,"label":"ampersand"}');
        this._reset();
        this._runFilters();
    },

    // Update sub collection config, if `clear`
    // then clear existing filters before start.
    // This takes all the same filter arguments
    // as the init function. So you can pass:
    // {
    //   where: {
    //      name: 'something'
    //   },
    //   limit: 20
    // }
    configure: function (opts, clear) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173761,173871],"range":[173738,173871],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":526,"label":"ampersand"}');
        if (clear) this._resetFilters();
        this._parseFilters(opts);
        this._runFilters();
    },

    // gets a model at a given index
    at: function (index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173936,173978],"range":[173919,173978],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":527,"label":"ampersand"}');
        return this.models[index];
    },

    // proxy `get` method to the underlying collection
    get: function (query, indexName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174073,174196],"range":[174045,174196],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":528,"label":"ampersand"}');
        var model = this.collection.get(query, indexName);
        if (model && this.contains(model)) return model;
    },

    // remove filter if found
    _removeFilter: function (filter) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174266,174406],"range":[174248,174406],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":529,"label":"ampersand"}');
        var index = this._filters.indexOf(filter);
        if (index !== -1) {
            this._filters.splice(index, 1);
        }
    },

    // clear all filters, reset everything
    _reset: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174476,174539],"range":[174464,174539],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":530,"label":"ampersand"}');
        this.models = [];
        this._resetFilters();
    },

    // just reset filters, no model changes
    _resetFilters: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174617,174745],"range":[174605,174745],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":531,"label":"ampersand"}');
        this._filters = [];
        this._watched = [];
        this.limit = undefined;
        this.offset = undefined;
    },

    // internal method registering new filter function
    _addFilter: function (filter) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174837,174880],"range":[174819,174880],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":532,"label":"ampersand"}');
        this._filters.push(filter);
    },

    // adds a property or array of properties to watch, ensures uniquness.
    _watch: function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174986,175074],"range":[174970,175074],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":533,"label":"ampersand"}');
        this._watched = _.union(this._watched, _.isArray(item) ? item : [item]);
    },

    // removes a watched property
    _unwatch: function (item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[175141,175204],"range":[175125,175204],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":534,"label":"ampersand"}');
        this._watched = _.without(this._watched, item);
    },

    _parseFilters: function (spec) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[175242,176023],"range":[175226,176023],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":537,"label":"ampersand"}');
        if (spec.where) {
            _.each(spec.where, function (value, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[175324,175492],"range":[175301,175492],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":536,"label":"ampersand"}');
                this._addFilter(function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[175375,175476],"range":[175358,175476],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":535,"label":"ampersand"}');
                    return (model.get ? model.get(item) : model[item]) === value;
                });
            }, this);
            // also make sure we watch all `where` keys
            this._watch(_.keys(spec.where));
        }
        if (spec.hasOwnProperty('limit')) this.limit = spec.limit;
        if (spec.hasOwnProperty('offset')) this.offset = spec.offset;
        if (spec.filter) {
            this._addFilter(spec.filter, false);
        }
        if (spec.filters) {
            spec.filters.forEach(this._addFilter, this);
        }
        if (spec.comparator) {
            this.comparator = spec.comparator;
        }
    },

    _runFilters: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[176055,177506],"range":[176043,177506],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":541,"label":"ampersand"}');
        // make a copy of the array for comparisons
        var existingModels = slice.call(this.models);
        var rootModels = slice.call(this.collection.models);
        var offset = (this.offset || 0);
        var newModels, toAdd, toRemove;

        // reduce base model set by applying filters
        if (this._filters.length) {
            newModels = _.reduce(this._filters, function (startingArray, filterFunc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[176480,176552],"range":[176443,176552],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":538,"label":"ampersand"}');
                return startingArray.filter(filterFunc);
            }, rootModels);
        } else {
            newModels = slice.call(rootModels);
        }

        // sort it
        if (this.comparator) newModels = _.sortBy(newModels, this.comparator);

        // trim it to length
        if (this.limit || this.offset) newModels = newModels.slice(offset, this.limit + offset);

        // now we've got our new models time to compare
        toAdd = _.difference(newModels, existingModels);
        toRemove = _.difference(existingModels, newModels);

        // save 'em
        this.models = newModels;
        
        _.each(toRemove, function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[177147,177207],"range":[177130,177207],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":539,"label":"ampersand"}');
            this.trigger('remove', model, this);
        }, this);

        _.each(toAdd, function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[177256,177313],"range":[177239,177313],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":540,"label":"ampersand"}');
            this.trigger('add', model, this);
        }, this);

        // if they contain the same models, but in new order, trigger sort
        if (!_.isEqual(existingModels, newModels)) {
            this.trigger('sort', this);
        }
    },

    _onCollectionEvent: function (eventName, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[177561,178038],"range":[177533,178038],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":542,"label":"ampersand"}');
        // conditions under which we should re-run filters
        if (_.contains(this._watched, eventName.split(':')[1]) || _.contains(['add', 'remove', 'reset', 'sync'], eventName)) {
            this._runFilters();
        }
        // conditions under which we should proxy the events
        if ((_.contains(['sync', 'invalid', 'destroy']) || eventName.indexOf('change') !== -1) && this.contains(model)) {
            this.trigger.apply(this, arguments);
        }
    }
});

Object.defineProperty(SubCollection.prototype, 'length', {
    get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[178124,178166],"range":[178112,178166],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":543,"label":"ampersand"}');
        return this.models.length;
    }
});

Object.defineProperty(SubCollection.prototype, 'isCollection', {
    get: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[178258,178286],"range":[178246,178286],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":544,"label":"ampersand"}');
        return true;
    }
});

SubCollection.extend = classExtend;

module.exports = SubCollection;

},{"ampersand-class-extend":29,"ampersand-collection-underscore-mixin":31,"backbone-events-standalone":33,"underscore":34}],29:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[178522,178552],"range":[178490,178552],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":546,"label":"ampersand"}');
module.exports=require(10)
},{"extend-object":30}],30:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[178611,178641],"range":[178579,178641],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":547,"label":"ampersand"}');
module.exports=require(13)
},{}],31:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[178682,180864],"range":[178650,180864],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":557,"label":"ampersand"}');
var _ = require('underscore');
var slice = [].slice;
var mixins = {};


// Underscore methods that we want to implement on the Collection.
var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample', 'partition'
];

// Mix in each Underscore method as a proxy to `Collection#models`.
_.each(methods, function (method) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[179371,179562],"range":[179353,179562],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":549,"label":"ampersand"}');
    if (!_[method]) return;
    mixins[method] = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[179434,179559],"range":[179422,179559],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":548,"label":"ampersand"}');
        var args = slice.call(arguments);
        args.unshift(this.models);
        return _[method].apply(_, args);
    };
});

// Underscore methods that take a property name as an argument.
var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

// Use attributes instead of properties.
_.each(attributeMethods, function (method) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[179783,180075],"range":[179765,180075],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":552,"label":"ampersand"}');
    if (!_[method]) return;
    mixins[method] = function (value, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[179860,180072],"range":[179834,180072],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":551,"label":"ampersand"}');
        var iterator = _.isFunction(value) ? value : function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[179932,180007],"range":[179915,180007],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":550,"label":"ampersand"}');
            return model.get ? model.get(value) : model[value];
        };
        return _[method](this.models, iterator, context);
    };
});

// Return models with matching attributes. Useful for simple cases of
// `filter`.
mixins.where = function (attrs, first) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[180201,180524],"range":[180177,180524],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":554,"label":"ampersand"}');
    if (_.isEmpty(attrs)) return first ? void 0 : [];
    return this[first ? 'find' : 'filter'](function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[180317,180520],"range":[180300,180520],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":553,"label":"ampersand"}');
        var value;
        for (var key in attrs) {
            value = model.get ? model.get(key) : model[key];
            if (attrs[key] !== value) return false;
        }
        return true;
    });
};

// Return the first model with matching attributes. Useful for simple cases
// of `find`.
mixins.findWhere = function (attrs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[180653,180692],"range":[180636,180692],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":555,"label":"ampersand"}');
    return this.where(attrs, true);
};

// Plucks an attribute from each model in the collection.
mixins.pluck = function (attr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[180784,180834],"range":[180768,180834],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":556,"label":"ampersand"}');
    return _.invoke(this.models, 'get', attr);
};

module.exports = mixins;

},{"underscore":34}],32:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[180920,180950],"range":[180888,180950],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":558,"label":"ampersand"}');
module.exports=require(11)
},{}],33:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[180991,181021],"range":[180959,181021],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":559,"label":"ampersand"}');
module.exports=require(12)
},{"./backbone-events-standalone":32}],34:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[181095,181125],"range":[181063,181125],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":560,"label":"ampersand"}');
module.exports=require(27)
},{}],35:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[181166,194067],"range":[181134,194067],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":594,"label":"ampersand"}');
var State = require('ampersand-state');
var CollectionView = require('ampersand-collection-view');
var domify = require('domify');
var _ = require('underscore');
var events = require('events-mixin');
var matches = require('matches-selector');
var bindings = require('ampersand-dom-bindings');
var getPath = require('get-object-path');


function View(attrs) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[181526,182128],"range":[181505,182128],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":561,"label":"ampersand"}');
    this.cid = _.uniqueId('view');
    attrs || (attrs = {});
    var parent = attrs.parent;
    delete attrs.parent;
    BaseState.call(this, attrs, {init: false, parent: parent});
    this.on('change:el', this._handleElementChange, this);
    this._parsedBindings = bindings(this.bindings);
    this._initializeBindings();
    if (attrs.el && !this.autoRender) {
        this._handleElementChange();
    }
    this._initializeSubviews();
    this.initialize.apply(this, arguments);
    this.set(_.pick(attrs, viewOptions));
    if (this.autoRender && this.template) {
        this.render();
    }
}

var BaseState = State.extend({
    dataTypes: {
        element: {
            set: function (newVal) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[182232,182404],"range":[182214,182404],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":562,"label":"ampersand"}');
                return {
                    val: newVal,
                    type: newVal instanceof Element ? 'element' : typeof newVal
                };
            },
            compare: function (el1, el2) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[182447,182498],"range":[182427,182498],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":563,"label":"ampersand"}');
                return el1 === el2;
            }
        },
        collection: {
            set: function (newVal) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[182567,182746],"range":[182549,182746],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":564,"label":"ampersand"}');
                return {
                    val: newVal,
                    type: newVal && newVal.isCollection ? 'collection' : typeof newVal
                };
            },
            compare: function (currentVal, newVal) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[182799,182860],"range":[182769,182860],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":565,"label":"ampersand"}');
                return currentVal === newVal;
            }
        }
    },
    props: {
        model: 'state',
        el: 'element',
        collection: 'collection'
    },
    derived: {
        rendered: {
            deps: ['el'],
            fn: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[183067,183116],"range":[183055,183116],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":566,"label":"ampersand"}');
                return !!this.el;
            }
        },
        hasData: {
            deps: ['model'],
            fn: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[183204,183256],"range":[183192,183256],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":567,"label":"ampersand"}');
                return !!this.model;
            }
        }
    }
});

// Cached regex to split keys for `delegate`.
var delegateEventSplitter = /^(\S+)\s*(.*)$/;

// List of view options to be merged as properties.
var viewOptions = ['model', 'collection', 'el'];

View.prototype = Object.create(BaseState.prototype);

// Set up all inheritable properties and methods.
_.extend(View.prototype, {
    // ## query
    // Get an single element based on CSS selector scoped to this.el
    // if you pass an empty string it return `this.el`.
    // If you pass an element we just return it back.
    // This lets us use `get` to handle cases where users
    // can pass a selector or an already selected element.
    query: function (selector) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[183947,184197],"range":[183927,184197],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":568,"label":"ampersand"}');
        if (!selector) return this.el;
        if (typeof selector === 'string') {
            if (matches(this.el, selector)) return this.el;
            return this.el.querySelector(selector) || undefined;
        }
        return selector;
    },

    // ## queryAll
    // Returns an array of elements based on CSS selector scoped to this.el
    // if you pass an empty string it return `this.el`. Also includes root
    // element.
    queryAll: function (selector) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[184420,184680],"range":[184400,184680],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":569,"label":"ampersand"}');
        var res = [];
        if (!this.el) return res;
        if (selector === '') return [this.el];
        if (matches(this.el, selector)) res.push(this.el);
        return res.concat(Array.prototype.slice.call(this.el.querySelectorAll(selector)));
    },

    // ## queryByHook
    // Convenience method for fetching element by it's `data-hook` attribute.
    // Also tries to match against root element.
    // Also supports matching 'one' of several space separated hooks.
    queryByHook: function (hook) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[184935,185000],"range":[184919,185000],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":570,"label":"ampersand"}');
        return this.query('[data-hook~="' + hook + '"]');
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[185137,185139],"range":[185125,185139],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":571,"label":"ampersand"}');},

    // **render** is the core function that your view can override, its job is
    // to populate its element (`this.el`), with the appropriate HTML.
    render: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[185316,185383],"range":[185304,185383],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":572,"label":"ampersand"}');
        this.renderWithTemplate(this);
        return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable events listeners.
    remove: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[185525,186269],"range":[185513,186269],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":575,"label":"ampersand"}');
        var parsedBindings = this._parsedBindings;
        if (this.el && this.el.parentNode) this.el.parentNode.removeChild(this.el);
        if (this._subviews) _.chain(this._subviews).flatten().invoke('remove');
        this.stopListening();
        // TODO: Not sure if this is actually necessary.
        // Just trying to de-reference this potentially large
        // amount of generated functions to avoid memory leaks.
        _.each(parsedBindings, function (properties, modelName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[186019,186202],"range":[185986,186202],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":574,"label":"ampersand"}');
            _.each(properties, function (value, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[186074,186144],"range":[186052,186144],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":573,"label":"ampersand"}');
                delete parsedBindings[modelName][key];
            });
            delete parsedBindings[modelName];
        });
        this.trigger('remove', this);
        return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    _handleElementChange: function (element, delegate) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[186420,186626],"range":[186391,186626],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":576,"label":"ampersand"}');
        if (this.eventManager) this.eventManager.unbind();
        this.eventManager = events(this.el, this);
        this.delegateEvents();
        this._applyBindingsForKey();
        return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function (e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function (events) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[187268,187502],"range":[187250,187502],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":577,"label":"ampersand"}');
        if (!(events || (events = _.result(this, 'events')))) return this;
        this.undelegateEvents();
        for (var key in events) {
            this.eventManager.bind(key, events[key]);
        }
        return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[187755,187819],"range":[187743,187819],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":578,"label":"ampersand"}');
        this.eventManager.unbind();
        return this;
    },

    // ## registerSubview
    // Pass it a view. This can be anything with a `remove` method
    registerSubview: function (view) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[187952,188311],"range":[187936,188311],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":579,"label":"ampersand"}');
        // Storage for our subviews.
        this._subviews || (this._subviews = []);
        this._subviews.push(view);
        // If view has an 'el' it's a single view not
        // an array of views registered by renderCollection
        // so we store a reference to the parent view.
        if (view.el) view.parent = this;
        return view;
    },

    // ## renderSubview
    // Pass it a view instance and a container element
    // to render it in. It's `remove` method will be called
    // when the parent view is destroyed.
    renderSubview: function (view, container) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[188541,188783],"range":[188514,188783],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":580,"label":"ampersand"}');
        if (typeof container === 'string') {
            container = this.query(container);
        }
        this.registerSubview(view);
        view.render();
        (container || this.el).appendChild(view.el);
        return view;
    },

    _applyBindingsForKey: function (name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[188828,189121],"range":[188812,189121],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":582,"label":"ampersand"}');
        if (!this.el) return;
        var fns = this._parsedBindings.getGrouped(name);
        var item;
        for (item in fns) {
            fns[item].forEach(function (fn) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[189007,189097],"range":[188993,189097],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":581,"label":"ampersand"}');
                fn(this.el, getPath(this, item), _.last(item.split('.')));
            }, this);
        }
    },

    _initializeBindings: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[189161,189405],"range":[189149,189405],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":584,"label":"ampersand"}');
        if (!this.bindings) return;
        this.on('all', function (eventName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[189243,189391],"range":[189222,189391],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":583,"label":"ampersand"}');
            if (eventName.slice(0, 7) === 'change:') {
                this._applyBindingsForKey(eventName.split(':')[1]);
            }
        }, this);
    },

    // ## _initializeSubviews
    // this is called at setup and grabs declared subviews
    _initializeSubviews: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[189534,189688],"range":[189522,189688],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":585,"label":"ampersand"}');
        if (!this.subviews) return;
        for (var item in this.subviews) {
            this._parseSubview(this.subviews[item], item);
        }
    },

    // ## _parseSubview
    // helper for parsing out the subview declaration and registering
    // the `waitFor` if need be.
    _parseSubview: function (subview, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[189862,190830],"range":[189837,190830],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":588,"label":"ampersand"}');
        var self = this;
        var opts = {
            selector: subview.container || '[data-hook="' + subview.hook + '"]',
            waitFor: subview.waitFor || '',
            prepareView: subview.prepareView || function (el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[190097,190242],"range":[190083,190242],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":586,"label":"ampersand"}');
                return new subview.constructor({
                    el: el,
                    parent: self
                });
            }
        };
        function action() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[190280,190738],"range":[190262,190738],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":587,"label":"ampersand"}');
            var el, subview;
            // if not rendered or we can't find our element, stop here.
            if (!this.el || !(el = this.query(opts.selector))) return;
            if (!opts.waitFor || getPath(this, opts.waitFor)) {
                subview = this[name] = opts.prepareView.call(this, el);
                subview.render();
                this.registerSubview(subview);
                this.off('change', action);
            }
        }
        // we listen for main `change` items
        this.on('change', action, this);
    },


    // Shortcut for doing everything we need to do to
    // render and fully replace current root element.
    // Either define a `template` property of your view
    // or pass in a template directly.
    // The template can either be a string or a function.
    // If it's a function it will be passed the `context`
    // argument.
    renderWithTemplate: function (context, templateArg) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[191226,191773],"range":[191194,191773],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":589,"label":"ampersand"}');
        var template = templateArg || this.template;
        if (!template) throw new Error('Template string or function needed.');
        var newDom = _.isString(template) ? template : template(context || this);
        if (_.isString(newDom)) newDom = domify(newDom);
        var parent = this.el && this.el.parentNode;
        if (parent) parent.replaceChild(newDom, this.el);
        if (newDom.nodeName === '#document-fragment') throw new Error('Views can only have one root element.');
        this.el = newDom;
        return this;
    },

    // ## cacheElements
    // This is a shortcut for adding reference to specific elements within your view for
    // access later. This avoids excessive DOM queries and makes it easier to update
    // your view if your template changes.
    //
    // In your `render` method. Use it like so:
    //
    //     render: function () {
    //       this.basicRender();
    //       this.cacheElements({
    //         pages: '#pages',
    //         chat: '#teamChat',
    //         nav: 'nav#views ul',
    //         me: '#me',
    //         cheatSheet: '#cheatSheet',
    //         omniBox: '#awesomeSauce'
    //       });
    //     }
    //
    // Then later you can access elements by reference like so: `this.pages`, or `this.chat`.
    cacheElements: function (hash) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[192555,192654],"range":[192539,192654],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":590,"label":"ampersand"}');
        for (var item in hash) {
            this[item] = this.query(hash[item]);
        }
    },

    // ## listenToAndRun
    // Shortcut for registering a listener for a model
    // and also triggering it right away.
    listenToAndRun: function (object, events, handler) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[192834,192947],"range":[192799,192947],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":591,"label":"ampersand"}');
        var bound = _.bind(handler, this);
        this.listenTo(object, events, bound);
        bound();
    },

    // ## animateRemove
    // Placeholder for if you want to do something special when they're removed.
    // For example fade it out, etc.
    // Any override here should call `.remove()` when done.
    animateRemove: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[193183,193213],"range":[193171,193213],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":592,"label":"ampersand"}');
        this.remove();
    },

    // ## renderCollection
    // Method for rendering a collections with individual views.
    // Just pass it the collection, and the view to use for the items in the
    // collection. The collectionView is returned.
    renderCollection: function (collection, ViewClass, container, opts) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[193508,194004],"range":[193458,194004],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":593,"label":"ampersand"}');
        var containerEl = (typeof container === 'string') ? this.query(container) : container;
        var config = _.extend({
            collection: collection,
            el: containerEl || this.el,
            view: ViewClass,
            parent: this,
            viewOptions: {
                parent: this
            }
        }, opts);
        var collectionView = new CollectionView(config);
        collectionView.render();
        return this.registerSubview(collectionView);
    }
});

View.extend = BaseState.extend;
module.exports = View;

},{"ampersand-collection-view":36,"ampersand-dom-bindings":41,"ampersand-state":22,"domify":44,"events-mixin":45,"get-object-path":50,"matches-selector":51,"underscore":52}],36:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[194276,199368],"range":[194244,199368],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":611,"label":"ampersand"}');
var _ = require('underscore');
var BBEvents = require('backbone-events-standalone');
var ampExtend = require('ampersand-class-extend');

// options
var options = ['collection', 'el', 'viewOptions', 'view', 'filter', 'reverse', 'parent'];


function CollectionView(spec) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[194548,195205],"range":[194518,195205],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":595,"label":"ampersand"}');
    if (!spec) {
        throw new ReferenceError('Collection view missing required parameters: collection, el');
    }
    if (!spec.collection) {
        throw new ReferenceError('Collection view requires a collection');
    }
    if (!spec.el) {
        throw new ReferenceError('Collection view requires an el');
    }
    _.extend(this, _.pick(spec, options));
    this.views = [];
    this.listenTo(this.collection, 'add', this._addViewForModel);
    this.listenTo(this.collection, 'remove', this._removeViewForModel);
    this.listenTo(this.collection, 'sort', this._rerenderAll);
    this.listenTo(this.collection, 'refresh reset', this._reset);
}

_.extend(CollectionView.prototype, BBEvents, {
    // for view contract compliance
    render: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195314,195369],"range":[195302,195369],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":596,"label":"ampersand"}');
        this._renderAll();
        return this;
    },
    remove: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195395,195472],"range":[195383,195472],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":597,"label":"ampersand"}');
        _.invoke(this.views, 'remove');
        this.stopListening();
    },
    _getViewByModel: function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195512,195624],"range":[195495,195624],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":599,"label":"ampersand"}');
        return _.find(this.views, function (view) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195564,195616],"range":[195548,195616],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":598,"label":"ampersand"}');
            return model === view.model;
        });
    },
    _createViewForModel: function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195668,195927],"range":[195651,195927],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":600,"label":"ampersand"}');
        var view = new this.view(_({model: model, collection: this.collection}).extend(this.viewOptions));
        this.views.push(view);
        view.parent = this;
        view.renderedByParentView = true;
        view.render();
        return view;
    },
    _getOrCreateByModel: function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195971,196057],"range":[195954,196057],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":601,"label":"ampersand"}');
        return this._getViewByModel(model) || this._createViewForModel(model);
    },
    _addViewForModel: function (model, collection, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[196119,196740],"range":[196081,196740],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":602,"label":"ampersand"}');
        var view = this._getViewByModel(model);
        var matches = this.filter ? this.filter(model) : true;
        if (!matches) {
            return;
        }
        if (!view) {
            view = new this.view(_({model: model, collection: this.collection}).extend(this.viewOptions));
            this.views.push(view);
            view.parent = this;
            view.renderedByParentView = true;
            view.render({containerEl: this.el});
        }
        if (options && options.rerender) {
            this._insertView(view);
        } else {
            this._insertViewAtIndex(view);
        }
    },
    _insertViewAtIndex: function (view) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[196782,197683],"range":[196766,197683],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":603,"label":"ampersand"}');
        if (!view.insertSelf) {
            var pos = this.collection.indexOf(view.model);
            var modelToInsertBefore, viewToInsertBefore;

            if (this.reverse) {
                modelToInsertBefore = this.collection.at(pos - 1);
            } else {
                modelToInsertBefore = this.collection.at(pos + 1);
            }

            viewToInsertBefore = this._getViewByModel(modelToInsertBefore);

            // FIX IE bug (https://developer.mozilla.org/en-US/docs/Web/API/Node.insertBefore)
            // "In Internet Explorer an undefined value as referenceElement will throw errors, while in rest of the modern browsers, this works fine."
            if(viewToInsertBefore) {
                this.el.insertBefore(view.el, viewToInsertBefore && viewToInsertBefore.el);
            } else {
                this.el.appendChild(view.el);
            }
        }
    },
    _insertView: function (view) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[197718,197969],"range":[197702,197969],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":604,"label":"ampersand"}');
        if (!view.insertSelf) {
            if (this.reverse && this.el.firstChild) {
                this.el.insertBefore(view.el, this.el.firstChild);
            } else {
                this.el.appendChild(view.el);
            }
        }
    },
    _removeViewForModel: function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[198013,198413],"range":[197996,198413],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":605,"label":"ampersand"}');
        var view = this._getViewByModel(model);
        if (!view) {
            return;
        }
        var index = this.views.indexOf(view);
        if (index !== -1) {
            // remove it if we found it calling animateRemove
            // to give user option of gracefully destroying.
            view = this.views.splice(index, 1)[0];
            this._removeView(view);
        }
    },
    _removeView: function (view) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[198448,198577],"range":[198432,198577],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":606,"label":"ampersand"}');
        if (view.animateRemove) {
            view.animateRemove();
        } else {
            view.remove();
        }
    },
    _renderAll: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[198607,198673],"range":[198595,198673],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":607,"label":"ampersand"}');
        this.collection.each(this._addViewForModel, this);
    },
    _rerenderAll: function (collection, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[198724,198915],"range":[198693,198915],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":609,"label":"ampersand"}');
        options = options || {};
        this.collection.each(function (model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[198805,198901],"range":[198788,198901],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":608,"label":"ampersand"}');
            this._addViewForModel(model, this, _.extend(options, {rerender: true}));
        }, this);
    },
    _reset: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[198941,199291],"range":[198929,199291],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":610,"label":"ampersand"}');
        var newViews = this.collection.map(this._getOrCreateByModel, this);

        //Remove existing views from the ui
        var toRemove = _.difference(this.views, newViews);
        toRemove.forEach(this._removeView, this);

        //Rerender the full list with the new views
        this.views = newViews;
        this._rerenderAll();
    }
});

CollectionView.extend = ampExtend;

module.exports = CollectionView;

},{"ampersand-class-extend":37,"backbone-events-standalone":40,"underscore":52}],37:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[199484,199514],"range":[199452,199514],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":612,"label":"ampersand"}');
module.exports=require(10)
},{"extend-object":38}],38:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[199573,199603],"range":[199541,199603],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":613,"label":"ampersand"}');
module.exports=require(13)
},{}],39:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[199644,209217],"range":[199612,209217],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":635,"label":"ampersand"}');
/**
 * Standalone extraction of Backbone.Events, no external dependency required.
 * Degrades nicely when Backone/underscore are already available in the current
 * global context.
 *
 * Note that docs suggest to use underscore's `_.extend()` method to add Events
 * support to some given object. A `mixin()` method has been added to the Events
 * prototype to avoid using underscore for that sole purpose:
 *
 *     var myEventEmitter = BackboneEvents.mixin({});
 *
 * Or for a function constructor:
 *
 *     function MyConstructor(){}
 *     MyConstructor.prototype.foo = function(){}
 *     BackboneEvents.mixin(MyConstructor.prototype);
 *
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * (c) 2013 Nicolas Perriault
 */
/* global exports:true, define, module */
(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[200432,209206],"range":[200421,209206],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":634,"label":"ampersand"}');
  var root = this,
      breaker = {},
      nativeForEach = Array.prototype.forEach,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      slice = Array.prototype.slice,
      idCounter = 0;

  // Returns a partial implementation matching the minimal API subset required
  // by Backbone.Events
  function miniscore() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[200761,202230],"range":[200740,202230],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":620,"label":"ampersand"}');
    return {
      keys: Object.keys || function (obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[200818,201161],"range":[200803,201161],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":614,"label":"ampersand"}');
        if (typeof obj !== "object" && typeof obj !== "function" || obj === null) {
          throw new TypeError("keys() called on a non-object");
        }
        var key, keys = [];
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            keys[keys.length] = key;
          }
        }
        return keys;
      },

      uniqueId: function(prefix) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[201197,201283],"range":[201180,201283],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":615,"label":"ampersand"}');
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
      },

      has: function(obj, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[201316,201371],"range":[201297,201371],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":616,"label":"ampersand"}');
        return hasOwnProperty.call(obj, key);
      },

      each: function(obj, iterator, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[201419,201964],"range":[201386,201964],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":617,"label":"ampersand"}');
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
          obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
          for (var i = 0, l = obj.length; i < l; i++) {
            if (iterator.call(context, obj[i], i, obj) === breaker) return;
          }
        } else {
          for (var key in obj) {
            if (this.has(obj, key)) {
              if (iterator.call(context, obj[key], key, obj) === breaker) return;
            }
          }
        }
      },

      once: function(func) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[201994,202219],"range":[201979,202219],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":619,"label":"ampersand"}');
        var ran = false, memo;
        return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[202053,202210],"range":[202042,202210],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":618,"label":"ampersand"}');
          if (ran) return memo;
          ran = true;
          memo = func.apply(this, arguments);
          func = null;
          return memo;
        };
      }
    };
  }

  var _ = miniscore(), Events;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[202899,203204],"range":[202865,203204],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":621,"label":"ampersand"}');
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[203381,203694],"range":[203347,203694],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":623,"label":"ampersand"}');
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[203530,203610],"range":[203519,203610],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":622,"label":"ampersand"}');
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[203985,204897],"range":[203951,204897],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":624,"label":"ampersand"}');
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = {};
        return this;
      }

      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[205225,205580],"range":[205210,205580],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":625,"label":"ampersand"}');
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[205759,206162],"range":[205729,206162],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":626,"label":"ampersand"}');
      var listeners = this._listeners;
      if (!listeners) return this;
      var deleteListener = !name && !callback;
      if (typeof name === 'object') callback = this;
      if (obj) (listeners = {})[obj._listenerId] = obj;
      for (var id in listeners) {
        listeners[id].off(name, callback, this);
        if (deleteListener) delete this._listeners[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[206485,206996],"range":[206451,206996],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":627,"label":"ampersand"}');
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[207234,207767],"range":[207211,207767],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":628,"label":"ampersand"}');
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[208059,208408],"range":[208026,208408],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":630,"label":"ampersand"}');
    Events[method] = function(obj, name, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[208112,208403],"range":[208082,208403],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":629,"label":"ampersand"}');
      var listeners = this._listeners || (this._listeners = {});
      var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
      listeners[id] = obj;
      if (typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Mixin utility
  Events.mixin = function(proto) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[208566,208806],"range":[208550,208806],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":632,"label":"ampersand"}');
    var exports = ['on', 'once', 'off', 'trigger', 'stopListening', 'listenTo',
                   'listenToOnce', 'bind', 'unbind'];
    _.each(exports, function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[208737,208776],"range":[208722,208776],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":631,"label":"ampersand"}');
      proto[name] = this[name];
    }, this);
    return proto;
  };

  // Export Events as BackboneEvents depending on current context
  if (typeof define === "function") {
    define(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[208935,208963],"range":[208924,208963],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":633,"label":"ampersand"}');
      return Events;
    });
  } else if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Events;
    }
    exports.BackboneEvents = Events;
  } else {
    root.BackboneEvents = Events;
  }
})(this);

},{}],40:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[209258,209306],"range":[209226,209306],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":636,"label":"ampersand"}');
arguments[4][12][0].apply(exports,arguments)
},{"./backbone-events-standalone":39}],41:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[209380,216192],"range":[209348,216192],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":676,"label":"ampersand"}');
var Store = require('key-tree-store');
var dom = require('ampersand-dom');
var matchesSelector = require('matches-selector');


// returns a key-tree-store of functions
// that can be applied to any element/model.

// all resulting functions should be called
// like func(el, value, lastKeyName)
module.exports = function (bindings) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[209715,210264],"range":[209695,210264],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":638,"label":"ampersand"}');
    var store = new Store();
    var key, current;

    for (key in bindings) {
        current = bindings[key];
        if (typeof current === 'string') {
            store.add(key, getBindingFunc({
                type: 'text',
                selector: current
            }));
        } else if (current.forEach) {
            current.forEach(function (binding) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[210083,210155],"range":[210064,210155],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":637,"label":"ampersand"}');
                store.add(key, getBindingFunc(binding));
            });
        } else {
            store.add(key, getBindingFunc(current));
        }
    }

    return store;
};


var slice = Array.prototype.slice;

function getMatches(el, selector) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[210338,210528],"range":[210304,210528],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":639,"label":"ampersand"}');
    if (selector === '') return [el];
    var matches = [];
    if (matchesSelector(el, selector)) matches.push(el);
    return matches.concat(slice.call(el.querySelectorAll(selector)));
}

function makeArray(val) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[210554,210602],"range":[210530,210602],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":640,"label":"ampersand"}');
    return Array.isArray(val) ? val : [val];
}

function getBindingFunc(binding) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[210637,216189],"range":[210604,216189],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":675,"label":"ampersand"}');
    var type = binding.type || 'text';
    var isCustomBinding = typeof type === 'function';
    var selector = (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[210764,211003],"range":[210752,211003],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":641,"label":"ampersand"}');
        if (typeof binding.selector === 'string') {
            return binding.selector;
        } else if (binding.hook) {
            return '[data-hook~="' + binding.hook + '"]';
        } else {
            return '';
        }
    })();
    var yes = binding.yes;
    var no = binding.no;
    var hasYesNo = !!(yes || no);

    // storage variable for previous if relevant
    var previousValue;

    if (isCustomBinding) {
        return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[211231,211408],"range":[211210,211408],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":643,"label":"ampersand"}');
            getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[211295,211361],"range":[211278,211361],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":642,"label":"ampersand"}');
                type(match, value, previousValue);
            });
            previousValue = value;
        };
    } else if (type === 'text') {
        return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[211480,211611],"range":[211459,211611],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":645,"label":"ampersand"}');
            getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[211544,211599],"range":[211527,211599],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":644,"label":"ampersand"}');
                dom.text(match, value);
            });
        };
    } else if (type === 'class') {
        return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[211684,211872],"range":[211663,211872],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":647,"label":"ampersand"}');
            getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[211748,211825],"range":[211731,211825],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":646,"label":"ampersand"}');
                dom.switchClass(match, previousValue, value);
            });
            previousValue = value;
        };
    } else if (type === 'attribute') {
        if (!binding.name) throw Error('attribute bindings must have a "name"');
        return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[212030,212331],"range":[212009,212331],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":650,"label":"ampersand"}');
            var names = makeArray(binding.name);
            getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[212143,212284],"range":[212126,212284],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":649,"label":"ampersand"}');
                names.forEach(function (name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[212191,212268],"range":[212175,212268],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":648,"label":"ampersand"}');
                    dom.setAttribute(match, name, value);
                });
            });
            previousValue = value;
        };
    } else if (type === 'value') {
        return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[212404,212735],"range":[212383,212735],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":652,"label":"ampersand"}');
            getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[212468,212688],"range":[212451,212688],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":651,"label":"ampersand"}');
                if (!value && value !== 0) value = '';
                // only apply bindings if element is not currently focused
                if (document.activeElement !== match) match.value = value;
            });
            previousValue = value;
        };
    } else if (type === 'booleanClass') {
        // if there's a `no` case this is actually a switch
        if (hasYesNo) {
            yes = makeArray(yes || '');
            no = makeArray(no || '');
            return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[212981,213439],"range":[212960,213439],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":656,"label":"ampersand"}');
                var prevClass = value ? no : yes;
                var newClass = value ? yes : no;
                getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213148,213423],"range":[213131,213423],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":655,"label":"ampersand"}');
                    prevClass.forEach(function (pc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213202,213277],"range":[213188,213277],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":653,"label":"ampersand"}');
                        dom.removeClass(match, pc);
                    });
                    newClass.forEach(function (nc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213331,213403],"range":[213317,213403],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":654,"label":"ampersand"}');
                        dom.addClass(match, nc);
                    });
                });
            };
        } else {
            return function (el, value, keyName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213507,213836],"range":[213477,213836],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":659,"label":"ampersand"}');
                var name = makeArray(binding.name || keyName);
                getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213638,213820],"range":[213621,213820],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":658,"label":"ampersand"}');
                    name.forEach(function (className) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213694,213800],"range":[213673,213800],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":657,"label":"ampersand"}');
                        dom[value ? 'addClass' : 'removeClass'](match, className);
                    });
                });
            };
        }
    } else if (type === 'booleanAttribute') {
        return function (el, value, keyName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213939,214238],"range":[213909,214238],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":662,"label":"ampersand"}');
            var name = makeArray(binding.name || keyName);
            getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214062,214226],"range":[214045,214226],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":661,"label":"ampersand"}');
                name.forEach(function (attr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214109,214210],"range":[214093,214210],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":660,"label":"ampersand"}');
                    dom[value ? 'addAttribute' : 'removeAttribute'](match, attr);
                });
            });
        };
    } else if (type === 'toggle') {
        // this doesn't require a selector since we can pass yes/no selectors
        if (hasYesNo) {
            return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214418,214712],"range":[214397,214712],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":665,"label":"ampersand"}');
                getMatches(el, yes).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214481,214557],"range":[214464,214557],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":663,"label":"ampersand"}');
                    dom[value ? 'show' : 'hide'](match);
                });
                getMatches(el, no).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214620,214696],"range":[214603,214696],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":664,"label":"ampersand"}');
                    dom[value ? 'hide' : 'show'](match);
                });
            };
        } else {
            return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214771,214931],"range":[214750,214931],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":667,"label":"ampersand"}');
                getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214839,214915],"range":[214822,214915],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":666,"label":"ampersand"}');
                    dom[value ? 'show' : 'hide'](match);
                });
            };
        }
    } else if (type === 'switch') {
        if (!binding.cases) throw Error('switch bindings must have "cases"');
        return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[215093,215329],"range":[215072,215329],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":669,"label":"ampersand"}');
            for (var item in binding.cases) {
                getMatches(el, binding.cases[item]).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[215218,215303],"range":[215201,215303],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":668,"label":"ampersand"}');
                    dom[value === item ? 'show' : 'hide'](match);
                });
            }
        };
    } else if (type === 'innerHTML') {
        return function (el, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[215406,215537],"range":[215385,215537],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":671,"label":"ampersand"}');
            getMatches(el, selector).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[215470,215525],"range":[215453,215525],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":670,"label":"ampersand"}');
                dom.html(match, value);
            });
        };
    } else if (type === 'switchClass') {
        if (!binding.cases) throw Error('switchClass bindings must have "cases"');
        return function (el, value, keyName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[215708,216109],"range":[215678,216109],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":674,"label":"ampersand"}');
            var name = makeArray(binding.name || keyName);
            for (var item in binding.cases) {
                getMatches(el, binding.cases[item]).forEach(function (match) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[215892,216083],"range":[215875,216083],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":673,"label":"ampersand"}');
                    name.forEach(function (className) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[215948,216063],"range":[215927,216063],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":672,"label":"ampersand"}');
                        dom[value === item ? 'addClass' : 'removeClass'](match, className);
                    });
                });
            }
        };
    } else {
        throw new Error('no such binding type: ' + type);
    }
}

},{"ampersand-dom":42,"key-tree-store":43,"matches-selector":51}],42:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[216293,219584],"range":[216261,219584],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":695,"label":"ampersand"}');
;window.ampersand = window.ampersand || {};window.ampersand["ampersand-dom"] = window.ampersand["ampersand-dom"] || [];window.ampersand["ampersand-dom"].push("1.2.6");
var dom = module.exports = {
    text: function (el, val) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[216521,216569],"range":[216502,216569],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":677,"label":"ampersand"}');
        el.textContent = getString(val);
    },
    // optimize if we have classList
    addClass: function (el, cls) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[216641,217015],"range":[216622,217015],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":678,"label":"ampersand"}');
        cls = getString(cls);
        if (!cls) return;
        if (el.classList) {
            el.classList.add(cls);
        } else {
            if (!hasClass(el, cls)) {
                if (el.classList) {
                    el.classList.add(cls);
                } else {
                    el.className += ' ' + cls;
                }
            }
        }
    },
    removeClass: function (el, cls) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[217053,217386],"range":[217034,217386],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":679,"label":"ampersand"}');
        if (el.classList) {
            cls = getString(cls);
            if (cls) el.classList.remove(cls);
        } else {
            // may be faster to not edit unless we know we have it?
            el.className = el.className.replace(new RegExp('(^|\\b)' + cls.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    },
    hasClass: hasClass,
    switchClass: function (el, prevCls, newCls) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[217460,217554],"range":[217429,217554],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":680,"label":"ampersand"}');
        if (prevCls) this.removeClass(el, prevCls);
        this.addClass(el, newCls);
    },
    // makes sure attribute (with no content) is added
    // if exists it will be cleared of content
    addAttribute: function (el, attr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[217696,217959],"range":[217676,217959],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":681,"label":"ampersand"}');
        // setting to empty string does same
        el.setAttribute(attr, '');
        // Some browsers won't update UI for boolean attributes unless you
        // set it directly. So we do both
        if (hasBooleanProperty(el, attr)) el[attr] = true;
    },
    // completely removes attribute
    removeAttribute: function (el, attr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[218038,218139],"range":[218018,218139],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":682,"label":"ampersand"}');
        el.removeAttribute(attr);
        if (hasBooleanProperty(el, attr)) el[attr] = false;
    },
    // sets attribute to string value given, clearing any current value
    setAttribute: function (el, attr, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[218258,218314],"range":[218231,218314],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":683,"label":"ampersand"}');
        el.setAttribute(attr, getString(value));
    },
    getAttribute: function (el, attr) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[218354,218399],"range":[218334,218399],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":684,"label":"ampersand"}');
        return el.getAttribute(attr);
    },
    hide: function (el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[218425,218528],"range":[218411,218528],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":685,"label":"ampersand"}');
        if (!isHidden(el)) {
            storeDisplayStyle(el);
            hide(el);
        }
    },
    // show element
    show: function (el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[218574,218599],"range":[218560,218599],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":686,"label":"ampersand"}');
        show(el);
    },
    html: function (el, content) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[218634,218673],"range":[218611,218673],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":687,"label":"ampersand"}');
        el.innerHTML = content;
    }
};

// helpers
function getString(val) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[218713,218803],"range":[218689,218803],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":688,"label":"ampersand"}');
    if (!val && val !== 0) {
        return '';
    } else {
        return val;
    }
}

function hasClass(el, cls) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[218832,218998],"range":[218805,218998],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":689,"label":"ampersand"}');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return new RegExp('(^| )' + cls + '( |$)', 'gi').test(el.className);
    }
}

function hasBooleanProperty(el, prop) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[219038,219123],"range":[219000,219123],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":690,"label":"ampersand"}');
    var val = el[prop];
    return prop in el && (val === true || val === false);
}

function isHidden (el) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[219148,219217],"range":[219125,219217],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":691,"label":"ampersand"}');
    return dom.getAttribute(el, 'data-anddom-hidden') === 'true';
}

function storeDisplayStyle (el) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[219251,219321],"range":[219219,219321],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":692,"label":"ampersand"}');
    dom.setAttribute(el, 'data-anddom-display', el.style.display);
}

function show (el) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[219342,219470],"range":[219323,219470],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":693,"label":"ampersand"}');
    el.style.display = dom.getAttribute(el, 'data-anddom-display') || '';
    dom.removeAttribute(el, 'data-anddom-hidden');
}

function hide (el) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[219491,219581],"range":[219472,219581],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":694,"label":"ampersand"}');
    dom.setAttribute(el, 'data-anddom-hidden', 'true');
    el.style.display = 'none';
}

},{}],43:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[219625,221546],"range":[219593,221546],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":705,"label":"ampersand"}');
var slice = Array.prototype.slice;

// our constructor
function KeyTreeStore() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[219706,219732],"range":[219682,219732],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":696,"label":"ampersand"}');
    this.storage = {};
}

// add an object to the store
KeyTreeStore.prototype.add = function (keypath, obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[219817,219908],"range":[219793,219908],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":697,"label":"ampersand"}');
    var arr = this.storage[keypath] || (this.storage[keypath] = []);
    arr.push(obj);
};

// remove an object
KeyTreeStore.prototype.remove = function (obj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[219978,220240],"range":[219963,220240],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":699,"label":"ampersand"}');
    var path, arr;
    for (path in this.storage) {
        arr = this.storage[path];
        arr.some(function (item, index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[220106,220230],"range":[220083,220230],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":698,"label":"ampersand"}');
            if (item === obj) {
                arr.splice(index, 1);
                return true;
            }
        });
    }
};

// get array of all all relevant functions, without keys
KeyTreeStore.prototype.get = function (keypath) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[220348,220576],"range":[220329,220576],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":700,"label":"ampersand"}');
    var res = [];
    var key;

    for (key in this.storage) {
        if (!keypath || keypath === key || key.indexOf(keypath + '.') === 0) {
            res = res.concat(this.storage[key]);
        }
    }

    return res;
};

// get all results that match keypath but still grouped by key
KeyTreeStore.prototype.getGrouped = function (keypath) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[220697,220930],"range":[220678,220930],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":701,"label":"ampersand"}');
    var res = {};
    var key;

    for (key in this.storage) {
        if (!keypath || keypath === key || key.indexOf(keypath + '.') === 0) {
            res[key] = slice.call(this.storage[key]);
        }
    }

    return res;
};

// get all results that match keypath but still grouped by key
KeyTreeStore.prototype.getAll = function (keypath) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[221047,221268],"range":[221028,221268],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":702,"label":"ampersand"}');
    var res = {};
    var key;

    for (key in this.storage) {
        if (keypath === key || key.indexOf(keypath + '.') === 0) {
            res[key] = slice.call(this.storage[key]);
        }
    }

    return res;
};

// run all matches with optional context
KeyTreeStore.prototype.run = function (keypath, context) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[221369,221508],"range":[221341,221508],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":704,"label":"ampersand"}');
    var args = slice.call(arguments, 2);
    this.get(keypath).forEach(function (fn) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[221456,221504],"range":[221442,221504],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":703,"label":"ampersand"}');
        fn.apply(context || this, args);
    });
};



module.exports = KeyTreeStore;

},{}],44:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[221587,224306],"range":[221555,224306],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":707,"label":"ampersand"}');

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Tests for browser support.
 */

var div = document.createElement('div');
// Setup
div.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
// Make sure that link elements get serialized correctly by innerHTML
// This requires a wrapper element in IE
var innerHTMLBug = !div.getElementsByTagName('link').length;
div = undefined;

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.text =
map.circle =
map.ellipse =
map.line =
map.path =
map.polygon =
map.polyline =
map.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[223292,224303],"range":[223266,224303],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":706,"label":"ampersand"}');
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

},{}],45:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[224347,227965],"range":[224315,227965],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":716,"label":"ampersand"}');

/**
 * Module dependencies.
 */

var events = require('component-event');
var delegate = require('delegate-events');
var forceCaptureEvents = ['focus', 'blur'];

/**
 * Expose `Events`.
 */

module.exports = Events;

/**
 * Initialize an `Events` with the given
 * `el` object which events will be bound to,
 * and the `obj` which will receive method calls.
 *
 * @param {Object} el
 * @param {Object} obj
 * @api public
 */

function Events(el, obj) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[224801,225016],"range":[224776,225016],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":708,"label":"ampersand"}');
  if (!(this instanceof Events)) return new Events(el, obj);
  if (!el) throw new Error('element required');
  if (!obj) throw new Error('object required');
  this.el = el;
  this.obj = obj;
  this._events = {};
}

/**
 * Subscription helper.
 */

Events.prototype.sub = function(event, method, cb){instrumentation_log('{"type":"FunctionExpression","bodyRange":[225101,225191],"range":[225074,225191],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":709,"label":"ampersand"}');
  this._events[event] = this._events[event] || {};
  this._events[event][method] = cb;
};

/**
 * Bind to `event` with optional `method` name.
 * When `method` is undefined it becomes `event`
 * with the "on" prefix.
 *
 * Examples:
 *
 *  Direct event handling:
 *
 *    events.bind('click') // implies "onclick"
 *    events.bind('click', 'remove')
 *    events.bind('click', 'sort', 'asc')
 *
 *  Delegated event handling:
 *
 *    events.bind('click li > a')
 *    events.bind('click li > a', 'remove')
 *    events.bind('click a.sort-ascending', 'sort', 'asc')
 *    events.bind('click a.sort-descending', 'sort', 'desc')
 *
 * @param {String} event
 * @param {String|function} [method]
 * @return {Function} callback
 * @api public
 */

Events.prototype.bind = function(event, method){instrumentation_log('{"type":"FunctionExpression","bodyRange":[225893,226385],"range":[225870,226385],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":711,"label":"ampersand"}');
  var e = parse(event);
  var el = this.el;
  var obj = this.obj;
  var name = e.name;
  var method = method || 'on' + name;
  var args = [].slice.call(arguments, 2);

  // callback
  function cb(){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[226092,226179],"range":[226079,226179],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":710,"label":"ampersand"}');
    var a = [].slice.call(arguments).concat(args);
    obj[method].apply(obj, a);
  }

  // bind
  if (e.selector) {
    cb = delegate.bind(el, e.selector, name, cb);
  } else {
    events.bind(el, name, cb);
  }

  // subscription for unbinding
  this.sub(name, method, cb);

  return cb;
};

/**
 * Unbind a single binding, all bindings for `event`,
 * or all bindings within the manager.
 *
 * Examples:
 *
 *  Unbind direct handlers:
 *
 *     events.unbind('click', 'remove')
 *     events.unbind('click')
 *     events.unbind()
 *
 * Unbind delegate handlers:
 *
 *     events.unbind('click', 'remove')
 *     events.unbind('click')
 *     events.unbind()
 *
 * @param {String|Function} [event]
 * @param {String|Function} [method]
 * @api public
 */

Events.prototype.unbind = function(event, method){instrumentation_log('{"type":"FunctionExpression","bodyRange":[226901,227304],"range":[226878,227304],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":712,"label":"ampersand"}');
  if (0 == arguments.length) return this.unbindAll();
  if (1 == arguments.length) return this.unbindAllOf(event);

  // no bindings for this event
  var bindings = this._events[event];
  var capture = (forceCaptureEvents.indexOf(event) !== -1);
  if (!bindings) return;

  // no bindings for this method
  var cb = bindings[method];
  if (!cb) return;

  events.unbind(this.el, event, cb, capture);
};

/**
 * Unbind all events.
 *
 * @api private
 */

Events.prototype.unbindAll = function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[227396,227468],"range":[227386,227468],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":713,"label":"ampersand"}');
  for (var event in this._events) {
    this.unbindAllOf(event);
  }
};

/**
 * Unbind all events for `event`.
 *
 * @param {String} event
 * @api private
 */

Events.prototype.unbindAllOf = function(event){instrumentation_log('{"type":"FunctionExpression","bodyRange":[227604,227740],"range":[227589,227740],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":714,"label":"ampersand"}');
  var bindings = this._events[event];
  if (!bindings) return;

  for (var method in bindings) {
    this.unbind(event, method);
  }
};

/**
 * Parse `event`.
 *
 * @param {String} event
 * @return {Object}
 * @api private
 */

function parse(event) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[227856,227962],"range":[227834,227962],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":715,"label":"ampersand"}');
  var parts = event.split(/ +/);
  return {
    name: parts.shift(),
    selector: parts.join(' ')
  }
}

},{"component-event":46,"delegate-events":47}],46:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[228047,228866],"range":[228015,228866],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":719,"label":"ampersand"}');
var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, type, fn, capture){instrumentation_log('{"type":"FunctionExpression","bodyRange":[228487,228552],"range":[228456,228552],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":717,"label":"ampersand"}');
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.unbind = function(el, type, fn, capture){instrumentation_log('{"type":"FunctionExpression","bodyRange":[228796,228863],"range":[228765,228863],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":718,"label":"ampersand"}');
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};
},{}],47:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[228907,230110],"range":[228875,230110],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":723,"label":"ampersand"}');
/**
 * Module dependencies.
 */

var closest = require('closest')
  , event = require('event');

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = ['focus', 'blur'];

exports.bind = function(el, selector, type, fn, capture){instrumentation_log('{"type":"FunctionExpression","bodyRange":[229513,229783],"range":[229472,229783],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":721,"label":"ampersand"}');
  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;

  return event.bind(el, type, function(e){instrumentation_log('{"type":"FunctionExpression","bodyRange":[229620,229770],"range":[229609,229770],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":720,"label":"ampersand"}');
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true, el);
    if (e.delegateTarget) fn.call(el, e);
  }, capture);
};

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

exports.unbind = function(el, type, fn, capture){instrumentation_log('{"type":"FunctionExpression","bodyRange":[230000,230106],"range":[229969,230106],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":722,"label":"ampersand"}');
  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;

  event.unbind(el, type, fn, capture);
};

},{"closest":48,"event":46}],48:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[230174,230470],"range":[230142,230470],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":725,"label":"ampersand"}');
var matches = require('matches-selector')

module.exports = function (element, selector, checkYoSelf) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[230278,230467],"range":[230236,230467],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":724,"label":"ampersand"}');
  var parent = checkYoSelf ? element : element.parentNode

  while (parent && parent !== document) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode
  }
}

},{"matches-selector":49}],49:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[230532,231205],"range":[230500,231205],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":727,"label":"ampersand"}');

/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[230996,231203],"range":[230967,231203],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":726,"label":"ampersand"}');
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}
},{}],50:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[231246,231669],"range":[231214,231669],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":729,"label":"ampersand"}');
module.exports = get;

function get (context, path) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[231300,231666],"range":[231271,231666],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":728,"label":"ampersand"}');
  if (path.indexOf('.') == -1 && path.indexOf('[') == -1) {
    return context[path];
  }

  var crumbs = path.split(/\.|\[|\]/g);
  var i = -1;
  var len = crumbs.length;
  var result;

  while (++i < len) {
    if (i == 0) result = context;
    if (!crumbs[i]) continue;
    if (result == undefined) break;
    result = result[crumbs[i]];
  }

  return result;
}

},{}],51:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[231710,232325],"range":[231678,232325],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":731,"label":"ampersand"}');
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

function match(el, selector) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[232116,232323],"range":[232087,232323],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":730,"label":"ampersand"}');
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}
},{}],52:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[232366,232396],"range":[232334,232396],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":732,"label":"ampersand"}');
module.exports=require(21)
},{}],53:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[232437,233810],"range":[232405,233810],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":736,"label":"ampersand"}');

/**
 * Module dependencies.
 */

var now = require('date-now');

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){instrumentation_log('{"type":"FunctionExpression","bodyRange":[233102,233806],"range":[233062,233806],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":735,"label":"ampersand"}');
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[233205,233490],"range":[233188,233490],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":733,"label":"ampersand"}');
    var last = now() - timestamp;

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function debounced() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[233523,233803],"range":[233502,233803],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":734,"label":"ampersand"}');
    context = this;
    args = arguments;
    timestamp = now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};

},{"date-now":54}],54:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[233864,233953],"range":[233832,233953],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":738,"label":"ampersand"}');
module.exports = Date.now || now

function now() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[233915,233950],"range":[233900,233950],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":737,"label":"ampersand"}');
    return new Date().getTime()
}

},{}],55:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[233994,239338],"range":[233962,239338],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":756,"label":"ampersand"}');
(function (global){instrumentation_log('{"type":"FunctionExpression","bodyRange":[234014,239202],"range":[233997,239202],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":755,"label":"ampersand"}');
!function(e){instrumentation_log('{"type":"FunctionExpression","bodyRange":[234028,234262],"range":[234017,234262],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":739,"label":"ampersand"}');if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.jade=e()}}(function(){instrumentation_log('{"type":"FunctionExpression","bodyRange":[234273,239198],"range":[234263,239198],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":754,"label":"ampersand"}');var define,module,exports;return (function e(t,n,r){instrumentation_log('{"type":"FunctionExpression","bodyRange":[234325,234714],"range":[234308,234714],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":742,"label":"ampersand"}');function s(o,u){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[234341,234628],"range":[234326,234628],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":741,"label":"ampersand"}');if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){instrumentation_log('{"type":"FunctionExpression","bodyRange":[234552,234586],"range":[234541,234586],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":740,"label":"ampersand"}');var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[234752,239129],"range":[234720,239129],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":752,"label":"ampersand"}');
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[235084,235571],"range":[235063,235571],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":743,"label":"ampersand"}');
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[235684,235723],"range":[235664,235723],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":744,"label":"ampersand"}');
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[235861,235946],"range":[235835,235946],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":745,"label":"ampersand"}');
  return Array.isArray(val) ? val.map(joinClasses).filter(nulls).join(' ') : val;
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[236115,236453],"range":[236084,236453],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":746,"label":"ampersand"}');
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[236673,237119],"range":[236633,237119],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":747,"label":"ampersand"}');
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){instrumentation_log('{"type":"FunctionExpression","bodyRange":[237284,237691],"range":[237258,237691],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":748,"label":"ampersand"}');
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){instrumentation_log('{"type":"FunctionExpression","bodyRange":[237842,238048],"range":[237821,238048],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":749,"label":"ampersand"}');
  var result = String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){instrumentation_log('{"type":"FunctionExpression","bodyRange":[238312,239125],"range":[238268,239125],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":751,"label":"ampersand"}');
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || _dereq_('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){instrumentation_log('{"type":"FunctionExpression","bodyRange":[238826,238947],"range":[238809,238947],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":750,"label":"ampersand"}');
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

},{"fs":2}],2:[function(_dereq_,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[239175,239179],"range":[239143,239179],"file":"todomvc/examples.lacunized.instrumented/ampersand/todomvc.bundle.js","index":753,"label":"ampersand"}');

},{}]},{},[1])
(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
