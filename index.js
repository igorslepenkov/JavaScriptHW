//====================================Task1=================================
//Выведи все элементы массива в консоль с помощью метода **`forEach`**
//Реализуйте решение двумя способами, используя `function declaration` & `arrow function`
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// const logFib1 =(fibonacci)=>{
//     fibonacci.forEach((num)=>console.log(num));
// };

// function logFib2(fibonacci) {
//     fibonacci.forEach((num)=>console.log(num));
// };
// logFib1(fibonacci);
// logFib2(fibonacci);

//====================================Task2===================================
//Используя метод **`map`** создайте новый массив, на основе массива **`users`**, 
//в котором каждый элемент массива будет содержать строку вида:
//['member 1: Darya', 'member 2: Masha', 'member 3: Malvina']
//Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// const mapArr = (arr) =>{
//     return arr.map((str, idx)=>`member ${idx+1}: ${str}`);
// };
// function mapArr2(arr) {
//     return arr.map((str, idx)=>`member ${idx+1}: ${str}`);
// };
// console.log(mapArr(users));
// console.log(mapArr2(users));

//==================================Task3====================================
//С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
//Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
// const numbers = [7, -4, 32, -90, 54, 32, -21]

// const filterArr = (arr) =>{
//     return arr.filter((num)=>num>0);
// };
// function filterArr2(arr) {
//     return arr.filter((num)=>num>0);
// };
// console.log(filterArr(numbers));
// console.log(filterArr2(numbers));

//================================Task4=========================================
//Используя метод **`reduce`** получите сумму всех чисел массива.
//Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// const getSumofArr = (arr) =>{
//     return arr.reduce((sum, cur) => sum+cur);
// }
// function getSumofArr2(arr){
//     return arr.reduce((sum, cur) => sum+cur);
// }
// console.log(getSumofArr(fibonacci));
// console.log(getSumofArr2(fibonacci));

//================================Task5==========================================
//Используя метод **`find`** найдите в массиве первое четное число.
//Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

// const getEven = (arr) =>{
//     return arr.find((num)=>num%2==0);
// };
// function getEven2(arr){
//     return arr.find((num)=>num%2==0);
// };
// console.log(getEven(numbers));
// console.log(getEven2(numbers));

//===============================Advanced Task1=============================================
// + Написать функцию конструктор **Student**
// + В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// + Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита. 
// + На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы. 

// + Создать массив **students** и поместить в него студентов.
// + Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// **rate** имеет 4 категории A B C D
// + **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// + **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// + **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// + **D** - плохой рейтинг и мы не можем дать кредит

// function Student(salaryStr, name) {
//     this.name = name;
//     this.salary = Number(...salaryStr.match(/[0-9]+/));
//     if (this.salary > 2000) {
//         this.rate = 'A';
//     } else if (this.salary > 1000 && this.salary < 2000) {
//         this.rate = 'B';
//     } else if (this.salary > 500 && this.salary < 1000) {
//         this.rate = 'C';
//     } else {
//         this.rate = 'D';
//     };

//     if (this.rate === 'A') {
//         this.creditAmount = this.salary * 12;
//     } else if (this.rate === 'B') {
//         this.creditAmount = this.salary * 9;
//     } else if (this.rate === 'C') {
//         this.creditAmount = this.salary * 6;
//     } else {
//         this.creditAmount = this.salary * 3;
//     };
// };

// const student1 = new Student('1550$', 'Bob');
// const student2 = new Student('450$', 'Vitya');
// const student3 = new Student('789$', 'Anya');
// const student4 = new Student('1250$', 'Katya');
// const student5 = new Student('3000$', 'Igor');

// const students = [student1, student2, student3, student4, student5];

// const creditAmountsSum = students.reduce((sum, student)=>sum + student.creditAmount, 0);
// console.log(creditAmountsSum);

//==============================================Advanced task2==================================
// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

// const str = 'This website is for losers LOL!';
// const cutVowels = (str) =>{
//     return str.replace(/[aiueo]/gi, '');
// };
// console.log(cutVowels(str));

//=============================================Advanced task3=======================================
// + В приведенных ниже примерах показано, как написать функцию:
// ```javascript
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
// ```
// > Параметр - это строка, которая включает только буквы от a..z и A..Z.

// const cipher = (str) =>{
//     return str.split('').map((char, idx)=>`${char.toUpperCase()}${char.toLowerCase().repeat(idx)}`).join('-');
// };
// console.log(cipher('abcd'));

//=============================================Advanced Task4=========================================
// + В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

// ```javascript
//     highAndLow("1 2 3 4 5"); // return "5 1"
//     highAndLow("1 2 -3 4 5"); // return "5 -3"
//     highAndLow("1 9 3 4 -5"); // return "9 -5"
// ```

// > Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.

// const highAndLow = (string) =>{
//     const newStr = string;
//     const arr = newStr.split(' ').map((str)=>Number(str)).sort((a, b)=>b-a);
//     return [arr[0], arr[arr.length-1]].join(' ');
// };

//     console.log(highAndLow("1 2 3 4 5")); // return "5 1"
//     console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
//     console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

//=============================================Advanced Task 5==================================================

//+ Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
//Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
//Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case
// ```

// const isIsogram = (str) =>{
//     const check = new Set(str.toLowerCase());
//     return check.size === str.length;
// };

// console.log(isIsogram("Dermatoglyphics"))// == true
// console.log(isIsogram("aba"))// == false
// console.log(isIsogram("moOse"))// == false // -- ignore letter case

//============================================Advanced Task 6=====================================================
// + Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. 
//Поместите результат в переменную **`total1`**

// + Затем замените все числа `7` на число `1` и назовите это число **`total2`**

// + После верните разницу между суммой цифр **`total1`** и **`total2`**

// > 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// const getCipher = (str) =>{
//     const total1 = str.split('').map((char)=>char.charCodeAt()).join('');
//     const total2 = total1.replace(/7/g, '1');
//     return Number(total1) - Number(total2);
// };

// console.log(getCipher('ABC'));

//==============================================Advanced Task7=====================================================
//+ Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен 
//**`(`**, если этот символ появляется только один раз в исходной строке, или **`)`**, 
//если этот символ встречается более одного раза в исходной строке. 
//Игнорируйте использование заглавных букв при определении дубликата символа.


// ```javascript
//     "din" => "((("
//     "recede" => "()()()"
//     "Success" => ")())())"
//     "(( @" => "))(("
// ```

// const toBracketsCase = (str) =>{
//     const newArr = str.toLowerCase().split('');
//     const result = newArr.map((char)=>{
//         let check = newArr.filter((el)=>el===char).length>1;
//         if(check){
//             return ')';
//         } else {
//             return '(';
//         };
//     })
//     return result.join('');
// };

// console.log(toBracketsCase("din"));
// console.log(toBracketsCase("recede"));
// console.log(toBracketsCase("Success"));
// console.log(toBracketsCase("(( @"));



