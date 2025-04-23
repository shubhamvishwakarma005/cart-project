
let totalPrice = 0;
let cartCount = 0;


const cartItemsEl = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const cartCountEl = document.getElementById('cart-count');


function countQuantity() {
    
    const button = event.target;
    const productCard = button.closest('.inner-layer');
  
    const name = productCard.querySelector('.prod-name').innerText;
    const price = parseInt(productCard.querySelector('.amount').innerText);

    const li = document.createElement('li');
    li.textContent = `${name} - ₹${price}`;
     
    cartItemsEl.appendChild(li);
 
    totalPrice += price;
    cartCount++;

    totalPriceEl.textContent = totalPrice;
    cartCountEl.textContent = cartCount;
    cartCountEl.classList.remove('hidden');
}


function resetQuantity() {
   
    cartItemsEl.innerHTML = '';

    totalPrice = 0;
    cartCount = 0;

    totalPriceEl.textContent = totalPrice;
    cartCountEl.textContent = cartCount;
    cartCountEl.classList.add('hidden');
}
