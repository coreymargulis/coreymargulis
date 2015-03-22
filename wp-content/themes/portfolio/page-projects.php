<?php
/*
 Template Name: Projects
 */
?>

<?php get_header(); ?>

<div class="menu-wrap">
	<nav>
		<ul>
			<li><a id="pool-party" href="pool-party">Pool Party</a></li>
			<li><a id="campus-signage" href="campus-signage">Campus Signage</a></li>
			<li><a id="whats-fresh" href="whats-fresh">What’s Fresh</a></li>
			<li><a id="commencement" href="commencement">Commencement</a></li>
			<li><a id="pastel-artist" href="pastel-artist">Pastel Artist</a></li>
			<li><a id="sullivan-galleries" href="sullivan-galleries">Sullivan Galleries</a></li>		
 		</ul>
	</nav>
	<div id="background"></div>
	
		<script type="text/javascript">
            $(document).ready(function() {
			    $("#whats-fresh").hover(function() {
			        $('body').css('background-color', '<?php the_field('title-color', 54); ?>');
			          //$("#background").css('visibility', 'visible');
			    }, function() {
			        // if you want to remove background
			        // on mouse out then uncomment below line
			        $('body').css('background-color', 'transparent');
			        // $("#background").css('visibility', 'hidden');
			    })
			    $("#commencement").hover(function() {
			        $('body').css('background-color', '<?php the_field('title-color', 49); ?>');
			    }, function() {
			        $('body').css('background-color', 'transparent');
			    })
			    $("#pool-party").hover(function() {
			        $('ul').css('background-color', '<?php the_field('title-color', 35); ?>');
			    }, function() {
			        $('ul').css('background-color', 'transparent');
			    })
			    $("#pastel-artist").hover(function() {
			        $('ul').css('background-color', '<?php the_field('title-color', 59); ?>');
			    }, function() {
			        $('ul').css('background-color', 'transparent');
			    })
			    $("#sullivan-galleries").hover(function() {
			        $('ul').css('background-color', '<?php the_field('title-color', 62); ?>');
			    }, function() {
			        $('ul').css('background-color', 'transparent');
			    })
			    $("#conversations").hover(function() {
			        $('ul').css('background-color', '<?php the_field('title-color', 117); ?>');
			    }, function() {
			        $('ul').css('background-color', 'transparent');
			    })
			    $("#campus-signage").hover(function() {
			        $('ul').css('background-color', '<?php the_field('title-color', 364); ?>');
			    }, function() {
			        $('ul').css('background-color', 'transparent');
			    })
			});
        </script>

</div>


<div class="profile-link-wrapper">
	<a class="profile-link" id="trigger-overlay" href="#">About</a>
</div>

<div class="overlay overlay-slidedown">
	<div class="overlay-close-container">
		<a class="overlay-close" href="#">Close</a>
	</div>
	<div class="profile">
		<?php the_field("profile") ?>
	</div>
</div>

<script>
	(function() {
	  var triggerBttn = document.getElementById( 'trigger-overlay' ),
	    overlay = document.querySelector( 'div.overlay' ),
	    closeBttn = overlay.querySelector( 'a.overlay-close' );
	    transEndEventNames = {
	      'WebkitTransition': 'webkitTransitionEnd',
	      'MozTransition': 'transitionend',
	      'OTransition': 'oTransitionEnd',
	      'msTransition': 'MSTransitionEnd',
	      'transition': 'transitionend'
	    },
	    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
	    support = { transitions : Modernizr.csstransitions };

	  function toggleOverlay() {
	    if( classie.has( overlay, 'open' ) ) {
	      classie.remove( overlay, 'open' );
	      classie.add( overlay, 'close' );
	      var onEndTransitionFn = function( ev ) {
	        if( support.transitions ) {
	          if( ev.propertyName !== 'visibility' ) return;
	          this.removeEventListener( transEndEventName, onEndTransitionFn );
	        }
	        classie.remove( overlay, 'close' );
	      };
	      if( support.transitions ) {
	        overlay.addEventListener( transEndEventName, onEndTransitionFn );
	      }
	      else {
	        onEndTransitionFn();
	      }
	    }
	    else if( !classie.has( overlay, 'close' ) ) {
	      classie.add( overlay, 'open' );
	    }
	  }

	  triggerBttn.addEventListener( 'click', toggleOverlay );
	  closeBttn.addEventListener( 'click', toggleOverlay );
	})();
</script>

