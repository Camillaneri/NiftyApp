var start = new Date();

var btn = document.querySelector('#twofuns');
btn.addEventListener('click',method1);
btn.addEventListener('click',method2);
function method2(){
  console.log("Method 2");
}

console.log('Start time: ' + start);