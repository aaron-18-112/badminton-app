import {Page} from "@playwright/test";

export class FormErrorValidation {

    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateToEnrolPage(): Promise<void> {
        await this.page.goto('./enrol');
    }

    async clickJoinButton () {
        await this.page.getByTestId('join-button').hover();
        await this.page.getByTestId('join-button').click();
        await this.page.waitForTimeout(800);
    }

    async clickSubmitButton() {
        await this.page.getByTestId('submit-button').hover();
        await this.page.getByTestId('submit-button').click();
        await this.page.waitForTimeout(800);
    }

    async enterFirstName(firstName: string = 'test') {
        await this.page.getByLabel('First Name:').click();
        await this.page.getByLabel('First Name:').fill(firstName);
    }

    async enterLastName(lastName: string = 'user') {
        await this.page.getByLabel('Last Name:').click();
        await this.page.getByLabel('Last Name:').fill(lastName);
    }

    async enterEmail(email: string = 'user@ajbell.com') {
        await this.page.getByLabel('Email Address:').click();
        await this.page.getByLabel('Email Address:').fill(email);
    }


    async noFirstName () {
        await this.enterLastName();
        await this.enterEmail();
        await this.clickSubmitButton();
    }


    async noLastName () {
        await this.enterFirstName();
        await this.enterEmail();
        await this.clickSubmitButton();
    }

    async noEmail () {
        await this.enterFirstName();
        await this.enterLastName();
        await this.clickSubmitButton();
    }

    async invalidEmail () {
        await this.enterFirstName();
        await this.enterLastName();
        await this.page.getByLabel('Email Address:').click();
        await this.page.getByLabel('Email Address:').fill('invalidEmail');
        await this.clickSubmitButton();
    }

    //Edge Cases: Numbers in firstName/lastName - Currently Allowed - Potentially update form validation in the future

}