//Julian Agustin Sanchez
//DIV E E/S TP 1 


/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



function Sumar () 
{
	   //Variables
   
    var productoUno;
	var productoDos;
	var productoTres;
	var resultado;
	

	//ID

	productoUno = document.getElementById("txtIdPrecioUno").value;

	productoDos = document.getElementById("txtIdPrecioDos").value;

	productoTres = document.getElementById("txtIdPrecioTres").value;

	//Parseo 

    productoUno = parseFloat(productoUno);
	
	productoDos = parseFloat(productoDos);
 
    productoTres = parseFloat(productoTres);

     resultado = productoUno + productoDos + productoTres;

    alert(" La suma es: " + resultado );

}


function Promedio () 
{
    //variables

    var numUno;
    var numDos;
    var numTres;
    var resultado;


    //ID
    numUno = document.getElementById("txtIdPrecioUno").value;
   
    numDos = document.getElementById("txtIdPrecioDos").value;
   
    numTres = document.getElementById("txtIdPrecioTres").value;

    //usar ParseInt para convertir valor texto a valor numerico

   
    numUno = parseFloat(numUno);
    
    numDos = parseFloat(numDos);
   
    numTres =parseFloat(numTres);
   
    resultado = (numDos + numUno + numTres) /3 ;

    //creo el alert de salida

    alert(" Su resultado es "+ resultado);   	

}
function PrecioFinal () 
{
    var numUno;
    var numDos;
    var numTres;
    var resultado;	
    var aumento;
    var PrecioFinal

    //ID
    numUno = document.getElementById("txtIdPrecioUno").value;
   
    numDos = document.getElementById("txtIdPrecioDos").value;
   
    numTres = document.getElementById("txtIdPrecioTres").value;

   //Parseo

    numUno = parseFloat(numUno);
    
    numDos = parseFloat(numDos);
   
    numTres = parseFloat(numTres);

    resultado = (numUno + numDos + numTres);
    aumento = resultado * 21/100;
    precioFinal = resultado + aumento;

    alert(" Su precio final es: " + precioFinal );
}