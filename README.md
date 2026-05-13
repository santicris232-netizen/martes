# martes

Entregables implementados usando la API:
https://api.potterdb.com/v1/characters

## 1) PWA Originales - Next + Vercel

Carpeta: `pwa-originales-next`

Incluye:
- Pestaña original 1: `/pestana-1`
- Pestaña original 2: `/pestana-2`
- Objeto: `/objeto`
- Icono PWA: `public/icons/icon-192.svg`, `public/icons/icon-512.svg`
- Manifest: `public/manifest.webmanifest`
- Service Worker: `public/sw.js`

Comandos:

```bash
cd pwa-originales-next
npm install
npm run dev
```

Deploy Vercel:

```bash
npm i -g vercel
vercel
```

Luego abrir la URL de Vercel en el telefono y usar "Instalar app" desde el navegador.

## 2) Expo noSQL Individual - Firebase

Carpeta: `expo-nosql-potter`

Incluye:
- Lista del API Potter
- LogIn
- Registro
- Vista original de app
- Boton para guardar datos del API en Firestore
- Logout
- Icono de estado Login/Logout (punto verde/rojo)

Configurar Firebase en:
`src/firebase/config.ts`

Reemplazar:
- `REEMPLAZAR_API_KEY`
- `REEMPLAZAR_AUTH_DOMAIN`
- `REEMPLAZAR_PROJECT_ID`
- `REEMPLAZAR_STORAGE_BUCKET`
- `REEMPLAZAR_SENDER_ID`
- `REEMPLAZAR_APP_ID`

Comandos:

```bash
cd expo-nosql-potter
npm install
npm run start
```

Para APK con EAS:

```bash
npm i -g eas-cli
eas login
eas build -p android --profile preview
```

## 3) Dashboard Replica WebView - Next + Supabase + Expo

### Webapp (MVP + Login + Registro + Paneles)

Carpeta: `dashboard-replica-webview/webapp`

Incluye:
- MVP visual y similitud de dashboard
- Login
- Registro
- Panel Usuario
- Panel Administrativo

Configurar Supabase:

1. Copiar `.env.example` a `.env.local`
2. Completar `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Crear tablas en Supabase SQL Editor usando:
`dashboard-replica-webview/supabase/schema.sql`

Comandos:

```bash
cd dashboard-replica-webview/webapp
npm install
npm run dev
```

Deploy:

```bash
vercel
```

### APK WebView

Carpeta: `dashboard-replica-webview/mobile-webview`

Incluye:
- WebView cargando el deploy de Vercel
- Icono (`assets/icon.png`)
- Splash Screen (`assets/splash.png`)

Antes de compilar, actualizar URL en:
`mobile-webview/App.tsx`

```ts
const WEBAPP_URL = "https://TU-URL-VERCEL.vercel.app";
```

Comandos:

```bash
cd dashboard-replica-webview/mobile-webview
npm install
npm run start
npm run build:apk
```

## 4) App segundo corte - API Individual

Cubierto en `expo-nosql-potter` con:
- Login
- Registro
- Logout
- Icono estado Login/Logout

Si tu segundo corte esta en otro repo, copia estos mismos modulos de auth/estado/logout.

## 5) Trabajo escrito

Marcado como ya completado segun tu mensaje.