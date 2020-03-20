function _show(id_table, lib) {
  for (var id of id_table) eval('document.getElementById(id).innerHTML=lib.' + id);
}
function load_indexinfo(lang_type) {
  var currnet_lib = lib_info.get(lang_type)
  var id_table = [
    'title_page', 'title_panel', 'title_tab1', 'title_tab2', 'title_tab3',
    'content_1_1', 'content_1_2_1', 'content_1_2_2', 'content_1_4',
    'content_2_1_1', 'content_2_1_2', 'content_2_1_3', 'content_2_2', 'content_2_3'
  ]
  _show(id_table, currnet_lib)
}
var lib_info = new Map
var idxinfo_cn = {
  title_page: '首页',
  title_panel: '万千过客，感谢你与我邂逅',
  title_tab1: '更新历史',
  title_tab2: '关于我们',
  title_tab3: '相关链接',

  content_1_1: '少女前线工具 v6.7',
  content_1_2_1: '<b>所有部分内容更新公告现<span style="color:deeppink">放入对应页面中</span></b>',
  content_1_2_2: '<b>命运の乐章 <a href="../rank.html">B站攻略合集页面</a></b>',
  content_1_4: '联系方式',
  content_2_1_1: '1. 本站纯公益，由<span style="color:#FF0066">命运の乐章</span>运营 (=・ω・=)',
  content_2_1_2: '2. 本站全部代码和素材开源，获取源码请前往 <a href="https://github.com/hycdes/GFTool" target="_blank"><u><span style="color:dodgerblue">GFTool-github仓库 </span></u></a> Σ( ￣□￣||)',
  content_2_1_3: '3. 资料内容或工具内容转载请注明出处，但<span style="color:#FF0066">禁止将其用于商业</span> (●￣(ｴ)￣●)',
  content_2_2: '“你的名字有人知晓，你的功绩永世长存”',
  content_2_3: '<b>建站</b>：命运の乐章<br><b>韩文翻译</b>: @pohcy @marty @KOZ39<br><b>参与贡献</b>：<br>@Damien丶泽宇 @Simon@白金·世界 @AsLegend[b站] @色图<br>@kirA @Map @HelenCromwell[b站] @矩形波导[b站] @普鲁露特酱poi[b站]<br>@AsLegend[b站] @笑笑哭笑笑[b站] @IIdf[NGA] @天后号驱逐舰[b站] @這世界需要更多狗糧<br>@蕾米利亚、斯卡雷特[b站] @johnchen902[github] @涯余雨花[NGA] @a232430[NGA]'
}
var idxinfo_en = {
  title_page: 'Home',
  title_panel: 'Nice to meet you!',
  title_tab1: 'Update history',
  title_tab2: 'About us',
  title_tab3: 'Related link',

  content_1_1: 'GFTool v6.7',
  content_1_2_1: '<b>All update info put in <span style="color:deeppink">related pages</span></b>',
  content_1_2_2: '...',
  content_1_4: 'Connect me',
  content_2_1_1: '1. Website made by <span style="color:#FF0066">FatalChapter</span> (=・ω・=)',
  content_2_1_2: '2. All of this OPEN SOURCE, get contents from <a href="https://github.com/hycdes/GFTool" target="_blank"><u><span style="color:dodgerblue">GFTool-github repository</span></u></a> Σ( ￣□￣||)',
  content_2_1_3: '3. Reprinted to indicate the source, <span style="color:#FF0066">prohibited for commercial use</span> (●￣(ｴ)￣●)',
  content_2_2: '"Your name is known, and your achievement will last forever"',
  content_2_3: '<b>Build</b>：命运の乐章<br><b>Korean translation</b>: @pohcy @marty @KOZ39<br><b>Supporters</b>：<br>@Damien丶泽宇 @Simon@白金·世界 @AsLegend[b站] @色图<br>@kirA @Map @HelenCromwell[b站] @矩形波导[b站] @普鲁露特酱poi[b站]<br>@AsLegend[b站] @笑笑哭笑笑[b站] @IIdf[NGA] @天后号驱逐舰[b站] @這世界需要更多狗糧<br>@蕾米利亚、斯卡雷特[b站] @johnchen902[github] @涯余雨花[NGA] @a232430[NGA]'
}
var idxinfo_ko = {
  title_page: '메인',
  title_panel: '우연히 이 사이트에 들려주신 여러분 만나서 반갑습니다!',
  title_tab1: '업데이트 내역',
  title_tab2: '사용지침',
  title_tab3: '관련 링크',

  content_1_1: 'GFTool v6.7',
  content_1_2_1: '<b>All update info put in <span style="color:deeppink">related pages</span></b>',
  content_1_2_2: '...',
  content_1_4: '연락처',
  content_2_1_1: '1. 본 사이트는 순수하게 공익을 위해 운영되며 <span style="color:#FF0066">命运の乐章(FatalChapter)</span> 에 의해 운영됩니다 (=・ω・=)',
  content_2_1_2: '2. 본 사이트의 모든 코드와 소재들은 오픈 소스이며 <a href="https://github.com/hycdes/GFTool" target="_blank"><u><span style="color:dodgerblue">GFTool-github저장소 </span></u></a>에서 확인할 수 있습니다 Σ( ￣□￣||)',
  content_2_1_3: '3. 자료 및 도구 내용을 사용할 경우 출처를 표기해 주시기 바라며 <span style="color:#FF0066">상업적인 이용을 금지</span> 합니다 (●￣(ｴ)￣●)',
  content_2_2: '"Your name is known, and your achievement will last forever"',
  content_2_3: '<b>Build</b>：命运の乐章<br><b>Korean translation</b>: @pohcy @marty @KOZ39<br><b>Supporters</b>：<br>@Damien丶泽宇 @Simon@白金·世界 @AsLegend[b站] @色图<br>@kirA @Map @HelenCromwell[b站] @矩形波导[b站] @普鲁露特酱poi[b站]<br>@AsLegend[b站] @笑笑哭笑笑[b站] @IIdf[NGA] @天后号驱逐舰[b站] @這世界需要更多狗糧<br>@蕾米利亚、斯卡雷特[b站] @johnchen902[github] @涯余雨花[NGA] @a232430[NGA]'
}

lib_info.set('cn', idxinfo_cn)
lib_info.set('ko', idxinfo_ko)
lib_info.set('en', idxinfo_en)
