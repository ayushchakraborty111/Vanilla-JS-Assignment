let variable = document.querySelectorAll('.img1');
let count = 0;
let num1, num2;
let image1, image2;
let live = 0;
let attempts = 0, points = 0;
let score = document.getElementById('span1');
let life = document.getElementById('lives');
let span=document.getElementById("span2");


let arr = ['https://media.istockphoto.com/photos/king-of-hearts-playing-card-isolated-picture-id1300991991?b=1&k=20&m=1300991991&s=170667a&w=0&h=mc62Qx7r6n7aGib0x10ApM5_JZCt4bGI2Lujk0NpOkQ=','https://media.istockphoto.com/photos/playing-cards-picture-id175511561?b=1&k=20&m=175511561&s=170667a&w=0&h=ne__P1kG1y_q3BqVt5JwDzo62zamov4czy78m02FMbk=','https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/614px-Playing_card_club_5.svg.png','https://media.istockphoto.com/photos/playing-cards-picture-id1335552934?b=1&k=20&m=1335552934&s=170667a&w=0&h=emwaHWisEQKJ5eqcHMIsAEB0tuZn_bd4AvD7yopAlPo=','https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/10_of_diamonds_-_David_Bellot.svg/1200px-10_of_diamonds_-_David_Bellot.svg.png']; 


document.getElementById('btn1').onclick = () =>{
    document.getElementById('winModal').style.display = 'none';
    document.getElementById('main-div').style.pointerEvents = 'all';
    document.getElementsByTagName('body')[0].style.opacity = '1';
}


//Each card access through onclick in html
function rotate(cardId, imageId)
{
    count++;
    //console.log(count);
    shuffle(imageId);
    if(count == 1)
    {
        num1 = cardId;
        image1 = imageId;
        document.getElementById(num1).style = `transition: 0.7s; transform: rotateY(180deg);height: 120px;width: 120px;`
    }
    if(count == 2)
    {
        num2 = cardId;
        image2 = imageId;
        document.getElementById(num2).style = `transition: 0.7s; transform: rotateY(180deg);height: 120px;width: 120px;`
        setTimeout(flipCard, 800);
        //Check to encounter if ids are same
        if(image1!=image2)
        {
            isMatch(image1, image2);
        }
        count = 0;
    }
}


//Checking and shuffling random images by id
function shuffle(imageId)
{
    let imageById = document.getElementById(imageId);
    let a = Math.floor(Math.random() * arr.length);
    imageById.src = arr[a];
    imageById.style.height = '100%';
    imageById.style.width = '100%'; 
}


function flipCard()
{
    document.getElementById(num1).style = `transition: 2s;transform-style: preserve-3d; transform: rotateY(0deg);height: 120px;width: 120px;`
    document.getElementById(num2).style = `transition: 2s;transform-style: preserve-3d; transform: rotateY(0deg);height: 120px;width: 120px;`
}

// console.log(life.textContent);
// live = life.textContent;
live = 5;

//click to reload
document.getElementById('btn2').onclick = ()=>{
    location.reload();
    document.getElementsByTagName('body')[0].style.opacity = '1';
}


function isMatch(image1, image2)
{
   if(document.getElementById(image1).src === document.getElementById(image2).src)
   {
       points++;
       score.innerHTML = "Score " + points;
       score.style.color = "yellow";
       setTimeout(()=>{
            score.style.color = "white";
       },400)
       if(points>=1)
       {
           document.getElementById('sc1').innerHTML = points;
           document.getElementById('winModal').style.display = 'block';
           document.getElementById('main-div').style.pointerEvents = 'none';
           document.getElementById('winModal').style.opacity = '1';
           document.getElementsByTagName('body')[0].style.opacity = '0.7';
       }   
       count = 0;
   }
   else
   {
       live--;
       if(live < 0)
       {
           document.getElementById('gameOverModal').style.display = 'block';
           document.getElementById('gameOverModal').style.opacity = '1';
           document.getElementById('main-div').style.pointerEvents = 'none';
           document.getElementsByTagName('body')[0].style.opacity = '0.7';
           live = 0;
       }
        span.innerHTML = "Life " + live; 
        span.style.color = "red";
        setTimeout(()=>{
            span.style.color = "white";
        },700)             
   } 
}