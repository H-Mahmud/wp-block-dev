import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import block from "./block.json";

registerBlockType(block.name, {
  edit: ({ attributes, setAttributes }) => {
    const { content } = attributes;
    return (
      <RichText
        tagName='H2'
        onChange={(newVal) => setAttributes({ content: newVal })}
        placeholder={__("Enter your heading", "wp-block-dev")}
        value={content}
      />
    );
  },
  save: ({ attributes }) => {
    const { content } = attributes;
    return <RichText.Content tagName='H2' value={content} />;
  },
});
