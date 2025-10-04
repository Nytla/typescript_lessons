var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Testing TypeScript compilation with NUMBER types
var revenue = 1000;
var bonus = 500;
var result = revenue + bonus;
console.log(result);
// Testing TypeScript compilation with STRING types
var second = 'TypeScript';
var great = 'is great!';
var result_str = second + ' ' + great;
console.log(result_str);
// Testing TypeScript compilation with BOOLEAN types
var third = true;
var greatest = false;
console.log(third + '-' + greatest);
// Function to concatenate first and last names
function getFullName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
// Example usage Arrow Function
var getFullNameArrow = function (firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
};
console.log(getFullName('John', 'Doe'));
console.log(getFullNameArrow('Jane', 'Smith'));
// Example usage with object
var user = {
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
    return "User: ".concat(user.firstname, " ").concat(user.lastname, ", City: ").concat(user.city, ", Age: ").concat(user.age, ", Skills: ").concat(user.skills, ", Is Married: ").concat(user.isMarried, ", Children: ").concat(JSON.stringify(user.hasChildren));
}
console.log(getUserInfo(user));
// Using ARRAYS
var numbers = [1, 2, 3, 4, 5];
var strings = ['one', 'two', 'three'];
var booleans = [true, false, true];
var anys = [1, 'Test', true];
var string_numner_boolean = [2, 'Testing', false];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var numbersElement = numbers_1[_i];
    console.log(numbersElement);
}
for (var _a = 0, strings_1 = strings; _a < strings_1.length; _a++) {
    var stringsElement = strings_1[_a];
    console.log(stringsElement);
}
for (var _b = 0, booleans_1 = booleans; _b < booleans_1.length; _b++) {
    var booleansElement = booleans_1[_b];
    console.log(booleansElement);
}
for (var _c = 0, anys_1 = anys; _c < anys_1.length; _c++) {
    var anysElement = anys_1[_c];
    console.log(anysElement);
}
//Filtering arrays
numbers
    .filter(function (numbersElement) { return numbersElement > 2; });
strings
    .filter(function (strings) { return strings.length > 3; });
booleans
    .filter(function (booleans) { return booleans === true; });
