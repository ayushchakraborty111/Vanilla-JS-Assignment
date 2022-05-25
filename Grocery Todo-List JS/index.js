//local storage implementation with todoList
//grab selector
let input = document.getElementById('inp1');
let ul = document.getElementById('append-div');
let button = document.getElementById('button');
let span = document.getElementById('span');
let a = "";
let b = "";


//check if todos is present or not if not then return empty array
let item = JSON.parse(localStorage.getItem('todo-item')) 
|| []; // fallback 



button.onclick = (e) =>
{
    span.style.display = "block";
    e.preventDefault();
    if(input.value == "")
    {
        alert('Please enter something');
    }
    else
    {
        if(item.includes(input.value)){
            alert('Already present');
        }
        else
        {
            item.push(input.value)
        }
    }
    localStorage.setItem('todo-item', JSON.stringify(item));
    listCreatedItems();
    input.value = "";
}


input.addEventListener('keydown', (e)=>{
    let evtObj = window.event?event : e;
    if(evtObj.keyCode == 67 && evtObj.altKey)
    {
        input.value = "";
    }
})


//edit item function
// function editItem(index, sp_id, div_id)
// {
//     // console.log('Edit button');    // flag = true;
//     // let arrVal = item[index];
//     // input.value = arrVal;
//     // input.addEventListener('keypress', (e)=>{
//     //     if(e.which == 13)
//     //     {
//     //         if(input.value!="")
//     //         {
//     //             item[index] = input.value;
//     //         }
//     //         input.value = "";
//     //     } 
//     // })
// }
function editItem(index, span_id, div_id) {
    let spanBox = document.getElementById(span_id);
    let divBox = document.getElementById(div_id);
    // console.log(divBox.outerHTML);
    var check = Math.floor(Math.random*1000);
    var tick = document.getElementById(check);
    spanBox.innerHTML = `<input type="text" value='${spanBox.innerText}'>`;
    divBox.innerHTML = `<i id='${check}' class="fa-solid fa-check"style="color: rgb(54, 233, 90);cursor:progress"></i>`;
    spanBox.addEventListener('keypress', (e) => {
      if (e.keyCode == 13 || e.keyCode == 32) {
        item[index] = spanBox.firstElementChild.value;
        localStorage.setItem('todo-item', JSON.stringify(item));
        listCreatedItems();
      }
  
    })
  }




//Create list items
let list = "";

function listCreatedItems()
{
    //item is from local storage
    for(let i=0;i<item.length;i++)
    {
        a = Math.random(Math.random * 100000);
        b = Math.random(Math.random * 100000);
        list += `<span id='${a}'>${item[i]}</span><div id='${b}' style="float:right;"> <i style="color: green; margin-right: 10px;cursor:grab" class="fa-solid fa-pen-to-square" onClick='editItem(` + i + `,${a},${b})'></i><i style="color:red;cursor:pointer;" class="fa-solid fa-trash" onClick='deleteItem(` + i + `)'></i></div> ` + "<br> ";
    }
    // console.log(list);
    ul.style.listStyle = "none";
    ul.innerHTML = list;
    list = "";
}





//delete item function
function deleteItem(index)
{
    item.splice(index, 1);
    localStorage.setItem('todo-item', JSON.stringify(item));
    listCreatedItems();
}



//clear all ul
span.onclick = () =>{
    localStorage.clear();
    ul.innerHTML = "";
    span.innerHTML = "";
}



//function to run when page reloads
window.onload = () =>{
    listCreatedItems();
}


