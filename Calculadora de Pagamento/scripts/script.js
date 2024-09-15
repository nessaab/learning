function calcular(n1,n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value


    switch(selector){
        case '1':
            calculo = (n1 - (n1 * 0.15)) 
            if(Number.isNaN(n1) || n1<=0){
                document.getElementById("resultado").innerHTML = `digite um valor acima de zero`
                break
            } else {
                document.getElementById("resultado").innerHTML = `O total é ${calculo}`
            break
            }
    }

    switch(selector){
        case '2':
            calculo = (n1 - (n1 * 0.10))
            if(Number.isNaN(n1) || n1<=0){
                document.getElementById("resultado").innerHTML = `digite um valor acima de zero`
                break
            } else {
                document.getElementById("resultado").innerHTML = `O total é ${calculo}`
            break
            }
    }

    switch(selector){
        case '3':
            calculo = n1
            parcela = Math.round (calculo / 2)
            if(Number.isNaN(n1) || n1<=0){
                document.getElementById("resultado").innerHTML = `digite um valor acima de zero`
                break
            } else {
                document.getElementById("resultado").innerHTML = `O total é ${calculo} em duas parcelas de ${parcela}`
            break
            }
    }

    switch(selector){
        case '4':
            calculo = Math.round ((n1 + (n1 * 0.10)))
            parcela = (calculo / n2)
            if(Number.isNaN(n2) || n2<=0 || Number.isNaN(n1) || n1<=0 ){
                document.getElementById("resultado").innerHTML = `digite um valor acima de zero`
                break
            } else {
                document.getElementById("resultado").innerHTML = `O total é ${calculo} em ${n2} parcelas de ${parcela}` 
                break    
            }
    }
 }