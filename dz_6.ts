/**
Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
 */
// Тип данных для продукта
interface Product {
  id: number;
  name: string;
  price: number;
}

// Базовый тип для доставки
interface DeliveryBase {
  date: Date;
}

// Доставка до дома
class HomeDelivery implements DeliveryBase {
  date: Date;
  address: string;

  constructor(address: string, date: Date) {
    this.address = address;
    this.date = date;
  }
}

// Доставка до пункта выдачи
class ShopDelivery implements DeliveryBase {
  date: Date;
  shopId: number;

  constructor(shopId: number) {
    this.shopId = shopId;
    this.date = new Date(); // Сегодня
  }
}

// Класс корзины
class Cart {
  private products: Product[] = [];
  private delivery: DeliveryBase | null = null;

  // Добавить продукт
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // Удалить продукт по ID
  removeProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }

  // Посчитать стоимость
  getTotalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  // Задать доставку
  setDelivery(delivery: DeliveryBase): void {
    this.delivery = delivery;
  }

  // Checkout
  checkout(): { success: boolean; message: string } {
    if (this.products.length === 0) {
      return { success: false, message: "Корзина пуста" };
    }
    if (!this.delivery) {
      return { success: false, message: "Доставка не задана" };
    }
    return { success: true, message: "Заказ оформлен успешно" };
  }
}

// Пример использования
const cart = new Cart();
cart.addProduct({ id: 1, name: "Товар 1", price: 170 });
cart.addProduct({ id: 2, name: "Товар 2", price: 300 });
cart.addProduct({ id: 3, name: "Товар 3", price: 500 });
cart.removeProduct(1);
cart.setDelivery(new HomeDelivery("ул. Пушкина, д. 10", new Date("2025-09-18")));
console.log(cart);
console.log(cart.checkout());