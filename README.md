# Gestión de Activos Universitarios - UI Patterns

Este repositorio contiene una implementación práctica de patrones de diseño de interfaz de usuario (UI Patterns) utilizando React y Vite. El proyecto se centra en la gestión de activos universitarios, permitiendo la visualización y filtrado eficiente de equipos técnicos.

## Objetivo del Proyecto

El propósito de este taller es demostrar cómo la aplicación de patrones específicos mejora la usabilidad y reduce la carga cognitiva del usuario al interactuar con grandes volúmenes de datos. Se han implementado soluciones para los problemas comunes de navegación, visualización y feedback.

## Patrones de UI Implementados

### 1. Filter Bar (Patrón de Entrada y Navegación)
Se ha diseñado una barra de búsqueda que actúa como un filtro dinámico. Este patrón permite al usuario localizar elementos específicos en tiempo real, evitando la necesidad de desplazarse manualmente por toda la lista de activos.

### 2. Card System (Patrón de Contenido)
La información de los equipos se organiza en tarjetas independientes. Este patrón facilita la jerarquización de los datos, presentando los detalles más relevantes (como el ID y el estado) de forma inmediata y reservando la información técnica para una interacción posterior.

### 3. Modal Overlay (Patrón de Feedback y Detalle)
Para mantener el contexto del usuario, se utiliza una ventana modal que muestra los detalles técnicos de cada activo. Esto permite profundizar en la información sin abandonar la vista principal del inventario.

### 4. Status Indicators (Patrón de Estado)
Se aplica un diseño condicional basado en colores para comunicar el estado de disponibilidad de los equipos. Esto permite una identificación visual rápida mediante el uso de convenciones estándar de color (verde para disponibilidad y rojo/amarillo para alertas o mantenimiento).

## Tecnologías Utilizadas

* **React:** Librería principal para la construcción de la interfaz basada en componentes.
* **Vite:** Herramienta de construcción y entorno de desarrollo de alto rendimiento.
* **CSS Grid:** Sistema de maquetación utilizado para garantizar que la interfaz sea responsiva y adaptable a diferentes tamaños de pantalla.

## Instalación y Ejecución

Para visualizar este proyecto de forma local, siga estos pasos:

1. Clonar el repositorio o descargar los archivos.
2. Ejecutar el comando para instalar las dependencias:
   ```bash
   npm install