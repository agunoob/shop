"use strict"

// console.log('getIt:', getIt);    //to co wyciągniete ze schowka
// console.log('myObj:', myObj);    //sparsowane
// console.log('myObj.products:', myObj.products);    //tablica obiektów (3 obiekty)
// console.log('myObj.products:', myObj.products[1].name);     //name z pierwszego obiektu z tablicy

const baza = {
    "products":[
        {
            "id": "0",
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
                },
                {
                    "id": 3,
                    "pic": "../sklep/pictures/pencils/pencils4.jpg"
                },
                {
                    "id": 4,
                    "pic": "../sklep/pictures/pencils/pencils5.jpg"
                },
                {
                    "id": 5,
                    "pic": "../sklep/pictures/pencils/pencils6.jpeg"
                },
                {
                    "id": 6,
                    "pic": "../sklep/pictures/pencils/pencils7.jpeg"
                }
            ],
            "name": "6 Color Pencils",
            "price": "8,50zł",
            "color": "more",
            "material": "wood, pastel",
            "size": "17cmx10cm",
            "quantity": "6 elements",
            "available": true,
            "addToCartModal": "add to cart"
        },
        { 
            "id": "1",
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
                },
                {
                    "id": 3,
                    "pic": "../sklep/pictures/ruler/ruler4.jpg"
                },
                {
                    "id": 4,
                    "pic": "../sklep/pictures/ruler/ruler5.jpg"
                },
                {
                    "id": 5,
                    "pic": "../sklep/pictures/ruler/ruler6.jpg"
                },
                {
                    "id": 6,
                    "pic": "../sklep/pictures/ruler/ruler7.jpg"
                }
            ],
            "name": "Ruler",
            "price": "4,80zł",
            "color": "transparent",
            "material": "plastic",
            "size": "20cmx4cm",
            "quantity": "1",
            "available": false,
            "addToCartModal": "add to cart"
        },
        {
            "id": "2",
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
                },
                {
                    "id": 3,
                    "pic": "../sklep/pictures/notebook/notebook4.jpg"
                },
                {
                    "id": 4,
                    "pic": "../sklep/pictures/notebook/notebook5.png"
                },
                {
                    "id": 5,
                    "pic": "../sklep/pictures/notebook/notebook6.jpg"
                },
                {
                    "id": 6,
                    "pic": "../sklep/pictures/notebook/notebook7.jpg"
                }
            ],
            "name": "Notebook",
            "price": "3,40zł",
            "color": "pink/bird",
            "material": "paper",
            "size": "A5 14.8cmx21cm",
            "quantity": "30 pages",
            "available": true,
            "addToCartModal": "add to cart"
        }
    ]
};

const myObj = dataBase(baza);

displayOfProducts();

function displayOfProducts() {
    for (let i in myObj.products) {
        const createDiv = document.createElement('div');
        let newDiv = document.getElementById('products-box').appendChild(createDiv);
        newDiv.classList.add('product');
        newDiv.onclick = function showMore() {
            backgroundDlaModala(i); 
        }
        zdjecie(newDiv, i);
        nazwa(newDiv, i);
        cena(newDiv, i);
        dodajDoKoszyka(newDiv);
    }
};

function dataBase(bazaJSON){
    //zmiana na string
    const myJSON = JSON.stringify(bazaJSON);
    //do przechowania
    localStorage.setItem("testJSON", myJSON);
    //wyciagniecie danych ze schowka
    const getIt = localStorage.getItem("testJSON");
    //sparsowanie na obiekt javascript
    return JSON.parse(getIt);
};

function backgroundDlaModala(i) {
    const createDivModal = document.createElement('div');
    let divModal = document.body.appendChild(createDivModal);
    divModal.classList.add('modal-background');
    stworzenieModala(divModal, i);
};

function zdjecie(newDiv, i) {
    const createImg = document.createElement('img');
    let newImg = newDiv.appendChild(createImg);
    newImg.classList.add('description', 'photo');
    newImg.src = myObj.products[i].gallery[0].pic;
};

