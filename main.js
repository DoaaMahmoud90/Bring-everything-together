const myBtn = document.getElementById('my-btn');
function buttonClicker(){
alert('The form has been submitted');
}
myBtn.addEventListener('click',buttonClicker);

const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email');
const tableBody = document.getElementById('table-body');

function addRow(event){
  event.preventDefault();
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.innerText = `${fullName.value} `;
  const td2 = document.createElement('td');
  td2.innerText = `${email.value} `; //Don't forget to put $ symbol.
  tr.appendChild(td1);
  tr.appendChild(td2);
  tableBody.appendChild(tr);

}
myBtn.addEventListener('click',addRow);// This event will add the inserted name and email to the table.
console.log(fullName);

let odd = document.querySelectorAll('li:nth-child(odd)');// will bold the font in all odd items in any list.
for(let i = 0; i<odd.length; i++){
  odd[i].style.fontWeight= 'bold';
}



