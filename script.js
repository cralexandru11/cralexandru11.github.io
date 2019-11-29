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

const header = document.querySelector('h1');


let flag = '', content = '0', swap;

//startup
display.innerHTML = content;


//functions
let click = true;
header.addEventListener('click', () =>{
  if (click === true) {
    document.querySelector('.buttons').style.opacity = '0';
    document.querySelector('#display').style.opacity = '0';
    click = false;
  } else if (click === false){
    document.querySelector('.buttons').style.opacity = '1';
    document.querySelector('#display').style.opacity = '1';
    click = true;
  }
  
})

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
//delete first 0
function notNull(nums) {
  if (parseInt(nums) === 0) {
    content = '';
    display.innerHTML = content;
  }
}

//prewie


// operations

//plus
plus.addEventListener('click', () => {
  swap = parseInt(display.innerHTML);
  flag = 'plus';
  content = '';

  display.innerHTML = content;
});

//minus
minus.addEventListener('click', () => {
  swap = parseInt(display.innerHTML);
  flag = 'minus';
  content = '';

  display.innerHTML = content;
});

//multiply
multiply.addEventListener('click', () => {
  swap = parseInt(display.innerHTML);
  flag = 'multiply';
  content = '';

  display.innerHTML = content;
});

//divide
divide.addEventListener('click', () => {
  swap = parseInt(display.innerHTML);
  flag = 'divide';
  content = '';

  display.innerHTML = content;
});

//equal
equal.addEventListener('click', () => {
  process();
});

//clear
c.addEventListener('click', () => {
  content = '0';

  display.innerHTML = content;
});

//clear all
ce.addEventListener('click', () => {
  content = '0';
  swap = '';

  display.innerHTML = content;
});

// numbers
num0.addEventListener('click', () => {  
  notNull(content);
  content += '0';

  display.innerHTML = content;
});

num1.addEventListener('click', () => { 
  notNull(content);
  content += '1';
  
  display.innerHTML = content;
});

num2.addEventListener('click', () => {  
  notNull(content);
  content += '2';
  
  display.innerHTML = content;
});

num3.addEventListener('click', () => {  
  notNull(content);
  content += '3';
  
  display.innerHTML = content;
});

num4.addEventListener('click', () => {  
  notNull(content);
  content += '4';
  
  display.innerHTML = content;
});

num5.addEventListener('click', () => {  
  notNull(content);
  content += '5';
  
  display.innerHTML = content;
});

num6.addEventListener('click', () => {  
  notNull(content);
  content += '6';
  
  display.innerHTML = content;
});

num7.addEventListener('click', () => {  
  notNull(content);
  content += '7';
  
  display.innerHTML = content;
});

num8.addEventListener('click', () => {  
  notNull(content);
  content += '8';
  
  display.innerHTML = content;
});

num9.addEventListener('click', () => {  
  notNull(content);
  content += '9';
  
  display.innerHTML = content;
});
