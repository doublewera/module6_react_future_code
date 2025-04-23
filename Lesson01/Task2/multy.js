function multiplication_table() {
    let table = document.createElement('table');
    let tr;
    let td;
    let textNode;
    for (let i = 1; i < 10; i++) {
      // Строка таблицы
      tr = document.createElement('tr');
      for (let j = 1; j < 10; j++) {
          // Ячейка таблицы
          td = document.createElement('td');
          // Текст очередного произведения двух чисел
          textNode = document.createTextNode('' + i * j);
          td.appendChild(textNode);
          tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
}

window.addEventListener(
    'load',
    (event) => {
        multiplication_table();
    }
);