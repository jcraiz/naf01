# 🎨 Guía de Imagen de Fondo - NAFOEM Website

## Imagen de Fondo del Hero Section

El website de NAFOEM incluye un sistema flexible para la imagen de fondo de la sección principal (hero), diseñado específicamente para el público objetivo: **personas que quieren cursar programas técnicos**.

---

## ✅ Estado Actual (Listo para Usar)

El website ya incluye una **imagen de fondo SVG profesional** que:

- 🎯 Representa elementos técnicos y educativos (graduation cap, computer, documents, logistics)
- 🎨 Usa la paleta de colores de NAFOEM (Navy #003366 y Gold #F0A500)
- ♿ Mantiene contraste adecuado para accesibilidad WCAG AA
- 📱 Es responsive y ligero (< 5KB)
- 🔧 No requiere archivos externos adicionales

**Ubicación:** `assets/hero-background.svg`

---

## 🔄 Opción: Usar Tu Propia Fotografía

Si deseas reemplazar el fondo SVG con una fotografía personalizada:

### Paso 1: Preparar la imagen
```
📐 Dimensiones recomendadas: 1920x1080px (16:9)
🗜️ Formato: JPG optimizado (máx. 300KB)
🎨 Estilo sugerido: Estudiantes en entorno técnico/educativo
💡 Iluminación: Clara y profesional, con espacio para texto
```

### Paso 2: Guardar la imagen
```
📁 Ruta: assets/hero-background.jpg
📝 Nombre exacto: hero-background.jpg (case-sensitive)
```

### Paso 3: ¡Listo!
El website detectará automáticamente la imagen JPG y la mostrará con:
- Overlay de gradiente navy para legibilidad del texto
- Efecto parallax suave (desktop)
- Fallback al SVG si la imagen no carga

---

## 🎯 Recomendaciones de Contenido Visual

Para conectar con tu audiencia (aspirantes a programas técnicos):

### ✅ Imágenes que funcionan:
- Estudiantes diversos (18-30 años) en aulas técnicas
- Personas usando equipos: computadores, documentos, materiales de logística
- Ambientes limpios, modernos y profesionales
- Expresiones de enfoque, aprendizaje y éxito

### ❌ Evitar:
- Imágenes genéricas de stock sin contexto educativo
- Multitudes desenfocadas o poco profesionales
- Colores que compitan con la paleta navy/gold
- Texto o logos superpuestos en la imagen

---

## ⚙️ Configuración Técnica

### Estructura CSS del Hero:
```css
.hero {
  /* Capa 1: Gradiente de marca */
  /* Capa 2: Imagen JPG (opcional) */
  /* Capa 3: Patrón SVG de fallback */
  /* Capa 4: Overlay radial para contraste */
}
```

### Accesibilidad:
- Contraste mínimo 4.5:1 para texto sobre fondo
- Soporte para `prefers-reduced-motion`
- Overlay ajustable mediante variables CSS

### Rendimiento:
- SVG inline: carga instantánea
- JPG opcional: lazy-load nativo
- Mobile: `background-attachment: scroll` para mejor rendimiento

---

## 🛠️ Personalización Avanzada

### Ajustar intensidad del overlay:
```css
/* En css/styles.css, modificar los valores rgba */
.hero.has-custom-bg {
  background-image: 
    linear-gradient(135deg, rgba(0, 26, 51, 0.85) 0%, ...),
    ...
}
```

### Cambiar patrón SVG:
1. Editar `assets/hero-background.svg`
2. Mantener colores de marca: `#003366`, `#001A33`, `#F0A500`
3. Conservar opacidades bajas (0.05-0.15) para no interferir con texto

### Desactivar efecto parallax:
```css
.hero.has-custom-bg {
  background-attachment: scroll, scroll, scroll;
}
```

---

## 🧪 Verificación

Para confirmar que el fondo funciona correctamente:

1. Abre `index.html` en tu navegador
2. La sección hero debe mostrar el patrón técnico SVG
3. Si agregaste `hero-background.jpg`, debe mostrarse con overlay navy
4. El texto "Construye tu Futuro con NAFOEM" debe ser legible
5. Prueba en móvil: el fondo debe hacer scroll normal (no fixed)

---

## 📞 Soporte

Si necesitas ayuda con:
- Optimización de imágenes: usa [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)
- Creación de SVG: usa [Figma](https://figma.com) o [Inkscape](https://inkscape.org)
- Accesibilidad: verifica contraste en [WebAIM](https://webaim.org/resources/contrastchecker/)

---

> 💡 **Tip Pro**: El SVG incluido está diseñado para escalarse infinitamente sin perder calidad. ¡Es perfecto para pantallas 4K y futuras actualizaciones!

**Última actualización:** Mayo 2026  
**Versión:** NAFOEM Website v2.1
