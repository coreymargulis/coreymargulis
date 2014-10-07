<?php
/*
 Template Name: Projects
 */
?>

<?php get_header(); ?>

<div class="menu-wrap">
	<nav>
		<ul>
			<li><a id="whats-fresh" href="whats-fresh">What’s Fresh</a></li>
			<li><a id="pool-party" href="pool-party">Pool Party</a></li>
			<li><a id="commencement" href="commencement">Commencement</a></li>
			<li><a id="pastel-artist" href="pastel-artist">Pastel Artist</a></li>
			<li><a id="sullivan-galleries" href="sullivan-galleries">Sullivan Galleries</a></li>
			<li><a id="ongoing" href="ongoing">Campus Signzz</a></li>
			<!-- <li><a id="about" href="/about">About</a> -->
			<!-- <li><a href="/blog">Blog</a></li> -->
		</ul>
	</nav>
	<div id="background"></div>
	
		<script type="text/javascript">
            $(document).ready(function() {
			    $("#whats-fresh").hover(function() {
			        $('body').css('background-color', '<?php the_field('title-color', 54); ?>');
			          $("#background").css('visibility', 'visible');
			    }, function() {
			        // if you want to remove background
			        // on mouse out then uncomment below line
			        $('body').css('background-color', 'transparent');
			        $("#background").css('visibility', 'hidden');
			    })
			    $("#commencement").hover(function() {
			        $('body').css('background-color', '<?php the_field('title-color', 49); ?>');
			    }, function() {
			        // if you want to remove background
			        // on mouse out then uncomment below line
			        $('body').css('background-color', 'transparent');
			    })
			    $("#pool-party").hover(function() {
			        $('ul').css('background-color', '<?php the_field('title-color', 35); ?>');
			    }, function() {
			        // if you want to remove background
			        // on mouse out then uncomment below line
			        $('ul').css('background-color', 'transparent');
			    })
			    $("#pastel-artist").hover(function() {
			        $('ul').css('background-color', '<?php the_field('title-color', 59); ?>');
			    }, function() {
			        // if you want to remove background
			        // on mouse out then uncomment below line
			        $('ul').css('background-color', 'transparent');
			    })
			    $("#sullivan-galleries").hover(function() {
			        $('ul').css('background-color', '<?php the_field('title-color', 62); ?>');
			    }, function() {
			        // if you want to remove background
			        // on mouse out then uncomment below line
			        $('ul').css('background-color', 'transparent');
			    })
			});
        </script>

</div>

<div class="profile">
	<a id="profile-link" href="/">About</a>
</div>

