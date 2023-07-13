import { expect, Page } from "@playwright/test";
export default class LoginPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private usermanagementPage_Elements  ={
        usermanagementRightAngleIcon : "//span[text()='User Management']/following-sibling::i",
        AlignWellUser: '//a[text()=" Align Well User "]',
        AddUser:'//button[text()=" Add User "]',
        AddUserText:'//h4[text()="Add User"]',
        AdduserEmailfield:"//input[@placeholder='Please type your email address']",
        userRole:"//select[@formcontrolname='userRole']",
        masterAdmin : "(//option[@value='owner_masteradmin'])[2]",
    }
    async clickUserManagementRightAngleIcon(){
        const ele = await this.page.locator(this.usermanagementPage_Elements.usermanagementRightAngleIcon)
        if( await ele.isVisible()){
                await ele.click({button:"left",delay: 1000})
        }
    }
    async clickAdduserPlusBtn(){
        const ele = this.page.locator(this.usermanagementPage_Elements.AddUser)
        if(await ele.isVisible()){
            await ele.click({button:"left",delay:1000})
            await this.page.waitForTimeout(1000)
        }
    }
    async verifyAddUserText(){
        const ele = this.page.locator(this.usermanagementPage_Elements.AddUserText)
        if(await ele.isVisible()){
            await expect(ele).toContainText("Add User")
        }
    }
   async inputAddUserEmail(username : string){
    const ele = this.page.locator(this.usermanagementPage_Elements.AdduserEmailfield)
    if(await ele.isVisible()){
         await ele.fill(username)
    }
   }
   async clickUserRole(){
    const ele = await this.page.locator(this.usermanagementPage_Elements.userRole)
    if(await ele.isVisible()){
        await ele.click()
        await this.page.waitForTimeout(2000)
    }
    await this.page.locator(this.usermanagementPage_Elements.masterAdmin).selectOption("owner_masteradmin")
   }
   
 
}