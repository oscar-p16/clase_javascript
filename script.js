alert('soy javascript');

//comentario de linea
/*comentario
mas de una linea*/

//sentencias
//alert('hola'); alert('mundo');

//variables
let mensaje;
mensaje='hola'
alert(mensaje)

mensaje= 'hola mundo 2'
alert(mensaje)

let a=6;
let b=5;
let suma= a+b;
console.log('el resultado de la suma es:',suma);

//constante
const PI= 3.141624;
const COLOR_ROJO='#FFFF';
pi_dos=PI;
pi_dos=7;
console.log(pi_dos);
console.log(PI);

//tipos de datos
let mensaje_tres= 'hola';
mensaje_tres= 1234; 

//numero
let n = 123;
n= 12.456;

//infinity
console.log(1/0);
console.log(Infinity);

//NaN error de calculo
console.log('no es un numero'/2);

//NaN es pegajoso
console.log('no es un numero'/2 + 5);

//bigint valores mayores y menores de +/-(2^53-1) 
let numero_grande= 12345667889474747477347373473473734943949;
console.log(numero_grande)

//tipo String
let t = b;
let texto = "hola";
let texto_dos = 'hola';
let texto_tres = ``; // backticks funcionalidad extendida
let nomb= 'oscar';
console.log('hola',nomb);
console.log('hola', nomb);
console.log("hola ${nomb}");
console.log('hola ${nomb}');
console.log(`hola ${nomb}`);

//tipo booleano
//true y false
let verdadero = true;
let falso = false;

let mayor = 4 > 1; //true

//tipo de dato null
//es un tipo propio que solo contiene null
let edad = null;
console.log(edad);
//no es un objeto no existente
//es solo un valor especial que representa nada vacio.

//valor undefined
//valor especial que no pertenece a ningun tipo de dato anterior.
//significado valor no asignado
let edad_dos;
console.log(edad_dos);

//el operador typeof o funcion typeoj(X), decuelve el tipo de dato
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof true);
console.log(typeof 10n);
console.log(typeof 'hola');

console.log(typeof(alert));
console.log(typeof(null));




