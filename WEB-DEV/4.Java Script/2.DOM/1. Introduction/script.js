let table = document.body.firstElementChild;
rowsSize = table.rows.length
let j = rowsSize - 1;
for (let i = 0; i < rowsSize; i++){
    let row = table.rows[i]
    row.cells[j].style.background = "red"
    j--;
}