const searchPhone = () => {
    const searchInput = document.getElementById("search-input");
    const searchInputValue = searchInput.value;



    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResults(data.data));
}

const displaySearchResults = searchResults => {
    console.log(searchResults);

    const cardAllProduct = document.getElementById("all-product");
    searchResults.forEach(result => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <div class="card shadow-lg rounded text-center">
                <img src="${result.image}" class="card-img-top py-3 w-75 mx-auto" alt="Image">
                <div class="card-body">
                    <h4 class="card-title">${result.phone_name}</h4>
                    <h5 class="card-title"><span class="fw-bold">Brand</span> ${result.brand}</h5>
                </div>
            </div>
        `;
        cardAllProduct.appendChild(div);
    });
}