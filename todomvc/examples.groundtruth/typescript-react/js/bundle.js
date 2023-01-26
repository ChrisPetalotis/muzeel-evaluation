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


(function e(t,n,r){instrumentation_log('{"type":"FunctionExpression","bodyRange":[18,441],"range":[1,441],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":2,"label":"typescript-react"}');function s(o,u){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[34,355],"range":[19,355],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":1,"label":"typescript-react"}');if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){instrumentation_log('{"type":"FunctionExpression","bodyRange":[279,313],"range":[268,313],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":0,"label":"typescript-react"}');var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[479,2596],"range":[447,2596],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":19,"label":"typescript-react"}');
/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>
var utils_1 = require("./utils");
var TodoModel = (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[734,2558],"range":[722,2558],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":18,"label":"typescript-react"}');
    function TodoModel(key) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[764,871],"range":[740,871],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":3,"label":"typescript-react"}');
        this.key = key;
        this.todos = utils_1.Utils.store(key);
        this.onChanges = [];
    }
    TodoModel.prototype.subscribe = function (onChange) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[928,974],"range":[908,974],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":4,"label":"typescript-react"}');
        this.onChanges.push(onChange);
    };
    TodoModel.prototype.inform = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1021,1136],"range":[1009,1136],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":6,"label":"typescript-react"}');
        utils_1.Utils.store(this.key, this.todos);
        this.onChanges.forEach(function (cb) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1119,1128],"range":[1105,1128],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":5,"label":"typescript-react"}'); cb(); });
    };
    TodoModel.prototype.addTodo = function (title) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1189,1365],"range":[1172,1365],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":7,"label":"typescript-react"}');
        this.todos = this.todos.concat({
            id: utils_1.Utils.uuid(),
            title: title,
            completed: false
        });
        this.inform();
    };
    TodoModel.prototype.toggleAll = function (checked) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1422,1593],"range":[1403,1593],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":9,"label":"typescript-react"}');
        this.todos = this.todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1476,1562],"range":[1460,1562],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":8,"label":"typescript-react"}');
            return utils_1.Utils.extend({}, todo, { completed: checked });
        });
        this.inform();
    };
    TodoModel.prototype.toggle = function (todoToToggle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1652,1894],"range":[1628,1894],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":11,"label":"typescript-react"}');
        this.todos = this.todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1706,1863],"range":[1690,1863],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":10,"label":"typescript-react"}');
            return todo !== todoToToggle ?
                todo :
                utils_1.Utils.extend({}, todo, { completed: !todo.completed });
        });
        this.inform();
    };
    TodoModel.prototype.destroy = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1946,2089],"range":[1930,2089],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":13,"label":"typescript-react"}');
        this.todos = this.todos.filter(function (candidate) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2008,2058],"range":[1987,2058],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":12,"label":"typescript-react"}');
            return candidate !== todo;
        });
        this.inform();
    };
    TodoModel.prototype.save = function (todoToSave, text) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2150,2343],"range":[2122,2343],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":15,"label":"typescript-react"}');
        this.todos = this.todos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2204,2312],"range":[2188,2312],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":14,"label":"typescript-react"}');
            return todo !== todoToSave ? todo : utils_1.Utils.extend({}, todo, { title: text });
        });
        this.inform();
    };
    TodoModel.prototype.clearCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2398,2533],"range":[2386,2533],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":17,"label":"typescript-react"}');
        this.todos = this.todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2455,2502],"range":[2439,2502],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":16,"label":"typescript-react"}');
            return !todo.completed;
        });
        this.inform();
    };
    return TodoModel;
})();
exports.TodoModel = TodoModel;

},{"./utils":6}],2:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[2647,7637],"range":[2615,7637],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":42,"label":"typescript-react"}');
/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var __extends = (this && this.__extends) || function (d, b) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2837,3033],"range":[2821,3033],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":21,"label":"typescript-react"}');
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[2916,2941],"range":[2902,2941],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":20,"label":"typescript-react"}'); this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>
var TodoModel_1 = require("./TodoModel");
var footer_1 = require("./footer");
var todoItem_1 = require("./todoItem");
var constants_1 = require("./constants");
var TodoApp = (function (_super) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3315,7391],"range":[3297,7391],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":40,"label":"typescript-react"}');
    __extends(TodoApp, _super);
    function TodoApp(props) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[3377,3525],"range":[3353,3525],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":22,"label":"typescript-react"}');
        _super.call(this, props);
        this.state = {
            nowShowing: constants_1.ALL_TODOS,
            editing: null
        };
    }
    TodoApp.prototype.componentDidMount = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3580,3947],"range":[3568,3947],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":23,"label":"typescript-react"}');
        var setState = this.setState;
        var router = Router({
            '/': setState.bind(this, { nowShowing: constants_1.ALL_TODOS }),
            '/active': setState.bind(this, { nowShowing: constants_1.ACTIVE_TODOS }),
            '/completed': setState.bind(this, { nowShowing: constants_1.COMPLETED_TODOS })
        });
        router.init('/');
    };
    TodoApp.prototype.handleNewTodoKeyDown = function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4011,4345],"range":[3994,4345],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":24,"label":"typescript-react"}');
        if (event.keyCode !== constants_1.ENTER_KEY) {
            return;
        }
        event.preventDefault();
        var val = React.findDOMNode(this.refs["newField"]).value.trim();
        if (val) {
            this.props.model.addTodo(val);
            React.findDOMNode(this.refs["newField"]).value = '';
        }
    };
    TodoApp.prototype.toggleAll = function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4398,4523],"range":[4381,4523],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":25,"label":"typescript-react"}');
        var target = event.target;
        var checked = target.checked;
        this.props.model.toggleAll(checked);
    };
    TodoApp.prototype.toggle = function (todoToToggle) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4580,4634],"range":[4556,4634],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":26,"label":"typescript-react"}');
        this.props.model.toggle(todoToToggle);
    };
    TodoApp.prototype.destroy = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4684,4731],"range":[4668,4731],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":27,"label":"typescript-react"}');
        this.props.model.destroy(todo);
    };
    TodoApp.prototype.edit = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4778,4830],"range":[4762,4830],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":28,"label":"typescript-react"}');
        this.setState({ editing: todo.id });
    };
    TodoApp.prototype.save = function (todoToSave, text) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4889,4987],"range":[4861,4987],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":29,"label":"typescript-react"}');
        this.props.model.save(todoToSave, text);
        this.setState({ editing: null });
    };
    TodoApp.prototype.cancel = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5032,5081],"range":[5020,5081],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":30,"label":"typescript-react"}');
        this.setState({ editing: null });
    };
    TodoApp.prototype.clearCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5134,5184],"range":[5122,5184],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":31,"label":"typescript-react"}');
        this.props.model.clearCompleted();
    };
    TodoApp.prototype.render = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5229,7368],"range":[5217,7368],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":39,"label":"typescript-react"}');
        var _this = this;
        var footer;
        var main;
        var todos = this.props.model.todos;
        var shownTodos = todos.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5393,5706],"range":[5377,5706],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":32,"label":"typescript-react"}');
            switch (_this.state.nowShowing) {
                case constants_1.ACTIVE_TODOS:
                    return !todo.completed;
                case constants_1.COMPLETED_TODOS:
                    return todo.completed;
                default:
                    return true;
            }
        });
        var todoItems = shownTodos.map(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5764,6137],"range":[5748,6137],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":34,"label":"typescript-react"}');
            return (React.createElement(todoItem_1.TodoItem, {"key": todo.id, "todo": todo, "onToggle": _this.toggle.bind(_this, todo), "onDestroy": _this.destroy.bind(_this, todo), "onEdit": _this.edit.bind(_this, todo), "editing": _this.state.editing === todo.id, "onSave": _this.save.bind(_this, todo), "onCancel": function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6097,6123],"range":[6084,6123],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":33,"label":"typescript-react"}'); return _this.cancel(); }}));
        });
        var activeTodoCount = todos.reduce(function (accum, todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6206,6272],"range":[6183,6272],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":35,"label":"typescript-react"}');
            return todo.completed ? accum : accum + 1;
        }, 0);
        var completedCount = todos.length - activeTodoCount;
        if (activeTodoCount || completedCount) {
            footer =
                React.createElement(footer_1.TodoFooter, {"count": activeTodoCount, "completedCount": completedCount, "nowShowing": this.state.nowShowing, "onClearCompleted": function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6597,6631],"range":[6584,6631],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":36,"label":"typescript-react"}'); return _this.clearCompleted(); }});
        }
        if (todos.length) {
            main = (React.createElement("section", {"className": "main"}, React.createElement("input", {"className": "toggle-all", "type": "checkbox", "onChange": function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6849,6879],"range":[6836,6879],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":37,"label":"typescript-react"}'); return _this.toggleAll(e); }, "checked": activeTodoCount === 0}), React.createElement("ul", {"className": "todo-list"}, todoItems)));
        }
        return (React.createElement("div", null, React.createElement("header", {"className": "header"}, React.createElement("h1", null, "todos"), React.createElement("input", {"ref": "newField", "className": "new-todo", "placeholder": "What needs to be done?", "onKeyDown": function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7282,7323],"range":[7269,7323],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":38,"label":"typescript-react"}'); return _this.handleNewTodoKeyDown(e); }, "autoFocus": true})), main, footer));
    };
    return TodoApp;
})(React.Component);
var model = new TodoModel_1.TodoModel('react-todos');
function render() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[7483,7599],"range":[7465,7599],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":41,"label":"typescript-react"}');
    React.render(React.createElement(TodoApp, {"model": model}), document.getElementsByClassName('todoapp')[0]);
}
model.subscribe(render);
render();

},{"./TodoModel":1,"./constants":3,"./footer":4,"./todoItem":5}],3:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[7736,8043],"range":[7704,8043],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":43,"label":"typescript-react"}');
var ALL_TODOS = 'all';
exports.ALL_TODOS = ALL_TODOS;
var ACTIVE_TODOS = 'active';
exports.ACTIVE_TODOS = ACTIVE_TODOS;
var COMPLETED_TODOS = 'completed';
exports.COMPLETED_TODOS = COMPLETED_TODOS;
var ENTER_KEY = 13;
exports.ENTER_KEY = ENTER_KEY;
var ESCAPE_KEY = 27;
exports.ESCAPE_KEY = ESCAPE_KEY;

},{}],4:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[8083,10076],"range":[8051,10076],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":49,"label":"typescript-react"}');
/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var __extends = (this && this.__extends) || function (d, b) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[8266,8462],"range":[8250,8462],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":45,"label":"typescript-react"}');
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[8345,8370],"range":[8331,8370],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":44,"label":"typescript-react"}'); this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>
var constants_1 = require("./constants");
var utils_1 = require("./utils");
var TodoFooter = (function (_super) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[8663,10021],"range":[8645,10021],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":48,"label":"typescript-react"}');
    __extends(TodoFooter, _super);
    function TodoFooter() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[8726,8772],"range":[8704,8772],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":46,"label":"typescript-react"}');
        _super.apply(this, arguments);
    }
    TodoFooter.prototype.render = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[8819,9995],"range":[8807,9995],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":47,"label":"typescript-react"}');
        var activeTodoWord = utils_1.Utils.pluralize(this.props.count, 'item');
        var clearButton = null;
        if (this.props.completedCount > 0) {
            clearButton = (React.createElement("button", {"className": "clear-completed", "onClick": this.props.onClearCompleted}, "Clear completed"));
        }
        var nowShowing = this.props.nowShowing;
        return (React.createElement("footer", {"className": "footer"}, React.createElement("span", {"className": "todo-count"}, React.createElement("strong", null, this.props.count), " ", activeTodoWord, " left"), React.createElement("ul", {"className": "filters"}, React.createElement("li", null, React.createElement("a", {"href": "#/", "className": classNames({ selected: nowShowing === constants_1.ALL_TODOS })}, "All")), ' ', React.createElement("li", null, React.createElement("a", {"href": "#/active", "className": classNames({ selected: nowShowing === constants_1.ACTIVE_TODOS })}, "Active")), ' ', React.createElement("li", null, React.createElement("a", {"href": "#/completed", "className": classNames({ selected: nowShowing === constants_1.COMPLETED_TODOS })}, "Completed"))), clearButton));
    };
    return TodoFooter;
})(React.Component);
exports.TodoFooter = TodoFooter;

},{"./constants":3,"./utils":6}],5:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[10143,13348],"range":[10111,13348],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":65,"label":"typescript-react"}');
/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
var __extends = (this && this.__extends) || function (d, b) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[10330,10526],"range":[10314,10526],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":51,"label":"typescript-react"}');
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[10409,10434],"range":[10395,10434],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":50,"label":"typescript-react"}'); this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>
var constants_1 = require("./constants");
var TodoItem = (function (_super) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[10691,13297],"range":[10673,13297],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":64,"label":"typescript-react"}');
    __extends(TodoItem, _super);
    function TodoItem(props) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[10755,10854],"range":[10730,10854],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":52,"label":"typescript-react"}');
        _super.call(this, props);
        this.state = { editText: this.props.todo.title };
    }
    TodoItem.prototype.handleSubmit = function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[10910,11135],"range":[10893,11135],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":53,"label":"typescript-react"}');
        var val = this.state.editText.trim();
        if (val) {
            this.props.onSave(val);
            this.setState({ editText: val });
        }
        else {
            this.props.onDestroy();
        }
    };
    TodoItem.prototype.handleEdit = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11185,11281],"range":[11173,11281],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":54,"label":"typescript-react"}');
        this.props.onEdit();
        this.setState({ editText: this.props.todo.title });
    };
    TodoItem.prototype.handleKeyDown = function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11339,11624],"range":[11322,11624],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":55,"label":"typescript-react"}');
        if (event.keyCode === constants_1.ESCAPE_KEY) {
            this.setState({ editText: this.props.todo.title });
            this.props.onCancel(event);
        }
        else if (event.keyCode === constants_1.ENTER_KEY) {
            this.handleSubmit(event);
        }
    };
    TodoItem.prototype.handleChange = function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11681,11772],"range":[11664,11772],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":56,"label":"typescript-react"}');
        var input = event.target;
        this.setState({ editText: input.value });
    };
    TodoItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11853,12027],"range":[11821,12027],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":57,"label":"typescript-react"}');
        return (nextProps.todo !== this.props.todo ||
            nextProps.editing !== this.props.editing ||
            nextState.editText !== this.state.editText);
    };
    TodoItem.prototype.componentDidUpdate = function (prevProps) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12094,12333],"range":[12073,12333],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":58,"label":"typescript-react"}');
        if (!prevProps.editing && this.props.editing) {
            var node = React.findDOMNode(this.refs["editField"]);
            node.focus();
            node.setSelectionRange(node.value.length, node.value.length);
        }
    };
    TodoItem.prototype.render = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12379,13273],"range":[12367,13273],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":63,"label":"typescript-react"}');
        var _this = this;
        return (React.createElement("li", {"className": classNames({
            completed: this.props.todo.completed,
            editing: this.props.editing
        })}, React.createElement("div", {"className": "view"}, React.createElement("input", {"className": "toggle", "type": "checkbox", "checked": this.props.todo.completed, "onChange": this.props.onToggle}), React.createElement("label", {"onDoubleClick": function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12835,12865],"range":[12822,12865],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":59,"label":"typescript-react"}'); return _this.handleEdit(); }}, this.props.todo.title), React.createElement("button", {"className": "destroy", "onClick": this.props.onDestroy})), React.createElement("input", {"ref": "editField", "className": "edit", "value": this.state.editText, "onBlur": function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13107,13140],"range":[13094,13140],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":60,"label":"typescript-react"}'); return _this.handleSubmit(e); }, "onChange": function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13167,13200],"range":[13154,13200],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":61,"label":"typescript-react"}'); return _this.handleChange(e); }, "onKeyDown": function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13228,13262],"range":[13215,13262],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":62,"label":"typescript-react"}'); return _this.handleKeyDown(e); }})));
    };
    return TodoItem;
})(React.Component);
exports.TodoItem = TodoItem;

},{"./constants":3}],6:[function(require,module,exports){instrumentation_log('{"type":"FunctionExpression","bodyRange":[13403,14748],"range":[13371,14748],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":72,"label":"typescript-react"}');
var Utils = (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13430,14718],"range":[13418,14718],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":71,"label":"typescript-react"}');
    function Utils() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[13453,13460],"range":[13436,13460],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":66,"label":"typescript-react"}');
    }
    Utils.uuid = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13490,13867],"range":[13478,13867],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":67,"label":"typescript-react"}');
        var i, random;
        var uuid = '';
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
                .toString(16);
        }
        return uuid;
    };
    Utils.pluralize = function (count, word) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13914,13969],"range":[13891,13969],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":68,"label":"typescript-react"}');
        return count === 1 ? word : word + 's';
    };
    Utils.store = function (namespace, data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[14016,14231],"range":[13989,14231],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":69,"label":"typescript-react"}');
        if (data) {
            return localStorage.setItem(namespace, JSON.stringify(data));
        }
        var store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
    };
    Utils.extend = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[14264,14697],"range":[14252,14697],"file":"todomvc/examples.lacunized.instrumented/typescript-react/js/bundle.js","index":70,"label":"typescript-react"}');
        var objs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objs[_i - 0] = arguments[_i];
        }
        var newObj = {};
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    newObj[key] = obj[key];
                }
            }
        }
        return newObj;
    };
    return Utils;
})();
exports.Utils = Utils;

},{}]},{},[2]);
