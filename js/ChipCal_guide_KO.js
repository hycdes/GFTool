var lang_type = 'ko'
var HeavyfireType = 1
var globaltime = [0, 0, 0, 0]; // global timer, for test and all result counting
var switch_clear = false, switch_maxall = false, switch_blueall = false, switch_orangeall = false
var filter_switch = false
var topologySet = [], solutionSet = [], topologyNum = 0
var topology_noresult = [56041, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var buffer_topo = [], buffer_solu = [], buffer_num = 10 // for buffer result for ranking
var topologyLib_BGM_1 = [], topologyLib_BGM_2 = [], topologyLib_AGS = [], topologyLib_2B14 = [], topologyLib_M2 = [], topologyLib_M2_6x6 = [], topologyLib_M2_6x5n5 = [],topologyLib_AT4_6x6 = []
var topologyLibRefer_BGM_1 = [], topologyLibRefer_BGM_2 = [], topologyLibRefer_AGS = [], topologyLibRefer_2B14 = [],topologyLibRefer_M2 = [], topologyLibRefer_M2_6x6 = [], topologyLibRefer_M2_6x5n5 = [],topologyLibRefer_AT4_6x6 = []
var rules = ['InfinityFrost', 'FatalChapters']
var color = 1, block_dmg = 0, block_dbk = 0, block_acu = 0, block_fil = 0, mul_property = 1, block_class = 56, block_shape = 9
var chipNum = 0
var chipRepo_data = [], chipRepo_chart = []; // Chip data; Repository information that display at repository-table
var chipRepo_shape_5 = [], chipRepo_shape_6 = [] // For make shape only
var analyze_switch = 1, ranking_switch = 1; // show_percentage[1=validProperty,-1=validBlocknum] rank_result_by[1~6]
var deleteSelectHTML = ['<option value=0 selected>번호 선택</option>']
var lib_lang
function loadScript (url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}
function mergeCell (table1, startRow, endRow, col) {
  var tb = document.getElementById(table1)
  if (!tb || !tb.rows || tb.rows.length <= 0) return
  if (col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) return
  if (endRow == 0) endRow = tb.rows.length - 1
  for (var i = startRow; i < endRow; i++) {
    tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col])
    tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1
  }
}

function manageButton () {
  var AdBt1 = document.getElementById('AdBt1')
  var AdBt2 = document.getElementById('AdBt2')
  var AdBt3 = document.getElementById('AdBt3')
  var AdBt4 = document.getElementById('AdBt4')
  var SbBt1 = document.getElementById('SbBt1')
  var SbBt2 = document.getElementById('SbBt2')
  var SbBt3 = document.getElementById('SbBt3')
  var SbBt4 = document.getElementById('SbBt4')
  var AdLv = document.getElementById('AdLv')
  var SbLv = document.getElementById('SbLv')
  AdBt1.disabled = false
  AdBt2.disabled = false
  AdBt3.disabled = false
  AdBt4.disabled = false
  SbBt1.disabled = false
  SbBt2.disabled = false
  SbBt3.disabled = false
  SbBt4.disabled = false
  AdLv.disabled = true
  SbLv.disabled = true
  if (parseInt(document.getElementById('ChipLevel').value) === 0) {
    AdLv.disabled = false
    SbLv.disabled = true
  } else if (parseInt(document.getElementById('ChipLevel').value) === 20) {
    AdLv.disabled = true
    SbLv.disabled = false
  } else {
    AdLv.disabled = false
    SbLv.disabled = false
  }
  var addChipButtonId = document.getElementById('addChipButton')
  addChipButtonId.disabled = true
  var bn = 6
  if (block_class === 551) bn = 5
  if (block_dmg + block_dbk + block_acu + block_fil >= bn) {
    AdBt1.disabled = true; AdBt2.disabled = true; AdBt3.disabled = true; AdBt4.disabled = true
  } else {
    if (block_dmg === bn - 1) AdBt1.disabled = true
    if (block_dbk === bn - 1) AdBt2.disabled = true
    if (block_acu === bn - 1) AdBt3.disabled = true
    if (block_fil === bn - 1) AdBt4.disabled = true
  }
  if (block_dmg === 0) SbBt1.disabled = true
  if (block_dbk === 0) SbBt2.disabled = true
  if (block_acu === 0) SbBt3.disabled = true
  if (block_fil === 0) SbBt4.disabled = true
  if (block_dmg + block_dbk + block_acu + block_fil === bn) addChipButtonId.disabled = false
}
function refreshPreview () {
  if (block_class === 551 && (block_shape === 81 || block_shape === 82 || block_shape === 9 || block_shape === 10 || block_shape === 111 || block_shape === 112 || block_shape === 120 || block_shape === 131 || block_shape === 132)) {
    document.getElementById('Dmg').innerHTML = '<img src="../img/icon-dmg.png"> ' + Math.ceil(mul_property * Math.ceil(block_dmg * 0.92 * 4.4))
    document.getElementById('Dbk').innerHTML = '<img src="../img/icon-dbk.png"> ' + Math.ceil(mul_property * Math.ceil(block_dbk * 0.92 * 12.7))
    document.getElementById('Acu').innerHTML = '<img src="../img/icon-acu.png"> ' + Math.ceil(mul_property * Math.ceil(block_acu * 0.92 * 7.1))
    document.getElementById('Fil').innerHTML = '<img src="../img/icon-fil.png"> ' + Math.ceil(mul_property * Math.ceil(block_fil * 0.92 * 5.7))
  } else {
    document.getElementById('Dmg').innerHTML = '<img src="../img/icon-dmg.png"> ' + Math.ceil(mul_property * Math.ceil(block_dmg * 4.4))
    document.getElementById('Dbk').innerHTML = '<img src="../img/icon-dbk.png"> ' + Math.ceil(mul_property * Math.ceil(block_dbk * 12.7))
    document.getElementById('Acu').innerHTML = '<img src="../img/icon-acu.png"> ' + Math.ceil(mul_property * Math.ceil(block_acu * 7.1))
    document.getElementById('Fil').innerHTML = '<img src="../img/icon-fil.png"> ' + Math.ceil(mul_property * Math.ceil(block_fil * 5.7))
  }
  document.getElementById('AdTx1').innerHTML = block_dmg
  document.getElementById('AdTx2').innerHTML = block_dbk
  document.getElementById('AdTx3').innerHTML = block_acu
  document.getElementById('AdTx4').innerHTML = block_fil
  manageButton()
}

function resetBlock () {
  block_dmg = 0, block_dbk = 0, block_acu = 0, block_fil = 0
  refreshPreview()
  manageButton()
}
function resetPage () {
  mul_property = 1
  document.getElementById('ChipLevel').value = 0
  refreshPreview()
  resetBlock()
}

window.onload = function () {
  mergeCell('ImgChart_preview', 0, 0, 0)
  resetPage()
  loadScript('../js/ChipCal_main.js')
  loadScript('../js/topology.js')
  loadScript('../js/language_ChipCal-KO.js')
}
