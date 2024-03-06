function enviarSaludo(){
    let nombre = prompt("¿como te llamas?");
    
    if (nombre != null){
     document.getElementById("demo").innerHTML = `Hey there ${nombre}!`
    } 
    else{
        document.getElementById("demo").innerHTML = `Nimodo la vida sigue...`
    }
}
