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

))))))))))))))> Test, Exec
)))))))))))))))))))))> lastIndex, source

## Expresiones Regulares extendidas

---XRegExp---

[replaceMethod]: https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_search
[searchMethod]: https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_replace_regexp