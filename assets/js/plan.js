/* ==========================================================================
   60-Day Performance Improvement Plan — initiative renderer
   Runs before main.js so the injected nodes are picked up by its observers.
   ========================================================================== */
(function () {
  'use strict';

  var INITIATIVES = [
    {
      n: '01', pri: 'critical',
      title: 'Remove the single point of failure',
      sub: 'Team dependency · "If you disappear tomorrow, the team will struggle"',
      gap: 'Work stops at my review step and decisions wait for my answer. No account has an owner other than me.',
      impact: 'This is the largest operational risk in the creative function. If I am absent, output and quality drop at the same time. The company carries that risk on every account, every week.',
      cause: 'I never wrote down how decisions get made. The standard exists in my head and is applied by me. Reviewing everything myself was faster in month one, so I never built the alternative.',
      steps: [
        'Publish a decision rights matrix: what each designer decides alone, what needs a peer check, what comes to me.',
        'Write the creative standard as a one page checklist a designer can apply without me.',
        'Assign a named owner per account, including the client conversation, not only the artwork.',
        'Run a three day test in Week 6 where I review nothing. Record what breaks.'
      ],
      timeline: 'Weeks 1 to 6',
      owner: 'Me. Decision matrix signed off with the GM in Week 2.',
      kpis: [
        'Accounts with a named owner (target: all)',
        'Assets released without my review',
        'Decisions escalated to me per week',
        'Lead absent test completed with a written report'
      ],
      why: 'Critical. The GM named this as the strongest concern, and it is the only risk here that does not shrink on its own over time.',
      risk: 'Quality drops during handover. People feel pushed into responsibility they did not ask for.',
      mitigation: 'Handover is staged, one account per designer per week, never all at once. Every handover starts with the written standard and a peer check, so nobody is alone on their first release.',
      outcome: 'The creative function keeps running at standard when I am not there. Delivery risk moves from one person to a system.'
    },
    {
      n: '02', pri: 'critical',
      title: 'Stop solo playing',
      sub: 'Leadership · Doing the work instead of building the people who do it',
      gap: 'I solve problems myself rather than building people who can solve them. I still produce client work directly.',
      impact: 'Team capability stays flat while my hours stay high. The company pays a lead salary for individual contributor output and gets no compounding return on it.',
      cause: 'Producing it myself was the fastest route to the quality bar in month one, and I never switched off that mode when the reason expired. I also mistook rescuing work for leading it.',
      steps: [
        'From Week 2 I produce no first drafts on client work. Any exception is logged with a written reason.',
        'When someone brings me a problem, I ask three questions before I offer an opinion.',
        'Work I would have made myself becomes a paired session where the designer drives and I coach.',
        'My personal production time is capped and reported weekly.'
      ],
      timeline: 'Weeks 2 to 8',
      owner: 'Me. Exception log visible to the GM weekly.',
      kpis: [
        'Client first drafts produced by me per week (target: zero)',
        'Briefs owned end to end by a designer',
        'Paired coaching sessions delivered',
        'Logged exceptions and the reason for each'
      ],
      why: 'Critical. This is the behaviour the GM named directly. Nothing else in this plan works while I remain the fastest route to a finished asset.',
      risk: 'Output quality dips in the short term. Deadlines feel tighter while people learn.',
      mitigation: 'I stay accountable for the outcome and available for coaching, but not for production. Where a deadline is genuinely at risk we reduce scope with account management, instead of me taking the file back.',
      outcome: 'Capability grows instead of work being rescued. My time moves to the work only a lead can do.'
    },
    {
      n: '03', pri: 'critical',
      title: 'Fix the communication cadence',
      sub: 'Communication · Alignment before execution, not during it',
      gap: 'One to one meetings are behind. Alignment happens in passing during delivery rather than before it starts.',
      impact: 'Rework, missed expectations, and people who do not know where they stand. It also hides problems until they are expensive to fix.',
      cause: 'I did not protect the time. Client meetings and delivery filled the calendar, and the one to ones were always the first thing I moved.',
      steps: [
        'Book every one to one for the full 8 weeks in Week 1 as a recurring block that does not move.',
        'Fixed agenda: work in progress, one blocker, one development topic, feedback in both directions.',
        'Written notes shared with the person within 24 hours, with agreed actions.',
        'A 30 minute weekly team planning session at a fixed time where the week is agreed publicly.'
      ],
      timeline: 'Week 1 onward',
      owner: 'Me',
      kpis: [
        'One to one completion rate (target: 100%, none pushed into the next week)',
        'Weekly planning sessions held',
        'Briefs with written expectations agreed before work starts',
        'Team clarity score from the anonymous survey, Week 1 against Week 8'
      ],
      why: 'Critical. It costs nothing, it is fully within my control, and it is the mechanism every other initiative in this plan depends on.',
      risk: 'The sessions turn into status updates instead of development conversations.',
      mitigation: 'The agenda puts development before status. If the session runs short of time, status is cut, not development.',
      outcome: 'Problems surface early, expectations are agreed before work starts, and each designer has a clear line of sight on their own growth.'
    },
    {
      n: '04', pri: 'high',
      title: 'Reset the change agenda',
      sub: 'Change management · Four changes in 90 days with no adoption plan',
      gap: 'I introduced an AI workflow, vibe coding, new creative processes and typography campaign thinking inside 90 days. Adoption was partial and resistance followed.',
      impact: 'Half adopted change is worse than no change. The company carries the disruption cost without collecting the productivity gain.',
      cause: 'Change volume, not team attitude. Four changes at once, each announced rather than co-designed, with no clear answer to what it does for the person being asked to change, and no time to absorb any one of them.',
      steps: [
        'Freeze new initiatives for 60 days. One exception only, agreed with the GM.',
        'Select one change to finish properly: the AI production workflow.',
        'Co-design the adoption steps with the two people furthest from it, not with the people already convinced.',
        'Name two champions and give them the sessions, so the change does not come from me.',
        'Publish an adoption ladder defining what level 1, 2 and 3 use looks like, so progress is visible.'
      ],
      timeline: 'Weeks 3 to 8',
      owner: 'Me, with two named champions from the team.',
      kpis: [
        'New initiatives introduced in the period (target: 1, not 4)',
        'Adoption level per person against the published ladder',
        'Sessions led by team members rather than by me'
      ],
      why: 'High. It protects the investment already made in these tools, and it is the clearest test of whether I can lead a change rather than announce one.',
      risk: 'The freeze is read as retreating from the improvements.',
      mitigation: 'The freeze is about sequencing, not about the value of the tools. The backlog stays visible so the GM can see exactly what is queued for the next cycle.',
      outcome: 'One change fully adopted across the whole team is worth more than four changes half used.'
    },
    {
      n: '05', pri: 'high',
      title: 'Balance the team development',
      sub: 'Team management · One person grew, the rest did not grow at the same rate',
      gap: 'Mahmoud improved significantly. The others did not move at the same pace, and the gap between the strongest and the rest is widening.',
      impact: 'One strong designer is a second dependency, not a solution. The capability gap is a delivery risk and a retention risk at the same time.',
      cause: 'I invested where the return came fastest. Mahmoud responded quickest so he got most of my time. I also confused "understands my thinking" with "capable independently". They are not the same thing.',
      steps: [
        'Score a written skills matrix for all five people jointly with the GM in Week 3. Not self assessment alone.',
        'One development plan per person with a single named target skill for the 60 days.',
        'Track coaching time per person weekly and correct the imbalance on purpose.',
        'Mahmoud becomes a peer coach on one named skill, which converts his growth into the team&#39;s growth.'
      ],
      timeline: 'Weeks 3 to 8',
      owner: 'Me, scored jointly with the GM.',
      kpis: [
        'Coaching hours per person, and the gap between highest and lowest',
        'Skills matrix movement for each of the five',
        'Peer coaching sessions delivered by team members'
      ],
      why: 'High. It answers the GM point directly and turns a single success into a method that can be repeated.',
      risk: 'Development plans become paperwork that nobody uses.',
      mitigation: 'Each plan has one target skill and one measurable proof, and it is reviewed inside the existing one to one. No extra meeting is created.',
      outcome: 'Capability spread across the team rather than concentrated in one person and in me.'
    },
    {
      n: '06', pri: 'high',
      title: 'Build prioritisation and capacity control',
      sub: 'Prioritisation and time management · Everything is urgent and I absorb the overflow',
      gap: 'Work is prioritised per request rather than per week, and when capacity runs out I absorb it with my own hours.',
      impact: 'Unpredictable delivery, no early warning on overload, and a lead working at a rate that is neither sustainable nor repeatable by a successor.',
      cause: 'There is no capacity model and no triage rule. Working late was the release valve that kept the problem invisible.',
      steps: [
        'Build a simple capacity view: committed work against available design days per week.',
        'Weekly triage with account management: what ships, what moves, what gets reduced in scope.',
        'Set work in progress limits per designer.',
        'Escalation rule: when capacity is exceeded it goes to the GM as a scope decision, not into my evenings.'
      ],
      timeline: 'Weeks 2 to 5',
      owner: 'Me, with account management.',
      kpis: [
        'On time delivery rate',
        'Items in progress per designer against the limit',
        'My own weekly hours',
        'Scope escalations raised through the proper route (a rising number here is a good sign)'
      ],
      why: 'High. Without it, delegation only moves the overload around instead of removing it.',
      risk: 'Saying no to work is read as reduced service to the client.',
      mitigation: 'Every escalation presents options rather than a refusal: reduce scope, move the date, or add capacity. The GM makes the call with the data in front of him.',
      outcome: 'Predictable delivery, overload visible before it happens, and a workload a successor could actually carry.'
    },
    {
      n: '07', pri: 'medium',
      title: 'Move knowledge out of my head',
      sub: 'Knowledge sharing · Documentation and onboarding',
      gap: 'The creative standard, the AI methods and the account knowledge live mostly with me.',
      impact: 'Slow onboarding for the three new hires, inconsistent output between designers, and a hard stop whenever I am unavailable.',
      cause: 'I taught by review and by example. That works one person at a time and leaves nothing behind when the session ends.',
      steps: [
        'Write the creative standard as a one page checklist a junior can use.',
        'One 30 minute knowledge session per week, led by a team member on rotation, not by me.',
        'Build the shared asset and brand file library currently sitting as a proposal.',
        'One page brief per account: brand rules, tone, what to do and what not to do.'
      ],
      timeline: 'Weeks 3 to 8',
      owner: 'Rotating across the team, coordinated by me.',
      kpis: [
        'Accounts with a completed one page brief',
        'Knowledge sessions held',
        'Share of sessions led by team members rather than by me',
        'Time for the three new hires to reach first unassisted release'
      ],
      why: 'Medium. High value, but it depends on Initiatives 01 and 02 landing first. Documenting a standard nobody is allowed to apply changes nothing.',
      risk: 'Documentation is written once and then goes stale.',
      mitigation: 'The account owner owns their one page brief and updates it at the point of change. It is checked inside the one to one, not in a separate audit.',
      outcome: 'Knowledge becomes a company asset instead of a personal one, and new hires reach the standard faster.'
    },
    {
      n: '08', pri: 'medium',
      title: 'Stop being the relay between teams',
      sub: 'Cross-functional communication · Context reaches the person doing the work',
      gap: 'I act as the relay between design and the content, performance and development teams.',
      impact: 'Briefs arrive incomplete, creative drifts from the campaign objective, and I become a bottleneck on information as well as on approvals.',
      cause: 'I joined the meetings myself because it was faster than briefing someone else to attend. That kept the context with me instead of with the designer.',
      steps: [
        'The account owner attends the campaign kick off directly. I attend only where the client relationship requires it.',
        'Agree one shared brief template with content and performance, including the fields currently missing.',
        'Designers see the campaign objective and, afterwards, the performance result of the work they produced.'
      ],
      timeline: 'Weeks 4 to 8',
      owner: 'Me, agreed with the content and performance leads.',
      kpis: [
        'Briefs returned for missing information',
        'Cross team meetings attended by a designer rather than by me',
        'Accounts where the designer has seen the performance result'
      ],
      why: 'Medium. Meaningful, but it depends on account ownership from Initiative 01 being in place first.',
      risk: 'Other teams keep routing everything through me out of habit.',
      mitigation: 'I redirect rather than answer, and I tell the other leads what I am doing and why, so it does not read as disengagement.',
      outcome: 'Context reaches the person doing the work, and design decisions connect to campaign results.'
    }
  ];

  var host = document.getElementById('inits');
  if (!host) return;

  var PRI_LABEL = { critical: 'Critical', high: 'High', medium: 'Medium', low: 'Low' };

  INITIATIVES.forEach(function (it, i) {
    var art = document.createElement('article');
    art.className = 'init' + (i === 0 ? ' is-open' : '');

    function list(items) {
      return '<ul>' + items.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>';
    }

    art.innerHTML =
      '<button class="init__hd" type="button" aria-expanded="' + (i === 0) + '">' +
        '<span class="init__n">' + it.n + '</span>' +
        '<span class="init__t"><b>' + it.title + '</b><span>' + it.sub + '</span></span>' +
        '<span class="init__pri pri--' + it.pri + '">' + PRI_LABEL[it.pri] + '</span>' +
        '<span class="init__chev"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>' +
      '</button>' +
      '<div class="init__bd"><div><div class="init__in">' +
        '<div class="fld"><b>Current gap</b><p>' + it.gap + '</p></div>' +
        '<div class="fld"><b>Business impact</b><p>' + it.impact + '</p></div>' +
        '<div class="fld fld--wide"><b>Root cause</b><p>' + it.cause + '</p></div>' +
        '<div class="fld fld--wide"><b>Action steps</b>' + list(it.steps) + '</div>' +
        '<div class="fld"><b>Timeline</b><p>' + it.timeline + '</p></div>' +
        '<div class="fld"><b>Owner</b><p>' + it.owner + '</p></div>' +
        '<div class="fld fld--wide"><b>Success metrics</b>' + list(it.kpis) + '</div>' +
        '<div class="fld"><b>Why this priority</b><p>' + it.why + '</p></div>' +
        '<div class="fld fld--risk"><b>Main risk</b><p>' + it.risk + '</p></div>' +
        '<div class="fld fld--wide"><b>Mitigation</b><p>' + it.mitigation + '</p></div>' +
        '<div class="fld fld--wide fld--out"><b>Expected business outcome</b><p>' + it.outcome + '</p></div>' +
      '</div></div></div>';

    var hd = art.querySelector('.init__hd');
    hd.addEventListener('click', function () {
      var open = art.classList.toggle('is-open');
      hd.setAttribute('aria-expanded', String(open));
    });
    host.appendChild(art);
  });

  // Print: every initiative must be readable in the PDF
  function expandAll() {
    document.querySelectorAll('.init').forEach(function (a) {
      a.classList.add('is-open');
      var hd = a.querySelector('.init__hd');
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
