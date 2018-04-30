<?php
/*
 Template Name: Projects Homepage
 */
?>

<?php get_header(); ?>

<div class="intro">
	<h1>I am interested in how we can incorporate technology into our lives in meaningful ways, blending the physical and digital worlds to make technology feel more natural and human.</h1>
	<!-- <h2><a href="mailto:coreymargulis@gmail.com">Email me</a></h2> -->
</div>

<div class="menu-wrap">
	<nav>
		<body>
				<li>
					<a id="asset-location-recovery" href="asset-location-recovery">
						<div class="project-title">Asset Location & Recovery</div>
						<div class="project-tagline">Turning complexity into clarity</div>
					</a>
				</li>
				<li>
					<a id="financial-services" href="financial-services">
						<div class="project-title">Financial Services</div>
						<div class="project-tagline">...</div>
					</a>
				</li>
				<li>
					<a id="dev-ops" href="dev-ops">
						<div class="project-title">kCura</div>
						<div class="project-tagline">A continuous deployment 'command center'</div>
					</a>
				</li>
				<li>
					<a id="myday" href="myday">
						<div class="project-title">MyDay</div>
						<div class="project-tagline">Meal tracking made effortless</div>
					</a>
				</li>
				<li>
					<a id="mse" href="mse">
						<div class="project-title">Marquee Sports & Entertainment</div>
						<div class="project-tagline">...</div>
					</a>
				</li>
			<li>
				<a id="pool-party" href="pool-party">
					<div class="project-title">Pool Party</div>
					<div class="project-tagline">Related videos reimagined</div>
				</a>
			</li>
			<li>
				<a id="nichols-tower" href="nichols-tower">
					<div class="project-title">Nichols Tower</div>
					<div class="project-tagline">A website for a new, collaborative tower in Chicago’s Lawndale neighborhood</div>
				</a>
			</li>
			<!-- <li>
				<a id="pastel-artist" href="pastel-artist">
					<div class="project-title">Pastel Artist</div>
					<div class="project-tagline">A revamped website for an internationally renowned pastel artist</div>
				</a>
			</li> -->
			<li>
				<a id="whats-fresh" href="whats-fresh">
					<div class="project-title">What’s Fresh</div>
					<div class="project-tagline">Two ways to find out what produce is in season</div>
				</a>
			</li>
			<li>
				<a id="commencement" href="commencement">
					<div class="project-title">Commencement</div>
					<div class="project-tagline">A dynamic identity for SAIC’s graduation ceremony</div>
				</a>
			</li>
 		</body>
	</nav>

<footer class="copyright">
	© <?php echo date('Y'); ?> Corey Margulis
</footer>

	<div id="background"></div>

	<script type="text/javascript">
    $(document).ready(function() {
	    $("#whats-fresh").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 54); ?>');
	          //$("#background").css('visibility', 'visible');
	    }, function() {
	        // if you want to remove background
	        // on mouse out then uncomment below line
	        $('body').css('background-color', '#efefef');
	        // $("#background").css('visibility', 'hidden');
	    })
	    $("#commencement").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 49); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
	    $("#pool-party").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 35); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
	    $("#pastel-artist").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 59); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
	    $("#sbodylivan-galleries").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 62); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
	    $("#conversations").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 117); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
	    $("#campus-signage").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 364); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
			$("#saic").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 595); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
			$("#nichols-tower").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 692); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
			$("#truth-labs").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 793); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
			// $("body a").hover(function() {
	    //     $('li').css('background-color', '<?php the_field('title-color', 364); ?>');
	    // }, function() {
	    //     $('li').css('background-color', '#efefef');
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

<!-- <script>
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
</script> -->
