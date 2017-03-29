# Expresiones Regulares

## Definicion de expresión regular

Las expresiones regulares son cadenas de caracteres que forman un
patrón. La utilización de patrones nos permite hacer búsquedas y
filtrados más extensivos a la hora de manipular la información en
nuestros programas.

La sintaxis aplicada en las expresiones regulares, en el caso del
lenguaje JavaScript, es:

        /pattern/modifiers;
    
La sección comprendida entre barras inclinadas, __pattern__, es el
patrón que se desea utilizar. La sección posterior, __modifiers__, es
un conjunto de modificadores para indicar un comportamiento en el
patrón.

|modificador|Descripción|
|:---:|:---|
|i| Marca el patrón como insensible a mayúsculas |
|g| Marca el patrón para encontrar todas las coincidencias dentro de una cadena, no solo la primera. |
|m| Marca el patrón para analizar en múltiples líneas|

### Patrones 

Las expresiones regulares aplicadas en JavaScript siguen una sintaxis
definida por cochetes, paréntesis, barras inclinadas y otros símbolos.

| Elemento | Descripción  |
|:---:|:---|
| [ ] | Corchetes. Contienen un conjunto de caracteres identificables para un elemento del patrón  |
| ( ) | Paréntesis. Permiten organizar y separar diferentes fragmentos del patrón  |

__Dentro de los paréntesis puede indicarse un conjunto de caracteres
usando el guión__ ([0-9] indica un elemento que coincida con un 
número), además de poder utilizarse el operador booleano __|__ para
indicar coincidencias alternativas.

| Metacaracter | Descripción |
|:---:|:---|
| __.__ | Encuentra un caracter que no sea un salto de línea o un final de línea |
| \w | Encuentra un caracter que pertenezca a los posibles dentro de una palabra |
| \W | Encuentra un caracter que no pertenezca a los posibles dentro de una palabra |
| \d | Encuentra un dígito  |
| \D | Encuentra un caracter que no sea dígito |
| \s | Encuentra un espacio  |
| \S | Encuentra un caracter que no sea espacio |
| \b | Encuentra el final o principio de una palabra |
| \B | Encuentra un caracter que no sea el final o principio de una palabra |
| \0 | Encuentra un caracter nulo |
| \n | Encuentra un salto de línea |
| \f | Encuentra un caracter que pertenezca a una entrada de formulario |
| \r | Encuentra un retorno de carro |
| \t | Encuentra un tabulador |
| \v | Encuentra un tabulador vertical |
| \xxx | Encuentra un caracter especificado por su valor octal xxx|
| \xdd | Encuentra un caracter especificado por su valor hexadecimal dd |
| \uXXXX  | Encuentra un carácter Unicode especificado por su número hexadecimal |

Además de estos elementos, podemos servirnos de símbolos para extender
su uso. Estos símbolos son:

| Símbolo | Descripción |
|:---:|:---|
| n+ | Marca como coincidencia la cadena que contenga uno o más caracteres n |
| n* | Marca como coincidencia la cadena que contenga cero o más caracteres n |
| n? | Marca como coincidencia la cadena que contenga cero o un caracteres n |
| n{X} | Marca como coincidencia la cadena que contenga X elementos n  |
| n{X,Y} | Marca como coincidencia la cadena que contenga de X a Y elementos n |
| n{X,} | Marca como coincidencia la cadena que contenga al menos X elementos n |
| n$ | Marca como coincidencia la cadena que acabe con el elemento n |
| ^n | Marca como coincidencia la cadena con el elemento n al principio |
| ?=n | Marca como coincidencia cualquier cadena seguida de una cadena n |
| ?!n | Marca como coincidencia cualquier cadena que no esté seguida de una cadena n |

## Expresiones Regulares en JavaScript

### Expresiones regulares utilizando Strings

#### Método search()

