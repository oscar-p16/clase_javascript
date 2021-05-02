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

//interacciones: alert, prompt, confirm
//alert
alert('hola mundo');
//prompt
 let nombre_capturado =prompt('titulo del mensaje','hola');
alert(nombre_capturado);
//confirm
let casa= confirm('te gusta el pudin?');
console.log(casa);//aparece true o false depende que opcion escojas.

//convercion de tipos
//hay dos tipos de converciones 
//convertir a Sstring
let valor = true;
console.log (typeof valor);
valor = String(valor);
console.log(valor);
console.log(typeof valor);

//convertir a nuemro
let cadena='123';
let num_cad= Number(cadena);//123
console.log(Number('hola'));//NaN

/*
undefined--> NaN
mull-->0
true-->1
false-->0
String ''-->0
String 'hola' -->NaN
*/

//convertir a booleano
console.log(Boolean('hola'));

/*
undefined--> false
mull-->false
String ''--> false
NaN-->false
0-->false
'0'-->true
' '-->true
*/

console.log(Boolean (String(0)));
console.log(Boolean (0));

//operadores basicos
//operaciones unarias y binarias
let x, z, resul;
x=5;
z=2;
res = x+z;
res = x-z;
res = x*z;
res = x/z;
res = x ** z;

alert('1'+ 2);
alert(1 +'2');

alert(2 + 2 + '1');
alert('1' + 2 + 2);

alert(2 - '1');
alert('6' / 2);
alert('6' / '2a');

//operaciones unarias
a=1;
console.log(+a);
a= -1;
console.log(+a);
console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log('');

a='2';
b='3';
console.log(+a + +b);
console.log(Number(a) + Number(b));

//asignaciones
a = 2 + 3
a = b = c = 2 + 3

c = 2 + 3
b = c
a = b

c = 3 -(a = b + 1)

//modificadores
a = a + 2
a += 2
a = a - 2
a -= 2;

//incremento y decremento
//++ incremento
//-- decremento
a=2;
a ++;
console.log(a);

a = 2;
a --;
console.log(a);

//posicion del incremento y decremento
a=1;
b= ++ a;
console.log(b);

a=1;
b= a ++;
c=a;
console.log(b);
console.log(c);

//comparaciones
console.log(2 > 1);
console.log(2 == 1);
console.log(2 !=1);

let numm = 2 > 1;

//comparaciones entre cadenas
console.log('z' > 'a');
console.log('Show' > 'show');
console.log('casa' > 'casas');

//comparacion de diferentes tipos
//al comprar valores de diferentes tipos javascript convierte los valores a numeros
console.log('2' > 1);
console.log('01'== 1);
console.log(true > 0);
console.log(false == 0);
console.log('hola' > 0);

a=0;
b='0';

Boolean_a = Boolean(a);
Boolean_b = Boolean(b);

console.log('*******************');
console.log(a == b);

console.log('*******************');
console.log(null > 0);
console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);

console.log('*******************');
console.log(undefined > 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

console.log('*******************');
console.log(NaN > 0);
console.log(NaN > 0);
console.log(NaN >= 0);
console.log(NaN == 0);

console.log('*******************');
console.log(null == undefined);
console.log(null == 5);
console.log(undefined == 5);

//no diferencia de 0 de falso
console.log('*******************');
console.log('' == false);
console.log(0 == false);

//igualacion estricta
console.log(0 == false);
console.log(null == undefined);

console.log('*******************');
console.log(5 > 4);
console.log('apple' > 'pineapple');
console.log('2' > '12');
console.log(undefined == null);
console.log(undefined === null);
console.log(null == '0');
console.log(null === '\n0\n');

//sentencia if
//if de linea
if(4 > 5) console.log('mensaje');

if(4 >5 ){
    b = 5 + 3;
    console.log('mensaje');
}

if ('45a' / 3){
    console.log('no entro');
}
if('0'){
    console.log('entro');
}
if(4/2){
    console.log('entro');
}

let edadx;
if(edadx){
    console.log('variable definida');
}else{
    console.log('variable indefinida');
}

//haga un algoritmo que dada una edad retorne true
//si es mayor de edad y falso su no lo es

let edad_usuario = 17;
if(edad_usuario >= 18){
    console.log(true);
}else{
    console.log(false);
}

console.log(edad_usuario == 18);

//operador ternario
//condicion ? operacion verdadera : operacion falsa
resultado = edad_usuario >= 18 ? x = 5 : x = 7;

//operador logico
//or
/*
v or v = v
v or f = v
f or v = v
f or f = f
*/

console.log('*******************');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(1 || '0');
console.log('0' || '0');

if (4 == 4 || 2 > 5){
    console.log('verdadero');
}

//resultado = valor_uno || valor_dos || valor_tres;
//1. evalua los operando de izquierda a derecha
//2. por cada operando convierte el valor a booleano si el resultado es true
//se detiene y retorna el valor original de ese operando
//3. si todos los operando han sido evaluados (todos son falsos) retorna el ultimo operando

let comparacion_boolenao = true || false || true;
comparacion_boolenao= '0' || '0';
comparacion_boolenao= undefined || null || NaN || '';
comparacion_boolenao= undefined || null || NaN || 3;
comparacion_boolenao= undefined || null || 'hola' || 3;

// and
console.log('*******************');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

if (4 == 4 && 2 > 5){
    console.log('verdadero');
}

let comparacion_boolena = true && false && true;
comparacion_boolena= '0' && '0';
comparacion_boolena= undefined && null && NaN && '';
comparacion_boolena= undefined && null && NaN && 3;
comparacion_boolena= undefined && null && 'hola' && 3;
// devuelve el primer valor falso o el ultimo si todos son verdaderos

//prevalencia u orden entre or y and

// a && b || c && d = (a && b) || (c && d)

// negacion
console.log(! true);
console.log(! false);
console.log(!! undefined); //= boolean undefined

//nullish fision de nulos
