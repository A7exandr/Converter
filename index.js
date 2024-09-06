/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// 1 meter = 3.281 feets | 1 foot =  0.3048 meters

// 1 liter = 0.264 gallons | 1 gallon = 3.785 liters

// 1 kilo = 2.204 pounds | 1 pound =  0.4536 kilos

let btn = document.querySelector("button")

let meters = document.getElementById("meters")
let liters = document.getElementById("liters")
let kilos = document.getElementById("kilos")

btn.addEventListener("click", convert);

const ratioMetersToFeets = 3.281
const ratioLitersToGallons = 0.264
const ratiokilosToPounds = 2.204


function convert() {
    let value = document.querySelector("input").value
    
    let metersToFeets = value * ratioLitersToGallons
    let feetsToMeters = value / ratioLitersToGallons
    
    let litersToGallons = value * ratioLitersToGallons
    let gallonsToliters = value / ratioLitersToGallons
    
    let kilosToPounds = value * ratiokilosToPounds
    let poundsToKilos = value / ratiokilosToPounds
    
    if (Number(value) <= 0) {
        meters.textContent = "0"
        liters.textContent = "0"
        kilos.textContent = "0"
    } else if (Number(value) === 1) {
        meters.textContent =  `1 meter = 3.281 feets | 1 feet =  0.3048 meters`
        liters.textContent =  `1 liter = 0.264 gallons | 1 gallon = 3.785 liters`
        kilos.textContent =  `1 kilo = 2.204 pounds | 1 pound =  0.4536 kilos`
    } else {
        meters.textContent =  `${value} meters = ${metersToFeets.toFixed(3)} feets | ${value} feets =  ${feetsToMeters.toFixed(3)} meters`
        liters.textContent =  `${value} liter = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToliters.toFixed(3)} liters`
        kilos.textContent =  `${value} kilos = ${kilosToPounds.toFixed(3)} pounds | ${value} pounds =  ${poundsToKilos.toFixed(3)} kilos`
    }
}