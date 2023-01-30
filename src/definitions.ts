export interface CapacitorGalleryPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
