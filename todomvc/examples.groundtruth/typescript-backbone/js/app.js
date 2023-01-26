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


/* ---------------------------------------------------------------------------------------
Todos.ts
Microsoft grants you the right to use these script files under the Apache 2.0 license.
Microsoft reserves all other rights to the files not expressly granted by Microsoft,
whether by implication, estoppel or otherwise. The copyright notices and MIT licenses
below are for informational purposes only.

Portions Copyright © Microsoft Corporation
Apache 2.0 License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
file except in compliance with the License. You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
ANY KIND, either express or implied.

See the License for the specific language governing permissions and limitations
under the License.
------------------------------------------------------------------------------------------
Provided for Informational Purposes Only
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
--------------------------------------------------------------------------------------- */
// Todos.js
// https://github.com/documentcloud/backbone/blob/master/examples/todos/todos.js
var __extends = (this && this.__extends) || function (d, b) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2396,2592],"range":[2380,2592],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":1,"label":"typescript-backbone"}');
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[2475,2500],"range":[2461,2500],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":0,"label":"typescript-backbone"}'); this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Todo Model
// ----------
// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
var Todo = (function (_super) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2730,3521],"range":[2712,3521],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":7,"label":"typescript-backbone"}');
    __extends(Todo, _super);
    function Todo() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[2781,2827],"range":[2765,2827],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":2,"label":"typescript-backbone"}');
        _super.apply(this, arguments);
    }
    // Default attributes for the todo.
    Todo.prototype.defaults = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2910,2997],"range":[2898,2997],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":3,"label":"typescript-backbone"}');
        return {
            title: '',
            completed: false
        };
    };
    // Ensure that each todo created has `title`.
    Todo.prototype.initialize = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3093,3202],"range":[3081,3202],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":4,"label":"typescript-backbone"}');
        if (!this.get('title')) {
            this.set({ 'title': this.defaults().title });
        }
    };
    // Toggle the `completed` state of this todo item.
    Todo.prototype.toggle = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3299,3364],"range":[3287,3364],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":5,"label":"typescript-backbone"}');
        this.save({ completed: !this.get('completed') });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo.prototype.clear = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3470,3501],"range":[3458,3501],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":6,"label":"typescript-backbone"}');
        this.destroy();
    };
    return Todo;
})(Backbone.Model);
// Todo Collection
// ---------------
// The collection of todos is backed by *localStorage* instead of a remote
// server.
var TodoList = (function (_super) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3698,4890],"range":[3680,4890],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":14,"label":"typescript-backbone"}');
    __extends(TodoList, _super);
    function TodoList() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[3757,4016],"range":[3737,4016],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":8,"label":"typescript-backbone"}');
        _super.apply(this, arguments);
        // Reference to this collection's model.
        this.model = Todo;
        // Save all of the todo items under the `'todos'` namespace.
        this.localStorage = new Store('todos-typescript-backbone');
    }
    // Filter down the list of all todo items that are completed.
    TodoList.prototype.completed = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4130,4216],"range":[4118,4216],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":10,"label":"typescript-backbone"}');
        return this.filter(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4175,4208],"range":[4159,4208],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":9,"label":"typescript-backbone"}'); return todo.get('completed'); });
    };
    // Filter down the list to only todo items that are still not completed.
    TodoList.prototype.remaining = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4342,4408],"range":[4330,4408],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":11,"label":"typescript-backbone"}');
        return this.without.apply(this, this.completed());
    };
    // We keep the Todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    TodoList.prototype.nextOrder = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4617,4712],"range":[4605,4712],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":12,"label":"typescript-backbone"}');
        if (!length)
            return 1;
        return this.last().get('order') + 1;
    };
    // Todos are sorted by their original insertion order.
    TodoList.prototype.comparator = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4825,4866],"range":[4809,4866],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":13,"label":"typescript-backbone"}');
        return todo.get('order');
    };
    return TodoList;
})(Backbone.Collection);
// Create our global collection of **Todos**.
var Todos = new TodoList();
var taskFilter;
// Todo Item View
// --------------
// The DOM element for a todo item...
var TodoView = (function (_super) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5112,8047],"range":[5094,8047],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":24,"label":"typescript-backbone"}');
    __extends(TodoView, _super);
    function TodoView(options) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[5178,5973],"range":[5151,5973],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":15,"label":"typescript-backbone"}');
        //... is a list tag.
        this.tagName = 'li';
        // The DOM events specific to an item.
        this.events = {
            'click .check': 'toggleDone',
            'dblclick label.todo-content': 'edit',
            'click button.destroy': 'clear',
            'keypress .edit': 'updateOnEnter',
            'keydown .edit': 'revertOnEscape',
            'blur .edit': 'close'
        };
        _super.call(this, options);
        // Cache the template function for a single item.
        this.template = _.template($('#item-template').html());
        _.bindAll(this, 'render', 'close', 'remove', 'toggleVisible');
        this.model.bind('change', this.render);
        this.model.bind('destroy', this.remove);
        this.model.bind('visible', this.toggleVisible);
    }
    // Re-render the contents of the todo item.
    TodoView.prototype.render = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6066,6307],"range":[6054,6307],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":16,"label":"typescript-backbone"}');
        this.$el
            .html(this.template(this.model.toJSON()))
            .toggleClass('completed', this.model.get('completed'));
        this.toggleVisible();
        this.input = this.$('.todo-input');
        return this;
    };
    // Toggle the `completed` state of the model.
    TodoView.prototype.toggleDone = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6407,6443],"range":[6395,6443],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":17,"label":"typescript-backbone"}');
        this.model.toggle();
    };
    TodoView.prototype.toggleVisible = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6496,6723],"range":[6484,6723],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":18,"label":"typescript-backbone"}');
        var completed = this.model.get('completed');
        var hidden = (taskFilter === 'completed' && !completed) ||
            (taskFilter === 'active' && completed);
        this.$el.toggleClass('hidden', hidden);
    };
    // Switch this view into `'editing'` mode, displaying the input field.
    TodoView.prototype.edit = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6842,6915],"range":[6830,6915],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":19,"label":"typescript-backbone"}');
        this.$el.addClass('editing');
        this.input.focus();
    };
    // Close the `'editing'` mode, saving changes to the todo.
    TodoView.prototype.close = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7023,7266],"range":[7011,7266],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":20,"label":"typescript-backbone"}');
        var trimmedValue = this.input.val().trim();
        if (trimmedValue) {
            this.model.save({ title: trimmedValue });
        }
        else {
            this.clear();
        }
        this.$el.removeClass('editing');
    };
    // If you hit `enter`, we're through editing the item.
    TodoView.prototype.updateOnEnter = function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7379,7456],"range":[7366,7456],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":21,"label":"typescript-backbone"}');
        if (e.which === TodoView.ENTER_KEY)
            this.close();
    };
    // If you're pressing `escape` we revert your change by simply leaving
    // the `editing` state.
    TodoView.prototype.revertOnEscape = function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7614,7844],"range":[7601,7844],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":22,"label":"typescript-backbone"}');
        if (e.which === TodoView.ESC_KEY) {
            this.$el.removeClass('editing');
            // Also reset the hidden input back to the original value.
            this.input.val(this.model.get('title'));
        }
    };
    // Remove the item, destroy the model.
    TodoView.prototype.clear = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7932,7967],"range":[7920,7967],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":23,"label":"typescript-backbone"}');
        this.model.clear();
    };
    TodoView.ENTER_KEY = 13;
    TodoView.ESC_KEY = 27;
    return TodoView;
})(Backbone.View);
// Todo Router
// -----------
var TodoRouter = (function (_super) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[8131,8600],"range":[8113,8600],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":27,"label":"typescript-backbone"}');
    __extends(TodoRouter, _super);
    function TodoRouter() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[8194,8326],"range":[8172,8326],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":25,"label":"typescript-backbone"}');
        _super.call(this);
        this.routes = {
            '*filter': 'setFilter'
        };
        this._bindRoutes();
    }
    TodoRouter.prototype.setFilter = function (param) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[8381,8574],"range":[8364,8574],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":26,"label":"typescript-backbone"}');
        if (param === void 0) { param = ''; }
        // Trigger a collection filter event, causing hiding/unhiding
        // of Todo view items
        Todos.trigger('filter', param);
    };
    return TodoRouter;
})(Backbone.Router);
// The Application
// ---------------
// Our overall **AppView** is the top-level piece of UI.
var AppView = (function (_super) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[8748,13013],"range":[8730,13013],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":41,"label":"typescript-backbone"}');
    __extends(AppView, _super);
    function AppView() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[8805,10252],"range":[8786,10252],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":28,"label":"typescript-backbone"}');
        _super.call(this);
        // Delegated events for creating new items, and clearing completed ones.
        this.events = {
            'keypress .new-todo': 'createOnEnter',
            'click .todo-clear button': 'clearCompleted',
            'click .toggle-all': 'toggleAllComplete'
        };
        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        this.setElement($('.todoapp'), true);
        // At initialization we bind to the relevant events on the `Todos`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting todos that might be saved in *localStorage*.
        _.bindAll(this, 'addOne', 'addAll', 'render', 'toggleAllComplete', 'filter');
        this.input = this.$('.new-todo');
        this.allCheckbox = this.$('.toggle-all')[0];
        this.mainElement = this.$('.main')[0];
        this.footerElement = this.$('.footer')[0];
        this.statsTemplate = _.template($('#stats-template').html());
        Todos.bind('add', this.addOne);
        Todos.bind('reset', this.addAll);
        Todos.bind('all', this.render);
        Todos.bind('change:completed', this.filterOne);
        Todos.bind('filter', this.filter);
        Todos.fetch();
        // Initialize the router, showing the selected view
        var todoRouter = new TodoRouter();
        Backbone.history.start();
    }
    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    AppView.prototype.render = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[10407,11212],"range":[10395,11212],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":29,"label":"typescript-backbone"}');
        var completed = Todos.completed().length;
        var remaining = Todos.remaining().length;
        if (Todos.length) {
            this.mainElement.style.display = 'block';
            this.footerElement.style.display = 'block';
            this.$('.todo-stats').html(this.statsTemplate({
                total: Todos.length,
                completed: completed,
                remaining: remaining
            }));
            this.$('.filters li a')
                .removeClass('selected')
                .filter('[href="#/' + (taskFilter || '') + '"]')
                .addClass('selected');
        }
        else {
            this.mainElement.style.display = 'none';
            this.footerElement.style.display = 'none';
        }
        this.allCheckbox.checked = !remaining;
    };
    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    AppView.prototype.addOne = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11378,11490],"range":[11362,11490],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":30,"label":"typescript-backbone"}');
        var view = new TodoView({ model: todo });
        this.$('.todo-list').append(view.render().el);
    };
    // Add all items in the **Todos** collection at once.
    AppView.prototype.addAll = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11593,11633],"range":[11581,11633],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":31,"label":"typescript-backbone"}');
        Todos.each(this.addOne);
    };
    // Filter out completed/remaining tasks
    AppView.prototype.filter = function (criteria) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11730,11794],"range":[11710,11794],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":32,"label":"typescript-backbone"}');
        taskFilter = criteria;
        this.filterAll();
    };
    AppView.prototype.filterOne = function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11846,11886],"range":[11830,11886],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":33,"label":"typescript-backbone"}');
        todo.trigger('visible');
    };
    AppView.prototype.filterAll = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11934,11977],"range":[11922,11977],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":34,"label":"typescript-backbone"}');
        Todos.each(this.filterOne);
    };
    // Generate the attributes for a new Todo item.
    AppView.prototype.newAttributes = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12081,12227],"range":[12069,12227],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":35,"label":"typescript-backbone"}');
        return {
            title: this.input.val().trim(),
            order: Todos.nextOrder(),
            completed: false
        };
    };
    // If you hit return in the main input field, create new **Todo** model,
    // persisting it to *localStorage*.
    AppView.prototype.createOnEnter = function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12397,12567],"range":[12384,12567],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":36,"label":"typescript-backbone"}');
        if (e.which === TodoView.ENTER_KEY && this.input.val().trim()) {
            Todos.create(this.newAttributes());
            this.input.val('');
        }
    };
    // Clear all completed todo items, destroying their models.
    AppView.prototype.clearCompleted = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12684,12790],"range":[12672,12790],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":38,"label":"typescript-backbone"}');
        _.each(Todos.completed(), function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12736,12760],"range":[12720,12760],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":37,"label":"typescript-backbone"}'); return todo.clear(); });
        return false;
    };
    AppView.prototype.toggleAllComplete = function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12846,12990],"range":[12834,12990],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":40,"label":"typescript-backbone"}');
        var completed = this.allCheckbox.checked;
        Todos.each(function (todo) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12933,12982],"range":[12917,12982],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":39,"label":"typescript-backbone"}'); return todo.save({ 'completed': completed }); });
    };
    return AppView;
})(Backbone.View);
// Load the application once the DOM is ready, using `jQuery.ready`:
$(function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[13114,13196],"range":[13102,13196],"file":"todomvc/examples.lacunized.instrumented/typescript-backbone/js/app.js","index":42,"label":"typescript-backbone"}');
    // Finally, we kick things off by creating the **App**.
    new AppView();
});
