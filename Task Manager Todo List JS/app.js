$(function () {
    $('#dtpickerdemo').datetimepicker();
});

let nameInp = document.getElementById('name');
let datePicker = document.getElementById('dtpickerdemo');
let description = document.getElementById('desc');
let button = document.getElementById('submitBtn');
let container = document.getElementById('container');
let list = "";


//for local storage
let todoItem = JSON.parse(localStorage.getItem('taskTodo')) || [];


button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(nameInp.value == "")
    {
        alert("Name can't be empty");
    }
    else
    {
        const obj = {name: nameInp.value,date: datePicker.value, description: description.value};
        for(let i in obj)
        {
            if(obj[i] == null || obj[i] == '')
            {
                delete obj[i];
            }
        }
        todoItem.push(obj);
        console.log(todoItem);
        // console.log(todoItem.length);
        localStorage.setItem('taskTodo', JSON.stringify(todoItem));
        generateTodo();//render
        nameInp.value = "";
        datePicker.value = "";
        description.value = "";
    }
})

//delete single task by index of an array and rendering it to the html
function deleteIndex(index)
{
    // console.log(index);
    todoItem.splice(index, 1);
    localStorage.setItem('taskTodo', JSON.stringify(todoItem));
    generateTodo();
}


//render into div container
function generateTodo()
{
    // list = `
    // <ul>
    //     ${todoItem.map((todo,i)=>`
    //     <li>${todo.name}</li>
    //     <li>${todo.date}</li>
    //     <li>${todo.description}</li>
    //     <div><a onClick='deleteIndex(`+i+`)'>Remove</a></div>
    //     `)}
    // </ul>
    // todoItem.forEach((todos, i)=>{
    //     let s = `<div>
    //     ${appendTodo(todos, i)}
    //     <div><a onClick='deleteIndex(`+i+`)'>Remove</a></div>
    //     </div>`;
    //     list += s;
    // })
    // `;
    for(let i=0;i<todoItem.length;i++)
    {
        let s = `
        <div class='col-sm-3' style='border: 1.5px solid black;margin: 10px;'>
        <h4>${todoItem[i].name}</h4>
        <p><b>Time:</b>${todoItem[i].date}</p>
        <p class='text-muted'>${todoItem[i].description}</p>
        <div><a onClick='deleteIndex(`+i+`)'>Remove</a></div>
        </div>
        `;
        list += s;
    }
    container.innerHTML = list;
    list = "";
}


// function appendTodo(todos, i)
// {
//     for(let key of todos)
//     {
//         return `${key} : ${todos[key]}`;
//     }
// }

window.onload = () =>{
    generateTodo();
}