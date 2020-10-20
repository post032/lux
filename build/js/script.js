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

if (innerWidth < 769) {
  let minMenuElements = document.querySelectorAll('.menu-min .menu-inner__title');
  let footerMenuTitles = document.querySelectorAll('.footer .fourColumns li .title');
  let burgerMenu = document.querySelector('.top .menu .burger');

  for (let footerMenuTitle of footerMenuTitles) {
    footerMenuTitle.addEventListener('click', function(e) {
      e.preventDefault();
      let parentMenu = footerMenuTitle.parentNode;
      parentMenu.classList.toggle('show');
    });
  }
  for (let minMenuElement of minMenuElements) {
    minMenuElement.addEventListener('click', function(e) {
      if(minMenuElement.nextElementSibling) {
        e.preventDefault();
        let parentMenuItem = minMenuElement.parentNode;
        parentMenuItem.classList.toggle('active');
      }
    });
  }

  burgerMenu.addEventListener('click', function(e) {
    e.preventDefault();
    burgerMenu.nextElementSibling.classList.toggle('active');
  })
}
if (innerWidth < 961) {
  let mobilePhone = document.querySelector('.mobile-phone');
  console.log(mobilePhone);
  mobilePhone.addEventListener('click', function (e) {
    e.preventDefault();
    mobilePhone.nextElementSibling.classList.toggle('active');
    console.log(mobilePhone.nextElementSibling);
  });
}
