class Todo{
    
    #items;
    constructor(){
        this.#items = [];
    }
    get items(){
        return this.#items;
    }
    addTodo(value){
        const items = {
            id: new Date().toString()+value,
            Text: value,
            status: false,
        };

        this.#items.push(items);

        return this.#items.length;

    }
//    toggleStatus(id){
//     this.#items = this.#items.map((items)=>
//     items.id==id?{...items,status: !items.status}:items
//     );
//    }


   getTodo(){
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks")
    .then((res)=>res.json())
    .then((res)=>{
        this.#items = res;
    })
.catch((err)=>{});
   }
}
const todo = new Todo();

todo.getTodo().then(()=>{
    // console.log(todo.items);
    renderTodoList(todo.items);
});

// console.log(this.items)


function renderTodoList(items){
    // console.log(items)
    const target = document.getElementById("todo-items");
    const itemsElemnt = items.map((items)=>createTodocard(items));
    target.innerHTML = null;
    target.append(...itemsElemnt);
}


const addNewTodo =()=>{
    // let data = 
    //  fetch("https://json-server-mocker-masai.herokuapp.com/tasks",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify()})
    // .then((res)=>res.json());
// console.log("he");

const res = document.getElementById("todo-input").value;
console.log(res);

}

function createTodocard(items){
    // console.log(items);
    const div = document.createElement("div");
    const title = document.createElement("p");
    const button = document.createElement("button");
    const delBtn = document.createElement("button");



    title.textContent = items.title;
    button.textContent = items.status;
    delBtn.textContent = "delete";
    div.append(title,button,delBtn);
    return div;

}

// window.addEventListener("load",()=>{
//     const addBtn = document.getElementById("add-todo-btn");
//     addBtn.addEventListener("click",()=>{
//         const input = document.getElementById("todo-input");
//         const text = input.value;
//         todo.addTodo(text);
//     })
// })