function add_participant() {
    let li = document.createElement('li');
    let my_text = document.createTextNode(" место - " + new Date());
    // Прикрепить текст к элементу списка,
    li.appendChild(my_text);
    // а элемент - в список, который доступен по имени переменной своего id
    participants.appendChild(li);
    // Можно ничего не возвращать, функция работает "под ключ"
}