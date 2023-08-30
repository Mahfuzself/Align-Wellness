import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("TC - 01 : Validate empty company name alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertCompanynameIcon()
  await companyPage.verifyEmptyComapnyNameAlertText()
  
})
test("TC - 02 : Validate company contact person empty address empty alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertAddressIcon()
  await companyPage.verifyEmptyAddressAlertText()
  
})
test("TC - 03 : Validate company contact person First name empty alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertFirstNameIcon()
  await companyPage.verifyEmptyFirstNameAlertText()
  
})
test("TC - 04 : Validate company contact person Last name  empty alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertLastnameIcon()
  await companyPage.verifyEmptyLastNameAlertText()
  
})
test("TC - 05 : Validate company contact person email empty alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertEmailIcon()
  await companyPage.verifyEmailAlertText()
  
})
test.only("TC - 06 : Validate invalid email address format alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.InputInvalidEmail()
  await companyPage.clickEmptyAlertEmailIcon()
  await companyPage.verifyInvalidEmailFormatText()
  
})