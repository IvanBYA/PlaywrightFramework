Crear un script de prueba en TypeScript con Playwright que realice el siguiente flujo:

SCRIPT_NAME: TC_001_RegisterUser

## ETAPA 1: Navegación e Inicio
1. Lanzar navegador (Chromium)
2. Navegar a https://automationexercise.com/
3. Validar que la página de inicio es visible correctamente

## ETAPA 2: Acceso al Formulario de Signup
4. Hacer clic en el botón 'Signup / Login' dentro de la etiqueta Header
5. Validar que aparezca el texto 'New User Signup!'
6. Llenar nombre y email (usar @faker-js/faker para datos aleatorios)
7. Hacer clic en botón 'Signup'

## ETAPA 3: Información de la Cuenta
8. Validar que 'ENTER ACCOUNT INFORMATION' es visible
9. Rellenar: Title, Name, Email, Password, Date of birth
10. Marcar checkbox 'Sign up for our newsletter!'
11. Marcar checkbox 'Receive special offers from our partners!'

## ETAPA 4: Información de Dirección
12. Rellenar: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Hacer clic en botón 'Create Account'

## ETAPA 5: Validación de Creación
14. Validar que 'ACCOUNT CREATED!' es visible
15. Hacer clic en botón 'Continue'
16. Validar que 'Logged in as [username]' es visible

## ETAPA 6: Eliminación de Cuenta
17. Hacer clic en botón 'Delete Account'
18. Validar que 'ACCOUNT DELETED!' es visible
19. Hacer clic en botón 'Continue'

## Requisitos Técnicos:
- Usar Page Object Model (POM) - crear páginas separadas si es necesario. Utiliza como base el Script TC_001_FillNameAndEmail.spec.ts
- Implementar test.step() para cada etapa/sección principal
- Usar @faker-js/faker para generar datos aleatorios (nombre, email, dirección, etc.)
- Incluir assertions con expect() en cada validación
- Integrar ScreenshotUtils para capturar screenshots en puntos clave:
  * Después de cada validación y inserción de datos importante
- Comentarios JSDoc claros en cada método. Utiliza como ejemplo los comentarios de los Page Object Actuales que se encuentran dentro de la carpeta /Pages
- Mantener estructura simple y legible
- Usar locators basados en CSS o Xpath