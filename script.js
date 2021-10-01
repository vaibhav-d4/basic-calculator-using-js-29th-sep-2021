var data = 0;

function keypress(num) {
    var showResult = document.getElementById("showResult");
    showResult.append(num);
}

function reset() {
    var showResult = document.getElementById("showResult");
    showResult.innerHTML = "";
}

function equals() {
    var showResult = document.getElementById("showResult");
    var result = eval(showResult.innerHTML);
    showResult.innerHTML = "";
    showResult.append(result);
}
