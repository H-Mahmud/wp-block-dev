<?php
defined('ABSPATH') ||exit;

function wbd_register_blocks() {
    register_block_type(WBD_DIR_PATH . 'build');
}