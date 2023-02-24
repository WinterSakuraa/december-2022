let hello = 'hello world';
let lorem = 'lorem ipsum';
let js = 'javascript is cool';

// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log(hello.length);
console.log(lorem.length);
console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
hello = hello.toUpperCase();
lorem = lorem.toUpperCase();
js = js.toUpperCase();
console.log(hello);
console.log(lorem);
console.log(js);

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
hello = hello.toLowerCase();
lorem = lorem.toLowerCase();
js = js.toLowerCase();
console.log(hello);
console.log(lorem);
console.log(js);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty             string   ';
let clean = str.trim().split(' ').filter((char) => char).join(' ');
console.log(clean);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = (str) => {
    return str.split(' ');
};
let str2 = 'Ревуть воли як ясла повні';
let arr = stringToArray(str2);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const strNums = nums.map((n) => n.toString());
console.log(strNums);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
const sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
};
let nums2 = [11, 21, 3];
sortNums(nums2, 'ascending'); // [3,11,21]
console.log(nums2);
sortNums(nums2, 'descending'); // [21,11,3]
console.log(nums2);

// ==========================
// - є масив
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 },
];
//  -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration);
console.log(coursesAndDurationArray);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filteredCourses = coursesAndDurationArray.filter((course) => course.monthDuration > 5);
console.log(filteredCourses);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mappedCourses = coursesAndDurationArray.map((course, index) => {
    return { id: index + 1, ...course };
});
console.log(mappedCourses);

//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
const deck = [];
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = [6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

for (const suit of suits) {
    for (const value of values) {
        let color;
        if (suit === 'Hearts' || suit === 'Diamonds') {
            color = 'red';
        } else {
            color = 'black';
        }
        deck.push({ suit, value, color });
    }
}
console.log(deck);
//  - знайти піковий туз
const pickAce = deck.find((card) => card.value === 'Ace' && card.suit === 'Spades');
console.log(pickAce);
//  - всі шістки
const sixes = deck.filter((card) => card.value === 6);
console.log(sixes);
//  - всі червоні карти
const reds = deck.filter((card) => card.color === 'red');
console.log(reds);
//  - всі буби
const diamonds = deck.filter((card) => card.suit === 'Diamonds');
console.log(diamonds);
//  - всі трефи від 9 та більше
const clubs = deck.filter((card) => card.suit === 'Clubs' && (card.value >= 9 || typeof card.value === 'string'));
console.log(clubs);
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// =========================
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const sortedSuits = deck.reduce((accumulator, value) => {
    if (value.suit === 'Spades') {
        accumulator.spades.push(value);
    } else if (value.suit === 'Diamonds') {
        accumulator.diamonds.push(value);
    } else if (value.suit === 'Hearts') {
        accumulator.hearts.push(value);
    } else {
        accumulator.clubs.push(value);
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
});

console.log(sortedSuits);
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced'],
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC'],
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
    },
];
// --написати пошук всіх об'єктів, в який в modules є sass
const withSass = coursesArray.filter((course) => course.modules.includes('sass'))
console.log(withSass);
// --написати пошук всіх об'єктів, в який в modules є docker
const withDocker = coursesArray.filter((course) => course.modules.includes('docker'))
console.log(withDocker);