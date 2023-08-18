import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("TC - 01 : Validate Add provider empty email message.",async({page,loginPage,HealthcareProviderPage,AlignwellPage}) =>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await HealthcareProviderPage.clickHealthcareProviderPage()
    await HealthcareProviderPage.clickAddProviderBtn()
    await HealthcareProviderPage.clickAddNewProviderBtn()
    await HealthcareProviderPage.clickEmptyEmailAlertIcon()
    await HealthcareProviderPage.verifyEmptyEmailText()
})
test("TC - 02 : Validate Add provider category empty message.",async({page,loginPage,HealthcareProviderPage,AlignwellPage}) =>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await HealthcareProviderPage.clickHealthcareProviderPage()
    await HealthcareProviderPage.clickAddProviderBtn()
    await HealthcareProviderPage.clickAddNewProviderBtn()
    await HealthcareProviderPage.clickEmptyProvidercategoryAlertIcon()
    await HealthcareProviderPage.verifyEmptyProviderCategoryText()
})