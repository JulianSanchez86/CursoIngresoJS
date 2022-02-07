/*

Julian Agustin Sanchez
E/S EJ 7 DIV E
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{ 
	 //Declarar variables
    var numUno;
    var numDos;
    var resultado;

    numUno = document.getElementById("txtIdNumeroUno").value;
    numDos = document.getElementById("txtIdNumeroDos").value;

    //usar ParseInt para converitr valor texto a valor numerico

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);

    resultado = numDos + numUno;

    //creo el alert de salida

    alert(" Su resultado es "+ resultado);
}

function restar()
{
	//Declarar variables
    var numUno;
    var numDos;
    var resultado;

    numUno = document.getElementById("txtIdNumeroUno").value;
    numDos = document.getElementById("txtIdNumeroDos").value;

    //usar ParseInt para convertir valor texto a valor numerico

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
     
    resultado = numDos - numUno;

    //creo el alert de salida

    alert(" Su resultado es "+ resultado);
}

function multiplicar()
{ 
   //Declarar variables
   var numUno;
   var numDos;
   var resultado;  

    numUno = document.getElementById("txtIdNumeroUno").value;
    numDos = document.getElementById("txtIdNumeroDos").value;

    //usar ParseInt para convertir valor texto a valor numerico

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);

    resultado = numDos * numUno;

    //creo el alert de salida

    alert(" Su resultado es  "+ resultado);
   
}

function dividir()
{
   //Declarar variables
   var numUno;
   var numDos;
   var resultado;


    numUno = document.getElementById("txtIdNumeroUno").value;
    numDos = document.getElementById("txtIdNumeroDos").value;

    //usar ParseInt para convertir valor texto a valor numerico

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);

    resultado = numDos / numUno;

    //creo el alert de salida

    alert(" Su resultado es "+ resultado);
   
}

