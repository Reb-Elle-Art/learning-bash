/* learning .log — shared app
   Renders reference pages from data.js, provides site-wide search,
   deep links (#cmd-ls, #flag--r, #db-…), and the System-7 menubar. */
(function () {
'use strict';
var D = window.LL_DATA || null;
var PAGE = document.body.getAttribute('data-page') || 'home';
var PAGES = {
  bash: { file: 'bash-skills.html',            label: 'bash skills' },
  db:   { file: 'databases.html',              label: 'databases' },
  lp:   { file: 'databases-learning-path.html',label: 'database learning path' },
  home: { file: 'index.html',                  label: 'learning .log' }
};

/* ───────── utils ───────── */
function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
                  .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function slug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
}
function el(html) {
  var t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}
function stripTags(s) { return String(s).replace(/<[^>]*>/g, ' '); }

/* ───────── detail-block renderer ───────── */
function renderDetail(blocks) {
  var out = '';
  (blocks || []).forEach(function (b) {
    if (b.label) out += '<div class="dlabel">' + esc(b.label) + '</div>';
    if (b.type === 'text') out += '<div class="dtext">' + b.html + '</div>';
    else if (b.type === 'code') out += '<code class="dcode">' + esc(b.text) + '</code>';
    else if (b.type === 'table') {
      out += '<div class="spec-grid">';
      b.rows.forEach(function (r) {
        out += '<span class="spec-key">' + esc(r[0]) + '</span><span class="spec-val">' + esc(r[1]) + '</span>';
      });
      out += '</div>';
    } else if (b.type === 'cmds') {
      out += '<div class="cmd-chips">' + b.cmds.map(function (c) {
        return '<span class="cmd-chip" onclick="goToCmd(\'' + esc(c) + '\')">' + esc(c) + '</span>';
      }).join('') + '</div>';
    }
  });
  return out;
}
function detailText(blocks) {
  return (blocks || []).map(function (b) {
    return (b.label || '') + ' ' + stripTags(b.html || b.text || '') + ' ' +
           (b.rows ? b.rows.map(function (r) { return r.join(' '); }).join(' ') : '');
  }).join(' ');
}

/* ───────── card toggling (global; also used by legacy inline onclick) ───────── */
window.toggleCard = function (card) { if (card) card.classList.toggle('open'); };

window.switchTab = function (name, tabEl) {
  document.querySelectorAll('.tab[data-panel], .tab[onclick]').forEach(function (t) { t.classList.remove('active'); });
  document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
  var panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.add('active');
  if (!tabEl) tabEl = document.querySelector('.tab[data-panel="tab-' + name + '"]');
  if (tabEl) tabEl.classList.add('active');
};

window.filterCmd = function (cat, pill) {
  document.querySelectorAll('.fpill').forEach(function (p) { p.classList.remove('active'); });
  if (pill) pill.classList.add('active');
  document.querySelectorAll('#tab-commands .section').forEach(function (s) {
    s.classList.toggle('hidden', cat !== 'all' && s.getAttribute('data-cat') !== cat);
  });
};

window.goToFlag = function (f) { jumpTo('flag-' + f); };
window.goToCmd = function (cmd) {
  if (D && PAGE === 'bash') {
    var hit = D.bash.commands.filter(function (c) { return c.cmd === cmd; })[0];
    if (hit) return jumpTo(hit.id);
  }
  location.href = PAGES.bash.file + '#cmd-' + slug(cmd);
};

function jumpTo(id) {
  var target = document.getElementById(id);
  if (!target) { return; }
  var panel = target.closest('.tab-panel');
  if (panel) switchTab(panel.id.replace(/^tab-/, ''));
  var card = target.closest('.card, .block-card, .concept-card, .cat-card, .circle-row, .phase-card, .question-card');
  if (card) card.classList.add('open');
  (card || target).classList.remove('flash');
  void (card || target).offsetWidth;            /* restart animation */
  (card || target).classList.add('flash');
  (card || target).scrollIntoView({ behavior: 'smooth', block: 'center' });
  if (history.replaceState) history.replaceState(null, '', '#' + id);
}

/* ───────── bash page rendering ───────── */
function chipRow(flags) {
  if (!flags || !flags.length) return '';
  return '<div class="dlabel">Common flags</div><div class="flag-row">' +
    flags.map(function (f) {
      return '<span class="flag-chip" onclick="goToFlag(\'' + esc(f) + '\')">' + esc(f) + '</span>';
    }).join('') + '</div>';
}

function cmdCard(c) {
  return '<div class="card" id="' + c.id + '" data-search="' +
    esc((c.cmd + ' ' + c.desc + ' ' + (c.synonyms||[]).join(' ') + ' ' + (c.flags||[]).join(' ') + ' ' + detailText(c.detail)).toLowerCase()) + '">' +
    '<div class="card-header" onclick="toggleCard(this.closest(\'.card\'))">' +
      '<span class="card-icon">⌘</span>' +
      '<span class="card-cmd">' + esc(c.cmd) + '</span>' +
      '<span class="card-desc">' + esc(c.desc) + '</span>' +
      '<span class="chevron">▾</span></div>' +
    '<div class="card-detail">' + renderDetail(c.detail) + chipRow(c.flags) + '</div></div>';
}

function renderBash() {
  var b = D.bash;
  /* commands grouped into sections by category, order preserved */
  var cats = [], byCat = {};
  b.commands.forEach(function (c) {
    if (!byCat[c.cat]) { byCat[c.cat] = { title: c.catTitle, items: [] }; cats.push(c.cat); }
    byCat[c.cat].items.push(c);
  });
  var host = document.querySelector('#tab-commands .content');
  host.innerHTML =
    '<div class="filter-row"><div class="fpill active" onclick="filterCmd(\'all\',this)">All</div>' +
    cats.map(function (cat) {
      return '<div class="fpill" onclick="filterCmd(\'' + cat + '\',this)">' + esc(byCat[cat].title) + '</div>';
    }).join('') + '</div>' +
    cats.map(function (cat) {
      return '<div class="section" data-cat="' + cat + '"><div class="section-title">' + esc(byCat[cat].title) +
        '</div><div class="cards">' + byCat[cat].items.map(cmdCard).join('') + '</div></div>';
    }).join('');

  /* building blocks */
  var secs = [], bySec = {};
  b.blocks.forEach(function (bl) {
    if (!bySec[bl.section]) { bySec[bl.section] = []; secs.push(bl.section); }
    bySec[bl.section].push(bl);
  });
  document.querySelector('#tab-blocks .content').innerHTML =
    '<p class="tab-intro">Reusable syntax elements that work across many commands. Click to expand.</p>' +
    secs.map(function (s) {
      return '<div class="section"><div class="section-title">' + esc(s) + '</div><div class="block-grid">' +
        bySec[s].map(function (bl) {
          return '<div class="block-card" id="' + bl.id + '" data-search="' +
            esc((bl.symbol + ' ' + bl.name + ' ' + (bl.synonyms||[]).join(' ') + ' ' + detailText(bl.detail)).toLowerCase()) + '">' +
            '<div class="block-header" onclick="toggleCard(this.closest(\'.block-card\'))">' +
            '<div><div class="block-symbol">' + esc(bl.symbol) + '</div><div class="block-name">' + esc(bl.name) + '</div></div>' +
            '<span class="chevron">▾</span></div>' +
            '<div class="block-detail">' + renderDetail(bl.detail) + '</div></div>';
        }).join('') + '</div></div>';
    }).join('');

  /* flags — fully generated from command data + flagMeta */
  var usedIn = {};
  b.commands.forEach(function (c) {
    (c.flags || []).forEach(function (f) { (usedIn[f] = usedIn[f] || []).push(c); });
  });
  document.querySelector('#tab-flags .content').innerHTML =
    '<p class="tab-intro">Common flags and which commands use them — generated automatically from the command entries. ' +
    'Where a flag means something different for a command, the difference is noted.</p><div class="flag-grid">' +
    Object.keys(b.flagMeta).map(function (f) {
      var meta = b.flagMeta[f], cmds = usedIn[f] || [];
      var spec = '';
      if (meta.specTable) {
        spec = '<div class="flag-used" style="margin-top:12px;">' + esc(meta.specLabel || 'format specifiers') + '</div>' +
          '<div class="spec-grid">' + meta.specTable.map(function (r) {
            return '<span class="spec-key">' + esc(r[0]) + '</span><span class="spec-val">' + esc(r[1]) + '</span>';
          }).join('') + '</div>';
      }
      var varTxt = meta.variants ? Object.keys(meta.variants).map(function (k) { return k + ' ' + meta.variants[k]; }).join(' ') : '';
      return '<div class="flag-card" id="flag-' + esc(f) + '" data-search="' +
        esc((f + ' ' + meta.meaning + ' ' + varTxt + ' ' + cmds.map(function (c) { return c.cmd; }).join(' ')).toLowerCase()) + '">' +
        '<div class="flag-name">' + esc(f) + '</div>' +
        '<div class="flag-meaning">' + esc(meta.meaning) + '</div>' +
        '<div class="flag-used">Used in</div><div class="cmd-chips">' +
        cmds.map(function (c) {
          var note = meta.variants && meta.variants[c.cmd];
          return '<span class="cmd-chip-wrap"><span class="cmd-chip" onclick="goToCmd(\'' + esc(c.cmd) + '\')">' +
            esc(c.cmd) + '</span>' + (note ? '<span class="chip-note">' + esc(note) + '</span>' : '') + '</span>';
        }).join('') + '</div>' + spec + '</div>';
    }).join('') + '</div>';

  /* concepts */
  document.querySelector('#tab-concepts .content').innerHTML =
    '<p class="tab-intro">The bigger ideas behind the commands. Click to expand.</p><div class="concept-grid">' +
    b.concepts.map(function (c) {
      return '<div class="concept-card" id="' + c.id + '" data-search="' +
        esc((c.term + ' ' + c.sub + ' ' + detailText(c.detail)).toLowerCase()) + '">' +
        '<div class="concept-header" onclick="toggleCard(this.closest(\'.concept-card\'))">' +
        '<div><div class="concept-term">' + esc(c.term) + '</div><div class="concept-sub">' + esc(c.sub) + '</div></div>' +
        '<span class="chevron">▾</span></div>' +
        '<div class="concept-detail">' + renderDetail(c.detail) + '</div></div>';
    }).join('') + '</div>';
}

/* ───────── databases page rendering ───────── */
function catCard(it) {
  return '<div class="cat-card" id="' + it.id + '" data-search="' +
    esc((it.term + ' ' + (it.dbtype||'') + ' ' + (it.tagline||'') + ' ' + detailText(it.detail)).toLowerCase()) + '">' +
    '<div class="cat-header" onclick="toggleCard(this.closest(\'.cat-card\'))">' +
    '<span class="cat-icon ' + esc(it.iconClass||'') + '">' + esc(it.icon||'?') + '</span>' +
    '<span class="cat-name">' + esc(it.term) + '</span>' +
    '<span class="cat-type">' + esc(it.dbtype||'') + '</span>' +
    '<span class="chevron">▾</span></div>' +
    (it.tagline ? '<div class="cat-examples">' + esc(it.tagline) + '</div>' : '') +
    '<div class="cat-detail">' + renderDetail(it.detail) + '</div></div>';
}
function renderDb() {
  var db = D.databases;
  function grouped(items, gridClass, renderer) {
    var secs = [], bySec = {};
    items.forEach(function (it) {
      var s = it.section || '';
      if (!bySec[s]) { bySec[s] = []; secs.push(s); }
      bySec[s].push(it);
    });
    return secs.map(function (s) {
      return '<div class="section">' + (s ? '<div class="section-title">' + esc(s) + '</div>' : '') +
        '<div class="' + gridClass + '">' + bySec[s].map(renderer).join('') + '</div></div>';
    }).join('');
  }
  document.querySelector('#tab-categories .content').innerHTML =
    '<p class="tab-intro">Databases come in several fundamentally different shapes. The right one depends on what your data looks like and how you need to use it. Click to expand.</p>' +
    grouped(db.categories, 'cat-grid', catCard);
  document.querySelector('#tab-concepts .content').innerHTML =
    '<p class="tab-intro">The vocabulary of databases. Click to expand.</p><div class="concept-grid">' +
    db.concepts.map(function (c) {
      return '<div class="concept-card" id="' + c.id + '" data-search="' +
        esc((c.term + ' ' + (c.sub||'') + ' ' + detailText(c.detail)).toLowerCase()) + '">' +
        '<div class="concept-header" onclick="toggleCard(this.closest(\'.concept-card\'))">' +
        '<div><div class="concept-term">' + esc(c.term) + '</div>' +
        (c.sub ? '<div class="concept-sub">' + esc(c.sub) + '</div>' : '') + '</div>' +
        '<span class="chevron">▾</span></div>' +
        '<div class="concept-detail">' + renderDetail(c.detail) + '</div></div>';
    }).join('') + '</div>';
  document.querySelector('#tab-applications .content').innerHTML =
    '<p class="tab-intro">Who actually uses what, and why. Click to expand.</p>' +
    grouped(db.applications, 'cat-grid', catCard);
  document.querySelector('#tab-queries .content').innerHTML =
    '<p class="tab-intro">SQL queries and database interactions -- to be built out as we learn.</p>' +
    '<div class="coming-soon"><span style="font-size:13px;">+</span><span>coming soon -- queries, joins, and more</span></div>';
}

/* ───────── learning-path page enhancements ───────── */
function enhanceLp() {
  /* fix: handler was on the whole row, so clicking inside the open detail collapsed it */
  document.querySelectorAll('.circle-row[onclick]').forEach(function (row) {
    row.removeAttribute('onclick');
    var head = row.querySelector('.circle-header');
    if (head) head.addEventListener('click', function () { row.classList.toggle('open'); });
  });
  /* give rows/cards stable ids so site-wide search can deep-link here */
  document.querySelectorAll('.circle-name, .phase-name').forEach(function (nameEl) {
    var holder = nameEl.closest('.circle-row, .phase-card');
    if (holder && !holder.id) holder.id = 'lp-' + slug(nameEl.textContent);
  });
}

/* ───────── search ───────── */
var INDEX = [];
function buildIndex() {
  if (!D) return;
  D.bash.commands.forEach(function (c) {
    INDEX.push({ id: c.id, page: 'bash', title: c.cmd, sub: c.desc,
      body: (c.cmd + ' ' + c.desc + ' ' + (c.synonyms||[]).join(' ') + ' ' + (c.flags||[]).join(' ') + ' ' + detailText(c.detail)).toLowerCase() });
  });
  D.bash.blocks.forEach(function (b) {
    INDEX.push({ id: b.id, page: 'bash', title: b.symbol, sub: b.name,
      body: (b.symbol + ' ' + b.name + ' ' + (b.synonyms||[]).join(' ') + ' ' + detailText(b.detail)).toLowerCase() });
  });
  Object.keys(D.bash.flagMeta).forEach(function (f) {
    var m = D.bash.flagMeta[f];
    var varTxt = m.variants ? Object.keys(m.variants).map(function (k) { return k + ' ' + m.variants[k]; }).join(' ') : '';
    INDEX.push({ id: 'flag-' + f, page: 'bash', title: f, sub: m.meaning,
      body: (f + ' ' + m.meaning + ' ' + varTxt).toLowerCase() });
  });
  D.bash.concepts.forEach(function (c) {
    INDEX.push({ id: c.id, page: 'bash', title: c.term, sub: c.sub,
      body: (c.term + ' ' + c.sub + ' ' + detailText(c.detail)).toLowerCase() });
  });
  ['categories', 'concepts', 'applications'].forEach(function (k) {
    D.databases[k].forEach(function (it) {
      INDEX.push({ id: it.id, page: 'db', title: it.term, sub: it.dbtype || it.sub || '',
        body: (it.term + ' ' + (it.dbtype||'') + ' ' + (it.sub||'') + ' ' + (it.tagline||'') + ' ' + detailText(it.detail)).toLowerCase() });
    });
  });
  D.learningPath.forEach(function (e) {
    INDEX.push({ id: e.id, page: 'lp', title: e.title, sub: 'learning path',
      body: (e.title + ' ' + (e.keywords||[]).join(' ')).toLowerCase() });
  });
}
function searchHits(q) {
  var words = q.split(/\s+/).filter(Boolean);
  return INDEX.filter(function (e) {
    return words.every(function (w) { return e.body.indexOf(w) !== -1; });
  });
}
function setupSearch() {
  var nav = document.querySelector('.tab-nav');
  if (!nav || PAGE === 'home') return;
  var row = el('<div class="search-row"><span class="search-label">Find:</span>' +
    '<input class="search-input" id="ll-search" type="search" placeholder="command, flag, or what it does…" autocomplete="off">' +
    '<span class="search-hint">press / to focus · esc to clear</span>' +
    '<span class="search-count" id="ll-count"></span>' +
    '<div class="search-results" id="ll-results"></div></div>');
  nav.parentNode.insertBefore(row, nav.nextSibling);
  var input = row.querySelector('#ll-search'),
      results = row.querySelector('#ll-results'),
      count = row.querySelector('#ll-count');

  function reset() {
    document.querySelectorAll('[data-search]').forEach(function (c) { c.classList.remove('hidden'); });
    document.querySelectorAll('.section').forEach(function (s) { s.classList.remove('hidden'); });
    results.classList.remove('show'); results.innerHTML = ''; count.textContent = '';
  }
  function run() {
    var q = input.value.trim().toLowerCase();
    if (!q) return reset();
    /* live-filter cards on this page */
    var local = 0;
    document.querySelectorAll('[data-search]').forEach(function (c) {
      var hit = q.split(/\s+/).every(function (w) { return c.getAttribute('data-search').indexOf(w) !== -1; });
      c.classList.toggle('hidden', !hit);
      if (hit) local++;
    });
    document.querySelectorAll('.section').forEach(function (s) {
      var any = s.querySelectorAll('[data-search]:not(.hidden)').length;
      if (s.querySelectorAll('[data-search]').length) s.classList.toggle('hidden', !any);
    });
    count.textContent = local + ' match' + (local === 1 ? '' : 'es') + ' here';
    /* dropdown: jumpable results on this page (other tabs) + other pages */
    var hits = searchHits(q), here = [], elsewhere = [];
    hits.forEach(function (e) { (e.page === PAGE ? here : elsewhere).push(e); });
    var html = '';
    function group(label, list, isLocal) {
      if (!list.length) return;
      html += '<div class="sr-group">' + label + '</div>' + list.slice(0, 8).map(function (e) {
        var href = isLocal ? '#' + e.id : PAGES[e.page].file + '#' + e.id;
        return '<a class="sr-hit" href="' + href + '"' + (isLocal ? ' data-local="' + e.id + '"' : '') + '>' +
          '<span class="sr-title">' + esc(e.title) + '</span><span class="sr-sub">' + esc(e.sub) + '</span></a>';
      }).join('');
    }
    group('On this page', here, true);
    var byPage = {};
    elsewhere.forEach(function (e) { (byPage[e.page] = byPage[e.page] || []).push(e); });
    Object.keys(byPage).forEach(function (p) { group(PAGES[p].label, byPage[p], false); });
    if (!hits.length) html = '<div class="sr-none">no matches anywhere — maybe we haven’t learned it yet</div>';
    results.innerHTML = html;
    results.classList.add('show');
    results.querySelectorAll('[data-local]').forEach(function (a) {
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        results.classList.remove('show');
        jumpTo(a.getAttribute('data-local'));
      });
    });
  }
  input.addEventListener('input', run);
  input.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') { input.value = ''; reset(); input.blur(); }
  });
  document.addEventListener('click', function (ev) {
    if (!row.contains(ev.target)) results.classList.remove('show');
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      ev.preventDefault(); input.focus(); input.select();
    }
  });
}

