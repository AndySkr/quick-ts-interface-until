/** @format */

import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
// const cjs = require("rollup-plugin-commonjs");
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/bundle.min.js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [
    json(),
    terser(),
    getBabelOutputPlugin({
      babelrc: false,
      presets: [["@babel/preset-env"]],
      plugins: [["@babel/plugin-transform-runtime"]],
    }),
  ],
};
