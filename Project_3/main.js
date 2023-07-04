const clock = document.getElementById('clock')
//document.querySelector('#clock')
const date = document.getElementById('date')

setInterval(function(){
    
let time = new Date()
clock.innerHTML  = time.toLocaleTimeString();
}, 1000)

let date1 = new Date()
date.innerHTML  = date1.toLocaleDateString();

