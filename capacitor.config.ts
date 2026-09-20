import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.menchiboutique.app',
  appName: 'MENCHI BOUTIQUE',
  webDir: 'www',
  bundledWebRuntime: false,
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    backgroundColor: '#0b1120'
  }
};

export default config;
