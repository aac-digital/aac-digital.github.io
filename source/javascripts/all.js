//= require_tree .

+(function(window, document, undefined){
  "use strict";

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    center: true
  });

  $('.prev-arrow').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $('.next-arrow').click(function() {
    owl.trigger('next.owl.carousel');
  });
})(this, this.document);
