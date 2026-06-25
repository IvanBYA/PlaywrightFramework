import { Page, TestInfo, expect } from "@playwright/test";
import { ScreenshotUtils } from "../utils/screenshotUtils";

export class AccountCreatedPage {

    /**
     * Propiedades de la clase AccountCreatedPage
     */
    private readonly page: Page;
    private readonly screenshotUtils: ScreenshotUtils;

    /**
     * Selectores
     */
    private readonly accountCreatedText = "//h2[normalize-space()='Account Created!']";
    private readonly continueButton = "a[data-qa='continue-button']";
    private readonly loggedInAsText = "//li[contains(.,'Logged in as')]";
    private readonly deleteAccountButton = "//a[contains(text(),'Delete Account')]";

    /**
     * Constructor de la clase AccountCreatedPage
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
     * Valida que el texto "Account Created!" sea visible
     * @date 24/06/2026
     * @author Ivan
     */
    async validateAccountCreatedIsVisible() {
        await expect(this.page.locator(this.accountCreatedText)).toBeVisible();
        await this.screenshotUtils.take('accountCreatedVisible');
    }

    /**
     * Hace clic en el botón "Continue"
     * @date 24/06/2026
     * @author Ivan
     */
    async clickContinueButton() {
        await this.page.locator(this.continueButton).click();
        await this.screenshotUtils.take('continueButtonClicked');
    }

    /**
     * Valida que el usuario esté conectado (muestra "Logged in as [username]")
     * @date 24/06/2026
     * @author Ivan
     */
    async validateLoggedInAsVisible() {
        await expect(this.page.locator(this.loggedInAsText)).toBeVisible();
        await this.screenshotUtils.take('loggedInAsVisible');
    }

    /**
     * Obtiene el texto completo de "Logged in as" para validar el username
     * @returns El texto completo del elemento (ej: "Logged in as username")
     * @date 24/06/2026
     * @author Ivan
     */
    async getLoggedInAsText(): Promise<string> {
        return await this.page.locator(this.loggedInAsText).textContent() || "";
    }

    /**
     * Hace clic en el botón "Delete Account"
     * @date 24/06/2026
     * @author Ivan
     */
    async clickDeleteAccountButton() {
        await this.page.locator(this.deleteAccountButton).click();
        await this.screenshotUtils.take('deleteAccountButtonClicked');
    }
}
