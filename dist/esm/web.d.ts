import { WebPlugin } from '@capacitor/core';
import type { CapacitorMapboxNavigationPlugin, MapboxNavOptions } from './definitions';
export declare class CapacitorMapboxNavigationWeb extends WebPlugin implements CapacitorMapboxNavigationPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    show(options: MapboxNavOptions): Promise<void>;
    history(): Promise<any>;
}
