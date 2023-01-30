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



/* - - - - Products load- - - - */

let products = []

const productsSection = document.getElementById("products")

fetch("https://hur.webmania.cc/products.json")
    .then(response => response.json())
    .then(data => {
        products = data.products
        console.log(data.products)

        products.forEach(product => {
            productsSection.innerHTML += `
                <div>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <div class=product-image-container>
                        <img src="${product.picture}" alt="">
                    </div>
                    <h3>${product.price.toLocaleString()} Ft</h3>
                    </div>
                    `
            if (product.stock) {
                productsSection.innerHTML += `
                <a id=${product.id} 
                        class="add-to-cart">Kosárba</a>`
            } else {
                productsSection.innerHTML += `Nem rendelhető`

            }
        })



        /* - - - - Cart item counter - - - - */

        const addToCartButtons = document.querySelectorAll(".add-to-cart")

        addToCartButtons.forEach(addToCartButton => {
            addToCartButton.addEventListener("click", addToCart)
        })

    })
    .catch(error => console.error(error))



/* - - - - Cart handle - - - - */

const cart = {}

const addToCart = event => {
    let target = event.target.dataset.id

    if (event.target.id) {
        target = event.target.id
    }


    if (cart[target] === undefined) {
        cart[target] = 1
    } else {
        cart[target]++
    }
}



const refreshCartItems = () => {

    // a cart-items kiürítése, hogy a kattintásokkal a duplikását elkerüljük
    cartItems.innerHTML = ""
    let total = 0



    for (const item in cart) {
        const currentProduct = products.find(product => product.id === item * 1)
        cartItems.innerHTML += `
        <li>
            <div>
                <button class = "plus-button" data-id=${currentProduct.id}>+</button>
                <p>${cart[item]} db</p>
                <p>${currentProduct.name}</p>
                <p>X</p>
                <p>${currentProduct.price} Ft/db</p>
            </div>
            <div><strong>${cart[item] * currentProduct.price} Ft</strong></div>
        </li>
        `
        total += currentProduct.price * cart[item]
    }



    cartItems.innerHTML += `
    <li>
        <p>Összesen:</p> 
        <p>${total.toLocaleString()} Ft</p>
    </li>`

}



/* - - - - Cart items display - - - - */

const cartIcon = document.getElementById("cart-icon")
const cartContainer = document.querySelector(".cart-container")
const cartItems = document.querySelector(".cart-items")

cartItems.addEventListener("click", (event) => {
    addToCart(event)
    refreshCartItems()
})



/* - - - - Cart button toggle - - - - */

const cartContainerToggler = (e) => {
    if (e.target.classList == "fi-shopping-cart" || e.target.classList == "plus-button") {
        cartContainer.classList.add("cart-container-active")
        cartIcon.classList.add("fi-x")
        refreshCartItems()
    } else {
        cartContainer.classList.remove("cart-container-active")
        cartIcon.classList.remove("fi-x")
    }
}
window.addEventListener("click", cartContainerToggler)






/* 
window.addEventListener("click", (e) => {
    console.log(e.target)
})
 */