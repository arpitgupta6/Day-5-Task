function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); // Pass element, index, and array
    }
    return result;
}

// Example of map function
const arr = [100,300,700,900,1000];
let newarr=arr.map((curElem,index)=>{
    return curElem*2;
});
console.log(newarr);



function customFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) { // Pass element, index, and array
            result.push(arr[i]);
        }
    }
    return result;
}
//Example of filter function
const evenArr=newarr.filter((curElem,index)=>{
    return curElem%2===0;
});
console.log(evenArr);

function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}
//Example of reduce function

const sum=evenArr.reduce((accumulator,curElem)=>{
    return accumulator+curElem;
},0);

console.log(sum);

                 //Another Example Of {map(),filter(),Reduce()}
// Sample shopping cart dataset
const cart = [
    { id: 1, name: "Laptop", price: 800, quantity: 1 },
    { id: 2, name: "Phone", price: 500, quantity: 2 },
    { id: 3, name: "Headphones", price: 50, quantity: 3 },
    { id: 4, name: "Mouse", price: 25, quantity: 2 },
    { id: 5, name: "USB Cable", price: 10, quantity: 5 }
];

//  Calculate total price per item using map()


const cartWithTotalPrice = cart.map(({ name, price, quantity }) => ({
    name,
    totalPrice: price * quantity
}));

console.log("Cart with Total Prices:", cartWithTotalPrice);

// Filter out inexpensive items (total price < 20)


const expensiveItems = cartWithTotalPrice.filter(({ totalPrice }) => totalPrice >= 20);

console.log("Expensive Items:", expensiveItems);

//  Calculate the grand total using reduce()


const grandTotal = expensiveItems.reduce((acc, { totalPrice }) => acc + totalPrice, 0);

console.log("Grand Total:", grandTotal);


