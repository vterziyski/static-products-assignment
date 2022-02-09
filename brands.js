const url="https://kea-alt-del.dk/t7/api/brands";

fetch(url)
.then (res=>res.json())
.then(data=>handleProductlist(data));


function handleProductlist(data){
    data.forEach(showBrand);
}

function showBrand(brand) {
    const template = document.querySelector(".brands-templ").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".letters ul li a").textContent=brand.brandname;
    copy.querySelector("a").setAttribute("href", `productlist.html?brandname=${brand.brandname}`);
    

    const parent = document.querySelector("main");
    parent.appendChild(copy);
}

