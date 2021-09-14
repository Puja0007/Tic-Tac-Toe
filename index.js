var drawCountx = 0;
var drawCounto = 0;
var x = false;
var o = true;

function over(item) {
    var element = document.getElementById(item.id);
    element.className = "";
    if (this.o == true) {
        element.classList.add('cell');
        element.classList.add('x');
        this.x = true;
        this.o = false;
    }
    else if (this.x == true) {
        element.classList.add('cell');
        element.classList.add('o');
        this.x = false;
        this.o = true;
    }
    element.onmouseover = null;
    element.onclick = null;
    this.checkWin();
    checkDraw()
}
function hover(item) {
    var element = document.getElementById(item.id);
    element.className = "";
    if (this.x == false) {
        element.classList.add('cell');
        element.classList.add('wave');
        element.classList.add('x');
    }
    else if (this.o == false) {
        element.classList.add('cell');
        element.classList.add('wave');
        element.classList.add('o');
    }
}
function checkWin() {
    var cell1 = document.getElementById("x1").className;
    var cell2 = document.getElementById("x2").className;
    var cell0 = document.getElementById("x0").className;
    var cell4 = document.getElementById("x4").className;
    var cell5 = document.getElementById("x5").className;
    var cell3 = document.getElementById("x3").className;
    var cell6 = document.getElementById("x6").className;
    var cell7 = document.getElementById("x7").className;
    var cell8 = document.getElementById("x8").className;
    if (cell0 == cell1 && cell1 == cell2 && (cell2 == "cell x" || cell2 == "cell o")) {
        if(cell2 == "cell x"){
            alert("X is winner");
        }
        else if(call2 == "cell o"){
            alert("O is winner");
        }
        
    }
    else if (cell3 == cell4 && cell4 == cell5 && (cell5 == "cell x" || cell5 == "cell o")) {
        if(cell5 == "cell x"){
            alert("X is winner");
        }
        else if(cell5 == "cell o"){
            alert("O is winner");
        }
    }
    else if (cell6 == cell7 && cell7 == cell8 && (cell8 == "cell x" || cell8 == "cell o")) {
        if(cell8 == "cell x"){
            alert("X is winner");
        }
        else if(cell8 == "cell o"){
            alert("O is winner");
        }
    }
    else if (cell0 == cell3 && cell3 == cell6 && (cell6 == "cell x" || cell6 == "cell o")) {
        if(cell6 == "cell x"){
            alert("X is winner");
        }
        else if(cell6 == "cell o"){
            alert("O is winner");
        }
    }
    else if (cell1 == cell4 && cell4 == cell7 && (cell7 == "cell x" || cell7 == "cell o")) {
        if(cell7 == "cell x"){
            alert("X is winner");
        }
        else if(cell7 == "cell o"){
            alert("O is winner");
        }
    }
    else if (cell2 == cell5 && cell5 == cell8 && (cell8 == "cell x" || cell8 == "cell o")) {
        if(cell8 == "cell x"){
            alert("X is winner");
        }
        else if(cell8 == "cell o"){
            alert("O is winner");
        }
    }
    else if (cell0 == cell4 && cell4 == cell8 && (cell8 == "cell x" || cell8 == "cell o")) {
        if(cell8 == "cell x"){
            alert("X is winner");
        }
        else if(cell8 == "cell o"){
            alert("O is winner");
        }
    }
    else if (cell2 == cell4 && cell4 == cell6 && (cell6 == "cell x" || cell6 == "cell o")) {
        if(cell6 == "cell x"){
            alert("X is winner");
        }
        else if(cell6 == "cell o"){
            alert("O is winner");
        }
    }
}
function checkDraw() {
    let drawCountx =0
    let drawCounto = 0
    var ele = document.querySelector('.board');
    for (let i = 0; i < ele.childNodes.length; i++) {
        if (ele.childNodes[i].className == "cell x") {
            drawCountx++;
        }
        if (ele.childNodes[i].className == "cell o") {
            drawCounto++;
        }
    }
    
    if ((drawCountx ==4 && drawCounto>drawCountx) || (drawCountx==5 && drawCounto<drawCountx)) {
        alert("draw");
    }
}

function restart(){
    window.location.reload();
}



