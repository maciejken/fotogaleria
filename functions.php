<?php

// Rejestracja miejsca na MENU

add_action('after_setup_theme', 'register_my_menu');

function register_my_menu(){
    register_nav_menu('primary', 'Menu Główne');
    register_nav_menu('secondary', 'Menu w stopce');
}

// Dodanie obsługi obrazków wyróżniających
add_theme_support('post-thumbnails');

// Dodanie obsługi sidebar
function add_sidebar() {
    register_sidebar(array(
        'name'          => 'Panel górny',
        'id'            => 'headbar',
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2>',
        'after_title'   => '</h2>'
    ) );

    register_sidebar(array(
        'name'          => 'Panel dolny',
        'id'            => 'foobar',
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2>',
        'after_title'   => '</h2>'
    ) );
}

add_action('widgets_init', 'add_sidebar');
