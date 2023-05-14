
const express = require('express');
const app = express();

// let shoppingCarts = [
//     {
//         userId: '123',
//         itemIds: ['1', '2']
//     },{
//         userId: '234',
//         itemIds: ['1', '3', '4']
//     },
//     {
//         userId: '345',
//         itemIds: ['4']
//     }
// ];
//If you want to test it, you gonna have to import it to the router


let products = [
    {
        id: '1',
        name: 'Shoes',
        price: '$40.00'
    },
    {
        id: '2',
        name: 'Pants',
        price: '$40.00'
    },
    {
        id: '3',
        name: 'Shirt',
        price: '$40.00'
    },
    {
        id: '4',
        name: 'Hat',
        price: '$40.00'
    }

];






module.exports = {products};

