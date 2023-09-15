/*

Retomando las APIs...

    - APIs internas (API DOM, localStorage, Drag and Drop): Son todas aquellas APIs que vienen por default en el navegador.

    - APIs externas (Google Maps, FakeStore API, API PayPal, etc.): Son todas aqullas que tenemos que utilizar de proveedores externos.


    Ejemplo de la licudora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.


    Ventajas de utilizar APIs

        - Reestructurar y organizar loos sistemas de forma que sean mas sencillos de usar
        - Permiten que los sistemas sean mas robustos
        - Reducen los costos de mantenimiento
        - Permiten que los sistemas sean escalables
*/

/*

sincronica


Por ejemplo, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha). es dicir, utilizamos JS de una forma (si hay un error, lo que esta despues de ese error no se ejecuta).

*/
//Ejemplo de una operacion sincronica
console.log("Inicia mi operacion sincrona");
function dosSincronica(){
  console.log("Dos");
}

function unoSincronico(){
   console.log("Uno");
   dosSincronica();
    console.log("Tres");
}
unoSincronico();
console.log("Finaliza mi operacion sincrona");

//Los casos deonde me conviene tener operaciones sincronas, son (Lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecucion de funciones "normales").



/*

Asincronia es la capacidad que tiene java script para poder ejecutar funciones ciertos bloques de codigo sin tener que termine su ejecucion, para ejecutar otras lineas de codigo. (dejer la carne en el sador mientras preparo otras cosas en el ejemplo de la carne asada).
*/



//Ejemplo de JS asincrono

console.log("Inicia mi operacion asincronica");
function dosAsync(){
    console.log("Uno");
    setTimeout(function(){ //setTime para ejecutar esta funcion despues de 3 segundos
        console.log("Dos");
    }, 3000);
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Finaliza mi operacion asincronica");


/*

Mecanismos para manejar la asincronia

Para controlar la asincronia en JS, podemos usar alguno de estos mecanismo:

-callback: lo forma mas clasica de manejar la asincronia, Se conoce como (llamada de vuelta), basicamente es pasar una funcion como parametro de otra funcion, y se ejecuntan una vez que se cumpla la condicion esperada.

//Metodo .map de los arrays


-promesas: soon objetos que representan un valor al momento de conectar con el servidor, Como su nombre lo indica una promesa es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple, La vantaja que tiene las promesas, es que no se inidas, en unsa sola funcion podemos manejar ambas situaciones.

Las promesas tiene 3 estados posibles:

-pending: estado inicial, cuando se crea la promesa. Aqui aun no hay resultados.
-fullfiled: cuando la operacion asincrona se resuelve con exito(resolve)
-rejected: cuando la operacion asincroona falla (reject)






-async/await

*/

//Function especial para consumir APIs y manejar promesas
/*

//instruccion de la conexion a mi servidor
fetch("https://fakestoreapi.com/products/1")

//Dos escenarios (obntengo respuesta o no obtengo respuesta)
.then(datos => { //caundo la promesa se resuelve, ejecuto esta funcion
    console.log(datos);
    return datos.json(); //convertir la respuesta
   

})

.catch(error =>{
    console.log("Error, no encontramos el producto");
})


/*
Sintaxis el fetch (con promesas)

fetch (url a consumir) /
.then (response=> response.text()) //manejo la respues
.then(datos=> console.log(datos)) //manejo el dato

.catch(error => console,log(error));

*/
const conexion = fetch("https://fakestoreapi.com/products/1")
//asigno el fetch a una variable...
console.log("Este es mi objeto Promesas: ", conexion);

conexion

//Usar el metodo then para manejar la respuesta (lo relleno con la respuesta)
.then(function (resultado){
console.log("Dentro de esta funcion que maneja la respuesta, encontraras; ", resultado);
return resultado.json();
})
//uso el metodo then para manejar el producto (lo rellenocon la inf del producto)
.then(function(producto){
    console.log("Informacion del producto: ", producto);
})


//uso el metodo catch para manejar el error (lo rellego con el errorpara que la caja no la regrese vacia)

.catch(function(error){
    console.log("Error, error");
    
})









