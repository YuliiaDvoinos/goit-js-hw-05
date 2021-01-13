// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage{
  constructor(items) {
    this._items = items;
   }
  getItems() {
    return this._items
  }
  
  addItem(item) {
    if(this._items.includes(item))return
    this._items.push(item)
    
  }
    removeItem(item) {
    const removedItem = this._items.indexOf(item);
    if (removedItem !== -1) {
      this._items.splice(removedItem, 1);
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');

console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');

console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

