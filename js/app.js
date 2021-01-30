"use strict"

let test = { 
    "products":[
        {
            "picture": "../sklep/pictures/pencils.jpg",
            "name": "6 Color Pencils",
            "price": "8,50zł",
            "color": "more",
            "material": "wood, pastel",
            "size": "17cmx10cm",
            "quantity": "6 elements",
            "available": true,
            "add": "../sklep/icons/plus.png"
        },
        {
            "picture": "../sklep/pictures/ruler.jpg",
            "name": "Ruler",
            "price": "4,80zł",
            "color": "transparent",
            "material": "plastic",
            "size": "20cmx4cm",
            "quantity": "1",
            "available": true,
            "add": "../sklep/icons/plus.png"
        },
        {
            "picture": "../sklep/pictures/notebook.jpg",
            "name": "Notebook",
            "price": "3,40zł",
            "color": "pink/bird",
            "material": "paper",
            "size": "A5 14.8cmx21cm",
            "quantity": "30 pages",
            "available": true,
            "add": "../sklep/icons/plus.png"
        }
    ]
};

//zmiana na string
let myJSON = JSON.stringify(test);
//do przechowania
localStorage.setItem("testJSON", myJSON);
//wyciagniecie danych ze schowka
let getIt = localStorage.getItem("testJSON");
//sparsowanie na obiekt javascript
let myObj = JSON.parse(getIt);


// console.log('getIt:', getIt);    //to co wyciągniete ze schowka
// console.log('myObj:', myObj);    //sparsowane
// console.log('myObj.products:', myObj.products);    //tablica obiektów (3 obiekty)
// console.log('myObj.products:', myObj.products[1].name);     //name z pierwszego obiektu z tablicy


//stworz div z klasą i wyswietl dla kazdego [i]
for (let i in myObj.products) {
    let createDiv = document.createElement('div');
    let newDiv= document.getElementById('products-box').appendChild(createDiv);
    newDiv.classList.add('product');
    //stworz img produktu z klasa i wyswietl (zdjecie)
    let createImg = document.createElement('img');
    let newImg= newDiv.appendChild(createImg);
    newImg.classList.add('description', 'photo');
    newImg.src= myObj.products[i].picture;
    //stworz p z klasa i wyswietl (nazwa)
    let createP = document.createElement('p');
    let newP= newDiv.appendChild(createP);
    newP.classList.add('description', 'letters');
    newP.innerHTML= myObj.products[i].name;
    //stworz p z klasa i wyswietl (cena)
    let createAnotherP = document.createElement('p');
    let newAnotherP= newDiv.appendChild(createAnotherP);
    newAnotherP.classList.add('description', 'letters');
    newAnotherP.innerHTML= myObj.products[i].price;
    // stworz img z przyciskiem z klasa do kazdego [i]
    let createAnotherImg = document.createElement('img');
    let newAnotherImg= newDiv.appendChild(createAnotherImg);
    newAnotherImg.classList.add('description', 'add');
    newAnotherImg.src= myObj.products[i].add;

    // for (let j in myObj.products[i]) {
    //     let createP = document.createElement('p');
    //     let newP= newDiv.appendChild(createP);
    //     newP.classList.add('description');
    //     newP.innerHTML= myObj.products[i][j];
    // }
     
}