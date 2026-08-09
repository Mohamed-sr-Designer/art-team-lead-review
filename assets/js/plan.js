/* ==========================================================================
   60-Day Action Plan — initiative list
   Headline items only. Detail is delivered verbally in the review, so the
   rows are deliberately static: no toggle, no body copy.
   ========================================================================== */
(function () {
  'use strict';

  var GAPS = [
    { n: '01', pri: 'critical', priLabel: 'Critical',
      title: 'Convert lead time from production into capability',
      tag: 'Leverage' },
    { n: '02', pri: 'critical', priLabel: 'Critical',
      title: 'Establish a predictable communication rhythm',
      tag: 'Alignment' },
    { n: '03', pri: 'high', priLabel: 'High',
      title: 'Broaden development beyond the strongest performers',
      tag: 'Team capability' },
    { n: '04', pri: 'high', priLabel: 'High',
      title: 'Sequence change for adoption, not for speed',
      tag: 'Change management' },
    { n: '05', pri: 'medium', priLabel: 'Medium',
      title: 'Codify the standard so it scales past any one person',
      tag: 'Documentation' }
  ];

  var host = document.getElementById('gaps');
  if (!host) return;

  GAPS.forEach(function (g) {
    var art = document.createElement('article');
    art.className = 'gap';
    art.innerHTML =
      '<div class="gap__hd">' +
        '<span class="gap__n">' + g.n + '</span>' +
        '<span class="gap__t"><b>' + g.title + '</b><span>' + g.tag + '</span></span>' +
        '<span class="gap__pri pri--' + g.pri + '">' + g.priLabel + '</span>' +
      '</div>';
    host.appendChild(art);
  });
})();
