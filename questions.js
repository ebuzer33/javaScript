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

/* Answer 1

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



if (hour <=21 && hour >= 10) {
    switch (day) {
    case ("monday"):
        console.log("OPEN!")
        break
    case ("tuesday"):
        console.log("OPEN!")
        break
    case ("wednesday"):
        console.log("OPEN!")
        break
    case ("thursday"):
        console.log("OPEN!")
        break
    case ("friday"):
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


/* Answer 3

if(gun=="Monday" && time>=10 && time<=21)   { console.log("open")}
else if(gun=="Tuesday" && time>=10 && time<=21)  { console.log("open")}
else if(gun=="Wednesday" && time>=10 && time<=21){ console.log("open")}
else if(gun=="Thursday" && time>=10 && time<=21) { console.log("open")}
else if(gun=="Friday" && time>=10 && time<=21)   { console.log("open")}
else                                             {console.log("close")} 

*/
