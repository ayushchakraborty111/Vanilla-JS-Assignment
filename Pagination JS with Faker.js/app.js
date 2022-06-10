"use strict";
let button = document.getElementById('btn');
let genInput = document.getElementById('generate');
let name = document.getElementById('name');
let rollNo = document.getElementById('rno');
let mobNo = document.getElementById('mno');
let email = document.getElementById('email');
let currSem = document.getElementById('csem');
let address = document.getElementById('address');
let contain = document.getElementById('contain');
let button1 = document.getElementById('btn1');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let firstPageButton = document.getElementById('one');
let secondPageButton = document.getElementById('two');
let thirdPageButton = document.getElementById('three');
let fourthPageButton = document.getElementById('four');
let fifthPageButton = document.getElementById('five');
let arr = [];
let list = "";
let currPage = 1;
let maxContent = 10;
let count = 1;
let start=0;
let end=0;



button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(genInput.value == "")
    {   
        alert('Please specify no of rows');
    }
    arr = [];
    count = 1;
    for(let i=0;i<genInput.value;i++)
    {
        const randomName = faker.name.findName();
        name.value = randomName;
        const phNo = faker.phone.phoneNumberFormat()
        mobNo.value = phNo;
        const email1 = faker.internet.email();
        email.value = email1;
        const rno = faker.random.number({ min: 1, max: 100000 }); 
        rollNo.value = rno;
        const sem = faker.random.number({ min: 1, max: 8 });
        currSem.value = sem; 
        const add = {
            streetAddress: faker.address.streetAddress(),
            streetName: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country()
        };
        address.value = JSON.stringify(''+Object.values(add));
        appendToArr();
    }    
})


function appendToArr()
{
    const main_obj = {
        id: count,
        name: name.value,
        rollNo: rollNo.value,
        mobileNo: mobNo.value,
        email: email.value,
        currentSem: currSem.value,
        address: address.value
    }
    arr.push(main_obj);
    count++;
    renderData();
}


//prev button
prevButton.addEventListener('click', ()=>{
    if(currPage>1)
    {
        currPage--;
    }
    renderData();
})

//next button
nextButton.addEventListener('click', ()=>{
    if(currPage * maxContent< arr.length)
        currPage++;
    renderData();
}) 

console.log(firstPageButton);

// function countOfPages()
// {
//     return Math.ceil(arr.length/maxContent);
// }

//first page button
firstPageButton.addEventListener('click', ()=>{
    if(currPage*maxContent<arr.length)
        currPage = 1;
    renderData();
})

secondPageButton.addEventListener('click', ()=>{
    if(currPage*maxContent<arr.length)
        currPage = 2;
    renderData();
})

thirdPageButton.addEventListener('click', ()=>{
    if(currPage*maxContent<arr.length)
        currPage = 3;
    renderData();
})

fourthPageButton.addEventListener('click', ()=>{
    if(currPage*maxContent<arr.length)
        currPage = 4;
    renderData();
})

fifthPageButton.addEventListener('click', ()=>{
    if(currPage*maxContent<arr.length)
        currPage = 5;
    renderData();
})


//render html

function renderData()
{
    //row is passed to show all the rows appended
    contain.innerHTML = "";
    let s = `<tr style='background-color:lightgray;'>
    <th>Id</th>
    <th>Name</th>
    <th>Roll No</th>
    <th>Mobile No</th>
    <th>Email</th>
    <th>Current Sem</th>
    <th>Address</th>
    </tr>`
    list += s;
    arr.filter((row, index)=>{
        start = (currPage-1) * maxContent;
        // console.log(start);
        end = start + maxContent;
        if(index>=start && index<end)
        {
            return true;
        }
    }).forEach((a)=>{
        let s = `<tr>
        <td>${a.id}</td>
        <td>${a.name}</td>
        <td>${a.rollNo}</td>
        <td style='width: 120px;'>${a.mobileNo}</td>
        <td>${a.email}</td>
        <td>${a.currentSem}</td>
        <td>${a.address}</td>
        </tr>`
        list += s;
    })
    contain.innerHTML = list;
    list = "";
}