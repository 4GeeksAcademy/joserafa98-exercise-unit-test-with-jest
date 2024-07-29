
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const sum = (a,b) => {
    return a + b
}
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Función para convertir de Dólar a Yen
function fromDollarToYen(dollarAmount) {
    // Primero convertimos de Dólar a Euro, luego de Euro a Yen
    let euroAmount = dollarAmount / oneEuroIs.USD;
    return euroAmount * oneEuroIs.JPY;
}

// Función para convertir de Yen a Libra Esterlina
function fromYenToPound(yenAmount) {
    // Primero convertimos de Yen a Euro, luego de Euro a Libra Esterlina
    let euroAmount = yenAmount / oneEuroIs.JPY;
    return euroAmount * oneEuroIs.GBP;
}


// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};