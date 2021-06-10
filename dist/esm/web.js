import { WebPlugin } from '@capacitor/core';
export class CapacitorMapboxNavigationWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map