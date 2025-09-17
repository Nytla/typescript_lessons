// Testing TypeScript compilation with NUMBER types
let revenue: number = 1000;
let bonus: number = 500;
let result: number = revenue + bonus;
console.log(result);

// Testing TypeScript compilation with STRING types
let second: string = 'TypeScript';
let great: string = 'is great!';
let result_str: string = second +' '+ great;
console.log(result_str);

// Testing TypeScript compilation with BOOLEAN types
let third: boolean = true;
let greatest: boolean = false;
console.log(third +'-'+ greatest);

// Function to concatenate first and last names
function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

// Example usage Arrow Function
const getFullNameArrow = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
}

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

}

// Function to get user info
function getUserInfo(user: { firstname: string; lastname: string; city: string; age: number; skills: string[]; isMarried: boolean, hasChildren: object }): string {
    return `User: ${user.firstname} ${user.lastname}, City: ${user.city}, Age: ${user.age}, Skills: ${user.skills}, Is Married: ${user.isMarried}, Children: ${JSON.stringify(user.hasChildren)}`;
}
console.log(getUserInfo(user));

// Using ARRAYS
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['one', 'two', 'three'];
let booleans: boolean[] = [true, false, true];
let anys: any[] = [1, 'Test', true];
let string_numner_boolean: (string | number | boolean)[] = [2, 'Testing', false];

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
    .filter((numbersElement:number) => numbersElement > 2);

strings
    .filter((strings:string) => strings.length > 3);

booleans
    .filter((booleans:boolean) => booleans === true);

const get_string = anys.filter((value:any) => typeof value === 'string');
const get_number = anys.filter((value:any) => typeof value === 'number');
const get_boolean = anys.filter((value:any) => typeof value === 'boolean');
const get_str_num_bool = string_numner_boolean.filter((value:any) => typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean');

console.log(get_string);
console.log(get_number);
console.log(get_boolean);
console.log(get_str_num_bool);

// Example of TUPLE
let userTuple: [number, string, boolean];
userTuple = [1, 'This is testing', true];
console.log(userTuple[1]);
console.log(userTuple[2]);

// Example of spread operator
let arrayOne: [number, string, ...boolean[]] = [10, "This is spread", true, false];

console.log(arrayOne);

// Example of Readonly array
const arrayTwo: readonly [number, string, boolean] = [5, 'This is ReadOnly', true];
//arrayTwo[0] = 10; // Error: Cannot assign to '0' because it is a read-only property.

const arrayThree: readonly number[] = [1, 2, 3, 4, 5];
const arrayFour: readonly string[] = ['One', 'Two', 'Three'];

// Useing alternative syntax for array
// Using ARRAYS
let numbers3: Array<number> = [1, 2, 3, 4, 5];
let strings3: Array<string> = ['one', 'two', 'three'];
let booleans3: Array<boolean> = [true, false, true];
let anys3: Array<any> = [1, 'Test', true];
let array3: ReadonlyArray<string> = ['one', 'Test', 'three'];

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
function getIdOfUser(): number {
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
function logId(id: number | string | boolean): void {
    if (typeof id === 'number') {
        console.log(`ID is a number: ${id}`);
    } else if (typeof id === 'string') {
        console.log(`ID is a string: ${id}`);
    } else if (typeof id === 'boolean') {
        console.log(`ID is a boolean: ${id}`);
    } else {
        console.log('ID is of an unknown type' + id);
    }
}

logId(123);
logId('ABC123');
logId(true);

function logError(err: string | string[]): void {
    if (Array.isArray(err)) {
        console.log(`Errors: ${err.join(', ')}`);
    } else {
        console.log(`Error: ${err}`);
    }
};

logError('Single error message');
logError(['Error one', 'Error two', 'Error three']);

function logIbject(obj: { a: number | string; b: number | null; isActive: boolean | null }): void {
    console.log(`a: ${obj.a}, b: ${obj.b}, isActive: ${obj.isActive}`);
};

logIbject({ a: 10, b: null, isActive: true });
logIbject({ a: 'Test', b: 20, isActive: null });

// Example of literal types
type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}

move('up');
move('down');
// move('forward'); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.

// Exaple of literal types with inside function
function printStatus(status: 'success' | 'error' | 'loading'): void {
    if (status === 'success') {
        console.log('Operation was successful');
    } else if (status === 'error') {
        console.log('An error occurred');
    } else if (status === 'loading') {
        console.log('Loading...');
    }
}

printStatus('success');
printStatus('error');
printStatus('loading');
// printStatus('pending'); // Error: Argument of type '"pending"' is not assignable to parameter of type '"success" | "error" | "loading"'.

// Example of useage as in literal types
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function sendAuth(method: HttpMethod, url: string): void {
    console.log(`Sending ${method} request to ${url}`);
}

let method: HttpMethod = 'POST';

sendAuth(method, 'https://api.example.com/data');

// Example of TYPE ALiAS object
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    skills: string[];
};

type Role = {
    UserRoleId: number;
}   

type UserWithRole = User & Role;

