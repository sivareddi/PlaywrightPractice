import {test, expect} from '@playwright/test';

test("Bing browser search", async({page}) => {

    await page.goto("https://www.bing.com/");
    await expect(page).toHaveTitle("Search - Microsoft Bing");
    const searchTextBox = page.getByRole('combobox', {name: 'Enter your search here - Search suggestions will show as you type'});
    console.log(searchTextBox);
    await searchTextBox.fill("Playwright automation testing", {timeout: 10000 } );
    //const searchIcon = page.locator('.gray70_fill_sb').first();
//     const searchIcon = page.locator('#search_icon > svg');
//     expect(searchIcon.waitFor({timeout: 10000}));
//     console.log(searchIcon);
//    //await page.pause(); 
//     await searchIcon.click();
//     await page.pause();

    const searchIcon = page.locator('#search_icon');
    await expect(searchIcon).toBeVisible({ timeout: 10000 });
    await searchIcon.click();
   // await expect(page).toHaveURL(/search\?q=Playwright/);
    // await searchTextBox.press('Enter');
    // await expect(page).toHaveURL(/search\?q=Playwright/);
    await page.pause();

})