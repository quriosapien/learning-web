import values from './data.js'
import utils from './utils.js'

const form = document.getElementById('myform');
const submit = document.getElementById('submit');
const list = document.getElementById('list');

form.addEventListener("click", function(event){
  event.preventDefault()
})

function renderList () {
  values.forEach(item => {
    let listItem = utils.createElement({
      type: 'li',
      classList: ['list_item', 'tool', 'blue'],
      parent: list,
    })
    utils.createElement({
      type: 'img',
      classList: ['list_item_image'],
      attributes: [
        {
          key: 'src',
          value: item.imagelink
        },
        {
          key: 'alt',
          value: item.name
        }
      ],
      parent: listItem
    })
    listItem.append(item.name)
 }) 
}

function formSubmit() {

  list.innerHTML = '';
  
  const name = form.elements[0].value;
  const imagelink = form.elements[1].value;

  values.push({
    name,
    imagelink
  })
  renderList();
  
}

renderList();

submit.onclick = formSubmit;