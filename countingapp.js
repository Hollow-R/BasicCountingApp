let count = 0
let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")


function increment(){
    count += 1
    countEL.textContent = count
}

function save(){
    let countstr = count + " - "
    saveEL.textContent += countstr
    count = 0
    countEL.textContent = count
}
