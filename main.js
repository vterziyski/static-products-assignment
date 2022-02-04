const url="https://kea-alt-del.dk/t7/api/products/1528";

//<img src="https://kea-alt-del.dk/t7/images/webp/1000/1526.webp" alt="Big-Cat-Backpack-Black">

fetch(url)
.then (res=>res.json())
.then(data=>showProduct(data));

function showProduct(product){
    console.log(product);
    document.querySelector(".theproduct .brandname").textContent=product.brandname;
    document.querySelector(".theproduct .productname").textContent=product.productdisplayname;
    document.querySelector(".theproduct img").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`
    document.querySelector(".theproduct img").alt=product.productdisplayname;
    document.querySelector(".price").textContent=product.price;
    document.querySelector(".color").textContent=product.colour1;
}