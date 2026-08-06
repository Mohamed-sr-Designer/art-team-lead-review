/* ==========================================================================
   60-Day Action Plan — gap and solution renderer
   Runs before main.js so the injected nodes are picked up by its observers.
   ========================================================================== */
(function () {
  'use strict';

  var GAPS = [
    {
      n: '01', pri: 'critical',
      title: 'Move from central review to distributed ownership',
      tag: 'Ownership model',
      situation: 'Review and final sign off currently sit close to the lead. That was the right model while the quality bar was being set and while three new designers were joining. It has served its purpose, and it is now the limit on how quickly the function can take on more work.',
      impact: 'Concentrated review caps throughput at one person&#39;s calendar and delays the point where senior designers take commercial responsibility. Distributing ownership raises capacity without raising headcount, and builds the bench we need for the next set of accounts.',
      steps: [
        'Assign a named owner to each account, responsible for the client relationship as well as the output.',
        'Publish the creative standard as a one page checklist, so designers can validate their own work before it moves.',
        'Define decision rights in writing: what the owner decides, what needs a peer review, and what comes to me.',
        'Run a structured three day handover exercise in Week 6 where the team approves its own releases, and use the findings to close whatever is still missing.'
      ],
      risk: 'Some variance in quality during the transition. Mitigated by staging the handover at one account per designer per week, requiring a peer review on first releases, and keeping lead accountability for client outcomes throughout.',
      timeline: 'Weeks 1 to 6',
      metric: '12 of 12 accounts with a named owner. Share of work released under owner authority trending up week on week. Handover exercise completed with a written outcome report.',
      priLabel: 'Critical'
    },
    {
      n: '02', pri: 'critical',
      title: 'Convert lead time from production into capability',
      tag: 'Leverage',
      situation: 'A meaningful share of my week still goes into producing work directly, mostly on high stakes briefs. It protects quality on the day, but it is a low leverage use of a lead role.',
      impact: 'Time spent producing is time not spent multiplying capability. Every hour moved into coaching returns across every brief that designer touches afterwards. It is the difference between a team that delivers this quarter and a team that keeps delivering next year.',
      steps: [
        'From Week 2, first drafts on client work stay with the designer. Exceptions are documented with the reason.',
        'Replace direct production with paired sessions where the designer holds the file and I direct.',
        'Answer problems with questions first, so the reasoning transfers rather than just the fix.',
        'Report my production hours weekly, so the shift is visible rather than asserted.'
      ],
      risk: 'Pressure on genuinely tight deadlines. Mitigated by resolving capacity conflicts through a scope conversation with account management, rather than by absorbing production back to the lead.',
      timeline: 'Weeks 2 to 8',
      metric: 'Lead hours on client first drafts, trending to zero with documented exceptions. Briefs delivered end to end by a designer. Paired sessions delivered per week.',
      priLabel: 'Critical'
    },
    {
      n: '03', pri: 'critical',
      title: 'Establish a predictable communication rhythm',
      tag: 'Alignment',
      situation: 'One to ones and weekly planning have been inconsistent, mostly because delivery commitments have won the calendar. Alignment has been happening during execution rather than ahead of it.',
      impact: 'Late alignment is the most common source of rework. A fixed cadence moves clarification to the front of the process, where it is cheapest, and gives every designer a reliable channel for development rather than an occasional one.',
      steps: [
        'Schedule all one to ones and the weekly planning session for the full 60 days in Week 1, as protected blocks.',
        'Standardise the agenda: current work, active blockers, development focus, and feedback in both directions.',
        'Circulate written notes and agreed actions within 24 hours.',
        'Hold a 30 minute team planning session each week, so priorities are agreed openly rather than issued.'
      ],
      risk: 'Sessions drifting into status reporting. Mitigated by putting development ahead of status on the agenda, and by testing usefulness through the anonymous team survey in Week 8.',
      timeline: 'Week 1 onward, sustained',
      metric: 'One to one completion at 100% within the scheduled week. Weekly planning sessions held. Share of briefs with written expectations agreed before work starts.',
      priLabel: 'Critical'
    },
    {
      n: '04', pri: 'high',
      title: 'Broaden development beyond the strongest performers',
      tag: 'Team capability',
      situation: 'Development has moved fastest where it met the least friction. Mahmoud has progressed significantly. The rest of the team has moved more slowly, and my coaching time has not been distributed evenly.',
      impact: 'Capability concentrated in a small number of people limits which accounts we can staff with confidence. Broad based development increases how many briefs can run in parallel, and it is one of the strongest retention levers we have.',
      steps: [
        'Score a written skills matrix for the full team, jointly with the GM, in Week 3.',
        'Agree one development objective per designer for the 60 day period.',
        'Track coaching hours per person weekly and rebalance deliberately, not by instinct.',
        'Convert Mahmoud&#39;s progress into peer coaching, so one person&#39;s growth becomes the team&#39;s.'
      ],
      risk: 'Development plans becoming administrative rather than useful. Mitigated by limiting each plan to one objective with one observable proof point, reviewed inside the existing one to one rather than through a separate process.',
      timeline: 'Weeks 3 to 8',
      metric: 'Coaching hours per designer, with the variance between highest and lowest narrowing. Movement on the skills matrix across the full team. Peer coaching sessions delivered by team members.',
      priLabel: 'High'
    },
    {
      n: '05', pri: 'high',
      title: 'Sequence change for adoption, not for speed',
      tag: 'Change management',
      situation: 'Four capability changes were introduced in the first quarter: AI production, in house web build, campaign typography systems and a revised creative process. The tools are sound and the direction is right. Adoption is uneven because they arrived in parallel rather than in sequence.',
      impact: 'Partially adopted change delivers the disruption without the return. Sequencing the rollout protects the investment already made, and makes each capability durable rather than dependent on the person who introduced it.',
      steps: [
        'Hold new initiatives for the 60 day period, with one agreed exception.',
        'Complete adoption of the AI production workflow before opening anything else.',
        'Design the rollout with the people furthest from the change, not only with the early adopters.',
        'Appoint two adoption leads from inside the team to run the sessions.',
        'Publish a three level competency ladder, so progress is visible and people can place themselves on it.'
      ],
      risk: 'The hold being read as a drop in ambition. Mitigated by keeping a visible, dated backlog so the sequencing logic and the next cycle are clear to everyone.',
      timeline: 'Weeks 3 to 8',
      metric: 'One initiative introduced in the period. Competency level per designer against the ladder, with the full team at level 2 or above. Share of sessions led by team members.',
      priLabel: 'High'
    },
    {
      n: '06', pri: 'medium',
      title: 'Codify the standard so it scales past any one person',
      tag: 'Documentation',
      situation: 'The creative standard, the AI methods and much of the account context are held informally. Knowledge has transferred through review and example, which works well one designer at a time and does not scale beyond that.',
      impact: 'Undocumented standards slow onboarding, which is a live cost with three recent hires, and allow quality to vary between designers on the same account. Written standards make quality repeatable and make future hiring far faster to absorb.',
      steps: [
        'Publish the creative standard as a one page checklist that works without supervision.',
        'Run a 30 minute knowledge session each week, led by rotating team members.',
        'Build the shared brand and asset library already proposed.',
        'Produce a one page reference per account covering brand rules, tone and boundaries, owned by the account owner.'
      ],
      risk: 'Documentation going stale. Mitigated by assigning it to the account owner and checking currency inside the existing one to one, rather than running a separate audit nobody has time for.',
      timeline: 'Weeks 3 to 8',
      metric: '12 of 12 accounts with a current reference page. Knowledge sessions delivered, majority led by team members. Time to first unsupervised release for the three new designers.',
      priLabel: 'Medium'
    }
  ];

  var host = document.getElementById('gaps');
  if (!host) return;

  GAPS.forEach(function (g, i) {
    var art = document.createElement('article');
    art.className = 'gap' + (i === 0 ? ' is-open' : '');

    art.innerHTML =
      '<button class="gap__hd" type="button" aria-expanded="' + (i === 0) + '">' +
        '<span class="gap__n">' + g.n + '</span>' +
        '<span class="gap__t"><b>' + g.title + '</b><span>' + g.tag + '</span></span>' +
        '<span class="gap__pri pri--' + g.pri + '">' + g.priLabel + '</span>' +
        '<span class="gap__chev"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>' +
      '</button>' +
      '<div class="gap__bd"><div><div class="gap__in">' +
        '<div class="gap__two">' +
          '<div class="fld"><b>Current situation</b><p>' + g.situation + '</p></div>' +
          '<div class="fld"><b>Business impact</b><p>' + g.impact + '</p></div>' +
        '</div>' +
        '<div class="sol">' +
          '<span class="sol__lb">Action plan</span>' +
          '<ul>' + g.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>' +
          '<p class="sol__risk"><b>Risks and mitigation:</b> ' + g.risk + '</p>' +
          '<div class="sol__meta">' +
            '<div class="sol__m"><b>Timeline</b><span>' + g.timeline + '</span></div>' +
            '<div class="sol__m"><b>Success metrics</b><span>' + g.metric + '</span></div>' +
            '<div class="sol__m"><b>Priority</b><span class="sol__p pri--' + g.pri + '">' + g.priLabel + '</span></div>' +
          '</div>' +
        '</div>' +
      '</div></div></div>';

    var hd = art.querySelector('.gap__hd');
    hd.addEventListener('click', function () {
      var open = art.classList.toggle('is-open');
      hd.setAttribute('aria-expanded', String(open));
    });
    host.appendChild(art);
  });

  // Print: every card must be readable in the PDF
  function expandAll() {
    document.querySelectorAll('.gap').forEach(function (a) {
      a.classList.add('is-open');
      var hd = a.querySelector('.gap__hd');
      if (hd) hd.setAttribute('aria-expanded', 'true');
    });
  }
  window.addEventListener('beforeprint', expandAll);
  if (window.matchMedia) {
    var mq = window.matchMedia('print');
    var on = function (e) { if (e.matches) expandAll(); };
    if (mq.addEventListener) mq.addEventListener('change', on);
    else if (mq.addListener) mq.addListener(on);
  }
})();
