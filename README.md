# Pulse Mobile – Static Mobile Shop Website

A modern, animated, mobile-friendly shop website. **No server, no install, no build step** – pure HTML, CSS and JavaScript.

## How to run
1. Unzip the folder.
2. Double-click `index.html` (opens in your browser). That's it.
   *(Optional)* For a local server: `python -m http.server 8000` then open http://localhost:8000

## Folder structure – which file does what
```
pulse-mobile/
├── index.html        Home page: hero, categories, featured products, why-us, stats, reviews, call-to-action
├── shop.html         Shop page: category chips, search, sort, product grid
├── contact.html      Contact page: message form + shop details
├── README.md         This file
├── css/
│   └── style.css     ALL styling. Numbered sections (1 Theme … 14 Responsive). Colours are at the very top.
├── js/
│   ├── config.js     YOUR SHOP INFO: name, WhatsApp number, email, phone, address, hours, currency symbol
│   ├── products.js   YOUR PRODUCTS list + the code that draws device pictures and product cards
│   ├── main.js       Shared on every page: header menu, footer, cart drawer (WhatsApp checkout),
│   │                 scroll animations, number counters, toast message
│   ├── home.js       Home page only: fills the "Hot picks" section
│   ├── shop.js       Shop page only: filtering, search, sorting
│   └── contact.js    Contact page only: shop details + form (opens visitor's email app)
└── images/
    ├── logo.svg      Site logo (shown in header & footer)
    └── favicon.svg   Browser tab icon
```

## Common changes
| I want to…                         | Edit                                                         |
|------------------------------------|--------------------------------------------------------------|
| Change shop name, phone, WhatsApp  | `js/config.js`                                               |
| Add / remove / edit products       | `js/products.js` (copy one line in `PRODUCTS`, change `id`)  |
| Use real product photos            | In `products.js` → `productCard()`, replace `deviceArt(p)` with `<img src="images/yourfile.jpg">` and add `img:"..."` to products |
| Change colours                     | `css/style.css` → section 1 (`--a`, `--b`, `--bg` …)         |
| Change menu links / footer         | `js/main.js` → "Layout" block                                |
| Change home page text              | `index.html`                                                 |
| Change logo                        | Replace `images/logo.svg` and `images/favicon.svg`           |
| Turn animations off                | Automatic for users with "reduce motion"; or remove `.reveal` classes |

## How ordering works
Visitors add items to the cart (saved in their browser) and press **Order on WhatsApp** – a message with the items and total is prepared for your WhatsApp number in `config.js`. No payment gateway is included (static site).

## Notes
- The product names/brands (Nova, Orbit, Zenith, Pulse) and reviews are **sample data** – replace with your own.
- Contact form uses `mailto:`; for a real form backend later, use a service such as Formspree.
