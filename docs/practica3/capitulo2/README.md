# Routing Guide

## Introducción

En este capítulo veremos como responde una aplicación a una petición del cliente.

## Métodos de routing

Los métodos de routing que usa express son derivados de los que usa HTTP y son:
```
get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, and connect
```
```javascript
   // GET method route
   app.get('/', function (req, res) {
      res.send('GET request to the homepage')
   })

   // POST method route
   app.post('/', function (req, res) {
      res.send('POST request to the homepage')
   })
```

## Declaración de rutas.
Podemos utilizar expresiones regulares para definir rutas, por ejemplo:
```javascript
   app.get(/.*fly$/, function (req, res) {
      res.send('Coincide con: /.*fly$/')
   })
```
Se imprimira en pantalla lo que esta dentro de **res.send()** al acceder a una ruta cuyo final tenga la cadena 'fly'.

## Parametros en rutas

      Route path: /users/:userId/books/:bookId
      Request URL: http://localhost:3000/users/34/books/8989
      req.params: { "userId": "34", "bookId": "8989" }

Vemos como podemos acceder a los parámetros de la ruta especificada en **Route patch**:
   * **:userId**
   * **:bookId**

En este ejemplo vemos el resultado final:
```javascript
   app.get('/users/:userId/books/:bookId', function (req, res) {
      res.send(req.params)
   })
```
Se mostrarían los valores que pusieramos en la ruta, por ejemplo:


      /users/:userId/books/:bookId
      /user/40/books/3453

Muestra los valores de esta manera:

      { "userId": "40", "bookId": "3453" }

## Rout Handler

Poco hay que decir de este apartado, pues son las funciones que se ejecutan al alcanzar la ruta. Ejemplo:
```javascript
   app.get('/example/a', function (req, res) {
      res.send('Hello from A!')
   })
```
Se pueden llamar a mas de una función "callback" de la siguiente manera ( apoyandonos en **next()** ):
```javascript
   app.get('/example/b', function (req, res, next) {
      console.log('the response will be sent by the next  function ...')
      next()
   }, function (req, res) {
      res.send('Hello from B!')
   })
```

## Métodos de response

|Método|Descripción|
|:-----|:----------|
|res.download()|Devuelve un archivo para ser descargado|
|res.end()|Finaliza el proceso de respuesta|
|res.json()|Devuelve una respuesta en forma de JSON|
|res.jsonp()|Devuelve una respuesta JSON que soporta JSONP|
|res.redirect()|Redirecciona la solicitud|
|res.render()|Renderiza una plantilla de página|
|res.send()|Devuelve una respuesta que puede ser de varios tipos|
|res.sendFile()|Envía un archivo en forma de flujo octet|
|res.sendStatus()|Formatea el estado de la respuesta y lo envía en el cuerpo de la misma|

## app.Route ()

Este método nos permite encadena las funciones anteriores especificando la ruta una única vez
```javascript
app.route('/book')
   .get(function (req, res) {
      res.send('Get a random book')
   })
   .post(function (req, res) {
      res.send('Add a book')
   })
   .put(function (req, res) {
      res.send('Update the book')
   })
 ```
