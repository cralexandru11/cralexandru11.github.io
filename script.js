const display = document.querySelector('#display');
const num0 = document.querySelector('.num0');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');
const num7 = document.querySelector('.num7');
const num8 = document.querySelector('.num8');
const num9 = document.querySelector('.num9');
const c = document.querySelector('.c');

function validator(nums) {
  if (display.lenght) {
    
  }
}


num0.addEventListener('click', () => {
  display.innerHTML += 0;
});

num1.addEventListener('click', () => {
    display.innerHTML += 1;
});

num2.addEventListener('click', () => {
  display.innerHTML += 2;
});

num3.addEventListener('click', () => {
  display.innerHTML += 3;
});

num4.addEventListener('click', () => {
  display.innerHTML += 4;
});

num5.addEventListener('click', () => {
  display.innerHTML += 5;
});

num6.addEventListener('click', () => {
  display.innerHTML += 6;
});

num7.addEventListener('click', () => {
  display.innerHTML += 7;
});

num8.addEventListener('click', () => {
  display.innerHTML += 8;
});

num9.addEventListener('click', () => {
  display.innerHTML += 9;
});


c.addEventListener('click', () => {
  display.innerHTML = '';
});
