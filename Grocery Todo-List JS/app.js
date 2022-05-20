console.log('Hello');
//ToDo List Javascript
//Grab the element by id;
let input = document.getElementById('inp1');
let container = document.getElementById('append-div');
let button = document.getElementById('button');
let clear = document.getElementById('spanner');
let ulAll = "";
var li;
let flag = false;


//Dynamic array
var arr = [];
//local storage
let objArr = JSON.parse(localStorage.getItem('session'));
for(let i=0;i<objArr.length;i++)
{
    container.innerHTML += objArr[i] + "<br>";        
}
//Add event on click
button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(flag == false)
    {
    clear.style.display = "block";
    console.log('Hello again');
    li = document.createElement('li');
    let inpVal = input.value;
    li.style.marginTop = "12px";
    li.style.listStyle = "none";
    

    if(container.childNodes.length < 1)
    {
        container.appendChild(li);
    }
    else
    {
        if(container.textContent.includes(inpVal))
        {
            alert('Element already present');
        }
        else
        {
            console.log('Hello');
            // li.innerHTML += `<span>${inpVal}</span>`;
            console.log(li);
            container.appendChild(li);
        }
    }
    editOrNot = false;
    li.innerHTML += `<span>${inpVal}</span><div id='contain' style='float: right;'><i style='margin-right:20px; color: green' class='fa-solid fa-pen-to-square' id='edit' onClick='editItem()'></i><i style='margin-right:20px;color: red;' class='fa-solid fa-trash' id='delete' onClick='f2()'></i></div>`
    input.value = ""; 
    ulAll = document.querySelectorAll('li');
    // let ul = document.createElement('ul');
    console.log(ulAll);
    
    for(let i=0;i<ulAll.length;i++)
    {
        arr.push(ulAll[i].innerHTML);
    }
    //local storage
    console.log(arr);
    localStorage.setItem('session', JSON.stringify(arr));
    // JSON.parse(localStorage.getItem('session')); 
    // container.innerHTML = localStorage.getItem('session');
    }
    else
    {
    flag=false
    textValue.innerText=text.value;
    textValue.innerHTML+="<div id='contain' style='float: right;'><i style='margin-right:20px; color: green' class='fa-solid fa-pen-to-square' id='edit' onClick='editItem()'></i><i style='margin-right:20px;color: red;' class='fa-solid fa-trash' id='delete' onClick='f2()'></i></div>"
    for(let i=0;i<ulAll.length;i++)
    {
        ulAll[i].onclick = () =>{
            ulAll[i].style.opacity = "1";
        }
    }
    }
})




//Adding click on icons

//delete icon
function f2()
{
    console.log('Hello from delete');
    // console.log(container.firstChild.innerHTML);
    // container.firstChild.innerHTML = "";
    // console.log(arr);
    for(let i=0;i<ulAll.length;i++)
    {
        ulAll[i].onclick = function(){
            container.removeChild(ulAll[i]);
        }
    }
}


//Javascript delete all button
clear.addEventListener('click', ()=>{
    container.innerHTML = "";
})

//local Storage


var textValue = "";
var text;
//edit icon
function editItem(){
    console.log("hello");
    flag = true;
    textValue = window.event.target.parentElement.parentElement;
    text = document.getElementById("inp1");
    for(let i=0;i<ulAll.length;i++)
    {
        ulAll[i].style.opacity = "0.4";
        ulAll[i].onclick = () =>{
        ulAll[i].disabled = true;
        console.log(ulAll[i].parentElement.childNodes[0].innerText);
        //parentElement.childNodes[0].innerHTML = `<input>`
    }
    text.value=textValue.innerText;
    }
}