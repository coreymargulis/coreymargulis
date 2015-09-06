<?php
/*
 Template Name: Projects
 */
?>

<?php get_header(); ?>

<div class="intro">
	<h1>Hello, I am a designer for the School of the Art Institute of Chicago’s Marketing & Communication department.</h1>
	<h2>I am currently accepting project requests: <a href="">coreymargulis@gmail.com</a></h2>
</div>

<div class="menu-wrap">
	<nav>
		<ul>
				<li>
					<a id="saic" href="saic-edu">
						<div class="project-title">saic.edu</div>
						<div class="project-tagline">Making the site responsive and improving the user experience for department pages</div>
					</a>
				</li>
				<li>
					<a id="campus-signage" href="campus-signage">
						<div class="project-title">Campus Signage</div>
						<div class="project-tagline">A flexible and useful signage system for the School of the Art Institute of Chicago’s campus</div>
					</a>
				</li>
			<li>
				<a id="pool-party" href="pool-party">
					<div class="project-title">Pool Party</div>
					<div class="project-tagline">Related videos reimagined</div>
				</a>
			</li>
			<!-- <li>
				<a id="" href="">
					<div class="project-title">150 Years</div>
					<div class="project-tagline">Making the site responsive and improving the user experience for department pages</div>
				</a>
			</li> -->
			<li>
				<a id="nichols-tower" href="">
					<div class="project-title">Nichols Tower</div>
					<div class="project-tagline">A website for a new, collaborative tower in Chicago’s Lawndale neighborhood</div>
				</a>
			</li>
			<li>
				<a id="pastel-artist" href="pastel-artist">
					<div class="project-title">Pastel Artist</div>
					<div class="project-tagline">A revamped website for an internationally renowned pastel artist</div>
				</a>
			</li>
			<li>
				<a id="commencement" href="commencement">
					<div class="project-title">Commencement</div>
					<div class="project-tagline">A dynamic identity for SAIC’s graduation ceremony</div>
				</a>
			</li>
			<li>
				<a id="whats-fresh" href="whats-fresh">
					<div class="project-title">What’s Fresh</div>
					<div class="project-tagline">Two ways to find out what produce is fresh in your area</div>
				</a>
			</li>
 		</ul>
	</nav>

<footer class="footer">
	© <?php echo date('Y'); ?> Corey Margulis
</footer>

	<div id="background"></div>

	<script type="text/javascript">
    $(document).ready(function() {
	    // $("#whats-fresh").hover(function() {
	    //     $('body').css('background-color', '<?php the_field('title-color', 54); ?>');
	    //       //$("#background").css('visibility', 'visible');
	    // }, function() {
	    //     // if you want to remove background
	    //     // on mouse out then uncomment below line
	    //     $('body').css('background-color', 'transparent');
	    //     // $("#background").css('visibility', 'hidden');
	    // })
	    // $("#commencement").hover(function() {
	    //     $('body').css('background-color', '<?php the_field('title-color', 49); ?>');
	    // }, function() {
	    //     $('body').css('background-color', 'transparent');
	    // })
	    // $("#pool-party").hover(function() {
	    //     $('ul').css('background-color', '<?php the_field('title-color', 35); ?>');
	    // }, function() {
	    //     $('ul').css('background-color', 'transparent');
	    // })
	    // $("#pastel-artist").hover(function() {
	    //     $('ul').css('background-color', '<?php the_field('title-color', 59); ?>');
	    // }, function() {
	    //     $('ul').css('background-color', 'transparent');
	    // })
	    // $("#sullivan-galleries").hover(function() {
	    //     $('ul').css('background-color', '<?php the_field('title-color', 62); ?>');
	    // }, function() {
	    //     $('ul').css('background-color', 'transparent');
	    // })
	    // $("#conversations").hover(function() {
	    //     $('ul').css('background-color', '<?php the_field('title-color', 117); ?>');
	    // }, function() {
	    //     $('ul').css('background-color', 'transparent');
	    // })
	    // $("#campus-signage").hover(function() {
	    //     $('ul').css('background-color', '<?php the_field('title-color', 364); ?>');
	    // }, function() {
	    //     $('ul').css('background-color', 'transparent');
	    // })
			// $("ul a").hover(function() {
	    //     $('li').css('background-color', '<?php the_field('title-color', 364); ?>');
	    // }, function() {
	    //     $('li').css('background-color', 'transparent');
	    // })
		});
	</script>

</div>


<!-- <div class="profile-link-wrapper">
	<a class="profile-link" id="trigger-overlay" href="#">About</a>
</div>

<div class="overlay overlay-slidedown">
	<div class="overlay-close-container">
		<a class="overlay-close" href="#">Close</a>
	</div>
	<div class="profile">
		<?php the_field("profile") ?>
	</div>
</div> -->

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
