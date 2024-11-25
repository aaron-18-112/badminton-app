import {Page} from '@playwright/test';
import {PlayerDetailsService} from "../../../../src/app/services/player-details.service";

export class EnrolPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToEnrolPage() {
        await this.page.goto('./enrol');
    }

    async navigateToPaymentPage() {
        await this.page.goto('./payment');
    }

    async deleteAllPlayers(playerDetailsService: PlayerDetailsService) {
        playerDetailsService.deleteAllPlayers();
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
        const players = await this.page.locator('table td:first-child').allInnerTexts();
        return players.find(player => player === "Test User");
    }

    async enterFirstName(firstName: string = 'test') {
        await this.page.getByLabel('First Name:').click();
        await this.page.getByLabel('First Name:').fill(firstName);
    }

    async enterLastName(lastName: string, workerId: number) {
        await this.page.getByLabel('Last Name:').click();
        await this.page.getByLabel('Last Name:').fill(lastName + " " + workerId);
    }

    async enterEmail(email: string = 'user@ajbell.com') {
        await this.page.getByLabel('Email Address:').click();
        await this.page.getByLabel('Email Address:').fill(email);
    }

    async clickJoinButton() {
        await this.page.getByTestId('join-button').hover();
        await this.page.getByTestId('join-button').click();
    }

    async clickSubmitButton() {
        await this.page.getByTestId('submit-button').hover();
        await this.page.getByTestId('submit-button').click();
    }

    enrolMultiplePlayers = async (numberOfPlayers: number, workerId: number) => {
        for (let i = 1; i <= numberOfPlayers; i++) {
            await this.clickJoinButton();
            await this.enterFirstName();
            await this.enterLastName("user", workerId);
            await this.enterEmail();
            await this.clickSubmitButton();
        }
    }

    async getNumberOfPlayersForWorker(workerId: number): Promise<any> {
        const players = await this.page.locator('table td:first-child').allInnerTexts();
        const playersFilteredByWorkerId = players.filter(player => player.includes(String(workerId)));

        return playersFilteredByWorkerId.length;
    }

    async removeMultiplePlayers(numberOfPlayers: number, workerId: number) {

        for (let i = 1; i <= numberOfPlayers; i++) {

            const playerRow = this.page.locator(`table tr:has(td:nth-child(1):has-text("${workerId}"))`).first();

            await playerRow.locator('td:nth-child(2)').click();
        }
    }

    async getEnrolTableDataForWorker(workerId: number): Promise<string[]> {
        const enrolColumn = this.page.locator('table td:first-child');
        const players = await enrolColumn.allInnerTexts();

        return players.filter(player => player.includes(String(workerId)));
    }

    async getPaymentTableDataForWorker(workerId: number): Promise<string[]> {
        const paymentColumn = this.page.locator('table td:first-child');
        const players = await paymentColumn.allInnerTexts();

        return players.filter(player => player.includes(String(workerId)));
    }

    async saveWithNoFirstName(number: number) {
        await this.enterLastName("", number);
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

    async saveWithNoEmail(number: number) {
        await this.enterFirstName();
        await this.enterLastName("", number);
        await this.clickSubmitButton();
    }

    async getNoEmailError() {
        return this.page.getByTestId('email-required').textContent();
    }

    async saveWithInvalidEmail(workerId: number) {
        await this.enterFirstName();
        await this.enterLastName("", workerId);
        await this.page.getByLabel('Email Address:').click();
        await this.page.getByLabel('Email Address:').fill('invalidEmail');
        await this.clickSubmitButton();
    }

    async getInvalidEmailError() {
        return this.page.getByTestId('email-validation').textContent();
    }

}