import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  useBlockProps,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import block from "./block.json";
import "./main.css";

registerBlockType(block.name, {
  edit: ({ attributes, setAttributes }) => {
    const { content, underline_color } = attributes;
    const blockProps = useBlockProps({
      className: "fancy-header",
      style: {
        backgroundImage: `
        linear-gradient(transparent, transparent),
        linear-gradient(${underline_color}, ${underline_color})
      `,
      },
    });
    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Colors", "wp-block-dev")}>
            <ColorPalette
              colors={[
                {
                  name: "Red",
                  color: "#F87171",
                },
                {
                  name: "Indigo",
                  color: "#818CF8",
                },
              ]}
              onChange={(newVal) => setAttributes({ underline_color: newVal })}
              disableCustomColors={true}
              value={underline_color}
            />
          </PanelBody>
        </InspectorControls>

        <RichText
          {...blockProps}
          tagName='H2'
          onChange={(newVal) => setAttributes({ content: newVal })}
          placeholder={__("Enter your heading", "wp-block-dev")}
          value={content}
          allowedFormats={["core/italic", "core/bold"]}
        />
      </>
    );
  },
  save: ({ attributes }) => {
    const { content, underline_color } = attributes;
    const blockProps = useBlockProps.save({
      className: "fancy-header",
      style: {
        backgroundImage: `
      linear-gradient(transparent, transparent),
      linear-gradient(${underline_color}, ${underline_color})
    `,
      },
    });
    return <RichText.Content {...blockProps} tagName='H2' value={content} />;
  },
});
