import { Page, TestInfo, expect } from "@playwright/test";
import { ScreenshotUtils } from "../utils/screenshotUtils";

export class SignUpFormPage {

    /**
     * Propiedades de la clase SignUpFormPage
     */
    private readonly page: Page;
    private readonly screenshotUtils: ScreenshotUtils;

    /**
     * Selectores
     */
    private readonly genderRadioButton = "#id_gender1";
    private readonly nameInput = "#name";
    private readonly emailInput = "#email";


    /**
     * Constructor de la clase SignUpFormPage
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
     * Metodo para hacer click en la opcion MR dentro del Genero
     * @date 24/06/2026
     * @author Ivan
     */
    async clickOnMrOptionGender()
    {
        await this.page.locator(this.genderRadioButton).click();
        await this.screenshotUtils.take('clickOnMrOptionGender');
    }

    /**
     * Metodo para llenar el campo de nombre
     * @param name - Nombre del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async fillNameInput(name: string)
    {
        await this.page.locator(this.nameInput).fill(name);
        await this.screenshotUtils.take('fillNameInput');
    }

    /**
     * Metodo para validar la consistencia de los datos ingresados dentro del campo Email
     * @param email - Email del usuario
     * @date 24/06/2026
     * @author Ivan
     */
    async validateConsistencyOfDataEmailInput(emailToValidate: string)
    {
        await expect(this.page.locator(this.emailInput)).toHaveValue(emailToValidate);
        await this.screenshotUtils.take('validateConsistencyOfDataEmailInput');
    }
}