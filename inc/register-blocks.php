<?php
defined('ABSPATH') ||exit;

function wbd_register_blocks() {

    $blocks = [
        ["name" => "fancy-header"],
        ["name" => "search-form"]
    ];

    foreach($blocks as $block) {
        register_block_type(WBD_DIR_PATH . 'build/' .$block['name']);
    }

}