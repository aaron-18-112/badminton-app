import {Page} from '@playwright/test';

export class EnrolPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToEnrolPage() {
        await this.page.goto('./enrol');
    }

    async navigateToPaymentPage() {
        await this.page.goto('./payment');
    }

    async formInput() {
        await this.clickJoinButton();
        await this.page.getByLabel('First Name:').click();
        await this.page.getByLabel('First Name:').fill('Test');
        await this.page.getByLabel('Last Name:').click();
        await this.page.getByLabel('Last Name:').fill('User');
        await this.page.getByLabel('Email Address:').click();
        await this.page.getByLabel('Email Address:').fill('test@ajbell.co.uk');
        await this.clickSubmitButton()
        return ('Test User');
    }

    async tableOutput() {
        const name = await this.page.locator('table td:first-child').allInnerTexts();
        return name.join('');
    }

    async enterFirstName(firstName: string = 'test') {
        await this.page.getByLabel('First Name:').click();
        await this.page.getByLabel('First Name:').fill(firstName);
    }

    async enterLastName(lastName: string = 'user') {
        await this.page.getByLabel('Last Name:').click();
        await this.page.getByLabel('Last Name:').fill(lastName + " " + (Math.floor(Math.random() * 100) + 1));
    }

    async enterEmail(email: string = 'user@ajbell.com') {
        await this.page.getByLabel('Email Address:').click();
        await this.page.getByLabel('Email Address:').fill(email);
    }

    async clickJoinButton() {
        await this.page.getByTestId('join-button').hover();
        await this.page.getByTestId('join-button').click();
        await this.page.waitForTimeout(800);
    }

    async clickSubmitButton() {
        await this.page.getByTestId('submit-button').hover();
        await this.page.getByTestId('submit-button').click();
        await this.page.waitForTimeout(800);
    }

    async enrolMultiplePlayers(numberOfPlayers: number) {

        for (let i = 1; i <= numberOfPlayers; i++) {
            await this.clickJoinButton();
            await this.enterFirstName();
            await this.enterLastName();
            await this.enterEmail();
            await this.clickSubmitButton()
        }

    }

    async getNumberOfPlayers() {
        const numberOfPlayersString = this.page.getByTestId('numberOfPlayers').innerText();
        return parseInt(await numberOfPlayersString);
    }

    async clickFirstRemoveButton() {
        await this.page.getByRole('button', {name: 'remove'}).first().hover();
        await this.page.getByRole('button', {name: 'remove'}).first().click();
    }

    async clickLastRemoveButton() {
        await this.page.getByRole('button', {name: 'remove'}).last().hover();
        await this.page.getByRole('button', {name: 'remove'}).last().click();
    }

    async removeMultiplePlayers(numberOfPlayers: number) {

        for (let i = 1; i <= (numberOfPlayers / 2); i++) {
            await this.clickFirstRemoveButton();
            await this.page.waitForTimeout(760)
        }
        for (let i = 1; i <= (numberOfPlayers / 2); i++) {
            await this.clickLastRemoveButton();
            await this.page.waitForTimeout(760)
        }

    }

    async getEnrolTableData() {
        const enrolColumn = this.page.locator('table td:first-child');
        return await enrolColumn.allInnerTexts();
    }

    async getPaymentTableData() {
        const paymentColumn = this.page.locator('table td:first-child');
        return await paymentColumn.allInnerTexts();
    }

    async saveWithNoFirstName() {
        await this.enterLastName();
        await this.enterEmail();
        await this.clickSubmitButton();
    }

    async getFirstNameError() {
        return this.page.getByTestId('firstName-required').textContent();
    }


    async saveWithNoLastName() {
        await this.enterFirstName();
        await this.enterEmail();
        await this.clickSubmitButton();
    }

    async getLastNameError() {
        return this.page.getByTestId('lastName-required').textContent();
    }

    async saveWithNoEmail() {
        await this.enterFirstName();
        await this.enterLastName();
        await this.clickSubmitButton();
    }

    async getNoEmailError() {
        return this.page.getByTestId('email-required').textContent();
    }

    async saveWithInvalidEmail() {
        await this.enterFirstName();
        await this.enterLastName();
        await this.page.getByLabel('Email Address:').click();
        await this.page.getByLabel('Email Address:').fill('invalidEmail');
        await this.clickSubmitButton();
    }

    async getInvalidEmailError() {
        return this.page.getByTestId('email-validation').textContent();
    }

}