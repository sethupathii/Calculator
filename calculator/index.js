inputValue = (val) => {
    var result = document.getElementById('input');
    result.value += val;
}
ClearInput = () => {
    var result = document.getElementById('input').value = " ";
}
clearone = () => {
    var result = document.getElementById('input').value;
    document.getElementById('input').value = result.slice(0, -1);
}
final = () => {
    var result = document.getElementById('input');
    var ne = eval(result.value);
    document.getElementById('input').value = ne;
}

