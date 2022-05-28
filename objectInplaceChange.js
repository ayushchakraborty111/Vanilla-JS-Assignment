

const obj = {
    name: "Ayush",
    age: "",
    hobbies: ["music", "sports", "_", "riding"],
    education:[
    {
        "Secondary" : "abc",
    },
    {
        "HigherSecondary": "xyz"
    },
    {
        "postGraduate": null
    }
    ],
    address: {
        city: "Chandigarh",
        Po: null,
        House_no: "",
        randomCheck: ["music", "sports", "_", "riding"],
    } 
};

//Not a efficient solution btw
// for(let x in obj)
// {
//     if(obj[x]=="")
//     {
//         delete obj[x];
//     }
//     else if(Array.isArray(obj[x]))
//     {
//         console.log(obj[x]);
//         const arr = obj[x];
//         let index = 0;
//         if(arr.includes('_'))
//         {
//             index = arr.indexOf('_');
//             arr.splice(index, 1);
//         }
//         obj[x] = arr;
//     }
//     else if(typeof obj[x] === 'object')
//     {
//         console.log(obj[x]);
//         for(let i in obj[x])
//         {
//             if(obj[x][i] == null || obj[x][i] == '')
//             {
//                 delete obj[x][i];
//             }
//         }
//     }    
// }

//Efficient inplace solution
// Object.keys(obj).forEach(key => {
//     if((key != null && key != '') || (key!='' && key != '_') )
//     {
//         if(Array.isArray(obj[key]))
//         {
//             console.log(obj[key]);
//             const arr = obj[key];
//             let index = 0;
//             if(arr.includes('_'))
//             {
//                 index = arr.indexOf('_');
//                 arr.splice(index, 1);
//             }
//             obj[key] = arr;
//             console.log(obj);
//         }
//         else if(typeof obj[key] == 'object')
//         {
            
//         }
//     }
//     else
//     {
//         delete obj[key];
//     }
// })

//Recursive and efficient approach
function changeObj(obj)
{
    Object.keys(obj).forEach(key=>{
        if(obj[key] == '' || obj[key] == null || obj[key] == '_')
        {
            delete obj[key];
        }
        else
        {
            if(Array.isArray(obj[key]))
            {
                const arr = obj[key];
                let index = 0;
                if(arr.includes('_'))
                {
                    index = arr.indexOf('_');
                    arr.splice(index, 1);
                }
                else if(arr.includes(''))
                {
                    index = arr.indexOf('');
                    arr.splice(index, 1);
                }
                else if(arr.includes(null))
                {
                    index = arr.indexOf(null);
                    arr.splice(index, 1);
                }
                obj[key] = arr;
                if(typeof obj[key] == 'object')
                {
                    changeObj(obj[key]);
                }
            }
            else if(typeof obj[key] == 'object')
            {
                changeObj(obj[key]);
            }
        }
    })
}


changeObj(obj);
console.log(obj);

// console.log(obj);
// console.log(key);



