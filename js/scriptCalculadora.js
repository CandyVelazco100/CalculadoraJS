function display(val) {
    document.getElementById('resultado').value += val;
}

function clearScreen() {
    document.getElementById('resultado').value = "";
}

function solve() {
    let x = document.getElementById('resultado').value;
    let y = eval(x);
    document.getElementById('resultado').value = y;
    return y;
}
