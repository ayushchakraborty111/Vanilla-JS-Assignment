const input = document.getElementById('inp');
const button = document.getElementById('btn');
const checkBox = document.getElementById('checkInp');
const container = document.querySelector('.append-div');


button.onclick = ()=>
{
    let inpVal = input.value;
    
    if(checkBox.checked == true)
    {
        // console.log('Hello');
        if(container.innerHTML === "")
        {
            for(let i=1;i<=inpVal;i++)
            {
                let tabData = document.createElement('table');
                // tabData.setAttribute('style','border: 1px');
                tabData.innerHTML += "<tr>";
                for(let j=1;j<=10;j++)
                {
                    container.appendChild(tabData);
                    tabData.innerHTML += "<td style='border: 1px solid blue;'>"+i+"x"+j+"="+i*j+"</td>"
                    tabData.style.border = "1px solid dodgerblue";
                    // console.log(i*j);
                }
                tabData.innerHTML += "</tr>";
            }
        }
        else
        {
            container.innerHTML = "";
            // input.value = "";
        }
    }
    else
    {
        if(container.innerHTML === "")
        {
            let tabData = document.createElement('table');
            tabData.style.border = "1px solid blue";
            for(let i=1;i<=10;i++)
            {
                container.appendChild(tabData);
                tabData.innerHTML += "<tr><td style='border: 1px solid blue;'>"+inpVal+"x"+i+"="+inpVal*i+"</td></tr>";
                tabData.style.margin = "20px";
                tabData.style.border = "1px solid dodgerblue";
                // console.log(inpVal*i);
            }
        }
        else
        {
            container.innerHTML = "";
            // input.value = "";
        }
    }
}