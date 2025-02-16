let size = 16;
function changeSize(val) {
    size += val;
    document.getElementById("text").style.fontSize = size + "px";
}