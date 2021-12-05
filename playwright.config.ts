// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';
import Api from './utilities/api';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    launchOptions: {
        slowMo: 1000,
      },
    viewport: { width: 1280, height: 720 },
    browserName: 'chromium',
    baseURL: 'https://demoqa.com',
  },
};
export default config;