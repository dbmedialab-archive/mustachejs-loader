module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/*.test.*'] }],
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'import/extensions': 'off',
  },
}
