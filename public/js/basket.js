// Initialize basket in localStorage if not present
if (!localStorage.getItem('basket')) {
    localStorage.setItem('basket', JSON.stringify([]));
}

// Add a product to the basket
function addToBasket(productName, productPrice) {
    const basket = JSON.parse(localStorage.getItem('basket'));
    basket.push({ name: productName, price: productPrice });
    localStorage.setItem('basket', JSON.stringify(basket));
    updateBasketDisplay();
    alert(`${productName} added to the basket.`);
}

// Remove a product from the basket by index
function removeFromBasket(index) {
    const basket = JSON.parse(localStorage.getItem('basket'));
    basket.splice(index, 1);
    localStorage.setItem('basket', JSON.stringify(basket));
    updateBasketDisplay();
}

// Function to update the basket display
function updateBasketDisplay() {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const basketDisplay = document.getElementById('basket-display');
    const total = basket.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^0-9.-]+/g, "")), 0);
    let html = '<ul>';

    basket.forEach((item, index) => {
        html += `<li>${item.name} - ${item.price} 
            <button onclick="removeFromBasket(${index})">Remove</button></li>`;
    });

    html += `</ul><p>Total: ${total.toFixed(2)} $</p>`;
    basketDisplay.innerHTML = html;
}


// Ensure the basket is updated on page load
document.addEventListener('DOMContentLoaded', updateBasketDisplay);
