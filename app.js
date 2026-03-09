let entregas = []
let combustivel = 0
let km = 0

function login(){
window.location = "dashboard.html"
}

function addEntrega(){

let valor = parseFloat(document.getElementById("valorEntrega").value)

entregas.push(valor)

atualizar()
}

function addCombustivel(){

combustivel += parseFloat(document.getElementById("combustivel").value)

document.getElementById("totalComb").innerText = combustivel
}

function addKM(){

km = parseFloat(document.getElementById("km").value)

calcularKM()
}

function atualizar(){

let total = entregas.reduce((a,b)=>a+b,0)

let media = total/entregas.length

document.getElementById("total").innerText = total.toFixed(2)

document.getElementById("entregas").innerText = entregas.length

document.getElementById("media").innerText = media.toFixed(2)

}

function calcularKM(){

let total = entregas.reduce((a,b)=>a+b,0)

let valorKM = total/km

document.getElementById("valorKM").innerText = valorKM.toFixed(2)

}
