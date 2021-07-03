// 1. Write a function that displays current date & time in your
// browser.
function time (){
    var a = new Date(); 
    return a;
}
var b = time();
alert (b);
// // 2. Write a function that takes first & last name and then it
// greets the user using his full name.
function names(){
var a = prompt("write your first name" ," your first name is");
var b = prompt("write your last name" ," your last name is");
alert (a + " " + b);
}
names()
// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

    var a = prompt("write a number");
    var c = prompt("write a number");
 function add (){

     var d = a + c
     return d;
     }    
    alert (add ());
    
    // 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
var a = +prompt("write a number 1");
var b = prompt("write a operator");
var c = +prompt("write a number 2");
function calc (num1 , opr ,num2){
     if (b == "+"){
        return num1 + num2
    }
    if (b == "-"){
        return num1 - num2
    }
    if (b == "*"){
        return num1 * num2
    }
    if (b == "/"){
        return num1 / num2
    }
 else{  
     alert ("incorrect operator") }
     var d = a+b+c;
     return d;
     }
     
alert (calc(a,b,c));
// 5. Write a function that squares its argument
var a = +prompt ("enter a number")
Square (a)
function Square (a) {
    alert (Math.pow(a,2))
}

// 6. Write a function that computes factorial of a number.
var a = +prompt("enter a number")
var ans =a;
function fact (num){
    if (num == 0 || num == 1 ){
        return 1;
    }
else {
for (var i = num - 1 ; i >= 1 ; i-- ){
ans = ans *i ;
}
returm (ans)
}
}
var c = fact(a);
alert(c);
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
function num (start , end ){
    for (var i = start ; i >= end; i++){
   document.write(i + "br")}
}
var a = +prompt ("enter a number")
 var b = +prompt ("enter a number")
num(a,b);
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
function hyp (base,per){
    var m = Math.sqrt (base * base+per * per);
    return m ;
}
var b = prompt ("enter base of triangle")
var p = prompt ("enter perpendicular of triangle")
 var calHyp = hyp (b,p);
 alert (calHyp);-
// // 9. Write a function that calculates the area of a rectangle.
// //  A = width * height
// //  Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables
function area (a ,b ){
    alert ("area of rectangle "+ a* b ) 
}
var height = +prompt ("area of rectangle / n enter height")
var height = +prompt ("area of rectangle / n enter width")
var c = area (height ,width);
alert (c);
// // 10. Write a JavaScript function that checks whether a passed
// // string is palindrome or not?
// // A palindrome is word, phrase, or sequence that reads the same backward as
// // forward, e.g., madam.
function palindrome(){
var a = prompt ("enter word","your word is");
var check = "";
for (var i = a.length -1 ; i >= 0 ; i--){
    check +=a[i];
}
if (a === check) {
    alert(a + "  is palindrome")}
else {
        alert=(a + "  is not palindrome")
}
}
palindrome();
// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
var a = 'the quick brown fox'
a = a.toUpperCase()
function uppercase(){
    document.write(a);
}
uppercase();
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
