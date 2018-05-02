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
						<div class="project-title">Location & Recovery Services</div>
						<div class="project-tagline">A suite of tools to modernize a transportation logistics company</div>
					</a>
				</li>
				<li>
					<a id="financial-services" href="financial-services">
						<div class="project-title">Enterprise Apps</div>
						<div class="project-tagline">Selections from business tools designed at Truth Labs</div>
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
				<!-- <li>
					<a id="facebook" href="facebook">
						<div class="project-title">Facebook</div>
						<div class="project-tagline">A system for Facebook's internal HR info and more</div>
					</a>
				</li>
				<li>
					<a id="mse" href="mse">
						<div class="project-title">Marquee Sports & Entertainment</div>
						<div class="project-tagline">...</div>
					</a>
				</li> -->
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
	    }, function() {
	        $('body').css('background-color', '#efefef');
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
			$("#myday").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 834); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
			$("#dev-ops").hover(function() {
	        $('body').css('background-color', '<?php the_field('title-color', 856); ?>');
	    }, function() {
	        $('body').css('background-color', '#efefef');
	    })
		});
	</script>

</div>
