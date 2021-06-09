export interface CapacitorMapboxNavigationPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
