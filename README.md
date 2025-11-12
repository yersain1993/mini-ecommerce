# Mini-Ecommerce App

Este es un prueba técnica de una aplicación de e-commerce minimalista construida con React, TypeScript, Vite y Zustand. La aplicación permite a los usuarios ver, agregar y eliminar productos al carrito.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto en tu terminal.
3. Ejecuta ```npm install``` para instalar las dependencias del proyecto.
4. Ejecuta ```npm run dev``` para iniciar el servidor de desarrollo.
5. Descripción técnica.
   
## La aplicación utiliza las siguientes tecnologías:

- React: Librería de JavaScript para construir interfaces de usuario.
- TypeScript: Lenguaje de programación de tipo estático para JavaScript.
- Vite: Build tool para construir aplicaciones web rápidas y eficientes.
- Zustand: Librería de estado de React para gestionar el estado de la aplicación.
  
La aplicación utiliza Vite como herramienta de construcción para compilar y servir la aplicación. React y TypeScript se utilizan para construir la interfaz de usuario y el código de la aplicación, respectivamente. Zustand se utiliza para gestionar el estado de la aplicación.

Para instalar las dependencias necesarias, se utiliza ```npm```. El servidor de desarrollo se inicia con el comando ```npm run dev```. La aplicación se puede construir con el comando ```npm run build``` para generar un paquete de producción.

Estructura del proyecto
El proyecto tiene la siguiente estructura:

```
api/
├── axiosInstance.ts
src/
├── components/
│   ├── common/
│   │   ├── Layout/
│   ├── Layout/   
│   │   ├── Header.tsx
│   │   └── Footer.tsx   
│   │   └── Main.tsx   
│   ├── products/
│   │   ├── ListProduct.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductCart.tsx
│   └── ui/
│       ├── LoaderSpiner.tsx
│       └── Modal.tsx
├── api/
│   ├── axiosInstance.ts
│   └── productsServices.ts
├── services/
│   └── productsServices.ts
└── stores/
    └── useCartStore.ts
```

En este ejemplo, la estructura del proyecto es la siguiente:

- El directorio ```src``` contiene los componentes de la interfaz de usuario, servicios y almacenamiento de estado.
- El directorio ```components``` contiene los componentes de la interfaz de usuario, divididos en subdirectorios por funcionalidad. Algunos de los componentes principales incluyen:
    - ```Layout```: Este componente es el contenedor principal de la interfaz de usuario y contiene los componentes ```Header```, ```Footer``` y ```Main```.
    - ```Header```: Este componente contiene el carrito de compras.
    - ```Footer```: Este componente contiene la sección inferior de la página, que incluye información de contacto y enlaces a las redes sociales.
    - ```Main```: Este componente contiene el contenido principal de la página, como la lista de productos.
    - ```ListProduct```: Este componente muestra una lista de productos y permite a los usuarios agregar productos al carrito.
    - ```ProductCard```: Este componente muestra los detalles de un producto individual y permite a los usuarios agregar productos al carrito.
    - ```ProductCart```: Este componente muestra el carrito de compras y permite a los usuarios adicionar mas cantidad, eliminar producto, visualizar csubtotal y total de la compra, pagar la compra y realizar una nueva compra.
- El directorio ```api``` contiene los servicios de API, como axiosInstance.ts.
- El directorio ```services``` contiene los servicios de la aplicación, como productsServices.ts.
- El directorio ```stores``` contiene el almacenamiento de estado de la aplicación, como useCartStore.ts.

En resumen, la aplicación Mini-Ecommerce es una aplicación web de e-commerce minimalista construida con React, TypeScript, Vite y Zustand. La aplicación utiliza componentes de interfaz de usuario, servicios de API y almacenamiento de estado para permitir a los usuarios ver y agregar productos al carrito.
