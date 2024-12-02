document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const resultsList = document.getElementById("search-results");

    // Fetch the search index (search.json)
    fetch("/search/index.json")
        .then((response) => response.json())
        .then((data) => {
            // Initialize Fuse.js
            const options = {
                keys: ["title", "description"], // Fields to search
                threshold: 0.3, // Match threshold
            };
            const fuse = new Fuse(data, options);

            // Search event listener
            searchBox.addEventListener("input", function () {
                const query = searchBox.value.trim();
                const results = fuse.search(query);

                // Clear previous results
                resultsList.innerHTML = "";

                // Display new results
                results.forEach(({ item }) => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        <a href="${item.link}">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            <p><strong>${item.price}</strong></p>
                            <img src="${item.image}" alt="${item.title}" style="max-width: 100px;">
                        </a>
                    `;
                    resultsList.appendChild(li);
                });
            });
        });
});
