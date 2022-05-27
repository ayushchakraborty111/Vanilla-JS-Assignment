//local storage implementation with todoList
//grab selector
let input = document.getElementById('inp1');
let ul = document.getElementById('append-div');
let button = document.getElementById('button');
let span = document.getElementById('span');
let a = "";
let b = "";
// let c = [];
let main_div = "";
let index = 0;



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
            // console.log(c);
            //to equate div with arr[index]
            index = item.indexOf(input.value);
            console.log(index);
            main_div=document.getElementById(index);
            console.log(main_div);
            main_div.style.backgroundColor = 'aqua'
            setTimeout(function(){
                main_div.style.backgroundColor = 'rgb(245, 243, 243)';
            }, 600);
        }
        else
        {
            item.push(input.value);
            localStorage.setItem('todo-item', JSON.stringify(item));
            listCreatedItems();
        }
    }
    // console.log(main_div);
    input.value = "";
    // count += 1;
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
function editItem(index, sp_id, div_id) {
    let spanBox = document.getElementById(sp_id);
    let divBox = document.getElementById(div_id);
    // console.log(divBox.outerHTML);
    divBox.innerHTML = `<i class="fa-solid fa-check" style="color: rgb(54, 233, 90);"></i>`;
    spanBox.innerHTML = `<input type="text" style='width: 60%' class='form-control' value='${spanBox.innerText}'>`;


    spanBox.addEventListener('keypress', (e) => {
      if (e.which == 13) {
        // console.log(spanBox.firstChild.value);
        item[index] = spanBox.firstChild.value;
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
    for(i=0;i<item.length;i++)
    {
        a = Math.random(Math.random * 100000);
        b = Math.random(Math.random * 100000);
        // c = Math.random(Math.random * 100000);
        let s = `<div class="row" id='${i}'>
        <div class="col-sm-11">
        <span id='${a}'>${item[i]}</span>
        </div>
        <div class="col-sm-1">
        <div id='${b}'> <i style="color: green; margin-right: 10px;cursor:grab" class="fa-solid fa-pen-to-square" onClick='editItem(` + i + `,${a},${b})'></i><i style="color:red;cursor:pointer;" class="fa-solid fa-trash" onClick='deleteItem(` + i + `)'></i></div> 
        </div>
        </div>`;
        list+=s;
        // c.push(i);
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


