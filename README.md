# Sistema de Gestión de Activos: Implementación con React + Bootstrap

Este proyecto presenta una solución funcional para la administración de inventarios universitarios, utilizando **React** como motor de lógica y **Bootstrap** como marco de referencia para patrones de interfaz de usuario.

## ¿Por qué React + Bootstrap es mejor opción?

La elección de estas tecnologías no es casual. Para un taller de UI Patterns, esta combinación ofrece ventajas competitivas en términos de estandarización y velocidad de desarrollo:

### 1. Estandarización de Patrones (UI Consistency)
Bootstrap es, en esencia, una biblioteca de patrones de diseño ya probados. Al utilizar componentes como `Card`, `Modal` y `Navbar`, garantizamos que la interfaz siga convenciones de diseño universales. Esto reduce la curva de aprendizaje del usuario final, ya que los elementos se comportan de la forma en que el mundo espera.

### 2. Sistema de Rejilla Flexbox y Grid
La implementación del layout se basa en el sistema de columnas de Bootstrap (`Container`, `Row`, `Col`). 
* **Ventaja técnica:** Permite un diseño **Mobile-First** sin escribir media-queries manuales. 
* **Resultado:** El patrón de visualización en tarjetas se adapta automáticamente de 1 a 3 columnas dependiendo de la resolución de la pantalla.

### 3. Separación de Preocupaciones (Logic vs. Style)
React se encarga de la **lógica de estado** (quién es el activo seleccionado, qué se está buscando), mientras que Bootstrap se encarga de la **presentación**. Esta arquitectura modular facilita el mantenimiento y la escalabilidad del código, permitiendo que la lógica matemática del sistema sea independiente de su apariencia visual.

### 4. Accesibilidad y UX Profesional
Los componentes de `react-bootstrap` están construidos pensando en la accesibilidad (ARIA roles). El uso de patrones como el **Modal** para detalles y **Badges** de colores para estados (`success`, `warning`) proporciona un feedback inmediato y claro, cumpliendo con las heurísticas de usabilidad de Nielsen.

## Estructura del Taller

* **Componentes Atómicos:** Uso de `AssetCard` para encapsular la información de cada equipo.
* **Manejo de Estados:** Uso de `useState` para el filtrado dinámico de datos en tiempo real (Pattern: Live Search).
* **Interacción Dinámica:** Implementación de ventanas emergentes (Modales) para mostrar información extendida sin perder el contexto de la lista principal.

## Requisitos de Ejecución

Para ejecutar este proyecto, solo es necesario contar con **Node.js** instalado. Los pasos son:

1. **Instalar dependencias:**
   ```bash
   npm install