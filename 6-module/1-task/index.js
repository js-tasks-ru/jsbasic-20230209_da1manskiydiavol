/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows = [];

  constructor(rows) {
    this.rows = rows;
    this.render();
  }

  set rows(rows) {
    this.#rows = rows;
  }

  render() {
    this.elem = document.createElement('table');
    this.elem.createTHead().insertAdjacentHTML('beforeEnd',
      '<tr>' +
      '<th>Имя</th>' +
      '<th>Возраст</th>' +
      '<th>Зарплата</th>' +
      '<th>Город</th>' +
      '<th></th>' +
      '</tr>');

    this.elem.insertAdjacentHTML('beforeEnd', this.#rows.map(item =>
      `<tr>
       <td>${item.name}</td>
       <td>${item.age}</td>
       <td>${item.salary}</td>
       <td>${item.city}</td>
       <td><button>X</button></td>
       </tr>`).join(''));

    this.elem.addEventListener('click', event => {
      if (event.target.closest('button')) {
        event.target.closest('tr').remove();
      }
    });

    return this.elem;
  }
}