function nazwa(newDiv, i) {
    const createP = document.createElement('p');
    let newP = newDiv.appendChild(createP);
    newP.classList.add('description', 'letters');
    newP.innerHTML = myObj.products[i].name;
};

function cena(newDiv, i) {
    const createAnotherP = document.createElement('p');
    let newAnotherP = newDiv.appendChild(createAnotherP);
    newAnotherP.classList.add('description', 'letters');
    newAnotherP.innerHTML = myObj.products[i].price;
};

function dodajDoKoszyka(newDiv) {
    const createAnotherImg = document.createElement('img');
    let newAnotherImg = newDiv.appendChild(createAnotherImg);
    newAnotherImg.classList.add('description', 'add');
    newAnotherImg.src = "../sklep/pictures/icons/plus.png";
};

function stworzenieModala(divModal, i){
    const createDivShowMore = document.createElement('div');
    let divShowMore = divModal.appendChild(createDivShowMore);
    divShowMore.classList.add('more');
    funkcjonalnoscZamykaniaModala(divShowMore, divModal);
    zdjeciaWModalu(divShowMore, i);
    nazwaPrzedmiotuWModalu(divShowMore, i);
    let przyciskAdd = przyciskAddWModalu(divShowMore, i);
    opisPrzediomtuWModalu(divShowMore, i, przyciskAdd);
};

function funkcjonalnoscZamykaniaModala(divShowMore, divModal) {
    const createImgExit = document.createElement('img');
    let ImgExit = divShowMore.appendChild(createImgExit);
    ImgExit.classList.add('exit');
    ImgExit.src = "../sklep/pictures/icons/x-mark.png";
    ImgExit.onclick = function hideXModal() {
        divModal.style.display = 'none';
    }
    window.onclick = function hideOutsideModal (event) {
        if (event.target == divModal) {
            divModal.style.display = 'none';
        }
    }
};

function zdjeciaWModalu(divShowMore, i) {
    let glwZdjecie = glowneZdjecieWModalu(divShowMore, i);
    let divWrapper = divDlaGalerii(divShowMore);
    let divWGalerii = divGaleria(divWrapper, divShowMore);
    leftArrow(divWrapper, divWGalerii);
    rightArrow(divWrapper, divWGalerii);
    zdjeciaWGalerii(divWGalerii, i, glwZdjecie);
};

function glowneZdjecieWModalu(divShowMore, i) {
    const createModalImg = document.createElement('img');
    let modalImg = divShowMore.appendChild(createModalImg);
    modalImg.classList.add('description', 'photo-modal');
    modalImg.src = myObj.products[i].gallery[0].pic;
    return modalImg;
};

function divDlaGalerii(divShowMore) {
    const createDivDlaGalerii = document.createElement('div');
    let divWrapper = divShowMore.appendChild(createDivDlaGalerii);
    divWrapper.classList.add('galeria-wrapper');
    return divWrapper;
};

function divGaleria(divWrapper) {
    const createDivWGalerii = document.createElement('div');
    let divWGalerii = divWrapper.appendChild(createDivWGalerii);
    divWGalerii.classList.add('slide');
    return divWGalerii;
};

function leftArrow(divWrapper, divWGalerii) {
    const createArrowL = document.createElement('img');
    let arrowL = divWrapper.appendChild(createArrowL);
    arrowL.classList.add('arrows', 'arrow-l');
    arrowL.src = "../sklep/pictures/icons/left-arrow.png";
    arrowL.onclick = function goLeftGallery() {
        divWGalerii.scrollLeft -= 160;
    }
};

function rightArrow(divWrapper, divWGalerii) {
    const createArrowR = document.createElement('img');
    let arrowR = divWrapper.appendChild(createArrowR);
    arrowR.classList.add('arrows', 'arrow-r');
    arrowR.src= "../sklep/pictures/icons/right-arrow.png";
    arrowR.onclick = function goRightGallery() {
        divWGalerii.scrollLeft += 160;
    }
};

