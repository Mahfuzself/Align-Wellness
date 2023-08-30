import { expect, Page } from "@playwright/test";
export default class companyPage{
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private CompanyPage_Elements = {

        Company:"//a[contains(text(),'Company')]",
        AddCompany:"//button[text()=' Add Company ']",
        inputCompanyName:"Companyname",
        inputAdress:"address",
        inputSuite_Apt_Location:"SuitAptLocation",
        inputContactprsonFirstName:"Firstname",
        inputContactprsonLastName:"Lastname",
        inputContactprsonEmail:"Email",
        inputContactprsonPhoneNumber:"InputPhone",
        UploadCompanyProfilePhoto:"(//i[@class='icon-upload'])[1]",
        UploadCompanyCoverPhoto:"(//i[@class='icon-upload'])[2]",
        AddCompanyText:"//h4[text()='Add Company']",
        CompanyInformationText:"//h5[text()='Company Information']",
        EmptyComapanyNameAlertIcon: "(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        EmptyAddressAlertIcon: "(//i[contains(@class,'icon-warning-o text-danger')])[2]",
        EmptyFirstNameAlertIcon: "//input-field[@placeholder='Please enter your first name']//i[1]",
        EmptyLastNameAlertIcon: "//input-field[@placeholder='Please enter your last name']//i[1]",
        EmptyEmailAlertIcon: "//input-field[@placeholder='Please enter your email']//i[1]",
        EmptyAlertCompanyNameText:"//div[text()=' Company name cannot be empty. ']",
        AddCompanySubmittBtn:"//button[@type='submit']",
        EmptyAddressAlerttext: "//div[text()=' Please select a valid address after searching. ']",
        FirstNameAlerttext:"//div[text()=' First name cannot be empty. ']",
        LastNameAlerttext:"//div[text()=' Last name cannot be empty. ']",
        EmailAlerttext:"//div[text()=' Email cannot be empty. ']",
        InvalidEmailFormatText:"//span[text()='Invalid email format']",
        CompanyContactPersonEmailField:"//input[@placeholder='Please enter your email']",
        CompanyNameInputField: "//input[@placeholder='Please type your company name']",
        


    }
    async clickClientsPage(){
        await this.page.locator("//a[.='Client']").click()
        await this.page.waitForTimeout(3000)
    }
    async clickCompany(){
        const ele = await this.page.locator(this.CompanyPage_Elements.Company)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickAddCompany(){
        const ele = await this.page.locator(this.CompanyPage_Elements.AddCompany)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add company element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertCompanynameIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyComapanyNameAlertIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert Company name icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertAddressIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyAddressAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert Address icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertFirstNameIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyFirstNameAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert First name icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertLastnameIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyLastNameAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert Last name icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertEmailIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyEmailAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert Last name icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async verifyEmptyComapnyNameAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyAlertCompanyNameText)
        try {
            await expect.soft(ele).toContainText("Company name cannot be empty.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Company name Alert Icon | Empty company name text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async clickAddCompanySubmittBtn(){
        const ele = await this.page.locator(this.CompanyPage_Elements.AddCompanySubmittBtn)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Add company submitt | Add company save button element is not visible, could not found locetor : ${error}`)
        }
    }
    async verifyEmptyAddressAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyAddressAlerttext)
        try {
            await expect.soft(ele).toContainText("Please select a valid address after searching.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Address Alert Icon | Empty address text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async verifyEmptyFirstNameAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.FirstNameAlerttext)
        try {
            await expect.soft(ele).toContainText("First name cannot be empty.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Address Alert Icon | Empty First name text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async verifyEmptyLastNameAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.LastNameAlerttext)
        try {
            await expect.soft(ele).toContainText("Last name cannot be empty.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Address Alert Icon | Empty Last name text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async verifyEmailAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmailAlerttext)
        try {
            await expect.soft(ele).toContainText("Email cannot be empty.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Address Alert Icon | Empty Email text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async verifyInvalidEmailFormatText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.InvalidEmailFormatText)
        try {
            await expect.soft(ele).toContainText("Invalid email format")
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Email Alert Icon | Invalid  Email text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async InputInvalidEmail(){
        const ele = await this.page.locator(this.CompanyPage_Elements.CompanyContactPersonEmailField)
        try {
            await ele.fill("invalidemail")
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | input email field | Company name email field element is not visible, could not found locotor : ${error}`)
        }
    }
}