"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var { declare } = require("@babel/helper-plugin-utils");

console.log(1111, declare);

var _default = (0, declare)((api) => {
  api.assertVersion(7);
  return {
    name: "vue-scaff-context",
    visitor: {
      NumericLiteral({ node }) {
        console.log(111, node);
        if (node.extra && /^0[ob]/i.test(node.extra.raw)) {
          node.extra = undefined;
        }
      },

      StringLiteral({ node }) {
        console.log(222, node);
        if (node.extra && /\\[u]/gi.test(node.extra.raw)) {
          node.extra = undefined;
        }
      },
    },
  };
});

exports.default = _default;
