function sum (){
    var num1 = parseFloat(document.getElementById("num1").value);//recebe os ID's dos inputs
    var num2 = parseFloat(document.getElementById("num2").value);//altera de string para float

    var output = num1 + num2;

    document.getElementById("output").value = output; 
}

