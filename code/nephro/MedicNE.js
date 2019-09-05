function DFG() {
    var age = document.getElementById("age").value
    var poids = document.getElementById("poids").value
    var creat = document.getElementById("creat").value
    var k = document.getElementById("sexe").value
    var result = 0

    result = ((140 - age) * poids * k) / creat
    if (age <= 0 || poids <= 0 || creat <= 0) {
        alert("Valeure(s) manquante(s)");
    } else {


        document.getElementById("result").innerHTML = "DFG = " + result + " ml/min";
    }
}

function DFG2() {

    var age = document.getElementById("age2").value
    var creat = document.getElementById("creat2").value
    var k = document.getElementById("sexe2").value
    var result = 0
    var skin = document.getElementById("skin").value

    result = 175 * Math.pow(creat * 0.0113, -1.154) * Math.pow(age, -0.203) * k * skin


    document.getElementById("result2").innerHTML = "DFG = " + result + " ml/min/1,73m^2";
    console.log(k)
}

function DFG3() {
    var age = document.getElementById("age3").value
    var creat = document.getElementById("creat3").value
    var k = document.getElementById("sexe3").value
    var result = 0
    var min = creat / k
    var max = creat / k

    if (min >= 1) {
        min = 1
    }

    if (max <= 1) {
        max = 1
    }

    result = 141 * Math.pow(min, -0,329) * Math.pow(max, -1.209) * Math.pow(0.993, age)

    document.getElementById("result3").innerHTML = "DFG = " + result + " ml/min/1,73m^2";

    console.log(Math.pow(max, -1.209))
}

function FEU() {

    var AU = document.getElementById("AU").value
    var AP = document.getElementById("AP").value
    var CU = document.getElementById("CU").value
    var CP = document.getElementById("CP").value
    var result4 = 0

    result4 = (AU*CP)/(AP*CU)

    document.getElementById("result4").innerHTML = "FE urée = " + result4
}

function FEN() {

    var NU = document.getElementById("NU").value
    var NP = document.getElementById("NP").value
    var CU = document.getElementById("CU").value
    var CP = document.getElementById("CP").value
    var result5= 0

    result5 = (NU*CP)/(NP*CU)

    document.getElementById("result5").innerHTML = "FE sodium= " + result5
}