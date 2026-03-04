// console.log("hamio olari thita rakomo touali mojali tita");
const getTodo = () => {
    const url ="https://dummyjson.com/todos";
    fetch(url)
    .then(res => res.json())
    .then(data =>todoContainer(data.todos));
    // console.log(fetch)

}
// completed
// : 
// false
// id
// : 
// 1
// todo
// : 
// "Do something nice for someone you care about"
// userId
// : 
// 152
// [[Prototype]]
// : 
// Object
const todoContainer = (todos) => {
    // console.log(typeof todos)
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";
    
    console.log(todoContainer)
    todos.forEach((todo) => {
        // console.log(todo.completed)
        let div = document.createElement("div");
        div.innerHTML =`
        <div class = "todo-card">
        <p>${todo.completed} ${todo.completed == true ? `<i class="fa-regular fa-square-check"></i>`: `<i class="fa-solid fa-square-check"></i>`}</p>
        <h4> ${todo.userId}</h4>
        <p> ${todo.todo}</p>
        </div>
        `
        todoContainer.append(div)

    })
}
getTodo();
