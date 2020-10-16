"use strict"

let menuCatalog = document.querySelector('.top .menu ul li a');
let menuInner = document.querySelector('.menu-inner');
let body = document.querySelector('body');

menuCatalog.addEventListener('mouseenter', function(e) {
  e.preventDefault();
  menuInner.classList.add('active');
  e.target.classList.add('active');
})

menuInner.addEventListener('mouseleave', function(e) {
  e.preventDefault();
  menuInner.classList.remove('active');
  menuCatalog.classList.remove('active');
})
