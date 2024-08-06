document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'bayağn 1', price: 100, image: 'sekil1.jpg' },
        { id: 2, name: 'bayağn 2', price: 200, image: 'sekil2.jpg' },
        { id: 3, name: 'bayağn 3', price: 300, image: 'sekil3.jpg' },
        { id: 4, name: 'bayağn 4', price: 150, image: 'sekil4.jpg' },
        { id: 5, name: 'bayağn 5', price: 250, image: 'sekil5.jpg' },
        { id: 6, name: 'bayağn 6', price: 350, image: 'sekil6.jpg' },
        { id: 7, name: 'bayağnl 7', price: 400, image: 'sekil7.jpg' },
        { id: 8, name: 'bayağn 8', price: 500, image: 'sekil8.jpg' },
        { id: 9, name: 'bayağn 9', price: 600, image: 'sekil9.jpg' },
        { id: 10, name: 'bayağn 10', price: 700, image: 'sekil10.jpg' },
        { id: 11, name: 'bayağn 11', price: 800, image: 'sekil11.jpg' },
        { id: 12, name: 'bayağn 12', price: 900, image: 'sekil12.jpg' },
    ];

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button>Hemen Buluş</button>
        `;
        productList.appendChild(productElement);
    });
});