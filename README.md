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

Prepara una landing page con Bootstrap. Su nombre será ~/dat/practica02/landing.html y todos los ficheros que necesite estarán dentro de ~/dat/practica02/. Organiza los ficheros en subdirectorios como te parezca conveniente.\
Puede ser sobre un organismo o negocio real o inventado, una página en la que te ofrezcas como freelance o como empleado... cualquie cosa similar, tienes libertad.\
La página tiene que ser razonablemente realista, puedes poner algún lorem ipsun en los párrafos pero la organización y los títulos tienen que tener sentido. Puedes reutilizar apartados anteriores de esta práctica.\
Puedes inspirarte en alguna plantilla gratuita para Bootstrap. Encontrarás muchas en https://startbootstrap.com, aunque desde cualquier buscador podrás encontrar páginas similares usando las palabras clave free bootstrap templates o free bootstrap themes.\
Estas plantillas normalmente usan características de Bootstrap un poco más avanzadas que las que hemos visto en clase, aquí esperamos que tu ejercicio sea más sencillo.\
Te será útil algún stock de imágenes gratuitas. Por ejemplo https://www.pexels.com. aunque desde cualquier buscador podrás encontrar páginas similares usando las palabras clave free photo stock\
PRACTICA OPTATIVA: Si lo deseas puedes usar como base alguna plantilla de las indicadas anteriormente. Ten en cuenta que tendrás que documentarte sobre aspectos de Bootstrap fuera del ámbito de la asignatura. Por otro lado, el código de estas plantillas es de calidad muy variable, algunas son fáciles de personalizar, otras no tanto.

