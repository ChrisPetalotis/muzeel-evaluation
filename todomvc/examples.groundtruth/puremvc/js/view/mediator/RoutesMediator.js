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


/**
 * @author Cliff Hall
 *
 * @class RoutesMediator
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
		name: 'todomvc.view.mediator.RoutesMediator',
		parent: puremvc.Mediator
	},

	// INSTANCE MEMBERS
	{
		// the router (Flatirion Director)
		router: null,

		// setup the routes when mediator is registered
		onRegister: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[372,860],"range":[361,860],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/mediator/RoutesMediator.js","index":0,"label":"puremvc"}');

			var todoProxy    = this.facade.retrieveProxy( todomvc.model.proxy.TodoProxy.NAME ),
				defaultRoute = this.getRouteForFilter( todoProxy.filter ),
				options      = { resource:this, notfound:this.handleFilterAll },
				routes       = {
					'/':            this.handleFilterAll,
					'/active':      this.handleFilterActive,
					'/completed':   this.handleFilterCompleted
				};

			this.router = new Router( routes ).configure( options );
			this.router.init( defaultRoute );
		},

		getRouteForFilter: function( filter ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[903,1207],"range":[884,1207],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/mediator/RoutesMediator.js","index":1,"label":"puremvc"}');
			var route;
			switch (filter) {
				case todomvc.AppConstants.FILTER_ALL:
					route = '/';
					break;

				case todomvc.AppConstants.FILTER_ACTIVE:
					route = '/active';
					break;

				case todomvc.AppConstants.FILTER_COMPLETED:
					route = '/completed';
					break;
			}
			return route;
		},

		// route handlers
		handleFilterAll: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1261,1378],"range":[1249,1378],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/mediator/RoutesMediator.js","index":2,"label":"puremvc"}');
			this.resource.facade.sendNotification( todomvc.AppConstants.FILTER_TODOS, todomvc.AppConstants.FILTER_ALL );
		},

		handleFilterActive: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1415,1535],"range":[1403,1535],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/mediator/RoutesMediator.js","index":3,"label":"puremvc"}');
			this.resource.facade.sendNotification( todomvc.AppConstants.FILTER_TODOS, todomvc.AppConstants.FILTER_ACTIVE );
		},

		handleFilterCompleted: function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1575,1698],"range":[1563,1698],"file":"todomvc/examples.lacunized.instrumented/puremvc/js/view/mediator/RoutesMediator.js","index":4,"label":"puremvc"}');
			this.resource.facade.sendNotification( todomvc.AppConstants.FILTER_TODOS, todomvc.AppConstants.FILTER_COMPLETED );
		},

	 },

	 // STATIC MEMBERS
	 {
		 NAME: 'RoutesMediator'
	 }
);
