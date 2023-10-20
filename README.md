![Logo](/src/assets/logo.png)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Color principal | ![#fcc141](https://via.placeholder.com/10/fcc141?text=+) #fcc141 |
| Color secundario | ![#5a050b](https://via.placeholder.com/10/5a050b?text=+) #5a050b |
| Opcional color terciario | ![#c9511d](https://via.placeholder.com/10/c9511d?text=+) #c9511d |



## Instalación

SPA desarrollada con VITE + REACT

```bash
  npm install para las dependencias

  npm run dev para levantar el proyecto en http://localhost:5173/
```
    
### La SPA cuenta con 4 carpetas dentro de SRC

### assets

- logo.png (provisoriamente el logo de Gustito)
- react.svg (sin uso)

### Components

- CardProduct (para renderizar los productos)
- ModalCart (para mostrar/modificar el carrito)
- Navbar (con un botón para volver a home y otro para abrir el modal de carrito)
- ProductDetail (el modal del detalle de cada producto para agregarlo al carrito)


### context

- CartContext (además de tener el estado del carrito, posee los controladores/funciones para solo invocarlos y ejecutarlos en cada componente)


### Pages

- CategoryDetail (es el path "/category/:id" de acuerdo a si elige el usuario empanadas por docena, media docena o unidad).
- Home (es el path "/" donde se renderizan todas las categorías que van a redirigirnos a CategoryDetail).


#### TODOS LOS ARCHIVOS TIENEN CREADO Y LINKEADO SU RESPECTIVO ARCHIVO DE ESTILOS.CSS

#### ALGUNOS COMPONENTES ESTÁN CON CLASES DE BOOTSTRAP PARA DARLE UN POCO DE PADDING, MÁRGENES, ETC.
