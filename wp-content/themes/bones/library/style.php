<?php
 $absolute_path = explode('wp-content', $_SERVER['SCRIPT_FILENAME']);
 $wp_load = $absolute_path[0] . 'wp-load.php';
 require_once($wp_load);

  /**
  Do stuff like connect to WP database and grab user set values
  */

  header('Content-type: text/css');
  header('Cache-control: must-revalidate');
?>

<!--
.hentry .next-project {
	
	background-color:green;
	opacity: .5;	
}

.hentry .next-project:hover {
				opacity: 1;
				}
-->


nav ul #background #whats-fresh {
	background-image: url('<?php the_field("homepage-image", 54); ?>');
}


