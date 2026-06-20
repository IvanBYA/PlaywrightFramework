# 🎭 Framework de Automatización E2E con Playwright

Un **Framework de Pruebas End-to-End (E2E)** profesional y escalable construido con **Playwright** y **TypeScript**, implementando el patrón de diseño **Page Object Model (POM)** con reportes avanzados mediante **Allure**.

---

## 📋 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#️-estructura-del-proyecto)
- [Primeros Pasos](#-primeros-pasos)
- [Scripts Disponibles](#-scripts-disponibles)
- [Características](#-características)
- [Page Object Model](#-page-object-model)
- [Gestión de Capturas de Pantalla](#-gestión-de-capturas-de-pantalla)
- [Reportes con Allure](#-reportes-con-allure)
- [CI/CD](#️-cicd)

---

## 🧩 Descripción General

Este framework ofrece una solución completa y lista para producción en la automatización de pruebas de aplicaciones web. Está diseñado priorizando el mantenimiento, la reutilización y la escalabilidad, siendo ideal para pruebas de regresión, validación de funcionalidades críticas e integración en pipelines de CI/CD.

---

## 🛠 Tecnologías

| Tecnología | Versión | Propósito |
|---|---|---|
| [Playwright](https://playwright.dev/) | ^1.60.0 | Automatización de navegadores E2E |
| [TypeScript](https://www.typescriptlang.org/) | Latest | Tipado estático y soporte IDE |
| [Allure Playwright](https://allurereport.org/) | ^3.6.0 | Reportes de pruebas avanzados |
| [@faker-js/faker](https://fakerjs.dev/) | ^10.4.0 | Generación dinámica de datos de prueba |
| [allure-commandline](https://www.npmjs.com/package/allure-commandline) | ^2.38.0 | CLI de Allure para generación de reportes |

---

## 🗂️ Estructura del Proyecto

```
PlaywrightFramework/
│
├── 📄 package.json              # Dependencias y scripts npm
├── 📄 playwright.config.ts      # Configuración de Playwright (navegadores, reintentos, reportes)
├── 📄 tsconfig.json             # Configuración de TypeScript
│
├── 📁 .github/
│   └── workflows/               # Pipelines de CI/CD con GitHub Actions
│
├── 📁 pages/                    # Clases del Page Object Model
│   ├── HomePage.ts
│   ├── SignUpPage.ts
│   └── HeaderTagPage.ts
│
├── 📁 tests/                    # Especificaciones de pruebas
│   ├── WithPom/                 # Pruebas usando POM (recomendado)
│   │   ├── FillNameAndEmail.spec.ts
│   │   ├── NoFillNameAndEmail.spec.ts
│   │   └── TC_*.spec.ts
│   └── WithoutPom/              # Pruebas sin POM (para comparación)
│       └── TC_001_FillNameAndEmail.spec.ts
│
├── 📁 utils/                    # Utilidades compartidas
│   └── screenshotUtils.ts       # Gestión de capturas de pantalla
│
├── 📁 screenshots/              # Capturas organizadas automáticamente por prueba
│   ├── TC_001/
│   ├── TC_002/
│   └── ...
│
├── 📁 allure-results/           # Resultados JSON sin procesar de Allure
├── 📁 allure-report/            # Reporte HTML generado por Allure
├── 📁 playwright-report/        # Reporte HTML integrado de Playwright
└── 📁 test-results/             # Artefactos temporales de pruebas
```

---

## 🚀 Primeros Pasos

### Requisitos Previos

- [Node.js](https://nodejs.org/) v18 o superior
- [npm](https://www.npmjs.com/) v9 o superior
- [Allure CLI](https://allurereport.org/docs/install/) (para generación de reportes)

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/IvanBYA/PlaywrightFramework.git
cd PlaywrightFramework

# 2. Instalar dependencias
npm install

# 3. Instalar navegadores de Playwright
npx playwright install
```

---

## 📦 Scripts Disponibles

```bash
# Ejecutar pruebas usando el patrón Page Object Model (solo Chromium)
npm run run-tests-WithPom

# Generar reporte Allure a partir de los resultados
npm run allure:generate

# Abrir el reporte Allure generado en el navegador
npm run allure:open

# Flujo completo: ejecutar pruebas → generar reporte → abrir reporte
npm run full-test

# Generar reporte Allure en un solo archivo (útil para compartir sin conexión)
npm run allure:generate-singlefile

# Flujo completo con reporte en un solo archivo (sin necesidad de internet)
npm run full-test-offline
```

---

## ✨ Características

### ✅ Page Object Model (POM)
Todas las interacciones con las páginas están encapsuladas en clases TypeScript dedicadas dentro de `pages/`. Los selectores y métodos están centralizados, por lo que los cambios en la UI solo necesitan actualizarse en un lugar.

### 🌐 Soporte Multi-Navegador
Las pruebas están configuradas para ejecutarse en los principales motores de navegadores:
- **Chromium** (Chrome / Edge)
- **Firefox**
- **WebKit** (Safari)

### 📊 Reportes con Allure
Reportes interactivos y enriquecidos con historial de ejecución, categorización de fallos, tendencias de reintentos y capturas de pantalla adjuntas.

### 📸 Gestión Automatizada de Capturas de Pantalla
Una clase personalizada `ScreenshotUtils` organiza las capturas por ID de prueba, numerándolas secuencialmente y adjuntándolas automáticamente al reporte Allure.

### 🎲 Datos de Prueba Dinámicos
Utiliza `@faker-js/faker` para generar datos de prueba realistas y aleatorios (nombres, correos, direcciones) para una mayor cobertura de pruebas.

### 🔄 Ejecución en Paralelo y Reintentos
Las pruebas se ejecutan en paralelo por defecto. En CI, se habilitan reintentos automáticos (x2) con generación de trazas en el primer intento fallido.

---

## 📐 Page Object Model

Cada clase de página encapsula sus localizadores y métodos de acción:

```typescript
// pages/HomePage.ts
export class HomePage {
    private readonly page: Page;
    private readonly activeLink = "//a[contains(@style,'orange')]";

    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.screenshotUtils = new ScreenshotUtils(page, testInfo);
    }

    async gotoHomePage() {
        await this.page.goto(this.urlHomePage);
        await expect(this.page).toHaveTitle(this.titleHomePage);
    }

    async isHomePageVisible() {
        await expect(this.page.locator(this.activeLink)).toBeVisible();
        await this.screenshotUtils.take('imgHomePage');
    }
}
```

**Uso en una prueba:**

```typescript
import { HomePage } from '../pages/HomePage';

test('TC_001 - Verificar que la página de inicio carga correctamente', async ({ page }, testInfo) => {
    const homePage = new HomePage(page, testInfo);
    await homePage.gotoHomePage();
    await homePage.isHomePageVisible();
    // Captura guardada en: screenshots/TC_001/img1_imgHomePage.png
});
```

---

## 📸 Gestión de Capturas de Pantalla

La utilidad `ScreenshotUtils` (`utils/screenshotUtils.ts`) gestiona la organización de capturas automáticamente:

- **Carpetas automáticas**: Crea una carpeta dedicada por prueba (`screenshots/TC_001/`, etc.)
- **Numeración secuencial**: Las imágenes se nombran `img1_`, `img2_`, y así sucesivamente
- **Integración con Allure**: Las capturas se adjuntan directamente al reporte

```
screenshots/
├── TC_001/
│   ├── img1_HomePage.png
│   ├── img2_SignUp.png
│   └── img3_Confirmacion.png
└── TC_002/
    ├── img1_HomePage.png
    └── img2_Error.png
```

---

## 📊 Reportes con Allure

Después de ejecutar las pruebas, genera y visualiza el reporte interactivo:

```bash
# Generar reporte
npm run allure:generate

# Abrir en el navegador
npm run allure:open
```

El reporte incluye:
- ✅ Historial y tendencias de éxito/fallo de pruebas
- 📸 Capturas de pantalla adjuntas por paso de prueba
- 🔍 Categorización de fallos
- ⏱️ Métricas de duración y análisis de reintentos
- 📁 Panel interactivo con widgets

---

## ⚙️ CI/CD

El repositorio incluye flujos de trabajo de GitHub Actions (`.github/workflows/`) para la ejecución automatizada en pipelines. Las pruebas soportan el modo CI con:
- `retries: 2` ante fallos
- `trace: 'on-first-retry'` para depurar ejecuciones fallidas
- Ejecución en modo headless (sin interfaz gráfica)

---

## 🏆 Buenas Prácticas

| Práctica | Implementación |
|---|---|
| Page Object Model | Selectores y acciones encapsulados por página |
| Separación por capas | Tests / Pages / Utils claramente divididos |
| TypeScript | Tipado estático para seguridad y soporte IDE |
| Evidencia organizada | Capturas nombradas y agrupadas por ID de prueba |
| Reportes detallados | Trazabilidad completa mediante Allure |
| Reutilización de código | Clases base y utilidades compartidas |
| Ejecución en paralelo | Ejecuciones más rápidas con soporte concurrente |

---

---

> Desarrollado por [IvanBYA](https://github.com/IvanBYA) con uso de Github Copilot y Claude.
