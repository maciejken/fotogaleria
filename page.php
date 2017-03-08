<?php get_header(); ?>

<?php
    if(have_posts()):
        while(have_posts()): the_post();
?>
<main>
    <div class="container">
        <section class="page">
            <h2><?php the_title(); ?></h2>
            <div class="desc">
                <p><?php the_content(); ?></p>
            </div>
        </section>
        <?php
            endwhile;
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
