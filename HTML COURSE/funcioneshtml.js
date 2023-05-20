function getElementById(id){
    return document.getElementById(id);
}

function getText(element){
    return element.innerText| element.textContent;
    
}

function mostrarResultado(resultado){
    console.log("Entre");
    alert(resultado);
}

function hacerMagia(a,b){
    let resultado= sumar(a,b);
    mostrarResultado("Entre a magia"+resultado);
}

function showText(){
    var element = getElementById(id);
    var text = getText(text);
    alert(text);
}

function showValue(){
    var text = getText(element);
    alert("si"+ text);
}

function recibirDato(dato){

}

function escribir(){
document.writeln(si);
}

