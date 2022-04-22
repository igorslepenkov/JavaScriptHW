//==============================Task1====================
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

// const user = {
//     name:'Mike',
//     age:36,
// };
// delete user.name;
// delete user.age;
// console.log(user);

//=============================Task2=====================================
//Создать любой обьект с двумя ключами и любыми значениями в них, 
//а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

// const user = {
//     name:'Mike',
//     age:36,
// };

// if(user.name){
//     console.log(user.name, user.age);
// };
// if(user.hasOwnProperty('age')){
//     console.log(user.name);
// };

//============================Task3=============================================
//Дан обьект:
    // const student = {
    //     name: 'John',
    //     age: 19,
    //     isHappy: true
    // }
//C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

// for(let key in student){
//     console.log(key);
//     console.log(student[key]);
// };

//===============================Task4==============================================
//Дан обьект:
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
//Вывести в консоль слово красный и синий

// console.log(colors['ru pum pu ru rum'].red);
// console.log(colors['ru pum pu ru rum'].blue);

//=============================================Task5=====================================
//Дан обьект:
    // let salaries = {
    //     andrey: 500,
    //     sveta: 413,
    //     anton: 987,
    //     andrey: 664,
    //     alexandra: 199
    // }
//Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

// let sum = 0;
// for(let person in salaries){
//     sum += salaries[person];
// };
// console.log(sum);

//==========================================Task6========================================
//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
//Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 
// class Validator{
//     constructor(){
//         this.users=[];
//         this.createUser = () =>{
//             const user = {
//                 login: prompt('Create new login'),
//                 password: prompt('Create new password'),
//             };
//             this.users.push(user);
//         };
//         this.checkUser = () =>{
//             let data = [];
//             data.push(prompt('Enter your login'));
//             data.push(prompt('Enter your password'));
//             if(this.users.find((user)=>user.login===data[0] && user.password===data[1])){
//                 alert('Welcome!');
//             } else {
//                 alert('You have passed incorrect data');
//             };
//         };
//     };
// };

// const validator = new Validator();
// validator.createUser();
// validator.checkUser();

//========================================Advanced Task1=========================================
//Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
//Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. 
//Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 

// function displayResults(str){
//     const resArr = str.split(':');
//     const translateHelper = {
//         '1':'Один',
//         '2':'Два',
//         '3':'Три',
//         '4':'Четыре',
//         '5':'Пять',
//         '6':'Шесть',
//         '7':'Семь',
//         '8':'Восемь',
//         '9':'Девять',
//     };
//     console.log(`Матч окончился со счетом\n${translateHelper[resArr[0]]} : ${translateHelper[resArr[1]]}`);
// };
// displayResults('2:5');

//=====================================Advanced task2=============================================

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }

// const isEqual = (obj1, obj2) => {
//     let bool = true;
//     for (let key in obj1) {
//         if (!bool) { return bool };
//         bool = (obj1[key] === obj2[key]);
//     };
//     return bool;
// };

//     console.log(isEqual(student1, student2));

//=====================================Advanced Task3================================================
//У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
//Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
//Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

// const animals = {
//     cat: {
//        name: 'Енчик',
//        age: 3,
//     },
//     dog: {
//        name: 'Орео',
//        age: 2,
//     }
//  }

//  console.log(animals?.bird); // undefind
