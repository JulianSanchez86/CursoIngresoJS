/*
Julian Agustin Sanchez 	
E/S EJ 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //declaramos variable
    var nombreIngresado;
    
    
	//guardamos el nombre
	nombreIngresado= document.getElementById("txtIdNombre").value;

    //mostrarlo por alert
    alert("Su nombre es " + nombreIngresado);

}


//txtIdNombre
/*

entrada: 
-prompt
-id

salida:
alert
*/