/* ───────── dialogs ───────── */
function dialog(title, bodyHtml, buttons) {
  var overlay = el('<div class="dlg-overlay"><div class="dlg">' +
    '<div class="dlg-title">' + esc(title) + '</div>' +
    '<div class="dlg-body">' + bodyHtml + '</div>' +
    '<div class="dlg-btns"></div></div></div>');
  (buttons || [{ label: 'OK' }]).forEach(function (b) {
    var btn = el('<button class="dlg-btn">' + esc(b.label) + '</button>');
    btn.addEventListener('click', function () {
      document.body.removeChild(overlay);
      if (b.then) b.then();
    });
    overlay.querySelector('.dlg-btns').appendChild(btn);
  });
  overlay.addEventListener('click', function (ev) {
    if (ev.target === overlay) document.body.removeChild(overlay);
  });
  document.body.appendChild(overlay);
}
function aboutDialog() {
  var stats = '';
  if (D) {
    var dbCount = D.databases.categories.length + D.databases.concepts.length + D.databases.applications.length;
    stats = '<div class="stat-row"><span>bash commands</span><b>' + D.bash.commands.length + '</b></div>' +
      '<div class="stat-row"><span>flags indexed</span><b>' + Object.keys(D.bash.flagMeta).length + '</b></div>' +
      '<div class="stat-row"><span>building blocks</span><b>' + D.bash.blocks.length + '</b></div>' +
      '<div class="stat-row"><span>concepts</span><b>' + D.bash.concepts.length + '</b></div>' +
      '<div class="stat-row"><span>database entries</span><b>' + dbCount + '</b></div>' +
      '<hr class="startup-divider" style="margin:10px 0;">';
  }
  dialog('About learning .log', stats +
    '<div style="text-align:center;">a personal knowledge base<br>built in the terminal<br>' +
    '<span style="color:#888;font-size:10px;">updated ' + esc(D ? D.updated : '') + ' · enid &amp; anazial</span></div>');
}

