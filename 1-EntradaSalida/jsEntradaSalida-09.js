/*
Julian Agustin Sanchez
E/S EJ 9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  //Variables
   var sueldo;
   var resultado;
   var aumento;
   var porcentaje;

 //ID

  sueldo = document.getElementById("txtIdSueldo").value;
  porcentaje = prompt("ingrese el porcentaje");

 //Parseo 
 //example: sueldo * 1.1 o sueldo + sueldo * (10/100)
 //aumento = sueldo * 10/100;
 //resultado = sueldo + aumento;
   
   sueldo = parseFloat(sueldo);

   porcentaje = parseInt(porcentaje);
   aumento = sueldo * porcentaje/100;

   resultado = sueldo + aumento;
   
   
   

//salida
  document.getElementById("txtIdResultado").value = resultado;

}
 