import { test, expect } from '@playwright/test';
import {spentCalculation} from './util.ts';

test("Applitools challenge 01 - spent vs earned", async ({ page }) => {

    await page.goto("https://demo.applitools.com/");
    const strUsername = page.getByPlaceholder("Enter your username");
    const strPassword = page.getByPlaceholder("Enter your password");
    await strUsername.fill("Admin");
    await strPassword.fill("Password@123");
    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page).toHaveURL("https://demo.applitools.com/app.html");
    //await page.pause();
    const totalAmount = await page.locator("//table[@class='table table-padded']/tbody/tr/td[5]").allTextContents();
    const resultValue = spentCalculation(totalAmount); 
    console.log(resultValue.spent);
    console.log(resultValue.amountEarned);
    const netValue = resultValue.amountEarned - resultValue.spent;

    console.log(`Net value: ${netValue}`);
    expect(netValue).toBeCloseTo(1996.22, 2);


});
