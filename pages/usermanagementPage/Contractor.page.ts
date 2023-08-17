import { expect, Page } from "@playwright/test";
export default class ContractorPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    private ContractorPage_Elements = {
        ContractorPage:"//a[contains(.,'Contractor')]",
        AddContractorBtn: "//button[text()=' Add Contractor ']",
        AddNewContractor:"//button[text()=' Add New Contractor ']",
        EmailAlertIcon: "//i[contains(@class,'icon-warning-o text-danger')]",
        EmptyemailMessage:"//div[text()=' Email cannot be empty. ']",
        inputContarctorEmail: "//input[@placeholder='Please type your email address']",
        InvalidEmailText:"//h4[text()='Email invalid']",
    }
    async clickContractorPage(){
        const ele = this.page.locator(this.ContractorPage_Elements.ContractorPage)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Contractor page elements is not visible , Could not found locator : ${Error}`)
        }
    }
    async clickAddContactor(){
        const ele = this.page.locator(this.ContractorPage_Elements.AddContractorBtn)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Add contractor button elements is not visible , Could not found locator : ${Error}`)
        }
    }
    async clickAddNewContractor(){
        const ele = this.page.locator(this.ContractorPage_Elements.AddNewContractor)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Add new contractor button elements is not visible , Could not found locator : ${Error}`)
        }
    }
    async clickEmailAlertIcon(){
        const ele = this.page.locator(this.ContractorPage_Elements.EmailAlertIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Add new contractor email icon elements is not visible , Could not found locator : ${Error}`)
        }
    }
    async verifyEmptyEmailText(){
        const ele = await this.page.locator(this.ContractorPage_Elements.EmptyemailMessage)
        try {
            await expect.soft(ele).toContainText("Email cannot be empty.")
        } catch (error) {
            throw new Error(`Empty email alert message element is not found, Could not found locotor : ${error}`)
        }
    }
    async inputInvalidContractorEmail(){
        const ele = await this.page.locator(this.ContractorPage_Elements.inputContarctorEmail)
        try {
            await ele.fill("testautomation1234")
        } catch (error) {
            throw new Error(`Email input field element is not found, Could not found locotor : ${error}`)
        }
    }
    async VerifyInvalidEmailText(){
        const ele = await this.page.locator(this.ContractorPage_Elements.InvalidEmailText)
        try {
            await expect.soft(ele).toContainText("Email invalid")
        } catch (error) {
            throw new Error(`Invalid email text element is not visible, Could not found locotor : ${error}`)
        }
    }
    
}