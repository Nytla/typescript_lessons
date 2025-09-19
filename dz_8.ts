/**
Необходимо реализовать функцию toString используя generics, которая принимает любой тип
 и возвращает его строковое представление. Если не может то возвращает undefined
*/
function toString<T>(value: T): string | undefined {
  // Если значение уже строка
  if (typeof value === 'string') {
    return value;
  }

  // Если значение может быть приведено к строке (например, число, boolean, bigint, symbol)
  if (
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'bigint' ||
    typeof value === 'symbol'
  ) {
    return String(value);
  }

  // Если объект имеет собственный toString
  if (
    value !== null &&
    typeof value === 'object' &&
    typeof (value as { toString?: Function }).toString === 'function' &&
    (value as { toString: Function }).toString !== Object.prototype.toString
  ) {
    const str = (value as { toString: Function }).toString();
    if (typeof str === 'string') {
      return str;
    }
  }

  // Не удалось преобразовать
  return undefined;
}

// Примеры использования:
console.log(toString("abc"));           // "abc"
console.log(toString(123));             // "123"
console.log(toString(true));            // "true"
console.log(toString(Symbol("sym")));   // "Symbol(sym)"
console.log(toString({}));              // undefined
console.log(toString(null));            // undefined
console.log(toString(undefined));       // undefined
console.log(toString([1,2,3]));         // "1,2,3"
console.log(toString<[string, number]>(['abcde',2]));