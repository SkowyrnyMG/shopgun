module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    jest: true,
    browser: true,
  },
  extends: [
    "airbnb",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort", "sonarjs"],
  rules: {
    "class-methods-use-this": 0,
    "no-nested-ternary": 2,
    "linebreak-style": 0,
    "max-len": 0,
    "consistent-return": 2,
    "object-curly-newline": 2,
    "no-alert": 1,
    "newline-before-return": 2,
    "no-confusing-arrow": 0,
    "no-cycle": 0,
    "no-underscore-dangle": 1,
    "no-console": [1, { allow: ["warn", "error", "info"] }],
    "no-param-reassign": [2, { props: false }],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-use-before-define": "off",
    "no-new": 0,
    "@typescript-eslint/no-use-before-define": ["error"],
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 1,
    "jsx-a11y/no-static-element-interactions": 1,
    "jsx-a11y/label-has-for": [
      2,
      {
        required: {
          every: ["id"],
        },
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["label"],
        labelAttributes: ["htmlFor"],
        controlComponents: ["input"],
      },
    ],
    "react/button-has-type": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/destructuring-assignment": 1,
    "react/jsx-one-expression-per-line": [2, { allow: "single-child" }],
    "react/no-array-index-key": 1,
    "react/no-danger": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx", ".ts"] },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
    "react/no-did-update-set-state": 0,
    "react/state-in-constructor": 0,
    "no-plusplus": 0,
    "no-unused-expressions": 0,
    "no-undef": 0,
    "@typescript-eslint/no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "@typescript-eslint/no-unused-vars": 2,
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // globals and packages starting with @
          // eslint-disable-next-line global-require
          [`^(${require("module").builtinModules.join("|")})(/|$)`],
          ["^react", "^next"],
          ["^@?\\w"],
          // hooks and utils function
          ["^utils(/.*|$)"],
          ["^hooks(/.*|$)"],
          // Then parent and siblings
          ["^\\."],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "unicorn/filename-case": 0,
    "unicorn/prevent-abbreviations": 0,
  },
};
