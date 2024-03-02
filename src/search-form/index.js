import { registerBlockType } from "@wordpress/blocks";
import block from "./block.json";
import { searchIcon as icon } from "../icons";

registerBlockType(block.name, {
  icon,
  edit: () => {
    return <p>Hello World</p>;
  },
  save: () => {
    return <p>Hello World</p>;
  },
});
