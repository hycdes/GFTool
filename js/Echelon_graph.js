var list_color = [
  '#FF9999', '#FF0000', '#760101', '#C2FE9A', '#00FF00', '#006600', '#66CCFF', '#0000FF', '#000099',
  '#666666'
]
var list_color_HF = ['#8001A0', '#FF9900', '#FFFF00', '#CC00FF', '#FFCCFF']
var list_show = [
  true, true, true, true, true, true, true, true, true,
  true,
  true, true, true, true, true, true, true, true, true,
  true, true, true, true, true
]
function makeGraph () {
  var base_data = []
  var base_yaxis = []
  var Set_Label = new Map
  // get label contents
  for (var i = 0; i < 9; i++) {
    if (gs_tdoll[i]) {
      var temp_label = ''
      if (list_show[i] || list_show[i + 10]) {
        temp_label += Glabel_name.get(i)
        if (list_show[i]) temp_label += Glabel_dmg.get(i)
        if (list_show[i + 10]) temp_label += Glabel_inj.get(i)
      }
      Set_Label.set(i, temp_label)
    }
  }
  // t-doll dmg-data and inj-data
  for (var i = 0; i < 9; i++) {
    if (gs_tdoll[i]) {
      if (list_show[i] && list_show[i + 10]) {
        base_data.push({
          data: Set_Data.get(i),
          label: Set_Label.get(i),
          color: list_color[i],
          yaxis: 1
        })
        base_data.push({
          data: Set_Data_S.get(i),
          label: '',
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
          label: Set_Label.get(i),
          color: list_color[i],
          yaxis: 2
        })
      }
    }
  }
  // fairy data
  if (gs_fairy && list_show[9]) {
    base_data.push({ data: Set_Data.get(9),
      label: Glabel_name.get('fairy') + Glabel_dmg.get('fairy'),
      color: list_color[9],
      yaxis: 1
    })
  }
  // HF data
  for (var i = 0; i < 5; i++) {
    if (gs_HF[i] && list_show[i + 19]) {
      base_data.push({
        data: Set_Data_HF.get(i),
        label: Glabel_name.get('HF' + i),
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
        labelBoxBorderColor: '#ffffff',
        position: 'nw',
        margin: [10, 10],
        backgroundColor: '#ffffff',
        backgroundOpacity: 0.7
      }
    })
}

function makeGraph_old (x_max, y_max, str_label) {
  var container = document.getElementById('container')
  if (display_type === 'damage') {
    graph = Flotr.draw(container, [
      { data: Set_Data.get(0), label: str_label[0]},
      { data: Set_Data.get(1), label: str_label[1]},
      { data: Set_Data.get(2), label: str_label[2]},
      { data: Set_Data.get(3), label: str_label[3]},
      { data: Set_Data.get(4), label: str_label[4]},
      { data: Set_Data.get(5), label: str_label[5]},
      { data: Set_Data.get(6), label: str_label[6]},
      { data: Set_Data.get(7), label: str_label[7]},
      { data: Set_Data.get(8), label: str_label[8]},
      { data: Set_Data.get(9), label: str_label[9]},
      { data: Set_Data_HF.get(0), label: str_label[19]},
      { data: Set_Data_HF.get(1), label: str_label[20]},
      { data: Set_Data_HF.get(2), label: str_label[21]},
      { data: Set_Data_HF.get(3), label: str_label[22]},
      { data: Set_Data_HF.get(4),label: str_label[23]}
    ], {
      colors: list_color,
      xaxis: { title: lib_language.main_makeGraph_1, max: x_max, min: 0 },
      yaxis: { title: lib_language.main_makeGraph_2, max: y_max, min: 0 },
      mouse: { track: true, relative: true, trackFormatter: formater_DPS },
      points: { show: false },
      HtmlText: false,
      grid: { verticalLines: false },
      legend: {
        position: 'nw',
        backgroundColor: '#FFFFFF'
      }
    })
  } else if (display_type === 'suffer') {
    graph = Flotr.draw(container, [
      { data: Set_Data.get(0), label: str_label[0]},
      { data: Set_Data.get(1), label: str_label[1]},
      { data: Set_Data.get(2), label: str_label[2]},
      { data: Set_Data.get(3), label: str_label[3]},
      { data: Set_Data.get(4), label: str_label[4]},
      { data: Set_Data.get(5), label: str_label[5]},
      { data: Set_Data.get(6), label: str_label[6]},
      { data: Set_Data.get(7), label: str_label[7]},
      { data: Set_Data.get(8), label: str_label[8]},
      { data: Set_Data.get(9), label: str_label[9]},
      { data: Set_Data_S.get(0), label: str_label[10], yaxis: 2},
      { data: Set_Data_S.get(1), label: str_label[11], yaxis: 2},
      { data: Set_Data_S.get(2), label: str_label[12], yaxis: 2},
      { data: Set_Data_S.get(3), label: str_label[13], yaxis: 2},
      { data: Set_Data_S.get(4), label: str_label[14], yaxis: 2},
      { data: Set_Data_S.get(5), label: str_label[15], yaxis: 2},
      { data: Set_Data_S.get(6), label: str_label[16], yaxis: 2},
      { data: Set_Data_S.get(7), label: str_label[17], yaxis: 2},
      { data: Set_Data_S.get(8), label: str_label[18], yaxis: 2 },
      { data: Set_Data_HF.get(0), label: str_label[19]},
      { data: Set_Data_HF.get(1), label: str_label[20]},
      { data: Set_Data_HF.get(2), label: str_label[21]},
      { data: Set_Data_HF.get(3), label: str_label[22]},
      { data: Set_Data_HF.get(4),label: str_label[23]}
    ], {
      colors: list_color,
      xaxis: { title: lib_language.main_makeGraph_1, max: x_max, min: 0 },
      yaxis: { title: lib_language.main_makeGraph_2, max: y_max, min: 0 },
      y2axis: { color: '#FF0000', title: lib_language.main_makeGraph_3,  max: y2_max_buffer, min: 0},
      mouse: { track: true, relative: true, trackFormatter: formater_ALL },
      points: { show: false },
      HtmlText: false,
      grid: { verticalLines: false },
      legend: {
        position: 'nw',
        backgroundColor: '#FFFFFF'
      }
    })
  } else if (display_type == 'suffer_only') {
    graph = Flotr.draw(container, [
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: str_label[9]},
      { data: Set_Data_S.get(0), label: str_label[0], yaxis: 2},
      { data: Set_Data_S.get(1), label: str_label[1], yaxis: 2},
      { data: Set_Data_S.get(2), label: str_label[2], yaxis: 2},
      { data: Set_Data_S.get(3), label: str_label[3], yaxis: 2},
      { data: Set_Data_S.get(4), label: str_label[4], yaxis: 2},
      { data: Set_Data_S.get(5), label: str_label[5], yaxis: 2},
      { data: Set_Data_S.get(6), label: str_label[6], yaxis: 2},
      { data: Set_Data_S.get(7), label: str_label[7], yaxis: 2},
      { data: Set_Data_S.get(8), label: str_label[8], yaxis: 2},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [],label: ''}
    ], {
      colors: list_color,
      xaxis: { title: lib_language.main_makeGraph_1, max: x_max, min: 0 },
      yaxis: { title: lib_language.main_makeGraph_2, max: y_max, min: 0 },
      y2axis: { color: '#FF0000', title: lib_language.main_makeGraph_3,  max: y2_max_buffer, min: 0},
      mouse: { track: true, relative: true, trackFormatter: formater_ALL },
      points: { show: false },
      HtmlText: false,
      grid: { verticalLines: false },
      legend: {
        position: 'nw',
        backgroundColor: '#FFFFFF'
      }
    })
  } else if (display_type === 'nothing') {
    graph = Flotr.draw(container, [
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: '', yaxis: 2},
      { data: [], label: '', yaxis: 2},
      { data: [], label: '', yaxis: 2},
      { data: [], label: '', yaxis: 2},
      { data: [], label: '', yaxis: 2},
      { data: [], label: '', yaxis: 2},
      { data: [], label: '', yaxis: 2},
      { data: [], label: '', yaxis: 2},
      { data: [], label: '', yaxis: 2},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [], label: ''},
      { data: [],label: ''}
    ], {
      colors: list_color,
      xaxis: { title: lib_language.main_makeGraph_1, max: x_max, min: 0 },
      yaxis: { title: lib_language.main_makeGraph_2, max: y_max, min: 0 },
      y2axis: { color: '#FF0000', title: lib_language.main_makeGraph_3,  max: y2_max_buffer, min: 0},
      mouse: { track: true, relative: true, trackFormatter: formater_ALL },
      points: { show: false },
      HtmlText: false,
      grid: { verticalLines: false },
      legend: {
        position: 'nw',
        backgroundColor: '#FFFFFF'
      }
    })
  }
}
