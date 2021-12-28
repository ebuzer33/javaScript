
// getElementById
let fName=document.getElementById("first-name")
console.log(fName)
let lastName = document.getElementById("last-name")
console.log(lastName)

//getElementsByClassName
let formControl =document.getElementsByClassName("form-control")
console.log(formControl)

// getElementByTagName
let input = document.getElementsByTagName("input")[3]
console.log(input)

//querySelector
let firstName = document.querySelector("#first-name")
console.log(firstName)

let fControl = document.querySelector(".form-control")
console.log(fControl)

let fControlAll = document.querySelectorAll(".form-control")
console.log(fControlAll)
console.log(fControlAll[1])

// document.querySelector("#first-name").value = "Alex"
// const val = firstName.value
// console.log(val)

let formItems = document.querySelector(".form-items").innerHTML
console.log(formItems)

let first3HTML = document.querySelector("#first-three").innerHTML
console.log(first3HTML);

let first3 = document.querySelector("#first-three")
console.log(first3)

let check = document.querySelector(".form-check-label").innerText
console.log(check)

let fItems = document.querySelector(".form-items").textContent
console.log(fItems)

let fItems1 = document.querySelector(".form-items").innerText
console.log(fItems1)

let firstName3 = document.querySelectorAll(".form-control")[0]
console.log(firstName3)

// set Attribute
// The id="first-name" in the input tag the index.html file has been deleted.
firstName3.setAttribute("id","first-name")
console.log(firstName3)

// The placeholder="First Name" in the input tag the index.html file has been deleted.
firstName3.setAttribute("placeholder", "First Name")
console.log(firstName3)

firstName3.setAttribute("class-name", "name class")
console.log(firstName3)

// get Attribute

const classAttr =firstName3.getAttribute("class");
console.log(classAttr)

const classNameAttr = firstName3.getAttribute("class-name");
console.log(classNameAttr)

// 
// The class="form-control" in the input tag the index.html file has been deleted.
const lastName1 =document.getElementById("last-name")
console.log(lastName1)

lastName1.className = "form-control"
console.log(lastName1)

lastName1.className = "form-control last-name"
console.log(lastName1)

const classProp = lastName1.className
console.log(classProp)

//classList add and remove
lastName1.classList.add("example")
console.log(lastName1)

lastName1.classList.remove("example")
console.log(lastName1)

// appendChild()
let firstThree = document.querySelector("#first-three")
// firstThree.innerHTML= `<div>Michail</div>`

let newDiv = document.createElement("div")
newDiv.setAttribute("class", "col-md-12")
let newInput = document.createElement("input")
newInput.setAttribute("type","text")
newInput.setAttribute("name", "name")
newInput.setAttribute("placeholder","Full Name")
newInput.setAttribute("class","form-control")

newDiv.appendChild(newInput)
console.log(newDiv)

firstThree.appendChild(newDiv)

// insertBefore() and parentNode
// parentNode.insertBefore(newNode, childNode)

/*
// example 1
const parentDiv = document.getElementById("email").parentNode
console.log(parentDiv)

const emailInput = document.getElementById("email")
console.log(emailInput)

parentDiv.insertBefore(newDiv,emailInput)
*/

// example 2
const parentDiv = document.querySelectorAll("#first-three div")[2]
console.log(parentDiv)

const beforeDiv =document.getElementById("email")
console.log(beforeDiv)

parentDiv.insertBefore(newDiv,beforeDiv)

// 
//a different way of creating

let positionDiv = ["Position","Junior Web Developer", "Senior Web Developer","Project Manager"]

let jobList =document.getElementById("job-list")

for (let i = 0; i < positionDiv.length; i++) {
    jobList.innerHTML +=`<option>${positionDiv[i]}</option>`    
}

/*
// using foreach an forof

// for (element of positionDiv) {
//     jobList.innerHTML +=`<option>${element}</option>` 
// }

positionDiv.forEach(element =>jobList.innerHTML +=`<option>${element}</option>` );

*/

//style

const button = document.getElementById("submit")

button.style.width ="25%"
button.style.height ="5vh"
button.style.background = "antiquewhite"
button.style.borderRadius = "15px"

// different usage
button.style.cssText =
`
width : 25%;
height : 5vh;
background : antiquewhite;
border-radius: 15px
`