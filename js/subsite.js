"use strict"

let koszyk;
let suma = 0;
// console.log(koszyk);

checkIfCartIsEmpty();

function checkIfCartIsEmpty() {
    koszyk = JSON.parse(localStorage.getItem("koszyk"));
    document.getElementById('my-items-box').innerHTML = '';
    if (koszyk.length == 0 || koszyk == null) {
        const createYourCartIsEmpty = document.createElement('p');
        let yourCartIsEmpty = document.getElementById('my-items-box').appendChild(createYourCartIsEmpty);
        yourCartIsEmpty.classList.add('your-cart-is-empty');
        yourCartIsEmpty.innerHTML = 'Your cart is empty';
        let wynik = document.getElementById('total');
        wynik.innerText = '0.00zł';
    } else {
        displayMyProducts();
    }
};

function displayMyProducts() {
    for (let i in koszyk) {
        const createDivForProduct = document.createElement('div');
        let divForProduct = document.getElementById('my-items-box').appendChild(createDivForProduct);
        divForProduct.classList.add('div-for-product');
        pictureProduct(divForProduct, i);
        nameProduct(divForProduct, i);
        priceProduct(divForProduct, i);
        multiplySign(divForProduct, i);
        inputForCount(divForProduct, i);
        totalCount(i);
        deleteFromCartBtn(divForProduct, i);
    }
};

function totalCount(i) {
   if (koszyk.length != 0 || koszyk != null) {
        let mnozenie = +(koszyk[i].count * koszyk[i].price).toFixed(2);
        // console.log(mnozenie, typeof mnozenie);
        suma += mnozenie;
        let wynik = document.getElementById('total');
        wynik.innerText = suma.toFixed(2) + 'zł';
   }
};

window.onscroll = function addStickyBacground() {
    const stickyBackground = document.getElementById('sticky-background');
  if (document.body.scrollTop > 40)
    {
   stickyBackground.classList.add('sticky-background-visible');
    } else {
    stickyBackground.classList.remove('sticky-background-visible');
  }
};

function pictureProduct(divForProduct, i) {
    const createPictureProduct = document.createElement('img');
    let pictureProduct = divForProduct.appendChild(createPictureProduct);
    pictureProduct.classList.add('picture-product');
    pictureProduct.src = koszyk[i].picture;
};

function nameProduct(divForProduct, i) {
    const createNameProduct = document.createElement('p');
    let nameProduct = divForProduct.appendChild(createNameProduct);
    nameProduct.classList.add('name-product');
    nameProduct.innerHTML = koszyk[i].name;
};

function priceProduct(divForProduct, i) {
    const createPriceProduct = document.createElement('p');
    let priceProduct = divForProduct.appendChild(createPriceProduct);
    priceProduct.classList.add('price-product');
    priceProduct.innerHTML = koszyk[i].price.toFixed(2) + 'zł';
};

function multiplySign(divForProduct, i) {
    const createMultiplySign = document.createElement('p');
    let multiplySign = divForProduct.appendChild(createMultiplySign);
    multiplySign.classList.add('multiply-sign');
    multiplySign.innerHTML = '&#10005;';
};

function inputForCount(divForProduct, i) {
    const createInputForCount = document.createElement('input');
    let inputForCount = divForProduct.appendChild(createInputForCount);
    inputForCount.classList.add('input-for-count');
    inputForCount.type = 'number';
    inputForCount.value = koszyk[i].count;
};

function deleteFromCartBtn(divForProduct, i) {
    const createDeleteFromCartBtn = document.createElement('button');
    let deleteFromCartBtn = divForProduct.appendChild(createDeleteFromCartBtn);
    deleteFromCartBtn.classList.add('delete-from-cart-btn');
    deleteFromCartBtn.innerHTML = '&#10005;';
    console.log(koszyk);
    deleteFromCartBtn.onclick = function() {
        console.log(i);
        koszyk.splice(i, 1);
        console.log(koszyk);
        if (koszyk.length == 0) {
            const createYourCartIsEmpty = document.createElement('p');
            let yourCartIsEmpty = document.getElementById('my-items-box').appendChild(createYourCartIsEmpty);
            yourCartIsEmpty.classList.add('your-cart-is-empty');
            yourCartIsEmpty.innerHTML = 'Your cart is empty';
        }
        localStorage.setItem("koszyk", JSON.stringify(koszyk));
        checkIfCartIsEmpty();
    }
};

window.ondragstart = function() { 
    return false;
};