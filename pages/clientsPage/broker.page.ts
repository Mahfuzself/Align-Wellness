import { expect, Page } from "@playwright/test";
export default class brokerPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private brokerPage_Elements = {
        brokerPage : "//a[contains(text(),'Broker')]",
        addbroker : "//button[text()=' Add Broker ']",
        inputbrokerName : "BrokerName",
        input_BrokerContactpersonFirstname: "FirstName",
        input_BrokerContactpersonLastname:"LastName",
        input_BrokerContactpersonEmail:"Email",
        input_Broker_Suite:"SuiteAptLocation",
        AddBrokerText:"//h4[text()='Add broker']",
        BrokerInformation: "//h5[text()='Broker Information']",
        AddNewBrokerBtn:"//button[text()=' Add New Broker ']",
        BrokerNameText: "//label[@for='BrokerName']",
        BrokerPopupCloseIcon:"icon-close",
        AdressText:"//label[@for='address']",
        Suit_Apt_Location:"//label[text()=' Suite/apt/location ']",
        ContactPersonText: "//h5[text()='Contact Person']",
        BrokerName_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        BrokerAddress_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[2]",
        BrokerContactPerson_FirstName_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[3]",
        BrokerContactPerson_LastName_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[4]",
        BrokerContactPerson_Email_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[5]",
        BrokerEmptyNameAlertText:'//div[text()=" Broker Name cannot be empty. "]',
        BrokerEmptyAddressAlertText:"//div[text()=' Please select a valid address after searching. ']",
        BrokerContactPersonEmptyFirstNameAlertText:"//div[text()=' First Name cannot be empty. ']",
        BrokerContactPersonEmptyLastNameAlertText:"//div[text()=' Last Name cannot be empty. ']",
        BrokerContactPersonEmptyEmailAlertText:"//div[text()=' Email cannot be empty. ']",



    }
    async clickClientsPage(){
        await this.page.locator("//a[.='Client']").click()
        await this.page.waitForTimeout(3000)
    }
    async clickAddbrokerBtn(){
        const ele = this.page.locator(this.brokerPage_Elements.addbroker)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async click_BrokerName_Empty_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerName_EmptyAlert_Icon)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker name empty alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBroker_EmptyAddress_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerName_EmptyAlert_Icon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker name empty alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBroker_ContactPerson_FirstName_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPerson_FirstName_EmptyAlert_Icon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person first name empty alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBroker_ContactPerson_LastName_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPerson_LastName_EmptyAlert_Icon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker Contact person last name empty alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBroker_ContactPerson_Email_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPerson_Email_EmptyAlert_Icon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person empty email alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerName_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerEmptyNameAlertText)
        try {
            await expect.soft(ele).toContainText("Broker Name cannot be empty.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker address empty alert icon | Broker name empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerAddress_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerEmptyAddressAlertText)
        try {
            await expect.soft(ele).toContainText("Please select a valid address after searching.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker address empty alert icon | Broker address empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerContactPerson_FirstName_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPersonEmptyFirstNameAlertText)
        try {
            await expect.soft(ele).toContainText("First Name cannot be empty.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person First name empty alert icon | Broker contact person first namme empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerContactPerson_LastName_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPersonEmptyLastNameAlertText)
        try {
            await expect.soft(ele).toContainText("Last Name cannot be empty.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person last name empty alert icon | Broker contact person last namme empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerContactPerson_Email_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPersonEmptyEmailAlertText)
        try {
            await expect.soft(ele).toContainText("Email cannot be empty.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person email empty alert icon | Broker contact person email empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickAddnewBrokerBtn(){
        const ele = this.page.locator(this.brokerPage_Elements.AddNewBrokerBtn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add new broker element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBrokerPage(){
        const ele = this.page.locator(this.brokerPage_Elements.brokerPage)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker page element is not visible , Could not found locotor : ${Error}`)
        }
    }
    
    
}