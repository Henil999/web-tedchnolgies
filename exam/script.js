let field = document.getElementById("value");
let button = document.querySelector('button');

if (button) {
  button.addEventListener('click', addValue,false);
}

function addValue() {
  if (field.value !== '') {
    let table = document.querySelector('#content');

    let tr = document.createElement('tr');
    let td = document.createElement('td');

    td.innerText = field.value.replace(/[^a-zA-Z ]/g,"");
    tr.appendChild(td);
    table.appendChild(tr);
    field.value = '';
  }
}
function myFunction() {
    alert("Input field lost focus.");
}