function main():void
{
    var no1:number=20;
    display(no1);
}
function display(Value1:number)
{
    var i:number=0;
    for(i=1;i<=Value1/2;i++)
    {
        if(Value1%i==0)
        {
            console.log(i);
        }
    }
}
main();
