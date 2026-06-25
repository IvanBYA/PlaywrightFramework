import { Page, TestInfo, expect } from "@playwright/test";
import { ScreenshotUtils } from "../utils/screenshotUtils";

export class AddressInformationPage {

    /**
     * Propiedades de la clase AddressInformationPage
     */
    private readonly page: Page;
    private readonly screenshotUtils: ScreenshotUtils;

    /**
     * Selectores
     */
    private readonly firstNameInput = "#first_name";
    private readonly lastNameInput = "#last_name";
    private readonly companyInput = "#company";
    private readonly addressInput = "#address1";
    private readonly address2Input = "#address2";
    private readonly countrySelect = "#country";
    private readonly stateInput = "#state";
    private readonly cityInput = "#city";
    private readonly zipcodeInput = "#zipcode";
    private readonly mobileNumberInput = "#mobile_number";
    private readonly createAccountButton = "button[data-qa='create-account']";

    /**
     * Constructor de la clase AddressInformationPage
     * @param page Instancia de Page para interactuar con el navegador
     * @param testInfo Información de la prueba para capturar y adjuntar screenshots
     * @date 24/06/2026
     * @author Ivan
     */
    public constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.screenshotUtils = new ScreenshotUtils(testInfo, page);
    }

    /**
     * Llena el campo de Nombre
     * @param firstName - Nombre del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async fillFirstName(firstName: string) {
        await this.page.locator(this.firstNameInput).fill(firstName);
        await expect(this.page.locator(this.firstNameInput)).toHaveValue(firstName);
        await this.screenshotUtils.take('firstNameFilled');
    }

    /**
     * Llena el campo de Apellido
     * @param lastName - Apellido del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async fillLastName(lastName: string) {
        await this.page.locator(this.lastNameInput).fill(lastName);
        await expect(this.page.locator(this.lastNameInput)).toHaveValue(lastName);
        await this.screenshotUtils.take('lastNameFilled');
    }

    /**
     * Llena el campo de Empresa
     * @param company - Nombre de la empresa
     * @date 24/06/2026
     * @author Ivan
     */
    async fillCompany(company: string) {
        await this.page.locator(this.companyInput).fill(company);
        await expect(this.page.locator(this.companyInput)).toHaveValue(company);
        await this.screenshotUtils.take('companyFilled');
    }

    /**
     * Llena el campo de Dirección
     * @param address - Dirección del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async fillAddress(address: string) {
        await this.page.locator(this.addressInput).fill(address);
        await expect(this.page.locator(this.addressInput)).toHaveValue(address);
        await this.screenshotUtils.take('addressFilled');
    }

    /**
     * Llena el campo de Dirección 2 (Apartamento, Suite, etc.)
     * @param address2 - Segunda línea de dirección
     * @date 24/06/2026
     * @author Ivan
     */
    async fillAddress2(address2: string) {
        await this.page.locator(this.address2Input).fill(address2);
        await expect(this.page.locator(this.address2Input)).toHaveValue(address2);
        await this.screenshotUtils.take('address2Filled');
    }

    /**
     * Selecciona el País
     * @param country - País del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async selectCountry(country: string) {
        await this.page.locator(this.countrySelect).selectOption(country);
        await this.screenshotUtils.take('countrySelected');
    }

    /**
     * Llena el campo de Estado
     * @param state - Estado/Provincia del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async fillState(state: string) {
        await this.page.locator(this.stateInput).fill(state);
        await expect(this.page.locator(this.stateInput)).toHaveValue(state);
        await this.screenshotUtils.take('stateFilled');
    }

    /**
     * Llena el campo de Ciudad
     * @param city - Ciudad del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async fillCity(city: string) {
        await this.page.locator(this.cityInput).fill(city);
        await expect(this.page.locator(this.cityInput)).toHaveValue(city);
        await this.screenshotUtils.take('cityFilled');
    }

    /**
     * Llena el campo de Código Postal
     * @param zipcode - Código postal del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async fillZipcode(zipcode: string) {
        await this.page.locator(this.zipcodeInput).fill(zipcode);
        await expect(this.page.locator(this.zipcodeInput)).toHaveValue(zipcode);
        await this.screenshotUtils.take('zipcodeFilled');
    }

    /**
     * Llena el campo de Número de Teléfono
     * @param mobileNumber - Número de teléfono del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async fillMobileNumber(mobileNumber: string) {
        await this.page.locator(this.mobileNumberInput).fill(mobileNumber);
        await expect(this.page.locator(this.mobileNumberInput)).toHaveValue(mobileNumber);
        await this.screenshotUtils.take('mobileNumberFilled');
    }

    /**
     * Hace clic en el botón "Create Account"
     * @date 24/06/2026
     * @author Ivan
     */
    async clickCreateAccountButton() {
        await this.page.locator(this.createAccountButton).click();
        await this.screenshotUtils.take('createAccountButtonClicked');
    }
}
