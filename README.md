# Ejercicio de HTTP Server en Node.js
## del curso de Node.js de CourseIt.io

### Consigna de la actividad:

Queremos crear un servidor HTTP en NodeJS con las siguientes rutas.

### [GET] /ping
Queremos que devuelva un string con el valor `pong`

### [GET] /api/users 
Tiene que devolver un array de usuarios hardcodeado en nuestro proyecto

### [GET] /api/users/:id
La idea es filtrar de nuestro array de usuario el ID que recibamos en el ultimo parametro. Este punto viene con un poco de trampa y es necesario explorar un poco el objeto `req` para poder resolverlo

## Para correrlo
Clonar el repositorio y dentro de la carpeta correr el comando "node src/index.js"