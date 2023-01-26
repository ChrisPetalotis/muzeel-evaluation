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


(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12,411373],"range":[1,411373],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":852,"label":"lavaca_require"}');
//just a shim for cordova, because the actual dependency will differ between
//Android and iOS
define('cordova',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[140,168],"range":[129,168],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":0,"label":"lavaca_require"}');
  return window.cordova;
});

define('lavaca/util/extend',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214,2325],"range":[203,2325],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":6,"label":"lavaca_require"}');
  /**
   * Establishes inheritance between types. After a type is extended, it receives its own static
   * convenience method, extend(TSub, overrides).
   * @class lavaca.util.extend
   */
   /**
   * Establishes inheritance between types. After a type is extended, it receives its own static
   * convenience method, extend(TSub, overrides).
   * @method extend
   * @static
   *
   */
   /**
   * Establishes inheritance between types. After a type is extended, it receives its own static
   * convenience method, extend(TSub, overrides).
   * @method extend
   * @static
   * @param {Function} TSub  The child type which will inherit from superType
   * @param {Object} overrides  A hash of key-value pairs that will be added to the subType
   * @return {Function}  The subtype
   *
   */
   /**
   * Establishes inheritance between types. After a type is extended, it receives its own static
   * convenience method, extend(TSub, overrides).
   * @method extend
   * @static
   * @param {Function} TSuper  The base type to extend
   * @param {Function} TSub  The child type which will inherit from superType
   * @param {Object} overrides  A hash of key-value pairs that will be added to the subType
   * @return {Function}  The subtype
   */
  var extend = function(TSuper, TSub, overrides) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1513,2303],"range":[1479,2303],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":5,"label":"lavaca_require"}');
    if (typeof TSuper === 'object') {
      overrides = TSuper;
      TSuper = Object;
      TSub = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1626,1652],"range":[1615,1652],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":1,"label":"lavaca_require"}');
        // Empty
      };
    } else if (typeof TSub === 'object') {
      overrides = TSub;
      TSub = TSuper;
      TSuper = Object;
    }
    function ctor() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[1791,1813],"range":[1775,1813],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":2,"label":"lavaca_require"}');
      // Empty
    }
    ctor.prototype = TSuper.prototype;
    TSub.prototype = new ctor;
    TSub.prototype.constructor = TSub;
    if (overrides) {
      for (var name in overrides) {
        TSub.prototype[name] = overrides[name];
      }
    }
    TSub.extend = function(T, overrides) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2083,2281],"range":[2060,2281],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":4,"label":"lavaca_require"}');
      if (typeof T === 'object') {
        overrides = T;
        T = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2166,2216],"range":[2155,2216],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":3,"label":"lavaca_require"}');
          TSub.apply(this, arguments);
        };
      }
      extend(TSub, T, overrides);
      return T;
    };
    return TSub;
  };

  return extend;

});

define('lavaca/util/Promise',['require','./extend'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2399,9096],"range":[2381,9096],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":23,"label":"lavaca_require"}');

  var extend = require('./extend');

  /**
   * Utility type for asynchronous programming
   * @class lavaca.util.Promise
   *
   * @constructor
   *
   * @param {Object} thisp  What the "this" keyword resolves to in callbacks
   */
  var Promise = extend(function(thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[2674,3124],"range":[2658,3124],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":7,"label":"lavaca_require"}');
    /**
     * What the "this" keyword resolves to in callbacks
     * @property {Object} thisp
     * @default null
     */
    this.thisp = thisp;
    /**
     * Pending handlers for the success event
     * @property {Array} resolvedQueue
     * @default []
     */
    this.resolvedQueue = [];
    /**
     * Pending handlers for the error event
     * @property {Array} rejectedQueue
     * @default []
     */
    this.rejectedQueue = [];
  }, {
    /**
     * Flag indicating that the promise completed successfully
     * @property {Boolean} succeeded
     * @default false
     */
    succeeded: false,
    /**
     * Flag indicating that the promise failed to complete
     * @property {Boolean} failed
     * @default false
     */
    failed: false,
    /**
     * Queues a callback to be executed when the promise succeeds
     * @method success
     *
     * @param {Function} callback  The callback to execute
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    success: function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[3707,3921],"range":[3688,3921],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":8,"label":"lavaca_require"}');
      if (callback) {
        if (this.succeeded) {
          callback.apply(this.thisp, this.resolveArgs);
        } else {
          this.resolvedQueue.push(callback);
        }
      }
      return this;
    },
    /**
     * Queues a callback to be executed when the promise fails
     * @method error
     *
     * @param {Function} callback  The callback to execute
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    error: function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4185,4395],"range":[4166,4395],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":9,"label":"lavaca_require"}');
      if (callback) {
        if (this.failed) {
          callback.apply(this.thisp, this.rejectArgs);
        } else {
          this.rejectedQueue.push(callback);
        }
      }
      return this;
    },
    /**
     * Queues a callback to be executed when the promise is either rejected or resolved
     * @method always
     *
     * @param {Function} callback  The callback to execute
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    always: function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[4686,4737],"range":[4667,4737],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":10,"label":"lavaca_require"}');
      return this.then(callback, callback);
    },
    /**
     * Queues up callbacks after the promise is completed
     * @method then
     *
     * @param {Function} resolved  A callback to execute when the operation succeeds
     * @param {Function} rejected  A callback to execute when the operation fails
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    then: function(resolved, rejected) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5112,5190],"range":[5083,5190],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":11,"label":"lavaca_require"}');
      return this
        .success(resolved)
        .error(rejected);
    },
    /**
     * Resolves the promise successfully
     * @method resolve
     *
     * @params {Object} value  Values to pass to the queued success callbacks
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    resolve: function(/* value1, value2, valueN */) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[5475,5806],"range":[5436,5806],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":12,"label":"lavaca_require"}');
      if (!this.succeeded && !this.failed) {
        this.succeeded = true;
        this.resolveArgs = [].slice.call(arguments, 0);
        var i = -1,
            callback;
        while (!!(callback = this.resolvedQueue[++i])) {
          callback.apply(this.thisp, this.resolveArgs);
        }
      }
      return this;
    },
    /**
     * Resolves the promise as a failure
     * @method reject
     *
     * @params {String} err  Failure messages
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    reject: function(/* err1, err2, errN */) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6051,6377],"range":[6018,6377],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":13,"label":"lavaca_require"}');
      if (!this.succeeded && !this.failed) {
        this.failed = true;
        this.rejectArgs = [].slice.call(arguments, 0);
        var i = -1,
            callback;
        while (!!(callback = this.rejectedQueue[++i])) {
          callback.apply(this.thisp, this.rejectArgs);
        }
      }
      return this;
    },
    /**
     * Queues this promise to be resolved only after several other promises
     *   have been successfully resolved, or immediately rejected when one
     *   of those promises is rejected
     * @method when
     *
     * @params {Lavaca.util.Promise}  promise  One or more other promises
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    when: function(/* promise1, promise2, promiseN */) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[6807,7395],"range":[6762,7395],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":17,"label":"lavaca_require"}');
      var self = this,
          values = [],
          i = -1,
          pendingPromiseCount = arguments.length,
          promise;
      while (!!(promise = arguments[++i])) {
        (function(index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7012,7335],"range":[6996,7335],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":16,"label":"lavaca_require"}');
          promise
            .success(function(v) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7065,7226],"range":[7053,7226],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":14,"label":"lavaca_require"}');
              values[index] = v;
              if (--pendingPromiseCount < 1) {
                self.resolve.apply(self, values);
              }
            })
            .error(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7258,7323],"range":[7247,7323],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":15,"label":"lavaca_require"}');
              self.reject.apply(self, arguments);
            });
        })(i);
      }
      promise = null;
      return this;
    },
    /**
     * Produces a callback that resolves the promise with any number of arguments
     * @method resolver
     * @return {Function}  The callback
     */
    resolver: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7584,7694],"range":[7573,7694],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":19,"label":"lavaca_require"}');
      var self = this;
      return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7633,7687],"range":[7622,7687],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":18,"label":"lavaca_require"}');
        self.resolve.apply(self, arguments);
      };
    },
    /**
     * Produces a callback that rejects the promise with any number of arguments
     * @method rejector
     *
     * @return {Function}  The callback
     */
    rejector: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7889,7998],"range":[7878,7998],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":21,"label":"lavaca_require"}');
      var self = this;
      return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[7938,7991],"range":[7927,7991],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":20,"label":"lavaca_require"}');
        self.reject.apply(self, arguments);
      };
    }
  });
  /**
   *
   * Creates a promise to be resolved only after several other promises
   *   have been successfully resolved, or immediately rejected when one
   *   of those promises is rejected
   * @method when
   * @static
   * @params {Lavaca.util.Promise}  promise  One or more other promises
   * @return {Lavaca.util.Promise}  The new promise
   */
   /**
   * Creates a promise to be resolved only after several other promises
   *   have been successfully resolved, or immediately rejected when one
   *   of those promises is rejected
   * @method when
   * @static
   * @param {Object} thisp  The execution context of the promise
   * @params {Lavaca.util.Promise}  promise  One or more other promises
   * @return {Lavaca.util.Promise}  The new promise
   */
  Promise.when = function(thisp/*, promise1, promise2, promiseN */) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[8842,9073],"range":[8791,9073],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":22,"label":"lavaca_require"}');
    var thispIsPromise = thisp instanceof Promise,
        promise = new Promise(thispIsPromise ? window : thisp),
        args = [].slice.call(arguments, thispIsPromise ? 0 : 1);
    return promise.when.apply(promise, args);
  };

  return Promise;

});

define('lavaca/env/Device',['require','$','cordova','lavaca/util/Promise'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9193,11592],"range":[9175,11592],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":30,"label":"lavaca_require"}');

  var $ = require('$'),
      Cordova = require('cordova'),
      Promise = require('lavaca/util/Promise');

  /**
   * Static utility type for working with Cordova (aka PhoneGap) and other non-standard native functionality
   * @class lavaca.env.Device
   */

  var _initHasRun = false,
      _onInit = [];

  var Device = {};

  /**
   * Indicates whether or not the app is being run through Cordova
   * @method isCordova
   * @static
   *
   * @return {Boolean}  True if app is being run through Cordova
   */
  Device.isCordova = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[9742,9769],"range":[9731,9769],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":24,"label":"lavaca_require"}');
    return !!Cordova;
  };
  /**
   * Registers a plugin to be initialized when the device is ready
   * @method register
   * @static
   *
   * @param {String} name
   * @param {Function} TPlugin  The plugin to register. The plugin should be a constructor function
   */
  Device.register = function(name, TPlugin) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[10060,10294],"range":[10036,10294],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":26,"label":"lavaca_require"}');
    function install() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[10085,10202],"range":[10066,10202],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":25,"label":"lavaca_require"}');
      if (!window.plugins) {
        window.plugins = {};
      }
      window.plugins[name] = new TPlugin();
    }
    if (_initHasRun) {
      install();
    } else {
      _onInit.push(install);
    }
  };

  /**
   * Executes a Cordova command, if Cordova is available
   * @method exec
   * @static
   *
   * @param {String} className  The name of the native class
   * @param {String} methodName  The name of the class method to call
   * @param {Array} args  Arguments to pass the method
   * @return {Lavaca.util.Promise}  A promise
   */
  Device.exec = function(className, methodName, args) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[10688,10903],"range":[10650,10903],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":27,"label":"lavaca_require"}');
    var promise = new Promise(window);
    if (Cordova) {
      Cordova.exec(promise.resolver(), promise.rejector(), className, methodName, args);
    } else {
      promise.reject();
    }
    return promise;
  };

  /**
   * Executes a callback when the device is ready to be used
   * @method init
   * @static
   *
   * @param {Function} callback  The handler to execute when the device is ready
   */
  Device.init = function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11131,11391],"range":[11112,11391],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":28,"label":"lavaca_require"}');
    if (!Cordova) {
      $(document).ready(callback);
    }
    else if (document.addEventListener) {
      // Android fix
      document.addEventListener('deviceready', callback, false);
    } else {
      $(document).on('deviceready', callback);
    }
  };

  $(document).ready(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11425,11569],"range":[11414,11569],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":29,"label":"lavaca_require"}');
    var i = -1,
        installPlugin;
    while (!!(installPlugin = _onInit[++i])) {
      installPlugin();
    }
    _initHasRun = true;
  });

  return Device;

});

define('lavaca/util/Disposable',['require','./extend'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[11669,12668],"range":[11651,12668],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":33,"label":"lavaca_require"}');

  var extend = require('./extend');

  function _disposeOf(obj) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[11736,12318],"range":[11711,12318],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":31,"label":"lavaca_require"}');
    var n,
        o,
        i;
    for (n in obj) {
      if (obj.hasOwnProperty(n)) {
        o = obj[n];
          if (o) {
            if (typeof o === 'object' && typeof o.dispose === 'function') {
              o.dispose();
            } else if (o instanceof Array) {
              for (i = o.length - 1; i > -1; i--) {
                  if (o[i] && typeof o[i].dispose === 'function') {
                    o[i].dispose();
                  } else {
                    _disposeOf(o[i]);
                  }
                }
            }
          }
        }
    }
  }

  /**
   * Abstract type for types that need to ready themselves for GC
   * @class lavaca.util.Disposable
   * @constructor
   *
   */
  var Disposable = extend({
    /**
     * Readies the object to be garbage collected
     * @method dispose
     *
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12604,12637],"range":[12593,12637],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":32,"label":"lavaca_require"}');
        _disposeOf(this);
    }
  });

  return Disposable;

});
define('mout/object/hasOwn',[],function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12714,12896],"range":[12702,12896],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":35,"label":"lavaca_require"}');

    /**
     * Safer Object.hasOwnProperty
     */
     function hasOwn(obj, prop){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[12799,12872],"range":[12773,12872],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":34,"label":"lavaca_require"}');
         return Object.prototype.hasOwnProperty.call(obj, prop);
     }

     return hasOwn;

});

define('mout/object/forIn',[],function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12942,14598],"range":[12930,14598],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":39,"label":"lavaca_require"}');

    var _hasDontEnumBug,
        _dontEnums;

    function checkDontEnum(){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[13019,13417],"range":[12995,13417],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":36,"label":"lavaca_require"}');
        _dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];

        _hasDontEnumBug = true;

        for (var key in {'toString': null}) {
            _hasDontEnumBug = false;
        }
    }

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forIn(obj, fn, thisObj){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[13676,14474],"range":[13644,14474],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":37,"label":"lavaca_require"}');
        var key, i = 0;
        // no need to check if argument is a real object that way we can use
        // it for arrays, functions, date, etc.

        //post-pone check till needed
        if (_hasDontEnumBug == null) checkDontEnum();

        for (key in obj) {
            if (exec(fn, obj, key, thisObj) === false) {
                break;
            }
        }

        if (_hasDontEnumBug) {
            while (key = _dontEnums[i++]) {
                // since we aren't using hasOwn check we need to make sure the
                // property was overwritten
                if (obj[key] !== Object.prototype[key]) {
                    if (exec(fn, obj, key, thisObj) === false) {
                        break;
                    }
                }
            }
        }
    }

    function exec(fn, obj, key, thisObj){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[14516,14576],"range":[14480,14576],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":38,"label":"lavaca_require"}');
        return fn.call(thisObj, obj[key], key, obj);
    }

    return forIn;

});

define('mout/object/forOwn',['./hasOwn', './forIn'], function (hasOwn, forIn) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[14680,15133],"range":[14655,15133],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":42,"label":"lavaca_require"}');

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forOwn(obj, fn, thisObj){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[14941,15110],"range":[14908,15110],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":41,"label":"lavaca_require"}');
        forIn(obj, function(val, key){instrumentation_log('{"type":"FunctionExpression","bodyRange":[14980,15102],"range":[14962,15102],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":40,"label":"lavaca_require"}');
            if (hasOwn(obj, key)) {
                return fn.call(thisObj, obj[key], key, obj);
            }
        });
    }

    return forOwn;

});

define('mout/lang/isPlainObject',[],function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[15185,15453],"range":[15173,15453],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":44,"label":"lavaca_require"}');

    /**
     * Checks if the value is created by the `Object` constructor.
     */
    function isPlainObject(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[15305,15423],"range":[15275,15423],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":43,"label":"lavaca_require"}');
        return (!!value
            && typeof value === 'object'
            && value.constructor === Object);
    }

    return isPlainObject;

});

define('mout/object/deepMixIn',['./forOwn', '../lang/isPlainObject'], function (forOwn, isPlainObject) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[15560,16222],"range":[15527,16222],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":47,"label":"lavaca_require"}');

    /**
     * Mixes objects into the target object, recursively mixing existing child
     * objects.
     */
    function deepMixIn(target, objects) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[15714,15966],"range":[15678,15966],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":45,"label":"lavaca_require"}');
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n){
            obj = arguments[i];
            if (obj) {
                forOwn(obj, copyProp, target);
            }
        }

        return target;
    }

    function copyProp(val, key) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[16000,16196],"range":[15972,16196],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":46,"label":"lavaca_require"}');
        var existing = this[key];
        if (isPlainObject(val) && isPlainObject(existing)) {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    return deepMixIn;

});

define('lavaca/events/EventDispatcher',['require','lavaca/util/Disposable','mout/object/deepMixIn'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[16344,21497],"range":[16326,21497],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":52,"label":"lavaca_require"}');

  var Disposable = require('lavaca/util/Disposable'),
      deepMixIn = require('mout/object/deepMixIn');

  /**
   * Basic event dispatcher type
   * @class lavaca.events.EventDispatcher
   * @extends lavaca.util.Disposable
   * @constructor
   *
   */
  var EventDispatcher = Disposable.extend({
    /**
     * When true, do not fire events
     * @property suppressEvents
     * @type Boolean
     * @default false
     *
     */
    suppressEvents: false,
    /**
     * Bind an event handler to this object
     * @method on
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function to execute when the event occurs
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Bind an event handler to this object
     * @method on
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function to execute when the event occurs
     * @param {Object} thisp  The context of the handler
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    on: function(type, callback, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[17508,17701],"range":[17476,17701],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":48,"label":"lavaca_require"}');
      var calls = this.callbacks || (this.callbacks = {}),
          list = calls[type] || (calls[type] = []);
      list[list.length] = {fn: callback, thisp: thisp};
      return this;
    },
    /**
     * Unbinds all event handler from this object
     * @method off
     *
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Unbinds all event handlers for an event
     * @method off
     *
     * @param {String} type  The name of the event
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Unbinds a specific event handler
     * @method off
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function handling the event
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Unbinds a specific event handler
     * @method off
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function handling the event
     * @param {Object} thisp  The context of the handler
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    off: function(type, callback, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[18773,19847],"range":[18741,19847],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":49,"label":"lavaca_require"}');
      var calls = this.callbacks,
          list,
          handler,
          i = -1,
          newList,
          isCallback,
          isThisp;
      if (!type) {
        delete this.callbacks;
      } else if (calls) {
        if (!callback) {
          delete calls[type];
        } else {
          list = calls[type];
          if (list) {
            newList = calls[type] = [];
            while (!!(handler = list[++i])) {
              isCallback = handler.fn === callback ||
                           handler.fn.fn === callback ||
                           (handler.fn.guid && handler.fn.guid === callback.guid) || // Check if is jQuery proxy of callback
                           (handler.fn._zid && handler.fn._zid === callback._zid); // Check if is Zepto proxy of callback
              isThisp = thisp && (handler.thisp === thisp || handler.fn.thisp === thisp);
              if (!isCallback || (thisp && !isThisp)) {
                newList[newList.length] = handler;
              }
            }
          }
        }
      }
      return this;
    },
    /**
     * Dispatches an event
     * @method trigger
     *
     * @param {String} type  The type of event to dispatch
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Dispactches an event with additional parameters
     * @method trigger
     *
     * @param {String} type  The type of event to dispatch
     * @param {Object} params  Additional data points to add to the event
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    trigger: function(type, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[20421,20789],"range":[20398,20789],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":50,"label":"lavaca_require"}');
      if (!this.suppressEvents && this.callbacks) {
        var list = this.callbacks[type],
            event = this.createEvent(type, params),
            i = -1,
            handler;
        if (list) {
          while (!!(handler = list[++i])) {
            handler.fn.apply(handler.thisp || this, [event]);
          }
        }
      }
      return this;
    },
    /**
     * Creates an event object
     * @method createEvent
     *
     * @param {String} type  The type of event to create
     * @return {Object}  The event object
     */
     /**
     * Creates an event object with additional params
     * @method createEvent
     *
     * @param {String} type  The type of event to create
     * @param {Object} params  Additional data points to add to the event
     * @return {Object}  The event object
     */
    createEvent: function(type, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[21289,21461],"range":[21266,21461],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":51,"label":"lavaca_require"}');
      return deepMixIn({}, params || {}, {
        type: type,
        target: params && params.target ? params.target : this,
        currentTarget: this
      });
    }
  });

  return EventDispatcher;

});

define('lavaca/env/ChildBrowser',['require','lavaca/env/Device','lavaca/events/EventDispatcher','lavaca/util/Promise'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[21638,22949],"range":[21620,22949],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":56,"label":"lavaca_require"}');

  var Device = require('lavaca/env/Device'),
      EventDispatcher = require('lavaca/events/EventDispatcher'),
      Promise = require('lavaca/util/Promise');

  /**
   * A sub-browser management utility (also accessible via window.plugins.childBrowser)
   * @class lavaca.env.ChildBrowser
   * @extends Lavaca.events.EventDispatcher
   *
   * @event open
   * @event close
   * @event change
   *
   * @constructor
   */
  var ChildBrowser = EventDispatcher.extend({
    /**
     * Opens a web page in the child browser (or navigates to it)
     * @method showWebPage
     *
     * @param {String} loc  The URL to open
     * @return {Lavaca.util.Promise}  A promise
     */
    showWebPage: function(loc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[22348,22642],"range":[22334,22642],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":54,"label":"lavaca_require"}');
      if (Device.isCordova()) {
        return Device
          .exec('ChildBrowser', 'showWebPage', [loc])
          .error(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[22486,22539],"range":[22475,22539],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":53,"label":"lavaca_require"}');
            window.location.href = loc;
          });
      } else {
        window.open(loc);
        return new Promise(window).resolve();
      }
    },
    /**
     * Closes the child browser, if it's open
     * @method close
     *
     * @return {Lavaca.util.Promise}  A promise
     */
    close: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[22804,22866],"range":[22793,22866],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":55,"label":"lavaca_require"}');
      return Device.exec('ChildBrowser', 'close', []);
    }
  });

  Device.register('childBrowser', ChildBrowser);

  return ChildBrowser;

});

define('lavaca/env/Detection',['require','$'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[23017,25809],"range":[22999,25809],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":60,"label":"lavaca_require"}');
  var $ = require('$');
  var Detection = {};
  Detection.agent = navigator.userAgent.toLowerCase();
  Detection.scrWidth = screen.width;
  Detection.scrHeight = screen.height;
  Detection.viewportWidth = window.innerWidth;
  Detection.viewportHeight = window.innerHeight;
  Detection.elemWidth = document.documentElement.clientWidth;
  Detection.elemHeight = document.documentElement.clientHeight;
  Detection.otherBrowser = (Detection.agent.search(/series60/i) > -1) || (Detection.agent.search(/symbian/i) > -1) || (Detection.agent.search(/windows\sce/i) > -1) || (Detection.agent.search(/blackberry/i) > -1);
  Detection.mobileOS = typeof orientation !== 'undefined';
  Detection.touchOS = 'ontouchstart' in document.documentElement;
  Detection.blackberry = Detection.agent.search(/blackberry/i) > -1;
  Detection.ipad = Detection.agent.search(/ipad/i) > -1;
  Detection.ipod = Detection.agent.search(/ipod/i) > -1;
  Detection.iphone = Detection.agent.search(/iphone/i) > -1;
  Detection.palm = Detection.agent.search(/palm/i) > -1;
  Detection.symbian = Detection.agent.search(/symbian/i) > -1;
  Detection.iOS = Detection.iphone || Detection.ipod || Detection.ipad;
  Detection.iOS5 = Detection.iOS && Detection.agent.search(/os 5_/i) > 0;
  Detection.iOSChrome = Detection.iOS && Detection.agent.search(/CriOS/i) > 0;
  Detection.android = (Detection.agent.search(/android/i) > -1) || (!Detection.iOS && !Detection.otherBrowser && Detection.touchOS && Detection.mobileOS);
  Detection.android2 = Detection.android && (Detection.agent.search(/android\s2/i) > -1);
  Detection.isMobile = Detection.android || Detection.iOS || Detection.mobileOS || Detection.touchOS;
  Detection.android23AndBelow = (function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[24736,25023],"range":[24725,25023],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":57,"label":"lavaca_require"}');
    var matches = Detection.agent.match(/android\s(\d)\.(\d)/i);
    var vi, vd;
    if (Array.isArray(matches) && matches.length === 3) {
      vi = parseInt(matches[1], 10);
      vd = parseInt(matches[2], 10);
      return (vi === 2 && vd < 3) || vi < 2;
    }
    return false;
  }());
  Detection.iOS4AndBelow = (function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[25067,25277],"range":[25056,25277],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":58,"label":"lavaca_require"}');
    var matches = Detection.agent.match(/os\s(\d)_/i);
    var v;
    if (Array.isArray(matches) && matches.length === 2) {
      v = parseInt(matches[1], 10);
      return v <= 4;
    }
    return false;
  }());
  Detection.addCustomDetection = function(condition, feature, selector) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[25354,25735],"range":[25315,25735],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":59,"label":"lavaca_require"}');
    var el;
    if (Detection.hasOwnProperty(feature)) {
      throw Error('Namespace "' + feature + '" is already taken by Detection module');
    }
    Detection[feature] = condition;
    if (selector !== null) {
      el = selector ? $(selector) : $(document.documentElement);
      el.toggleClass(feature, typeof condition === 'function' ? condition() : condition);
    }
  };
  Detection.animationEnabled = !Detection.android;
  return Detection;
});
define('lavaca/env/Device',['require','$','cordova','lavaca/util/Promise'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[25905,28304],"range":[25887,28304],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":67,"label":"lavaca_require"}');

  var $ = require('$'),
      Cordova = require('cordova'),
      Promise = require('lavaca/util/Promise');

  /**
   * Static utility type for working with Cordova (aka PhoneGap) and other non-standard native functionality
   * @class lavaca.env.Device
   */

  var _initHasRun = false,
      _onInit = [];

  var Device = {};

  /**
   * Indicates whether or not the app is being run through Cordova
   * @method isCordova
   * @static
   *
   * @return {Boolean}  True if app is being run through Cordova
   */
  Device.isCordova = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[26454,26481],"range":[26443,26481],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":61,"label":"lavaca_require"}');
    return !!Cordova;
  };
  /**
   * Registers a plugin to be initialized when the device is ready
   * @method register
   * @static
   *
   * @param {String} name
   * @param {Function} TPlugin  The plugin to register. The plugin should be a constructor function
   */
  Device.register = function(name, TPlugin) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[26772,27006],"range":[26748,27006],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":63,"label":"lavaca_require"}');
    function install() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[26797,26914],"range":[26778,26914],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":62,"label":"lavaca_require"}');
      if (!window.plugins) {
        window.plugins = {};
      }
      window.plugins[name] = new TPlugin();
    }
    if (_initHasRun) {
      install();
    } else {
      _onInit.push(install);
    }
  };

  /**
   * Executes a Cordova command, if Cordova is available
   * @method exec
   * @static
   *
   * @param {String} className  The name of the native class
   * @param {String} methodName  The name of the class method to call
   * @param {Array} args  Arguments to pass the method
   * @return {Lavaca.util.Promise}  A promise
   */
  Device.exec = function(className, methodName, args) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[27400,27615],"range":[27362,27615],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":64,"label":"lavaca_require"}');
    var promise = new Promise(window);
    if (Cordova) {
      Cordova.exec(promise.resolver(), promise.rejector(), className, methodName, args);
    } else {
      promise.reject();
    }
    return promise;
  };

  /**
   * Executes a callback when the device is ready to be used
   * @method init
   * @static
   *
   * @param {Function} callback  The handler to execute when the device is ready
   */
  Device.init = function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[27843,28103],"range":[27824,28103],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":65,"label":"lavaca_require"}');
    if (!Cordova) {
      $(document).ready(callback);
    }
    else if (document.addEventListener) {
      // Android fix
      document.addEventListener('deviceready', callback, false);
    } else {
      $(document).on('deviceready', callback);
    }
  };

  $(document).ready(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[28137,28281],"range":[28126,28281],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":66,"label":"lavaca_require"}');
    var i = -1,
        installPlugin;
    while (!!(installPlugin = _onInit[++i])) {
      installPlugin();
    }
    _initHasRun = true;
  });

  return Device;

});

define('lavaca/events/EventDispatcher',['require','lavaca/util/Disposable','mout/object/deepMixIn'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[28426,33579],"range":[28408,33579],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":72,"label":"lavaca_require"}');

  var Disposable = require('lavaca/util/Disposable'),
      deepMixIn = require('mout/object/deepMixIn');

  /**
   * Basic event dispatcher type
   * @class lavaca.events.EventDispatcher
   * @extends lavaca.util.Disposable
   * @constructor
   *
   */
  var EventDispatcher = Disposable.extend({
    /**
     * When true, do not fire events
     * @property suppressEvents
     * @type Boolean
     * @default false
     *
     */
    suppressEvents: false,
    /**
     * Bind an event handler to this object
     * @method on
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function to execute when the event occurs
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Bind an event handler to this object
     * @method on
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function to execute when the event occurs
     * @param {Object} thisp  The context of the handler
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    on: function(type, callback, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[29590,29783],"range":[29558,29783],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":68,"label":"lavaca_require"}');
      var calls = this.callbacks || (this.callbacks = {}),
          list = calls[type] || (calls[type] = []);
      list[list.length] = {fn: callback, thisp: thisp};
      return this;
    },
    /**
     * Unbinds all event handler from this object
     * @method off
     *
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Unbinds all event handlers for an event
     * @method off
     *
     * @param {String} type  The name of the event
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Unbinds a specific event handler
     * @method off
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function handling the event
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Unbinds a specific event handler
     * @method off
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function handling the event
     * @param {Object} thisp  The context of the handler
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    off: function(type, callback, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[30855,31929],"range":[30823,31929],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":69,"label":"lavaca_require"}');
      var calls = this.callbacks,
          list,
          handler,
          i = -1,
          newList,
          isCallback,
          isThisp;
      if (!type) {
        delete this.callbacks;
      } else if (calls) {
        if (!callback) {
          delete calls[type];
        } else {
          list = calls[type];
          if (list) {
            newList = calls[type] = [];
            while (!!(handler = list[++i])) {
              isCallback = handler.fn === callback ||
                           handler.fn.fn === callback ||
                           (handler.fn.guid && handler.fn.guid === callback.guid) || // Check if is jQuery proxy of callback
                           (handler.fn._zid && handler.fn._zid === callback._zid); // Check if is Zepto proxy of callback
              isThisp = thisp && (handler.thisp === thisp || handler.fn.thisp === thisp);
              if (!isCallback || (thisp && !isThisp)) {
                newList[newList.length] = handler;
              }
            }
          }
        }
      }
      return this;
    },
    /**
     * Dispatches an event
     * @method trigger
     *
     * @param {String} type  The type of event to dispatch
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Dispactches an event with additional parameters
     * @method trigger
     *
     * @param {String} type  The type of event to dispatch
     * @param {Object} params  Additional data points to add to the event
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    trigger: function(type, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[32503,32871],"range":[32480,32871],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":70,"label":"lavaca_require"}');
      if (!this.suppressEvents && this.callbacks) {
        var list = this.callbacks[type],
            event = this.createEvent(type, params),
            i = -1,
            handler;
        if (list) {
          while (!!(handler = list[++i])) {
            handler.fn.apply(handler.thisp || this, [event]);
          }
        }
      }
      return this;
    },
    /**
     * Creates an event object
     * @method createEvent
     *
     * @param {String} type  The type of event to create
     * @return {Object}  The event object
     */
     /**
     * Creates an event object with additional params
     * @method createEvent
     *
     * @param {String} type  The type of event to create
     * @param {Object} params  Additional data points to add to the event
     * @return {Object}  The event object
     */
    createEvent: function(type, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[33371,33543],"range":[33348,33543],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":71,"label":"lavaca_require"}');
      return deepMixIn({}, params || {}, {
        type: type,
        target: params && params.target ? params.target : this,
        currentTarget: this
      });
    }
  });

  return EventDispatcher;

});

define('lavaca/fx/Transform',['require','$'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[33646,47599],"range":[33628,47599],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":86,"label":"lavaca_require"}');

  var $ = require('$');

  var _props = {
        transform: 'transform',
        webkitTransform: '-webkit-transform',
        MozTransform: '-moz-transform',
        OTransform: '-o-transform',
        MSTransform: '-ms-transform'
      },
      _prop,
      _cssProp,
      _3d = false,
      UNDEFINED;

  var Transform = {};

  (function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[33994,34331],"range":[33983,34331],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":73,"label":"lavaca_require"}');
    var style = document.createElement('div').style,
        s;
    for (s in _props) {
      if (s in style) {
        _prop = s;
        _cssProp = _props[s];
        style[s] = 'translate3d(0,0,0)';
        _3d = style[s].indexOf('translate3d') > -1 && navigator.userAgent.indexOf('Android') === -1;
        break;
      }
    }
  })();

  function _isUndefined(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[34368,34405],"range":[34339,34405],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":74,"label":"lavaca_require"}');
    return value === UNDEFINED;
  }

  function _toOriginUnit(v) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[34435,34494],"range":[34409,34494],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":75,"label":"lavaca_require"}');
    return typeof v === 'number' ? v * 100 + '%' : v;
  }

  function _scrubRotateValue(v) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[34528,34583],"range":[34498,34583],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":76,"label":"lavaca_require"}');
    return typeof v === 'number' ? v + 'deg' : v;
  }

  function _scrubTranslateValue(v) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[34620,34674],"range":[34587,34674],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":77,"label":"lavaca_require"}');
    return typeof v === 'number' ? v + 'px' : v;
  }

  function _scrubScaleValue(v) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[34707,34764],"range":[34678,34764],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":78,"label":"lavaca_require"}');
    return typeof v === 'number' ? v + ',' + v : v;
  }

  function _scrubTransformValue(prop, value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[34811,35740],"range":[34768,35740],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":79,"label":"lavaca_require"}');
    var isRotate = prop.indexOf('rotate') === 0,
        isScale = prop === 'scale',
        isTranslate = prop.indexOf('translate') === 0,
        //isAxisSpecific = /(X|Y|Z)$/.test(prop),
        p,
        css = [];
    if (typeof value === 'object') {
      for (p in value) {
        css.push(prop
          + p.toUpperCase()
          + '('
          + (isTranslate
              ? _scrubTranslateValue(value[p])
              : isRotate
                ? _scrubRotateValue(value[p])
                : isScale
                  ? _scrubScaleValue(value[p])
                  : value[p])
          + ')');
      }
    } else {
      if (isScale) {
        value = _scrubScaleValue(value);
      } else if (isRotate) {
        value = _scrubRotateValue(value);
      } else if (isTranslate) {
        value = _scrubTranslateValue(value);
      }
      css.push(prop + '(' + value + ')');
    }
    return css.join(' ');
  }

  /**
   * Static utility type for working with CSS transforms
   * @class lavaca.fx.Transform
   */

  /**
   * Whether or not transforms are supported by the browser
   * @method isSupported
   * @static
   *
   * @return {Boolean}  True when transforms are supported
   */
  Transform.isSupported = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[36055,36080],"range":[36044,36080],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":80,"label":"lavaca_require"}');
    return !!_prop;
  };

  /**
   * Whether or not 3D transforms are supported by the browser
   * @method is3dSupported
   * @static
   *
   * @return {Boolean}  True when 3D transforms are supported
   */
  Transform.is3dSupported = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[36304,36325],"range":[36293,36325],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":81,"label":"lavaca_require"}');
    return _3d;
  };

  /**
   * Converts a transform hash into a CSS string
   * @method toCSS
   * @static
   *
   * @param {Object} opts  A hash of CSS transform values, with properties in
   *      the form {translateX: 1, translateY: 1} or {translate: {x: 1, y: 1}}
   * @opt {Object} translate  An object or string containing the translation values
   * @opt {Object} translateX  A string (in any unit) or number (in pixels) representing the X translation value
   * @opt {Object} translateY  A string (in any unit) or number (in pixels) representing the Y translation value
   * @opt {Object} translateZ  A string (in any unit) or number (in pixels) representing the Z translation value
   * @opt {String} translate3d  A string containing the 3D translation values
   * @opt {Object} rotate  An object, string, or number (in degrees) containing the rotation value(s)
   * @opt {Object} rotateX  A string (in any unit) or number (in degrees) representing the X rotation value
   * @opt {Object} rotateY  A string (in any unit) or number (in degrees) representing the Y rotation value
   * @opt {Object} rotateZ  A string (in any unit) or number (in degrees) representing the Z rotation value
   * @opt {String} rotate3d  A string containing the 3D rotation values
   * @opt {Object} scale  An object, string or number (in percentage points) containing the scale value(s)
   * @opt {Object} scaleX  A string (in any unit) or number (in percentage points) representing the X scale value
   * @opt {Object} scaleY  A string (in any unit) or number (in percentage points) representing the Y scale value
   * @opt {Object} scaleZ  A string (in any unit) or number (in percentage points) representing the Z scale value
   * @opt {String} scale3d  Astring containing the 3D scale values
   * @opt {Object} skew  An object or string containing the skew values
   * @opt {Object} skewX  A string (in any unit) or number (in pixels) representing the X skew value
   * @opt {Object} skewY  A string (in any unit) or number (in pixels) representing the Y skew value
   * @opt {String} matrix  A string containing the matrix transform values
   * @opt {String} matrix3d  A string containing the 3D matrix transform values
   * @opt {String} perspective  A string containing the perspective transform values
   * @return {String}  The generated CSS string
   */
  Transform.toCSS = function(opts) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[38695,38928],"range":[38680,38928],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":82,"label":"lavaca_require"}');
    var css = [],
        prop;
    if (typeof opts === 'object') {
      for (prop in opts) {
        css.push(_scrubTransformValue(prop, opts[prop]));
      }
    } else {
      css.push(opts);
    }
    return css.join(' ');
  };

  /**
   * Gets the name of the transform CSS property
   * @method cssProperty
   * @static
   *
   * @return {String}  The name of the CSS property
   */
  Transform.cssProperty = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[39124,39150],"range":[39113,39150],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":83,"label":"lavaca_require"}');
    return _cssProp;
  };

  /**
   * Transforms an element
   * @method $.fn.transform
   *
   * @param {String} value  The CSS transform string
   * @return {jQuery}  The jQuery object, for chaining
   */
  /**
   * Transforms an element
   * @method $.fn.transform
   *
   * @param {Object} opt  A hash of CSS transform values, with properties in
   *      the form {translateX: 1, translateY: 1} or {translate: {x: 1, y: 1}}
   * @opt {Object} translate  An object or string containing the translation values
   * @opt {Object} translateX  A string (in any unit) or number (in pixels) representing the X translation value
   * @opt {Object} translateY  A string (in any unit) or number (in pixels) representing the Y translation value
   * @opt {Object} translateZ  A string (in any unit) or number (in pixels) representing the Z translation value
   * @opt {String} translate3d  A string containing the 3D translation values
   * @opt {Object} rotate  An object, string, or number (in degrees) containing the rotation value(s)
   * @opt {Object} rotateX  A string (in any unit) or number (in degrees) representing the X rotation value
   * @opt {Object} rotateY  A string (in any unit) or number (in degrees) representing the Y rotation value
   * @opt {Object} rotateZ  A string (in any unit) or number (in degrees) representing the Z rotation value
   * @opt {String} rotate3d  A string containing the 3D rotation values
   * @opt {Object} scale  An object, string or number (in percentage points) containing the scale value(s)
   * @opt {Object} scaleX  A string (in any unit) or number (in percentage points) representing the X scale value
   * @opt {Object} scaleY  A string (in any unit) or number (in percentage points) representing the Y scale value
   * @opt {Object} scaleZ  A string (in any unit) or number (in percentage points) representing the Z scale value
   * @opt {String} scale3d  Astring containing the 3D scale values
   * @opt {Object} skew  An object or string containing the skew values
   * @opt {Object} skewX  A string (in any unit) or number (in pixels) representing the X skew value
   * @opt {Object} skewY  A string (in any unit) or number (in pixels) representing the Y skew value
   * @opt {String} matrix  A string containing the matrix transform values
   * @opt {String} matrix3d  A string containing the 3D matrix transform values
   * @opt {String} perspective  A string containing the perspective transform values
   * @return {jQuery}  The jQuery object, for chaining
   */
  /**
   * Transforms an element
   * @method $.fn.transform
   *
   * @param {String} value  The CSS transform string
   * @param {String} origin  The CSS transform origin
   * @return {jQuery}  The jQuery object, for chaining
   */
  /**
   * Transforms an element
   * @method $.fn.transform
   *
   * @param {Object} opt  A hash of CSS transform values, with properties in
   *      the form {translateX: 1, translateY: 1} or {translate: {x: 1, y: 1}}
   * @opt {Object} translate  An object or string containing the translation values
   * @opt {Object} translateX  A string (in any unit) or number (in pixels) representing the X translation value
   * @opt {Object} translateY  A string (in any unit) or number (in pixels) representing the Y translation value
   * @opt {Object} translateZ  A string (in any unit) or number (in pixels) representing the Z translation value
   * @opt {String} translate3d  A string containing the 3D translation values
   * @opt {Object} rotate  An object, string, or number (in degrees) containing the rotation value(s)
   * @opt {Object} rotateX  A string (in any unit) or number (in degrees) representing the X rotation value
   * @opt {Object} rotateY  A string (in any unit) or number (in degrees) representing the Y rotation value
   * @opt {Object} rotateZ  A string (in any unit) or number (in degrees) representing the Z rotation value
   * @opt {String} rotate3d  A string containing the 3D rotation values
   * @opt {Object} scale  An object, string or number (in percentage points) containing the scale value(s)
   * @opt {Object} scaleX  A string (in any unit) or number (in percentage points) representing the X scale value
   * @opt {Object} scaleY  A string (in any unit) or number (in percentage points) representing the Y scale value
   * @opt {Object} scaleZ  A string (in any unit) or number (in percentage points) representing the Z scale value
   * @opt {String} scale3d  Astring containing the 3D scale values
   * @opt {Object} skew  An object or string containing the skew values
   * @opt {Object} skewX  A string (in any unit) or number (in pixels) representing the X skew value
   * @opt {Object} skewY  A string (in any unit) or number (in pixels) representing the Y skew value
   * @opt {String} matrix  A string containing the matrix transform values
   * @opt {String} matrix3d  A string containing the 3D matrix transform values
   * @opt {String} perspective  A string containing the perspective transform values
   * @param {String} origin  The CSS transform origin
   * @return {jQuery}  The jQuery object, for chaining
   */
  /**
   * Transforms an element
   * @method $.fn.transform
   *
   * @param {String} value  The CSS transform string
   * @param {Object} origin  The CSS transform origin, in the form {x: N, y: N},
   *      where N is a decimal percentage between -1 and 1 or N is a pixel value > 1 or < -1.
   * @return {jQuery}  The jQuery object, for chaining
   */
  /**
   * Transforms an element
   * @method $.fn.transform
   *
   * @param {Object} opt  A hash of CSS transform values, with properties in
   *      the form {translateX: 1, translateY: 1} or {translate: {x: 1, y: 1}}
   * @opt {Object} translate  An object or string containing the translation values
   * @opt {Object} translateX  A string (in any unit) or number (in pixels) representing the X translation value
   * @opt {Object} translateY  A string (in any unit) or number (in pixels) representing the Y translation value
   * @opt {Object} translateZ  A string (in any unit) or number (in pixels) representing the Z translation value
   * @opt {String} translate3d  A string containing the 3D translation values
   * @opt {Object} rotate  An object, string, or number (in degrees) containing the rotation value(s)
   * @opt {Object} rotateX  A string (in any unit) or number (in degrees) representing the X rotation value
   * @opt {Object} rotateY  A string (in any unit) or number (in degrees) representing the Y rotation value
   * @opt {Object} rotateZ  A string (in any unit) or number (in degrees) representing the Z rotation value
   * @opt {String} rotate3d  A string containing the 3D rotation values
   * @opt {Object} scale  An object, string or number (in percentage points) containing the scale value(s)
   * @opt {Object} scaleX  A string (in any unit) or number (in percentage points) representing the X scale value
   * @opt {Object} scaleY  A string (in any unit) or number (in percentage points) representing the Y scale value
   * @opt {Object} scaleZ  A string (in any unit) or number (in percentage points) representing the Z scale value
   * @opt {String} scale3d  Astring containing the 3D scale values
   * @opt {Object} skew  An object or string containing the skew values
   * @opt {Object} skewX  A string (in any unit) or number (in pixels) representing the X skew value
   * @opt {Object} skewY  A string (in any unit) or number (in pixels) representing the Y skew value
   * @opt {String} matrix  A string containing the matrix transform values
   * @opt {String} matrix3d  A string containing the 3D matrix transform values
   * @opt {String} perspective  A string containing the perspective transform values
   * @param {Object} origin  The CSS transform origin, in the form {x: N, y: N},
   *      where N is a decimal percentage between -1 and 1 or N is a pixel value > 1 or < -1.
   * @return {jQuery}  The jQuery object, for chaining
   */
  $.fn.transform = function(value, origin) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47130,47574],"range":[47106,47574],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":85,"label":"lavaca_require"}');
    if (Transform.isSupported()) {
      value = Transform.toCSS(value);
      if (origin) {
        if (typeof origin === 'object') {
          origin = _toOriginUnit(origin.x) + (_isUndefined(origin.y) ? '' : ' ' + _toOriginUnit(origin.y));
        }
      }
      this.each(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47420,47545],"range":[47409,47545],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":84,"label":"lavaca_require"}');
        this.style[_prop] = value;
        if (origin) {
          this.style[_prop + 'Origin'] = origin;
        }
      });
    }
    return this;
  };

  return Transform;

});

define('lavaca/fx/Animation',['require','$','./Transform'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[47680,56807],"range":[47662,56807],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":95,"label":"lavaca_require"}');

  var $ = require('$'),
      Transform = require('./Transform');

  var Animation = {};

  var _props = {
        animation: ['animation', 'animationend', 'keyframes'],
        webkitAnimation: ['-webkit-animation', 'webkitAnimationEnd', '-webkit-keyframes'],
        MozAnimation: ['-moz-animation', 'animationend', '-moz-keyframes'],
        OAnimation: ['-o-animation', 'oAnimationEnd', '-o-keyframes'],
        MSAnimation: ['-ms-animation', 'MSAnimationEnd', '-ms-keyframes']
      },
      _prop,
      _cssProp,
      _declaration,
      _event;

  (function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[48252,48543],"range":[48241,48543],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":87,"label":"lavaca_require"}');
    var style = document.createElement('div').style,
        s,
        opts;
    for (s in _props) {
      if (s in style) {
        opts = _props[s];
        _prop = s;
        _cssProp = opts[0];
        _event = opts[1];
        _declaration = opts[2];
        break;
      }
    }
  })();

  /**
   * Static utility type for working with CSS keyframe animations
   * @class lavaca.fx.Animation
   */

  /**
   * Whether or not animations are supported by the browser
   * @method isSupported
   * @static
   *
   * @return {Boolean}  True if CSS keyframe animations are supported
   */
  Animation.isSupported = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[48882,48907],"range":[48871,48907],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":88,"label":"lavaca_require"}');
    return !!_prop;
  };

  /**
   * Converts a list of keyframes to a CSS animation
   * @method keyframesToCSS
   * @static
   *
   * @param {String} name  The name of the keyframe animation
   * @param {Object} keyframes  A list of timestamped keyframes in the form {'0%': {color: 'red'}, '100%': 'color: blue'}
   * @return {String}  The CSS keyframe animation declaration
   */
  Animation.keyframesToCSS = function(name, keyframes) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[49322,49949],"range":[49296,49949],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":89,"label":"lavaca_require"}');
    var css = ['@', _declaration, ' ', name, '{'],
    time,
    keyframe,
    prop,
    value;
    for (time in keyframes) {
      css.push(time, '{');
      keyframe = keyframes[time];
      if (typeof keyframe === 'string') {
        css.push(keyframe);
      } else {
        for (prop in keyframe) {
          value = keyframe[prop];
          if (prop === 'transform' && Transform) {
            prop = Transform.cssProperty();
            value = Transform.toCSS(value);
          }
          css.push(prop, ':', value, ';');
        }
      }
      css.push('}');
    }
    css.push('}');
    return css.join('');
  };

  /**
   * Generates a keyframe animation
   * @method generateKeyframes
   * @static
   *
   * @param {Object} keyframes  A list of timestamped keyframes in the form {'0%': {color: 'red'}, '100%': 'color: blue'}
   * @return {String}  The name fo the animation
   */
  /**
   * Generates a keyframe animation
   * @method generateKeyframes
   * @static
   * @param {String} name  The name of the animation
   * @param {Object} keyframes  A list of timestamped keyframes in the form {'0%': {color: 'red'}, '100%': 'color: blue'}
   * @return {String}  The name fo the animation
   */
  Animation.generateKeyframes = function(name, keyframes) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[50594,50834],"range":[50568,50834],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":90,"label":"lavaca_require"}');
    if (typeof name === 'object') {
      keyframes = name;
      name = 'a' + new Date().getTime();
    }
    var css = Animation.keyframesToCSS(name, keyframes);
    $('<style>' + css + '</style>').appendTo('head');
    return name;
  };

  /**
   * Gets the name of the animation CSS property
   * @method cssProperty
   * @static
   *
   * @return {String}  The name of the CSS property
   */
  Animation.cssProperty = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[51030,51056],"range":[51019,51056],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":91,"label":"lavaca_require"}');
    return _cssProp;
  };

  /**
   * Applies a keyframe animation to an element
   * @method $.fn.keyframe
   *
   * @param {String} name  The name of the animation
   * @param {Object} options  Options for the animation
   * @opt {Number} duration  The number of milliseconds that the animation lasts
   * @opt {String} easing  The name of a CSS easing function
   * @default 'linear'
   * @opt {Number} delay  The number of milliseconds before the animation should start
   * @default 0
   * @opt {Object} iterations  Either the number of iterations to play the animation or 'infinite'
   * @default 1
   * @opt {String} direction  The name of a CSS animation direction
   * @default 'normal'
   * @opt {Function} complete  A function to execute when the animation has completed
   * @default null
   * @return {jQuery}  The jQuery object, for chaining
   */
  /**
   * Applies a keyframe animation to an element
   * @method $.fn.keyframe
   *
   * @param {Object} keyframes  A list of timestamped keyframes in the form {'0%': {color: 'red'}, '100%': 'color: blue'}
   * @param {Object} options  Options for the animation
   * @opt {Number} duration  The number of milliseconds that the animation lasts
   * @opt {String} easing  The name of a CSS easing function
   * @default 'linear'
   * @opt {Number} delay  The number of milliseconds before the animation should start
   * @default 0
   * @opt {Object} iterations  Either the number of iterations to play the animation or 'infinite'
   * @default 1
   * @opt {String} direction  The name of a CSS animation direction
   * @default 'normal'
   * @opt {Function} complete  A function to execute when the animation has completed
   * @default null
   * @return {jQuery}  The jQuery object, for chaining
   *
   */
  /**
   * Applies a keyframe animation to an element
   * @method $.fn.keyframe
   *
   * @param {String} name  The name of the animation
   * @param {Number} duration  The number of milliseconds that the animation lasts
   * @param {String} easing  The name of a CSS easing function
   * @param {Number} delay  The number of milliseconds before the animation should start
   * @param {Object} iterations  Either the number of iterations to play the animation or 'infinite'
   * @param {String} direction  The name of a CSS animation direction
   * @param {Function} callback  A function to execute when the animation has completed
   * @return {jQuery}  The jQuery object, for chaining
   *
  */
  /**
   * Applies a keyframe animation to an element
   * @method $.fn.keyframe
   *
   * @param {Object} keyframes  A list of timestamped keyframes in the form {'0%': {color: 'red'}, '100%': 'color: blue'}
   * @param {Number} duration  The number of milliseconds that the animation lasts
   * @param {String} easing  The name of a CSS easing function
   * @param {Number} delay  The number of milliseconds before the animation should start
   * @param {Object} iterations  Either the number of iterations to play the animation or 'infinite'
   * @param {String} direction  The name of a CSS animation direction
   * @param {Function} callback  A function to execute when the animation has completed
   * @return {jQuery}  The jQuery object, for chaining
   */
  $.fn.keyframe = function(name, duration, easing, delay, iterations, direction, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[54355,55282],"range":[54282,55282],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":92,"label":"lavaca_require"}');
    if (Animation.isSupported()) {
      if (typeof name === 'object') {
        name = Animation.generateKeyframes(name);
      }
      if (typeof duration === 'object') {
        callback = duration.complete;
        direction = duration.direction;
        iterations = duration.iterations;
        delay = duration.delay;
        easing = duration.easing;
        duration = duration.duration;
      }
      direction = direction || 'normal';
      iterations = iterations || 1;
      delay = delay || 0;
      easing = easing || 'linear';
      duration = duration || 1;
      if (typeof duration === 'number') {
        duration += 'ms';
      }
      if (typeof delay === 'number') {
        delay += 'ms';
      }
      if (callback) {
        this.nextAnimationEnd(callback);
      }
      this.css(Animation.cssProperty(), [name, duration, easing, delay, iterations, direction].join(' '));
    }
    return this;
  };

  /**
   * Binds an animation end handler to an element.
   * @method $.fn.animationEnd
   *
   * @param {Function} callback  Callback for when the animation ends
   * @return {jQuery}  This jQuery object, for chaining
   *
  /**
   * Binds an animation end handler to an element.
   * @method $.fn.animationEnd
   *
   * @param {String} delegate  Selector for the descendant elements to which the handler will be bound
   * @param {Function} callback  Callback for when the animation ends
   * @return {jQuery}  This jQuery object, for chaining
   */
  $.fn.animationEnd = function(delegate, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[55888,55999],"range":[55859,55999],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":93,"label":"lavaca_require"}');
    if (_event) {
      return this.on(_event, delegate, callback);
    } else {
      return this;
    }
  };

  /**
   * Binds an animation end handler to an element's next animation end event
   * @method $.fn.nextAnimationEnd
   *
   * @param {Function} callback  Callback for when the animation ends
   * @return {jQuery}  This jQuery object, for chaining
   */
  /**
   * Binds an animation end handler to an element's next animation end event
   * @method $.fn.nextAnimationEnd
   *
   * @param {String} delegate  Selector for the descendant elements to which the handler will be bound
   * @param {Function} callback  Callback for when the animation ends
   * @return {jQuery}  This jQuery object, for chaining
   */
  $.fn.nextAnimationEnd = function(delegate, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56670,56782],"range":[56641,56782],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":94,"label":"lavaca_require"}');
    if (_event) {
      return this.one(_event, delegate, callback);
    } else {
      return this;
    }
  };

  return Animation;

});

define('lavaca/fx/Transition',['require','$'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[56875,63597],"range":[56857,63597],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":104,"label":"lavaca_require"}');

  var $ = require('$');

  var Transition = {};

  var _props = {
        transition: ['transition', 'transitionend'],
        webkitTransition: ['-webkit-transition', 'webkitTransitionEnd'],
        MozTransition: ['-moz-transition', 'MozTransitionEnd'],
        OTransition: ['-o-transition', 'OTransitionEnd'],
        MSTransition: ['-ms-transition', 'MSTransitionEnd']
      },
      _prop,
      _cssProp,
      _event;

  (function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57319,57548],"range":[57308,57548],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":96,"label":"lavaca_require"}');
    var style = document.createElement('div').style,
        s;
    for (s in _props) {
      if (s in style) {
        _prop = s;
        _cssProp = _props[s][0];
        _event = _props[s][1];
        break;
      }
    }
  })();

  /**
   * Static utility type for working with CSS transitions
   * @class lavaca.fx.Transition
   */

  /**
   * Whether or not transitions are supported by the browser
   * @method isSupported
   * @static
   *
   * @return {Boolean}  True when CSS transitions are supported
   */
  Transition.isSupported = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[57876,57901],"range":[57865,57901],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":97,"label":"lavaca_require"}');
    return !!_prop;
  };

  /**
   * Generates a CSS transition property string from several values
   * @method toCSS
   * @static
   *
   * @param {Object} props  A hash in which the keys are the names of the CSS properties
   * @param {Number} duration  The amount of time in milliseconds that the transition lasts
   * @return {String}  The generated CSS string
   */
 /**
   * Generates a CSS transition property string from several values
   * @method toCSS
   * @static
   *
   * @param {Array} props  An array of CSS property names
   * @param {Number} duration  The amount of time in milliseconds that the transition lasts
   * @return {String}  The generated CSS string
   */
  /**
   * Generates a CSS transition property string from several values
   * @method toCSS
   * @static
   *
   * @param {Object} props  A hash in which the keys are the names of the CSS properties
   * @param {Number} duration  The amount of time in milliseconds that the transition lasts
   * @param {String} easing  The interpolation for the transition
   * @return {String}  The generated CSS string
   */
  /**
   * Generates a CSS transition property string from several values
   * @method toCSS
   * @static
   *
   * @param {Array} props  An array of CSS property names
   * @param {Number} duration  The amount of time in milliseconds that the transition lasts
   * @param {String} easing  The interpolation for the transition
   * @return {String}  The generated CSS string
   */
  Transition.toCSS = function(props, duration, easing) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59412,59695],"range":[59378,59695],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":98,"label":"lavaca_require"}');
    easing = easing || 'linear';
    var css = [],
        isArray = props instanceof Array,
        prop;
    for (prop in props) {
      if (isArray) {
        prop = props[prop];
      }
      css.push(prop + ' ' + duration + 'ms ' + easing);
    }
    return css.join(',');
  };

  /**
   * Gets the name of the transition CSS property
   * @method cssProperty
   * @static
   *
   * @return {String}  The name of the CSS property
   */
  Transition.cssProperty = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[59893,59919],"range":[59882,59919],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":99,"label":"lavaca_require"}');
    return _cssProp;
  };

  /**
   * Causes an element to undergo a transition
   * @method $.fn.transition
   *
   * @param {Object} props  The CSS property values at the end of the transition
   * @param {Number} duration  The amount of time in milliseconds that the transition lasts
   * @return {jQuery}  The jQuery object, for chaining
   */
   /**
   * Causes an element to undergo a transition
   * @method $.fn.transition
   *
   * @param {Object} props  The CSS property values at the end of the transition
   * @param {Number} duration  The amount of time in milliseconds that the transition lasts
   * @param {String} easing  The interpolation for the transition
   * @return {jQuery}  The jQuery object, for chaining
   */
/**
   * Causes an element to undergo a transition
   * @method $.fn.transition
   *
   * @param {Object} props  The CSS property values at the end of the transition
   * @param {Number} duration  The amount of time in milliseconds that the transition lasts
   * @param {Function} callback  A function to execute when the transition completes
   * @return {jQuery}  The jQuery object, for chaining
   */
   /**
   * Causes an element to undergo a transition
   * @method $.fn.transition
   *
   * @param {Object} props  The CSS property values at the end of the transition
   * @param {Number} duration  The amount of time in milliseconds that the transition lasts
   * @param {String} easing  The interpolation for the transition
   * @param {Function} callback  A function to execute when the transition completes
   * @return {jQuery}  The jQuery object, for chaining
   */
  $.fn.transition = function(props, duration, easing, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[61572,62058],"range":[61528,62058],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":101,"label":"lavaca_require"}');
    if (easing instanceof Function) {
        callback = easing;
        easing = null;
    }
    if (Transition.isSupported()) {
      var css = Transition.toCSS(props, duration, easing);
      if (callback) {
        this.nextTransitionEnd(callback);
      }
      this.each(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[61862,61904],"range":[61851,61904],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":100,"label":"lavaca_require"}');
        this.style[_prop] = css;
      });
      this.css(props);
    } else {
      this.css(props);
      if (callback) {
        callback.call(this[0], {});
      }
    }
    return this;
  };

  /**
   * Binds a transition end handler to an element.
   * @method $.fn.transitionEnd
   *
   * @param {Function} callback  Callback for when the transition ends
   * @return {jQuery}  The jQuery object, for chaining
   */
  /**
   * Binds a transition end handler to an element.
   * @method $.fn.transitionEnd
   *
   * @param {String} delegate  Selector for the descendant elements to which the handlers will be bound
   * @param {Function} callback  Callback for when the transition ends
   * @return {jQuery}  The jQuery object, for chaining
   */
  $.fn.transitionEnd = function(delegate, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[62669,62780],"range":[62640,62780],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":102,"label":"lavaca_require"}');
    if (_event) {
      return this.on(_event, delegate, callback);
    } else {
      return this;
    }
  };

  /**
   * Binds a transition end handler to an element's next transition end event.
   * @method $.fn.nextTransitionEnd
   *
   * @param {Function} callback  Callback for when the transition ends
   * @return {jQuery}  The jQuery object, for chaining
   */
  /**
   * Binds a transition end handler to an element's next transition end event.
   * @method $.fn.nextTransitionEnd
   *
   * @param {String} delegate  Selector for the descendant elements to which the handlers will be bound
   * @param {Function} callback  Callback for when the transition ends
   * @return {jQuery}  The jQuery object, for chaining
   */
  $.fn.nextTransitionEnd = function(delegate, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63459,63571],"range":[63430,63571],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":103,"label":"lavaca_require"}');
    if (_event) {
      return this.one(_event, delegate, callback);
    } else {
      return this;
    }
  };

  return Transition;

});

define('lavaca/util/uuid',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[63641,64192],"range":[63630,64192],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":106,"label":"lavaca_require"}');

  var _uuidMap = {};
  /**
   * Produces a app specific unique identifier
   * @class lavaca.util.uuid
   */
   /**
   * Produces a unique identifier
   * @method uuid
   * @static
   * @param {String} namespace  A string served the namespace of a uuid
   *
   * @return {Number}  A number that is unique to this page
   */
  var uuid = function(namespace) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[64001,64172],"range":[63981,64172],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":105,"label":"lavaca_require"}');
    namespace = namespace || '__defaultNS';
    if (typeof _uuidMap[namespace] !== 'number') {
      _uuidMap[namespace] = 0;
    }
    return _uuidMap[namespace]++;
  };

  return uuid;

});

define('lavaca/net/History',['require','lavaca/events/EventDispatcher','lavaca/util/uuid'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[64305,73234],"range":[64287,73234],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":125,"label":"lavaca_require"}');

  var EventDispatcher = require('lavaca/events/EventDispatcher'),
      uuid = require('lavaca/util/uuid');

  var _isAndroid = navigator.userAgent.indexOf('Android') > -1,
      _standardsMode = !_isAndroid && typeof history.pushState === 'function',
      _hasPushed = false,
      _lastHash,
      _hist,
      _currentId,
      _pushCount = 0;

  function _insertState(hist, position, id, state, title, url) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[64720,64976],"range":[64659,64976],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":107,"label":"lavaca_require"}');
    hist.position = position;
    var record = {
          id: id,
          state: state,
          title: title,
          url: url
        };
    hist.sequence[position] = record;
    location.hash = _lastHash = url + '#@' + id;
    return record;
  }

  /**
   * HTML5 history abstraction layer
   * @class lavaca.net.History
   * @extends lavaca.events.EventDispatcher
   *
   * @event popstate
   *
   * @constructor
   */
  var History = EventDispatcher.extend(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[65201,67639],"range":[65190,67639],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":110,"label":"lavaca_require"}');
    EventDispatcher.call(this);
    /**
     * A list containing history states generated by the app (not used for HTML5 history)
     * @property {Array} sequence
     */
    this.sequence = [];
    /**
     * The current index in the history sequence (not used for HTML5 history)
     * @property {Number} position
     */
    this.position = -1;
    this.replace({}, document.title, location.pathname);
    var self = this;
    if (_standardsMode) {
      /**
       * Auto-generated callback executed when a history event occurs
       * @property {Function} onPopState
       */
       var self = this;
      this.onPopState = function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[65847,66232],"range":[65835,66232],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":108,"label":"lavaca_require"}');
        if (e.state) {
          _pushCount--;
          var previousId = _currentId;
          _currentId = e.state.id;
          self.trigger('popstate', {
            state: e.state.state,
            title: e.state.title,
            url: e.state.url,
            id: e.state.id,
            direction: _currentId > previousId ? 'forward' : 'back'
          });
        }
      };
      window.addEventListener('popstate', this.onPopState, false);
    } else {
      this.onPopState = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[66349,67441],"range":[66338,67441],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":109,"label":"lavaca_require"}');
        var hash = location.hash,
            code,
            record,
            item,
            previousCode,
            i = -1;
        if (hash) {
          hash = hash.replace(/^#/, '');
        }
        if (hash !== _lastHash) {
          previousCode = _lastHash.split('#@')[1];
          _lastHash = hash;
          if (hash) {
            _pushCount--;
            code = hash.split('#@')[1];
            while (!!(item = self.sequence[++i])) {
              if (item.id === parseInt(code, 10)) {
                record = item;
                self.position = i;
                break;
              }
            }
            if (record) {
              location.hash = record.url + '#@' + record.id;
              document.title = record.title;
              self.trigger('popstate', {
                state: record.state,
                title: record.title,
                url: record.url,
                id: record.id,
                direction: record.id > parseInt(previousCode, 10) ? 'forward' : 'back'
              });
            }
          }
        }
      };
      if (window.attachEvent) {
        window.attachEvent('onhashchange', this.onPopState);
      } else {
        window.addEventListener('hashchange', this.onPopState, false);
      }
    }
  }, {
    /**
     * Retrieve the current history record
     * @method current
     *
     * @return {Object}  The current history record
     */
    current: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[67808,67866],"range":[67797,67866],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":111,"label":"lavaca_require"}');
      return this.sequence[this.position] || null;
    },
    /**
     * Determines whether or not there are history states
     * @method hasHistory
     *
     * @returns {Boolean} True when there is a history state
     */
    hasHistory: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[68063,68099],"range":[68052,68099],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":112,"label":"lavaca_require"}');
      return _pushCount > 0;
    },
    /**
     * Adds a record to the history
     * @method push
     *
     * @param {Object} state  A data object associated with the page state
     * @param {String} title  The title of the page state
     * @param {String} url  The URL of the page state
     */
    push: function(state, title, url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[68405,68822],"range":[68377,68822],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":113,"label":"lavaca_require"}');
      _pushCount++;
      if (_hasPushed) {
        document.title = title;
        _currentId = uuid('history');
        if (_standardsMode) {
          history.pushState({state: state, title: title, url: url, id: _currentId}, title, url);
        } else {
          _insertState(this, ++this.position, _currentId, state, title, url);
        }
      } else {
        this.replace(state, title, url);
      }
    },
    /**
     * Replaces the current record in the history
     * @method replace
     *
     * @param {Object} state  A data object associated with the page state
     * @param {String} title  The title of the page state
     * @param {String} url  The URL of the page state
     */
    replace: function(state, title, url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69148,69559],"range":[69120,69559],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":114,"label":"lavaca_require"}');
      _hasPushed = true;
      document.title = title;
      if (_standardsMode) {
        history.replaceState({state: state, title: title, url: url, id: _currentId}, title, url);
      } else {
        if (this.position < 0) {
          this.position = 0;
        }
        _insertState(this, this.position, typeof _currentId !== 'undefined' ? _currentId : uuid('history'), state, title, url);
      }
    },
    /**
     * Unbind the history object and ready it for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[69693,70100],"range":[69682,70100],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":115,"label":"lavaca_require"}');
      if (this.onPopState) {
        if (_standardsMode) {
          window.removeEventListener('popstate', this.onPopState, false);
        } else if (window.detachEvent) {
          window.detachEvent('onhashchange', this.onPopState);
        } else {
          window.removeEventListener('hashchange', this.onPopState, false);
        }
      }
      EventDispatcher.prototype.dispose.call(this);
    }
  });
  /**
   * Initialize a singleton history abstraction layer
   * @method init
   * @static
   *
   * @return {Lavaca.mvc.History}  The history instance
   */
   /**
   * Initialize a singleton history abstraction layer
   * @method init
   * @static
   *
   * @param {Boolean} useHash  When true, use the location hash to manage history state instead of HTML5 history
   * @return {Lavaca.mvc.History}  The history instance
   */
  History.init = function(useHash) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[70572,70718],"range":[70554,70718],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":116,"label":"lavaca_require"}');
    if (!_hist) {
      if (useHash) {
        History.overrideStandardsMode();
      }
      _hist = new History();
    }
    return _hist;
  };
  /**
   * Adds a record to the history
   * @method push
   * @static
   *
   * @param {Object} state  A data object associated with the page state
   * @param {String} title  The title of the page state
   * @param {String} url  The URL of the page state
   */
  History.push = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71011,71065],"range":[71000,71065],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":117,"label":"lavaca_require"}');
    History.init().push.apply(_hist, arguments);
  };
  /**
   * Replaces the current record in the history
   * @method replace
   * @static
   *
   * @param {Object} state  A data object associated with the page state
   * @param {String} title  The title of the page state
   * @param {String} url  The URL of the page state
   */
  History.replace = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71378,71435],"range":[71367,71435],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":118,"label":"lavaca_require"}');
    History.init().replace.apply(_hist, arguments);
  };
  /**
   * Goes to the previous history state
   * @method back
   * @static
   */
  History.back = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71548,71573],"range":[71537,71573],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":119,"label":"lavaca_require"}');
    history.back();
  };
  /**
   * Goes to the next history state
   * @method forward
   * @static
   */
  History.forward = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71688,71716],"range":[71677,71716],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":120,"label":"lavaca_require"}');
    history.forward();
  };
  /**
   * Unbind the history object and ready it for garbage collection
   * @method dispose
   * @static
   */
  History.dispose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[71862,71933],"range":[71851,71933],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":121,"label":"lavaca_require"}');
    if (_hist) {
      _hist.dispose();
      _hist = null;
    }
  };
  /**
   * Binds an event handler to the singleton history
   * @method on
   * @static
   *
   * @param {String} type  The type of event
   * @param {Function} callback  The function to execute when the event occurs
   * @return {Lavaca.mvc.History}  The history object (for chaining)
   */
  History.on = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72253,72312],"range":[72242,72312],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":122,"label":"lavaca_require"}');
    return History.init().on.apply(_hist, arguments);
  };
  /**
   * Unbinds an event handler from the singleton history
   * @method off
   * @static
   *
   * @param {String} type  The type of event
   * @param {Function} callback  The function to stop executing when the
   *    event occurs
   * @return {Lavaca.mvc.History}  The history object (for chaining)
   */
  History.off = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72653,72713],"range":[72642,72713],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":123,"label":"lavaca_require"}');
    return History.init().off.apply(_hist, arguments);
  };
  /**
   * Sets Histroy to hash mode
   * @method overrideStandardsMode
   * @static
   */
  History.overrideStandardsMode = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[72851,72884],"range":[72840,72884],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":124,"label":"lavaca_require"}');
    _standardsMode = false;
  };

  /**
   * Stores the page transition animations so that if you route back, it will animate correctly
   * @property {Array} animationBreadcrumb
   */
  History.animationBreadcrumb = [];

  /**
   * Flag to notify when history back is being called
   * @property {Boolean} isRoutingBack
   */
  History.isRoutingBack = false;

  return History;

});

define('lavaca/util/delay',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[73279,74269],"range":[73268,74269],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":128,"label":"lavaca_require"}');
  /**
   * Wraps setTimeout and delays the execution of a function
   * @class lavaca.util.delay
   */
   /**
   * Delays the execution of a function
   * @method delay
   * @static
   *
   * @param {Function} callback  A callback to execute on delay
   */
   /**
   * Delays the execution of a function
   * @method delay
   * @static
   * @param {Function} callback  A callback to execute on delay
   * @param {Object} thisp  The object to use as the "this" keyword
   * @return {Number}  The timeout ID
   */
   /**
   * Delays the execution of a function
   * @method delay
   * @static
   * @param {Function} callback  A callback to execute on delay
   * @param {Object} thisp  The object to use as the "this" keyword
   * @param {Number} ms  The number of milliseconds to delay execution
   * @return {Number}  The timeout ID
   */
  var delay = function(callback, thisp, ms) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74163,74248],"range":[74133,74248],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":127,"label":"lavaca_require"}');
    return setTimeout(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74198,74233],"range":[74187,74233],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":126,"label":"lavaca_require"}');
      callback.call(thisp);
    }, ms || 0);
  };

  return delay;

});

define('mout/lang/kindOf',[],function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[74314,74759],"range":[74302,74759],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":130,"label":"lavaca_require"}');

    var _rKind = /^\[object (.*)\]$/,
        _toString = Object.prototype.toString,
        UNDEF;

    /**
     * Gets the "kind" of value. (e.g. "String", "Number", etc)
     */
    function kindOf(val) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[74523,74738],"range":[74502,74738],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":129,"label":"lavaca_require"}');
        if (val === null) {
            return 'Null';
        } else if (val === UNDEF) {
            return 'Undefined';
        } else {
            return _rKind.exec( _toString.call(val) )[1];
        }
    }
    return kindOf;
});

define('mout/object/mixIn',['./forOwn'], function(forOwn){instrumentation_log('{"type":"FunctionExpression","bodyRange":[74820,75563],"range":[74804,75563],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":133,"label":"lavaca_require"}');

    /**
    * Combine properties from all the objects into first one.
    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
    * @param {object} target    Target Object
    * @param {...object} objects    Objects to be combined (0...n objects).
    * @return {object} Target Object.
    */
    function mixIn(target, objects){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[75219,75477],"range":[75188,75477],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":131,"label":"lavaca_require"}');
        var i = 0,
            n = arguments.length,
            obj;
        while(++i < n){
            obj = arguments[i];
            if (obj != null) {
                forOwn(obj, copyProp, target);
            }
        }
        return target;
    }

    function copyProp(val, key){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[75510,75542],"range":[75483,75542],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":132,"label":"lavaca_require"}');
        this[key] = val;
    }

    return mixIn;
});

define('mout/lang/clone',['./kindOf', './isPlainObject', '../object/mixIn'], function (kindOf, isPlainObject, mixIn) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[75684,76671],"range":[75644,76671],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":139,"label":"lavaca_require"}');

    /**
     * Clone native types.
     */
    function clone(val){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[75753,76116],"range":[75734,76116],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":134,"label":"lavaca_require"}');
        switch (kindOf(val)) {
            case 'Object':
                return cloneObject(val);
            case 'Array':
                return cloneArray(val);
            case 'RegExp':
                return cloneRegExp(val);
            case 'Date':
                return cloneDate(val);
            default:
                return val;
        }
    }

    function cloneObject(source) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[76151,76287],"range":[76122,76287],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":135,"label":"lavaca_require"}');
        if (isPlainObject(source)) {
            return mixIn({}, source);
        } else {
            return source;
        }
    }

    function cloneRegExp(r) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[76317,76513],"range":[76293,76513],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":136,"label":"lavaca_require"}');
        var flags = '';
        flags += r.multiline ? 'm' : '';
        flags += r.global ? 'g' : '';
        flags += r.ignorecase ? 'i' : '';
        return new RegExp(r.source, flags);
    }

    function cloneDate(date) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[76544,76583],"range":[76519,76583],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":137,"label":"lavaca_require"}');
        return new Date(+date);
    }

    function cloneArray(arr) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[76614,76649],"range":[76589,76649],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":138,"label":"lavaca_require"}');
        return arr.slice();
    }

    return clone;

});

define('mout/lang/deepClone',['./clone', '../object/forOwn', './kindOf', './isPlainObject'], function (clone, forOwn, kindOf, isPlainObject) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[76816,77868],"range":[76768,77868],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":144,"label":"lavaca_require"}');

    /**
     * Recursively clone native types.
     */
    function deepClone(val, instanceClone) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[76917,77187],"range":[76878,77187],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":140,"label":"lavaca_require"}');
        switch ( kindOf(val) ) {
            case 'Object':
                return cloneObject(val, instanceClone);
            case 'Array':
                return cloneArray(val, instanceClone);
            default:
                return clone(val);
        }
    }

    function cloneObject(source, instanceClone) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[77237,77591],"range":[77193,77591],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":142,"label":"lavaca_require"}');
        if (isPlainObject(source)) {
            var out = {};
            forOwn(source, function(val, key) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[77348,77422],"range":[77329,77422],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":141,"label":"lavaca_require"}');
                this[key] = deepClone(val, instanceClone);
            }, out);
            return out;
        } else if (instanceClone) {
            return instanceClone(source);
        } else {
            return source;
        }
    }

    function cloneArray(arr, instanceClone) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[77637,77842],"range":[77597,77842],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":143,"label":"lavaca_require"}');
        var out = [],
            i = -1,
            n = arr.length,
            val;
        while (++i < n) {
            out[i] = deepClone(arr[i], instanceClone);
        }
        return out;
    }

    return deepClone;

});


define('mout/lang/isKind',['./kindOf'], function (kindOf) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[77931,78093],"range":[77913,78093],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":146,"label":"lavaca_require"}');
    /**
     * Check if value is from a specific "kind".
     */
    function isKind(val, kind){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[78028,78072],"range":[78002,78072],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":145,"label":"lavaca_require"}');
        return kindOf(val) === kind;
    }
    return isKind;
});

define('mout/lang/isObject',['./isKind'], function (isKind) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78157,78270],"range":[78139,78270],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":148,"label":"lavaca_require"}');
    /**
     */
    function isObject(val) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[78202,78247],"range":[78179,78247],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":147,"label":"lavaca_require"}');
        return isKind(val, 'Object');
    }
    return isObject;
});

define('mout/object/merge',['./hasOwn', '../lang/deepClone', '../lang/isObject'], function (hasOwn, deepClone, isObject) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[78395,79293],"range":[78356,79293],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":150,"label":"lavaca_require"}');

    /**
     * Deep merge objects.
     */
    function merge() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[78462,79271],"range":[78445,79271],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":149,"label":"lavaca_require"}');
        var i = 1,
            key, val, obj, target;

        // make sure we don't modify source element and it's properties
        // objects are passed by reference
        target = deepClone( arguments[0] );

        while (obj = arguments[i++]) {
            for (key in obj) {
                if ( ! hasOwn(obj, key) ) {
                    continue;
                }

                val = obj[key];

                if ( isObject(val) && isObject(target[key]) ){
                    // inception, deep merge objects
                    target[key] = merge(target[key], val);
                } else {
                    // make sure arrays, regexp, date, objects are cloned
                    target[key] = deepClone(val);
                }

            }
        }

        return target;
    }

    return merge;

});

define('lavaca/mvc/Route',['require','lavaca/util/Disposable','lavaca/util/delay','mout/lang/deepClone','mout/object/merge'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[79440,86081],"range":[79422,86081],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":162,"label":"lavaca_require"}');

  var Disposable = require('lavaca/util/Disposable'),
      delay = require('lavaca/util/delay'),
      clone = require('mout/lang/deepClone'),
      merge = require('mout/object/merge');

  function _multivariablePattern() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[79667,79718],"range":[79634,79718],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":151,"label":"lavaca_require"}');
    return new RegExp('\\{\\*(.*?)\\}', 'g');
  }

  function _variablePattern() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[79750,79803],"range":[79722,79803],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":152,"label":"lavaca_require"}');
    return new RegExp('\\{([^\\/]*?)\\}', 'g');
  }

  function _variableCharacters() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[79838,79886],"range":[79807,79886],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":153,"label":"lavaca_require"}');
    return new RegExp('[\\{\\}\\*]', 'g');
  }

  function _datePattern() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[79914,79977],"range":[79890,79977],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":154,"label":"lavaca_require"}');
    return new RegExp('^\\d{4}-[0-1]\\d-[0-3]\\d$', 'g');
  }

  function _patternToRegExp(pattern) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[80016,80586],"range":[79981,80586],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":155,"label":"lavaca_require"}');
    if (pattern === '/') {
      return new RegExp('^\\/(\\?.*)?(#.*)?$', 'g');
    }
    if (pattern.charAt(0) === '/') {
      pattern = pattern.slice(1);
    }
    pattern = pattern.split('/');
    var exp = '^',
        i = -1,
        part;
    while (!!(part = pattern[++i])) {
      if (_multivariablePattern().test(part)) {
        exp += '(/([^/?#]+))*?';
      } else if (_variablePattern().test(part)) {
        exp += '/([^/?#]+)';
      } else {
        exp += '/' + part;
      }
    }
    exp += '(\\?.*)?(#\\.*)?$';
    return new RegExp(exp, 'g');
  }

  function _scrubURLValue(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[80621,81042],"range":[80590,81042],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":156,"label":"lavaca_require"}');
    value = decodeURIComponent(value);
    if (!isNaN(value)) {
      value = Number(value);
    } else if (value.toLowerCase() === 'true') {
      value = true;
    } else if (value.toLowerCase() === 'false') {
      value = false;
    } else if (_datePattern().test(value)) {
      value = value.split('-');
      value = new Date(Number(value[0]), Number(value[1]) - 1, Number(value[2]));
    }
    return value;
  }

  /**
   * @class lavaca.mvc.Route
   * @extends lavaca.util.Disposable
   * A relationship between a URL pattern and a controller action
   *
   * @constructor
   * @param {String} pattern  The route URL pattern
   *   Route URL patterns should be in the form /path/{foo}/path/{*bar}.
   *   The path variables, along with query string parameters, will be passed
   *   to the controller action as a params object. In this case, when passed
   *   the URL /path/something/path/1/2/3?abc=def, the params object would be
   *   {foo: 'something', bar: [1, 2, 3], abc: 'def'}.
   * @param {Function} TController  The type of controller that performs the action
   *   (Should derive from [[Lavaca.mvc.Controller]])
   * @param {String} action  The name of the controller method to call
   * @param {Object} params  Key-value pairs that will be merged into the params
   *   object that is passed to the controller action
   */
  var Route = Disposable.extend(function(pattern, TController, action, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[82048,82202],"range":[82001,82202],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":157,"label":"lavaca_require"}');
    Disposable.call(this);
    this.pattern = pattern;
    this.TController = TController;
    this.action = action;
    this.params = params || {};
  }, {
    /**
     * Tests if this route applies to a URL
     * @method matches
     *
     * @param {String} url  The URL to test
     * @return {Boolean}  True when this route matches the URL
     */
    matches: function(url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[82430,82492],"range":[82416,82492],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":158,"label":"lavaca_require"}');
      return _patternToRegExp(this.pattern).test(url);
    },
    /**
     * Converts a URL into a params object according to this route's pattern
     * @method parse
     *
     * @param {String} url  The URL to convert
     * @return {Object}  The params object
     */
    parse: function(url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[82730,84277],"range":[82716,84277],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":159,"label":"lavaca_require"}');
      var result = clone(this.params),
          pattern = this.pattern.slice(1),
          urlParts = url.split('#'),
          i,
          query,
          path,
          pathItem,
          patternItem,
          name;
      result.url = url;
      result.route = this;
      urlParts = urlParts[1] ? urlParts[1].split('?') : urlParts[0].split('?');
      query = urlParts[1];
      if (query) {
        i = -1;
        query = query.split('&');
        while (!!(pathItem = query[++i])) {
          pathItem = pathItem.split('=');
          name = decodeURIComponent(pathItem[0]);
          if (result[name] !== undefined) {
            if (!(result[name] instanceof Array)) {
              result[name] = [result[name]];
            }
            result[name].push(_scrubURLValue(pathItem[1]));
          } else {
            result[name] = _scrubURLValue(pathItem[1]);
          }
        }
      }
      i = 0;
      path = urlParts[0].replace(/(^(http(s?)\:\/\/[^\/]+)?\/?)|(\/$)/, '');
      var breakApartPattern = new RegExp(pattern.replace(_multivariablePattern(), '(.+)').replace(_variablePattern(), '([^/]+)')),
          brokenPath = breakApartPattern.exec(path),
          brokenPattern = breakApartPattern.exec(pattern);
      while (!!(pathItem = brokenPath[++i])) {
        patternItem = brokenPattern[i];
        if (_multivariablePattern().test(patternItem)) {
          pathItem = pathItem.split('/');
        }
        result[patternItem.replace(_variableCharacters(), '')] = pathItem;
      }
      return result;
    },
    /**
     * Executes this route's controller action see if work
     * @method exec
     *
     * @param {String} url  The URL that supplies parameters to this route
     * @param {Lavaca.mvc.Router} router  The router used by the application
     * @param {Lavaca.mvc.ViewManager}  viewManager The view manager used by the application
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Executes this route's controller action see if work
     * @method exec
     *
     * @param {String} url  The URL that supplies parameters to this route
     * @param {Lavaca.mvc.Router} router  The router used by the application
     * @param {Lavaca.mvc.ViewManager}  viewManager The view manager used by the application
     * @param {Object} state  A history record object
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Executes this route's controller action see if work
     * @method exec
     *
     * @param {String} url  The URL that supplies parameters to this route
     * @param {Lavaca.mvc.Router} router  The router used by the application
     * @param {Lavaca.mvc.ViewManager}  viewManager The view manager used by the application
     * @param {Object} state  A history record object
     * @param {Object} params  Additional parameters to pass to the controller action
     * @return {Lavaca.util.Promise}  A promise
     */
    exec: function(url, router, viewManager, state, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[85718,86055],"range":[85668,86055],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":161,"label":"lavaca_require"}');
      var controller = new this.TController(router, viewManager),
          urlParams = this.parse(url),
          promise = controller.exec(this.action, merge(urlParams, params), state);
      function dispose() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[85933,85989],"range":[85914,85989],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":160,"label":"lavaca_require"}');
        delay(controller.dispose, controller);
      }
      promise.then(dispose, dispose);
      return promise;
    }
  });

  return Route;

});

define('lavaca/mvc/Router',['require','./Route','lavaca/net/History','lavaca/util/Disposable','lavaca/util/Promise'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86220,91856],"range":[86202,91856],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":174,"label":"lavaca_require"}');

  var Route = require('./Route'),
      History = require('lavaca/net/History'),
      Disposable = require('lavaca/util/Disposable'),
      Promise = require('lavaca/util/Promise');

  /**
   * @class lavaca.mvc.Router
   * @extends lavaca.util.Disposable
   * URL manager
   *
   * @constructor
   * @param {Lavaca.mvc.ViewManager} viewManager  The view manager
   */
  var Router = Disposable.extend(function(viewManager) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[86648,86988],"range":[86626,86988],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":163,"label":"lavaca_require"}');
    Disposable.call(this);
    /**
     * @field {Array} routes
     * @default []
     * The [[Lavaca.mvc.Route]]s used by this router
     */
    this.routes = [];
    /**
     * @field {Lavaca.mvc.ViewManager} viewManager
     * @default null
     * The view manager used by this router
     */
    this.viewManager = viewManager;

  }, {
    /**
     * @field {Boolean} locked
     * @default false
     * When true, the router is prevented from executing a route
     */
    locked: false,
    /**
     * @field {Boolean} hasNavigated
     * @default false
     * Whether or not this router has been used to navigate
     */
    hasNavigated: false,

    startHistory: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87335,87650],"range":[87324,87650],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":166,"label":"lavaca_require"}');
      this.onpopstate = function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87373,87590],"range":[87361,87590],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":165,"label":"lavaca_require"}');
        if (this.hasNavigated) {
          History.isRoutingBack = e.direction === 'back';
          this.exec(e.url, e).always(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87514,87570],"range":[87503,87570],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":164,"label":"lavaca_require"}');
            History.isRoutingBack = false;
          });
        }
      };
      History.on('popstate', this.onpopstate, this);
    },
    /**
     * Sets the viewManager property on the instance which is the view manager used by this router
     * @method setEl
     *
     * @param {Lavaca.mvc.ViewManager} viewManager
     * @return {Lavaca.mvc.Router}  This Router instance
     */
    setViewManager: function(viewManager) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[87945,88009],"range":[87923,88009],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":167,"label":"lavaca_require"}');
      this.viewManager = viewManager;
      return this;
    },
    /**
     * Adds multiple routes
     * @method add
     *
     * @param {Object} map  A hash in the form {pattern: [TController, action, params]}
     *   or {pattern: {controller: TController, action: action, params: params}
     * @return {Lavaca.mvc.Router}  The router (for chaining)
     */
    /**
     * Adds a route
     * @method add
     *
     * @param {String} pattern  The route URL pattern
     * @param {Function} TController  The type of controller to perform the action (should derive from [[Lavaca.mvc.Controller]])
     * @param {String} action  The name of the controller method to call
     * @return {Lavaca.mvc.Router}  The router (for chaining)
     */
    /**
     * Adds a route
     * @method add
     *
     * @param {String} pattern  The route URL pattern
     * @param {Function} TController  The type of controller to perform the action (should derive from [[Lavaca.mvc.Controller]])
     * @param {String} action  The name of the controller method to call
     * @param {Object} params  Key-value pairs that will be passed to the action
     * @return {Lavaca.mvc.Router}  The router (for chaining)
     */
    add: function(pattern, TController, action, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[89210,89779],"range":[89163,89779],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":168,"label":"lavaca_require"}');
      if (typeof pattern === 'object') {
        for (var p in pattern) {
          var args = pattern[p];
          if (args instanceof Array) {
            TController = args[0];
            action = args[1];
            params = args[2];
          } else {
            TController = args.controller;
            action = args.action;
            params = args.params;
          }
          this.add(p, TController, action, params);
        }
      } else {
        this.routes.push(new Route(pattern, TController, action, params));
      }
      return this;
    },
    /**
     * Executes the action for a given URL
     * @method exec
     *
     * @param {String} url  The URL
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Executes the action for a given URL
     * @method exec
     *
     * @param {String} url  The URL
     * @param {Object} state  A history record object
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Executes the action for a given URL
     * @method exec
     *
     * @param {String} url  The URL
     * @param {Object} state  A history record object
     * @param {Object} params  Additional parameters to pass to the route
     * @return {Lavaca.util.Promise}  A promise
     */
    exec: function(url, state, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90512,91283],"range":[90483,91283],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":171,"label":"lavaca_require"}');
      if (this.locked) {
        return (new Promise(this)).reject('locked');
      } else {
        this.locked = true;
      }
      if (!url) {
        url = '/';
      }
      if (url.indexOf('http') === 0) {
        url = url.replace(/^http(s?):\/\/.+?/, '');
      }
      var i = -1,
          route,
          promise = new Promise(this);
      promise.always(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90893,90925],"range":[90882,90925],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":169,"label":"lavaca_require"}');
        this.unlock();
      });
      if (!this.hasNavigated) {
        promise.success(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[90995,91042],"range":[90984,91042],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":170,"label":"lavaca_require"}');
          this.hasNavigated = true;
        });
      }
      while (!!(route = this.routes[++i])) {
        if (route.matches(url)) {
          return promise.when(route.exec(url, this, this.viewManager, state, params));
        }
      }
      return promise.reject(url, state);
    },
    /**
     * Unlocks the router so that it can be used again
     * @method unlock
     *
     * @return {Lavaca.mvc.Router}  This router (for chaining)
     */
    unlock: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91471,91524],"range":[91460,91524],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":172,"label":"lavaca_require"}');
      this.locked = false;
      return this;
    },
    /**
     * Readies the router for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91638,91823],"range":[91627,91823],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":173,"label":"lavaca_require"}');
      if (this.onpopstate) {
        History.off('popstate', this.onpopstate);
        this.onpopstate = null;
      }
      Disposable.prototype.dispose.apply(this, arguments);
    }
  });

  return new Router();

});

define('lavaca/util/resolve',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[91903,93354],"range":[91892,93354],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":176,"label":"lavaca_require"}');
  /**
   * Looks up or creates an object, given its global path (ie, 'Lavaca.resolve' resolves to this function,
   * 'no.obj.exists' resolves to null)
   * @class lavaca.util.resolve
   */
   /**
   * Looks up or creates an object, given its global path (ie, 'Lavaca.resolve' resolves to this function,
   * 'no.obj.exists' resolves to null)
   * @method resolve
   * @static
   *
   * @param {String} name  The fully-qualified name of the object to look up
   * @return {Object}  The resolved object
   */
   /**
   * Looks up or creates an object, given its global path (ie, 'Lavaca.resolve' resolves to this function,
   * 'no.obj.exists' resolves to null)
   * @method resolve
   * @static
   *
   * @param {String} name  The fully-qualified name of the object to look up
   * @param {Boolean} createIfNotExists  When true, any part of the name that doesn't already exist will be created
   * as an empty object
   * @return {Object}  The resolved object
   */
  var resolve = function(name, createIfNotExists, root) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[92927,93331],"range":[92887,93331],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":175,"label":"lavaca_require"}');
    if (!name) {
      return null;
    }
    name = name.split('.');
    var last = root || window,
        o = root || window,
        i = -1,
        segment;
    while (!!(segment = name[++i])) {
      o = o[segment];
      if (!o) {
        if (createIfNotExists) {
          o = last[segment] = {};
        } else {
          return null;
        }
      }
      last = o;
    }
    return o;
  };

  return resolve;

});

define('lavaca/net/Connectivity',['require','$','lavaca/util/Promise','lavaca/util/resolve'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[93469,96004],"range":[93451,96004],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":183,"label":"lavaca_require"}');

  var $ = require('$'),
      Promise = require('lavaca/util/Promise'),
      resolve = require('lavaca/util/resolve');

  /**
   * A utility type for working under different network connectivity situatioConnectivity.
   * @class lavaca.net.Connectivity
   */

  var _navigatorOnlineSupported = typeof navigator.onLine === 'boolean',
      _offlineAjaxHandlers = [],
      _offlineErrorCode = 'offline';

  function _onAjaxError(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[93906,94080],"range":[93879,94080],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":177,"label":"lavaca_require"}');
    if (arg === _offlineErrorCode) {
      var i = -1,
          callback;
      while (!!(callback = _offlineAjaxHandlers[++i])) {
        callback(arg);
      }
    }
  }

  var Connectivity = {};

  /**
   * Attempts to detect whether or not the browser is connected
   * @method isOffline
   * @static
   *
   * @return {Boolean}  True if the browser is offline; false if the browser is online
   *    or if connection status cannot be determined
   */
  Connectivity.isOffline = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[94403,94653],"range":[94392,94653],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":178,"label":"lavaca_require"}');
    var connectionType = resolve('navigator.connection.type');
    if (connectionType !== null) {
      return connectionType === resolve('Connection.NONE');
    } else {
      return _navigatorOnlineSupported ? !navigator.onLine : false;
    }
  };

  /**
   * Makes an AJAX request if the user is online. If the user is offline, the returned
   * promise will be rejected with the string argument "offline"
   * @method ajax
   * @static
   *
   * @param {Object} opts  jQuery-style AJAX options
   * @return {Lavaca.util.Promise}  A promise
   */
  Connectivity.ajax = function(opts) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[94992,95590],"range":[94977,95590],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":181,"label":"lavaca_require"}');
    var promise = new Promise(),
        origSuccess = opts.success,
        origError = opts.error;
    opts.success = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95125,95258],"range":[95114,95258],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":179,"label":"lavaca_require"}');
      if (origSuccess) {
        origSuccess.apply(this, arguments);
      }
      promise.resolve.apply(promise, arguments);
    };
    opts.error = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95288,95416],"range":[95277,95416],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":180,"label":"lavaca_require"}');
      if (origError) {
        origError.apply(this, arguments);
      }
      promise.reject.apply(promise, arguments);
    };
    if (Connectivity.isOffline()) {
      promise.reject(_offlineErrorCode);
    } else {
      $.ajax(opts);
    }
    promise.error(_onAjaxError);
    return promise;
  };

  /**
   * Adds a callback to be executed whenever any Lavaca.net.Connectivity.ajax() call is
   * blocked as a result of a lack of internet connection.
   * @method registerOfflineAjaxHandler
   * @static
   *
   * @param {Function} callback  The callback to execute
   */
  Connectivity.registerOfflineAjaxHandler = function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[95930,95976],"range":[95911,95976],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":182,"label":"lavaca_require"}');
    _offlineAjaxHandlers.push(callback);
  };

  return Connectivity;

});

define('lavaca/util/ArrayUtils',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[96054,98342],"range":[96043,98342],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":189,"label":"lavaca_require"}');

  /**
   * Utility class for working with arrays
   * @class lavaca.util.ArrayUtils
   */
  var ArrayUtils = {};

  /**
   * Gets the first index of an item in an array
   * @method indexOf
   * @static
   *
   * @param {Array} a  The array
   * @param {Object} o  The object to look for
   * @return {Number}  The first index of the object, or -1 if not found
   */
  ArrayUtils.indexOf = function(a, o) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[96462,96703],"range":[96447,96703],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":184,"label":"lavaca_require"}');
    if (!a) {
      return -1;
    } else if (a.indexOf) {
      return a.indexOf(o);
    } else {
      for (var i = 0, j = a.length; i < j; i++) {
        if (a[i] === o) {
          return i;
        }
      }
      return -1;
    }
  };

  /**
   * Determines whether an array contains an object
   * @method contains
   * @static
   *
   * @param {Array} a  The array
   * @param {Object} o  The object to look for
   * @return {Boolean}  True when the array contains the object, false otherwise
   */
  ArrayUtils.contains = function(a, o) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[97010,97057],"range":[96995,97057],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":185,"label":"lavaca_require"}');
    return ArrayUtils.indexOf(a, o) > -1;
  };

  /**
   * Removes the first instance of an item from an array, if it exists
   * @method remove
   * @static
   *
   * @param {Array} a  The array
   * @param {Object} o  The object to remove
   * @return {Number}  The former index of the item (or -1 if the item was not
   *   in the array)
   */
  ArrayUtils.remove = function(a, o) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[97396,97515],"range":[97381,97515],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":186,"label":"lavaca_require"}');
    var index = ArrayUtils.indexOf(a, o);
    if (index > -1) {
      a.splice(index, 1);
    }
    return index;
  };

  /**
   * Adds an item to the end of an array, if it was not already in the array
   * @method pushIfNotExists
   * @static
   *
   * @param {Array} a  The array
   * @param {Object} o  The object to add to the array
   * @return {Number}  The index of the item in the array
   */
  ArrayUtils.pushIfNotExists = function(a, o) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[97846,97972],"range":[97831,97972],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":187,"label":"lavaca_require"}');
    var index = ArrayUtils.indexOf(a, o);
    if (index === -1) {
      a[index = a.length] = o;
    }
    return index;
  };
  /**
   * Determines if object is an array
   * @method isArray
   * @static
   *
   * @param {Object} a  Any value of any type
   * @return {Boolean}  True if a is a true array
   */
  ArrayUtils.isArray = function(a) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98194,98316],"range":[98182,98316],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":188,"label":"lavaca_require"}');
    return Array.isArray === 'function' ? Array.isArray(a) : Object.prototype.toString.call(a) === '[object Array]';
  };

  return ArrayUtils;

});

define('lavaca/util/Cache',['require','lavaca/util/Disposable','lavaca/util/uuid'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[98447,102855],"range":[98429,102855],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":205,"label":"lavaca_require"}');

  var Disposable = require('lavaca/util/Disposable'),
      uuid = require('lavaca/util/uuid');

  /**
   * Object for storing data
   * @class lavaca.util.Cache
   * @extends lavaca.util.Disposable
   */
  var Cache = Disposable.extend({
    /**
     *
     * Retrieves an item from the cache
     * @method get
     * @param {String} id  The key under which the item is stored
     * @return {Object}  The stored item (or null if no item is stored)
     */
     /**
     * Retrieves an item from the cache
     * @method get
     * @param {String} id  The key under which the item is stored
     * @param {Object} def  A default value that will be added, if there is no item stored
     * @return {Object}  The stored item (or null if no item is stored and no default)
     */
    get: function(id, def) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[99256,99451],"range":[99238,99451],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":190,"label":"lavaca_require"}');
      var result = this['@' + id];
      if (result === undefined && def !== undefined) {
        result = this['@' + id] = def;
      }
      return result === undefined ? null : result;
    },
    /**
     * Assigns an item to a key in the cache
     * @method set
     *
     * @param {String} id  The key under which the item will be stored
     * @param {Object} value  The object to store in the cache
     */
    set: function(id, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[99703,99740],"range":[99683,99740],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":191,"label":"lavaca_require"}');
      this['@' + id] = value;
    },
    /**
     * Adds an item to the cache
     * @method add
     *
     * @param {Object} value  The object to store in the cache
     * @return {String}  The auto-generated ID under which the value was stored
     */
    add: function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[99985,100059],"range":[99969,100059],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":192,"label":"lavaca_require"}');
      var id = uuid();
      this.set(id, value);
      return id;
    },
    /**
     * Removes an item from the cache (if it exists)
     * @method remove
     *
     * @param {String} id  The key under which the item is stored
     */
    remove: function(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[100250,100286],"range":[100237,100286],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":193,"label":"lavaca_require"}');
      delete this['@' + id];
    },
    /**
     * Executes a callback for each cached item. To stop iteration immediately,
     * return false from the callback.
     * @method each
     * @param {Function} callback  A function to execute for each item, callback(key, item)
     */
     /**
     * Executes a callback for each cached item. To stop iteration immediately,
     * return false from the callback.
     * @method each
     * @param {Function} callback  A function to execute for each item, callback(key, item)
     * @param {Object} thisp  The context of the callback
     */
    each: function(cb, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[100871,101156],"range":[100851,101156],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":194,"label":"lavaca_require"}');
      var prop, returned;
      for (prop in this) {
        if (this.hasOwnProperty(prop) && prop.indexOf('@') === 0) {
          returned = cb.call(thisp || this, prop.slice(1), this[prop]);
          if (returned === false) {
            break;
          }
        }
      }
    },
    /**
     * Serializes the cache to a hash
     * @method toObject
     *
     * @return {Object}  The resulting key-value hash
     */
    toObject: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[101322,101522],"range":[101311,101522],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":196,"label":"lavaca_require"}');
      var result = {};
      this.each(function(prop, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[101385,101493],"range":[101363,101493],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":195,"label":"lavaca_require"}');
        result[prop] = (value && typeof value.toObject === 'function') ? value.toObject() : value;
      });
      return result;
    },
    /**
     * Serializes the cache to JSON
     * @method toJSON
     *
     * @return {String}  The JSON string
     */
    toJSON: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[101669,101722],"range":[101658,101722],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":197,"label":"lavaca_require"}');
      return JSON.stringify(this.toObject());
    },
     /**
     * Serializes the cache to an array
     * @method toArray
     *
     * @return {Object}  The resulting array with elements being index based and keys stored in an array on the 'ids' property
     */
    toArray: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[101962,102214],"range":[101951,102214],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":199,"label":"lavaca_require"}');
      var results = [];
      results['ids'] = [];
      this.each(function(prop, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[102053,102184],"range":[102031,102184],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":198,"label":"lavaca_require"}');
        results.push(typeof value.toObject === 'function' ? value.toObject() : value);
        results['ids'].push(prop);
      });
      return results;
    },

    /**
     * removes all items from the cache
     * @method clear
     */
    clear: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[102316,102406],"range":[102305,102406],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":201,"label":"lavaca_require"}');
       this.each(function(key, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[102355,102392],"range":[102335,102392],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":200,"label":"lavaca_require"}');
         this.remove(key);
       }, this);
    },

    /**
     * returns number of items in cache
     * @method count
     */
    count: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[102508,102627],"range":[102497,102627],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":203,"label":"lavaca_require"}');
      var count = 0;
      this.each(function(key, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[102567,102593],"range":[102547,102593],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":202,"label":"lavaca_require"}');
        count++;
      }, this);
      return count;
    },

    /**
     * Clears all items from the cache on dispose
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[102743,102829],"range":[102732,102829],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":204,"label":"lavaca_require"}');
      this.clear();
      Disposable.prototype.dispose.apply(this, arguments);
    }
  });

  return Cache;

});

define('lavaca/util/Map',['require','$','./Cache','./Disposable','lavaca/net/Connectivity'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[102969,108410],"range":[102951,108410],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":219,"label":"lavaca_require"}');

  var $ = require('$'),
      Cache = require('./Cache'),
      Disposable = require('./Disposable'),
      Connectivity = require('lavaca/net/Connectivity');

  function _absolute(url) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[103158,103561],"range":[103134,103561],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":206,"label":"lavaca_require"}');
    if (url && url.indexOf('http') !== 0) {
      if (url.charAt(0) === '/') {
        url = location.protocol + '//'
          + location.hostname
          + (location.port ? ':' + location.port : '')
          + (url.indexOf('/') === 0 ? url : '/' + url);
      } else {
        url = location.toString().split('#')[0].split('?')[0].replace(/\w+\.\w+$/, '') + url;
      }
    }
    return url;
  }

  /**
   * Abstract type for lookup tables
   * @class lavaca.util.Map
   * @extends lavaca.util.Disposable
   *
   * @constructor
   * @param {String} name  The name of the map
   * @param {String} src  The URL of the map's data (or null if code is supplied)
   * @param {String} code  The raw string data for the map (or null if src is supplied)
   */
  var Map = Disposable.extend(function(name, src, code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[103973,104703],"range":[103947,104703],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":207,"label":"lavaca_require"}');
    Disposable.call(this);
    /**
     * Whether or not the map has loaded
     * @property {Boolean} hasLoaded
     * @default false
     */
    this.hasLoaded = false;
    /**
     * The name of the map
     * @property {String} name
     * @default null
     */
    this.name = name;
    /**
     * The source URL for the map
     * @property {String} src
     * @default null
     */
    this.src = _absolute(src);
    /**
     * The raw string data for the map
     * @property {String} code
     * @default null
     */
    this.code = code;
    /**
     * The cache in which this map stores data
     * @property {Lavaca.util.Cache} cache
     * @default new Lavaca.util.Cache()
     */
    this.cache = new Cache();
  }, {
    /**
     * Determines whether or not this is the desired lookup
     * @method is
     *
     * @param {String} name  The name of the lookup
     * @return {Boolean}  True if this is the lookup
     */
    is: function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[104936,104976],"range":[104921,104976],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":208,"label":"lavaca_require"}');
      return this.name === name;
    },
    /**
     * Gets the value stored under a code
     * @method get
     *
     * @param {String} code  The code
     * @return {Object}  The value (or null)
     */
    get: function(code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[105169,105407],"range":[105154,105407],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":209,"label":"lavaca_require"}');
      if (!this.hasLoaded) {
        if (this.code) {
          this.add(this.code);
        } else if (this.src) {
          this.load(this.src);
        }
        this.hasLoaded = true;
      }
      return this.cache.get(code);
    },
    /**
     * Adds parameters to this map
     * @method add
     *
     * @param {Object} data  The parameters to add
     */
    add: function(data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[105561,105640],"range":[105546,105640],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":210,"label":"lavaca_require"}');
      for (var n in data) {
        this.cache.set(n, data[n]);
      }
    },
    /**
     * Processes server data to include in this lookup
     * @method process
     *
     * @param {String} text  The server data string
     */
    process: function(text) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[105823,105898],"range":[105808,105898],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":211,"label":"lavaca_require"}');
      this.add(typeof text === 'string' ? JSON.parse(text) : text);
    },
    /**
     * Adds JSON data to this map (synchronous)
     * @method load
     *
     * @param {String} url  The URL of the data
     */
    load: function(url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[106063,106243],"range":[106049,106243],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":213,"label":"lavaca_require"}');
      var self = this;
      Connectivity.ajax({
        async: false,
        url: url,
        success: function(resp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[106186,106227],"range":[106171,106227],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":212,"label":"lavaca_require"}');
          self.process(resp);
        }
      });
    }
  });
  /**
   * Sets the application's default config
   * @method setDefault
   * @static
   *
   * @param {Lavaca.util.Cache} cache  The map cache
   * @param {String} name  The name of the config
   */
  Map.setDefault = function(cache, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[106491,106617],"range":[106469,106617],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":214,"label":"lavaca_require"}');
    var map = name;
    if (typeof map === 'string') {
      map = cache.get(name);
    }
    cache.set('default', map);
  };
  /**
   * Finds the most appropriate value for a code
   * @method get
   * @static
   *
   * @param {Lavaca.util.Cache} cache  The maps cache
   * @param {String} name  The name of the map
   * @param {String} code  The name of the parameter
   * @param {String} defaultName  The name of the default map
   * @return {Object}  The value of the parameter
   */
  Map.get = function(cache, name, code, defaultName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107034,107234],"range":[106993,107234],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":215,"label":"lavaca_require"}');
    if (!code) {
      code = name;
      name = defaultName;
    }
    if (name) {
      var map = cache.get(name);
      if (map) {
        return map.get(code);
      }
    }
    return null;
  };
  /**
   * Scans the document for all maps and prepares them
   * @method init
   * @static
   *
   * @param {Lavaca.util.Cache} cache  The map cache
   * @param {String} mimeType  The MIME type of the scripts
   * @param {Function} construct  A function that returns a new map, in
   *   the form construct(name, src, code)
   * @param {jQuery} scope  The element to which to limit the scan
   */
  Map.init = function(cache, mimeType, construct, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107691,108201],"range":[107647,108201],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":217,"label":"lavaca_require"}');
    $(scope || document.documentElement)
      .find('script[type="' + mimeType + '"]')
      .each(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[107804,108195],"range":[107793,108195],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":216,"label":"lavaca_require"}');
        var item = $(this),
            src = item.attr('data-src'),
            name = item.attr('data-name'),
            isDefault = typeof item.attr('data-default') === 'string',
            code = item.text(),
            map;
        map = construct(name, src, code);
        cache.set(map.name, map);
        if (isDefault) {
          Map.setDefault(cache, name);
        }
      });
  };
  /**
   * Disposes of all maps
   * @method dispose
   * @static
   *
   * @param {Lavaca.util.Cache} cache  The map cache
   */
  Map.dispose = function(cache) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108365,108391],"range":[108349,108391],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":218,"label":"lavaca_require"}');
    cache.dispose();
  };

  return Map;

});

define('lavaca/util/Config',['require','./Cache','./Map'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[108490,110480],"range":[108472,110480],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":226,"label":"lavaca_require"}');

  var Cache = require('./Cache'),
      Map = require('./Map');

  var _cache = new Cache();

  function _construct(name, src, code) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[108626,108724],"range":[108589,108724],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":220,"label":"lavaca_require"}');
    if (code) {
      code = JSON.parse(code);
    }
    return new Config(name, src, code);
  }

  /**
   * Configuration management type
   * @class lavaca.util.Config
   * @extends lavaca.util.Map
   */
  var Config = Map.extend({
    // Empty (no overrides)
  });
  /**
   * Sets the application's default config
   * @method setDefault
   * @static
   *
   * @param {String} name  The name of the default config
   */
  Config.setDefault = function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109088,109127],"range":[109073,109127],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":221,"label":"lavaca_require"}');
    Map.setDefault(_cache, name);
  };
  /**
   * Gets the application's current config environment name
   * @method currentEnvironment
   * @static
   *
   * @return {String} The name of the current environment
   */
  Config.currentEnvironment = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109350,109394],"range":[109339,109394],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":222,"label":"lavaca_require"}');
    return _cache.get('default').name;
  };
  /**
   * Retrieves a value from the configuration
   * @method get
   * @static
   * @param {String} code  The name of the parameter
   * @return {Object}  The value of the parameter
   */
   /**
   * Retrieves a value from the configuration
   * @method get
   * @static
   * @param {String} name  The name of the config
   * @param {String} code  The name of the parameter
   * @return {Object}  The value of the parameter
   */
  Config.get = function(name, code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[109865,109921],"range":[109844,109921],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":223,"label":"lavaca_require"}');
    return Map.get(_cache, name, code, 'default');
  };
  /**
   * Scans the document for all translations and prepares them
   * @method init
   * @static
   */
   /**
   * Scans the document for all translations and prepares them
   * @method init
   * @static
   * @param {jQuery} scope  The element to which to limit the scan
   */
  Config.init = function(scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110235,110298],"range":[110219,110298],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":224,"label":"lavaca_require"}');
    Map.init(_cache, 'text/x-config', _construct, scope);
  };
  /**
   * Disposes of all translations
   * @method dispose
   * @static
   */
  Config.dispose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110410,110440],"range":[110399,110440],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":225,"label":"lavaca_require"}');
    Map.dispose(_cache);
  };

  Config.init();

  return Config;

});

define('lavaca/mvc/Model',['require','lavaca/events/EventDispatcher','lavaca/net/Connectivity','lavaca/util/ArrayUtils','lavaca/util/Cache','lavaca/util/Promise','mout/lang/deepClone','mout/object/merge','lavaca/util/Config'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[110728,130754],"range":[110710,130754],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":261,"label":"lavaca_require"}');

  var EventDispatcher = require('lavaca/events/EventDispatcher'),
      Connectivity = require('lavaca/net/Connectivity'),
      ArrayUtils = require('lavaca/util/ArrayUtils'),
      Cache = require('lavaca/util/Cache'),
      Promise = require('lavaca/util/Promise'),
      clone = require('mout/lang/deepClone'),
      merge = require('mout/object/merge'),
      Config = require('lavaca/util/Config');


  var UNDEFINED;

  function _triggerAttributeEvent(model, event, attribute, previous, value, messages) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[111242,111464],"range":[111158,111464],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":227,"label":"lavaca_require"}');
    model.trigger(event, {
      attribute: attribute,
      previous: previous === UNDEFINED ? null : previous,
      value: value === UNDEFINED ? model.get(attribute) : value,
      messages: messages || []
    });
  }

  function _setFlagOn(model, name, flag) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[111507,111679],"range":[111468,111679],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":228,"label":"lavaca_require"}');
    var keys = model.flags[flag];
    if (!keys) {
      keys = model.flags[flag] = [];
    }
    if (!ArrayUtils.contains(keys, name)) {
      keys.push(name);
    }
  }

  function _suppressChecked(model, suppress, callback) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[111736,112167],"range":[111683,112167],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":229,"label":"lavaca_require"}');
    suppress = !!suppress;
    var props = ['suppressValidation', 'suppressEvents', 'suppressTracking'],
        old = {},
        i = -1,
        prop,
        result;
    while (!!(prop = props[++i])) {
      old[prop] = model[prop];
      model[prop] = suppress || model[prop];
    }
    result = callback.call(model);
    i = -1;
    while (!!(prop = props[++i])) {
      model[prop] = old[prop];
    }
    return result;
  }

  function _isValid(messages){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[112198,112398],"range":[112171,112398],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":230,"label":"lavaca_require"}');
    var isValid = true;
    for(var attribute in messages){
      if (messages[attribute].length > 0){
        isValid = false;
      }
    }
    messages.isValid = isValid;
    return messages;
  }


  // Virtual type
  /**
   * Event type used when an attribute is modified
   * @class lavaca.mvc.AttributeEvent
   * @extends Event
   */
   /**
   * The name of the event-causing attribute
   * @property {String} attribute
   * @default null
   */
   /**
   * The value of the attribute before the event
   * @property {Object} previous
   * @default null
   */
   /**
   * The value of the attribute after the event
   * @property {Object} value
   * @default null
   */
   /**
   * A list of validation messages the change caused
   * @property {Array} messages
   * @default []
   */

  /**
   * Basic model type
   * @class lavaca.mvc.Model
   * @extends lavaca.events.EventDispatcher
   *
   * Place the events where they are triggered in the code, see the yuidoc syntax reference and view.js for rendersuccess trigger
   * @event change
   * @event invalid
   * @event fetchSuccess
   * @event fetchError
   * @event saveSuccess
   * @event saveError
   *
   * @constructor
   * @param {Object} [map]  A parameter hash to apply to the model
   */
  var Model = EventDispatcher.extend(function(map) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[113507,113930],"range":[113493,113930],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":231,"label":"lavaca_require"}');
    EventDispatcher.call(this);
    this.attributes = new Cache();
    this.rules = new Cache();
    this.unsavedAttributes = [];
    this.flags = {};
    if (this.defaults) {
      map = merge({}, this.defaults, map);
    }
    if (map) {
      this.suppressEvents
        = this.suppressTracking
        = true;
      this.apply(map);
      this.suppressEvents
        = this.suppressTracking
        = false;
    }
  }, {
    /**
     * When true, attributes are not validated
     * @property suppressValidation
     * @default false
     *
     * @type Boolean
     */

    suppressValidation: false,
    /**
     * When true, changes to attributes are not tracked
     * @property suppressTracking
     * @default false
     *
     * @type Boolean
     */

    suppressTracking: false,
    /**
     * Gets the value of a attribute
     * @method get
     *
     * @param {String} attribute  The name of the attribute
     * @return {Object}  The value of the attribute, or null if there is no value
     */
    get: function(attribute) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[114551,114836],"range":[114531,114836],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":232,"label":"lavaca_require"}');
      var attr = this.attributes.get(attribute),
          flags;
      if (typeof attr === 'function') {
        flags = this.flags[Model.DO_NOT_COMPUTE];
        return !flags || ArrayUtils.indexOf(flags, attribute) === -1 ? attr.call(this) : attr;
      }
      return attr;
    },
    /**
     * Determines whether or not an attribute can be assigned
     * @method canSet
     *
     * @param {String} attribute  The name of the attribute
     * @return {Boolean}  True if you can assign to the attribute
     */
    canSet: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[115094,115120],"range":[115083,115120],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":233,"label":"lavaca_require"}');
      return true;
    },
    /**
     * Sets the value of the attribute, if it passes validation
     * @method set
     *
     * @param {String} attribute  The name of the attribute
     * @param {Object} value  The new value
     * @return {Boolean}  True if attribute was set, false otherwise
     *
     */
    /**
     * Sets the value of the attribute, if it passes validation
     * @method set
     *
     * @param {String} attribute  The name of the attribute
     * @param {Object} value  The new value
     * @param {String} flag  A metadata flag describing the attribute
     * @param {Boolean} suppress  When true, validation, events and tracking are suppressed
     * @return {Boolean}  True if attribute was set, false otherwise
     */
//* @event invalid
//* @event change


    set: function(attribute, value, flag, suppress) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[115940,116876],"range":[115897,116876],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":235,"label":"lavaca_require"}');
      return _suppressChecked(this, suppress, function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[115999,116868],"range":[115988,116868],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":234,"label":"lavaca_require"}');
        if (!this.canSet(attribute)) {
          return false;
        }
        var previous = this.attributes.get(attribute),
            messages = this.suppressValidation ? [] : this.validate(attribute, value);
        if (messages.length) {
          _triggerAttributeEvent(this, 'invalid', attribute, previous, value, messages);
          return false;
        } else {
          if (previous !== value) {
            this.attributes.set(attribute, value);
            if (flag) {
              _setFlagOn(this, attribute, flag);
            }
            _triggerAttributeEvent(this, 'change', attribute, previous, value);
            if (!this.suppressTracking
                && !ArrayUtils.contains(this.unsavedAttributes, attribute)) {
              this.unsavedAttributes.push(attribute);
            }
          }
          return true;
        }
      });
    },
    /**
     * Determines whether or not this model has a named attribute
     * @method has
     *
     * @param {String} attribute  The name of the attribute
     * @return {Boolean}  True if the attribute exists and has a value
     */
    has: function(attribute) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117146,117196],"range":[117126,117196],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":236,"label":"lavaca_require"}');
      return this.get(attribute) !== null;
    },
    /**
     * The name of the ID attribute
     * @property id
     * @default 'id'
     *
     * @type String
     */

    idAttribute: 'id',
    /**
     * Gets the ID of the model
     * @method id
     *
     * @return {String}  The ID of the model
     */
    id: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117479,117527],"range":[117468,117527],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":237,"label":"lavaca_require"}');
      return this.get(this.idAttribute);
    },
    /**
     * Determines whether or not this model has been saved before
     * @method isNew
     *
     * @return {Boolean}  True when the model has no ID associated with it
     */
    isNew: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[117736,117776],"range":[117725,117776],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":238,"label":"lavaca_require"}');
      return null === this.id();
    },
    /**
     * Ensures that a map is suitable to be applied to this model
     * @method parse
     *
     * @param {Object} map  The string or key-value hash to parse
     * @return {Object}  The parsed version of the map
     */
    parse: function(map) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[118034,118135],"range":[118020,118135],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":239,"label":"lavaca_require"}');
      if (typeof map === 'string') {
        map = JSON.parse(map);
      }
      return map;
    },
    /**
     * Sets each attribute of this model according to the map
     * @method apply
     *
     * @param {Object} map  The string or key-value map to parse and apply
     */
    /**
     * Sets each attribute of this model according to the map
     * @method apply
     *
     * @param {Object} map  The string or key-value map to parse and apply
     * @param {Boolean} suppress  When true, validation, events and tracking are suppressed
     */
    apply: function(map, suppress) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[118626,118796],"range":[118602,118796],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":241,"label":"lavaca_require"}');
      _suppressChecked(this, suppress, function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[118678,118788],"range":[118667,118788],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":240,"label":"lavaca_require"}');
        map = this.parse(map);
        for (var n in map) {
          this.set(n, map[n]);
        }
      });
    },
    /**
     * Removes all data from the model or removes selected flag from model.
     * @method clear
     *
     * @sig
     * Removes all flagged data from the model
     * @param {String} flag  The metadata flag describing the data to remove
     */
    clear: function(flag) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[119080,119638],"range":[119065,119638],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":242,"label":"lavaca_require"}');
      if (flag) {
        var attrs = this.flags[flag],
            i = -1,
            attr,
            item;
        if (attrs) {
          while (!!(attr = attrs[++i])) {
            ArrayUtils.remove(this.unsavedAttributes, attr);
            item = this.get(attr);
            if (item && item.dispose) {
              item.dispose();
            }
            this.set(attr, null);
          }
        }
      } else {
        this.attributes.dispose();
        this.attributes = new Cache();
        this.unsavedAttributes.length = 0;
      }
    },
    /**
     * Makes a copy of this model
     * @method clone
     *
     * @return {Lavaca.mvc.Model}  The copy
     */
    clone: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[119784,119854],"range":[119773,119854],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":243,"label":"lavaca_require"}');
      return new this.constructor(this.attributes.toObject());
    },
    /**
     * Adds a validation rule to this model
     * @method addRule
     *
     * @param {String} attribute  The name of the attribute to which the rule applies
     * @param {Function} callback  The callback to use to validate the attribute, in the
     *   form callback(attribute, value)
     * @param {String} message  A text message used when a value fails the test
     */
    addRule: function(attribute, callback, message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[120294,120379],"range":[120255,120379],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":244,"label":"lavaca_require"}');
      this.rules.get(attribute, []).push({rule: callback, message: message});
    },
    /**
     * Validates all attributes on the model
     * @method validate
     *
     * @return {Object}  A map of attribute names to validation error messages
     */
    /**
     * Runs validation tests for a specific attribute
     * @method validate
     *
     * @param {String}  The name of the attribute to test
     * @return {Array}  A list of validation error messages
     */
    /**
     * Runs validation against a potential value for a attribute
     * @method validate
     * @param {String} attribute  The name of the attribute
     * @param {Object} value  The potential value for the attribute
     * @return {Array}  A list of validation error messages
     */
    validate: function(attribute, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[121105,121776],"range":[121078,121776],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":246,"label":"lavaca_require"}');
      var messages,
          rules,
          i = -1,
          rule;
      if (attribute) {
        messages = [];
        value = value === UNDEFINED ? this.get(attribute, value) : value;
        rules = this.rules.get(attribute);
        if (rules) {
          while (!!(rule = rules[++i])) {
            if (!rule.rule(attribute, value)) {
              messages.push(rule.message);
            }
          }
        }
        return messages;
      } else {
        messages = {};
        this.rules.each(function(attributeName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[121642,121719],"range":[121618,121719],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":245,"label":"lavaca_require"}');
          messages[attributeName] = this.validate(attributeName);
        }, this);
        return _isValid(messages);
      }
    },
    /**
     * Processes the data received from a fetch request
     * @method onFetchSuccess
     *
     * @param {Object} response  The response data
     */
    onFetchSuccess: function(response) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[121977,122251],"range":[121958,122251],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":247,"label":"lavaca_require"}');
      response = this.parse(response);
      if (this.responseFilter && typeof this.responseFilter === 'function') {
        response = this.responseFilter(response);
      }
      this.apply(response, true);
      this.trigger('fetchSuccess', {response: response});
    },
    /**
     * Triggered when the model is unable to fetch data
     * @method onFetchError
     *
     * @param {Object} value  The error value
     */
    onFetchError: function(response) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[122443,122506],"range":[122424,122506],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":248,"label":"lavaca_require"}');
      this.trigger('fetchError', {response: response});
    },
    /**
     * Loads the data for this model from the server and only apply to this model attributes (Note: Does not clear the model first)
     * @method fetch
     *
     * @event fetchSuccess
     * @event fetchError
     */
    /**
     * Loads the data for this model from the server and only apply to this model attributes (Note: Does not clear the model first)
     * @method fetch
     *
     * @param {String} url  The URL from which to load the data
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Loads the data for this model from the server and only apply to this model attributes (Note: Does not clear the model first)
     * @method fetch
     *
     * @param {Object} options  jQuery AJAX settings. If url property is missing, fetch() will try to use the url property on this model
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Loads the data for this model from the server and only apply to this model attributes (Note: Does not clear the model first)
     * @method fetch
     *
     * @param {String} url  The URL from which to load the data
     * @param {Object} options  jQuery AJAX settings
     * @return {Lavaca.util.Promise}  A promise
     */
    fetch: function(url, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[123760,124111],"range":[123737,124111],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":249,"label":"lavaca_require"}');
      if (typeof url === 'object') {
        options = url;
      } else {
        options = clone(options || {});
        options.url = url;
      }
      options.url = this.getApiURL(options.url || this.url);
      return Promise.when(this, Connectivity.ajax(options))
        .success(this.onFetchSuccess)
        .error(this.onFetchError);
    },
    /**
     * Converts a relative path to an absolute api url based on environment config 'apiRoot'
     * @method getApiURL
     *
     * @param {String} relPath  A relative path
     * @return {String}  A formated api url or an apparently bad url '/please_set_model_url' if relPath argument is faslsy
     */
    getApiURL: function(relPath) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[124458,124686],"range":[124440,124686],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":250,"label":"lavaca_require"}');
      var badURL = '/please_set_model_url',
          apiRoot = Config.get('apiRoot'),
          apiURL;
      if (!relPath) {
        return badURL;
      }
      apiURL = (apiRoot || '') + relPath;
      return apiURL;
    },
    /**
     * Saves the model
     * @method save
     *
     *
     * @param {Function} callback  A function callback(model, changedAttributes, attributes)
     *   that returns either a promise or a truthy value
     *   indicating whether the operation failed or succeeded
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Saves the model
     * @method save
     *
     * @param {Function} callback  A function callback(model, changedAttributes, attributes)
     *   that returns either a promise or a truthy value
     *   indicating whether the operation failed or succeeded
     * @param {Object} thisp  The context for the callback
     * @return {Lavaca.util.Promise}  A promise
     */

//* @event saveSuccess
//* @event saveError

    save: function(callback, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[125488,126520],"range":[125462,126520],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":253,"label":"lavaca_require"}');
      var promise = new Promise(this),
          attributes = this.toObject(),
          changedAttributes = {},
          i = -1,
          attribute,
          result;
      while (!!(attribute = this.unsavedAttributes[++i])) {
        changedAttributes[attribute] = attributes[attribute];
      }
      promise
        .success(function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[125837,126124],"range":[125821,126124],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":251,"label":"lavaca_require"}');
          var idAttribute = this.idAttribute;
          if (this.isNew() && value[idAttribute] !== UNDEFINED) {
            this.set(idAttribute, value[idAttribute]);
          }
          this.unsavedAttributes = [];
          this.trigger('saveSuccess', {response: value});
        })
        .error(function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126157,126224],"range":[126141,126224],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":252,"label":"lavaca_require"}');
          this.trigger('saveError', {response: value});
        });
      result = callback.call(thisp || this, this, changedAttributes, attributes);
      if (result instanceof Promise) {
        promise.when(result);
      } else if (result) {
        promise.resolve(result);
      } else {
        promise.reject(result);
      }
      return promise;
    },
    /**
     * Saves the model to the server via POST
     * @method saveToServer
     *
     * @param {String} url  The URL to which to post the data
     * @return {Lavaca.util.Promise}  A promise
     */
    saveToServer: function(url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126761,127264],"range":[126747,127264],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":255,"label":"lavaca_require"}');
      return this.save(function(model, changedAttributes, attributes) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[126833,127256],"range":[126786,127256],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":254,"label":"lavaca_require"}');
        var id = this.id(),
            data;
        if (this.isNew()) {
          data = attributes;
        } else {
          changedAttributes[this.idAttribute] = id;
          data = changedAttributes;
        }
        return Promise.when(this, Connectivity.ajax({
            url: url,
            cache: false,
            type: 'POST',
            data: data,
            dataType: 'json'
          }));
      });
    },
    /**
     * Converts this model to a key-value hash
     * @method toObject
     *
     * @return {Object}  The key-value hash
     */
    toObject: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[127429,127779],"range":[127418,127779],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":256,"label":"lavaca_require"}');
      var obj = this.attributes.toObject(),
          flags;
      for(var key in obj) {
        if(typeof obj[key] === "function") {
          flags = this.flags[Model.DO_NOT_COMPUTE];
          if (!flags || ArrayUtils.indexOf(flags, key) === -1) {
            obj[key] = obj[key].call(this);
          }
        }
      }
      return obj;
    },
    /**
     * Converts this model to JSON
     * @method toJSON
     *
     * @return {String}  The JSON string representing the model
     */
    toJSON: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[127948,128001],"range":[127937,128001],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":257,"label":"lavaca_require"}');
      return JSON.stringify(this.toObject());
    },
    /**
     * Bind an event handler to this object
     * @method on
     *
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function to execute when the event occurs
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Bind an event handler to this object
     * @method on
     *
     * @param {String} type  The name of the event
     * @param {String} attr  An attribute to which to limit the scope of events
     * @param {Function} callback  The function to execute when the event occurs
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Bind an event handler to this object
     * @method on
     * @param {String} type  The name of the event
     * @param {Function} callback  The function to execute when the event occurs
     * @param {Object} thisp  The context of the handler
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Bind an event handler to this object
     * @method on
     * @param {String} type  The name of the event
     * @param {String} attr  An attribute to which to limit the scope of events
     * @param {Function} callback  The function to execute when the event occurs
     * @param {Object} thisp  The context of the handler
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    on: function(type, attr, callback, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[129524,129919],"range":[129486,129919],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":259,"label":"lavaca_require"}');
      if (typeof attr === 'function') {
        thisp = callback;
        callback = attr;
        attr = null;
      }
      function handler(e) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[129672,129779],"range":[129652,129779],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":258,"label":"lavaca_require"}');
        if (!attr || e.attribute === attr) {
          callback.call(thisp || this, e);
        }
      }
      handler.fn = callback;
      handler.thisp = thisp;
      return EventDispatcher.prototype.on.call(this, type, handler, thisp);
    },
    /**
    * Filters the raw response from onFetchSuccess() down to a custom object. (Meant to be overriden)
    * @method responseFilter
    *
    * @param {Object} response  The raw response passed in onFetchSuccess()
    * @return {Object}  An object to be applied to this model instance
    */
    responseFilter: function(response) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[130259,130289],"range":[130240,130289],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":260,"label":"lavaca_require"}');
      return response;
    }
  });
  /**
   * @field {String} SENSITIVE
   * @static
   * @default 'sensitive'
   * Flag indicating that data is sensitive
   */
  Model.SENSITIVE = 'sensitive';
  /**
   * @field {String} DO_NOT_COMPUTE
   * @static
   * @default 'do_not_compute'
   * Flag indicating that the selected attribute should not be executed
   * as a computed property and should instead just return the function.
   */
  Model.DO_NOT_COMPUTE = 'do_not_compute';

  return Model;

});

define('lavaca/ui/Template',['require','lavaca/util/Cache','lavaca/util/Map'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[130854,134554],"range":[130836,134554],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":271,"label":"lavaca_require"}');

  var Cache = require('lavaca/util/Cache'),
      Map = require('lavaca/util/Map');

  var _cache = new Cache(),
      _types = [];

  /**
   * Abstract type for templates
   * @class lavaca.ui.Template
   * @extends lavaca.util.Map
   */
  var Template = Map.extend({
    /**
     * Compiles the template
     * @method compile
     */
    compile: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[131218,131245],"range":[131207,131245],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":262,"label":"lavaca_require"}');
      // Do nothing
    },
    /**
     * Renders the template to a string
     * @method render
     *
     * @param {Object} model  The data model to provide to the template
     * @return {Lavaca.util.Promise}  A promise
     */
    render: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[131475,131506],"range":[131464,131506],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":263,"label":"lavaca_require"}');
      throw 'Abstract';
    },
    /**
     * Parses server data to include in this lookup
     * @method process
     *
     * @param {String} text  The server data string
     */
    process: function(text) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[131686,131717],"range":[131671,131717],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":264,"label":"lavaca_require"}');
      this.code = text;
    }
  });
  /**
   * Finds the template with a given name
   * @method get
   * @static
   *
   * @param {String} name  The name of the template
   * @return {Lavaca.ui.Template}  The template (or null if no such template exists)
   */
  Template.get = function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[131982,132016],"range":[131967,132016],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":265,"label":"lavaca_require"}');
    return _cache.get(name);
  };
  /**
   * Scans the document for all templates with registered types and
   *   prepares template objects from them
   * @method init
   * @static
   */
   /**
   *
   * Scans the document for all templates with registered types and
   *   prepares template objects from them
   * @method init
   * @static
   * @param {jQuery} scope  The element to which to limit the scan
   */
  Template.init = function(scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[132433,133147],"range":[132417,133147],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":267,"label":"lavaca_require"}');
    var i = -1,
        type, templates, templateName, template;

    while (!!(type = _types[++i])) {
      var construct = function(name, src, code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[132586,132640],"range":[132560,132640],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":266,"label":"lavaca_require"}');
        return new type.js(name, src, code);
      };

      // Load pre-compiled templates
      if (typeof type.js.getCompiledTemplates === "function") {
        templates = type.js.getCompiledTemplates();
        for (templateName in templates) {
          template = construct(templateName, null, templates[templateName]);
          template.compiled = true;
          _cache.set(templateName, template);
        }
      }

      // Load un-compiled templates
      if (type.mime) {
        Map.init(_cache, type.mime, construct, scope);
      }
    }
  };
  /**
   * Disposes of all templates
   * @method dispose
   * @static
   */
  Template.dispose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[133258,133288],"range":[133247,133288],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":268,"label":"lavaca_require"}');
    Map.dispose(_cache);
  };
  /**
   * Finds the named template and renders it to a string
   * @method render
   * @static
   *
   * @param {String} name  The name of the template
   * @param {Object} model  The data model to provide to the template
   * @return {Lavaca.util.Promise}  A promise
   */
  Template.render = function(name, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[133607,133776],"range":[133585,133776],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":269,"label":"lavaca_require"}');
    var template = Template.get(name);
    if (!template) {
      throw 'No template named "' + name + '"';
    } else {
      return template.render(model);
    }
  };
  /**
   * Registers a type of template to look for on intilization.
   * @method register
   * @static
   * @param {String} mimeType  The mime-type associated with the template
   * @param {Function} TTemplate  The JavaScript type used for the template (should derive from [[Lavaca.ui.Template]])
   */
   /**
   * Registers a type of template to look for on intilization.
   * @method register
   * @static
   * @param {Function} TTemplate  The JavaScript type used for the template (should derive from [[Lavaca.ui.Template]])
   */
  Template.register = function(mimeType, TTemplate) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[134365,134530],"range":[134335,134530],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":270,"label":"lavaca_require"}');
    if (typeof mimeType === "function") {
      TTemplate = mimeType;
      mimeType = null;
    }
    _types[_types.length] = {mime: mimeType, js: TTemplate};
  };

  return Template;

});

define('lavaca/util/log',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[134597,135035],"range":[134586,135035],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":273,"label":"lavaca_require"}');
  /**
   * Logs to the console (or alerts if no console exists)
   * @class lavaca.util.log
   */
   /**
   * Logs to the console (or alerts if no console exists)
   * @method log
   * @static
   *
   * @params {Object} arg  The content to be logged
   */
  var log = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[134878,135016],"range":[134867,135016],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":272,"label":"lavaca_require"}');
    if (window.console) {
      console.log.apply(console, arguments);
    } else {
      alert([].join.call(arguments, ' '));
    }
  };

  return log;

});

define('lavaca/mvc/View',['require','$','lavaca/events/EventDispatcher','lavaca/mvc/Model','lavaca/ui/Template','lavaca/util/Cache','lavaca/util/Promise','lavaca/util/log','lavaca/util/uuid'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[135249,158714],"range":[135231,158714],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":303,"label":"lavaca_require"}');

  var $ = require('$'),
    EventDispatcher = require('lavaca/events/EventDispatcher'),
    Model = require('lavaca/mvc/Model'),
    Template = require('lavaca/ui/Template'),
    Cache = require('lavaca/util/Cache'),
    Promise = require('lavaca/util/Promise'),
    log = require('lavaca/util/log'),
    uuid = require('lavaca/util/uuid');




  /**
   * Base View Class
   * @class lavaca.mvc.View
   * @extends lavaca.events.EventDispatcher
   * @constructor
   * @param {Object | String} el the selector or Object for the element to attach to the view
   * @param {Object} [model] the model for the view
   * @param {Object} [parentView] the parent view for the view
   *
   *
   */
  var View = EventDispatcher.extend(function(el, model, parentView) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[136007,138476],"range":[135975,138476],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":274,"label":"lavaca_require"}');
    EventDispatcher.call(this);

    /**
     * The model used by the view
     * @property model
     * @default null
     * @optional
     * @type lavaca.mvc.Model
     *
     */
    this.model = model || null;

    /**
     * An id is applied to a data property on the views container
     * @property id
     * @default generated from className and unique identifier
     * @type String
     *
     */
    this.id = this.className + '-' + uuid();

    /**
     * If the view is created in the context of a childView, the parent view is assigned to this view
     * @property parentView
     * @default null
     * @type Object
     *
     */
    this.parentView = parentView || null;

    /**
     * The element that is either assigned to the view if in the context of a childView, or is created for the View
     * if it is a PageView
     * @property el
     * @default null
     * @type Object | String
     *
     */
    this.el = typeof el === 'string' ? $(el) : (el || null);

    /**
     * A dictionary of selectors and event types in the form
     * {eventType: {delegate: 'xyz', callback: func}}@property el
     * @property eventMap
     * @default {}
     * @type Object
     */
    this.eventMap = {};
    /**
     * A dictionary of selectors, View types and models in the form
     *   {selector: {TView: TView, model: model}}}
     * @property {Object} childViewMap
     * @default {}
     * @type Object
     *
     */
    this.childViewMap = {};
    /**
     * Interactive elements used by the view
     * @property childViews
     * @default lavaca.util.cache
     * @type lavaca.util.Cache
     */
    this.childViews = new Cache();
    /**
     * A dictionary of selectors and widget types in the form
     *   {selector: widgetType}
     * @property {Object} widgetMap
     * @default {}
     * @type Object
     */
    this.widgetMap = {};
    /**
     * Interactive elements used by the view
     * @property widgets
     * @default lavaca.util.Cache
     * @type lavaca.util.Cache
     */
    this.widgets = new Cache();
    /**
     *  A map of all the events to be applied to child Views in the form of
     *  {type: {TView: TView, callback : callback}}
     * @property childViewEventMap
     * @default Object
     * @type Object
     */
    this.childViewEventMap = {};

    this
      .on('rendersuccess', this.onRenderSuccess)
      .on('rendererror', this.onRenderError);

    if (this.autoRender) {
      this.render();
    }
  }, {
    /**
     * The element associated with the view
     * @property {jQuery} el
     * @default null
     *
     */
    el: null,
    /**
     * The name of the template associated with the view
     * @property {String} template
     * @default null
     *
     */
    template: null,
    /**
     * A class name added to the view container
     * @property String className
     * @default null
     *
     */
    className: null,
    /**
     * Will render any childViews automatically when set to true
     * @property autoRender
     * @default false
     *
     * @type Boolean
     */
    autoRender: false,
    /**
     * Renders the view using its template and model
     * @method render
     *
     *
     *
     * @return {lavaca.util.Promise} A promise
     */
    render: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139278,140300],"range":[139267,140300],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":278,"label":"lavaca_require"}');
      var self = this,
        promise = new Promise(this),
        renderPromise = new Promise(this),
        template = Template.get(this.template),
        model = this.model;
      if (model instanceof Model) {
        model = model.toObject();
      }
      /**
       * Fires when html from template has rendered
       * @event rendersuccess
       */
      promise
        .success(function(html) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139685,139786],"range":[139670,139786],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":275,"label":"lavaca_require"}');
          this.trigger('rendersuccess', {html: html});
          renderPromise.resolve();
        })
      /**
       * Fired when there was an error during rendering process
       * @event rendererror
       */
        .error(function(err) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[139929,140025],"range":[139915,140025],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":276,"label":"lavaca_require"}');
          this.trigger('rendererror', {err: err});
          renderPromise.reject();
        });
      template
        .render(model)
        .success(promise.resolver())
        .error(promise.rejector())
        .then(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[140163,140263],"range":[140152,140263],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":277,"label":"lavaca_require"}');
          if (self.className){
            self.el.addClass(self.className);
          }
        });

      return renderPromise;
    },

    /**
     * Re-renders the view's template and replaces the DOM nodes that match
     * the selector argument. If no selector argument is provided, the whole view
     * will be re-rendered. If the first parameter is passed as <code>false</code>
     * the resulting html will pe passed with the promise and nothing will be replaced.
     * Note: the number of elements that match the provided selector must be identical
     * in the current markup and in the newly rendered markup or else the returned
     * promise will be rejected.
     * Re-renders the view's template using the view's model
     * and redraws the entire view
     * @method redraw
     *
     * @return {lavaca.util.Promise} A promise
     */
    /**
     * Re-renders the view's template using the specified model
     * and redraws the entire view
     * @method redraw
     * @param {Object} model  The data model to be passed to the template
     * @return {lavaca.util.Promise} A promise
     */
    /**
     * Re-renders the view's template using the view's model and only redraws the
     * elements that match the specified selector string.
     * Note: The numbers of items that match the selector must
     * be exactly the same in the view's current markup and in the newly rendered
     * markup. If that is not the case, the returned promise will be rejected and
     * nothing will be redrawn.
     * @method redraw
     * @param {String} selector  Selector string that defines elements to redraw
     * @return {lavaca.util.Promise} A promise
     */
    /**
     * Re-renders the view's template using the specified model and only redraws the
     * elements that match the specified selector string.
     * Note: The numbers of items that match the selector must
     * be exactly the same in the view's current markup and in the newly rendered
     * markup. If that is not the case, the returned promise will be rejected and
     * nothing will be redrawn.
     * @method redraw
     * @param {String} selector  Selector string that defines elements that will be updated
     * @param {Object} model  The data model to be passed to the template
     * @return {lavaca.util.Promise} A promise
     */
    /**
     * Re-renders the view's template using the view's model. If shouldRedraw is true,
     * the entire view will be redrawn. If shouldRedraw is false, nothing will be redrawn,
     * but the returned promise will be resolved with the newly rendered content. This allows
     * the caller to attach a success handler to the returned promise and define their own
     * redrawing behavior.
     * @method redraw
     * @param {Boolean} shouldRedraw  Whether the view should be automatically redrawn.
     * @return {lavaca.util.Promise}  A promise
     */
    /**
     * Re-renders the view's template using the specified model. If shouldRedraw is true,
     * the entire view will be redrawn. If shouldRedraw is false, nothing will be redrawn,
     * but the returned promise will be resolved with the newly rendered content. This allows
     * the caller to attach a success handler to the returned promise and define their own
     * redrawing behavior.
     * @method redraw
     * @param {Boolean} shouldRedraw  Whether the view should be automatically redrawn.
     * @param {Object} model  The data model to be passed to the template
     * @return {lavaca.util.Promise}  A promise
     */
    redraw: function(selector, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[143742,145870],"range":[143716,145870],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":282,"label":"lavaca_require"}');
      var self = this,
        templateRenderPromise = new Promise(this),
        redrawPromise = new Promise(this),
        template = Template.get(this.template),
        replaceAll;
      if (typeof selector === 'object' || selector instanceof Model) {
        model = selector;
        replaceAll = true;
        selector = null;
      }
      else if (typeof selector === 'boolean') {
        replaceAll = selector;
        selector = null;
      } else if (!selector) {
        replaceAll = true;
      }
      model = model || this.model;
      if (model instanceof Model) {
        model = model.toObject();
      }

      // process widget, child view, and
      // child view event maps
      function processMaps() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[144470,144579],"range":[144447,144579],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":279,"label":"lavaca_require"}');
        self.createWidgets();
        self.createChildViews();
        self.applyChildViewEvents();
      }
      templateRenderPromise
        .success(function(html) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[144640,145654],"range":[144625,145654],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":281,"label":"lavaca_require"}');
          if (replaceAll) {
            this.disposeChildViews(this.el);
            this.disposeWidgets(this.el);
            this.el.html(html);
            processMaps();
            redrawPromise.resolve(html);
            return;
          }
          if(selector) {
            var $newEl = $('<div>' + html + '</div>').find(selector),
              $oldEl = this.el.find(selector);
            if($newEl.length === $oldEl.length) {
              $oldEl.each(function(index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[145123,145322],"range":[145107,145322],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":280,"label":"lavaca_require"}');
                var $el = $(this);
                self.disposeChildViews($el);
                self.disposeWidgets($el);
                $el.replaceWith($newEl.eq(index)).remove();
              });
              processMaps();
              redrawPromise.resolve(html);
            } else {
              redrawPromise.reject('Count of items matching selector is not the same in the original html and in the newly rendered html.');
            }
          } else {
            redrawPromise.resolve(html);
          }
        })
        .error(redrawPromise.rejector());
      template
        .render(model)
        .success(templateRenderPromise.resolver())
        .error(templateRenderPromise.rejector());
      return redrawPromise;
    },

    /**
     * Dispose old widgets and child views
     * @method disposeChildViews
     * @param  {Object} $el the $el to search for child views and widgets in
     */
    disposeChildViews: function ($el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[146080,146541],"range":[146065,146541],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":284,"label":"lavaca_require"}');
      var childViewSearch,
        self = this;

      // Remove child views
      childViewSearch = $el.find('[data-view-id]');
      if ($el !== self.el && $el.is('[data-view-id]')) {
        childViewSearch = childViewSearch.add($el);
      }
      childViewSearch.each(function(index, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[146377,146533],"range":[146355,146533],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":283,"label":"lavaca_require"}');
        var $item = $(item),
          childView = $item.data('view');

        self.childViews.remove(childView.id);
        childView.dispose();
      });
    },
    /**
     * Dispose old widgets and child views
     * @method disposeWidgets
     * @param  {Object} $el the $el to search for child views and widgets in
     */
    disposeWidgets: function ($el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[146744,147171],"range":[146729,147171],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":286,"label":"lavaca_require"}');
      var self = this;

      // Remove widgets
      $el.add($el.find('[data-has-widgets]')).each(function(index, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[146867,147130],"range":[146845,147130],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":285,"label":"lavaca_require"}');
        var $item = $(item),
          widgets = $item.data('widgets'),
          selector, widget;
        for (selector in widgets) {
          widget = widgets[selector];
          self.widgets.remove(widget.id);
          widget.dispose();
        }
      });
      $el.removeData('widgets');
    },
    /**
     * Unbinds events from the model
     * @method clearModelEvents
     *
     */
    clearModelEvents: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[147298,147862],"range":[147287,147862],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":287,"label":"lavaca_require"}');
      var type,
        callback,
        dotIndex;
      if (this.eventMap
        && this.eventMap.model
        && this.model
        && this.model instanceof EventDispatcher) {
        for (type in this.eventMap.model) {
          callback = this.eventMap.model[type];
          if (typeof callback === 'object') {
            callback = callback.on;
          }
          dotIndex = type.indexOf('.');
          if (dotIndex !== -1) {
            type = type.substr(0, dotIndex);
          }
          this.model.off(type, callback);
        }
      }
    },
    /**
     * Checks for strings in the event map to bind events to this automatically
     * @method bindMappedEvents
     */
    bindMappedEvents: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[148025,148392],"range":[148014,148392],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":288,"label":"lavaca_require"}');
      var callbacks,
        delegate,
        type;
      for (delegate in this.eventMap) {
        callbacks = this.eventMap[delegate];
        for (type in callbacks) {
          if (typeof this.eventMap[delegate][type] === 'string'){
            this.eventMap[delegate][type] = this[this.eventMap[delegate][type]].bind(this);
          }
        }
      }
    },
    /**
     * Binds events to the view
     * @method applyEvents
     *
     */
    applyEvents: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[148504,149916],"range":[148493,149916],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":289,"label":"lavaca_require"}');
      var el = this.el,
        callbacks,
        callback,
        property,
        delegate,
        type,
        dotIndex,
        opts;
      for (delegate in this.eventMap) {
        callbacks = this.eventMap[delegate];
        if (delegate === 'self') {
          delegate = null;
        }
        for (type in callbacks) {
          callback = callbacks[type];
          if (typeof callback === 'object') {
            opts = callback;
            callback = callback.on;
          } else {
            opts = undefined;
          }
          if (typeof callback === 'string') {
            if (callback in this) {
              callback = this[callback].bind(this);
            }
          }
          if (delegate === 'model') {
            if (this.model && this.model instanceof Model) {
              dotIndex = type.indexOf('.');
              if (dotIndex !== -1) {
                property = type.substr(dotIndex+1);
                type = type.substr(0, dotIndex);
              }
              this.model.on(type, property, callback, this);
            }
          } else if (type === 'animationEnd' && el.animationEnd) {
            el.animationEnd(delegate, callback);
          } else if (type === 'transitionEnd' && el.transitionEnd) {
            el.transitionEnd(delegate, callback);
          } else {
            el.on(type, delegate, callback);
          }
        }
      }
    },
    /**
     * Maps multiple delegated events for the view
     * @method mapEvent
     *
     * @param {Object} map  A hash of the delegates, event types, and handlers
     *     that will be bound when the view is rendered. The map should be in
     *     the form <code>{delegate: {eventType: callback}}</code>. For example,
     *     <code>{'.button': {click: onClickButton}}</code>. The events defined in
     *     [[Lavaca.fx.Animation]] and [[Lavaca.fx.Transition]] are also supported.
     *     To map an event to the view's el, use 'self' as the delegate. To map
     *     events to the view's model, use 'model' as the delegate. To limit events
     *     to only a particular property on the model, use a period-seperated
     *     syntax such as <code>{model: {'change.myproperty': myCallback}}</code>
     * @return {lavaca.mvc.View}  This view (for chaining)
     */
    /**
     * Maps an event for the view
     * @method mapEvent
     * @param {String} delegate  The element to which to delegate the event
     * @param {String} type  The type of event
     * @param {Function} callback  The event handler
     * @return {lavaca.mvc.View}  This view (for chaining)
     */
    mapEvent: function(delegate, type, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[151162,151577],"range":[151127,151577],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":290,"label":"lavaca_require"}');
      var o;
      if (typeof delegate === 'object') {
        o = delegate;
        for (delegate in o) {
          for (type in o[delegate]) {
            this.mapEvent(delegate, type, o[delegate][type]);
          }
        }
      } else {
        o = this.eventMap[delegate];
        if (!o) {
          o = this.eventMap[delegate] = {};
        }
        o[type] = callback;
      }
      return this;
    },
    /**
     * Initializes widgets on the view
     * @method createWidgets
     *
     */
    createWidgets: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[151700,152305],"range":[151689,152305],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":292,"label":"lavaca_require"}');
      var cache = this.widgets,
        n,
        o;
      for (n in this.widgetMap) {
        o = this.widgetMap[n];
        (n === 'self' ? this.el : this.el.find(n))
          .each(function(index, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[151910,152289],"range":[151888,152289],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":291,"label":"lavaca_require"}');
            var $el = $(item),
              widgetMap = $el.data('widgets') || {},
              widget;
            if (!widgetMap[n]) {
              widget = new o($(item));
              widgetMap[n] = widget;
              cache.set(widget.id, widget);
              $el.data('widgets', widgetMap);
              $el.attr('data-has-widgets','');
            }
          });
      }
    },
    /**
     * Assigns multiple widget types to elements on the view
     * @method mapWidget
     * @param {Object} map  A hash of selectors to widget types to be bound when the view is rendered.
     *     The map should be in the form {selector: TWidget}. For example, {'form': Lavaca.ui.Form}
     * @return {Lavaca.mvc.View}  This view (for chaining)
     *
     */
    /**
     * Assigns a widget type to be created for elements matching a selector when the view is rendered
     * @method mapWidget
     * @param {String} selector  The selector for the root element of the widget
     * @param {Function} TWidget  The [[Lavaca.ui.Widget]]-derived type of widget to create
     * @return {Lavaca.mvc.View}  This view (for chaining)
     */
    mapWidget: function(selector, TWidget) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[153096,153376],"range":[153068,153376],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":293,"label":"lavaca_require"}');
      if (typeof selector === 'object') {
        var widgetTypes = selector;
        for (selector in widgetTypes) {
          this.mapWidget(selector, widgetTypes[selector]);
        }
      } else {
        this.widgetMap[selector] = TWidget;
      }
      return this;
    },
    /**
     * Initializes child views on the view, called from onRenderSuccess
     * @method createChildViews
     *
     */
    createChildViews: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[153538,154010],"range":[153527,154010],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":295,"label":"lavaca_require"}');
      var cache = this.childViews,
        n,
        self = this,
        o;
      for (n in this.childViewMap) {
        o = this.childViewMap[n];
        this.el.find(n)
          .each(function(index, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[153751,153994],"range":[153729,153994],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":294,"label":"lavaca_require"}');
            var $el = $(item),
              childView;
            if (!$el.data('view')) {
              childView = new o.TView($el, o.model || self.model, self);
              cache.set(childView.id, childView);
            }
          });
      }
    },
    /**
     * Assigns multiple Views to elements on the view
     * @method mapChildView
     * @param {Object} map  A hash of selectors to view types and models to be bound when the view is rendered.
     *     The map should be in the form {selector: {TView : TView, model : lavaca.mvc.Model}}. For example, {'form': {TView : lavaca.mvc.ExampleView, model : lavaca.mvc.Model}}
     * @return {lavaca.mvc.View}  This view (for chaining)
     *
     * Assigns a View type to be created for elements matching a selector when the view is rendered
     * @method mapChildView
     * @param {String} selector  The selector for the root element of the View
     * @param {Function} TView  The [[Lavaca.mvc.View]]-derived type of view to create
     * @param {Function} model  The [[Lavaca.mvc.Model]]-derived model instance to use in the child view
     * @return {Lavaca.mvc.View}  This view (for chaining)
     */
    mapChildView: function(selector, TView, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[154975,155331],"range":[154942,155331],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":296,"label":"lavaca_require"}');
      if (typeof selector === 'object') {
        var childViewTypes = selector;
        for (selector in childViewTypes) {
          this.mapChildView(selector, childViewTypes[selector].TView, childViewTypes[selector].model);
        }
      } else {
        this.childViewMap[selector] = { TView: TView, model: model };
      }
      return this;
    },

    /**
     * Listen for events triggered from child views.
     * @method mapChildViewEvent
     *
     * @param {String} type The type of event to listen for
     * @param {Function} callback The method to execute when this event type has occured
     * @param {Lavaca.mvc.View} TView (Optional) Only listen on child views of this type
     */
    /**
     * Maps multiple child event types
     * @method mapChildViewEvent
     *
     * @param {Object} map A hash of event types with callbacks and TView's associated with that type
     *  The map should be in the form {type : {callback : {Function}, TView : TView}}
     */
    mapChildViewEvent: function(type, callback, TView) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156019,156410],"range":[155987,156410],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":297,"label":"lavaca_require"}');
      if (typeof type === 'object'){
        var eventTypes = type;
        for (type in eventTypes){
          //add in view type to limit events created
          this.mapChildViewEvent(type, eventTypes[type].callback, eventTypes[type].TView);
        }
      } else {
        this.childViewEventMap[type] = {
          TView: TView,
          callback: callback
        };
      }
    },

    /**
     * Called from onRenderSuccess of the view, adds listeners to all childviews if present
     * @method applyChildViewEvent
     *
     */
    applyChildViewEvents: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156600,157249],"range":[156589,157249],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":299,"label":"lavaca_require"}');
      var childViewEventMap = this.childViewEventMap,
        type;
      for (type in childViewEventMap) {
        this.childViews.each(function(key, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[156759,157233],"range":[156739,157233],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":298,"label":"lavaca_require"}');
          var callbacks,
            callback,
            i = -1;

          if (!childViewEventMap[type].TView || item instanceof childViewEventMap[type].TView) {
            callbacks = item.callbacks[type] || [];
            while (!!(callback = callbacks[++i])) {
              if (callback === childViewEventMap[type].callback) {
                return;
              }
            }
            item.on(type, childViewEventMap[type].callback);
          }
        });
      }
    },
    /**
     * Executes when the template renders successfully
     * @method onRenderSuccess
     *
     * @param {Event} e  The render event. This object should have a string property named "html"
     *   that contains the template's rendered HTML output.
     */
    onRenderSuccess: function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[157551,157847],"range":[157539,157847],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":300,"label":"lavaca_require"}');
      this.el.html(e.html);
      this.bindMappedEvents();
      this.applyEvents();
      this.createWidgets();
      this.createChildViews();
      this.applyChildViewEvents();
      this.el.data('view', this);
      this.el.attr('data-view-id', this.id);
      this.hasRendered = true;
    },
    /**
     * Executes when the template fails to render
     * @method onRenderError
     *
     * @param {Event} e  The error event. This object should have a string property named "err"
     *   that contains the error message.
     */
    onRenderError: function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[158120,158145],"range":[158108,158145],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":301,"label":"lavaca_require"}');
      log(e.err);
    },
    /**
     * Readies the view for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[158257,158689],"range":[158246,158689],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":302,"label":"lavaca_require"}');
      if (this.model) {
        this.clearModelEvents();
      }
      if (this.childViews.count()) {
        this.disposeChildViews(this.el);
      }
      if (this.widgets.count()) {
        this.disposeWidgets(this.el);
      }

      // Do not dispose of template or model
      this.template
        = this.model
        = this.parentView
        = null;

      EventDispatcher.prototype.dispose.apply(this, arguments);
    }
  });

  return View;

});

define('lavaca/mvc/PageView',['require','$','lavaca/mvc/Model','lavaca/mvc/View','lavaca/ui/Template','lavaca/util/Promise','lavaca/util/delay'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[158881,163914],"range":[158863,163914],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":315,"label":"lavaca_require"}');

  var $ = require('$'),
      Model = require('lavaca/mvc/Model'),
      View = require('lavaca/mvc/View'),
      Template = require('lavaca/ui/Template'),
      Promise = require('lavaca/util/Promise'),
      delay = require('lavaca/util/delay');

  /**
   * Page View type, represents an entire screen
   * @class lavaca.mvc.PageView
   * @extends lavaca.mvc.View
   *
   * @constructor
   * @param {Object} el  The element that the PageView is bound to
   * @param {Object} model  The model used by the view
   * @param {Number} [layer]  The index of the layer on which the view sits
   *
   */
  var PageView = View.extend(function(el, model, layer) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[159538,159726],"range":[159511,159726],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":304,"label":"lavaca_require"}');

    View.call(this, el, model);
    /**
     * The index of the layer on which the view sits
     * @property {Number} layer
     * @default 0
     */
    this.layer = layer || 0;


  }, {

    /**
     * The element containing the view
     * @property {jQuery} shell
     * @default null
     */
    shell: null,

    /**
     * Creates the view's wrapper element
     * @method wrapper
     * @return {jQuery}  The wrapper element
     */
    wrapper: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[160007,160058],"range":[159996,160058],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":305,"label":"lavaca_require"}');
      return $('<div class="view"></div>');
    },
    /**
     * Creates the view's interior content wrapper element
     * @method interior
     * @return {jQuery} The interior content wrapper element
     */
    interior: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[160245,160305],"range":[160234,160305],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":306,"label":"lavaca_require"}');
      return $('<div class="view-interior"></div>');
    },


    /**
     * Adds this view to a container
     * @method insertInto
     * @param {jQuery} container  The containing element
     */
    insertInto: function(container) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[160481,160906],"range":[160461,160906],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":307,"label":"lavaca_require"}');
      if (this.shell.parent()[0] !== container[0]) {
        var layers = container.children('[data-layer-index]'),
            i = -1,
            layer;
        while (!!(layer = layers[++i])) {
          layer = $(layer);
          if (layer.attr('data-layer-index') > this.index) {
            this.shell.insertBefore(layer);
            return;
          }
        }
        container.append(this.shell);
      }
    },
    /**
     * Renders the view using its template and model, overrides the View class render method
     * @method render
     *
     * @return {Lavaca.util.Promise}  A promise
     */
    render: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161117,162323],"range":[161106,162323],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":310,"label":"lavaca_require"}');
      var promise = new Promise(this),
          renderPromise = new Promise(this),
          template = Template.get(this.template),
          model = this.model;
      if (model instanceof Model) {
        model = model.toObject();
      }
      if (this.el) {
        this.el.remove();
      }

      this.shell = this.wrapper();
      this.el = this.interior();
      this.shell.append(this.el);
      this.shell.attr('data-layer-index', this.layer);
      if (this.className) {
        this.shell.addClass(this.className);
      }
      promise
        .success(function(html) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161701,161920],"range":[161686,161920],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":308,"label":"lavaca_require"}');
          /**
           * Fires when html from template has rendered
           * @event rendersuccess
           */
          this.trigger('rendersuccess', {html: html});
          renderPromise.resolve();
        })
        .error(function(err) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[161951,162175],"range":[161937,162175],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":309,"label":"lavaca_require"}');
          /**
           * Fired when there was an error during rendering process
           * @event rendererror
           */
          this.trigger('rendererror', {err: err});
          renderPromise.reject();
        });
      template
        .render(model)
        .success(promise.resolver())
        .error(promise.rejector());

      return renderPromise;
    },
    /**
     * Executes when the user navigates to this view
     * @method enter
     * @param {jQuery} container  The parent element of all views
     * @param {Array} exitingViews  The views that are exiting as this one enters
     * @return {lavaca.util.Promise}  A promise
     */
    enter: function(container) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[162642,163242],"range":[162622,163242],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":312,"label":"lavaca_require"}');
      var promise = new Promise(this),
          renderPromise;
      container = $(container);
      if (!this.hasRendered) {
        renderPromise = this
          .render()
          .error(promise.rejector());
      }
      this.insertInto(container);
      if (renderPromise) {
        promise.when(renderPromise);
      } else {
        delay(promise.resolver());
      }
      promise.then(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163052,163212],"range":[163041,163212],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":311,"label":"lavaca_require"}');
        /**
         * Fired when there was an error during rendering process
         * @event rendererror
         */
        this.trigger('enter');
      });
      return promise;
    },
    /**
     * Executes when the user navigates away from this view
     * @method exit
     *
     * @param {jQuery} container  The parent element of all views
     * @param {Array} enteringViews  The views that are entering as this one exits
     * @return {lavaca.util.Promise}  A promise
     */
    exit: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163565,163885],"range":[163554,163885],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":314,"label":"lavaca_require"}');
      var promise = new Promise(this);
      this.shell.detach();
      delay(promise.resolver());
      promise.then(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[163696,163855],"range":[163685,163855],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":313,"label":"lavaca_require"}');
        /**
         * Fired when there was an error during rendering process
         * @event rendererror
         */
        this.trigger('exit');
      });
      return promise;
    }
  });

  return PageView;

});

define('lavaca/mvc/ViewManager',['require','$','lavaca/mvc/PageView','lavaca/util/ArrayUtils','lavaca/util/Cache','lavaca/util/Disposable','lavaca/util/Promise','lavaca/util/delay','mout/object/merge','lavaca/net/History'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164159,172413],"range":[164141,172413],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":330,"label":"lavaca_require"}');

  var $ = require('$'),
      PageView = require('lavaca/mvc/PageView'),
      ArrayUtils = require('lavaca/util/ArrayUtils'),
      Cache = require('lavaca/util/Cache'),
      Disposable = require('lavaca/util/Disposable'),
      Promise = require('lavaca/util/Promise'),
      delay = require('lavaca/util/delay'),
      merge = require('mout/object/merge'),
      History = require('lavaca/net/History');

  /**
   * Manager responsible for drawing views
   * @class lavaca.mvc.ViewManager
   * @extends lavaca.util.Disposable
   *
   * @constructor
   * @param {jQuery} el  The element that contains all layers
   */
  var ViewManager = Disposable.extend(function(el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[164834,165657],"range":[164821,165657],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":316,"label":"lavaca_require"}');
    Disposable.call(this);
    /**
    * The element that contains all view layers
     * @property {jQuery} el
     * @default null
     */
    this.el = $(el || document.body);
    /**
     * A cache containing all views
     * @property {Lavaca.util.Cache} views
     * @default new Lavaca.util.Cache()
     */
    this.pageViews = new Cache();
    /**
     * A list containing all layers
     * @property {Array} layers
     * @default []
     */
    this.layers = [];
    /**
     * A list containing all views that are currently exiting
     * @property {Array} exitingPageViews
     * @default []
     */
    this.exitingPageViews = [];
    /**
     * A list containing all views that are currently entering
     * @property {Array} enteringPageViews
     * @default []
     */
    this.enteringPageViews = [];
  }, {
    /**
     * When true, the view manager is prevented from loading views.
     * @property {Boolean} locked
     * @default false
     */
    locked: false,
    /**
     * Sets the el property on the instance
     * @method setEl
     *
     * @param {jQuery} el  A jQuery object of the element that contains all layers
     * @return {Lavaca.mvc.ViewManager}  This View Manager instance
     */
    /**
     * Sets the el property on the instance
     * @method setEl
     *
     * @param {String} el  A CSS selector matching the element that contains all layers
     * @return {Lavaca.mvc.ViewManager}  This View Manager instance
     */
    setEl: function(el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[166327,166406],"range":[166314,166406],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":317,"label":"lavaca_require"}');
      this.el = typeof el === 'string' ? $(el) : el;
      return this;
    },
    /**
     * Loads a view
     * @method load
     *
     * @param {String} cacheKey  The cache key associated with the view
     * @param {Function} TPageView  The type of view to load (should derive from [[Lavaca.mvc.View]])
     * @param {Object} model  The views model
     * @param {Number} layer  The index of the layer on which the view will sit
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Loads a view
     * @method load
     *
     * @param {String} cacheKey  The cache key associated with the view
     * @param {Function} TPageView  The type of view to load (should derive from [[Lavaca.mvc.View]])
     * @param {Object} model  The views model
     * @param {Object} params  Parameters to be mapped to the view
     * @return {Lavaca.util.Promise}  A promise
     */
    load: function(cacheKey, TPageView, model, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[167272,169127],"range":[167227,169127],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":322,"label":"lavaca_require"}');
      if (this.locked) {
        return (new Promise(this)).reject('locked');
      } else {
        this.locked = true;
      }
      params = params || {};
      var self = this,
          layer = layer || 0,
          pageView = this.pageViews.get(cacheKey),
          promise = new Promise(this),
          enterPromise = new Promise(promise),
          renderPromise = null,
          exitPromise = null;
      promise.always(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[167716,167754],"range":[167705,167754],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":318,"label":"lavaca_require"}');
        this.locked = false;
      });
      if (typeof params === 'number') {
        layer = params;
      } else if (params.layer) {
        layer = params.layer;
      }
      if (!pageView) {
        if (History.isRoutingBack && self.layers[layer] instanceof TPageView) {
          pageView = self.layers[layer];
        } else {
          pageView = new TPageView(null, model, layer);
          if (typeof params === 'object') {
            merge(pageView, params);
          }
          renderPromise = pageView.render();
          if (cacheKey !== null) {
            this.pageViews.set(cacheKey, pageView);
            pageView.cacheKey = cacheKey;
          }
        }
      }
      function lastly() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[168430,168975],"range":[168412,168975],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":321,"label":"lavaca_require"}');
        self.enteringPageViews = [pageView];
        promise.success(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[168512,168607],"range":[168501,168607],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":320,"label":"lavaca_require"}');
          delay(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[168541,168595],"range":[168530,168595],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":319,"label":"lavaca_require"}');
            self.enteringPageViews = [];
          });
        });
        exitPromise = self.dismissLayersAbove(layer - 1, pageView);
        if (self.layers[layer] !== pageView) {
          enterPromise
            .when(pageView.enter(self.el, self.exitingPageViews), exitPromise)
            .then(promise.resolve);
          self.layers[layer] = pageView;
        } else {
          promise.when(exitPromise);
        }
      }
      if (renderPromise) {
        renderPromise.then(lastly, promise.rejector());
      } else {
        lastly();
      }
      return promise;
    },
    /**
     * Removes all views on a layer
     * @method dismiss
     *
     * @param {Number} index  The index of the layer to remove
     */
    /**
     * Removes all views on a layer
     * @method dismiss
     *
     * @param {jQuery} el  An element on the layer to remove (or the layer itself)
     */
    /**
     * Removes all views on a layer
     * @method dismiss
     *
     * @param {Lavaca.mvc.View} view  The view on the layer to remove
     */
    dismiss: function(layer) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[169620,170116],"range":[169604,170116],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":323,"label":"lavaca_require"}');
      if (typeof layer === 'number') {
        this.dismissLayersAbove(layer - 1);
      } else if (layer instanceof PageView) {
        this.dismiss(layer.layer);
      } else {
        layer = $(layer);
        var index = layer.attr('data-layer-index');
        if (index === null) {
          layer = layer.closest('[data-layer-index]');
          index = layer.attr('data-layer-index');
        }
        if (index !== null) {
          this.dismiss(Number(index));
        }
      }
    },
    /**
     * Removes all layers above a given index
     * @method dismissLayersAbove
     *
     * @param {Number}  index The index above which to clear
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Removes all layers above a given index
     * @method dismissLayersAbove
     *
     * @param {Number} index  The index above which to clear
     * @param {Lavaca.mvc.View}  exceptForView A view that should not be dismissed
     * @return {Lavaca.util.Promise}  A promise
     */
    dismissLayersAbove: function(index, exceptForView) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[170680,171646],"range":[170649,171646],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":327,"label":"lavaca_require"}');
      var promise = new Promise(this),
          dismissedLayers = false,
          i,
          layer;
      for (i = this.layers.length - 1; i > index; i--) {
        if ((layer = this.layers[i]) && (!exceptForView || exceptForView !== layer)) {
          (function(layer) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[170957,171481],"range":[170941,171481],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":326,"label":"lavaca_require"}');
            this.exitingPageViews.push(layer);
            promise
              .when(layer.exit(this.el, this.enteringPageViews))
              .success(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171125,171432],"range":[171114,171432],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":325,"label":"lavaca_require"}');
                delay(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171160,171408],"range":[171149,171408],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":324,"label":"lavaca_require"}');
                  ArrayUtils.remove(this.exitingPageViews, layer);
                  if (!layer.cacheKey || (exceptForView && exceptForView.cacheKey === layer.cacheKey)) {
                    layer.dispose();
                  }
                }, this);
              });
            this.layers[i] = null;
          }).call(this, layer);
          dismissedLayers = true;
        }
      }
      if (!dismissedLayers) {
        promise.resolve();
      }
      return promise;
    },
    /**
     * Empties the view cache
     * @method flush
     */
    flush: function(cacheKey) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[171745,172197],"range":[171726,172197],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":328,"label":"lavaca_require"}');
      // Don't dispose of any views that are currently displayed
      //flush individual cacheKey
      if (cacheKey){
        this.pageViews.remove(cacheKey);
      } else {
        var i = -1,
          layer;
        while (!!(layer = this.layers[++i])) {
          if (layer.cacheKey) {
            this.pageViews.remove(layer.cacheKey);
          }
        }
        this.pageViews.dispose();
        this.pageViews = new Cache();
      }
    },
    /**
     * Readies the view manager for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[172317,172371],"range":[172306,172371],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":329,"label":"lavaca_require"}');
      Disposable.prototype.dispose.call(this);
    }
  });

  return new ViewManager(null);

});

define('lavaca/env/ChildBrowser',['require','lavaca/env/Device','lavaca/events/EventDispatcher','lavaca/util/Promise'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[172554,173865],"range":[172536,173865],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":334,"label":"lavaca_require"}');

  var Device = require('lavaca/env/Device'),
      EventDispatcher = require('lavaca/events/EventDispatcher'),
      Promise = require('lavaca/util/Promise');

  /**
   * A sub-browser management utility (also accessible via window.plugins.childBrowser)
   * @class lavaca.env.ChildBrowser
   * @extends Lavaca.events.EventDispatcher
   *
   * @event open
   * @event close
   * @event change
   *
   * @constructor
   */
  var ChildBrowser = EventDispatcher.extend({
    /**
     * Opens a web page in the child browser (or navigates to it)
     * @method showWebPage
     *
     * @param {String} loc  The URL to open
     * @return {Lavaca.util.Promise}  A promise
     */
    showWebPage: function(loc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173264,173558],"range":[173250,173558],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":332,"label":"lavaca_require"}');
      if (Device.isCordova()) {
        return Device
          .exec('ChildBrowser', 'showWebPage', [loc])
          .error(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173402,173455],"range":[173391,173455],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":331,"label":"lavaca_require"}');
            window.location.href = loc;
          });
      } else {
        window.open(loc);
        return new Promise(window).resolve();
      }
    },
    /**
     * Closes the child browser, if it's open
     * @method close
     *
     * @return {Lavaca.util.Promise}  A promise
     */
    close: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173720,173782],"range":[173709,173782],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":333,"label":"lavaca_require"}');
      return Device.exec('ChildBrowser', 'close', []);
    }
  });

  Device.register('childBrowser', ChildBrowser);

  return ChildBrowser;

});

define('lavaca/util/Translation',['require','./Cache','./Map'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[173950,178562],"range":[173932,178562],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":343,"label":"lavaca_require"}');

  var Cache = require('./Cache'),
      Map = require('./Map');

  var _cache = new Cache();

  function _construct(name, src, code) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[174086,174288],"range":[174049,174288],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":335,"label":"lavaca_require"}');
    if (code) {
      code = JSON.parse(code);
    }
    var map = new Translation(name, src, code);
    if (!_cache.get(map.language)) {
      _cache.set(map.language, map);
    }
    return map;
  }

  /**
   * Translation dictionary
   * @class lavaca.util.Translation
   * @extends lavaca.util.Map
   *
   * @constructor
   * @param {String} name  The name of the map
   * @param {String} src  The URL of the map's data (or null if code is supplied)
   * @param {String} code  The raw string data for the map (or null if src is supplied)
   */
  var Translation = Map.extend(function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[174682,175324],"range":[174667,175324],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":336,"label":"lavaca_require"}');
    Map.apply(this, arguments);
    var locale = name.toLowerCase().split('_');
    /**
     * The ISO 639-2 code for the translation's language
     * @property {String} language
     * @default null
     */
    this.language = locale[0];
    /**
     * The ISO 3166-1 code for the translation's country
     * @property {String} country
     * @default ''
     */
    this.country = locale[1] || '';
    /**
     * The locale of this translation (either lang or lang_COUNTRY)
     * @property {String} locale
     * @default null
     */
    this.locale = this.country
      ? this.language + '_' + this.country
      : this.language;
  }, {
    /**
     * Determines whether or not this translation works for a locale
     * @method is
     * @param {String} language  The locale's language
     * @return {Boolean}  True if this translation applies
     */
    /**
     * Determines whether or not this translation works for a locale
     * @method is
     * @param {String} language  The locale's language
     * @param {String} country   (Optional) The locale's country
     * @return {Boolean}  True if this translation applies
     */
    is: function(language, country) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[175863,175978],"range":[175835,175978],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":337,"label":"lavaca_require"}');
      return language === this.language
        && (!country || !this.country || country === this.country);
    }
  });
  /**
   * Sets the application's default locale
   * @method setDefault
   * @static
   *
   * @param {String} locale  A locale string (ie, "en", "en_US", or "es_MX")
   */
  Translation.setDefault = function(locale) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[176203,176297],"range":[176186,176297],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":338,"label":"lavaca_require"}');
    _cache.remove('default');
    Map.setDefault(_cache, Translation.forLocale(locale));
  };
  /**
   * Finds the most appropriate translation for a given locale
   * @method forLocale
   * @static
   *
   * @param {String} locale  The locale
   * @return {Lavaca.util.Translation}  The translation
   */
  Translation.forLocale = function(locale) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[176554,176713],"range":[176537,176713],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":339,"label":"lavaca_require"}');
    locale = (locale || 'default').toLowerCase();
    return _cache.get(locale)
      || _cache.get(locale.split('_')[0])
      || _cache.get('default');
  };
  /**
   * Finds the most appropriate translation of a message for the default locale
   * @method get
   * @static
   * @param {String} code  The code under which the message is stored
   * @return {Lavaca.util.Translation}  The translation
   */
  /**
   * Finds the most appropriate translation of a message for the default locale
   * @method get
   * @static
   * @param {String} locale  The locale
   * @param {String} code  The code under which the message is stored
   * @return {Lavaca.util.Translation}  The translation
   */
  Translation.get = function(locale, code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[177294,177862],"range":[177271,177862],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":340,"label":"lavaca_require"}');
    if (!code) {
      code = locale;
      locale = 'default';
    }
    var translation = Translation.forLocale(locale),
        result = null;
    if (translation) {
      result = translation.get(code);
    }
    if (result === null) {
      translation = Translation.forLocale(locale.split('_')[0]);
      if (translation) {
        result = translation.get(code);
      }
    }
    if (result === null) {
      translation = Translation.forLocale('default');
      if (translation) {
        result = translation.get(code);
      }
    }
    return result;
  };
  /**
   * Scans the document for all translations and prepares them
   * @method init
   * @static
   * @param {String} locale  The default locale
   */
  /**
   * Scans the document for all translations and prepares them
   * @method init
   * @static
   * @param {String} locale  The default locale
   * @param {jQuery} scope  The element to which to limit the scan
   */
  Translation.init = function(locale, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[178284,178388],"range":[178260,178388],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":341,"label":"lavaca_require"}');
    Map.init(_cache, 'text/x-translation', _construct, scope);
    Translation.setDefault(locale);
  };
  /**
   * Disposes of all translations
   * @method dispose
   * @static
   */
  Translation.dispose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[178505,178535],"range":[178494,178535],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":342,"label":"lavaca_require"}');
    Map.dispose(_cache);
  };

  return Translation;

});

// This plugin is an experiment for abstracting away the touch and mouse
// events so that developers don't have to worry about which method of input
// the device their document is loaded on supports.
//
// The idea here is to allow the developer to register listeners for the
// basic mouse events, such as mousedown, mousemove, mouseup, and click,
// and the plugin will take care of registering the correct listeners
// behind the scenes to invoke the listener at the fastest possible time
// for that device, while still retaining the order of event firing in
// the traditional mouse environment, should multiple handlers be registered
// on the same element for different events.
//
// The current version exposes the following virtual events to jQuery bind methods:
// "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"

//>>description: Normalizes touch/mouse events.
//>>label: Virtual Mouse (vmouse) Bindings
//>>group: Core

define('jquery-mobile/jquery.mobile.vmouse', [ "jquery" ], function( jQuery ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[179604,193268],"range":[179585,193268],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":368,"label":"lavaca_require"}');
(function( $, window, document, undefined ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[179650,193236],"range":[179607,193236],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":367,"label":"lavaca_require"}');

var dataPropertyName = "virtualMouseBindings",
	touchTargetPropertyName = "virtualTouchID",
	virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split( " " ),
	touchEventProps = "clientX clientY pageX pageY screenX screenY".split( " " ),
	mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
	mouseEventProps = $.event.props.concat( mouseHookProps ),
	activeDocHandlers = {},
	resetTimerID = 0,
	startX = 0,
	startY = 0,
	didScroll = false,
	clickBlockList = [],
	blockMouseTriggers = false,
	blockTouchTriggers = false,
	eventCaptureSupported = "addEventListener" in document,
	$document = $( document ),
	nextTouchID = 1,
	lastTouchID = 0, threshold;

$.vmouse = {
	moveDistanceThreshold: 10,
	clickDistanceThreshold: 10,
	resetTimerDuration: 1500
};

function getNativeEvent( event ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[180498,180616],"range":[180465,180616],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":344,"label":"lavaca_require"}');

	while ( event && typeof event.originalEvent !== "undefined" ) {
		event = event.originalEvent;
	}
	return event;
}

function createVirtualEvent( event, eventType ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[180666,181938],"range":[180618,181938],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":345,"label":"lavaca_require"}');

	var t = event.type,
		oe, props, ne, prop, ct, touch, i, j, len;

	event = $.Event( event );
	event.type = eventType;

	oe = event.originalEvent;
	props = $.event.props;

	// addresses separation of $.event.props in to $.event.mouseHook.props and Issue 3280
	// https://github.com/jquery/jquery-mobile/issues/3280
	if ( t.search( /^(mouse|click)/ ) > -1 ) {
		props = mouseEventProps;
	}

	// copy original event properties over to the new event
	// this would happen if we could call $.event.fix instead of $.Event
	// but we don't have a way to force an event to be fixed multiple times
	if ( oe ) {
		for ( i = props.length, prop; i; ) {
			prop = props[ --i ];
			event[ prop ] = oe[ prop ];
		}
	}

	// make sure that if the mouse and click virtual events are generated
	// without a .which one is defined
	if ( t.search(/mouse(down|up)|click/) > -1 && !event.which ) {
		event.which = 1;
	}

	if ( t.search(/^touch/) !== -1 ) {
		ne = getNativeEvent( oe );
		t = ne.touches;
		ct = ne.changedTouches;
		touch = ( t && t.length ) ? t[0] : ( ( ct && ct.length ) ? ct[ 0 ] : undefined );

		if ( touch ) {
			for ( j = 0, len = touchEventProps.length; j < len; j++) {
				prop = touchEventProps[ j ];
				event[ prop ] = touch[ prop ];
			}
		}
	}

	return event;
}

function getVirtualBindingFlags( element ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[181983,182226],"range":[181940,182226],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":346,"label":"lavaca_require"}');

	var flags = {},
		b, k;

	while ( element ) {

		b = $.data( element, dataPropertyName );

		for (  k in b ) {
			if ( b[ k ] ) {
				flags[ k ] = flags.hasVirtualBinding = true;
			}
		}
		element = element.parentNode;
	}
	return flags;
}

function getClosestElementWithVirtualBinding( element, eventType ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[182295,182493],"range":[182228,182493],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":347,"label":"lavaca_require"}');
	var b;
	while ( element ) {

		b = $.data( element, dataPropertyName );

		if ( b && ( !eventType || b[ eventType ] ) ) {
			return element;
		}
		element = element.parentNode;
	}
	return null;
}

function enableTouchBindings() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[182526,182558],"range":[182495,182558],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":348,"label":"lavaca_require"}');
	blockTouchTriggers = false;
}

function disableTouchBindings() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[182592,182623],"range":[182560,182623],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":349,"label":"lavaca_require"}');
	blockTouchTriggers = true;
}

function enableMouseBindings() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[182656,182834],"range":[182625,182834],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":350,"label":"lavaca_require"}');
	lastTouchID = 0;
	clickBlockList.length = 0;
	blockMouseTriggers = false;

	// When mouse bindings are enabled, our
	// touch bindings are disabled.
	disableTouchBindings();
}

function disableMouseBindings() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[182868,182969],"range":[182836,182969],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":351,"label":"lavaca_require"}');
	// When mouse bindings are disabled, our
	// touch bindings are enabled.
	enableTouchBindings();
}

function startResetTimer() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[182998,183142],"range":[182971,183142],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":353,"label":"lavaca_require"}');
	clearResetTimer();
	resetTimerID = setTimeout( function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[183059,183108],"range":[183048,183108],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":352,"label":"lavaca_require"}');
		resetTimerID = 0;
		enableMouseBindings();
	}, $.vmouse.resetTimerDuration );
}

function clearResetTimer() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[183171,183252],"range":[183144,183252],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":354,"label":"lavaca_require"}');
	if ( resetTimerID ) {
		clearTimeout( resetTimerID );
		resetTimerID = 0;
	}
}

function triggerVirtualEvent( eventType, event, flags ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[183310,183548],"range":[183254,183548],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":355,"label":"lavaca_require"}');
	var ve;

	if ( ( flags && flags[ eventType ] ) ||
				( !flags && getClosestElementWithVirtualBinding( event.target, eventType ) ) ) {

		ve = createVirtualEvent( event, eventType );

		$( event.target).trigger( ve );
	}

	return ve;
}

function mouseEventCallback( event ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[183587,184043],"range":[183550,184043],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":356,"label":"lavaca_require"}');
	var touchID = $.data( event.target, touchTargetPropertyName );

	if ( !blockMouseTriggers && ( !lastTouchID || lastTouchID !== touchID ) ) {
		var ve = triggerVirtualEvent( "v" + event.type, event );
		if ( ve ) {
			if ( ve.isDefaultPrevented() ) {
				event.preventDefault();
			}
			if ( ve.isPropagationStopped() ) {
				event.stopPropagation();
			}
			if ( ve.isImmediatePropagationStopped() ) {
				event.stopImmediatePropagation();
			}
		}
	}
}

function handleTouchStart( event ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[184080,184671],"range":[184045,184671],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":357,"label":"lavaca_require"}');

	var touches = getNativeEvent( event ).touches,
		target, flags;

	if ( touches && touches.length === 1 ) {

		target = event.target;
		flags = getVirtualBindingFlags( target );

		if ( flags.hasVirtualBinding ) {

			lastTouchID = nextTouchID++;
			$.data( target, touchTargetPropertyName, lastTouchID );

			clearResetTimer();

			disableMouseBindings();
			didScroll = false;

			var t = getNativeEvent( event ).touches[ 0 ];
			startX = t.pageX;
			startY = t.pageY;

			triggerVirtualEvent( "vmouseover", event, flags );
			triggerVirtualEvent( "vmousedown", event, flags );
		}
	}
}

function handleScroll( event ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[184704,184902],"range":[184673,184902],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":358,"label":"lavaca_require"}');
	if ( blockTouchTriggers ) {
		return;
	}

	if ( !didScroll ) {
		triggerVirtualEvent( "vmousecancel", event, getVirtualBindingFlags( event.target ) );
	}

	didScroll = true;
	startResetTimer();
}

function handleTouchMove( event ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[184938,185456],"range":[184904,185456],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":359,"label":"lavaca_require"}');
	if ( blockTouchTriggers ) {
		return;
	}

	var t = getNativeEvent( event ).touches[ 0 ],
		didCancel = didScroll,
		moveThreshold = $.vmouse.moveDistanceThreshold,
		flags = getVirtualBindingFlags( event.target );

		didScroll = didScroll ||
			( Math.abs( t.pageX - startX ) > moveThreshold ||
				Math.abs( t.pageY - startY ) > moveThreshold );


	if ( didScroll && !didCancel ) {
		triggerVirtualEvent( "vmousecancel", event, flags );
	}

	triggerVirtualEvent( "vmousemove", event, flags );
	startResetTimer();
}

function handleTouchEnd( event ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[185491,186388],"range":[185458,186388],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":360,"label":"lavaca_require"}');
	if ( blockTouchTriggers ) {
		return;
	}

	disableTouchBindings();

	var flags = getVirtualBindingFlags( event.target ),
		t;
	triggerVirtualEvent( "vmouseup", event, flags );

	if ( !didScroll ) {
		var ve = triggerVirtualEvent( "vclick", event, flags );
		if ( ve && ve.isDefaultPrevented() ) {
			// The target of the mouse events that follow the touchend
			// event don't necessarily match the target used during the
			// touch. This means we need to rely on coordinates for blocking
			// any click that is generated.
			t = getNativeEvent( event ).changedTouches[ 0 ];
			clickBlockList.push({
				touchID: lastTouchID,
				x: t.clientX,
				y: t.clientY
			});

			// Prevent any mouse events that follow from triggering
			// virtual event notifications.
			blockMouseTriggers = true;
		}
	}
	triggerVirtualEvent( "vmouseout", event, flags);
	didScroll = false;

	startResetTimer();
}

function hasVirtualBindings( ele ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[186425,186598],"range":[186390,186598],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":361,"label":"lavaca_require"}');
	var bindings = $.data( ele, dataPropertyName ),
		k;

	if ( bindings ) {
		for ( k in bindings ) {
			if ( bindings[ k ] ) {
				return true;
			}
		}
	}
	return false;
}

function dummyMouseHandler() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[186629,186631],"range":[186600,186631],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":362,"label":"lavaca_require"}');}

function getSpecialEventObject( eventType ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[186677,190439],"range":[186633,190439],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":365,"label":"lavaca_require"}');
	var realType = eventType.substr( 1 );

	return {
		setup: function( data, namespace ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[186766,189037],"range":[186738,189037],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":363,"label":"lavaca_require"}');
			// If this is the first virtual mouse binding for this element,
			// add a bindings object to its data.

			if ( !hasVirtualBindings( this ) ) {
				$.data( this, dataPropertyName, {} );
			}

			// If setup is called, we know it is the first binding for this
			// eventType, so initialize the count for the eventType to zero.
			var bindings = $.data( this, dataPropertyName );
			bindings[ eventType ] = true;

			// If this is the first virtual mouse event for this type,
			// register a global handler on the document.

			activeDocHandlers[ eventType ] = ( activeDocHandlers[ eventType ] || 0 ) + 1;

			if ( activeDocHandlers[ eventType ] === 1 ) {
				$document.bind( realType, mouseEventCallback );
			}

			// Some browsers, like Opera Mini, won't dispatch mouse/click events
			// for elements unless they actually have handlers registered on them.
			// To get around this, we register dummy handlers on the elements.

			$( this ).bind( realType, dummyMouseHandler );

			// For now, if event capture is not supported, we rely on mouse handlers.
			if ( eventCaptureSupported ) {
				// If this is the first virtual mouse binding for the document,
				// register our touchstart handler on the document.

				activeDocHandlers[ "touchstart" ] = ( activeDocHandlers[ "touchstart" ] || 0) + 1;

				if ( activeDocHandlers[ "touchstart" ] === 1 ) {
					$document.bind( "touchstart", handleTouchStart )
						.bind( "touchend", handleTouchEnd )

						// On touch platforms, touching the screen and then dragging your finger
						// causes the window content to scroll after some distance threshold is
						// exceeded. On these platforms, a scroll prevents a click event from being
						// dispatched, and on some platforms, even the touchend is suppressed. To
						// mimic the suppression of the click event, we need to watch for a scroll
						// event. Unfortunately, some platforms like iOS don't dispatch scroll
						// events until *AFTER* the user lifts their finger (touchend). This means
						// we need to watch both scroll and touchmove events to figure out whether
						// or not a scroll happenens before the touchend event is fired.

						.bind( "touchmove", handleTouchMove )
						.bind( "scroll", handleScroll );
				}
			}
		},

		teardown: function( data, namespace ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[189080,190433],"range":[189052,190433],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":364,"label":"lavaca_require"}');
			// If this is the last virtual binding for this eventType,
			// remove its global handler from the document.

			--activeDocHandlers[ eventType ];

			if ( !activeDocHandlers[ eventType ] ) {
				$document.unbind( realType, mouseEventCallback );
			}

			if ( eventCaptureSupported ) {
				// If this is the last virtual mouse binding in existence,
				// remove our document touchstart listener.

				--activeDocHandlers[ "touchstart" ];

				if ( !activeDocHandlers[ "touchstart" ] ) {
					$document.unbind( "touchstart", handleTouchStart )
						.unbind( "touchmove", handleTouchMove )
						.unbind( "touchend", handleTouchEnd )
						.unbind( "scroll", handleScroll );
				}
			}

			var $this = $( this ),
				bindings = $.data( this, dataPropertyName );

			// teardown may be called when an element was
			// removed from the DOM. If this is the case,
			// jQuery core may have already stripped the element
			// of any data bindings so we need to check it before
			// using it.
			if ( bindings ) {
				bindings[ eventType ] = false;
			}

			// Unregister the dummy event handler.

			$this.unbind( realType, dummyMouseHandler );

			// If this is the last virtual mouse binding on the
			// element, remove the binding data from the element.

			if ( !hasVirtualBindings( this ) ) {
				$this.removeData( dataPropertyName );
			}
		}
	};
}

// Expose our custom events to the jQuery bind/unbind mechanism.

for ( var i = 0; i < virtualEventNames.length; i++ ) {
	$.event.special[ virtualEventNames[ i ] ] = getSpecialEventObject( virtualEventNames[ i ] );
}

// Add a capture click handler to block clicks.
// Note that we require event capture support for this so if the device
// doesn't support it, we punt for now and rely solely on mouse events.
if ( eventCaptureSupported ) {
	document.addEventListener( "click", function( e ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[190933,193224],"range":[190919,193224],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":366,"label":"lavaca_require"}');
		var cnt = clickBlockList.length,
			target = e.target,
			x, y, ele, i, o, touchID;

		if ( cnt ) {
			x = e.clientX;
			y = e.clientY;
			threshold = $.vmouse.clickDistanceThreshold;

			// The idea here is to run through the clickBlockList to see if
			// the current click event is in the proximity of one of our
			// vclick events that had preventDefault() called on it. If we find
			// one, then we block the click.
			//
			// Why do we have to rely on proximity?
			//
			// Because the target of the touch event that triggered the vclick
			// can be different from the target of the click event synthesized
			// by the browser. The target of a mouse/click event that is syntehsized
			// from a touch event seems to be implementation specific. For example,
			// some browsers will fire mouse/click events for a link that is near
			// a touch event, even though the target of the touchstart/touchend event
			// says the user touched outside the link. Also, it seems that with most
			// browsers, the target of the mouse/click event is not calculated until the
			// time it is dispatched, so if you replace an element that you touched
			// with another element, the target of the mouse/click will be the new
			// element underneath that point.
			//
			// Aside from proximity, we also check to see if the target and any
			// of its ancestors were the ones that blocked a click. This is necessary
			// because of the strange mouse/click target calculation done in the
			// Android 2.1 browser, where if you click on an element, and there is a
			// mouse/click handler on one of its ancestors, the target will be the
			// innermost child of the touched element, even if that child is no where
			// near the point of touch.

			ele = target;

			while ( ele ) {
				for ( i = 0; i < cnt; i++ ) {
					o = clickBlockList[ i ];
					touchID = 0;

					if ( ( ele === target && Math.abs( o.x - x ) < threshold && Math.abs( o.y - y ) < threshold ) ||
								$.data( ele, touchTargetPropertyName ) === o.touchID ) {
						// XXX: We may want to consider removing matches from the block list
						//      instead of waiting for the reset timer to fire.
						e.preventDefault();
						e.stopPropagation();
						return;
					}
				}
				ele = ele.parentNode;
			}
		}
	}, true);
}
})( jQuery, window, document );
});

//>>description: The mobile namespace on the jQuery object
//>>label: Namespace
//>>group: Core
define('jquery-mobile/jquery.mobile.ns',[ "jquery" ], function( jQuery ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[193441,193491],"range":[193422,193491],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":370,"label":"lavaca_require"}');
(function( $ ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[193458,193477],"range":[193444,193477],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":369,"label":"lavaca_require"}');
	$.mobile = {};
}( jQuery ));
});
//>>description: Touch feature test
//>>label: Touch support test
//>>group: Core

define('jquery-mobile/jquery.mobile.support.touch', [ "jquery", "./jquery.mobile.ns" ], function( jQuery ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[193684,193910],"range":[193665,193910],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":372,"label":"lavaca_require"}');
	(function( $, undefined ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[193713,193896],"range":[193688,193896],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":371,"label":"lavaca_require"}');
		var support = {
			touch: "ontouchend" in document
		};

		$.mobile.support = $.mobile.support || {};
		$.extend( $.support, support );
		$.extend( $.mobile.support, support );
	}( jQuery ));
});

//>>description: Touch events including: touchstart, touchmove, touchend, tap, taphold, swipe, swipeleft, swiperight, scrollstart, scrollstop
//>>label: Touch
//>>group: Events

define('jquery-mobile/events/touch', [ "jquery", "../jquery.mobile.vmouse", "../jquery.mobile.support.touch" ], function( jQuery ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[194223,199516],"range":[194204,199516],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":396,"label":"lavaca_require"}');

(function( $, window, undefined ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[194260,199496],"range":[194227,199496],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":395,"label":"lavaca_require"}');
	var $document = $( document );

	// add new event shortcuts
	$.each( ( "touchstart touchmove touchend " +
		"tap taphold " +
		"swipe swipeleft swiperight " +
		"scrollstart scrollstop" ).split( " " ), function( i, name ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[194485,194661],"range":[194465,194661],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":374,"label":"lavaca_require"}');

		$.fn[ name ] = function( fn ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[194520,194586],"range":[194505,194586],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":373,"label":"lavaca_require"}');
			return fn ? this.bind( name, fn ) : this.trigger( name );
		};

		// jQuery < 1.8
		if ( $.attrFn ) {
			$.attrFn[ name ] = true;
		}
	});

	var supportTouch = $.mobile.support.touch,
		scrollEvent = "touchmove scroll",
		touchStartEvent = supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = supportTouch ? "touchmove" : "mousemove";

	function triggerCustomEvent( obj, eventType, event ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[194982,195113],"range":[194929,195113],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":375,"label":"lavaca_require"}');
		var originalType = event.type;
		event.type = eventType;
		$.event.dispatch.call( obj, event );
		event.type = originalType;
	}

	// also handles scrollstop
	$.event.special.scrollstart = {

		enabled: true,

		setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195215,195822],"range":[195204,195822],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":379,"label":"lavaca_require"}');

			var thisObject = this,
				$this = $( thisObject ),
				scrolling,
				timer;

			function trigger( event, state ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[195336,195452],"range":[195303,195452],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":376,"label":"lavaca_require"}');
				scrolling = state;
				triggerCustomEvent( thisObject, scrolling ? "scrollstart" : "scrollstop", event );
			}

			// iPhone triggers scroll after a small delay; use touchmove instead
			$this.bind( scrollEvent, function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195572,195816],"range":[195554,195816],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":378,"label":"lavaca_require"}');

				if ( !$.event.special.scrollstart.enabled ) {
					return;
				}

				if ( !scrolling ) {
					trigger( event, true );
				}

				clearTimeout( timer );
				timer = setTimeout( function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195767,195804],"range":[195756,195804],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":377,"label":"lavaca_require"}');
					trigger( event, false );
				}, 50 );
			});
		}
	};

	// also handles taphold
	$.event.special.tap = {
		tapholdThreshold: 750,

		setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[195924,197064],"range":[195913,197064],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":385,"label":"lavaca_require"}');
			var thisObject = this,
				$this = $( thisObject );

			$this.bind( "vmousedown", function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[196029,197058],"range":[196011,197058],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":384,"label":"lavaca_require"}');

				if ( event.which && event.which !== 1 ) {
					return false;
				}

				var origTarget = event.target,
					origEvent = event.originalEvent,
					timer;

				function clearTapTimer() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[196219,196254],"range":[196194,196254],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":380,"label":"lavaca_require"}');
					clearTimeout( timer );
				}

				function clearTapHandlers() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[196288,196465],"range":[196260,196465],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":381,"label":"lavaca_require"}');
					clearTapTimer();

					$this.unbind( "vclick", clickHandler )
						.unbind( "vmouseup", clearTapTimer );
					$document.unbind( "vmousecancel", clearTapHandlers );
				}

				function clickHandler( event ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[196502,196733],"range":[196471,196733],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":382,"label":"lavaca_require"}');
					clearTapHandlers();

					// ONLY trigger a 'tap' event if the start target is
					// the same as the stop target.
					if ( origTarget === event.target ) {
						triggerCustomEvent( thisObject, "tap", event );
					}
				}

				$this.bind( "vmouseup", clearTapTimer )
					.bind( "vclick", clickHandler );
				$document.bind( "vmousecancel", clearTapHandlers );

				timer = setTimeout( function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[196909,197012],"range":[196898,197012],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":383,"label":"lavaca_require"}');
					triggerCustomEvent( thisObject, "taphold", $.Event( "taphold", { target: origTarget } ) );
				}, $.event.special.tap.tapholdThreshold );
			});
		}
	};

	// also handles swipeleft, swiperight
	$.event.special.swipe = {
		scrollSupressionThreshold: 30, // More than this horizontal displacement, and we will suppress scrolling.

		durationThreshold: 1000, // More time than this, and it isn't a swipe.

		horizontalDistanceThreshold: 30,  // Swipe horizontal displacement must be more than this.

		verticalDistanceThreshold: 75,  // Swipe vertical displacement must be less than this.

		start: function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[197530,197758],"range":[197512,197758],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":386,"label":"lavaca_require"}');
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event;
			return {
						time: ( new Date() ).getTime(),
						coords: [ data.pageX, data.pageY ],
						origin: $( event.target )
					};
		},

		stop: function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[197787,197982],"range":[197769,197982],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":387,"label":"lavaca_require"}');
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event;
			return {
						time: ( new Date() ).getTime(),
						coords: [ data.pageX, data.pageY ]
					};
		},

		handleSwipe: function( start, stop ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[198024,198444],"range":[198000,198444],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":388,"label":"lavaca_require"}');
			if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
				Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
				Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {

				start.origin.trigger( "swipe" )
					.trigger( start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight" );
			}
		},

		setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[198467,199238],"range":[198456,199238],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":392,"label":"lavaca_require"}');
			var thisObject = this,
				$this = $( thisObject );

			$this.bind( touchStartEvent, function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[198575,199232],"range":[198557,199232],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":391,"label":"lavaca_require"}');
				var start = $.event.special.swipe.start( event ),
					stop;

				function moveHandler( event ) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[198677,198953],"range":[198647,198953],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":389,"label":"lavaca_require"}');
					if ( !start ) {
						return;
					}

					stop = $.event.special.swipe.stop( event );

					// prevent scrolling
					if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
						event.preventDefault();
					}
				}

				$this.bind( touchMoveEvent, moveHandler )
					.one( touchStopEvent, function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[199039,199225],"range":[199028,199225],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":390,"label":"lavaca_require"}');
						$this.unbind( touchMoveEvent, moveHandler );

						if ( start && stop ) {
							$.event.special.swipe.handleSwipe( start, stop );
						}
						start = stop = undefined;
					});
			});
		}
	};
	$.each({
		scrollstop: "scrollstart",
		taphold: "tap",
		swipeleft: "swipe",
		swiperight: "swipe"
	}, function( event, sourceEvent ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[199379,199491],"range":[199348,199491],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":394,"label":"lavaca_require"}');

		$.event.special[ event ] = {
			setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[199434,199483],"range":[199423,199483],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":393,"label":"lavaca_require"}');
				$( this ).bind( sourceEvent, $.noop );
			}
		};
	});

})( jQuery, this );
});

//>>description: Feature test for orientation
//>>label: Orientation support test
//>>group: Core

define('jquery-mobile/jquery.mobile.support.orientation', [ "jquery" ], function( jQuery ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[199710,199863],"range":[199691,199863],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":398,"label":"lavaca_require"}');
	(function( $, undefined ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[199739,199849],"range":[199714,199849],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":397,"label":"lavaca_require"}');
		$.extend( $.support, {
			orientation: "orientation" in window && "onorientationchange" in window
		});
	}( jQuery ));
});

//>>description: Fires a resize event with a slight delay to prevent excessive callback invocation
//>>label: Throttled Resize
//>>group: Events

define('jquery-mobile/events/throttledresize', [ "jquery" ], function( jQuery ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[200093,200798],"range":[200074,200798],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":403,"label":"lavaca_require"}');

	// throttled resize event
	(function( $ ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[200139,200784],"range":[200125,200784],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":402,"label":"lavaca_require"}');
		$.event.special.throttledresize = {
			setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[200200,200247],"range":[200189,200247],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":399,"label":"lavaca_require"}');
				$( this ).bind( "resize", handler );
			},
			teardown: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[200273,200322],"range":[200262,200322],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":400,"label":"lavaca_require"}');
				$( this ).unbind( "resize", handler );
			}
		};

		var throttle = 250,
			handler = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[200375,200732],"range":[200364,200732],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":401,"label":"lavaca_require"}');
				curr = ( new Date() ).getTime();
				diff = curr - lastCall;

				if ( diff >= throttle ) {

					lastCall = curr;
					$( this ).trigger( "throttledresize" );

				} else {

					if ( heldCall ) {
						clearTimeout( heldCall );
					}

					// Promise a held call will still execute
					heldCall = setTimeout( handler, throttle - diff );
				}
			},
			lastCall = 0,
			heldCall,
			curr,
			diff;
	})( jQuery );
});
//>>description: Provides a wrapper around the inconsistent browser implementations of orientationchange
//>>label: Orientation Change
//>>group: Events

define('jquery-mobile/events/orientationchange', [ "jquery", "../jquery.mobile.support.orientation", "./throttledresize" ], function( jQuery ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[201098,207046],"range":[201079,207046],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":412,"label":"lavaca_require"}');

(function( $, window ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[201124,207025],"range":[201102,207025],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":411,"label":"lavaca_require"}');
	var win = $( window ),
		event_name = "orientationchange",
		special_event,
		get_orientation,
		last_orientation,
		initial_orientation_is_landscape,
		initial_orientation_is_default,
		portrait_map = { "0": true, "180": true };

	// It seems that some device/browser vendors use window.orientation values 0 and 180 to
	// denote the "default" orientation. For iOS devices, and most other smart-phones tested,
	// the default orientation is always "portrait", but in some Android and RIM based tablets,
	// the default orientation is "landscape". The following code attempts to use the window
	// dimensions to figure out what the current orientation is, and then makes adjustments
	// to the to the portrait_map if necessary, so that we can properly decode the
	// window.orientation value whenever get_orientation() is called.
	//
	// Note that we used to use a media query to figure out what the orientation the browser
	// thinks it is in:
	//
	//     initial_orientation_is_landscape = $.mobile.media("all and (orientation: landscape)");
	//
	// but there was an iPhone/iPod Touch bug beginning with iOS 4.2, up through iOS 5.1,
	// where the browser *ALWAYS* applied the landscape media query. This bug does not
	// happen on iPad.

	if ( $.support.orientation ) {

		// Check the window width and height to figure out what the current orientation
		// of the device is at this moment. Note that we've initialized the portrait map
		// values to 0 and 180, *AND* we purposely check for landscape so that if we guess
		// wrong, , we default to the assumption that portrait is the default orientation.
		// We use a threshold check below because on some platforms like iOS, the iPhone
		// form-factor can report a larger width than height if the user turns on the
		// developer console. The actual threshold value is somewhat arbitrary, we just
		// need to make sure it is large enough to exclude the developer console case.

		var ww = window.innerWidth || win.width(),
			wh = window.innerHeight || win.height(),
			landscape_threshold = 50;

		initial_orientation_is_landscape = ww > wh && ( ww - wh ) > landscape_threshold;


		// Now check to see if the current window.orientation is 0 or 180.
		initial_orientation_is_default = portrait_map[ window.orientation ];

		// If the initial orientation is landscape, but window.orientation reports 0 or 180, *OR*
		// if the initial orientation is portrait, but window.orientation reports 90 or -90, we
		// need to flip our portrait_map values because landscape is the default orientation for
		// this device/browser.
		if ( ( initial_orientation_is_landscape && initial_orientation_is_default ) || ( !initial_orientation_is_landscape && !initial_orientation_is_default ) ) {
			portrait_map = { "-90": true, "90": true };
		}
	}

	$.event.special.orientationchange = $.extend( {}, $.event.special.orientationchange, {
		setup: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[204027,204532],"range":[204016,204532],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":404,"label":"lavaca_require"}');
			// If the event is supported natively, return false so that jQuery
			// will bind to the event using DOM methods.
			if ( $.support.orientation && !$.event.special.orientationchange.disabled ) {
				return false;
			}

			// Get the current orientation to avoid initial double-triggering.
			last_orientation = get_orientation();

			// Because the orientationchange event doesn't exist, simulate the
			// event by testing window dimensions on resize.
			win.bind( "throttledresize", handler );
		},
		teardown: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[204557,204929],"range":[204546,204929],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":405,"label":"lavaca_require"}');
			// If the event is not supported natively, return false so that
			// jQuery will unbind the event using DOM methods.
			if ( $.support.orientation && !$.event.special.orientationchange.disabled ) {
				return false;
			}

			// Because the orientationchange event doesn't exist, unbind the
			// resize event handler.
			win.unbind( "throttledresize", handler );
		},
		add: function( handleObj ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[204960,205332],"range":[204938,205332],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":407,"label":"lavaca_require"}');
			// Save a reference to the bound event handler.
			var old_handler = handleObj.handler;


			handleObj.handler = function( event ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[205096,205327],"range":[205078,205327],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":406,"label":"lavaca_require"}');
				// Modify event object, adding the .orientation property.
				event.orientation = get_orientation();

				// Call the originally-bound event handler and return its result.
				return old_handler.apply( this, arguments );
			};
		}
	});

	// If the event is not supported natively, this handler will be bound to
	// the window resize event to simulate the orientationchange event.
	function handler() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[205502,205768],"range":[205483,205768],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":408,"label":"lavaca_require"}');
		// Get the current orientation.
		var orientation = get_orientation();

		if ( orientation !== last_orientation ) {
			// The orientation has changed, so trigger the orientationchange event.
			last_orientation = orientation;
			win.trigger( event_name );
		}
	}

	// Get the current page orientation. This method is exposed publicly, should it
	// be needed, as jQuery.event.special.orientationchange.orientation()
	$.event.special.orientationchange.orientation = get_orientation = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[206000,206832],"range":[205989,206832],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":409,"label":"lavaca_require"}');
		var isPortrait = true, elem = document.documentElement;

		// prefer window orientation to the calculation based on screensize as
		// the actual screen resize takes place before or after the orientation change event
		// has been fired depending on implementation (eg android 2.3 is before, iphone after).
		// More testing is required to determine if a more reliable method of determining the new screensize
		// is possible when orientationchange is fired. (eg, use media queries + element + opacity)
		if ( $.support.orientation ) {
			// if the window orientation registers as 0 or 180 degrees report
			// portrait, otherwise landscape
			isPortrait = portrait_map[ window.orientation ];
		} else {
			isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
		}

		return isPortrait ? "portrait" : "landscape";
	};

	$.fn[ event_name ] = function( fn ) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[206872,206948],"range":[206857,206948],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":410,"label":"lavaca_require"}');
		return fn ? this.bind( event_name, fn ) : this.trigger( event_name );
	};

	// jQuery < 1.8
	if ( $.attrFn ) {
		$.attrFn[ event_name ] = true;
	}

}( jQuery, this ));

});

define('lavaca/mvc/Application',['require','$','lavaca/net/History','lavaca/env/Device','lavaca/events/EventDispatcher','lavaca/mvc/Router','lavaca/mvc/ViewManager','lavaca/net/Connectivity','lavaca/ui/Template','lavaca/util/Config','lavaca/util/Promise','lavaca/env/ChildBrowser','lavaca/util/Translation','jquery-mobile/events/touch','jquery-mobile/events/orientationchange'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[207446,214086],"range":[207428,214086],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":425,"label":"lavaca_require"}');

  var $ = require('$'),
    History = require('lavaca/net/History'),
    Device = require('lavaca/env/Device'),
    EventDispatcher = require('lavaca/events/EventDispatcher'),
    router = require('lavaca/mvc/Router'),
    viewManager = require('lavaca/mvc/ViewManager'),
    Connectivity = require('lavaca/net/Connectivity'),
    Template = require('lavaca/ui/Template'),
    Config = require('lavaca/util/Config'),
    Promise = require('lavaca/util/Promise'),
    ChildBrowser = require('lavaca/env/ChildBrowser'),
    Translation = require('lavaca/util/Translation');
    require('jquery-mobile/events/touch');
    require('jquery-mobile/events/orientationchange');

  function _stopEvent(e) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[208145,208199],"range":[208122,208199],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":413,"label":"lavaca_require"}');
    e.preventDefault();
    e.stopPropagation();
  }

  function _matchHashRoute(hash) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[208234,208406],"range":[208203,208406],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":414,"label":"lavaca_require"}');
    var matches = hash.match(/^(?:#)(\/.*)#?@?/);
    if (matches instanceof Array && matches[1]) {
      return matches[1].replace(/#.*/, '');
    }
    return null;
  }

  /**
   * Base application type
   * @class lavaca.mvc.Application
   * @extends lavaca.events.EventDispatcher
   *
   */
   /**
   * Creates an application
   * @constructor
   * @param {Function} [callback]  A callback to execute when the application is initialized but not yet ready
   */
  var Application = EventDispatcher.extend(function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[208763,208953],"range":[208744,208953],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":416,"label":"lavaca_require"}');
    if (callback) {
      this._callback = callback.bind(this);
    }
    Device.init(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[208862,208936],"range":[208851,208936],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":415,"label":"lavaca_require"}');
      this.beforeInit(Config)
        .then(this.init.bind(this));
    }.bind(this));
  }, {
    /**
     * The default URL that the app will navigate to
     * @property initRoute
     * @default '/'
     *
     * @type String
     */

    initRoute: '/',
    /**
     * The default state object to supply the initial route
     * @property initState
     * @default null
     *
     * @type {Object}
     */
    initState: null,
    /**
     * The default params object to supply the initial route
     * @property initParams
     * @default null
     *
     * @type {Object}
     */

    initParams: null,
    /**
     * The selector used to identify the DOM element that will contain views
     * @property viewRootSelector
     * @default #view-root
     *
     * @type {String}
     */

    viewRootSelector: '#view-root',
    /**
     * Handler for when the user attempts to navigate to an invalid route
     * @method onInvalidRoute
     *
     * @param {Object} err  The routing error
     */
    onInvalidRoute: function(err) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[209900,210166],"range":[209886,210166],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":417,"label":"lavaca_require"}');
      // If the error is equal to "locked", it means that the router or view manager was
      // busy while while the user was attempting to navigate
      if (err !== 'locked') {
        alert('An error occurred while trying to display this URL.');
      }
    },
    /**
     * Handler for when the user taps on a <A> element
     * @method onTapLink
     *
     * @param {Event} e  The event object
     */
    onTapLink: function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[210340,211110],"range":[210328,211110],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":418,"label":"lavaca_require"}');
      var link = $(e.currentTarget),
          url = link.attr('href'),
          rel = link.attr('rel'),
          target = link.attr('target'),
          isExternal = link.is('[data-external]');
      if (/^((mailto)|(tel)|(sms))\:/.test(url) || link.is('.ignore')) {
        location.href = url;
        return true;
      } else {
        e.preventDefault();
      }
      if (rel === 'back') {
        History.back();
      } else if (isExternal || rel === 'nofollow' || target === '_blank') {
        e.stopPropagation();
        new ChildBrowser().showWebPage(url);
      } else if (rel === 'cancel') {
        this.viewManager.dismiss(e.currentTarget);
      } else if (url) {
        this.router.exec(url, null, null).error(this.onInvalidRoute);
      }
    },
    /**
     * Makes an AJAX request if the user is online. If the user is offline, the returned
     * promise will be rejected with the string argument "offline". (Alias for [[Lavaca.net.Connectivity]].ajax)
     * @method ajax
     *
     * @param {Object} opts  jQuery-style AJAX options
     * @return {Lavaca.util.Promise}  A promise
     */
    ajax: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[211481,211551],"range":[211470,211551],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":419,"label":"lavaca_require"}');
      return Connectivity.ajax.apply(Connectivity, arguments);
    },
    /**
     * Initializes the application
     * @method init
     *
     * @param {Object} args  Data of any type from a resolved promise returned by Application.beforeInit(). Defaults to null.
     *
     * @return {Lavaca.util.Promise}  A promise that resolves when the application is ready for use
     */
    init: function(args) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[211889,213352],"range":[211874,213352],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":422,"label":"lavaca_require"}');
      var promise = new Promise(this),
          _cbPromise,
          lastly;
      Template.init();
      /**
       * View manager used to transition between UI states
       * @property viewManager
       * @default null
       *
       * @type {Lavaca.mvc.ViewManager}
       */
      this.viewManager = viewManager.setEl(this.viewRootSelector);
      /**
       * Router used to manage application traffic and URLs
       * @property router
       * @default null
       *
       * @type {Lavaca.mvc.Router}
       */
      this.router = router.setViewManager(this.viewManager);


      lastly = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[212504,212923],"range":[212493,212923],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":420,"label":"lavaca_require"}');
        this.router.startHistory();
        if (!this.router.hasNavigated) {
          promise.when(
            this.router.exec(this.initialHashRoute || this.initRoute, this.initState, this.initParams)
          );
          if (this.initState) {
            History.replace(this.initState.state, this.initState.title, this.initState.url);
          }
        } else {
          promise.resolve();
        }
      }.bind(this);

      $(document.body)
        .on('tap', 'a', this.onTapLink.bind(this))
        .on('tap', '.ui-blocker', _stopEvent);

      if (this._callback) {
        _cbPromise = this._callback(args);
        _cbPromise instanceof Promise ? _cbPromise.then(lastly, promise.rejector()) : lastly();
      } else {
        lastly();
      }
      return promise.then(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213304,213344],"range":[213293,213344],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":421,"label":"lavaca_require"}');
        this.trigger('ready');
      });
    },

    /**
     * Gets initial route based on query string returned by server 302 redirect
     * @property initialStandardRoute
     * @default null
     *
     * @type {String}
     */

    initialHashRoute: (function(hash) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213578,213621],"range":[213563,213621],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":423,"label":"lavaca_require"}');
      return _matchHashRoute(hash);
    })(window.location.hash),
    /**
     * Handles asynchronous requests that need to happen before Application.init() is called in the constructor
     * @method {String} beforeInit
     *
     * @param {Lavaca.util.Config} Config cache that's been initialized
     *
     * @return {Lavaca.util.Promise}  A promise
     */
    beforeInit: function(Config) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[213976,214054],"range":[213959,214054],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":424,"label":"lavaca_require"}');
      var promise = new Promise();
      return promise.resolve(null);
    }
  });

  return Application;

});

define('lavaca/mvc/Collection',['require','lavaca/mvc/Model','lavaca/net/Connectivity','lavaca/util/ArrayUtils','lavaca/util/Promise','mout/lang/deepClone','mout/object/merge'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214285,237649],"range":[214267,237649],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":455,"label":"lavaca_require"}');

  var Model = require('lavaca/mvc/Model'),
      Connectivity = require('lavaca/net/Connectivity'),
      ArrayUtils = require('lavaca/util/ArrayUtils'),
      Promise = require('lavaca/util/Promise'),
      clone = require('mout/lang/deepClone'),
      merge = require('mout/object/merge');

  var UNDEFINED;

  function _triggerItemEvent(collection, event, previousIndex, index, model) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[214676,214796],"range":[214601,214796],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":426,"label":"lavaca_require"}');
    collection.trigger(event, {
      previousIndex: previousIndex,
      index: index,
      model: model
    });
  }

  function _getComparator(attr, descending) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[214842,215145],"range":[214800,215145],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":428,"label":"lavaca_require"}');
    var compareVal = descending ? 1 : -1;
    return function(modelA, modelB) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[214922,215140],"range":[214897,215140],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":427,"label":"lavaca_require"}');
      var attrA = modelA.get(attr),
          attrB = modelB.get(attr);
      return (attrA === attrB)
              ? 0
              : attrA < attrB
                ? compareVal
                : -compareVal;
    };
  }

  // Virtual type
  /**
   * Event type used when a model in a collection has an event
   * @class lavaca.mvc.ItemEvent
   * @extends lavaca.events.EventDispatcher

   *
   * @property {Lavaca.mvc.Collection} target
   * @default null
   * The collection that contains (or contained) the model that caused the event
   *
   * @property {Lavaca.mvc.Model} model
   * @default null
   * The model that caused the event
   *
   * @property {Number} index
   * @default null
   * The index of the event-causing model in the collection
   *
   * @property {Number} previousIndex
   * @default null
   * The index of the event-causing model before the event
   */

  /**
   * @class lavaca.mvc.Collection
   * @super Model
   * Basic model collection type
   *
   * @event change
   * @event invalid
   * @event fetchSuccess
   * @event fetchError
   * @event saveSuccess
   * @event saveError
   * @event changeItem
   * @event invalidItem
   * @event saveSuccessItem
   * @event saveErrorItem
   *
   * @constructor
   * @param {Array} models  A list of models to add to the collection
   * @param {Object} [map]  A parameter hash to apply to the collection
   */
  var Collection = Model.extend(function(models, map) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[216361,216657],"range":[216339,216657],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":429,"label":"lavaca_require"}');
    Model.call(this, map);
    this.models = [];
    this.changedOrder = false;
    this.addedItems = [];
    this.removedItems = [];
    this.changedItems = [];
    if (models) {
      this.suppressEvents = true;
      this.add.apply(this, models);
      this.suppressEvents = false;
    }
  }, {
    /**
     * The type of model object to use for items in this collection
     * @property TModel
     * @default [[Lavaca.mvc.Model]]
     *
     * @type Function
     */

    TModel: Model,
    /**
     * The name of the property containing the collection's items when using toObject()
     * @property itemsProperty
     * @default 'items'
     *
     * @type String
     */
   itemsProperty: 'items',
    /**
     * Whether to allow duplicated IDs in collection items. If false, a later added item will overwrite the one with same ID.
     * @property allowDuplicatedIds
     * @default false
     *
     * @type Boolean
     */
    allowDuplicatedIds: false,
    /**
     * Removes and disposes of all models in the collection
     * @method clear
     *
     */
//  @event removeItem
    clear: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[217475,217560],"range":[217464,217560],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":430,"label":"lavaca_require"}');
      Model.prototype.clear.apply(this, arguments);
      this.clearModels();
    },
    /**
     * clears only the models in the collection
     * @method clearModels
     *
     */
    clearModels: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[217688,217985],"range":[217677,217985],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":431,"label":"lavaca_require"}');
      var i = -1,
          model;
      while (!!(model = this.models[++i])) {
        this.remove(model);
      }
      this.changedOrder = false;
      this.addedItems.length
        = this.removedItems.length
        = this.changedItems.length
        = this.models.length
        = 0;
    },
    /**
     * Readies data to be an item in the collection
     * @method prepare
     *
     * @param {Object} data  The model or object to be added
     * @return {Lavaca.mvc.Model}  The model derived from the data
     */
    prepare: function(data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[218241,218819],"range":[218226,218819],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":432,"label":"lavaca_require"}');
      var model = data instanceof this.TModel
            ? data
            : this.TModel.prototype instanceof Collection
              ? new this.TModel(data[this.TModel.prototype.itemsProperty], data)
              : new this.TModel(data),
          index = ArrayUtils.indexOf(this.models, model);
      if (index === -1) {
        model
          .on('change', this.onItemEvent, this)
          .on('invalid', this.onItemEvent, this)
          .on('saveSuccess', this.onItemEvent, this)
          .on('saveError', this.onItemEvent, this);
      }
      return model;
    },
    /**
     * Determines whether or not an attribute can be assigned
     * @method canSet
     *
     * @param {String} attribute  The name of the attribute
     * @return {Boolean}  True if you can assign to the attribute
     */
    canSet: function(attribute) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[219086,219140],"range":[219066,219140],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":433,"label":"lavaca_require"}');
      return attribute !== this.itemsProperty;
    },
    /**
     * Inserts one or more items into the collection at the specified index
     * @method insert
     *
     * @param {Number} insertIndex  index at which items will be inserted
     * @param {Array} newItems  Array of objects or Models to insert
     * @return {Boolean}  false if no items were able to be added, true otherwise.
     */
    /**
     * Inserts one or more items into the collection at the specified index
     * @method insert
     * @param {Number} insertIndex  index at which items will be inserted
     * @params {Object} items  One or more objects or Models to insert
     * @return {Boolean}  false if no items were able to be added, true otherwise.
     */
//@event addItem

    insert: function(insertIndex, item /*, item1, item2, item3...*/) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[219918,221255],"range":[219861,221255],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":434,"label":"lavaca_require"}');
      var result = false,
          idAttribute = this.TModel.prototype.idAttribute,
          compareObj = {},
          id,
          i,
          j,
          model,
          index,
          items;
      items = item && ArrayUtils.isArray(item) ? item : Array.prototype.slice.call(arguments, 1);
      for (i = 0, j = items.length; i < j; i++) {
        model = items[i];
        if (typeof model === 'object') {
          model = this.prepare(model);

          // If it's a duplicate, remove the old item
          id = model.get(idAttribute);
          if (id !== null) {
            compareObj[idAttribute] = id;
            index = this.indexOf(compareObj);
            if (index > -1 && !this.allowDuplicatedIds) {
              this.remove(index);
            }
          }

          this.models.splice(insertIndex, 0, model);
          if (!this.suppressTracking) {
            ArrayUtils.remove(this.removedItems, model);
            ArrayUtils.remove(this.changedItems, model);
            ArrayUtils.pushIfNotExists(this.addedItems, model);
          }
          _triggerItemEvent(this, 'addItem', null, insertIndex, this.models[insertIndex]);
          insertIndex++;
          result = true;
        } else {
          throw 'Only objects can be added to a Collection.';
        }
      }

      return result;
    },
    /**
     * Adds one or more items to the collection. Items with IDs matching an item already in this collection will replace instead of add.
     * @method add
     *
     * @params {Object} item  One or more items to add to the collection
     * @return {Boolean}  True if an item was added, false otherwise
     */
    /**
     * Adds one or more items to the collection. Items with IDs matching an item already in this collection will replace instead of add.
     * @method add
     *
     * @params {Array} items  An array of items to add to the collection
     * @return {Boolean}  True if an item was added, false otherwise
     */
// * @event addItem
    add: function(/* item1, item2, itemN */) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[221964,222186],"range":[221928,222186],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":435,"label":"lavaca_require"}');
      if (arguments.length && arguments[0] instanceof Array) {
        return this.add.apply(this, arguments[0]);
      }
      return this.insert.call(this, this.count(), Array.prototype.slice.call(arguments, 0));
    },
    /**
     * Moves an item
     * @method moveTo
     *
     * @param {Lavaca.mvc.Model} model  The model to move
     * @param {Number} newIndex  The new index at which the model should be placed
     *
     */
    /**
     * Moves an item
     * @method moveTo
     *
     * @param {Number} oldIndex  The current index of the model
     * @param {Number} newIndex  The new index at which the model should be placed
     */
// * @event moveItem
    moveTo: function(oldIndex, newIndex) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[222677,223135],"range":[222648,223135],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":436,"label":"lavaca_require"}');
      if (oldIndex instanceof this.TModel) {
        oldIndex = ArrayUtils.indexOf(this.models, oldIndex);
      }
      if (oldIndex > -1) {
        var model = this.models.splice(oldIndex, 1)[0];
        if (model) {
          this.models.splice(newIndex, 0, model);
          if (!this.suppressTracking) {
            this.changedOrder = true;
          }
          _triggerItemEvent(this, 'moveItem', oldIndex, newIndex, model);
        }
      }
    },
    /**
     * Removes an item from the collection
     * @method remove
     * @params {Number} index  The index of the model to remove
     * @return {Boolean}  True if an item was removed, false otherwise
     *
     */
    /**
     * Removes an item from the collection
     * @method remove
     * @params {Lavaca.mvc.Model} item  The models to remove from the collection
     * @return {Boolean}  True if an item was removed, false otherwise
     *
     */
    /**
     * Removes an item from the collection
     * @method remove
     * @param {Object} item  One object containing attributes matching any models to remove
     * @return {Boolean}  True if at least one item was removed, false otherwise
     *
     */
    /**
     * Removes an item from the collection
     * @method remove
     * @param {Object} item  N number of object arguments containing attributes matching any models to remove
     * @return {Array}  An array of booleans indicating if at least one item was removed by matching each argument
     *
     */
    /**
     * Removes an item from the collection
     * @method remove
     * @param {Array} items  An array of objects containing attributes matching any models to remove
     * @return {Array}  An array of booleans indicating if at least one item was removed by matching each element in the array
     */
    /**
     * Removes an item from the collection
     * @method remove
     * @param {Function} test  A function to check each model in the collection in the form
     *     test(index, model). If the test function returns true, the model will be removed
     * @return {Boolean}  True if at least one item was removed, false otherwise
     */
//* @event removeItem

    remove: function(item /*, item1, item2, item3...*/) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[224908,226659],"range":[224864,226659],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":437,"label":"lavaca_require"}');
      var n, it, items, index, i, removed;

      if (arguments.length === 1 && ArrayUtils.isArray(item)) {
        n = 0;
        removed = [];
        while (!!(it = item[n++])) {
          removed.push(this.remove(it));
        }
        return removed;
      } else if (arguments.length > 1) {
        // Prevent passing multiple numeric arguments,
        // which could have unexpected behavior
        if (typeof item === 'number' && item % 1 === 0) { // is integer
          return this.remove(item);
        } else {
          return this.remove([].slice.call(arguments));
        }
      }

      if (item instanceof this.TModel) {
        index = ArrayUtils.remove(this.models, item);
        if (index > -1) {
          if (!this.suppressTracking) {
            ArrayUtils.remove(this.addedItems, item);
            ArrayUtils.remove(this.changedItems, item);
            ArrayUtils.pushIfNotExists(this.removedItems, item);
          }
          item
            .off('change', this.onItemEvent)
            .off('invalid', this.onItemEvent)
            .off('saveSuccess', this.onItemEvent)
            .off('saveError', this.onItemEvent);
          _triggerItemEvent(this, 'removeItem', index, null, item);
          return true;
        } else {
          return false;
        }
      } else if (typeof item === 'number' && item % 1 === 0) { // is integer
        if (item >= 0 && item < this.count()) {
          return this.remove(this.itemAt(item));
        } else {
          return false;
        }
      } else {
        items = this.filter(item),
        i = -1,
        removed = false;
        while (!!(item = items[++i])) {
          removed = this.remove(item) || removed;
        }
        return removed;
      }
    },
    /**
     * Compiles a list of items matching an attribute hash
     * @method filter
     *
     * @param {Object} The attributes to test against each model
     * @return {Array}  A list of this collection's models that matched the attributes
     */
    /**
     * Compiles a list of items matching an attribute hash
     * @method filter
     *
     * @param {Object} attributes  The attributes to test against each model
     * @param {Number} maxResults  The maximum number of results to return
     * @return {Array}  A list of this collection's models that matched the attributes
     */
    /**
     * Compiles a list of items matching an attribute hash
     * @method filter
     *
     * @param {Function} test  A function to check each model in the collection in the form
     *     test(index, model). If the test function returns true, the model will be included
     *     in the result
     * @return {Array}  A list of this collection's models that passed the test
     */

    /**
     * Compiles a list of items matching an attribute hash
     * @method filter
     *
     * @param {Function} test  A function to check each model in the collection in the form
     *     test(index, model). If the test function returns true, the model will be included
     *     in the result
     * @param {Number} maxResults  The maximum number of results to return
     * @return {Array}  A list of this collection's models that passed the test
     */
    filter: function(test, maxResults) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[228163,228801],"range":[228136,228801],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":439,"label":"lavaca_require"}');
      maxResults = maxResults === UNDEFINED ? Number.MAX_VALUE : maxResults;
      var result = [],
          i = -1,
          item,
          attrs;
      if (typeof test !== 'function') {
        attrs = test;
        test = function(index, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[228415,228580],"range":[228393,228580],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":438,"label":"lavaca_require"}');
          for (var n in attrs) {
            if (item.get(n) !== attrs[n]) {
              return false;
            }
          }
          return true;
        };
      }
      while (!!(item = this.models[++i])) {
        if (test(i, item)) {
          result.push(item);
          if (--maxResults < 1) {
            break;
          }
        }
      }
      return result;
    },
    /**
     * Finds the first item matching an attribute hash
     * @method first
     *
     * @param {Object} attributes  The attributes to test against each model
     * @return {Lavaca.mvc.Model}  The first model that matched the attributes (or null)
     */
     /**
     * Finds the first item that passed a functional test
     * @method first
     *
     * @param {Function} test  A function to check each model in the collection in the form
     *     test(index, model). If the test function returns true, the model will be included
     *     as the result
     * @return {Lavaca.mvc.Model}  The first model that passed the test (or null)
     */
    first: function(test) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[229489,229542],"range":[229474,229542],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":440,"label":"lavaca_require"}');
      return this.filter(test, 1)[0] || null;
    },
    /**
     * Finds the index of the first item matching an attribute hash
     * @method indexOf
     *
     * @sig
     * Finds the index of the first item matching an attribute hash
     * @param {Object} attributes  The attributes to test against each model
     * @return {Number}  Index of the matching model, or -1 if no match is found
     */
    /**
     * Finds the index of the first item that passed a functional test
     * @method indexOf
     * @param {Function} test  A function to check each model in the collection in the form
     *     test(index, model). If the test function returns true, the model will be included
     *     as the result
     * @return {Number}  Index of the matching model, or -1 if no match is found
     */
    indexOf: function(test) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[230325,230434],"range":[230310,230434],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":441,"label":"lavaca_require"}');
      var match = this.first(test);
      return match ? ArrayUtils.indexOf(this.models, match) : -1;
    },
    /**
     * Gets the item at a specific index
     * @method itemAt
     *
     * @param {Number} index  The index of the item
     * @return {Lavaca.mvc.Model}  The model at that index
     */
    itemAt: function(index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[230661,230701],"range":[230645,230701],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":442,"label":"lavaca_require"}');
      return this.models[index];
    },
    /**
     * Gets the number of items in the collection
     * @method count
     *
     * @return {Number}  The number of items in the collection
     */
    count: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[230882,230922],"range":[230871,230922],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":443,"label":"lavaca_require"}');
      return this.models.length;
    },
    /**
     * Executes a callback for each model in the collection. To stop iteration immediately,
     * return false from the callback.
     * @method each
     *
     * @param {Function} callback  A function to execute for each item, callback(index, model)
     */
    /**
     * Executes a callback for each model in the collection. To stop iteration immediately,
     * return false from the callback.
     * @method each
     * @param {Function} callback  A function to execute for each item, callback(index, model)
     * @param {Object} thisp  The context of the callback
     */
    each: function(cb, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[231543,231769],"range":[231523,231769],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":444,"label":"lavaca_require"}');
      var i = -1,
          returned,
          item;
      while (!!(item = this.itemAt(++i))) {
        returned = cb.call(thisp || this, i, item);
        if (returned === false) {
          break;
        }
      }
    },
    /**
     * Sorts the models in the collection using the specified attribute, in ascending order.
     * @method sort
     *
     * @param {String} attribute  Attribute to sort by
     * @return {Lavaca.mvc.Collection}  The updated collection (for chaining)
     */
    /**
     * Sorts the models in the collection using the specified attribute, in either ascending or descending order.
     * @method sort
     *
     * @param {String} attribute  Attribute to sort by
     * @param {Boolean}  descending  Use descending sort. Defaults to false
     * @return {Lavaca.mvc.Collection}  The updated collection (for chaining)
     *
     */
    /**
     * Sorts the models in the collection according to the specified compare function.
     * @method sort
     *
     * @param {Function} compareFunction  A function that compares two models. It should work
     *     in the same manner as the default Array.sort method in javascript.  i.e. the function
     *     should have a signature of function(modelA, modelB) and should return a negative integer
     *     if modelA should come before modelB, a positive integer if modelB should come before modelA
     *     and integer 0 if modelA and modelB are equivalent.
     * @return {Lavaca.mvc.Collection}  The updated collection (for chaining)
     */
//* @event moveItem

    sort: function(attribute, descending) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[233140,233761],"range":[233108,233761],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":446,"label":"lavaca_require"}');
      var comparator = typeof attribute === "function" ? attribute : _getComparator(attribute, descending),
          oldModels = clone(this.models),
          oldIndex;
      this.models.sort(comparator, this);
      if (!this.suppressTracking) {
        this.changedOrder = true;
      }
      if (!this.suppressEvents) {
        this.each(function(index, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[233507,233726],"range":[233484,233726],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":445,"label":"lavaca_require"}');
          oldIndex = ArrayUtils.indexOf(oldModels, model);
          if (oldIndex !== index) {
            _triggerItemEvent(this, 'moveItem', ArrayUtils.indexOf(oldModels, model), index, model);
          }
        });
      }
      return this;
    },
    /**
     * Reverses the order of the models in the collection
     * @method reverse
     *
     * @return {Lavaca.mvc.Collection}  The updated collection (for chaining)
     */
//* @event moveItem
    reverse: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[233989,234489],"range":[233978,234489],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":448,"label":"lavaca_require"}');
      var oldModels = clone(this.models),
          oldIndex;
      this.models.reverse();
      if (!this.suppressTracking) {
        this.changedOrder = true;
      }
      if (!this.suppressEvents) {
        this.each(function(index, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[234235,234454],"range":[234212,234454],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":447,"label":"lavaca_require"}');
          oldIndex = ArrayUtils.indexOf(oldModels, model);
          if (oldIndex !== index) {
            _triggerItemEvent(this, 'moveItem', ArrayUtils.indexOf(oldModels, model), index, model);
          }
        });
      }
      return this;
    },
    /**
     * Handler invoked when an item in the collection has an event. Triggers an [[Lavaca.mvc.ItemEvent]].
     * @method onItemEvent
     *
     * @param {Lavaca.mvc.ModelEvent} e  The item event
     */
    onItemEvent: function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[234732,235183],"range":[234720,235183],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":449,"label":"lavaca_require"}');
      var model = e.target,
          index = ArrayUtils.indexOf(this.models, model);
      if (e.type === 'change') {
        ArrayUtils.pushIfNotExists(this.changedItems, model);
      } else if (e.type === 'saveSuccess') {
        ArrayUtils.remove(this.changedItems, model);
      }
      this.trigger(e.type + 'Item', merge({}, e, {
        target: model,
        model: model,
        index: index,
        previousIndex: null
      }));
    },
    /**
     * Processes the data received from a fetch request
     * @method onFetchSuccess
     *
     * @param {Object} response  The response data
     */
    onFetchSuccess: function(response) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[235384,235901],"range":[235365,235901],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":450,"label":"lavaca_require"}');
      var list;
      response = this.parse(response);
      if (this.responseFilter && typeof this.responseFilter === 'function') {
        response = this.responseFilter(response);
      }
      list = response;
      if (!(list instanceof Array)) {
        this.apply(response);
        if (response && response.hasOwnProperty(this.itemsProperty)) {
          list = response[this.itemsProperty];
        }
      }
      this.add.apply(this, list);
      this.trigger('fetchSuccess', {response: response});
    },
    /**
     * Saves the model to the server via POST
     * @method saveToServer
     *
     * @param {String} url  The URL to which to post the data
     * @return {Lavaca.util.Promise}  A promise
     */
    saveToServer: function(url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[236142,236639],"range":[236128,236639],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":452,"label":"lavaca_require"}');
      return this.save(function(model, changedAttributes, attributes) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[236214,236631],"range":[236167,236631],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":451,"label":"lavaca_require"}');
        var id = this.id(),
            data;
        if (this.isNew()) {
          data = attributes;
        } else {
          changedAttributes[this.idAttribute] = id;
          data = changedAttributes;
        }
        return (new Promise(this)).when(Connectivity.ajax({
          url: url,
          cache: false,
          type: 'POST',
          data: data,
          dataType: 'json'
        }));
      });
    },
    /**
     * Converts this model to a key-value hash
     * @method toObject
     *
     * @param {Boolean} idOnly  When true, only include item IDs for pre-existing items
     * @return {Object}  The key-value hash
     */
    toObject: function(idOnly) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[236898,237234],"range":[236881,237234],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":453,"label":"lavaca_require"}');
      var obj = Model.prototype.toObject.apply(this, arguments),
          prop = this.itemsProperty,
          items = obj[prop] = [],
          i = -1,
          item;
      while (!!(item = this.models[++i])) {
        items[obj[prop].length] = idOnly && !item.isNew() ? item.id() : item.toObject();
      }
      return obj;
    },
    /**
    * Filters the raw response from onFetchSuccess() down to a custom object. (Meant to be overriden)
    * @method responseFilter
    *
    * @param {Object} response  The raw response passed in onFetchSuccess()
    * @return {Object}  An object or array to be applied to this collection instance
    */
    responseFilter: function(response) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[237588,237618],"range":[237569,237618],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":454,"label":"lavaca_require"}');
      return response;
    }
  });

  return Collection;

});

define('lavaca/util/StringUtils',['require'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[237716,240034],"range":[237698,240034],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":459,"label":"lavaca_require"}');

  var _htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  function _noop(s) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[237857,237876],"range":[237839,237876],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":456,"label":"lavaca_require"}');
    return s;
  }

  /**
   * Static utility type for working with strings
   * @class lavaca.util.StringUtils
   */
  var StringUtils = {};

  /**
   * Substitutes arguments into a string
   * @method format
   * @static
   * @param {String} s  The format string. Substitutions should be in the form {0} to sub in
   *   the first arg, {1} for the second, and so on
   * @params {Object} arg  Arguments to be substituted in to the string
   * @return {String}  The format string with the arguments substituted into it
   */
  /**
   * Substitutes arguments into a string
   * @method format
   * @static
   * @param {String} s  The format string. Substitutions should be in the form {0} to sub in
   *   the first arg, {1} for the second, and so on
   * @param {Array} args  Arguments to be substituted in to the string
   * @return {String}  The format string with the arguments substituted into it
   */
  /**
   * Substitutes arguments into a string
   * @method format
   * @static
   * @param {String} s  The format string. Substitutions should be in the form {0} to sub in
   *   the first arg, {1} for the second, and so on
   * @param {Array} args  Arguments to be substituted in to the string
   * @param {Function} fn  A function to call on each argument, the result of which is substituted into the string
   * @return {String}  The format string with the arguments substituted into it
   */
  StringUtils.format = function(s /*[, arg0, arg1, argN]*/) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[239323,239671],"range":[239286,239671],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":457,"label":"lavaca_require"}');
    var args,
        fn = _noop,
        i,
        j;
    if (arguments[1] instanceof Array) {
      args = arguments[1];
      fn = arguments[2] || _noop;
    } else {
      args = [].slice.call(arguments, 1);
    }
    for (i = 0, j = args.length; i < j; i++) {
      s = s.split('{' + i + '}').join(fn(args[i] + ''));
    }
    return s;
  };

  /**
   * Escapes a string for inclusion in HTML
   * @method escapeHTML
   * @static
   *
   * @param {String} s  The string
   * @return {String}  The escaped string
   */
  StringUtils.escapeHTML = function(s) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[239888,240007],"range":[239876,240007],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":458,"label":"lavaca_require"}');
    s = '' + s;
    for (var n in _htmlEscapes) {
      s = s.split(n).join(_htmlEscapes[n]);
    }
    return s;
  };

  return StringUtils;

});
define('lavaca/mvc/Controller',['require','lavaca/net/Connectivity','lavaca/net/History','lavaca/util/Disposable','lavaca/util/Promise','lavaca/util/StringUtils','lavaca/util/Translation'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[240244,245019],"range":[240226,245019],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":469,"label":"lavaca_require"}');

  var Connectivity = require('lavaca/net/Connectivity'),
      History = require('lavaca/net/History'),
      Disposable = require('lavaca/util/Disposable'),
      Promise = require('lavaca/util/Promise'),
      StringUtils = require('lavaca/util/StringUtils'),
      Translation = require('lavaca/util/Translation');

  /**
   * Base type for controllers
   * @class lavaca.mvc.Controller
   * @extends lavaca.util.Disposable
   * @constructor
   * @param {Lavaca.mvc.Controller} other  Another controller from which to take context information
   * @param {Lavaca.mvc.Router} [router]  The application's router
   * @param {Lavaca.mvc.ViewManager} [viewManager]  The application's view manager
   */
  var Controller = Disposable.extend(function(router, viewManager) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[241016,241226],"range":[240986,241226],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":460,"label":"lavaca_require"}');
    if (router instanceof Controller) {
      this.router = router.router;
      this.viewManager = router.viewManager;
    } else {
      this.router = router;
      this.viewManager = viewManager;
    }
  }, {
    /**
     * The application's router
     * @property {Lavaca.mvc.Router} router
     * @default null
     */
    router: null,
    /**
     * The application's view manager
     * @property {Lavaca.mvc.ViewManager} viewManager
     * @default null
     */
    viewManager: null,
    /**
     * Executes an action on this controller
     * @method exec
     *
     * @param {String} action  The name of the controller method to call
     * @param {Object} params  Key-value arguments to pass to the action
     * @return {Lavaca.util.Promise}  A promise
     */
     /**
     * Executes an action on this controller
     * @method exec
     * @param {String} action  The name of the controller method to call
     * @param {Object} params  Key-value arguments to pass to the action
     * @param {Object} state  A history record object
     * @return {Lavaca.util.Promise}  A promise
     */
    exec: function(action, params, state) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[242167,242632],"range":[242135,242632],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":462,"label":"lavaca_require"}');
      this.params = params;
      this.state = state;
      var promise = new Promise(this),
          model,
          result;
      if (state) {
        model = state.state;
        promise.success(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[242380,242431],"range":[242369,242431],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":461,"label":"lavaca_require"}');
          document.title = state.title;
        });
      }
      result = this[action](params, model);
      if (result instanceof Promise) {
        promise.when(result);
      } else {
        promise.resolve();
      }
      return promise;
    },
    /**
     * Loads a view
     * @method view
     *
     * @param {String} cacheKey  The key under which to cache the view
     * @param {Function} TView  The type of view to load (should derive from [[Lavaca.mvc.View]])
     * @param {Object} model  The data object to pass to the view
     * @param {Number} layer  The integer indicating what UI layer the view sits on
     * @return {Lavaca.util.Promise}  A promise
     */
    view: function(cacheKey, TView, model, layer) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[243114,243208],"range":[243074,243208],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":463,"label":"lavaca_require"}');
      return Promise.when(this, this.viewManager.load(cacheKey, TView, model, layer));
    },
    /**
     * Adds a state to the browser history
     * @method history
     *
     * @param {Object} state  A data object associated with the page state
     * @param {String} title  The title of the page state
     * @param {String} url  The URL of the page state
     * @param {Boolean} useReplace  The bool to decide if to remove previous history
     */
    history: function(state, title, url, useReplace) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[243624,243813],"range":[243584,243813],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":465,"label":"lavaca_require"}');
      var needsHistory = !this.state;
      return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[243688,243806],"range":[243677,243806],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":464,"label":"lavaca_require"}');
        if (needsHistory) {
          History[useReplace ? 'replace' : 'push'](state, title, url);
        }
      };
    },
    /**
     * Convenience method for formatting URLs
     * @method url
     *
     * @param {String} str  The URL string
     * @param {Array} args  Format arguments to insert into the URL
     * @return {String}  The formatted URL
     */
    url: function(str, args) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[244086,244157],"range":[244066,244157],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":466,"label":"lavaca_require"}');
      return StringUtils.format(str, args, encodeURIComponent);
    },
    /**
     * Directs the user to another route
     * @method redirect
     *
     * @param {String} str  The URL string
     * @return {Lavaca.util.Promise}  A promise
     *
     */
    /**
     * Directs the user to another route
     * @method redirect
     * @param {String} str  The URL string
     * @param {Array} args  Format arguments to insert into the URL
     * @return {Lavaca.util.Promise}  A promise
     */
    redirect: function(str, args) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[244619,244693],"range":[244599,244693],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":467,"label":"lavaca_require"}');
      return this.router.unlock().exec(this.url(str, args || []));
    },
    /**
     * Readies the controller for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[244811,244988],"range":[244800,244988],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":468,"label":"lavaca_require"}');
      // Do not dispose of view manager or router
      this.router
        = this.viewManager
        = null;
      Disposable.prototype.dispose.apply(this, arguments);
    }
  });

  return Controller;

});

define('lavaca/mvc/Model',['require','lavaca/events/EventDispatcher','lavaca/net/Connectivity','lavaca/util/ArrayUtils','lavaca/util/Cache','lavaca/util/Promise','mout/lang/deepClone','mout/object/merge','lavaca/util/Config'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[245267,265293],"range":[245249,265293],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":504,"label":"lavaca_require"}');

  var EventDispatcher = require('lavaca/events/EventDispatcher'),
      Connectivity = require('lavaca/net/Connectivity'),
      ArrayUtils = require('lavaca/util/ArrayUtils'),
      Cache = require('lavaca/util/Cache'),
      Promise = require('lavaca/util/Promise'),
      clone = require('mout/lang/deepClone'),
      merge = require('mout/object/merge'),
      Config = require('lavaca/util/Config');


  var UNDEFINED;

  function _triggerAttributeEvent(model, event, attribute, previous, value, messages) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[245781,246003],"range":[245697,246003],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":470,"label":"lavaca_require"}');
    model.trigger(event, {
      attribute: attribute,
      previous: previous === UNDEFINED ? null : previous,
      value: value === UNDEFINED ? model.get(attribute) : value,
      messages: messages || []
    });
  }

  function _setFlagOn(model, name, flag) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[246046,246218],"range":[246007,246218],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":471,"label":"lavaca_require"}');
    var keys = model.flags[flag];
    if (!keys) {
      keys = model.flags[flag] = [];
    }
    if (!ArrayUtils.contains(keys, name)) {
      keys.push(name);
    }
  }

  function _suppressChecked(model, suppress, callback) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[246275,246706],"range":[246222,246706],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":472,"label":"lavaca_require"}');
    suppress = !!suppress;
    var props = ['suppressValidation', 'suppressEvents', 'suppressTracking'],
        old = {},
        i = -1,
        prop,
        result;
    while (!!(prop = props[++i])) {
      old[prop] = model[prop];
      model[prop] = suppress || model[prop];
    }
    result = callback.call(model);
    i = -1;
    while (!!(prop = props[++i])) {
      model[prop] = old[prop];
    }
    return result;
  }

  function _isValid(messages){instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[246737,246937],"range":[246710,246937],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":473,"label":"lavaca_require"}');
    var isValid = true;
    for(var attribute in messages){
      if (messages[attribute].length > 0){
        isValid = false;
      }
    }
    messages.isValid = isValid;
    return messages;
  }


  // Virtual type
  /**
   * Event type used when an attribute is modified
   * @class lavaca.mvc.AttributeEvent
   * @extends Event
   */
   /**
   * The name of the event-causing attribute
   * @property {String} attribute
   * @default null
   */
   /**
   * The value of the attribute before the event
   * @property {Object} previous
   * @default null
   */
   /**
   * The value of the attribute after the event
   * @property {Object} value
   * @default null
   */
   /**
   * A list of validation messages the change caused
   * @property {Array} messages
   * @default []
   */

  /**
   * Basic model type
   * @class lavaca.mvc.Model
   * @extends lavaca.events.EventDispatcher
   *
   * Place the events where they are triggered in the code, see the yuidoc syntax reference and view.js for rendersuccess trigger
   * @event change
   * @event invalid
   * @event fetchSuccess
   * @event fetchError
   * @event saveSuccess
   * @event saveError
   *
   * @constructor
   * @param {Object} [map]  A parameter hash to apply to the model
   */
  var Model = EventDispatcher.extend(function(map) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[248046,248469],"range":[248032,248469],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":474,"label":"lavaca_require"}');
    EventDispatcher.call(this);
    this.attributes = new Cache();
    this.rules = new Cache();
    this.unsavedAttributes = [];
    this.flags = {};
    if (this.defaults) {
      map = merge({}, this.defaults, map);
    }
    if (map) {
      this.suppressEvents
        = this.suppressTracking
        = true;
      this.apply(map);
      this.suppressEvents
        = this.suppressTracking
        = false;
    }
  }, {
    /**
     * When true, attributes are not validated
     * @property suppressValidation
     * @default false
     *
     * @type Boolean
     */

    suppressValidation: false,
    /**
     * When true, changes to attributes are not tracked
     * @property suppressTracking
     * @default false
     *
     * @type Boolean
     */

    suppressTracking: false,
    /**
     * Gets the value of a attribute
     * @method get
     *
     * @param {String} attribute  The name of the attribute
     * @return {Object}  The value of the attribute, or null if there is no value
     */
    get: function(attribute) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[249090,249375],"range":[249070,249375],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":475,"label":"lavaca_require"}');
      var attr = this.attributes.get(attribute),
          flags;
      if (typeof attr === 'function') {
        flags = this.flags[Model.DO_NOT_COMPUTE];
        return !flags || ArrayUtils.indexOf(flags, attribute) === -1 ? attr.call(this) : attr;
      }
      return attr;
    },
    /**
     * Determines whether or not an attribute can be assigned
     * @method canSet
     *
     * @param {String} attribute  The name of the attribute
     * @return {Boolean}  True if you can assign to the attribute
     */
    canSet: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[249633,249659],"range":[249622,249659],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":476,"label":"lavaca_require"}');
      return true;
    },
    /**
     * Sets the value of the attribute, if it passes validation
     * @method set
     *
     * @param {String} attribute  The name of the attribute
     * @param {Object} value  The new value
     * @return {Boolean}  True if attribute was set, false otherwise
     *
     */
    /**
     * Sets the value of the attribute, if it passes validation
     * @method set
     *
     * @param {String} attribute  The name of the attribute
     * @param {Object} value  The new value
     * @param {String} flag  A metadata flag describing the attribute
     * @param {Boolean} suppress  When true, validation, events and tracking are suppressed
     * @return {Boolean}  True if attribute was set, false otherwise
     */
//* @event invalid
//* @event change


    set: function(attribute, value, flag, suppress) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[250479,251415],"range":[250436,251415],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":478,"label":"lavaca_require"}');
      return _suppressChecked(this, suppress, function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[250538,251407],"range":[250527,251407],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":477,"label":"lavaca_require"}');
        if (!this.canSet(attribute)) {
          return false;
        }
        var previous = this.attributes.get(attribute),
            messages = this.suppressValidation ? [] : this.validate(attribute, value);
        if (messages.length) {
          _triggerAttributeEvent(this, 'invalid', attribute, previous, value, messages);
          return false;
        } else {
          if (previous !== value) {
            this.attributes.set(attribute, value);
            if (flag) {
              _setFlagOn(this, attribute, flag);
            }
            _triggerAttributeEvent(this, 'change', attribute, previous, value);
            if (!this.suppressTracking
                && !ArrayUtils.contains(this.unsavedAttributes, attribute)) {
              this.unsavedAttributes.push(attribute);
            }
          }
          return true;
        }
      });
    },
    /**
     * Determines whether or not this model has a named attribute
     * @method has
     *
     * @param {String} attribute  The name of the attribute
     * @return {Boolean}  True if the attribute exists and has a value
     */
    has: function(attribute) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[251685,251735],"range":[251665,251735],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":479,"label":"lavaca_require"}');
      return this.get(attribute) !== null;
    },
    /**
     * The name of the ID attribute
     * @property id
     * @default 'id'
     *
     * @type String
     */

    idAttribute: 'id',
    /**
     * Gets the ID of the model
     * @method id
     *
     * @return {String}  The ID of the model
     */
    id: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[252018,252066],"range":[252007,252066],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":480,"label":"lavaca_require"}');
      return this.get(this.idAttribute);
    },
    /**
     * Determines whether or not this model has been saved before
     * @method isNew
     *
     * @return {Boolean}  True when the model has no ID associated with it
     */
    isNew: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[252275,252315],"range":[252264,252315],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":481,"label":"lavaca_require"}');
      return null === this.id();
    },
    /**
     * Ensures that a map is suitable to be applied to this model
     * @method parse
     *
     * @param {Object} map  The string or key-value hash to parse
     * @return {Object}  The parsed version of the map
     */
    parse: function(map) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[252573,252674],"range":[252559,252674],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":482,"label":"lavaca_require"}');
      if (typeof map === 'string') {
        map = JSON.parse(map);
      }
      return map;
    },
    /**
     * Sets each attribute of this model according to the map
     * @method apply
     *
     * @param {Object} map  The string or key-value map to parse and apply
     */
    /**
     * Sets each attribute of this model according to the map
     * @method apply
     *
     * @param {Object} map  The string or key-value map to parse and apply
     * @param {Boolean} suppress  When true, validation, events and tracking are suppressed
     */
    apply: function(map, suppress) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[253165,253335],"range":[253141,253335],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":484,"label":"lavaca_require"}');
      _suppressChecked(this, suppress, function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[253217,253327],"range":[253206,253327],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":483,"label":"lavaca_require"}');
        map = this.parse(map);
        for (var n in map) {
          this.set(n, map[n]);
        }
      });
    },
    /**
     * Removes all data from the model or removes selected flag from model.
     * @method clear
     *
     * @sig
     * Removes all flagged data from the model
     * @param {String} flag  The metadata flag describing the data to remove
     */
    clear: function(flag) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[253619,254177],"range":[253604,254177],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":485,"label":"lavaca_require"}');
      if (flag) {
        var attrs = this.flags[flag],
            i = -1,
            attr,
            item;
        if (attrs) {
          while (!!(attr = attrs[++i])) {
            ArrayUtils.remove(this.unsavedAttributes, attr);
            item = this.get(attr);
            if (item && item.dispose) {
              item.dispose();
            }
            this.set(attr, null);
          }
        }
      } else {
        this.attributes.dispose();
        this.attributes = new Cache();
        this.unsavedAttributes.length = 0;
      }
    },
    /**
     * Makes a copy of this model
     * @method clone
     *
     * @return {Lavaca.mvc.Model}  The copy
     */
    clone: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[254323,254393],"range":[254312,254393],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":486,"label":"lavaca_require"}');
      return new this.constructor(this.attributes.toObject());
    },
    /**
     * Adds a validation rule to this model
     * @method addRule
     *
     * @param {String} attribute  The name of the attribute to which the rule applies
     * @param {Function} callback  The callback to use to validate the attribute, in the
     *   form callback(attribute, value)
     * @param {String} message  A text message used when a value fails the test
     */
    addRule: function(attribute, callback, message) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[254833,254918],"range":[254794,254918],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":487,"label":"lavaca_require"}');
      this.rules.get(attribute, []).push({rule: callback, message: message});
    },
    /**
     * Validates all attributes on the model
     * @method validate
     *
     * @return {Object}  A map of attribute names to validation error messages
     */
    /**
     * Runs validation tests for a specific attribute
     * @method validate
     *
     * @param {String}  The name of the attribute to test
     * @return {Array}  A list of validation error messages
     */
    /**
     * Runs validation against a potential value for a attribute
     * @method validate
     * @param {String} attribute  The name of the attribute
     * @param {Object} value  The potential value for the attribute
     * @return {Array}  A list of validation error messages
     */
    validate: function(attribute, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[255644,256315],"range":[255617,256315],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":489,"label":"lavaca_require"}');
      var messages,
          rules,
          i = -1,
          rule;
      if (attribute) {
        messages = [];
        value = value === UNDEFINED ? this.get(attribute, value) : value;
        rules = this.rules.get(attribute);
        if (rules) {
          while (!!(rule = rules[++i])) {
            if (!rule.rule(attribute, value)) {
              messages.push(rule.message);
            }
          }
        }
        return messages;
      } else {
        messages = {};
        this.rules.each(function(attributeName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[256181,256258],"range":[256157,256258],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":488,"label":"lavaca_require"}');
          messages[attributeName] = this.validate(attributeName);
        }, this);
        return _isValid(messages);
      }
    },
    /**
     * Processes the data received from a fetch request
     * @method onFetchSuccess
     *
     * @param {Object} response  The response data
     */
    onFetchSuccess: function(response) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[256516,256790],"range":[256497,256790],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":490,"label":"lavaca_require"}');
      response = this.parse(response);
      if (this.responseFilter && typeof this.responseFilter === 'function') {
        response = this.responseFilter(response);
      }
      this.apply(response, true);
      this.trigger('fetchSuccess', {response: response});
    },
    /**
     * Triggered when the model is unable to fetch data
     * @method onFetchError
     *
     * @param {Object} value  The error value
     */
    onFetchError: function(response) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[256982,257045],"range":[256963,257045],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":491,"label":"lavaca_require"}');
      this.trigger('fetchError', {response: response});
    },
    /**
     * Loads the data for this model from the server and only apply to this model attributes (Note: Does not clear the model first)
     * @method fetch
     *
     * @event fetchSuccess
     * @event fetchError
     */
    /**
     * Loads the data for this model from the server and only apply to this model attributes (Note: Does not clear the model first)
     * @method fetch
     *
     * @param {String} url  The URL from which to load the data
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Loads the data for this model from the server and only apply to this model attributes (Note: Does not clear the model first)
     * @method fetch
     *
     * @param {Object} options  jQuery AJAX settings. If url property is missing, fetch() will try to use the url property on this model
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Loads the data for this model from the server and only apply to this model attributes (Note: Does not clear the model first)
     * @method fetch
     *
     * @param {String} url  The URL from which to load the data
     * @param {Object} options  jQuery AJAX settings
     * @return {Lavaca.util.Promise}  A promise
     */
    fetch: function(url, options) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[258299,258650],"range":[258276,258650],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":492,"label":"lavaca_require"}');
      if (typeof url === 'object') {
        options = url;
      } else {
        options = clone(options || {});
        options.url = url;
      }
      options.url = this.getApiURL(options.url || this.url);
      return Promise.when(this, Connectivity.ajax(options))
        .success(this.onFetchSuccess)
        .error(this.onFetchError);
    },
    /**
     * Converts a relative path to an absolute api url based on environment config 'apiRoot'
     * @method getApiURL
     *
     * @param {String} relPath  A relative path
     * @return {String}  A formated api url or an apparently bad url '/please_set_model_url' if relPath argument is faslsy
     */
    getApiURL: function(relPath) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[258997,259225],"range":[258979,259225],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":493,"label":"lavaca_require"}');
      var badURL = '/please_set_model_url',
          apiRoot = Config.get('apiRoot'),
          apiURL;
      if (!relPath) {
        return badURL;
      }
      apiURL = (apiRoot || '') + relPath;
      return apiURL;
    },
    /**
     * Saves the model
     * @method save
     *
     *
     * @param {Function} callback  A function callback(model, changedAttributes, attributes)
     *   that returns either a promise or a truthy value
     *   indicating whether the operation failed or succeeded
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Saves the model
     * @method save
     *
     * @param {Function} callback  A function callback(model, changedAttributes, attributes)
     *   that returns either a promise or a truthy value
     *   indicating whether the operation failed or succeeded
     * @param {Object} thisp  The context for the callback
     * @return {Lavaca.util.Promise}  A promise
     */

//* @event saveSuccess
//* @event saveError

    save: function(callback, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[260027,261059],"range":[260001,261059],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":496,"label":"lavaca_require"}');
      var promise = new Promise(this),
          attributes = this.toObject(),
          changedAttributes = {},
          i = -1,
          attribute,
          result;
      while (!!(attribute = this.unsavedAttributes[++i])) {
        changedAttributes[attribute] = attributes[attribute];
      }
      promise
        .success(function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[260376,260663],"range":[260360,260663],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":494,"label":"lavaca_require"}');
          var idAttribute = this.idAttribute;
          if (this.isNew() && value[idAttribute] !== UNDEFINED) {
            this.set(idAttribute, value[idAttribute]);
          }
          this.unsavedAttributes = [];
          this.trigger('saveSuccess', {response: value});
        })
        .error(function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[260696,260763],"range":[260680,260763],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":495,"label":"lavaca_require"}');
          this.trigger('saveError', {response: value});
        });
      result = callback.call(thisp || this, this, changedAttributes, attributes);
      if (result instanceof Promise) {
        promise.when(result);
      } else if (result) {
        promise.resolve(result);
      } else {
        promise.reject(result);
      }
      return promise;
    },
    /**
     * Saves the model to the server via POST
     * @method saveToServer
     *
     * @param {String} url  The URL to which to post the data
     * @return {Lavaca.util.Promise}  A promise
     */
    saveToServer: function(url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[261300,261803],"range":[261286,261803],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":498,"label":"lavaca_require"}');
      return this.save(function(model, changedAttributes, attributes) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[261372,261795],"range":[261325,261795],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":497,"label":"lavaca_require"}');
        var id = this.id(),
            data;
        if (this.isNew()) {
          data = attributes;
        } else {
          changedAttributes[this.idAttribute] = id;
          data = changedAttributes;
        }
        return Promise.when(this, Connectivity.ajax({
            url: url,
            cache: false,
            type: 'POST',
            data: data,
            dataType: 'json'
          }));
      });
    },
    /**
     * Converts this model to a key-value hash
     * @method toObject
     *
     * @return {Object}  The key-value hash
     */
    toObject: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[261968,262318],"range":[261957,262318],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":499,"label":"lavaca_require"}');
      var obj = this.attributes.toObject(),
          flags;
      for(var key in obj) {
        if(typeof obj[key] === "function") {
          flags = this.flags[Model.DO_NOT_COMPUTE];
          if (!flags || ArrayUtils.indexOf(flags, key) === -1) {
            obj[key] = obj[key].call(this);
          }
        }
      }
      return obj;
    },
    /**
     * Converts this model to JSON
     * @method toJSON
     *
     * @return {String}  The JSON string representing the model
     */
    toJSON: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[262487,262540],"range":[262476,262540],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":500,"label":"lavaca_require"}');
      return JSON.stringify(this.toObject());
    },
    /**
     * Bind an event handler to this object
     * @method on
     *
     *
     * @param {String} type  The name of the event
     * @param {Function} callback  The function to execute when the event occurs
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Bind an event handler to this object
     * @method on
     *
     * @param {String} type  The name of the event
     * @param {String} attr  An attribute to which to limit the scope of events
     * @param {Function} callback  The function to execute when the event occurs
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Bind an event handler to this object
     * @method on
     * @param {String} type  The name of the event
     * @param {Function} callback  The function to execute when the event occurs
     * @param {Object} thisp  The context of the handler
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    /**
     * Bind an event handler to this object
     * @method on
     * @param {String} type  The name of the event
     * @param {String} attr  An attribute to which to limit the scope of events
     * @param {Function} callback  The function to execute when the event occurs
     * @param {Object} thisp  The context of the handler
     * @return {Lavaca.events.EventDispatcher}  This event dispatcher (for chaining)
     */
    on: function(type, attr, callback, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[264063,264458],"range":[264025,264458],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":502,"label":"lavaca_require"}');
      if (typeof attr === 'function') {
        thisp = callback;
        callback = attr;
        attr = null;
      }
      function handler(e) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[264211,264318],"range":[264191,264318],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":501,"label":"lavaca_require"}');
        if (!attr || e.attribute === attr) {
          callback.call(thisp || this, e);
        }
      }
      handler.fn = callback;
      handler.thisp = thisp;
      return EventDispatcher.prototype.on.call(this, type, handler, thisp);
    },
    /**
    * Filters the raw response from onFetchSuccess() down to a custom object. (Meant to be overriden)
    * @method responseFilter
    *
    * @param {Object} response  The raw response passed in onFetchSuccess()
    * @return {Object}  An object to be applied to this model instance
    */
    responseFilter: function(response) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[264798,264828],"range":[264779,264828],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":503,"label":"lavaca_require"}');
      return response;
    }
  });
  /**
   * @field {String} SENSITIVE
   * @static
   * @default 'sensitive'
   * Flag indicating that data is sensitive
   */
  Model.SENSITIVE = 'sensitive';
  /**
   * @field {String} DO_NOT_COMPUTE
   * @static
   * @default 'do_not_compute'
   * Flag indicating that the selected attribute should not be executed
   * as a computed property and should instead just return the function.
   */
  Model.DO_NOT_COMPUTE = 'do_not_compute';

  return Model;

});

define('lavaca/mvc/PageView',['require','$','lavaca/mvc/Model','lavaca/mvc/View','lavaca/ui/Template','lavaca/util/Promise','lavaca/util/delay'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[265460,270493],"range":[265442,270493],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":516,"label":"lavaca_require"}');

  var $ = require('$'),
      Model = require('lavaca/mvc/Model'),
      View = require('lavaca/mvc/View'),
      Template = require('lavaca/ui/Template'),
      Promise = require('lavaca/util/Promise'),
      delay = require('lavaca/util/delay');

  /**
   * Page View type, represents an entire screen
   * @class lavaca.mvc.PageView
   * @extends lavaca.mvc.View
   *
   * @constructor
   * @param {Object} el  The element that the PageView is bound to
   * @param {Object} model  The model used by the view
   * @param {Number} [layer]  The index of the layer on which the view sits
   *
   */
  var PageView = View.extend(function(el, model, layer) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[266117,266305],"range":[266090,266305],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":505,"label":"lavaca_require"}');

    View.call(this, el, model);
    /**
     * The index of the layer on which the view sits
     * @property {Number} layer
     * @default 0
     */
    this.layer = layer || 0;


  }, {

    /**
     * The element containing the view
     * @property {jQuery} shell
     * @default null
     */
    shell: null,

    /**
     * Creates the view's wrapper element
     * @method wrapper
     * @return {jQuery}  The wrapper element
     */
    wrapper: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[266586,266637],"range":[266575,266637],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":506,"label":"lavaca_require"}');
      return $('<div class="view"></div>');
    },
    /**
     * Creates the view's interior content wrapper element
     * @method interior
     * @return {jQuery} The interior content wrapper element
     */
    interior: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[266824,266884],"range":[266813,266884],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":507,"label":"lavaca_require"}');
      return $('<div class="view-interior"></div>');
    },


    /**
     * Adds this view to a container
     * @method insertInto
     * @param {jQuery} container  The containing element
     */
    insertInto: function(container) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[267060,267485],"range":[267040,267485],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":508,"label":"lavaca_require"}');
      if (this.shell.parent()[0] !== container[0]) {
        var layers = container.children('[data-layer-index]'),
            i = -1,
            layer;
        while (!!(layer = layers[++i])) {
          layer = $(layer);
          if (layer.attr('data-layer-index') > this.index) {
            this.shell.insertBefore(layer);
            return;
          }
        }
        container.append(this.shell);
      }
    },
    /**
     * Renders the view using its template and model, overrides the View class render method
     * @method render
     *
     * @return {Lavaca.util.Promise}  A promise
     */
    render: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[267696,268902],"range":[267685,268902],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":511,"label":"lavaca_require"}');
      var promise = new Promise(this),
          renderPromise = new Promise(this),
          template = Template.get(this.template),
          model = this.model;
      if (model instanceof Model) {
        model = model.toObject();
      }
      if (this.el) {
        this.el.remove();
      }

      this.shell = this.wrapper();
      this.el = this.interior();
      this.shell.append(this.el);
      this.shell.attr('data-layer-index', this.layer);
      if (this.className) {
        this.shell.addClass(this.className);
      }
      promise
        .success(function(html) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[268280,268499],"range":[268265,268499],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":509,"label":"lavaca_require"}');
          /**
           * Fires when html from template has rendered
           * @event rendersuccess
           */
          this.trigger('rendersuccess', {html: html});
          renderPromise.resolve();
        })
        .error(function(err) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[268530,268754],"range":[268516,268754],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":510,"label":"lavaca_require"}');
          /**
           * Fired when there was an error during rendering process
           * @event rendererror
           */
          this.trigger('rendererror', {err: err});
          renderPromise.reject();
        });
      template
        .render(model)
        .success(promise.resolver())
        .error(promise.rejector());

      return renderPromise;
    },
    /**
     * Executes when the user navigates to this view
     * @method enter
     * @param {jQuery} container  The parent element of all views
     * @param {Array} exitingViews  The views that are exiting as this one enters
     * @return {lavaca.util.Promise}  A promise
     */
    enter: function(container) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[269221,269821],"range":[269201,269821],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":513,"label":"lavaca_require"}');
      var promise = new Promise(this),
          renderPromise;
      container = $(container);
      if (!this.hasRendered) {
        renderPromise = this
          .render()
          .error(promise.rejector());
      }
      this.insertInto(container);
      if (renderPromise) {
        promise.when(renderPromise);
      } else {
        delay(promise.resolver());
      }
      promise.then(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[269631,269791],"range":[269620,269791],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":512,"label":"lavaca_require"}');
        /**
         * Fired when there was an error during rendering process
         * @event rendererror
         */
        this.trigger('enter');
      });
      return promise;
    },
    /**
     * Executes when the user navigates away from this view
     * @method exit
     *
     * @param {jQuery} container  The parent element of all views
     * @param {Array} enteringViews  The views that are entering as this one exits
     * @return {lavaca.util.Promise}  A promise
     */
    exit: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[270144,270464],"range":[270133,270464],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":515,"label":"lavaca_require"}');
      var promise = new Promise(this);
      this.shell.detach();
      delay(promise.resolver());
      promise.then(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[270275,270434],"range":[270264,270434],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":514,"label":"lavaca_require"}');
        /**
         * Fired when there was an error during rendering process
         * @event rendererror
         */
        this.trigger('exit');
      });
      return promise;
    }
  });

  return PageView;

});

define('lavaca/mvc/Route',['require','lavaca/util/Disposable','lavaca/util/delay','mout/lang/deepClone','mout/object/merge'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[270640,277281],"range":[270622,277281],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":528,"label":"lavaca_require"}');

  var Disposable = require('lavaca/util/Disposable'),
      delay = require('lavaca/util/delay'),
      clone = require('mout/lang/deepClone'),
      merge = require('mout/object/merge');

  function _multivariablePattern() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[270867,270918],"range":[270834,270918],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":517,"label":"lavaca_require"}');
    return new RegExp('\\{\\*(.*?)\\}', 'g');
  }

  function _variablePattern() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[270950,271003],"range":[270922,271003],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":518,"label":"lavaca_require"}');
    return new RegExp('\\{([^\\/]*?)\\}', 'g');
  }

  function _variableCharacters() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[271038,271086],"range":[271007,271086],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":519,"label":"lavaca_require"}');
    return new RegExp('[\\{\\}\\*]', 'g');
  }

  function _datePattern() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[271114,271177],"range":[271090,271177],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":520,"label":"lavaca_require"}');
    return new RegExp('^\\d{4}-[0-1]\\d-[0-3]\\d$', 'g');
  }

  function _patternToRegExp(pattern) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[271216,271786],"range":[271181,271786],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":521,"label":"lavaca_require"}');
    if (pattern === '/') {
      return new RegExp('^\\/(\\?.*)?(#.*)?$', 'g');
    }
    if (pattern.charAt(0) === '/') {
      pattern = pattern.slice(1);
    }
    pattern = pattern.split('/');
    var exp = '^',
        i = -1,
        part;
    while (!!(part = pattern[++i])) {
      if (_multivariablePattern().test(part)) {
        exp += '(/([^/?#]+))*?';
      } else if (_variablePattern().test(part)) {
        exp += '/([^/?#]+)';
      } else {
        exp += '/' + part;
      }
    }
    exp += '(\\?.*)?(#\\.*)?$';
    return new RegExp(exp, 'g');
  }

  function _scrubURLValue(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[271821,272242],"range":[271790,272242],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":522,"label":"lavaca_require"}');
    value = decodeURIComponent(value);
    if (!isNaN(value)) {
      value = Number(value);
    } else if (value.toLowerCase() === 'true') {
      value = true;
    } else if (value.toLowerCase() === 'false') {
      value = false;
    } else if (_datePattern().test(value)) {
      value = value.split('-');
      value = new Date(Number(value[0]), Number(value[1]) - 1, Number(value[2]));
    }
    return value;
  }

  /**
   * @class lavaca.mvc.Route
   * @extends lavaca.util.Disposable
   * A relationship between a URL pattern and a controller action
   *
   * @constructor
   * @param {String} pattern  The route URL pattern
   *   Route URL patterns should be in the form /path/{foo}/path/{*bar}.
   *   The path variables, along with query string parameters, will be passed
   *   to the controller action as a params object. In this case, when passed
   *   the URL /path/something/path/1/2/3?abc=def, the params object would be
   *   {foo: 'something', bar: [1, 2, 3], abc: 'def'}.
   * @param {Function} TController  The type of controller that performs the action
   *   (Should derive from [[Lavaca.mvc.Controller]])
   * @param {String} action  The name of the controller method to call
   * @param {Object} params  Key-value pairs that will be merged into the params
   *   object that is passed to the controller action
   */
  var Route = Disposable.extend(function(pattern, TController, action, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[273248,273402],"range":[273201,273402],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":523,"label":"lavaca_require"}');
    Disposable.call(this);
    this.pattern = pattern;
    this.TController = TController;
    this.action = action;
    this.params = params || {};
  }, {
    /**
     * Tests if this route applies to a URL
     * @method matches
     *
     * @param {String} url  The URL to test
     * @return {Boolean}  True when this route matches the URL
     */
    matches: function(url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[273630,273692],"range":[273616,273692],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":524,"label":"lavaca_require"}');
      return _patternToRegExp(this.pattern).test(url);
    },
    /**
     * Converts a URL into a params object according to this route's pattern
     * @method parse
     *
     * @param {String} url  The URL to convert
     * @return {Object}  The params object
     */
    parse: function(url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[273930,275477],"range":[273916,275477],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":525,"label":"lavaca_require"}');
      var result = clone(this.params),
          pattern = this.pattern.slice(1),
          urlParts = url.split('#'),
          i,
          query,
          path,
          pathItem,
          patternItem,
          name;
      result.url = url;
      result.route = this;
      urlParts = urlParts[1] ? urlParts[1].split('?') : urlParts[0].split('?');
      query = urlParts[1];
      if (query) {
        i = -1;
        query = query.split('&');
        while (!!(pathItem = query[++i])) {
          pathItem = pathItem.split('=');
          name = decodeURIComponent(pathItem[0]);
          if (result[name] !== undefined) {
            if (!(result[name] instanceof Array)) {
              result[name] = [result[name]];
            }
            result[name].push(_scrubURLValue(pathItem[1]));
          } else {
            result[name] = _scrubURLValue(pathItem[1]);
          }
        }
      }
      i = 0;
      path = urlParts[0].replace(/(^(http(s?)\:\/\/[^\/]+)?\/?)|(\/$)/, '');
      var breakApartPattern = new RegExp(pattern.replace(_multivariablePattern(), '(.+)').replace(_variablePattern(), '([^/]+)')),
          brokenPath = breakApartPattern.exec(path),
          brokenPattern = breakApartPattern.exec(pattern);
      while (!!(pathItem = brokenPath[++i])) {
        patternItem = brokenPattern[i];
        if (_multivariablePattern().test(patternItem)) {
          pathItem = pathItem.split('/');
        }
        result[patternItem.replace(_variableCharacters(), '')] = pathItem;
      }
      return result;
    },
    /**
     * Executes this route's controller action see if work
     * @method exec
     *
     * @param {String} url  The URL that supplies parameters to this route
     * @param {Lavaca.mvc.Router} router  The router used by the application
     * @param {Lavaca.mvc.ViewManager}  viewManager The view manager used by the application
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Executes this route's controller action see if work
     * @method exec
     *
     * @param {String} url  The URL that supplies parameters to this route
     * @param {Lavaca.mvc.Router} router  The router used by the application
     * @param {Lavaca.mvc.ViewManager}  viewManager The view manager used by the application
     * @param {Object} state  A history record object
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Executes this route's controller action see if work
     * @method exec
     *
     * @param {String} url  The URL that supplies parameters to this route
     * @param {Lavaca.mvc.Router} router  The router used by the application
     * @param {Lavaca.mvc.ViewManager}  viewManager The view manager used by the application
     * @param {Object} state  A history record object
     * @param {Object} params  Additional parameters to pass to the controller action
     * @return {Lavaca.util.Promise}  A promise
     */
    exec: function(url, router, viewManager, state, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[276918,277255],"range":[276868,277255],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":527,"label":"lavaca_require"}');
      var controller = new this.TController(router, viewManager),
          urlParams = this.parse(url),
          promise = controller.exec(this.action, merge(urlParams, params), state);
      function dispose() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[277133,277189],"range":[277114,277189],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":526,"label":"lavaca_require"}');
        delay(controller.dispose, controller);
      }
      promise.then(dispose, dispose);
      return promise;
    }
  });

  return Route;

});

define('lavaca/mvc/Router',['require','./Route','lavaca/net/History','lavaca/util/Disposable','lavaca/util/Promise'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[277420,283056],"range":[277402,283056],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":540,"label":"lavaca_require"}');

  var Route = require('./Route'),
      History = require('lavaca/net/History'),
      Disposable = require('lavaca/util/Disposable'),
      Promise = require('lavaca/util/Promise');

  /**
   * @class lavaca.mvc.Router
   * @extends lavaca.util.Disposable
   * URL manager
   *
   * @constructor
   * @param {Lavaca.mvc.ViewManager} viewManager  The view manager
   */
  var Router = Disposable.extend(function(viewManager) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[277848,278188],"range":[277826,278188],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":529,"label":"lavaca_require"}');
    Disposable.call(this);
    /**
     * @field {Array} routes
     * @default []
     * The [[Lavaca.mvc.Route]]s used by this router
     */
    this.routes = [];
    /**
     * @field {Lavaca.mvc.ViewManager} viewManager
     * @default null
     * The view manager used by this router
     */
    this.viewManager = viewManager;

  }, {
    /**
     * @field {Boolean} locked
     * @default false
     * When true, the router is prevented from executing a route
     */
    locked: false,
    /**
     * @field {Boolean} hasNavigated
     * @default false
     * Whether or not this router has been used to navigate
     */
    hasNavigated: false,

    startHistory: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[278535,278850],"range":[278524,278850],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":532,"label":"lavaca_require"}');
      this.onpopstate = function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[278573,278790],"range":[278561,278790],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":531,"label":"lavaca_require"}');
        if (this.hasNavigated) {
          History.isRoutingBack = e.direction === 'back';
          this.exec(e.url, e).always(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[278714,278770],"range":[278703,278770],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":530,"label":"lavaca_require"}');
            History.isRoutingBack = false;
          });
        }
      };
      History.on('popstate', this.onpopstate, this);
    },
    /**
     * Sets the viewManager property on the instance which is the view manager used by this router
     * @method setEl
     *
     * @param {Lavaca.mvc.ViewManager} viewManager
     * @return {Lavaca.mvc.Router}  This Router instance
     */
    setViewManager: function(viewManager) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[279145,279209],"range":[279123,279209],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":533,"label":"lavaca_require"}');
      this.viewManager = viewManager;
      return this;
    },
    /**
     * Adds multiple routes
     * @method add
     *
     * @param {Object} map  A hash in the form {pattern: [TController, action, params]}
     *   or {pattern: {controller: TController, action: action, params: params}
     * @return {Lavaca.mvc.Router}  The router (for chaining)
     */
    /**
     * Adds a route
     * @method add
     *
     * @param {String} pattern  The route URL pattern
     * @param {Function} TController  The type of controller to perform the action (should derive from [[Lavaca.mvc.Controller]])
     * @param {String} action  The name of the controller method to call
     * @return {Lavaca.mvc.Router}  The router (for chaining)
     */
    /**
     * Adds a route
     * @method add
     *
     * @param {String} pattern  The route URL pattern
     * @param {Function} TController  The type of controller to perform the action (should derive from [[Lavaca.mvc.Controller]])
     * @param {String} action  The name of the controller method to call
     * @param {Object} params  Key-value pairs that will be passed to the action
     * @return {Lavaca.mvc.Router}  The router (for chaining)
     */
    add: function(pattern, TController, action, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[280410,280979],"range":[280363,280979],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":534,"label":"lavaca_require"}');
      if (typeof pattern === 'object') {
        for (var p in pattern) {
          var args = pattern[p];
          if (args instanceof Array) {
            TController = args[0];
            action = args[1];
            params = args[2];
          } else {
            TController = args.controller;
            action = args.action;
            params = args.params;
          }
          this.add(p, TController, action, params);
        }
      } else {
        this.routes.push(new Route(pattern, TController, action, params));
      }
      return this;
    },
    /**
     * Executes the action for a given URL
     * @method exec
     *
     * @param {String} url  The URL
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Executes the action for a given URL
     * @method exec
     *
     * @param {String} url  The URL
     * @param {Object} state  A history record object
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Executes the action for a given URL
     * @method exec
     *
     * @param {String} url  The URL
     * @param {Object} state  A history record object
     * @param {Object} params  Additional parameters to pass to the route
     * @return {Lavaca.util.Promise}  A promise
     */
    exec: function(url, state, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[281712,282483],"range":[281683,282483],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":537,"label":"lavaca_require"}');
      if (this.locked) {
        return (new Promise(this)).reject('locked');
      } else {
        this.locked = true;
      }
      if (!url) {
        url = '/';
      }
      if (url.indexOf('http') === 0) {
        url = url.replace(/^http(s?):\/\/.+?/, '');
      }
      var i = -1,
          route,
          promise = new Promise(this);
      promise.always(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[282093,282125],"range":[282082,282125],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":535,"label":"lavaca_require"}');
        this.unlock();
      });
      if (!this.hasNavigated) {
        promise.success(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[282195,282242],"range":[282184,282242],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":536,"label":"lavaca_require"}');
          this.hasNavigated = true;
        });
      }
      while (!!(route = this.routes[++i])) {
        if (route.matches(url)) {
          return promise.when(route.exec(url, this, this.viewManager, state, params));
        }
      }
      return promise.reject(url, state);
    },
    /**
     * Unlocks the router so that it can be used again
     * @method unlock
     *
     * @return {Lavaca.mvc.Router}  This router (for chaining)
     */
    unlock: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[282671,282724],"range":[282660,282724],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":538,"label":"lavaca_require"}');
      this.locked = false;
      return this;
    },
    /**
     * Readies the router for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[282838,283023],"range":[282827,283023],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":539,"label":"lavaca_require"}');
      if (this.onpopstate) {
        History.off('popstate', this.onpopstate);
        this.onpopstate = null;
      }
      Disposable.prototype.dispose.apply(this, arguments);
    }
  });

  return new Router();

});

define('lavaca/mvc/View',['require','$','lavaca/events/EventDispatcher','lavaca/mvc/Model','lavaca/ui/Template','lavaca/util/Cache','lavaca/util/Promise','lavaca/util/log','lavaca/util/uuid'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[283270,306735],"range":[283252,306735],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":570,"label":"lavaca_require"}');

  var $ = require('$'),
    EventDispatcher = require('lavaca/events/EventDispatcher'),
    Model = require('lavaca/mvc/Model'),
    Template = require('lavaca/ui/Template'),
    Cache = require('lavaca/util/Cache'),
    Promise = require('lavaca/util/Promise'),
    log = require('lavaca/util/log'),
    uuid = require('lavaca/util/uuid');




  /**
   * Base View Class
   * @class lavaca.mvc.View
   * @extends lavaca.events.EventDispatcher
   * @constructor
   * @param {Object | String} el the selector or Object for the element to attach to the view
   * @param {Object} [model] the model for the view
   * @param {Object} [parentView] the parent view for the view
   *
   *
   */
  var View = EventDispatcher.extend(function(el, model, parentView) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[284028,286497],"range":[283996,286497],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":541,"label":"lavaca_require"}');
    EventDispatcher.call(this);

    /**
     * The model used by the view
     * @property model
     * @default null
     * @optional
     * @type lavaca.mvc.Model
     *
     */
    this.model = model || null;

    /**
     * An id is applied to a data property on the views container
     * @property id
     * @default generated from className and unique identifier
     * @type String
     *
     */
    this.id = this.className + '-' + uuid();

    /**
     * If the view is created in the context of a childView, the parent view is assigned to this view
     * @property parentView
     * @default null
     * @type Object
     *
     */
    this.parentView = parentView || null;

    /**
     * The element that is either assigned to the view if in the context of a childView, or is created for the View
     * if it is a PageView
     * @property el
     * @default null
     * @type Object | String
     *
     */
    this.el = typeof el === 'string' ? $(el) : (el || null);

    /**
     * A dictionary of selectors and event types in the form
     * {eventType: {delegate: 'xyz', callback: func}}@property el
     * @property eventMap
     * @default {}
     * @type Object
     */
    this.eventMap = {};
    /**
     * A dictionary of selectors, View types and models in the form
     *   {selector: {TView: TView, model: model}}}
     * @property {Object} childViewMap
     * @default {}
     * @type Object
     *
     */
    this.childViewMap = {};
    /**
     * Interactive elements used by the view
     * @property childViews
     * @default lavaca.util.cache
     * @type lavaca.util.Cache
     */
    this.childViews = new Cache();
    /**
     * A dictionary of selectors and widget types in the form
     *   {selector: widgetType}
     * @property {Object} widgetMap
     * @default {}
     * @type Object
     */
    this.widgetMap = {};
    /**
     * Interactive elements used by the view
     * @property widgets
     * @default lavaca.util.Cache
     * @type lavaca.util.Cache
     */
    this.widgets = new Cache();
    /**
     *  A map of all the events to be applied to child Views in the form of
     *  {type: {TView: TView, callback : callback}}
     * @property childViewEventMap
     * @default Object
     * @type Object
     */
    this.childViewEventMap = {};

    this
      .on('rendersuccess', this.onRenderSuccess)
      .on('rendererror', this.onRenderError);

    if (this.autoRender) {
      this.render();
    }
  }, {
    /**
     * The element associated with the view
     * @property {jQuery} el
     * @default null
     *
     */
    el: null,
    /**
     * The name of the template associated with the view
     * @property {String} template
     * @default null
     *
     */
    template: null,
    /**
     * A class name added to the view container
     * @property String className
     * @default null
     *
     */
    className: null,
    /**
     * Will render any childViews automatically when set to true
     * @property autoRender
     * @default false
     *
     * @type Boolean
     */
    autoRender: false,
    /**
     * Renders the view using its template and model
     * @method render
     *
     *
     *
     * @return {lavaca.util.Promise} A promise
     */
    render: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[287299,288321],"range":[287288,288321],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":545,"label":"lavaca_require"}');
      var self = this,
        promise = new Promise(this),
        renderPromise = new Promise(this),
        template = Template.get(this.template),
        model = this.model;
      if (model instanceof Model) {
        model = model.toObject();
      }
      /**
       * Fires when html from template has rendered
       * @event rendersuccess
       */
      promise
        .success(function(html) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[287706,287807],"range":[287691,287807],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":542,"label":"lavaca_require"}');
          this.trigger('rendersuccess', {html: html});
          renderPromise.resolve();
        })
      /**
       * Fired when there was an error during rendering process
       * @event rendererror
       */
        .error(function(err) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[287950,288046],"range":[287936,288046],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":543,"label":"lavaca_require"}');
          this.trigger('rendererror', {err: err});
          renderPromise.reject();
        });
      template
        .render(model)
        .success(promise.resolver())
        .error(promise.rejector())
        .then(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[288184,288284],"range":[288173,288284],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":544,"label":"lavaca_require"}');
          if (self.className){
            self.el.addClass(self.className);
          }
        });

      return renderPromise;
    },

    /**
     * Re-renders the view's template and replaces the DOM nodes that match
     * the selector argument. If no selector argument is provided, the whole view
     * will be re-rendered. If the first parameter is passed as <code>false</code>
     * the resulting html will pe passed with the promise and nothing will be replaced.
     * Note: the number of elements that match the provided selector must be identical
     * in the current markup and in the newly rendered markup or else the returned
     * promise will be rejected.
     * Re-renders the view's template using the view's model
     * and redraws the entire view
     * @method redraw
     *
     * @return {lavaca.util.Promise} A promise
     */
    /**
     * Re-renders the view's template using the specified model
     * and redraws the entire view
     * @method redraw
     * @param {Object} model  The data model to be passed to the template
     * @return {lavaca.util.Promise} A promise
     */
    /**
     * Re-renders the view's template using the view's model and only redraws the
     * elements that match the specified selector string.
     * Note: The numbers of items that match the selector must
     * be exactly the same in the view's current markup and in the newly rendered
     * markup. If that is not the case, the returned promise will be rejected and
     * nothing will be redrawn.
     * @method redraw
     * @param {String} selector  Selector string that defines elements to redraw
     * @return {lavaca.util.Promise} A promise
     */
    /**
     * Re-renders the view's template using the specified model and only redraws the
     * elements that match the specified selector string.
     * Note: The numbers of items that match the selector must
     * be exactly the same in the view's current markup and in the newly rendered
     * markup. If that is not the case, the returned promise will be rejected and
     * nothing will be redrawn.
     * @method redraw
     * @param {String} selector  Selector string that defines elements that will be updated
     * @param {Object} model  The data model to be passed to the template
     * @return {lavaca.util.Promise} A promise
     */
    /**
     * Re-renders the view's template using the view's model. If shouldRedraw is true,
     * the entire view will be redrawn. If shouldRedraw is false, nothing will be redrawn,
     * but the returned promise will be resolved with the newly rendered content. This allows
     * the caller to attach a success handler to the returned promise and define their own
     * redrawing behavior.
     * @method redraw
     * @param {Boolean} shouldRedraw  Whether the view should be automatically redrawn.
     * @return {lavaca.util.Promise}  A promise
     */
    /**
     * Re-renders the view's template using the specified model. If shouldRedraw is true,
     * the entire view will be redrawn. If shouldRedraw is false, nothing will be redrawn,
     * but the returned promise will be resolved with the newly rendered content. This allows
     * the caller to attach a success handler to the returned promise and define their own
     * redrawing behavior.
     * @method redraw
     * @param {Boolean} shouldRedraw  Whether the view should be automatically redrawn.
     * @param {Object} model  The data model to be passed to the template
     * @return {lavaca.util.Promise}  A promise
     */
    redraw: function(selector, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[291763,293891],"range":[291737,293891],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":549,"label":"lavaca_require"}');
      var self = this,
        templateRenderPromise = new Promise(this),
        redrawPromise = new Promise(this),
        template = Template.get(this.template),
        replaceAll;
      if (typeof selector === 'object' || selector instanceof Model) {
        model = selector;
        replaceAll = true;
        selector = null;
      }
      else if (typeof selector === 'boolean') {
        replaceAll = selector;
        selector = null;
      } else if (!selector) {
        replaceAll = true;
      }
      model = model || this.model;
      if (model instanceof Model) {
        model = model.toObject();
      }

      // process widget, child view, and
      // child view event maps
      function processMaps() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[292491,292600],"range":[292468,292600],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":546,"label":"lavaca_require"}');
        self.createWidgets();
        self.createChildViews();
        self.applyChildViewEvents();
      }
      templateRenderPromise
        .success(function(html) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[292661,293675],"range":[292646,293675],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":548,"label":"lavaca_require"}');
          if (replaceAll) {
            this.disposeChildViews(this.el);
            this.disposeWidgets(this.el);
            this.el.html(html);
            processMaps();
            redrawPromise.resolve(html);
            return;
          }
          if(selector) {
            var $newEl = $('<div>' + html + '</div>').find(selector),
              $oldEl = this.el.find(selector);
            if($newEl.length === $oldEl.length) {
              $oldEl.each(function(index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[293144,293343],"range":[293128,293343],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":547,"label":"lavaca_require"}');
                var $el = $(this);
                self.disposeChildViews($el);
                self.disposeWidgets($el);
                $el.replaceWith($newEl.eq(index)).remove();
              });
              processMaps();
              redrawPromise.resolve(html);
            } else {
              redrawPromise.reject('Count of items matching selector is not the same in the original html and in the newly rendered html.');
            }
          } else {
            redrawPromise.resolve(html);
          }
        })
        .error(redrawPromise.rejector());
      template
        .render(model)
        .success(templateRenderPromise.resolver())
        .error(templateRenderPromise.rejector());
      return redrawPromise;
    },

    /**
     * Dispose old widgets and child views
     * @method disposeChildViews
     * @param  {Object} $el the $el to search for child views and widgets in
     */
    disposeChildViews: function ($el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[294101,294562],"range":[294086,294562],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":551,"label":"lavaca_require"}');
      var childViewSearch,
        self = this;

      // Remove child views
      childViewSearch = $el.find('[data-view-id]');
      if ($el !== self.el && $el.is('[data-view-id]')) {
        childViewSearch = childViewSearch.add($el);
      }
      childViewSearch.each(function(index, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[294398,294554],"range":[294376,294554],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":550,"label":"lavaca_require"}');
        var $item = $(item),
          childView = $item.data('view');

        self.childViews.remove(childView.id);
        childView.dispose();
      });
    },
    /**
     * Dispose old widgets and child views
     * @method disposeWidgets
     * @param  {Object} $el the $el to search for child views and widgets in
     */
    disposeWidgets: function ($el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[294765,295192],"range":[294750,295192],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":553,"label":"lavaca_require"}');
      var self = this;

      // Remove widgets
      $el.add($el.find('[data-has-widgets]')).each(function(index, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[294888,295151],"range":[294866,295151],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":552,"label":"lavaca_require"}');
        var $item = $(item),
          widgets = $item.data('widgets'),
          selector, widget;
        for (selector in widgets) {
          widget = widgets[selector];
          self.widgets.remove(widget.id);
          widget.dispose();
        }
      });
      $el.removeData('widgets');
    },
    /**
     * Unbinds events from the model
     * @method clearModelEvents
     *
     */
    clearModelEvents: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[295319,295883],"range":[295308,295883],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":554,"label":"lavaca_require"}');
      var type,
        callback,
        dotIndex;
      if (this.eventMap
        && this.eventMap.model
        && this.model
        && this.model instanceof EventDispatcher) {
        for (type in this.eventMap.model) {
          callback = this.eventMap.model[type];
          if (typeof callback === 'object') {
            callback = callback.on;
          }
          dotIndex = type.indexOf('.');
          if (dotIndex !== -1) {
            type = type.substr(0, dotIndex);
          }
          this.model.off(type, callback);
        }
      }
    },
    /**
     * Checks for strings in the event map to bind events to this automatically
     * @method bindMappedEvents
     */
    bindMappedEvents: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[296046,296413],"range":[296035,296413],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":555,"label":"lavaca_require"}');
      var callbacks,
        delegate,
        type;
      for (delegate in this.eventMap) {
        callbacks = this.eventMap[delegate];
        for (type in callbacks) {
          if (typeof this.eventMap[delegate][type] === 'string'){
            this.eventMap[delegate][type] = this[this.eventMap[delegate][type]].bind(this);
          }
        }
      }
    },
    /**
     * Binds events to the view
     * @method applyEvents
     *
     */
    applyEvents: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[296525,297937],"range":[296514,297937],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":556,"label":"lavaca_require"}');
      var el = this.el,
        callbacks,
        callback,
        property,
        delegate,
        type,
        dotIndex,
        opts;
      for (delegate in this.eventMap) {
        callbacks = this.eventMap[delegate];
        if (delegate === 'self') {
          delegate = null;
        }
        for (type in callbacks) {
          callback = callbacks[type];
          if (typeof callback === 'object') {
            opts = callback;
            callback = callback.on;
          } else {
            opts = undefined;
          }
          if (typeof callback === 'string') {
            if (callback in this) {
              callback = this[callback].bind(this);
            }
          }
          if (delegate === 'model') {
            if (this.model && this.model instanceof Model) {
              dotIndex = type.indexOf('.');
              if (dotIndex !== -1) {
                property = type.substr(dotIndex+1);
                type = type.substr(0, dotIndex);
              }
              this.model.on(type, property, callback, this);
            }
          } else if (type === 'animationEnd' && el.animationEnd) {
            el.animationEnd(delegate, callback);
          } else if (type === 'transitionEnd' && el.transitionEnd) {
            el.transitionEnd(delegate, callback);
          } else {
            el.on(type, delegate, callback);
          }
        }
      }
    },
    /**
     * Maps multiple delegated events for the view
     * @method mapEvent
     *
     * @param {Object} map  A hash of the delegates, event types, and handlers
     *     that will be bound when the view is rendered. The map should be in
     *     the form <code>{delegate: {eventType: callback}}</code>. For example,
     *     <code>{'.button': {click: onClickButton}}</code>. The events defined in
     *     [[Lavaca.fx.Animation]] and [[Lavaca.fx.Transition]] are also supported.
     *     To map an event to the view's el, use 'self' as the delegate. To map
     *     events to the view's model, use 'model' as the delegate. To limit events
     *     to only a particular property on the model, use a period-seperated
     *     syntax such as <code>{model: {'change.myproperty': myCallback}}</code>
     * @return {lavaca.mvc.View}  This view (for chaining)
     */
    /**
     * Maps an event for the view
     * @method mapEvent
     * @param {String} delegate  The element to which to delegate the event
     * @param {String} type  The type of event
     * @param {Function} callback  The event handler
     * @return {lavaca.mvc.View}  This view (for chaining)
     */
    mapEvent: function(delegate, type, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[299183,299598],"range":[299148,299598],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":557,"label":"lavaca_require"}');
      var o;
      if (typeof delegate === 'object') {
        o = delegate;
        for (delegate in o) {
          for (type in o[delegate]) {
            this.mapEvent(delegate, type, o[delegate][type]);
          }
        }
      } else {
        o = this.eventMap[delegate];
        if (!o) {
          o = this.eventMap[delegate] = {};
        }
        o[type] = callback;
      }
      return this;
    },
    /**
     * Initializes widgets on the view
     * @method createWidgets
     *
     */
    createWidgets: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[299721,300326],"range":[299710,300326],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":559,"label":"lavaca_require"}');
      var cache = this.widgets,
        n,
        o;
      for (n in this.widgetMap) {
        o = this.widgetMap[n];
        (n === 'self' ? this.el : this.el.find(n))
          .each(function(index, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[299931,300310],"range":[299909,300310],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":558,"label":"lavaca_require"}');
            var $el = $(item),
              widgetMap = $el.data('widgets') || {},
              widget;
            if (!widgetMap[n]) {
              widget = new o($(item));
              widgetMap[n] = widget;
              cache.set(widget.id, widget);
              $el.data('widgets', widgetMap);
              $el.attr('data-has-widgets','');
            }
          });
      }
    },
    /**
     * Assigns multiple widget types to elements on the view
     * @method mapWidget
     * @param {Object} map  A hash of selectors to widget types to be bound when the view is rendered.
     *     The map should be in the form {selector: TWidget}. For example, {'form': Lavaca.ui.Form}
     * @return {Lavaca.mvc.View}  This view (for chaining)
     *
     */
    /**
     * Assigns a widget type to be created for elements matching a selector when the view is rendered
     * @method mapWidget
     * @param {String} selector  The selector for the root element of the widget
     * @param {Function} TWidget  The [[Lavaca.ui.Widget]]-derived type of widget to create
     * @return {Lavaca.mvc.View}  This view (for chaining)
     */
    mapWidget: function(selector, TWidget) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[301117,301397],"range":[301089,301397],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":560,"label":"lavaca_require"}');
      if (typeof selector === 'object') {
        var widgetTypes = selector;
        for (selector in widgetTypes) {
          this.mapWidget(selector, widgetTypes[selector]);
        }
      } else {
        this.widgetMap[selector] = TWidget;
      }
      return this;
    },
    /**
     * Initializes child views on the view, called from onRenderSuccess
     * @method createChildViews
     *
     */
    createChildViews: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[301559,302031],"range":[301548,302031],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":562,"label":"lavaca_require"}');
      var cache = this.childViews,
        n,
        self = this,
        o;
      for (n in this.childViewMap) {
        o = this.childViewMap[n];
        this.el.find(n)
          .each(function(index, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[301772,302015],"range":[301750,302015],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":561,"label":"lavaca_require"}');
            var $el = $(item),
              childView;
            if (!$el.data('view')) {
              childView = new o.TView($el, o.model || self.model, self);
              cache.set(childView.id, childView);
            }
          });
      }
    },
    /**
     * Assigns multiple Views to elements on the view
     * @method mapChildView
     * @param {Object} map  A hash of selectors to view types and models to be bound when the view is rendered.
     *     The map should be in the form {selector: {TView : TView, model : lavaca.mvc.Model}}. For example, {'form': {TView : lavaca.mvc.ExampleView, model : lavaca.mvc.Model}}
     * @return {lavaca.mvc.View}  This view (for chaining)
     *
     * Assigns a View type to be created for elements matching a selector when the view is rendered
     * @method mapChildView
     * @param {String} selector  The selector for the root element of the View
     * @param {Function} TView  The [[Lavaca.mvc.View]]-derived type of view to create
     * @param {Function} model  The [[Lavaca.mvc.Model]]-derived model instance to use in the child view
     * @return {Lavaca.mvc.View}  This view (for chaining)
     */
    mapChildView: function(selector, TView, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[302996,303352],"range":[302963,303352],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":563,"label":"lavaca_require"}');
      if (typeof selector === 'object') {
        var childViewTypes = selector;
        for (selector in childViewTypes) {
          this.mapChildView(selector, childViewTypes[selector].TView, childViewTypes[selector].model);
        }
      } else {
        this.childViewMap[selector] = { TView: TView, model: model };
      }
      return this;
    },

    /**
     * Listen for events triggered from child views.
     * @method mapChildViewEvent
     *
     * @param {String} type The type of event to listen for
     * @param {Function} callback The method to execute when this event type has occured
     * @param {Lavaca.mvc.View} TView (Optional) Only listen on child views of this type
     */
    /**
     * Maps multiple child event types
     * @method mapChildViewEvent
     *
     * @param {Object} map A hash of event types with callbacks and TView's associated with that type
     *  The map should be in the form {type : {callback : {Function}, TView : TView}}
     */
    mapChildViewEvent: function(type, callback, TView) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[304040,304431],"range":[304008,304431],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":564,"label":"lavaca_require"}');
      if (typeof type === 'object'){
        var eventTypes = type;
        for (type in eventTypes){
          //add in view type to limit events created
          this.mapChildViewEvent(type, eventTypes[type].callback, eventTypes[type].TView);
        }
      } else {
        this.childViewEventMap[type] = {
          TView: TView,
          callback: callback
        };
      }
    },

    /**
     * Called from onRenderSuccess of the view, adds listeners to all childviews if present
     * @method applyChildViewEvent
     *
     */
    applyChildViewEvents: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[304621,305270],"range":[304610,305270],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":566,"label":"lavaca_require"}');
      var childViewEventMap = this.childViewEventMap,
        type;
      for (type in childViewEventMap) {
        this.childViews.each(function(key, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[304780,305254],"range":[304760,305254],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":565,"label":"lavaca_require"}');
          var callbacks,
            callback,
            i = -1;

          if (!childViewEventMap[type].TView || item instanceof childViewEventMap[type].TView) {
            callbacks = item.callbacks[type] || [];
            while (!!(callback = callbacks[++i])) {
              if (callback === childViewEventMap[type].callback) {
                return;
              }
            }
            item.on(type, childViewEventMap[type].callback);
          }
        });
      }
    },
    /**
     * Executes when the template renders successfully
     * @method onRenderSuccess
     *
     * @param {Event} e  The render event. This object should have a string property named "html"
     *   that contains the template's rendered HTML output.
     */
    onRenderSuccess: function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[305572,305868],"range":[305560,305868],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":567,"label":"lavaca_require"}');
      this.el.html(e.html);
      this.bindMappedEvents();
      this.applyEvents();
      this.createWidgets();
      this.createChildViews();
      this.applyChildViewEvents();
      this.el.data('view', this);
      this.el.attr('data-view-id', this.id);
      this.hasRendered = true;
    },
    /**
     * Executes when the template fails to render
     * @method onRenderError
     *
     * @param {Event} e  The error event. This object should have a string property named "err"
     *   that contains the error message.
     */
    onRenderError: function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[306141,306166],"range":[306129,306166],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":568,"label":"lavaca_require"}');
      log(e.err);
    },
    /**
     * Readies the view for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[306278,306710],"range":[306267,306710],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":569,"label":"lavaca_require"}');
      if (this.model) {
        this.clearModelEvents();
      }
      if (this.childViews.count()) {
        this.disposeChildViews(this.el);
      }
      if (this.widgets.count()) {
        this.disposeWidgets(this.el);
      }

      // Do not dispose of template or model
      this.template
        = this.model
        = this.parentView
        = null;

      EventDispatcher.prototype.dispose.apply(this, arguments);
    }
  });

  return View;

});

define('lavaca/mvc/ViewManager',['require','$','lavaca/mvc/PageView','lavaca/util/ArrayUtils','lavaca/util/Cache','lavaca/util/Disposable','lavaca/util/Promise','lavaca/util/delay','mout/object/merge','lavaca/net/History'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[306980,315234],"range":[306962,315234],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":585,"label":"lavaca_require"}');

  var $ = require('$'),
      PageView = require('lavaca/mvc/PageView'),
      ArrayUtils = require('lavaca/util/ArrayUtils'),
      Cache = require('lavaca/util/Cache'),
      Disposable = require('lavaca/util/Disposable'),
      Promise = require('lavaca/util/Promise'),
      delay = require('lavaca/util/delay'),
      merge = require('mout/object/merge'),
      History = require('lavaca/net/History');

  /**
   * Manager responsible for drawing views
   * @class lavaca.mvc.ViewManager
   * @extends lavaca.util.Disposable
   *
   * @constructor
   * @param {jQuery} el  The element that contains all layers
   */
  var ViewManager = Disposable.extend(function(el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[307655,308478],"range":[307642,308478],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":571,"label":"lavaca_require"}');
    Disposable.call(this);
    /**
    * The element that contains all view layers
     * @property {jQuery} el
     * @default null
     */
    this.el = $(el || document.body);
    /**
     * A cache containing all views
     * @property {Lavaca.util.Cache} views
     * @default new Lavaca.util.Cache()
     */
    this.pageViews = new Cache();
    /**
     * A list containing all layers
     * @property {Array} layers
     * @default []
     */
    this.layers = [];
    /**
     * A list containing all views that are currently exiting
     * @property {Array} exitingPageViews
     * @default []
     */
    this.exitingPageViews = [];
    /**
     * A list containing all views that are currently entering
     * @property {Array} enteringPageViews
     * @default []
     */
    this.enteringPageViews = [];
  }, {
    /**
     * When true, the view manager is prevented from loading views.
     * @property {Boolean} locked
     * @default false
     */
    locked: false,
    /**
     * Sets the el property on the instance
     * @method setEl
     *
     * @param {jQuery} el  A jQuery object of the element that contains all layers
     * @return {Lavaca.mvc.ViewManager}  This View Manager instance
     */
    /**
     * Sets the el property on the instance
     * @method setEl
     *
     * @param {String} el  A CSS selector matching the element that contains all layers
     * @return {Lavaca.mvc.ViewManager}  This View Manager instance
     */
    setEl: function(el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[309148,309227],"range":[309135,309227],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":572,"label":"lavaca_require"}');
      this.el = typeof el === 'string' ? $(el) : el;
      return this;
    },
    /**
     * Loads a view
     * @method load
     *
     * @param {String} cacheKey  The cache key associated with the view
     * @param {Function} TPageView  The type of view to load (should derive from [[Lavaca.mvc.View]])
     * @param {Object} model  The views model
     * @param {Number} layer  The index of the layer on which the view will sit
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Loads a view
     * @method load
     *
     * @param {String} cacheKey  The cache key associated with the view
     * @param {Function} TPageView  The type of view to load (should derive from [[Lavaca.mvc.View]])
     * @param {Object} model  The views model
     * @param {Object} params  Parameters to be mapped to the view
     * @return {Lavaca.util.Promise}  A promise
     */
    load: function(cacheKey, TPageView, model, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[310093,311948],"range":[310048,311948],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":577,"label":"lavaca_require"}');
      if (this.locked) {
        return (new Promise(this)).reject('locked');
      } else {
        this.locked = true;
      }
      params = params || {};
      var self = this,
          layer = layer || 0,
          pageView = this.pageViews.get(cacheKey),
          promise = new Promise(this),
          enterPromise = new Promise(promise),
          renderPromise = null,
          exitPromise = null;
      promise.always(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[310537,310575],"range":[310526,310575],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":573,"label":"lavaca_require"}');
        this.locked = false;
      });
      if (typeof params === 'number') {
        layer = params;
      } else if (params.layer) {
        layer = params.layer;
      }
      if (!pageView) {
        if (History.isRoutingBack && self.layers[layer] instanceof TPageView) {
          pageView = self.layers[layer];
        } else {
          pageView = new TPageView(null, model, layer);
          if (typeof params === 'object') {
            merge(pageView, params);
          }
          renderPromise = pageView.render();
          if (cacheKey !== null) {
            this.pageViews.set(cacheKey, pageView);
            pageView.cacheKey = cacheKey;
          }
        }
      }
      function lastly() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[311251,311796],"range":[311233,311796],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":576,"label":"lavaca_require"}');
        self.enteringPageViews = [pageView];
        promise.success(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[311333,311428],"range":[311322,311428],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":575,"label":"lavaca_require"}');
          delay(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[311362,311416],"range":[311351,311416],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":574,"label":"lavaca_require"}');
            self.enteringPageViews = [];
          });
        });
        exitPromise = self.dismissLayersAbove(layer - 1, pageView);
        if (self.layers[layer] !== pageView) {
          enterPromise
            .when(pageView.enter(self.el, self.exitingPageViews), exitPromise)
            .then(promise.resolve);
          self.layers[layer] = pageView;
        } else {
          promise.when(exitPromise);
        }
      }
      if (renderPromise) {
        renderPromise.then(lastly, promise.rejector());
      } else {
        lastly();
      }
      return promise;
    },
    /**
     * Removes all views on a layer
     * @method dismiss
     *
     * @param {Number} index  The index of the layer to remove
     */
    /**
     * Removes all views on a layer
     * @method dismiss
     *
     * @param {jQuery} el  An element on the layer to remove (or the layer itself)
     */
    /**
     * Removes all views on a layer
     * @method dismiss
     *
     * @param {Lavaca.mvc.View} view  The view on the layer to remove
     */
    dismiss: function(layer) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[312441,312937],"range":[312425,312937],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":578,"label":"lavaca_require"}');
      if (typeof layer === 'number') {
        this.dismissLayersAbove(layer - 1);
      } else if (layer instanceof PageView) {
        this.dismiss(layer.layer);
      } else {
        layer = $(layer);
        var index = layer.attr('data-layer-index');
        if (index === null) {
          layer = layer.closest('[data-layer-index]');
          index = layer.attr('data-layer-index');
        }
        if (index !== null) {
          this.dismiss(Number(index));
        }
      }
    },
    /**
     * Removes all layers above a given index
     * @method dismissLayersAbove
     *
     * @param {Number}  index The index above which to clear
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Removes all layers above a given index
     * @method dismissLayersAbove
     *
     * @param {Number} index  The index above which to clear
     * @param {Lavaca.mvc.View}  exceptForView A view that should not be dismissed
     * @return {Lavaca.util.Promise}  A promise
     */
    dismissLayersAbove: function(index, exceptForView) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[313501,314467],"range":[313470,314467],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":582,"label":"lavaca_require"}');
      var promise = new Promise(this),
          dismissedLayers = false,
          i,
          layer;
      for (i = this.layers.length - 1; i > index; i--) {
        if ((layer = this.layers[i]) && (!exceptForView || exceptForView !== layer)) {
          (function(layer) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[313778,314302],"range":[313762,314302],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":581,"label":"lavaca_require"}');
            this.exitingPageViews.push(layer);
            promise
              .when(layer.exit(this.el, this.enteringPageViews))
              .success(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[313946,314253],"range":[313935,314253],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":580,"label":"lavaca_require"}');
                delay(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[313981,314229],"range":[313970,314229],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":579,"label":"lavaca_require"}');
                  ArrayUtils.remove(this.exitingPageViews, layer);
                  if (!layer.cacheKey || (exceptForView && exceptForView.cacheKey === layer.cacheKey)) {
                    layer.dispose();
                  }
                }, this);
              });
            this.layers[i] = null;
          }).call(this, layer);
          dismissedLayers = true;
        }
      }
      if (!dismissedLayers) {
        promise.resolve();
      }
      return promise;
    },
    /**
     * Empties the view cache
     * @method flush
     */
    flush: function(cacheKey) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[314566,315018],"range":[314547,315018],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":583,"label":"lavaca_require"}');
      // Don't dispose of any views that are currently displayed
      //flush individual cacheKey
      if (cacheKey){
        this.pageViews.remove(cacheKey);
      } else {
        var i = -1,
          layer;
        while (!!(layer = this.layers[++i])) {
          if (layer.cacheKey) {
            this.pageViews.remove(layer.cacheKey);
          }
        }
        this.pageViews.dispose();
        this.pageViews = new Cache();
      }
    },
    /**
     * Readies the view manager for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[315138,315192],"range":[315127,315192],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":584,"label":"lavaca_require"}');
      Disposable.prototype.dispose.call(this);
    }
  });

  return new ViewManager(null);

});

define('lavaca/net/Connectivity',['require','$','lavaca/util/Promise','lavaca/util/resolve'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[315349,317884],"range":[315331,317884],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":592,"label":"lavaca_require"}');

  var $ = require('$'),
      Promise = require('lavaca/util/Promise'),
      resolve = require('lavaca/util/resolve');

  /**
   * A utility type for working under different network connectivity situatioConnectivity.
   * @class lavaca.net.Connectivity
   */

  var _navigatorOnlineSupported = typeof navigator.onLine === 'boolean',
      _offlineAjaxHandlers = [],
      _offlineErrorCode = 'offline';

  function _onAjaxError(arg) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[315786,315960],"range":[315759,315960],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":586,"label":"lavaca_require"}');
    if (arg === _offlineErrorCode) {
      var i = -1,
          callback;
      while (!!(callback = _offlineAjaxHandlers[++i])) {
        callback(arg);
      }
    }
  }

  var Connectivity = {};

  /**
   * Attempts to detect whether or not the browser is connected
   * @method isOffline
   * @static
   *
   * @return {Boolean}  True if the browser is offline; false if the browser is online
   *    or if connection status cannot be determined
   */
  Connectivity.isOffline = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[316283,316533],"range":[316272,316533],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":587,"label":"lavaca_require"}');
    var connectionType = resolve('navigator.connection.type');
    if (connectionType !== null) {
      return connectionType === resolve('Connection.NONE');
    } else {
      return _navigatorOnlineSupported ? !navigator.onLine : false;
    }
  };

  /**
   * Makes an AJAX request if the user is online. If the user is offline, the returned
   * promise will be rejected with the string argument "offline"
   * @method ajax
   * @static
   *
   * @param {Object} opts  jQuery-style AJAX options
   * @return {Lavaca.util.Promise}  A promise
   */
  Connectivity.ajax = function(opts) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[316872,317470],"range":[316857,317470],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":590,"label":"lavaca_require"}');
    var promise = new Promise(),
        origSuccess = opts.success,
        origError = opts.error;
    opts.success = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[317005,317138],"range":[316994,317138],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":588,"label":"lavaca_require"}');
      if (origSuccess) {
        origSuccess.apply(this, arguments);
      }
      promise.resolve.apply(promise, arguments);
    };
    opts.error = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[317168,317296],"range":[317157,317296],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":589,"label":"lavaca_require"}');
      if (origError) {
        origError.apply(this, arguments);
      }
      promise.reject.apply(promise, arguments);
    };
    if (Connectivity.isOffline()) {
      promise.reject(_offlineErrorCode);
    } else {
      $.ajax(opts);
    }
    promise.error(_onAjaxError);
    return promise;
  };

  /**
   * Adds a callback to be executed whenever any Lavaca.net.Connectivity.ajax() call is
   * blocked as a result of a lack of internet connection.
   * @method registerOfflineAjaxHandler
   * @static
   *
   * @param {Function} callback  The callback to execute
   */
  Connectivity.registerOfflineAjaxHandler = function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[317810,317856],"range":[317791,317856],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":591,"label":"lavaca_require"}');
    _offlineAjaxHandlers.push(callback);
  };

  return Connectivity;

});

define('lavaca/net/History',['require','lavaca/events/EventDispatcher','lavaca/util/uuid'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[317997,326926],"range":[317979,326926],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":611,"label":"lavaca_require"}');

  var EventDispatcher = require('lavaca/events/EventDispatcher'),
      uuid = require('lavaca/util/uuid');

  var _isAndroid = navigator.userAgent.indexOf('Android') > -1,
      _standardsMode = !_isAndroid && typeof history.pushState === 'function',
      _hasPushed = false,
      _lastHash,
      _hist,
      _currentId,
      _pushCount = 0;

  function _insertState(hist, position, id, state, title, url) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[318412,318668],"range":[318351,318668],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":593,"label":"lavaca_require"}');
    hist.position = position;
    var record = {
          id: id,
          state: state,
          title: title,
          url: url
        };
    hist.sequence[position] = record;
    location.hash = _lastHash = url + '#@' + id;
    return record;
  }

  /**
   * HTML5 history abstraction layer
   * @class lavaca.net.History
   * @extends lavaca.events.EventDispatcher
   *
   * @event popstate
   *
   * @constructor
   */
  var History = EventDispatcher.extend(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[318893,321331],"range":[318882,321331],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":596,"label":"lavaca_require"}');
    EventDispatcher.call(this);
    /**
     * A list containing history states generated by the app (not used for HTML5 history)
     * @property {Array} sequence
     */
    this.sequence = [];
    /**
     * The current index in the history sequence (not used for HTML5 history)
     * @property {Number} position
     */
    this.position = -1;
    this.replace({}, document.title, location.pathname);
    var self = this;
    if (_standardsMode) {
      /**
       * Auto-generated callback executed when a history event occurs
       * @property {Function} onPopState
       */
       var self = this;
      this.onPopState = function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[319539,319924],"range":[319527,319924],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":594,"label":"lavaca_require"}');
        if (e.state) {
          _pushCount--;
          var previousId = _currentId;
          _currentId = e.state.id;
          self.trigger('popstate', {
            state: e.state.state,
            title: e.state.title,
            url: e.state.url,
            id: e.state.id,
            direction: _currentId > previousId ? 'forward' : 'back'
          });
        }
      };
      window.addEventListener('popstate', this.onPopState, false);
    } else {
      this.onPopState = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[320041,321133],"range":[320030,321133],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":595,"label":"lavaca_require"}');
        var hash = location.hash,
            code,
            record,
            item,
            previousCode,
            i = -1;
        if (hash) {
          hash = hash.replace(/^#/, '');
        }
        if (hash !== _lastHash) {
          previousCode = _lastHash.split('#@')[1];
          _lastHash = hash;
          if (hash) {
            _pushCount--;
            code = hash.split('#@')[1];
            while (!!(item = self.sequence[++i])) {
              if (item.id === parseInt(code, 10)) {
                record = item;
                self.position = i;
                break;
              }
            }
            if (record) {
              location.hash = record.url + '#@' + record.id;
              document.title = record.title;
              self.trigger('popstate', {
                state: record.state,
                title: record.title,
                url: record.url,
                id: record.id,
                direction: record.id > parseInt(previousCode, 10) ? 'forward' : 'back'
              });
            }
          }
        }
      };
      if (window.attachEvent) {
        window.attachEvent('onhashchange', this.onPopState);
      } else {
        window.addEventListener('hashchange', this.onPopState, false);
      }
    }
  }, {
    /**
     * Retrieve the current history record
     * @method current
     *
     * @return {Object}  The current history record
     */
    current: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[321500,321558],"range":[321489,321558],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":597,"label":"lavaca_require"}');
      return this.sequence[this.position] || null;
    },
    /**
     * Determines whether or not there are history states
     * @method hasHistory
     *
     * @returns {Boolean} True when there is a history state
     */
    hasHistory: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[321755,321791],"range":[321744,321791],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":598,"label":"lavaca_require"}');
      return _pushCount > 0;
    },
    /**
     * Adds a record to the history
     * @method push
     *
     * @param {Object} state  A data object associated with the page state
     * @param {String} title  The title of the page state
     * @param {String} url  The URL of the page state
     */
    push: function(state, title, url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[322097,322514],"range":[322069,322514],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":599,"label":"lavaca_require"}');
      _pushCount++;
      if (_hasPushed) {
        document.title = title;
        _currentId = uuid('history');
        if (_standardsMode) {
          history.pushState({state: state, title: title, url: url, id: _currentId}, title, url);
        } else {
          _insertState(this, ++this.position, _currentId, state, title, url);
        }
      } else {
        this.replace(state, title, url);
      }
    },
    /**
     * Replaces the current record in the history
     * @method replace
     *
     * @param {Object} state  A data object associated with the page state
     * @param {String} title  The title of the page state
     * @param {String} url  The URL of the page state
     */
    replace: function(state, title, url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[322840,323251],"range":[322812,323251],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":600,"label":"lavaca_require"}');
      _hasPushed = true;
      document.title = title;
      if (_standardsMode) {
        history.replaceState({state: state, title: title, url: url, id: _currentId}, title, url);
      } else {
        if (this.position < 0) {
          this.position = 0;
        }
        _insertState(this, this.position, typeof _currentId !== 'undefined' ? _currentId : uuid('history'), state, title, url);
      }
    },
    /**
     * Unbind the history object and ready it for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[323385,323792],"range":[323374,323792],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":601,"label":"lavaca_require"}');
      if (this.onPopState) {
        if (_standardsMode) {
          window.removeEventListener('popstate', this.onPopState, false);
        } else if (window.detachEvent) {
          window.detachEvent('onhashchange', this.onPopState);
        } else {
          window.removeEventListener('hashchange', this.onPopState, false);
        }
      }
      EventDispatcher.prototype.dispose.call(this);
    }
  });
  /**
   * Initialize a singleton history abstraction layer
   * @method init
   * @static
   *
   * @return {Lavaca.mvc.History}  The history instance
   */
   /**
   * Initialize a singleton history abstraction layer
   * @method init
   * @static
   *
   * @param {Boolean} useHash  When true, use the location hash to manage history state instead of HTML5 history
   * @return {Lavaca.mvc.History}  The history instance
   */
  History.init = function(useHash) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[324264,324410],"range":[324246,324410],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":602,"label":"lavaca_require"}');
    if (!_hist) {
      if (useHash) {
        History.overrideStandardsMode();
      }
      _hist = new History();
    }
    return _hist;
  };
  /**
   * Adds a record to the history
   * @method push
   * @static
   *
   * @param {Object} state  A data object associated with the page state
   * @param {String} title  The title of the page state
   * @param {String} url  The URL of the page state
   */
  History.push = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[324703,324757],"range":[324692,324757],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":603,"label":"lavaca_require"}');
    History.init().push.apply(_hist, arguments);
  };
  /**
   * Replaces the current record in the history
   * @method replace
   * @static
   *
   * @param {Object} state  A data object associated with the page state
   * @param {String} title  The title of the page state
   * @param {String} url  The URL of the page state
   */
  History.replace = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[325070,325127],"range":[325059,325127],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":604,"label":"lavaca_require"}');
    History.init().replace.apply(_hist, arguments);
  };
  /**
   * Goes to the previous history state
   * @method back
   * @static
   */
  History.back = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[325240,325265],"range":[325229,325265],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":605,"label":"lavaca_require"}');
    history.back();
  };
  /**
   * Goes to the next history state
   * @method forward
   * @static
   */
  History.forward = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[325380,325408],"range":[325369,325408],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":606,"label":"lavaca_require"}');
    history.forward();
  };
  /**
   * Unbind the history object and ready it for garbage collection
   * @method dispose
   * @static
   */
  History.dispose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[325554,325625],"range":[325543,325625],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":607,"label":"lavaca_require"}');
    if (_hist) {
      _hist.dispose();
      _hist = null;
    }
  };
  /**
   * Binds an event handler to the singleton history
   * @method on
   * @static
   *
   * @param {String} type  The type of event
   * @param {Function} callback  The function to execute when the event occurs
   * @return {Lavaca.mvc.History}  The history object (for chaining)
   */
  History.on = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[325945,326004],"range":[325934,326004],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":608,"label":"lavaca_require"}');
    return History.init().on.apply(_hist, arguments);
  };
  /**
   * Unbinds an event handler from the singleton history
   * @method off
   * @static
   *
   * @param {String} type  The type of event
   * @param {Function} callback  The function to stop executing when the
   *    event occurs
   * @return {Lavaca.mvc.History}  The history object (for chaining)
   */
  History.off = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[326345,326405],"range":[326334,326405],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":609,"label":"lavaca_require"}');
    return History.init().off.apply(_hist, arguments);
  };
  /**
   * Sets Histroy to hash mode
   * @method overrideStandardsMode
   * @static
   */
  History.overrideStandardsMode = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[326543,326576],"range":[326532,326576],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":610,"label":"lavaca_require"}');
    _standardsMode = false;
  };

  /**
   * Stores the page transition animations so that if you route back, it will animate correctly
   * @property {Array} animationBreadcrumb
   */
  History.animationBreadcrumb = [];

  /**
   * Flag to notify when history back is being called
   * @property {Boolean} isRoutingBack
   */
  History.isRoutingBack = false;

  return History;

});

define('lavaca/storage/Store',['require','lavaca/util/Disposable'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[327015,328307],"range":[326997,328307],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":618,"label":"lavaca_require"}');

  var Disposable = require('lavaca/util/Disposable');

  function _notImplemented() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[327102,327136],"range":[327075,327136],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":612,"label":"lavaca_require"}');
    throw 'Not implemented';
  }

  /**
   * An object for manage local storage
   * @class lavaca.storage.Store
   * @extends lavaca.util.Disposable
   */
  var Store = Disposable.extend(function(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[327305,327400],"range":[327292,327400],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":613,"label":"lavaca_require"}');
    /**
     * The ID of the store
     * @property {String} id
     */
    this.id = id;
  }, {
    /**
     * Retrieves an object from storage, given its ID
     * @method get
     *
     * @param {String} id  The ID of the stored object
     * @return {Object}  The stored object
     */
    get: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[327618,327650],"range":[327607,327650],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":614,"label":"lavaca_require"}');
      _notImplemented();
    },
    /**
     * Stores an object locally
     * @method set
     *
     * @param {String} id  The ID of the object to store
     * @param {Object} value  The value to store
     */
    set: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[327852,327884],"range":[327841,327884],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":615,"label":"lavaca_require"}');
      _notImplemented();
    },
    /**
     * Removes an object from storage
     * @method remove
     *
     * @param {String} id  The ID of the object to remove from storage
     */
    remove: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[328063,328095],"range":[328052,328095],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":616,"label":"lavaca_require"}');
      _notImplemented();
    },
    /**
     * Retrieves all items in this store
     * @method all
     *
     * @return {Array}  A list of stored objects
     */
    all: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[328249,328281],"range":[328238,328281],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":617,"label":"lavaca_require"}');
      _notImplemented();
    }
  });

  return Store;

});

/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/document.cookie
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/
define('docCookies',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[328904,330770],"range":[328893,330770],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":624,"label":"lavaca_require"}');
  var escape = window.escape;
  var unescape = window.unescape;
  var docCookies = {
    getItem: function (sKey) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[329020,329210],"range":[329004,329210],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":619,"label":"lavaca_require"}');
      return unescape(document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*)|.*"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[329280,330009],"range":[329225,330009],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":620,"label":"lavaca_require"}');
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
      var sExpires = "";
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
            break;
          case String:
            sExpires = "; expires=" + vEnd;
            break;
          case Date:
            sExpires = "; expires=" + vEnd.toGMTString();
            break;
        }
      }
      document.cookie = escape(sKey) + "=" + escape(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
      return true;
    },
    removeItem: function (sKey, sPath) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[330050,330252],"range":[330027,330252],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":621,"label":"lavaca_require"}');
      if (!sKey || !this.hasItem(sKey)) { return false; }
      document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sPath ? "; path=" + sPath : "");
      return true;
    },
    hasItem: function (sKey) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[330283,330412],"range":[330267,330412],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":622,"label":"lavaca_require"}');
      return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: /* optional method: you can safely remove it! */ function () {instrumentation_log('{"type":"FunctionExpression","bodyRange":[330485,330742],"range":[330473,330742],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":623,"label":"lavaca_require"}');
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = unescape(aKeys[nIdx]); }
      return aKeys;
    }
  };
  return docCookies;
});
define('lavaca/storage/LocalStore',['require','./Store','docCookies','lavaca/util/ArrayUtils'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[330886,333622],"range":[330868,333622],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":633,"label":"lavaca_require"}');

  var Store = require('./Store'),
      docCookies = require('docCookies'),
      ArrayUtils = require('lavaca/util/ArrayUtils');

  var _isLocalStorageSupported = (function(localStorage) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[331077,331320],"range":[331054,331320],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":625,"label":"lavaca_require"}');
    var testKey = 'qeTest';
    if (!localStorage) {
      return false;
    }
    try {
      localStorage.setItem(testKey, '1');
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }(window.localStorage));

  var _storage = _isLocalStorageSupported ? localStorage : docCookies;

  function _saveManifest(store) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[331449,331532],"range":[331419,331532],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":626,"label":"lavaca_require"}');
    _storage.setItem(store.id + '@manifest', JSON.stringify(store.manifest));
  }

  /**
   * An object for manage local storage
   * @class lavaca.storage.LocalStore
   * @extends lavaca.storage.Store

   */
  var LocalStore = Store.extend(function(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[331705,331906],"range":[331692,331906],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":627,"label":"lavaca_require"}');
    Store.call(this, id);
     /**
     * A list of keys found in the store
     * @field {Array} manifest
     */
    this.manifest = JSON.parse(_storage.getItem(this.id + '@manifest') || '[]');
  }, {
    /**
     * Generates a storage key
     * @method key
     *
     * @param {String} id  The ID of the item for which to generate a key
     * @return {String}  The key
     */
    key: function(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[332112,332152],"range":[332099,332152],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":628,"label":"lavaca_require"}');
      return this.id + ':' + id;
    },
    /**
     * Retrieves an object from storage, given its ID
     * @method get
     *
     * @param {String} id  The ID of the stored object
     * @return {Object}  The stored object
     */
    get: function(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[332370,332608],"range":[332357,332608],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":629,"label":"lavaca_require"}');
      var str = _storage.getItem(this.key(id));
      var obj;
      if (!!str) {
        try {
          obj = JSON.parse(str);
          return obj;
        } catch(e) {
          return str;
        }
      }
      return null;
    },
    /**
     * Stores an object locally
     * @method set
     *
     * @param {String} id  The ID of the object to store
     * @param {Object} value  The value to store
     */
    set: function(id, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[332819,332967],"range":[332799,332967],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":630,"label":"lavaca_require"}');
      _storage.setItem(this.key(id), JSON.stringify(value));
      ArrayUtils.pushIfNotExists(this.manifest, id);
      _saveManifest(this);
    },
    /**
     * Removes an object from storage
     * @method remove
     *
     * @param {String} id  The ID of the object to remove from storage
     */
    remove: function(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[333148,333267],"range":[333135,333267],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":631,"label":"lavaca_require"}');
      _storage.removeItem(this.key(id));
      ArrayUtils.remove(this.manifest, id);
      _saveManifest(this);
    },
    /**
     * Retrieves all items in this store
     * @method all
     *
     * @return {Array}  A list of stored objects
     */
    all: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[333421,333591],"range":[333410,333591],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":632,"label":"lavaca_require"}');
      var result = [],
          i = -1,
          id;
      while (!!(id = this.manifest[++i])) {
        result.push(this.get(id));
      }
      return result;
    }
  });

  return LocalStore;

});

define('lavaca/ui/DustTemplate',['require','dust','lavaca/ui/Template','lavaca/util/Config','lavaca/util/Promise','lavaca/util/StringUtils','lavaca/util/Translation','dust-helpers'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[333826,342423],"range":[333808,342423],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":645,"label":"lavaca_require"}');

  var dust = require('dust'),
      Template = require('lavaca/ui/Template'),
      Config = require('lavaca/util/Config'),
      Promise = require('lavaca/util/Promise'),
      StringUtils = require('lavaca/util/StringUtils'),
      Translation = require('lavaca/util/Translation');
  require('dust-helpers');

  /**
   * Base type for templates that use the dust engine
   * @class lavaca.ui.DustTemplate
   * @extends lavaca.ui.Template
   *
   * @constructor
   * @param {String} name  The unique name of the template
   * @param {String} src  A URL from which to load the template
   * @param {String} code  The raw string code of the template's body
   */
  var DustTemplate = Template.extend(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[334539,334752],"range":[334528,334752],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":634,"label":"lavaca_require"}');
    Template.apply(this, arguments);
    var helper = this.prepareHelpers(),
        n;
    if(!dust.helpers) {
      dust.helpers = [];
    }
    for (n in helper) {
      dust.helpers[n] = helper[n];
    }
  }, {
    /**
     * Gets the basis for the template helper object
     * @method prepareHelpers
     *
     * @return {Object}  A map of helper function names to functions
     */
    prepareHelpers: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[334962,335093],"range":[334951,335093],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":635,"label":"lavaca_require"}');
      return {
        msg: this.helperMsg,
        include: this.helperInclude,
        config: this.helperConfig
      };
    },
    /**
     * Helper function, exposed in dust templates, that uses
     *   [Lavaca.util.Translation] to get localized strings.
     * Accessed as:
     *
     * <dl>
     *
     * <dt>{@msg key="code"/}</dt>
     *   <dd>code&mdash;The key under which the message is stored</dd>
     *
     * <dt>{@msg key="code"}default{/msg}</dt>
     *   <dd>code&mdash;The key under which the message is stored</dd>
     *   <dd>default&mdash;The default markup to display if no translation
     *       is found</dd>
     *
     *
     * <dt>{@msg key="code" locale="en_US"/}</dt>
     *   <dd>code&mdash;The key under which the message is stored</dd>
     *   <dd>locale&mdash;The locale from which to get the message ("en_US")</dd>
     *
     * <dt>{@msg key="code" p0="first" p1=variable /}</dt>
     *   <dd>code&mdash;The key under which the message is stored</dd>
     *   <dd>p0, p1, &hellip; pN&mdash;String format parameters for the message
     *       (See [[Lavaca.util.StringUtils]].format())</dd>
     *
     * </dl>
     *
     * @method helperMsg
     *
     * @param {Object} chunk  Dust chunk
     * @param {Object} context  Dust context
     * @param {Object} bodies  Dust bodies
     * @param {Object} params  Parameters passed to the helper
     * @return {String}  Rendered output
     */
    helperMsg: function(chunk, context, bodies, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[336455,337060],"range":[336414,337060],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":636,"label":"lavaca_require"}');
      var key = dust.helpers.tap(params.key, chunk, context),
          locale = dust.helpers.tap(params.locale, chunk, context),
          translation = Translation.get(key, locale),
          args = [translation],
          i = -1,
          arg;
      if(!translation) {
        return bodies.block ? chunk.render(bodies.block, context) : chunk;
      }
      arg = params['p' + (++i)];
      while (typeof arg !== 'undefined') {
        args.push(dust.helpers.tap(arg, chunk, context));
        arg = params['p' + (++i)];
      }
      return chunk.write(StringUtils.format.apply(this, args));
    },
    /**
     * Helper function, exposed in dust templates, that uses
     *   [[Lavaca.ui.Template]] to include other templates. Accessed as:
     *
     * <dl>
     *
     * <dt>{@include name="template-name"/}</dt>
     *   <dd>name&mdash;The name under which the template can be referenced</dd>
     *
     * </dl>
     *
     * <strong>Note:</strong> You should always use the include helper instead of
     * the dust.js partial syntax. The dust.js partial syntax may not work as expected.
     *
     * @method helperInclude
     * @param {Object} chunk  Dust chunk
     * @param {Object} context  Dust context
     * @param {Object} bodies  Dust bodies
     * @param {Object} params  Parameters passed to the helper
     * @return {String}  Rendered output
     */
    helperInclude: function(chunk, context, bodies, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[337894,338303],"range":[337853,338303],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":638,"label":"lavaca_require"}');
      var name = dust.helpers.tap(params.name, chunk, context),
          result;

      // Note that this only works because
      // dust renders are synchronous so
      // the .then() is called before this
      // helper function returns
      Template
        .render(name, context.stack.head)
        .then(function(html) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[338225,338261],"range":[338210,338261],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":637,"label":"lavaca_require"}');
          result = html;
        });
      return chunk.write(result);
    },
    /**
     * Helper function, exposed in dust templates, that allows templates
     *   to use data from [[Lavaca.util.Config]]. Accessed as:
     *
     * <dl>
     *
     * <dt>{@config key="config_value"/}</dt>
     *   <dd>key&mdash;The key to read from the config file for the default environment.</dd>
     *
     * <dt>{@config key="config_value" environment="production"/}</dt>
     *   <dd>key&mdash;The key to read from the config file for the specified environment.</dd>
     *
     * <dt>{@config key="config_value"}default{/config}</dt>
     *   <dd>key&mdash;The key to read from the config file</dd>
     *   <dd>default&mdash;The default markup to display if the key
     *       is not found</dd>
     *
     * <dt>{@config key="config_value" p0="first" p1=variable /}</dt>
     *   <dd>key&mdash;The key to read from the config file</dd>
     *   <dd>p0, p1, &hellip; pN&mdash;String format parameters
     *       (See [[Lavaca.util.StringUtils]].format())</dd>
     *
     * </dl>
     *
     * <dt>{@config only="local"}&hellip;{:else}&hellip;{/config}</dt>
     *   <dd>only&mdash;Only render the body content if the current config environment's name matches this key</dd>
     *
     * </dl>
     *
     * <dt>{@config not="production"}&hellip;{:else}&hellip;{/config}</dt>
     *   <dd>not&mdash;Only render the body content if the current config environment's name does NOT match this key</dd>
     *
     * </dl>
     * @method helperConfig
     *
     * @param {Object} chunk  Dust chunk
     * @param {Object} context  Dust context
     * @param {Object} bodies  Dust bodies
     * @param {Object} params  Parameters passed to the helper
     * @return {String}  Rendered output
     */
    helperConfig: function(chunk, context, bodies, params) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[340081,341138],"range":[340040,341138],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":639,"label":"lavaca_require"}');
      var key = dust.helpers.tap(params.key, chunk, context),
          environment = dust.helpers.tap(params.environment, chunk, context),
          value = environment ? Config.get(environment, key) : Config.get(key),
          args = [value],
          i = -1,
          currentEnvironment, arg;
      if(params.only || params.not) {
        currentEnvironment = Config.currentEnvironment();
        if((params.only && currentEnvironment === params.only) || (params.not && currentEnvironment !== params.not)) {
          return bodies.block ? chunk.render(bodies.block, context) : chunk;
        } else {
          return bodies['else'] ? chunk.render(bodies['else'], context) : chunk;
        }
      }
      if(!value) {
        return bodies.block ? chunk.render(bodies.block, context) : chunk;
      }
      arg = params['p' + (++i)];
      while (typeof arg !== 'undefined') {
        args.push(dust.helpers.tap(arg, chunk, context));
        arg = params['p' + (++i)];
      }
      return chunk.write(StringUtils.format.apply(this, args));
    },
    /**
     * Compiles the template
     * @method compile
     */
    compile: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[341232,341343],"range":[341221,341343],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":640,"label":"lavaca_require"}');
      Template.prototype.compile.call(this);
      dust.loadSource(dust.compile(this.code, this.name));
    },
    /**
     * Renders the template to a string.
     * @method render
     *
     * @param {Object} model  The data model to provide to the template
     * @return {Lavaca.util.Promise}  A promise
     */
    render: function(model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[341579,342001],"range":[341563,342001],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":642,"label":"lavaca_require"}');
      var promise = new Promise(this);
      if (!this.code && this.src) {
        this.load(this.src);
      }
      if (this.code && !this.compiled) {
        this.compile();
        this.compiled = true;
      }
      dust.render(this.name, model, function(err, html) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[341852,341971],"range":[341832,341971],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":641,"label":"lavaca_require"}');
        if (err) {
          promise.reject(err);
        } else {
          promise.resolve(html);
        }
      });
      return promise;
    },
    /**
     * Makes this template ready for disposals
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[342113,342201],"range":[342102,342201],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":643,"label":"lavaca_require"}');
      delete dust.cache[this.name];
      Template.prototype.dispose.call(this);
    }
  });

  DustTemplate.getCompiledTemplates = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[342258,342286],"range":[342247,342286],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":644,"label":"lavaca_require"}');
    return dust.cache;
  };

  // Register the Dust template type for later use
  Template.register('text/dust-template', DustTemplate);

  return DustTemplate;

});

define('lavaca/ui/Widget',['require','$','lavaca/events/EventDispatcher','lavaca/util/uuid'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[342538,343345],"range":[342520,343345],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":647,"label":"lavaca_require"}');

  var $ = require('$'),
      EventDispatcher = require('lavaca/events/EventDispatcher'),
      uuid = require('lavaca/util/uuid');

  /**
   * Base type for all UI elements
   * @class lavaca.ui.Widget
   * @extends lavaca.events.EventDispatcher
   *
   * @constructor
   *
   * @param {jQuery} el  The DOM element that is the root of the widget
   */
  var Widget = EventDispatcher.extend(function(el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[342945,343322],"range":[342932,343322],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":646,"label":"lavaca_require"}');
    EventDispatcher.call(this);
    /**
     * The DOM element that is the root of the widget
     * @property {jQuery} el
     * @default null
     */
    this.el = el = $(el);
    var id = el.attr('id');
    if (!id) {
      id = 'widget-' + uuid();
    }
    /**
     * The el's ID
     * @property {String} id
     * @default (Autogenerated)
     */
    this.id = id;
  });

  return Widget;

});

define('lavaca/ui/Form',['require','$','lavaca/ui/Widget','lavaca/util/Promise'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[343448,353770],"range":[343430,353770],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":677,"label":"lavaca_require"}');

  var $ = require('$'),
      Widget = require('lavaca/ui/Widget'),
      Promise = require('lavaca/util/Promise');

  function _required(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[343596,343645],"range":[343570,343645],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":648,"label":"lavaca_require"}');
    return value ? null : 'error_required';
  }

  function _pattern(value, input) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[343681,343855],"range":[343649,343855],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":649,"label":"lavaca_require"}');
    if (value) {
      var pattern = new RegExp(input.attr('pattern'));
      if (!pattern.test(value)) {
        return 'error_pattern';
      }
    }
    return null;
  }

  function _email(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[343882,343996],"range":[343859,343996],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":650,"label":"lavaca_require"}');
    if (value && !/^\w+@\w+(\.\w+)*\.\w+$/.test(value)) {
      return 'error_email';
    }
    return null;
  }

  function _tel(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[344021,344150],"range":[344000,344150],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":651,"label":"lavaca_require"}');
    if (value && !/^\d?(\d{3})?\d{7}$/.test(value.replace(/\D/g, ''))) {
      return 'error_email';
    }
    return null;
  }

  function _number(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[344178,344284],"range":[344154,344284],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":652,"label":"lavaca_require"}');
    if (value && !/^\d+(\.\d+)?$/.test(value)) {
      return 'error_number';
    }
    return null;
  }

  function _url(value) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[344309,344439],"range":[344288,344439],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":653,"label":"lavaca_require"}');
    if (value && !/^https?:\/\/\w+(\.\w+)*\.\w(:\d+)?\/\S+$/.test(value)) {
      return 'error_url';
    }
    return null;
  }

  /**
   * Basic form type
   * @class lavaca.ui.Form
   * @extends lavaca.ui.Widget
   *
   * @constructor
   * @param {jQuery} el  The DOM element that is the root of the widget
   */
  var Form = Widget.extend(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[344665,344976],"range":[344654,344976],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":656,"label":"lavaca_require"}');
    Widget.apply(this, arguments);
    var self = this;
    this.pendingSync = {};
    this._onChangeInput = function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[344788,344824],"range":[344776,344824],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":654,"label":"lavaca_require"}');
      self.onChangeInput(e);
    };
    this._onSubmit = function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[344859,344890],"range":[344847,344890],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":655,"label":"lavaca_require"}');
      self.onSubmit(e);
    };
    this.el.on('submit', this._onSubmit);
    this.addRule(this.defaultRules());
  }, {
    /**
     * Event handler for when the form is submitted
     * @method onSubmit
     *
     * @param {Event} e  The submit event
     */
    onSubmit: function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[345147,345277],"range":[345135,345277],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":657,"label":"lavaca_require"}');
      e.preventDefault();
      this.validate()
        .success(this.onSubmitSuccess)
        .error(this.onSubmitError);
    },
    /**
     * Event handler for when the user attempts to submit a valid form
     * @method onSubmitSuccess
     *
     * @param {Object} values  Key-value map of the form's input names and values
     */
    onSubmitSuccess: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[345518,345546],"range":[345507,345546],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":658,"label":"lavaca_require"}');
      // Placeholder
    },
    /**
     * Event handler for when the user attempts to submit an invalid form
     * @method onSubmitError
     *
     * @param {Object} invalidInputs  A key-value map of all invalid inputs
     */
    onSubmitError: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[345780,345808],"range":[345769,345808],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":659,"label":"lavaca_require"}');
      // Placeholder
    },
    /**
     * Event handler for when an input on the form changes
     * @method onChangeInput
     *
     * @param {Event} e  The change event
     */
    onChangeInput: function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[345994,346254],"range":[345982,346254],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":660,"label":"lavaca_require"}');
      if (this.model) {
        var input = $(e.target),
            name = input.attr('name'),
            value = input.val();
        this.pendingSync[name] = true;
        this.model.set(name, value);
        this.pendingSync[name] = false;
      }
    },
    /**
     * Event handler for when an attribute on the bound model changes
     * @method onChangeModel
     *
     * @param {Event} e  The change event
     */
    onChangeModel: function(e) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[346451,346550],"range":[346439,346550],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":661,"label":"lavaca_require"}');
      if (!this.pendingSync[e.attribute]) {
        this.set(e.attribute, e.value);
      }
    },
    /**
     * Binds this form to a model, forcing the two to stay in sync
     * @method bind
     *
     * @param {Lavaca.mvc.Model} model  The model being bound
     */
    bind: function(model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[346750,346905],"range":[346734,346905],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":662,"label":"lavaca_require"}');
      this.unbind();
      this.model = model;
      model.on('change', this.onChangeModel, this);
      this.el.on('change', this._onChangeInput);
    },
    /**
     * Unbinds this form from its model
     * @method unbind
     */
    unbind: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[347008,347186],"range":[346997,347186],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":663,"label":"lavaca_require"}');
      if (this.model) {
        this.el.off('change', this._onChangeInput);
        this.model.off('change', this.onchangeModel, this);
        this.model = null;
      }
    },
    /**
     * Retrieve an input from the form with a given name
     * @method input
     *
     * @param {String} name  The name of the input
     * @return {jQuery}  The input
     */
    input: function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[347401,347494],"range":[347386,347494],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":664,"label":"lavaca_require"}');
      return this.el.find('input, select, textarea').filter('[name="' + name + '"]');
    },
    /**
     * Gets the value of an input on the form
     * @method get
     *
     * @param {String} name  The name of the input
     * @return {String}  The value of the input
     */
    get: function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[347707,347751],"range":[347692,347751],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":665,"label":"lavaca_require"}');
      return this.input(name).val();
    },
    /**
     * Sets an input on the form's value
     * @method set
     *
     * @param {String} name  The name of the input
     * @param {Object} value  The new value of the input
     */
    set: function(name, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[347975,348025],"range":[347953,348025],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":666,"label":"lavaca_require"}');
      this.input(name).val(value || null);
    },
    /**
     * The default validation rules for the form
     * @method defaultRules
     *
     * @return {Object}  The form's default rules1
     */
    defaultRules: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[348207,348423],"range":[348196,348423],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":667,"label":"lavaca_require"}');
      return {
        '[required]': _required,
        '[pattern]': _pattern,
        '[type=email]': _email,
        '[type=tel]': _tel,
        '[type=number]': _number,
        '[type=url]': _url
      };
    },
    /**
     * Adds multiple validation rules to this form
     * @method addRule
     *
     * @param {Object} map  A hash of selectors and callbacks to add as rules
     */
    /**
     * Adds multiple validation rules to this form
     * @method addRule
     * @param {String} selector  A jQuery selector associated with the rule
     * @param {Function} callback  A function that tests the value of inputs matching the
     *   selector in the form callback(value, input, form) and
     *   return a string message if validation fails
     */
    addRule: function(selector, callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[349014,349295],"range":[348985,349295],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":668,"label":"lavaca_require"}');
      if (!this.rules) {
        this.rules = [];
      }
      if (typeof selector === 'object') {
        for (var n in selector) {
          this.addRule(n, selector[n]);
        }
      } else {
        this.rules.push({selector: selector, callback: callback});
      }
    },
    /**
     * Collects all input values on the form
     * @method values
     *
     * @return {Object}  A hash of input names and their values
     */
    values: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[349474,350218],"range":[349463,350218],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":669,"label":"lavaca_require"}');
      var inputs = this.el.find('input, select, textarea'),
          result = {},
          i = -1,
          input,
          name,
          current,
          value,
          type;
      while (!!(input = inputs[++i])) {
        input = $(input);
        type = input.attr('type');
        if ((type === 'radio' || type === 'checkbox') && !input[0].checked) {
          continue;
        }
        name = input.attr('name');
        current = result[name];
        value = input.val();
        if (current instanceof Array) {
          current.push(value);
        } else if (current !== undefined) {
          result[name] = [current, value];
        } else {
          result[name] = value;
        }
      }
      return result;
    },
    /**
     * Checks the entire form to see if it's in a valid state
     * @method validate
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Checks the entire form to see if it's in a valid state
     * @method validate
     * @param {Function} succcess  A callback to execute when the form is valid
     * @param {Function} error  A callback to execute when the form is invalid
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Checks the entire form to see if it's in a valid state
     * @method validate
     * @param {jQuery} input  An input to check
     * @return {Lavaca.util.Promise}  A promise
     */
    /**
     * Checks the entire form to see if it's in a valid state
     * @method validate
     * @param {Function} succcess  A callback to execute when the input is valid
     * @param {Function} error  A callback to execute when the input is invalid
     * @param {jQuery} input  An input to check
     * @return {Lavaca.util.Promise}  A promise
     */
    validate: function(success, error, input) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[351282,353047],"range":[351250,353047],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":672,"label":"lavaca_require"}');
      if (success && typeof success !== 'function') {
        input = success;
        success = null;
      }
      if (input) {
        input = $(input);
      }
      var result = null,
          promise = new Promise(this),
          i = -1,
          j,
          rule,
          inputs,
          ip,
          message,
          name,
          label,
          id,
          value;
      while (!!(rule = this.rules[++i])) {
        if (input) {
          inputs = input.filter(rule.selector);
        } else {
          inputs = this.el.find(rule.selector);
        }
        j = -1;
        while (!!(ip = inputs[++j])) {
          ip = $(ip);
          value = ip.val();
          message = rule.callback.call(this, value, ip, this);
          if (message) {
            name = ip.attr('name');
            if (!result) {
              result = {};
            }
            if (!result[name]) {
              id = ip.attr('id');
              label = null;
              if (id) {
                label = this.el.find('label[for="' + id + '"]').text();
              }
              result[name] = {
                id: id,
                name: name,
                label: label,
                el: ip,
                value: value,
                messages: []
              };
            }
            result[name].messages.push(message);
          }
        }
      }
      if (result) {
        promise.reject(result);
      } else {
        promise.resolve(this.values());
      }
      return promise
        .error(function(inputs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[352839,352903],"range":[352822,352903],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":670,"label":"lavaca_require"}');
          this.trigger('invalid', {inputs: inputs});
        })
        .success(function(values) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[352939,352991],"range":[352922,352991],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":671,"label":"lavaca_require"}');
          this.trigger('valid', values);
        })
        .success(success)
        .error(error);
    },
    /**
     * Ready the form for garbage collection
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[353157,353228],"range":[353146,353228],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":673,"label":"lavaca_require"}');
      this.unbind();
      Widget.prototype.dispose.call(this);
    }
  });
  /**
   * Extends the form with new submit handlers
   * @method withSubmit
   * @static
   *
   * @param {Function} success  The success handler
   * @param {Function} error  The error handler
   * @return {Function}  A new [@Lavaca.ui.Form]-derived type
   */
  Form.withSubmit = function(success, error) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[353543,353750],"range":[353518,353750],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":676,"label":"lavaca_require"}');
    return Form.extend({
      onSubmitSuccess: function(values) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[353610,353655],"range":[353593,353655],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":674,"label":"lavaca_require"}');
        success.call(this, values);
      },
      onSubmitError: function(inputs) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[353695,353738],"range":[353678,353738],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":675,"label":"lavaca_require"}');
        error.call(this, inputs);
      }
    });
  };

  return Form;

});

define('lavaca/ui/Widget',['require','$','lavaca/events/EventDispatcher','lavaca/util/uuid'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[353885,354692],"range":[353867,354692],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":679,"label":"lavaca_require"}');

  var $ = require('$'),
      EventDispatcher = require('lavaca/events/EventDispatcher'),
      uuid = require('lavaca/util/uuid');

  /**
   * Base type for all UI elements
   * @class lavaca.ui.Widget
   * @extends lavaca.events.EventDispatcher
   *
   * @constructor
   *
   * @param {jQuery} el  The DOM element that is the root of the widget
   */
  var Widget = EventDispatcher.extend(function(el) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[354292,354669],"range":[354279,354669],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":678,"label":"lavaca_require"}');
    EventDispatcher.call(this);
    /**
     * The DOM element that is the root of the widget
     * @property {jQuery} el
     * @default null
     */
    this.el = el = $(el);
    var id = el.attr('id');
    if (!id) {
      id = 'widget-' + uuid();
    }
    /**
     * The el's ID
     * @property {String} id
     * @default (Autogenerated)
     */
    this.id = id;
  });

  return Widget;

});

define('lavaca/ui/LoadingIndicator',['require','$','./Widget'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[354777,356364],"range":[354759,356364],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":685,"label":"lavaca_require"}');

  var $ = require('$'),
      Widget = require('./Widget');

  /**
   * Type that shows/hides a loading indicator
   * @class lavaca.ui.LoadingIndicator
   * @extends lavaca.ui.Widget
   *
   * @constructor
   * @param {jQuery} el  The DOM element that is the root of the widget
   */
  var LoadingIndicator = Widget.extend({
    /**
     * Class name applied to the root
     * @property {String} className
     * @default 'loading'
     */
    className: 'loading',
    /**
     * Activates the loading indicator
     * @method show
     */
    show: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[355344,355391],"range":[355333,355391],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":680,"label":"lavaca_require"}');
      this.el.addClass(this.className);
    },
    /**
     * Deactivates the loading indicator
     * @method hide
     */
    hide: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[355491,355541],"range":[355480,355541],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":681,"label":"lavaca_require"}');
      this.el.removeClass(this.className);
    }
  });
  /**
   * Creates a loading indicator and binds it to the document's AJAX events
   * @method init
   * @static
   */
   /** Creates a loading indicator and binds it to the document's AJAX events
   * @method init
   * @static
   * @param {Function} TLoadingIndicator  The type of loading indicator to create (should derive from [[Lavaca.ui.LoadingIndicator]])
   */
  LoadingIndicator.init = function(TLoadingIndicator) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[355970,356325],"range":[355942,356325],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":684,"label":"lavaca_require"}');
    TLoadingIndicator = TLoadingIndicator || LoadingIndicator;
    var indicator = new TLoadingIndicator(document.body);
    function show() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[356113,356144],"range":[356097,356144],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":682,"label":"lavaca_require"}');
      indicator.show();
    }
    function hide() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[356165,356196],"range":[356149,356196],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":683,"label":"lavaca_require"}');
      indicator.hide();
    }
    $(document)
      .on('ajaxStart', show)
      .on('ajaxStop', hide)
      .on('ajaxError', hide);
    return indicator;
  };

  return LoadingIndicator.init();

});


define('lavaca/ui/Template',['require','lavaca/util/Cache','lavaca/util/Map'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[356465,360165],"range":[356447,360165],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":695,"label":"lavaca_require"}');

  var Cache = require('lavaca/util/Cache'),
      Map = require('lavaca/util/Map');

  var _cache = new Cache(),
      _types = [];

  /**
   * Abstract type for templates
   * @class lavaca.ui.Template
   * @extends lavaca.util.Map
   */
  var Template = Map.extend({
    /**
     * Compiles the template
     * @method compile
     */
    compile: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[356829,356856],"range":[356818,356856],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":686,"label":"lavaca_require"}');
      // Do nothing
    },
    /**
     * Renders the template to a string
     * @method render
     *
     * @param {Object} model  The data model to provide to the template
     * @return {Lavaca.util.Promise}  A promise
     */
    render: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[357086,357117],"range":[357075,357117],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":687,"label":"lavaca_require"}');
      throw 'Abstract';
    },
    /**
     * Parses server data to include in this lookup
     * @method process
     *
     * @param {String} text  The server data string
     */
    process: function(text) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[357297,357328],"range":[357282,357328],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":688,"label":"lavaca_require"}');
      this.code = text;
    }
  });
  /**
   * Finds the template with a given name
   * @method get
   * @static
   *
   * @param {String} name  The name of the template
   * @return {Lavaca.ui.Template}  The template (or null if no such template exists)
   */
  Template.get = function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[357593,357627],"range":[357578,357627],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":689,"label":"lavaca_require"}');
    return _cache.get(name);
  };
  /**
   * Scans the document for all templates with registered types and
   *   prepares template objects from them
   * @method init
   * @static
   */
   /**
   *
   * Scans the document for all templates with registered types and
   *   prepares template objects from them
   * @method init
   * @static
   * @param {jQuery} scope  The element to which to limit the scan
   */
  Template.init = function(scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[358044,358758],"range":[358028,358758],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":691,"label":"lavaca_require"}');
    var i = -1,
        type, templates, templateName, template;

    while (!!(type = _types[++i])) {
      var construct = function(name, src, code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[358197,358251],"range":[358171,358251],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":690,"label":"lavaca_require"}');
        return new type.js(name, src, code);
      };

      // Load pre-compiled templates
      if (typeof type.js.getCompiledTemplates === "function") {
        templates = type.js.getCompiledTemplates();
        for (templateName in templates) {
          template = construct(templateName, null, templates[templateName]);
          template.compiled = true;
          _cache.set(templateName, template);
        }
      }

      // Load un-compiled templates
      if (type.mime) {
        Map.init(_cache, type.mime, construct, scope);
      }
    }
  };
  /**
   * Disposes of all templates
   * @method dispose
   * @static
   */
  Template.dispose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[358869,358899],"range":[358858,358899],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":692,"label":"lavaca_require"}');
    Map.dispose(_cache);
  };
  /**
   * Finds the named template and renders it to a string
   * @method render
   * @static
   *
   * @param {String} name  The name of the template
   * @param {Object} model  The data model to provide to the template
   * @return {Lavaca.util.Promise}  A promise
   */
  Template.render = function(name, model) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[359218,359387],"range":[359196,359387],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":693,"label":"lavaca_require"}');
    var template = Template.get(name);
    if (!template) {
      throw 'No template named "' + name + '"';
    } else {
      return template.render(model);
    }
  };
  /**
   * Registers a type of template to look for on intilization.
   * @method register
   * @static
   * @param {String} mimeType  The mime-type associated with the template
   * @param {Function} TTemplate  The JavaScript type used for the template (should derive from [[Lavaca.ui.Template]])
   */
   /**
   * Registers a type of template to look for on intilization.
   * @method register
   * @static
   * @param {Function} TTemplate  The JavaScript type used for the template (should derive from [[Lavaca.ui.Template]])
   */
  Template.register = function(mimeType, TTemplate) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[359976,360141],"range":[359946,360141],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":694,"label":"lavaca_require"}');
    if (typeof mimeType === "function") {
      TTemplate = mimeType;
      mimeType = null;
    }
    _types[_types.length] = {mime: mimeType, js: TTemplate};
  };

  return Template;

});

define('lavaca/util/ArrayUtils',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[360215,362503],"range":[360204,362503],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":701,"label":"lavaca_require"}');

  /**
   * Utility class for working with arrays
   * @class lavaca.util.ArrayUtils
   */
  var ArrayUtils = {};

  /**
   * Gets the first index of an item in an array
   * @method indexOf
   * @static
   *
   * @param {Array} a  The array
   * @param {Object} o  The object to look for
   * @return {Number}  The first index of the object, or -1 if not found
   */
  ArrayUtils.indexOf = function(a, o) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[360623,360864],"range":[360608,360864],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":696,"label":"lavaca_require"}');
    if (!a) {
      return -1;
    } else if (a.indexOf) {
      return a.indexOf(o);
    } else {
      for (var i = 0, j = a.length; i < j; i++) {
        if (a[i] === o) {
          return i;
        }
      }
      return -1;
    }
  };

  /**
   * Determines whether an array contains an object
   * @method contains
   * @static
   *
   * @param {Array} a  The array
   * @param {Object} o  The object to look for
   * @return {Boolean}  True when the array contains the object, false otherwise
   */
  ArrayUtils.contains = function(a, o) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[361171,361218],"range":[361156,361218],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":697,"label":"lavaca_require"}');
    return ArrayUtils.indexOf(a, o) > -1;
  };

  /**
   * Removes the first instance of an item from an array, if it exists
   * @method remove
   * @static
   *
   * @param {Array} a  The array
   * @param {Object} o  The object to remove
   * @return {Number}  The former index of the item (or -1 if the item was not
   *   in the array)
   */
  ArrayUtils.remove = function(a, o) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[361557,361676],"range":[361542,361676],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":698,"label":"lavaca_require"}');
    var index = ArrayUtils.indexOf(a, o);
    if (index > -1) {
      a.splice(index, 1);
    }
    return index;
  };

  /**
   * Adds an item to the end of an array, if it was not already in the array
   * @method pushIfNotExists
   * @static
   *
   * @param {Array} a  The array
   * @param {Object} o  The object to add to the array
   * @return {Number}  The index of the item in the array
   */
  ArrayUtils.pushIfNotExists = function(a, o) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[362007,362133],"range":[361992,362133],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":699,"label":"lavaca_require"}');
    var index = ArrayUtils.indexOf(a, o);
    if (index === -1) {
      a[index = a.length] = o;
    }
    return index;
  };
  /**
   * Determines if object is an array
   * @method isArray
   * @static
   *
   * @param {Object} a  Any value of any type
   * @return {Boolean}  True if a is a true array
   */
  ArrayUtils.isArray = function(a) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[362355,362477],"range":[362343,362477],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":700,"label":"lavaca_require"}');
    return Array.isArray === 'function' ? Array.isArray(a) : Object.prototype.toString.call(a) === '[object Array]';
  };

  return ArrayUtils;

});

define('lavaca/util/Cache',['require','lavaca/util/Disposable','lavaca/util/uuid'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[362608,367016],"range":[362590,367016],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":717,"label":"lavaca_require"}');

  var Disposable = require('lavaca/util/Disposable'),
      uuid = require('lavaca/util/uuid');

  /**
   * Object for storing data
   * @class lavaca.util.Cache
   * @extends lavaca.util.Disposable
   */
  var Cache = Disposable.extend({
    /**
     *
     * Retrieves an item from the cache
     * @method get
     * @param {String} id  The key under which the item is stored
     * @return {Object}  The stored item (or null if no item is stored)
     */
     /**
     * Retrieves an item from the cache
     * @method get
     * @param {String} id  The key under which the item is stored
     * @param {Object} def  A default value that will be added, if there is no item stored
     * @return {Object}  The stored item (or null if no item is stored and no default)
     */
    get: function(id, def) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[363417,363612],"range":[363399,363612],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":702,"label":"lavaca_require"}');
      var result = this['@' + id];
      if (result === undefined && def !== undefined) {
        result = this['@' + id] = def;
      }
      return result === undefined ? null : result;
    },
    /**
     * Assigns an item to a key in the cache
     * @method set
     *
     * @param {String} id  The key under which the item will be stored
     * @param {Object} value  The object to store in the cache
     */
    set: function(id, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[363864,363901],"range":[363844,363901],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":703,"label":"lavaca_require"}');
      this['@' + id] = value;
    },
    /**
     * Adds an item to the cache
     * @method add
     *
     * @param {Object} value  The object to store in the cache
     * @return {String}  The auto-generated ID under which the value was stored
     */
    add: function(value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[364146,364220],"range":[364130,364220],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":704,"label":"lavaca_require"}');
      var id = uuid();
      this.set(id, value);
      return id;
    },
    /**
     * Removes an item from the cache (if it exists)
     * @method remove
     *
     * @param {String} id  The key under which the item is stored
     */
    remove: function(id) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[364411,364447],"range":[364398,364447],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":705,"label":"lavaca_require"}');
      delete this['@' + id];
    },
    /**
     * Executes a callback for each cached item. To stop iteration immediately,
     * return false from the callback.
     * @method each
     * @param {Function} callback  A function to execute for each item, callback(key, item)
     */
     /**
     * Executes a callback for each cached item. To stop iteration immediately,
     * return false from the callback.
     * @method each
     * @param {Function} callback  A function to execute for each item, callback(key, item)
     * @param {Object} thisp  The context of the callback
     */
    each: function(cb, thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[365032,365317],"range":[365012,365317],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":706,"label":"lavaca_require"}');
      var prop, returned;
      for (prop in this) {
        if (this.hasOwnProperty(prop) && prop.indexOf('@') === 0) {
          returned = cb.call(thisp || this, prop.slice(1), this[prop]);
          if (returned === false) {
            break;
          }
        }
      }
    },
    /**
     * Serializes the cache to a hash
     * @method toObject
     *
     * @return {Object}  The resulting key-value hash
     */
    toObject: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[365483,365683],"range":[365472,365683],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":708,"label":"lavaca_require"}');
      var result = {};
      this.each(function(prop, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[365546,365654],"range":[365524,365654],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":707,"label":"lavaca_require"}');
        result[prop] = (value && typeof value.toObject === 'function') ? value.toObject() : value;
      });
      return result;
    },
    /**
     * Serializes the cache to JSON
     * @method toJSON
     *
     * @return {String}  The JSON string
     */
    toJSON: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[365830,365883],"range":[365819,365883],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":709,"label":"lavaca_require"}');
      return JSON.stringify(this.toObject());
    },
     /**
     * Serializes the cache to an array
     * @method toArray
     *
     * @return {Object}  The resulting array with elements being index based and keys stored in an array on the 'ids' property
     */
    toArray: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[366123,366375],"range":[366112,366375],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":711,"label":"lavaca_require"}');
      var results = [];
      results['ids'] = [];
      this.each(function(prop, value) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[366214,366345],"range":[366192,366345],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":710,"label":"lavaca_require"}');
        results.push(typeof value.toObject === 'function' ? value.toObject() : value);
        results['ids'].push(prop);
      });
      return results;
    },

    /**
     * removes all items from the cache
     * @method clear
     */
    clear: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[366477,366567],"range":[366466,366567],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":713,"label":"lavaca_require"}');
       this.each(function(key, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[366516,366553],"range":[366496,366553],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":712,"label":"lavaca_require"}');
         this.remove(key);
       }, this);
    },

    /**
     * returns number of items in cache
     * @method count
     */
    count: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[366669,366788],"range":[366658,366788],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":715,"label":"lavaca_require"}');
      var count = 0;
      this.each(function(key, item) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[366728,366754],"range":[366708,366754],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":714,"label":"lavaca_require"}');
        count++;
      }, this);
      return count;
    },

    /**
     * Clears all items from the cache on dispose
     * @method dispose
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[366904,366990],"range":[366893,366990],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":716,"label":"lavaca_require"}');
      this.clear();
      Disposable.prototype.dispose.apply(this, arguments);
    }
  });

  return Cache;

});

define('lavaca/util/extend',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[367062,369173],"range":[367051,369173],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":723,"label":"lavaca_require"}');
  /**
   * Establishes inheritance between types. After a type is extended, it receives its own static
   * convenience method, extend(TSub, overrides).
   * @class lavaca.util.extend
   */
   /**
   * Establishes inheritance between types. After a type is extended, it receives its own static
   * convenience method, extend(TSub, overrides).
   * @method extend
   * @static
   *
   */
   /**
   * Establishes inheritance between types. After a type is extended, it receives its own static
   * convenience method, extend(TSub, overrides).
   * @method extend
   * @static
   * @param {Function} TSub  The child type which will inherit from superType
   * @param {Object} overrides  A hash of key-value pairs that will be added to the subType
   * @return {Function}  The subtype
   *
   */
   /**
   * Establishes inheritance between types. After a type is extended, it receives its own static
   * convenience method, extend(TSub, overrides).
   * @method extend
   * @static
   * @param {Function} TSuper  The base type to extend
   * @param {Function} TSub  The child type which will inherit from superType
   * @param {Object} overrides  A hash of key-value pairs that will be added to the subType
   * @return {Function}  The subtype
   */
  var extend = function(TSuper, TSub, overrides) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[368361,369151],"range":[368327,369151],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":722,"label":"lavaca_require"}');
    if (typeof TSuper === 'object') {
      overrides = TSuper;
      TSuper = Object;
      TSub = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[368474,368500],"range":[368463,368500],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":718,"label":"lavaca_require"}');
        // Empty
      };
    } else if (typeof TSub === 'object') {
      overrides = TSub;
      TSub = TSuper;
      TSuper = Object;
    }
    function ctor() {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[368639,368661],"range":[368623,368661],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":719,"label":"lavaca_require"}');
      // Empty
    }
    ctor.prototype = TSuper.prototype;
    TSub.prototype = new ctor;
    TSub.prototype.constructor = TSub;
    if (overrides) {
      for (var name in overrides) {
        TSub.prototype[name] = overrides[name];
      }
    }
    TSub.extend = function(T, overrides) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[368931,369129],"range":[368908,369129],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":721,"label":"lavaca_require"}');
      if (typeof T === 'object') {
        overrides = T;
        T = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[369014,369064],"range":[369003,369064],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":720,"label":"lavaca_require"}');
          TSub.apply(this, arguments);
        };
      }
      extend(TSub, T, overrides);
      return T;
    };
    return TSub;
  };

  return extend;

});

define('lavaca/util/Disposable',['require','./extend'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[369250,370249],"range":[369232,370249],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":726,"label":"lavaca_require"}');

  var extend = require('./extend');

  function _disposeOf(obj) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[369317,369899],"range":[369292,369899],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":724,"label":"lavaca_require"}');
    var n,
        o,
        i;
    for (n in obj) {
      if (obj.hasOwnProperty(n)) {
        o = obj[n];
          if (o) {
            if (typeof o === 'object' && typeof o.dispose === 'function') {
              o.dispose();
            } else if (o instanceof Array) {
              for (i = o.length - 1; i > -1; i--) {
                  if (o[i] && typeof o[i].dispose === 'function') {
                    o[i].dispose();
                  } else {
                    _disposeOf(o[i]);
                  }
                }
            }
          }
        }
    }
  }

  /**
   * Abstract type for types that need to ready themselves for GC
   * @class lavaca.util.Disposable
   * @constructor
   *
   */
  var Disposable = extend({
    /**
     * Readies the object to be garbage collected
     * @method dispose
     *
     */
    dispose: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[370185,370218],"range":[370174,370218],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":725,"label":"lavaca_require"}');
        _disposeOf(this);
    }
  });

  return Disposable;

});
define('lavaca/util/Map',['require','$','./Cache','./Disposable','lavaca/net/Connectivity'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[370362,375803],"range":[370344,375803],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":740,"label":"lavaca_require"}');

  var $ = require('$'),
      Cache = require('./Cache'),
      Disposable = require('./Disposable'),
      Connectivity = require('lavaca/net/Connectivity');

  function _absolute(url) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[370551,370954],"range":[370527,370954],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":727,"label":"lavaca_require"}');
    if (url && url.indexOf('http') !== 0) {
      if (url.charAt(0) === '/') {
        url = location.protocol + '//'
          + location.hostname
          + (location.port ? ':' + location.port : '')
          + (url.indexOf('/') === 0 ? url : '/' + url);
      } else {
        url = location.toString().split('#')[0].split('?')[0].replace(/\w+\.\w+$/, '') + url;
      }
    }
    return url;
  }

  /**
   * Abstract type for lookup tables
   * @class lavaca.util.Map
   * @extends lavaca.util.Disposable
   *
   * @constructor
   * @param {String} name  The name of the map
   * @param {String} src  The URL of the map's data (or null if code is supplied)
   * @param {String} code  The raw string data for the map (or null if src is supplied)
   */
  var Map = Disposable.extend(function(name, src, code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[371366,372096],"range":[371340,372096],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":728,"label":"lavaca_require"}');
    Disposable.call(this);
    /**
     * Whether or not the map has loaded
     * @property {Boolean} hasLoaded
     * @default false
     */
    this.hasLoaded = false;
    /**
     * The name of the map
     * @property {String} name
     * @default null
     */
    this.name = name;
    /**
     * The source URL for the map
     * @property {String} src
     * @default null
     */
    this.src = _absolute(src);
    /**
     * The raw string data for the map
     * @property {String} code
     * @default null
     */
    this.code = code;
    /**
     * The cache in which this map stores data
     * @property {Lavaca.util.Cache} cache
     * @default new Lavaca.util.Cache()
     */
    this.cache = new Cache();
  }, {
    /**
     * Determines whether or not this is the desired lookup
     * @method is
     *
     * @param {String} name  The name of the lookup
     * @return {Boolean}  True if this is the lookup
     */
    is: function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[372329,372369],"range":[372314,372369],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":729,"label":"lavaca_require"}');
      return this.name === name;
    },
    /**
     * Gets the value stored under a code
     * @method get
     *
     * @param {String} code  The code
     * @return {Object}  The value (or null)
     */
    get: function(code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[372562,372800],"range":[372547,372800],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":730,"label":"lavaca_require"}');
      if (!this.hasLoaded) {
        if (this.code) {
          this.add(this.code);
        } else if (this.src) {
          this.load(this.src);
        }
        this.hasLoaded = true;
      }
      return this.cache.get(code);
    },
    /**
     * Adds parameters to this map
     * @method add
     *
     * @param {Object} data  The parameters to add
     */
    add: function(data) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[372954,373033],"range":[372939,373033],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":731,"label":"lavaca_require"}');
      for (var n in data) {
        this.cache.set(n, data[n]);
      }
    },
    /**
     * Processes server data to include in this lookup
     * @method process
     *
     * @param {String} text  The server data string
     */
    process: function(text) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[373216,373291],"range":[373201,373291],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":732,"label":"lavaca_require"}');
      this.add(typeof text === 'string' ? JSON.parse(text) : text);
    },
    /**
     * Adds JSON data to this map (synchronous)
     * @method load
     *
     * @param {String} url  The URL of the data
     */
    load: function(url) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[373456,373636],"range":[373442,373636],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":734,"label":"lavaca_require"}');
      var self = this;
      Connectivity.ajax({
        async: false,
        url: url,
        success: function(resp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[373579,373620],"range":[373564,373620],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":733,"label":"lavaca_require"}');
          self.process(resp);
        }
      });
    }
  });
  /**
   * Sets the application's default config
   * @method setDefault
   * @static
   *
   * @param {Lavaca.util.Cache} cache  The map cache
   * @param {String} name  The name of the config
   */
  Map.setDefault = function(cache, name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[373884,374010],"range":[373862,374010],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":735,"label":"lavaca_require"}');
    var map = name;
    if (typeof map === 'string') {
      map = cache.get(name);
    }
    cache.set('default', map);
  };
  /**
   * Finds the most appropriate value for a code
   * @method get
   * @static
   *
   * @param {Lavaca.util.Cache} cache  The maps cache
   * @param {String} name  The name of the map
   * @param {String} code  The name of the parameter
   * @param {String} defaultName  The name of the default map
   * @return {Object}  The value of the parameter
   */
  Map.get = function(cache, name, code, defaultName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[374427,374627],"range":[374386,374627],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":736,"label":"lavaca_require"}');
    if (!code) {
      code = name;
      name = defaultName;
    }
    if (name) {
      var map = cache.get(name);
      if (map) {
        return map.get(code);
      }
    }
    return null;
  };
  /**
   * Scans the document for all maps and prepares them
   * @method init
   * @static
   *
   * @param {Lavaca.util.Cache} cache  The map cache
   * @param {String} mimeType  The MIME type of the scripts
   * @param {Function} construct  A function that returns a new map, in
   *   the form construct(name, src, code)
   * @param {jQuery} scope  The element to which to limit the scan
   */
  Map.init = function(cache, mimeType, construct, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[375084,375594],"range":[375040,375594],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":738,"label":"lavaca_require"}');
    $(scope || document.documentElement)
      .find('script[type="' + mimeType + '"]')
      .each(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[375197,375588],"range":[375186,375588],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":737,"label":"lavaca_require"}');
        var item = $(this),
            src = item.attr('data-src'),
            name = item.attr('data-name'),
            isDefault = typeof item.attr('data-default') === 'string',
            code = item.text(),
            map;
        map = construct(name, src, code);
        cache.set(map.name, map);
        if (isDefault) {
          Map.setDefault(cache, name);
        }
      });
  };
  /**
   * Disposes of all maps
   * @method dispose
   * @static
   *
   * @param {Lavaca.util.Cache} cache  The map cache
   */
  Map.dispose = function(cache) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[375758,375784],"range":[375742,375784],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":739,"label":"lavaca_require"}');
    cache.dispose();
  };

  return Map;

});

define('lavaca/util/Config',['require','./Cache','./Map'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[375883,377873],"range":[375865,377873],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":747,"label":"lavaca_require"}');

  var Cache = require('./Cache'),
      Map = require('./Map');

  var _cache = new Cache();

  function _construct(name, src, code) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[376019,376117],"range":[375982,376117],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":741,"label":"lavaca_require"}');
    if (code) {
      code = JSON.parse(code);
    }
    return new Config(name, src, code);
  }

  /**
   * Configuration management type
   * @class lavaca.util.Config
   * @extends lavaca.util.Map
   */
  var Config = Map.extend({
    // Empty (no overrides)
  });
  /**
   * Sets the application's default config
   * @method setDefault
   * @static
   *
   * @param {String} name  The name of the default config
   */
  Config.setDefault = function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[376481,376520],"range":[376466,376520],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":742,"label":"lavaca_require"}');
    Map.setDefault(_cache, name);
  };
  /**
   * Gets the application's current config environment name
   * @method currentEnvironment
   * @static
   *
   * @return {String} The name of the current environment
   */
  Config.currentEnvironment = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[376743,376787],"range":[376732,376787],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":743,"label":"lavaca_require"}');
    return _cache.get('default').name;
  };
  /**
   * Retrieves a value from the configuration
   * @method get
   * @static
   * @param {String} code  The name of the parameter
   * @return {Object}  The value of the parameter
   */
   /**
   * Retrieves a value from the configuration
   * @method get
   * @static
   * @param {String} name  The name of the config
   * @param {String} code  The name of the parameter
   * @return {Object}  The value of the parameter
   */
  Config.get = function(name, code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[377258,377314],"range":[377237,377314],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":744,"label":"lavaca_require"}');
    return Map.get(_cache, name, code, 'default');
  };
  /**
   * Scans the document for all translations and prepares them
   * @method init
   * @static
   */
   /**
   * Scans the document for all translations and prepares them
   * @method init
   * @static
   * @param {jQuery} scope  The element to which to limit the scan
   */
  Config.init = function(scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[377628,377691],"range":[377612,377691],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":745,"label":"lavaca_require"}');
    Map.init(_cache, 'text/x-config', _construct, scope);
  };
  /**
   * Disposes of all translations
   * @method dispose
   * @static
   */
  Config.dispose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[377803,377833],"range":[377792,377833],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":746,"label":"lavaca_require"}');
    Map.dispose(_cache);
  };

  Config.init();

  return Config;

});

define('lavaca/util/Translation',['require','./Cache','./Map'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[377958,382570],"range":[377940,382570],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":756,"label":"lavaca_require"}');

  var Cache = require('./Cache'),
      Map = require('./Map');

  var _cache = new Cache();

  function _construct(name, src, code) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[378094,378296],"range":[378057,378296],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":748,"label":"lavaca_require"}');
    if (code) {
      code = JSON.parse(code);
    }
    var map = new Translation(name, src, code);
    if (!_cache.get(map.language)) {
      _cache.set(map.language, map);
    }
    return map;
  }

  /**
   * Translation dictionary
   * @class lavaca.util.Translation
   * @extends lavaca.util.Map
   *
   * @constructor
   * @param {String} name  The name of the map
   * @param {String} src  The URL of the map's data (or null if code is supplied)
   * @param {String} code  The raw string data for the map (or null if src is supplied)
   */
  var Translation = Map.extend(function(name) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[378690,379332],"range":[378675,379332],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":749,"label":"lavaca_require"}');
    Map.apply(this, arguments);
    var locale = name.toLowerCase().split('_');
    /**
     * The ISO 639-2 code for the translation's language
     * @property {String} language
     * @default null
     */
    this.language = locale[0];
    /**
     * The ISO 3166-1 code for the translation's country
     * @property {String} country
     * @default ''
     */
    this.country = locale[1] || '';
    /**
     * The locale of this translation (either lang or lang_COUNTRY)
     * @property {String} locale
     * @default null
     */
    this.locale = this.country
      ? this.language + '_' + this.country
      : this.language;
  }, {
    /**
     * Determines whether or not this translation works for a locale
     * @method is
     * @param {String} language  The locale's language
     * @return {Boolean}  True if this translation applies
     */
    /**
     * Determines whether or not this translation works for a locale
     * @method is
     * @param {String} language  The locale's language
     * @param {String} country   (Optional) The locale's country
     * @return {Boolean}  True if this translation applies
     */
    is: function(language, country) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[379871,379986],"range":[379843,379986],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":750,"label":"lavaca_require"}');
      return language === this.language
        && (!country || !this.country || country === this.country);
    }
  });
  /**
   * Sets the application's default locale
   * @method setDefault
   * @static
   *
   * @param {String} locale  A locale string (ie, "en", "en_US", or "es_MX")
   */
  Translation.setDefault = function(locale) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[380211,380305],"range":[380194,380305],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":751,"label":"lavaca_require"}');
    _cache.remove('default');
    Map.setDefault(_cache, Translation.forLocale(locale));
  };
  /**
   * Finds the most appropriate translation for a given locale
   * @method forLocale
   * @static
   *
   * @param {String} locale  The locale
   * @return {Lavaca.util.Translation}  The translation
   */
  Translation.forLocale = function(locale) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[380562,380721],"range":[380545,380721],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":752,"label":"lavaca_require"}');
    locale = (locale || 'default').toLowerCase();
    return _cache.get(locale)
      || _cache.get(locale.split('_')[0])
      || _cache.get('default');
  };
  /**
   * Finds the most appropriate translation of a message for the default locale
   * @method get
   * @static
   * @param {String} code  The code under which the message is stored
   * @return {Lavaca.util.Translation}  The translation
   */
  /**
   * Finds the most appropriate translation of a message for the default locale
   * @method get
   * @static
   * @param {String} locale  The locale
   * @param {String} code  The code under which the message is stored
   * @return {Lavaca.util.Translation}  The translation
   */
  Translation.get = function(locale, code) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[381302,381870],"range":[381279,381870],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":753,"label":"lavaca_require"}');
    if (!code) {
      code = locale;
      locale = 'default';
    }
    var translation = Translation.forLocale(locale),
        result = null;
    if (translation) {
      result = translation.get(code);
    }
    if (result === null) {
      translation = Translation.forLocale(locale.split('_')[0]);
      if (translation) {
        result = translation.get(code);
      }
    }
    if (result === null) {
      translation = Translation.forLocale('default');
      if (translation) {
        result = translation.get(code);
      }
    }
    return result;
  };
  /**
   * Scans the document for all translations and prepares them
   * @method init
   * @static
   * @param {String} locale  The default locale
   */
  /**
   * Scans the document for all translations and prepares them
   * @method init
   * @static
   * @param {String} locale  The default locale
   * @param {jQuery} scope  The element to which to limit the scan
   */
  Translation.init = function(locale, scope) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[382292,382396],"range":[382268,382396],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":754,"label":"lavaca_require"}');
    Map.init(_cache, 'text/x-translation', _construct, scope);
    Translation.setDefault(locale);
  };
  /**
   * Disposes of all translations
   * @method dispose
   * @static
   */
  Translation.dispose = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[382513,382543],"range":[382502,382543],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":755,"label":"lavaca_require"}');
    Map.dispose(_cache);
  };

  return Translation;

});

define('lavaca/util/DateUtils',['require','./Translation'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[382651,398604],"range":[382633,398604],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":821,"label":"lavaca_require"}');

  var Translation = require('./Translation');

  /**
   * Utility class for working with dates
   * @class lavaca.util.DateUtils
   */
  var DateUtils = {};

  function _int(input) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[382835,382872],"range":[382814,382872],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":757,"label":"lavaca_require"}');
    return parseInt(input, 10);
  }

  function _indexOfCode(input, array) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[382912,383179],"range":[382876,383179],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":758,"label":"lavaca_require"}');
    input = input.toLowerCase();
    var i = -1,
        code;
    while (!!(code = array[++i])) {
      if (input === code.toLowerCase() || input === _translate(code).toLowerCase()) {
        return i - 1;
      }
    }
    throw 'Invalid code "' + code + '"';
  }

  function _pad(n, digits, c) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[383211,383379],"range":[383183,383379],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":759,"label":"lavaca_require"}');
    var sign = n < 0 ? '-' : '';
    c = c || '0';
    n = Math.abs(n).toString();
    while (digits - n.length > 0) {
      n = c + n;
    }
    return sign + n;
  }

  function _translate(s) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[383406,383442],"range":[383383,383442],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":760,"label":"lavaca_require"}');
    return Translation.get(s);
  }

  /**
   * The time of day abbreviation. You can supply [[Lavaca.util.Translation]] values using these names as keys to translate.
   * @property {Array} timeOfDayDesignatorAbbr
   * @static
   * @default ["A", "P"]*/
  DateUtils.timeOfDayDesignatorAbbr = [
    'A',
    'P'
  ];

  /**
   * The time of day. You can supply [[Lavaca.util.Translation]] values using these names as keys to translate.
   * @property {Array} timeOfDayDesignator
   * @static
   * @default ["AM", "PM"]
   */
  DateUtils.timeOfDayDesignator = [
    'AM',
    'PM'
  ];

  /**
   * The abbreviated days of the week. You can supply [[Lavaca.util.Translation]] values using these names as keys to translate.
   * @property {Array} daysOfWeekAbbr
   * @static
   * @default ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
   * */
  DateUtils.daysOfWeekAbbr = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  /**
   * The days of the week. You can supply [[Lavaca.util.Translation]] values using these names as keys to translate.
   * @property {Array} daysOfWeek
   * @static
   * @default ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   */
  DateUtils.daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  /**
   * The abbreviated months. You can supply [[Lavaca.util.Translation]] values using these names as keys to translate.
   * @property {Array} monthsAbbr
   * @static
   * @default ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   */
  DateUtils.monthsAbbr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  /**
   * The months. You can supply [[Lavaca.util.Translation]] values using these names as keys to translate.
   * @property {Array} months
   * @static
   * @default ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   */
  DateUtils.months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  /**
   * Object containing the functions used by each date format code. Default format codes are:
   *
   * <dl>
   * <dt>d</dt> <dd>Day of month (1 - 31)</dd>
   * <dt>dd</dt> <dd>Padded day of month (01 - 31)</dd>
   * <dt>ddd</dt> <dd>Abbreviated day of week (Sun - Sat)</dd>
   * <dt>ddd</dt> <dd>Full day of week (Sunday - Saturday)</dd>
   * <dt>f</dt> <dd>Tenth of a second</dd>
   * <dt>ff</dt> <dd>Hundreth of a second</dd>
   * <dt>fff</dt> <dd>Milliseconds</dd>
   * <dt>h</dt> <dd>Twelve-hour clock hour (1 - 12)</dd>
   * <dt>hh</dt> <dd>Padded twelve-hour clock hour (01 - 12)</dd>
   * <dt>H</dt> <dd>Twenty-four hour clock hour (0 - 23)</dd>
   * <dt>HH</dt> <dd>Padded twenty-four hour clock hour (00 - 23)</dd>
   * <dt>m</dt> <dd>Minute (0 - 59)</dd>
   * <dt>mm</dt> <dd>Padded minute (00 - 59)</dd>
   * <dt>M</dt> <dd>Month (1 - 12)</dd>
   * <dt>MM</dt> <dd>Padded month (01 - 12)</dd>
   * <dt>MMM</dt> <dd>Abbreviated month (Jan - Dec)</dd>
   * <dt>MMMM</dt> <dd>Full month (January - December)</dd>
   * <dt>s</dt> <dd>Second (0 - 59)</dd>
   * <dt>ss</dt> <dd>Padded second (00 - 59)</dd>
   * <dt>t</dt> <dd>Abbreviated AM/PM designator (A or P)</dd>
   * <dt>tt</dt> <dd>Full AM/PM designator (AM or PM)</dd>
   * <dt>y</dt> <dd>Short year (0 - 99)</dd>
   * <dt>yy</dt> <dd>Padded short year (00 - 99)</dd>
   * <dt>yyy</dt> <dd>Full year padded to at least 3 digits (000+)</dd>
   * <dt>yyyy</dt> <dd>Full year padded to at least 4 digits (0000+)</dd>
   * <dt>z</dt> <dd>Hours offset from UTC (-12, 0, 12)</dd>
   * <dt>zz</dt> <dd>Padded hours offset from UTC (-12, 00, 12)</dd>
   * <dt>zzz</dt> <dd>Padded hours and minute offset from UTC (-12:00, 00:00, 12:00)</dd>
   * </dl>
   *
   * To add a custom format code, assign this property an object containing an <code>i</code> function (responsible for parsing)
   * and an <code>o</code> function (responsible for stringifying). The <code>i</code> function
   * should assign to one of the following properties of its second argument: date, month, year,
   * hour, minute, second, ms, or offset. Example: <code>Lavaca.util.DateUtils.fn.QQQ = {i: function(input, dateObj, mappedObj) { dateObj.date = parseInt(input, 10); }, o: function(date, utc) { return (utc ? date.getUTCDate() : date.getDate()).toString(); }};</code>
   *
   * @property {Object} fn
   * @static
   */
  DateUtils.fn = {
    d: {
      exp: '\\d{1,2}',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[388155,388200],"range":[388130,388200],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":761,"label":"lavaca_require"}');
        dateObj.date = _int(input);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[388231,388310],"range":[388211,388310],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":762,"label":"lavaca_require"}');
        return (utc ? date.getUTCDate() : date.getDate()).toString();
      }
    },
    dd: {
      exp: '\\d{2}',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[388383,388428],"range":[388358,388428],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":763,"label":"lavaca_require"}');
        dateObj.date = _int(input);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[388459,388521],"range":[388439,388521],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":764,"label":"lavaca_require"}');
        return _pad(DateUtils.fn.d.o(date, utc), 2);
      }
    },
    ddd: {
      exp: '[a-z]{3}',
      i: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[388583,388614],"range":[388572,388614],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":765,"label":"lavaca_require"}');
        // Do nothing
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[388645,388747],"range":[388625,388747],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":766,"label":"lavaca_require"}');
        return _translate(DateUtils.daysOfWeekAbbr[utc ? date.getUTCDay() : date.getDay()]);
      }
    },
    dddd: {
      exp: '[a-z]+',
      i: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[388808,388839],"range":[388797,388839],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":767,"label":"lavaca_require"}');
        // Do nothing
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[388870,388968],"range":[388850,388968],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":768,"label":"lavaca_require"}');
        return _translate(DateUtils.daysOfWeek[utc ? date.getUTCDay() : date.getDay()]);
      }
    },
    f: {
      exp: '\\d',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[389037,389086],"range":[389012,389086],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":769,"label":"lavaca_require"}');
        dateObj.ms = _int(input) * 100;
      },
      o: function(date, utc, divisor) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[389126,389303],"range":[389097,389303],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":770,"label":"lavaca_require"}');
        divisor = divisor || 100;
        return _pad(Math.floor((utc ? date.getUTCMilliseconds() : date.getMilliseconds()) / divisor), 3 - divisor.toString().length);
      }
    },
    ff: {
      exp: '\\d{2}',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[389376,389424],"range":[389351,389424],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":771,"label":"lavaca_require"}');
        dateObj.ms = _int(input) * 10;
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[389455,389521],"range":[389435,389521],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":772,"label":"lavaca_require"}');
        return _pad(DateUtils.fn.f.o(date, utc, 10), 2);
      }
    },
    fff: {
      exp: '\\d{3}',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[389595,389642],"range":[389570,389642],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":773,"label":"lavaca_require"}');
        dateObj.ms = _int(input, 10);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[389673,389738],"range":[389653,389738],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":774,"label":"lavaca_require"}');
        return _pad(DateUtils.fn.f.o(date, utc, 1), 3);
      }
    },
    h: {
      exp: '1?\\d',
      i: function(input, dateObj, mappedObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[389820,389978],"range":[389784,389978],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":775,"label":"lavaca_require"}');
        var h = _int(input) - 1,
            tod = (mappedObj.t || mappedObj.tt || 'A').indexOf('A') === 0 ? 0 : 12;
        dateObj.hour = h + tod;
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[390009,390101],"range":[389989,390101],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":776,"label":"lavaca_require"}');
        return ((utc ? date.getUTCHours() : date.getHours()) % 12 + 1).toString();
      }
    },
    hh: {
      exp: '[0-1]\\d',
      i: function(input, dateObj, mappedObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[390187,390249],"range":[390151,390249],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":777,"label":"lavaca_require"}');
        DateUtils.fn.h.i(input, dateObj, mappedObj);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[390280,390342],"range":[390260,390342],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":778,"label":"lavaca_require"}');
        return _pad(DateUtils.fn.h.o(date, utc), 2);
      }
    },
    H: {
      exp: '[0-2]?\\d',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[390417,390462],"range":[390392,390462],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":779,"label":"lavaca_require"}');
        dateObj.hour = _int(input);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[390493,390574],"range":[390473,390574],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":780,"label":"lavaca_require"}');
        return (utc ? date.getUTCHours() : date.getHours()).toString();
      }
    },
    HH: {
      exp: '[0-2]\\d',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[390649,390694],"range":[390624,390694],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":781,"label":"lavaca_require"}');
        dateObj.hour = _int(input);
      },
      o: function (date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[390726,390788],"range":[390705,390788],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":782,"label":"lavaca_require"}');
        return _pad(DateUtils.fn.H.o(date, utc), 2);
      }
    },
    m: {
      exp: '[1-5]?\\d',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[390863,390910],"range":[390838,390910],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":783,"label":"lavaca_require"}');
        dateObj.minute = _int(input);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[390941,391026],"range":[390921,391026],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":784,"label":"lavaca_require"}');
        return (utc ? date.getUTCMinutes() : date.getMinutes()).toString();
      }
    },
    mm: {
      exp: '[0-5]\\d',
      i: function(input, dateObj, mappedObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391112,391174],"range":[391076,391174],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":785,"label":"lavaca_require"}');
        DateUtils.fn.m.i(input, dateObj, mappedObj);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391205,391267],"range":[391185,391267],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":786,"label":"lavaca_require"}');
        return _pad(DateUtils.fn.m.o(date, utc), 2);
      }
    },
    M: {
      exp: '1?\\d',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391338,391388],"range":[391313,391388],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":787,"label":"lavaca_require"}');
        dateObj.month = _int(input) - 1;
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391419,391506],"range":[391399,391506],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":788,"label":"lavaca_require"}');
        return ((utc ? date.getUTCMonth() : date.getMonth()) + 1).toString();
      }
    },
    MM: {
      exp: '[0-1]\\d',
      i: function(input, dateObj, mappedObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391592,391654],"range":[391556,391654],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":789,"label":"lavaca_require"}');
        DateUtils.fn.M.i(input, dateObj, mappedObj);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391685,391747],"range":[391665,391747],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":790,"label":"lavaca_require"}');
        return _pad(DateUtils.fn.M.o(date, utc), 2);
      }
    },
    MMM: {
      exp: '[a-z]{3}',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391823,391899],"range":[391798,391899],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":791,"label":"lavaca_require"}');
        dateObj.month = _indexOfCode(input, DateUtils.monthsAbbr);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[391930,392032],"range":[391910,392032],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":792,"label":"lavaca_require"}');
        return _translate(DateUtils.monthsAbbr[utc ? date.getUTCMonth() : date.getMonth()]);
      }
    },
    MMMM: {
      exp: '[a-z]+',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[392107,392179],"range":[392082,392179],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":793,"label":"lavaca_require"}');
        dateObj.month = _indexOfCode(input, DateUtils.months);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[392210,392308],"range":[392190,392308],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":794,"label":"lavaca_require"}');
        return _translate(DateUtils.months[utc ? date.getUTCMonth() : date.getMonth()]);
      }
    },
    s: {
      exp: '[1-5]?\\d',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[392383,392430],"range":[392358,392430],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":795,"label":"lavaca_require"}');
        dateObj.second = _int(input);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[392461,392546],"range":[392441,392546],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":796,"label":"lavaca_require"}');
        return (utc ? date.getUTCSeconds() : date.getSeconds()).toString();
      }
    },
    ss: {
      exp: '[0-5]\\d',
      i: function(input, dateObj, mappedObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[392632,392694],"range":[392596,392694],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":797,"label":"lavaca_require"}');
        DateUtils.fn.s.i(input, dateObj, mappedObj);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[392725,392787],"range":[392705,392787],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":798,"label":"lavaca_require"}');
        return _pad(DateUtils.fn.s.o(date, utc), 2);
      }
    },
    t: {
      exp: '[a-z]',
      i: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[392844,392875],"range":[392833,392875],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":799,"label":"lavaca_require"}');
        // Do nothing
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[392906,393040],"range":[392886,393040],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":800,"label":"lavaca_require"}');
        return _translate(DateUtils.timeOfDayDesignatorAbbr[Math.floor((utc ? date.getUTCHours() : date.getHours()) / 12)]);
      }
    },
    tt: {
      exp: '[a-z]+',
      i: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[393099,393130],"range":[393088,393130],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":801,"label":"lavaca_require"}');
        // Do nothing
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[393161,393291],"range":[393141,393291],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":802,"label":"lavaca_require"}');
        return _translate(DateUtils.timeOfDayDesignator[Math.floor((utc ? date.getUTCHours() : date.getHours()) / 12)]);
      }
    },
    y: {
      exp: '\\d?\\d',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[393364,393444],"range":[393339,393444],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":803,"label":"lavaca_require"}');
        dateObj.year = (new Date()).getFullYear() % 100 + _int(input);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[393475,393570],"range":[393455,393570],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":804,"label":"lavaca_require"}');
        return ((utc ? date.getUTCFullYear() : date.getFullYear()) % 100).toString();
      }
    },
    yy: {
      exp: '\\d{2}',
      i: function(input, dateObj, mappedObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[393654,393716],"range":[393618,393716],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":805,"label":"lavaca_require"}');
        DateUtils.fn.y.i(input, dateObj, mappedObj);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[393747,393809],"range":[393727,393809],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":806,"label":"lavaca_require"}');
        return _pad(DateUtils.fn.y.o(date, utc), 2);
      }
    },
    yyy: {
      exp: '\\d*\\d{3}',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[393887,393932],"range":[393862,393932],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":807,"label":"lavaca_require"}');
        dateObj.year = _int(input);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[393963,394046],"range":[393943,394046],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":808,"label":"lavaca_require"}');
        return _pad(utc ? date.getUTCFullYear() : date.getFullYear(), 3);
      }
    },
    yyyy: {
      exp: '\\d*\\d{4}',
      i: function(input, dateObj, mappedObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[394136,394200],"range":[394100,394200],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":809,"label":"lavaca_require"}');
        DateUtils.fn.yyy.i(input, dateObj, mappedObj);
      },
      o: function(date, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[394231,394314],"range":[394211,394314],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":810,"label":"lavaca_require"}');
        return _pad(utc ? date.getUTCFullYear() : date.getFullYear(), 4);
      }
    },
    z: {
      exp: '[-+]?1?\\d',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[394390,394442],"range":[394365,394442],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":811,"label":"lavaca_require"}');
        dateObj.offset = _int(input) * 60;
      },
      o: function(date, padding) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[394477,394641],"range":[394453,394641],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":812,"label":"lavaca_require"}');
        var off = date.getTimezoneOffset(),
            offH = Math.floor(Math.abs(off / 60));
        return (off < 0 ? '-' : '+') + _pad(offH, padding);
      }
    },
    zz: {
      exp: '[-+]?[0-1]\\d',
      i: function(input, dateObj, mappedObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[394732,394794],"range":[394696,394794],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":813,"label":"lavaca_require"}');
        DateUtils.fn.z.i(input, dateObj, mappedObj);
      },
      o: function(date) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[394820,394871],"range":[394805,394871],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":814,"label":"lavaca_require"}');
        return DateUtils.fn.z.o(date, 2);
      }
    },
    zzz: {
      exp: '[-+]?[0-1]\\d:\\d{2}',
      i: function(input, dateObj) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[394959,395069],"range":[394934,395069],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":815,"label":"lavaca_require"}');
        var parts = input.split(':');
        dateObj.offset = _int(parts[0]) * 60 + _int(parts[1]);
      },
      o: function(date) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[395095,395311],"range":[395080,395311],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":816,"label":"lavaca_require"}');
        var z = date.getTimezoneOffset(),
            sign = z > 0 ? '-' : '+',
            m = z % 60,
            h = Math.abs((z - m) / 60);
        return sign + _pad(h, 2) + ':' + _pad(Math.abs(m), 2);
      }
    }
  };

  function _parseFormat(f) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[395351,395948],"range":[395326,395948],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":817,"label":"lavaca_require"}');
    var actors = [],
        buffer = '',
        i = -1,
        bufferChar,
        c;
    while (!!(c = f.charAt(++i))) {
      bufferChar = buffer.charAt(0);
      if (bufferChar === c || bufferChar === '"' || bufferChar === '\'') {
        buffer += c;
        if ((bufferChar === '"' && c === '"') || (bufferChar === '\'' && c === '\'')) {
          actors.push(buffer);
          buffer = '';
        }
      } else {
        if (buffer) {
          actors.push(buffer);
        }
        buffer = c;
      }
    }
    if (buffer) {
      actors.push(buffer);
    }
    return actors;
  }

  function _actorsToRegex(actors) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[395984,396385],"range":[395952,396385],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":818,"label":"lavaca_require"}');
    var s = ['^'],
        i = -1,
        actor,
        handler;
    while (!!(actor = actors[++i])) {
      handler = DateUtils.fn[actor];
      if (handler) {
        s.push('(', handler.exp, ')');
      } else {
        s.push('(', actor.replace(/(^")|(^')|('$)|("$)/g, '').replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), ')');
      }
    }
    s.push('$');
    return new RegExp(s.join(''));
  }

  /**
   * @method parse
   * @static
   * Converts a string to a date
   *
   * @param {String} s  The date string
   * @param {String} f  The format of the date string
   * @return {Date}  The parsed date
   */
  DateUtils.parse = function(s, f) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[396635,397688],"range":[396620,397688],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":819,"label":"lavaca_require"}');
    var actors = _parseFormat(f),
        exp = _actorsToRegex(actors),
        dateObj = {year: 0, month: 0, date: 1, hour: 0, minute: 0, second: 0, ms: 0, offset: 0},
        mappedObj = {},
        i = -1,
        actor,
        match,
        handler;
    if (exp.test(s)) {
      match = exp.exec(s);
      while (!!(actor = actors[++i])) {
        mappedObj[actor] = match[i + 1];
      }
    }
    for (actor in mappedObj) {
      handler = DateUtils.fn[actor];
      if (handler) {
        handler.i(mappedObj[actor], dateObj, mappedObj);
      }
    }
    return new Date(
        DateUtils.monthsAbbr[dateObj.month]
      + ' '
      + _pad(dateObj.date, 2)
      + ' '
      + _pad(dateObj.year, 4)
      + ' '
      + _pad(dateObj.hour, 2)
      + ':'
      + _pad(dateObj.minute, 2)
      + ':'
      + _pad(dateObj.second, 2)
      + (dateObj.ms > 0 ? '.' + _pad(dateObj.ms, 3) : '')
      + (dateObj.offset >= 0 ? '+' : '-')
      + _pad(Math.floor(Math.abs(dateObj.offset / 60)), 2)
      + _pad(Math.abs(dateObj.offset % 60), 2));
  };

  /**
   * Converts a date to a string
   * @method stringify
   * @static
   * @param {Date} d  The date
   * @param {String} f  The string format of the date
   * @return {String}  The stringified date
   */
   /**
   * Converts a date to a string
   * @method stringify
   * @static
   * @param {Date} d  The date
   * @param {String} f  The string format of the date
   * @param {Boolean} utc  When true, use the UTC date to generate the string
   * @return {String}  The stringified date
   */
  DateUtils.stringify = function(d, f, utc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[398234,398579],"range":[398214,398579],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":820,"label":"lavaca_require"}');
    var actors = _parseFormat(f),
        i = -1,
        s = [],
        actor,
        handler;
    while (!!(actor = actors[++i])) {
      handler = DateUtils.fn[actor];
      if (handler) {
        s.push(handler.o(d, utc));
      } else {
        s.push(actor.replace(/(^")|(^')|('$)|("$)/g, ''));
      }
    }
    return s.join('');
  };

  return DateUtils;

});

define('lavaca/util/Promise',['require','./extend'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[398678,405375],"range":[398660,405375],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":838,"label":"lavaca_require"}');

  var extend = require('./extend');

  /**
   * Utility type for asynchronous programming
   * @class lavaca.util.Promise
   *
   * @constructor
   *
   * @param {Object} thisp  What the "this" keyword resolves to in callbacks
   */
  var Promise = extend(function(thisp) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[398953,399403],"range":[398937,399403],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":822,"label":"lavaca_require"}');
    /**
     * What the "this" keyword resolves to in callbacks
     * @property {Object} thisp
     * @default null
     */
    this.thisp = thisp;
    /**
     * Pending handlers for the success event
     * @property {Array} resolvedQueue
     * @default []
     */
    this.resolvedQueue = [];
    /**
     * Pending handlers for the error event
     * @property {Array} rejectedQueue
     * @default []
     */
    this.rejectedQueue = [];
  }, {
    /**
     * Flag indicating that the promise completed successfully
     * @property {Boolean} succeeded
     * @default false
     */
    succeeded: false,
    /**
     * Flag indicating that the promise failed to complete
     * @property {Boolean} failed
     * @default false
     */
    failed: false,
    /**
     * Queues a callback to be executed when the promise succeeds
     * @method success
     *
     * @param {Function} callback  The callback to execute
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    success: function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[399986,400200],"range":[399967,400200],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":823,"label":"lavaca_require"}');
      if (callback) {
        if (this.succeeded) {
          callback.apply(this.thisp, this.resolveArgs);
        } else {
          this.resolvedQueue.push(callback);
        }
      }
      return this;
    },
    /**
     * Queues a callback to be executed when the promise fails
     * @method error
     *
     * @param {Function} callback  The callback to execute
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    error: function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[400464,400674],"range":[400445,400674],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":824,"label":"lavaca_require"}');
      if (callback) {
        if (this.failed) {
          callback.apply(this.thisp, this.rejectArgs);
        } else {
          this.rejectedQueue.push(callback);
        }
      }
      return this;
    },
    /**
     * Queues a callback to be executed when the promise is either rejected or resolved
     * @method always
     *
     * @param {Function} callback  The callback to execute
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    always: function(callback) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[400965,401016],"range":[400946,401016],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":825,"label":"lavaca_require"}');
      return this.then(callback, callback);
    },
    /**
     * Queues up callbacks after the promise is completed
     * @method then
     *
     * @param {Function} resolved  A callback to execute when the operation succeeds
     * @param {Function} rejected  A callback to execute when the operation fails
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    then: function(resolved, rejected) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[401391,401469],"range":[401362,401469],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":826,"label":"lavaca_require"}');
      return this
        .success(resolved)
        .error(rejected);
    },
    /**
     * Resolves the promise successfully
     * @method resolve
     *
     * @params {Object} value  Values to pass to the queued success callbacks
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    resolve: function(/* value1, value2, valueN */) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[401754,402085],"range":[401715,402085],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":827,"label":"lavaca_require"}');
      if (!this.succeeded && !this.failed) {
        this.succeeded = true;
        this.resolveArgs = [].slice.call(arguments, 0);
        var i = -1,
            callback;
        while (!!(callback = this.resolvedQueue[++i])) {
          callback.apply(this.thisp, this.resolveArgs);
        }
      }
      return this;
    },
    /**
     * Resolves the promise as a failure
     * @method reject
     *
     * @params {String} err  Failure messages
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    reject: function(/* err1, err2, errN */) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[402330,402656],"range":[402297,402656],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":828,"label":"lavaca_require"}');
      if (!this.succeeded && !this.failed) {
        this.failed = true;
        this.rejectArgs = [].slice.call(arguments, 0);
        var i = -1,
            callback;
        while (!!(callback = this.rejectedQueue[++i])) {
          callback.apply(this.thisp, this.rejectArgs);
        }
      }
      return this;
    },
    /**
     * Queues this promise to be resolved only after several other promises
     *   have been successfully resolved, or immediately rejected when one
     *   of those promises is rejected
     * @method when
     *
     * @params {Lavaca.util.Promise}  promise  One or more other promises
     * @return {Lavaca.util.Promise}  This promise (for chaining)
     */
    when: function(/* promise1, promise2, promiseN */) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[403086,403674],"range":[403041,403674],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":832,"label":"lavaca_require"}');
      var self = this,
          values = [],
          i = -1,
          pendingPromiseCount = arguments.length,
          promise;
      while (!!(promise = arguments[++i])) {
        (function(index) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[403291,403614],"range":[403275,403614],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":831,"label":"lavaca_require"}');
          promise
            .success(function(v) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[403344,403505],"range":[403332,403505],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":829,"label":"lavaca_require"}');
              values[index] = v;
              if (--pendingPromiseCount < 1) {
                self.resolve.apply(self, values);
              }
            })
            .error(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[403537,403602],"range":[403526,403602],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":830,"label":"lavaca_require"}');
              self.reject.apply(self, arguments);
            });
        })(i);
      }
      promise = null;
      return this;
    },
    /**
     * Produces a callback that resolves the promise with any number of arguments
     * @method resolver
     * @return {Function}  The callback
     */
    resolver: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[403863,403973],"range":[403852,403973],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":834,"label":"lavaca_require"}');
      var self = this;
      return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[403912,403966],"range":[403901,403966],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":833,"label":"lavaca_require"}');
        self.resolve.apply(self, arguments);
      };
    },
    /**
     * Produces a callback that rejects the promise with any number of arguments
     * @method rejector
     *
     * @return {Function}  The callback
     */
    rejector: function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[404168,404277],"range":[404157,404277],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":836,"label":"lavaca_require"}');
      var self = this;
      return function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[404217,404270],"range":[404206,404270],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":835,"label":"lavaca_require"}');
        self.reject.apply(self, arguments);
      };
    }
  });
  /**
   *
   * Creates a promise to be resolved only after several other promises
   *   have been successfully resolved, or immediately rejected when one
   *   of those promises is rejected
   * @method when
   * @static
   * @params {Lavaca.util.Promise}  promise  One or more other promises
   * @return {Lavaca.util.Promise}  The new promise
   */
   /**
   * Creates a promise to be resolved only after several other promises
   *   have been successfully resolved, or immediately rejected when one
   *   of those promises is rejected
   * @method when
   * @static
   * @param {Object} thisp  The execution context of the promise
   * @params {Lavaca.util.Promise}  promise  One or more other promises
   * @return {Lavaca.util.Promise}  The new promise
   */
  Promise.when = function(thisp/*, promise1, promise2, promiseN */) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[405121,405352],"range":[405070,405352],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":837,"label":"lavaca_require"}');
    var thispIsPromise = thisp instanceof Promise,
        promise = new Promise(thispIsPromise ? window : thisp),
        args = [].slice.call(arguments, thispIsPromise ? 0 : 1);
    return promise.when.apply(promise, args);
  };

  return Promise;

});

define('lavaca/util/StringUtils',['require'],function(require) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[405442,407760],"range":[405424,407760],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":842,"label":"lavaca_require"}');

  var _htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  function _noop(s) {instrumentation_log('{"type":"FunctionDeclaration","bodyRange":[405583,405602],"range":[405565,405602],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":839,"label":"lavaca_require"}');
    return s;
  }

  /**
   * Static utility type for working with strings
   * @class lavaca.util.StringUtils
   */
  var StringUtils = {};

  /**
   * Substitutes arguments into a string
   * @method format
   * @static
   * @param {String} s  The format string. Substitutions should be in the form {0} to sub in
   *   the first arg, {1} for the second, and so on
   * @params {Object} arg  Arguments to be substituted in to the string
   * @return {String}  The format string with the arguments substituted into it
   */
  /**
   * Substitutes arguments into a string
   * @method format
   * @static
   * @param {String} s  The format string. Substitutions should be in the form {0} to sub in
   *   the first arg, {1} for the second, and so on
   * @param {Array} args  Arguments to be substituted in to the string
   * @return {String}  The format string with the arguments substituted into it
   */
  /**
   * Substitutes arguments into a string
   * @method format
   * @static
   * @param {String} s  The format string. Substitutions should be in the form {0} to sub in
   *   the first arg, {1} for the second, and so on
   * @param {Array} args  Arguments to be substituted in to the string
   * @param {Function} fn  A function to call on each argument, the result of which is substituted into the string
   * @return {String}  The format string with the arguments substituted into it
   */
  StringUtils.format = function(s /*[, arg0, arg1, argN]*/) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[407049,407397],"range":[407012,407397],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":840,"label":"lavaca_require"}');
    var args,
        fn = _noop,
        i,
        j;
    if (arguments[1] instanceof Array) {
      args = arguments[1];
      fn = arguments[2] || _noop;
    } else {
      args = [].slice.call(arguments, 1);
    }
    for (i = 0, j = args.length; i < j; i++) {
      s = s.split('{' + i + '}').join(fn(args[i] + ''));
    }
    return s;
  };

  /**
   * Escapes a string for inclusion in HTML
   * @method escapeHTML
   * @static
   *
   * @param {String} s  The string
   * @return {String}  The escaped string
   */
  StringUtils.escapeHTML = function(s) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[407614,407733],"range":[407602,407733],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":841,"label":"lavaca_require"}');
    s = '' + s;
    for (var n in _htmlEscapes) {
      s = s.split(n).join(_htmlEscapes[n]);
    }
    return s;
  };

  return StringUtils;

});
define('lavaca/util/delay',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[407804,408794],"range":[407793,408794],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":845,"label":"lavaca_require"}');
  /**
   * Wraps setTimeout and delays the execution of a function
   * @class lavaca.util.delay
   */
   /**
   * Delays the execution of a function
   * @method delay
   * @static
   *
   * @param {Function} callback  A callback to execute on delay
   */
   /**
   * Delays the execution of a function
   * @method delay
   * @static
   * @param {Function} callback  A callback to execute on delay
   * @param {Object} thisp  The object to use as the "this" keyword
   * @return {Number}  The timeout ID
   */
   /**
   * Delays the execution of a function
   * @method delay
   * @static
   * @param {Function} callback  A callback to execute on delay
   * @param {Object} thisp  The object to use as the "this" keyword
   * @param {Number} ms  The number of milliseconds to delay execution
   * @return {Number}  The timeout ID
   */
  var delay = function(callback, thisp, ms) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[408688,408773],"range":[408658,408773],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":844,"label":"lavaca_require"}');
    return setTimeout(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[408723,408758],"range":[408712,408758],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":843,"label":"lavaca_require"}');
      callback.call(thisp);
    }, ms || 0);
  };

  return delay;

});

define('lavaca/util/log',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[408837,409275],"range":[408826,409275],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":847,"label":"lavaca_require"}');
  /**
   * Logs to the console (or alerts if no console exists)
   * @class lavaca.util.log
   */
   /**
   * Logs to the console (or alerts if no console exists)
   * @method log
   * @static
   *
   * @params {Object} arg  The content to be logged
   */
  var log = function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[409118,409256],"range":[409107,409256],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":846,"label":"lavaca_require"}');
    if (window.console) {
      console.log.apply(console, arguments);
    } else {
      alert([].join.call(arguments, ' '));
    }
  };

  return log;

});

define('lavaca/util/resolve',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[409322,410773],"range":[409311,410773],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":849,"label":"lavaca_require"}');
  /**
   * Looks up or creates an object, given its global path (ie, 'Lavaca.resolve' resolves to this function,
   * 'no.obj.exists' resolves to null)
   * @class lavaca.util.resolve
   */
   /**
   * Looks up or creates an object, given its global path (ie, 'Lavaca.resolve' resolves to this function,
   * 'no.obj.exists' resolves to null)
   * @method resolve
   * @static
   *
   * @param {String} name  The fully-qualified name of the object to look up
   * @return {Object}  The resolved object
   */
   /**
   * Looks up or creates an object, given its global path (ie, 'Lavaca.resolve' resolves to this function,
   * 'no.obj.exists' resolves to null)
   * @method resolve
   * @static
   *
   * @param {String} name  The fully-qualified name of the object to look up
   * @param {Boolean} createIfNotExists  When true, any part of the name that doesn't already exist will be created
   * as an empty object
   * @return {Object}  The resolved object
   */
  var resolve = function(name, createIfNotExists, root) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[410346,410750],"range":[410306,410750],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":848,"label":"lavaca_require"}');
    if (!name) {
      return null;
    }
    name = name.split('.');
    var last = root || window,
        o = root || window,
        i = -1,
        segment;
    while (!!(segment = name[++i])) {
      o = o[segment];
      if (!o) {
        if (createIfNotExists) {
          o = last[segment] = {};
        } else {
          return null;
        }
      }
      last = o;
    }
    return o;
  };

  return resolve;

});

define('lavaca/util/uuid',[],function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[410817,411368],"range":[410806,411368],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":851,"label":"lavaca_require"}');

  var _uuidMap = {};
  /**
   * Produces a app specific unique identifier
   * @class lavaca.util.uuid
   */
   /**
   * Produces a unique identifier
   * @method uuid
   * @static
   * @param {String} namespace  A string served the namespace of a uuid
   *
   * @return {Number}  A number that is unique to this page
   */
  var uuid = function(namespace) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[411177,411348],"range":[411157,411348],"file":"todomvc/examples.lacunized.instrumented/lavaca_require/js/libs/lavaca.js","index":850,"label":"lavaca_require"}');
    namespace = namespace || '__defaultNS';
    if (typeof _uuidMap[namespace] !== 'number') {
      _uuidMap[namespace] = 0;
    }
    return _uuidMap[namespace]++;
  };

  return uuid;

});

})();