const  addBtn =document.querySelector(".add-button")
const inputBtn = document.getElementById("input")
const ulTag = document.querySelector("ul")

const addListElement = () =>{
    const val =inputBtn.value

    if (val.trim() !=="") {

    const listElement =document.createElement("li")

    const content = document.createElement("span")
    content.setAttribute("class","list-element")
    content.textContent = val

    const deleteBtn = document.createElement("span")
    deleteBtn.setAttribute("class","delete-button")
    deleteBtn.textContent = "delete"

    listElement.appendChild(content)
    listElement.appendChild(deleteBtn)

    ulTag.appendChild(listElement)

    const deleteBtns = document.querySelectorAll(".delete-button")

    Array.from(deleteBtns).forEach(function(btn){
        btn.addEventListener("click", function(e){
            console.log(e)
            const deleteList = e.target.parentElement
            deleteList.remove()
        })
    })
    }
    else{
        alert("Please enter a valid value")
    }
    inputBtn.value = ""
}
addBtn.addEventListener("click", addListElement)
inputBtn.addEventListener("keyup",function(e) {
    if (e.keyCode ===13) {
        addListElement() 
        inputBtn.value = ""
    }

})