
/*function masmenos(event) {
    var tecla = event.key;
    if (tecla === "+" || tecla === "-")
        event.preventDefault();
}

<input type="text" id="numero" oninput="validarNumero(this)">
<span id="mensaje-error"></span>*/


/*function validarNumero(input) {
  var valor = input.value;
  var esNumero = /^-?\d+(\.\d+)?$/.test(valor); // Expresión regular para validar si es un número entero positivo

  if (!esNumero) {
    document.getElementById("mensaje-error").textContent = "Ingrese un número válido";
  } else {
    document.getElementById("mensaje-error").textContent = "";
  }
}*/



/*function sumatoria() {
    var input1 = document.getElementById("valor1").value;
    var input2 = document.getElementById("valor2").Value;
    var suma = input1 + input2;
    document.getElementById("total").innerText = suma;
    }*/


function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function sumatoria() {
    var input1 = document.getElementById("valor1").value;
    var input2 = document.getElementById("valor2").value;

    if (esNumero(input1) && esNumero(input2)) {
        var resultado = parseFloat(input1) + parseFloat(input2);
        document.getElementById("resultado").value = resultado;
        document.getElementById("errormensaje").innerText = "";
    } else {
        document.getElementById("resultado").value = " ";
        document.getElementById("errormensaje").innerText = "Por favor, ingrese números válidos en ambos campos";
    }
}

function resta() {
    var input1 = document.getElementById("valor1").value;
    var input2 = document.getElementById("valor2").value;

    if (esNumero(input1) && esNumero(input2)) {
        var resultado = parseFloat(input1) - parseFloat(input2);
        document.getElementById("resultado").value = resultado;
        document.getElementById("errormensaje").innerText = "";
    } else {
        document.getElementById("resultado").value = " ";
        document.getElementById("errormensaje").innerText = "Por favor, ingrese números válidos en ambos campos";
    }
}

function multiplo() {
    var input1 = document.getElementById("valor1").value;
    var input2 = document.getElementById("valor2").value;

    if (esNumero(input1) && esNumero(input2)) {
        var resultado = parseFloat(input1) * parseFloat(input2);
        document.getElementById("resultado").value = resultado;
        document.getElementById("errormensaje").innerText = "";
    } else {
        document.getElementById("resultado").value = " ";
        document.getElementById("errormensaje").innerText = "Por favor, ingrese números válidos en ambos campos";
    }
}

function dividir() {
    var input1 = document.getElementById("valor1").value;
    var input2 = document.getElementById("valor2").value;

    if (esNumero(input1) && esNumero(input2)) {
        var resultado = parseFloat(input1) / parseFloat(input2);
        document.getElementById("resultado").value = resultado;
        document.getElementById("errormensaje").innerText = "";
    } else {
        document.getElementById("resultado").value = " ";
        document.getElementById("errormensaje").innerText = "Por favor, ingrese números válidos en ambos campos";
    }
}



