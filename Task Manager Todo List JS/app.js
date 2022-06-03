$(function () {
    $('#dtpickerdemo').datetimepicker();
});

let nameInp = document.getElementById('name');
let datePicker = document.getElementById('dtpickerdemo');
let desc = document.getElementById('desc');
let button = document.getElementById('submitBtn');
let container = document.getElementById('container');
let list = "";
let data = [];


//for local storage
let todoItem = JSON.parse(localStorage.getItem('taskTodo')) || [];


button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(nameInp.value == "" || datePicker.value == "" || desc.value == "")
    {
        alert('Empty fields not allowed');
    }
    else
    {
        let n1 = `<b>${nameInp.value}</b>`;
        let n2 = `Time: ${datePicker.value}`;
        let n3 = `${desc.value}`;
        data = [n1, n2, n3];
        let data1 = data.join(" ");
        todoItem.push(data1);
        console.log(todoItem.length);
        localStorage.setItem('taskTodo', JSON.stringify(todoItem));
        addTodo();//render
        nameInp.value = "";
        datePicker.value = "";
        desc.value = "";
    }
})

//delete single task
function deleteIndex(index)
{
    todoItem.splice(index, 1);
    localStorage.setItem('taskTodo', JSON.stringify(todoItem));
    addTodo();
}


//render todo div
function addTodo()
{
    for(let i=0;i<todoItem.length;i++)
    {
        let s = `
        <div class='col-sm-3' style='border: 1.5px solid black;margin: 10px;'>
        ${todoItem[i]} <div><a onClick='deleteIndex(`+i+`)'>Remove</a></div>
        </div>`;
        list += s;
    }
    // container.style = 'text-align: center';
    container.innerHTML = list;
    list = "";
}

window.onload = () =>{
    addTodo();
}