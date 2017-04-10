<?php get_header(); ?>
<main>
    <div class="container">
        <section>
            <?php
                if(have_posts()):
                    while(have_posts()): the_post();
            ?>
            <figure class="post">
                <div class="loader_inside">
                    <div class="loader"></div>
                </div>
                <?php the_post_thumbnail(); ?>
                <figcaption class="desc">
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <p><?php the_time(get_option('date_format')); ?></p>
                    <p><?php the_tags(); ?></p>
                    <p>Dodał(a): <?php the_author(); ?></p>
                    <div class="commentlist">
                    	<?php
                    		//Gather comments for a specific page/post
                    		$comments = get_comments(array(
                    			'post_id' => get_the_ID(),
                    		));

                    		//Display the list of comments
                    		wp_list_comments(array(
                                'style' => 'div',
                    			'reverse_top_level' => false
                                //Show the oldest comments at the top of the list
                    		), $comments);
                    	?>
                    </div>
                </figcaption>
            </figure>
            <?php
                    endwhile;
                endif;
             ?>
             <div class="popup">
                 <figure>
                     <nav>
                         <a class="icon-arrow-down"></a>
                         <a class="icon-close"></a>
                     </nav>
                     <img src="" alt="">
                 </figure>
             </div>
        </section>
        <?php wp_pagenavi(); ?>
    </div>
</main>
<?php get_footer(); ?>
