const screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');


for(let btn of buttons)
{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerText !== '='&& e.target.innerText !== 'C')
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
}


//When user clicks the enter button then he will get the desired result
screen.addEventListener('keypress', (e)=>{
    if(e.which == 13)
    {
        operations();
        for(let btn of buttons)
        {
            if(btn.innerText == '=')
            {
                btn.style.background = 'orange';
                btn.style.top = "4px";

                setTimeout(function(){
                    btn.style.background = 'rgb(241, 239, 237)';
                    btn.style.top = "4px";
                },300);
            }
        }
    }
    console.log(e.keyCode);
    if(e.key>='0' && e.key<='9')
    {
        for(let btn of buttons)
        {
            // if(screen.value.length == 1)
            // {
                let buttonTxt = btn.innerText;
                if(buttonTxt == e.key)
                {
                    console.log('Hello');

                        btn.style.background = 'orange';
                        btn.style.top = "4px";
                        

                    setTimeout(function(){
                        btn.style.background = 'rgb(241, 239, 237)';
                        btn.style.top = "4px";
                    },300);
                    
                    // btn.style.breakAfter
                }
            // }
            // if(screen.value.length>=2)
            // {
            //     let buttonTxt = btn.innerText;
            //     if(buttonTxt == e.key)
            //     {
            //         console.log('Hello');
            //         if(btn.style.background != 'orange')
            //             btn.style.background = 'orange';
            //         else
            //             btn.style.background = 'lightgray';
            //     }
            // }
        }
    }
    else if(e.key == '+' || e.key == '-' || e.key == '.' || e.key == '%' || e.key == '/' || e.key == 'x')
    {
        for(let btn of buttons)
        {
            // if(screen.value.length == 1)
            // {
                let buttonTxt = btn.innerText;
                if(buttonTxt == e.key)
                {
                    console.log('Hello');

                    btn.style.background = 'orange';
                    btn.style.top = "4px";                        

                    setTimeout(function(){
                        btn.style.background = 'rgb(241, 239, 237)';
                        btn.style.top = "4px";
                    },300);
                }
        }
    }
})
screen.addEventListener('keydown', (e)=>{
    console.log(e.keyCode);
    //Grabbing the alt key and the 'C' key together
    let evtObj = window.event?event : e;
    if(evtObj.keyCode == 67 && evtObj.altKey)
    {
        clrv();
        for(btn of buttons)
        {
            if(btn.innerText == "AC")
            {
                btn.style.background = 'orange';
                btn.style.top = "4px";

                setTimeout(function(){
                    btn.style.background = 'rgb(241, 239, 237)';
                    btn.style.top = "4px";
                },300);
            }
        }
    }
    
})






//clears the input
function clrv()
{
    screen.value = "";
}

//slices the first and last
function removeOp()
{
    console.log('Hello');
    let m = screen.value;
    console.log(m);
    screen.value = m.slice(0, -1);
    console.log(screen.value);
}

//operations done on 
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
