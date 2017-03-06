<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fotogaleria</title>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <script src="<?php bloginfo('template_directory'); ?>/node_modules/jquery/dist/jquery.js"></script>
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
            <ul>
                <li>
                    <a href="">Info</a>
                </li>
                <li>
                    <a href="">Cennik</a>
                </li>
                <li>
                    <a href="">Kontakt</a>
                </li>
            </ul>
        </div>
    </nav>
    <main>
        <div class="container">
            <section>
                <!-- <h2>Tajlandia</h2> -->
                <figure class="post">
                    <img src="<?php bloginfo('template_directory'); ?>/images/img1.jpg" alt="">
                </figure>
                <figure class="post">
                    <img src="<?php bloginfo('template_directory'); ?>/images/img2.jpg" alt="">
                </figure>
                <figure class="post">
                    <img src="images/img3.jpg" alt="">
                </figure>
                <figure class="post">
                    <img src="images/img4.jpg" alt="">
                </figure>
                <figure class="post">
                    <img src="images/img5.jpg" alt="">
                </figure>
                <figure class="post">
                    <img src="images/img6.jpg" alt="">
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
            </section>
        </div>
    </main>
    <footer>
        <div class="container">
            <ul>
                <li>
                    <a class="fa fa-facebook" href="http://facebook.com"></a>
                </li>
                <li>
                    <a href="http://github.com" class="fa fa-github"></a>
                </li>
                <li>
                    <a href="http://linkedin.com" class="fa fa-linkedin"></a>
                </li>
                <li>
                    <a href="" class="fa fa-envelope"></a>
                </li>
            </ul>
        </div>
    </footer>
</body>
</html>
