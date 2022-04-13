//=================================Task 1======================================
// const sum = (num)=>{
//     let sum=0;
//     for(let i = 0; i<=num; i++){
//         sum+=i;
//     };
//     return sum;
// };
// console.log(sum(100));

//================================Task2========================================
// const loanOverpayment = (loanSum, percentsPerYear, years) =>{
//     return (((loanSum*percentsPerYear)/100)*years);
// };
// console.log(loanOverpayment(5000, 17, 5)) //4250

//===============================Task3=========================================
// const trimString =(string, start, end) =>{
//     return string.substring(start, end+1);
// };
// const str = 'Can you hel me?';
// console.log(trimString(str, 0, 6)); //Can you

//===============================Task4=========================================
// const getSumNumbers = (number) => {
//     return number.toString().split('').map((item)=>+item).reduce( (sum, current) => sum + current, 0);
// };

// console.log(getSumNumbers(2021)); //5

//===============================Task5============================================

// const getSum = (a, b) =>{
//     const getRes = (start, end) => {
//         let sum=0;
//         for(let i = start; i<=end; i++) {
//             sum+=i;
//         };
//         return sum;
//     };

//     if(a===b) {
//         return a;
//     }else if(a>b) {
//         return getRes(b, a);
//     }else {
//         return getRes(a, b);
//     };
// };

// console.log(getSum(1, 0))     // 1 + 0 = 1
// console.log(getSum(1, 2))    // 1 + 2 = 3
// console.log(getSum(0, 1))    // 0 + 1 = 1
// console.log(getSum(1, 1))   // 1 Since both are same
// console.log(getSum(-1, 0)) // -1 + 0 = -1
// console.log(getSum(-1, 2)) // -1 + 0 + 1 + 2 = 2

//================================Task6============================================
// const foo = () => console.log(foo.name);
// const boo = () => console.log(boo.name);
// const fooboo = (bool, foo, boo) => {
//     bool===true ?foo():boo();
// };
// fooboo(true, foo, boo); //foo
// fooboo(false, foo, boo); //boo

//================================Advanced Task1=============================================

// const isTrianglePossible= (a, b, c) =>{
//     return (a+b)>c && (b+c)>a && (a+c)>b;
// };
// console.log(isTrianglePossible(2, 4, 5)); //true
// console.log(isTrianglePossible(1, 1, 2)); //false

//=================================Advanced Task2==============================================

// const getChocolateBreakoffs = (n, m) =>{
//     if(!n || !m || n<=0 || m<=0) return 0;
//     return n*m-1;
// };
// console.log(getChocolateBreakoffs(5,5));

//==================================Advanced Task3==============================================

// const buyTelephones = () =>{
//     let depositeBalance = Number(Number(prompt('Enter your deposite balance')).toFixed(2));
//     console.log(depositeBalance, typeof(depositeBalance));
//     while(depositeBalance > 0) {
//         alert( `Your deposite balance is ${depositeBalance}$`);
//         const telephoneCost = Number(Number(prompt('Enter new telephone cost', '$$$')).toFixed(2));
//         const accessoryCost = Number(Number(prompt('Enter accessory cost','$$$')).toFixed(2));
//         if(!telephoneCost||!accessoryCost) {
//             confirm('You have entered wrong data, please try again'); 
//             continue;
//         }else if( telephoneCost+accessoryCost > depositeBalance) {
//             if(confirm('You do not have enough money!!! Try to find something cheaper or go home!')){
//                 continue;
//             } else break;
//         } else {
//             depositeBalance = Number((depositeBalance - (telephoneCost+accessoryCost)).toFixed(2));
//             alert(`You have bougth a new telephone!!! Your deposite balance is ${depositeBalance}$`)
//             if(confirm('Do you want to go home now?')) {
//                 return;
//             } else continue;
//         };
//     };
// };

// buyTelephones();

//==================================Codewars tasks=============================================
// https://www.codewars.com/users/IgorSlepenkov/completed_solutions
