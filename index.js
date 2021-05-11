const inputEl  = document.getElementsByClassName("input-btn")
const saveEl = document.getElementsByClassName("btn")


// when user clicks on the save it shoud be saved on this array.
let myLeads = []




saveEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads);
})
