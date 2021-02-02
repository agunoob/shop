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
            "available": false,
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
    //klik w ten [i] div modal zaby pokazac wiekszy opis
    newDiv.onclick = function showMore () {
        //stworz modal background
        let createDivModal = document.createElement('div');
        let divModal= document.body.appendChild(createDivModal);
        divModal.classList.add('modal-background');
        // document.querySelector('.modal-background').style.visibility = 'visible';
        //div modal
        let createDivShowMore = document.createElement('div');
        let divShowMore= createDivModal.appendChild(createDivShowMore);
        divShowMore.classList.add('more');
        //wyswietl przycisk exit
        let createPExit = document.createElement('p');
        let PExit= divShowMore.appendChild(createPExit);
        PExit.classList.add('exit');
        PExit.innerHTML= 'x';
        //schowaj
        PExit.onclick = function hide() {
        console.log('schowaj sie błagam');
        divModal.style.display= 'none';
        }
        //wyswietl zdjecie
        let createModalImg = document.createElement('img');
        let modalImg= divShowMore.appendChild(createModalImg);
        modalImg.classList.add('description', 'photo');
        modalImg.src= myObj.products[i].picture;
        //wyswietl nazwe
        let createPNext = document.createElement('p');
        let PNext= divShowMore.appendChild(createPNext);
        PNext.classList.add('description', 'letters', 'letters-more');
        PNext.innerHTML= 'name: ' + myObj.products[i].name;
        //wyswietl cene
        let createAnotherPNext = document.createElement('p');
        let AnotherPNext= divShowMore.appendChild(createAnotherPNext);
        AnotherPNext.classList.add('description', 'letters', 'letters-more');
        AnotherPNext.innerHTML= 'price: ' + myObj.products[i].price;
        //wyswietl kolor
        let createPA = document.createElement('p');
        let pA= divShowMore.appendChild(createPA);
        pA.classList.add('description', 'letters', 'letters-more');
        pA.innerHTML= 'color: ' + myObj.products[i].color;
        //wyswietl material
        let createPB = document.createElement('p');
        let pB= divShowMore.appendChild(createPB);
        pB.classList.add('description', 'letters', 'letters-more');
        pB.innerHTML= 'material: ' + myObj.products[i].material;
        //wyswietl rozmiar
        let createPC = document.createElement('p');
        let pC= divShowMore.appendChild(createPC);
        pC.classList.add('description', 'letters', 'letters-more');
        pC.innerHTML= 'size: ' + myObj.products[i].size;
        //wyswietl zawartosc
        let createPD = document.createElement('p');
        let pD= divShowMore.appendChild(createPD);
        pD.classList.add('description', 'letters', 'letters-more');
        pD.innerHTML= 'quantity: ' + myObj.products[i].quantity;
        //wyswietl dostepnosc
        let createPE = document.createElement('p');
        let pE= divShowMore.appendChild(createPE);
        pE.classList.add('description', 'letters', 'letters-more');
        if (myObj.products[i].available === true) {
            pE.innerHTML= 'is it available: yes';
        } else {
            pE.innerHTML= 'is it available: no';
        }
        // wyswietl przycisk add 
        let createAnotherImg = document.createElement('img');
        let ImgNext= divShowMore.appendChild(createAnotherImg);
        ImgNext.classList.add('description', 'add');
        ImgNext.src= myObj.products[i].add;
        };
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

        //klik w img zaby dodać do koszyka  ???????????????????????
        // newAnotherImg.onclick = function addToCart () {
        //     console.log('w to tez klikłem');
        // };

    // for (let j in myObj.products[i]) {
    //     let createP = document.createElement('p');
    //     let newP= newDiv.appendChild(createP);
    //     newP.classList.add('description');
    //     newP.innerHTML= myObj.products[i][j];
    // }
}