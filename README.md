# Sistema de Reservas para Clases

Este proyecto se desarrolla una Sinple Page Application (SPA), para gestionar un sistema de reservas de clases, con roles como adminsitrados y usuario.

## Herramientas y recursos:
* Hardware requerido: laptop o computadora con conexión a internet.

#### Software requerido:
* Navegador web (Chrome o Firefox)
* Visual Studio Code o cualquier IDE preferido
* Node.js y npm instalados
* Herramientas de desarrollo del navegador activadas

## Instalación:
* Clona primero el repositorio
* Instala dependencias "npm install"
* Inicia el servidor de desarrollo "npm run dv"
* Para correr el json-server colocamos "json-server --watch ./database/db.json"
* Para para la ejecucion es "Control+C"

## Estructura del proyecto
    SISTEMARESERVASCS/
    ├── database/
    │    └── db.json
    ├── public/
    ├── src/
    │   ├── main.js
    │   ├── auth.js
    │   ├── router.js
    │   └── views/
    │       ├── 404.html
    │       ├──dashboard.html
    │       ├── home.html
    │       └──  login.html
    ├── index.html
    ├── package.json
    ├── .gitignore
    ├── README.md  # Este archivo
    └── vite.config.js


## Temas abordados:
* Variables y tipos de datos en JavaScript
* Condicionales y estructuras de control
* Funciones y su aplicación
* Manipulación de estructuras de datos (arrays, objetos, sets y maps)
* Conceptos avanzados: closures, hoisting, async/await, y promesas
* Interacción con el DOM
* Manejo de APIs y Fetch