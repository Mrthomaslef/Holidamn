function DFG() {

var tail = document.getElementById("tail").value
var crea = document.getElementById("crea").value

var result = 0

result = (36.5*tail)/crea

document.getElementById("result").innerHTML = "DFG = " + result + "ml/min"

}