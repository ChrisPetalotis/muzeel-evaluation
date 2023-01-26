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


/// <reference path='../_all.ts' />
var todos;
(function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[65,314],"range":[48,314],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":2,"label":"typescript-angular"}');
    'use strict';
    var TodoItem = (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117,277],"range":[105,277],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":1,"label":"typescript-angular"}');
        function TodoItem(title, completed) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[163,246],"range":[127,246],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":0,"label":"typescript-angular"}');
            this.title = title;
            this.completed = completed;
        }
        return TodoItem;
    })();
    todos.TodoItem = TodoItem;
})(todos || (todos = {}));
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
var todos;
(function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[477,1081],"range":[460,1081],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":7,"label":"typescript-angular"}');
    'use strict';
    /**
     * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
     */
    function todoFocus($timeout) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[664,1008],"range":[635,1008],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":6,"label":"typescript-angular"}');
        return {
            link: function ($scope, element, attributes) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[740,991],"range":[701,991],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":5,"label":"typescript-angular"}');
                $scope.$watch(attributes.todoFocus, function (newval) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[812,975],"range":[794,975],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":4,"label":"typescript-angular"}');
                    if (newval) {
                        $timeout(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[893,923],"range":[881,923],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":3,"label":"typescript-angular"}'); return element[0].focus(); }, 0, false);
                    }
                });
            }
        };
    }
    todos.todoFocus = todoFocus;
    todoFocus.$inject = ['$timeout'];
})(todos || (todos = {}));
/// <reference path='../_all.ts' />
var todos;
(function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1172,1637],"range":[1155,1637],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":12,"label":"typescript-angular"}');
    'use strict';
    /**
     * Directive that executes an expression when the element it is applied to loses focus.
     */
    function todoBlur() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[1324,1604],"range":[1304,1604],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":11,"label":"typescript-angular"}');
        return {
            link: function ($scope, element, attributes) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1400,1587],"range":[1361,1587],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":10,"label":"typescript-angular"}');
                element.bind('blur', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1451,1490],"range":[1439,1490],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":8,"label":"typescript-angular"}'); $scope.$apply(attributes.todoBlur); });
                $scope.$on('$destroy', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1544,1571],"range":[1532,1571],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":9,"label":"typescript-angular"}'); element.unbind('blur'); });
            }
        };
    }
    todos.todoBlur = todoBlur;
})(todos || (todos = {}));
/// <reference path='../_all.ts' />
var todos;
(function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1728,2341],"range":[1711,2341],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":17,"label":"typescript-angular"}');
    'use strict';
    var ESCAPE_KEY = 27;
    /**
     * Directive that cancels editing a todo if the user presses the Esc key.
     */
    function todoEscape() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[1893,2304],"range":[1871,2304],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":16,"label":"typescript-angular"}');
        return {
            link: function ($scope, element, attributes) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1969,2287],"range":[1930,2287],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":15,"label":"typescript-angular"}');
                element.bind('keydown', function (event) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2028,2187],"range":[2011,2187],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":13,"label":"typescript-angular"}');
                    if (event.keyCode === ESCAPE_KEY) {
                        $scope.$apply(attributes.todoEscape);
                    }
                });
                $scope.$on('$destroy', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2241,2271],"range":[2229,2271],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":14,"label":"typescript-angular"}'); element.unbind('keydown'); });
            }
        };
    }
    todos.todoEscape = todoEscape;
})(todos || (todos = {}));
/// <reference path='../_all.ts' />
var todos;
(function (todos_1) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2434,3036],"range":[2415,3036],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":22,"label":"typescript-angular"}');
    'use strict';
    /**
     * Services that persists and retrieves TODOs from localStorage.
     */
    var TodoStorage = (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2574,2991],"range":[2562,2991],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":21,"label":"typescript-angular"}');
        function TodoStorage() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[2607,2678],"range":[2584,2678],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":18,"label":"typescript-angular"}');
            this.STORAGE_ID = 'todos-angularjs-typescript';
        }
        TodoStorage.prototype.get = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2727,2816],"range":[2715,2816],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":19,"label":"typescript-angular"}');
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        };
        TodoStorage.prototype.put = function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2871,2956],"range":[2854,2956],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":20,"label":"typescript-angular"}');
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
        };
        return TodoStorage;
    })();
    todos_1.TodoStorage = TodoStorage;
})(todos || (todos = {}));
/// <reference path='../_all.ts' />
var todos;
(function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3127,7492],"range":[3110,7492],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":38,"label":"typescript-angular"}');
    'use strict';
    /**
     * The main controller for the app. The controller:
     * - retrieves and persists the model via the todoStorage service
     * - exposes the model to the template and provides event handlers
     */
    var TodoCtrl = (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3392,7455],"range":[3380,7455],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":37,"label":"typescript-angular"}');
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function TodoCtrl($scope, $location, todoStorage, filterFilter) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[3645,4681],"range":[3581,4681],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":25,"label":"typescript-angular"}');
            var _this = this;
            this.$scope = $scope;
            this.$location = $location;
            this.todoStorage = todoStorage;
            this.filterFilter = filterFilter;
            this.todos = $scope.todos = todoStorage.get();
            $scope.newTodo = '';
            $scope.editedTodo = null;
            // 'vm' stands for 'view model'. We're adding a reference to the controller to the scope
            // for its methods to be accessible from view / HTML
            $scope.vm = this;
            // watching for events/changes in scope, which are caused by view/user input
            // if you subscribe to scope or event with lifetime longer than this controller, make sure you unsubscribe.
            $scope.$watch('todos', function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4423,4450],"range":[4411,4450],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":23,"label":"typescript-angular"}'); return _this.onTodos(); }, true);
            $scope.$watch('location.path()', function (path) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4520,4550],"range":[4504,4550],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":24,"label":"typescript-angular"}'); return _this.onPath(path); });
            if ($location.path() === '')
                $location.path('/');
            $scope.location = $location;
        }
        TodoCtrl.prototype.onPath = function (path) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4734,4914],"range":[4718,4914],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":26,"label":"typescript-angular"}');
            this.$scope.statusFilter = (path === '/active') ?
                { completed: false } : (path === '/completed') ?
                { completed: true } : {};
        };
        TodoCtrl.prototype.onTodos = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4965,5273],"range":[4953,5273],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":27,"label":"typescript-angular"}');
            this.$scope.remainingCount = this.filterFilter(this.todos, { completed: false }).length;
            this.$scope.doneCount = this.todos.length - this.$scope.remainingCount;
            this.$scope.allChecked = !this.$scope.remainingCount;
            this.todoStorage.put(this.todos);
        };
        TodoCtrl.prototype.addTodo = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5324,5565],"range":[5312,5565],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":28,"label":"typescript-angular"}');
            var newTodo = this.$scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            this.todos.push(new todos.TodoItem(newTodo, false));
            this.$scope.newTodo = '';
        };
        TodoCtrl.prototype.editTodo = function (todoItem) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5625,5821],"range":[5605,5821],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":29,"label":"typescript-angular"}');
            this.$scope.editedTodo = todoItem;
            // Clone the original todo in case editing is cancelled.
            this.$scope.originalTodo = angular.extend({}, todoItem);
        };
        TodoCtrl.prototype.revertEdits = function (todoItem) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5884,6017],"range":[5864,6017],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":30,"label":"typescript-angular"}');
            this.todos[this.todos.indexOf(todoItem)] = this.$scope.originalTodo;
            this.$scope.reverted = true;
        };
        TodoCtrl.prototype.doneEditing = function (todoItem) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6080,6503],"range":[6060,6503],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":31,"label":"typescript-angular"}');
            this.$scope.editedTodo = null;
            this.$scope.originalTodo = null;
            if (this.$scope.reverted) {
                // Todo edits were reverted, don't save.
                this.$scope.reverted = null;
                return;
            }
            todoItem.title = todoItem.title.trim();
            if (!todoItem.title) {
                this.removeTodo(todoItem);
            }
        };
        TodoCtrl.prototype.removeTodo = function (todoItem) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6565,6640],"range":[6545,6640],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":32,"label":"typescript-angular"}');
            this.todos.splice(this.todos.indexOf(todoItem), 1);
        };
        TodoCtrl.prototype.clearDoneTodos = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6698,6826],"range":[6686,6826],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":34,"label":"typescript-angular"}');
            this.$scope.todos = this.todos = this.todos.filter(function (todoItem) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6783,6814],"range":[6763,6814],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":33,"label":"typescript-angular"}'); return !todoItem.completed; });
        };
        TodoCtrl.prototype.markAll = function (completed) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6886,6986],"range":[6865,6986],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":36,"label":"typescript-angular"}');
            this.todos.forEach(function (todoItem) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6939,6974],"range":[6919,6974],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":35,"label":"typescript-angular"}'); todoItem.completed = completed; });
        };
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        TodoCtrl.$inject = [
            '$scope',
            '$location',
            'todoStorage',
            'filterFilter'
        ];
        return TodoCtrl;
    })();
    todos.TodoCtrl = TodoCtrl;
})(todos || (todos = {}));
/// <reference path='_all.ts' />
/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
var todos;
(function (todos) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7649,7965],"range":[7632,7965],"file":"todomvc/examples.lacunized.instrumented/typescript-angular/js/Application.js","index":39,"label":"typescript-angular"}');
    'use strict';
    var todomvc = angular.module('todomvc', [])
        .controller('todoCtrl', todos.TodoCtrl)
        .directive('todoBlur', todos.todoBlur)
        .directive('todoFocus', todos.todoFocus)
        .directive('todoEscape', todos.todoEscape)
        .service('todoStorage', todos.TodoStorage);
})(todos || (todos = {}));
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='models/TodoItem.ts' />
/// <reference path='interfaces/ITodoScope.ts' />
/// <reference path='interfaces/ITodoStorage.ts' />
/// <reference path='directives/TodoFocus.ts' />
/// <reference path='directives/TodoBlur.ts' />
/// <reference path='directives/TodoEscape.ts' />
/// <reference path='services/TodoStorage.ts' />
/// <reference path='controllers/TodoCtrl.ts' />
/// <reference path='Application.ts' />
//# sourceMappingURL=Application.js.map