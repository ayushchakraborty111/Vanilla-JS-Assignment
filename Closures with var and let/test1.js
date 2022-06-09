// for(var i=1;i<=3;i++)
// {
//     Closure created
//     function log()
//     {
//         console.log(i);
//     }
//     console.dir(log);
//     setTimeout(log, 1000);
// }

//parent scope for loop
for(var i=1;i<=3;i++)
{
    //closure created
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}