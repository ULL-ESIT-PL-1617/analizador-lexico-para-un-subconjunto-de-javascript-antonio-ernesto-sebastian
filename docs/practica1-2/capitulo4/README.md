# Capítulo 4: MarkDown


## Introducción

Markdown es un lenguaje de marcado ligero creado por **John Gruber** que trata
de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma
de entrada como de salida, inspirándose en muchas convenciones existentes para
marcar mensajes de correo electrónico usando texto plano.

Markdown fue implementado originariamente en Perl por Gruber, pero desde
entonces se ha traducido a multitud de lenguajes de programación, incluyendo
PHP, Python, Ruby, Java y Common Lisp.

## Sintáxis Markdown

* ## Encabezado

      # H1
      ## H2
      ### H3
      #### H4
      ##### H5
      ###### H6


En MarkDown quedaría así:

# H1
## H2
### H3
#### H4
##### H5
###### H6

* ## Listas

   - ### Ordenadas

         1. Perro
         2. Gato
         3. Ratón

   Se vería así:

      1. Perro
      2. Gato
      3. Ratón

   - ### No Ordenadas (\- o \*)

         - Perro
         - Gato
         - Ratón

      Se vería así:

      - Perro
      - Gato
      - Ratón

* ## Énfasis

   Se pueden utilizar tanto \* como \_

 - Negrita
         **negrita**

      **negrita**

 - Cursiva
         *cursiva*
      *cursiva*

 - Negrita y cursiva
         ***negrita y cursiva***
      ***negrita y cursiva***

* ## Links
 Para colocar enlaces utilizamos los corchetes \[ \] para encerrar el texto a
 mostrar de nuestro enlace y los paréntesis \( \) para indicar el enlace.
 También podemos poner links automáticos encerrándolos directamente entre \< \>.
 - Ejemplo:
         [GitHub](http://www.github.com)
         o
         <www.github.com>

      [GitHub](http://www.github.com)

      o

      <http://www.github.com>

* ## Imágenes
Podemos colocar imágenes en nuestro texto de manera muy similar a los links.
La manera mas rápida de verlo es con un ejemplo. Se utilizará el carácter \!.
 - Ejemplo:
         ![Not Found](ruta/de/la/imagen)
      En este caso lo que va entre corchetes es lo que se mostrará si no se
      encuentra la imagen, y entre paréntesis va la ruta de la imagen.
