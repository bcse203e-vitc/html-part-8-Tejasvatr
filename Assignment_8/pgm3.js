let imgs = ["img1.jpg", "img2.jpg", "img3.jpg"], i = 0, t;

function show() {
    document.getElementById("img").src = imgs[i];
}

function next() { i = (i + 1) % imgs.length; show(); }
function prev() { i = (i - 1 + imgs.length) % imgs.length; show(); }

function start() { t = setInterval(next, 3000); }
function pause() { clearInterval(t); }
function resume() { start(); }

show();
start();