var get_string = anys.filter(function (value) { return typeof value === 'string'; });
var get_number = anys.filter(function (value) { return typeof value === 'number'; });
var get_boolean = anys.filter(function (value) { return typeof value === 'boolean'; });
var get_str_num_bool = string_numner_boolean.filter(function (value) { return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'; });
console.log(get_string);
console.log(get_number);
console.log(get_boolean);
console.log(get_str_num_bool);
// Example of TUPLE
var userTuple;
userTuple = [1, 'This is testing', true];
console.log(userTuple[1]);
console.log(userTuple[2]);
// Example of spread operator
var arrayOne = [10, "This is spread", true, false];
console.log(arrayOne);
// Example of Readonly array
var arrayTwo = [5, 'This is ReadOnly', true];
//arrayTwo[0] = 10; // Error: Cannot assign to '0' because it is a read-only property.
var arrayThree = [1, 2, 3, 4, 5];
var arrayFour = ['One', 'Two', 'Three'];
// Useing alternative syntax for array
// Using ARRAYS
var numbers3 = [1, 2, 3, 4, 5];
var strings3 = ['one', 'two', 'three'];
var booleans3 = [true, false, true];
var anys3 = [1, 'Test', true];
var array3 = ['one', 'Test', 'three'];
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
var paymentResult = {
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
        console.log("ID is a number: ".concat(id));
    }
    else if (typeof id === 'string') {
        console.log("ID is a string: ".concat(id));
    }
    else if (typeof id === 'boolean') {
        console.log("ID is a boolean: ".concat(id));
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
        console.log("Errors: ".concat(err.join(', ')));
    }
    else {
        console.log("Error: ".concat(err));
    }
}
;
logError('Single error message');
logError(['Error one', 'Error two', 'Error three']);
function logIbject(obj) {
    console.log("a: ".concat(obj.a, ", b: ").concat(obj.b, ", isActive: ").concat(obj.isActive));
}
;
logIbject({ a: 10, b: null, isActive: true });
logIbject({ a: 'Test', b: 20, isActive: null });
function move(direction) {
    console.log("Moving ".concat(direction));
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
    console.log("Sending ".concat(method, " request to ").concat(url));
}
var method = 'POST';
sendAuth(method, 'https://api.example.com/data');
var user1 = {
    id: 1,
    name: 'Alice',
    email: 'test@gmail.com',
    isActive: true,
    skills: ['JavaScript', 'TypeScript', 'React']
};
var user2 = {
    id: 2,
    name: 'Bob',
    email: 'test2@gmail.com',
    isActive: false,
    skills: ['Python', 'Django'],
    UserRoleId: 101,
};
var user3 = {
    UserRoleId: 202,
};
;
;
var userInterface = {
    id: 3,
    name: 'Charlie',
    email: 'test3@gmail.com',
    isActive: true,
    skills: ['Java', 'Spring'],
    getFullName: function () {
        return this.name;
    },
    UserRoleId: 303,
    getYearOfBirth: function (id, url) {
        return "Year of birth for user with ID ".concat(id, " from ").concat(url, " is 1990");
    },
    createAt: 'Testing',
    createDate: new Date(),
};
var myDictionary = {
    apples: 5,
    bananas: 10,
    oranges: 7
};
console.log(myDictionary.apples); // Output: 5
console.log(myDictionary['bananas']); // Output: 10
var userFour = {
    id: 7,
    name: 'Test name'
};
var user6 = {
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
function multiplyDef(first, second) {
    if (first === void 0) { first = 10; }
    if (second === void 0) { second = 5; }
    return first * second;
}
console.log(multiplyDef());
console.log(multiplyDef(5, 20));
function CheckPass(user) {
    var _a;
    var getPassType = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    if (getPassType !== undefined) {
        return getPassType;
    }
    else {
        return 'Sorry';
    }
}
// Example usage operator '!' inside with var
function CheckSomeData(user) {
    var getPass = user.password.type;
    return getPass;
}
// Example check null and undefined
function testing(paarm) {
    var test = paarm !== null && paarm !== void 0 ? paarm : multiplyDef();
}
// Example VOID
function logsId(id) {
    console.log('THis is id ' + id);
}
var get_log = logsId(777);
console.log(get_log);
var f1 = function () {
    console.log('Function f1 executed');
};
// Example with array
var skills = ['dev', 'php', 'js'];
var user9 = {
    sergey: ['node']
};
skills.forEach(function (skill) { return user9.sergey.push(skill); }, console.log(skills));
// Example for UNKNOWN type
var input;
input = 111222333;
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
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch('')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if (error_1 instanceof Error) {
                        console.log(error_1.message);
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
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
var n1 = null;
var n2 = null;
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
var getUser11 = getUser();
var getUser12 = getUser11 === null || getUser11 === void 0 ? void 0 : getUser11.name;
if (getUser11 !== null) {
    var getUser13 = getUser11.name;
}
// Exapmle Converting Types 
var a1 = 5;
var a2 = a1.toString();
var b1 = 'Test string';
var b2 = parseInt(b1);
var user15 = {
    name: 'Vasya',
    email: 'vasya@gmail.com',
    login: 'vasya'
};
var user16 = {
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
var User1 = /** @class */ (function () {
    function User1(param) {
        this.name = param;
    }
    return User1;
}());
// Init class
var get_user = new User1('Vasya');
console.log(get_user.name);
get_user.name = 'Petya';
console.log(get_user.name);
// Class Admin
var Admin = /** @class */ (function () {
    function Admin() {
    }
    return Admin;
}());
var admin = new Admin();
admin.role = 1;
console.log(admin.role);
// User class with 3 consructors
var User22 = /** @class */ (function () {
    function User22(AgeOrName) {
        this.name = '';
        this.age = 0;
        if (typeof AgeOrName === 'string') {
            this.name = AgeOrName;
        }
        else if (typeof AgeOrName === 'number') {
            this.age = AgeOrName;
        }
    }
    return User22;
}());
var get_user_2 = new User22(123);
var get_user_3 = new User22();
var get_user_4 = new User22(777);
// Class with METHODS
var PaymentStatus = {
    Holded: 'Holded',
    Processed: 'Processed',
    Reserved: 'Reserved'
};
var Payment = /** @class */ (function () {
    function Payment(id) {
        this.id = id;
        this.createdAd = new Date();
        this.updateAd = new Date();
        this.status = PaymentStatus.Holded;
    }
    Payment.prototype.getPaymentLifeTime = function () {
        return new Date().getTime() - this.createdAd.getTime();
    };
    Payment.prototype.unholdPayment = function () {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Payment not has been Reserved');
        }
        this.status = PaymentStatus.Reserved;
        this.updateAd = new Date();
    };
    return Payment;
}());
var get_payment = new Payment(1);
get_payment.unholdPayment();
console.log(get_payment);
var get_time = get_payment.getPaymentLifeTime();
console.log(get_time);
// Class with GETTER and SETTER
var User33 = /** @class */ (function () {
    function User33() {
        this._login = '';
        this._password = '';
        this._createdAt = Date;
    }
    Object.defineProperty(User33.prototype, "login", {
        // This is getter (no async)
        get: function () {
            return this._login;
        },
        // This is setter (no async)
        set: function (l) {
            this._login = 'user-' + l;
        },
        enumerable: false,
        configurable: true
    });
    return User33;
}());
var set_user = new User33();
set_user.login = 'Igor';
console.log(set_user);
console.log(set_user.login);
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    };
    return Logger;
}());
var Payable = /** @class */ (function () {
    function Payable() {
    }
    Payable.prototype.pay = function (paymentId) {
        // code...
    };
    ;
    Payable.prototype.delete = function () {
        // code...
    };
    return Payable;
}());
var Payments = /** @class */ (function () {
    function Payments(id) {
        this.status = 'new';
        this.id = id;
    }
    Payments.prototype.pay = function () {
        this.status = 'paid';
    };
    return Payments;
}());
var PaymentsSister = /** @class */ (function (_super) {
    __extends(PaymentsSister, _super);
    function PaymentsSister() {
        var _this = this;
        var id = Math.random();
        _this = _super.call(this, id) || this;
        _this.databaseId = 1;
        _this.paidAt = new Date();
        return _this;
    }
    PaymentsSister.prototype.save = function () { };
    PaymentsSister.prototype.pay = function (date) {
        // super.pay();
        if (date) {
            this.status = 'paid';
            this.paidAt = date;
        }
    };
    return PaymentsSister;
}(Payments));
// Example how setup first and second with extends
var User44 = /** @class */ (function () {
    function User44() {
        this.name = 'UserLogin';
        console.log(this.name);
    }
    return User44;
}());
var Admin44 = /** @class */ (function (_super) {
    __extends(Admin44, _super);
    function Admin44() {
        var _this = _super.call(this) || this;
        _this.name = 'AdminLogin';
        console.log(_this.name);
        return _this;
    }
    return Admin44;
}(User44));
new Admin44;
// Example with error code
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(text, code) {
        var _this = _super.call(this, text) || this;
        _this.code = code !== null && code !== void 0 ? code : 500;
        return _this;
    }
    return HttpError;
}(Error));
// Example COMPOSITION
var User55 = /** @class */ (function () {
    function User55() {
        this._name = 'User-test';
    }
    return User55;
}());
var Payment1 = /** @class */ (function () {
    function Payment1() {
        this._date = new Date();
    }
    return Payment1;
}());
var UserWithPayment = /** @class */ (function () {
    function UserWithPayment(user, payment) {
        this._user = user;
        this._payment = payment;
    }
    ;
    return UserWithPayment;
}());
// Example PUBLIC and PRIVATE modificators
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this._make = '';
        this._damages = [];
        this._model = '';
        this._run = 0;
    }
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        // #price: number = 0; // This is equals PRIVATE
        set: function (m) {
            this._model = m;
            // this.#price = 1;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.addDamege = function (damege) {
        this._damages.push(damege);
    };
    return Vehicle;
}());
new Vehicle()._make;
// new Vehicle()._damages; // Error because this is private
new Vehicle().addDamege('Crash');
var EuroTrack = /** @class */ (function (_super) {
    __extends(EuroTrack, _super);
    function EuroTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EuroTrack.prototype.setRun = function (km) {
        this._run = km / 0.73;
        // this._damages = ''; // No set because this is private
    };
    return EuroTrack;
}(Vehicle));
new EuroTrack().setRun(120000);
// new EuroTrack()._run; // Error because _run is protected
// Example STATIC Methods and Properties
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.getUser = function (id) {
        return UserService.db;
    };
    UserService.prototype.create = function () {
        UserService.db;
    };
    UserService.prototype.static = function () {
        UserService.db = 'Connect'; // Run when init static methods
    };
    return UserService;
}());
UserService.getUser(123);
var inst = new UserService();
inst.create();
// Example Arrow Functions (methods) and run functions inside object
var Payment2 = /** @class */ (function () {
    function Payment2() {
        var _this = this;
        this.date = new Date();
        this.getDataArrow = function () {
            return _this.date;
        };
    }
    // getDate(this: Payment2){
    Payment2.prototype.getDate = function () {
        return this.date;
    };
    return Payment2;
}());
var payment = new Payment2();
var setUser = {
    id: 357,
    paymentDate: payment.getDate,
    paymentDateTwo: payment.getDate.bind(payment),
    paymentDateArrow: payment.getDataArrow(),
};
console.log(payment.getDate()); // Work
console.log(setUser.paymentDate()); // undefined because object payment no found
console.log(setUser.paymentDateTwo()); // WorK
console.log(setUser.paymentDateArrow); // WorK
// Example THIS typosition
var UserBuilder = /** @class */ (function () {
    function UserBuilder() {
        this._name = '';
    }
    UserBuilder.prototype.setName = function (name) {
        this._name = name;
        return this;
    };
    UserBuilder.prototype.setTwoName = function (name) {
        this._name = name;
        return this;
    };
    UserBuilder.prototype.isAdmin = function () {
        return this instanceof AdminBuilder;
    };
    return UserBuilder;
}());
var AdminBuilder = /** @class */ (function (_super) {
    __extends(AdminBuilder, _super);
    function AdminBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._role = [];
        return _this;
    }
    return AdminBuilder;
}(UserBuilder));
var res = new UserBuilder().setName('Petya 1'); // instanceof UserBuilder
var res2 = new AdminBuilder().setName('Petya 2'); // instanceof AdminBuilder
var res3 = new AdminBuilder().setTwoName('Petya 3'); // instanceof UserBuilder
var user19 = new UserBuilder();
if (user19.isAdmin()) {
    console.log(user19);
}
else {
    console.log(user19);
}
// EXAPMLE ABSTACT CLASS
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.handleWithLogs = function (req) {
        console.log('START');
        this.handle(req);
        console.log('FINISH');
    };
    return Controller;
}());
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserController.prototype.handle = function (req) {
        console.log(req);
    };
    return UserController;
}(Controller));
var u_c = new UserController();
u_c.handleWithLogs('REQUEST');
// EXAMPLE GENERICS
var num = [1, 5, 100];
function getDatas(params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
;
var checkMashine = {
    drive: true,
    wheele: true,
    akpp: false,
    kpp: true
};
// Example function with GENERICS
// function logMiddleware<TYPE>(data: TYPE): TYPE { // equals GENERIC T
// function logMiddleware<Y>(data: Y): Y { // equals GENERIC T
function logMiddleware(data) {
    // console.log(data);
    return data;
}
var res4 = logMiddleware(100); // VALIDATE <>
var res5 = logMiddleware('trgfbvc'); // VALIDATE <>
var res6 = logMiddleware([684, 56, 2]); // NO VALIDATE
var res7 = logMiddleware(['a', 'x', 2, 43]); // NO VALIDATE
var res8 = logMiddleware({ a: 321 }); // VALIDATE <>
// Example function with GENERICS 2
function getSplitHalf(data) {
    var split_half = data.length / 2;
    return data.splice(0, split_half);
}
console.log(getSplitHalf([10, 30, 50, 70, 100, 200]));
// EXAMPLE GENERICS USE TYPEs
var split1 = getSplitHalf; // Set Type for function getSplitHalf
var split2 = getSplitHalf; // Equals split1
// let logLine: LogLineType<object> = {
var logLine1 = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
// let logLine: ILogLine<object> = {
var logLine2 = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
// EXAMPLE GENERICS EXTENDS
var Vehicle2 = /** @class */ (function () {
    function Vehicle2() {
        this.run = 0;
    }
    return Vehicle2;
}());
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
var LCV = /** @class */ (function (_super) {
    __extends(LCV, _super);
    function LCV() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.capacity = 0;
        return _this;
    }
    return LCV;
}(Vehicle2));
var vehicle = kmToMiles(new Vehicle2());
var lcv = kmToMiles(new LCV());
kmToMiles({ run: 100 });
// EXAMPLE GENERICS CLASSES
var Resp = /** @class */ (function () {
    function Resp(data, error) {
        if (data) {
            this._data = data;
        }
        if (error) {
            this._error = error;
        }
    }
    return Resp;
}());
var res1 = new Resp('Some data', 404);
var HTTPRes = /** @class */ (function (_super) {
    __extends(HTTPRes, _super);
    function HTTPRes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._code = 0;
        return _this;
    }
    HTTPRes.prototype.setCode = function (code) {
        this._code = code;
    };
    return HTTPRes;
}(Resp));
var res9 = new HTTPRes('text', 10);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
        // constructor(public items: string[]) {};
    }
    return List;
}());
var ExtendedListClass = /** @class */ (function (_super) {
    __extends(ExtendedListClass, _super);
    function ExtendedListClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedListClass.prototype.first = function (items) {
        // return items[0];
        return items[0] + ' --- ' + items[1];
    };
    return ExtendedListClass;
}(List));
var list = new ExtendedListClass();
var res10 = list.first(['One_', 'Two_', 'Three_']);
console.log(res10);
function ExtendedList(Base) {
    return /** @class */ (function (_super) {
        __extends(ExtendedList, _super);
        function ExtendedList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExtendedList.prototype.first = function (items) {
            return items[0] + ' +++ ' + items[1];
        };
        return ExtendedList;
    }(Base));
}
var list1 = ExtendedList(List);
// let res11 = new list1(['First_','Seconf_','Third_']);
var res11 = new list1();
var res12 = res11.first(['First_', 'Second_', 'Third_']);
console.log(res12);
function getValue(obj, key) {
    return obj[key];
}
var set_user1 = {
    name: 'Petya',
    age: 17,
    sister: true
};
var getUserName = getValue(set_user1, 'age');
console.log(getUserName);
// EXAMPLE TYPEOF
var strOrNum;
if (Math.random() > 0.5) {
    strOrNum = 5;
}
else {
    strOrNum = 'ABC';
}
console.log(strOrNum);
if (typeof strOrNum === 'string') {
    console.log(strOrNum);
}
else {
    console.log(strOrNum);
}
var str2OrNum;
var user21 = {
    name: 'Petya'
};
var get_user5 = {
    name: 'Vasya',
    roles: []
};
var get_user_name = get_user5['name'];
var get_user_role = get_user5['roles'];
var get_roles_name = 'roles';
console.log(get_user_name);
console.log(get_user_role);
var set_roles = ['admin', 'user', 'super-user'];
console.log(set_roles);
var succ = {
    code: 200,
    data: 'DONE'
};
var err = {
    code: 404,
    data: new Error('This is error 404')
};
// Example ReturnType
var User66 = /** @class */ (function () {
    function User66(id, name) {
    }
    return User66;
}());
function getData66(id) {
    return new User66(id, 'Petya');
}
var UserServiceClass = /** @class */ (function () {
    function UserServiceClass() {
        this.users = 1000;
    }
    UserServiceClass.prototype.getUserInDB = function () {
        return this.users;
    };
    return UserServiceClass;
}());
function nullUsers(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('Users: ' + obj.users);
    return obj;
}
console.log(new UserServiceClass().getUserInDB());
console.log(nullUsers(new UserServiceClass()).getUserInDB());
console.log(logUsers(nullUsers(new UserServiceClass())).getUserInDB());
console.log(nullUsers(logUsers(new UserServiceClass())).getUserInDB());
// @nullUsersDec
// @threeUserAdvance
// @setUsers(7)
log();
// @setUsers(7)
var UserServiceClass1 = /** @class */ (function () {
    function UserServiceClass1() {
        this.users = 1000;
    }
    UserServiceClass1.prototype.getUserInDB = function () {
        return this.users;
    };
    return UserServiceClass1;
}());
function nullUsersDec(target) {
    target.prototype.users = 0;
}
function threeUserAdvance(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.users = 3;
            return _this;
        }
        return class_1;
    }(constructor));
}
console.log(new UserServiceClass1().getUserInDB());
// EXAMPLE Decorator of Fabric
function setUsers(users) {
    return function (target) {
        target.prototype.users = users;
    };
}
function log() {
    console.log('log init');
    return function (target) {
        console.log('log run');
        console.log(target);
    };
}
var UserService2 = /** @class */ (function () {
    function UserService2() {
        this.users = 2000;
    }
    // @Log
    UserService2.prototype.getUserInDB = function () {
        throw new Error('Error for User.');
    };
    return UserService2;
}());
function Log(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor.value = function () {
        console.log('No error.');
    };
}
console.log(new UserService2().getUserInDB());
