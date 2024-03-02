<?php
defined('ABSPATH') || exit;

function wbd_search_form_renderer() {
    ob_start(); ?>
    <div {...blockProps}>
          <h1>Search: Your search term here</h1>
          <form>
            <input type='text' placeholder='Search' />
            <div class='btn-wrapper'>
              <button
                type='submit'
                style={{ background: bgColor, color: textColor }}
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