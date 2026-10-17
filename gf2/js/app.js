/* GF2 Tools · SPA router + views */
(function () {
  "use strict";

  var DATA = window.TDOLL_STAT || {};
  var WEAPONS = window.WEAPON_STAT || {};
  var KEYS = window.KEY_STAT || { byDoll: {} };
  var MIMICRY = window.MIMICRY_STAT || { rates: {}, byDoll: {} };
  var view = document.getElementById("view");
  var navEl = document.getElementById("nav");

  /* ---------------- icons ---------------- */
  var ICON = {
    doll: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg>',
    weapon: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3.5 21 10l-9 9-6.5-6.5z"/><path d="m3 21 4-4"/></svg>',
    codex: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 9v11"/></svg>',
    tool: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2z"/></svg>',
    dmg: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="4"/></svg>',
    mimicry: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 9V4M12 15v5M9 12H4M15 12h5"/><path d="m9.5 9.5-3.5-3.5M14.5 14.5l3.5 3.5M14.5 9.5l3.5-3.5M9.5 14.5l-3.5 3.5"/></svg>',
    search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>'
  };

  /* ---------------- nav definition ---------------- */
  var NAV = [
    {
      label: "百科", icon: ICON.codex, path: "#/codex",
      children: [
        { text: "人形", path: "#/codex/doll", icon: ICON.doll },
        { text: "武器", path: "#/codex/weapon", icon: ICON.weapon },
        { text: "拟态图谱", path: "#/codex/mimicry", icon: ICON.mimicry }
      ]
    },
    {
      label: "工具", icon: ICON.tool, path: "#/tools",
      children: [
        { text: "伤害计算", path: "#/tools/damage", icon: ICON.dmg }
      ]
    }
  ];

  function renderNav() {
    var hash = location.hash || "#/codex/doll";
    var html = "";
    NAV.forEach(function (group) {
      html += '<div class="nav-group-label">' + group.label + "</div>";
      group.children.forEach(function (item) {
        var active = hash === item.path ||
          (item.path === "#/codex/doll" && /^#\/codex\/doll\//.test(hash)) ||
          (item.path === "#/codex/weapon" && /^#\/codex\/weapon\//.test(hash));
        html += '<a class="nav-item sub' + (active ? " active" : "") + '" href="' + item.path + '">' +
          item.icon + '<span class="nav-txt">' + item.text + "</span></a>";
      });
    });
    navEl.innerHTML = html;
  }

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function starForRank(rank) { return "★★★★★".slice(0, Math.max(0, Math.min(5, rank))); }
  function arr(x) { return Array.isArray(x) ? x : (x == null ? [] : [x]); }

  var allDolls = Object.keys(DATA).map(function (id) { return DATA[id]; });
  var roleOptions = (function () {
    var set = [];
    allDolls.forEach(function (d) {
      var r = arr(d.tags)[0];
      if (r && set.indexOf(r) === -1) set.push(r);
    });
    return set;
  })();

  // 获取方式：常驻 = 全部四星 + 指定五星；其余为限定
  var STANDARD_SSR = {
    "BalthildeSSR": 1, "FayeSSR": 1, "PapashaSSR": 1, "VepleySSR": 1, "QiongjiuSSR": 1,
    "MosinnagantSSR": 1, "HarpsySSR": 1, "NemesisGnosisSSR": 1, "PerityaSSR": 1,
    "SabrinaSSR": 1, "TololoSSR": 1, "ColphneDoppelgaengerSSR": 1
  };
  function isStandard(d) { return d.rank < 5 || !!STANDARD_SSR[d.id]; }

  /* ---------------- views ---------------- */
  function viewDollList() {
    var state = { acquire: "all", rank: "all", role: "all", element: "all", ammo: "all" };

    view.innerHTML =
      '<h1 class="page-title">人形</h1>' +
      '<p class="page-desc">少女前线2：追放人形图鉴，共 ' + allDolls.length + ' 名。点击卡片查看基础属性。</p>' +
      '<div class="toolbar">' + filtersHtml(state, "") + "</div>" +
      '<div class="doll-grid" id="grid"></div>';

    var grid = document.getElementById("grid");
    var countEl = document.getElementById("count");

    function apply() {
      var list = allDolls.filter(function (d) { return matchFilters(d, state); });
      countEl.textContent = list.length + " 项";
      if (!list.length) { grid.innerHTML = '<div class="empty">没有符合条件的人形</div>'; return; }
      grid.innerHTML = list.map(function (d) {
        var tags = arr(d.tags);
        var elem = tags[2];
        var elemIcon = ELEMENT_ICON[elem];
        return '<a class="doll-card" href="#/codex/doll/' + encodeURIComponent(d.id) + '">' +
          '<div class="doll-thumb">' +
            '<span class="rank-badge rank-' + d.rank + '">' + starForRank(d.rank) + "</span>" +
            (elemIcon ? '<span class="elem-badge" title="' + esc(elem) + '"><img src="' + elemIcon + '" alt="' + esc(elem) + '" /></span>' : "") +
            '<img loading="lazy" src="' + d.thumbnail + '" alt="' + esc(d.name) + '" onerror="this.style.visibility=\'hidden\'" />' +
          "</div>" +
          '<div class="doll-card-body"><div class="doll-name">' + esc(d.name) + "</div>" +
            '<div class="doll-tags">' + tags.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" +
          "</div></a>";
      }).join("");
    }

    bindFilters(state, "", apply);
    apply();
  }

  function seg(container, btn) {
    Array.prototype.forEach.call(container.children, function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
  }

  function filterOptionsHtml() {
    var all = { v: "all", label: "全部" };
    function spread(list) { return [all].concat(list.map(function (x) { return { v: x, label: x }; })); }
    return {
      acquire: [all, { v: "standard", label: "常驻" }, { v: "limited", label: "限定" }],
      rank: [all, { v: "5", label: "精英" }, { v: "4", label: "标准" }],
      role: spread(roleOptions),
      element: spread(ELEMENT_ORDER),
      ammo: spread(AMMO_ORDER)
    };
  }

  function segHtml(id, opts, current) {
    return '<div class="seg" id="' + id + '">' + opts.map(function (o) {
      return '<button data-v="' + esc(o.v) + '"' + (o.v === current ? ' class="active"' : "") + ">" + esc(o.label) + "</button>";
    }).join("") + "</div>";
  }

  function filtersHtml(f, prefix) {
    var o = filterOptionsHtml();
    return '<div class="filter-row">' +
        '<span class="flabel">获取</span>' + segHtml(prefix + "acq", o.acquire, f.acquire) +
        '<span class="flabel">稀有度</span>' + segHtml(prefix + "rank", o.rank, f.rank) +
        '<span class="flabel">定位</span>' + segHtml(prefix + "role", o.role, f.role) +
      "</div>" +
      '<div class="filter-row">' +
        '<span class="flabel">属性</span>' + segHtml(prefix + "elem", o.element, f.element) +
        '<span class="flabel">弹种</span>' + segHtml(prefix + "ammo", o.ammo, f.ammo) +
        '<span class="result-count" id="' + prefix + 'count"></span>' +
      "</div>";
  }

  function bindFilters(f, prefix, onChange) {
    [["acq", "acquire"], ["rank", "rank"], ["role", "role"], ["elem", "element"], ["ammo", "ammo"]].forEach(function (p) {
      var el = document.getElementById(prefix + p[0]);
      if (!el) return;
      el.addEventListener("click", function (e) {
        if (e.target.tagName !== "BUTTON") return;
        f[p[1]] = e.target.dataset.v;
        seg(this, e.target);
        onChange();
      });
    });
  }

  function matchFilters(d, f) {
    var tags = arr(d.tags);
    if (f.acquire === "standard" && !isStandard(d)) return false;
    if (f.acquire === "limited" && isStandard(d)) return false;
    if (f.rank !== "all" && String(d.rank) !== f.rank) return false;
    if (f.role !== "all" && tags[0] !== f.role) return false;
    if (f.element !== "all" && tags[2] !== f.element) return false;
    if (f.ammo !== "all" && AMMO_LABEL[tags[1]] !== f.ammo) return false;
    return true;
  }

  function sumStat(d, key) {
    var total = 0;
    var groups = d.attrGroups || {};
    Object.keys(groups).forEach(function (g) {
      var v = groups[g][key];
      if (v == null) return;
      var n = parseFloat(String(v).replace("%", ""));
      if (!isNaN(n)) total += n;
    });
    return total;
  }
  function fmtStat(x) { return String(Math.round(x * 100) / 100); }
  // 调度室加成（按定位/职业类型）
  var DISPATCH = {
    "防卫": { atk: 168, hp: 720, def: 270 },
    "尖兵": { atk: 192, hp: 576, def: 192 },
    "支援": { atk: 183, hp: 618, def: 240 },
    "火力": { atk: 231, hp: 519, def: 222 }
  };
  function dispatchBonus(d, key) {
    var m = DISPATCH[arr(d.tags)[0]];
    return m ? (m[key] || 0) : 0;
  }
  function srcLabel(group, statLabel) {
    if (group === "基础属性") return "基础" + statLabel;
    if (group === "心智增域") return "心智增域";
    if (group === "心智螺旋-增效点位") return "心智螺旋";
    if (group === "心智螺旋-额外进阶收益") return "额外收益";
    return group;
  }
  // ---- equipment state ----
  var equipState = {};
  var equipPicker = null;
  var dollRenderMode = "detail";
  var weaponFilterState = { rank: "all" };
  var keyState = {};
  var keyPicker = null;
  var critFullState = {};
  function getCritFull(d) { return !!critFullState[d.id]; }
  var CRIT3 = ["攻击", "暴击", "暴击伤害"];
  function effectiveAttrs(k, critFull, isGeneric) {
    var attrs = arr(k.attrs).map(function (a) { return { name: a.name, value: a.value }; });
    if (!critFull) return attrs;
    var has = CRIT3.some(function (n) { return attrs.some(function (a) { return a.name === n; }); });
    if (isGeneric || has) {
      CRIT3.forEach(function (n) {
        var found = false;
        attrs.forEach(function (a) { if (a.name === n) { a.value = 5; found = true; } });
        if (!found) attrs.push({ name: n, value: 5 });
      });
    }
    return attrs;
  }
  var oathState = {};
  function getOathState(d) { if (oathState[d.id] === undefined) oathState[d.id] = true; return oathState[d.id]; }
  var emblemState = {};
  function getEmblem(d) { return !!emblemState[d.id]; }
  var mimicryState = {};
  function getMimicryLevel(d) { if (mimicryState[d.id] === undefined) mimicryState[d.id] = 60; return mimicryState[d.id]; }
  function mimicryCore(d) { return MIMICRY.byDoll[d.id] || null; }
  function mimicryContrib(d) {
    var m = mimicryCore(d);
    if (!m) return { "攻击": 0, "生命": 0, "防御": 0 };
    var rate = MIMICRY.rates[String(getMimicryLevel(d))] || 0;
    function v(base) { return rate ? Math.ceil(base * rate / 1000) : 0; }
    return { "攻击": v(m.atk), "生命": v(m.hp), "防御": v(m.def) };
  }
  function roleInfo(id) {
    return (MIMICRY.roles && MIMICRY.roles[String(id)]) || { name: "?", color: "#86868b" };
  }
  var FACTOR_UNIT = MIMICRY.factorUnit || 15;
  function roleBadge(id, count) {
    var r = roleInfo(id);
    return '<span class="role-badge" style="background:' + r.color + '" title="' + esc(r.name) + '显像因子">' +
      esc(r.name) + (count != null ? " ×" + count : "") + "</span>";
  }
  function reqBadges(req) {
    var out = "";
    (req || []).forEach(function (v, i) {
      if (v > 0) out += roleBadge(i + 1, v * FACTOR_UNIT);
    });
    return out;
  }
  function mimicrySlots(m) {
    if (!m || !m.slots || !m.slots.length) return "";
    return m.slots.map(function (t) { return roleBadge(t); }).join("");
  }
  // 契合度(默契回馈)：加成 = Σ round(基础属性 × 系数/1000)，系数全局一致
  var favorState = {};
  function getFavorLevel(d) { if (favorState[d.id] === undefined) favorState[d.id] = 5; return favorState[d.id]; }
  var FAVOR_COEF = {
    2: { "\u653b\u51fb": 36.34 },
    3: { "\u9632\u5fa1": 71.9 },
    4: { "\u653b\u51fb": 62.7, "\u9632\u5fa1": 167.4 },
    5: { "\u653b\u51fb": 80.81 }
  };
  var FAVOR_HP_CUM = { 1: 0, 2: 50.41, 3: 107.88, 4: 107.88, 5: 179.80 };
  function favorContrib(d) {
    var base = (d.attrGroups || {})["\u57fa\u7840\u5c5e\u6027"] || {};
    var lv = getFavorLevel(d);
    function num(k) { var v = parseFloat(String(base[k] || 0).replace("%", "")); return isNaN(v) ? 0 : v; }
    var out = { "攻击": 0, "生命": 0, "防御": 0 };
    ["攻击", "防御"].forEach(function (k) {
      var b = num(k);
      for (var L = 1; L <= lv; L++) { var c = FAVOR_COEF[L]; if (c && c[k]) out[k] += Math.round(b * c[k] / 1000); }
    });
    var hb = num("生命"), prev = 0;
    for (var L2 = 2; L2 <= lv; L2++) { var cc = FAVOR_HP_CUM[L2] || 0; out["生命"] += Math.round(hb * cc / 1000) - Math.round(hb * prev / 1000); prev = cc; }
    return out;
  }

  // ---- weapon attachments (配件) ----
  var attachState = {};
  var attachPicker = null;
  var ATTACH_SLOTS = ["枪口", "部件1", "部件2", "部件3"];
  var ATTACH_POOL = ["攻击", "攻击加成", "生命", "生命加成", "防御", "防御加成", "暴击", "暴击伤害"];
  var ATTACH_POOL_ALT = ["攻击", "攻击加成", "生命", "生命加成", "防御", "防御加成", "暴击"];
  var ATTACH_VAL = { "攻击": 72, "攻击加成": 11.4, "生命": 162, "生命加成": 11.4, "防御": 48, "防御加成": 11.4, "暴击": 15, "暴击伤害": 15 };
  var ATTACH_UNIT = { "攻击加成": "%", "生命加成": "%", "防御加成": "%", "暴击": "%", "暴击伤害": "%" };
  var ATTACH_MAX = [4, 3, 3, 3];
  var ATTACH_DEFAULT = [
    ["攻击", "暴击", "暴击伤害", "攻击加成"],
    ["攻击", "攻击加成", "暴击"],
    ["攻击", "攻击加成", "暴击"],
    ["攻击", "攻击加成", "暴击"]
  ];
  function getAttachState(d) {
    var st = attachState[d.id];
    if (!st) { st = ATTACH_DEFAULT.map(function (a) { return a.slice(); }); attachState[d.id] = st; }
    return st;
  }
  function attachContribs(d) {
    var sums = {};
    getAttachState(d).forEach(function (list) {
      list.forEach(function (name) { sums[name] = (sums[name] || 0) + (ATTACH_VAL[name] || 0); });
    });
    return sums;
  }
  function attachDisplay(name) { return "+" + ATTACH_VAL[name] + (ATTACH_UNIT[name] || ""); }

  function groupTerms(d, key, statLabel) {
    var order = ["基础属性", "心智增域", "心智螺旋-增效点位", "心智螺旋-额外进阶收益"];
    var terms = [];
    order.forEach(function (g) {
      var obj = (d.attrGroups || {})[g] || {};
      if (obj[key] != null) terms.push({ v: obj[key], src: srcLabel(g, statLabel) });
    });
    return terms;
  }
  function mulForm(d, statKey, statLabel, bonusKey, w, keyTerms, attach) {
    var nums = groupTerms(d, statKey, statLabel);
    if (w && w.stats && w.stats[statKey] != null) nums.push({ v: w.stats[statKey], src: "武器" });
    if (attach && attach.num) nums.push({ v: fmtStat(attach.num), src: "配件" });
    var bonus = dispatchBonus(d, bonusKey);
    if (bonus) nums.push({ v: String(bonus), src: "调度室" });
    var mults = groupTerms(d, statKey + "加成", statLabel);
    if (w && w.stats && w.stats[statKey + "加成"] != null) mults.push({ v: w.stats[statKey + "加成"], src: "武器" });
    arr(keyTerms).forEach(function (t) { mults.push(t); });
    if (attach && attach.pct) mults.push({ v: fmtStat(attach.pct) + "%", src: "配件" });
    return { nums: nums, mults: mults };
  }
  function sumForm(d, statKey, statLabel, w, keyTerms, attachPct) {
    var nums = groupTerms(d, statKey, statLabel);
    if (w && w.stats && w.stats[statKey] != null) nums.push({ v: w.stats[statKey], src: "武器" });
    if (attachPct) nums.push({ v: fmtStat(attachPct) + "%", src: "配件" });
    arr(keyTerms).forEach(function (t) { nums.push(t); });
    return { nums: nums, mults: [] };
  }
  function formNum(v) { return parseFloat(String(v).replace("%", "")) || 0; }
  function formValue(form) {
    var base = form.nums.reduce(function (a, t) { return a + formNum(t.v); }, 0);
    var mult = form.mults.length ? (1 + form.mults.reduce(function (a, t) { return a + formNum(t.v); }, 0) / 100) : 1;
    return base * mult;
  }
  function formTerm(v, src) {
    return '<span class="exp-term"><span class="exp-num">' + esc(v) + '</span><span class="exp-src">' + esc(src) + "</span></span>";
  }
  function formOp(ch) { return '<span class="exp-op">' + ch + "</span>"; }
  function formText(form) {
    var n = form.nums.map(function (t) { return t.v; }).join(" + ");
    if (form.mults.length) return "= (" + n + ") × (1 + " + form.mults.map(function (t) { return t.v; }).join(" + ") + ")";
    return "= " + n;
  }
  function formDetail(form) {
    var h = formOp("=");
    if (form.mults.length) {
      h += formOp("(");
      form.nums.forEach(function (t, i) { if (i) h += formOp("+"); h += formTerm(t.v, t.src); });
      h += formOp(")") + formOp("×") + formOp("(") + formOp("1") + formOp("+");
      form.mults.forEach(function (t, i) { if (i) h += formOp("+"); h += formTerm(t.v, t.src); });
      h += formOp(")");
    } else {
      form.nums.forEach(function (t, i) { if (i) h += formOp("+"); h += formTerm(t.v, t.src); });
    }
    return '<div class="stat-formula">' + h + "</div>";
  }
  function statCell(label, value, form) {
    return '<div class="stat-cell expandable" onclick="STAT.toggle(this)">' +
      '<span class="k">' + esc(label) + "</span>" +
      '<span class="v">' + esc(value) +
        '<span class="stat-tip">' + esc(formText(form)) + '<span class="tip-hint">点击查看细则</span></span>' +
      "</span>" +
      '<div class="stat-detail">' + formDetail(form) + "</div>" +
    "</div>";
  }
  function plainCell(label, value) {
    return '<div class="stat-cell"><span class="k">' + esc(label) + '</span><span class="v">' + esc(value) + "</span></div>";
  }

  // ---- equipped weapon ----
  function signatureWeapon(dollId) {
    var found = null;
    Object.keys(WEAPONS).forEach(function (k) {
      var w = WEAPONS[k];
      if (!found && w.rank === 5 && w.bond && w.bond.id === dollId) found = w;
    });
    return found;
  }
  function getEquipState(d) {
    var st = equipState[d.id];
    if (!st) {
      st = { weaponId: null, locked: false };
      if (d.rank >= 5) { var sig = signatureWeapon(d.id); if (sig) st.weaponId = sig.id; }
      equipState[d.id] = st;
    }
    return st;
  }
  function equippedWeapon(d) {
    var st = getEquipState(d);
    return st.weaponId ? WEAPONS[st.weaponId] : null;
  }
  function weaponTile(d) {
    var st = getEquipState(d);
    var w = st.weaponId ? WEAPONS[st.weaponId] : null;
    if (!w) {
      return '<button class="dmg-tile empty weapon-slot" onclick="EQ.open(\'' + d.id + '\',\'add\')"><span class="plus">+</span></button>';
    }
    return '<div class="dmg-tile has-doll weapon-slot' + (st.locked ? " locked" : "") + '">' +
      '<button class="tile-btn tile-lock" title="' + (st.locked ? "已锁定，点击解锁" : "锁定") + '" onclick="event.stopPropagation();EQ.toggleLock(\'' + d.id + '\')">' +
        (st.locked ? LOCK_ICON : UNLOCK_ICON) + "</button>" +
      '<button class="tile-btn tile-del" title="卸下" onclick="event.stopPropagation();EQ.remove(\'' + d.id + '\')">✕</button>' +
      '<div class="tile-body" onclick="EQ.open(\'' + d.id + '\',\'replace\')">' +
        '<img src="' + w.thumbnail + '" alt="" onerror="this.style.visibility=\'hidden\'" />' +
        '<div class="tile-name">' + esc(w.name) + "</div>" +
      "</div>" +
    "</div>";
  }
  function keySlot(d, kind, index) {
    var st = getKeyState(d);
    var kd = KEYS.byDoll[d.id] || {};
    var data = null;
    if (kind === "affection") { if (st.affection) data = kd.affection; }
    else {
      var ref = st.shared[index];
      data = ref === "generic_crit" ? KEYS.genericShared : (ref ? (KEYS.byDoll[ref] && KEYS.byDoll[ref].shared) : null);
    }
    if (data) {
      return '<div class="key-tile">' +
        '<button class="tile-btn tile-del" title="卸下" onclick="event.stopPropagation();EQ.removeKey(\'' + d.id + '\',\'' + kind + '\',' + index + ')">✕</button>' +
        '<div class="key-tile-body" onclick="EQ.openKey(\'' + d.id + '\',\'' + kind + '\',' + index + ')">' +
          (data.icon ? '<img src="' + data.icon + '" alt="" onerror="this.style.visibility=\'hidden\'" />' : '<div class="key-gen-icon">通用</div>') +
          '<div class="key-name">' + esc(data.name) + "</div>" +
        "</div>" +
      "</div>";
    }
    return '<button class="key-tile empty" onclick="EQ.openKey(\'' + d.id + '\',\'' + kind + '\',' + index + ')"><span class="plus">+</span></button>';
  }
  function keyTiles(d) {
    return keySlot(d, "affection", 0) + keySlot(d, "shared", 0) + keySlot(d, "shared", 1) + keySlot(d, "shared", 2);
  }
  function attachGrid(d) {
    var st = getAttachState(d);
    var html = '<div class="attach-grid">';
    ATTACH_SLOTS.forEach(function (label, i) {
      html += '<button class="attach-tile" onclick="EQ.openAttach(\'' + d.id + '\',' + i + ')">' +
        '<div class="attach-name">' + esc(label) + '</div>' +
        '<div class="attach-attrs">' + st[i].map(function (a) { return '<span class="aa">' + esc(a) + "</span>"; }).join("") + "</div>" +
      "</button>";
    });
    return html + "</div>";
  }
  function attachPickerHtml(d) {
    if (!attachPicker || attachPicker.dollId !== d.id) return "";
    var slot = attachPicker.slot;
    var pool = slot === 0 ? ATTACH_POOL : ATTACH_POOL_ALT;
    var cur = getAttachState(d)[slot];
    var opts = pool.map(function (name) {
      var on = cur.indexOf(name) >= 0;
      return '<button class="attach-opt' + (on ? " on" : "") + '" onclick="EQ.toggleAttach(\'' + name + '\')">' +
        '<span class="ao-name">' + esc(name) + '</span><span class="ao-val">' + attachDisplay(name) + "</span></button>";
    }).join("");
    return '<div class="picker-float">' +
      '<div class="picker-head"><div class="picker-title">' + esc(ATTACH_SLOTS[slot]) + ' · 选择属性（' + cur.length + "/" + ATTACH_MAX[slot] + '）</div>' +
        '<button class="picker-close" onclick="EQ.closeAttach()">✕</button></div>' +
      '<div class="attach-list">' + opts + "</div>" +
    "</div>";
  }
  function mimicryControl(d) {
    var m = mimicryCore(d);
    if (!m) return '<span class="mim-none">无</span>';
    var mc = mimicryContrib(d);
    return '<label class="oath"><input type="number" min="1" max="60" value="' + getMimicryLevel(d) +
      '" onchange="EQ.setMimicry(\'' + d.id + '\', this.value)" /><span>' + esc(m.name) + "</span></label>" +
      '<div class="mim-vals">攻击 ' + mc["攻击"] + " · 生命 " + mc["生命"] + " · 防御 " + mc["防御"] + "</div>" +
      '<div class="mim-slots"><span class="mim-label">生长数据槽位</span>' + mimicrySlots(m) + "</div>";
  }
  function mimicryFormsHtml(d) {
    var m = mimicryCore(d);
    if (!m || !m.forms || !m.forms.length) return "";
    return '<div class="mim-forms">' +
      '<div class="mim-forms-head"><span>显像形态</span><a href="#/codex/mimicry">拟态图谱百科 →</a></div>' +
      m.forms.map(function (f) {
        return '<div class="mim-form">' +
          '<span class="mim-form-stage">' + esc(f.name) + '</span>' +
          '<span class="mim-form-req">' + (reqBadges(f.req) || '<span class="mim-none">无</span>') + '</span>' +
          '<span class="mim-form-eff">' + (f.effect || "") + '</span>' +
        "</div>";
      }).join("") +
    "</div>";
  }
  function favorControl(d) {
    var fc = favorContrib(d);
    return '<label class="oath"><input type="number" min="1" max="5" value="' + getFavorLevel(d) +
      '" onchange="EQ.setFavor(\'' + d.id + '\', this.value)" /><span>契合度等级（2–5 级加成）</span></label>' +
      '<div class="mim-vals">攻击 ' + fc["攻击"] + " · 生命 " + fc["生命"] + " · 防御 " + fc["防御"] + "</div>";
  }
  function equipWidget(d) {
    return '<div class="equip-row">' +
      '<div class="equip-group"><div class="equip-title">武器</div>' +
        '<div class="weapon-body">' + weaponTile(d) + attachGrid(d) + "</div></div>" +
      '<div class="equip-group"><div class="equip-title">位键佩戴</div>' +
        '<div class="key-grid">' + keyTiles(d) + "</div>" +
        '<label class="oath"><input type="checkbox"' + (getCritFull(d) ? " checked" : "") +
          ' onchange="EQ.toggleCritFull(\'' + d.id + '\')" /><span>攻爆满配</span></label></div>' +
      '<div class="equip-group"><div class="equip-title">铭契</div>' +
        '<label class="oath"><input type="checkbox"' + (getOathState(d) ? " checked" : "") +
          ' onchange="EQ.toggleOath(\'' + d.id + '\')" /><span>启用（攻击 / 生命 / 防御 +5%）</span></label></div>' +
      '<div class="equip-group"><div class="equip-title">拟态图谱</div>' + mimicryControl(d) + "</div>" +
      '<div class="equip-group"><div class="equip-title">契合度</div>' + favorControl(d) + "</div>" +
      '<div class="equip-group"><div class="equip-title">徽记助益</div>' +
        '<label class="oath"><input type="checkbox"' + (getEmblem(d) ? " checked" : "") +
          ' onchange="EQ.toggleEmblem(\'' + d.id + '\')" /><span>启用（攻击 / 生命 / 防御 +1）</span></label></div>' +
    "</div>";
  }
  function equipPickerHtml(d) {
    if (!equipPicker || equipPicker.dollId !== d.id) return "";
    var f = weaponFilterState, o = weaponOpts();
    var wt = arr(d.tags)[1];
    var list = Object.keys(WEAPONS).map(function (k) { return WEAPONS[k]; }).filter(function (w) {
      if (arr(w.tags)[0] !== wt) return false;
      if (f.rank !== "all" && String(w.rank) !== f.rank) return false;
      return true;
    });
    var cards = list.map(function (w) {
      var t = arr(w.tags);
      return '<button class="pick-card" onclick="EQ.pick(\'' + w.id + '\')">' +
        '<div class="pick-thumb"><img loading="lazy" src="' + w.thumbnail + '" alt="" onerror="this.style.visibility=\'hidden\'" /></div>' +
        '<div class="pick-info"><div class="pick-l1"><span class="pick-stars rank-' + w.rank + '">' + starForRank(w.rank) + "</span>" +
          '<span class="pick-name">' + esc(w.name) + "</span></div>" +
          '<div class="pick-l2">' + t.map(function (x) { return '<span class="pick-meta">' + esc(x) + "</span>"; }).join("") + "</div>" +
        "</div></button>";
    }).join("");
    return '<div class="picker-float">' +
      '<div class="picker-head"><div class="picker-title">选择武器 · ' + esc(wt) + '</div>' +
        '<button class="picker-close" onclick="EQ.close()">✕</button></div>' +
      '<div class="filter-row"><span class="flabel">稀有度</span>' + segHtml("erank", o.rank, f.rank) + "</div>" +
      '<div class="picker-grid">' + (cards || '<div class="empty">没有符合条件的武器</div>') + "</div>" +
    "</div>";
  }

  function getKeyState(d) {
    var st = keyState[d.id];
    if (!st) { st = { affection: true, shared: [d.id, null, null] }; keyState[d.id] = st; }
    return st;
  }
  function equippedKeys(d) {
    var st = getKeyState(d);
    var kd = KEYS.byDoll[d.id] || {};
    var list = [];
    if (st.affection && kd.affection) list.push({ data: kd.affection, src: "好感键", ref: "self" });
    for (var i = 0; i < 3; i++) {
      var ref = st.shared[i];
      if (!ref) continue;
      var sh = ref === "generic_crit" ? KEYS.genericShared : (KEYS.byDoll[ref] && KEYS.byDoll[ref].shared);
      if (sh) list.push({ data: sh, src: "共键", ref: ref });
    }
    return list;
  }
  function keyContribs(d) {
    var out = { "攻击": [], "生命": [], "防御": [], "暴击": [], "暴击伤害": [] };
    var cf = getCritFull(d);
    var sums = {};
    equippedKeys(d).forEach(function (k) {
      if (!sums[k.src]) sums[k.src] = {};
      effectiveAttrs(k.data, cf && k.ref !== "self", k.ref === "generic_crit").forEach(function (a) {
        if (out[a.name]) sums[k.src][a.name] = (sums[k.src][a.name] || 0) + a.value;
      });
    });
    ["攻击", "生命", "防御", "暴击", "暴击伤害"].forEach(function (name) {
      Object.keys(sums).forEach(function (src) {
        if (sums[src][name]) out[name].push({ v: fmtStat(sums[src][name]) + "%", src: src });
      });
    });
    return out;
  }
  function keyPickerHtml(d) {
    if (!keyPicker || keyPicker.dollId !== d.id) return "";
    var list = [];
    if (keyPicker.kind === "affection") {
      var kd = KEYS.byDoll[d.id] || {};
      if (kd.affection) list.push({ ref: "self", data: kd.affection });
    } else {
      Object.keys(KEYS.byDoll).forEach(function (did) {
        var sh = KEYS.byDoll[did].shared;
        if (sh) list.push({ ref: did, data: sh });
      });
      if (KEYS.genericShared) list.push({ ref: "generic_crit", data: KEYS.genericShared });
    }
    var cards = list.map(function (k) {
      return '<button class="key-card" onclick="EQ.pickKey(\'' + k.ref + '\')">' +
        '<div class="key-card-ico">' + (k.data.icon ? '<img loading="lazy" src="' + k.data.icon + '" alt="" />' : '<div class="key-gen-icon">通用</div>') + "</div>" +
        '<div class="key-card-info"><div class="key-card-name">' + esc(k.data.name) + "</div>" +
          '<div class="key-card-attrs">' + arr(k.data.attrs).map(function (a) { return '<span class="chip">' + esc(a.name) + a.value + "%</span>"; }).join("") + "</div>" +
        "</div></button>";
    }).join("");
    return '<div class="picker-float">' +
      '<div class="picker-head"><div class="picker-title">选择位键</div>' +
        '<button class="picker-close" onclick="EQ.closeKey()">✕</button></div>' +
      '<div class="key-list">' + (cards || '<div class="empty">没有可选项</div>') + "</div>" +
    "</div>";
  }

  function dollStatPanel(d) {
    var w = equippedWeapon(d);
    var kc = keyContribs(d);
    var ac = attachContribs(d);
    var mc = mimicryContrib(d);
    var fc = favorContrib(d);
    if (getOathState(d)) {
      kc["攻击"].push({ v: "5%", src: "铭契" });
      kc["生命"].push({ v: "5%", src: "铭契" });
      kc["防御"].push({ v: "5%", src: "铭契" });
    }
    var atkF = mulForm(d, "攻击", "攻击力", "atk", w, kc["攻击"], { num: ac["攻击"] || 0, pct: ac["攻击加成"] || 0 });
    var hpF = mulForm(d, "生命", "生命值", "hp", w, kc["生命"], { num: ac["生命"] || 0, pct: ac["生命加成"] || 0 });
    var defF = mulForm(d, "防御", "防御力", "def", w, kc["防御"], { num: ac["防御"] || 0, pct: ac["防御加成"] || 0 });
    var critF = sumForm(d, "暴击", "暴击", w, kc["暴击"], ac["暴击"] || 0);
    var critDF = sumForm(d, "暴击伤害", "暴击伤害", w, kc["暴击伤害"], ac["暴击伤害"] || 0);
    if (mc["攻击"]) atkF.nums.push({ v: fmtStat(mc["攻击"]), src: "拟态图谱" });
    if (mc["生命"]) hpF.nums.push({ v: fmtStat(mc["生命"]), src: "拟态图谱" });
    if (mc["防御"]) defF.nums.push({ v: fmtStat(mc["防御"]), src: "拟态图谱" });
    if (fc["攻击"]) atkF.nums.push({ v: fmtStat(fc["攻击"]), src: "契合度" });
    if (fc["生命"]) hpF.nums.push({ v: fmtStat(fc["生命"]), src: "契合度" });
    if (fc["防御"]) defF.nums.push({ v: fmtStat(fc["防御"]), src: "契合度" });
    if (getEmblem(d)) {
      atkF.nums.push({ v: "1", src: "徽记助益" });
      hpF.nums.push({ v: "1", src: "徽记助益" });
      defF.nums.push({ v: "1", src: "徽记助益" });
    }
    var cells =
      statCell("攻击", fmtStat(formValue(atkF)), atkF) +
      statCell("生命", fmtStat(formValue(hpF)), hpF) +
      statCell("防御", fmtStat(formValue(defF)), defF) +
      statCell("暴击", fmtStat(formValue(critF)) + "%", critF) +
      statCell("暴击伤害", fmtStat(formValue(critDF)) + "%", critDF) +
      plainCell("稳态", fmtStat(sumStat(d, "稳态"))) +
      plainCell("行动力", fmtStat(sumStat(d, "行动力")));
    return '<div class="stat-panel">' + equipWidget(d) + mimicryFormsHtml(d) +
      '<div class="stat-grid">' + cells + "</div>" + equipPickerHtml(d) + keyPickerHtml(d) + attachPickerHtml(d) + "</div>";
  }

  function viewDollDetail(id) {
    dollRenderMode = "detail";
    var d = DATA[id];
    if (!d) { view.innerHTML = '<div class="empty">未找到该人形。<button class="back-btn" onclick="location.hash=\'#/codex/doll\'">返回人形列表</button></div>'; return; }

    var statPanel = dollStatPanel(d);

    var skillsHtml = "";
    var dSkills = arr(d.skills);
    if (dSkills.length) {
      skillsHtml = '<div class="attr-section"><h3>技能</h3><div class="skill-list">' +
        dSkills.map(function (s) {
          var nm = (s.name || "").replace(/\s*Lv\.\d+\s*$/, "");
          var chips = arr(s.tags).concat(arr(s.subTags)).map(function (t) {
            return '<span class="chip">' + esc(t) + "</span>";
          }).join("");
          var levels = arr(s.levels).length
            ? '<div class="skill-levels">' + arr(s.levels).map(function (l) { return '<span class="lvl">' + esc(l) + "</span>"; }).join("") + "</div>"
            : "";
          var costs = arr(s.costs).length
            ? '<div class="skill-costs">' + arr(s.costs).map(function (c) { return '<span class="cost-chip">' + esc(c) + "</span>"; }).join("") + "</div>"
            : "";
          var vert = arr(s.vertebrae).length
            ? '<div class="skill-vert">' + arr(s.vertebrae).map(function (v) {
                return '<div class="vert-row"><span class="vert-label">' + esc(v.label) + '</span><span class="vert-text">' + (v.text || "") + "</span></div>";
              }).join("") + "</div>"
            : "";
          var icon = s.icon
            ? '<div class="skill-icon"><img loading="lazy" src="' + s.icon + '" onerror="this.style.visibility=\'hidden\'" /></div>'
            : '<div class="skill-icon"></div>';
          return '<div class="skill-card">' +
            '<div class="skill-head">' + icon +
              '<div class="skill-head-txt"><div class="skill-name">' + esc(nm) + "</div>" +
                '<div class="skill-tags">' + chips + "</div></div>" +
            "</div>" + levels +
            '<div class="skill-desc">' + (s.desc || "") + "</div>" +
            costs + vert +
          "</div>";
        }).join("") +
      "</div></div>";
    }

    view.innerHTML =
      '<button class="back-btn" onclick="location.hash=\'#/codex/doll\'">' + ICON.back + " 返回人形列表</button>" +
      '<div class="detail-head">' +
        '<div class="detail-avatar"><img src="' + d.avatar + '" alt="' + esc(d.name) + '" onerror="this.parentNode.style.visibility=\'hidden\'" /></div>' +
        '<div class="detail-meta">' +
          '<h1 class="detail-name">' + esc(d.name) + "</h1>" +
          '<div class="detail-tags"><span class="chip rank-stars rank-' + d.rank + '">' + starForRank(d.rank) + "</span>" +
            '<span class="chip">' + esc(d.id) + "</span>" +
            arr(d.tags).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" +
          '<div class="intro">' + esc(d.intro) + "</div>" +
        "</div>" +
      "</div>" +
      statPanel + skillsHtml;

    if (equipPicker && equipPicker.dollId === d.id) {
      bindSegs({ erank: "rank" }, weaponFilterState, function () { refreshDoll(d.id); });
    }
  }

  /* ---------------- damage calculator: doll selection ---------------- */
  var DMG_MAX = 7;
  var ENEMY_MAX = 1;
  var damageState = { slots: [], enemies: [], expanded: {}, fields: { turns: "1" }, picker: null,
    filters: { acquire: "all", rank: "all", role: "all", element: "all", ammo: "all" } };
  var ENEMIES = [{ id: "dummy", name: "默认木桩" }];
  function enemyName(id) { for (var i = 0; i < ENEMIES.length; i++) { if (ENEMIES[i].id === id) return ENEMIES[i].name; } return id; }

  // weapon(枪种) -> ammo-type(弹种) icon ; element(属性) -> element icon
  var AMMO_ICON = {
    "手枪": "img/ui/type_a_light.png",
    "冲锋枪": "img/ui/type_a_light.png",
    "突击步枪": "img/ui/type_a_mid.png",
    "狙击枪": "img/ui/type_a_heavy.png",
    "机枪": "img/ui/type_a_heavy.png",
    "霰弹枪": "img/ui/type_a_sg.png",
    "刀": "img/ui/type_a_sword.png"
  };
  var ELEMENT_ICON = {
    "物理": "img/ui/type_e_physics.png",
    "燃烧": "img/ui/type_e_fire.png",
    "电导": "img/ui/type_e_elec.png",
    "冷凝": "img/ui/type_e_ice.png",
    "酸蚀": "img/ui/type_e_acid.png",
    "浊刻": "img/ui/type_e_hydro.png",
    "源谐": "img/ui/type_e_harmony.png"
  };
  var AMMO_LABEL = {
    "手枪": "轻型弹", "冲锋枪": "轻型弹", "突击步枪": "中型弹",
    "狙击枪": "重型弹", "机枪": "重型弹", "霰弹枪": "霰弹", "刀": "近战"
  };
  var ELEMENT_ORDER = ["物理", "燃烧", "电导", "冷凝", "酸蚀", "浊刻", "源谐"];
  var AMMO_ORDER = ["轻型弹", "中型弹", "重型弹", "霰弹", "近战"];
  function metaChip(icon, label) {
    return '<span class="pick-meta">' +
      (icon ? '<img class="meta-ico" src="' + icon + '" alt="" onerror="this.style.display=\'none\'" />' : "") +
      esc(label) + "</span>";
  }

  var UNLOCK_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.9-1"/></svg>';
  var LOCK_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
  var MAG_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';

  function dmgSlotsHtml() {
    var html = "";
    damageState.slots.forEach(function (slot, i) {
      var d = DATA[slot.id] || {};
      var open = !!damageState.expanded[slot.id];
      html += '<div class="dmg-tile has-doll' + (slot.locked ? " locked" : "") + (open ? " config-open" : "") + '">' +
        '<button class="tile-btn tile-lock" title="' + (slot.locked ? "已锁定，点击解锁" : "锁定") + '" onclick="event.stopPropagation();DMG.toggleLock(' + i + ')">' +
          (slot.locked ? LOCK_ICON : UNLOCK_ICON) + "</button>" +
        '<button class="tile-btn tile-del" title="移除" onclick="event.stopPropagation();DMG.remove(' + i + ')">✕</button>' +
        '<button class="tile-btn tile-mag' + (open ? " on" : "") + '" title="配置" onclick="event.stopPropagation();DMG.toggleConfig(\'' + slot.id + '\')">' + MAG_ICON + "</button>" +
        '<div class="tile-body" onclick="DMG.openPicker(\'doll\',\'replace\',' + i + ')">' +
          '<img src="' + (d.thumbnail || "") + '" alt="" onerror="this.style.visibility=\'hidden\'" />' +
          '<div class="tile-name">' + esc(d.name || slot.id) + '</div>' +
        "</div>" +
      "</div>";
    });
    if (damageState.slots.length < DMG_MAX) {
      html += '<button class="dmg-tile empty" onclick="DMG.openPicker(\'doll\',\'add\')"><span class="plus">+</span></button>';
    }
    return html;
  }

  function dmgConfigHtml() {
    var html = "";
    damageState.slots.forEach(function (slot) {
      if (!damageState.expanded[slot.id]) return;
      var d = DATA[slot.id];
      if (!d) return;
      html += '<div class="dmg-config">' +
        '<div class="dmg-config-avatar">' +
          '<img src="' + d.avatar + '" alt="" onerror="this.style.visibility=\'hidden\'" />' +
          '<div class="dmg-config-name">' + esc(d.name || d.id) + "</div>" +
        "</div>" +
        '<div class="dmg-config-body">' + dollStatPanel(d) + "</div>" +
      "</div>";
    });
    return html;
  }

  function dmgEnemySlotsHtml() {
    var html = "";
    damageState.enemies.forEach(function (slot, i) {
      html += '<div class="dmg-tile has-enemy">' +
        '<button class="tile-btn tile-del" title="移除" onclick="event.stopPropagation();DMG.removeEnemy(' + i + ')">✕</button>' +
        '<div class="tile-body" onclick="DMG.openPicker(\'enemy\',\'replace\',' + i + ')">' +
          '<div class="tile-text">' + esc(enemyName(slot.id)) + '</div>' +
        "</div>" +
      "</div>";
    });
    if (damageState.enemies.length < ENEMY_MAX) {
      html += '<button class="dmg-tile empty" onclick="DMG.openPicker(\'enemy\',\'add\')"><span class="plus">+</span></button>';
    }
    return html;
  }

  function dmgPickerHtml() {
    var p = damageState.picker;
    if (!p) return "";
    var isEnemy = p.kind === "enemy";
    var body;

    if (isEnemy) {
      var have = {};
      damageState.enemies.forEach(function (s) { have[s.id] = true; });
      body = '<div class="enemy-list">' + ENEMIES.map(function (e) {
        var dis = have[e.id];
        return '<button class="enemy-opt' + (dis ? " disabled" : "") + '"' + (dis ? " disabled" : "") +
          ' onclick="DMG.pick(\'' + e.id + '\')">' + esc(e.name) + "</button>";
      }).join("") + "</div>";
    } else {
      var list = allDolls.filter(function (d) { return matchFilters(d, damageState.filters); });
      var inRoster = {};
      damageState.slots.forEach(function (s) { inRoster[s.id] = true; });
      var cards = list.map(function (d) {
        var tags = arr(d.tags);
        var weapon = tags[1] || "";
        var element = tags[2] || "";
        var disabled = !!inRoster[d.id];
        return '<button class="pick-card' + (disabled ? " disabled" : "") + '"' + (disabled ? " disabled" : "") +
          ' onclick="DMG.pick(\'' + d.id + '\')">' +
          '<div class="pick-thumb"><img loading="lazy" src="' + d.thumbnail + '" alt="" onerror="this.style.visibility=\'hidden\'" /></div>' +
          '<div class="pick-info">' +
            '<div class="pick-l1"><span class="pick-stars rank-' + d.rank + '">' + starForRank(d.rank) + "</span>" +
              '<span class="pick-name">' + esc(d.name) + "</span></div>" +
            '<div class="pick-l2">' +
              (element ? metaChip(ELEMENT_ICON[element], element) : "") +
              (weapon ? metaChip(AMMO_ICON[weapon], weapon) : "") +
            "</div>" +
          "</div>" +
        "</button>";
      }).join("");
      body = filtersHtml(damageState.filters, "p") +
        '<div class="picker-grid">' + (cards || '<div class="empty">没有匹配的人形</div>') + "</div>";
    }

    return '<div class="picker-float">' +
      '<div class="picker-head"><div class="picker-title">' + (isEnemy ? "选择敌人" : "选择人形") + "</div>" +
        '<button class="picker-close" onclick="DMG.closePicker()">✕</button></div>' +
      body +
    "</div>";
  }

  function field(label, key) {
    return '<label class="field"><span class="field-label">' + esc(label) + "</span>" +
      '<input class="field-input" type="number" min="1" value="' + esc(damageState.fields[key] || "") +
      '" oninput="DMG.setField(\'' + key + '\', this.value)" /></label>';
  }

  function viewDamage() {
    dollRenderMode = "damage";
    var p = damageState.picker;
    view.innerHTML =
      '<h1 class="page-title">伤害计算</h1>' +
      '<p class="page-desc">美式战棋回合制战斗的数值向伤害计算器。</p>' +

      '<div class="panel">' +
        '<div class="panel-head"><h3>人形选择</h3><span class="panel-sub">最多 ' + DMG_MAX + ' 名 · 点击磁贴选择 / 更换，右上角 ✕ 移除，左上角锁定</span></div>' +
        '<div class="slot-row">' + dmgSlotsHtml() + "</div>" +
        dmgConfigHtml() +
        (p && p.kind !== "enemy" ? dmgPickerHtml() : "") +
      "</div>" +

      '<div class="panel">' +
        '<div class="panel-head"><h3>敌人设置</h3><span class="panel-sub">最多 ' + ENEMY_MAX + ' 个 · 点击磁贴选择 / 更换，右上角 ✕ 移除</span></div>' +
        '<div class="slot-row">' + dmgEnemySlotsHtml() + "</div>" +
        (p && p.kind === "enemy" ? dmgPickerHtml() : "") +
      "</div>" +

      '<div class="panel">' +
        '<div class="panel-head"><h3>战斗环境</h3></div>' +
        '<div class="field-grid">' + field("回合数", "turns") + "</div>" +
      "</div>" +

      '<div class="panel">' +
        '<div class="panel-head"><h3>结果</h3></div>' +
        '<button class="btn-primary" onclick="DMG.simulate()">开始模拟</button>' +
        '<div id="simOut" class="sim-out"></div>' +
      "</div>";

    if (p && p.kind !== "enemy") {
      bindFilters(damageState.filters, "p", viewDamage);
      var pc = document.getElementById("pcount");
      if (pc) pc.textContent = allDolls.filter(function (d) { return matchFilters(d, damageState.filters); }).length + " 项";
    }
  }

  window.DMG = {
    openPicker: function (kind, mode, index) {
      if (kind !== "enemy" && mode === "replace" && damageState.slots[index] && damageState.slots[index].locked) return;
      damageState.picker = { kind: kind, mode: mode, index: index };
      viewDamage();
    },
    closePicker: function () { damageState.picker = null; viewDamage(); },
    pick: function (id) {
      var p = damageState.picker;
      if (!p) return;
      if (p.kind === "enemy") {
        var has = false;
        damageState.enemies.forEach(function (s) { if (s.id === id) has = true; });
        if (p.mode === "replace") { damageState.enemies[p.index] = { id: id }; }
        else if (!has && damageState.enemies.length < ENEMY_MAX) { damageState.enemies.push({ id: id }); }
        damageState.picker = null; viewDamage(); return;
      }
      var existing = -1;
      damageState.slots.forEach(function (s, i) { if (s.id === id) existing = i; });
      if (p.mode === "replace") {
        if (existing !== -1 && existing !== p.index) return;
        var prev = damageState.slots[p.index];
        if (prev) delete damageState.expanded[prev.id];
        damageState.slots[p.index] = { id: id, locked: false };
      } else {
        if (existing !== -1) return;
        if (damageState.slots.length < DMG_MAX) damageState.slots.push({ id: id, locked: false });
      }
      damageState.picker = null;
      viewDamage();
    },
    remove: function (i) {
      if (damageState.slots[i] && damageState.slots[i].locked) return;
      if (damageState.slots[i]) delete damageState.expanded[damageState.slots[i].id];
      damageState.slots.splice(i, 1);
      viewDamage();
    },
    removeEnemy: function (i) { damageState.enemies.splice(i, 1); viewDamage(); },
    toggleLock: function (i) {
      if (damageState.slots[i]) damageState.slots[i].locked = !damageState.slots[i].locked;
      viewDamage();
    },
    toggleConfig: function (id) {
      if (damageState.expanded[id]) delete damageState.expanded[id];
      else damageState.expanded[id] = true;
      damageState.picker = null;
      equipPicker = null;
      keyPicker = null;
      attachPicker = null;
      viewDamage();
    },
    setField: function (key, v) { damageState.fields[key] = v; },
    simulate: function () { /* 计算逻辑待实现 */ }
  };

  window.STAT = {
    toggle: function (el) { if (el) el.classList.toggle("open"); }
  };

  function refreshDoll(id) {
    if (dollRenderMode === "damage") viewDamage();
    else viewDollDetail(id);
  }

  window.EQ = {
    open: function (dollId, mode) {
      var st = getEquipState(DATA[dollId]);
      if (mode === "replace" && st.locked) return;
      equipPicker = { dollId: dollId, mode: mode };
      refreshDoll(dollId);
    },
    close: function () {
      var id = equipPicker ? equipPicker.dollId : null;
      equipPicker = null;
      if (id) refreshDoll(id);
    },
    pick: function (weaponId) {
      if (!equipPicker) return;
      var id = equipPicker.dollId;
      getEquipState(DATA[id]).weaponId = weaponId;
      equipPicker = null;
      refreshDoll(id);
    },
    remove: function (dollId) {
      var st = getEquipState(DATA[dollId]);
      if (st.locked) return;
      st.weaponId = null;
      refreshDoll(dollId);
    },
    toggleLock: function (dollId) {
      var st = getEquipState(DATA[dollId]);
      st.locked = !st.locked;
      refreshDoll(dollId);
    },
    openKey: function (dollId, kind, index) {
      keyPicker = { dollId: dollId, kind: kind, index: index };
      refreshDoll(dollId);
    },
    closeKey: function () {
      var id = keyPicker ? keyPicker.dollId : null;
      keyPicker = null;
      if (id) refreshDoll(id);
    },
    pickKey: function (ref) {
      if (!keyPicker) return;
      var id = keyPicker.dollId, st = getKeyState(DATA[id]);
      if (keyPicker.kind === "affection") st.affection = true;
      else st.shared[keyPicker.index] = ref;
      keyPicker = null;
      refreshDoll(id);
    },
    removeKey: function (dollId, kind, index) {
      var st = getKeyState(DATA[dollId]);
      if (kind === "affection") st.affection = false;
      else st.shared[index] = null;
      refreshDoll(dollId);
    },
    openAttach: function (dollId, slot) {
      attachPicker = { dollId: dollId, slot: slot };
      refreshDoll(dollId);
    },
    closeAttach: function () {
      var id = attachPicker ? attachPicker.dollId : null;
      attachPicker = null;
      if (id) refreshDoll(id);
    },
    toggleAttach: function (name) {
      if (!attachPicker) return;
      var id = attachPicker.dollId, slot = attachPicker.slot;
      var list = getAttachState(DATA[id])[slot];
      var i = list.indexOf(name);
      if (i >= 0) list.splice(i, 1);
      else if (list.length < ATTACH_MAX[slot]) list.push(name);
      refreshDoll(id);
    },
    toggleOath: function (dollId) {
      oathState[dollId] = !getOathState(DATA[dollId]);
      refreshDoll(dollId);
    },
    toggleEmblem: function (dollId) {
      emblemState[dollId] = !getEmblem(DATA[dollId]);
      refreshDoll(dollId);
    },
    toggleCritFull: function (dollId) {
      critFullState[dollId] = !getCritFull(DATA[dollId]);
      refreshDoll(dollId);
    },
    setMimicry: function (dollId, v) {
      var n = parseInt(v, 10);
      if (isNaN(n)) n = 1;
      mimicryState[dollId] = Math.max(1, Math.min(60, n));
      refreshDoll(dollId);
    },
    setFavor: function (dollId, v) {
      var n = parseInt(v, 10);
      if (isNaN(n)) n = 1;
      favorState[dollId] = Math.max(1, Math.min(5, n));
      refreshDoll(dollId);
    }
  };

  function viewMimicry() {
    var stages = MIMICRY.stages || [];
    var entries = MIMICRY.entries || [];
    var growth = MIMICRY.growth || [];

    var legend = [1, 2, 3, 4].map(function (id) {
      var r = roleInfo(id);
      return '<span class="role-badge" style="background:' + r.color + '">' + esc(r.name) + "</span>";
    }).join("");

    var stageRows = stages.map(function (s, i) {
      var lvText = s.lv ? "Lv." + s.lv : "初始";
      var desc = i === 0 ? "初始显像形态" : "核心达到 Lv." + s.lv + " 后解锁第 " + s.n + " 个显像形态";
      return '<tr><td><b>' + esc(s.name) + "</b></td><td>" + lvText + "</td><td>" + desc + "</td></tr>";
    }).join("");

    var fixedEntries = entries.filter(function (e) { return e.fixed; });
    var randomEntries = entries.filter(function (e) { return !e.fixed; });

    var prefixRows = randomEntries.map(function (e) {
      var lv = (e.levels || []).map(function (l) {
        return '<div class="pref-lv"><span>Lv.' + l.lv + "</span>" + (l.effect || "") + "</div>";
      }).join("");
      return "<tr><td>" + roleBadge(e.role) + "</td><td>" + esc(e.name) + "</td><td><b>" +
        esc(e.prefix || "—") + "</b></td><td>" + e.max + "</td>" +
        '<td><details class="pref-details"><summary>查看 ' + e.max + ' 级效果</summary>' +
        '<div class="pref-levels">' + lv + "</div></details></td></tr>";
    }).join("");

    var fixedCards = fixedEntries.map(function (e) {
      var main = (e.growth && e.growth[0] ? e.growth[0] : e.name).replace(/[αβγ]$/, "");
      var lvRows = (e.levels || []).map(function (l) {
        return '<div class="entry-lv"><span class="lv-tag">Lv.' + l.lv + "</span>" +
          '<span class="lv-eff">' + (l.effect || "") + "</span>" +
          '<span class="lv-fac">' + roleBadge(e.role, l.fac) + "</span></div>";
      }).join("");
      var orbs = [["α", "alpha"], ["β", "beta"], ["γ", "gamma"]].map(function (o) {
        return '<div class="mim-orb"><img src="img/mimicry/' + o[1] + '.png" alt="" /><span>' + o[0] + "</span></div>";
      }).join("");
      return '<div class="entry-card fixed">' +
        '<div class="entry-head">' + roleBadge(e.role) + "<b>" + esc(main) + "</b>" +
          '<span class="entry-max">上限 ' + e.max + " 级</span></div>" +
        '<div class="entry-sub">固定词条 · ' + esc(e.name) + "</div>" +
        '<div class="mim-orbs">' + orbs + "</div>" +
        '<div class="entry-levels">' + lvRows + "</div>" +
      "</div>";
    }).join("");

    var growthRows = growth.map(function (g) {
      var part = (g.name.match(/[根茎叶花]/) || [""])[0];
      return "<tr><td>" + esc(g.name) + "</td><td>" + esc(part) + "</td><td>" + roleBadge(g.role) + "</td><td>" +
        esc(g.entry) + "</td><td>Lv." + g.lv + "</td><td>+" + g.fac + "</td></tr>";
    }).join("");

    var dollRows = Object.keys(DATA).map(function (id) {
      var d = DATA[id];
      var m = (MIMICRY.byDoll || {})[id];
      if (!m) return "";
      return '<tr><td><a class="mim-link" href="#/codex/doll/' + encodeURIComponent(id) + '">' + esc(d.name) + "</a></td>" +
        "<td>" + esc(m.name) + "</td>" +
        '<td class="mim-slot-cell">' + (m.slots || []).map(function (t) { return roleBadge(t); }).join("") + "</td></tr>";
    }).join("");

    view.innerHTML =
      '<h1 class="page-title">拟态图谱</h1>' +
      '<p class="page-desc">人形的装备系统：拟态核心有 6 个生长数据槽位，装备后获得特化形态与显像因子，因子达标即激活显像形态。</p>' +

      '<div class="panel">' +
        '<div class="panel-head"><h3>显像因子</h3><span class="panel-sub">4 种类型</span></div>' +
        '<p class="mim-note">每个生长数据由 1 个固定词条（决定主名与槽位类型）和 1 个随机词条（决定前缀）组成，两者都会提供显像因子，每级各提供 1 点。同名特化形态等级叠加，上限见词条（2 / 3 / 5 / 6 级）。显像因子达到要求即可激活核心上的显像形态。</p>' +
        '<div class="mim-legend">' + legend + "</div>" +
        '<table class="mim-table mim-stage-table">' +
          "<thead><tr><th>阶段</th><th>核心等级</th><th>说明</th></tr></thead>" +
          "<tbody>" + stageRows + "</tbody></table>" +
        '<p class="mim-note">每个显像形态的具体因子需求因人形而异，见人形详情页的「拟态图谱」区域。需求可能包含该核心没有槽位的因子类型，需要靠随机词条（前缀）提供的跨类型因子来满足。</p>' +
      "</div>" +

      '<div class="panel">' +
        '<div class="panel-head"><h3>名称构成</h3><span class="panel-sub">随机前缀 · 固定主名 + 等级后缀</span></div>' +
        '<div class="mim-formula">' +
          '<span class="mf-part mf-prefix">除湿<small>随机词条前缀</small></span>' +
          '<span class="mf-sep">·</span>' +
          '<span class="mf-part mf-main">穹顶之花<small>固定词条主名</small></span>' +
          '<span class="mf-part mf-suffix">γ<small>等级后缀</small></span>' +
        "</div>" +
        '<p class="mim-note">每件生长数据由 <b>1 个固定词条</b> + <b>若干随机子词条</b> 组成：固定词条决定主名与槽位类型，随机子词条决定前缀；α / β / γ 固定对应等级 1 / 2 / 3。随机子词条的数量与等级在生成时决定（受词条上限限制），总因子 = 固定词条等级 + 各随机子词条等级，因此会出现 3+2、3+3、3+2+1 等情况；前缀取等级最高的随机子词条。前缀对照见下一模块，固定词条见「后缀」模块。</p>' +
      "</div>" +

      '<div class="panel">' +
        '<div class="panel-head"><h3>前缀对应规则</h3><span class="panel-sub">' + randomEntries.length + " 种随机词条</span></div>" +
        '<p class="mim-note">随机词条的前缀不一定与词条同名，例如：浊刻抗性 → 除湿、物理抗击 → 实弹、首领对策 → 御强。</p>' +
        '<div class="mim-table-wrap"><table class="mim-table">' +
          "<thead><tr><th>类型</th><th>随机词条</th><th>前缀</th><th>上限</th><th>各等级效果</th></tr></thead>" +
          "<tbody>" + prefixRows + "</tbody></table></div>" +
      "</div>" +

      '<div class="panel">' +
        '<div class="panel-head"><h3>后缀与固定词条</h3><span class="panel-sub">' + fixedEntries.length + " 种固定词条</span></div>" +
        '<p class="mim-note">固定词条决定主名与槽位类型；后缀 α / β / γ 固定对应等级 1 / 2 / 3。图片为游戏内生长数据图标。</p>' +
        '<div class="mim-fixed-grid">' + fixedCards + "</div>" +
      "</div>" +

      '<div class="panel">' +
        '<div class="panel-head"><h3>生长数据</h3><span class="panel-sub">4 类 × 4 系 × α / β / γ（根 = 防卫，茎 = 尖兵，叶 = 支援，花 = 火力）</span></div>' +
        '<p class="mim-note">下表为固定词条（决定主名与槽位类型）；每件生长数据还会带 1 条随机词条作为前缀，因此同时提供两种类型的显像因子。</p>' +
        '<div class="mim-table-wrap"><table class="mim-table">' +
          "<thead><tr><th>名称</th><th>部位</th><th>类型</th><th>特化形态</th><th>等级</th><th>提供因子</th></tr></thead>" +
          "<tbody>" + growthRows + "</tbody></table></div>" +
      "</div>" +

      '<div class="panel">' +
        '<div class="panel-head"><h3>人形槽位</h3><span class="panel-sub">每个人形 6 个生长数据槽位</span></div>' +
        '<div class="mim-table-wrap"><table class="mim-table mim-doll-table">' +
          "<thead><tr><th>人形</th><th>拟态核心</th><th>6 个槽位类型</th></tr></thead>" +
          "<tbody>" + dollRows + "</tbody></table></div>" +
      "</div>";
  }

  /* ---------------- weapons ---------------- */
  function bindSegs(idToKey, f, onChange) {
    Object.keys(idToKey).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("click", function (e) {
        if (e.target.tagName !== "BUTTON") return;
        f[idToKey[id]] = e.target.dataset.v;
        seg(this, e.target); onChange();
      });
    });
  }
  function weaponRankLabel(r) { return r >= 5 ? "精英" : (r === 4 ? "标准" : "普通"); }
  function weaponOpts() {
    var kinds = [], ammos = [];
    Object.keys(WEAPONS).forEach(function (k) {
      var t = arr(WEAPONS[k].tags);
      if (t[0] && kinds.indexOf(t[0]) < 0) kinds.push(t[0]);
      if (t[1] && ammos.indexOf(t[1]) < 0) ammos.push(t[1]);
    });
    kinds.sort(); ammos.sort();
    function opt(v) { return { v: v, label: v }; }
    return {
      rank: [{ v: "all", label: "全部" }, { v: "5", label: "精英" }, { v: "4", label: "标准" }, { v: "3", label: "普通" }],
      kind: [{ v: "all", label: "全部" }].concat(kinds.map(opt)),
      ammo: [{ v: "all", label: "全部" }].concat(ammos.map(opt))
    };
  }

  function viewWeaponList() {
    var state = { rank: "all", kind: "all", ammo: "all" };
    var o = weaponOpts();
    view.innerHTML =
      '<h1 class="page-title">武器</h1>' +
      '<p class="page-desc">少女前线2：追放武器图鉴，共 ' + Object.keys(WEAPONS).length + ' 件。点击卡片查看详情。</p>' +
      '<div class="toolbar">' +
        '<div class="filter-row"><span class="flabel">稀有度</span>' + segHtml("wrank", o.rank, state.rank) + "</div>" +
        '<div class="filter-row">' +
          '<span class="flabel">枪种</span>' + segHtml("wkind", o.kind, state.kind) +
          '<span class="flabel">弹种</span>' + segHtml("wammo", o.ammo, state.ammo) +
        "</div>" +
      "</div>" +
      '<div class="weapon-grid" id="wgrid"></div>';

    var grid = document.getElementById("wgrid");
    function apply() {
      var list = Object.keys(WEAPONS).map(function (k) { return WEAPONS[k]; }).filter(function (d) {
        var t = arr(d.tags);
        if (state.rank !== "all" && String(d.rank) !== state.rank) return false;
        if (state.kind !== "all" && t[0] !== state.kind) return false;
        if (state.ammo !== "all" && t[1] !== state.ammo) return false;
        return true;
      });
      if (!list.length) { grid.innerHTML = '<div class="empty">没有符合条件的武器</div>'; return; }
      grid.innerHTML = list.map(function (d) {
        var t = arr(d.tags);
        return '<a class="doll-card" href="#/codex/weapon/' + encodeURIComponent(d.id) + '">' +
          '<div class="doll-thumb weapon-thumb"><span class="rank-badge rank-' + d.rank + '">' + starForRank(d.rank) + "</span>" +
            '<img loading="lazy" src="' + d.thumbnail + '" alt="' + esc(d.name) + '" onerror="this.style.visibility=\'hidden\'" /></div>' +
          '<div class="doll-card-body"><div class="doll-name">' + esc(d.name) + "</div>" +
            '<div class="doll-tags">' + t.map(function (x) { return '<span class="chip">' + esc(x) + "</span>"; }).join("") + "</div>" +
          "</div></a>";
      }).join("");
    }
    bindSegs({ wrank: "rank", wkind: "kind", wammo: "ammo" }, state, apply);
    apply();
  }

  function viewWeaponDetail(id) {
    var d = WEAPONS[id];
    if (!d) { view.innerHTML = '<div class="empty">未找到该武器。<button class="back-btn" onclick="location.hash=\'#/codex/weapon\'">返回武器列表</button></div>'; return; }
    var t = arr(d.tags);
    var statCells = Object.keys(d.stats || {}).map(function (k) {
      return '<div class="stat-cell"><span class="k">' + esc(k) + '</span><span class="v">' + esc(d.stats[k]) + "</span></div>";
    }).join("");

    var sections = "";
    if (d.bond && d.bond.id) {
      sections += '<div class="attr-section"><h3>烙印增效 · ' + esc(d.bond.name) + '</h3><div class="wtext">' + (d.bond.text || "") + "</div></div>";
    }
    if (d.trait && d.trait.text) {
      sections += '<div class="attr-section"><h3>' + esc(d.trait.label || "特质") + '</h3><div class="wtext">' + d.trait.text + "</div></div>";
    }
    var fx = arr(d.effects);
    if (fx.length) {
      sections += '<div class="attr-section"><h3>特效</h3><div class="weapon-effects">' + fx.map(function (e) {
        return '<div class="weapon-fx"><div class="fx-name">' + esc(e.name) + '</div><div class="wtext">' + (e.text || "") + "</div></div>";
      }).join("") + "</div></div>";
    }
    var pools = arr(d.pools);
    if (pools.length) {
      sections += '<div class="attr-section"><h3>卡池</h3><div class="weapon-pools">' + pools.map(function (p) {
        return '<div class="wp-row"><span>' + esc(p.name) + '</span><span>' + esc(p.time) + "</span></div>";
      }).join("") + "</div></div>";
    }

    view.innerHTML =
      '<button class="back-btn" onclick="location.hash=\'#/codex/weapon\'">' + ICON.back + " 返回武器列表</button>" +
      '<div class="weapon-hero"><img src="' + d.image + '" alt="' + esc(d.name) + '" onerror="this.parentNode.style.visibility=\'hidden\'" /></div>' +
      '<h1 class="detail-name">' + esc(d.name) + "</h1>" +
      '<div class="detail-tags"><span class="chip rank-stars rank-' + d.rank + '">' + starForRank(d.rank) + "</span>" +
        '<span class="chip">' + esc(weaponRankLabel(d.rank)) + "</span>" +
        t.map(function (x) { return '<span class="chip">' + esc(x) + "</span>"; }).join("") + "</div>" +
      '<div class="intro">' + esc(d.intro) + "</div>" +
      '<div class="stat-panel"><div class="weapon-stats">' + statCells + "</div></div>" +
      sections;
  }

  function viewPlaceholder(title, desc, note) {
    view.innerHTML =
      '<h1 class="page-title">' + esc(title) + '</h1>' +
      '<p class="page-desc">' + esc(desc) + "</p>" +
      '<div class="placeholder"><div class="ph-ico">🚧</div>' +
        "<h3>即将上线</h3><p>" + esc(note) + "</p></div>";
  }

  /* ---------------- router ---------------- */
  function render() {
    var hash = location.hash || "#/codex/doll";
    renderNav();
    window.scrollTo(0, 0);
    if (hash !== "#/tools/damage") damageState.picker = null;
    if (hash.indexOf("#/codex/doll/") !== 0) { equipPicker = null; keyPicker = null; attachPicker = null; }

    var mDoll = hash.match(/^#\/codex\/doll\/(.+)$/);
    if (mDoll) { viewDollDetail(decodeURIComponent(mDoll[1])); return; }
    var mWpn = hash.match(/^#\/codex\/weapon\/(.+)$/);
    if (mWpn) { viewWeaponDetail(decodeURIComponent(mWpn[1])); return; }

    switch (hash) {
      case "#/codex/doll": viewDollList(); break;
      case "#/codex/weapon": viewWeaponList(); break;
      case "#/codex/mimicry": viewMimicry(); break;
      case "#/tools/damage": viewDamage(); break;
      default: location.hash = "#/codex/doll"; return;
    }
  }

  window.addEventListener("hashchange", render);
  if (!location.hash) location.hash = "#/codex/doll";
  render();
})();
