(function($) {
$( document ).ready( function() {
  $body         = $(document.body);
  $window       = $(window);
  $html         = $(document.documentElement);
 
  var wpMedium = {
 
    /*
     * divLayout must have following markup:
     * <div class="post next content-hidden">
     *  <div class="inner"> <!-- inner's background style is thumbnail -->
     *   <hX class="inner-title"><a class="link-to-next"></a></hX><!-- .post.current loses the anchor after transition -->
     *  </div><!-- .inner -->
     *  <div class="content">
     *  </div><!-- .content -->
     * </div><!-- .post .next .content-hidden -->
     */
 
    /*
     * METHODS
     */
    init : function() {
      if( this.shouldBeDisabled() ) {
        return false;
      }
 
      // refresh objects on page
      this.refreshVars();
 
      // we must store the state after page load so we can use back & forward and go back to this page
      this.storeTheStateOnLoad();
 
      // loading first next is different (we only need to add content)
      // param is a callback function
      this.loadNextPost( this.loadFirstNext );
 
      // layout for next elements
      this.divLayout = this.next.clone();
      this.divLayout.find( '.inner' ).removeAttr( 'style' ); // clear background image
      this.startTheHandlers();
    },
    
    shouldBeDisabled : function() {
      var disableForMobile = false;
      var currentUserAgent = navigator.userAgent.toLowerCase();
      if( typeof history.pushState === 'undefined' || // always disable for browsers that don't support url change
        typeof history.replaceState === 'undefined' ||
        ( currentUserAgent.indexOf( 'fire' ) === -1 && currentUserAgent.indexOf( 'kindle' ) !== -1 ) || // always disable for monochrome kindle
        currentUserAgent.indexOf( 'android' ) !== -1 || // android doesn't really support history.pushState but says it do. but we're too smart to believe it. http://stackoverflow.com/questions/10620843/pushstate-in-android-4-0
        ( disableForMobile && (
          currentUserAgent.indexOf( 'fire' ) !== -1 || // kindle fire
          currentUserAgent.indexOf( 'mobile' ) !== -1 || // includes iphones and blackberries
          currentUserAgent.indexOf( 'android' ) !== -1 ||
          currentUserAgent.indexOf( 'phone' ) !== -1 || // windows phone
          currentUserAgent.indexOf( 'ipad' ) !== -1
        ) ) ) {
        return true;
      }
      return false;
    },
 
    refreshVars : function() {
      this.current = $( '.post.current' );
      this.next = $( '.post.next' );
      this.linkToNext = this.next.find( '.link-to-next' );
      // if the post loaded before animation finished (unlikely but possible) try again up to 10 times before ditching
      // this var is used on loadNext()
      this.nextCounter = 0;
    },
 
    doTheSwitch : function() {
      $this = this;
 
      $this.changeUrl( $this.linkToNext.attr( 'href' ), $this.linkToNext.text() );
      $this.loadNextPost( $this.loadNext );
 
      $this.current.addClass( 'fade-up-out' );
      $this.next.removeClass( 'content-hidden next' );
      // remove anchor on the title
      $this.next.addClass( 'easing-upward' ).find( '.link-to-next' ).contents().unwrap();
 
      var translationValue  = $this.next.get(0).getBoundingClientRect().top - $( 'body' ).offset().top;
 
      $this.next.css({ "transform": "translate3d(0, -"+ translationValue +"px, 0)" });
 
      setTimeout( function() {
        $this.scrollTop();
        $this.next.removeClass( 'easing-upward' );
        $this.current.remove();
 
        $this.next.css({ "transform": "" });
        $this.current = $this.next.addClass( 'current' );
        // tell the loadNext() function that it's good to go. it takes control from now on.
        $this.next = null;
      }, 400 );
 
    },
 
    // we need: { post_content, post_title, permalink, attachment_url }
    loadNextPost : function( callback ) {
      $this = this;
      $.ajax( {
        type: "POST",
        url: wpMediumJS.ajaxurl,
        data: {
          action: 'wp_medium_get_next_post',
          current_url: location.href,
          nonce: wpMediumJS.nonce,
        }
      } )
      .done( function( post ) {
        if( '' !== post ) {
          $this.nextPost = JSON.parse( post );
        } else {
          $this.nextPost = null;
        }
        callback.call( $this );
      } );
    },
 
    // execute only once, on init
    loadFirstNext : function() {
      if( this.nextPost === null ) {
        return;
      }
      this.next.find( '.content' ).html( this.nextPost.post_content );
      this.bindTheClick();
    },
 
    loadNext : function() {
      if( $this.nextPost === null ) {
        if( $this.next !== null ) {
          $this.next.remove();
        }
        return;
      }
 
      // if the post loaded before animation finished (unlikely but possible) try again up to 10 times before ditching
      if( $this.next != null && $this.nextCounter < 10 ) {
        setTimeout( function() {
          $this.loadNext();
          $this.nextCounter++;  
        }, 1000 );
      }
 
      $this.next = $this.divLayout.clone();
      $this.next.find( '.inner' ).css( 'background-image', "url('" + $this.nextPost.attachment_url + "')" );
      $this.next.find( '.link-to-next' ).text( $this.nextPost.post_title ).attr( 'href', $this.nextPost.permalink );
      $this.next.find( '.content' ).html( $this.nextPost.post_content );
      
      $( '#wrap' ).append( $this.next );
      $this.refreshVars();
      $this.bindTheClick();
    },
 
    scrollTop : function() {
      $body.add($html).scrollTop(0);
    },
 
    changeUrl : function( newUrl, newTitle ) {
      // once again check if browser supports changing the url. if not then reload to new page
      if( typeof history.pushState === 'undefined' ) {
        location.href = newUrl;
      }
 
      history.pushState( { url: newUrl }, '', newUrl );
      // we replace old title with the new title
      document.title = document.title.replace( this.current.find( '.inner-title' ).text().trim(), newTitle );
    },
 
    storeTheStateOnLoad : function() {
      // store the state when first getting to page
      if( typeof history.replaceState !== 'undefined' ) {
        history.replaceState( { url: document.URL }, null, null );
      }
    },
 
    /*
     * HANDLERS
     */
    startTheHandlers : function() {
      // function to be called when going back or forward
      window.onpopstate = this.onHistoryChange;
    },
 
    bindTheClick : function() {
      var e = 'ontouchstart' in window ? 'touchstart' : 'click';
      this.linkToNext.on( e, this.onNextClick );
    },
 
    onNextClick : function( e ) {
      e.preventDefault();
      $( this ).unbind( e );
      wpMedium.doTheSwitch();
    },
 
    // back & forward
    onHistoryChange : function( e ) {
      if( e && e.state ) {
        location.href = e.state.url;
        location.reload();
      }
    },
  };
 
  // ready, steady, go
  wpMedium.init();
 
} );
})(jQuery);