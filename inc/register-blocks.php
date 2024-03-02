<?php
defined('ABSPATH') ||exit;

function wbd_register_blocks() {

    $blocks = [
        ["name" => "fancy-header"],
        ["name" => "search-form", 
            "options" => ['render_callback' => 'wbd_search_form_renderer']]
    ];

    foreach($blocks as $block) {
        register_block_type(
            WBD_DIR_PATH . 'build/' .$block['name'],
            isset($block['options'])? $block['options']: []
        );
    }

}