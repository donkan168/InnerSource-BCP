# Atlas InnerSource BCP Portal

**Autors:** Framework Backend 

# InnerSource BCP

Bienvenido al proyecto InnerSource BCP Portal. Esta guía te ayudará a desplegar la aplicación y ejecutar las pruebas unitarias.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Despliegue](#despliegue)
- [Ejecutar Pruebas](#ejecutar-pruebas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar el repositorio)

## Despliegue

1. **Instala las dependencias:**

   ```bash
   npm install
   ```

2. **Inicia un servidor local:**

   Puedes usar un servidor estático como `http-server` o `live-server`. Si no tienes `http-server` instalado, puedes instalarlo globalmente:

   Para Windows:
   ```bash
   npm install -g http-server
   ```

   Para Mac:
   ```bash
   npm install -g http-server
   ```

   Luego, ejecuta el servidor:

   ```bash
   http-server . -p 8000
   ```

   Abre tu navegador y ve a `http://localhost:8000` para ver la aplicación en acción.

## Ejecutar Pruebas

1. **Asegúrate de que las dependencias estén instaladas:**

   Si no lo has hecho, ejecuta:

   ```bash
   npm install
   ```

2. **Ejecuta las pruebas unitarias:**

   Para ejecutar las pruebas, utiliza el siguiente comando:

   ```bash
   npm test
   ```

   Para ejecutar las pruebas en modo de vigilancia (watch mode), utiliza:

   ```bash
   npm run test:watch
   ```

   Esto ejecutará las pruebas y las volverá a ejecutar automáticamente cada vez que realices cambios en los archivos de prueba.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los pasos de la [Guía de Contribución](contribution.html).

## Licencia

Este proyecto es propiedad intelectual de BCP. El uso sin autorización esta prohibido.
