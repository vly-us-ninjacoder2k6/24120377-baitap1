import globals from "globals";

export default [
  {
    files: ["src/**/*.js", "test/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "eqeqeq": "error",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];
