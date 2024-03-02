<?php
defined('ABSPATH') || exit;

function wbd_search_form_renderer($atts) {
    $bgColor = esc_attr($atts['bgColor']);
    $color = esc_attr($atts['textColor']);
    $styles = "background-color:{$bgColor};color:{$color};";
    ob_start(); ?>
    <div class="wp-block-udemy-plus-search-form" style="<?php echo $styles; ?>">
          <h1>Search: Your search term here</h1>
          <form method="get" action="<?php echo esc_url(home_url('/')); ?>">
            <input type='text' placeholder='<?php _e('Search', 'wp-block-dev'); ?>' name="s" value="<?php the_search_query(); ?>" />
            <div class='btn-wrapper'>
              <button type='submit' style="<?php echo $styles; ?>" >
                <?php _e('Search', 'wp-block-dev'); ?>
              </button>
            </div>
          </form>
        </div>
        <?php
        $content = ob_get_contents();
        ob_clean();
        return $content;
}