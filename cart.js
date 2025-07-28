const CART_KEY = "vshop-cart";

function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];

}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));

}

function addToCart(product) {
    const cart = getCart();
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    saveCart(cart);
    updateCartCount();
    showToast(`${product.name} added to cart`);
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) cartCountElement.textContent = count;
}

function showToast(message) {
    alert(message);
}

