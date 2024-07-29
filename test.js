// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function (){
    const {fromEuroToDollar}= require('./app.js');

const dollar= fromEuroToDollar(3.5);
const expected = 3.5*1.07;

expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 146 yen", function (){
    const {fromDollarToYen}= require('./app.js');

const yen= fromDollarToYen(3.5);
const expected = 3.5*146;

expect(fromDollarToYen(3.5)).toBe(511.91588785046724);
})


test("One yen should be 0.00555911 pounds", function (){
    const {fromYenToPound}= require('./app.js');

const pound= fromYenToPound(3.5);
const expected = 3.5*0.00555911;

expect(fromYenToPound(3.5)).toBe(0.019456869009584665);
})