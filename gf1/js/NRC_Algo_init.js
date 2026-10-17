function mergeCell(table1, startRow, endRow, col) {
    var tb = document.getElementById(table1)
    if (!tb || !tb.rows || tb.rows.length <= 0) return // null return
    if (col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) return
    if (endRow == 0) endRow = tb.rows.length - 1
    for (var i = startRow; i < endRow; i++) {
        tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col])
        tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1
    }
}

function merge_cell_row(tableid, col, row_start, row_end) {
    var tb = document.getElementById(tableid)
    if (row_end == 0) row_end = tb.rows.length - 1
    for (var i = row_start; i < row_end; i++) {
        tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col])
        tb.rows[row_start].cells[col].rowSpan = (tb.rows[row_start].cells[col].rowSpan) + 1
    }
}
function merge_cell_col(tableid, row, col_start, col_end) {
    var tb = document.getElementById(tableid)
    tb.rows[row].cells[col_start - 1].colSpan = col_end - col_start + 1
}


function loadScript(url) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.body.appendChild(script)
}

window.onload = function () {
    loadScript('../js/NRC_Algo_main.js')
    loadScript('../js/NRC_Algo_UI.js')
    loadScript('../js/NRC_Algo_data.js')
    merge_cell_row('table_neursoul_info', 0, 0, 1)
    merge_cell_row('table_algo_info', 0, 1, 3)
    merge_cell_row('table_algo_info', 0, 4, 6)
    merge_cell_row('table_algo_info', 0, 7, 9)
}
