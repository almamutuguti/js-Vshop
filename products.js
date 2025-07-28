const productContainer = document.getElementById("product-list");

async function loadProducts() {
    try {
        const response = await fetch("products.json");
        const products = await response.json();

        products.forEach((product) => {
            const card = document.createElement("div");
            card.className = "border p-4 rounded shadow hover:shadow transition";

            card.innerHTML = 
            `
            <img src="${product.image} alt="${product.name}" class="w-full h-40 object-cover mb-2"/>
            <h2 class="font-bold text-lg">${product.name}</h2>
            <p class="text-gray-600">${product.category}</p>
            <p class="text-gray-600 font-semibold">KSH ${product.price}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">Add To Cart</button>
            `;

            const button = card.querySelector("button");
            button.addEventListener("click", () => {
                addToCart(product)
            });

            productContainer.appendChild(card);
        });
    } catch (error) {
        productContainer.innerHTML = "<p>Failed to load products. Check your JSON file and path.</p>";
        console.log("Product loading error:", error)
    }
}

loadProducts();