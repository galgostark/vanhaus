# Vanhaus - Experiencia Innovadora (Sitio Web Multi-página Premium)

Este es el proyecto web oficial completo, elegante y responsivo para la marca corporativa **Vanhaus** (Tagline: *Experiencia innovadora*). El sitio ha sido desarrollado desde cero combinando un riguroso estándar semántico, diseño estético de alta gama en tonos oscuros/claros, y micro-interacciones robustas mediante Vanilla JavaScript.

---

## 🛠️ Tecnologías y Recursos Utilizados

*   **HTML5 Semántico**: Uso riguroso de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) para optimización de SEO técnico, legibilidad y accesibilidad.
*   **CSS3 & Tailwind CSS**: Estilizado ágil con Tailwind CSS (vía CDN Oficial) complementado con una arquitectura CSS personalizada (`assets/css/styles.css`) para variables globales, animaciones `@keyframes`, efectos glassmorphic avanzados y transiciones fluidas de elevación.
*   **Vanilla JavaScript (ES6+)**: Lógica interactiva nativa sin dependencias ni frameworks. Controla el menú responsivo, efectos de scroll, observer de revelaciones dinámicas, filtrado en tiempo real, visor modal de portafolio y validación de formularios.
*   **Tipografía Premium (Google Fonts)**:
    *   **Outfit**: Utilizada para encabezados e identidades imponentes y modernas.
    *   **Inter**: Utilizada para textos corporativos y cuerpo, brindando limpieza, legibilidad y profesionalismo.
*   **Vectores Escalables (SVG)**: Logotipo corporativo premium y todos los íconos de servicios e info de contacto integrados directamente en código para un renderizado ultra-nítido en pantallas Retina y 4K.

---

## 📂 Estructura de Carpetas del Proyecto

El espacio de trabajo está estructurado de la siguiente forma:

```text
├── index.html                  # Página Principal / Landing Page
├── nosotros.html               # Página de Historia, Equipo de Trabajo y Valores
├── portafolio.html             # Galería Dinámica Filtrable de Casos de Éxito y Visor Modal
├── servicios.html              # Catálogo Extenso y Alternado de Servicios y Entregables
├── contacto.html               # Formulario de Contacto Avanzado con Validación y Ubicación
├── assets/
│   ├── css/
│   │   └── styles.css          # Core de Diseño, Variables Globales y Keyframes
│   └── js/
│       └── main.js             # Lógica Interactiva, Menu, Modales, Filtros e Inputs
└── README.md                   # Guía Técnica del Proyecto (Este Archivo)
```

---

## 🌟 Características Destacadas por Página

### 1. Cabecera (Header) y Pie de Página (Footer) Comunes
*   **Encabezado Fijo**: Menú superior de fondo negro sólido (`#000000`) fijo en todas las páginas. El logo incorpora una flecha roja estilizada de 4 puntas y texto en minúscula sans-serif geométrica.
*   **Navegación Interactiva**: Enlaces en blanco que se activan visualmente con una línea roja vibrante `#E30613` al deslizar el mouse o al encontrarse en la página activa.
*   **Navegación Móvil Responsiva**: Botón hamburguesa animado (se transforma en 'X') que despliega un menú elegante a pantalla completa con efecto blur.

### 2. Página Principal (`index.html`)
*   **Hero Section de Alto Impacto**: Diseño negro premium con sutil patrón de cuadrícula de alta tecnología, gran logo vectorial centrado, tagline de marca y botón con deslizamiento de brillo (Sliding Glow) hacia contacto.
*   **Nuestros Servicios**: Destaca de forma muy prominente las **4 tarjetas blancas premium** (Estrategia Digital, Branding, Producción Audiovisual, Consultoría) que elevan su sombra y rotan sutilmente su ícono rojo al hacer hover.
*   **Adelanto de Casos**: Muestra 3 proyectos destacados en grillas responsivas con overlays oscuros y zoom en hover.

### 3. Nosotros (`nosotros.html`)
*   **Historia y Trayectoria**: Descripción asimétrica del crecimiento de Vanhaus y su especialización en sectores exigentes como el minero.
*   **Misión y Visión**: Diseñadas en layouts corporativos limpios con íconos vectoriales minimalistas.
*   **Equipo Técnico**: Presentación del staff ficticio (Daniel, Sofía, Carlos, Laura) con cargos de liderazgo, biografías cortas y enlaces directos a LinkedIn/Email con efectos visuales activos.

### 4. Portafolio (`portafolio.html`)
*   **Filtros de Categoría**: Botones premium para cambiar dinámicamente de categoría de proyecto (Todos, Estrategia, Branding, Audiovisual, Minería) con animaciones de escala y opacidad en JS.
*   **Casos Industriales y de Minería**: Galería robusta con imágenes temáticas y descriptores.
*   **Visor de Proyectos (Modal)**: Al hacer clic en un proyecto, se abre un modal glassmorphic de alta fidelidad que detalla los retos, resultados clave medibles, cliente y año de ejecución. Se puede cerrar presionando 'X', haciendo clic fuera del modal o presionando la tecla `Escape`.

### 5. Servicios (`servicios.html`)
*   **Descripción Ampliada**: Desarrollo a fondo de las metodologías empleadas para cada uno de los 4 servicios core.
*   **Entregables Claros**: Listas jerarquizadas de valor con checks vectoriales rojos.
*   **Gráficos Explicativos**: Mocks conceptuales sofisticados construidos puramente en CSS/HTML que representan embudos analíticos, geometrías de diseño, consolas de edición y pasos de ejecución.

### 6. Contacto (`contacto.html`)
*   **Formulario Inteligente**: Formulario avanzado con etiquetas flotantes animadas y bordes activos en rojo.
*   **Validación Estricta de Campos**: El motor de validación en tiempo real revisa que el email sea correcto, que el teléfono posea caracteres numéricos y que los campos requeridos cumplan con un mínimo de texto, pintando alertas elegantes si hay fallos.
*   **Simulación de Envío**: Muestra un spinner animado en el botón durante la carga y despliega un **Toast Notification** flotante premium en negro y rojo confirmando el éxito del envío.
*   **Mapa Simulado**: Representación de alta fidelidad de un mapa técnico oscuro con marcadores parpadeantes e indicadores de coordenadas, logrando un aspecto muy superior a los mapas estándar embebidos.

---

## 📈 SEO y Buenas Prácticas
*   **Estructura Jerárquica**: Solo un elemento `<h1>` principal por página y anidamiento semántico correcto de `<h2>` y `<h3>`.
*   **Metadata Optimizada**: Cada página contiene títulos descriptivos específicos, descripciones únicas, etiquetas de palabras clave y metatags Open Graph (OG) listos para compartirse en redes sociales.
*   **Rendimiento y Ligereza**: Al no requerir librerías pesadas de terceros ni frameworks de JavaScript, el sitio carga casi instantáneamente, logrando puntuaciones de rendimiento sobresalientes.

---
