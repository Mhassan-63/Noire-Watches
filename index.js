
// SHOPPING CART

let cart = [];

function addToCart(product) {

    cart.push(product);

    alert(
        product +
        " added to your cart!\nTotal items: " +
        cart.length
    );

}


// NEWSLETTER SUBSCRIPTION

function subscribe(event) {

    event.preventDefault();

    alert("Welcome to the NOIRÉ luxury world!");

    event.target.reset();

}
