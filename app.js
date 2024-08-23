let texto = "";
let textoEncriptado = "";
let textoDesEncriptado = "";

function encriptarTexto() {
  texto = document.getElementById("texto-entrada").value;
  if (texto == "") {
    alert("Digite un texto valido");
  } else {
    textoEncriptado = encriptacion(texto);
    document.getElementById("texto-salida").innerHTML = textoEncriptado;
    document.getElementById("texto-entrada").value = "";
  }
}

function encriptacion(texto) {
  texto = texto.replaceAll("e", "enter");
  texto = texto.replaceAll("i", "imes");
  texto = texto.replaceAll("a", "ai");
  texto = texto.replaceAll("o", "ober");
  texto = texto.replaceAll("u", "ufat");
  let div = document.getElementById("mensaje-inicial");
  div.setAttribute("style", "display: none;");
  document.getElementById("mensaje-encriptado").style.display = "flex";
  return texto;
}
function desencriptarTexto() {
  texto = document.getElementById("texto-entrada").value;
  textoDesEncriptado = desencriptacion(texto);
  document.getElementById("texto-salida").innerHTML = textoDesEncriptado;
  document.getElementById("texto-entrada").value = "";
}
function desencriptacion(texto) {
  //let textoDesEncriptado = "";
  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ufat", "u");
  return texto;
}

function copiar() {
  let texto = document.getElementById("texto-salida");
  texto.select();
  document.execCommand("copy");
}
