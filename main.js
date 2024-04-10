console.log('Sample JavaScript #2 HW #14');

const userObj = {
    firstName: 'firstName',
    lastName: 'lastName',
    age: 31
}

function fullName(user) {
    return user.firstName + ' ' + user.lastName;
}

function defUpperStr(str) {
    str = str || 'DEFAULT TEXT';
    return str.toUpperCase() || "DEFAULT TEXT";
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());

function evenFn(n) {
    const arr = [];
    for (let i = 1; i < n; i += 2) {
        arr.push(i + 1);
    }
    return arr;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function weekFn(n) {
    switch (n) {
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        case 7:
            return 'Воскресенье';
        default:
            return null;
    }
}

console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn('2')); // null

function ageClassification(n) {
    n = n < 0 || n > 122 ? null : n;
    n = n <= 24 && n > 0 ? 'детский возраст' : n;
    n = n > 24 && n <= 44 ? 'молодой возраст' : n;
    n = n > 44 && n <= 65 ? 'средний возраст' : n;
    n = n > 65 && n <= 75 ? 'пожилой возраст' : n;
    n = n > 75 && n <= 90 ? 'старческий возраст' : n;
    n = n > 90 ? 'долгожители' : n;
    return n;
}

console.log('-1 :', ageClassification(-1));
console.log('5 :', ageClassification(5));
console.log('34 :', ageClassification(34));
console.log('50 :', ageClassification(50));
console.log('65.1 :', ageClassification(65.1));
console.log('80 :', ageClassification(80));
console.log('110 :', ageClassification(110));
console.log('130 :', ageClassification(130));
console.log(1, ageClassification(-1) === null);
console.log(2, ageClassification(1) === 'детский возраст');
console.log(3, ageClassification(24) === 'детский возраст');
console.log(4, ageClassification(24.01) === 'молодой возраст');
console.log(5, ageClassification(44) === 'молодой возраст');
console.log(6, ageClassification(44.01) === 'средний возраст');
console.log(7, ageClassification(65) === 'средний возраст');
console.log(8, ageClassification(65.01) === 'пожилой возраст');
console.log(9, ageClassification(75) === 'пожилой возраст');
console.log(10, ageClassification(75.01) === 'старческий возраст');
console.log(11, ageClassification(90) === 'старческий возраст');
console.log(12, ageClassification(90.01) === 'долгожители');
console.log(13, ageClassification(122) === 'долгожители');
console.log(14, ageClassification(122.01) === null);
console.log(15, ageClassification(150) === null);

function oddFn(n) {
    let i = 1;
    const arr = [];
    while (i <= n) {
        arr.push(i);
        i += 2;
    }
    return arr;
}

console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

function mainFunc(a, b, func) {
    return typeof func === 'function' ? func(a, b) : false;
}

function cbRandom(a, b) {
    let random = a - 1;
    while (random <= a) {
        random = Math.floor(Math.random() * b) + 1
    }
    return random;
}

function cbPow(a, b) {
    return Math.pow(a, b);
}

function cbAdd(a, b) {
    return a + b;
}

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, 'not a func')); // false