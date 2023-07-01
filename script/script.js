function display(char){
    console.log(char);
    document.getElementById("text").value += char;
}

function total(){
    document.getElementById("text").value = eval(document.getElementById("text").value)
}

function clr(){
    document.getElementById("text").value = "";
}