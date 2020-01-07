// class Parent{
//   constructor(status){
//     alert(status);
//   }

//   parent_name = 'Hakim';

//   get_name(name){
//     alert(name);
//   }




// }

// class Child extends Parent{


// }

// let n = new Child();
// alert(n.parent_name);




// function show_name(){
//   function last_name(){
//     alert('how how how');
//   }
//   last_name();
// }


// function sumAll(...args){
//   let sum = 0;
//   for(let arg of args)
//   sum += arg;
//   return sum;
// }
// alert(sumAll(1,2,5))

// let arr = [3, 5 , 1];

// alert( Math.max(arr));
// *************
// let str = 'hello';
// alert([...str]);
// ************
// let str = 'hello';
// alert(Array.from(str));
// *********************
// let name = 'john';
// function sayHi(){
//   alert('hi, ' + name);
// }
// name = 'peter';
// sayHi();
// ***************

// Lexical Environment

// function sayHi(){
//   alert('hello');
// }
// setTimeout(sayHi, 1000)

// setTimeout("alert('hello')", 3000);

// let timerID = setTimeout();

// clearTimeout(timerID);

// **********

// let json = '{bad json}';
// try{
//   let user = JSON.parse(json);
//   alert(user.name);
// } catch (e){
//   alert('alert');
//   alert(e.name);
//   alert(e.message);
// }
// ********************

// document.body.style.background = 'red';
// setTimeout(() => document.body.style.background = 'blue', 1000);

// ******************

// alert(location.href);
// if(confirm('Go to Wikipedia?')){
//   location.href = 'https://wikipedia.org';
// }
// ****************


// for (let elem of document.body.children){
//   if (elem.matches('a[href$="zip"]')){
//     alert('The archive reference: ' + elem.href);
//   }
// }
// *******************

// setInterval(() =>  elem.hidden = !elem.hidden, 1000);


// ****************


// let myVar = setInterval(myTimer, 1000);
// function myTimer(){
//   let day = new Date();
//   let time = day.toLocaleTimeString();
//   document.getElementById('demo').innerHTML = time;
// }
// function myStopFunction(){
//   clearInterval(myVar);
// }
// function myContinueFunction(){
//   setInterval(myTimer, 1000);
// }
// function myStopFunction(){
//   clearInterval(myVar);
// }
// **********************

// function handler1(){
//   alert('Thanks!');
// }
// function handler2(){
//   alert('Thanks again!');
// }

// elem.onclick = () => alert('Hello');
// elem.addEventListener('click', handler1);
// elem.addEventListener('click', handler2);
// *************

// button.onclick = function(event){
//   if(event.altKey && event.shiftKey) {
//     alert('Hooray!');
//     window.open('login.html','_self');
//   }
// }
// **************
// function preview_image(event){
//   let reader = new FileReader();
//   reader.onload = function(){
//     let output = document.getElementById('view_image');
//     output.src = reader.result;
//   };
//   reader.readAsDataURL(event.target.files[0]);
// }
// *******************

// function resizeHeaderOnScroll(){
//   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
//   shrinkOn = 200,
//   headerE1 = document.getElementById('js-header');

//   if (distanceY > shrinkOn){
//     headerE1.classList.add('smaller');
//   } else {
//     headerE1, classList.remove('smaller');
//   }
// }
// window.addEventListener('scroll', resizeHeaderOnScroll);
// ***************