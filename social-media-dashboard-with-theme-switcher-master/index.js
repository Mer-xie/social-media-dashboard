
// document.getElementById("toggleButton").addEventListener("toggle", toggleBackground);

// function toggleBackground(){
//    document.getElementById("togglButton").classList.add('bg-light');
// }

// i could've ran mad honestly i forgot i could select and make everything more specific after writing how many lines of code thank God I remembered sha cause omo

const body = document.querySelector('body');
const header = document.querySelector('header');
const toggle = document.getElementById('toggle');
const box = document.getElementById('box');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const num = document.getElementById('num');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const second = document.getElementById('second');

toggle.onclick = function(){
   toggle.classList.toggle('active');
   body.classList.toggle('active');
   header.classList.toggle('active');
   box.classList.toggle('active');
   box2.classList.toggle('active');
   box3.classList.toggle('active');
   box4.classList.toggle('active');
   num.classList.toggle('active');
   num1.classList.toggle('active');  
   num2.classList.toggle('active');
   num3.classList.toggle('active');
   num4.classList.toggle('active');
   num5.classList.toggle('active');
   second.classList.toggle('active');
}

