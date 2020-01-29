const display = document.querySelector('#display');
const tempDisplay = document.querySelector('#tempDisplay');

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
const backspace = document.querySelector('.backspace');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const equal = document.querySelector('.equal');

const header = document.querySelector('h1');



let flag = '', content = '0', swap;

//startup
display.innerHTML = content;
tempDisplay.innerHTML = '';


//functions
let click = true;
header.addEventListener('click', () =>{
  if (click === true) {
    document.querySelector('.shadow').style.opacity = '0';
    click = false;
  } else if (click === false){
    document.querySelector('.shadow').style.opacity = '1';
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

function tempDisplayShow (){
  if(flag === 'plus'){
    content = parseInt(tempDisplay.innerHTML);
    tempDisplay.innerHTML = swap + content;
  } else if (flag === 'minus') {
    content = parseInt(tempDisplay.innerHTML);
    tempDisplay.innerHTML = swap - content;
  } else if (flag === 'multiply') {
    content = parseInt(tempDisplay.innerHTML);
    tempDisplay.innerHTML = swap * content;
  } else if (flag === 'divide') {
    content = parseInt(tempDisplay.innerHTML);
    tempDisplay.innerHTML = swap / content;
  }

}
//delete first 0
function notNull(nums) {
  //rearange display
  
  document.querySelector('#display').style = 'transform: translateY(0px); opacity: 1; transition: .4s;';
  document.querySelector('#tempDisplay').style = 'transform: translateY(0px); transition: .4s;';

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
  document.querySelector('#display').style = 'transform: translateY(-40px); opacity: 0; transition: .4s;';
  document.querySelector('#tempDisplay').style = 'transform: translateY(-40px); transition: .4s;';
  
});

//clear
c.addEventListener('click', () => {
  content = '0';
  document.querySelector('#display').style = 'transform: translateY(0px); opacity: 1; transition: .4s;';
  document.querySelector('#tempDisplay').style = 'transform: translateY(0px); transition: .4s;';
  tempDisplay.innerHTML = '';

  display.innerHTML = content;
});

//clear all
ce.addEventListener('click', () => {
  content = '0';
  swap = '';
  document.querySelector('#display').style = 'transform: translateY(0px); opacity: 1; transition: .4s;';
  document.querySelector('#tempDisplay').style = 'transform: translateY(0px); transition: .4s;';
  tempDisplay.innerHTML = '';

  display.innerHTML = content;
});

backspace.addEventListener('click', () => {
  content = parseInt(content / 10);


  display.innerHTML = content;
})

// numbers
num0.addEventListener('click', () => {  
  notNull(content);
  content += '0';
  tempDisplay.innerHTML = content;

  display.innerHTML = content;
  tempDisplayShow ();
});

num1.addEventListener('click', () => { 
  notNull(content);
  content += '1';
  tempDisplay.innerHTML = content;
  
  display.innerHTML = content;
  tempDisplayShow ();
});

num2.addEventListener('click', () => {  
  notNull(content);
  content += '2';
  tempDisplay.innerHTML = content;
  
  display.innerHTML = content;
  tempDisplayShow ();
});

num3.addEventListener('click', () => {  
  notNull(content);
  content += '3';
  tempDisplay.innerHTML = content;
  
  display.innerHTML = content;
  tempDisplayShow ();
});

num4.addEventListener('click', () => {  
  notNull(content);
  content += '4';
  tempDisplay.innerHTML = content;
  
  display.innerHTML = content;
  tempDisplayShow ();
});

num5.addEventListener('click', () => {  
  notNull(content);
  content += '5';
  tempDisplay.innerHTML = content;
  
  display.innerHTML = content;
  tempDisplayShow ();
});

num6.addEventListener('click', () => {  
  notNull(content);
  content += '6';
  tempDisplay.innerHTML = content;
  
  display.innerHTML = content;
  tempDisplayShow ();
});

num7.addEventListener('click', () => {  
  notNull(content);
  content += '7';
  tempDisplay.innerHTML = content;
  
  display.innerHTML = content;
  tempDisplayShow ();
});

num8.addEventListener('click', () => {  
  notNull(content);
  content += '8';
  tempDisplay.innerHTML = content;
  
  display.innerHTML = content;
  tempDisplayShow ();
});

num9.addEventListener('click', () => {  
  notNull(content);
  content += '9';
  tempDisplay.innerHTML = content;
  
  display.innerHTML = content;
  tempDisplayShow ();
});
