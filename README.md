# Desarrollo de Aplicaciones Telemáticas
Prácticas correspondientes a la asignatura de DAT

## Práctica 01
### Práctica 1.1. Elementos HTML

Prepara un fichero HTML llamado ~/practica01/ej01.html que contenga un ejemplo de cada uno de los elementos HTML vistos en clase:

Comentario (con tu nombre, apellidos y login)\
p, br, em, pre\
h1, h2 (y algún otro h si quieres)\
Enlaces a otra página\
Enlace a un apartado de la página actual\
div, span\
ol, ul, dl\
img\
img dentro de un enlace

Guarda las imágenes en el directorio /practica01/images\
Puedes usar el editor que prefieras, pero debería ser uno con soporte para HTML. Por ejemplo atom.\
El contenido no es relevante, usa cualquier texto de prueba.\
Ignora todo aquello que es propio de HTML 4 y obsoleto en HTML 5. Recuerda que salvo indicación en contrario, todo el HTML que manejamos en la asignatura es HTML 5.\
Comprueba con el W3C validator que tu código no provoca errores. Podrá dar avisos relativos al uso de input color o input date, pero verifica que no da ningún otro aviso.\

### Práctica 1.2. Formularios

En este ejercicio practicarás el uso de formularios HTML.\
Prepara dos ficheros HTML llamados /practica01/alta.html y /practica01/operacion.html\
Contendrán formularios para crear y operar una aplicación web. Puede ser un banco, una compañía de seguros (hogar, automóvil...), una compañía telefónica, una agencia de transporte, de paquetería, viajes, empleo, alquiler de vehículos, etc. Ambas páginas se corresponderán al mismo negocio.\
Haz que los campos sean razonablemente realistas, aunque no te preocupes por el formato. Procura usar el mayor tipo de elementos de formulario posibles.\
Sugerencia: entre en alguna página web de una empresa real y tómalo como referencia.\
Usa siempre el elemento *<label>*.\
Por ejemplo, en el caso del banco la página de operación puede ser para realizar una transferencia bancaria, revisar recibos, revisar cargos en cuenta o en tarjeta de crédito. Si es una compañía de seguros, la operación puede ser dar un parte. En una agencia de transporte, encargar una recogida de un paquete para un envío, etc.\
Si lo deseas, puedes añadir más de una página de operaciones, con los nombres\
*/practica01/operacion02.html, /practica01/operacion03.html, etc*.\
Comprueba con el W3C validator que tu código no provoca errores. Podrá dar avisos relativos al uso de input color o input date, pero verifica que no da ningún otro aviso.

### Práctica 1.3. W3C Validator

Analiza con el W3C Markup Validation Service el código de 3 sitios web. Han de pertenecer a organismos o empresas de cierta relevancia.\
En el fichero /practica01.txt escribe un pequeño informe con los resultados, explicando en qué consisten y cómo se arreglarían. Si son muchos no es necesario que los describas todos, es suficiente con 6 errores (entre las tres páginas)

### Práctica 1.4. CV

Escribe tu curriculum vitae en HTML. Usa solo los elementos vistos hasta ahora. No te preocupes por el formato gráfico, más adelante lo especificarás con CSS.\
Llámalo /practica01/LOGIN_cv01.html, donde LOGIN es tu login en el laboratorio. Esto es, jperez_cv01.html, agarcia_cv01.html, etc.\
Comprueba con el W3C validator que tu código no provoca avisos ni errores.

## Práctica 02

### Práctica 2.1. Análisis de selectores

Obseva los  ejemplos de código html con css y explica por qué cada línea tiene el formato que tiente.

### Práctica 2.2. Análisis de selectores

Al igual que en el apartado anterior, analiza el ejemplo 4

### Práctica 2.3. Análisis de selectores

Analiza el ejemplo 5.

### Práctica 2.4. Análisis de selectores

Analiza el ejemplo 6.

### Práctica 2.5. Uso de selectores

