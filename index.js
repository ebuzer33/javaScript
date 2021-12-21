console.log ("Hello world !")

var userName="Maria"

console.log(userName)

/*
var, let, const
*/

userName ="Nikos"

console.log(userName)

// let -> mutable

let mail="abd@gmail.com"

console.log(mail)

mail = "xyz@gmail.com"

// const ->immutable

console.log(mail)

const email="esd@gmail.com"

//email ="azs@gmail.com"

let uName;

//const secondName;

let a=3;
let b=8;

console.log(a);
let c=a;
a=b;
b=c;

console.log(a);
console.log(b);


/// Data Types ///

/* Primitive  Type

1. string " ", ' '
2. number
3. boolean
4. undefined
5. null
*/

let name_1= "Victor";

console.log(typeof name_1);

console.log(typeof 29);

console.log(typeof 3.14);

console.log(typeof true)

let phoneNumber;
console.log(typeof phoneNumber)

let email_1=null;
console.log(typeof email_1)


/* Basic Operators  */

// 1. Aritmetik

let currentYear=2021;
let age= currentYear -1988;
console.log("age= ",age)

let x=3;
let y=9;
let total=x+y;
console.log(total)

let xy=3*6;
console.log(xy)

let as=12/6;
console.log(as)

let exponent=2**3;
console.log(exponent)

let mod=10%3;
console.log(mod)

// 2.Increment decrement

let ab=3;
let xz=--ab;console.log(ab,xz)

let abc=3;
let zyx=abc--;
console.log(zyx,abc)

// String concetanation

const firstName= "Jess"
const lastName="Pikman"

console.log(firstName +" "+ lastName)

// Assignment Operator

let value = true;
let x1 = 2;

x1=x1+5;
console.log("x1 = "+x1);

x1 = x1+5;
console.log("x1 = "+x1);

x1 += 5;
console.log("x1 = "+x1);

let y1= 10;
y1/=2;
console.log("y1 =", y1);

y1*=4;
console.log("y1 =", y1);

x1 +=y1;
console.log("x1 =",x1)

// Comparison Operators

let ageJess = 50;
let ageMaria =30;

// This gives boolean value

console.log(ageJess > ageMaria);
console.log(ageJess < ageMaria);
console.log(ageJess==50);

console.log(ageMaria != 30);

console.log("1", ageJess =="50"); // loose comparison

console.log("2", ageJess === "50"); // strict comparison

console.log("2", ageJess !== "50");


/* Template literal */

let name1 ="Jack";
let surname= "Aspro";
let work= "Amazon";

let sentence= "He is "+ name1 + " " + surname +" and He is founder of "+ work + ".";
console.log(sentence);

let betterSentence= `He is ${name1} ${surname}, and he is founder of ${work}.`;
console.log(betterSentence);

console.log("I want to write this \n\
on new line");

console.log(`I want to write this 
on new line`);

console.log("For github desktop.");

/* Conditionals */

const currentAge = 15;

// If the statement within the paranthesis is true, the code within the if block will execute.

if(currentAge >=18) 
{
    console.log("You can drive legally");
}
else
{
    console.log("You are not allowed to drive");
}

const birthYear=2001;

let generation;

if(birthYear>=2000){
    generation="Z";
    console.log(generation);
}
else if(birthYear<2000)
{
    generation="Y";
    console.log(generation);
}
else
{
    generation="A";
    console.log(generation);
}


let grade =80

if(grade>=80)
{
    let lateNote="AA"
    console.log("Late note= "+lateNote)
}
else if(grade <=80)
{
  lateNote="BB"
  console.log("Late note= "+lateNote)
}
else if(grade <=60)
{
  lateNote="CC"
  console.log("Late note= "+lateNote)
}
else if(grade <=30)
{
  lateNote="DD"
  console.log("Late note= "+lateNote)
}
else
{
    lateNote="ZZ"
    console.log("Late note= "+lateNote) 
}

// Type Conversion and Type Coercion

// Type conversion -> Manually convert type

console.log(typeof "18");

console.log(typeof Number("18"))

console.log(typeof String(18))

console.log(Number("Maria")) // Not a Number

console.log(Number("3,14")) // Not a Number

console.log(typeof NaN)

// Type coersion -> JS converts value behind the scenes

let num ="5";
let mult= num*2;
console.log("mult =", mult)

let divide =10 /num;
console.log("divide =", divide)

let minus = num-1;
console.log("minus =", minus);

let add = num+5;
console.log("add =",add) // concatenate the values

let add2 =Number(num)+5;
console.log("add2 = ",add2)

let h = "1";
h+=1; // string 11 
h-=1; // number 10
console.log(h)

// Truthy and falsy values

/*
1. 0
2. ""
3. undefined
4. null
5. NaN

*/

let cash = 0;
if (cash)
{
    console.log("find a job")
}

// If you write one line code u don't have to use curly braces

if(cash == 0) console.log("No jobs found")

