    function calculateIMC () {
       const newWeight = parseFloat(document.getElementById("newWeight").value)
       const newHeight = parseFloat(document.getElementById("newHeight").value)

        const IMC = (newWeight / (newHeight ** 2)).toFixed(2)
        if (Number.isNaN(newWeight) || newWeight<=0 || Number.isNaN(newHeight) || newHeight<=0) {
            document.getElementById("result").innerHTML = `enter values ​​above zero`
        } else {
            if (IMC <= 18.5) {
                document.getElementById("result").innerHTML = `The total is ${IMC} - Below ideal weight`
            } else if (IMC <= 25) {
                document.getElementById("result").innerHTML = `The total is ${IMC} - ideal weight`
            } else if (IMC <= 30) {
                document.getElementById("result").innerHTML = `The total is ${IMC} - Overweight`
            } else if (IMC <= 40) {
                document.getElementById("result").innerHTML = `The total is ${IMC} - Obesity`
            } else {
                document.getElementById("result").innerHTML = `The total is ${IMC} - Morbid Obesity`
            }
        }
    }
    