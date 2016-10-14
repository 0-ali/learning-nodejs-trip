(function () {

    /**
     * @param string a(Module name)
     * @param array b(Module Dependency)
     * @param function c(Module body)
     */
    Dependency = function (a, b, c, d) {
        var throws = (typeof  d == "boolean") ? b : true;
        if (typeof a == "string" && Array.isArray(b) && typeof c == "function") {
            var Dependency = this.Dependency;
            var Module = function (modules, throws) {
                var $array = [];
                if (Array.isArray(modules)) {
                    modules.forEach(function (module) {
                        try {
                            if (typeof require(module) != "undefined") $array.push(module);
                        } catch (error) {
                            if (throws == true) {
                                throw error;
                            }
                        }
                    });
                    return $array;
                }
            };
            var modules = Module(b, true);
            if (modules.length == b.length) {
                var req = {};
                modules.forEach(function (module) {
                    req[module] = require(module);
                });
                module.exports[a] = c(exports, req, module);
            }

        }
    };
    module.exports = Dependency;
}.call(this));
