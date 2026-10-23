import { test, expect } from '@playwright/test';

test("Selecting multiple rows in a table with Check boxes", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    const empNames1 = ["Ananya Iyer", "Priya Nair", "Kabir Khan", "Sana Qureshi", "Meera Rao"];

    for (const empName of empNames1) {
        let chkBoxXPath = page.locator(`//span/strong[text()='${empName}']/ancestor::tr/td[1]/input`);
        console.log(chkBoxXPath);
        await chkBoxXPath.check({ scroll: 'auto' });
        console.log(`${empName} : ` + await chkBoxXPath.isChecked());
    }
    console.log("-------------------------------------");
    const empNames2 = ["Meera Rao", "Aarav Sharma", "Vikram Singh", "Neha Patel", "Ishaan Das", "Ananya Iyer", "Priya Nair"];
    for (const empName of empNames2) {
        let chkBoxXPath = page.locator(`//span/strong[text()='${empName}']/ancestor::tr/td[1]/input`);
        if (await chkBoxXPath.isChecked()) {
            await chkBoxXPath.uncheck();
            console.log();
            console.log(`${empName} : ` + await chkBoxXPath.isChecked());
        }
        else {
            await chkBoxXPath.check();
            console.log();
            console.log(`${empName} : ` + await chkBoxXPath.isChecked());
        }

    }


    await page.pause();
});