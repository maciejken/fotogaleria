<?php get_header(); ?>

<main>
    <div class="container">
        <?php
            if(have_posts()):
                while(have_posts()): the_post();
        ?>
        <section class="content">
            <h2><?php the_title(); ?></h2>
            <span><?php the_time(get_option('date_format')); ?></span>
            <div class="desc">
                <figure>
                    <?php the_content(); ?>
                    <figcaption>
                        <p><?php the_tags(); ?></p>
                        <p><?php the_time(get_option('date_format')); ?></p>
                        <p>Dodał(a): <?php the_author(); ?></p>
                    </figcaption>
                </figure>
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
            </div>
        </section>
        <?php
            endwhile;
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
