var list = document.querySelector("#app ul")
var input = document.querySelector("#app input")
var button = document.querySelector("#app button")

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

renderTodos = () => {
list.innerHTML = ''

    for(todo of todos){
        var todoElement = document.createElement("li")
        var todoText = document.createTextNode(todo + ' ')

        var link = document.createElement('a')

        link.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        link.setAttribute('onclick', 'deleteTodo('+pos+')')

        var linkText = document.createTextNode('Excluir')

        link.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(link)
        list.appendChild(todoElement)
    }
}

renderTodos()

addTodo = () => {
    var todoText = input.value

    todos.push(todoText)
    input.value = ''
    renderTodos()
    saveToStorage()
}
button.onclick = addTodo

deleteTodo = (pos) => {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

saveToStorage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos))

}