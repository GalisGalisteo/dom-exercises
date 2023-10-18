/**
 * Completa cada ejercicio. Solo necesitas una línea de código JavaScript para cada ejercicio.
 *
 *  * REsultado deseado: https://oscarm.tinytake.com/msc/ODgxNzI5N18yMjI0ODE2OQ
 *
 **/

/**
 * Cambia el título de la página a rojo usando un estilo en línea
 */

document.querySelector('h1').style.color = 'red';

/**
 * Cambia el tamaño del título de la página a 48px usando un estilo en línea
 */

document.querySelector('h1').style['font-size'] = '48px'

/**
 * Muestra por console.log el texto de la caja 2
 */

const textoCaja2 = document.querySelector('#caja-2').textContent
console.log(textoCaja2)

/**
 * Cambia el color del borde del párrafo p.intro a verde usando un estilo en línea
 */

document.querySelector('p.intro').style["border-color"] = 'green'

/**
 * Elimina la clase "estilo-3" de la última caja.
 * Ayuda: https://www.w3schools.com/howto/howto_js_remove_class.asp
 */

document.getElementById('ultimo').classList.remove('estilo-3')

/**
 * Añade la clase CSS "ocultar" al penúltimo párrafo
 * Ayuda: https://simpledev.io/lesson/add-class-js/
 * 
 * BONUS: Haz el ejercicio sin modificar el ex1.html
 
 */

document.querySelector('p:nth-of-type(6)').classList.add('ocultar')