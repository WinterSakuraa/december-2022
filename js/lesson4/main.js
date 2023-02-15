// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
rectangleArea = (a, b) => {
    return a * b;
};

// - створити функцію яка обчислює та повертає площу кола з радіусом r
circleArea = (r) => {
    return Math.PI * Math.pow(r, 2);
};

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
cylinderArea = (r, h) => {
    return 2 * Math.PI * r * (h + r);
};

// - створити функцію яка приймає масив та виводить кожен його елемент
printArray = (arr) => {
    for (const elem of arr) {
        console.log(elem);
    }
};

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
createP = (text);
{
    document.write(`<p>${ text }</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
createUl = (liText) => {
    document.write(`
        <ul>
            <li>${ liText }</li>
            <li>${ liText }</li>
            <li>${ liText }</li>
        </ul>
`);
};

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
createUlByLoop = (liText, liAmount) => {
    document.write(`<ul>`);
    for (let i = 0; i < liAmount; i++) {
        document.write(`<li>${ liText }</li>`);
    }
    document.write(`</ul>`);
};

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
createList = (arr) => {
    document.write(`<ul>`);
    for (const elem of arr) {
        document.write(`<li>${ elem } of type ${ typeof elem }</li>`);
    }
    document.write(`</ul>`);
};

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let objArray = [
    {
        id: 1,
        name: 'Biba',
        age: 20,
    },
    {
        id: 2,
        name: 'Boba',
        age: 25,
    },
    {
        id: 3,
        name: 'Buba',
        age: 18,
    },
];

printObjectArray = (arr) => {
    for (const object of arr) {
        document.write(`<div>
                            <p>id: ${ object.id }</p>
                            <p>name: ${ object.name }</p>
                            <p>age: ${ object.age }</p>
                        </div>`);
    }
};

// - створити функцію яка повертає найменьше число з масиву
findMinValue = (arr) => {
    let min = arr[0];

    for (const elem of arr) {
        if (elem < min) {
            min = elem;
        }
    }

    return min;
};

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
sum = (arr) => {
    let sum = 0;

    for (const elem of arr) {
        sum += elem;
    }

    return sum;
};

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let currency = null;

    for (const elem of currencyValues) {
        if (elem.currency === exchangeCurrency) {
            currency = elem;
        }
    }

    return sumUAH / currency.value;
};
