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



let flag = '';
let content = '', swap;

// operations

plus.addEventListener('click', () => {
  swap = parseInt(display.innerHTML);
  flag = 'plus';
  content = '';

  display.innerHTML = content;
});

minus.addEventListener('click', () => {
  swap = parseInt(display.innerHTML);
  flag = 'minus';
  content = '';

  display.innerHTML = content;
});

multiply.addEventListener('click', () => {
  swap = parseInt(display.innerHTML);
  flag = 'multiply';
  content = '';

  display.innerHTML = content;
});

divide.addEventListener('click', () => {
  swap = parseInt(display.innerHTML);
  flag = 'divide';
  content = '';

  display.innerHTML = content;
});


equal.addEventListener('click', () => {
  process();
});

c.addEventListener('click', () => {
  content = '';

  display.innerHTML = content;
});

//functions

function process() {
  if(flag === 'plus'){
    content = parseInt(display.innerHTML);
    display.innerHTML = swap + content;
    flag = '';
    swap = '';
    content = '';
  } else if (flag === 'minus') {
    content = parseInt(display.innerHTML);
    display.innerHTML = swap - content;
    flag = '';
    swap = '';
    content = '';
  } else if (flag === 'multiply') {
    content = parseInt(display.innerHTML);
    display.innerHTML = swap * content;
    flag = '';
    swap = '';
    content = '';
  } else if (flag === 'divide') {
    content = parseInt(display.innerHTML);
    display.innerHTML = swap / content;
    flag = '';
    swap = '';
    content = '';
  }
}

function validator(nums) {
  if (display.lenght) {
    
  }
}


// numbers
num0.addEventListener('click', () => {
  content += '0';
  
  display.innerHTML = content;
  process();
});

num1.addEventListener('click', () => {
    content += '1';
  
  display.innerHTML = content;
  process();
});

num2.addEventListener('click', () => {
  content += '2';
  
  display.innerHTML = content;
  process();
});

num3.addEventListener('click', () => {
  content += '3';
  
  display.innerHTML = content;
  process();
});

num4.addEventListener('click', () => {
  content += '4';
  
  display.innerHTML = content;
  process();
});

num5.addEventListener('click', () => {
  content += '5';
  
  display.innerHTML = content;
  process();
});

num6.addEventListener('click', () => {
  content += '6';
  
  display.innerHTML = content;
  process();
});

num7.addEventListener('click', () => {
  content += '7';
  
  display.innerHTML = content;
  process();
});

num8.addEventListener('click', () => {
  content += '8';
  
  display.innerHTML = content;
  process();
});

num9.addEventListener('click', () => {
  content += '9';
  
  display.innerHTML = content;
  process();
});
