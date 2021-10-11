var global_job_id = 0
function change_job(job_id) {
    global_job_id = job_id
    var total_job = 5
    for (var i = 1; i < total_job + 1; i++) {
        if (i === job_id) document.getElementById('job' + i).src = '../img/nrc/job/job' + i + '.png'
        else document.getElementById('job' + i).src = '../img/nrc/job/job' + i + '_disable.png'
    }
    var select_item = ''
    if (job_id === 1) {
        select_item += '<option value=1 selected>赫波</option>'
        select_item += '<option value=2>缠枝</option>'
        select_item += '<option value=3>菲涅尔</option>'
        select_item += '<option value=4>拉姆</option>'
        select_item += '<option value=5>席摩</option>'
        select_item += '<option value=6>埃尔赫</option>'
        select_item += '<option value=7>麦克斯</option>'
        select_item += '<option value=8>奥托金</option>'
    }
    else if (job_id === 2) {
        select_item += '<option value=1 selected>秋</option>'
        select_item += '<option value=2>薇</option>'
        select_item += '<option value=3>桑朵莱希</option>'
        select_item += '<option value=4>苏尔</option>'
        select_item += '<option value=5>贝蒂</option>'
        select_item += '<option value=6>芬恩</option>'
        select_item += '<option value=7>炽</option>'
    }
    else if (job_id === 3) {
        select_item += '<option value=1 selected>克罗琦</option>'
        select_item += '<option value=2>伊芙琳</option>'
        select_item += '<option value=3>杨尼</option>'
        select_item += '<option value=4>波妮</option>'
        select_item += '<option value=5>希安</option>'
        select_item += '<option value=6>薮春</option>'
    }
    else if (job_id === 4) {
        select_item += '<option value=1 selected>七花</option>'
        select_item += '<option value=2>芙洛伦</option>'
        select_item += '<option value=3>琴</option>'
        select_item += '<option value=4>帕斯卡</option>'
    }
    else if (job_id === 5) {
        select_item += '<option value=1 selected>坂口希</option>'
        select_item += '<option value=2>薇洛儿</option>'
        select_item += '<option value=3>安冬妮娜</option>'
    }
    document.getElementById('select_neursoul').innerHTML = select_item
    document.getElementById('select_neursoul').disabled = false
    change_neursoul()
}

function change_neursoul() {
    var job_id = global_job_id
    var neursoul_id = parseInt(document.getElementById('select_neursoul').value)
    document.getElementById('img_neursoul').src = '../img/nrc/neursoul/' + job_id + '-' + neursoul_id + '.png'
    var neursoul = _search(job_id, neursoul_id)
    document.getElementById('pro_hp').innerHTML = neursoul.hp + '+'
    document.getElementById('pro_hprecover').innerHTML = neursoul.hprecover + '+'
    document.getElementById('pro_ad').innerHTML = neursoul.ad + '+'
    document.getElementById('pro_ap').innerHTML = neursoul.ap + '+'
    document.getElementById('pro_adpnt').innerHTML = neursoul.adpnt + '+'
    document.getElementById('pro_appnt').innerHTML = neursoul.appnt + '+'
    document.getElementById('pro_crit').innerHTML = neursoul.crit * 100 + '+' + '%'
    document.getElementById('pro_critdmg').innerHTML = neursoul.critdmg * 100 + '+' + '%'
    document.getElementById('pro_addfs').innerHTML = neursoul.addfs + '+'
    document.getElementById('pro_apdfs').innerHTML = neursoul.apdfs + '+'
    document.getElementById('pro_rof').innerHTML = neursoul.rof + '+'
    document.getElementById('pro_eva').innerHTML = neursoul.eva + '+'
}