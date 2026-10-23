import {test, expect} from '@playwright/test';
test.only("Amazon products list", async({page}) => {

    await page.goto("https://www.amazon.in/");
    const searchBox = page.locator("//input[@id='twotabsearchtextbox']");
    await searchBox.fill("iPhone");
    const searchSubmit = page.locator("//input[@id='nav-search-submit-button']");
    await searchSubmit.click();
    //const products = await page.locator('div[data-cy="title-recipe"] h2').allTextContents();
    const products = page.locator('h2[aria-label]'); //.allTextContents();
    await products.first().waitFor({state : 'visible', timeout : 100000});
    
   // console.log('count: ', await products.count());
    console.log('Names: ', await products.allTextContents());
    const productNames = await products.allTextContents();
    console.log("These are product names" + "----------------------" );
    console.log(productNames);
    console.log("------------------------------------------------------------------------------")
    const productNames2 = productNames.map(productName => productName.trim());
    console.log(productNames2);

})