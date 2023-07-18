'use strict';

let arrFoods = [
    {
        name: 'bread',
        amount: 3,
        isBought: true,
        price: 24,
    },
    {
        name: 'burger',
        amount: 3,
        isBought: true,
        price: 104,
    },
    {
        name: 'juice',
        amount: 2,
        isBought: true,
        price: 24,
    },
    {
        name: 'chicken',
        amount: 1,
        isBought: false,
        price: 84,
    },
    {
        name: 'chocolate',
        amount: 3,
        isBought: true,
        price: 24,
    },

];

function sum() {
    arrFoods.forEach(el => {
        el.sum = el.amount * el.price;
    })
}
sum();

function addFood() {

    let isFind = false;
    arrFoods.forEach(el => {
        if (el.name === document.getElementById("prodAdd").value) {
            el.amount += parseInt(document.getElementById("amountsAdd").value);

            el.price = parseInt(document.getElementById("priceAdd").value) || el.price;
            isFind = true;
        }
    })

    if (!isFind)
        arrFoods.push(
            {
                name: document.getElementById("prodAdd").value,
                amount: parseInt(document.getElementById("amountsAdd").value),
                price: parseInt(document.getElementById("priceAdd").value),
                isBought: false,
            }
        );
    sum();
    console.log(arrFoods);
}
console.log(arrFoods);


let btnAddFood = document.querySelector('#addFood');
btnAddFood.addEventListener('click', addFood);

function delFood() {

    let nameProd = document.getElementById("prodDel").value;

    arrFoods = arrFoods.filter(el => el.name !== nameProd);
    console.log(arrFoods);
}

console.log(arrFoods);
let btnDelFood = document.querySelector('#delFood');
btnDelFood.addEventListener('click', delFood);

// ******************
function showList() {

    // let parent = document.getElementById("main");
    // let child = document.getElementsByName("cartBlock");
    // parent.removeChild(child);

    arrFoods.forEach(function (elem) {

        if (elem.isBought) {

            let blockBought = document.querySelector('#bought');
            let cart = document.createElement('div');
            cart.className = 'cartBlock';
            cart.innerHTML += `<p>Назва ${elem.name}</p> <p>Кількість ${elem.amount}</p> <p>Ціна ${elem.price}</p> <p>Сума ${elem.sum}`;

            blockBought.append(cart);

        } else {

            let blockNotPurchased = document.querySelector('#not-purchased');
            let cart = document.createElement('div');
            cart.className = 'cartBlock';
            cart.innerHTML += `<p>Назва ${elem.name}</p> <p>Кількість ${elem.amount}</p> <p>Ціна ${elem.price}</p> <p>Сума ${elem.sum}`;

            blockNotPurchased.append(cart);
        }
    })
}
let btnShowList = document.querySelector('#showList');
btnShowList.addEventListener('click', showList);


function boughtFood() {

    arrFoods.forEach(el => {
        if (el.name === document.getElementById("boughtInput").value) {
            el.isBought = true;

        }

    })

    console.log(arrFoods);
}

console.log(arrFoods);
let btnBoughtFood = document.querySelector('#boughtFood');
btnBoughtFood.addEventListener('click', boughtFood);


// let playList = [

//     {
//         author: "LED ZEPPELIN",
//         song: "STAIRWAY TO HEAVEN"
//     },

//     {
//         author: "QUEEN",
//         song: "BOHEMIAN RHAPSODY"
//     },

//     {
//         author: "LYNYRD SKYNYRD",
//         song: "FREE BIRD"
//     },

//     {
//         author: "DEEP PURPLE",
//         song: "SMOKE ON THE WATER"
//     },

//     {
//         author: "JIMI HENDRIX",
//         song: "ALL ALONG THE WATCHTOWER"
//     },

//     {
//         author: "AC/DC",
//         song: "BACK IN BLACK"
//     },
//     {
//         author: "QUEEN",
//         song: "WE WILL ROCK YOU"
//     },

//     {
//         author: "METALLICA",
//         song: "ENTER SANDMAN"
//     }

// ];