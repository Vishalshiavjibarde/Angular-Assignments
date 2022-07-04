function main()
{
       var n:number=153;
       var rem:number=0;
       var sum:number=0;
       var temp:number=0;
       while(temp>0)
       {
        rem=temp%10;
		sum =sum+rem*rem*rem;
		temp=temp/10;
       }
	if(sum==temp)
	{
        console.log (" given number is armstrong");
    }
    else
    {
        console.log (" given number is not armstrong");
	 	 
	 }
}

main();
