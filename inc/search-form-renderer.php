<?php
defined('ABSPATH') || exit;

function wbd_search_form_renderer($atts) {
    $styles = "background-color:{$atts['bgColor']};color:{$atts['textColor']};";
    ob_start(); ?>
    <div class="wp-block-udemy-plus-search-form" style="<?php echo $styles; ?>">
          <h1>Search: Your search term here</h1>
          <form>
            <input type='text' placeholder='Search' />
            <div class='btn-wrapper'>
              <button
                type='submit'
                style="<?php echo $styles; ?>"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <?php
        $content = ob_get_contents();
        ob_clean();
        return $content;
}