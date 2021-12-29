const colorChangeFunction = () => {
    let button=document.querySelector("#colorChangeBtn")
    button.style.backgroundColor ="blue"
    button.style.color ="white"
}
const divColorChangeFunction = () => {
    let button=document.querySelector(".square")
    button.style.backgroundColor ="red"
    button.style.color ="white"
    button.innerText= 'Clicked'
}


const ColorChangeFunction1 = (element,background, text) => {
    element.style.backgroundColor = background;
    element.style.color =text;
}

const btn = document.querySelector("#btn")
// btn.addEventListener('click', ()=>{
//     console.log('clicked')
// })

// btn.addEventListener('click', function(){
//     console.log('clicked')
// })

const consoleClick = ()=>{
    console.log("click that button")
}

btn.addEventListener('click',() => consoleClick())

// double click
const div =document.querySelector('#square2')

// div.addEventListener('dblclick', function(){
//     div.style.backgroundColor ="red"
// })

// // mousedown
// div.addEventListener('mousedown', function(){
//     div.style.backgroundColor ="yellow"
// })

// // mouseup
// div.addEventListener('mouseup', function(){
//     div.style.backgroundColor ="green"
// })

// // mouseenter
// div.addEventListener('mouseenter', function(){
//     div.style.backgroundColor ="aqua"
// })

// // mouseleave
// div.addEventListener('mouseleave', function(){
//     div.style.backgroundColor ="green"
// })

// // mousemove
// div.addEventListener('mousemove', function(e){
//     console.log("X = "+e.screenX, "Y = "+ e.screenY)
// })

// // mousemove
// div.addEventListener('mousemove', function(e){
//     console.log("X = "+e.screenX, "Y = "+ e.screenY)
// })

//keydown
const input = document.querySelector("#input")

const func = ()=>{
    alert('keydown')
}

input.addEventListener('keydown', func)

const input2 = document.querySelector("#input2")

const keyDownFunc =() =>{
    input2.style.backgroundColor = "aqua"
}

const keyUpFunc =() =>{
    input2.style.backgroundColor = "pink"
}

input2.addEventListener('keydown',keyDownFunc)
input2.addEventListener('keyup', keyUpFunc)

// load onload

// window.onload() = () => {

// }

// window.addEventListener(){

// }

//

const fullName=document.getElementById("fullName")
const charCount = document.getElementById("char-count")
const maxLenght = fullName.getAttribute("maxlength")

const showRemaninChar = () =>{

    if (fullName.value.length == 0) {
        charCount.style.display ="none"
    }else
    {
        charCount.style.display ="inline"
        charCount.innerText =fullName.value.length +"/"+maxLenght
    }
}

fullName.addEventListener("keyup",showRemaninChar)

// change - on change

const jobList = document.getElementById("job-list")

const positionSpan = document.getElementById("changePosition")

jobList.addEventListener("change", function(e){

    positionSpan.innerText = `You selected ${jobList.value}`
})



