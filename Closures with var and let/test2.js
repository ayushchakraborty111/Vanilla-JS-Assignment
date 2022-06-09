// for(let i=1;i<=3;i++)
// {
//     //closure created
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000);
// }


for(var i=1;i<=3;i++)
{
    function fun1(x)
    {
        setTimeout(function(){
            console.log(x)
        }, x*1000);
    }
    fun1(i);
}