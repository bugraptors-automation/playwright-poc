import { test, expect } from '@playwright/test';
import LoginPage from '../page-objects/login.page.ts';
import InventoryPage from '../page-objects/inventory.page.ts'
import CartPage from '../page-objects/cart.page.ts';
import CheckoutPage from '../page-objects/checkout.page.ts';
import CheckoutCompletePage from '../page-objects/checkoutComplete.page.ts';
import cred from '../fixtures/cred.json'
import { ADD_TO_CART, BARAK, CART_PAGE_ENDPOINT, CHECKOUT_COMPLETE_ENDPOINT, CHECKOUT_STEPONE_PAGE_ENDPOINT, CHECKOUT_STEPTWO_PAGE_ENDPOINT, INVENTORY_PAGE_ENDPOINT, POSTAL_CODE, ROHIT, THANK_YOU_MESSAGE } from '../fixtures/constants.ts';

let loginPage: LoginPage
let inventoryPage: InventoryPage
let cartPage: CartPage
let checkoutPage:CheckoutPage
let checkoutCompletePage:CheckoutCompletePage

test.beforeEach(async ({ page }) => {
    await page.goto("/");
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page)
    cartPage = new CartPage(page)
    checkoutPage = new CheckoutPage(page)
    checkoutCompletePage = new CheckoutCompletePage(page)
})
test('verify user successfully order the product', async ({ page }) => {
    await loginPage.login(cred.saucedemo.admin.username, cred.saucedemo.admin.password);
    //verify user is on inventory page
    await expect(page.url()).toContain(INVENTORY_PAGE_ENDPOINT)
    //verify number of products
    await expect(inventoryPage.getProducts()).toHaveCount(6);
    //verify add to cart btn is visible
    const itemName = await inventoryPage.products.nth(0).locator(".inventory_item_name").innerText();
    const itemPrice = await inventoryPage.products.nth(0).locator(".inventory_item_price").innerText();
    const addToCartBtn = await inventoryPage.products.nth(0).locator("button")
    await expect(addToCartBtn).toBeVisible()
    // //verify add to cart btn is enabled
    await expect(addToCartBtn).toBeEnabled()
    // //verify add to cart btn text
    await expect(addToCartBtn).toContainText(ADD_TO_CART)
    // //click on add to cart btn
    await addToCartBtn.click()
    // //click on cart btn
    await expect(inventoryPage.shoppingCartIcon).toBeVisible();
    await inventoryPage.shoppingCartIcon.click();
    // //verify user is on cart page
    await expect(page.url()).toContain(CART_PAGE_ENDPOINT)
    //verify product has added
    await expect(cartPage.getInventoryItem()).toContainText(itemName)
    await expect(cartPage.getInventoryItemPrice()).toContainText(itemPrice)
    //click on check out btn
    await expect(cartPage.checkOutBtn).toBeEnabled()
    await cartPage.checkOutBtn.click()
    //verify user is on checkout page
    await expect(page.url()).toContain(CHECKOUT_STEPONE_PAGE_ENDPOINT)
    const firstNameField = await checkoutPage.firstNameField
    const lastNameField = await checkoutPage.lastNameField
    const postalCodeField = await checkoutPage.postalCodeField
    await expect(firstNameField).toBeEnabled()
    await firstNameField.fill(ROHIT)
    await expect(lastNameField).toBeEnabled()
    await lastNameField.fill(BARAK)
    await expect(postalCodeField).toBeEnabled()
    await postalCodeField.fill(POSTAL_CODE)
    await checkoutPage.continueBtn.click()
    //verify user is on checkout step two page
    await expect(page.url()).toContain(CHECKOUT_STEPTWO_PAGE_ENDPOINT)
    await expect(cartPage.getInventoryItem()).toContainText(itemName)
    await expect(cartPage.getInventoryItemPrice()).toContainText(itemPrice)
    await checkoutPage.continueBtn.click()
    //verify user is on checkout complete page
    await expect(page.url()).toContain(CHECKOUT_COMPLETE_ENDPOINT)
    //verify order has completed
    await expect(checkoutCompletePage.getOrderCompletedMessage()).toBeVisible()
    await expect(await checkoutCompletePage.getOrderCompletedMessage().innerText()).toContain(THANK_YOU_MESSAGE)
});
