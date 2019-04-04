var list_color = [
  '#FF9999', '#FF0000', '#760101', '#C2FE9A', '#00FF00', '#006600', '#66CCFF', '#0000FF', '#000099',
  '#666666'
]
var list_color_HF = ['#8001A0', '#FF9900', '#FFFF00', '#CC00FF', '#FFCCFF']
var list_show = [
  true, true, true, true, true, true, true, true, true,
  true, true, true, true, true, true, true, true, true
]
var list_show_fairy = [true, true]
var list_show_HF = [true, true, true, true, true]
function makeGraph () {
  var base_data = []
  var base_yaxis = []
  var Set_Label = new Map
  // get label contents
  for (var i = 0; i < 9; i++) {
    if (gs_tdoll[i]) {
      var temp_label = ''
      if (list_show[i] || list_show[i + 9]) {
        if (list_show[i]) {
          temp_label = Glabel_name.get(i) + 'd'
          Set_Label.set(i, temp_label)
        }
        if (list_show[i + 9]) {
          temp_label = Glabel_name.get(i) + 'i'
          Set_Label.set('inj' + i, temp_label)
        }
      }
    }
  }
  // t-doll dmg-data and inj-data
  for (var i = 0; i < 9; i++) {
    if (gs_tdoll[i]) {
      if (list_show[i] && list_show[i + 9]) {
        base_data.push({
          data: Set_Data.get(i),
          label: Set_Label.get(i),
          color: list_color[i],
          yaxis: 1
        })
        base_data.push({
          data: Set_Data_S.get(i),
          label: Set_Label.get('inj' + i),
          color: list_color[i],
          yaxis: 2
        })
      } else if (list_show[i]) {
        base_data.push({
          data: Set_Data.get(i),
          label: Set_Label.get(i),
          color: list_color[i],
          yaxis: 1
        })
      } else {
        base_data.push({
          data: Set_Data_S.get(i),
          label: Set_Label.get('inj' + i),
          color: list_color[i],
          yaxis: 2
        })
      }
    }
  }
  // fairy data
  if (gs_fairy && list_show_fairy[0]) {
    base_data.push({ data: Set_Data.get(9),
      label: Glabel_name.get('fairy') + Glabel_dmg.get('fairy'),
      color: list_color[9],
      yaxis: 1
    })
  }
  // HF data
  for (var i = 0; i < 5; i++) {
    if (gs_HF[i] && list_show_HF[i]) {
      base_data.push({
        data: Set_Data_HF.get(i),
        label: Glabel_name.get('HF' + i) + Glabel_dmg.get('HF' + i),
        color: list_color_HF[i],
        yaxis: 1
      })
    }
  }
  // yaxis
  base_yaxis.push({
    min: 0, max: y_max_buffer * 1.1,
    position: 'right', axisLabel: lib_language.main_makeGraph_2
  })
  // yaxis2
  var y2min = y2_min_buffer * 0.9
  if (y2_max_buffer - y2min < 50) y2min = 0.9 * y2_max_buffer
  if (y2min < 50) y2min = 0
  if (display_type === 'suffer') {
    base_yaxis.push({
      min: y2min, max: y2_max_buffer * 1.1,
      position: 'left', axisLabel: lib_language.main_makeGraph_3, showTickLabels: 'none'
    })
  }
  // make graph
  $.plot('#placeholder', base_data,
    {
      xaxis: {
        min: 0, max: x_max_buffer, axisLabel: lib_language.main_makeGraph_1, showTickLabels: 'none'
      },
      yaxes: base_yaxis,
      legend: {
        show: true,
        labelFormatter: label_string,
        labelBoxBorderColor: '#ffffff',
        position: 'nw',
        margin: [10, 10],
        backgroundColor: '#ffffff',
        backgroundOpacity: 0.7
      },
      grid: {
        hoverable: true
      },
      tooltip: true,
      tooltipOpts: {
        content: tooltip_string,
        shifts: {
          x: -60,
          y: 25
        }
      }
    })
}
function tooltip_string (label, x, y) {
  var name = label.substr(0, label.length - 1)
  var position = trans_if_need(parseInt(label[0])) - 1
  var datatype = label[label.length - 1]
  if (datatype === 'd') { // dmg data
    return '[' + name + '] ' + lib_language.main_formatDPS_1 + ':%xs, ' + lib_language.main_formatDPS_2 + ':%y'
  } else if (datatype === 'i') { // inj data
    return '[' + name + '] ' + lib_language.main_formatDPS_1 + ':%xs, ' + lib_language.main_makeGraph_3 + ':%y, ' + lib_language.form + ':' + Math.ceil(5 * y / list_tdoll[position][1].Property.hp)
  }
}
function label_string (label) {
  var datatype = label[label.length - 1]
  if (datatype === 'd') { // dmg data
    return label.substr(0, label.length - 1) + ' ' + lib_language.UI_dmg
  } else if (datatype === 'i') { // inj data
    return label.substr(0, label.length - 1) + ' ' + lib_language.UI_inj
  }
  return label.substr(0, label.length - 1)
}
// 时间 main_formatDPS_1
// 输出 main_formatDPS_2
