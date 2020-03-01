
(function($) {
  "use strict";
  resizeBanner()

// Wrap every letter in a span
  $('.carousel').carousel()
  $('.ml12').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({loop: true})
    .add({
      targets: '.ml12 .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 500 + 30 * i;
      }
    }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });

  $(window).on('resize', function (e) {
    resizeBanner()
  })

  function resizeBanner(){
    var $home = $("#home")
    var rHeight = Math.round($home.width() * 0.46)
    rHeight = rHeight <= 650 ? rHeight : 650
    $home.css('min-height', rHeight)
  }
})(jQuery);