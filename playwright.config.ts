// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';
import Api from './utilities/api';

const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    launchOptions: {
        slowMo: 1000,
      },
    viewport: { width: 1280, height: 720 },
    browserName: 'chromium',
    baseURL: 'https://demoqa.com',
  },
  reporter: 'allure-playwright',
};
export default config;