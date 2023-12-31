import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("TC - 01 : Validate Align well user invalid email message.",async({page,loginPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    test.step("Now click usermanagementPage",async() => {
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
    })
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(3000)
        await AlignwellPage.clickAddUserBtn()
        await AlignwellPage.clickAddNewUserBtn()
        await AlignwellPage.clickEmptyEmailIcon()
        await AlignwellPage.verifyEmptyEmailText()
})
test("TC - 02 : Validate Align well user empty role message.",async({page,loginPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    test.step("Now click usermanagementPage",async() => {
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
    })
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(3000)
        await AlignwellPage.clickAddUserBtn()
        await AlignwellPage.inputAdduserEmail()
        await AlignwellPage.clickAddNewUserBtn()
        await AlignwellPage.clickEmptyRoleIcon()
        await AlignwellPage.verifyEmptyRoleText()
})
test("TC - 03 : Validate Align well user invalid email message.",async({page,loginPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    test.step("Now click usermanagementPage",async() => {
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
    })
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(3000)
        await AlignwellPage.clickAddUserBtn()
        await AlignwellPage.inputInvaliduserEmail()
        await AlignwellPage.selectMasterAdminUser()
        await AlignwellPage.clickAddNewUserBtn()
        await page.waitForTimeout(4000)
        // await AlignwellPage.verifyInvalidEmail()
})
test("TC - 04 : Validate Add new user is successfully added.",async({page,loginPage,AlignwellPage})=>{
    //await AlignwellPage.RendomEmail()
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    test.step("Now click usermanagementPage",async() => {
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
    })
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(3000)
        await AlignwellPage.clickAddUserBtn()
        await AlignwellPage.InputRendomEmail()
        await AlignwellPage.selectMasterAdminUser()
        await AlignwellPage.clickAddNewUserBtn()
        await page.waitForTimeout(5000)
})
test("TC - 05 : Validate Align well user search field is working..",async({page,loginPage,AlignwellPage})=>{
    //await AlignwellPage.RendomEmail()
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    test.step("Now click usermanagementPage",async() => {
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
    })
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(3000)
        await AlignwellPage.SearchAlignUser_By_FirstName()
})
test("TC - 06 : Validate Align well user search field is working.",async({page,loginPage,AlignwellPage})=>{
    //await AlignwellPage.RendomEmail()
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(4000)
        await AlignwellPage.Filter_By_MasterAdmin()
        await AlignwellPage.Filter_By_Admin()
        await AlignwellPage.Filter_By_Standard()
})
test.skip("TC - 07 : Validate Align well user column wise sorting is woorking.",async({page,loginPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(4000)
})
test("TC - 08 : Validate Align well user  Resend link is working.",async({page,loginPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(7000)
        await AlignwellPage.ClickResendLink()
        await AlignwellPage.verifyResendLinkSuccessfullyMessage()
})
test.skip("TC - 09 : Validate Align well user edit button is working.",async({page,loginPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(7000)
        await AlignwellPage.ClickResendLink()
        await AlignwellPage.verifyResendLinkSuccessfullyMessage()
})
test.only("TC - 10 : Validate Align well user deactivate button is working.",async({page,loginPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(3000)
        await AlignwellPage.clickAlignwellUser()
        await page.waitForTimeout(7000)
        await AlignwellPage.ClickDeactivateAndActivate()
})