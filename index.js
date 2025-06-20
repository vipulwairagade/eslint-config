"use strict";

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        // Node.js globals
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        clearImmediate: "readonly",
        clearInterval: "readonly",
        clearTimeout: "readonly",
        console: "readonly",
        exports: "writable",
        global: "readonly",
        module: "readonly",
        process: "readonly",
        require: "readonly",
        setImmediate: "readonly",
        setInterval: "readonly",
        setTimeout: "readonly",
        // ES2021 globals
        globalThis: "readonly",
        // CommonJS globals
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      // Possible errors
      "for-direction": "error",
      "getter-return": "error",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "off",
      "no-compare-neg-zero": "error",
      "no-cond-assign": ["error", "except-parens"],
      "no-console": "error",
      "no-constant-condition": ["error", { checkLoops: false }],
      "no-control-regex": "off",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-parens": [
        "error",
        "all",
        {
          conditionalAssign: false,
          returnAssign: false,
          nestedBinaryExpressions: false,
          enforceForNewInMemberExpressions: false,
        },
      ],
      "no-extra-semi": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-inner-declarations": "off",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-obj-calls": "error",
      "no-promise-executor-return": "error",
      "no-prototype-builtins": "error",
      "no-regex-spaces": "error",
      "no-setter-return": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": "error",
      "no-unsafe-finally": "off",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": [
        "error",
        { disallowArithmeticOperators: true },
      ],
      "no-useless-backreference": "error",
      "require-atomic-updates": "error",
      "use-isnan": ["error", { enforceForIndexOf: true }],
      "valid-typeof": "error",

      // Best practices
      "accessor-pairs": "error",
      "array-callback-return": "error",
      "block-scoped-var": "off",
      "class-methods-use-this": "off",
      complexity: "off",
      "consistent-return": "error",
      curly: ["error", "all"],
      "default-case": "off",
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-location": ["error", "property"],
      "dot-notation": "error",
      eqeqeq: "error",
      "grouped-accessor-pairs": ["error", "getBeforeSet"],
      "guard-for-in": "off",
      "max-classes-per-file": "off",
      "no-alert": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-constructor-return": "error",
      "no-div-regex": "off",
      "no-else-return": "error",
      "no-empty-function": "off",
      "no-empty-pattern": "error",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-fallthrough": "error",
      "no-floating-decimal": "error",
      "no-global-assign": "error",
      "no-implicit-coercion": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-labels": ["error", { allowLoop: true }],
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-magic-numbers": "off",
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "off",
      "no-proto": "error",
      "no-redeclare": "error",
      "no-restricted-properties": "off",
      "no-return-assign": ["error", "except-parens"],
      "no-return-await": "error",
      "no-script-url": "off",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unmodified-loop-condition": "error",
      "no-unused-expressions": "error",
      "no-unused-labels": "error",
      "no-useless-call": "error",
      "no-useless-catch": "off",
      "no-useless-concat": "error",
      "no-useless-escape": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "no-warning-comments": "off",
      "no-with": "error",
      "prefer-object-has-own": "error",
      "prefer-named-capture-group": "off",
      "prefer-promise-reject-errors": "error",
      "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
      radix: ["error", "as-needed"],
      "require-await": "error",
      "require-unicode-regexp": "error",
      "vars-on-top": "off",
      "wrap-iife": ["error", "inside"],
      yoda: ["error", "never"],

      // Strict Mode
      strict: ["error", "global"],

      // Variables
      "init-declarations": "off",
      "no-delete-var": "error",
      "no-label-var": "error",
      "no-restricted-globals": "off",
      "no-shadow": "error",
      "no-shadow-restricted-names": "error",
      "no-undef": "error",
      "no-undef-init": "error",
      "no-undefined": "off",
      "no-unused-vars": ["error", { ignoreRestSiblings: true }],
      "no-unused-private-class-members": "error",
      "no-use-before-define": ["error", { functions: false }],

      // Stylistic Issues
      "array-bracket-newline": ["error", { multiline: true }],
      "array-bracket-spacing": ["error", "never"],
      "array-element-newline": ["error", "consistent"],
      "block-spacing": ["error", "always"],
      "brace-style": ["error", "1tbs", { allowSingleLine: false }],
      camelcase: ["error", { properties: "never", ignoreDestructuring: true }],
      "capitalized-comments": "off",
      "comma-dangle": ["error", "never"],
      "comma-spacing": "error",
      "comma-style": ["error", "last"],
      "computed-property-spacing": ["error", "never"],
      "consistent-this": "off",
      "eol-last": "error",
      "func-call-spacing": ["error", "never"],
      "func-name-matching": ["error"],
      "func-names": "off",
      "func-style": "off",
      "function-call-argument-newline": ["error", "consistent"],
      "function-paren-newline": ["error", "multiline-arguments"],
      "id-denylist": "off",
      "id-length": "off",
      "id-match": "off",
      "implicit-arrow-linebreak": "error",
      indent: [
        "error",
        "tab",
        {
          SwitchCase: 1,
          CallExpression: { arguments: "first" },
          FunctionExpression: { parameters: "first" },
          ignoredNodes: ["ConditionalExpression"],
        },
      ],
      "jsx-quotes": "off",
      "key-spacing": [
        "error",
        { beforeColon: false, afterColon: true, mode: "strict" },
      ],
      "keyword-spacing": ["error", { before: true, after: true }],
      "line-comment-position": "off",
      "linebreak-style": ["error", "windows"],
      "lines-around-comment": "off",
      "lines-between-class-members": "off",
      "max-depth": "off",
      "max-len": ["error", 500, { ignoreUrls: true }],
      "max-lines": "off",
      "max-lines-per-function": "off",
      "max-nested-callbacks": "off",
      "max-params": "off",
      "max-statements": "off",
      "max-statements-per-line": ["error", { max: 1 }],
      "multiline-comment-style": ["error", "separate-lines"],
      "multiline-ternary": ["error", "always-multiline"],
      "new-cap": "error",
      "new-parens": "error",
      "newline-per-chained-call": "off",
      "no-array-constructor": "error",
      "no-bitwise": "off",
      "no-continue": "off",
      "no-inline-comments": "off",
      "no-lonely-if": "error",
      "no-mixed-operators": [
        "error",
        {
          groups: [
            ["&", "|", "^", "~", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["&&", "||"],
            ["in", "instanceof"],
          ],
        },
      ],
      "no-mixed-spaces-and-tabs": "error",
      "no-multi-assign": "off",
      "no-multiple-empty-lines": "error",
      "no-negated-condition": "off",
      "no-nested-ternary": "error",
      "no-new-object": "error",
      "no-plusplus": "off",
      "no-restricted-syntax": "off",
      "no-tabs": ["error", { allowIndentationTabs: true }],
      "no-ternary": "off",
      "no-trailing-spaces": "error",
      "no-underscore-dangle": "off",
      "no-unneeded-ternary": "error",
      "no-whitespace-before-property": "error",
      "nonblock-statement-body-position": "error",
      "object-curly-newline": ["error", { consistent: true }],
      "object-curly-spacing": ["error", "always"],
      "object-property-newline": "off",
      "one-var": ["error", { initialized: "never", uninitialized: "always" }],
      "one-var-declaration-per-line": ["error", "initializations"],
      "operator-assignment": ["error", "always"],
      "operator-linebreak": ["error", "after"],
      "padded-blocks": ["error", "never"],
      "padding-line-between-statements": "off",
      "prefer-exponentiation-operator": "error",
      "prefer-object-spread": "error",
      "quote-props": ["error", "as-needed"],
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      semi: ["error", "always"],
      "semi-spacing": "error",
      "semi-style": "error",
      "sort-keys": "off",
      "sort-vars": "off",
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": [
        "error",
        { anonymous: "always", named: "never" },
      ],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "space-unary-ops": ["error", { words: true, nonwords: false }],
      "spaced-comment": ["error", "always"],
      "switch-colon-spacing": "error",
      "template-tag-spacing": "error",
      "unicode-bom": "error",
      "wrap-regex": "off",

      // ECMAScript 6
      "arrow-body-style": "off",
      "arrow-parens": ["error", "as-needed"],
      "arrow-spacing": "error",
      "constructor-super": "error",
      "generator-star-spacing": ["error", "after"],
      "no-class-assign": "error",
      "no-confusing-arrow": "off",
      "no-const-assign": "error",
      "no-dupe-class-members": "error",
      "no-duplicate-imports": "error",
      "no-new-symbol": "error",
      "no-restricted-exports": "off",
      "no-restricted-imports": "off",
      "no-this-before-super": "error",
      "no-useless-computed-key": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: false, object: false },
        },
        { enforceForRenamedProperties: false },
      ],
      "prefer-numeric-literals": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "require-yield": "error",
      "rest-spread-spacing": "error",
      "sort-imports": "off",
      "symbol-description": "error",
      "template-curly-spacing": ["error", "never"],
      "yield-star-spacing": ["error", "after"],
    },
  },
];
