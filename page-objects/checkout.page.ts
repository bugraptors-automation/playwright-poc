import { expect, type Locator, type Page } from '@playwright/test';

class CheckoutPage {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly postalCodeField: Locator;
    readonly checkOutBtn: Locator;
    readonly continueBtn: Locator;
    //page locators
    constructor(page: Page) {
        this.page = page
        this.firstNameField = page.locator("#first-name")
        this.lastNameField = page.locator("#last-name")
        this.postalCodeField = page.locator("#postal-code")
        this.continueBtn = page.locator(".cart_button")
    }

    getFirstNameField() {
        return this.firstNameField
    }

    getLastNameField() {
        return this.lastNameField
    }

    getPostalCodeField() {
        return this.postalCodeField
    }

    getContinueBtn(){
        return this.continueBtn
    }
}
export default CheckoutPage;