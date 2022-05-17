const screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');


for(let btn of buttons)
{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerText != '='&& e.target.innerText != 'C')
        {
            screen.value += e.target.innerText;
        }
        let buttonText = e.target.innerText;
        console.log(e.target.innerText);
        if(buttonText == 'AC')
        {
            screen.value = "";
        }
        if(buttonText == 'C')
        {
            removeOp();
        }

        // if(buttonText == 'C')
        // {
        //     // console.log('Hello');
        //     let m = screen.value;
        //     let arr = []
        //     for(let i=0;i<m.length;i++)
        //     {
        //         if(m[i]!='C')
        //             arr.push(m[i]);
        //     }
        //     arr.pop();
        //     screen.value = arr;
        // }
        // if(document.getElementById('screen').value == '00')
        // {
        //     document.getElementById('screen').value = '0';
        // }
        // if(buttonText=='+'||buttonText=='-'||buttonText=='/'||buttonText=='x'||buttonText=='%')
        // {
        //     //for count
        //     let num = buttonText;
        //     let b = 0, q = 0;
        //     // if(num.length == 1)
        //     // {
        //     //     clrv();
        //     // }
        //     for(let i=0;i<num.length;i++)
        //     {
        //         if(num[i]=='+'||num[i]=='-'||num[i]=='/'|| num[i]=='%'|| num[i]=='x')
        //         {
        //             // console.log("Hello");
        //             q = num[i];
        //             b++;
        //         }
        //     }
        //     console.log(b);
        //     if(b>1)
        //     {
        //         removeOp();
        //     }
        // }
        let a = screen.value;
        let count = 0;
        for(let i=0;i<a.length;i++)
        {
            if(a.charAt(i)=='+' || a.charAt(i)=='/' || a.charAt(i)=='x' || a.charAt(i)=='%' || a.charAt(i)=='-')
            {
                count++;    
            }
        }
        console.log(count);
        if(count>1)
        {
            removeOp();
        }
        if(buttonText == '=')
        {
            operations();
        }
    })
    btn.addEventListener('keydown', (e)=>{
        
    })
}


//When user clicks the enter button then he will get the desired result
screen.addEventListener('keypress', (e)=>{
    if(e.which == 13)
    {
        operations();
    }
})






function clrv()
{
    screen.value = "";
}

function removeOp()
{
    console.log('Hello');
    let m = screen.value;
    console.log(m);
    screen.value = m.slice(0, -1);
    console.log(screen.value);
}

function operations()
{
    let n = screen.value;
    let a = 0, b;
    for(let i=0;i<n.length;i++)
    {
        if(n[i]=='+'|| n[i]=='-'|| n[i]=='/'|| n[i]=='%'|| n[i]=='x')
        {
            b = n[i];
            a++;
        }
    }
    // console.log(a);
    //Splitting the array based on the user's value
    if(b == '+')
    {
        let opTwo = n.split('+');
        console.log(opTwo);
        let add = parseFloat(opTwo[0]) + parseFloat(opTwo[1]);
        screen.value = add;
        if(screen.value == 'NaN')
        {
            clrv();
        }
    }
    if(b == 'x')
    {
        let opTwo = n.split('x');
        console.log(opTwo);
        let mul = parseFloat(opTwo[0]) * parseFloat(opTwo[1]);
        screen.value = mul;
        if(screen.value == 'NaN')
        {
            clrv();
        }
    }
    if(b == '-')
    {
        let opTwo = n.split('-');
        console.log(opTwo);
        let sub = parseFloat(opTwo[0]) - parseFloat(opTwo[1]);
        screen.value = sub;
        if(screen.value == 'NaN')
        {
            clrv();
        }
    }
    if(b == '/')
    {
        let opTwo = n.split('/');
        console.log(opTwo);
        let quo = parseFloat(opTwo[0]) / parseFloat(opTwo[1]);
        screen.value = quo;
        if(screen.value == 'NaN')
        {
            clrv();
        }
    }
    if(b == '%')
    {
        let opTwo = n.split('%');
        console.log(opTwo);
        let rem = parseFloat(opTwo[0]) % parseFloat(opTwo[1]);
        screen.value = rem;
        if(screen.value == 'NaN')
        {
            clrv();
        }
    }   
}
