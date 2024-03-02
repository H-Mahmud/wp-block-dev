import { registerBlockType } from "@wordpress/blocks";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import block from "./block.json";

registerBlockType(block.name, {
  edit: ({ attributes, setAttributes }) => {
    const { content } = attributes;
    const blockProps = useBlockProps({ className: "fancy-header" });
    return (
      <RichText
        {...blockProps}
        tagName='H2'
        onChange={(newVal) => setAttributes({ content: newVal })}
        placeholder={__("Enter your heading", "wp-block-dev")}
        value={content}
      />
    );
  },
  save: ({ attributes }) => {
    const { content } = attributes;
    const blockProps = useBlockProps.save({ className: "fancy-header" });
    return <RichText.Content {...blockProps} tagName='H2' value={content} />;
  },
});
