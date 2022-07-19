const blocks = document.getElementsByClassName('Block')
console.log(blocks)
const block3 = document.getElementById('block3')
block3.classList.add('newClass')
block3.classList.remove("block")
console.log(block3.classList)
block3.onclick = () => {
    block3.classList.toggle('active')
}

const block2 = document.getElementById('block2')

block2.classList.add('newClass')

block2.onclick = () => {
    block2.classList.toggle('active')
}
const input = document.getElementById('input')
const button = document.getElementById('button')
button.onclick = () => {
    const div = document.createElement ('div')
    const deleteButton = document.createElement('button')
    const p = document.createElement('p')
    deleteButton.innerText = 'delete'

    deleteButton.onclick = (e)=>{
       e.target.parentElement.remove()
    }
    const changeButton = document.createElement('button')
    changeButton.innerText = 'change'
    changeButton.onclick = (e) =>{
        e.target.previousElementSibling.previousElementSibling.innerText = prompt()
    }
    div.setAttribute('class', 'block')
    p.innerText = input.value;

    div.append(p, deleteButton, changeButton)
    document.body.append(div)
    input.value = ''
}