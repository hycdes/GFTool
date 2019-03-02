function changeSelectItems () {
  var selectID = document.getElementById('select_tdoll')
  var str_items = ''
  if (set_guntype === 0) {
    str_items += '<option value=0 selected>请点选一个格点</option>'
  } else if (set_guntype === 1) { // HG
    if (num_star === 5) {
      str_items += '<option value=4 selected>No.4 蟒蛇</option>'
      str_items += '<option value=96>No.96 灰熊Mk V</option>'
      str_items += '<option value=97>No.97 M950A</option>'
      str_items += '<option value=114>No.114 维尔德Mk Ⅱ</option>'
      str_items += '<option value=126>No.126 NZ75</option>'
      str_items += '<option value=142>No.142 Five-seveN</option>'
      str_items += '<option value=166>No.166 CZ75</option>'
      str_items += '<option value=183>No.183 竞争者</option>'
      str_items += '<option value=233>No.233 Px4 风暴</option>'
      str_items += '<option value=242>No.242 P22</option>'
      str_items += '<option value=250>No.250 HS2000</option>'
      str_items += '<option value=1001>No.1 [MOD] 柯尔特左轮</option>'
    } else if (num_star === 4) {
      str_items += '<option value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 2) { // AR
    if (num_star === 5) {
      str_items += '<option value=62 selected>No.62 G41</option>'
      str_items += '<option value=65>No.65 HK416</option>'
      str_items += '<option value=73>No.73 AUG</option>'
      str_items += '<option value=106>No.106 FAL</option>'
      str_items += '<option value=119>No.119 OTs-14</option>'
      str_items += '<option value=122>No.122 G11</option>'
      str_items += '<option value=129>No.129 95式</option>'
      str_items += '<option value=130>No.130 97式</option>'
      str_items += '<option value=172>No.172 RFB</option>'
      str_items += '<option value=175>No.175 ART556</option>'
      str_items += '<option value=181>No.181 T91</option>'
      str_items += '<option value=194>No.194 K2</option>'
      str_items += '<option value=196>No.196 Zas M21</option>'
      str_items += '<option value=205>No.205 AN-94</option>'
      str_items += '<option value=206>No.206 AK-12</option>'
      str_items += '<option value=215>No.215 MDR</option>'
      str_items += '<option value=236>No.236 K11</option>'
      str_items += '<option value=243>No.243 64式自</option>'
      str_items += '<option value=1055>No.55 [MOD] M4A1</option>'
      str_items += '<option value=1056>No.56 [MOD] M4 SOPMODⅡ</option>'
      str_items += '<option value=1057>No.57 [MOD] ST AR-15</option>'
      str_items += '<option value=1064>No.64 [MOD] G36</option>'
    } else if (num_star === 4) {
      str_items += '<option value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 3) { // SMG
    if (num_star === 5) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 4) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 4) { // RF
    if (num_star === 5) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 4) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 5) { // MG
    if (num_star === 5) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 4) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 6) { // SG
    if (num_star === 5) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 4) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  }
  if (switch_operate) {
    selectID.disabled = false
  } else {
    selectID.disabled = true
  }
  selectID.innerHTML = str_items
  changePreview(1)
}
function changeEquip () {
  var ID = parseInt(document.getElementById('select_tdoll').value)
  var selectID = document.getElementById('select_equip')
  var str_items = ''
  if (num_pickequip === 1) { // 第一格装备
    if (set_guntype === 1) { // HG
      str_items += '<option value=11 selected>AC4消音器</option>'
      str_items += '<option value=41>PEQ-16A</option>'
      if (ID === 1001) { // 纳甘左轮
      }
    } else if (set_guntype === 2) { // AR
      str_items += '<option value=12 selected>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
      str_items += '<option value=11>AC4消音器</option>'
      str_items += '<option value=41>PEQ-16A</option>'
      if (ID === 56) { // ST AR-15
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=32 selected>IOP T4外骨骼</option>'
      str_items += '<option value=31>IOP X4外骨骼</option>'
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=12 selected>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
      str_items += '<option value=11>AC4消音器</option>'
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=12 selected>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=33 selected>Type3防弹插板</option>'
    }
  } else if (num_pickequip === 2) { // 第二格装备（AR小队双瞄具/人形放在第三）
    if (set_guntype === 1) { // HG
      str_items += '<option value=21 selected>ILM空尖弹</option>'
      if (ID === 1002) { // M1911
      }
    } else if (set_guntype === 2) { // AR
      str_items += '<option value=22 selected>APCR高速弹</option>'
      if (ID === 56) { // ST AR-15
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=21 selected>ILM空尖弹</option>'
    // CMS
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=23 selected>Mk211高爆穿甲弹</option>'
    // 春田
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=23 selected>Mk211高爆穿甲弹</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=24 selected>#000猎鹿弹</option>'
      str_items += '<option value=25>SABOT独头弹</option>'
    }
  } else if (num_pickequip === 3) { // 第三格装备
    if (set_guntype === 1) { // HG
      str_items += '<option value=31 selected>IOP X4外骨骼</option>'
      str_items += '<option value=32>IOP T4外骨骼</option>'
    } else if (set_guntype === 2) { // AR
      str_items += '<option value=31 selected>IOP X4外骨骼</option>'
      str_items += '<option value=32>IOP T4外骨骼</option>'
      if (ID === 56) { // ST AR-15等人的瞄具，还有G41专属
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=11 selected>AC4消音器</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=41>PEQ-16A</option>'
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=34 selected>热光学迷彩披风</option>'
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=35 selected>IOP极限弹链箱</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=13 selected>ITI MARS</option>'
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=41>PEQ-16A</option>'
    }
  }
  if (switch_operate && switch_equip) {
    selectID.disabled = false
    str_items += '<option value=0>无装备</option>'
  } else {
    selectID.disabled = true
    str_items += '<option value=-1>请点选一个装备栏</option>'
  }
  selectID.innerHTML = str_items
}
