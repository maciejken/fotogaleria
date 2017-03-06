<?php get_header(); ?>
<main>
    <div class="container">
        <section>
            <?php
                if(have_posts()):
                    while(have_posts()): the_post();
            ?>
            <figure class="post">
                <?php the_post_thumbnail(); ?>
                <figcaption class="desc">
                    <p><?php the_content(); ?></p>
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
    </div>
</main>
<?php get_footer(); ?>
