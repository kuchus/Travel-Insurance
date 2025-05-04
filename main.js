const products = document.querySelector(".header__click-product")
const listProduct = document.querySelector(".header__products-off")

const people = document.querySelector(".header__num-people")
const listPeople = document.querySelector(".header__set-num-off")

products.onclick = () => {
    listProduct.classList.toggle("header__products-on")
}
people.onclick = () => {
    listPeople.classList.toggle("header__set-num-on")
}

const up3Minus = document.querySelector(".header__up3-minus")
const up3Plus = document.querySelector(".header__up3-plus")
const up3 = document.querySelector(".header__up3")

const childrenMinus = document.querySelector(".header__children-minus")
const childrenPlus = document.querySelector(".header__children-plus")
const children = document.querySelector(".header__children")

const up69Minus = document.querySelector(".header__up69-minus")
const up69Plus = document.querySelector(".header__up69-plus")
const up69 = document.querySelector(".header__up69")

const up79Minus = document.querySelector(".header__up79-minus")
const up79Plus = document.querySelector(".header__up79-plus")
const up79 = document.querySelector(".header__up79")

up3Minus.onclick = () => {
    if(up3.textContent > 0) {
        up3.textContent = Number(up3.textContent) - 1;    
    }
}
up3Plus.onclick = () => {
    if(up3.textContent < 5) {
        up3.textContent = Number(up3.textContent) + 1;    
    }
}
childrenMinus.onclick = () => {
    if(children.textContent > 0) {
        children.textContent = Number(children.textContent) - 1;    
    }
}
childrenPlus.onclick = () => {
    if(children.textContent < 5) {
        children.textContent = Number(children.textContent) + 1;    
    }
}
up69Minus.onclick = () => {
    if(up69.textContent > 0) {
        up69.textContent = Number(up69.textContent) - 1;    
    }
}
up69Plus.onclick = () => {
    if(up69.textContent < 5) {
        up69.textContent = Number(up69.textContent) + 1;    
    }
}
up79Minus.onclick = () => {
    if(up79.textContent > 0) {
        up79.textContent = Number(up79.textContent) - 1;    
    }
}
up79Plus.onclick = () => {
    if(up79.textContent < 5) {
        up79.textContent = Number(up79.textContent) + 1;    
    }
}

const footProducts = document.querySelector(".footer__title-products")
const footProductsList = document.querySelector(".footer__products-list")

const footInfo = document.querySelector(".footer__title-info")
const footInfoList = document.querySelector(".footer__info-list")

const footDocuments = document.querySelector(".footer__title-documents")
const footDocumentsList = document.querySelector(".footer__documents-list")

footProducts.onclick = () => {
    footProductsList.classList.toggle("footer__products-list-on")
    footProducts.classList.toggle("footer__title-products-on")
}
footInfo.onclick = () => {
    footInfoList.classList.toggle("footer__info-list-on")
    footInfo.classList.toggle("footer__title-info-on")
}
footDocuments.onclick = () => {
    footDocumentsList.classList.toggle("footer__documents-list-on")
    footDocuments.classList.toggle("footer__title-documents-on")
}