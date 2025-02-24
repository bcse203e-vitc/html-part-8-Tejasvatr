function gen() {
    let r = +document.getElementById("r").value, 
        c = +document.getElementById("c").value, 
        t = document.getElementById("t");

    if (r < 1 || c < 1) return alert("Invalid input!");

    t.innerHTML = "";
    let tbl = document.createElement("table");
    tbl.border = "1";

    for (let i = 0; i < r; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < c; j++) tr.insertCell().textContent = `(${i + 1},${j + 1})`;
        let btn = tr.insertCell();
        btn.appendChild(Object.assign(document.createElement("button"), {
            textContent: "Delete Row", onclick: () => tbl.deleteRow(tr.rowIndex)
        }));
    }
    t.appendChild(tbl);
}
