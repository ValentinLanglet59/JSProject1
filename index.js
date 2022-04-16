let count = document.getElementById("general-input").value;
let feet = 3.28
let meeter = 1
let meeterResult = document.getElementById("meter-para");
let volumeResult = document.getElementById("litre-para")
let massResult = document.getElementById("kilo-para")
let pound = 0.453
let kg = 2.204 

let gallon = 4
let litre = 1

function length() {
    meeterResult.textContent += " " + meeter / feet + " meter"
    console.log(meeterResult)
}
length()

function volume() {
    volumeResult.textContent += " " + litre / gallon + " galloon"
    console.log(volumeResult)

}
volume()

function mass() {
    massResult.textContent += pound / kg + " pound "
    console.log(massResult)
}
mass()