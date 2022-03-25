const url="http://vaskommd.com/first-wp-website/wordpress/wp-json/wp/v2/posts";

fetch(url)
.then (res=>res.json())
.then(data=>handleProductlist(data));


function handleProductlist(data){
    data.forEach(showPost);
    
}

function showPost(brand) {
    const template = document.querySelector(".brands-templ").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".letters ul li a").textContent=brand.brandname;
    copy.querySelector("a").setAttribute("href", `productlist.html?brandname=${brand.brandname}`);
    

    const parent = document.querySelector("main");
    parent.appendChild(copy);
}