El método __search()__ permite buscar un patrón dentro de una cadena
de caracteres (un String). Devuelve el índice de la primera
coincidencia.

    var str = "Cadena de prueba";
    var indice = str.search("ena");
    
En este ejemplo, el valor de indice sería __3__.

Prueba el método en [W3Schools - search()][searchMethod]

#### Método replace()

El método __replace()__ permite reemplazar una sección de la cadena
que coincide con el patrón introducido.

    var str = "Cadena de prueba";
    var str2 = str.replace(ena, "enas");
    
En este ejemplo, la cadena str2 tiene por valor la cadena __"Cadenas de prueba"__.

Prueba el método en [W3Schools - replace()][replaceMethod]

### Expresiones regulares utilizando objetos RegExp

Las expresiones regulares pueden ser tratadas como objetos en JavaScript para encontrar coincidencias en texto.
El constructor para este objeto puede escribirse de forma literal, una expresión regular escrita, o puede utilizarse
un método constructor tal que __new RegExp(pattern [, flags]);__.

Si la expresión se mantendrá constante es recomendable utilizar la construcción literal de la expresión, ya que de esta
forma se compila la expresión cuando es evaluada. Esto permite, por ejemplo, que la expresión no sea recompilada en cada
iteración de un bucle en el que sea utilizada. Por otro lado, si no se conoce la expresión regular a usar debido a que
es proveída por otra fuente o si la expresión se verá modificada con el tiempo, lo recomendable es que se utilice el constructor
de la expresión.

__Se ha de tener en  cuenta que en el caso del método constructor, la cadena de caracteres pasada por parámetros deberá tener 
las barras inclinadas por duplicado, debido a que no son tratados como caracteres especiales.__ 

Por ejemplo:

    var re = /\w+/;
    var re = new RegExp("\\w+");
    
Estas inicializaciones son equivalentes; sin embargo, se puede observar que para el caso del constructor del objeto, la cadena
no tiene los delimitadores de expresión regular a los lados y la barra lateral para indicar el metacaracter _w_ está duplicada
para que sea tenida en cuenta.

#### Método test()

El método __test()__ permite comprobar si hay coincidencias dentro de una cadena de caracteres. Devuelve un valor booleano _verdadero_
si la coincidencia es conseguida, _falso_ en el caso contrario.

    var str = "The best things in life are free";
    var patt = new RegExp("e");
    var res = patt.test(str);

La variable res tendría como valor __true__ en este caso.

Prueba el método en [W3Schools - test()][testMethod]

#### Método exec()

El método __exec()__ permite encontrar una coincidencia dentro de una cadena de caracteres y devolverla como resultado de su uso.
Para obtener un valor booleano _verdadero_ en caso de encontrar la coincidencia, o _falso_ en caso contrario, bastaría con ejecutar
_RegExp_.prototype.test() o _String_.prototype.search(). 

    var str = "The best things in life are free";
    var patt = new RegExp("e");
    var res = patt.exec(str);

La variable res tendría como valor _e_ en este caso.

Prueba el método en [W3Schools - exec()][execMethod]

#### Aspectos de RegExp Objects a tener en cuenta

- __lastIndex__

    El objeto RegExp permite mediante este parámetro conocer el índice a partir del que acaba la primera coincidencia obtenida en
una cadena de caracteres.

- __source__
    
    El objeto RegExp permite conocer la cadena que conforma el patrón de caracteres.

## XRegExp - Expresiones Regulares extendidas

XRegExp permite el uso de expresiones regulares más sofisticadas en JavaScript, más allá de las expresiones regulares soportadas
por los navegadores comunes de forma nativa. Entre sus rasgos más característicos, podemos resaltar su capacidad para evitar
inconsistencias entre navegadores respecto a la sintaxis y el comportamiento, y el haber añadido otros modificadores de patrones.



[replaceMethod]: https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_search
[searchMethod]: https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_replace_regexp

[testMethod]: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_test2
[execMethod]: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_exec2