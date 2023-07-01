import { registerPlugin } from '@capacitor/core';

import type { bluetoothPrinterPlugin } from './definitions';

const bluetoothPrinter = registerPlugin<bluetoothPrinterPlugin>('bluetoothPrinter', {
  web: () => import('./web').then(m => new m.bluetoothPrinterWeb()),
});

export * from './definitions';
export { bluetoothPrinter };
