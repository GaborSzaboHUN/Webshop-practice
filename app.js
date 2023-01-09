/* - - - - Open / Close hamburger menu - - - - */
const hamburgerMenu = document.getElementById("hamburger-menu")
const nav = document.getElementById("nav")

hamburgerMenu.addEventListener("click", function () {
    nav.classList.toggle("menu-active")
    hamburgerMenu.classList.toggle("fi-x")
})

/* - - - - Insert products - - - - */
const products = [
    {
        id: 14,
        name: "Málna",
        description: "Kézzel szedett egészség",
        picture: "img/pexels-pixabay-326179.jpg",
        price: 3800,
        inStock: true,
    },
    {
        id: 27,
        name: "Áfonya",
        description: "Kézzel szedett egészség",
        picture: "img/pexels-veeterzy-70862.jpg",
        price: 3250,
        inStock: true,
    },
    {
        id: 31,
        name: "Szeder",
        description: "Kézzel szedett egészség",
        picture: "img/pexels-pixabay-257834.jpg",
        price: 1700,
        inStock: true,
        variations: ["fehér", "fekete"]
    },
]

const productsSection = document.getElementById("products")

products.forEach(product => {

    productsSection.innerHTML += `
        <div>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <div class=product-image-container>
                <img src="${product.picture}" alt="">
            </div>
            <h3>${product.price} Ft</h3>
            <a id=${product.id} href="#" class="add-to-cart">Kosárba</a>
        </div>
    `
})

/* - - - - Cart handle - - - - */

const cart = {}

const addToCartButtons = document.querySelectorAll(".add-to-cart")

/* for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function (event) {
        if (cart[event.target.id] === undefined) {
            cart[event.target.id] = 1
        } else {
            cart[event.target.id]++
        }
    })
} */

addToCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener("click", event => {
        if (cart[event.target.id] === undefined) {
            cart[event.target.id] = 1
        } else {
            cart[event.target.id]++
        }
    })
})