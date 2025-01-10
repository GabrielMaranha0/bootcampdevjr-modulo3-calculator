function sum (){
    var num1 = document.getElementById("num1").value;//recebe os ID's dos inputs
    var num2 = document.getElementById("num2").value;

    var output = num1 + num2;

    document.getElementById("output").value = output; 
}