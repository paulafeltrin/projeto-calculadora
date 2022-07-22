// CAMANDO O HTML PARA O JAVASCRIPT
var mostrar_valor = document.querySelector(".display");
var operador = "";
var parar = false;

function limpar() {
    mostrar_valor.value = "";
    document.querySelector("#historico").innerHTML = "";
    operador = ""
  }

function add_num(string){
    if (!parar) {
        if (string === '.' && mostrar_valor.value.indexOf(".") === -1 || string !== '.') {
          mostrar_valor.value = mostrar_valor.value + string;
          historico.value = mostrar_valor.value;
        }
      } else {
        if (string === '.' && mostrar_valor.value.indexOf(".") === -1 || string !== '.') {
          mostrar_valor.value = "";
          parar = false;
          document.querySelector("#historico").innerHTML = "";
          operador = "";
    
          mostrar_valor.value = mostrar_valor.value + string;
          console.log(mostrar_valor.value = mostrar_valor.value + string)
        }
      }
    }

    function operador(operator){
        if (mostrar_valor.value == ""){
            mostrar_valor.value = "0"
        }

        if (operador = ""){
            operador = operator;
            mostrar_valor.value = mostrar_valor.value + operator;
        }else{
            total()
            mostrar_valor.value = mostrar_valor.value + operator;
            operador = operator;
            parar=false;
        }
    }

function total() {
    if (!parar) {
        num = mostrar_valor.value.split(operador);
    
        if (num[1] == "") {
        mostrar_valor.value = mostrar_valor.value + '0';
        num[1] = 0;
        }
        document.querySelector("#history").innerHTML = input.value;

    switch (operador) {
      case "+":
        mostrar_valor.value = Number(num[0]) + Number(num[1]);
        break;

      case "-":
        mostrar_valor.value = Number(num[0]) - Number(num[1]);
        break;

      case "*":
        mostrar_valor.value = Number(num[0]) * Number(num[1]);
        break;

      case "/":
        mostrar_valor.value = Number(num[0]) / Number(num[1]);
        break;
    }

    parar = true;
    }
}