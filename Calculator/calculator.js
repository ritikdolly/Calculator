let inputBox=document.getElementById('input');
let outputBox=document.getElementById('output');

function insertValue(value){
    inputBox.innerHTML += value;
}
function clearResult(){
    inputBox.innerHTML="";
    outputBox.innerHTML="";
}
function deleteResult(){
    inputBox.innerHTML = inputBox.innerHTML.slice(0,-1);
}
function calculate(){
    try {
        outputBox.innerHTML =eval(inputBox.innerHTML);
        inputBox.style.fontSize="2rem";
        
    } catch (error) {
        alert(error);
    }
}