import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("Validate all module for vendor portal",async({page,loginPage,vendorPage})=>{
    await page.goto("/login")
    await loginPage.login(data.ValidVendor,data.commonpassword)
    await vendorPage.clickVendorAvatar()
    await vendorPage.verifyMyProfile()
    await vendorPage.clickMyProfile()
    await vendorPage.verifyMyProfile_PersonalInformationtext()
    await vendorPage.clickVendorAvatar()
    await vendorPage.verifyVendorProfile()
    await vendorPage.clickVendorProfile()
    await vendorPage.verifyVendorProfile_VendorInformation()

})