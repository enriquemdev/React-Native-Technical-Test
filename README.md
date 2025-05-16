```markdown
## Prerrequisitos
- Node.js (versión 16 o superior)
- Expo Go (instala a través de la app Expo en iOS/Android o usa Expo CLI)
- Un servidor ejecutándose en la IP de la máquina que lo aloja (por ejemplo, `http://<ip-del-servidor>:5566`) con datos de API simulados

## Configuración
1. **Clonar el Repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd <carpeta-del-repositorio>
   ```

2. **Instalar Dependencias**
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**
   - Crea un archivo `.env` en el directorio raíz con el siguiente contenido, reemplazando `<ip-del-servidor>` con la IP real de la máquina que ejecuta el servidor:
     ```
     EXPO_PUBLIC_API_URL=http://<ip-del-servidor>:5566
     EXPO_PUBLIC_ACCOUNT_ID=1134948394
     ```
   - Para encontrar la IP de la máquina del servidor:
      - En Windows: Ejecuta `ipconfig` en la terminal y usa la dirección IPv4 (por ejemplo, `192.168.x.x`).
      - En macOS/Linux: Ejecuta `ifconfig` o `ip addr` y usa la dirección IP local.
   - Asegúrate de que el servidor esté funcionando en el puerto 5566.

4. **Iniciar la Aplicación**
   ```bash
   npx expo start
   ```
   - Usa Expo Go en tu dispositivo móvil o un navegador/emulador para escanear el código QR.
   - Para el Emulador de Android o el Simulador de iOS, selecciona la opción adecuada en las herramientas de desarrollo de Expo.

## Notas
- La aplicación obtiene los detalles de la cuenta y las transacciones desde la API usando `EXPO_PUBLIC_ACCOUNT_ID`.
- Asegúrate de que tu dispositivo esté en la misma red que la máquina del servidor y que el servidor esté activo.
- Si surgen problemas, revisa los logs de la consola para errores de red y verifica el estado del servidor.
```