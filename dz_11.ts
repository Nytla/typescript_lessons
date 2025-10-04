/**
Необходимо написать тип для результата валидации формы.
*/
interface IForm {
    name: string;
    password: string;
    age?: number;
}

const form: IForm = {
    name: 'Vasya',
    password: '3210',
    age: 19
}

const formValidate: Validate<IForm> = {
    name: {
        isValid: true
    },
    password: {
        isValid: false,
        error: 'Пароль должен быть длиннее 5 символов.'
    },
}

type Validate<T> = {
    [k in keyof T]: {
        isValid: true
    } | {
        isValid: false,
        error: string
    }
}