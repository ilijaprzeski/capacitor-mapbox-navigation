export interface CapacitorMapboxNavigationPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    show(options: MapboxNavOptions): Promise<void>;
    history(): Promise<any>;
}
export interface MapboxNavOptions {
    waypoints: LocationOption[];
    mapType?: string;
    simulating?: boolean;
    startPos?: number;
}
export interface LocationOption {
    _id: string;
    name: string;
    location: [number, number];
}
export interface MapboxNavStyleOption {
}
