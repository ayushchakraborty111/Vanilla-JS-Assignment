console.log('Hello');
//ToDo List Javascript
//Grab the element by id;
let input = document.getElementById('inp1');
let container = document.getElementById('append-div');
let button = document.getElementById('button');
let clear = document.getElementById('spanner');
var li;

//Add event on click
button.addEventListener('click', (e)=>{
    clear.style.display = "block";
    e.preventDefault();
    console.log('Hello again');
    li = document.createElement('li');
    let inpVal = input.value;
    li.style.marginTop = "12px";
    li.style.listStyle = "none";
    

    // var arr = [];
    if(container.childNodes.length < 1)
    {
        li.innerHTML += inpVal;
        // arr.push(inpVal);
        // console.log(arr, arr.length);
        container.appendChild(li);
    }
    else
    {
        //tried with pushing into array
        // console.log("else");
        // console.log(arr.length);
        // for(let i=0;i<=arr.length;i++)
        // {
        //     console.log(arr.length);
        //     if(container[i] === arr[i])
        //     {
        //         console.log("alert");
        //         alert('Element already present');
        //     }
        //     else
        //     /{
        //         console.log("not Alert");
        //         li.innerHTML += inpVal;
        //         arr.push(inpVal);
        //         console.log(arr);
        //         container.appendChild(li);
        //     }
        // }
        if(container.textContent.includes(inpVal))
        {
            alert('Element already present');
        }
        else
        {
            console.log('Hello');
            li.innerHTML += inpVal;
            console.log(li);
            container.appendChild(li);
        }
    }
    li.innerHTML += "<div id='contain' style='float: right;'><i style='margin-right:20px; color: green' class='fa-solid fa-pen-to-square' id='edit' onClick='f1()'></i><i style='margin-right:20px;color: red;' class='fa-solid fa-trash' id='delete' onClick='f2()'></i></div>"
        

})


//Adding click on icons
function f1(e)
{
    console.log('Hello from edit');
}

function f2(e)
{
    console.log('Hello from delete');
    console.log(container.firstChild.innerHTML);
    container.firstChild.innerHTML = "";
}


//Javascript delete all button
clear.addEventListener('click', ()=>{
    container.innerHTML = "";
})
