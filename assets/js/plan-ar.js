/* ==========================================================================
   خطة الـ 60 يوم — قائمة المبادرات
   عناوين فقط. الشرح يتم شفهياً في المراجعة، لذلك الصفوف ثابتة بلا فتح
   وبلا نص تحتها.
   ========================================================================== */
(function () {
  'use strict';

  var GAPS = [
    { n: '01', pri: 'critical', priLabel: 'حرِج',
      title: 'تحويل وقت القيادة من الإنتاج إلى بناء القدرات',
      tag: 'الرافعة' },
    { n: '02', pri: 'critical', priLabel: 'حرِج',
      title: 'تثبيت إيقاع تواصل يمكن الاعتماد عليه',
      tag: 'المواءمة' },
    { n: '03', pri: 'high', priLabel: 'مرتفع',
      title: 'توسيع التطوير ليتجاوز الأعلى أداءً',
      tag: 'قدرات الفريق' },
    { n: '04', pri: 'high', priLabel: 'مرتفع',
      title: 'ترتيب التغيير بحسب التبنّي لا بحسب السرعة',
      tag: 'إدارة التغيير' },
    { n: '05', pri: 'medium', priLabel: 'متوسط',
      title: 'توثيق المعيار ليتجاوز أي شخص بعينه',
      tag: 'التوثيق' }
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
