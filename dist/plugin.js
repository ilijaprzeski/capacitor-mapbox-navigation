var capacitorCapacitorMapboxNavigation = (function (exports, core) {
    'use strict';

    const CapacitorMapboxNavigation = core.registerPlugin('CapacitorMapboxNavigation', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorMapboxNavigationWeb()),
    });

    class CapacitorMapboxNavigationWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
        async show(options) {
            console.log('show', options);
        }
        async history() {
            console.log('history');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorMapboxNavigationWeb: CapacitorMapboxNavigationWeb
    });

    exports.CapacitorMapboxNavigation = CapacitorMapboxNavigation;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
