<?php get_header(); ?>
<main>
    <div class="container">
        <section>
            <!-- <figure class="post">
                <img src="<?php bloginfo('template_directory'); ?>/images/img1.jpg" alt="">
            </figure>
            <figure class="post">
                <img src="<?php bloginfo('template_directory'); ?>/images/img2.jpg" alt="">
            </figure>
            <figure class="post">
                <img src="<?php bloginfo('template_directory'); ?>/images/img3.jpg" alt="">
            </figure>
            <figure class="post">
                <img src="<?php bloginfo('template_directory'); ?>/images/img4.jpg" alt="">
            </figure>
            <figure class="post">
                <img src="<?php bloginfo('template_directory'); ?>/images/img5.jpg" alt="">
            </figure>
            <figure class="post">
                <img src="<?php bloginfo('template_directory'); ?>/images/img6.jpg" alt="">
            </figure> -->
            <?php
                if(have_posts()):
                    while(have_posts()): the_post();
            ?>
            <figure class="post">
                <?php the_post_thumbnail(); ?>
            </figure>
            <div class="popup">
                <figure>
                    <nav>
                        <a class="icon-arrow-down"></a>
                        <a class="icon-close"></a>
                    </nav>
                    <img src="" alt="">
                    <figcaption class="desc">
                        <p>
                            caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption
                            caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption
                            caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption
                            caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption
                        </p>
                        <a href="http://coderslab.pl">Zobacz więcej</a>
                        <!-- <p class="width"></p> -->
                    </figcaption>
                </figure>
            </div>
            <?php
                    endwhile;
                endif;
             ?>
        </section>
    </div>
</main>
<?php get_footer(); ?>
