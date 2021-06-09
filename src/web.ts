import { WebPlugin } from '@capacitor/core';

import type { CapacitorMapboxNavigationPlugin } from './definitions';

export class CapacitorMapboxNavigationWeb
  extends WebPlugin
  implements CapacitorMapboxNavigationPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
