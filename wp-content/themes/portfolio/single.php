<?php get_header(); ?>

<div id="colorblock" style="background-color:<?php the_field('title-color'); ?>"></div>

<div id="content">

	<?php $bg = get_field( 'hero-image' ); ?>
	<div class="hero-image-container">
		<div class="hero-image" style="background-image: url(<?=$bg?>)"></div>
		<div class="hero-image-caption"><?php the_field('hero-image-caption'); ?></div>
	</div>

	<div id="inner-content" class="wrap cf">

		<div id="main" class="m-all t-all d-all cf" role="main">

			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>



              <article id="post-<?php the_ID(); ?>" <?php post_class('cf'); ?> role="article">

                <header>

                  <h1 class="entry-title" itemprop="headline" style="color:<?php the_field('title-color'); ?>"><?php the_title(); ?></h1>
				  <h2><?php the_field('tagline'); ?></h2>

			    </header>

                  <?php

					// check if the repeater field has rows of data
					if( have_rows('content') ) :

					 	// loop through the rows of data
					    while ( have_rows('content') ) : the_row();

					        // background color change


							if( get_sub_field('bkgd-color-change') ) : ?>

							    <section class="entry-content alt" itemprop="articleBody">

							<?php else : ?>

							    <section class="entry-content" itemprop="articleBody">

							<?php endif; ?>

					        <?php // check if the flexible content field has rows of data
							if( have_rows('section') ):

							     // loop through the rows of data
							    while ( have_rows('section') ) : the_row();

							        if( get_row_layout() == 'text' ):

							        	the_sub_field('text-field');

							        elseif( get_row_layout() == 'section-title' ): ?>

							        	<h3><?php the_sub_field('section-title'); ?></h3>

							        <?php elseif( get_row_layout() == 'image' ): ?>

										<div class="media">
											<img src="<?php the_sub_field("image"); ?>" alt="" class="<?php if( get_sub_field('drop-shadow')){ ?>drop-shadow<?php } ?>"/>
											<div class="caption"><?php the_sub_field("image-caption"); ?></div>
										</div>

									<?php elseif( get_row_layout() == 'video' ): ?>

							        	<div class="media">

											<div class="embed-container" style="padding-bottom:<?php the_sub_field('padding'); ?>%;">
												<?php

												// get iframe HTML
												$iframe = get_sub_field('video');


												// use preg_match to find iframe src
												preg_match('/src="(.+?)"/', $iframe, $matches);
												$src = $matches[1];
																																								if (get_sub_field('autoplay')){
																																									$params = array(
												    'title'    => 0,
												    'portrait'    => 0,
												    'byline'    => 0,
												    'autoplay'    => 1,
												    'loop'    => 1,
												    'color'    => 'ffffff'
												);
												}

												else {
												// add extra params to iframe src
												$params = array(
												    'title'    => 0,
												    'portrait'    => 0,
												    'byline'    => 0,
													'color'    => 'ffffff'
												);
												}

												$new_src = add_query_arg($params, $src);

												$iframe = str_replace($src, $new_src, $iframe);


												// add extra attributes to iframe html
												$attributes = 'frameborder="0"';

												$iframe = str_replace('></iframe>', ' ' . $attributes . '></iframe>', $iframe);


												// echo $iframe
												echo $iframe;

												?>
							        		</div>
											<div class="caption"><?php the_sub_field("image-caption"); ?></div>
							        	</div>

									<?php elseif( get_row_layout() == 'gallery' ): ?>

										<?php

										$images = get_sub_field('gallery');

										if( $images ): ?>
										    <div class="media">

											    <div id="slider" class="flexslider <?php if( get_sub_field('drop-shadow')){ ?>drop-shadow-slider<?php } ?>">

											        <ul class="slides">
											            <?php foreach( $images as $image ): ?>
											                <li>
											                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
											                </li>
											            <?php endforeach; ?>
											        </ul>
											    </div>
											    <div class="caption"><?php the_sub_field("image-caption"); ?></div>
										    </div>

										<?php endif; ?>

							        <?php endif;

							    endwhile;

							else :

							    // no layouts found

							endif; ?>

						</section> <?php // end article section ?>

					    <?php endwhile;

					else :

					    // no rows found

					endif;

					?>



              </article> <?php // end article ?>



			<?php endwhile; ?>

			<?php else : ?>

				<article id="post-not-found" class="hentry cf">
						<header class="article-header">
							<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
						</header>
						<section class="entry-content">
							<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
						</section>
						<footer class="article-footer">
								<p><?php _e( 'This is the error message in the single.php template.', 'bonestheme' ); ?></p>
						</footer>
				</article>

			<?php endif; ?>



		</div>

	</div>



		<?php
			$post_object = get_field('next-project');

			if( $post_object ):

				// override $post
				$post = $post_object;
				setup_postdata( $post );
		?>

		<a href="<?php the_permalink(); ?>">
			<section class="next-project" style="background-color:<?php the_field('title-color'); ?>; opacity: .85;">
				    	<div id="next-project">Next Project</div>
				    	<h3><?php the_title(); ?></h3>
				    	<?php the_field('tagline'); ?>

            </section> <?php // end next project section ?>
        </a>

        <a href="/">
        	<section class="logo-footer" style="background-color:<?php the_field('title-color'); ?>; opacity: 1;">
        		<div id="logo-footer" href="/">All Projects</div>
        	</section>
        </a>

        <?php wp_reset_postdata();  ?>
		<?php endif; ?>

</div>
