// Function to filter products based on selected theme
function filterProducts() {
    const filterValue = document.getElementById('theme-filter').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const tags = product.getAttribute('data-tags').toLowerCase().split(',');
        if (filterValue === "" || tags.includes(filterValue)) {
            product.style.display = "block"; // Show product
        } else {
            product.style.display = "none"; // Hide product
        }
    });
}
