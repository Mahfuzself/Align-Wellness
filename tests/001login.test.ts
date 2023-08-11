import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
//import LoginPage from "pages/loginPage/Login.page";
test("001Login  -> 01 Validate empty password allert without input password field",async({page,loginPage})=>{
    await page.goto("/login")
    await loginPage.inputusernamefield(data.validusername)
    await loginPage.clickSubmittBtn()
    await loginPage.clickEmptyPasswordIcon()
    await loginPage.verifyEmpltyPassword_Alert()
    await page.waitForTimeout(3000)
})
test("001Login -> 02 Validate empty username alert without input username field.",async({page,loginPage})=>{
    // await page.goto('/admin/#/sign-in')
    await page.goto("/login")
    await loginPage.inputpasswordfield(data.validpassword)
    await loginPage.clickSubmittBtn()
    await loginPage.clickEmptyUsernameIcon()
    await loginPage.verifyEmptyUsername_Alert()
    await page.waitForTimeout(3000)
})
test("001Login -> 03 Validate invalid format alert for username/email field.",async({page,loginPage})=>{
    // await page.goto('/admin/#/sign-in')
    await page.goto("/login")
    await loginPage.invalidusernameformat()
    await loginPage.clickEmptyUsernameIcon()
    await loginPage.verifyInvalaidUsernameFormat_Alert()
    await page.waitForTimeout(3000)
})
test("001Login -> 04 Validate successfully login with valid username and password",async({page,loginPage})=>{
    // await page.goto('/admin/#/sign-in')
    await page.goto("/login")
    await loginPage.login(data.validusername,data.validpassword)
    await page.reload()
    await page.waitForTimeout(50000)
})
test.only("001Login -> 05 Validate admin can successfully loged in with valid credentails",async({page,loginPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validadminusername, data.commonpassword)
    await loginPage.verifyUserListText()
    await page.waitForTimeout(3000)
})
test.only("001Login -> 05 Validate standard user can be successfully log in with valid credentails",async({page,loginPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await loginPage.verifyUserListText()
    await page.waitForTimeout(3000)
})

