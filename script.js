function acao(num)
        {
            const numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
        function clean()
        {
            document.getElementById('resultado').innerHTML = "";
        }
        function percentagem() {
            const n1 = document.getElementById('resultado').innerHTML
            const n2 = document.getElementById('resultado').innerHTML
            const resultado = document.getElementById('resultado').innerHTML =  (n1 * 100) / n2 ;
        }
        function del()
        {
            const resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
        }
        function calcular()
        {
            const resultado = document.getElementById('resultado').innerHTML;
            if(resultado)
            {
                document.getElementById('resultado').innerHTML = eval(resultado);
            }
            else
            {
                document.getElementById('resultado').innerHTML = "Eror..."
            }
        }
