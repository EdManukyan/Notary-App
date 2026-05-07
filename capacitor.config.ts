import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.notary.app',
  appName: 'NotaryApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
