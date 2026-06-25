import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { HomePage } from '../../pages/HomePage';
import { HeaderTagPage } from '../../pages/HeaderTagPage';
import { SignUpPage } from '../../pages/SignUpPage';
import { AccountInformationPage } from '../../pages/AccountInformationPage';
import { AddressInformationPage } from '../../pages/AddressInformationPage';
import { AccountCreatedPage } from '../../pages/AccountCreatedPage';
import { DeleteAccountPage } from '../../pages/DeleteAccountPage';


/**
 * Este script fue generado a partir de un prompt utilizando la estructura actual del proyecto
 * Prompt file utilizado: prompt_TC001_Matrix
 */
test("TC_001_RegisterUser - Complete flow: Register, Create, and Delete Account", async ({ page }, testInfo) => {

  /**
   * Generar datos aleatorios para el registro del usuario
   * Utilizamos @faker-js/faker para crear datos realistas
   * @date 24/06/2026
   */
  const testData = {
    name: faker.person.fullName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10, memorable: false }),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    company: faker.company.name(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
  };

  /**
   * Instanciar las clases Page Object Model
   * @date 24/06/2026
   */
  const homePage = new HomePage(page, testInfo);
  const headerTagPage = new HeaderTagPage(page, testInfo);
  const signUpPage = new SignUpPage(page, testInfo);
  const accountInformationPage = new AccountInformationPage(page, testInfo);
  const addressInformationPage = new AddressInformationPage(page, testInfo);
  const accountCreatedPage = new AccountCreatedPage(page, testInfo);
  const deleteAccountPage = new DeleteAccountPage(page, testInfo);

  /**
   * ====================================================================
   * ETAPA 1: Navegación e Inicio
   * ====================================================================
   */
  
  /* STEP 1 */
  await test.step(`Etapa 1.1: Lanzar navegador y navegar a ${homePage.urlHomePage}`, async () => {
    await homePage.gotoHomePage();
  });

  /* STEP 2 */
  await test.step('Etapa 1.2: Validar que la página de inicio es visible correctamente', async () => {
    await homePage.isHomePageVisible();
  });

  /**
   * ====================================================================
   * ETAPA 2: Acceso al Formulario de Signup
   * ====================================================================
   */

  /* STEP 3 */
  await test.step('Etapa 2.1: Hacer clic en el botón "Signup / Login" dentro del Header', async () => {
    await headerTagPage.clickOnSignUpLogin();
  });

  /* STEP 4 */
  await test.step('Etapa 2.2: Validar que aparezca el texto "New User Signup!"', async () => {
    await signUpPage.validateNewUserSignUpTextIsVisible();
  });

  /* STEP 5 */
  await test.step(`Etapa 2.3: Llenar nombre: ${testData.name} y email: ${testData.email}`, async () => {
    await signUpPage.fillNameAndEmail(testData.name, testData.email);
  });

  /* STEP 6 */
  await test.step('Etapa 2.4: Hacer clic en el botón "Signup"', async () => {
    await signUpPage.clickOnSignUpButton();
  });

  /**
   * ====================================================================
   * ETAPA 3: Información de la Cuenta
   * ====================================================================
   */

  /* STEP 7 */
  await test.step('Etapa 3.1: Validar que "ENTER ACCOUNT INFORMATION" es visible', async () => {
    await accountInformationPage.validateEnterAccountInformationIsVisible();
  });

  /* STEP 8 */
  await test.step('Etapa 3.2: Seleccionar título "Mr"', async () => {
    await accountInformationPage.selectTitle('Mr');
  });

  /* STEP 9 */
  await test.step(`Etapa 3.3: Llenar contraseña: ${testData.password}`, async () => {
    await accountInformationPage.fillPassword(testData.password);
  });

  /* STEP 10 */
  await test.step('Etapa 3.4: Seleccionar fecha de nacimiento', async () => {
    await accountInformationPage.selectDateOfBirth('15', '3', '1990');
  });

  /* STEP 11 */
  await test.step('Etapa 3.5: Marcar checkbox "Sign up for our newsletter!"', async () => {
    await accountInformationPage.selectNewsletterCheckbox();
  });

  /* STEP 12 */
  await test.step('Etapa 3.6: Marcar checkbox "Receive special offers from our partners!"', async () => {
    await accountInformationPage.selectSpecialOffersCheckbox();
  });

  /**
   * ====================================================================
   * ETAPA 4: Información de Dirección
   * ====================================================================
   */

  /* STEP 13 */
  await test.step(`Etapa 4.1: Llenar nombre: ${testData.firstName}`, async () => {
    await addressInformationPage.fillFirstName(testData.firstName);
  });

  /* STEP 14 */
  await test.step(`Etapa 4.2: Llenar apellido: ${testData.lastName}`, async () => {
    await addressInformationPage.fillLastName(testData.lastName);
  });

  /* STEP 15 */
  await test.step(`Etapa 4.3: Llenar empresa: ${testData.company}`, async () => {
    await addressInformationPage.fillCompany(testData.company);
  });

  /* STEP 16 */
  await test.step(`Etapa 4.4: Llenar dirección: ${testData.address}`, async () => {
    await addressInformationPage.fillAddress(testData.address);
  });

  /* STEP 17 */
  await test.step(`Etapa 4.5: Llenar dirección 2: ${testData.address2}`, async () => {
    await addressInformationPage.fillAddress2(testData.address2);
  });

  /* STEP 18 */
  await test.step('Etapa 4.6: Seleccionar país "United States"', async () => {
    await addressInformationPage.selectCountry('United States');
  });

  /* STEP 19 */
  await test.step(`Etapa 4.7: Llenar estado: ${testData.state}`, async () => {
    await addressInformationPage.fillState(testData.state);
  });

  /* STEP 20 */
  await test.step(`Etapa 4.8: Llenar ciudad: ${testData.city}`, async () => {
    await addressInformationPage.fillCity(testData.city);
  });

  /* STEP 21 */
  await test.step(`Etapa 4.9: Llenar código postal: ${testData.zipcode}`, async () => {
    await addressInformationPage.fillZipcode(testData.zipcode);
  });

  /* STEP 22 */
  await test.step(`Etapa 4.10: Llenar número de teléfono: ${testData.phone}`, async () => {
    await addressInformationPage.fillMobileNumber(testData.phone);
  });

  /* STEP 23 */
  await test.step('Etapa 4.11: Hacer clic en botón "Create Account"', async () => {
    await addressInformationPage.clickCreateAccountButton();
  });

  /**
   * ====================================================================
   * ETAPA 5: Validación de Creación de Cuenta
   * ====================================================================
   */

  /* STEP 24 */
  await test.step('Etapa 5.1: Validar que "ACCOUNT CREATED!" es visible', async () => {
    await accountCreatedPage.validateAccountCreatedIsVisible();
  });

  /* STEP 25 */
  await test.step('Etapa 5.2: Hacer clic en botón "Continue"', async () => {
    await accountCreatedPage.clickContinueButton();
  });

  /* STEP 26 */
  await test.step('Etapa 5.3: Validar que "Logged in as [username]" es visible', async () => {
    await accountCreatedPage.validateLoggedInAsVisible();
    const loggedInText = await accountCreatedPage.getLoggedInAsText();
    console.log(`Usuario registrado y conectado: ${loggedInText}`);
  });

  /**
   * ====================================================================
   * ETAPA 6: Eliminación de Cuenta
   * ====================================================================
   */

  /* STEP 27 */
  await test.step('Etapa 6.1: Hacer clic en botón "Delete Account"', async () => {
    await accountCreatedPage.clickDeleteAccountButton();
  });

  /* STEP 28 */
  await test.step('Etapa 6.2: Validar que "ACCOUNT DELETED!" es visible', async () => {
    await deleteAccountPage.validateAccountDeletedIsVisible();
  });

  /* STEP 29 */
  await test.step('Etapa 6.3: Hacer clic en botón "Continue"', async () => {
    await deleteAccountPage.clickContinueButton();
  });

});
