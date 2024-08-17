let texto = "";
let textoEncriptado = "";
let textoDesEncriptado = "";

function encriptarTexto() {
  texto = document.getElementById("texto-entrada").value;
  textoEncriptado = encriptacion(texto);
  document.getElementById("texto-salida").innerHTML = textoEncriptado;
  document.getElementById("texto-entrada").value = "";
}

function encriptacion(texto) {
  /* let textoEncriptado = "";
  for (let x in texto) {
    if (texto[x] == "a") {
      textoEncriptado += "ai";
    } else {
      if (texto[x] == "e") {
        textoEncriptado += "enter";
      } else {
        if (texto[x] == "i") {
          textoEncriptado += "imes";
        } else {
          if (texto[x] == "o") {
            textoEncriptado += "ober";
          } else {
            if (texto[x] == "u") {
              textoEncriptado += "ufat";
            } else {
              textoEncriptado += texto[x];
            }
          }
        }
      }
    }
  }*/
  texto = texto.replaceAll("e", "enter");
  texto = texto.replaceAll("i", "imes");
  texto = texto.replaceAll("a", "ai");
  texto = texto.replaceAll("o", "ober");
  texto = texto.replaceAll("u", "ufat");
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
