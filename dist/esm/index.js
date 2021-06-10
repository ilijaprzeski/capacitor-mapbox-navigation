import { registerPlugin } from '@capacitor/core';
const CapacitorMapboxNavigation = registerPlugin('CapacitorMapboxNavigation', {
    web: () => import('./web').then(m => new m.CapacitorMapboxNavigationWeb()),
});
export * from './definitions';
123;
export { CapacitorMapboxNavigation };
//# sourceMappingURL=index.js.map