En esta práctica ejercitarás el uso de selectores CSS.\
Prepara un fichero HTML llamado /practica02/ej251.html y define en él al menos 2 reglas CSS para probar los distintos tipos de selector descendente y de selectores de clase que vimos en clase (son los que aparecen en las transparencias).\
En el ejemplo ha de haber alguna regla que se aplique y alguna que no.
Prepara un fichero HTML llamado /practica02/ej252.html y define en él al menos 2 reglas CSS para probar los distintos tipos de selector de identificador que vimos en clase.
Prepara un fichero HTML llamado ~/dat/practica02/ej253.html y define en él al menos 2 reglas CSS para probar los selectores de concatenación de clases, adyacente e hijo directo.
Prepara un fichero HTML llamado ~/dat/practica02/ej254.html y define en él al menos 2 reglas CSS para probar el selector de atributos.

Para todos los ejemplos anteriores:\
Explica brevemente en el fichero ~/dat/practica02.txt cada uno de los casos.\
Comprueba con el W3C validator que tu código no provoca avisos ni errores.

### Práctica 2.6. Atributos del texto

Prepara un fichero HTML llamado /practica02/ej260.html que contenga al menos 6 párrafos de prueba, donde el texto tenga distintos atributos relacionados con alineación, subrayado, tamaño y estilo.

### Práctica 2.7. Atributos de los bordes

Prepara un fichero HTML llamadon/practica02/ej270.html que contenga al menos 4 párrafos de prueba, donde los bordes de cada caja tengan distintos atributos relacionados con ancho, estilo y color. Añade imagen de fondo al menos a un elemento.

### Práctica 2.8. CV

En este apartado usarás CSS en el curriculum en HTML que escribiste en la práctica 1.\
Copia el fichero /practica01/LOGIN_cv01.html en /practica02/LOGIN_cv02.html.\
Edita la LOGIN_cv02.html usando los elementos CSS que conoces, dale color a tu CV y mejora su aspecto. Procura seguir el manual de identidad visual corporativa de la URJC.\
En cualquier caso, ten en cuenta que estas son unas prácticas de ingeniería, no de diseño gráfico. Es suficiente con que uses los elementos básicos y le des al documento algo de formato.

### Práctica 2.9. Horario

En este ejercicio empezarás a usar la rejilla de Bootstrap.\
El nombre del fichero será /practica02/horario.html
En su interior codifica:\
En un contenedor de tipo fluid, tu horario del primer cuatrimestre de este curso.\
En un contenedor ordinario (no fluid), tu horario del segundo cuatrimestre de este curso.
Emplea la rejilla de Bootstrap, con el tipo de cuadricula que creas más oportuno.\
Usando CSS, añade color en tu horario. Por ejemplo, que las celdas de la misma asignatura tengan el mismo color de fondo, o alguna otra organización de tipo lógico que te parezca adecuada.\
El código no debe generar ningún error ni warning, ni en W3C validator ni en bootlint (excepto el relativo a X-UA-Compatible)

### Práctica 2.10. Rejilla de Bootstrap

Escribe un fichero ~/dat/practica02/grid.html que, basado en Bootstrap, tenga la siguiente estructura:

xxxxxxxx xxxx
xxxx xxxx xxxx
xxxx xxxx xxxx
xxxx xxxx xxxx
xxx xxx xxx xxx
  
Esto es,
Primera fila: una columna de 8 casillas (con texto H1) y otra de 4\
A continuación, 3 filas con 3 columna iguales\
Finalmente, una fila de 4 columnas iguales

El contenido será texto de prueba. En las filas de el medio deberá haber al menos 4 imágenes (en total). Usa el tipo de contenedor y el tipo de cuadrícula que creas más oportuno.\
El código no debe generar ningún error ni warning, ni en W3C validator ni en bootlint (excepto el relativo a X-UA-Compatible)

### Práctica 2.11. Paneles, botones, navs

