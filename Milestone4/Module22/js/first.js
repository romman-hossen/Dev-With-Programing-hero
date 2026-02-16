// const Section = document.getElementsByTagName('section');
const Section = document.querySelectorAll('section')
// console.log(Section)
for(const item of Section)
{
    // console.log(item)
    item.style.backgroundColor = 'skyblue';
    item.style.color = 'white';
    item.style.padding = '50px';
    // item.style.border = '2px solid black';
    item.style.marginBottom = '40px';
    item.style.borderRadius = '20px';
    item.style.boxShadow = '0 0 10px 0px gray';
    item.style.maxWidth = "1000px"

}
for(const item of Section){
    // item.classList.add('box-card')
}

// child node 
const child = document.getElementById('sectionId').childNodes[0].parentNode.parentNode.parentNode.parentNode.parentNode;
// console.log(child);

// set element by create element // innerText or innerHTML and appendChild
const newChild = document.createElement('li');
newChild.innerText ='neymar jr'
// console.log(newChild)

// set to the list item 
const player = document.getElementById('footballPlayer')
player.appendChild(newChild);
