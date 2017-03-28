# Using Middleware

## Introducción

En este capítulo veremos como responde una aplicación a una petición del cliente, es decir, cuando el cliente accede a una ruta dada. Y como actúan los **middleware** de intermediarios entre la petición y y la ruta.

Una aplicación de express is básicamente una serie de llamadas a funciones **middleware**. Estas funciones tienen acceso al "request object" (**req**), al "responsive object" (**res**) y a la función **next()**. Esta última es importante y se ha de llamar siempre que se quiere ceder el control al siguiente middleware ya que si no se hace, la petición quedaría sin atender.

## Funcionamiento

### Ejemplo básico:

```javascript
   var app = express();

   app.get('/', function(req, res) {
      res.send('Hola mundo!');
   });

   app.get('/help', function(req, res) {
      res.send('Ayuda!');
   });
```
Este es un sencillo ejemplo de funcionamiento en el que al acceder a la ruta **"/"** se muestra un "Hola mundo!" y al acceder a la ruta **"/help"** se muestra un "Ayuda!".

### Añadiendo un middleware:

```javascript
   var express = require('express')
   var app = express()

   app.use('/static/index', express.static('gh-pages'))

   app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
   })
```

Aquí hemos añadido un middleware que se encuentra entra la peticion y el acceso a la ruta y lo que hace es acceder a la carpeta "gh-pages" en la ruta especificada "/static/index".

## REQ, RES y next

El request req es la petición y response res es la respuesta que se le va a devolver.

La función next es la que hace saber que la etapa ha terminado y deja paso a la siguiente. Es muy importante llamarla para no quedarse colgado.
