<?php
/**
 * Plugin Name: WP Block Dev
 */

 defined('ABSPATH') || exit;

 // setup
 !defined('WBD_DIR_PATH') && define('WBD_DIR_PATH', plugin_dir_path(__FILE__));

 // includes
 require WBD_DIR_PATH . 'inc/register-blocks.php';
 require WBD_DIR_PATH . 'inc/search-form-renderer.php';

 // hooks
 add_action('init', 'wbd_register_blocks');