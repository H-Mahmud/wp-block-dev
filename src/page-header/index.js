import { RichText, useBlockProps } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import block from "./block.json";
import "./main.css";

registerBlockType(block.name, {
  edit: ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const { content } = attributes;
    return (
      <>
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
