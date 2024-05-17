import { expect, type Locator, type Page } from '@playwright/test';

class CheckoutCompletePage {
    readonly page: Page;
    readonly orderCompletedMessage: Locator;
    //page locators
    constructor(page: Page) {
        this.page = page
        this.orderCompletedMessage = page.locator(".complete-header")
    }

    getOrderCompletedMessage() {
        return this.orderCompletedMessage
    }
}
export default CheckoutCompletePage;