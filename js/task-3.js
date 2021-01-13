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
   removeItem(removedItem){
     const newItems = [];

     for (const item of this._items) {
       if (item === removedItem) continue;
       newItems.push(item)
     }
     this._items = newItems
     return newItems
  }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
const afterAdd = storage.addItem('Дроид');
console.log(newItems); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
const afterRemove = storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//почему не работает без приведения к переменной? ну типа просто залогировать в консоль результат не выходит пока не приведу к переменной какой-то вызов метода