<?php


// load js and css
function henrys_tea_scripts_loader()
{
	//$theme_version = wp_get_theme()->get( 'Version' );

	// get path of app css ad js file to use with filetime to controll cache busting
	$csspath = get_template_directory() . '/assets/dist/main.bundle.css';
	$jspath = get_template_directory() . '/assets/dist/main.bundle.js';


	// 1. Styles
	wp_enqueue_style('maincss', get_template_directory_uri() . './assets/dist/main.bundle.css', false, filemtime($csspath), 'all');

	// 2. Scripts
	wp_enqueue_script('mainjs', get_template_directory_uri() . '/assets/dist/main.bundle.js', array('jquery'), filemtime($jspath), true);
}
add_action('wp_enqueue_scripts', 'henrys_tea_scripts_loader');
