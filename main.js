const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const discount = urlParams.get("discount");

console.log(urlParams);

const url="https://kea-alt-del.dk/t7/api/products/" + id;

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
    document.querySelector(".color").textContent=product.basecolour;
    document.querySelector(".theproduct .discount").textContent = product.discount;
    document.querySelector(".price-now").textContent = Math.floor(
        product.price - product.price * (product.discount / 100)
      );
    

    if(product.soldout) {
        document.querySelector(".descriptionofitem").classList.add("soldout");
        document.querySelector(".theproduct img").classList.add("soldout");
        document.querySelector(".product-info").classList.add("soldout");
    }
    if (product.discount) {
        document.querySelector(".descriptionofitem").classList.add("onsale");
    }
}