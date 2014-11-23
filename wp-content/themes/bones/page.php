<?php get_header(); ?>

<div id="content">
			
	<?php $bg = get_field( 'hero-image' ); ?>
	<div class="hero-image-container">
		<div class="hero-image" style="background-image: url(<?=$bg?>); "></div>
		<div class="hero-image-caption"><?php the_field('hero-image-caption'); ?>
	</div>


				<div id="inner-content" class="wrap cf">

						<div id="main" class="m-all t-all d-all cf" role="main">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<div class="article-header">

									<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>
									<h2><?php the_field('tagline'); ?></h2>
																	
								</div> <?php // end article header ?>

								<section class="entry-content cf" itemprop="articleBody">
								
								<?php
 
									// check if the flexible content field has rows of data
									if( have_rows('content') ):
									 
									     // loop through the rows of data
									    while ( have_rows('content') ) : the_row();
									 
									        if( get_row_layout() == 'text' ):
									 
									        	the_sub_field('text-field');
									 
									        elseif( get_row_layout() == 'section-title' ): 
									 
									        	the_sub_field('section-title');
									        	
									        elseif( get_row_layout() == 'image' ): ?>
									        
									        <div>
									        
												<img src="<?php the_sub_field("image"); ?>" alt="" />
												
												<p><?php the_sub_field("image-caption"); ?></p>
												
											</div>
									 
									        <?php endif;
									 
									    endwhile;
									 
									else :
									 
									    // no layouts found
									 
									endif;
									 
								?>
																
								</section> <?php // end article section ?>

								
								<footer class="article-footer cf">

									<a href="<?php the_field('next-project'); ?>">Next Project</a>

								</footer>


								

							</article>

							<?php endwhile; else : ?>

									<article id="post-not-found" class="hentry cf">
										<header class="article-header">
											<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
										</header>
										<section class="entry-content">
											<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( 'This is the error message in the page.php template.', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>

						</div>

				</div>

			</div>