<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fotogaleria</title>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <script src="<?php bloginfo('template_directory'); ?>/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/js/app.js"></script>
</head>
<body>
    <header>
        <div class="container">
            <h1>Fotogaleria</h1>
            <a class="icon-arrow-down"></a>
        </div>
    </header>
    <nav class="menu">
        <div class="container">
            <?php
                    $args = array(
                        'theme_location' => 'primary',
                        'container' => 'div',
                        'container_class' => 'social'
                    );
                    wp_nav_menu($args);
                ?>
            <?php dynamic_sidebar('headbar'); ?>
        </div>
    </nav>
