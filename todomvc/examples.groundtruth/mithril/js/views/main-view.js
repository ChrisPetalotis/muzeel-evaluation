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


'use strict';
/*global m */
var app = app || {};

// View utility
app.watchInput = function (onenter, onescape) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[112,343],"range":[83,343],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/main-view.js","index":1,"label":"mithril"}');
	return function (e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[135,340],"range":[122,340],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/main-view.js","index":0,"label":"mithril"}');
		m.redraw.strategy('none');
		if (e.keyCode === app.ENTER_KEY) {
			onenter();
			m.redraw.strategy('diff');
		} else if (e.keyCode === app.ESC_KEY) {
			onescape();
			m.redraw.strategy('diff');
		}
	};
};

app.view = (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[370,2365],"range":[358,2365],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/main-view.js","index":8,"label":"mithril"}');
	var focused = false;

	return function (ctrl) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[419,2363],"range":[403,2363],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/main-view.js","index":7,"label":"mithril"}');
		return [
			m('header#header', [
				m('h1', 'todos'), m('input#new-todo[placeholder="What needs to be done?"]', {
					onkeyup: app.watchInput(ctrl.add.bind(ctrl),
						ctrl.clearTitle.bind(ctrl)),
					value: ctrl.title(),
					oninput: m.withAttr('value', ctrl.title),
					config: function (element) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[728,813],"range":[709,813],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/main-view.js","index":2,"label":"mithril"}');
						if (!focused) {
							element.focus();
							focused = true;
						}
					}
				})
			]),
			m('section#main', {
				style: {
					display: ctrl.list.length ? '' : 'none'
				}
			}, [
				m('input#toggle-all[type=checkbox]', {
					onclick: ctrl.completeAll.bind(ctrl),
					checked: ctrl.allCompleted()
				}),
				m('ul#todo-list', [
					ctrl.list.filter(ctrl.isVisible.bind(ctrl)).map(function (task, index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1151,2293],"range":[1128,2293],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/main-view.js","index":6,"label":"mithril"}');
						return m('li', { class: (function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1196,1360],"range":[1184,1360],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/main-view.js","index":3,"label":"mithril"}');
							var classes = '';
							classes += task.completed() ? 'completed' : '';
							classes += task.editing() ? ' editing' : '';
							return classes;
						})(),
						key: task.key
						}, [
							m('.view', [
								m('input.toggle[type=checkbox]', {
									onclick: m.withAttr('checked', ctrl.complete.bind(ctrl, task)),
									checked: task.completed()
								}),
								m('label', {
									ondblclick: ctrl.edit.bind(ctrl, task)
								}, task.title()),
								m('button.destroy', {
									onclick: ctrl.remove.bind(ctrl, index)
								})
							]), m('input.edit', {
								value: task.title(),
								onkeyup: app.watchInput(
									ctrl.doneEditing.bind(ctrl, task, index),
									ctrl.cancelEditing.bind(ctrl, task)
								),
								oninput: m.withAttr('value', function (value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2015,2090],"range":[1998,2090],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/main-view.js","index":4,"label":"mithril"}');
									m.redraw.strategy('none');
									task.title(value);
								}),
								config: function (element) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2128,2208],"range":[2109,2208],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/main-view.js","index":5,"label":"mithril"}');
									if (task.editing()) {
										element.focus();
									}
								},
								onblur: ctrl.doneEditing.bind(ctrl, task, index)
							})
						]);
					})
				])
			]), ctrl.list.length === 0 ? '' : app.footer(ctrl)
		];
	}
})();
