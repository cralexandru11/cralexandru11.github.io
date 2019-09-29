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
const ce = document.querySelector('.ce');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const equal = document.querySelector('.equal');



let flag = false;
let content = '', swap;

// operations

plus.addEventListener('click', () => {
  swap = parseInt(display.innerHTML);
  // content = '+';
  flag = true;
  content = '';

  display.innerHTML = content;
});

equal.addEventListener('click', () => {
  if(flag === true){
    content = parseInt(display.innerHTML);
    display.innerHTML = swap + content;
  }
});









c.addEventListener('click', () => {
  content = '';

  display.innerHTML = content;
});

function validator(nums) {
  if (display.lenght) {
    
  }
}


// numbers
num0.addEventListener('click', () => {
  content += '0';
  
  display.innerHTML = content;
});

num1.addEventListener('click', () => {
    content += '1';
  
  display.innerHTML = content;
});

num2.addEventListener('click', () => {
  content += '2';
  
  display.innerHTML = content;
});

num3.addEventListener('click', () => {
  content += '3';
  
  display.innerHTML = content;
});

num4.addEventListener('click', () => {
  content += '4';
  
  display.innerHTML = content;
});

num5.addEventListener('click', () => {
  content += '5';
  
  display.innerHTML = content;
});

num6.addEventListener('click', () => {
  content += '6';
  
  display.innerHTML = content;
});

num7.addEventListener('click', () => {
  content += '7';
  
  display.innerHTML = content;
});

num8.addEventListener('click', () => {
  content += '8';
  
  display.innerHTML = content;
});

num9.addEventListener('click', () => {
  content += '9';
  
  display.innerHTML = content;
});
