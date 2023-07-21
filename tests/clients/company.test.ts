import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("Validate company added successfully",async({page,loginPage,clientsPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validusername,data.validpassword)
})