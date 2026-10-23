import {test, expect} from '@playwright/test';
test("First Page Playwright Script", async({page}) => {

    await page.goto('https://playwright.dev/');
    //Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Fast and reliable end-to-end testing/);
    await expect(page.getByRole('heading', {name: 'scripting' })).toBeVisible();
});
test("First Page 2 Playwright Script ", async({page}) => {

    await page.goto('https://playwright.dev/');
    //Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Fast and reliable/);
    await expect(page.getByRole('heading', {name: 'AI agents.' })).toBeVisible();
});
test("Second Page Playwright Script", async({page}) => {

    await page.goto('https://playwright.dev/');
    //Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/end-to-end testing/);
    await expect(page.getByRole('heading', {name: 'web automation for testing,' })).toBeVisible();
});