import { expect, Page } from "@playwright/test";
export default class vendorPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
}