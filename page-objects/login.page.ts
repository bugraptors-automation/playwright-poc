import { expect, type Locator, type Page } from '@playwright/test';
class LoginPage {
      readonly page: Page;
      readonly userName: Locator;
      readonly password: Locator;
      readonly signInBtn : Locator;
      readonly loginEle: Locator;
      readonly loginPassHeading:Locator;
      readonly usernameHeading:Locator
    //page locators
    constructor(page:Page) {
        this.page = page
        this.userName = page.locator("id=user-name")
        this.password = page.locator("id=password")
        this.signInBtn = page.locator("#login-button")
        this.loginEle = page.locator(".login-box")
        this.loginPassHeading=page.locator(".login_password")
        this.usernameHeading=page.locator(".login_credentials h4")
    }

    //login page
    async goToLoginPage() {
        await this.page.goto('/')
    }
    //userName field
    getUserName() {
        return this.userName
    }
    //password field
    getPassword() {
        return this.password
    }
    //signIn btn
    getSignInBtn() {
        return this.signInBtn
    }
    getLoginEle(){
        return this.loginEle
    }
    getLoginPassHeading(){
        return this.loginPassHeading
    }
    getUsernameHeading(){
        return this.usernameHeading
    }
    //custom command for login
    async login(user:string, password:string) {
        await expect(this.userName).toBeEnabled();
        await this.userName.fill(user)
        await expect(this.password).toBeEnabled();
        await this.password.fill(password)
        await this.signInBtn.click()
    }
}
export default LoginPage;
