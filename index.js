//-------------------------------------------Java script homework ------------------------------
// ------------------------------------------Task1----------------------------------------------
// let x = 20;  
// let y = 58;    
// let z = 42;

// console.log(x + y + z);

//------------------------------------------ Task2------------------------------------------------
// { 
// const secInMinute = 60;
// const minInHour = 60;
// const hoursInDay = 24;
// const daysInYear = 365;

// const myAge = 24;

// const myAgeInSeconds = 24*daysInYear*hoursInDay*minInHour*secInMinute;
// console.log(myAgeInSeconds);
// };

// {
// const myBirthDate = new Date(1997, 6, 31, 3);
// const currentDate = new Date();
// const msInSecond = 1000;
// let myAgeInSeconds = (currentDate - myBirthDate)/msInSecond; //My current age in seconds

// const secInMinute = 60;
// const minInHour = 60;
// const hoursInDay = 24;
// const daysInYear = 365;

// let myAge = Math.floor(myAgeInSeconds/secInMinute/minInHour/hoursInDay/daysInYear); //My current age in years
// console.log(myAgeInSeconds);
// console.log(myAge);
// };
//----------------------------------------------Task3--------------------------------------------------------------

// let count = 42; // initially number 
// let string = `${count}`; // string
// let string2 = count.toString(); //string

// let userName = count; //number

// userName = '42'; //string
// let number = Number(userName); //number

//------------------------------------------------Task4-------------------------------------------------------------
// let a = 1;  
// let b = 2;  
// let c = " белых медведей";

// console.log(a+(b+c));

//------------------------------------------------Task5---------------------------------------------------------------
// // let a = "доступ";
// // let b = "морпех";
// // let c = "наледь";
// // let d = "попрек";
// // let e = "рубило";

// // let lengthWords = a.length + b.length + c.length + d.length + e.length; // 30
// var2
// let arr = [a, b, c, d, e];
// let result = arr.map((item) => item = item.length).reduce((sum, item) => sum += item); //30

//-----------------------------------------------Task6----------------------------------------------------------------

// let number = 53;
// let boolean = true;
// let obj = {
//     name: 'object',
//     property: null,
// };

// console.log(`Variable: ${number} have type: ${typeof number}`);
// console.log(`Variable: ${boolean} have type: ${typeof boolean}`);
// console.log(`Variable: ${obj} have type: ${typeof obj}`);

//--------------------------------------------Task7-------------------------------------------------------------------
// let userName = prompt('Name', 'Please enter your name');
// let age = prompt('Age', 'Please enter your age');
// console.log(`User:${userName}, age:${age}`);

//--------------------------------------------Advanced task1-------------------------------------------------------------
// let a = 4;
// let b = 3;

//var1

// [b,a] = [a,b];

//var2

// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a, b);

//--------------------------------------------Advanced task2----------------------------------------------------------------
// let codeWord1 = "обернись";
// let codeWord2 = "неужели";
// let codeWord3 = "огурцы";
// let codeWord4 = "липкие";
// let codeWord5 = "?!"; 

// let cipher = [codeWord1, codeWord2, codeWord3, codeWord4, codeWord5].map((item) => item=item[1]).join('');
// console.log(cipher);
