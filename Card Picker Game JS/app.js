let variable = document.querySelectorAll('.img1');
let count = 0;
let live = 0;
let score = document.getElementById('score');
let life = document.getElementById('lives');
let arr = ['https://images.unsplash.com/photo-1615162818882-14d8d6330fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpYW9tb25kJTIwY2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60','https://media.istockphoto.com/photos/old-ace-of-spades-isolated-on-white-picture-id184957089?b=1&k=20&m=184957089&s=170667a&w=0&h=5Nm68J_tcXa2pIrL3-FtL7Did22SIgzlgZ0h7eZ3ES8=','https://media.istockphoto.com/photos/king-of-hearts-playing-card-isolated-picture-id1300991991?b=1&k=20&m=1300991991&s=170667a&w=0&h=mc62Qx7r6n7aGib0x10ApM5_JZCt4bGI2Lujk0NpOkQ=','https://media.istockphoto.com/photos/game-cards-picture-id123133624?b=1&k=20&m=123133624&s=170667a&w=0&h=-_yF0YTjxf1H48pdO9aOvFZcdfV2tkm-ljjHhRhG0bc=','https://media.istockphoto.com/photos/playing-cards-picture-id175511561?b=1&k=20&m=175511561&s=170667a&w=0&h=ne__P1kG1y_q3BqVt5JwDzo62zamov4czy78m02FMbk=','https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/614px-Playing_card_club_5.svg.png'];


for(let i=0;i<variable.length;i++)
{
    let a = Math.floor(Math.random() * arr.length);
    // console.log(a);
    variable[i].setAttribute('src', arr[a]);
    variable[i].setAttribute('style', 'width: 100%; height: 100%;');
}

function isMatch()
{
    for(let i=0;i<variable.length;i++)
    {
        for(let j=i+1;j<variable.length;j++)
        {
            count++;
        }
    }
}