En este ejercicio harás una prueba sencilla con navs, paneles y botones.\
Escribe tres ficheros HTML llamados\
/practica02/nav1.html\
/practica02/nav2.html\
/practica02/nav3.html
Cada uno de ellos debe tener un panel, texto de prueba y al menos un par de botones. Los botones no harán ninguna función. Desde cada una de estas páginas se deberá poder navegar hasta las otras dos, usando un nav (del tipo que prefieras).\
El código no debe generar ningún error ni warning, ni en W3C validator ni en bootlint (excepto el relativo a X-UA-Compatible)

### Práctica 2.12. Dropdown

Ahora usarás un menú desplegable de Bootstrap.\
Crea un fichero /practica02/nav10.html que sea, inicialmente, una copia de /practica02/nav1.html.\
Haz lo mismo con nav20.html y nav30.html a partir de nav2.html y nav3.html, respectivamente.\
Modifica nav10.html, nav20.html y nav30.html para que naveguen entre ellos.\
Haz lo necesario para que cuando el usuario se encuentre en nav30.html, en el nav aparezca un menú desplegable con tres opciones, apuntando a tus prácticas 2.8, 2.9 y 2.10 respectivamente.

### Práctica 2.13. Formularios Bootstrap

Copia en /practica02/ los ficheros de práctica de formularios de la práctica 1 (alta.html, operacion.html y los ficheros optativos operacion02.html y operacion03.html si los tienes)\
Modifícalos para que utilicen Bootstrap.\
El código no debe generar ningún error ni warning en el W3C validator. En bootlint no debe generar ningún error. Tampoco ningún warning, excepto el relativo a X-UA-Compatible, o en su caso, los relativos a los elementos input de HTML 5 que no están soportados en todos los navegadores (color, date y datetime-local)

### Práctica 2.14. Carousel

Prepara un carrusel de Bootstrap en un fichero con nombre /practica02/carousel.html\
Contendrá entre 4 y 6 fotos hechas por tí o donde salgas tú. Pon cualquier cosa que te guste y que no tengas inconveniente en enseñar: comida, viajes, mascotas, personas, aficiones, libros, discos... Pon títulos realistas.\
Revisa el código con el W3C validador y con bootlint, con los mismos criterios que en prácticas anteriores.

### Práctica 2.15. Landing Page

Prepara una landing page con Bootstrap. Su nombre será /practica02/landing.html y todos los ficheros que necesite estarán dentro de /practica02/. Organiza los ficheros en subdirectorios como te parezca conveniente.\
Puede ser sobre un organismo o negocio real o inventado, una página en la que te ofrezcas como freelance o como empleado... cualquie cosa similar, tienes libertad.\
La página tiene que ser razonablemente realista, puedes poner algún lorem ipsun en los párrafos pero la organización y los títulos tienen que tener sentido. Puedes reutilizar apartados anteriores de esta práctica.\
Puedes inspirarte en alguna plantilla gratuita para Bootstrap. Encontrarás muchas en https://startbootstrap.com, aunque desde cualquier buscador podrás encontrar páginas similares usando las palabras clave free bootstrap templates o free bootstrap themes.\
Estas plantillas normalmente usan características de Bootstrap un poco más avanzadas que las que hemos visto en clase, aquí esperamos que tu ejercicio sea más sencillo.\
Te será útil algún stock de imágenes gratuitas. Por ejemplo https://www.pexels.com. aunque desde cualquier buscador podrás encontrar páginas similares usando las palabras clave free photo stock\
PRACTICA OPTATIVA: Si lo deseas puedes usar como base alguna plantilla de las indicadas anteriormente. Ten en cuenta que tendrás que documentarte sobre aspectos de Bootstrap fuera del ámbito de la asignatura. Por otro lado, el código de estas plantillas es de calidad muy variable, algunas son fáciles de personalizar, otras no tanto.

## Práctica 03
### Práctica 3.2. Funciones básicas

Escribe un fichero /practica03/js01.js que contenga:
Una función que reciba una velocidad en metros/segundo y la devuelva en kilómetros/hora.\
Una función que reciba una velocidad en metros/segundo y la devuelva en millas por hora. (Una milla son 1609.344 m)

