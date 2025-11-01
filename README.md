# PCStyle - Landing Page React

Landing page moderna y animada en React para servicio técnico en mantenimiento y reparación de computadoras en Cúcuta, Colombia.

## 🚀 Características

- **⚛️ React + Vite**: Arquitectura moderna y rápida
- **🎨 Framer Motion**: Animaciones fluidas y profesionales
- **📱 Diseño Responsive**: Optimizado para todos los dispositivos
- **🎬 Video de Fondo Visible**: Video de circuitos con opacidad optimizada
- **🖼️ Logo Real**: Integración del logo pcstyle.png desde carpeta IMG
- **✨ Animaciones Bonitas**: Efectos de entrada, hover, y transiciones suaves
- **🎯 Navegación Intuitiva**: Menú animado con scroll suave
- **💬 Chat Widget Animado**: Widget de chat interactivo con animaciones
- **📝 Formulario Validado**: Formulario de contacto con validación en tiempo real
- **🔒 Seguridad**: Headers de seguridad y sanitización de inputs

## 📋 Secciones

1. **Hero Section**: Video de fondo con call-to-action principal
2. **Servicios**: 6 servicios principales ofrecidos
3. **Portafolio**: Galería de trabajos realizados
4. **Opiniones**: Testimonios de clientes
5. **Contacto**: Formulario y información de contacto
6. **Footer**: Información adicional y enlaces

## 🔒 Seguridad

La página incluye las siguientes medidas de seguridad:

### Meta Tags de Seguridad

- **Content Security Policy (CSP)**: Restringe los recursos que pueden cargarse
- **X-Content-Type-Options**: Previene MIME-sniffing
- **X-Frame-Options**: Protege contra clickjacking
- **X-XSS-Protection**: Activa protección XSS en navegadores antiguos
- **Referrer Policy**: Controla qué información se envía en el header Referer

### Validación y Sanitización

- Validación de email con regex
- Validación de teléfono
- Sanitización de inputs para prevenir XSS
- Eliminación de tags `<script>` y caracteres peligrosos

### Buenas Prácticas Recomendadas

1. **HTTPS**: Asegúrate de usar HTTPS en producción
2. **Backend Seguro**: Implementa validación adicional en el servidor
3. **Rate Limiting**: Limita el número de envíos del formulario
4. **CAPTCHA**: Considera agregar reCAPTCHA para prevenir spam
5. **Sanitización del Servidor**: Siempre sanitiza y valida en el backend

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca de JavaScript para interfaces
- **Vite**: Build tool rápido y moderno
- **Framer Motion**: Biblioteca de animaciones para React
- **Tailwind CSS**: Framework CSS utility-first
- **Lucide React**: Iconos modernos
- **PostCSS + Autoprefixer**: Procesamiento de CSS

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

El servidor de desarrollo se iniciará en `http://localhost:3000`

## 📝 Personalización

### Cambiar Video de Fondo

Reemplaza la URL en la etiqueta `<video>`:

```html
<source src="TU_URL_DE_VIDEO.mp4" type="video/mp4">
```

### Actualizar Información de Contacto

Busca y modifica en la sección de contacto:

```html
<p class="text-gray-400">+57 300 123 4567</p>
<p class="text-gray-400">contacto@pcstyle.com</p>
```

### Cambiar Color Principal

Tailwind usa `blue-500` como color principal. Para cambiarlo, reemplaza todas las instancias de:
- `blue-500` → `tu-color-500`
- `blue-400` → `tu-color-400`
- `blue-600` → `tu-color-600`

### Configurar WhatsApp

En el JavaScript, actualiza el número de WhatsApp:

```javascript
window.open('https://wa.me/TU_NUMERO?text=Hola,%20me%20interesa%20sus%20servicios', '_blank');
```

## 🌐 Despliegue

### Servidor Local

Simplemente abre el archivo `index.html` en tu navegador o usa un servidor local:

```bash
# Python
python -m http.server 8000

# Node.js (con http-server)
npx http-server
```

### Producción

#### 🚀 Despliegue en Vercel (Recomendado)

La forma más rápida de desplegar es usando Vercel:

1. **Opción 1: Conectar GitHub a Vercel**
   - Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
   - Haz clic en "New Project"
   - Importa el repositorio `johan12rojas/PCStyleLP`
   - Vercel detectará automáticamente que es un proyecto Vite
   - Haz clic en "Deploy"
   - ¡Listo! Tu sitio estará en línea en segundos

2. **Opción 2: CLI de Vercel**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

3. **Otras opciones de Hosting Estático**: 
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront

#### Configuración del Servidor

- Configura headers de seguridad en tu servidor web (Apache/Nginx)
- Asegúrate de usar HTTPS
- Configura CSP headers en el servidor además de los meta tags

### Headers de Seguridad en el Servidor

Para Nginx, agrega a tu configuración:

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https://cdn.pixabay.com; frame-src 'self'; connect-src 'self';" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

Para Apache (.htaccess):

```apache
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https://cdn.pixabay.com; frame-src 'self'; connect-src 'self';"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Colores

- **Fondo Oscuro**: `slate-900`, `slate-800`
- **Color Principal**: `blue-500`, `blue-400`, `blue-600`
- **Texto**: `white`, `gray-300`, `gray-400`
- **Éxito**: `green-500`
- **Acento**: `purple-500`, `yellow-400`

## 📄 Licencia

© 2024 PCStyle. Todos los derechos reservados.

## 🤝 Soporte

Para preguntas o soporte, contacta a través de:
- Email: contacto@pcstyle.com
- Teléfono: +57 300 123 4567
- Ubicación: Cúcuta, Norte de Santander, Colombia

