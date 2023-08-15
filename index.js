// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file
// b. Connect the coffee_data.js file to this index.js file.
const coffeeMenu = require("./coffee_data_starter");

// Prompt 2:
// Print an array of all the drinks.
const drinks = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(drinks));

// Prompt 3
// Print an array of drinks that cost 5 and under.
const underFive = (item) => {
    return item.price <= 5;
}
const drinksUnderFive = coffeeMenu.filter(underFive);
console.log(drinksUnderFive);

// Prompt 4
// Print an array of drinks that are priced at an even number.
const evenDrinks = (item) => {
    return item.price %2 === 0;
}
const evenPriceDrinks = coffeeMenu.filter(evenDrinks);
console.log(evenPriceDrinks);

// Prompt 5
// Print the total if you were to order one of every drink.
//to do this you need to get all drink prices
const prices = (item) => {
    return item.price;
}
const priceArray = coffeeMenu.map(prices)

const total = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(total);
console.log(totalPrice);

// Prompt 6
// Print an array with all the drinks that are seasonal.
const seasonal = (item) => {
    return item.seasonal;
}
const seasonalDrinks = coffeeMenu.filter(seasonal);
console.log(seasonalDrinks);

// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"
const withImportedBeans = () => {
    for (i = 0; i < drinks.length; i++) {
        if (drinks === seasonalDrinks) {
            return `${drinks} with imported beans`;
        }
    }
}
console.log(withImportedBeans);