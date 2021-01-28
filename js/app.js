"use strict"
console.log('stationery');

let products = 
[
    {
        "picture": "../sklep/pictures/pencils.jpg",
        "name": "6 Color Pencils",
        "price": "8,50zł",
        "color": "more",
        "material": "wood, pastel",
        "size": "17cmx10cm",
        "quantity": "6 elements"
    },
    ,{
        "picture": "../sklep/pictures/ruler.jpg",
        "name": "Ruler",
        "price": "4,80zł",
        "color": "transparent",
        "material": "plastic",
        "size": "20cmx4cm",
        "quantity": "1"
    },
    {
        "picture": "../sklep/pictures/notebook.jpg",
        "name": "Notebook",
        "price": "3,40zł",
        "color": "pink/bird",
        "material": "paper",
        "size": "A5 14.8cmx21cm",
        "quantity": "30 pages"
    }
];

//przechowywanie danych
let myJSON = JSON.stringify(products);
localStorage.setItem("testJSON", myJSON);
//wyciagniecie danych
let cosik = localStorage.getItem("testJSON");
let objekt = JSON.parse(cosik);
//zmiana innerHTML
let cena= document.getElementsByClassName('price');
cena[1].innerHTML= objekt[0].price;