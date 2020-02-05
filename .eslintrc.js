module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/*.test.*'] }],
  },
}
