# Proyecto final curso React JS de Coderhouse

Este proyecto es una aplicación web construida con React JS, utilizando Material UI como librería de componentes y Firebase como base de datos. Además, se utiliza Vite como herramienta de desarrollo.
## Instalación

1 - Clona el repositorio en tu computadora.

```
git clone https://github.com/facundohernandez01/proyecto-final.git
```
2 - Instala las dependencias necesarias.
```bash
npm install

```
3- Crea un archivo llamado .env en la raíz del proyecto y agrega las credenciales de Firebase.
```
REACT_APP_API_KEY=YOUR_API_KEY
REACT_APP_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_DATABASE_URL=YOUR_DATABASE_URL
REACT_APP_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_APP_ID=YOUR_APP_ID
```
4 - Inicia el proyecto.
```
npm run dev

```


## Caracteristicas 
Se aplican métodos aprendidos en la cursada:

React-router-dom: 
Para filtrar el menú de categorías y los items.
categorias/nombrecat
producto/idproducto de firebase
Además se implemento una página 404 personalizada.
Se tuvo que implementar el archivo vercel.json para que funcione el route path="*" en el deploy de Vercel.
Para el cart y el checkout se optó usar modales en lugar de router-dom (componente Dialog de MUI).

Context:
El carrito se guarda en un contexto, donde se implementa la lógica para guardar el carrito, agregar items, verificar si existe o no un item, contar cantidades, guardar en localStorage y vaciar el carrito. Además de obtener los items desde Firebase.

## Requisitos extra

Las categorías son dinámicas, provienen desde Firebase. Si bien no se creó una colección de categorías, se obtienen desde la misma colección de productos, obteniendo la prop categoría, lo que permite que el menú se alimente automáticamente

Se usó localStorage para guardar el estado del carrito.


## Hooks utilizados: 
De React: useState, useEffect, useContext

De React Router Dom: useParams, useLocation, useNavigate


Deploy en Vercel  👉
[Demo](https://proyectofinal-coder.vercel.app/)
