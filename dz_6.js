"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Доставка до дома
class HomeDelivery {
    date;
    address;
    constructor(address, date) {
        this.address = address;
        this.date = date;
    }
}
// Доставка до пункта выдачи
class ShopDelivery {
    date;
    shopId;
    constructor(shopId) {
        this.shopId = shopId;
        this.date = new Date(); // Сегодня
    }
}
// Класс корзины
class Cart {
    products = [];
    delivery = null;
    // Добавить продукт
    addProduct(product) {
        this.products.push(product);
    }
    // Удалить продукт по ID
    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
    }
    // Посчитать стоимость
    getTotalPrice() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
    // Задать доставку
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    // Checkout
    checkout() {
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
cart.addProduct({ id: 1, name: "Товар 1", price: 100 });
cart.setDelivery(new HomeDelivery("ул. Пушкина, д. 10", new Date("2025-09-18")));
console.log(cart.checkout());
//# sourceMappingURL=dz_6.js.map