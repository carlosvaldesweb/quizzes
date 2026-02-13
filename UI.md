# Prompt para IA de Interfaces — Quizzes

Diseña las interfaces web para **Quizzes**, una plataforma SaaS de aprendizaje gamificado que permite crear cuestionarios interactivos, compartirlos mediante códigos de acceso y obtener resultados al instante. El estilo es una mezcla entre SaaS moderno y entorno de juego (e-learning gamificado).

## Paleta de colores

| Rol | Color | Uso |
|---|---|---|
| **Primario** | Violet | Identidad de marca, botones principales, acentos, encabezados destacados |
| **Secundario** | Amber | Energía, llamadas a la acción secundarias, badges, elementos de gamificación |
| **Éxito** | Emerald | Respuestas correctas, confirmaciones, estados completados |
| **Error** | Rose | Respuestas incorrectas, alertas, validaciones fallidas |
| **Información** | Blue | Tips, ayuda contextual, notificaciones informativas |
| **Advertencia** | Yellow | Límites de plan, advertencias, estados pendientes |
| **Neutro** | Slate | Textos, fondos, bordes, estructura general |

## Páginas públicas

### 1. Landing Page (index)

Orden de secciones:

1. **Hero:** Titular con propuesta de valor, subtítulo explicativo, CTA principal ("Empieza gratis") y CTA secundario ("Ver demo"). Incluye mockup HTML/CSS interactivo de un quiz con opciones y timer.

2. **Tipos de preguntas:** Sección con texto a la izquierda y mockup a la derecha. Mockup con 3 tarjetas animadas en ciclo (deck cycling) mostrando opción múltiple, V/F y emparejamiento. Destaca los 5 tipos de preguntas, límites de tiempo configurables y puntaje por pregunta.

3. **Sesiones en vivo:** Layout invertido (mockup izquierda, texto derecha) con gradient mesh. Mockup tipo panel de configuración con grid de settings (fecha/hora, aleatorio, intentos, visibilidad, participantes) y código de acceso prominente con indicador pulsante "Activa".

4. **Modo práctica:** Texto izquierda, mockup derecha. Mockup de sesión activa con barra de progreso, pregunta actual, opción correcta con feedback emerald inline y botón "Siguiente pregunta".

5. **Modo flashcards:** Layout invertido con gradient mesh. Mockup con efecto 3D de volteo (flip animation) mostrando pregunta y respuesta. Dots de progreso debajo.

6. **Audiencias:** Tres tarjetas glass-strong con mini-mockups HTML/CSS, features highlights y enlace "Saber más":
   - **Profesores** (violet) — Mini lista de resultados de alumnos con puntajes.
   - **Empresas** (amber) — Mini grid de métricas (evaluados, aprobados, promedio).
   - **Estudiantes** (emerald) — Mini modo práctica con respuesta correcta.

7. **Cómo funciona:** 3 pasos con tarjetas glass-strong, cada una con mini-mockup:
   - Paso 1: Crea tu quiz — Mini editor con pregunta y opciones.
   - Paso 2: Comparte el código — Display de código + avatares de participantes uniéndose.
   - Paso 3: Revisa resultados — Mini gráfico de barras con colores por rendimiento.

8. **Comparativa de planes:** Tarjetas comparativas:
   - **Plan Gratuito** — Quizzes y sesiones ilimitadas, hasta 10 preguntas, hasta 4 opciones, hasta 20 participantes, opción múltiple y V/F, temas prediseñados.
   - **Plan Pro** — Todo lo gratuito más: hasta 50 preguntas, hasta 6 opciones, hasta 50 participantes, todos los tipos de preguntas, múltiples respuestas correctas, temas personalizados con logo/fondo, modo aleatorio, prueba gratuita de 30 días.

9. **CTA final:** Sección de cierre con llamada a la acción para registrarse.

### 2. Página Para Estudiantes (/para/estudiantes)

Orden de secciones:

1. **Hero:** Titular orientado a estudiantes con mockup de quiz del estudiante (creación, personalización, práctica).

