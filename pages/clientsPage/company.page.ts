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
        CompanyInformationText:"//h5[text()='Company Information']"

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
 
}