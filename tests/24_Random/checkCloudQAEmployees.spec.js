import { test, expect } from '@playwright/test';

test("Cloud QA Employees validation", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    const rowsCount = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr").count();
    const colsCount = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[2]/td").count();
    // //table[@aria-label="Employee Management System table"]/tbody/tr[1]/td[6]
    const firstPart = "//table[@aria-label='Employee Management System table']/tbody/tr["
    //const firstPart = "//table[@aria-label='Employee Management System table']/tbody/tr[";
    const lastPart = "]";

    const employeeNamesCloudQA = [];
    const employeeNamesNOTCloudQA = [];

    for (let i = 1; i <= rowsCount; i++) {


        const dynamicXPath = `${firstPart}${i}${lastPart}`;
        const projectInnerText = await page.locator(dynamicXPath).innerText();
        if (projectInnerText.includes('Cloud QA')) {
            const empNameXPath = `//tbody[@id='employee-body']/tr[${i}]/td[3]/span/span/strong`;
            const empName = await page.locator(empNameXPath).textContent();
            console.log(empName);
            employeeNamesCloudQA.push(empName);
            //await page.pause();
        }
        else {
            const empNameXPath = `//tbody[@id='employee-body']/tr[${i}]/td[3]/span/span/strong`;
            const empName = await page.locator(empNameXPath).textContent();
            console.log(empName);
            employeeNamesCloudQA.push(empName);

            employeeNamesNOTCloudQA.push(empName);
        }

    }

    const btnCloudQA = page.getByRole('button', { name: 'Select Cloud QA' });
    await expect(btnCloudQA).toBeVisible();
    await btnCloudQA.click();


    for (const empName1 of employeeNamesCloudQA) {

        const empPath = page.locator(`//span/strong[text()='${empName1}']/ancestor::tr/td/input[@type='checkbox']`);
        if (await empPath.isChecked()) {
            console.log(`${empName1} is CHECKED`);
        }
        else {
            console.log(`${empName1} is NOT CHECKED`);
        }
    }

    for (const empName2 of employeeNamesNOTCloudQA) {

        const empPath = page.locator(`//span/strong[text()='${empName2}']/ancestor::tr/td/input[@type='checkbox']`);
        if (await empPath.isChecked()) {
            console.log(`${empName2} is CHECKED`);
        }
        else {
            console.log(`${empName2} is NOT CHECKED`);
        }
    }

})
