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


(function() {instrumentation_log('{"type":"FunctionExpression","bodyRange":[12,1257],"range":[1,1257],"file":"todomvc/examples.lacunized.instrumented/enyo_backbone/enyo/enyo.js","index":2,"label":"enyo_backbone"}');
	// enyo can use information from the script tag that loads this bootstrap file
	var thisScript = 'enyo.js';

	enyo = window.enyo || {};

	enyo.locateScript = function(inName) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[190,551],"range":[173,551],"file":"todomvc/examples.lacunized.instrumented/enyo_backbone/enyo/enyo.js","index":0,"label":"enyo_backbone"}');
		var scripts = document.getElementsByTagName('script');
		for (var i=scripts.length-1, s, src, l=inName.length; (i>=0) && (s=scripts[i]); i--) {
			if (!s.located) {
				src = s.getAttribute('src') || '';
				if (src.slice(-l) == inName) {
					s.located = true;
					return {path: src.slice(0, Math.max(0, src.lastIndexOf('/'))), node: s};
				}
			}
		}
	};

	enyo.args = enyo.args || {};

	var tag = enyo.locateScript(thisScript);
	if (tag) {
		// infer the framework path from the document, unless the user has specified one explicitly
		enyo.args.root = (enyo.args.root || tag.path);
		// all attributes of the bootstrap script tag become enyo.args
		for (var i=0, al = tag.node.attributes.length, it; (i < al) && (it = tag.node.attributes.item(i)); i++) {
			enyo.args[it.nodeName] = it.value;
		}
	}

	var root = enyo.args.root;

	var script = function(inSrc) {instrumentation_log('{"type":"FunctionExpression","bodyRange":[1060,1158],"range":[1044,1158],"file":"todomvc/examples.lacunized.instrumented/enyo_backbone/enyo/enyo.js","index":1,"label":"enyo_backbone"}');
		document.write('<scri' + 'pt src="' + root + "/source/boot/" + inSrc + '"></scri' + 'pt>');
	};

	script('ready.js');
	script('../../loader.js');
	script('boot.js');
	script('../package.js');
})();
