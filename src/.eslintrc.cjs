// The public site ships no application JavaScript, and the only React here is
// the Wagtail admin code-block widget, which uses Wagtail's own `window.React`
// rather than a bundled copy — so no React lint plugins.
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
}
