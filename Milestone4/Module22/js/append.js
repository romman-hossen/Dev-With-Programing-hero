// using dom create a new section and section element without using html
const main = document.getElementById('mainSection');
// console.log(main)

// create a section by createElement
const filSection = document.createElement('section')

// create h1
const newh1 =document.createElement('h1') ;
newh1.innerText = 'Tumi ki amae hasi mukher abar karon hobe';
filSection.appendChild(newh1);

// create ul
const ul = document.createElement('ul');

//create list 
const li = document.createElement('li');
li.innerText = 'tumpa rani';
ul.appendChild(li)
// list 2
const li2 = document.createElement('li')
li2.innerText = "romaisha pagli";
ul.appendChild(li2);

// append fillSection on main container
main.appendChild(filSection);
newh1.appendChild(ul);

// secAdd.innerHTML = "tumi  kemon aso";

// Easyier to create HTML
const section = document.createElement('section');
section.innerHTML = `
<h1>Book-Shelf</h1> 
<ul>
  <li>Bangla</li>
  <li>English</li>
  <li>Physics</li>
  <li>Chemistry</li>
  <li>Biology</li>
</ul> `
main.appendChild(section)

