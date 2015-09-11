			<footer class="footer" role="contentinfo">

				<?php
					$post_object = get_field('next-project');

					if( $post_object ):

						// override $post
						$post = $post_object;
						setup_postdata( $post );
				?>

				<a href="<?php the_permalink(); ?>">
					<?php $bg = get_field( 'hero-image' ); ?>
					<section class="next-project" style="background-color:<?php the_field('title-color'); ?>; opacity: .85;">
						<div id="next-project">Next Project</div>
						<h3><?php the_title(); ?></h3>
						<?php the_field('tagline'); ?>
					</section> <?php // end next project section ?>
				</a>

						<!-- <a href="/">
							<section class="logo-footer" style="background-color:<?php the_field('title-color'); ?>; opacity: 1;">
								<div id="logo-footer" href="/">All Projects</div>
							</section>
						</a> -->

						<?php wp_reset_postdata();  ?>
				<?php endif; ?>

			</footer>

		</div>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

	</body>

</html> <!-- end of site. what a ride! -->
