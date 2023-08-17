import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import ContractorPage from '@pages/Contractor.page';
test("TC -01 : Validate contractor empty email message.",async({page,loginPage,ContactorPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await ContactorPage.clickContractorPage()
    await ContactorPage.clickAddContactor()
    await ContactorPage.clickAddNewContractor()
    await ContactorPage.clickEmailAlertIcon()
    await ContactorPage.verifyEmptyEmailText()
})
test.only("TC -02 : Validate add new contarctor invalid email format message.",async({page,loginPage,ContactorPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await ContactorPage.clickContractorPage()
    await ContactorPage.clickAddContactor()
    await ContactorPage.inputInvalidContractorEmail()
    await ContactorPage.clickAddNewContractor()
    await ContactorPage.VerifyInvalidEmailText()
})