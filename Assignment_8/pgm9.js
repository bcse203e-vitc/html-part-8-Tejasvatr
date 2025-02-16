let t, i;

function start() {
    clearInterval(i);
    t = parseInt(document.getElementById("time").value) || 0;
    update();
    i = setInterval(update, 1000);
}

function update() {
    document.getElementById("display").textContent = t;
    if (t-- <= 0) {
        clearInterval(i);
        document.getElementById("alarm").play();
    }
}