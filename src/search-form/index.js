import { registerBlockType } from "@wordpress/blocks";
import block from "./block.json";

registerBlockType(block.name, {
  edit: () => {
    return <p>Hello World</p>;
  },
  save: () => {
    return <p>Hello World</p>;
  },
});
