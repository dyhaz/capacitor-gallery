export interface CapacitorGalleryPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  openMap(options: OpenMapOptions): Promise<void>;
}

export interface OpenMapOptions {
  latitude: number;
  longitude: number;
}