/* ───────── menubar ───────── */
function expandAll(open) {
  document.querySelectorAll('.card, .block-card, .concept-card, .cat-card, .circle-row, .phase-card, .question-card')
    .forEach(function (c) { c.classList.toggle('open', open); });
}
function buildMenubar() {
  var bar = document.querySelector('.menubar');
  if (!bar) return;
  var sub = PAGE !== 'home';
  function items(list) {
    return list.map(function (it) {
      if (it === '-') return '<hr class="menu-sep">';
      var cls = 'menu-it' + (it.off ? ' off' : '');
      var key = it.key ? '<span class="menu-key">' + it.key + '</span>' : '';
      if (it.href) return '<a class="' + cls + '" href="' + it.href + '">' + esc(it.label) + key + '</a>';
      return '<div class="' + cls + '" data-act="' + it.act + '">' + esc(it.label) + key + '</div>';
    }).join('');
  }
  var menus = [
    { title: '&#63743;', cls: 'apple', items: [
        { label: 'About learning .log…', act: 'about' }, '-',
        { label: 'learning .log', href: 'index.html' },
        { label: 'bash skills', href: PAGES.bash.file },
        { label: 'databases', href: PAGES.db.file },
        { label: 'database learning path', href: PAGES.lp.file } ] },
    { title: 'File', items: [
        { label: 'Open: bash skills', href: PAGES.bash.file },
        { label: 'Open: databases', href: PAGES.db.file },
        { label: 'Open: learning path', href: PAGES.lp.file }, '-',
        { label: 'Close Window', href: 'index.html' },
        { label: 'Shut Down…', act: 'shutdown' } ] },
    { title: 'Edit', items: [
        { label: 'Undo', off: true, key: '⌘Z' }, '-',
        { label: 'Cut', off: true, key: '⌘X' },
        { label: 'Copy', act: 'copy', key: '⌘C' },
        { label: 'Paste', off: true, key: '⌘V' }, '-',
        { label: 'Find…', act: 'find', key: '/' } ] },
    { title: 'View', items: [
        { label: 'Expand All', act: 'expand', off: !sub },
        { label: 'Collapse All', act: 'collapse', off: !sub } ] },
    { title: 'Special', items: [
        { label: 'Restart', act: 'restart' },
        { label: 'Empty Trash…', act: 'trash' }, '-',
        { label: 'About This Computer…', act: 'about' } ] }
  ];
  bar.innerHTML = menus.map(function (m) {
    return '<div class="menu"><span class="menu-title ' + (m.cls || '') + '">' + m.title + '</span>' +
      '<div class="menu-drop">' + items(m.items) + '</div></div>';
  }).join('') + '<span class="clock" id="clock">--:--</span>';

  var open = null;
  function close() { if (open) { open.classList.remove('open'); open = null; } }
  bar.querySelectorAll('.menu').forEach(function (m) {
    var t = m.querySelector('.menu-title');
    t.addEventListener('click', function (ev) {
      ev.stopPropagation();
      var was = (open === m);
      close();
      if (!was) { m.classList.add('open'); open = m; }
    });
    t.addEventListener('mouseenter', function () {       /* classic Mac: slide between open menus */
      if (open && open !== m) { close(); m.classList.add('open'); open = m; }
    });
  });
  document.addEventListener('click', close);
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') close(); });

  bar.addEventListener('click', function (ev) {
    var act = ev.target.closest('[data-act]');
    if (!act) return;
    close();
    switch (act.getAttribute('data-act')) {
      case 'about': aboutDialog(); break;
      case 'find': {
        var inp = document.getElementById('ll-search');
        if (inp) { inp.focus(); inp.select(); }
        else location.href = PAGES.bash.file + '#find';
        break;
      }
      case 'expand': expandAll(true); break;
      case 'collapse': expandAll(false); break;
      case 'restart': location.reload(); break;
      case 'trash': dialog('Empty Trash', 'The Trash contains 0 items.<br>Nothing was ever thrown away — every command is still here.'); break;
      case 'shutdown': dialog('Shut Down', 'It is now safe to return to the desktop.', [
          { label: 'Cancel' }, { label: 'Shut Down', then: function () { location.href = 'index.html'; } }]); break;
      case 'copy': {
        var sel = String(window.getSelection());
        if (sel && navigator.clipboard) navigator.clipboard.writeText(sel);
        break;
      }
    }
  });
}

/* ───────── clock ───────── */
function tick() {
  var c = document.getElementById('clock');
  if (!c) return;
  var now = new Date(), h = now.getHours(), m = now.getMinutes();
  var t = (h % 12 || 12) + ':' + String(m).padStart(2, '0') + ' ' + (h >= 12 ? 'PM' : 'AM');
  c.textContent = t;
  var f = document.getElementById('footer-time');
  if (f) f.textContent = t;
}

/* ───────── hash routing ───────── */
function route() {
  var id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  if (id === 'find') {
    var inp = document.getElementById('ll-search');
    if (inp) { inp.focus(); }
    return;
  }
  jumpTo(id);
}

/* ───────── boot ───────── */
document.addEventListener('DOMContentLoaded', function () {
  if (D && PAGE === 'bash') renderBash();
  if (D && PAGE === 'db') renderDb();
  if (PAGE === 'lp') enhanceLp();
  buildIndex();
  buildMenubar();
  setupSearch();
  tick(); setInterval(tick, 10000);
  route();
  window.addEventListener('hashchange', route);
});
})();
