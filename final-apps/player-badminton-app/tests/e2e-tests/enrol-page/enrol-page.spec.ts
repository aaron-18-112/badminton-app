import {expect, test} from '@playwright/test';
import {EnrolPage} from "./page-objects/enrol-page";

test.describe("Enrol Page", () => {

    let enrolPage : EnrolPage;

    test.beforeEach(async ({page}) => {
        enrolPage = new EnrolPage(page);
        await enrolPage.navigateToEnrolPage();
    })

    test('has title', async ({page}) => {
        await expect(page).toHaveTitle(/AJ Bell ShuttleBell/);
    });

    test('enrol multiple players - expect correct number of players to be added', async () => {
        test.slow();
        //Arrange
        const numberOfPlayers = 20 //Change number of players
        //Act
        await enrolPage.enrolMultiplePlayers(numberOfPlayers);
        const numberOfPlayersLabel = await enrolPage.getNumberOfPlayers();
        //Assert
        expect(numberOfPlayersLabel).toEqual(numberOfPlayers);
    })

    test('remove multiple players - expect total to drop to 0', async () => {
        test.slow();
        //Arrange
        const numberOfPlayers = 10
        //Act
        await enrolPage.enrolMultiplePlayers(numberOfPlayers);
        await enrolPage.removeMultiplePlayers(numberOfPlayers);
        const numberOfPlayersLabel = await enrolPage.getNumberOfPlayers();
        //Assert
        expect(numberOfPlayersLabel).toEqual(0);
    })

    test('check enrol table values are displaying on the payment table', async () => {
        test.slow()
        //Arrange
        const numberOfPlayers = 10
        //Act
        await enrolPage.enrolMultiplePlayers(numberOfPlayers);
        await enrolPage.getEnrolTableData();
        const enrolTableData = await enrolPage.getEnrolTableData();
        await enrolPage.navigateToPaymentPage();
        await enrolPage.getPaymentTableData()
        const paymentTableData = await enrolPage.getPaymentTableData();
        //Assert
        expect(enrolTableData.length).toEqual(paymentTableData.length);
        expect (JSON.stringify(enrolTableData) === JSON.stringify(paymentTableData))

    })

})