"use strict"
let order = document.querySelector('.cart__footer-order');
let cartPopup = document.querySelector('.cart-popup__bg');
let close = cartPopup.querySelector('.close');
let counts = document.querySelectorAll('.count');
let minusButtons = document.querySelectorAll('.minus');
let plusButtons = document.querySelectorAll('.plus');

for(let minusButton of minusButtons) {
  minusButton.addEventListener('click', function () {
    let count = minusButton.nextElementSibling;
    let onePrice = minusButton.parentNode.parentNode.parentNode.querySelector('.one-price');
    let totalPrice = minusButton.parentNode.parentNode.parentNode.querySelector('.total-price');
    // let bigTotalPrice = document.querySelector('.cart__footer-total span');
    count.value -= 1;
    // let num = onePrice.textContent.replace(/ /g, '');
    totalPrice.textContent = parseInt(onePrice.textContent) * parseInt(count.value) + ' 000 P';
    if(count.value <= 0) {
      count.value = 0;
      totalPrice.textContent = 0 + ' P'
    }
    // bigTotalPrice.textContent = parseInt(bigTotalPrice.textContent) + parseInt(totalPrice.textContent) - parseInt(onePrice.textContent) + ' 000 P'
  })
}

for(let plusButton of plusButtons) {
  plusButton.addEventListener('click', function () {
    let count = plusButton.previousElementSibling;
    let onePrice = plusButton.parentNode.parentNode.parentNode.querySelector('.one-price');
    let totalPrice = plusButton.parentNode.parentNode.parentNode.querySelector('.total-price');
    // let bigTotalPrice = document.querySelector('.cart__footer-total span');
    count.value = parseInt(count.value) + 1;
    // let num = onePrice.textContent.replace(/ /g, '');
    totalPrice.textContent = parseInt(onePrice.textContent) * parseInt(count.value) + ' 000 P';
    // bigTotalPrice.textContent = parseInt(bigTotalPrice.textContent) + parseInt(totalPrice.textContent) + ' 000 P'
  })
}

order.addEventListener('click', function () {
  cartPopup.classList.add('active');
});
close.addEventListener('click', function () {
  cartPopup.classList.remove('active');
})
