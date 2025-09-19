/**
Необходимо реализовать функцию sortData используя generics, для сортировки любых
объектов, которые имеют id по убыванию и по возрастанию
*/
const dataN = [
	{ id: 7, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 0, name: 'Надя' },
];

const dataS = [
	{ id: 'g', name: 'Петя' },
	{ id: 'v', name: 'Вася' },
	{ id: 'a', name: 'Надя' },
];

function sortData<T extends { id: number }>(data: T[], order: 'asc' | 'desc' = 'asc'): T[] {
    return data.slice().sort((a, b) => 
        order === 'asc' ? a.id - b.id : b.id - a.id
    );
}

let sort =  sortData(dataN);
console.log(sort);

