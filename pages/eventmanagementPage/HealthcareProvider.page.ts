import { expect, Page } from "@playwright/test";
export default class HealthcareProviderPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private HealtcareProviderElements = {
        healthcareprovider : "//a[contains(.,'Healthcare Providers')]",
        AddProviderBtn:"//button[text()=' Add Provider ']",
        AddnewProvider:"//button[text()=' Add New Provider ']",
        EmptyEmailAlertIcon:"(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        EmailCannotbeEmptyText:"//div[text()=' Email cannot be empty. ']",
        EmptyCategoryIcon:"(//i[contains(@class,'icon-warning-o text-danger')])[2]",
        EmptyProviderCategoryText:"//div[text()=' Provider Type cannot be empty. ']"
    }
    async clickHealthcareProviderPage(){
        const ele = await this.page.locator(this.HealtcareProviderElements.healthcareprovider)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Healthcare provider element is not visible, could not find locotor : ${error}`)
        }
    }
    async clickAddProviderBtn(){
        const ele = await this.page.locator(this.HealtcareProviderElements.AddProviderBtn)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Healthcare provider page | Add provider element is not visible, could not find locotor : ${error}`)
        }
    }
    async clickAddNewProviderBtn(){
        const ele = await this.page.locator(this.HealtcareProviderElements.AddnewProvider)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Healthcare provider page | Add new provider element is not visible, could not find locotor : ${error}`)
        }
    }
    async clickEmptyEmailAlertIcon(){
        const ele = await this.page.locator(this.HealtcareProviderElements.EmptyEmailAlertIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Healthcare provider page | Add Provider | Add new Provider | Empty Email Icon element is not visible, could not find locotor : ${error}`)
        }
    }
    async verifyEmptyEmailText(){
        const ele = await this.page.locator(this.HealtcareProviderElements.EmailCannotbeEmptyText)
        try {
            await expect(ele).toContainText("Email cannot be empty.")
        } catch (error) {
            throw new Error(`Healthcare provider page | Add Provider | Add new Provider | Empty Email Icon | Email cannot be Empty text element is not visible, could not find locotor : ${error}`)
        }
    }
    async clickEmptyProvidercategoryAlertIcon(){
        const ele = await this.page.locator(this.HealtcareProviderElements.EmptyCategoryIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Healthcare provider page | Add Provider | Add new Provider | Empty Provider category Icon element is not visible, could not find locotor : ${error}`)
        }
    }
    async verifyEmptyProviderCategoryText(){
        const ele = await this.page.locator(this.HealtcareProviderElements.EmptyProviderCategoryText)
        try {
            await expect(ele).toContainText("Provider Type cannot be empty.")
        } catch (error) {
            throw new Error(`Healthcare provider page | Add Provider | Add new Provider | Empty Provider category Icon | Provider type cannot be Empty text element is not visible, could not find locotor : ${error}`)
        }
    }
    
}