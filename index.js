let count=0
let countel=document.getElementById("cell")

let hID=document.getElementById("p_id")

let pid=document.getElementById("pr_id")

hID.textContent="Welcome Back"

function increment(){
count += 1
countel.textContent=count
}


function save(){
pid.textContent+=count + " - "
countel.textContent=0
count=0
}

function clear_save(){
pid.textContent="Previous Entries:"
}