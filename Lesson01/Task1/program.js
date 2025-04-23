function check() {
    let p = document.createElement('p');
    let y = year.valueAsNumber;
    let year_type = 'обычный';
    if (y % 4 == 0 && y % 100 > 0 || y % 400 == 0) {
        year_type = 'високосный';
    }
    let textNode = document.createTextNode(year_type);
    p.appendChild(textNode);
    document.body.appendChild(p);
}