import { cart } from '../data/cart.js';
import { products } from '../data/product.js';
import { formatCurrency } from './utils/formatCurrency.js';

let shopContainer = '';

cart.forEach((cartItem) => {
 const productId = cartItem.productId;

 let matchingProduct;

 products.forEach((product) => {
  if (product.id === productId) {
   matchingProduct = product;
  }
 });

 shopContainer = `
 <section class="cart-item-container js-cart-item-container-${
  matchingProduct.id
 }">
      <h3 class="delivery-date">Delivery date : </h3>

      <div class="cart-item-details">
        <img class="productImg" src="${matchingProduct.image}" />
        <figcaption class="caption">${matchingProduct.name}</figcaption>
        <p class="product-price">$${formatCurrency(
         matchingProduct.priceCents
        )}</p>

        <div class="js-quantity-container product-quantity">
          Quantity:
          <span class="js-quantity-label quantity-label">${
           cartItem.quantity
          }</span>
          <input class="js-new-quantity-input new-quantity-input" type="number" value="0" />
          <button class="js-update-quantity-link quantity-link">Update</button>
          <button class="js-save-quantity-link quantity-link">Save</button>
          <button class="js-delete-quantity-link quantity-link js-delete-link" data-product-id="${
           matchingProduct.id
          }">Delete</button>
        </div>
      </div>

      <section class="delivery-options">
        <h2 class="delivery-options-title">Choose a delivery option:</h2>
        matchingProduct, item
      </section>
    </section>
    
      <div class="js-delivery-option delivery-option"
        data-product-id="good"
        data-delivery-option-id="option.id">
        <input
          class="delivery-option-input"
          name="delivery-option-"
          type="radio"
         
        />
        <div>
          <div class="delivery-option-date">dateString</div>
          <div class="delivery-option-price">priceString</div>
        </div>
      </div>

      <div class="cart-item-details">
        <img class="productImg" src="${matchingProduct.image}" />
        <figcaption class="caption">${matchingProduct.name}</figcaption>
        <p class="product-price">$${formatCurrency(
         matchingProduct.priceCents
        )}</p>

        <div class="js-quantity-container product-quantity">
          Quantity:
          <span class="js-quantity-label quantity-label">${
           cartItem.quantity
          }</span>
          <input class="js-new-quantity-input new-quantity-input" type="number" value="0" />
          <button class="js-update-quantity-link quantity-link">Update</button>
          <button class="js-save-quantity-link quantity-link">Save</button>
          <button class="js-delete-quantity-link quantity-link js-delete-link" data-product-id="${
           matchingProduct.id
          }">Delete</button>
        </div>
      </div>

      <section class="delivery-options">
        <h2 class="delivery-options-title">Choose a delivery option:</h2>
        matchingProduct, item
      </section>
    </section>
    
      <div class="js-delivery-option delivery-option"
        data-product-id="good"
        data-delivery-option-id="option.id">
        <input
          class="delivery-option-input"
          name="delivery-option-"
          type="radio"
         
        />
        <div>
          <div class="delivery-option-date">dateString</div>
          <div class="delivery-option-price">priceString</div>
        </div>
      </div>
    
    
    `;
});

document.querySelector('.js-cart-items').innerHTML = shopContainer;
