# Sistema de Gestión de Activos: Implementación con React + Material UI (MUI)

Este proyecto presenta una solución avanzada para la administración de inventarios técnicos, utilizando **React** para la gestión de estados y **Material UI** para la implementación de un sistema de diseño basado en los principios de *Material Design*.

## ¿Por qué Material UI es mejor opción?

La transición de estilos tradicionales a un sistema de **CSS-in-JS** con Material UI ofrece ventajas críticas para el desarrollo de interfaces robustas y escalables:

### 1. Sistema de Diseño Cohesivo (Material Design)
A diferencia de otros frameworks, MUI no solo ofrece componentes, sino un **lenguaje de diseño completo**. 
* **Ventaja:** El uso de sombras (elevaciones), tipografía estandarizada y feedback visual (efecto *ripple*) mejora la percepción de calidad y profesionalismo de la aplicación.
* **UI Pattern:** Implementación de tarjetas con jerarquía visual clara y modales de alto contraste.

### 2. Grid System Dinámico y Flexible
Se ha utilizado el componente `<Grid>` de MUI para estructurar la interfaz en un patrón de **4 columnas** en escritorio.
* **Responsividad nativa:** El sistema de 12 columnas permite transiciones fluidas:
  * **Desktop:** 4 columnas (`md={3}`).
  * **Tablet:** 2 columnas (`sm={6}`).
  * **Mobile:** 1 columna (`xs={12}`).

### 3. Component-Based Styling (Propiedad `sx`)
El proyecto elimina la dependencia de archivos `.css` externos. Toda la lógica de estilos está encapsulada dentro de los componentes React.
* **Mantenibilidad:** Evita conflictos globales de CSS y permite que cada componente sea una unidad autónoma y portable.

### 4. Accesibilidad y UX Refinada
MUI garantiza que componentes complejos como los **Modales** y los **TextFields** cumplan con estándares de accesibilidad (WAI-ARIA) de forma nativa. El patrón de "Ficha Técnica" mediante modales permite al usuario consultar detalles sin perder el contexto de la lista principal, reduciendo la carga cognitiva.

## Estructura de la Solución

* **Diseño Atómico:** Componentes reutilizables como `AssetCard.jsx`.
* **Filtrado en Tiempo Real:** Uso de hooks de React (`useState`) para actualizar la vista instantáneamente según la búsqueda del usuario.
* **Retroalimentación Visual:** Uso de `Chips` de colores para indicar estados de disponibilidad (`success` para disponible, `warning` para mantenimiento).

## Instalación y Ejecución

Para levantar el proyecto en un entorno local, sigue estos pasos:

1. **Instalar dependencias:**
   ```bash
   npm install @mui/material @emotion/react @emotion/styled