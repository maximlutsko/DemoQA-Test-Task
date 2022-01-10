--------------------------- General information ---------------------------
To install all dependencies please use the "npm i" command
To run all autotests please use the "npx playwright test" command
To run a specific autotest use the "npx playwright test tests/*test_name*" command (e.g.: npx playwright test tests/add.book.spec.ts)

--------------------------- Playwright.config.ts --------------------------
Inside the "playwright.config.ts" file you can configure:
1. Running tests with/without visible browser (headless: true - without visible browser)
2. Running tests with/without delay (slowMo: 1000 - 1s delay)
3. Selecting a custom viewport (viewport: { width: 1280, height: 720 })
4. Selecting a specific browser (browserName: 'chromium')
5. Adding a base url (baseURL: 'https://demoqa.com')

----------------------------------- Page ----------------------------------
Page folder contains all of the page objects.

----------------------------------- Tests ---------------------------------
Tests folder contains all of the autotests.

--------------------------------- Utilities -------------------------------
Utilies folder contains 2 files:
1. api.ts has variables declarations for api requests testing
2. credentials.ts has variables declarations for username and password