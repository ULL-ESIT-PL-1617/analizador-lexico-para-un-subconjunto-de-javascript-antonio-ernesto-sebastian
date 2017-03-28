# Basic Routing

## Introducción

Express.js es un framework extensible de manejo de servidores HTTP, el cual provee plugins de alto rendimiento conocidos como middleware.

## Hello World!

Para empezar veremos el típico ejemplo de "Hola Mundo" para familiarizarnos con expressJS.

```javascript
   var express = require('express')
   var app = express()

   app.get('/', function (req, res) {
     res.send('Hello World!')
   })

   app.listen(3000, function () {
     console.log('Example app listening on port 3000!')
   })

```
Este código lo guardamos en helloworld.js y lo ejecutamos:

      node hellowworld.js

Al ejecutar, haremos de servidor para la aplicación que hemos creado, la cual simplemente imprime por pantalla **"Hello World!"** al acceder a la dirección **'localhost:3000'**

## Routing

El routing hace referencia a como una aplicación responde a una petición de un cliente.

La estructura de una ruta sigue la siguiente forma
```javascript
   app.METHOD(PATH, HANDLER)
```

Donde:
   * **app** es una instancia de express.
   * **METHOD** es un método de petición de http.
   * **PATH** es la ruta en el servidor.
   * **HANDLER** es la función que se ejecuta cuando la ruta es alcanzada.

   Responde **"Hello Wordl!"** cuando se alcanza la homepage:
```javascript
   app.get('/', function (req, res) {
      res.send('Hello World!')
   })
```
Responde a una petición de **POST** cuando se alcanza la homepage:
```javascript
   app.post('/', function (req, res) {
      res.send('Got a POST request')
   })
```
Responde a una petición de **PUT** cuando la ruta /user es alcanzada:
```javascript
   app.put('/user', function (req, res) {
      res.send('Got a PUT request at /user')
   })
```
Respone a una petición de **DELETE** cuando la ruta /user es alcanzada:
```javascript
   app.delete('/user', function (req, res) {
      res.send('Got a DELETE request at /user')
   })
```
