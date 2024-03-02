import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import block from "./block.json";

registerBlockType(block.name, {
  edit: ({ attributes, setAttributes }) => {
    const { content } = attributes;
    return (
      <RichText
        onChange={(newVal) => setAttributes({ content: newVal })}
        placeholder={__("Enter your heading", "wp-block-dev")}
        value={content}
      />
    );
  },
});
