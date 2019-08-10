(function () {

    'use strict'; 
 
 let firstName = prompt('Введите имя');
 let str = firstName.trim();
 
 let lastName = prompt('Введите фамилию');
 let str1 = lastName.trim();
 
 while (firstName == '' || firstName == null) {
     firstName = prompt ('Введите Имя еще раз, данные не корректны');
 }
 
 while (lastName == '' || lastName == null) {
     lastName = prompt ('Введите Фамилию еще раз, данные не корректны');
 }
 
 /*let Gender = confirm('Ваш пол мужской?');
 
 if (Gender === true) {
     (Gender = 'М');
 } else {
     (Gender = 'Ж');
 }*/
  
 let gender = prompt('Введите Ваш пол М или Ж');
 
 while (!(gender.toUpperCase() == 'М' || gender.toUpperCase() == 'Ж')) {
     gender = prompt ('Введите Введите пол еще раз, данные не корректны'); 
 }
 
 let age = +prompt('Введите Ваш возраст в годах');//возраст преобразуем в число
 let retired;
 
 while (typeof (age) != 'number' || age == null || age <= 0) {
     age = +prompt ('Введите Возраст еще раз, данные не корректны');
 }
 function checkRetired () {
 if ((gender.toUpperCase() == 'M' && age >= 63) || (gender.toUpperCase() == 'Ж' && age >=58)) {
     return 'Да';
 }
     else {
     return 'Нет';
     }
    }
 alert ('Полное имя:' + ' ' + str + ' ' + str1 + '\n'
         + 'Пол:' + ' ' + gender.toUpperCase() + '\n'
         + 'На пенсии:' + ' ' + checkRetired());
 
 }()); 