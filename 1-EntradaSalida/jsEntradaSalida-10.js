/*

Julian Agustin Sanchez
DIV E E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

  //variables	
  var importe;
  var resultado; 
  var descuento;

  //ID

  importe = document.getElementById("txtIdImporte").value;
  
  //Parseo

  importe = parseFloat(importe);
  
  descuento = importe *  25/100;

  resultado = importe - descuento;

  //salida

  document.getElementById("txtIdResultado").value = resultado;
}