type UserWithRoleTwo = User | Role;

type UserWithRoleComposition = {
    UserOne: User;
    UserTwo: Role;
};

let user1: User = {
    id: 1,
    name: 'Alice',
    email: 'test@gmail.com',
    isActive: true,
    skills: ['JavaScript', 'TypeScript', 'React']
};

let user2: UserWithRole = {
    id: 2,
    name: 'Bob',
    email: 'test2@gmail.com',
    isActive: false,
    skills: ['Python', 'Django'],
    UserRoleId: 101,
};

let user3: UserWithRoleTwo = {
    UserRoleId: 202,
};

//Example of Interface
interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    skills: string[];
    getFullName?(): string; // Optional method
    getYearOfBirth: (id: number, url: string) => string;
};

interface IUserRole {
    UserRoleId: number;
}

interface IUserWithRole extends IUser, IUserRole {
    createAt: string;
    createDate: Date;
};

let userInterface: IUserWithRole = {
    id: 3,
    name: 'Charlie',
    email: 'test3@gmail.com',
    isActive: true,
    skills: ['Java', 'Spring'],
    getFullName(): string {
        return this.name;
    },
    UserRoleId: 303,
    getYearOfBirth(id: number, url: string): string {
        return `Year of birth for user with ID ${id} from ${url} is 1990`;
    },
    createAt: 'Testing',
    createDate: new Date(),
}

// Example of using the interface dictionary
interface StringNumberDictionary {
    [key: string]: number;
}

let myDictionary: StringNumberDictionary = {
    apples: 5,
    bananas: 10,
    oranges: 7
};

console.log(myDictionary.apples); // Output: 5
console.log(myDictionary['bananas']); // Output: 10

//Example of usage double interface
interface User4 {
    id: number;
}

interface User4 { // Bad usage interface
    name: string;
}

let userFour: User4 = {
    id: 7,
    name: 'Test name'
}

// Example usage optional
interface User5 {
    login: string,
    password: string,
    email?: string,
    phone: string | undefined
}

let user6: User5 = {
    login: 'Testing',
    password: '234fetr',
    phone: '',
}

// Example Optional in functions
function multiply(first: number, second?: number) :number {
    if (!second) {
        return first * first;
    }
    return first * second;
}

// Example Default params in function
function multiplyDef(first: number = 10, second: number = 5) :number {
    return first * second;
}

console.log(multiplyDef());
console.log(multiplyDef(5,20));

// Exapmle Interface and Type
interface UserPro {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}

function CheckPass(user: UserPro) :string {
    const getPassType = user.password?.type;
    if (getPassType !== undefined) {
        return getPassType;
    } else {
        return 'Sorry';
    }
}

// Example usage operator '!' inside with var
function CheckSomeData(user: UserPro) :string {
    const getPass = user.password!.type;
    return getPass;
}

// Example check null and undefined
function testing(paarm: string) {
    const test = paarm ?? multiplyDef();
}

// Example VOID
function logsId(id: string | number): void {
    console.log('THis is id '+id);
}

let get_log = logsId(777);

console.log(get_log);

// Example with func
type voidFunc = () => void;

const f1: voidFunc = () => {
    console.log('Function f1 executed');
};

// Example with array
const skills = ['dev', 'php', 'js'];

const user9 = {
    sergey: ['node']
}

skills.forEach((skill) => user9.sergey.push(skill), console.log(skills));

// Example for UNKNOWN type
let input: unknown;

input = 111_222_333;
input = 'THis is test';
input = [1,'Whhops'];

function run(a: unknown) {
    if (typeof a == "number") {
        a + 1;
    } else {
        console.log(a);
    }
}

run(input);

// Check Unknown Error
async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

// Example with type NEVER
function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never {
    // return ''; This is ERROR for never function
    while(true) {}
}

function recursion(): never {
    return recursion();
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    generateError('This is error');
}

// Example for type NULL
const n1: null = null;
const n2: any = null;
// const n3: number = null; // Wrong
// const n4: string = null; // Wrong
// const n5: boolean = null; // Wrong
// const n6: undefined = null; // Wrong

interface User11 {
    name: string
}

function getUser() {
    if (Math.random() >  0.5) {
        return null;
    } else {
        return {
            name: 'Vasya'
        } as User11
    }
}

const getUser11 = getUser();
const getUser12 = getUser11?.name;
if (getUser11!==null) {
    const getUser13 = getUser11.name;
}

// Exapmle Converting Types 
let a1 = 5;
let a2: string = a1.toString();

let b1 = 'Test string';
let b2: number = parseInt(b1);

interface User14 {
    name: string;
    email: string;
    login: string;
}

let user15: User14 = {
    name: 'Vasya',
    email: 'vasya@gmail.com',
    login: 'vasya'
}

let user16 = {
    name: 'Vasya',
    email: 'vasya@gmail.com',
    login: 'vasya'
} as User14

// let user17 = <User14> { // No Recomend 
//     name: 'Vasya',
//     email: 'vasya@gmail.com',
//     login: 'vasya'
// }

