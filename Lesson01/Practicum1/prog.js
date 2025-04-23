function add_paragraph_to_a_page() {
  let p = document.createElement('p');
  let my_text = document.createTextNode("получилось!");
  // Прикрепить текст к абзацу, а элемент, например, прямо в тело страницы
  p.appendChild(my_text);
  document.body.appendChild(p);
  // Можно ничего не возвращать, функция работает "под ключ"
}

  //Не забудьте, что страница могла не успеть загрузиться

window.addEventListener(
  'load',
  (event) => {
      // Здесь можно начинать пользоваться ресурсами страницы - они готовы
      add_paragraph_to_a_page();
  }
);