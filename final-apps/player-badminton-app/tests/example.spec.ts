import { test, expect, Page } from '@playwright/test';


async function enrollUser(page: Page, firstName: string, lastName: string, email: string): Promise<void> {
  await page.getByRole('button', { name: 'Enrol' }).click();
  await page.getByRole('button', { name: 'Join' }).click();
  await page.getByLabel('first name').waitFor({ state: 'visible' });
  await page.getByLabel('first name').fill(firstName);
  await page.getByLabel('last name').waitFor({ state: 'visible' });
  await page.getByLabel('last name').fill(lastName);
  await page.getByLabel('email').waitFor({ state: 'visible' });
  await page.getByLabel('email').fill(email);
  await page.getByRole('button', { name: 'Submit' }).click();
}


test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/enrol');



  await expect(page).toHaveTitle(/AJ Bell ShuttleBell/);
});

test('enroll multiple users', async ({ page }) => {
  await page.goto('http://localhost:4200/enrol');


  for (let i = 0; i <=19; i++) {
    await enrollUser(page, 'hamzah', 'haider', 'hamzahhaider2765@gmail.com');
    if (i == 19){

      const playerNumber = await page.getByTestId("number-of-players" ).allInnerTexts();
      console.log(playerNumber);
    }
  }

});
