//====================================Task1==========================
// Выведите в консоль длину массива.

// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);

//===================================Task2===========================
// Выведите в консоль его последний элемент вне зависимости от его длинны.

// const animals = ['monkey', 'dog', 'cat'];
// console.log(animals[animals.length-1]);
// console.log(animals.pop());

//===================================Task3===========================
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// > Реализуйте решение двумя способами.

// const numbers = [5, 43, 63, 23, 90];
// delete numbers[0];
// delete numbers[1];
// delete numbers[2];
// delete numbers[3];
// delete numbers[4]; // С помощью delete выдаст 5 пустых ячеек

// numbers.splice(0, 5); //С помощью splice выведет пустой массив []
// console.log(numbers);

//==================================Task4============================
// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

// const students = ['Polina', 'Dasha', 'Masha'];
// students.pop();
// students.push(`Andrey`);
// console.log(students);

//===================================Task5===========================
// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

// const cats = ['Gachito', 'Tom', 'Batman'];
// for(let i=0; i<cats.length; i++){
//     console.log(cats[i]);
// };
// for(let cat of cats){
//     console.log(cat);
// };

//====================================Task6==========================
// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9];
// // const arr = [...evenNumbers, ...oddNumbers]; //var1
// const arr = evenNumbers.concat(oddNumbers);     //var2
// console.log(arr.indexOf(8)); //3

//===================================Task7===========================
/* + Наш бинарный массив неполный, в нем явно не хватает единиц.
 + Превратите данный массив в строку.
 > [0, 0, 0, 0] -> '0101010' */

// const binary = [0, 0, 0, 0];
// const str = binary.join('1');
// console.log(str);

//=================================Advanced Task1====================
//Реализуйте функцию которая будет проверять, является ли слово палиндромом.

// const str = 'Anna';
// function isPolindrom(string){
//     return string.toLowerCase() === string.toLowerCase().split('').reverse().join('');
// };
// console.log(isPolindrom(str));

//================================Advanced Task2========================
//Выведите в консоль среднее значение чисел в многомерном массиве.

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ];

// const matrix2 = [
//     [[12], 98, 78, 65, 23],
//     [[54, [76]], 98, 43, 65],
//     [13, [324, [65, 312]]],
//     [9092, [22, 45], [[[90000]]]],
// ];

// //Рекурсия будет работать на любых уровнях вложенности

// function getMedium(array){
//     const newArray = [];
//     const recursion = (arr) =>{
//         arr.forEach((el)=>{
//             if(!Array.isArray(el)){
//                 newArray.push(el);
//             } else {
//                 recursion(el);
//             };
//         });
//     };
//     recursion(array);
//     const result = (newArray.reduce((sum, current)=>sum+current))/newArray.length;
//     return result;
// };
// console.log(getMedium(matrix)); // 5582.5
// console.log(getMedium(matrix2)); // 5582.5

//=======================================Advanced Task3======================================
/*Дан массив, cоздайте два массива, в один поместите все 
положительные числа включая 0, в другой все отрицательные. 
Оба массива затем выведите в консоль. */

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
// const arrPositive = mixedNumbers.filter((num)=>num<0);
// const arrNegative = mixedNumbers.filter((num)=>num>=0);
// console.log(arrPositive, arrNegative);

//======================================Advanced task4=========================================
/*Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
Далее написать алгоритм который берет все числа из исходного массива, 
возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.*/

// const arr = [];
// for(let i=0; i<5; i++){
//     arr.push(Math.round(Math.random()*100));
// };
// const newArr = arr.map((num)=>num**3);
// console.log(arr, newArr);

//======================================Codewars solutions========================================
// https://www.codewars.com/users/IgorSlepenkov/completed_solutions


