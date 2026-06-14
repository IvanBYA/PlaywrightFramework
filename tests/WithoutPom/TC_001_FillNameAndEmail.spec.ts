import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test("TC_001_Fill Name And Email", async ({ page }, testInfo) => {
  
    // Generar datos aleatorios UNA SOLA VEZ
  const objetoTestData = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10, memorable: false }),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
  };

  const url = "https://automationexercise.com/";

  /* STEP 1 */
  await test.step(`Visit the URL: ${url}`, async () => {
    await page.goto(url);
    await expect(page).toHaveTitle("Automation Exercise");
  });

  /* STEP 2 */
  await test.step(`Validate if the Home Page is visible successfully`, async () => {
    await expect(page.locator("//a[contains(@style,'orange')]")).toBeVisible();
    await testInfo.attach('screenshot', {
        body: await page.screenshot({path: 'screenshots/imgHomePage.png'}),
        contentType: 'image/png',
    })    
    await page.locator("p[class=pull-left]").scrollIntoViewIfNeeded();
    await expect(page.locator("p.pull-left")).toBeVisible();
    await testInfo.attach('screenshot', {
        body: await page.screenshot({path: 'screenshots/imgHomePageFooter.png'}),
        contentType: 'image/png',
    })
  });
 
  /* STEP 3 */
  await test.step('Click on SignUp Button', async() => {
    await page.getByRole("link", {name: "Signup / Login"}).click();
    await expect(page).toHaveURL("https://automationexercise.com/login")
    await page.waitForLoadState('load');
    await testInfo.attach('screenshot', {
        body: await page.screenshot({path: 'screenshots/signUpLoginPage.png'}),
        contentType: 'image/png',
    })

  })

  /* STEP 4 */
  await test.step('Validate if exist the text "New User Signup!"', async() => {
    await expect(page.locator("//h2[normalize-space()='New User Signup!']")).toBeVisible();
    await testInfo.attach('screenshot', {
        body: await page.screenshot({path: 'screenshots/textNewUserSignUpVisible.png'}),
        contentType: 'image/png',
    })
  })


  /* STEP 5 */
  await test.step('Fill Name and Email', async() => {
    await page.getByPlaceholder("Name").fill(objetoTestData.name);
    await page.locator("[data-qa='signup-email']").fill(objetoTestData.email);
    
    await expect(page.getByPlaceholder("Name")).toHaveValue(objetoTestData.name);
    await expect(page.locator("[data-qa='signup-email']")).toHaveValue(objetoTestData.email);

    await testInfo.attach('screenshot', {
        body: await page.screenshot({path: 'screenshots/nameAdded.png'}),
        contentType: 'image/png',
    })
  })
});

