function IMC() {

    var taille = document.getElementById("taille").value
    var poids = document.getElementById("poids").value
    var result = 0
    var arrondi = 0

    result = poids / Math.pow(taille, 2) * 1000000
    arrondi = Math.round(result) / 100

    if (taille <= 3) {
        alert("taille en cm");
    } else {

        document.getElementById("result").innerHTML = "IMC = " + arrondi

    }

}

function PI() {

    var sexe = document.getElementById("sexe").value
    var taille = document.getElementById("taille3").value

    result = taille - 100 - ((taille - 150) / sexe)
    document.getElementById("result2").innerHTML = "Poids ideal = " + result + " kg"




}

function NRI() {
    var taille = document.getElementById("taille2").value
    var poids2 = document.getElementById("poids2").value
    var albu = document.getElementById("albu").value
    var poids3 = document.getElementById("poids3").value
    var result = 0

    if (poids2 / poids3 > 1)
        result = (1.489 * albu) + (41.7 * 1)
    else
        result = (1.489 * albu) + (41.7 * (poids2 / poids3))

    document.getElementById("result3").innerHTML = "NRI = " + result

}