const var1 = document.getElementById("Type")
var1.innerText = "Type"
var1.style.color = "White"


const input1 = document.getElementById("ID")
input1.addEventListener("change",function()
{
    var1.innerHTML = "change:" + input1.value + "!"
})

input1.addEventListener("input", function(){
    var1.innerHTML = "Typing: " + input1.value + "!"
})

console.log(document);