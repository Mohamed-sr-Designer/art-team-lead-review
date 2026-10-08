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
      changed: 'I dropped the stock render and used a real photo of the site from the air. I drew the plot lines on top of the photo, so the plan reads at a glance. I cleaned the logo row at the bottom and gave the page one clear first line.',
      why: 'Buyers want proof that the project is real and moving. A real site photo says that. A render does not.',
      skills: ['Composition', 'Moodboard', 'Text layout', 'Retouch']
    },
    {
      slug: 'alrajhi-alrawda',
      name: 'Al Rawda',
      sector: 'Real Estate · KSA',
      badge: 'Al Rajhi United',
      pairs: 3,
      changed: 'I moved from outside shots to real interiors. I set the light warm and soft, and staged the room so it feels lived in. I moved the unit size up into the headline instead of hiding it in small text.',
      why: 'People buy a home on facts. The size and the family space answer the first question before they call.',
      skills: ['Lighting', 'Composition', 'Text layout', 'Art direction']
    },
    {
      slug: 'alrajhi-rabiet-elghad',
      name: 'Rabiet Al Ghad',
      sector: 'Real Estate · KSA',
      badge: 'Al Rajhi United',
      pairs: 3,
      changed: 'I built a look that belongs to this project: its own logo treatment, its own colour and its own photo mood. I kept it close enough to the older project so the two feel connected.',
      why: 'A new project is a risk for the buyer. When it looks like the project that was already delivered, the trust moves across with it.',
      skills: ['Art direction', 'Colour control', 'Text layout', 'Brand position']
    },
    {
      slug: 'abaq',
      name: 'Abaq Al Ilm International School',
      sector: 'Education · KSA',
      badge: 'Admissions',
      pairs: 3,
      changed: 'I stopped using raw event photos. I picked clean classroom images and fixed the light and the colour on each one. I set one type style that works for Arabic and English together.',
      why: 'Parents judge a school by how it looks before they visit. The post is the first proof of the quality the school claims.',
      skills: ['Moodboard', 'Retouch', 'Text layout', 'Colour control']
    },
    {
      slug: 'riad-elabdaa',
      name: 'Riyadh Al Ebdaa Schools',
      sector: 'Education · KSA',
      badge: 'Brand System',
      pairs: 3,
      changed: 'I locked the logo place, the colours and the text sizes. Every post now sits inside the same frame, so the designer starts from a system instead of a blank page.',
      why: 'When the posts look the same, people start to remember the school. When every post looks different, each one starts from zero.',
      skills: ['Brand position', 'Text layout', 'Colour control', 'Time control']
    },
    {
      slug: 'dora',
      name: 'Dora',
      sector: 'Education · Admissions',
      badge: 'Campaign System',
      pairs: 3,
      changed: 'I built one look for the whole admissions campaign: one colour field, one idea carried across every post, the accreditation logos made big, and a first line you can read in two seconds.',
      why: 'Admissions runs against a deadline. The trust marks and the date are what make a parent act, so both have to be seen fast.',
      skills: ['Composition', 'Text layout', 'Art direction', 'Time control']
    },
    {
      slug: 'gf',
      name: 'Guilt Free',
      sector: 'Food · Dessert Retail',
      badge: 'Product Craft',
      pairs: 6,
      changed: 'I stopped cutting the products out on a flat background. I shot one hero product with real light, real shadow and props around it, then retouched the texture so it looks fresh.',
      why: 'In food, the photo is the product. If the photo does not make you hungry, the post does not sell anything.',
      skills: ['Lighting', 'Composition', 'Retouch', 'Art direction']
    },
    {
      slug: 'boxaway',
      name: 'Boxaway',
      sector: 'Gourmet Gifting · KSA',
      badge: 'Luxury Look',
      pairs: 3,
      changed: 'I staged the product on fabric with soft directional light and controlled depth. I kept the logo small and left space around the food, so the frame feels calm and expensive.',
      why: 'Gift buyers pay more when the photo looks expensive. The photo sets the price in their head before they see the price.',
      skills: ['Lighting', 'Composition', 'Retouch', 'Colour control']
    },
    {
      slug: 'umi',
      name: 'United Mining Industries',
      sector: 'Industrial Manufacturing',
      badge: 'B2B Technical',
      pairs: 3,
      changed: 'I moved from a product shot on a dark background to the real place where the product is used. I turned the long paragraph into a short list that can be read in one pass.',
      why: 'A B2B buyer needs to see where the product fits. A bag on a black background does not answer that question.',
      skills: ['Moodboard', 'Composition', 'Text layout', 'Problem solving']
    },
    {
      slug: 'bassem-ragab',
      name: 'Basim Rajab Commercial Group',
      sector: 'B2B Distribution · KSA',
      badge: 'Authority',
      pairs: 4,
      changed: 'I staged the full product range in one controlled shot with clean light. I put the partner logos in a row underneath, and wrote a headline about market position instead of about products.',
      why: 'A distributor sells range and trust, not single items. Both have to be visible in one look.',
      skills: ['Composition', 'Retouch', 'Text layout', 'Problem solving']
    },
    {
      slug: 'ihs',
      name: 'IHS',
      sector: 'Development & Hospitality',
      badge: 'Track Record',
      pairs: 3,
      changed: 'I led with a photo of the finished building at good evening light. I kept the title short, gave it room, and let the building do the work.',
      why: 'In building work the finished project is the proof. It says more than any sentence about capability.',
      skills: ['Lighting', 'Moodboard', 'Composition', 'Text layout']
    },
    {
      slug: 'the-hub',
      name: 'Jeddah Initiative Hub',
      sector: 'Workspace · Jeddah',
      badge: 'Experience Led',
      pairs: 3,
      changed: 'I used real photos of the space at warm evening light, and kept one gold on dark frame across every post. The headline now talks about the benefit, not about the place.',
      why: 'People rent a workspace for how it feels to work there. They need to see that before they book a visit.',
      skills: ['Lighting', 'Art direction', 'Composition', 'Brand position']
    }
  ];

  var PAGE_SIZE = 3; // one 3 × 2 matrix per page

  /* ======================================================================
     DATA · Work produced by me personally
     Source: D:/AI Videos/New folder  →  assets/mine/
     ====================================================================== */
  var MINE = [
    {
      client: 'Tilal Village', meta: 'Community · Makkah',
      note: 'A full set for the launch: three wide films and one vertical cut. Real location footage graded and extended with AI, so we covered angles a shoot day would not have reached.',
      items: [
        { f: 'tilal-1', o: 'wide' }, { f: 'tilal-2', o: 'wide' },
        { f: 'tilal-3', o: 'wide' }, { f: 'tilal-4', o: 'tall' }
      ]
    },
    {
      client: 'Jeddah Initiative Hub', meta: 'Workspace · Jeddah',
      note: 'Three vertical films built entirely from AI scenes. No shoot, no location fee, no talent booking. The whole set was made and approved in days.',
      items: [{ f: 'hub-1', o: 'tall' }, { f: 'hub-2', o: 'tall' }, { f: 'hub-3', o: 'tall' }]
    },
    {
      client: 'AMAM · Durrat Al Arous', meta: 'Real Estate · Jeddah',
      note: 'A luxury seafront film for a project that was not built yet. AI gave us the finished property on screen while it was still under construction.',
      items: [{ f: 'amam-1', o: 'wide' }]
    },
    {
      client: 'Makkiyoon Urban Developers', meta: 'Real Estate · Makkah',
      note: 'An aerial brand film for a Makkah development. The camera move and the light were built to feel like a real drone shoot.',
      items: [{ f: 'makkiyoon-1', o: 'wide' }]
    },
    {
      client: 'nice', meta: 'Brand film',
      note: 'A character led brand film with dialogue. This one tested the full pipeline: AI people, AI motion and AI voice over in Arabic.',
      items: [{ f: 'nice-1', o: 'wide' }]
    },
    {
      client: 'Wattania', meta: 'Legal services · Healthcare',
      note: 'A story led vertical film for a service that is hard to picture. AI let us stage the exact scene the script needed instead of settling for stock.',
      items: [{ f: 'wattania-1', o: 'tall' }]
    }
  ];

  /* ======================================================================
     DATA · People development
     Bands: 1 Emerging · 2 Developing · 3 Competent · 4 Strong · 5 Independent
     ====================================================================== */
  var BANDS = ['Emerging', 'Developing', 'Competent', 'Strong', 'Independent'];

  var PEOPLE = [
    {
      initials: 'M', name: 'Mahmoud', role: 'Senior Designer',
      delta: 'Works on his own now',
      copy: [
        'The biggest change in the team. Mahmoud now starts from the client goal and explains his layout from it. Before, he started from the software.',
        'His AI work went from nothing to a normal part of his day. He knows where AI output can go in a piece and where it cannot.'
      ],
      why: '<b>What this changes:</b> he knows the standard well enough to carry work forward with very little review from me. That gives me back review time and means quality no longer depends on one person.',
      skills: [
        { label: 'Design thinking', from: 2, to: 5 },
        { label: 'AI in production', from: 1, to: 5 },
        { label: 'Working on his own', from: 2, to: 5 },
        { label: 'Holds the standard alone', from: 2, to: 5 }
      ]
    },
    {
      initials: 'K', name: 'Kholoud', role: 'Designer',
      delta: 'Strong growth',
      copy: [
        'Clear growth in four areas: AI production, retouch and finish, overall quality, and solving problems when the brief is not clear.',
        'The finish is the most useful part for the business. Work that used to need a senior pass now clears review on the first try much more often.'
      ],
      why: '<b>What this changes:</b> a second designer who can reach high finish means less queue at my review step, and real backup on the harder accounts.',
      skills: [
        { label: 'AI in production', from: 1, to: 4 },
        { label: 'Retouch and finish', from: 2, to: 4 },
        { label: 'Creative quality', from: 2, to: 4 },
        { label: 'Problem solving', from: 2, to: 4 }
      ]
    },
    {
      initials: 'H', name: 'Heba', role: 'Senior Designer',
      delta: 'New skill added',
      copy: [
        'Heba learned something the team did not have: typography as a system, not as a style choice. She now builds a campaign as one connected set, with the same type rules in every post.',
        'That grew into brand thinking. She designs to the brand rules, not to the single post in front of her.'
      ],
      why: '<b>What this changes:</b> connected campaign design is what keeps a big set of posts consistent without me checking each one. It is the skill that lets output go up while quality stays.',
      skills: [
        { label: 'Typography', from: 1, to: 4 },
        { label: 'Campaign systems', from: 1, to: 4 },
        { label: 'Consistency', from: 2, to: 4 },
        { label: 'Brand thinking', from: 2, to: 4 }
      ]
    },
    {
      initials: 'A', name: 'Alice', role: 'Video Editing and more',
      delta: 'Wider role',
      copy: [
        'Alice started as a video editor only. She built strong AI skills and now takes on work outside her first job.',
        'She also learned storyboarding, which she did not do before. Video now starts from a planned sequence instead of being built inside the edit.',
        'Her editing was never the problem. The problem was that editing was the only thing we could give her.'
      ],
      why: '<b>What this changes:</b> we can give her more kinds of work. A specialist who can also take extra production load makes busy weeks much easier to plan.',
      skills: [
        { label: 'AI in production', from: 1, to: 4 },
        { label: 'Storyboarding', from: 1, to: 4 },
        { label: 'Work beyond video', from: 1, to: 3 },
        { label: 'Video editing (already strong)', from: 4, to: 4 }
      ]
    },
    {
      initials: 'SH', name: 'Shaimaa', role: 'Video Editing and more', warn: true,
      delta: 'New skill, slower change',
      copy: [
        'The clearest gain here is storyboarding. Shaimaa did not work from storyboards before. She does now, so video work starts from a plan we can approve before we spend edit time on it.',
        'To be honest: the wider workflow change was slower here than in the design team, and the AI tools are still not fully used.',
        'There was still real progress. The output matches the written standard more often, and briefs now come through the same approval path as the rest of the team.'
      ],
      why: '<b>My recommendation:</b> this is the clearest gap left, so it is also the easiest place to gain. It needs a short adoption plan with your backing. Asking nicely has not been enough.',
      skills: [
        { label: 'Storyboarding', from: 1, to: 4 },
        { label: 'Consistency', from: 2, to: 3 },
        { label: 'Using the new workflow', from: 1, to: 2 },
        { label: 'Trying AI tools', from: 1, to: 2 }
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
      '</div>' +
      '<div class="lb__solo"></div>';
    document.body.appendChild(lb);

    lb.querySelector('.lb__close').addEventListener('click', closeLightbox);
    lb.querySelector('.lb__prev').addEventListener('click', function (e) { e.stopPropagation(); stepLightbox(-1); });
    lb.querySelector('.lb__next').addEventListener('click', function (e) { e.stopPropagation(); stepLightbox(1); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('lb__in') || e.target.classList.contains('lb__solo')) closeLightbox();
    });
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
    imgs[0].alt = acc.name + ', before, comparison ' + (i + 1);
    imgs[1].src = base + 'after-' + (i + 1) + '.webp';
    imgs[1].alt = acc.name + ', after, comparison ' + (i + 1);
    lb.querySelector('.lb__title').textContent = acc.name + ' · comparison ' + (i + 1) + ' of ' + acc.pairs;
    lb.querySelector('.lb__prev').disabled = acc.pairs < 2;
    lb.querySelector('.lb__next').disabled = acc.pairs < 2;
  }

  function stepLightbox(dir) {
    if (!lbState.acc) return; // solo media viewer has nothing to step through
    var n = lbState.acc.pairs;
    lbState.idx = (lbState.idx + dir + n) % n;
    paintLightbox();
  }

  function openLightbox(acc, idx) {
    ensureLightbox();
    lbState.acc = acc; lbState.idx = idx;
    lb.classList.remove('is-solo');
    lb.querySelector('.lb__solo').innerHTML = '';
    paintLightbox();
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lb__close').focus();
  }

  // Single item viewer, used by the video and campaign sections
  function openMedia(item) {
    ensureLightbox();
    lbState.acc = null;
    lb.classList.add('is-solo');
    lb.querySelector('.lb__prev').hidden = true;
    lb.querySelector('.lb__next').hidden = true;
    lb.querySelector('.lb__title').textContent = item.title;
    var solo = lb.querySelector('.lb__solo');
    solo.innerHTML = item.type === 'video'
      ? '<video src="' + item.src + '" controls autoplay playsinline preload="metadata"></video>'
      : '<img src="' + item.src + '" alt="' + item.title + '">';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lb__close').focus();
  }

  window.openMedia = openMedia;

  function closeLightbox() {
    if (!lb) return;
    var v = lb.querySelector('.lb__solo video');
    if (v) { v.pause(); }
    lb.querySelector('.lb__solo').innerHTML = '';
    lb.classList.remove('is-open', 'is-solo');
    lb.querySelector('.lb__prev').hidden = false;
    lb.querySelector('.lb__next').hidden = false;
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
    fig.setAttribute('aria-label', acc.name + ', ' + kind + ' ' + (i + 1) + ', open larger comparison');
    fig.innerHTML =
      '<span class="mx__n">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<img src="assets/work/' + acc.slug + '/' + kind + '-' + (i + 1) + '.webp" alt="' + acc.name + ', ' + kind + ' ' + (i + 1) + '" loading="lazy" decoding="async">' +
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
        '<div class="note"><b>What I changed</b><p>' + acc.changed + '</p></div>' +
        '<div class="note"><b>Why it helps</b><p>' + acc.why + '</p></div>' +
        '<div class="note note--impact"><b>Skills I brought in</b>' +
          '<p class="note__sub">Not in the work before. In it now.</p>' +
          '<div class="chips">' + acc.skills.map(function (s) {
            return '<span class="chip chip--skill">' + s + '</span>';
          }).join('') + '</div>' +
        '</div>';
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
          '<div class="skill__lab"><b>' + s.label + '</b><span>' + BANDS[s.from - 1] + ' to ' + BANDS[s.to - 1] + '</span></div>' +
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
              '<span><i style="background:var(--navy-500)"></i> May baseline</span>' +
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

  }

  /* ======================================================================
     8b · My own production: render the client groups
     ====================================================================== */
  var mineEl = document.getElementById('mineList');
  if (mineEl) {
    MINE.forEach(function (g) {
      var wide = g.items.filter(function (i) { return i.o === 'wide'; });
      var tall = g.items.filter(function (i) { return i.o === 'tall'; });

      function row(items, kind) {
        if (!items.length) return '';
        return '<div class="mine__row mine__row--' + kind + '">' + items.map(function (it) {
          return '<figure class="vid__cell mine__cell mine__cell--' + kind + '" ' +
            'data-src="assets/mine/' + it.f + '.mp4" data-title="' + g.client + '">' +
            '<video src="assets/mine/' + it.f + '.mp4" poster="assets/mine/' + it.f + '.jpg" ' +
            'muted loop playsinline preload="none"></video>' +
            '<button class="vid__play" type="button" aria-label="Play ' + g.client + ' video">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></button>' +
            '</figure>';
        }).join('') + '</div>';
      }

      var art = document.createElement('article');
      art.className = 'mine__g';
      art.innerHTML =
        '<div class="mine__hd">' +
          '<div><h4>' + g.client + '</h4><span class="mine__meta">' + g.meta + '</span></div>' +
          '<span class="mine__count">' + g.items.length + (g.items.length > 1 ? ' films' : ' film') + '</span>' +
        '</div>' +
        row(wide, 'wide') + row(tall, 'tall') +
        '<p class="mine__note">' + g.note + '</p>';
      mineEl.appendChild(art);
    });
  }

  /* ======================================================================
     8c · Video: inline play, and lightbox with sound
     ====================================================================== */
  document.querySelectorAll('.vid__cell').forEach(function (cell) {
    var video = cell.querySelector('video');
    var play = cell.querySelector('.vid__play');
    if (!video) return;

    function toggle(e) {
      e.stopPropagation();
      if (video.paused) {
        // only one inline video runs at a time
        document.querySelectorAll('.vid__cell video').forEach(function (v) {
          if (v !== video && !v.paused) { v.pause(); v.closest('.vid__cell').classList.remove('is-playing'); }
        });
        video.play().then(function () { cell.classList.add('is-playing'); }).catch(function () {});
      } else {
        video.pause();
        cell.classList.remove('is-playing');
      }
    }
    if (play) play.addEventListener('click', toggle);
    cell.addEventListener('click', function () {
      openMedia({
        type: 'video',
        src: cell.getAttribute('data-src'),
        title: cell.getAttribute('data-title') || ''
      });
    });
  });

  // Campaign images open in the same viewer
  document.querySelectorAll('.camp__kv img, .camp__row img').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      openMedia({ type: 'image', src: img.getAttribute('src'), title: img.getAttribute('alt') || '' });
    });
  });

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
