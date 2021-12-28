let todoList = document.querySelector('.todo__list')
let trash = document.querySelector('.trash__box')
let createBtn = document.querySelector('.create__btn')
let tegs = document.getElementById('tegs')
let text = document.getElementById('todo__text')
let number = 1
// let deleteBtn = document.querySelectorAll('.dalete__btn')
let deleteAllBtn = document.querySelector('.delete__all__btn')

let tasks = []

createBtn.addEventListener("click", function() {
    let tegValue = tegs.value
    let todotextValue = text.value
    text.value = ''
    creator(number, todotextValue, tegValue, setDate())
    render(tasks)
    number++
    
})

const creator = (numberValue, textValue, tagValue, dateValue) => {
    const item = {
        number: numberValue,
        text: textValue,
        tag: tagValue,
        date: dateValue
    }

    tasks.push(item)
    console.log(tasks)
}

const render = (tasks) => {
    todoList.innerHTML = ''

    tasks.forEach(element => {
        const liElement = document.createElement('li')
              liElement.className = 'todo__item'
              liElement.insertAdjacentHTML('afterbegin', `
                          <span class="number"> ${element.number}</span>
                          <span class="text">${element.text}</span>
                          <span class="tag"> ${element.tag}</span>
                          <span class="date">${element.date}</span>
                          <button class="dalete__btn" id="dalete__btn">Удалить</button> 
            `)
        todoList.append(liElement)
    });
}

const setDate = () => {
    let today = new Date()
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();

    let dateNow = mm+'-'+dd+'-'+yyyy
    return dateNow
}