// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = { title: '1984', pageCount: 300, genre: 'dystopia' };
const book2 = { title: 'Animal Farm', pageCount: 200, genre: 'dystopia' };
const book3 = { title: 'Keep the Aspidistra Flying', pageCount: 100, genre: 'dystopia' };


// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const book4 = {
    title: 'Morning in the burned house', pageCount: 300, genre: 'dystopia', authors: [
        { name: 'George Orwell', age: 46 },
        { name: 'Margaret Atwood', age: 83 },
    ],
};
const book5 = {
    title: 'Animal Farm', pageCount: 200, genre: 'dystopia', authors: [
        { name: 'George Orwell', age: 46 },
        { name: 'Margaret Atwood', age: 83 },
    ],
};
const book6 = {
    title: 'Keep the Aspidistra Flying', pageCount: 100, genre: 'dystopia', authors: [
        { name: 'George Orwell', age: 46 },
        { name: 'Margaret Atwood', age: 83 },
    ],
};

// Створи
// ти масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    { name: 'name1', username: 'username1', password: 'reallyStrongPassword1' },
    { name: 'name2', username: 'username2', password: 'reallyStrongPassword2' },
    { name: 'name3', username: 'username3', password: 'reallyStrongPassword3' },
    { name: 'name4', username: 'username4', password: 'reallyStrongPassword4' },
    { name: 'name5', username: 'username5', password: 'reallyStrongPassword5' },
    { name: 'name6', username: 'username6', password: 'reallyStrongPassword6' },
    { name: 'name7', username: 'username7', password: 'reallyStrongPassword7' },
    { name: 'name8', username: 'username8', password: 'reallyStrongPassword8' },
    { name: 'name9', username: 'username9', password: 'reallyStrongPassword9' },
    { name: 'name10', username: 'username10', password: 'reallyStrongPassword10' },
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
const x = 'x';
if (x === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let a = 1;
if (a === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

a = 0;
if (a === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

a = -3;
if (a === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).


// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох .Також потрібно врахувати коли введені рівні числа.


/*
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
*/

/*
- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
*/