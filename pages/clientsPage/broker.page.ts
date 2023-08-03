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
        
    }
}