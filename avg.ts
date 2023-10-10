//JavaScript Program To Find Average of 3 Numbers
//Take User Input
var a:number=88;
console.log(prompt("Enter First Number: "+a));
var b:number=69;
console.log(prompt("Enter Second Number: "+b));
var c:number=81;
console.log(prompt("Enter Third Number: "+c));

//Calculate Average
var tot = a + b + c;
var avg = tot/3;

//Display Output
console.log("The average of three numbers: " + avg);

if (avg>90) 
{
    console.log("Grade is A"); 
} 
else
{
    if (avg>70 || avg<90) 
    {
        console.log("Grade is B "); 
    } 
    else 
    {
      if (avg<70) 
      {
        console.log("Grade is C"); 
      } 
      else 
      {
        console.log("Fail"); 
        
      }        
    }   
}    
