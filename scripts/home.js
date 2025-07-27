import { cart } from '../data/cart.js';
import { products } from '../data/product.js';

const toggle = document.getElementById('hamburger-bar-js');
const navLinks = document.getElementById('nav-links-js');

toggle.addEventListener('click', () => {
 navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
function formatCurrency(priceCents) {
 return (priceCents / 100).toFixed(2);
}

let productsHTML = '';

products.forEach((product) => {
 productsHTML += ` <section class="product-card">
     <img src="${product.image}" class="productImg" />

     <figcaption class="product-name">${product.name}</figcaption>
     <div class="rating">
      <img
       src="/img/ratings/rating-${product.rating.stars * 10}.png"
       alt="ratingStars"
       class="ratingImg"
      />
      <span class="rating-count">${product.rating.count}</span>
     </div>
     <div class="product-price">$${formatCurrency(product.priceCents)}</div>
     <div class="quantity">
      <select name="quantity"  class="js-selector">
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="8">8</option>
       <option value="9">9</option>
       <option value="10">10</option>
      </select>
     </div>
     <button class="add-product add-product-js" data-product-id="${product.id}">
      Add to cart
     </button>
    </section>
  `;
});

document.querySelector('.featured-products').innerHTML = productsHTML;

document.querySelectorAll('.add-product-js').forEach((button) => {
 button.addEventListener('click', () => {
  const productId = button.dataset.productId;

  console.log('User Clicked:', productId);

  /* const quantityInput = button.previousElementSibling;
  const selectedQuantity = parseInt(quantityInput.value) || 1; */

  const existingItem = cart.find((item) => item.productId === productId);
  if (existingItem) {
   existingItem.quantity += 1;
  } else {
   cart.push({
    productId,
    quantity: 1,
   });
  }

  let cartQuantity = 0;
  cart.forEach((item) => {
   cartQuantity += item.quantity;
  });

  document.querySelector('.js-cart-count').innerText = cartQuantity;
 });
});
