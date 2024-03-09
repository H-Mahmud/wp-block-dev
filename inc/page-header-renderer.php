<?php
defined('ABSPATH') || exit;

function wbd_page_header_renderer($atts) {
    $heading = isset($atts['content'])? esc_attr($atts['content']): '';

    if(isset($atts['showCategory']) && $atts['showCategory']) 
        $heading = get_the_archive_title();
    
    ob_start(); ?>

        <div class="wp-block-udemy-plus-page-header">
          <div class='inner-page-header'>
              <h1>Category: <?php echo $heading; ?></h1>
          </div>
        </div>

        <?php
        $content = ob_get_contents();
        ob_clean();
        return $content;
}