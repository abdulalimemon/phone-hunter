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
        // result.slice(0,20);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <div class="card shadow-lg rounded text-center">
                <img src="${result.image}" class="card-img-top py-3 w-75 mx-auto" alt="Image">
                <div class="card-body">
                    <h4 class="card-title">${result.phone_name}</h4>
                    <h5 class="card-title"><span class="fw-bold">Brand</span> ${result.brand}</h5>
                    <button class="Btn btn-danger py-2 px-5 my-2" onclick="loadSingleProduct('${result.slug}')">Details</button>
                </div>
            </div>
        `;
        cardAllProduct.appendChild(div);
    });
}
const loadSingleProduct = product => {
    const url = `https://openapi.programming-hero.com/api/phone/${product}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleProduct(data.data));
}
const displaySingleProduct = singleProduct => {
    const cardSingleProduct = document.getElementById("single-product");
    const div = document.createElement("div");
    div.classList.add("row");
    div.innerHTML = `
        <div class="col-12 col-md-4">
            <div class="text-center">
                <img src="${singleProduct.image}" class="w-75 mx-auto py-4" alt="Image">
            </div>
        </div>
        <div class="col-12 col-md-8">
            <div class="card-body">
                <h4 class="card-title">${singleProduct.name}</h4>
            </div>
        </div>
    `;
    cardSingleProduct.appendChild(div);
}





