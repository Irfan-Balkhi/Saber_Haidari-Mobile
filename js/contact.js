// Contact form: opens the visitor's email app with the message filled in (no server needed).
document.getElementById("info").innerHTML = `
  <div class="info-card"><span>📍</span><div><b>Address</b><p>${SHOP.address}</p></div></div>
  <div class="info-card"><span>🕒</span><div><b>Opening hours</b><p>${SHOP.hours}</p></div></div>
  <div class="info-card"><span>📞</span><div><b>Phone</b><p>${SHOP.phone}</p></div></div>
  <div class="info-card"><span>✉️</span><div><b>Email</b><p>${SHOP.email}</p></div></div>
  <a class="btn" target="_blank" rel="noopener" href="https://wa.me/${SHOP.whatsapp}">Chat on WhatsApp</a>`;
document.getElementById("form").onsubmit = e => {
  e.preventDefault();
  const f = new FormData(e.target);
  location.href = `mailto:${SHOP.email}?subject=${encodeURIComponent("Message from "+f.get("name"))}&body=${encodeURIComponent(f.get("message")+"\n\nPhone: "+f.get("phone"))}`;
  toast("Opening your email app…");
};
