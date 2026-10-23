import { test, expect } from '@playwright/test';

test("Handling a checkbox in a web table", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    //let empName = ["Rohan Mehta", "Aarav Sharma", "Ananya Iyer"];
    let empName = "Rohan Mehta"
    ////span/strong[text()='Rohan Mehta']//ancestor::tr/td[1]/input
    //let chkBoxXPath = page.locator(`//span/strong[test()='${empName}']//ancestor::td/preceding-sibling::td/input`);
    let chkBoxXPath = page.locator(`//span/strong[text()='${empName}']//ancestor::tr/td[1]/input`);
    console.log(chkBoxXPath);
    await chkBoxXPath.check();
    console.log(await chkBoxXPath.isChecked());
    //To stop the browser without closing post the previous STEP execution completion.

})