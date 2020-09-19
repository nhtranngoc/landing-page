const env = {
    browser: true,
    es6: true,
};

const extend = [
    'plugin:vue/base',
];

const rules = {
    'vue/no-unused-vars': 'error',
    'vue/no-multi-spaces': 'error',
};

  module.exports = {
      env,
      extends: extend,
      rules,
  };