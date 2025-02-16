function updateClock() {
    let d = new Date(),
        h = d.getHours().toString().padStart(2, "0"),
        m = d.getMinutes().toString().padStart(2, "0"),
        s = d.getSeconds().toString().padStart(2, "0");
    
    document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();