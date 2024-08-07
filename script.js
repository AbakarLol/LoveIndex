
var n = Math.random();
n = Math.round(n*100) + "%";

document.querySelector("button.btn").addEventListener("click",function(){
    this.innerHTML = n ;
})

document.reload;
