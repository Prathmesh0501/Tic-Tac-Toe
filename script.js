flag = 1;

function func_1() {
    if (flag == 1) {
        document.getElementById("btn1").value = "X";
        document.getElementById("btn1").disabled = true;
        flag = 0;
        document.getElementById("info").innerHTML = "Player 0 Turn";
    } else {
        document.getElementById("btn1").value = "0";
        document.getElementById("btn1").disabled = true;
        flag = 1;
        document.getElementById("info").innerHTML = "Player X Turn";
    }
}

function func_2() {
    if (flag == 1) {
        document.getElementById("btn2").value = "X";
        document.getElementById("btn2").disabled = true;
        flag = 0;
        document.getElementById("info").innerHTML = "Player 0 Turn";
    } else {
        document.getElementById("btn2").value = "0";
        document.getElementById("btn2").disabled = true;
        flag = 1;
        document.getElementById("info").innerHTML = "Player X Turn";
    }
}

function func_3() {
    if (flag == 1) {
        document.getElementById("btn3").value = "X";
        document.getElementById("btn3").disabled = true;
        flag = 0;
        document.getElementById("info").innerHTML = "Player 0 Turn";
    } else {
        document.getElementById("btn3").value = "0";
        document.getElementById("btn3").disabled = true;
        flag = 1;
        document.getElementById("info").innerHTML = "Player X Turn";
    }
}

function func_4() {
    if (flag == 1) {
        document.getElementById("btn4").value = "X";
        document.getElementById("btn4").disabled = true;
        flag = 0;
        document.getElementById("info").innerHTML = "Player 0 Turn";
    } else {
        document.getElementById("btn4").value = "0";
        document.getElementById("btn4").disabled = true;
        flag = 1;
        document.getElementById("info").innerHTML = "Player X Turn";
    }
}

function func_5() {
    if (flag == 1) {
        document.getElementById("btn5").value = "X";
        document.getElementById("btn5").disabled = true;
        flag = 0;
        document.getElementById("info").innerHTML = "Player 0 Turn";
    } else {
        document.getElementById("btn5").value = "0";
        document.getElementById("btn5").disabled = true;
        flag = 1;
        document.getElementById("info").innerHTML = "Player X Turn";
    }
}

function func_6() {
    if (flag == 1) {
        document.getElementById("btn6").value = "X";
        document.getElementById("btn6").disabled = true;
        flag = 0;
        document.getElementById("info").innerHTML = "Player 0 Turn";
    } else {
        document.getElementById("btn6").value = "0";
        document.getElementById("btn6").disabled = true;
        flag = 1;
        document.getElementById("info").innerHTML = "Player X Turn";
    }
}

function func_7() {
    if (flag == 1) {
        document.getElementById("btn7").value = "X";
        document.getElementById("btn7").disabled = true;
        flag = 0;
        document.getElementById("info").innerHTML = "Player 0 Turn";
    } else {
        document.getElementById("btn7").value = "0";
        document.getElementById("btn7").disabled = true;
        flag = 1;
        document.getElementById("info").innerHTML = "Player X Turn";
    }
}

function func_8() {
    if (flag == 1) {
        document.getElementById("btn8").value = "X";
        document.getElementById("btn8").disabled = true;
        flag = 0;
        document.getElementById("info").innerHTML = "Player 0 Turn";
    } else {
        document.getElementById("btn8").value = "0";
        document.getElementById("btn8").disabled = true;
        flag = 1;
        document.getElementById("info").innerHTML = "Player X Turn";
    }
}

function func_9() {
    if (flag == 1) {
        document.getElementById("btn9").value = "X";
        document.getElementById("btn9").disabled = true;
        flag = 0;
        document.getElementById("info").innerHTML = "Player 0 Turn";
    } else {
        document.getElementById("btn9").value = "0";
        document.getElementById("btn9").disabled = true;
        flag = 1;
        document.getElementById("info").innerHTML = "Player X Turn";
    }
}

