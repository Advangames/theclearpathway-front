# Despliegue temporal en GitHub Pages — checklist de reversión

Este documento lista **todos** los cambios hechos exclusivamente para poder
desplegar el sitio temporalmente en GitHub Pages
(`https://advangames.github.io/theclearpathway-front/`). Cuando ya no se
necesite el deploy temporal, seguir esta checklist para dejar el repo como
estaba.

No incluye cambios de contenido/diseño del sitio (esos se quedan
independientemente de dónde se hostee).

## 1. Archivos nuevos a eliminar

- [ ] `.github/workflows/deploy-gh-pages.yml` — workflow de GitHub Actions
      que hace el build estático y publica a Pages en cada push a `main`.
- [ ] `public/.nojekyll` — evita que GitHub Pages procese el sitio con
      Jekyll (necesario para que sirva la carpeta `_next/`).
- [ ] Este mismo archivo, `GITHUB_PAGES_TEMP_DEPLOY.md`.

## 2. `next.config.ts` — revertir a:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
```

(Se agregó lógica condicional con `STATIC_EXPORT`/`basePath`/`trailingSlash`
para poder generar el export estático que Pages necesita. El build normal
—sin la variable `STATIC_EXPORT`— nunca se vio afectado, pero conviene
limpiarlo igual.)

## 3. `package.json` — quitar el script agregado

Quitar la línea:

```json
"build:static": "next build --webpack",
```

del bloque `"scripts"`. El resto de scripts (`dev`, `build`, `start`,
`lint`) no se tocaron.

## 4. `app/sitemap.ts` y `app/robots.ts`

Se agregó esta línea a ambos archivos:

```ts
export const dynamic = "force-static";
```

Es inofensiva para el hosting normal (Node/`standalone`) — technically no
es necesario revertirla, pero si se quiere dejar el código idéntico al
original, se puede quitar de los dos archivos.

## 5. Imagen `Ana_Photo.png` — importada como módulo en vez de string

Para que `next/image` respetara el `basePath` de GitHub Pages, se cambió:

```tsx
<Image src="/assets/Ana_Photo.png" ... />
```

por:

```tsx
import anaPhoto from "@/assets/images/Ana_Photo.png";
// ...
<Image src={anaPhoto} ... />
```

Afecta 8 usos en `app/(pages)/HomeClient.tsx` (5) y
`app/(pages)/about/page.tsx` (3). También se copió el archivo a
`src/assets/images/Ana_Photo.png` (la copia original sigue en
`public/assets/Ana_Photo.png`, usada por las metadatas Open Graph/Twitter
en `app/(pages)/layout.tsx`, que no se tocaron).

**Recomendación:** esta forma (importar la imagen como módulo) es en
realidad una mejor práctica de Next.js en general —no es exclusiva de
GitHub Pages— así que se puede dejar así aunque se abandone el deploy en
Pages. Revertir solo si se prefiere simplicidad y volver al string
directo a `public/`.

## 6. Links internos: `<a href="/...">` → `<Link href="/...">`

En `src/components/layout/Header.tsx` (nav desktop y mobile) y en las
tarjetas de curso de `HomeClient.tsx` / `courses/page.tsx`, los enlaces
internos que eran `<a>` planas se cambiaron a `next/link` porque las
anclas planas no heredan el `basePath`.

**Recomendación:** dejarlo así — usar `next/link` para navegación interna
es la práctica recomendada de Next.js (navegación cliente, prefetch) más
allá de GitHub Pages. No requiere reversión.

## 7. Configuración manual en GitHub (fuera del código)

- [ ] **Visibilidad del repo:** se puso el repo `Advangames/theclearpathway-front`
      en **público** porque GitHub Pages en plan Free no funciona con repos
      privados. Volver a **Settings → General → Danger Zone → Change
      repository visibility → Private** cuando ya no se necesite el deploy.
- [ ] **Pages source:** se configuró **Settings → Pages → Source:
      "GitHub Actions"**. Si se quiere desactivar Pages por completo,
      volver a "None"/deshabilitar ahí mismo.
- [ ] Opcional: borrar el sitio de Pages desde Settings → Pages una vez
      puesto el repo en privado (si no, puede quedar un deploy fantasma
      inaccesible).

## Orden sugerido para revertir

1. Deshabilitar/borrar el GitHub Pages site (Settings → Pages).
2. Poner el repo en privado de nuevo.
3. Borrar `.github/workflows/deploy-gh-pages.yml` y `public/.nojekyll`.
4. Revertir `next.config.ts` y `package.json` (secciones 2 y 3).
5. Decidir si se revierte también la sección 4 (opcional/inofensivo).
6. Dejar las secciones 5 y 6 tal cual (son mejoras generales, no deuda
   técnica del deploy temporal).
7. Borrar este archivo (`GITHUB_PAGES_TEMP_DEPLOY.md`).
