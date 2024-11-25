import {EnrolPage} from "./page-objects/enrol-page";
import {expect, test} from "@playwright/test";

test.describe("Enrol Form Error Validation", () => {

    let enrolPage: EnrolPage;

    test.beforeEach(async ({page}) => {
        enrolPage = new EnrolPage(page);
        await enrolPage.navigateToEnrolPage();
        await enrolPage.clickJoinButton();
    })

    test('error should show when first name is empty', async ({page}) => {
        //Arrange
        await enrolPage.saveWithNoFirstName(0);

        //Act
        const errorMessage = await enrolPage.getFirstNameError();

        //Assert
        expect(errorMessage).toContain('First Name is required.');

    })

    test('error should show when last name is empty', async ({page}) => {
        //Arrange
        await enrolPage.saveWithNoLastName();

        //Act
        const errorMessage = await enrolPage.getLastNameError();

        //Assert
        expect(errorMessage).toContain('Last Name is required.');

    })

    test('error should show when email address is empty', async ({page}) => {
        //Arrange
        await enrolPage.saveWithNoEmail(0);

        //Act
        const errorMessage = await enrolPage.getNoEmailError()

        //Assert
        expect(errorMessage).toContain('Email is required.');

    })

    test('error should show when email address is invalid', async ({page}) => {
        //Arrange
        await enrolPage.saveWithInvalidEmail(0);

        //Act
        const errorMessage = await enrolPage.getInvalidEmailError()

        //Assert
        expect(errorMessage).toContain('Please enter a valid email address.');

    })

    //Edge Cases: Numbers in firstName/lastName - Currently Allowed - Potentially update form validation in the future

})