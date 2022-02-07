function mostrar()
{
    //variable
    var edadIngresada;

    //ID
    edadIngresada = document.getElementById("txtIdEdad").value;  
    
    //Parseo
    edadIngresada = parseInt(edadIngresada);

    //Instruccion IF
    if(edadIngresada == 15)
    {
    	alert(" Niña bonita ");
    }
    
    alert(" FBI open up "); 

}//FIN DE LA FUNCIÓN