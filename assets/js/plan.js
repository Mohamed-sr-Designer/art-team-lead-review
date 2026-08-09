/* ==========================================================================
   60-Day Action Plan — initiative list
   Headline items only. The detail is explained in the meeting, so the rows
   are deliberately static: no toggle, no body copy.
   ========================================================================== */
(function () {
  'use strict';

  var GAPS = [
    { n: '01', pri: 'critical', priLabel: 'Critical',
      title: 'Move my time from doing the work to coaching',
      tag: 'Coaching' },
    { n: '02', pri: 'critical', priLabel: 'Critical',
      title: 'Set a fixed weekly rhythm for talking to the team',
      tag: 'Communication' },
    { n: '03', pri: 'high', priLabel: 'High',
      title: 'Grow the whole team, not only the strongest',
      tag: 'Team growth' },
    { n: '04', pri: 'high', priLabel: 'High',
      title: 'Bring in one change at a time',
      tag: 'Change' },
    { n: '05', pri: 'medium', priLabel: 'Medium',
      title: 'Write the standard down so anyone can use it',
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
