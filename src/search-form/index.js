import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  PanelColorSettings,
  useBlockProps,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import block from "./block.json";
import { searchIcon as icon } from "../icons";
import "./main.css";

registerBlockType(block.name, {
  icon,
  edit: ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const { bgColor, textColor } = attributes;
    return (
      <>
        <InspectorControls>
          <PanelColorSettings
            title={__("Colors", "wp-block-dev")}
            colorSettings={[
              {
                label: __("Background Color", "wp-block-dev"),
                value: bgColor,
                onChange: (newVal) => setAttributes({ bgColor: newVal }),
              },
              {
                label: __("Text Color", "wp-block-dev"),
                value: textColor,
                onChange: (newVal) => setAttributes({ textColor: newVal }),
              },
            ]}
          />
        </InspectorControls>
        <div class='wp-block-udemy-plus-search-form' {...blockProps}>
          <h1>Search: Your search term here</h1>
          <form>
            <input type='text' placeholder='Search' />
            <div class='btn-wrapper'>
              <button type='submit'>Search</button>
            </div>
          </form>
        </div>
      </>
    );
  },
  save: () => {
    return <p>Hello World</p>;
  },
});
