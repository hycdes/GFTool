function changeSelectItems () {
  var selectID = document.getElementById('select_tdoll')
  var str_items = ''
  if (set_guntype === 0) {
    str_items += '<option value=0 selected></option>'
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
      str_items += '<option value=1 selected>No.1 柯尔特左轮</option>'
      str_items += '<option value=7>No.7 斯捷奇金</option>'
      // str_items += '<option value=98>No.98 SPP-1</option>'
      str_items += '<option value=99>No.99 MK23</option>'
      str_items += '<option value=100>No.100 P7</option>'
      str_items += '<option value=168>No.168 SpitFire</option>'
      //  str_items += '<option value=202>No.202 雷电</option>'
      str_items += '<option value=212>No.212 K5</option>'
      // str_items += '<option value=248>No.248 杰里科</option>'
      str_items += '<option value=1002>No.2 [MOD] M1911</option>'
      str_items += '<option value=1005>No.5 [MOD] 纳甘左轮</option>'
      str_items += '<option value=1091>No.91 [MOD] MP-446</option>'
    } else if (num_star === 3) {
      str_items += '<option value=3 selected>No.3 M9</option>'
      str_items += '<option value=14>No.14 阿斯特拉左轮</option>'
    } else if (num_star === 2) {
      str_items += '<option value=2 selected>No.2 M1911</option>'
      str_items += '<option value=5>No.5 纳甘左轮</option>'
      str_items += '<option value=9>No.9 P38</option>'
      str_items += '<option value=10>No.10 PPK</option>'
      // str_items += '<option value=90>No.90 FNP-9</option>'
      str_items += '<option value=91>No.91 MP-446</option>'
      str_items += '<option value=139>No.139 Bren Ten</option>'
      str_items += '<option value=141>No.141 USP Compact</option>'
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
      str_items += '<option value=54 selected>No.54 M16A1</option>'
      str_items += '<option value=55>No.55 M4A1</option>'
      str_items += '<option value=56>No.56 M4 SOPMODⅡ</option>'
      str_items += '<option value=57>No.57 ST AR-15</option>'
      str_items += '<option value=60>No.60 As Val</option>'
      str_items += '<option value=64>No.64 G36</option>'
      str_items += '<option value=66>No.66 56-式</option>'
      str_items += '<option value=69>No.69 FAMAS</option>'
      str_items += '<option value=72>No.72 TAR-21</option>'
      str_items += '<option value=118>No.118 9A-91</option>'
      str_items += '<option value=171>No.171 利贝罗勒</option>'
      str_items += '<option value=187>No.187 AK 5</option>'
      str_items += '<option value=207>No.207 CZ2000</option>'
      str_items += '<option value=216>No.216 XM8</option>'
      str_items += '<option value=227>No.227 A-91</option>'
      str_items += '<option value=237>No.237 SAR-21</option>'
      str_items += '<option value=1063>No.1063 [MOD] G3</option>'
    } else if (num_star === 3) {
      str_items += '<option value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 3) { // SMG
    if (num_star === 5) {
      str_items += '<option value=16 selected>No.16 汤姆森</option>'
      str_items += '<option value=20>No.20 Vector</option>'
      str_items += '<option value=28>No.28 MP7</option>'
      str_items += '<option value=59>No.59 AK-74U</option>'
      str_items += '<option value=104>No.104 G36C</option>'
      str_items += '<option value=115>No.115 索米</option>'
      str_items += '<option value=127>No.127 79式</option>'
      str_items += '<option value=135>No.135 SR-3MP</option>'
      str_items += '<option value=143>No.143 RO635</option>'
      str_items += '<option value=213>No.213 C-MS</option>'
      str_items += '<option value=224>No.224 PM-06</option>'
      str_items += '<option value=228>No.228 樱花</option>'
      str_items += '<option value=234>No.234 JS 9</option>'
      str_items += '<option value=245>No.245 P90</option>'
      str_items += '<option value=251>No.251 X95</option>'
      str_items += '<option value=1103>No.103 [MOD] UMP45</option>'
    } else if (num_star === 4) {
      str_items += '<option value=136 selected>No.136 PP-19</option>'
      str_items += '<option value=177>No.177 KLIN</option>'
      str_items += '<option value=203>No.203 蜜獾</option>'
    } else if (num_star === 3) {
      str_items += '<option value=27 selected>No.27 蝎式</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 4) { // RF
    if (num_star === 5) {
      str_items += '<option value=46 selected>No.46 Kar98k</option>'
      str_items += '<option value=48>No.48 WA2000</option>'
      str_items += '<option value=50>No.50 李-恩菲尔德</option>'
      str_items += '<option value=53>No.53 NTW-20</option>'
      str_items += '<option value=128>No.128 M99</option>'
      str_items += '<option value=148>No.148 IWS2000</option>'
      str_items += '<option value=179>No.179 DSR-50</option>'
      str_items += '<option value=192>No.192 JS05</option>'
      str_items += '<option value=197>No.197 卡尔卡诺M1891</option>'
      str_items += '<option value=198>No.198 卡尔卡诺M91/38</option>'
      str_items += '<option value=204>No.204 芭莉斯塔</option>'
      str_items += '<option value=211>No.211 SRS</option>'
      str_items += '<option value=222>No.222 TAC-50</option>'
      str_items += '<option value=231>No.231 M82A1</option>'
      str_items += '<option value=257>No.257 M200</option>'
      str_items += '<option value=1039>No.39 [MOD] 莫辛-纳甘</option>'
    } else if (num_star === 4) {
      str_items += '<option value=36 selected>No.36 春田</option>'
      str_items += '<option value=247>No.247 K31</option>'
      str_items += '<option value=1037>No.37 [MOD]M14</option>'
      str_items += '<option value=1051>No.51 [MOD]FN-49</option>'
    } else if (num_star === 3) {
      str_items += '<option value=37 selected>No.37 M14</option>'
    } else if (num_star === 2) {
      str_items += '<option value=51 selected>No.51 FN-49</option>'
    }
  } else if (set_guntype === 5) { // MG
    if (num_star === 5) {
      str_items += '<option value=109 selected>No.109 MG5</option>'
      str_items += '<option value=112>No.112 内格夫</option>'
      str_items += '<option value=125>No.125 MG4</option>'
      str_items += '<option value=173>No.173 PKP</option>'
      str_items += '<option value=208>No.208 HK21</option>'
      str_items += '<option value=238>No.238 88式</option>'
      str_items += '<option value=253>No.253 刘易斯</option>'
      str_items += '<option value=1075>No.75 [MOD] M1918</option>'
    } else if (num_star === 4) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 6) { // SG
    if (num_star === 5) {
      str_items += '<option value=151 selected>No.151 M1887</option>'
      str_items += '<option value=157>No.157 KSG</option>'
      str_items += '<option value=160>No.160 Saiga-12</option>'
      str_items += '<option value=163>No.163 AA-12</option>'
      str_items += '<option value=164>No.164 FP-6</option>'
      str_items += '<option value=188>No.188 S.A.T.8</option>'
      str_items += '<option value=229>No.229 M870</option>'
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
      str_items += '<option value=11>AC4消音器</option>'
      str_items += '<option value=41>PEQ-16A</option>'
      if (ID === 1001) { // 柯尔特左轮
        str_items += '<option value=11001>柯尔特左轮长枪管</option>'
      }
      if (ID === 1005) { // 纳甘左轮
        str_items += '<option value=11005>纳甘左轮消音器</option>'
      }
      if (ID === 1091) { // MP446
        str_items += '<option value=11091>MP446C比赛枪管</option>'
      }
    } else if (set_guntype === 2) { // AR
      if (ID != 56 && ID != 57 && ID != 1056 && ID != 1057) {
        str_items += '<option value=12>VFL 6-24X56</option>'
        str_items += '<option value=14>EOT 518</option>'
        str_items += '<option value=13>ITI MARS</option>'
        str_items += '<option value=11>AC4消音器</option>'
        str_items += '<option value=41>PEQ-16A</option>'
        if (ID === 65) str_items += '<option value=165>EOT-XPS3</option>'
        if (ID === 66) str_items += '<option value=166>KSTSP</option>'
        if (ID === 69) str_items += '<option value=169>FÉLIN系统瞄具</option>'
        if (ID === 118)  str_items += '<option value=118>PKN03M夜视瞄具</option>'
        if (ID === 1064) str_items += '<option value=11064>G36混合瞄准镜</option>'
      } else if (ID === 54) { // M16A1
        if (set_equip[2] != 32) str_items += '<option value=32>IOP T4外骨骼</option>'
        if (set_equip[2] != 31) str_items += '<option value=31>IOP X4外骨骼</option>'
        if (set_equip[2] != 33) str_items += '<option value=33>Type3防弹插板</option>'
        if (set_equip[2] != 354) str_items += '<option value=354>特殊战机动装甲</option>'
      } else {
        if (set_equip[2] != 12) str_items += '<option value=12>VFL 6-24X56</option>'
        if (set_equip[2] != 14) str_items += '<option value=14>EOT 518</option>'
        if (set_equip[2] != 13) str_items += '<option value=13>ITI MARS</option>'
        if (set_equip[2] != 11) str_items += '<option value=11>AC4消音器</option>'
        if (set_equip[2] != 41) str_items += '<option value=41>PEQ-16A</option>'
        if (ID === 1056) {
          if (set_equip[2] != 11056) str_items += '<option value=11056>兵蚁型RO</option>'
        }
        if (ID === 1057) {
          if (set_equip[2] != 11057) str_items += '<option value=11057>轻量化导轨套件</option>'
        }
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=32>IOP T4外骨骼</option>'
      str_items += '<option value=31>IOP X4外骨骼</option>'
      if (ID === 101 || ID === 102 || ID === 103 || ID === 1103) { // UMP系列
        str_items += '<option value=3103>UMP UX外骨骼</option>'
      }
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
      str_items += '<option value=11>AC4消音器</option>'
      if (ID === 46) { // Kar98k
        str_items += '<option value=146>PM 5-25X65</option>'
      }
      if (ID === 1039) { // 莫辛纳甘-MOD
        str_items += '<option value=11039>K6-24X56</option>'
      }
      if (ID === 1037) { // M14 MOD
        str_items += '<option value=11037>M2两脚架</option>'
      }
      if (ID === 1051) { // FN49 MOD
        str_items += '<option value=11051>快慢机板机组</option>'
      }
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
      if (ID === 125) str_items += '<option value=1125>MG4用MGO</option>'
      if (ID === 1075) str_items += '<option value=11075>CT 4X20</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=33>Type3防弹插板</option>'
    }
  } else if (num_pickequip === 2) { // 第二格装备（AR小队双瞄具/人形放在第三）
    if (set_guntype === 1) { // HG
      str_items += '<option value=21>ILM空尖弹</option>'
      if (ID === 1002) { // M1911
        str_items += '<option value=21002>XM261短弹</option>'
      }
      if (ID === 183) str_items += '<option value=23>Mk211高爆穿甲弹</option>'
    } else if (set_guntype === 2) { // AR
      str_items += '<option value=22>APCR高速弹</option>'
      if (ID === 1057 || ID === 57) { // ST AR-15
        str_items += '<option value=21057>.300BLK高速弹</option>'
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=21>ILM空尖弹</option>'
      if (ID === 213)  str_items += '<option value=23>Mk211高爆穿甲弹</option>'
    // CMS
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=23>Mk211高爆穿甲弹</option>'
      if (ID === 36) { // 春田
        str_items += '<option value=236>国家竞赛穿甲弹</option>'
      }
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=23>Mk211高爆穿甲弹</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=24>#000猎鹿弹</option>'
      str_items += '<option value=25>SABOT独头弹</option>'
    }
  } else if (num_pickequip === 3) { // 第三格装备
    if (set_guntype === 1) { // HG
      str_items += '<option value=31>IOP X4外骨骼</option>'
      str_items += '<option value=32>IOP T4外骨骼</option>'
    } else if (set_guntype === 2) { // AR
      if (ID != 56 && ID != 57 && ID != 1056 && ID != 1057) {
        str_items += '<option value=31>IOP X4外骨骼</option>'
        str_items += '<option value=32>IOP T4外骨骼</option>'
        if (ID === 62) { // G41
          str_items += '<option value=362>高性能战术发饰</option>'
        }
        if (ID === 1055) { // M4A1
          str_items += '<option value=31055>遗留的武器库</option>'
        }
      } else if (ID === 54) { // M16A1
        if (set_equip[0] != 32) str_items += '<option value=32>IOP T4外骨骼</option>'
        if (set_equip[0] != 31) str_items += '<option value=31>IOP X4外骨骼</option>'
        if (set_equip[0] != 33) str_items += '<option value=33>Type3防弹插板</option>'
        if (set_equip[0] != 354) str_items += '<option value=354>特殊战机动装甲</option>'
      } else {
        if (set_equip[0] != 12) str_items += '<option value=12>VFL 6-24X56</option>'
        if (set_equip[0] != 14) str_items += '<option value=14>EOT 518</option>'
        if (set_equip[0] != 13) str_items += '<option value=13>ITI MARS</option>'
        if (set_equip[0] != 11) str_items += '<option value=11>AC4消音器</option>'
        if (set_equip[0] != 41) str_items += '<option value=41>PEQ-16A</option>'
        if (ID === 1056) {
          if (set_equip[0] != 11056) str_items += '<option value=11056>兵蚁型RO</option>'
        }
        if (ID === 1057) {
          if (set_equip[0] != 11057) str_items += '<option value=11057>轻量化导轨套件</option>'
        }
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=11>AC4消音器</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=41>PEQ-16A</option>'
      if (ID === 1103) {
        str_items += '<option value=11103>附加运算模块</option>'
      }
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=34>热光学迷彩披风</option>'
      if (ID === 1039) { // 莫辛纳甘-MOD
        str_items += '<option value=31039>Hayha记忆芯片</option>'
      }
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=35>IOP极限弹链箱</option>'
      if (ID === 1075) str_items += '<option value=31075>Titan火控芯片</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=13>ITI MARS</option>'
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
    str_items += '<option value=-1></option>'
  }
  selectID.innerHTML = str_items
  selectID.value = set_equip[num_pickequip - 1]
}
