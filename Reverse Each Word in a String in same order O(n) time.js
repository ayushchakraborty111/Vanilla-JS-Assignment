// //Implementation of stack in javascript
class Stack{
    constructor()
    {
        this.items = [];
    }
    add(element)
    {
        return this.items.push(element);
    }
    remove()
    {
        if(this.items.length>0)
        {
            return this.items.pop();
        }
    }
    isEmpty()
    {
        return this.items.length == 0;
    }
    size()
    {
        return this.items.length;
    }
    peek()
    {
        return this.items[this.items.length-1];
    }
}


// let st = new Stack();

// let str = "Ayush Dutt";

// for(let i=0;i<str.length;i++)
// {
//     st.add(str.charAt(i));
// }











function revWords(str)
{
    let st = new Stack();
    for(let i=0;i<str.length;i++)
    {
        st.add(str.charAt(i));   
    }
    let res = "";
    let temp = "";
    while(!st.isEmpty())
    {
        if(st.peek()!=' ')
        {
            temp = temp + st.remove();
        }
        else
        {
            res = " " + temp + res;
            temp = "";
            st.remove();
        }
    }
    if(temp!="")
    {
        res = temp + res;
    }
    return res;
}


str = "Hello Ayush";
console.log(revWords(str));
// console.log(revWords(str));