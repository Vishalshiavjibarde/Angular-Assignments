function main()
{
   var Arr=[23,89,6,29,56,45,77,32];
   var high=0;
   var high1=0
   for(var i=0;i<Arr.length;i++)
   {
       if (Arr[i]>high){
           high1=high;
           high=Arr[i];

       }
       if (Arr[i]<high&&Arr[i]>high1)
       high1=Arr[i];
   }
   console.log("second maximum number is:"+high1);

}
main();
