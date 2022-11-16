module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {},
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "espree",
    ecmaVersion: 2022,
    sourceType: "module",
  },
};
