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
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <p><?php the_tags(); ?></p>
                    <p><?php the_date(); ?></p>
                    <p>Dodał(a): <?php the_author(); ?></p>
                    <div class="comments">
                        <?php
                            $id = the_id();
                            $args = array(
                                'post_id' => $id
                                );
                            $comments = get_comments($args);
                            foreach($comments as $comment) :
                                echo($comment->comment_content);
                                echo($comment->comment_date);
                            	echo($comment->comment_author);
                            endforeach;
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
    </div>
</main>
<?php get_footer(); ?>