### Práctica 3.3. Funciones.

Escribe en un fichero /practica03/js02.js un programa JavaScript que tenga una función que reciba dos parámetros:
Una velocidad expresada en metros por segundo. Este parámetro podrá ser tanto un número como una cadena\
Una cadena que podrá tomar los valores m/s, km/h o mph.\
Los valores han de ser exactamente estos y no otros similares. No se admiten variaciones en mayúculas/minúsculas o espacios.

La función devolverá\
Una cadena con la velocidad de entrada, convertida a las unidades expresadas en el segundo argumento.\
Si ha habido algún problema con los parámetros de entrada, la función devolverá una cadena que empezará por Error: (La primera letra en mayúscula), y que a continuación explicará la causa del error: que falten argumentos, que los argumentos sean incorrectos, etc.

### Práctica 3.4. Validación de contraseña

Escribe en un fichero /practica03/js03.js un programa JavaScript que tenga una función que indique si una contraseña tiene la fortaleza requerida\
Recibirá los siguientes parámetros:
La contraseña.\
La longitud total que deberá tener la contraseña para que se considere válida.\
El número mínimo de minúsculas exigidas. (Puede ser 0)\
El número mínimo de mayúsculas. (Puede ser 0)\
El número mínimo de números exigidos. (Puede ser 0)\
El número mínimo de caracteres especiales exigido. (Puede ser 0)\
Una cadena que contendrá todos los caracteres que serán considerados especiales. P.e. ,.-{}[]!"·$%&/()=?¿¡'

Devolverá\
El booleano true si la contraseña tiene la fortaleza exigida\
El booleano false en otro caso

Debe funcionar, al menos, con las letras inglesas y con las españolas (lo que incluye eñes y vocales con tilde)

### Práctica 3.5. Calculadora

Ahora programarás la lógica de negocio de una calculadora en JavaScript, similar al programa xcalc de Linux. (El interfaz de usuario en HTML lo desarrollarás más adelante, en la práctica 4). El fichero se llamará ~/dat/practica03/calculadora.js\
La calculadora podrá sumar, restar, multiplicar o dividir. No aceptará decimales. Para saber cómo debe comportarse, observa xcalc. Ejemplo: la pantalla tiene un máximo de 11 caracteres, el valor inicial de la pantalla es 0, si se pulsan dos operadores seguidos solo se considera el último, etc. Observa que no es necesario un comportamiento más complejo, como el de gnome-calculator.\
Constará de dos funciones principales (además de las funciones adicionales que te parezca conveniente)

1. aceptaTecla(tecla, calculadora)
    *El primer parámetro será una cadena, que deberá ser alguno de estos valores:
        +Un número de 0 a 9
        +La letra c, en minúscula o en mayúscula
        +Los operadores + - * /
        +El símbolo =
        +Si es un valor distinto, será ignorado
    *El segundo parámetro será un objeto que contendrá todas las variables necesarias para el funcionamiento de la calculadora.
    *Devolverá: Una cadena con el valor de la pantalla

2. pruebaCalculadora()
Esta función la usarás para probar la función anterior ahora que todavía no tienes el interfaz de usuario. No tendrá parámetros de entrada ni valor de salida. Su contenido será similar a este:
console.log(acepta_tecla( "1", calculadora))\
console.log(acepta_tecla( "0", calculadora))\
console.log(acepta_tecla( "+", calculadora))\
console.log(acepta_tecla( "2", calculadora))\
console.log(acepta_tecla( "=", calculadora))

Si lo prefieres, puedes programar en inglés (así deberías hacer cualquier trabajo medianamente serio) y llamar a las funciones getKey(tecla, calc) y testCalc().\
Implementa la calculadora como una máquina de estados\
Empieza el diseño por el grafo. Guárdalo en el fichero /practica03/automata.jpg\
Puedes hacerlo a mano y hacerle una foto con el móvil, con tal de que esté claro, sin tachones y sobre papel blanco, sin rayas ni cuadrículas.\
Si quieres hacerlo mejor, con el ordenador, puedes usar la aplicación dia. El profesor se enseñará los fundamentos de su uso.\
Usa una función javascript para cada estado

