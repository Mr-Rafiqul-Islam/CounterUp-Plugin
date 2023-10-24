let x = document.querySelector('.CounterUp')

let counter=0

let stop=setInterval(count,x.dataset.speed)

function count() {
    if(counter==x.dataset.number){
        clearInterval(stop);
    } else{  
    counter++
    x.innerHTML=counter
    }
}




