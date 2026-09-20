# MENCHI BOUTIQUE — proyecto iOS

Este proyecto reutiliza la aplicación web existente de MENCHI BOUTIQUE (`www/index.html`) dentro de Capacitor.

## Qué conserva

- Productos e inventario
- Ventas y pagos
- Clientes y créditos/fiados
- Gráficos y estadísticas
- Firebase/Firestore y autenticación configurados en el HTML original
- Almacenamiento local y sincronización offline-first
- Exportaciones y copias de seguridad basadas en navegador
- El diseño responsive existente

## Qué NO se incluye aquí

El proyecto Electron/Windows original no se modifica. Este directorio es una copia independiente para iOS.

Tampoco se incluye una carpeta `ios/` precompilada porque esa parte la genera Capacitor/Xcode en macOS. No se puede producir un `.ipa` firmado desde este entorno Linux.

## Requisitos para completar la compilación iOS

En un Mac:

1. Instalar Node.js y Xcode.
2. Abrir Terminal en esta carpeta.
3. Ejecutar:

```bash
npm install
npx cap add ios
npx cap sync ios
npx cap open ios
```

4. En Xcode, seleccionar el proyecto `App`, elegir un Team de Apple y configurar el Bundle Identifier como `com.menchiboutique.app` (o uno propio).
5. Conectar el iPhone, seleccionarlo como destino y ejecutar **Run**.

Para una distribución posterior se debe firmar con las credenciales correspondientes de Apple.

## Importante sobre funciones específicas

La interfaz y lógica web se conservan deliberadamente. Algunas funciones diseñadas originalmente para escritorio, como impresión mediante `window.print()`, ventanas emergentes y descargas de archivos, pueden requerir una segunda pasada de adaptación nativa para que tengan una experiencia iOS óptima. No se han eliminado del proyecto.

## Firebase

La configuración de Firebase existente permanece en `www/index.html`. Verifica las reglas de Firebase y las credenciales de autenticación antes de distribuir la aplicación a otras personas.
