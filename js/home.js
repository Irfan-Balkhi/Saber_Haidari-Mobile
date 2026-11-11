// Home page: featured products + category tiles.
document.getElementById("featured").innerHTML = PRODUCTS.filter(p=>p.badge).slice(0,4).map(productCard).join("");
observe();
