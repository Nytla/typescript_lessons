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
//# sourceMappingURL=app.js.map