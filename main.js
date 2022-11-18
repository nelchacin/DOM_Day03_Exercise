const inputNumberofNights = document.querySelector("#numberOfNights")
const inputCitySelection = document.querySelector("#citysSelection")
const inputCalculatePrice = document.querySelector("#calculatePrice")
const inputPriceHotel = document.querySelector("#priceHotel")
const inputPriceTicket = document.querySelector("#priceTicket")
const inputPriceCar = document.querySelector("#priceCar")
const inputPriceTotal = document.querySelector("#priceTotal")


// inputCalculatePrice.onclick = () => {
//     let inputNumberofNightsValue = (inputNumberofNights.value) * 1
//     let inputCitySelectionValue = inputCitySelection.value
// }


// function calcularCoste() { }

function costeHotel(num) {
    let totalHotel = num * 140
    return totalHotel
}
function costeAvion(num) {
    let oviedoCity = 15
    let tokyoCity = 700
    let madridCity = 90
    let barcelonaCity = 90
    if (inputCitySelection.value === "Oviedo") {
        if (num > 3) {
            let discount = oviedoCity * 0.9
            return discount
        } else {
            return oviedoCity
        }

    } else if (inputCitySelection.value === "Tokyo") {
        if (num > 3) {
            let discount = tokyoCity * 0.9
            return discount
        } else {
            return tokyoCity
        }

    } else if (inputCitySelection.value === "Madrid") {
        if (num > 3) {
            let discount = madridCity * 0.9
            return discount
        } else {
            return madridCity
        }
    } else if (inputCitySelection.value === "Barcelona") {
        if (num > 3) {
            let discount = barcelonaCity * 0.9
            return discount
        } else {
            return barcelonaCity
        }
    }
}


function CosteAlquilerCoche(num) {
    let totalCar = num * 40
    if (num < 3) {
        return totalCar
    } else if (num > 2 && num < 7) {
        return totalCar - 20
    } else {
        return totalCar - 50
    }
}

inputCalculatePrice.onclick = () => {
    inputPriceCar.value = CosteAlquilerCoche(inputNumberofNights.value)
    inputPriceTicket.value = costeAvion(inputNumberofNights.value)
    inputPriceHotel.value = costeHotel(inputNumberofNights.value)
    inputPriceTotal.value = (inputPriceHotel.value * 1) + (inputPriceCar.value * 1) + (inputPriceTicket.value * 1)
}


