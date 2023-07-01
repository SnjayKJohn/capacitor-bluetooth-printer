export interface bluetoothPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
