
function main():void
{
    var num:number=11;
    var bret:boolean;
    bret=CheckPrime(num);
    if(bret==true)
    {
    	console.log(" prime number");
	  }
	else
   {
    	console.log("not prime number");
    }
 } 
function CheckPrime(Value:number)
{
     if(Value%2!=0)
     {
       return true;
     }
     else
     {
       return false;
     }
}

main();
