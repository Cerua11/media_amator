
let currentProducts = products;
const productsSection = document.querySelector(".products");
let categories = new Set();

const renderProducts = (items) => {
    productsSection.innerHTML = "";
    for(let i = 0; i < items.length; i++){
        const newProduct = document.createElement('div');
        newProduct.className=`product-item ${items[i].sale ? "on-sale" : ""}`;
        newProduct.innerHTML =`
        <img src="${items[i].image}"alt="">
        <p class="product-title">${items[i].name}</p>
        <p class="product-description">${items[i].description}</p>
        <div class="product-price">
            <span class="price">${(items[i].price).toFixed(2)} zł</span>
            <span class="price-sale" >${(items[i].price - items[i].saleAmount).toFixed(2)} zł</span>
        </div>
        
        <button>Dodaj do koszyka</button>
        <div class="product-item-sale-info">Promocja</div>
    `;
    productsSection.appendChild(newProduct);
    }
    

};
const renderCategories = (items) =>{
    for(let i = 0; i<items.length; i++){
        categories.add(items[i].category);

    }
    const categoriesItems = document.querySelector(".categories-button");
    console.log(categories);
    categories = ["wszystkie", ...categories];
    console.log(categories);
    categories.forEach((category, index) =>{
        const newCategory = document.createElement('button');
        newCategory.innerHTML = category;
        newCategory.dataset.category = category
        index === 0 ? newCategory.classList.add("active") : "";
    

        categoriesItems.appendChild(newCategory);
    });
};



/*
<button class="active">wszystkie</button>
                <button>iphone</button>
                <button>huawei</button>
                <button>nokia</button>
                <button>samsung</button>
*/

document.onload = renderProducts(currentProducts);
document.onload = renderCategories(currentProducts)

const categoriesButtons = document.querySelectorAll(".categories-button button");

categoriesButtons.forEach(btn => btn.addEventListener("click", (e) => {
   const category = e.target.dataset.category;

   currentProducts = products;

    if(category === "wszystkie"){
        currentProducts = products;
    } else{
        currentProducts = currentProducts.filter(
            (product) => product.category === category);
        
            console.log(currentProducts)
    
    renderProducts(currentProducts);
        }
    })
);