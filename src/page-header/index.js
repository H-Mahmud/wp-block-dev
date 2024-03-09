import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import block from "./block.json";
import "./main.css";

registerBlockType(block.name, {
  edit: ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps({
      className: "wp-block-udemy-plus-page-header",
    });
    const { content, showCategory } = attributes;
    return (
      <>
        <InspectorControls>
          <PanelBody title={__("General", "wp-block-dev")}>
            <ToggleControl
              label={__("Show category", "wp-block-dev")}
              checked={showCategory}
              onChange={(newVal) => setAttributes({ showCategory: newVal })}
              help={showCategory ? "Category shown" : "Custom content shown"}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <div className='inner-page-header'>
            {showCategory ? (
              <h1>Category: Some category</h1>
            ) : (
              <RichText
                tagName='H1'
                value={content}
                placeholder={__("Enter your heading", "wp-block-dev")}
                onChange={(newVal) => setAttributes({ content: newVal })}
              />
            )}
          </div>
        </div>
      </>
    );
  },
});
