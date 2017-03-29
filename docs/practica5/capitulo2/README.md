# Analizador Léxico Top-Down-Parser.

## Introducción

Un compilador se compone de **análisis** y **síntesis**. Dentro del análisis podemos distinguir tres tipos:
   - El **análisis léxico**: Descompone y lee carácter por carácter la información creando componentes léxicos. Luego se envía al análisis sintáctico.
   - El **análisis sintáctico**: Este comprueba los componentes léxicos que fueron enviados por el análisis léxico, lo interpreta y genera un árbol sintáctico, para ser enviado al análisis semántico.
   - El **análisis semántico**: Comprueba la validez semántica de las sentencias aceptadas en la fase anterior.

En este capítulo solo nos centraremos en el análisis léxico, concretamente en la forma **top-down-parser**.

## Analizador Top-Down-Parser

Esta forma de analizar empieza con un símbolo inicial e intenta transformarlo en la entrada. Esto se consigue dividiendo la entrada progresivamente en partes mas pequeñas.
