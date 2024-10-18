function multiplicationTable () {
    const n1 = (document.getElementById("n1").value)

    if (Number.isNaN(n1) || n1<=0) {
        document.getElementById("result").innerHTML = `enter values ​​above zero` 
    } else {
        document.getElementById('result').innerHTML = ""
        for (let i = 1; i <= 10; i++) {
            const calcTable = (n1 * i)
            result.innerHTML += `${n1} x ${i} = ${calcTable} <br/><br/>`
    }

    }
}

