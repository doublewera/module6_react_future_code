function add_header_to_a_page(text_param) {
        let my_header = document.createElement('h1');
        let my_text = document.createTextNode(text_param);
        my_header.appendChild(my_text);
        document.body.appendChild(my_header);
        // Можно ничего не возвращать, функция работает "под ключ"
    }
  
window.addEventListener(
    'load',
    (event) => {
    console.log('mew')
        // Здесь можно начинать пользоваться ресурсами страницы - они готовы
        add_header_to_a_page(prompt('Что напишем?'));
    }
);