import {expect, test, request, APIRequestContext, BrowserContext, Browser, Page} from '@playwright/test';
import {EnrolPage} from "./page-objects/enrol-page";


test.describe("Enrol Page", () => {

    let enrolPage: EnrolPage;
    let apiRequestContext : APIRequestContext;
    let browserContext: BrowserContext;
    let page: Page;

    test.beforeEach(async ({page}) => {
        enrolPage = new EnrolPage(page);
        await enrolPage.navigateToEnrolPage();
    })

    test.beforeAll(async ({browser}) => {
        apiRequestContext = await request.newContext();
        await apiRequestContext.delete("http://localhost:5089/api/Player/delete-all-players");

        browserContext = await browser.newContext();
        page = await browserContext.newPage();
    })


    test('has title', async ({page}) => {
        await expect(page).toHaveTitle(/AJ Bell ShuttleBell/);
    });

    test('form input data matches data displayed in table', async () => {

        //Act
        const formNameValue = await enrolPage.formInput()
        const tableNameValue = await enrolPage.tableOutput()

        //Assert
        expect(formNameValue).toEqual(tableNameValue);

    })

    test('enrol multiple players - expect correct number of players to be added', async ({page}, testInfo) => {

        //Arrange
        const numberOfPlayers = 10 //Change number of players
        const workerId: number = testInfo.workerIndex;

        expect(enrolPage).toBeDefined();

        //Act
        await enrolPage.enrolMultiplePlayers(numberOfPlayers, workerId)
        const numberOfPlayersLabel = await enrolPage.getNumberOfPlayersForWorker(workerId)

        //Assert
        expect(numberOfPlayersLabel).toEqual(numberOfPlayers);

    })

    test('remove multiple players - expect total to drop to 0', async ({page}, testInfo) => {

        //Arrange
        const numberOfPlayers = 10
        const workerId: number = testInfo.workerIndex;

        //Act
        await enrolPage.enrolMultiplePlayers(numberOfPlayers, workerId);
        await enrolPage.removeMultiplePlayers(numberOfPlayers, workerId);
        const numberOfPlayersLabel = await enrolPage.getNumberOfPlayersForWorker(workerId);

        //Assert
        expect(numberOfPlayersLabel).toEqual(0);
    })

    test('check enrol table values are displaying on the payment table', async ({page}, testInfo) => {

        //Arrange
        const numberOfPlayers = 10
        const workerId: number = testInfo.workerIndex;

        //Act
        await enrolPage.enrolMultiplePlayers(numberOfPlayers, workerId);
        const enrolTableData = await enrolPage.getEnrolTableDataForWorker(workerId);

        await enrolPage.navigateToPaymentPage();
        const paymentTableData = await enrolPage.getPaymentTableDataForWorker(workerId);

        //Assert
        expect(enrolTableData.length).toEqual(paymentTableData.length);
        expect(JSON.stringify(enrolTableData)).toEqual(JSON.stringify(paymentTableData));

    })

})