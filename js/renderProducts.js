const productsContainer = document.querySelector('#products-container');

async function getProducts() {
    const responce = await fetch('./js/products.json');
    console.log(responce)
}

// getProducts()
