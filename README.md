# Prueba Técnica - Frontend - ReactJs/Next.js

## Detalles de la prueba

---

¡Bienvenid@ a la oportunidad de demostrar tus habilidades técnicas en React/Next.js! 

En **Creativedog**, estamos emocionados de conocer tu destreza y creatividad a través de una prueba técnica de frontend diseñada para evaluar tus conocimientos y habilidades en el desarrollo web enfocándonos en:

- Aplicación de las mejores prácticas de desarrollo frontend
- Enfoque en la usabilidad
- Atención a los detalles en la implementación de las funcionalidades requeridas
- Interpretación de las instrucciones asignadas

---

## La prueba consta de la creación de dos pantallas esenciales para nuestro proyecto.

### Pantalla 1: Login

En primer lugar, la pantalla de inicio de sesión, donde buscamos que demuestres tus habilidades en el manejo de formularios y validación de datos. Queremos ver cómo implementas un proceso de autenticación seguro y eficiente.

**Requisitos de implementación:**

- Se deberá validar el formulario de ingreso con la librería [Formik](https://formik.org/), mostrando los errores correspondientes.
- Para loguearse se deberá llamar al endpoint correspondiente ([ver documentación de API](https://www.notion.so/Prueba-T-cnica-Frontend-ReactJs-Next-js-212e50fa60eb4f2eaea757cc4b33324d?pvs=21) ) y guardar la data en Local Storage.

### Pantalla 2: Home

En segundo lugar, la página principal, que simula un entorno de comercio electrónico. Aquí, tu tarea será llevar a cabo el maquetado de la interfaz  con un diseño atractivo,  responsive y pixel perfect. Además, deberás integrar algunas API’s que proporcionaremos para agregar funcionalidades dinámicas.

**Requisitos de implementación:**

- Para obtener los productos se deberá llamar al endpoint correspondiente ([ver documentación de API](https://www.notion.so/Prueba-T-cnica-Frontend-ReactJs-Next-js-212e50fa60eb4f2eaea757cc4b33324d?pvs=21) ) y paginarlos acorde al diseño.
- Para obtener las categorías se deberá llamar al endpoint correspondiente ([ver documentación de API](https://www.notion.so/Prueba-T-cnica-Frontend-ReactJs-Next-js-212e50fa60eb4f2eaea757cc4b33324d?pvs=21) ) y paginarlas acorde al diseño.
- Todo otro contenido se esta página puede ser considerado estático.

Esta prueba técnica no solo evaluará tu capacidad para trabajar con React JS, sino también tu comprensión de las mejores prácticas de desarrollo frontend, tu enfoque en la usabilidad y la atención a los detalles en la implementación de las funcionalidades requeridas.

Estamos ansiosos por ver cómo te enfrentas a este desafío!

¡Buena suerte y disfruta del proceso de desarrollo! Estamos seguros de que será una experiencia enriquecedora para ambas partes.

<aside>
🔋 Al [final de esta página](https://www.notion.so/Prueba-T-cnica-Frontend-ReactJs-Next-js-212e50fa60eb4f2eaea757cc4b33324d?pvs=21) encontrarás material extra a modo guía de como trabajamos en Creativedog

</aside>

---

## Forma de entrega

La entrega del proyecto deberá llevarse a cabo a través de un repositorio, preferentemente alojado en [gitlab](https://gitlab.com/), pero queda a discreción del evaluado.

Creativedog Agency trabaja con la estrategia de repositorios [Gitflow](https://www.gitkraken.com/learn/git/git-flow), por lo tanto el repositorio que se entrega se deberá estructurar de la siguiente manera:

**Ramas:**

- *main*: Es la rama de producción, donde se inicializa el proyecto.
- *develop*: Rama de desarrollo donde se van incorporando las *features* aprobadas.
- *feature/technical-test*: La rama donde se deberá desarrollar la prueba, para mayor simplificación se desarrollará toda la prueba en esta rama, aunque incluye varias features. Obviamente podés hacer todos lo commits que desees, pero recordá siempre comentar de forma descriptiva y concisa :).

Como paso final se pide generar el *merge request* (o *pull request*, dependiendo el repositorio elegido) documentando brevemente lo desarrollado y comentarios extras de creerlos necesario.

De ser necesario autenticación para poder ver el repositorio o sus *merge request*, estos son los usuarios a agregar:

| Nombre | email | Requerido |
| --- | --- | --- |
| Javier Sampietro | javier@creativedog.agency | Siempre |
| Marina Ziembar | marina@creativedog.agency | Para pruebas de App Team |
| Tatiana Gonzalez | tatiana@creativedog.agency | Para pruebas de Web Team |

## Assets

---

### Figma (files)

https://www.figma.com/file/Y1agnin24G1Xuss788cleB/Prueba-T%C3%A9cnica---Frontend?type=design&node-id=1%3A3&mode=design&t=V9CpnzzegU4hVz17-1

### Figma (Prototypes) - Desktop

https://www.figma.com/proto/Y1agnin24G1Xuss788cleB/Prueba-T%C3%A9cnica---Frontend?page-id=1%3A3&type=design&node-id=305-3526&viewport=315%2C509%2C0.22&t=GT8D0BuSTXNo2lIB-1&scaling=min-zoom&starting-point-node-id=305%3A3526&show-proto-sidebar=1&mode=design

### Figma (Prototypes) - Mobile

https://www.figma.com/proto/Y1agnin24G1Xuss788cleB/Prueba-T%C3%A9cnica---Frontend?page-id=1%3A3&type=design&node-id=319-5294&viewport=315%2C509%2C0.22&t=GT8D0BuSTXNo2lIB-1&scaling=min-zoom&starting-point-node-id=319%3A5294&show-proto-sidebar=1&mode=design

---

## API a utilizar

En el siguiente link podrás encontrar la documentación de la API para el desarrollo de la prueba técnica.

[](https://app.theneo.io/creativedog/c-commerce/)

---

## Por último, te dejamos material extra a modo guía de como trabajamos en Creativedog

## Guía de estilo

---

La guía de estilo utilizada por Creativedog Agency es:

[Airbnb Engineering & Data Science](https://airbnb.io/projects/javascript/)

## Sistema de diseño

---

El sistema de diseño utilizado por Creativedog Agency es:

[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## Inicialización

---

[Getting Started | Next.js](https://nextjs.org/docs)

## **Estructura de carpeta y su contenido**

---

### ✨ root (src)

- *App.js*: Componente de React que renderiza las rutas y componentes.
- *index.js*: Componente que contiene el render de App.js y los providers de los contexts.
- *globalStyles.module.css*: Archivo que contiene los estilos generales de todo el documento.

### ✨ public > assets

- *audios*: Archivos en formatos de audio.
- *images*: Archivos en formatos de imagen. Puede contener subcarpetas para mejorar la organización.
- *videos*: Archivos en formatos de video.

### ✨ components

- *atoms*: Componentes de React más pequeños, la unidad mínima. Se suelen construir con elementos de html unicamente. **Ejemplos:** Button, Input, Text, Avatar, Image, Anchor, etc.
- *molecules*: Componentes de React compuestos por dos o más átomos. Pueden contener algunos elementos html. **Ejemplos:** Card, FormGroup, Toast, etc.
- *organisms*: Componentes de React complejos, compuesto por moléculas. Puede contener átomos y algun elemento html auxiliar. **Ejemplos:** Header, Footer, Hero, etc.
- *templates*: Componentes de React más complejos, compuesto de organismos. Puede contener además alguna molécula. Funcionan como plantillas del contenido y deben **nombrarse y jerarquizarse con la misma estructura que posea la carpeta de pages**. **Ejemplos:** HomeTemplate, ContactTemplate, etc.

### ✨ contexts

- Archivos en formato **.js** que contengan Contexts de React utilizados en la aplicación.

### ✨ data

- Archivos en formato **.js** que tengan arrays y/u objetos con información estática (hardcodeada) de cada página. **Ejemplo:** títulos de páginas, títulos de botones, campos y/o labels de formularios, empty states, rutas, etc.

### ✨ pages

- Archivos con componentes de las páginas del sitio. Deben renderizar su template del mismo nombre y contener funciones que traigan la información correspondiente. En las pages NO se construye el contenido, solo se utiliza para crear métodos, traer información del context, traer información del archivo **data** correspondiente, etc. **Ejemplos:** Home, Contact, AboutUs, etc.

### ✨ utils

- Archivos en formato .js con funciones auxiliares útiles.

## Librerías que podés utilizar

---

- **SAP system:** [https://reactnavigation.org/docs/getting-started/](https://nextjs.org/)
- **Carruseles/Sliders:** [https://www.npmjs.com/package/react-native-app-intro-slider](https://swiperjs.com/react)
- **Llamadas a apis:** https://axios-http.com/docs/api_intro
- **Calendarios:** https://www.npmjs.com/package/@aldabil/react-scheduler
- **Bootstrap:** https://react-bootstrap.github.io/getting-started/introduction/
- **Animaciones:** https://www.react-spring.dev/
- **Animaciones on scroll:** https://www.npmjs.com/package/react-scrollmagic
- **Constructor de animaciones on scroll:** https://www.npmjs.com/package/react-waypoint
- **Transiciones:** https://www.react-reveal.com/
- **Constructor de transiciones:** https://greensock.com/gsap/
- **Traducción:** https://www.i18next.com/
- **Formateo de html:** https://www.npmjs.com/package/react-html-parser
- **Constructor de classNames:** https://www.npmjs.com/package/clsx
- **Formateo de fechas:** https://momentjs.com/
- **Input file formateado:**  https://www.npmjs.com/package/react-use-file-upload
- **Validación de formularios:**  https://formik.org/

<aside>
🤔 Si tenés alguna duda, comunicate con RRHH a [rrhh@creativedog.agency](https://www.notion.so/Creativedog-Agency-Pruebas-T-cnicas-b18ecc9d81924377af21df72fd2884f1?pvs=21)

</aside>