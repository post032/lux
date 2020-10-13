"use strict"

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var open1 = document.getElementById('open1');
var open2 = document.getElementById('open2');
var open3 = document.getElementById('open3');

button1.addEventListener('click', function(e){
  e.preventDefault();
  open1.classList.toggle('content__toggle');
});

button2.addEventListener('click', function(e){
  e.preventDefault();
  open2.classList.toggle('content__toggle');
});

button3.addEventListener('click', function(e){
  e.preventDefault();
  open3.classList.toggle('content__toggle');
});
