/*
Julian Agustin Sanchez DIV E
EJ E/S 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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


//txtIdNumeroDos
//txtIdNumeroUno


