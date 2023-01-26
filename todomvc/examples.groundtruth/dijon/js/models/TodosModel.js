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


/*global dijondemo */
/**
 * @author Camille Reynders
 * Date: 03/02/12
 * Time: 14:39
 */
(function( ns ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107,1873],"range":[92,1873],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":14,"label":"dijon"}');
	'use strict';

	ns.models.TodosModel = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[160,1869],"range":[149,1869],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":13,"label":"dijon"}');
		var _list = [];
		return {
			system: undefined, //inject,
			getTodo: function( id ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[250,297],"range":[235,297],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":0,"label":"dijon"}');
				return _list[ this.getIndex( id ) ];
			},
			getIndex: function( id ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[327,498],"range":[312,498],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":1,"label":"dijon"}');
				var list = _list,
					todo,
					i;

				for ( i in _list ) {
					todo = _list[ i ];
					if ( todo.id === id ) {
						return i;
					}
				}

				return -1;
			},
			notifyOfListUpdate: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[534,634],"range":[523,634],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":2,"label":"dijon"}');
				var list = this.getList();
				this.system.notify( 'TodosModel:todosListUpdated', list );
			},
			setList: function( list ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[665,758],"range":[648,758],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":3,"label":"dijon"}');
				_list = list || [];
				this.system.notify( 'TodosModel:todosListUpdated', list );
			},
			getList: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[783,807],"range":[772,807],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":4,"label":"dijon"}');
				return _list;
			},
			add: function( vo ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[832,891],"range":[817,891],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":5,"label":"dijon"}');
				_list.push( vo );
				this.notifyOfListUpdate();
			},
			toggleDone: function( id ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[923,1033],"range":[908,1033],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":6,"label":"dijon"}');
				var todo = this.getTodo( id );
				todo.completed = !todo.completed;
				this.notifyOfListUpdate();
			},
			setTitle: function( id, title ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1070,1145],"range":[1048,1145],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":7,"label":"dijon"}');
				this.getTodo( id ).title = title;
				this.notifyOfListUpdate();
			},
			remove: function( id ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1173,1254],"range":[1158,1254],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":8,"label":"dijon"}');
				_list.splice( this.getIndex( id ), 1 );
				this.notifyOfListUpdate();
			},
			setDoneForAll: function( completed ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1296,1414],"range":[1274,1414],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":9,"label":"dijon"}');
				var i;
				for ( i in _list ) {
					_list[ i ].completed = completed;
				}
				this.notifyOfListUpdate();
			},
			removeAllDone: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1445,1631],"range":[1434,1631],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":10,"label":"dijon"}');
				var i,
					n = 0;
				for ( i = _list.length - 1 ; i >= n ; i-- ) {
					if ( _list[ i ].completed ) {
						_list.splice( i, 1 );
					}
				}
				this.notifyOfListUpdate();
			},
			getNumTotal: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1660,1691],"range":[1649,1691],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":11,"label":"dijon"}');
				return _list.length;
			},
			getNumActive: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1721,1861],"range":[1710,1861],"file":"todomvc/examples.lacunized.instrumented/dijon/js/models/TodosModel.js","index":12,"label":"dijon"}');
				var count = 0,
					i;
				for ( i in _list ) {
					if ( !_list[ i ].completed ) {
						count++;
					}
				}
				return count;
			}
		};
	};

}( dijondemo ));
