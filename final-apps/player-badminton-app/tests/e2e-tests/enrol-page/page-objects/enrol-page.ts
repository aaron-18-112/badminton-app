import {Page} from '@playwright/test';

export class EnrolPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToEnrolPage() {
        await this.page.goto('./enrol');
    }

    async enterFirstName (firstName: string = 'test') {
        await this.page.getByLabel('First Name:').click();
        await this.page.getByLabel('First Name:').fill(firstName);
    }

    async enterLastName (lastName: string = 'user') {
        await this.page.getByLabel('Last Name:').click();
        await this.page.getByLabel('Last Name:').fill(lastName);
    }

    async enterEmail (email: string = 'user@ajbell.com') {
        await this.page.getByLabel('Email Address:').click();
        await this.page.getByLabel('Email Address:').fill(email);
    }

    async clickJoinButton () {
        await this.page.getByTestId('join-button').hover();
        await this.page.getByTestId('join-button').click();
    }

    async clickSubmitButton () {
        await this.page.getByTestId('submit-button').hover();
        await this.page.getByTestId('submit-button').click();
    }

    async enrolMultiplePlayers(numberOfPlayers: number) {

        for (let i = 1; i <= numberOfPlayers; i++) {
            await this.clickJoinButton();
            await this.enterFirstName();
            await this.enterLastName();
            await this.enterEmail();
            await this.clickSubmitButton()
            await this.page.waitForTimeout(760)
        }

    }

   async getNumberOfPlayers() {
       const numberOfPlayersString = this.page.getByTestId('numberOfPlayers').innerText();
       return parseInt(await numberOfPlayersString);
   }

    async clickRemoveButton () {
        await this.page.getByRole('button', { name: 'remove' }).hover();
        await this.page.getByRole('button', { name: 'remove' }).click();
    }

   async removeMultiplePlayers (numberOfPlayers: number) {
        await this.enrolMultiplePlayers(numberOfPlayers);

        for (let i = 1; i <= numberOfPlayers; i++) {
            await this.clickRemoveButton();
            await this.page.waitForTimeout(760)
        }

   }

}