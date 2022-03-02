// targeting input field
const searchPhone = () => {
    const searchInput = document.getElementById("search-input");
    const searchInputValue = searchInput.value;

    // clear Data
    searchInput.value = "";
    // No product found message (h2 tag) 
    const message = document.getElementById("message");
    if (searchInputValue == "") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResults(data.data));
    }
}

const displaySearchResults = searchResults => {
    // console.log(searchResults);

    // targeting card div
    const cardAllProduct = document.getElementById("all-product");
    // clear Data 
    cardAllProduct.textContent ="";
    // No product found message (h2 tag)
    const message = document.getElementById("message");
    if(searchResults.length == 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
        searchResults.forEach(result => {
            // result.slice(0,20);
            // all product card
            const div = document.createElement("div");
            div.classList.add("col");
            div.innerHTML = `
                <div class="card shadow-lg rounded text-center">
                    <img src="${result.image}" class="card-img-top py-3 w-50 mx-auto" alt="Image">
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
}
const loadSingleProduct = product => {
    const url = `https://openapi.programming-hero.com/api/phone/${product}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleProduct(data.data));
}
const displaySingleProduct = singleProduct => {
    const cardSingleProduct = document.getElementById("single-product");
    // clear data
    cardSingleProduct.textContent ="";
    // Single Product details card
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
                <h3 class="card-title">${singleProduct.name}</h3>
                <h5 class="card-title">Release Date: ${singleProduct.releaseDate ? singleProduct.releaseDate : 'Information Not Available' }</h5>
                <h4 class="card-title">Main Features</h4>
                <p class="card-title"> Storage : ${singleProduct.mainFeatures.storage ? singleProduct.mainFeatures.storage : 'Information Not Available' } </p>
                <p class="card-title"> Display Size : ${singleProduct.mainFeatures.displaySize ? singleProduct.mainFeatures.displaySize : 'Information Not Available' } </p>
                <p class="card-title"> ChipSet : ${singleProduct.mainFeatures.chipSet ? singleProduct.mainFeatures.chipSet : 'Information Not Available' } </p>
                <p class="card-title"> Memoey : ${singleProduct.mainFeatures.memory ? singleProduct.mainFeatures.memory : 'Information Not Available' } </p>

                <h4 class="card-title">Sensors</h4>
                <p class="card-title"> Sensors : ${ Object.values(singleProduct.mainFeatures.sensors) ? Object.values(singleProduct.mainFeatures.sensors) : 'Information Not Available' } </p>


                <p class="card-title">Release Date: ${singleProduct.others.Bluetooth}</p>
            </div>
        </div>
    `;
    cardSingleProduct.appendChild(div);


}




