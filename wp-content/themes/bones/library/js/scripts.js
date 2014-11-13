/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/



jQuery(document).ready(function() {

  //profile overlay
// (function() {
//   var triggerBttn = document.getElementById( 'trigger-overlay' ),
//     overlay = document.querySelector( 'div.overlay' ),
//     closeBttn = overlay.querySelector( 'button.overlay-close' );
//     transEndEventNames = {
//       'WebkitTransition': 'webkitTransitionEnd',
//       'MozTransition': 'transitionend',
//       'OTransition': 'oTransitionEnd',
//       'msTransition': 'MSTransitionEnd',
//       'transition': 'transitionend'
//     },
//     transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
//     support = { transitions : Modernizr.csstransitions };

//   function toggleOverlay() {
//     if( classie.has( overlay, 'open' ) ) {
//       classie.remove( overlay, 'open' );
//       classie.add( overlay, 'close' );
//       var onEndTransitionFn = function( ev ) {
//         if( support.transitions ) {
//           if( ev.propertyName !== 'visibility' ) return;
//           this.removeEventListener( transEndEventName, onEndTransitionFn );
//         }
//         classie.remove( overlay, 'close' );
//       };
//       if( support.transitions ) {
//         overlay.addEventListener( transEndEventName, onEndTransitionFn );
//       }
//       else {
//         onEndTransitionFn();
//       }
//     }
//     else if( !classie.has( overlay, 'close' ) ) {
//       classie.add( overlay, 'open' );
//     }
//   }

//   triggerBttn.addEventListener( 'click', toggleOverlay );
//   closeBttn.addEventListener( 'click', toggleOverlay );
// })();

	    // Target your .container, .wrapper, .post, etc.
    /* $(".embed-container").fitVids(); */
/*
(window).load(function() {
    $('.flexslider').flexslider();
  });
*/
//next project on scroll test...
// $(window).scroll(function() {
//         var paginationTabs = $('.test');
//         var tackNav = $('#toc-open');
//             targetScroll = $('#content').position().top,
//             currentScroll = $('html').scrollTop() || $('body').scrollTop();

//         paginationTabs.toggleClass('active', currentScroll >= targetScroll);
//         tackNav.toggleClass('tack', currentScroll >= targetScroll);
//     });

/*
var top_header = '';
$(document).ready(function(){
  top_header = $('.hero-image');
});
$(window).scroll(function () {
  var st = $(window).scrollTop();
  top_header.css({'background-position':"center "+(st*.5)+"px"});
});
*/


  /*
   * Let's fire off the gravatar function
   * You can remove this if you don't need it
  */
  //loadGravatars();


}); /* end of as page load scripts */

