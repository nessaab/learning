function calcular(n1,n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value


    switch(selector){
        case '+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
    }

    switch(selector){
        case '-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtraçao de ${n1} - ${n2} é = ${calculo}`
    }

    switch(selector){
        case '*':
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O resultado da multiplicaçao ${n1} * ${n2} é = ${calculo}`
    }

    switch(selector){
        case '/':
            calculo = (n1 / n2)
            document.getElementById("resultado").innerHTML = `O resultado da divisao de ${n1} / ${n2} é = ${calculo}`
    }
}