function chad() {

    var IC = document.getElementById("IC").value
    var HTA = document.getElementById("HTA").value
    var age = document.getElementById("age").value
    var diabete = document.getElementById("diabete").value
    var AVC = document.getElementById("AVC").value
    var vasc = document.getElementById("vasc").value
    var age2 = document.getElementById("age2").value
    var sexe = document.getElementById("sexe").value
    var result = 0

    if (is_check("IC") == true)
        result += Number(IC)
    if (is_check("HTA") == true)
        result += Number(HTA)
    if (is_check("age") == true)
        result += Number(age)
    if (is_check("diabete") == true)
        result += Number(diabete)
    if (is_check("AVC") == true)
        result += Number(AVC)
    if (is_check("vasc") == true)
        result += Number(vasc)
    if (is_check("age2") == true)
        result += Number(age2)
    if (is_check("sexe") == true && (is_check("age") == true || is_check("age2") == true))
        result += Number(sexe)


    document.getElementById("result").innerHTML = "CHA2DS2-VASc = " + result

}

function is_check(id) {
    return document.getElementById(id).checked == true;
}

function QT() {
    var FR = document.getElementById("FR").value
    var QTm = document.getElementById("QTm").value
    var RR = document.getElementById("RR").value
    var resultB = 0
    var resultF = 0

    resultB = QTm / Math.sqrt(60 / FR)
    resultF = QTm * 10 / Math.cbrt(RR)

    document.getElementById("resultB").innerHTML = " Selon Bazett : QT corrige = " + resultB + " ms";
    document.getElementById("resultF").innerHTML = " Selon Firdericia : QT corrige = " + resultF + " ms";


}