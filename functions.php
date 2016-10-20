<?php


add_action('init','create_custom_post_type_annonces');

function create_custom_post_type_annonces(){
    $labels = array(
        'name'               => 'announces',
        'singular_name'      => 'announce',
        'all_items'          => 'All announces',
        'add_new'            => 'Add a announce',
        'add_new_item'       => 'Add a new announce',
        'edit_item'          => "Edit announce",
        'new_item'           => 'New announce',
        'view_item'          => "View announce",
        'search_items'       => 'Find a announce',
        'not_found'          => 'No result',
        'not_found_in_trash' => 'No result',
        'parent_item_colon'  => 'announce model:',
        'menu_name'          => 'announces',
    );
    $args = array(
        'labels'              => $labels,
        'hierarchical'        => false,
        'supports'            => array( 'title','thumbnail','editor', 'excerpt', 'comments'),
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'menu_position'       => 1,
        'menu_icon'           => 'dashicons-megaphone',
        'show_in_nav_menus'   => true,
        'publicly_queryable'  => true,
        'exclude_from_search' => false,
        'has_archive'         => false,
        'query_var'           => true,
        'can_export'          => true,
        'rewrite'             => array( 'slug' => 'announce' ),
        'capabilities' => array(
            'edit_post'          => 'edit_announce',
            'edit_posts'         => 'edit_announces',

        ),
    );

    register_post_type('announce', $args );
}


add_action('init','create_custom_taxonomy');

function create_custom_taxonomy() {
    $args = array(
        'label' => ( 'Category announce' ),
        'rewrite' => array( 'slug' => 'category-announce' ),
        'hierarchical' => true,
    );
    register_taxonomy( 'category-announce','announce', $args );
    $args2 = array(
        'label' => ( 'Keyword announce' ),
        'rewrite' => array( 'slug' => 'keyword-announce' ),
        'hierarchical' => true,
    );

    register_taxonomy( 'keyword-announce','announce', $args2 );
}
add_action('after_switch_theme', 'create_new_role');
function create_new_role()
{
    add_role(
        'internaute',
        'internaute',
        array(
            'read' => true,  // true allows this capability
            'edit_announce' => true,

        )
    );
    $role = get_role('administrator');
    $role->add_cap('edit_announce');
    $role->add_cap('edit_announces');

}



function ajout_scripts() {

// enregistrement d'un nouveau script
    wp_register_script('main_script', get_template_directory_uri() . '/js/scripts.js', array('jquery'),'1.1', true);
    wp_register_script('bootstrap_script', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery'),'1.1', true);
// appel du script dans la page
    wp_enqueue_script('main_script');
    wp_enqueue_script('bootstrap_script');
// enregistrement d'un nouveau style
    wp_register_style( 'main_style', get_template_directory_uri() . '/css/style.css' );
    wp_register_style( 'bootstrap_style', get_template_directory_uri() . '/css/bootstrap.min.css' );
// appel du style dans la page
    wp_enqueue_style( 'main_style' );
    wp_enqueue_style( 'bootstrap_style' );
}

add_action( 'wp_enqueue_scripts', 'ajout_scripts' );

add_action( 'after_setup_theme', 'thumbnails_theme_support' );
function thumbnails_theme_support(){
    add_theme_support( 'post-thumbnails' );
}

remove_filter('the_content', 'wpautop');

function wpdocs_custom_excerpt_length( $length ) {
    return 5;
}

add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );

function wpc_custom_excerpt($excerpt) {
    $excerpt = str_replace( "<p", "<p class=\"lead\"", $excerpt );
    return $excerpt;
}
add_filter('the_excerpt',  'wpc_custom_excerpt');


add_image_size("thumbnail_annonce",450,300,true);
add_image_size("thumbnail_annonce_full",1450,800,true);










?>