"use strict";

module.exports = {
  rules: {
    "at-rule-no-unknown": true,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"]
      }
    ],
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "keyframe-declaration-no-important": true,
    "media-feature-name-no-unknown": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "string-no-newline": true,
    "string-quotes": "single",
    "unit-no-unknown": true,
    "max-nesting-depth": 4,
    "at-rule-name-space-after": 'always',
    "block-opening-brace-space-before": 'always',
    "block-opening-brace-newline-after": 'always',
    "block-closing-brace-newline-before": 'always',
    "selector-max-id": 0,
  }
};
