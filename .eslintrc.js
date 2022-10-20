module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/typedef': [
          'error',
          {
            allowExpressions: true,
            arrowParameter: true,
            variableDeclaration: true,
            memberVariableDeclaration: true,
            parameter: true,
            propertyDeclaration: true,
          },
        ],
        curly: ['warn', 'multi-or-nest'],
      },
    },
  ],
};
