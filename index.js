// HTML selectors

const inputEl  = document.getElementsByClassName("input-btn")
const saveEl = document.getElementsByClassName("btn")
const ulEl = document.getElementById("ul-el")


// when user clicks on the save it shoud be saved on this array.
let myLeads = [] 

// Click eventListener
 saveEl.addEventListener("click", function() {
     // push whatever we type in the box  into the array
     myLeads.push(inputEl.value)
     
     // Display the text by calling the renderText function
     renderText()
 })


// Function to display the text 
function renderText() {
    let texts = "" // instead of Manipulating DOM in the for loop adding it to texts itself
    for ( let i =0; i < myLeads.length; i++ ) {
        texts += "<li>" +  myLeads[i] + "</li>" 
    }
    // Rendering the texts
    ulEl.innerHTML = texts;

}