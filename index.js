//------------------------------------Task1-------------------------------------------
// let str = 'true';
// let boolean = false;
// let num = 17;
// let und = undefined;
// let nu = null;
// let arr =[str, boolean, num, und, nu];
// arr.forEach((item)=>console.log(typeof(item)));
//-------------------------------------Task2-------------------------------------------
// let height = 15;
// let width = 20;
// height > width ? console.log(height):console.log(width);
//-------------------------------------Task3--------------------------------------------

// for(let i=1; i<=20; i++) {
//     if(i%3===0) {
//         console.log(i);
//     };
// };

//------------------------------------Task4---------------------------------------------
// let key = true
// let documents = true
// let pen = true
// let apple = false
// let orange = true
// let shouldGoToWork = apple||orange&&key&&documents&&pen;
// console.log(shouldGoToWork);

//------------------------------------Task5---------------------------------------------

// let num = prompt("Enter your number");
// if (num % 3 === 0 && num % 5 === 0) {
//     alert('fizzbuzz');
// } else if ((num % 5) === 0) {
//     alert('buzz');
// } else if ((num % 3) === 0) {
//     alert('fizz');
// } else {
//     alert("It doesn't match any");
// };

//--------------------------------------Task6----------------------------------------------

// let age = prompt('Сколько тебе лет?');
// if(age>=16 && age<18) {
//     alert('Можешь выкурить сигаретку, только маме не говори');
// } else if(age>=18) {
//     alert('Попей пивка');
// } else {
//     alert('Пей колу');
// };

//-------------------------------------Task7------------------------------------------------

// let direction = prompt('Введите своё направление');
// switch(direction) {
//     case 'юг':
//         alert('на юг пойдешь счастье найдешь')
//         break
//     case 'север':
//         alert('на север пойдешь много денег найдешь')
//         break
//     case 'запад':
//         alert('на запад пойдешь верного друга найдешь')
//         break
//     case 'восток':
//         alert('на восток пойдешь разработчиком станешь')
//         break
//     default: 
//         alert('Твоё направление никому не понятно')
// };

//-----------------------------------Advanced task1----------------------------------------------

// let str = 'пОлИнА нАбЕрЕжНаЯ';
// function sayHello(string) {
//     let arr = string.toLowerCase().split(' ');
//     let result = arr.map((el) => {
//         return el[0].toUpperCase() + el.slice(1);
//     }).join(' ');
//     return `Привет, ${result}!`;
// }

// alert(sayHello(str))

//----------------------------------Advanced task2-----------------------------------------------
// const num = prompt("Введите число");

// let result = ((((num 
//     - +prompt('Какое число отнять?'))
//     + +prompt("Какое число прибавить?"))
//     * +prompt("На какое число умножить?"))
//     / +prompt("На какое число разделить?"));

// alert(`Результат равен ${Math.round(result)}`);

//---------------------------------Advanced task3------------------------------------------------
// for(let i = 0; i<=6; i++) {
//     let str = ""
//     console.log(str='#'.repeat(i));
// };

//---------------------------------Extra task CW----------------------------------------------------
// const str = "Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@";
// function stringClean(s) {

//     let arr = s.split('');

//     let newStr = arr.filter((item) => {
//         let regex = /[\D\s]/;
//         let bool = regex.test(item);
//         return bool;
//     }).join('');

//     return newStr;
// }
// console.log(stringClean(str));

//----------------------------------Other CW solutions-----------------------------------------------
//https://www.codewars.com/users/IgorSlepenkov/completed_solutions