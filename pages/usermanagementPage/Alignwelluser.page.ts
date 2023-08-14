import { expect, Page } from "@playwright/test";
export default class AlignwelluserPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    private AlignwellnessuserElements = {
        AlignwellUser: "//a[contains(text(),'Align Well User')]",
        AddUser : "//button[text()=' Add User ']",
        emptyEmailText:"//div[text()=' Email cannot be empty. ']",
        EmptyEmailIcon: "(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        EmptyRoleIcon: "//i[contains(@class,'icon-warning-o text-danger')]",
        usermanagementPage : "//a[.='User Management']",
        AddNewUser: "//button[text()=' Add New User ']",
        AddUserEmailField: "//input[@placeholder='Please type your email address']",
        EmptyUserRoleText: "//div[text()=' User role cannot be empty. ']",
        MasterAdmin : "#userRole",
        InvalidEmailText:"//h4[text()='Email invalid ']",

    }
    async clickAlignwellUser(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AlignwellUser)
            await ele.click()
            await this.page.waitForTimeout(4000)
       

    }
    async clickAddUserBtn(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AddUser)
        try {
            await ele.click({button:"left",delay: 1000})
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Align well add user element is not visible, Could not found loctor  : ${Error}`)
        }
    }
    async clickEmptyEmailIcon(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmptyEmailIcon)
        try {
            await ele.click({button:"left",delay: 1000})
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Align well user empty email icon element is not visible, Could not found loctor: ${Error}`)
        }
    }
    async clickEmptyRoleIcon(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmptyRoleIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Align well user empty Role icon element is not visible, Could not found loctor: ${Error}`)
        }
    }
    async clickUserManagementPage(){
        await this.page.waitForTimeout(1000)
        const ele = await this.page.locator(this.AlignwellnessuserElements.usermanagementPage)
            await ele.click()
            console.log("Hello")
    }
    async verifyEmptyEmailText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.emptyEmailText)
        try {
            await this.page.waitForTimeout(1000)
             await expect.soft(ele).toContainText("Email cannot be empty.")
             console.log("Successfully verified!")
        } catch (error) {
            throw new Error(`Align well add user empty email message element is not visible, Could not found loctor : ${Error}`)
        }
    }
    async verifyEmptyRoleText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmptyUserRoleText)
        try {
            await this.page.waitForTimeout(1000)
             await expect.soft(ele).toContainText("User role cannot be empty.")
             console.log("Successfully verified!")
        } catch (error) {
            throw new Error(`Align well add user empty role text element is not visible, Could not found loctor : ${Error}`)
        }
    }
    async clickAddNewUserBtn(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AddNewUser)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Add new user button element is not visible , Could not found locator : ${Error}`)
        }
    }
    async inputAdduserEmail(){
        const ele  = await this.page.locator(this.AlignwellnessuserElements.AddUserEmailField)
        try {
            await ele.fill('testautomation@yopmail.com')
        } catch (error) {
             throw new Error(`Add user email field element is not visible , Could not found locator : ${Error}`)
        }
    }
    async inputInvaliduserEmail(){
        const ele  = await this.page.locator(this.AlignwellnessuserElements.AddUserEmailField)
        try {
            await ele.fill('testautomation@')
        } catch (error) {
             throw new Error(`Add user email field element is not visible , Could not found locator : ${Error}`)
        }
    }
    async selectMasterAdminUser(){
       await this.page.locator(this.AlignwellnessuserElements.MasterAdmin).selectOption({label:"Master Admin"})
       await this.page.waitForTimeout(2000)
    }
    async verifyInvalidEmail(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.InvalidEmailText)
        //await this.page.waitForSelector(this.AlignwellnessuserElements.InvalidEmailText)
        try {
            await expect.soft(ele).toContainText("Email invalid ")
        } catch (error) {
            throw new Error(`Invalid email text element is not visible, Could not found locotor : ${Error}`)
        }
    }
    async InputRendomEmail(){
        const email = "Test"
        const randomString = new Date().getTime();
        const testEmail = `${email}${randomString}@yopmail.com`;
        await this.page.locator(this.AlignwellnessuserElements.AddUserEmailField).fill(testEmail)
    }
}