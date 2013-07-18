(function($) {
  
  $.extend({
    pageTransition: function() {
                
      var running = function(options) {
        var $in = options.in;
        var $out = options.out;
        var inEffect = options.inEffect || 'pt-page-moveFromRight';
        var outEffect = options.outEffect || 'pt-page-moveToLeft';
        
        var effectEndEventNames = {
          'WebkitAnimation' : 'webkitAnimationEnd',
          'OAnimation' : 'oAnimationEnd',
          'msAnimation' : 'MSAnimationEnd',
          'animation' : 'animationend'
        };
        var effectEndEventName = effectEndEventNames[Modernizr.prefixed('animation')];
                
        $in.addClass(inEffect).addClass('page-current').on(effectEndEventName, function() {
          $in.off(effectEndEventName);
          $in.removeClass(inEffect);
        });
        
        $out.addClass(outEffect).on(effectEndEventName, function() {
          $out.off(effectEndEventName);
          $out.removeClass(outEffect).removeClass('page-current');
        });
      };
      
      return running;
    }
  });
    
})(jQuery);
