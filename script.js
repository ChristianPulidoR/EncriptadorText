// const ingresoTexto = document.getElementById("entratdadetexto")
// const BotonEncriptar = document.getElementsByClassName("encriptar")
// const BontonDesencriptar = document.getElementsByClassName("desencriptar")
// const BotonCopiar = document.getElementsByClassName("copiar")
// const mensajeFinal = document.getelementbyclassname("mensajeFinal")


var estado = 0;


document.getElementById("entradadetexto").addEventListener("input", onTextInput);

function onTextInput() {

    var texto = document.getElementById("entradadetexto").value;

    if (estado == 0) {
        document.getElementById("salidadetexto").value = texto;
    } else if (estado == 1) {
        document.getElementById("salidadetexto").value = encriptarTexto(texto);
    } else if (estado == 2) {
        document.getElementById("salidadetexto").value = desencriptarTexto(texto);
    }


    // Aquí puedes agregar cualquier código que desees ejecutar
}


function encriptar() {
    console.log("encriptar")
    estado = 1;
    onTextInput();
}

function descriptar() {
    console.log("descriptar")
    estado = 2;
    onTextInput();
}

function copiar() {
    console.log("copiar")
    var texto = document.getElementById("salidadetexto").value;
    navigator.clipboard.writeText(texto)
        .then(function() {})
        .catch(function(error) {});
}

function encriptarTexto(texto) {
    // Definir las reglas de reemplazo
    const reglas = [
        ["e", "enter"],
        ["o", "ober"],
        ["i", "imes"],
        ["a", "ai"],
        ["u", "ufat"]
    ];

    // Iterar sobre cada regla y aplicar el reemplazo
    reglas.forEach(function(regla) {
        const letra = regla[0];
        const reemplazo = regla[1];
        // Reemplazar todas las ocurrencias de la letra por el reemplazo
        const regex = new RegExp(letra, "g"); // Crear una expresión regular global para la letra
        texto = texto.replace(regex, reemplazo);
    });

    return texto;
}

function desencriptarTexto(texto) {
    // Definir las reglas de reemplazo inversas para desencriptar
    const reglas = [
        ["enter", "e"],
        ["ober", "o"],
        ["imes", "i"],
        ["ai", "a"],
        ["ufat", "u"]
    ];

    // Iterar sobre cada regla y aplicar el reemplazo inverso
    reglas.forEach(function(regla) {
        const encriptado = regla[0];
        const letra = regla[1];
        // Reemplazar todas las ocurrencias del texto encriptado por la letra original
        const regex = new RegExp(encriptado, "g"); // Crear una expresión regular global para el texto encriptado
        texto = texto.replace(regex, letra);
    });

    return texto;

}