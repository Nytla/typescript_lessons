"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Testing TypeScript compilation with NUMBER types
let revenue = 1000;
let bonus = 500;
let result = revenue + bonus;
console.log(result);
// Testing TypeScript compilation with STRING types
let second = 'TypeScript';
let great = 'is great!';
let result_str = second + ' ' + great;
console.log(result_str);
// Testing TypeScript compilation with BOOLEAN types
let third = true;
let greatest = false;
console.log(third + '-' + greatest);
// Function to concatenate first and last names
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
// Example usage Arrow Function
const getFullNameArrow = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
console.log(getFullName('John', 'Doe'));
console.log(getFullNameArrow('Jane', 'Smith'));
// Example usage with object
const user = {
    firstname: 'Igor',
    lastname: 'Zhabskyi',
    city: 'Kyiv',
    age: 38,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    isMarried: false,
    hasChildren: {
        son: 'Yaroslav',
        daughter: 'Sophia'
    }
};
// Function to get user info
function getUserInfo(user) {
    return `User: ${user.firstname} ${user.lastname}, City: ${user.city}, Age: ${user.age}, Skills: ${user.skills}, Is Married: ${user.isMarried}, Children: ${JSON.stringify(user.hasChildren)}`;
}
console.log(getUserInfo(user));
// Using ARRAYS
let numbers = [1, 2, 3, 4, 5];
let strings = ['one', 'two', 'three'];
let booleans = [true, false, true];
let anys = [1, 'Test', true];
let string_numner_boolean = [2, 'Testing', false];
for (let numbersElement of numbers) {
    console.log(numbersElement);
}
for (let stringsElement of strings) {
    console.log(stringsElement);
}
for (let booleansElement of booleans) {
    console.log(booleansElement);
}
for (let anysElement of anys) {
    console.log(anysElement);
}
//Filtering arrays
numbers
    .filter((numbersElement) => numbersElement > 2);
strings
    .filter((strings) => strings.length > 3);
booleans
    .filter((booleans) => booleans === true);
