import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("TC - 01 : Validate empty company name alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  
})