// Example Type Guard 
function isStringNumber(x: string | number) {
    if (typeof x === 'string') {
        console.log(x); // Only string
    } else if (typeof x === 'number') {
        console.log(x); // Only number
    }
    console.log(x); // string | number
}

function isString1(x: string | number): x is string {
    return typeof x === 'string';
}

console.log('Is this string: ' + isString1('Abcdf'));
console.log('Is this string: ' + isString1(10));

interface User15 {
    name: string;
    email: string;
    login: string;
}

interface Admin15 {
    name: string;
    role: number;
}

function isAdmin(user: User15 | Admin15): user is Admin15 {
    return 'role' in user;
}

function isAdminAleternative(user: User15 | Admin15): user is Admin15 {
    return (user as Admin15).role !== undefined;
}

function SetRole(user: User15 | Admin15) { // This is not be async
    if (isAdmin(user)) {
        user.name = 'Vasya';
        user.role = 0;
    } else {
        throw new Error('This user is not admin' + user.name + '-' + user.email + '-' + user.login);
    }
}



/** CLASSES */

// Create Class
class User1 {
    // Prorerties
    name: string;

    constructor(param: string) {
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
    role!: number;
}

const admin = new Admin();
admin.role = 1;
console.log(admin.role);

// User class with 3 consructors
class User22 {
    name: string = '';
    age: number = 0;

    constructor();
    constructor(param: string);
    constructor(param: number);
    constructor(AgeOrName?: string | number){
        if(typeof AgeOrName === 'string') {
            this.name = AgeOrName;
        } else if(typeof AgeOrName === 'number') {
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
} as const;

type PaymentStatus = typeof PaymentStatus[];

class Payment {
    id: number;
    status: string;
    createdAd: Date;
    updateAd: Date;

    constructor (id: number) {
        this.id = id;
        this.createdAd = new Date();
        this.updateAd = new Date();
        this.status = PaymentStatus.Holded;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAd.getTime();
    }

    unholdPayment() {
        if(this.status == PaymentStatus.Processed) {
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
    _login: string = '';
    _password: string = '';
    _createdAt = Date;

    // This is setter (no async)
    set login(l: string | number) {
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

// Exapmle IMPLEMENTS 
interface Ilogger {
    log(...args: any[]): void;
    error(...args: any[]): void;
}

class Logger implements Ilogger {
    log(...args: any[]):void {
        console.log(...args);
    }
    error(...args: any[]):void {
        console.log(...args);
    }
    // For example async error method
    // async error(...args: any[]): Promise<void> {
    //     console.log(...args);
    // }
}

// Example with many IMPLEMENTS

interface IPayable {
    pay(paymentId: number): void;
    price?: number;
}

interface IDeletable {
    delete(): void;
}

class Payable implements IPayable, IDeletable {
    pay(paymentId: number | string): void {
        // code...
    };
    delete(): void {
        // code...
    }
}

// Example EXTENDS CLASS and SUPER methods
type PaymentsStatus = 'new' | 'paid';

class Payments {
    id: number;
    status: PaymentsStatus = 'new';
    constructor(id: number) {
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}

class PaymentsSister extends Payments {
    databaseId: number = 1;
    paidAt: Date = new Date();
    constructor() {
        const id = Math.random();
        super(id);
    }
    
    save () {}
    
    override pay(date?: Date) {
        // super.pay();
        if (date) {
            this.status = 'paid';
            this.paidAt = date;
        }
    }
}

// Example how setup first and second with extends
class User44 {
    name: string = 'UserLogin';
    constructor() {
        console.log(this.name);
    }
}
class Admin44 extends User44 {
    name: string = 'AdminLogin';
    constructor() {
        super();
        console.log(this.name);
    }
}

new Admin44;

// Example with error code
class HttpError extends Error {
    code: number;

    constructor(text: string, code: number) {
        super(text);
        this.code = code ?? 500;
    }
}

// Example COMPOSITION
class User55 {
   _name: string = 'User-test';
}

class Payment1 {
   _date: Date = new Date();
}

class UserWithPayment {
    _user: User44;
    _payment: Payment1

    constructor(user: User, payment: Payment1) {
        this._user = user;
        this._payment = payment;      
    };
}

// Example PUBLIC and PRIVATE modificators
class Vehicle {
    public _make: string = '';
    private _damages: string[] = [];
    private _model: string = '';
    protected _run: number = 0;
    #price: number = 0; // This is equals PRIVATE

    set model(m: string) {
        this._model = m;
        this.#price = 1;
    }

    get model() {
        return this._model;
    }

    addDamege(damege: string) {
        this._damages.push(damege);
    }
}
new Vehicle()._make;
// new Vehicle()._damages; // Error because this is private
new Vehicle().addDamege('Crash');

class EuroTrack extends Vehicle {
    setRun(km: number) {
        this._run = km / 0.73;
        // this._damages = ''; // No set because this is private
    }
}

new EuroTrack().setRun(120_000);
// new EuroTrack()._run; // Error because _run is protected
