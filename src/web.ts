import { WebPlugin } from '@capacitor/core';

import type { CapacitorGalleryPlugin } from './definitions';

export class CapacitorGalleryWeb extends WebPlugin implements CapacitorGalleryPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
