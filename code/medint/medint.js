function CAC() {

var cam = document.getElementById("cam").value
var alb = document.getElementById("alb").value

var result = 0

result = cam - 0.025*(alb-40)

document.getElementById("result").innerHTML = "Calcémie corrigée = " + result

}