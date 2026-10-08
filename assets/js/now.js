/* ==========================================================================
   Chapter 02 · Since the review
   Renders the AI boards, the work gallery and the landing page mockups.
   Runs before main.js so the reveal observers pick up everything built here.
   ========================================================================== */
(function () {
  'use strict';

  var A = 'assets/now/';
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>';
  var PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>';

  function open(type, src, title) {
    if (window.openMedia) window.openMedia({ type: type, src: src, title: title });
  }

  /* ---------- 1 · AI workflow boards ---------- */
  var BOARDS = [
    { id: 'tarek', name: 'Tarek', role: 'Team Lead · built the workflow and taught it to everyone', lead: true },
    { id: 'mahmoud', name: 'Mahmoud', role: 'Designer · leading track' },
    { id: 'shaimaa', name: 'Shaimaa', role: 'Designer and Motion · leading track' },
    { id: 'abdelrahman', name: 'Abdelrahman', role: 'Motion and Video Editor · new' },
    { id: 'alice', name: 'Alice', role: 'AI video and AI voice over' },
    { id: 'yomna', name: 'Yomna', role: 'Junior Designer' },
    { id: 'asmaa', name: 'Asmaa', role: 'Junior Designer' }
  ];

  var boardsEl = document.getElementById('nwBoards');
  if (boardsEl) {
    boardsEl.innerHTML = BOARDS.map(function (b) {
      return '<figure class="nw-board' + (b.lead ? ' nw-board--lead' : '') + '" data-full="' + A + 'workflow/' + b.id + '.webp" data-title="' + b.name + ' · AI workflow board">' +
        '<figcaption><b>' + b.name + '</b><span>' + b.role + '</span></figcaption>' +
        '<div class="nw-board__img"><img src="' + A + 'workflow/' + b.id + '-crop.webp" alt="' + b.name + ' AI workflow board" width="1200" height="600" loading="lazy"></div>' +
        '</figure>';
    }).join('');
  }

  // Every screenshot in the AI section opens full size
  document.querySelectorAll('#n-ai [data-full]').forEach(function (el) {
    el.addEventListener('click', function () { open('image', el.getAttribute('data-full'), el.getAttribute('data-title')); });
  });

  /* ---------- 2 · The work gallery ---------- */
  // type: video | social | print.  Print items are brochures shown as page strips.
  function img(id, title) { return { t: 'social', id: id, title: title }; }
  function vid(id, title, note) { return { t: 'video', id: id, title: title, note: note }; }
  function doc(id, title, pages) { return { t: 'print', id: id, title: title, pages: pages }; }

  var CLIENTS = [
    { key: 'nofodh', name: 'Nofodh Real Estate', sub: 'New account · five projects', items: [
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
    { key: 'shield', name: 'Arabian Shield Cooperative Insurance', sub: 'New account', items: [
      img('shield-1', 'Arabian Shield · Father’s Day'),
      img('shield-2', 'Arabian Shield · breast cancer awareness')
    ] },
    { key: 'hub', name: 'Jeddah Initiative Hub', sub: 'Social and video', items: [
      vid('hub-v1', 'Jeddah Initiative Hub · video'),
      vid('hub-v2', 'Jeddah Initiative Hub · video'),
      vid('hub-v3', 'Jeddah Initiative Hub · video'),
      vid('hub-v4', 'Jeddah Initiative Hub · video'),
      vid('hub-v5', 'Jeddah Initiative Hub · video'),
      vid('hub-v6', 'Jeddah Initiative Hub · video'),
      img('hub-1', 'Jeddah Initiative Hub · post'),
      img('hub-2', 'Jeddah Initiative Hub · post'),
      img('hub-3', 'Jeddah Initiative Hub · post')
    ] },
    { key: 'nahl', name: 'Beit Al Nahl', sub: 'Social, video and logo motion', items: [
      vid('nahl-v1', 'Beit Al Nahl · video'),
      vid('nahl-v2', 'Beit Al Nahl · storytelling video'),
      vid('nahl-v3', 'Beit Al Nahl · logo animation', 'Logo motion'),
      img('nahl-1', 'Beit Al Nahl · post'),
      img('nahl-2', 'Beit Al Nahl · post'),
      img('nahl-3', 'Beit Al Nahl · post'),
      img('nahl-4', 'Beit Al Nahl · ad')
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

  var workEl = document.getElementById('nwWork');

  function tile(it) {
    if (it.t === 'video') {
      return '<button class="nw-tile nw-tile--video" data-t="video" data-src="' + A + 'gallery/' + it.id + '.mp4" data-title="' + it.title + '">' +
        '<img src="' + A + 'gallery/' + it.id + '.jpg" alt="' + it.title + '" loading="lazy">' +
        '<span class="nw-tile__play">' + PLAY + '</span>' +
        (it.note ? '<span class="nw-tile__tag">' + it.note + '</span>' : '') +
        '</button>';
    }
    return '<button class="nw-tile" data-t="social" data-src="' + A + 'gallery/' + it.id + '.webp" data-title="' + it.title + '">' +
      '<img src="' + A + 'gallery/' + it.id + '.webp" alt="' + it.title + '" width="1000" height="1250" loading="lazy"></button>';
  }

  function brochure(it) {
    var pages = '';
    for (var i = 1; i <= it.pages; i++) {
      var src = A + 'print/' + it.id + '-' + i + '.webp';
      pages += '<button class="nw-page" data-t="print" data-src="' + src + '" data-title="' + it.title + ' · page ' + i + '">' +
        '<img src="' + src + '" alt="' + it.title + ' page ' + i + '" width="1121" height="793" loading="lazy"><i>' + String(i).padStart(2, '0') + '</i></button>';
    }
    return '<div class="nw-doc" data-t="print"><div class="nw-doc__hd"><b>' + it.title + '</b><span>' + it.pages + ' pages · scroll</span></div>' +
      '<div class="nw-doc__row">' + pages + '</div></div>';
  }

  if (workEl) {
    workEl.innerHTML = CLIENTS.map(function (c) {
      var tiles = c.items.filter(function (i) { return i.t !== 'print'; });
      var docs = c.items.filter(function (i) { return i.t === 'print'; });
      var counts = { video: 0, social: 0, print: 0 };
      c.items.forEach(function (i) { counts[i.t]++; });
      var meta = ['video', 'social', 'print'].filter(function (k) { return counts[k]; })
        .map(function (k) { return counts[k] + ' ' + (k === 'print' ? (counts[k] > 1 ? 'brochures' : 'brochure') : k === 'video' ? (counts[k] > 1 ? 'videos' : 'video') : (counts[k] > 1 ? 'posts' : 'post')); })
        .join(' · ');
      return '<div class="nw-client" data-client="' + c.key + '" data-reveal>' +
        '<div class="nw-client__hd"><h3>' + c.name + '</h3><span>' + c.sub + '</span><em>' + meta + '</em></div>' +
        (tiles.length ? '<div class="nw-grid">' + tiles.map(tile).join('') + '</div>' : '') +
        docs.map(brochure).join('') +
        '</div>';
    }).join('');

    workEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-src]');
      if (!b) return;
      open(b.getAttribute('data-t') === 'video' ? 'video' : 'image', b.getAttribute('data-src'), b.getAttribute('data-title'));
    });

    // Counts on the filter buttons
    var all = CLIENTS.reduce(function (a, c) { return a.concat(c.items); }, []);
    function count(t) { return all.filter(function (i) { return !t || i.t === t; }).length; }
    [['nwCountAll', null], ['nwCountVideo', 'video'], ['nwCountSocial', 'social'], ['nwCountPrint', 'print']].forEach(function (p) {
      var el = document.getElementById(p[0]); if (el) el.textContent = count(p[1]);
    });

    // Filter
    var btns = document.querySelectorAll('.nw-filter button');
    function applyFilter(f) {
      btns.forEach(function (b) {
        var on = b.getAttribute('data-f') === f;
        b.classList.toggle('is-on', on); b.setAttribute('aria-selected', String(on));
      });
      workEl.querySelectorAll('.nw-client').forEach(function (c) {
        var any = false;
        c.querySelectorAll('.nw-tile, .nw-doc').forEach(function (t) {
          var show = f === 'all' || t.getAttribute('data-t') === f;
          t.hidden = !show; if (show) any = true;
        });
        var grid = c.querySelector('.nw-grid');
        if (grid) grid.hidden = !grid.querySelector('.nw-tile:not([hidden])');
        c.hidden = !any;
      });
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { applyFilter(b.getAttribute('data-f')); }); });

    // "See the work" links in the accounts section: show all, then land on that client
    document.querySelectorAll('[data-filter-jump]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var el = workEl.querySelector('[data-client="' + a.getAttribute('data-filter-jump') + '"]');
        if (!el) return;
        e.preventDefault();
        applyFilter('all');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- 3 · Landing page mockups ---------- */
  var SITES = [
    { s: 'mashrqia-lp', n: 'Almashriqiya Gate', p: 'Land scheme · East Riyadh', fresh: true },
    { s: 'baleine-bleu-2', n: 'Baleine Bleu 2', p: 'Office tower · Al Sahafah, Riyadh', fresh: true },
    { s: 'abhur-shamaliya', n: 'Abhur Al Shamaliya', p: 'Residential · Jeddah', fresh: true },
    { s: 'almosa-residence-2', n: 'Almosa Residence 2', p: 'Apartments · Tuwaiq, Riyadh', fresh: true },
    { s: 'woroud-almosa', n: 'Woroud Almosa', p: 'Land scheme · Jazan', fresh: true },
    { s: 'photography-direction', n: 'Photography Direction', p: 'Production brief · real estate', fresh: true },
    { s: 'jadeite-v2', n: 'Jadeite v2', p: 'Office villas · Al Khobar', fresh: true },
    { s: 'amam-real-estate', n: 'AMAM', p: 'Real estate · Jeddah' },
    { s: 'miraf-district', n: 'Miraf District', p: 'Real estate · Al Khobar' },
    { s: 'baleine-bleu-maison', n: 'Baleine Bleu Maison', p: 'Commercial tower · Riyadh' },
    { s: 'jadeite-office-villas', n: 'Jadeite', p: 'Office villas · Al Khobar' },
    { s: 'tilal-village', n: 'Tilal Village', p: 'Community · Makkah' }
  ];

  var sitesEl = document.getElementById('nwSites');
  if (sitesEl) {
    sitesEl.innerHTML = SITES.map(function (x) {
      var url = 'https://mohamed-sr-designer.github.io/' + x.s + '/';
      return '<article class="nw-site">' +
        '<a class="nw-mock" href="' + url + '" target="_blank" rel="noopener" aria-label="Open ' + x.n + ' live site">' +
          '<span class="nw-laptop"><span class="nw-laptop__scr"><img src="' + A + 'sites/' + x.s + '-d.webp" alt="' + x.n + ' on desktop" width="1280" height="800" loading="lazy"></span></span>' +
          '<span class="nw-laptop__base"></span>' +
          '<span class="nw-phone"><span class="nw-phone__scr"><img src="' + A + 'sites/' + x.s + '-m.webp" alt="' + x.n + ' on mobile" width="560" height="1212" loading="lazy"></span></span>' +
        '</a>' +
        '<div class="nw-site__bd"><div><h4>' + x.n + (x.fresh ? ' <span class="nw-badge nw-badge--new">New</span>' : '') + '</h4><span>' + x.p + '</span></div>' +
        '<a class="nw-link" href="' + url + '" target="_blank" rel="noopener">Open live ' + ARROW + '</a></div>' +
        '</article>';
    }).join('');
  }
})();
