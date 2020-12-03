function myFunction(p)
{
  USE medidas
  SELECT * FROM personas
  GO

  var x = prompt("Cual es tu nombre");
  if (p > 90)
  {
    console.log("gordo");
  }
  else if (p < 20) {
    console.log("demasiado liviano");
  }
  else
  {
      console.log("vas bien");
  }
  alert("hola " + x + " tienes un peso de " + p);
}
