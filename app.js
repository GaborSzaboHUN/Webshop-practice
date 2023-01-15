/* - - - - Open / Close hamburger menu - - - - */
const hamburgerMenu = document.getElementById("hamburger-menu")
const nav = document.getElementById("nav")

const hamburgerMenuToggle = (e) => {
    if (e.target.classList == "fi-align-justify") {
        nav.classList.add("menu-active")
        hamburgerMenu.classList.add("fi-x")
    } else {
        nav.classList.remove("menu-active")
        hamburgerMenu.classList.remove("fi-x")
    }
}
window.addEventListener("click", hamburgerMenuToggle)


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
            <a id=${product.id} 
            class="add-to-cart">Kosárba</a>
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
/* - - - - Cart item counter - - - - */
addToCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener("click", event => {
        if (cart[event.target.id] === undefined) {
            cart[event.target.id] = 1
        } else {
            cart[event.target.id]++
        }
    })
})

/* - - - - Cart items display - - - - */
const cartIcon = document.getElementById("cart-icon")
const cartContainer = document.querySelector(".cart-container")

cartIcon.addEventListener("click", () => {

    for (const item in cart) {
        console.log(item, cart[item])
        console.log(products.find(product => product.id === item * 1).name, cart[item])
    }
})

/* - - - - Cart button toggle - - - - */
const cartContainerToggler = (e) => {
    console.log(e.target)
    if (e.target.classList == "fi-shopping-cart") {
        cartContainer.classList.add("cart-container-active")
        cartIcon.classList.add("fi-x")

    } else {
        cartContainer.classList.remove("cart-container-active")
        cartIcon.classList.remove("fi-x")
    }
}
window.addEventListener("click", cartContainerToggler)
