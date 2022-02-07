function mostrar()
{
	var edadIngresada;

	//ID
	edadIngresada = document.getElementById("txtIdEdad").value;

	//Parseo
	edadIngresada = parseInt(edadIngresada);

	//Instruccion IF

	if(edadIngresada <=12 || edadIngresada >=17)
	{
		alert(" Usted no es adolescente ");
	}


}//FIN DE LA FUNCIÓN