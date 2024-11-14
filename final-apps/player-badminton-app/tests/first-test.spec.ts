import {expect, Page, test} from '@playwright/test';

test('has title', async ({page}) => {
    await page.goto('http://localhost:4200/enrol');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/AJ Bell ShuttleBell/);
});

test('add player', async ({page}) => {
    for (let i = 0; i <= 20; i++) {
        await addPlayer(page, `TestUser${i}`, `Surname${i}`, `testuser${i}@ajbell.com`);
    }
});

async function addPlayer(page: Page, firstName: String, lastName: String, email: String) {
    await page.goto('http://localhost:4200/enrol');
    await page.getByRole('button', {name: 'Join'}).click();
    await page.getByLabel('First Name:').click();
    await page.getByLabel('First Name:').fill(firstName = 'TestUser');
    await page.getByLabel('Last Name:').click();
    await page.getByLabel('Last Name:').fill(lastName = 'TestUser');
    await page.getByLabel('Email Address:').click();
    await page.getByLabel('Email Address:').fill(email = 'testuser@ajbell.com');
    await page.getByRole('button', {name: 'Submit'}).click();
}