/* ==========================================================================
   60-Day Action Plan — gap and solution renderer
   Runs before main.js so the injected nodes are picked up by its observers.
   ========================================================================== */
(function () {
  'use strict';

  var GAPS = [
    {
      n: '01', pri: 'critical',
      title: 'The team waits for me',
      tag: 'Team dependency',
      now: 'Work stops at my desk. Nobody sends anything to a client before I look at it. No account has an owner except me.',
      cost: 'If I am not here, the work stops. That is a risk on every client, every week. It is also the reason my manager said the team would struggle without me.',
      steps: [
        'Give every account a named owner. The owner also talks to the client.',
        'Write the quality rules on one page, so a designer can check their own work.',
        'Write down who decides what: alone, with a colleague, or with me.',
        'In Week 6 I review nothing for three days. We write down what breaks and we fix it.'
      ],
      risk: 'Quality can drop while people take over. I hand over one account per person per week, never all at once, and every first release gets a check from a colleague.',
      timeline: 'Weeks 1 to 6',
      metric: 'All 12 accounts have an owner. Work released without my review goes up each week.',
      priLabel: 'Critical'
    },
    {
      n: '02', pri: 'critical',
      title: 'I do the work instead of teaching it',
      tag: 'Solo player',
      now: 'When quality is at risk I make the design myself. It is the fastest way to a good result today, and it teaches nobody.',
      cost: 'The team stays the same while my hours go up. The company pays for a team lead and gets a designer.',
      steps: [
        'From Week 2 I make no first drafts for clients. If I break this rule I write down why.',
        'When someone brings me a problem, I ask three questions before I give an answer.',
        'Work I would have made myself becomes a session where the designer works and I coach.',
        'I report how much I produced each week, so this is easy to check.'
      ],
      risk: 'The first tight deadline will make taking the file back look like the right thing to do. If a date is at risk we cut scope with account management. I do not take the file.',
      timeline: 'Weeks 2 to 8',
      metric: 'First drafts made by me each week. Target is zero, with every exception written down.',
      priLabel: 'Critical'
    },
    {
      n: '03', pri: 'critical',
      title: 'We do not talk enough',
      tag: 'Communication',
      now: 'My one to one meetings are late. We talk while we deliver, not before we start.',
      cost: 'Work gets redone. People do not know where they stand. Problems stay hidden until they cost money.',
      steps: [
        'Book every one to one for the full eight weeks in Week 1. These blocks do not move.',
        'Same agenda every time: the work, one blocker, one skill to grow, and feedback in both directions.',
        'Send written notes to the person within 24 hours.',
        'One 30 minute team planning meeting each week, at a fixed time, where we agree the week together.'
      ],
      risk: 'These can turn into status updates. The agenda puts growth first. If we run out of time, status is cut, not the growth part.',
      timeline: 'Week 1 onward',
      metric: 'One to one meetings held in the week they were booked. Target is 100%.',
      priLabel: 'Critical'
    },
    {
      n: '04', pri: 'high',
      title: 'Only one person grew',
      tag: 'Team development',
      now: 'Mahmoud grew a lot. The others did not grow at the same speed. The gap between the strongest and the rest is getting wider.',
      cost: 'One strong designer is a second risk, not a fix. A wide gap between people is a delivery risk and a reason good people leave.',
      steps: [
        'Score a skills sheet for all five people with the GM in Week 3.',
        'One growth plan per person, with one skill to work on for the 60 days.',
        'Track my coaching hours per person and fix the gap on purpose.',
        'Mahmoud teaches one skill to the others, so his growth becomes the team&#39;s growth.'
      ],
      risk: 'Growth plans can become paper nobody uses. Each plan has one skill and one proof, and we review it inside the one to one. No extra meeting.',
      timeline: 'Weeks 3 to 8',
      metric: 'Coaching hours per person, and the gap between the highest and the lowest. All five move on the skills sheet, not one.',
      priLabel: 'High'
    },
    {
      n: '05', pri: 'high',
      title: 'I pushed too many changes, too fast',
      tag: 'Change management',
      now: 'I brought in an AI workflow, vibe coding, new processes and campaign typography inside 90 days. Some people pushed back.',
      cost: 'A change that is half used costs the company the disruption and gives back none of the benefit.',
      steps: [
        'Stop starting new things for 60 days. One exception only, agreed with the GM.',
        'Finish one change properly: the AI workflow.',
        'Build the steps with the two people who like it least, not with the people who already agree.',
        'Name two people from the team to lead the sessions, so the change does not come from me.',
        'Write three simple levels of use, so everyone can see where they are.'
      ],
      risk: 'Stopping new ideas can look like giving up on them. It is about order, not value. The waiting list stays visible so the GM can see what comes next.',
      timeline: 'Weeks 3 to 8',
      metric: 'New changes started in the period. Target is 1, not 4. Level of use for each person.',
      priLabel: 'High'
    },
    {
      n: '06', pri: 'medium',
      title: 'What I know is only in my head',
      tag: 'Knowledge sharing',
      now: 'The quality rules, the AI methods and the account details live mostly with me. I teach by review, one person at a time.',
      cost: 'The three new people take too long to become useful. Two designers can do the same account in two different ways.',
      steps: [
        'Write the quality rules on one page that a junior can use.',
        'One 30 minute sharing session each week, led by a team member, not by me.',
        'Build the shared brand and asset library that is already proposed.',
        'One page per account: brand rules, tone, what to do and what not to do.'
      ],
      risk: 'Documents go out of date. The account owner owns their page and updates it when something changes. We check it in the one to one.',
      timeline: 'Weeks 3 to 8',
      metric: 'Accounts with a written page. Target is all 12. Share of sessions led by the team, not by me.',
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
          '<div class="fld"><b>What happens now</b><p>' + g.now + '</p></div>' +
          '<div class="fld"><b>What it costs us</b><p>' + g.cost + '</p></div>' +
        '</div>' +
        '<div class="sol">' +
          '<span class="sol__lb">Solution</span>' +
          '<ul>' + g.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>' +
          '<p class="sol__risk"><b>Main risk and how I handle it:</b> ' + g.risk + '</p>' +
          '<div class="sol__meta">' +
            '<div class="sol__m"><b>Timeline</b><span>' + g.timeline + '</span></div>' +
            '<div class="sol__m"><b>How we measure it</b><span>' + g.metric + '</span></div>' +
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
