const items = [
    {name: 'TV', cost: 100},
    {name: 'Fridge', cost: 200},
    {name: 'Fan', cost: 100},
    {name: 'Phone', cost: 50},
    {name: 'Dishwasher', cost: 200},
    {name: 'Laptop', cost: 300},
    {name: 'Sofa', cost: 75},
    {name: 'Washing Machine', cost: 150},
    {name: 'Car', cost: 400},
    {name: 'Books', cost: 50},
    {name: 'Fruits', cost: 10},
    {name: 'House', cost: 2000},
];

// filter method
const filteredItems = items.filter(item => {
    return item.cost <= 100;
})
console.log(filteredItems);

// map method
const mappedItems = items.map(item => {
    return item.name;
})
console.log(mappedItems);

//find method
const findItems = items.find(item => {
    return item.name === 'Car';
})
console.log(findItems);

//forEach method
const eachItem = items.forEach(item => {
    console.log(item.name);
})

//some method
const someItems = items.some(item => {
    return item.cost <= 50
})
console.log(someItems);

//every method
const everyItems = items.every(item => {
    return item.cost <= 50
})
console.log(everyItems);

//reduce method
const totalItems = items.reduce((currentTotal, item) => {
    return currentTotal+= item.cost;
},0)
console.log(totalItems);
