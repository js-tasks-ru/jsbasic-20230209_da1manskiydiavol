function highlight(table) {
  let row = table.rows;
  for (let i = 1; i < row.length; i++) {
    if (row[i].cells[3].hasAttribute('data-available')) {
      if (row[i].cells[3].getAttribute('data-available') === 'true') row[i].classList.add('available');
      else row[i].classList.add('unavailable');
    } else row[i].hidden = 'true';
    if (row[i].cells[2].textContent === 'm') {
      row[i].classList.add('male');
    }
    else row[i].classList.add('female');
    if (row[i].cells[1].textContent <= 18) row[i].style.textDecoration = 'line-through';
  }
}

