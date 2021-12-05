import { test, expect } from '@playwright/test';
import { BookPage } from '../page/book.page';
import { BookStorePage } from "../page/book.store.page";
import { HomePage } from "../page/home.page";
import { LoginPage } from "../page/login.page";
import { ProfilePage } from '../page/profile.page';
import Api from '../utilities/api';
import Cred from '../utilities/credentials';

test.beforeEach(async ({ page, request, baseURL }) => {
    
    const home = new HomePage(page);
    const bookStore = new BookStorePage(page);
    const login = new LoginPage(page);

    // 1. Open https://demoqa.com/
    await home.open();

    // 2. Check if a book is added. If yes - remove it before test (use API call)

    // 2.1. Get Token
    const responsePost = await request.post(`${baseURL}/Account/v1/Login`, {
        data: {
            "userName": `${Cred.username}`,
            "password": `${Cred.password}`
        }
    });
    expect(responsePost.status()).toBe(200);

    // Saving token and userId
    const postJson = await responsePost.json();
    Api.token = postJson.token;
    Api.userId = postJson.userId;

    // 2.2. Get book list
    const responseGet = await request.get(`${baseURL}/Account/v1/User/${Api.userId}`, {
        headers: {
            "Authorization": `Bearer ${Api.token}`
        }
    });
    expect(responseGet.status()).toBe(200);

    const getJson = await responseGet.json();

    // 2.3. Delete book if it is already added
    if (getJson.books.length != 0) {
        const responseDelete = await request.delete(`${baseURL}/BookStore/v1/Book`, {
            data: {
                "isbn":`${Api.isbn}`,
                "userId":`${Api.userId}`
            },
            headers: {
                "Authorization": `Bearer ${Api.token}`
            }
        });
        expect(responseDelete.status()).toBe(204);
        expect(getJson.books.length == 0);
    }

    // 3. Navigate to Book Store Application
    await home.clickBookStoreBtn();

    // 4. Login as customer
    await bookStore.clickLoginBtn();
    await login.enterUsername(Cred.username);
    await login.enterPassword(Cred.password);
    await login.clickLoginBtn();
    
})

test("Add book to profile", async ({ page, request, baseURL }) => {
    
    const bookStore = new BookStorePage(page);
    const book = new BookPage(page);
    const profile = new ProfilePage(page);

    // 1. Navigate to Book Store Tab - already there after logging in (skipping this step)

    // 2. Click on any book
    await bookStore.clickBook();

    // 3. Click 'Add To Your Collection'
    await book.clickAddToCollectionBtn();

    // 4. Navigate to Profile Tab
    await bookStore.clickProfileBtn();

    // 5. Validate book displayed on UI
    expect(page.url()).toBe(`${baseURL}/profile`);
    expect((await profile.profileTxt).isVisible);
    expect((await profile.book).isVisible);

    // 6. Validate book added to profile instance in backend (use API call)

    // 6.1. Get Token
    const responsePost = await request.post(`${baseURL}/Account/v1/Login`, {
        data: {
            "userName": `${Cred.username}`,
            "password": `${Cred.password}`
        }
    });
    expect(responsePost.status()).toBe(200);

    // Saving token and userId
    const postJson = await responsePost.json();
    Api.token = postJson.token;
    Api.userId = postJson.userId;

    // 6.2. Get book list
    const responseGet = await request.get(`${baseURL}/Account/v1/User/${Api.userId}`, {
        headers: {
            "Authorization": `Bearer ${Api.token}`
        }
    });
    const getJson = await responseGet.json();

    expect(responseGet.status()).toBe(200);
    expect(getJson.books.length != 0);
})