module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'extends'],
      },
    ],
    'rule-empty-line-before': ['always-multi-line'],
  },
  overrides: [
    {
      files: ['src/**/*.vue'],
      // https://github.com/stylelint/stylelint/blob/14.0.0/docs/migration-guide/to-14.md#syntax-option-and-automatic-inferral-of-syntax
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep'],
          },
        ],
        // note: https://github.com/ota-meshi/stylelint-config-recommended-vue/blob/main/lib/vue-specific-rules.js
      },
    },
  ],
};
