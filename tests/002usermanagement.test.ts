import test, { expect } from "@fixtures/basepages";
import { chromium } from "@playwright/test";
import { ChromiumBrowser } from "@playwright/test";
//import test from "@playwright/test";
import * as data from "testData/login.cred.json"
import * as email from "testData/username.email.json"
test("Validate masteradmin type user is added successfully",async({page,loginPage,usermanagementPage})=>{
    await page.goto("/login")
    await loginPage.login(data.validusername, data.validpassword)
    await page.waitForTimeout(3000)
    await usermanagementPage.clickUserManagementRightAngleIcon()
    await page.waitForTimeout(2000)
    await usermanagementPage.clickAdduserPlusBtn()
    await usermanagementPage.verifyAddUserText()
    await usermanagementPage.inputAddUserEmail(email.username)
    await usermanagementPage.clickUserRole()

//     const { chromium } = require('playwright');  // Or 'chromium' or 'webkit'.

// (async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.fakenamegenerator.com/gen-male-us-us.php');
//   await browser.close();
// })();
//     // await page.goto("https://www.fakenamegenerator.com/gen-male-us-us.php")
//     await page.waitForTimeout(1000)
    
//     await page.locator("//input[@value='Generate']").click({button:"left",delay:1000})
//     await page.waitForTimeout(1000)
//     const ele = await page.locator("//div[@class='address']//h3[1]")
//     await ele.focus()
//     await page.keyboard.press(`${ele}+KeyA`);
//     await page.keyboard.press(`${ele}+KeyC`);
//     await usermanagementPage.inputAddUserEmail()
    
})