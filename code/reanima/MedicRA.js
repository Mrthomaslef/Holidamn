function PF() {
    var PA = document.getElementById("PA").value
    var FI = document.getElementById("FI").value

    result = (PA / FI) * 100

    document.getElementById("result").innerHTML = "P/F = " + result
}