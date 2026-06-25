import { Page, TestInfo, expect } from "@playwright/test";
import { ScreenshotUtils } from "../utils/screenshotUtils";

export class AccountInformationPage {

    /**
     * Propiedades de la clase AccountInformationPage
     */
    private readonly page: Page;
    private readonly screenshotUtils: ScreenshotUtils;

    /**
     * Selectores
     */
    private readonly enterAccountInformationText = "//h2[normalize-space()='Enter Account Information']";
    private readonly titleMrRadio = "#id_gender1";
    private readonly titleMrsRadio = "#id_gender2";
    private readonly passwordInput = "#password";
    private readonly daySelect = "#days";
    private readonly monthSelect = "#months";
    private readonly yearSelect = "#years";
    private readonly newsletterCheckbox = "#newsletter";
    private readonly specialOffersCheckbox = "#optin";

    /**
     * Constructor de la clase AccountInformationPage
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
     * Valida que el texto "Enter Account Information" sea visible
     * @date 24/06/2026
     * @author Ivan
     */
    async validateEnterAccountInformationIsVisible() {
        await expect(this.page.locator(this.enterAccountInformationText)).toBeVisible();
        await this.screenshotUtils.take('enterAccountInformationVisible');
    }

    /**
     * Selecciona el título Mr o Mrs según el parámetro
     * @param title - "Mr" o "Mrs"
     * @date 24/06/2026
     * @author Ivan
     */
    async selectTitle(title: string) {
        if (title.toLowerCase() === "mr") {
            await this.page.locator(this.titleMrRadio).click();
        } else if (title.toLowerCase() === "mrs") {
            await this.page.locator(this.titleMrsRadio).click();
        }
        await this.screenshotUtils.take('titleSelected');
    }

    /**
     * Llena el campo de contraseña
     * @param password - Contraseña del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async fillPassword(password: string) {
        await this.page.locator(this.passwordInput).fill(password);
        await expect(this.page.locator(this.passwordInput)).toHaveValue(password);
        await this.screenshotUtils.take('passwordFilled');
    }

    /**
     * Selecciona la fecha de nacimiento
     * @param day - Día (1-31)
     * @param month - Mes (1-12)
     * @param year - Año
     * @date 24/06/2026
     * @author Ivan
     */
    async selectDateOfBirth(day: string, month: string, year: string) {
        await this.page.locator(this.daySelect).selectOption(day);
        await this.page.locator(this.monthSelect).selectOption(month);
        await this.page.locator(this.yearSelect).selectOption(year);
        await this.screenshotUtils.take('dateOfBirthSelected');
    }

    /**
     * Marca el checkbox de suscripción al newsletter
     * @date 24/06/2026
     * @author Ivan
     */
    async selectNewsletterCheckbox() {
        await this.page.locator(this.newsletterCheckbox).check();
        await expect(this.page.locator(this.newsletterCheckbox)).toBeChecked();
        await this.screenshotUtils.take('newsletterCheckboxSelected');
    }

    /**
     * Marca el checkbox de ofertas especiales
     * @date 24/06/2026
     * @author Ivan
     */
    async selectSpecialOffersCheckbox() {
        await this.page.locator(this.specialOffersCheckbox).check();
        await expect(this.page.locator(this.specialOffersCheckbox)).toBeChecked();
        await this.screenshotUtils.take('specialOffersCheckboxSelected');
    }
}
