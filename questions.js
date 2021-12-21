//Questions 1

/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team,using the test data below
Compare the team's average scores to determine the winner of the competition,
and print it to the console. 
2. Include a requirement for a minimum scoreof 100. Witht his rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
3. Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

 // 1

const avgDolphins = (96 + 108 + 89) / 3
const avgKoalas = (88+ 91 + 110) / 3

console.log("Dolphins= "+avgDolphins, "Koalas ="+avgKoalas)

if (avgDolphins > avgKoalas){
    console.log("Winner is Dolphins")
}else {
    console.log("Winner Kolas")
}

// 2

const avgDolphins2 = (97 + 112 + 101) / 3
const avgKoalas2 = (109+ 95 + 123) / 3

console.log(avgDolphins2, avgKoalas2)

if(avgDolphins2 > avgKoalas2 &&  avgDolphins2 >= 100){
    console.log("Winner is Dolphins")

}else if(avgKoalas2 > avgDolphins2 && avgKoalas2 >=100){
    console.log("Winner Koalas")
}

 // 3 

const avgDolphins3 = (97 + 112 + 101) / 3
const avgKoalas3 = (109+ 95 + 106) / 3

console.log(avgDolphins3, avgKoalas3)

if(avgDolphins3 > avgKoalas3 &&  avgDolphins3 >= 100){
    console.log("Winner is Dolphins")

}else if(avgKoalas3 > avgDolphins3 && avgKoalas3 >=100){
    console.log("Winner Koalas")
}else if (avgKoalas3 == avgDolphins3 && avgKoalas3 >= 100 && avgDolphins3 >= 100){
    console.log("This is draw")
}else {
    console.log("There is no winner")
}

//Questions 2

/*
Take inputs from the user (the day and the time)  and return output whether is open or closed.
Open -> Monday to Friday, 10-21 
Close -> all weekend
*/

const day = prompt("Enter the day: ")
const time = prompt ("Enter the time: ")


//Answer 1
/*
if (day != "Monday" && day != "Tuesday" && day!= "Wednesday" && day !="Thursday" && day != "Friday" && day != "Saturday" &&  day != "Sunday"){
    alert("Please enter valid day")
}else {
    if ( (day != "Saturday" && day != "Sunday") &&  (time >= 10 && time < 21) ){
        console.log("Open")
    }else{
        console.log("Close")
    }
}
*/

// Answer 2

if (time <=21 && time >= 10) {
    switch (day) {
    case ("Monday"):
        console.log("OPEN!")
        break
    case ("Tuesday"):
        console.log("OPEN!")
        break
    case ("Wednesday"):
        console.log("OPEN!")
        break
    case ("Thursday"):
        console.log("OPEN!")
        break
    case ("Friday"):
        console.log("OPEN!")
        break
    default:
        console.log("CLOSED!")
        break
    }
}
else{
    console.log("CLOSED!")
}

// Answer 3
/*
if(day=="Monday" && time>=10 && time<=21)   
{ console.log("open")}
else if(day=="Tuesday" && time>=10 && time<=21)  
{ console.log("open")}
else if(day=="Wednesday" && time>=10 && time<=21)
{ console.log("open")}
else if(day=="Thursday" && time>=10 && time<=21) 
{ console.log("open")}
else if(day=="Friday" && time>=10 && time<=21)   
{ console.log("open")}
else                                             
{console.log("close")} 

*/

// Questions 3

/*
Find out if a given year is a “leap” year.
In the Gregorian calendar, three criteria must be taken into account to identify leap years:
--- The year must be evenly divisible by 4;
--- If the year can also be evenly divided by 100, it is not a leap year; unless...
--- The year is also evenly divisible by 400. Then it is a leap year.
According to these rules, the years 2000 and 2400 are leap years, while 1800, 
1900, 2100, 2200, 2300, and 2500 are not the leap years.
Write a program that takes the year from user and gives output as “2020 is a leap year” or “2019 is not a leap year” .
*/

const year = prompt("Enter a year: ");

function leapYear (year) {
    if((year % 4 == 0 && year % 100 !=0) || year % 4 == 0)

        return`${year} is a leap year`
    else
    {
        return`${year} is not a leap year`
    } 
} 

console.log(leapYear(year))


// Questions 4

/*
1.Take a positive number from user,
2. Write a function that check whether  the number is "Armstrong" or not.

An n-digit number that is the sum of the nth powers of its digits is called an n-Armstrong number. Examples :
371 =3 ** 3 + 7 ** 3 + 1 ** 3;
9474 = 9 ** 4 + 4 ** 4 + 7 ** 4 + 4 ** 4;
93084 = 9 ** 5 + 3 ** 5 + 0 ** 5 + 8 ** 5 + 4 **5.

P.S:  consider the negative, decimal and any entries other than numeric values then display a warning message to the user.
*/


const number = prompt("Enter a three digit number: ");

function isArmstrong (number){
    const len = number.length;
    const newNumber = number.split("");
    console.log(newNumber)
    console.log(len)

    const sum = newNumber[0]**len+newNumber[1]**len+newNumber[2]**len;

    return sum==number ? "is Armstrong" : "not Armstrong";
}

console.log(isArmstrong(number));
