const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
const category = urlParams.get("category");

/* if */
document.querySelector(".brand-name").textContent = brandname;
console.log(urlParams);

const url = "https://kea-alt-del.dk/t7/api/products?brandname=" + brandname;

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductlist(data));

function handleProductlist(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#product-template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".description h3").textContent =
    product.productdisplayname;
  copy.querySelector("a").setAttribute("href", `product.html?id=${product.id}`);
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    copy.querySelector("section").classList.add("soldout");
  }
  if (product.discount) {
    copy.querySelector("section").classList.add("onsale");
  }

  copy.querySelector(".price-now").textContent = Math.floor(
    product.price - product.price * (product.discount / 100)
  );
  copy.querySelector(".discount").textContent = product.discount;

  const parent = document.querySelector("main");
  parent.appendChild(copy);

}