### Práctica 3.6. Sleep

Muchos lenguajes de programación tienen una función llamada sleep(x), que acepta un número de segundos y que detiene la ejecución del programa duante ese tiempo. O más bien, hace nada durante ese tiempo. El número puede tener decimales, pero si es negativo o no válido, la función mostrará un error en la consola.\
JavaScript no tiene esta función. Prográmala, en el fichero. /practica03/sleep.js
Sugerencia: usa un bucle.

## Practica 04
### Práctica 4.1. Mostrar y ocultar controles

En este ejercicio vas a practicas el mostrar y ocultar controles usando jQuery\
Escribe un fichero /practica04/ocultar.html que contenga:
*Elige una de tus prácticas con HTML, desde la 2.8 hasta la 2.13, ambas inclusive.
*Añádele algún botón, control o panel si lo crees necesario.
*Añade botones (entre uno y tres) para que el usuario pueda mostrar u ocultar distintas partes del interfaz de usuario. Puedes organizarlo por complejidad (p.e. modo simplificado, modo normal, modo avanzado). También puedes organizarlo por funcionalidad, esto es, mostrar u ocultar los controles que se ocupen de tareas que estén relacionadas.

### Práctica 4.2. Escritura y lectura de datos HTML-jQuery

Escribe un fichero /practica04/unidades.html que, basado en jQuery, sea el interfaz de usuario del programa que escribiste en la práctica 3.2.\
La velocidad de entrada se supone que la indicará el servidor, por tanto, será un valor escrito en el HTML, tu programa no podrá modificarlo. Para tus pruebas, cambia este valor a mano.\
Cumpliendo lo anteriormente indicado, tienes libertad para organizar el HTML como prefieras.
### Práctica 4.3. Modificación de un botón

Escribe un fichero /practica04/cambiaBoton.html que, partiendo del ejemplo toggle.html, cambie el texto del botón, para que muestre ver foto u ocultar foto, según corresponda
### Práctica 4.4. Tooltip

Añade al menos 3 tooltips a alguno de los ejercicios de esta práctica.
### Práctica 4.5. Validación de formulario

Escribe un fichero /practica04/validacion.html que, mediante jQuery, use el programa que escribiste en la práctica 3.3.\
El formulario deberá validarse continuamente, sin necesidad de que el usuario envíe la página o mueva el foco del elemento input.\
Añade un campo llamado repite la contraseña (o similar), y valida que las dos contraseñas sean iguales. Como esta comprobación es muy básica, hazla directamente en el HTML, no hace falta llevar la lógica de negocio a un fichero JavaScript.
### Práctica 4.6. Calculadora

Escribe un fichero /practica04/calculadora.html que, basado en jQuery, sea el interfaz de usuario del programa que escribiste en la práctica 3.4.
### Práctica 4.7. Calculadoras

Escribe un fichero /practica04/calculadoras.html que use el programa que escribiste en la práctica 3.4, pero con dos calculadoras en el HTML. (Esto es para verificar que no empleabas ninguna variable global)
### Práctica 4.8. Excepciones

Copia tu práctica /practica03/js02.js en un fichero con el nombre /practica04/js04.js\
Modifícalo para que, en caso problemas con los parámetros de entrada:\
*La función que calcula la velocidad, genere las excepciones que corresponda. Usando objetos.
*La función que llama a esta función, capture la excepciones y muestre un mensaje de error.

### Práctica 4.9. Calculadora basada en clases

Haz una copia de tu práctica /practica03/calculadora.js con el nombre /practica04/ccalculadora.js (ccalculadora, con dos letras c). Modifícalo para emplear programación orientada a objetos basada en clases: define una clase Calculadora, usa objetos que instancien la clase, para tener la misma funcionalidad que en la práctica anterior.


