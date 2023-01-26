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

app.footer = function (ctrl) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[79,914],"range":[63,914],"file":"todomvc/examples.lacunized.instrumented/mithril/js/views/footer-view.js","index":0,"label":"mithril"}');
	var amountCompleted = ctrl.amountCompleted();
	var amountActive = ctrl.list.length - amountCompleted;

	return m('footer#footer', [
		m('span#todo-count', [
			m('strong', amountActive), ' item' + (amountActive !== 1 ? 's' : '') + ' left'
		]),
		m('ul#filters', [
			m('li', [
				m('a[href=/]', {
					config: m.route,
					class: ctrl.filter() === '' ? 'selected' : ''
				}, 'All')
			]),
			m('li', [
				m('a[href=/active]', {
					config: m.route,
					class: ctrl.filter() === 'active' ? 'selected' : ''
				}, 'Active')
			]),
			m('li', [
				m('a[href=/completed]', {
					config: m.route,
					class: ctrl.filter() === 'completed' ? 'selected' : ''
				}, 'Completed')
			])
		]), ctrl.amountCompleted() === 0 ? '' : m('button#clear-completed', {
			onclick: ctrl.clearCompleted.bind(ctrl)
		}, 'Clear completed')
	]);
};
