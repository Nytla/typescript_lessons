/**
Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение
*/
abstract class Logger {
  // Абстрактный метод, который должен реализовать потомок
  abstract log(message: string): void;

  // Метод, который выводит дату через log
  printDate(): void {
    const now = new Date();
    this.log(now.toISOString());
  }
}

class RealLogger extends Logger {
  // Реализация абстрактного метода log
  log(message: string): void {
    console.log(message);
  }

  // Метод, выводящий сначала дату, затем сообщение
  logWithDate(message: string): void {
    this.printDate();
    this.log(message);
  }
}

// Пример использования:
const logger = new RealLogger();
logger.logWithDate('Привет, мир!');