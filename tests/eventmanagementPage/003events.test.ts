import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("Validate add events page",async({page,loginPage,eventsPage})=>{
   await page.goto('/login')
//    await loginPage.inputusernamefield(data.validusername)
//    await loginPage.inputpasswordfield(data.validpassword)
//    await loginPage.clickSubmittBtn()
   await loginPage.login(data.validusername,data.validpassword)
   await eventsPage.clickEventsmanagement()
   await eventsPage.clickEvent()
   await eventsPage.clickAddEventBtn()
   await eventsPage.clickforselectCompany()
})
