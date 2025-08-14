# Especificaciones Técnicas - Plataforma E-commerce Tars

## Tabla de Contenidos

1. [Visión General](#visión-general)
2. [Diseño y Experiencia de Usuario](#diseño-y-experiencia-de-usuario)
3. [Estructura del Sitio](#estructura-del-sitio)
4. [Modelo de Negocio](#modelo-de-negocio)
5. [Planes de Suscripción](#planes-de-suscripción)
6. [Integraciones](#integraciones)
7. [Proceso de Onboarding](#proceso-de-onboarding)
8. [Tecnologías Utilizadas](#tecnologías-utilizadas)
9. [Roadmap](#roadmap)
10. [Soporte](#soporte)

## Visión General

Tars E-commerce es una solución integral para la creación y gestión de tiendas en línea, construida sobre la plataforma MedusaJS. Ofrecemos una experiencia de comercio electrónico completa, desde la configuración inicial hasta la gestión diaria de operaciones.

## Diseño y Experiencia de Usuario

### 1. Elementos de Interfaz y Componentes ReactBits

#### 1.1. Encabezado (Header)

**Componente ReactBits Recomendado**: `NavigationBar`

**Detalles de Implementación**:

- **Logo a la izquierda** - Usar el componente `Brand` de ReactBits
- **Menú de navegación principal centrado** - Usar `NavMenu` con items centrados
- **Botón de acción destacado** - Implementar con `Button` con variante 'primary'
- **Diseño sticky** - Activar prop `sticky` del NavigationBar
- **Menú móvil** - Usar `MobileMenu` para dispositivos pequeños

#### 1.2. Sección Hero

**Componente ReactBits Recomendado**: `Hero` o `Banner`

**Características**:

- **Título principal** - Usar `Hero.Title` con animación de entrada
- **Subtítulo descriptivo** - Implementar con `Hero.Subtitle`
- **Llamado a la acción** - Usar `Button` con variante 'cta' y animación de pulso
- **Fondo con gradiente** - Aplicar `GradientBackground` con colores de la marca
- **Imagen decorativa** - Usar `ParallaxImage` para efecto de profundidad

#### 1.3. Tarjetas de Servicios

**Componente ReactBits Recomendado**: `Card` o `FeatureCard`

**Estructura por Tarjeta**:

- **Contenedor** - Usar `Card` con efecto hover
- **Icono** - Implementar con `Icon` de la librería de iconos
- **Título** - Usar `Card.Title` con tipografía semibold
- **Descripción** - `Card.Description` con texto centrado
- **Botón** - `Button` con variante 'text' y flecha animada
- **Efectos** - Agregar `HoverScale` para interacción

**Diseño de Grid**:

- Usar `Grid` o `CardGrid` de ReactBits
- Configurar responsividad: 1 columna en móvil, 2 en tablet, 3-4 en desktop
- Agregar espacio entre tarjetas con `gap`

#### 1.4. Sección de Características

**Componente ReactBits Recomendado**: `FeatureSection`

**Implementación**:

- **Contenedor** - Usar `Container` con padding vertical
- **Elementos en zigzag** - Implementar con `Feature` y alternar `imagePosition`
- **Números grandes** - Usar `Counter` con animación de conteo
- **Ilustraciones** - Usar `LottieAnimation` o `Illustration`
- **Transiciones** - Agregar `FadeIn` y `SlideIn` para efectos al hacer scroll

#### 1.5. Pie de Página (Footer)

**Componente ReactBits Recomendado**: `Footer`

**Estructura**:

- Logo y descripción breve de la empresa
- Enlaces organizados por categorías
- Información de contacto con iconos
- Enlaces a redes sociales
- Avisos legales y enlaces de interés

### 2. Paleta de Colores

#### 2.1. Colores Principales

- **Azul Eléctrico**: `#2563eb` (similar a PulseHub)
- **Morado Profundo**: `#7c3aed`
- **Cian Brillante**: `#06b6d4` (acentos)

#### 2.2. Fondos

- **Oscuro**: `#0f172a` (casi negro)
- **Claro**: `#f8fafc` (blanco con tono azulado)

#### 2.3. Texto

- **Oscuro**: `#1e293b` (gris muy oscuro)
- **Claro**: `#e2e8f0` (gris claro)

### 3. Tipografía

#### 3.1. Familia Tipográfica

- **Títulos**: Inter (Bold 700)
- **Subtítulos**: Inter (SemiBold 600)
- **Cuerpo de Texto**: Inter (Regular 400)
- **Código/Técnico**: JetBrains Mono

### 4. Efectos y Animaciones

#### 4.1. Transiciones

- Suaves entre secciones
- En botones y enlaces interactivos

#### 4.2. Efectos Visuales

### 5. Componentes de Precios

#### 5.1. Estructura de Tarjetas de Precios

**Componente Recomendado:** `PricingCard` o `PlanCard`

**Link:** <https://blocks.mvp-subha.me/preview/simple-pricing>

**Características Principales:**

- Diseño de tarjeta con sombra sutil
- Efecto de elevación al hacer hover
- Badge destacado para el plan recomendado
- Botón de CTA principal
- Lista de características con iconos

#### 5.3. Elementos Adicionales

**Componente de Comparación:** `FeatureComparison`

- Tabla comparativa de características
- Filas con efecto hover
- Iconos de check/cross

**Componente de Preguntas Frecuentes:** `FAQ`

- Acordeón desplegable
- Transiciones suaves
- Iconos interactivos

#### 5.4. Personalización

**Temas de Color:**

- Usar la paleta de colores principal
- Variantes para cada plan (básico, intermedio, full)
- Estados interactivos (hover, active, focus)

**Tipografía:**

- Títulos en Inter Bold
- Precios con tamaño destacado
- Características en Inter Regular

- Parallax en imágenes de fondo
- Revelación suave al hacer scroll
- Efectos hover sutiles en tarjetas

### 5. Componentes Clave

#### 5.1. Barra de Navegación (Navbar)

- Menú desplegable para móviles
- Transiciones suaves
- Estado activo visible

#### 5.2. Sección Hero

- Animación de partículas o gradiente
- Llamados a la acción claros
- Diseño responsivo

#### 5.3. Tarjetas de Servicios

- Efecto de elevación al hacer hover
- Iconos ilustrativos
- Espaciado equilibrado

#### 5.4. Formulario de Contacto

- Validación en tiempo real
- Retroalimentación clara
- Diseño limpio y accesible
- Título principal con tipografía moderna y peso pesado
- Subtítulo descriptivo
- Llamado a la acción principal
- Imagen o video con efecto de superposición de gradiente

#### 5.4. Tarjetas de Servicios

- Diseño en cuadrícula con hover effects sutiles
- Iconos personalizados para cada servicio
- Títulos cortos y descriptivos
- Botones con animación de flecha

### 2.4. Sección de Características

- Diseño en zigzag alternando imagen y texto
- Números grandes para destacar beneficios
- Ilustraciones personalizadas estilo moderno

### 2.5. Footer

- Logo y descripción corta
- Enlaces rápidos organizados por categorías
- Información de contacto con iconos
- Redes sociales con iconos modernos
- Avisos legales en la parte inferior

### 3. Propuesta de Paleta de Colores

- Color principal: Azul eléctrico (#2563eb) - similar al de PulseHub
- Color secundario: Morado profundo (#7c3aed)
- Acento: Cian brillante (#06b6d4)
- Fondo oscuro: Casi negro (#0f172a)
- Fondo claro: Blanco con tono azulado muy claro (#f8fafc)
- Texto oscuro: Gris muy oscuro (#1e293b)
- Texto claro: Gris claro (#e2e8f0)

### 4. Tipografía

- Títulos: Inter (Bold 700)
- Subtítulos: Inter (SemiBold 600)
- Cuerpo de texto: Inter (Regular 400)
- Código/Technical: JetBrains Mono (para ejemplos de código)

### 5. Animaciones y Efectos

- Scroll suave entre secciones
- Revelación suave de elementos al hacer scroll
- Efecto parallax en imágenes de fondo
- Transiciones en botones y enlaces
- Hover effects sutiles en tarjetas y botones

### 6. Componentes Clave a Implementar

- Navbar: Con menú desplegable para móviles
- Hero: Con animación de partículas o gradiente animado
- Tarjetas de Servicios: Con efecto de elevación al hacer hover
- Sección de Características: Con animación de aparición al hacer scroll
- Testimonios: Carrusel automático
- Formulario de Contacto: Con validación
- Footer: Completo con múltiples columnas

### 7. Próximos Pasos

## Estructura del Sitio

### Rutas Principales

```markdown
/
├── /soluciones
│   ├── /plataforma-ecommerce
│   ├── /marketplace
│   ├── /gestor-de-contenidos
│   └── /analiticas
├── /industrias
│   ├── /retail
│   ├── /moda
│   ├── /bienes-de-consumo
│   └── /manufactura
├── /recursos
│   ├── /blog
│   ├── /casos-de-estudio
│   └── /documentacion
├── /sobre-nosotros
├── /contacto
└── /demo
```

## Modelo de Negocio

### Período de Prueba

- **Duración**: 2 meses
- **Incluye**:
  - Acceso completo al panel de administración de Medusa
  - Hasta 150 productos
  - Soporte básico por correo electrónico
  - Plantillas de tienda prediseñadas
  - Atencion asistida e implementacion de la plataforma

## Planes de Suscripción

### 1. Plan Básico - $15.000/mes

**Características principales:**

- Hasta 500 productos
- Panel de administración básico
- Soporte por correo electrónico (respuesta en 24-48h)
- Plantillas de diseño básicas
- Atencion asistida e implementacion de la plataforma

**Pagos:**

- Transferencia bancaria manual
- Facturación mensual

**Logística:**

- Gestión manual de envíos
- El cliente gestiona su propia logística
- Sin integraciones de transporte

**Limitaciones:**

- Sin integraciones de pago automáticas
- Sin email marketing integrado
- Sin análisis avanzados

### 2. Plan Intermedio - $25.000/mes

**Todo lo del Plan Básico, más:**

- Hasta 2,000 productos
- Soporte prioritario (respuesta en 12-24h)
- Hasta 2 tiendas online

**Pagos (elegir uno):**

- Mercado Pago
- Transferencia bancaria

**Logística:**

- Integración con 1 transportista
- Seguimiento básico de envíos
- Cálculo de costos de envío

**Marketing:**

- Email marketing básico (hasta 5,000 envíos/mes)
- Cupones y descuentos
- Integración con redes sociales

### 3. Plan Full - $50.000/mes

**Todo lo de los planes anteriores, más:**

- Productos ilimitados
- Soporte 24/7
- Tiendas ilimitadas
- Atencion asistida e implementacion de la plataforma

**Pagos (todas las opciones):**

- Mercado Pago
- PayPal
- Stripe
- Otras pasarelas personalizables

**Logística Avanzada:**

- Integración con múltiples transportistas
- Seguimiento en tiempo real
- Etiquetas de envío automáticas
- Gestión de devoluciones

**Marketing Avanzado:**

- Email marketing ilimitado
- Automatizaciones de marketing
- Análisis avanzados
- CRM integrado
- Programas de fidelización

## Integraciones

### Pasarelas de Pago

- **Mercado Pago**
  - Procesamiento de pagos
  - Pagos con tarjeta
  - Transferencias bancarias
  - Pago en efectivo

- **PayPal**
  - Pagos internacionales
  - PayPal Checkout
  - Reembolsos

- **Stripe**
  - Procesamiento de tarjetas
  - Suscripciones recurrentes
  - Checkout personalizado

### Logística

- **Transportistas**
  - Personalización con otros transportistas

- **Características**
  - Cálculo de costos en tiempo real
  - Seguimiento de envíos
  - Impresión de etiquetas
  - Gestión de inventario

### Marketing

- **Email Marketing**
  - Plantillas personalizables
  - Automatizaciones
  - Análisis de campañas
  - Segmentación de audiencia

## Proceso de Onboarding

1. **Registro**
   - Formulario de registro
   - Verificación de correo electrónico
   - Acceso al panel de administración

2. **Configuración Inicial**
   - Asistente paso a paso
   - Importación de productos
   - Configuración de pagos
   - Configuración de envíos

3. **Personalización**
   - Selección de plantilla
   - Personalización de colores y fuentes
   - Configuración de dominio personalizado

4. **Lanzamiento**
   - Revisión técnica
   - Pruebas de rendimiento
   - Lanzamiento controlado

## Tecnologías Utilizadas

### Frontend

- **Framework**: Next.js
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Estado**: React Query
- **Formularios**: React Hook Form

### Backend (MedusaJS)

- **API**: REST y GraphQL
- **Base de datos**: PostgreSQL
- **Búsqueda**: MeiliSearch
- **Almacenamiento**: AWS S3 o compatible
- **Cache**: Redis

### Infraestructura

- **Hosting**: Dokploy/Vercel/Private VPS/
- **Analíticas**: Plausible/Posthog/Umami

## Roadmap

### Fase 1: Lanzamiento Inicial (Mes 1-2)

- Sitio web informativo
- Páginas de destino para cada plan
- Proceso de registro simplificado

### Fase 2: Mejoras en la Plataforma (Mes 3-4)

- Panel de control mejorado
- Más integraciones
- Documentación detallada

### Fase 3: Crecimiento (Mes 5-6)

- Programa de afiliados
- Marketplace de extensiones
- Soporte a más regiones

## Soporte

- **Correo electrónico**: <soporte@tarsecommerce.com>
- **Horario de atención**: Lunes a Viernes de 9:00 a 18:00
- **Documentación**: docs.tarsecommerce.com
- **Centro de ayuda**: ayuda.tarsecommerce.com

---
*Última actualización: Agosto 2025*
