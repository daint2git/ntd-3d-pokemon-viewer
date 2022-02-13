module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    'vue/setup-compiler-macros': true,
  },
  // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [],
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },

    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.d.ts'],

    // Resolve type definition packages
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],

    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      },
    },
  },
  rules: {
    'prettier/prettier': 'warn',

    // https://github.com/prettier/eslint-config-prettier#vuehtml-self-closing
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],

    // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    'vue/component-name-in-template-casing': [
      2,
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],

    // https://eslint.vuejs.org/rules/html-comment-content-spacing.html
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['*'],
      },
    ],

    // https://eslint.vuejs.org/rules/block-lang.html
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],

    // https://eslint.vuejs.org/rules/custom-event-name-casing.html
    'vue/custom-event-name-casing': [
      'error',
      'kebab-case',
      {
        ignores: [],
      },
    ],

    // https://eslint.vuejs.org/rules/html-button-has-type.html
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],

    // https://eslint.vuejs.org/rules/html-comment-indent.html
    'vue/html-comment-indent': ['error', 2],

    // https://eslint.vuejs.org/rules/next-tick-style.html
    'vue/next-tick-style': ['error', 'promise'],

    // https://eslint.vuejs.org/rules/no-empty-component-block.html
    'vue/no-empty-component-block': 'error',

    // https://eslint.vuejs.org/rules/no-expose-after-await.html
    'vue/no-expose-after-await': 'error',

    // https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
    'vue/no-multiple-objects-in-class': 'error',

    // https://eslint.vuejs.org/rules/no-static-inline-styles.html
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: false,
      },
    ],

    // https://eslint.vuejs.org/rules/no-template-target-blank.html
    'vue/no-template-target-blank': [
      'error',
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
      },
    ],

    // https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html
    'vue/no-this-in-before-route-enter': 'error',

    // https://eslint.vuejs.org/rules/padding-line-between-blocks.html
    'vue/padding-line-between-blocks': ['error', 'always'],

    // https://eslint.vuejs.org/rules/prefer-separate-static-class.html
    'vue/prefer-separate-static-class': 'error',

    // https://eslint.vuejs.org/rules/no-v-text.html
    'vue/no-v-text': 'error',

    // https://eslint.vuejs.org/rules/v-on-function-call.html
    'vue/v-on-function-call': [
      'error',
      'never',
      {
        ignoreIncludesComment: false,
      },
    ],

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],

    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': false,
      },
    ],

    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    {
      files: ['./*.config.{ts,js}'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['./*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
