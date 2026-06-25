import { Page, TestInfo, expect } from "@playwright/test";
import { ScreenshotUtils } from "../utils/screenshotUtils";

export class DeleteAccountPage {

    /**
     * Propiedades de la clase DeleteAccountPage
     */
    private readonly page: Page;
    private readonly screenshotUtils: ScreenshotUtils;

    /**
     * Selectores
     */
    private readonly accountDeletedText = "//h2[normalize-space()='Account Deleted!']";
    private readonly continueButton = "a[data-qa='continue-button']";

    /**
     * Constructor de la clase DeleteAccountPage
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
     * Valida que el texto "ACCOUNT DELETED!" sea visible
     * @date 24/06/2026
     * @author Ivan
     */
    async validateAccountDeletedIsVisible() {
        await expect(this.page.locator(this.accountDeletedText)).toBeVisible();
        await this.screenshotUtils.take('accountDeletedVisible');
    }

    /**
     * Hace clic en el botón "Continue"
     * @date 24/06/2026
     * @author Ivan
     */
    async clickContinueButton() {
        await this.page.locator(this.continueButton).click();
        await this.screenshotUtils.take('deleteAccountContinueButtonClicked');
    }
}
