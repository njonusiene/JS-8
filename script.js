var tabs = document.getElementsByClassName("tab")
var buttons = document.querySelectorAll("button")
var heading = document.querySelector("h1")
var img;

heading.style.opacity = "0"
function loadContent(){
    heading.style.opacity = "1"
}
//Pirmas uzkrovimas
for(var x of tabs) {
    x.style.display = "none"
}
setTimeout(loadContent, 1000)
heading.innerText = "Ar žinai, kad... ↓"

var img = document.createElement("img")

setTimeout(function(){
      
    //idedam nuotraukos atributa
   img.src = "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    heading.innerText = "Ar žinai, kad... ↓"
    //paleidziam kad rodytumem
    img.style.borderRadius = "5px"
    img.style.width = "500px"
    img.style.opacity = "30%"
       heading.append(img)

}, 2000)



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