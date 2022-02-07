/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Variable de ingreo
	var nombreIngresado;

    //guardo el dato de entrada
    nombreIngresado=prompt("Ingrese su nombre");
    
    //asigno nombre a la caja de texto de salida
    txtIdNombre.value= nombreIngresado;

}

