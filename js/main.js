var boxColor=document.getElementById("box-color");
console.log(boxColor);

function colorChange(){

    var value=boxColor.value;
    console.log(value);

    boxColor.style.backgroundColor=value;
    boxColor.style.fontsize="50px";
}

var jones=document.getElementById("box-color2");
var arr=document.getElementsByClassName("row1");
console.log(jones);

function colorChange2(){

    var value=jones.value;
    console.log(value);

    arr[0].style.backgroundColor=value;
}