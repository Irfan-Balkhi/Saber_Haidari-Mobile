// Shop page: filter chips, search, sort.
const state = { cat:"all", q:"", sort:"featured" };
const cats = [["all","All"],["phone","Phones"],["tablet","Tablets"],["watch","Watches"],["accessory","Accessories"]];
const params = new URLSearchParams(location.search);
if(params.get("cat")) state.cat = params.get("cat");

document.getElementById("chips").innerHTML = cats.map(c=>`<button class="chip ${c[0]===state.cat?"active":""}" data-cat="${c[0]}">${c[1]}</button>`).join("");
function draw(){
  let list = PRODUCTS.filter(p => (state.cat==="all"||p.cat===state.cat) && (p.name+p.brand).toLowerCase().includes(state.q));
  if(state.sort==="low") list.sort((a,b)=>a.price-b.price);
  if(state.sort==="high") list.sort((a,b)=>b.price-a.price);
  document.getElementById("grid").innerHTML = list.map(productCard).join("") || '<p class="empty">No products found.</p>';
  document.getElementById("count").textContent = list.length+" products";
  observe();
}
document.getElementById("chips").onclick = e => { if(!e.target.dataset.cat) return; state.cat=e.target.dataset.cat;
  document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active",c===e.target)); draw(); };
document.getElementById("search").oninput = e => { state.q=e.target.value.toLowerCase(); draw(); };
document.getElementById("sort").onchange = e => { state.sort=e.target.value; draw(); };
draw();
