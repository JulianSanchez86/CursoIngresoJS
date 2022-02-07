/*
Julian Agustin Sanchez
E/S EJ 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  //declarar las variables
  var dividendo;
  var divisor;
  var resto;
  var resultado;

  //ID

  dividendo = document.getElementById("txtIdNumeroDividendo").value;
  divisor = document.getElementById("txtIdNumeroDivisor").value;

  //parsear

  dividendo = parseInt(dividendo);
  divisor = parseInt(divisor);

  // %
  resto = dividendo % divisor;

  alert(" el resultado es " + resto );

}