function check() {

    var btn1 = document.getElementById("btn1");
    var btn3 = document.getElementById("btn3");
    var btn2 = document.getElementById("btn2");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");
    var btn9 = document.getElementById("btn9");
    var info = document.getElementById("info");


    if (btn1.value == "X" && btn2.value == "X" && btn3.value == "X") {
        btn1.style.backgroundColor = 'green';
        btn2.style.backgroundColor = 'green';
        btn3.style.backgroundColor = 'green';
        console.log("X won");
        info.innerHTML = "X Won The Game 🎉\n Better Luck Next Time Player 0 😊";
        btn4.disabled = "true";
        btn5.disabled = "true";
        btn6.disabled = "true";
        btn7.disabled = "true";
        btn8.disabled = "true";
        btn9.disabled = "true";
    } else if (btn1.value == "X" && btn4.value == "X" && btn7.value == "X") {
        btn1.style.backgroundColor = 'green';
        btn4.style.backgroundColor = 'green';
        btn7.style.backgroundColor = 'green';
        console.log("X won");
        info.innerHTML = "X Won The Game 🎉\n Better Luck Next Time Player 0 😊";
        btn2.disabled = "true";
        btn3.disabled = "true";
        btn5.disabled = "true";
        btn6.disabled = "true";
        btn8.disabled = "true";
        btn9.disabled = "true";
    } else if (btn7.value == "X" && btn8.value == "X" && btn9.value == "X") {
        btn7.style.backgroundColor = 'green';
        btn8.style.backgroundColor = 'green';
        btn9.style.backgroundColor = 'green';
        console.log("X won");
        info.innerHTML = "X Won The Game 🎉\n Better Luck Next Time Player 0 😊";
        btn1.disabled = "true";
        btn2.disabled = "true";
        btn3.disabled = "true";
        btn4.disabled = "true";
        btn5.disabled = "true";
        btn6.disabled = "true";
    } else if (btn9.value == "X" && btn6.value == "X" && btn3.value == "X") {
        btn9.style.backgroundColor = 'green';
        btn6.style.backgroundColor = 'green';
        btn3.style.backgroundColor = 'green';
        console.log("X won");
        info.innerHTML = "X Won The Game 🎉\n Better Luck Next Time Player 0 😊";
        btn1.disabled = "true";
        btn2.disabled = "true";
        btn4.disabled = "true";
        btn5.disabled = "true";
        btn7.disabled = "true";
        btn8.disabled = "true";
    } else if (btn1.value == "X" && btn5.value == "X" && btn9.value == "X") {
        btn1.style.backgroundColor = 'green';
        btn5.style.backgroundColor = 'green';
        btn9.style.backgroundColor = 'green';
        console.log("X won");
        info.innerHTML = "X Won The Game 🎉\n Better Luck Next Time Player 0 😊";
        btn2.disabled = "true";
        btn3.disabled = "true";
        btn4.disabled = "true";
        btn6.disabled = "true";
        btn7.disabled = "true";
        btn8.disabled = "true";
    } else if (btn3.value == "X" && btn5.value == "X" && btn7.value == "X") {
        btn3.style.backgroundColor = 'green';
        btn5.style.backgroundColor = 'green';
        btn7.style.backgroundColor = 'green';
        console.log("X won");
        info.innerHTML = "X Won The Game 🎉\n Better Luck Next Time Player 0 😊";
        btn1.disabled = "true";
        btn2.disabled = "true";
        btn4.disabled = "true";
        btn6.disabled = "true";
        btn8.disabled = "true";
        btn9.disabled = "true";
    } else if (btn2.value == "X" && btn5.value == "X" && btn8.value == "X") {
        btn2.style.backgroundColor = 'green';
        btn5.style.backgroundColor = 'green';
        btn8.style.backgroundColor = 'green';
        console.log("X won");
        info.innerHTML = "X Won The Game 🎉\n Better Luck Next Time Player 0 😊";
        btn1.disabled = "true";
        btn3.disabled = "true";
        btn4.disabled = "true";
        btn6.disabled = "true";
        btn7.disabled = "true";
        btn9.disabled = "true"; //0
    } else if (btn4.value == "X" && btn5.value == "X" && btn6.value == "X") {
        btn4.style.backgroundColor = 'green';
        btn5.style.backgroundColor = 'green';
        btn6.style.backgroundColor = 'green';
        console.log("X won");
        info.innerHTML = "X Won The Game 🎉\n Better Luck Next Time Player 0 😊";
        btn1.disabled = "true";
        btn2.disabled = "true";
        btn3.disabled = "true";
        btn7.disabled = "true";
        btn8.disabled = "true";
        btn9.disabled = "true"; //0
    } else if (btn1.value == "0" && btn2.value == "0" && btn3.value == "0") {
        btn1.style.backgroundColor = 'green';
        btn2.style.backgroundColor = 'green';
        btn3.style.backgroundColor = 'green';
        console.log("0 won");
        info.innerHTML = "0 Won The Game 🎉\n Better Luck Next Time Player X 😊";
        btn4.disabled = "true";
        btn5.disabled = "true";
        btn6.disabled = "true";
        btn7.disabled = "true";
        btn8.disabled = "true";
        btn9.disabled = "true";
    } else if (btn1.value == "0" && btn4.value == "0" && btn7.value == "0") {
        btn1.style.backgroundColor = 'green';
        btn4.style.backgroundColor = 'green';
        btn7.style.backgroundColor = 'green';
        console.log("0 won");
        info.innerHTML = "0 Won The Game 🎉\n Better Luck Next Time Player X 😊";
        btn2.disabled = "true";
        btn3.disabled = "true";
        btn5.disabled = "true";
        btn6.disabled = "true";
        btn8.disabled = "true";
        btn9.disabled = "true";
    } else if (btn7.value == "0" && btn8.value == "0" && btn9.value == "0") {
        btn7.style.backgroundColor = 'green';
        btn8.style.backgroundColor = 'green';
        btn9.style.backgroundColor = 'green';
        console.log("0 won");
        info.innerHTML = "0 Won The Game 🎉\n Better Luck Next Time Player X 😊"
        btn1.disabled = "true";
        btn2.disabled = "true";
        btn3.disabled = "true";
        btn4.disabled = "true";
        btn5.disabled = "true";
        btn6.disabled = "true";
    } else if (btn9.value == "0" && btn6.value == "0" && btn3.value == "0") {
        btn9.style.backgroundColor = 'green';
        btn6.style.backgroundColor = 'green';
        btn3.style.backgroundColor = 'green';
        console.log("0 won");
        info.innerHTML = "0 Won The Game 🎉\n Better Luck Next Time Player X 😊";
        btn1.disabled = "true";
        btn2.disabled = "true";
        btn4.disabled = "true";
        btn5.disabled = "true";
        btn7.disabled = "true";
        btn8.disabled = "true";
    } else if (btn1.value == "0" && btn5.value == "0" && btn9.value == "0") {
        btn1.style.backgroundColor = 'green';
        btn5.style.backgroundColor = 'green';
        btn9.style.backgroundColor = 'green';
        console.log("0 won");
        info.innerHTML = "0 Won The Game 🎉\n Better Luck Next Time Player X 😊";
        btn2.disabled = "true";
        btn3.disabled = "true";
        btn4.disabled = "true";
        btn6.disabled = "true";
        btn7.disabled = "true";
        btn8.disabled = "true";
    } else if (btn3.value == "0" && btn5.value == "0" && btn7.value == "0") {
        btn3.style.backgroundColor = 'green';
        btn5.style.backgroundColor = 'green';
        btn7.style.backgroundColor = 'green';
        console.log("0 won");
        info.innerHTML = "0 Won The Game 🎉\n Better Luck Next Time Player X 😊";
        btn1.disabled = "true";
        btn2.disabled = "true";
        btn4.disabled = "true";
        btn6.disabled = "true";
        btn8.disabled = "true";
        btn9.disabled = "true";
    } else if (btn2.value == "0" && btn5.value == "0" && btn8.value == "0") {
        btn2.style.backgroundColor = 'green';
        btn5.style.backgroundColor = 'green';
        btn8.style.backgroundColor = 'green';
        console.log("0 won");
        info.innerHTML = "0 Won The Game 🎉\n Better Luck Next Time Player X 😊";
        btn1.disabled = "true";
        btn3.disabled = "true";
        btn4.disabled = "true";
        btn6.disabled = "true";
        btn7.disabled = "true";
        btn9.disabled = "true";
    } else if (btn4.value == "0" && btn5.value == "0" && btn6.value == "0") {
        btn4.style.backgroundColor = 'green';
        btn5.style.backgroundColor = 'green';
        btn6.style.backgroundColor = 'green';
        console.log("0 won");
        info.innerHTML = "0 Won The Game 🎉\n Better Luck Next Time Player X 😊";
        btn1.disabled = "true";
        btn2.disabled = "true";
        btn3.disabled = "true";
        btn7.disabled = "true";
        btn8.disabled = "true";
        btn9.disabled = "true";
    } else if ((btn1.value == "X" || btn1.value == "0") && (btn2.value == "X" || btn2.value == "0") &&
        (btn3.value == "X" || btn3.value == "0") && (btn4.value == "X" || btn4.value == "0") && (btn5.value == "X" || btn5.value == "0") && (btn6.value == "X" || btn6.value == "0")
        && (btn7.value == "X" || btn7.value == "0") && (btn8.value == "X" || btn8.value == "0")
        && (btn9.value == "X" || btn9.value == "0")) {
        btn2.style.backgroundColor = 'red';
        btn3.style.backgroundColor = 'red';
        btn1.style.backgroundColor = 'red';
        btn4.style.backgroundColor = 'red';
        btn5.style.backgroundColor = 'red';
        btn6.style.backgroundColor = 'red';
        btn7.style.backgroundColor = 'red';
        btn8.style.backgroundColor = 'red';
        btn9.style.backgroundColor = 'red';
        info.innerHTML = "Match is Tied, Seems Like both are tough competitors 🤔";
    }
}

function reset() {
    location.reload();
}   
