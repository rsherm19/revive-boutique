const shoppingCartEl = document.getElementById('shopping-cart');
const popupEl = document.getElementById('empty-cart-popup');

const togglePopup = () => {
    popupEl.classList.toggle('toggle')  
};

shoppingCartEl.onclick = togglePopup;