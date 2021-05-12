// HTML selectors

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


// when user clicks on the save it shoud be saved on this array
let myLeads = []

 // Implement localStorage session and  
    // Fetch the localStorage and display it to the browser
let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))

// if we getting value then add it to our array through truthy falsy option
if(leadsFromStorage) {
        myLeads = leadsFromStorage;
        renderLeads();
    }



// Click eventListener
inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value);  // push whatever we type in the box  into the array
    
    inputEl.value = "";  // clear out the input field

 
   

    renderLeads()  // Display the text by calling the renderLeads() function
})
    

// Function to display the text 
function renderLeads() {
    let listItems = ""  // instead of Manipulating DOM in the for loop adding it to texts itself
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li>" + "<a href='' traget='_blank'>" + myLeads[i] +"</a>"  + "</li>"
        listItems += `
        <li> <a target="_blank" href=" ${myLeads[i]}"> ${myLeads[i]} </a> </li> `
    }
    // Rendering the texts
    ulEl.innerHTML = listItems  
}