2. **Crea tus quizzes:** Texto izquierda, mockup derecha. Mockup de editor de quiz con pregunta, tipos de pregunta como chips, y opciones de respuesta en grid 2x2.

3. **Flashcards:** Layout invertido con gradient mesh. Mockup con flip animation mostrando pregunta de biología y respuesta. Dots de progreso.

4. **Temas visuales:** Texto izquierda, mockup derecha. Mockup tipo "theme picker" con 3 círculos de color (violeta, esmeralda, rosa) con check mark animado, y quiz preview que cambia de color scheme cada 3 segundos (theme cycling). Incluye sección de branding personalizado "Pro".

5. **Comparte con compañeros:** Layout invertido con gradient mesh. Mockup de sesión compartida con código de acceso prominente, grid de configuración (preguntas, intentos, aleatorio, registro) y botón "Compartir sesión".

6. **Cómo funciona:** 3 pasos con mini-mockups inline (signup form, quiz editor, bar chart de resultados).

7. **Testimonios:** 3 testimonios de estudiantes con rating.

8. **Planes y precios** (componente compartido con landing).

9. **CTA final.**

### 3. Página Para Profesores (/para/profesores)

Secciones: Hero, Stats, Pain Points, Showcases (Timer, Shuffle, Resultados), How it Works, Testimonios, Pricing, CTA.

### 4. Página Para Empresas (/para/empresas)

Secciones: Hero, Stats, Pain Points, Showcases (Encuesta de clientes, Investigación de mercado), How it Works, Testimonios, Pricing, CTA.

### 5. Página de Precios (público)

- Encabezado con titular claro ("Elige tu plan")
- Toggle mensual/anual (si aplica)
- Dos tarjetas de plan (Gratuito y Pro) con lista de características, precio y botón CTA
- Destacar visualmente el plan Pro con badge Amber y borde Violet
- Sección FAQ debajo de los planes

### 6. Página de Acceso para Participantes (pública)

- Diseño centrado y minimalista
- Campo para ingresar código de acceso a la sesión
- Los participantes NO necesitan cuenta — solo el código
- Branding sutil de Quizzes

## Páginas internas (autenticadas)

### Dashboard del Usuario

- Sidebar de navegación estilo SaaS
- Vista general con estadísticas de rendimiento
- Listado de quizzes recientes
- Accesos rápidos a crear quiz y crear sesión

### Configuración / Suscripción

- Gestión de cuenta y perfil
- Sección de suscripción con plan actual, opción de upgrade/downgrade
- Historial de facturación

## Directrices de diseño

- **Tipografía:** Outfit (sans-serif), limpia y moderna.
- **Espaciado:** Generoso, con separación clara entre secciones.
- **Bordes y sombras:** Suaves, glassmorphism con backdrop blur. `.glass` para elementos internos, `.glass-strong` para cards principales.
- **Iconografía:** Lucide Icons como set principal (`i-lucide-*`).
- **Modo claro y oscuro:** La interfaz funciona en ambos modos. Usar colores con opacidad (`bg-violet-500/20`) para compatibilidad automática.
- **Responsivo:** Mobile-first. Mockups HTML/CSS se ocultan en móvil (`hidden lg:block`).
- **Gamificación visual:** Amber como acento energético en badges, logros y elementos interactivos. Violet como color dominante de identidad.
- **Elementos Pro:** Marcar features exclusivas del Plan Pro con el ícono `i-lucide-sparkles` y badge `✦ Pro`.
- **Mockups animados:** Usar animaciones CSS puras (no imágenes) para demostrar funcionalidades: flashcard flip, card deck cycling, theme preview cycling, pulse indicators.
- **Gradient mesh:** Fondos con blobs animados (`gradient-mesh`) en secciones alternas para ritmo visual.
- **Floating badges:** Pills de glass posicionadas fuera de los cards (`z-10`) para destacar features clave.
- **Estilo técnico detallado:** Ver `STYLE.md` para clases CSS, patrones de código y ejemplos.
