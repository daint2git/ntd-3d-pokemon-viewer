module.exports = {
  '**/*.{ts,js,vue}': 'eslint --fix --cache',
  '**/*.{md,json}': 'prettier --write',
  '**/*.{vue,css}': 'stylelint --fix --cache',
  '{src/assets,public}/**/*.svg': 'svgo',
};
