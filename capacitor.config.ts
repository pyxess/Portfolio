import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.portfolio.app',
  appName: 'portfolio',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, // or 0 if you want it to hide immediately
      launchAutoHide: true,
      backgroundColor: "#ffffff",
      androidScaleType: "FIT_CENTER", // or CENTER_INSIDE to avoid cropping
      showSpinner: false,
    }
    
  }
};

export default config;

