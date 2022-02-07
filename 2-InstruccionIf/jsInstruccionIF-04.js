//JULIAN SANCHEZ DIV E EJ 4



function mostrar()
{
	var edadIngresada;
	
	//ID
	edadIngresada = document.getElementById("txtIdEdad").value;

	//Parseo
	edadIngresada = parseInt(edadIngresada);

	//Instruccion IF
	if(edadIngresada > 12 && edadIngresada < 18)
	{
		alert(" Usted es adolescente");
		
	}
	

}//FIN DE LA FUNCIÓN

