//const {test} = require('@playwright/test');

import {test, expect} from '@playwright/test' ;

test('First Playwright test', async({page}) => { 

    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle(/Google/);
    //const searchLabel = page.locator('textarea[aria-label="Search"]');
    const searchLabel = page.getByRole('combobox', {name: 'Search'});    
    console.log(searchLabel);
    // page.pause();
    await searchLabel.fill("Playwright automation");
    const searchButton = page.locator('input[aria-label="Google Search"]').first();
    //const searchButton = page.getByLabel('Search').first();
    await searchButton.click();
    await expect(page.locator('h2[@text()="Web result with site links"]'));

}); 



