import {FormErrorValidation} from "./page-objects/form-error-validation";
import {expect, test} from "@playwright/test";

test.describe("Enrol Form Error Validation", () => {

    let formErrorValidation: FormErrorValidation;

    test.beforeEach(async ({page}) => {
        formErrorValidation = new FormErrorValidation(page);
        await formErrorValidation.navigateToEnrolPage();
        await formErrorValidation.clickJoinButton();
    })

    test('no first name', async ({page}) => {
        //Arrange
        const errorMessage = page.getByTestId('firstName-required');

        //Act
        await formErrorValidation.noFirstName();

        //Assert
        await expect(errorMessage).toContainText('First Name is required.');

    })

    test('no last name', async ({page}) => {
        //Arrange
        const errorMessage = page.getByTestId('lastName-required');

        //Act
        await formErrorValidation.noLastName();

        //Assert
        await expect(errorMessage).toContainText('Last Name is required.');

    })

    test('no email', async ({page}) => {
        //Arrange
        const errorMessage = page.getByTestId('email-required');

        //Act
        await formErrorValidation.noEmail();

        //Assert
        await expect(errorMessage).toContainText('Email is required.');

    })

    test('invalid email', async ({page}) => {
        //Arrange
        const errorMessage = page.getByTestId('email-validation');

        //Act
        await formErrorValidation.invalidEmail();

        //Assert
        await expect(errorMessage).toContainText('Please enter a valid email address.');

    })

})