//Julian Agustin Sanchez
//DIV E IF EJ 3



function mostrar()
{
	var edadIngresada;

	//ID

	edadIngresada = document.getElementById("txtIdEdad").value;

	//Parseo

	edadIngresada = parseInt(edadIngresada);

	//funcion IF

	if(edadIngresada > 17 )
	{
		alert(" Usted es mayor de edad ");
	}  
     
    else
    {
    	alert(" Usted es menor de edad ");
    }
	
	

}//FIN DE LA FUNCIÓN