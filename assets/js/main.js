/* ==========================================================================
   Art Team Lead — 90 Days of Measurable Impact
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal styles only apply once scripting is confirmed alive.
  document.documentElement.classList.add('js');

  /* ======================================================================
     DATA · Before / After account evidence
     Source folder: New folder (6)/Accounts Dev  →  assets/work/<slug>/
     `pairs` must match the number of before-N / after-N files on disk.
     ====================================================================== */
  var ACCOUNTS = [
    {
      slug: 'alrajhi-rabia',
      name: 'Al Rabia Masterplan',
      sector: 'Real Estate · KSA',
      badge: 'Al Rajhi United',
      pairs: 6,
      changed: 'Replaced generic rendered imagery and a crowded logo lock-up with real aerial site photography, a CGI plot overlay, and a single governed headline hierarchy carrying one clear benefit strip.',
      mattered: 'A land buyer is assessing whether the development is real and progressing. Stock-style renders signal a concept; verified site imagery signals construction underway.',
      impact: 'Moves the account from awareness content to sales-enabling content — the same post now carries proof of delivery, plot inventory and location value in a single frame.'
    },
    {
      slug: 'alrajhi-alrawda',
      name: 'Al Rawda',
      sector: 'Real Estate · KSA',
      badge: 'Al Rajhi United',
      pairs: 3,
      changed: 'Shifted from decorative exterior imagery to art-directed interior scenes with lived-in staging, a disciplined Arabic type hierarchy, and specification detail (unit area, family zoning) placed as the headline.',
      mattered: 'Residential buyers convert on specifics, not atmosphere. Leading with the square-metre figure and family use-case answers the qualifying question before the enquiry.',
      impact: 'Higher-intent enquiries. The creative now filters for serious buyers instead of generating traffic that account managers have to qualify manually.'
    },
    {
      slug: 'alrajhi-rabiet-elghad',
      name: 'Rabiet Al Ghad',
      sector: 'Real Estate · KSA',
      badge: 'Al Rajhi United',
      pairs: 3,
      changed: 'Built a distinct sub-brand identity — its own wordmark treatment, colour discipline and premium environmental photography — so the project reads as an extension of a proven track record rather than a separate, unrelated launch.',
      mattered: 'A new masterplan carries launch risk. Visually anchoring it to the developer\'s existing credibility transfers trust from a delivered project to an announced one.',
      impact: 'Reduces the marketing cost of launching each new phase: the visual system is inherited, not rebuilt, and buyer confidence is borrowed from the previous development.'
    },
    {
      slug: 'abaq',
      name: 'Abaq Al Ilm International School',
      sector: 'Education · KSA',
      badge: 'Admissions',
      pairs: 3,
      changed: 'Retired unedited event photography and default typography in favour of an owned brand system — fixed palette, dual-script headline hierarchy, art-directed classroom imagery and a standing call to action.',
      mattered: 'Admissions is a trust purchase made by parents comparing institutions. The school\'s own communications are the first evidence of the standards it claims to hold.',
      impact: 'Positions the school in the premium international tier during the admissions decision window, and gives the account a reusable template set instead of per-post design decisions.'
    },
    {
      slug: 'riad-elabdaa',
      name: 'Riyadh Al Ebdaa Schools',
      sector: 'Education · KSA',
      badge: 'Brand System',
      pairs: 3,
      changed: 'Introduced a consistent brand container — locked logo placement, a warm ownable palette, controlled Arabic type hierarchy and a highlight device for the key message — replacing layouts that changed with every post.',
      mattered: 'Recognition compounds. When every post looks like a different school, each one has to earn attention from zero.',
      impact: 'Cumulative brand recall across the admissions cycle, and a template system that lets a junior designer produce senior-standard output.'
    },
    {
      slug: 'dora',
      name: 'Dora',
      sector: 'Education · Admissions',
      badge: 'Campaign System',
      pairs: 3,
      changed: 'Rebuilt admissions communication as a campaign system: one owned colour field, a single conceptual device carried across the flight, prominent accreditation marks, and message hierarchy that reads in under two seconds.',
      mattered: 'Admissions campaigns run against a deadline. Accreditation and urgency are the two decision triggers, and both were previously buried.',
      impact: 'Sharper conversion at the top of the admissions funnel, and a campaign structure that can be re-run each intake with content changes only.'
    },
    {
      slug: 'gf',
      name: 'Guilt Free',
      sector: 'F&B · Dessert Retail',
      badge: 'Product Craft',
      pairs: 6,
      changed: 'Replaced flat product cut-outs on empty backgrounds with directed product photography — single-hero composition, controlled lighting, ingredient staging and a bilingual product lock-up.',
      mattered: 'In food retail the image is the product experience. Appetite appeal is the conversion mechanism, and cut-outs on white remove it.',
      impact: 'Product posts now function as sales assets rather than announcements — directly supporting delivery-platform ordering, where the photograph is the entire proposition.'
    },
    {
      slug: 'boxaway',
      name: 'Boxaway',
      sector: 'Gourmet Gifting · KSA',
      badge: 'Luxury Positioning',
      pairs: 3,
      changed: 'Moved to editorial-standard still life — fabric and tonal staging, controlled depth, restrained mark placement and a single ordering route — pricing the brand visually before a price is ever shown.',
      mattered: 'Gifting is a status purchase. The perceived value of the product is set by the perceived value of the photograph.',
      impact: 'Supports premium pricing and gift-occasion positioning, protecting margin instead of competing on discount.'
    },
    {
      slug: 'umi',
      name: 'United Mining Industries',
      sector: 'Industrial Manufacturing',
      badge: 'B2B Technical',
      pairs: 3,
      changed: 'Shifted from product-bag shots on dark backgrounds to application-context imagery — the product shown in the environment it specifies into — with a structured benefit stack replacing paragraph copy.',
      mattered: 'Industrial buyers specify on performance criteria. Showing the finished environment answers "where does this apply", which a packaging shot cannot.',
      impact: 'Makes technical content usable by the sales team: each post now doubles as a specification aid for contractors and consultants.'
    },
    {
      slug: 'bassem-ragab',
      name: 'Basim Rajab Commercial Group',
      sector: 'B2B Distribution · KSA',
      badge: 'Authority',
      pairs: 4,
      changed: 'Built a portfolio-authority frame — full product range staged in one controlled composition, principal brand marks presented as a credential row, and a headline that states market position rather than describing products.',
      mattered: 'A distributor sells representation, not products. The commercial argument is the breadth of the portfolio and the trust of the principals.',
      impact: 'Converts social content into a distribution-credentials asset the commercial team can use in front of new principals and institutional buyers.'
    },
    {
      slug: 'ihs',
      name: 'IHS',
      sector: 'Development & Hospitality',
      badge: 'Track Record',
      pairs: 3,
      changed: 'Reframed output around completed-project evidence — architectural photography at controlled light, a clean project title lock-up and a positioning line, replacing generic corporate visuals.',
      mattered: 'In development and contracting, the delivered building is the credential. Showing it is more persuasive than any capability claim.',
      impact: 'Builds a visible track record that supports tender and partnership conversations, where proof of completion is the qualifying criterion.'
    },
    {
      slug: 'the-hub',
      name: 'Jeddah Initiative Hub',
      sector: 'Entrepreneurship · Workspace',
      badge: 'Experience Led',
      pairs: 3,
      changed: 'Led with real interior photography of the space at atmosphere lighting, a consistent gold-on-dark identity frame and benefit-led Arabic headlines, in place of generic layouts.',
      mattered: 'A workspace is sold on how it feels to work in. Prospective members are buying an environment they have not yet visited.',
      impact: 'Drives qualified space enquiries and supports occupancy — the single metric that determines the account\'s commercial performance.'
    }
  ];

  var PAGE_SIZE = 3; // one 3 × 2 matrix per page

  /* ======================================================================
     DATA · People development
     Bands: 1 Emerging · 2 Developing · 3 Competent · 4 Strong · 5 Independent
     ====================================================================== */
  var BANDS = ['Emerging', 'Developing', 'Competent', 'Strong', 'Independent'];

  var PEOPLE = [
    {
      initials: 'M', name: 'Mahmoud', role: 'Graphic Design',
      delta: 'Now operates independently',
      copy: [
        'The strongest development track in the unit. Mahmoud\'s design thinking changed fundamentally — he now begins from the client\'s objective and argues layout decisions from it, rather than starting from execution.',
        'His AI workflow moved from no production use to a confident, deliberate part of how he works. He knows where generative output belongs in a piece and where it does not.'
      ],
      why: '<b>Operational value:</b> he understands the creative standard well enough to carry work forward with minimal supervision. That releases senior review time and removes a single-point dependency on me for day-to-day quality.',
      skills: [
        { label: 'Design thinking', from: 2, to: 5 },
        { label: 'AI production workflow', from: 1, to: 5 },
        { label: 'Independent execution', from: 2, to: 5 },
        { label: 'Holds the standard unsupervised', from: 2, to: 5 }
      ]
    },
    {
      initials: 'K', name: 'Kholoud', role: 'Graphic Design',
      delta: 'Significant growth',
      copy: [
        'Significant, broad-based growth across four areas: AI production, retouching and technical finish, overall creative quality, and problem solving on ambiguous briefs.',
        'The technical finish improvement is the most commercially relevant — work that previously needed a senior pass now clears review at first submission more often.'
      ],
      why: '<b>Operational value:</b> a second designer capable of high-finish output reduces the queue at the senior review gate and gives the unit real redundancy on demanding accounts.',
      skills: [
        { label: 'AI production', from: 1, to: 4 },
        { label: 'Retouching &amp; technical finish', from: 2, to: 4 },
        { label: 'Creative quality', from: 2, to: 4 },
        { label: 'Problem solving', from: 2, to: 4 }
      ]
    },
    {
      initials: 'H', name: 'Heba', role: 'Graphic Design',
      delta: 'New discipline acquired',
      copy: [
        'Heba learned a discipline the unit previously lacked: typography as a system rather than a styling choice. She now builds campaigns as connected sets, with one type hierarchy carried across every asset in a flight.',
        'That extended naturally into brand thinking — she designs to the brand\'s rules rather than to the individual post.'
      ],
      why: '<b>Operational value:</b> connected campaign design is what makes multi-asset flights consistent without senior supervision on every item. It is the capability that lets throughput rise without quality falling.',
      skills: [
        { label: 'Typography', from: 1, to: 4 },
        { label: 'Campaign systems', from: 1, to: 4 },
        { label: 'Creative consistency', from: 2, to: 4 },
        { label: 'Brand thinking', from: 2, to: 4 }
      ]
    },
    {
      initials: 'A', name: 'Alice', role: 'Video Editing → Multi-discipline',
      delta: 'Scope expanded',
      copy: [
        'Originally a specialist video editor. Alice developed strong AI capability and has expanded beyond her original specialisation into adjacent production work.',
        'She also took on storyboarding, which she did not do before — video now starts from a planned sequence rather than being assembled in the edit.',
        'Her editing strength was never the constraint — the constraint was that it was the only thing the business could route to her.'
      ],
      why: '<b>Operational value:</b> broader deployment. A specialist who can also absorb overflow production work materially improves how the unit handles peak load — a resourcing gain, not just a skills gain.',
      skills: [
        { label: 'AI production', from: 1, to: 4 },
        { label: 'Storyboarding', from: 1, to: 4 },
        { label: 'Scope beyond video', from: 1, to: 3 },
        { label: 'Video editing (baseline strength)', from: 4, to: 4 }
      ]
    },
    {
      initials: 'SH', name: 'Shaimaa', role: 'Motion Design · Storyboarding', warn: true,
      delta: 'New skill · partial adoption',
      copy: [
        'The clearest gain here is storyboarding. Shaimaa did not work from storyboards before; she does now — motion work begins from a planned sequence that can be reviewed and approved before production time is spent on it.',
        'Reported honestly: adoption of the wider workflow change was slower here than in the design unit, and uptake of the AI toolchain remains incomplete.',
        'Measurable positive impact was still achieved — output is more consistent with the written creative standard, and briefs now arrive through the same structured approval path as the rest of the unit.'
      ],
      why: '<b>Recommendation:</b> this is the clearest remaining capability gap and therefore the most available upside. It needs a defined adoption plan with management backing rather than informal encouragement — I have proposed this as part of the workflow items currently under discussion.',
      skills: [
        { label: 'Storyboarding', from: 1, to: 4 },
        { label: 'Output consistency', from: 2, to: 3 },
        { label: 'Workflow adoption', from: 1, to: 2 },
        { label: 'AI experimentation', from: 1, to: 2 }
      ]
    }
  ];

  /* ======================================================================
     1 · Nav, drawer, progress, scrollspy
     ====================================================================== */
  var nav = document.getElementById('nav');
  var drawer = document.getElementById('drawer');
  var toggle = document.getElementById('navToggle');
  var progress = document.getElementById('progress');
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle('is-stuck', y > 24);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      drawer.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' || e.target === drawer) {
        nav.classList.remove('is-open');
        drawer.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  var sections = links
    .map(function (l) { return document.querySelector(l.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ======================================================================
     2 · Reveal on scroll
     ====================================================================== */
  function observeReveals() {
    var els = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
    if (!('IntersectionObserver' in window) || reduce) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        if (el.hasAttribute('data-reveal-stagger')) {
          Array.prototype.forEach.call(el.children, function (child, i) {
            child.style.transitionDelay = Math.min(i * 62, 520) + 'ms';
          });
        }
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  /* ======================================================================
     3 · Animated counters
     ====================================================================== */
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    if (reduce) { el.textContent = String(target); return; }
    var dur = 1500, t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function observeCounters() {
    var els = document.querySelectorAll('[data-count]');
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(els, runCounter); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        runCounter(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.4 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  /* ======================================================================
     4 · Bar fills (KPI micro-bars + AI capability bars)
     ====================================================================== */
  function observeFills() {
    var kpiBars = document.querySelectorAll('.kpi__bar i[data-fill]');
    var aiBars = document.querySelectorAll('.ba__fill[data-w]');
    var all = Array.prototype.slice.call(kpiBars).concat(Array.prototype.slice.call(aiBars));
    if (!all.length) return;

    function fill(el) {
      var v = el.getAttribute('data-fill') || el.getAttribute('data-w');
      el.style.width = v + '%';
      if (el.classList.contains('ba__fill') && parseFloat(v) >= 10) el.textContent = v + '%';
    }
    if (!('IntersectionObserver' in window) || reduce) { all.forEach(fill); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        fill(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.35 });
    all.forEach(function (el) { io.observe(el); });
  }

  /* ======================================================================
     5 · KPI pointer glow
     ====================================================================== */
  document.querySelectorAll('[data-tilt]').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
    });
  });

  /* ======================================================================
     6 · Lightbox — one instance, reused
     ====================================================================== */
  var lb = null, lbState = { acc: null, idx: 0 };

  function ensureLightbox() {
    if (lb) return lb;
    lb = document.createElement('div');
    lb.className = 'lb';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Before and after comparison');
    lb.innerHTML =
      '<span class="lb__title"></span>' +
      '<button class="lb__btn lb__close" type="button" aria-label="Close">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
      '<button class="lb__btn lb__prev" type="button" aria-label="Previous comparison">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>' +
      '<button class="lb__btn lb__next" type="button" aria-label="Next comparison">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>' +
      '<div class="lb__in">' +
        '<figure class="lb__fig"><img alt=""><figcaption class="lb__cap lb__cap--b">Before</figcaption></figure>' +
        '<figure class="lb__fig"><img alt=""><figcaption class="lb__cap lb__cap--a">After</figcaption></figure>' +
      '</div>';
    document.body.appendChild(lb);

    lb.querySelector('.lb__close').addEventListener('click', closeLightbox);
    lb.querySelector('.lb__prev').addEventListener('click', function (e) { e.stopPropagation(); stepLightbox(-1); });
    lb.querySelector('.lb__next').addEventListener('click', function (e) { e.stopPropagation(); stepLightbox(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb__in')) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); stepLightbox(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); stepLightbox(1); }
    });
    return lb;
  }

  function paintLightbox() {
    var acc = lbState.acc, i = lbState.idx;
    var base = 'assets/work/' + acc.slug + '/';
    var imgs = lb.querySelectorAll('.lb__fig img');
    imgs[0].src = base + 'before-' + (i + 1) + '.webp';
    imgs[0].alt = acc.name + ' — before, comparison ' + (i + 1);
    imgs[1].src = base + 'after-' + (i + 1) + '.webp';
    imgs[1].alt = acc.name + ' — after, comparison ' + (i + 1);
    lb.querySelector('.lb__title').textContent = acc.name + ' · comparison ' + (i + 1) + ' of ' + acc.pairs;
    lb.querySelector('.lb__prev').disabled = acc.pairs < 2;
    lb.querySelector('.lb__next').disabled = acc.pairs < 2;
  }

  function stepLightbox(dir) {
    var n = lbState.acc.pairs;
    lbState.idx = (lbState.idx + dir + n) % n;
    paintLightbox();
  }

  function openLightbox(acc, idx) {
    ensureLightbox();
    lbState.acc = acc; lbState.idx = idx;
    paintLightbox();
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lb__close').focus();
  }

  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  /* ======================================================================
     7 · Evidence — 3 × 2 comparison matrix with paging
     ====================================================================== */
  var tabsEl = document.getElementById('evTabs');
  var panelsEl = document.getElementById('evPanels');
  var buildAllPanels = null; // assigned below; used by the print handler

  function cell(acc, i, kind) {
    var fig = document.createElement('button');
    fig.type = 'button';
    fig.className = 'mx__cell';
    fig.setAttribute('aria-label', acc.name + ' — ' + kind + ' ' + (i + 1) + ', open larger comparison');
    fig.innerHTML =
      '<span class="mx__n">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<img src="assets/work/' + acc.slug + '/' + kind + '-' + (i + 1) + '.webp" alt="' + acc.name + ' — ' + kind + ' ' + (i + 1) + '" loading="lazy" decoding="async">' +
      '<span class="mx__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M11 8.5v5M8.5 11h5"/></svg></span>';
    fig.addEventListener('click', function () { openLightbox(acc, i); });
    return fig;
  }

  function renderMatrix(mx, acc, page) {
    // Never render a half-empty matrix: on a trailing partial page, shift the
    // window back so the grid always reads as a full 3 × 2 (pairs may repeat).
    var start = Math.min(page * PAGE_SIZE, Math.max(0, acc.pairs - PAGE_SIZE));
    var end = Math.min(start + PAGE_SIZE, acc.pairs);
    var rowB = mx.querySelector('.mx__row--before .mx__cells');
    var rowA = mx.querySelector('.mx__row--after .mx__cells');
    rowB.innerHTML = ''; rowA.innerHTML = '';
    for (var i = start; i < end; i++) {
      rowB.appendChild(cell(acc, i, 'before'));
      rowA.appendChild(cell(acc, i, 'after'));
    }
  }

  if (tabsEl && panelsEl) {
    ACCOUNTS.forEach(function (acc, i) {
      var tab = document.createElement('button');
      tab.className = 'ev__tab' + (i === 0 ? ' is-active' : '');
      tab.type = 'button';
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      tab.setAttribute('aria-controls', 'panel-' + acc.slug);
      tab.innerHTML = '<b>' + acc.name + '</b><span>' + acc.sector + '</span>';
      tab.addEventListener('click', function () { activate(i); });
      tabsEl.appendChild(tab);

      var panel = document.createElement('div');
      panel.className = 'ev__panel' + (i === 0 ? ' is-active' : '');
      panel.id = 'panel-' + acc.slug;
      panel.setAttribute('role', 'tabpanel');
      panelsEl.appendChild(panel);
    });

    var built = {};
    function buildPanel(i) {
      if (built[i]) return;
      built[i] = true;
      var acc = ACCOUNTS[i];
      var panel = panelsEl.children[i];
      var pages = Math.ceil(acc.pairs / PAGE_SIZE);
      var page = 0;

      var head = document.createElement('div');
      head.className = 'ev__head';
      head.innerHTML =
        '<h3>' + acc.name + ' <em>' + acc.badge + '</em></h3>' +
        '<div class="ev__pager">' +
          '<span class="ev__count"></span>' +
          '<button class="ev__arrow" type="button" aria-label="Previous set">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>' +
          '<button class="ev__arrow" type="button" aria-label="Next set">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>' +
        '</div>';
      panel.appendChild(head);

      var mx = document.createElement('div');
      mx.className = 'mx';
      mx.innerHTML =
        '<div class="mx__row mx__row--before"><div class="mx__rowlab"><b>Before</b><i></i></div><div class="mx__cells"></div></div>' +
        '<div class="mx__row mx__row--after"><div class="mx__rowlab"><b>After</b><i></i></div><div class="mx__cells"></div></div>';
      panel.appendChild(mx);

      var notes = document.createElement('div');
      notes.className = 'ev__notes';
      notes.innerHTML =
        '<div class="note"><b>What changed</b><p>' + acc.changed + '</p></div>' +
        '<div class="note"><b>Why it mattered</b><p>' + acc.mattered + '</p></div>' +
        '<div class="note note--impact"><b>Business impact</b><p>' + acc.impact + '</p></div>';
      panel.appendChild(notes);

      var countEl = head.querySelector('.ev__count');
      var arrows = head.querySelectorAll('.ev__arrow');

      function paint() {
        renderMatrix(mx, acc, page);
        countEl.textContent = pages > 1
          ? 'Set ' + (page + 1) + ' / ' + pages + ' · ' + acc.pairs + ' comparisons'
          : acc.pairs + ' comparisons';
        arrows[0].disabled = page === 0;
        arrows[1].disabled = page >= pages - 1;
        head.querySelector('.ev__pager').style.display = pages > 1 ? '' : 'flex';
        arrows[0].hidden = arrows[1].hidden = pages < 2;
      }
      arrows[0].addEventListener('click', function () { if (page > 0) { page--; paint(); } });
      arrows[1].addEventListener('click', function () { if (page < pages - 1) { page++; paint(); } });
      paint();
    }

    function activate(i) {
      buildPanel(i);
      Array.prototype.forEach.call(tabsEl.children, function (t, k) {
        t.classList.toggle('is-active', k === i);
        t.setAttribute('aria-selected', k === i ? 'true' : 'false');
      });
      Array.prototype.forEach.call(panelsEl.children, function (p, k) {
        p.classList.toggle('is-active', k === i);
      });
    }
    buildPanel(0);
    buildAllPanels = function () { ACCOUNTS.forEach(function (a, i) { buildPanel(i); }); };
  }

  /* ======================================================================
     8 · People section
     ====================================================================== */
  // NB: the <section> also carries id="people" for the nav anchor — this must
  // stay a distinct id or getElementById returns the section instead.
  var peopleEl = document.getElementById('peopleList');
  function fillSkills(scope) {
    scope.querySelectorAll('.skill__a[data-w], .skill__b[data-w]').forEach(function (el) {
      el.style.width = el.getAttribute('data-w') + '%';
    });
  }

  if (peopleEl) {
    PEOPLE.forEach(function (p, i) {
      var art = document.createElement('article');
      art.className = 'person' + (p.warn ? ' person--warn' : '') + (i === 0 ? ' is-open' : '');

      var skills = p.skills.map(function (s) {
        return '<div class="skill">' +
          '<div class="skill__lab"><b>' + s.label + '</b><span>' + BANDS[s.from - 1] + ' → ' + BANDS[s.to - 1] + '</span></div>' +
          '<div class="skill__track">' +
            '<div class="skill__a" data-w="' + (s.to / 5) * 100 + '"></div>' +
            '<div class="skill__b" data-w="' + (s.from / 5) * 100 + '"></div>' +
          '</div></div>';
      }).join('');

      art.innerHTML =
        '<button class="person__hd" type="button" aria-expanded="' + (i === 0) + '">' +
          '<span class="person__av">' + p.initials + '</span>' +
          '<span class="person__id"><b>' + p.name + '</b><span>' + p.role + '</span></span>' +
          '<span class="person__rt">' +
            '<span class="person__delta">' + p.delta + '</span>' +
            '<span class="person__chev"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>' +
          '</span>' +
        '</button>' +
        '<div class="person__bd"><div><div class="person__in">' +
          '<div class="person__copy">' +
            p.copy.map(function (c) { return '<p>' + c + '</p>'; }).join('') +
            '<div class="person__why">' + p.why + '</div>' +
          '</div>' +
          '<div class="skills">' + skills +
            '<div class="ba__legend" style="margin-top:.35rem">' +
              '<span><i style="background:var(--navy-500)"></i> April baseline</span>' +
              '<span><i style="background:var(--orange)"></i> Current</span>' +
            '</div>' +
          '</div>' +
        '</div></div></div>';

      var hd = art.querySelector('.person__hd');
      hd.addEventListener('click', function () {
        var open = art.classList.toggle('is-open');
        hd.setAttribute('aria-expanded', String(open));
        if (open) fillSkills(art);
      });
      peopleEl.appendChild(art);
    });

    var firstCard = peopleEl.firstElementChild;
    if (firstCard) {
      if (!('IntersectionObserver' in window) || reduce) { fillSkills(firstCard); }
      else {
        var pio = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            fillSkills(firstCard); pio.disconnect();
          });
        }, { threshold: 0.3 });
        pio.observe(firstCard);
      }
    }

    var note = document.createElement('div');
    note.className = 'datanote';
    note.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>' +
      '<p><b>Bands are a structured assessment, not a measured score.</b> Each level (Emerging · Developing · Competent · Strong · Independent) reflects my review of the designer\'s live output against the written creative standard. Converting this into an audited figure requires the quarterly skills matrix proposed in the KPI framework — scored jointly by team lead and General Manager.</p>';
    peopleEl.parentNode.insertBefore(note, peopleEl.nextSibling);
  }

  /* ======================================================================
     9 · Init + watchdog + print
     ====================================================================== */
  observeReveals();
  observeCounters();
  observeFills();

  // Force every scroll-driven state to its final value, regardless of whether
  // the observers ever fired. `expandAll` is used for print, where collapsed
  // accordions and hidden panels would silently drop content from the PDF.
  function forceFinalState(expandAll) {
    document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(function (el) {
      el.classList.add('is-in');
    });
    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = el.getAttribute('data-count');
    });
    document.querySelectorAll('.kpi__bar i[data-fill]').forEach(function (el) {
      el.style.width = el.getAttribute('data-fill') + '%';
    });
    document.querySelectorAll('.ba__fill[data-w]').forEach(function (el) {
      var v = el.getAttribute('data-w');
      el.style.width = v + '%';
      if (parseFloat(v) >= 10) el.textContent = v + '%';
    });
    if (expandAll) {
      document.querySelectorAll('.person').forEach(function (p) {
        p.classList.add('is-open');
        var hd = p.querySelector('.person__hd');
        if (hd) hd.setAttribute('aria-expanded', 'true');
      });
    }
    document.querySelectorAll((expandAll ? '' : '.person.is-open ') + '.skill__a[data-w], ' +
                              (expandAll ? '' : '.person.is-open ') + '.skill__b[data-w]')
      .forEach(function (el) { el.style.width = el.getAttribute('data-w') + '%'; });
  }

  // Insurance for a live presentation: if IntersectionObserver never fires
  // (embedded viewer, restricted webview, unexpected environment), the page
  // must not sit blank. Detect a completely dead observer and force state.
  setTimeout(function () {
    var reveals = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
    var fired = document.querySelectorAll('[data-reveal].is-in, [data-reveal-stagger].is-in');
    if (reveals.length && fired.length) return; // observers are working
    forceFinalState(false);
  }, 2800);

  // Print / "Save as PDF": nothing below the fold has been revealed yet, and
  // every account panel but one is collapsed. Build the whole document first.
  function preparePrint() {
    forceFinalState(true);
    if (buildAllPanels) buildAllPanels();
  }
  window.addEventListener('beforeprint', preparePrint);
  if (window.matchMedia) {
    var mq = window.matchMedia('print');
    var onMq = function (e) { if (e.matches) preparePrint(); };
    if (mq.addEventListener) mq.addEventListener('change', onMq);
    else if (mq.addListener) mq.addListener(onMq);
  }
})();
