import { expect, Page } from "@playwright/test";
export default class companyPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private CompanyPage_Elements = {
        Company:"//a[contains(.,'Company')]",
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
    
 
}