/*
&& (And)
    true && true => true
    true && false => false
    false && false => false

|| (or)
    true || true => true
    true || false => true
    false || false => false

! (not)
!true => false
!false=> true
*/

/*
"AND" Operator

    const a= "have license"  (true)
    const b = "bigger than 18"  (true)

    a && b = "can drive"   (true)
    !a && b = "cannot drive" (false)
    a && !b = "cannot drive"  (false)
    !a && !b = "cannot drive "(false)

*/

/* 
 * OR OPERATOR 
    const x = bigger than 65 
    const y = chronic disease 

    x || y = risky (true)
    !x || y = risky (true)
    x || !y = risky (true)
    !x || !y = not risky (false)
*/

// SWITCH STATEMENT 

/*
 switch(expression){
    case x:
         break
    case y:
        code block
        break
    case z:
        code block
        break
   case m:
       code block
       break
    case n:
      code block
        break
}
*/

let day = "saturday" 

if(day == "saturday" || day == "sunday")

switch(day){
    case "monday":
    console.log("There is not class, ypu can practice");
    break;
    case "tuesday":
    console.log("CSS")
    break
    case "wednesday":
    console.log("Js")
    break
    case "thursday":
    console.log("no class")
    break
    case "friday":
    console.log("CSS")
    break
    default:
    console.log("holiday")
    break
//    case "saturday":
//    case "sunday":
//    console.log("holiday")
//    break
}

// TERNARY OPERATOR
const gradeX = 50

if(gradeX >= 60){
    console.log("Passed")
}else{
}

gradeX >= 60 ? console.log("Passed") : console.log("Failed")

const weather = "cold"

const season = weather === "hot" ? "summer" : "winter"

console.log("season: ", season)

// NULLISH COALESCING

// const val = "xyz"

const val = undefined

// const value = val ?? "default value"

console.log("values ", value)

console.log( 0 || "Alex")

console.log("Alex" && undefined && 2 )

//----------------- Functions ------- //

// Piece of code that we can use multiple times

function myFristFunction(){
    console.log("Hello World");
};

myFristFunction(); // call, execute, , invoke
myFristFunction();
myFristFunction();

// one parametre
function juiceEXtractor(fruit){
    const juice = `This is ${fruit} juice.`;
    console.log(juice);
};

juiceEXtractor("apple");

// two parametre
function juiceEXtractor2(fruit, fruit2){
    const juice1 = `This is ${fruit} and ${fruit2} juice.`;
    console.log(juice1);
};


juiceEXtractor2("apple","banana");

function juiceEXtractor3(fruit, fruit2){
    const juice2 = `This is ${fruit} and ${fruit2} juice.`;
    return juice2;
};

// console.log(juiceEXtractor3("apple","banana"));

const myJuice=juiceEXtractor3("apple","orange");
console.log(myJuice);

// Function Decleration

function calcAge (birthYear1){
    const age= 2021 - birthYear1;
    return age;
};
console.log(calcAge(1980));

//
function calcAge (birthYear1){

    return 2021-birthYear1;
};

console.log(calcAge(1980));

// Function Expression Code

const addition = function(a,b){
    return a+b;
}

const total1 =addition(1825, 2015);
console.log(total1);

// Arrow Function Code

const calcAge2 = birthYear3 => 2021 - birthYear3;

console.log(calcAge2(2000));


const canDrive = birthYear4 => {
    const age =2021 -birthYear4;
    const allowed = 18 -age;
    return `You can drive ${allowed} year later.`
};

const result = canDrive(2006);
console.log(result);

//

function hipotenus (a,b){
    const firstValue = exponentValues(a);
    const secondValue = exponentValues(b);
    const result = (firstValue+secondValue)**(0.5);
    return result;
};

function exponentValues(value){
    return value**2;
};

const hipoResult = hipotenus(7,24)

/*
Example
 There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
 Your tasks:

 1. Write a function that calculates the average points of the teams.
 2. Write another function to compare the averages and return the winner of the play.

 Data 1: Dolphins score: 96, 108 and 89. 
         Koalas score:  88, 91 and 110
 */

function average(a,b,c){

    return a+b+c/3;
};

const avgDolphin =average(96,108,89);
console.log(avgDolphin);

const avgKoalas = average(88,91,110);
console.log(avgKoalas);

function findWinner(avgDolphin,avgKoalas){
    if(avgDolphin>avgKoalas){
        return ` The winner is Dolphin`;
    }
    else{
        return ` The winner is Koala`
    }
}

console.log(findWinner(avgDolphin,avgKoalas))





















/*
//----------------- String Methods ------- //

let text = "Everything will be fine!";
let len = text.length;
console.log("length: "+len)

// Extract Methods
// slice(start,end)

let firstPart = text.slice(10,15)
console.log(firstPart)

let secondPart = text.slice(10)
console.log(secondPart)

let thirdPart = text.slice(-13,-9)
console.log(thirdPart)

// substring (start, end)
// does not accept negatie numbers

let part =text.substring(10,15)
console.log(part) 



*/




