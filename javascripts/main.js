//Require.jsのセットアップ
require.config({
  baseUrl: 'javascripts',
  
  paths: {
    'jquery': 'lib/jquery-2.0.1.min',
    'dropkick': 'lib/jquery.dropkick-1.0.0',
    'modal': 'lib/jquery.modal',
    'pagetransition': 'lib/pagetransition',
    'modernizr': 'lib/modernizr.custom'
  },
  
  shim: {
    'jquery': {
      exports: '$'
    },
    
    'dropkick': {
      deps: ['jquery']
    },
        
    'modal': {
      deps: ['jquery']
    },
    
    'pagetransition': {
      deps: ['jquery', 'modernizr']
    },
    
    'modernizr': {
      deps: ['jquery']
    }
  }
});

//アプリケーションの初期化処理
require([
  'jquery',
  'dropkick',
  'modal',
  'pagetransition',
  'modernizr'
], function($) {
  
  //WebClipの判定
  if (window.navigator.standalone) {
		$('.content').css('margin-top', '20px');
		$('.navbar-inner').css('padding-top', '20px');
  };
  
  $(function() {
    //AppView
    window.setTimeout(function() {
      $.pageTransition({
        in: $('#login'),
        out: $('#start'),
        inEffect: 'pt-page-moveFromBottomFade',
        outEffect: 'pt-page-moveToTopFade'
      });
    }, 2000);
    
    $('.next-page').on('click', function(event) {
      event.preventDefault();
      var inPageUrl = $(this).attr('href');
      $.pageTransition({
        in: $(inPageUrl),
        out: $('.page-current')
      });
    });
    $('.prev-page').on('click', function(event) {
      event.preventDefault();
      var inPageUrl = $(this).attr('href');
      $.pageTransition({
        in: $(inPageUrl),
        out: $('.page-current'),
        inEffect: 'pt-page-moveFromLeft',
        outEffect: 'pt-page-moveToRight'
      })
    });
    
    //Dropkick
    $('select').dropkick({
      width: '100%'
    });
      
    //Modal
    $('.modalLink').modal({
      opacity: 0.5,
      resizeWindow: true,
      animationSpeed: 200
    });
  });
});