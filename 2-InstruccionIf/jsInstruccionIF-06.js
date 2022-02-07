function mostrar()

{
	var edadIngresada;
	
	//ID
	edadIngresada = document.getElementById("txtIdEdad").value;

	//Parseo
	edadIngresada = parseInt(edadIngresada);

	//Instruccion IF
	if (edadIngresada > 17)
	{
		alert(" Usted es un adulto. ");
	}

	else if (edadIngresada <12)
	{
		alert(" Usted es un niño. ");
	}
	else
	{
		alert(" Usted es un adolescente. ");
	}

}//FIN DE LA FUNCIÓN
