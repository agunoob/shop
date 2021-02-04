"use strict"

let test = { 
    "products":[
        {
            "gallery": [
                {
                    "id": 0,
                    "pic": "../sklep/pictures//pencils/pencils.jpg"
                },
                {
                    "id": 1,
                    "pic": "../sklep/pictures/pencils/pencils2.jpg"
                },
                {
                    "id": 2,
                    "pic": "../sklep/pictures/pencils/pencils3.jpg"
                }
            ],
            "name": "6 Color Pencils",
            "price": "8,50zł",
            "color": "more",
            "material": "wood, pastel",
            "size": "17cmx10cm",
            "quantity": "6 elements",
            "available": true,
            "addToCartModal": "add to cart",
        },
        { 
            "gallery": [
                {
                    "id": 0,
                    "pic": "../sklep/pictures/ruler/ruler.jpg"
                },
                {
                    "id": 1,
                    "pic": "../sklep/pictures/ruler/ruler2.jpg"
                },
                {
                    "id": 2,
                    "pic": "../sklep/pictures/ruler/ruler3.jpeg"
                }
            ],
            "name": "Ruler",
            "price": "4,80zł",
            "color": "transparent",
            "material": "plastic",
            "size": "20cmx4cm",
            "quantity": "1",
            "available": false,
            "addToCartModal": "add to cart",
        },
        {
            "gallery": [
                {
                    "id": 0,
                    "pic": "../sklep/pictures/notebook/notebook.jpg"
                },
                {
                    "id": 1,
                    "pic": "../sklep/pictures/notebook/notebook2.jpg"
                },
                {
                    "id": 2,
                    "pic": "../sklep/pictures/notebook/notebook3.jpeg"
                }
            ],
            "name": "Notebook",
            "price": "3,40zł",
            "color": "pink/bird",
            "material": "paper",
            "size": "A5 14.8cmx21cm",
            "quantity": "30 pages",
            "available": true,
            "addToCartModal": "add to cart",
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
    const createDiv = document.createElement('div');
    let newDiv= document.getElementById('products-box').appendChild(createDiv);
    newDiv.classList.add('product');
    //klik w ten [i] div modal zaby pokazac wiekszy opis
    newDiv.onclick = function showMore () {
        //stworz modal background
        const createDivModal = document.createElement('div');
        let divModal= document.body.appendChild(createDivModal);
        divModal.classList.add('modal-background');
        //div modal
        const createDivShowMore = document.createElement('div');
        let divShowMore= createDivModal.appendChild(createDivShowMore);
        divShowMore.classList.add('more');
        //wyswietl przycisk exit
        const createImgExit = document.createElement('img');
        let ImgExit= divShowMore.appendChild(createImgExit);
        ImgExit.classList.add('exit');
        ImgExit.src= "../sklep/pictures/icons/x-mark.png";
        //schowaj, click w x
        ImgExit.onclick = function hide() {
        divModal.style.display= 'none';
        }
        //schowaj, click poza modal
        window.onclick = function (event) {
            if (event.target == divModal) {
              divModal.style.display = 'none';
            }
        }

        // //wyswietl zdjecie
        for (let j in myObj.products[i].gallery) {
            const createModalImg = document.createElement('img');
            let modalImg= divShowMore.appendChild(createModalImg);
            modalImg.classList.add('description', 'letters-more', 'photo-modal');
            modalImg.src= myObj.products[i].gallery[0].pic;
            console.log('wyswietlam pierwsze zdjecie');
            modalImg.onclick = function () {
                for (let j=1; j<myObj.products[i].gallery.length; j++) {
                    console.log(j);
                    modalImg.src= myObj.products[i].gallery[j].pic;
                }
            }
        }

        //wyswietl nazwe
        const createPNext = document.createElement('p');
        let PNext= divShowMore.appendChild(createPNext);
        PNext.classList.add('description', 'name-grid');
        PNext.innerHTML= myObj.products[i].name;
        //wyswietl cene
        const createAnotherPNext = document.createElement('p');
        let AnotherPNext= divShowMore.appendChild(createAnotherPNext);
        AnotherPNext.classList.add('description', 'letters-more');
        AnotherPNext.innerHTML= 'price: ' + myObj.products[i].price;
        //wyswietl kolor
        const createPA = document.createElement('p');
        let pA= divShowMore.appendChild(createPA);
        pA.classList.add('description', 'letters-more');
        pA.innerHTML= 'color: ' + myObj.products[i].color;
        //wyswietl material
        const createPB = document.createElement('p');
        let pB= divShowMore.appendChild(createPB);
        pB.classList.add('description', 'letters-more');
        pB.innerHTML= 'material: ' + myObj.products[i].material;
        //wyswietl rozmiar
        const createPC = document.createElement('p');
        let pC= divShowMore.appendChild(createPC);
        pC.classList.add('description', 'letters-more');
        pC.innerHTML= 'size: ' + myObj.products[i].size;
        //wyswietl zawartosc
        const createPD = document.createElement('p');
        let pD= divShowMore.appendChild(createPD);
        pD.classList.add('description', 'letters-more');
        pD.innerHTML= 'quantity: ' + myObj.products[i].quantity;
        // wyswietl przycisk add-modal 
        const createAddModal = document.createElement('p');
        let addModal= divShowMore.appendChild(createAddModal);
        addModal.classList.add('description', 'add-modal');
        addModal.innerHTML= myObj.products[i].addToCartModal;
        //wyswietl dostepnosc
        const createPE = document.createElement('p');
        let pE= divShowMore.appendChild(createPE);
        pE.classList.add('description', 'letters-more');
        if (myObj.products[i].available === true) {
            pE.innerHTML= 'available: yes';
        } else {
            pE.innerHTML= 'available: no';
            addModal.style.backgroundColor='lightgrey';
            addModal.style.boxShadow='none';
            addModal.style.border='none';
            addModal.style.color='grey';
            addModal.style.cursor='not-allowed';
        }
    };
    //stworz img produktu z klasa i wyswietl (zdjecie)
    const createImg = document.createElement('img');
    let newImg= newDiv.appendChild(createImg);
    newImg.classList.add('description', 'photo');
    newImg.src= myObj.products[i].gallery[0].pic;
    //stworz p z klasa i wyswietl (nazwa)
    const createP = document.createElement('p');
    let newP= newDiv.appendChild(createP);
    newP.classList.add('description', 'letters');
    newP.innerHTML= myObj.products[i].name;
    //stworz p z klasa i wyswietl (cena)
    const createAnotherP = document.createElement('p');
    let newAnotherP= newDiv.appendChild(createAnotherP);
    newAnotherP.classList.add('description', 'letters');
    newAnotherP.innerHTML= myObj.products[i].price;
    // stworz img z przyciskiem z klasa do kazdego [i]
    const createAnotherImg = document.createElement('img');
    let newAnotherImg= newDiv.appendChild(createAnotherImg);
    newAnotherImg.classList.add('description', 'add');
    newAnotherImg.src= "../sklep/pictures/icons/plus.png";
}