function zdjeciaWGalerii(divWGalerii, i, modalImg) {
    for (let j in myObj.products[i].gallery) {
        const createImgGallery = document.createElement('img')
        let imgGal = divWGalerii.appendChild(createImgGallery);
        imgGal.classList.add('gal');
        imgGal.src = myObj.products[i].gallery[j].pic;
        imgGal.onclick = function showPicAsMain() {
            modalImg.src = myObj.products[i].gallery[j].pic;
            // divWGalerii.map(()=>{
            //     console.log(zdjecie);
            //     zdjecie.remove('active');
            // })
            imgGal.classList.add('active');
        }
    }
};

function nazwaPrzedmiotuWModalu(divShowMore, i) {
    const createPNext = document.createElement('p');
    let PNext = divShowMore.appendChild(createPNext);
    PNext.classList.add('description', 'name-grid');
    PNext.innerHTML = myObj.products[i].name;
};

function opisPrzediomtuWModalu(divShowMore, i, przycisk) {
    cenaWModalu(divShowMore, i);
    kolorWModalu(divShowMore, i);
    materialWModalu(divShowMore, i);
    rozmiarWModalu(divShowMore, i);
    zawartoscWModalu(divShowMore, i);
    dostepnoscWModalu(divShowMore, i, przycisk);
};

function cenaWModalu(divShowMore, i) {
    const createAnotherPNext = document.createElement('p');
    let AnotherPNext = divShowMore.appendChild(createAnotherPNext);
    AnotherPNext.classList.add('description', 'letters-more');
    AnotherPNext.innerHTML = 'price: ' + myObj.products[i].price;
};

function kolorWModalu(divShowMore, i) {
    const createPA = document.createElement('p');
    let pA = divShowMore.appendChild(createPA);
    pA.classList.add('description', 'letters-more');
    pA.innerHTML = 'color: ' + myObj.products[i].color;
};

function materialWModalu(divShowMore, i) {
    const createPB = document.createElement('p');
    let pB = divShowMore.appendChild(createPB);
    pB.classList.add('description', 'letters-more');
    pB.innerHTML = 'material: ' + myObj.products[i].material;
};

function rozmiarWModalu(divShowMore, i) {
    const createPC = document.createElement('p');
    let pC = divShowMore.appendChild(createPC);
    pC.classList.add('description', 'letters-more');
    pC.innerHTML = 'size: ' + myObj.products[i].size;
};

function zawartoscWModalu(divShowMore, i) {
    const createPD = document.createElement('p');
    let pD = divShowMore.appendChild(createPD);
    pD.classList.add('description', 'letters-more');
    pD.innerHTML = 'quantity: ' + myObj.products[i].quantity;
};

function dostepnoscWModalu(divShowMore, i, addModal) {
    const createPE = document.createElement('p');
    let pE = divShowMore.appendChild(createPE);
    pE.classList.add('description', 'letters-more');
    testFunction(myObj.products[i].available === true, addModal, pE);
};

function testFunction(isArgument, addModal, pE) {
    if (isArgument) {
        pE.innerHTML = 'available';
    } else {
        pE.innerHTML = 'not available';
        addModal.classList.add('unavailable');
    }
};

function przyciskAddWModalu(divShowMore, i) {
    const createAddModal = document.createElement('button');
    let addModal = divShowMore.appendChild(createAddModal);
    addModal.classList.add('description', 'add-modal');
    addModal.innerHTML = myObj.products[i].addToCartModal;
    addModal.onclick= (()=>{
        const kupujeTenProdukt = 
        {
            // id: myObj.products[i].id,
            name: myObj.products[i].name, 
            zdjecie: myObj.products[i].gallery[1].pic, 
            cena: myObj.products[i].price
        }
        console.log(kupujeTenProdukt);
        let koszyk = [];
        let dodaj = koszyk.push(kupujeTenProdukt);
        console.log(koszyk);
    })
    return addModal;
};

window.ondragstart = function() { 
    return false; 
};
