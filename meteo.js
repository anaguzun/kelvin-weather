//  temperature in Kelvin degrees.
const kelvin = 293 ;

// the substracting operation.
const celsius = kelvin -273 ;

// convert celsius to fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32 ;

// round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit) ;

console.log(`The temperature is ${fahrenheit} degree Fahrenheit.`) ;