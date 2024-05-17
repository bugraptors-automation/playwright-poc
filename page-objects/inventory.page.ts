import { expect, type Locator, type Page } from '@playwright/test';
//create class
class InventoryPage {
    readonly page: Page;
    readonly products: Locator;
    readonly addToCartBtn: Locator;
    readonly burgerMenuIcon : Locator;
    readonly loginEle: Locator;
    readonly loginPassHeading:Locator;
    readonly logoutBtn:Locator
    readonly shoppingCartIcon:Locator;
    //page Locators
    constructor(page:Page) {
        this.page = page
        this.products = page.locator(".inventory_list .inventory_item")
        this.shoppingCartIcon = page.locator(".shopping_cart_link")
    }
    //product list
    getProducts() {
        return this.products
    }
 
    getShoppingCartIcon(){
        return this.shoppingCartIcon
    }
}
export default InventoryPage;