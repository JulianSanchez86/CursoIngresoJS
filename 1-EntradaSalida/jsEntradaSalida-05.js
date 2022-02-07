/*
Julian Agustin Sanchez DIV E
E/S EJ 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro las variables
	var nombre;
	var edad;

   nombre = document.getElementById("txtIdNombre").value;

   edad = document.getElementById("txtIdEdad").value;

    //Creo el alert
    alert( " Su nombre es " + nombre + " y tiene " + edad + " años ");
}
//txtIdNombre
//txtIdEdad
