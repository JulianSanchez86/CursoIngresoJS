

//Julian Sanchez
//DIV E
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	//variables
    var largoTerreno;
    var anchoTerreno;
    var perimetroTerreno;

   //ID
   largoTerreno = document.getElementById("txtIdLargo").value;
   anchoTerreno = document.getElementById("txtIdAncho").value;
   
   //Parseo
   largoTerreno = parseFloat(largoTerreno);
   anchoTerreno = parseFloat(anchoTerreno);
  

   //Proceso
   perimetroTerreno = largoTerreno*2;
   perimetroTerreno = anchoTerreno*2;
   perimetroTerreno = largoTerreno + anchoTerreno;
   perimetroTerreno = perimetroTerreno *3;


   //Salida

   alert("La cantidad de alambre a usar es de :" + perimetroTerreno );
   


}
function Circulo () 
{
    //Variables
	var radioTerreno;
	var perimetroTerreno;

	//ID
	radioTerreno = document.getElementById("txtIdRadio").value;
    
	//proceso
    
    radioTerreno = parseFloat(radioTerreno);

    perimetroTerreno = radioTerreno * 2;

    perimetroTerreno = perimetroTerreno * 3.14;

    //salida

    alert("La cantidad de alambre a usar es de" + perimetroTerreno );
    

	
}
function Materiales () 
{

	//Variables
	var anchoTerreno;
	var largoTerreno;
	var totalTerreno;
	var bolsasCal;
	var bolsasCemento;
  
    //ID
    
    anchoTerreno = document.getElementById("txtIdAncho").value;
    largoTerreno = document.getElementById("txtIdLargo").value;

    //Parseo

    anchoTerreno = parseInt(anchoTerreno);
    largoTerreno = parseInt(largoTerreno);
    

    //Proceso
    totalTerreno = anchoTerreno + largoTerreno;
    bolsasCemento = totalTerreno*2;
    bolsasCal = totalTerreno*3;
    
    //alert
    
    alert(" Bolsas de cal necesarias: " + bolsasCal + " bolsas de cemento necesarias: " + bolsasCemento );

}