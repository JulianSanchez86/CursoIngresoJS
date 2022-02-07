
//Julian Agustin Sanchez
//DIV E TP/3
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
			//Variables
	
	var fahrenheit;
    var centigrados;
    //ID

    fahrenheit = document.getElementById("txtIdTemperatura").value;
   
    //Proceso
    
    centigrados = (fahrenheit -32);

 //Parseo

    fahrenheit = parseFloat (fahrenheit);
    
    //Salida

   alert(fahrenheit + " Grados Fahrenheit son " + centigrados + " Centigrados " );
   
	
}

function CentigradosFahrenheit () 
{

	//Variables
	var centigrados;
	var fahrenheit;
    var temperatura;
    //ID

    centigrados = document.getElementById("txtIdTemperatura").value;
    
    //Parseo

    centigrados = parseFloat(centigrados);
    fahrenheit = parseFloat (fahrenheit);
   
    //Proceso

    fahrenheit = (9/5*centigrados)+32;
    
    //Salida

   alert(centigrados + " Centigrados son " + fahrenheit + " Grados Fahrenheit " ); 
}


