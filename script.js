var tabs = document.getElementsByClassName("tab")
var buttons = document.querySelectorAll("button")
//Pirmas uzkrovimas
for(var x of tabs) {
    x.style.display = "none"
}
//Paspausdimo funkcija
function changeTab(id, event){
    for(var x of tabs) {
        x.style.display = "none"
    }
    document.getElementById(id).style.display = "block"

    for(var button of buttons){
        button.classList.remove("active")
    }

    event.currentTarget.classList.add("active")
    }