import { WebPlugin } from '@capacitor/core';

import type { bluetoothPrinterPlugin } from './definitions';

export class bluetoothPrinterWeb extends WebPlugin implements bluetoothPrinterPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
