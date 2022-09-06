const btn1El = document.getElementById('btn-1');
const btn2El = document.getElementById('btn-2');
const btn3El = document.getElementById('btn-3');
const btn4El = document.getElementById('btn-4');
const userNum = document.getElementById('user-num');

function submitted(){
    num = userNum.value;
    btn1El.textContent = getRandomString(num);
    btn2El.textContent = getRandomString(num);
    btn3El.textContent = getRandomString(num);
    btn4El.textContent = getRandomString(num);
}


function getRandomString(length){
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_-=+';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
    return result;
}

function copy1(){
    if(btn1El.textContent != ""){
        textToClipboard(btn1El.textContent);
    alert("Copied " + btn1El.textContent);
    }
}
function copy2(){
    if(btn2El.textContent != ""){
        textToClipboard(btn2El.textContent);
        alert("Copied " + btn2El.textContent);
    }
   
}
function copy3(){
    if(btn3El.textContent != ""){
        textToClipboard(btn3El.textContent);
        alert("Copied " + btn3El.textContent);
    }
}
function copy4(){
    if(btn4El.textContent != ""){
        textToClipboard(btn4El.textContent);
        alert("Copied " + btn4El.textContent);
    }
}
function textToClipboard (text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}