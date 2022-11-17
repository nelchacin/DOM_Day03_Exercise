const inputNumberofNights = document.querySelector("#numberOfNights")
const inputCitySelection = document.querySelector("#citysSelection")
const inputCalculatePrice = document.querySelector("#calculatePrice")
const inputPriceHotel = document.querySelector("#priceHotel")
const inputPriceTicket = document.querySelector("#priceTicket")
const inputPriceCar = document.querySelector("#priceCar")
const inputPriceTotal = document.querySelector("#priceTotal")


inputCalculatePrice.onclick = () => {
    let inputNumberofNightsValue = (inputNumberofNights.value) * 1
    let inputCitySelectionValue = inputCitySelection.value
}


let totalHotel = 0

function calcularCoste() { }

function costeHotel(num) {
    totalHotel = inputNumberofNights * 140
}
function costeAvion(city, num) {
    let oviedoCity = 15
    let tokyoCity = 700
    let madridCity = 90
    let barcelonaCity = 90
    if (city.value === "Oviedo" && num >= 3) {
        return oviedoCity * 0.1
    } else if (city.value === "Tokyo" && num >= 3) {
        return tokyoCity * 0.1
    } else if (city.value === "Madrid" && num >= 3) {
        return madridCity * 0.1
    } else if (city.value === "Barcelona" && num >= 3) {
        return barcelonaCity * 0.1
    }
}

function CosteAlquilerCoche(num) {
    if (inputNumberofNights === 3 && inputNumberofNights < 7) {
        return totalHotel - 20
    } else if (inputNumberofNights > 7) {
        return totalHotel - 50
    }
}
