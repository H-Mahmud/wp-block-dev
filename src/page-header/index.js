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
    const blockProps = useBlockProps();
    const { content, showCategory } = attributes;
    return (
      <>
        <InspectorControls>
          <PanelBody title={__("General", "wp-block-dev")}>
            <ToggleControl
              label={__("Show category", "wp-block-dev")}
              checked={showCategory}
              onChange={(newVal) => setAttributes({ showCategory: newVal })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <div className='inner-page-header'>
            <RichText
              tag='H1'
              value={content}
              placeholder={__("Enter your heading", "wp-block-dev")}
              onChange={(newVal) => setAttributes({ content: newVal })}
            />
          </div>
        </div>
      </>
    );
  },
});
``;
