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
        const numberOfPlayers = 20
        //Act
        await enrolPage.removeMultiplePlayers(numberOfPlayers);
        const numberOfPlayersLabel = await enrolPage.getNumberOfPlayers();
        //Assert
        expect(numberOfPlayersLabel).toEqual(0);
    })

})