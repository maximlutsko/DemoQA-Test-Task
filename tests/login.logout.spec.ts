import { test, expect } from '@playwright/test';
import { BookStorePage } from "../page/book.store.page";
import { HomePage } from "../page/home.page";
import { LoginPage } from "../page/login.page";
import Cred from "../utilities/credentials";

test('Login and logout', async ({ page }) => {
  
  const home = new HomePage(page);
  const bookStore = new BookStorePage(page);
  const login = new LoginPage(page);

  // 1. Open https://demoqa.com/
  await home.open();

  // 2. Navigate to Book Store Application
  await home.clickBookStoreBtn();

  // 3. Click 'Login'
  await bookStore.clickLoginBtn();

  // 4. Fill up form and perform login
  await login.enterUsername(Cred.username);
  await login.enterPassword(Cred.password);
  await login.clickLoginBtn();

  // 5. Verify profile page is opened ??
  // Replaced this step as verifying the book store page being opened
  expect(page.url()).toBe("https://demoqa.com/books");
  expect((await bookStore.bookStoreTxt).isVisible);

  // 6. Click 'Logout'
  await bookStore.clickLogoutBtn();

  // 7. Verify login page is opened
  expect(page.url()).toBe("https://demoqa.com/login");
  expect((await login.loginTxt).isVisible);

});