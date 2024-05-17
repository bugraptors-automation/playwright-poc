import { expect, type Locator, type Page } from '@playwright/test';

class CartPage {
    readonly page: Page;
    readonly inventoryItem: Locator;
    readonly inventoryItemPrice: Locator;
    readonly addToCartBtn: Locator;
    readonly checkOutBtn:Locator;
    //page locators
    constructor(page: Page) {
        this.page = page
        this.inventoryItem = page.locator(".inventory_item_name")
        this.inventoryItemPrice = page.locator(".inventory_item_price")
        this.checkOutBtn = page.locator(".checkout_button")
    }

    getInventoryItem(){
        return this.inventoryItem
    }

    getInventoryItemPrice(){
        return this.inventoryItemPrice
    }

    getCheckOutBtn(){
        return this.checkOutBtn
    }
}
export default CartPage;