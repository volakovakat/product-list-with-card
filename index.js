const btnAddToCart = document.querySelectorAll('.js-add-to-cart');
let numberOfItemsInCart = document.querySelector('.js-number-of-items-in-cart');
numberOfItemsInCart.textContent = 0;

let currentNumberOfItems = 0;

const updateCart = () => {
  btnAddToCart.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentNumberOfItems += 1;
      numberOfItemsInCart.textContent = currentNumberOfItems;
      console.log('Current number of items in cart:', currentNumberOfItems);
    });
  });
};

updateCart();
