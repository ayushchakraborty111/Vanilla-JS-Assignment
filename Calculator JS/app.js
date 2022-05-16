const screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');


for(let btn of buttons)
{
    let screenVal = screen.value;
    btn.addEventListener('click', (e)=>{
        console.log(e.target.innerText);
        const buttonText = e.target.innerText;
        if(buttonText == "AC")
        {
            screen.value = "";
        }
        else if(buttonText == "x")
        {
            screen.value += "*"; 
        }
        else if(buttonText == "=")
        {
            try{
                screen.value = eval(screen.value);
            }
            catch{
                console.log(e.message);
            }
        }
        else
        {
            screen.value += buttonText;
        }
    })
}




