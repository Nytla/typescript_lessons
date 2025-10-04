/**
Небходимо написать декоратор, который добавляет свойство createAt в class, фиксируя дату создания.
*/
interface IUserService {
    users: number;
    getUserInDB(): number;
}

// @CreatedAt
class UserService implements IUserService {
    users: number = 17000;

    getUserInDB(): number {
        return this.users;
    }
}

function CreatedAt<T extends { new (...args: any): {} }>(constructor: T) {
    return class extends constructor {
        createAt = new Date();
    };
}

// Run
const userService = CreatedAt(UserService); 
const us = new userService();
console.log(us);
console.log('Date create: ' + us.createAt);