const get_string = anys.filter((value) => typeof value === 'string');
const get_number = anys.filter((value) => typeof value === 'number');
const get_boolean = anys.filter((value) => typeof value === 'boolean');
const get_str_num_bool = string_numner_boolean.filter((value) => typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean');
console.log(get_string);
console.log(get_number);
console.log(get_boolean);
console.log(get_str_num_bool);
// Example of TUPLE
let userTuple;
userTuple = [1, 'This is testing', true];
console.log(userTuple[1]);
console.log(userTuple[2]);
// Example of spread operator
let arrayOne = [10, "This is spread", true, false];
console.log(arrayOne);
// Example of Readonly array
const arrayTwo = [5, 'This is ReadOnly', true];
//arrayTwo[0] = 10; // Error: Cannot assign to '0' because it is a read-only property.
const arrayThree = [1, 2, 3, 4, 5];
const arrayFour = ['One', 'Two', 'Three'];
// Useing alternative syntax for array
// Using ARRAYS
let numbers3 = [1, 2, 3, 4, 5];
let strings3 = ['one', 'two', 'three'];
let booleans3 = [true, false, true];
let anys3 = [1, 'Test', true];
let array3 = ['one', 'Test', 'three'];
// Example of ENUM string
// enum StatusCode {
//     SUCCESS = 'SUCCESS',
//     PENDING = 'PENDING',
//     ERROR = 'ERROR'
// };
// Example of usage ENUM number
// enum StatusCode {
//     FAILED = 1,
//     TIMEOUT,
//     SYSTEMERROR
// };
const paymentResult = {
    text: 'Payment successful',
    statusCode: 'SUCCESS',
    errorCode: 'failed',
};
// if (paymentResult.statusCode === StatusCode.SUCCESS) {
//     console.log('Operation was successful');
// } else if (paymentResult.statusCode === StatusCode.PENDING) {
//     console.log('Operation is pending');
// } else if (paymentResult.statusCode === StatusCode.ERROR) {
//     console.log('Operation encountered an error');
// }
// function handleError(code: StatusCode): void {
//     // Checking for specific error codes not empty
//     if (code === StatusCode.FAILED) {
//         console.log('Error: Operation failed');
//     }   else if (code === StatusCode.TIMEOUT) {
//         console.log('Error: Operation timed out');
//     } else if (code === StatusCode.SYSTEMERROR) {
//         console.log('Error: System error occurred');
//     } else {
//         console.log('Unknown error code');
//     }
// }
// handleError(StatusCode.FAILED);
// handleError(StatusCode.TIMEOUT);
// handleError(StatusCode.SYSTEMERROR);
// handleError(1);
// Example of Enums with mixed values
function getIdOfUser() {
    return 42;
}
// enum MixedEnum {
//     FIRST = 1,
//     SECOND = 'Second',
//     THIRD = getIdOfUser(),
// }
// console.log(MixedEnum.FIRST);  // Output: 1
// console.log(MixedEnum.SECOND);  // Output: 'Second'
// console.log(MixedEnum.THIRD);  // Output: 42
// Example of Enums const
// const enum ConstEnum {
//     ONE = 1,
//     TWO = 2,
//     THREE = 3
// }
// console.log(ConstEnum.ONE);  // Output: 1
// console.log(ConstEnum.TWO);  // Output: 2
// console.log(ConstEnum.THREE);  // Output: 3
// Example of UNION types
function logId(id) {
    if (typeof id === 'number') {
        console.log(`ID is a number: ${id}`);
    }
    else if (typeof id === 'string') {
        console.log(`ID is a string: ${id}`);
    }
    else if (typeof id === 'boolean') {
        console.log(`ID is a boolean: ${id}`);
    }
    else {
        console.log('ID is of an unknown type' + id);
    }
}
logId(123);
logId('ABC123');
logId(true);
function logError(err) {
    if (Array.isArray(err)) {
        console.log(`Errors: ${err.join(', ')}`);
    }
    else {
        console.log(`Error: ${err}`);
    }
}
;
logError('Single error message');
logError(['Error one', 'Error two', 'Error three']);
function logIbject(obj) {
    console.log(`a: ${obj.a}, b: ${obj.b}, isActive: ${obj.isActive}`);
}
;
logIbject({ a: 10, b: null, isActive: true });
logIbject({ a: 'Test', b: 20, isActive: null });
function move(direction) {
    console.log(`Moving ${direction}`);
}
move('up');
move('down');
// move('forward'); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.
// Exaple of literal types with inside function
function printStatus(status) {
    if (status === 'success') {
        console.log('Operation was successful');
    }
    else if (status === 'error') {
        console.log('An error occurred');
    }
    else if (status === 'loading') {
        console.log('Loading...');
    }
}
printStatus('success');
printStatus('error');
printStatus('loading');
function sendAuth(method, url) {
    console.log(`Sending ${method} request to ${url}`);
}
let method = 'POST';
sendAuth(method, 'https://api.example.com/data');
let user1 = {
    id: 1,
    name: 'Alice',
    email: 'test@gmail.com',
    isActive: true,
    skills: ['JavaScript', 'TypeScript', 'React']
};
let user2 = {
    id: 2,
    name: 'Bob',
    email: 'test2@gmail.com',
    isActive: false,
    skills: ['Python', 'Django'],
    UserRoleId: 101,
};
let user3 = {
    UserRoleId: 202,
};
;
;
let userInterface = {
    id: 3,
    name: 'Charlie',
    email: 'test3@gmail.com',
    isActive: true,
    skills: ['Java', 'Spring'],
    getFullName() {
        return this.name;
    },
    UserRoleId: 303,
    getYearOfBirth(id, url) {
        return `Year of birth for user with ID ${id} from ${url} is 1990`;
    },
    createAt: 'Testing',
    createDate: new Date(),
};
let myDictionary = {
    apples: 5,
    bananas: 10,
    oranges: 7
};
console.log(myDictionary.apples); // Output: 5
console.log(myDictionary['bananas']); // Output: 10
let userFour = {
    id: 7,
    name: 'Test name'
};
let user6 = {
    login: 'Testing',
    password: '234fetr',
    phone: '',
};
// Example Optional in functions
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
// Example Default params in function
function multiplyDef(first = 10, second = 5) {
    return first * second;
}
console.log(multiplyDef());
console.log(multiplyDef(5, 20));
function CheckPass(user) {
    const getPassType = user.password?.type;
    if (getPassType !== undefined) {
        return getPassType;
    }
    else {
        return 'Sorry';
    }
}
// Example usage operator '!' inside with var
function CheckSomeData(user) {
    const getPass = user.password.type;
    return getPass;
}
// Example check null and undefined
function testing(paarm) {
    const test = paarm ?? multiplyDef();
}
// Example VOID
function logsId(id) {
    console.log('THis is id ' + id);
}
let get_log = logsId(777);
console.log(get_log);
const f1 = () => {
    console.log('Function f1 executed');
};
// Example with array
const skills = ['dev', 'php', 'js'];
const user9 = {
    sergey: ['node']
};
skills.forEach((skill) => user9.sergey.push(skill), console.log(skills));
// Example for UNKNOWN type
let input;
input = 111_222_333;
input = 'THis is test';
input = [1, 'Whhops'];
function run(a) {
    if (typeof a == "number") {
        a + 1;
    }
    else {
        console.log(a);
    }
}
run(input);
// Check Unknown Error
async function getData() {
    try {
        await fetch('');
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
// Example with type NEVER
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    // return ''; This is ERROR for never function
    while (true) { }
}
function recursion() {
    return recursion();
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('This is error');
}
// Example for type NULL
const n1 = null;
const n2 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Vasya'
        };
    }
}
const getUser11 = getUser();
const getUser12 = getUser11?.name;
if (getUser11 !== null) {
    const getUser13 = getUser11.name;
}
// Exapmle Converting Types 
let a1 = 5;
let a2 = a1.toString();
let b1 = 'Test string';
let b2 = parseInt(b1);
let user15 = {
    name: 'Vasya',
    email: 'vasya@gmail.com',
    login: 'vasya'
};
let user16 = {
    name: 'Vasya',
    email: 'vasya@gmail.com',
    login: 'vasya'
};
// let user17 = <User14> { // No Recomend 
//     name: 'Vasya',
//     email: 'vasya@gmail.com',
//     login: 'vasya'
// }
// Example Type Guard 
function isStringNumber(x) {
    if (typeof x === 'string') {
        console.log(x); // Only string
    }
    else if (typeof x === 'number') {
        console.log(x); // Only number
    }
    console.log(x); // string | number
}
function isString1(x) {
    return typeof x === 'string';
}
console.log('Is this string: ' + isString1('Abcdf'));
console.log('Is this string: ' + isString1(10));
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAleternative(user) {
    return user.role !== undefined;
}
function SetRole(user) {
    if (isAdmin(user)) {
        user.name = 'Vasya';
        user.role = 0;
    }
    else {
        throw new Error('This user is not admin' + user.name + '-' + user.email + '-' + user.login);
    }
}
/** CLASSES */
// Create Class
class User1 {
    // Prorerties
    name;
    constructor(param) {
        this.name = param;
    }
}
// Init class
const get_user = new User1('Vasya');
console.log(get_user.name);
get_user.name = 'Petya';
console.log(get_user.name);
// Class Admin
class Admin {
    // Prorerties
    role;
}
const admin = new Admin();
admin.role = 1;
console.log(admin.role);
// User class with 3 consructors
class User22 {
    name = '';
    age = 0;
    constructor(AgeOrName) {
        if (typeof AgeOrName === 'string') {
            this.name = AgeOrName;
        }
        else if (typeof AgeOrName === 'number') {
            this.age = AgeOrName;
        }
    }
}
const get_user_2 = new User22(123);
const get_user_3 = new User22();
const get_user_4 = new User22(777);
// Class with METHODS
const PaymentStatus = {
    Holded: 'Holded',
    Processed: 'Processed',
    Reserved: 'Reserved'
};
class Payment {
    id;
    status;
    createdAd;
    updateAd;
    constructor(id) {
        this.id = id;
        this.createdAd = new Date();
        this.updateAd = new Date();
        this.status = PaymentStatus.Holded;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAd.getTime();
    }
    unholdPayment() {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Payment not has been Reserved');
        }
        this.status = PaymentStatus.Reserved;
        this.updateAd = new Date();
    }
}
const get_payment = new Payment(1);
get_payment.unholdPayment();
console.log(get_payment);
const get_time = get_payment.getPaymentLifeTime();
console.log(get_time);
// Class with GETTER and SETTER
class User33 {
    _login = '';
    _password = '';
    _createdAt = Date;
    // This is setter (no async)
    set login(l) {
        this._login = 'user-' + l;
    }
    // This is getter (no async)
    get login() {
        return this._login;
    }
}
const set_user = new User33();
set_user.login = 'Igor';
console.log(set_user);
console.log(set_user.login);
class Logger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.log(...args);
    }
}
class Payable {
    pay(paymentId) {
        // code...
    }
    ;
    delete() {
        // code...
    }
}
class Payments {
    id;
    status = 'new';
    constructor(id) {
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PaymentsSister extends Payments {
    databaseId = 1;
    paidAt = new Date();
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() { }
    pay(date) {
        // super.pay();
        if (date) {
            this.status = 'paid';
            this.paidAt = date;
        }
    }
}
// Example how setup first and second with extends
class User44 {
    name = 'UserLogin';
    constructor() {
        console.log(this.name);
    }
}
class Admin44 extends User44 {
    name = 'AdminLogin';
    constructor() {
        super();
        console.log(this.name);
    }
}
new Admin44;
// Example with error code
class HttpError extends Error {
    code;
    constructor(text, code) {
        super(text);
        this.code = code ?? 500;
    }
}
// Example COMPOSITION
class User55 {
    _name = 'User-test';
}
class Payment1 {
    _date = new Date();
}
class UserWithPayment {
    _user;
    _payment;
    constructor(user, payment) {
        this._user = user;
        this._payment = payment;
    }
    ;
}
// Example PUBLIC and PRIVATE modificators
class Vehicle {
    _make = '';
    _damages = [];
    _model = '';
    _run = 0;
    #price = 0; // This is equals PRIVATE
    set model(m) {
        this._model = m;
        this.#price = 1;
    }
    get model() {
        return this._model;
    }
    addDamege(damege) {
        this._damages.push(damege);
    }
}
new Vehicle()._make;
// new Vehicle()._damages; // Error because this is private
new Vehicle().addDamege('Crash');
class EuroTrack extends Vehicle {
    setRun(km) {
        this._run = km / 0.73;
        // this._damages = ''; // No set because this is private
    }
}
new EuroTrack().setRun(120_000);
// new EuroTrack()._run; // Error because _run is protected
//# sourceMappingURL=app.js.map