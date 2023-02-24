// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
const users = [];
for (let i = 0; i < 10; i++) {
    users.push(new User(i + 1, 'name', 'surname', 'email', '+380009998765'));
}
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const evenUsers = users.filter((user) => user.id % 2 === 0);
console.log(evenUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const orderedUsers = users.sort((u1, u2) => u1.id - u2.id);
console.log(orderedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
function Client(id, name, surname, email, phone, order) {
    User.apply(this, arguments);
    this.order = order;
}

// створити пустий масив, наповнити його 10 об'єктами Client
const clients = [];
for (let i = 0; i < 10; i++) {
    clients.push(new Client(i + 1, 'name', 'surname', 'email', '+380009998765', ['iphone', 'macbook']));
}
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const orderedClients = clients.sort((c1, c2) => c1.order.length - c2.order.length);
console.log(orderedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = () => {
        console.log(`їдемо зі швидкістю ${ this.maxSpeed } на годину`);
    };
    this.info = () => {
        for (const propName in this) {
            if (!(this[propName] instanceof Function)) {
                console.log(`${ propName } - ${ this[propName] }`);
            }
        }
    };
    this.increaseMaxSpeed = (newSpeed) => {
        if (newSpeed > 0) {
            this.maxSpeed = newSpeed;
        }
    };
    this.changeYear = (newValue) => {
        this.year = newValue
    };
    this.addDriver = (driver) => {
        this.driver = driver
    }
}
const car = new Car('BMW', 'man', 2019, 100, 200);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive = () => {
        console.log(`їдемо зі швидкістю ${ this.maxSpeed } на годину`);
    };
    info = () => {
        for (const propName in this) {
            if (!(this[propName] instanceof Function)) {
                console.log(`${ propName } - ${ this[propName] }`);
            }
        }
    };
    increaseMaxSpeed = (newSpeed) => {
        if (newSpeed > 0) {
            this.maxSpeed = newSpeed;
        }
    };
    changeYear = (newValue) => {
        this.year = newValue
    };
    addDriver = (driver) => {
        this.driver = driver
    }
}
const carInstance = new CarClass('BMW', 'man', 2019, 100, 200);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}

const cinderellas = []
for (let i = 0; i < 9; i++) {
    cinderellas.push(new Cinderella('cinderella', 18, 36))
}
cinderellas.push(new Cinderella('right cinderella',  18, 35))
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name
        this.age = age
        this.shoe = shoe
    }
}
const prince = new Prince('prince', 19, 35)
console.log(prince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let thatOne
for (const cinderella of cinderellas) {
    if (prince.shoe === cinderella.footSize){
        thatOne = cinderella
    }
}
console.log(thatOne);

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const thatOneWithFind = cinderellas.find((cinderella) => cinderella.footSize === prince.shoe)
console.log(thatOneWithFind);