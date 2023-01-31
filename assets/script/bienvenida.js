function bienvenida() {
  var saludo;
  var i = 1;
  var nombre = document.getElementById("nombre").value;
  switch (i) {
    case 1:
      saludo = `Bienvenid@ a Criptex, 
      ${nombre}`;
      break;
    case 2:
      saludo = `Larga vida y prosperidad, ${nombre}`;
      break;
  }
  alert(saludo);
  document.getElementById("bienvenida").href="encriptado.html"
}
