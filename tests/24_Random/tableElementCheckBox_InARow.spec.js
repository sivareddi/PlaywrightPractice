import {test, expect} from '@playwright/test';

test("Handling a checkbox in a web table", async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    const rowsCount = await page.locator("//tbody[@id='employee-body']/tr").count();
    const colsCount = await page.locator("//tbody[@id='employee-body']/tr[2]/td").count();
    const firstPart = "//tbody[@id='employee-body']/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";
    const strName = "Rohan Mehta";
    const chkLastXpathPart = "/preceding-sibling::td/input[@type='checkbox']";
    for (let i = 1 ; i <= rowsCount; i++)
    {
        for (let j = 1; j <= colsCount; j++)
        {
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            const data = await page.locator(dynamicPath).innerText(); 
            console.log(data);
            if (data.includes(strName))
            {
                const chkBoxPath = `${dynamicPath}${chkLastXpathPart}` ; 
                console.log("Checkbox path: " + chkBoxPath);
                await page.locator(chkBoxPath).check();
                console.log(await page.locator(chkBoxPath).isChecked());
            }
        }

    }
  
})