/**
Необходимо написать функцию группировки, которая принимает массив объектов
и его ключ, производит группировку по указанному ключу и возращает
сгруппированный объект.
*/
interface IStudentGroups {
    group: number;
    name: string;
}

const StudentGroups: IStudentGroups[] = [
	{ group: 1, name: 'a' },
	{ group: 5, name: 'b' },
	{ group: 7, name: 'f' },
	{ group: 3, name: 'a' },
	{ group: 1, name: 'c' },
	{ group: 2, name: 'f' },
	{ group: 4, name: 'b' },
];




function sortData<T extends { id: number }>(data: T[], order: 'asc' | 'desc' = 'asc'): T[] {
    return data.slice().sort((a, b) => 

		// console.log(a.id),

		// if (typeof a.id == "number") {
	        order === 'asc' ? a.id - b.id : b.id - a.id
		// }
    );
}

// let sort =  sortData(dataN);
// console.log(sort);

