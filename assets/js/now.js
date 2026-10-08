/* ==========================================================================
   Chapter 02 · Since the review
   Renders the team table, AI board viewer, work index + gallery, grouped
   landing pages and the chapter rail. Runs before main.js so the reveal
   observers pick up everything built here.
   ========================================================================== */
(function () {
  'use strict';

  var A = 'assets/now/';
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>';
  var PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>';
  var EXPAND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';

  function open(type, src, title) {
    if (window.openMedia) window.openMedia({ type: type, src: src, title: title });
  }
  function $(id) { return document.getElementById(id); }

  /* ---------- 1 · Team table ---------- */
  var STATUS = {
    'new': ['nw-st--new', 'New'],
    promoted: ['nw-st--ok', 'Promoted'],
    lead: ['nw-st--lead', 'Leading track'],
    ai: ['nw-st--up', 'Stronger in AI'],
    dev: ['nw-st--up', 'Developed'],
    left: ['nw-st--muted', 'Moved on']
  };
  var TEAM = [
    { n: 'Abdelrahman', i: 'A', role: 'Motion and Video Editor', st: 'new', board: 'abdelrahman',
      then: 'Not in the team yet.',
      now: 'Joined after the review. His work is excellent, and he picked up the AI workflow fast.' },
    { n: 'Asmaa', i: 'A', role: 'Intern → Junior Designer', st: 'promoted', board: 'asmaa',
      then: 'Graphic Design Intern, newly hired.',
      now: 'Finished her track at 100%. She stays with the team as a Junior Designer.' },
    { n: 'Mahmoud', i: 'M', role: 'Senior Designer', st: 'lead', board: 'mahmoud',
      then: 'Working on his own, with very little review.',
      now: 'On a real leading track. He carries several projects at the same time.' },
    { n: 'Shaimaa', i: 'S', role: 'Video and Motion', st: 'lead', board: 'shaimaa',
      then: 'Storyboarding added, but the change was slow and AI was not fully used.',
      now: 'On the same leading track as Mahmoud. Her motion work is very good, and she works from her own AI board.' },
    { n: 'Alice', i: 'A', role: 'Video, AI and Voice Over', st: 'ai', board: 'alice',
      then: 'Video editor with a wider role. New AI and storyboarding skills.',
      now: 'Much stronger with AI. Her AI video and AI voice over are at a much higher level.' },
    { n: 'Islam', i: 'I', role: 'Mid Level Designer', st: 'dev',
      then: 'Mid Level Designer, newly hired.',
      now: 'Same person, more range. He works in his own AI folder.' },
    { n: 'Yomna', i: 'Y', role: 'Junior Designer', st: 'dev', board: 'yomna',
      then: 'Junior Designer, newly hired.',
      now: 'Stronger now. She builds her own AI boards for her accounts.' },
    { n: 'Kholoud and Heba', i: 'KH', role: 'Designers', st: 'left',
      then: 'Designers in the team.',
      now: 'They have moved on, and we thank them for their work. Their accounts kept running, and the quality went up.' }
  ];

  var teamEl = $('nwTeam');
  if (teamEl) {
    teamEl.innerHTML =
      '<div class="nw-tr nw-tr--head" role="row"><span role="columnheader">Person</span><span role="columnheader">In the review · Aug</span><span role="columnheader">Now · Oct</span><span role="columnheader">Status</span><span role="columnheader">AI board</span></div>' +
      TEAM.map(function (p) {
        var s = STATUS[p.st];
        var boardCell = p.board
          ? '<button class="nw-mini" type="button" data-board="' + p.board + '">View board</button>'
          : (p.st === 'left' ? '' : '<span class="nw-muted">Own folder</span>');
        return '<div class="nw-tr' + (p.st === 'left' ? ' is-muted' : '') + '" role="row">' +
          '<span role="cell" class="nw-person"><i class="nw-av nw-av--' + p.st + '">' + p.i + '</i><span><b>' + p.n + '</b><small>' + p.role + '</small></span></span>' +
          '<span role="cell" data-l="In the review" class="nw-td-then">' + p.then + '</span>' +
          '<span role="cell" data-l="Now">' + p.now + '</span>' +
          '<span role="cell" class="nw-td-st"><em class="nw-st ' + s[0] + '">' + s[1] + '</em></span>' +
          '<span role="cell" class="nw-td-act">' + boardCell + '</span>' +
          '</div>';
      }).join('');
  }

  /* ---------- 2 · AI board viewer ---------- */
  var BOARDS = [
    { id: 'tarek', name: 'Tarek', role: 'Team Lead', note: 'My own board. I built the workflow here first, then taught it to each person.' },
    { id: 'mahmoud', name: 'Mahmoud', role: 'Senior Designer · leading track', note: 'His board for the accounts he leads.' },
    { id: 'shaimaa', name: 'Shaimaa', role: 'Video and Motion · leading track', note: 'Her board for motion and video work.' },
    { id: 'abdelrahman', name: 'Abdelrahman', role: 'Motion and Video Editor · new', note: 'Set up after he joined the team.' },
    { id: 'alice', name: 'Alice', role: 'Video, AI and Voice Over', note: 'AI video generations and AI voice over in one place.' },
    { id: 'yomna', name: 'Yomna', role: 'Junior Designer', note: 'Her board for the accounts she runs.' },
    { id: 'asmaa', name: 'Asmaa', role: 'Junior Designer · promoted', note: 'Her board from the track she finished at 100%.' }
  ];
  var tabsEl = $('nwBoardTabs'), imgEl = $('nwBoardImg'), sideEl = $('nwBoardSide');
  var current = 0;
  function showBoard(i) {
    current = i;
    var b = BOARDS[i];
    tabsEl.querySelectorAll('button').forEach(function (t, k) {
      t.classList.toggle('is-on', k === i); t.setAttribute('aria-selected', String(k === i));
    });
    imgEl.innerHTML = '<img src="' + A + 'workflow/' + b.id + '-crop.webp" alt="' + b.name + ' AI workflow board" width="1200" height="600">' +
      '<span class="nw-boardview__zoom">' + EXPAND + ' Full board</span>';
    sideEl.innerHTML = '<span class="nw-boardview__n">' + String(i + 1).padStart(2, '0') + ' / ' + String(BOARDS.length).padStart(2, '0') + '</span>' +
      '<b>' + b.name + '</b><span class="nw-boardview__r">' + b.role + '</span><p>' + b.note + '</p>' +
      '<div class="nw-boardview__nav"><button type="button" data-step="-1" aria-label="Previous board">&larr;</button><button type="button" data-step="1" aria-label="Next board">&rarr;</button></div>';
  }
  if (tabsEl && imgEl && sideEl) {
    tabsEl.innerHTML = BOARDS.map(function (b, i) {
      return '<button type="button" role="tab" data-i="' + i + '">' + b.name + (i === 0 ? ' <small>Lead</small>' : '') + '</button>';
    }).join('');
    tabsEl.addEventListener('click', function (e) {
      var t = e.target.closest('[data-i]'); if (t) showBoard(+t.getAttribute('data-i'));
    });
    sideEl.addEventListener('click', function (e) {
      var s = e.target.closest('[data-step]'); if (!s) return;
      showBoard((current + +s.getAttribute('data-step') + BOARDS.length) % BOARDS.length);
    });
    imgEl.addEventListener('click', function () {
      var b = BOARDS[current]; open('image', A + 'workflow/' + b.id + '.webp', b.name + ' · AI workflow board');
    });
    showBoard(0);
  }
  // "View board" in the team table opens that board in the viewer
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-board]'); if (!t) return;
    var idx = -1;
    BOARDS.forEach(function (b, k) { if (b.id === t.getAttribute('data-board')) idx = k; });
    if (idx < 0) return;
    showBoard(idx);
    document.querySelector('.nw-boardview').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  document.querySelectorAll('#n-ai [data-full]').forEach(function (el) {
    el.addEventListener('click', function () { open('image', el.getAttribute('data-full'), el.getAttribute('data-title')); });
  });

  /* ---------- 3 · The work ---------- */
  function img(id, title) { return { t: 'social', id: id, title: title }; }
  function vid(id, title, note) { return { t: 'video', id: id, title: title, note: note }; }
  function doc(id, title, pages) { return { t: 'print', id: id, title: title, pages: pages }; }

  var CLIENTS = [
    { key: 'nofodh', name: 'Nofodh Real Estate', sub: 'New account', items: [
      vid('bb2-v1', 'Baleine Bleu Maison 2 · film with AI voice over', 'AI voice over'),
      vid('bb2-v2', 'Baleine Bleu Maison 2 · film'),
      vid('nofodh-v1', 'Nofodh · brand film'),
      vid('mashrqia-v1', 'Almashriqiya Gate · film'),
      vid('almosa-v1', 'Almosa Residence 2 · film'),
      vid('almosa-v2', 'Almosa Residence 2 · film'),
      img('bbm-1', 'Baleine Bleu Maison · post'),
      img('bbm-2', 'Baleine Bleu Maison · post'),
      doc('bbm1', 'Baleine Bleu Maison · brochure', 10),
      doc('bbm2', 'Baleine Bleu Maison 2 · brochure', 10),
      doc('mashrqia', 'Almashriqiya Gate · profile', 10),
      doc('almosa', 'Almosa Residence 2 · brochure', 10),
      doc('woroud', 'Woroud Almosa · scheme brochure', 8)
    ] },
    { key: 'shield', name: 'Arabian Shield Cooperative Insurance', sub: 'Social', items: [
      img('shield-1', 'Arabian Shield · Father’s Day'),
      img('shield-2', 'Arabian Shield · breast cancer awareness')
    ] },
    { key: 'hub', name: 'Jeddah Initiative Hub', sub: 'Video and social', items: [
      vid('hub-v1', 'Jeddah Initiative Hub · video'), vid('hub-v2', 'Jeddah Initiative Hub · video'),
      vid('hub-v3', 'Jeddah Initiative Hub · video'), vid('hub-v4', 'Jeddah Initiative Hub · video'),
      vid('hub-v5', 'Jeddah Initiative Hub · video'), vid('hub-v6', 'Jeddah Initiative Hub · video'),
      img('hub-1', 'Jeddah Initiative Hub · post'), img('hub-2', 'Jeddah Initiative Hub · post'), img('hub-3', 'Jeddah Initiative Hub · post')
    ] },
    { key: 'nahl', name: 'Beit Al Nahl', sub: 'Video, logo motion and social', items: [
      vid('nahl-v1', 'Beit Al Nahl · video'), vid('nahl-v2', 'Beit Al Nahl · storytelling video'),
      vid('nahl-v3', 'Beit Al Nahl · logo animation', 'Logo motion'),
      img('nahl-1', 'Beit Al Nahl · post'), img('nahl-2', 'Beit Al Nahl · post'),
      img('nahl-3', 'Beit Al Nahl · post'), img('nahl-4', 'Beit Al Nahl · ad')
    ] },
    { key: 'boxaway', name: 'Boxaway', sub: 'Social', items: [
      img('boxaway-1', 'Boxaway · post'), img('boxaway-2', 'Boxaway · post'),
      img('boxaway-3', 'Boxaway · post'), img('boxaway-4', 'Boxaway · post')
    ] },
    { key: 'hrlink', name: 'HR Link', sub: 'Social', items: [
      img('hrlink-1', 'HR Link · post'), img('hrlink-2', 'HR Link · post'), img('hrlink-3', 'HR Link · post')
    ] },
    { key: 'hrpath', name: 'HR Path', sub: 'Social', items: [
      img('hrpath-1', 'HR Path · post'), img('hrpath-2', 'HR Path · post')
    ] }
  ];
  var TYPES = [['video', 'Video', 'videos'], ['social', 'Social', 'posts'], ['print', 'Print', 'brochures']];
  function countOf(c, t) { return c.items.filter(function (i) { return i.t === t; }).length; }

  function tile(it) {
    if (it.t === 'video') {
      return '<button class="nw-tile nw-tile--video" data-t="video" data-src="' + A + 'gallery/' + it.id + '.mp4" data-title="' + it.title + '">' +
        '<img src="' + A + 'gallery/' + it.id + '.jpg" alt="' + it.title + '" loading="lazy">' +
        '<span class="nw-tile__play">' + PLAY + '</span>' +
        (it.note ? '<span class="nw-tile__tag">' + it.note + '</span>' : '') + '</button>';
    }
    return '<button class="nw-tile" data-t="social" data-src="' + A + 'gallery/' + it.id + '.webp" data-title="' + it.title + '">' +
      '<img src="' + A + 'gallery/' + it.id + '.webp" alt="' + it.title + '" width="1000" height="1250" loading="lazy"></button>';
  }
  function brochure(it) {
    var pages = '';
    for (var i = 1; i <= it.pages; i++) {
      var src = A + 'print/' + it.id + '-' + i + '.webp?v=2';
      pages += '<button class="nw-page" data-t="print" data-src="' + src + '" data-title="' + it.title + ' · page ' + i + '">' +
        '<img src="' + src + '" alt="' + it.title + ' page ' + i + '" width="1121" height="793" loading="lazy"><i>' + String(i).padStart(2, '0') + '</i></button>';
    }
    return '<div class="nw-doc"><div class="nw-doc__hd"><b>' + it.title + '</b><span>' + it.pages + ' pages · scroll sideways</span></div>' +
      '<div class="nw-doc__row">' + pages + '</div></div>';
  }

  var workEl = $('nwWork'), indexEl = $('nwIndex');
  if (workEl && indexEl) {
    // Client index: names and the kinds of work only (no counts; this is a selection)
    indexEl.innerHTML = CLIENTS.map(function (c) {
      var kinds = TYPES.filter(function (t) { return countOf(c, t[0]); })
        .map(function (t) { return '<em class="nw-kind nw-kind--' + t[0] + '">' + t[1] + '</em>'; }).join('');
      return '<a class="nw-cidx" href="#w-' + c.key + '" data-jump="' + c.key + '"><b>' + c.name + '</b><span>' + kinds + '</span><i aria-hidden="true">&rarr;</i></a>';
    }).join('');

    workEl.innerHTML = CLIENTS.map(function (c) {
      var meta = TYPES.filter(function (t) { return countOf(c, t[0]); }).map(function (t) { return t[1]; }).join(' · ');
      var groups = TYPES.map(function (t) {
        var items = c.items.filter(function (i) { return i.t === t[0]; });
        if (!items.length) return '';
        return '<div class="nw-group" data-t="' + t[0] + '"><span class="nw-group__t">' + t[1] + '</span>' +
          (t[0] === 'print' ? items.map(brochure).join('') : '<div class="nw-grid">' + items.map(tile).join('') + '</div>') + '</div>';
      }).join('');
      return '<article class="nw-client" id="w-' + c.key + '" data-client="' + c.key + '" data-reveal>' +
        '<div class="nw-client__hd"><h3>' + c.name + '</h3><span>' + c.sub + '</span><em>' + meta + '</em></div>' + groups + '</article>';
    }).join('');

    workEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-src]'); if (!b) return;
      open(b.getAttribute('data-t') === 'video' ? 'video' : 'image', b.getAttribute('data-src'), b.getAttribute('data-title'));
    });

    var btns = document.querySelectorAll('.nw-filter button');
    var applyFilter = function (f) {
      btns.forEach(function (b) { var on = b.getAttribute('data-f') === f; b.classList.toggle('is-on', on); b.setAttribute('aria-selected', String(on)); });
      workEl.querySelectorAll('.nw-client').forEach(function (c) {
        var any = false;
        c.querySelectorAll('.nw-group').forEach(function (g) { var show = f === 'all' || g.getAttribute('data-t') === f; g.hidden = !show; if (show) any = true; });
        c.hidden = !any;
      });
    };
    btns.forEach(function (b) { b.addEventListener('click', function () { applyFilter(b.getAttribute('data-f')); }); });

    var jumpTo = function (key) {
      var el = $('w-' + key); if (!el) return;
      applyFilter('all');
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.querySelectorAll('[data-filter-jump]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); jumpTo(a.getAttribute('data-filter-jump')); });
    });
    indexEl.addEventListener('click', function (e) {
      var a = e.target.closest('[data-jump]'); if (!a) return; e.preventDefault(); jumpTo(a.getAttribute('data-jump'));
    });
  }

  /* ---------- 4 · Landing pages, grouped by client ---------- */
  var SITE_GROUPS = [
    { name: 'Nofodh Real Estate', sub: 'New account', sites: [
      { s: 'mashrqia-lp', n: 'Almashriqiya Gate', p: 'Land scheme · East Riyadh', fresh: true },
      { s: 'baleine-bleu-2', n: 'Baleine Bleu 2', p: 'Office tower · Al Sahafah, Riyadh', fresh: true },
      { s: 'almosa-residence-2', n: 'Almosa Residence 2', p: 'Apartments · Tuwaiq, Riyadh', fresh: true },
      { s: 'woroud-almosa', n: 'Woroud Almosa', p: 'Land scheme · Jazan', fresh: true },
      { s: 'baleine-bleu-maison', n: 'Baleine Bleu Maison', p: 'Commercial tower · Riyadh' }
    ] },
    { name: 'Other real estate clients', sub: 'Six projects', sites: [
      { s: 'abhur-shamaliya', n: 'Abhur Al Shamaliya', p: 'Residential · Jeddah', fresh: true },
      { s: 'jadeite-v2', n: 'Jadeite v2', p: 'Office villas · Al Khobar', fresh: true },
      { s: 'jadeite-office-villas', n: 'Jadeite', p: 'Office villas · Al Khobar' },
      { s: 'amam-real-estate', n: 'AMAM', p: 'Real estate · Jeddah' },
      { s: 'miraf-district', n: 'Miraf District', p: 'Real estate · Al Khobar' },
      { s: 'tilal-village', n: 'Tilal Village', p: 'Community · Makkah' }
    ] },
    { name: 'Internal tool', sub: 'For the team', sites: [
      { s: 'photography-direction', n: 'Photography Direction', p: 'Production brief · real estate photography', fresh: true }
    ] }
  ];
  var sitesEl = $('nwSites');
  if (sitesEl) {
    sitesEl.innerHTML = SITE_GROUPS.map(function (g) {
      return '<div class="nw-sgroup"><div class="nw-client__hd" data-reveal><h3>' + g.name + '</h3><span>' + g.sub + '</span><em>' + g.sites.length + (g.sites.length > 1 ? ' pages' : ' page') + '</em></div>' +
        '<div class="nw-sites" data-reveal-stagger>' + g.sites.map(function (x) {
          var url = 'https://mohamed-sr-designer.github.io/' + x.s + '/';
          return '<article class="nw-site">' +
            '<a class="nw-mock" href="' + url + '" target="_blank" rel="noopener" aria-label="Open ' + x.n + ' live site">' +
              '<span class="nw-laptop"><span class="nw-laptop__scr"><img src="' + A + 'sites/' + x.s + '-d.webp" alt="' + x.n + ' on desktop" width="1280" height="800" loading="lazy"></span></span>' +
              '<span class="nw-laptop__base"></span>' +
              '<span class="nw-phone"><span class="nw-phone__scr"><img src="' + A + 'sites/' + x.s + '-m.webp" alt="' + x.n + ' on mobile" width="560" height="1212" loading="lazy"></span></span>' +
            '</a>' +
            '<div class="nw-site__bd"><div><h4>' + x.n + (x.fresh ? ' <em class="nw-st nw-st--new">New</em>' : '') + '</h4><span>' + x.p + '</span></div>' +
            '<a class="nw-link" href="' + url + '" target="_blank" rel="noopener">Open live ' + ARROW + '</a></div></article>';
        }).join('') + '</div></div>';
    }).join('');
  }

  /* ---------- 5 · Chapter rail: highlight the section in view ---------- */
  var rail = document.querySelector('.nw-rail ol');
  var railLinks = Array.prototype.slice.call(document.querySelectorAll('.nw-rail a'));
  var blocks = railLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  var activeId = null, ticking = false;
  function updateRail() {
    ticking = false;
    var line = window.innerHeight * 0.35, id = null;
    blocks.forEach(function (b) { if (b.getBoundingClientRect().top <= line) id = b.id; });
    if (id === activeId) return;
    activeId = id;
    railLinks.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-on', on);
      // On the mobile chip bar, keep the active chip in view (horizontal only)
      if (on && rail && rail.scrollWidth > rail.clientWidth) {
        rail.scrollTo({ left: a.parentNode.offsetLeft - 16, behavior: 'smooth' });
      }
    });
  }
  if (blocks.length) {
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(updateRail); }
    }, { passive: true });
    updateRail();
  }
})();
