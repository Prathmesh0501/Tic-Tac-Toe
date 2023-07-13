function check() {
    
    var btn1 = document.getElementById("btn1").value;
    var btn3 = document.getElementById("btn3").value;
    var btn2 = document.getElementById("btn2").value;
    var btn4 = document.getElementById("btn4").value;
    var btn5 = document.getElementById("btn5").value;
    var btn6 = document.getElementById("btn6").value;
    var btn7 = document.getElementById("btn7").value;
    var btn8 = document.getElementById("btn8").value;
    var btn9 = document.getElementById("btn9").value;


    if (btn1 == "X" && btn2 == "X" && btn3 == "X") {
        console.log("won");
        document.getElementById("info").innerHTML = "X won The Game";
        document.getElementById("btn4").disabled = "true";
    } else if (btn1 == "X" && btn4 == "X" && btn7 == "X") {
        document.getElementById("info").innerHTML = "X won The Game";
    } else if (btn7 == "X" && btn8 == "X" && btn9 == "X") {
        document.getElementById("info").innerHTML = "X won The Game";
    } else if (btn9 == "X" && btn6 == "X" && btn7 == "X") {
        document.getElementById("info").innerHTML = "X won The Game";
    } else if (btn1 == "X" && btn5 == "X" && btn9 == "X") {
        document.getElementById("info").innerHTML = "X won The Game";
    } else if (btn3 == "X" && btn5 == "X" && btn7 == "X") {
        document.getElementById("info").innerHTML = "X won The Game";
    }
}

flag = 1;

function func_1() {
    if (flag == 1) {
        document.getElementById("btn1").value = "X";
        document.getElementById("btn1").disabled = true;
        flag = 0;
    } else {
        document.getElementById("btn1").value = "0";
        document.getElementById("btn1").disabled = true;
        flag = 1;
    }
}

function func_2() {
    if (flag == 1) {
        document.getElementById("btn2").value = "X";
        document.getElementById("btn2").disabled = true;
        flag = 0;
    } else {
        document.getElementById("btn2").value = "0";
        document.getElementById("btn2").disabled = true;
        flag = 1;
    }
}

function func_3() {
    if (flag == 1) {
        document.getElementById("btn3").value = "X";
        document.getElementById("btn3").disabled = true;
        flag = 0;
    } else {
        document.getElementById("btn3").value = "0";
        document.getElementById("btn3").disabled = true;
        flag = 1;
    }
}

function func_4() {
    if (flag == 1) {
        document.getElementById("btn4").value = "X";
        document.getElementById("btn4").disabled = true;
        flag = 0;
    } else {
        document.getElementById("btn4").value = "0";
        document.getElementById("btn4").disabled = true;
        flag = 1;
    }
}

function func_5() {
    if (flag == 1) {
        document.getElementById("btn5").value = "X";
        document.getElementById("btn5").disabled = true;
        flag = 0;
    } else {
        document.getElementById("btn5").value = "0";
        document.getElementById("btn5").disabled = true;
        flag = 1;
    }
}

function func_6() {
    if (flag == 1) {
        document.getElementById("btn6").value = "X";
        document.getElementById("btn6").disabled = true;
        flag = 0;
    } else {
        document.getElementById("btn6").value = "0";
        document.getElementById("btn6").disabled = true;
        flag = 1;
    }
}

function func_7() {
    if (flag == 1) {
        document.getElementById("btn7").value = "X";
        document.getElementById("btn7").disabled = true;
        flag = 0;
    } else {
        document.getElementById("btn7").value = "0";
        document.getElementById("btn7").disabled = true;
        flag = 1;
    }
}

function func_8() {
    if (flag == 1) {
        document.getElementById("btn8").value = "X";
        document.getElementById("btn8").disabled = true;
        flag = 0;
    } else {
        document.getElementById("btn8").value = "0";
        document.getElementById("btn8").disabled = true;
        flag = 1;
    }
}

function func_9() {
    if (flag == 1) {
        document.getElementById("btn9").value = "X";
        document.getElementById("btn9").disabled = true;
        flag = 0;
    } else {
        document.getElementById("btn9").value = "0";
        document.getElementById("btn9").disabled = true;
        flag = 1;
    }
}

