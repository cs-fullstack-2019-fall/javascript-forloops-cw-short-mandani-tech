// alert ("test");
// # JavaScript-forLoops_cw_short
//
// ### Exercise 1:
// Use a for loop to print numbers -3 through 8.

for (i=-3; i<= 8; i++)
{
    console.log(i);

}

console.log("EXERCISE 1 COMPLETED")


//
// ### Exercise 2:
// Use a for loop to print from 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number.
//

for (x=0;x<=50;x++)

{
    if (x == 10)
    {
        console.log("TEN")
}
else

{

    console.log(x);


}

}

console.log("EXERCISE 2 COMPLETED")


//     ### Exercise 3:
// Prompt the user to enter a number. Prompt the user to enter another number. Create a for loop that counts from the first number to the second number.


var userNumInt1 = parseInt(prompt("Please enter a number here:"));
var userNumInt2 = parseInt(prompt("Please enter a number here:"));

for (y= userNumInt1; y<= userNumInt2 ; y++)

{

    console.log(y);
}

console.log("EXERCISE 3 COMPLETED")