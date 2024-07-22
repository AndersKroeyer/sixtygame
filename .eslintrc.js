module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended', // Accessibility linting
      'prettier', // Integrates Prettier with ESLint
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // Displays Prettier errors as ESLint errors
    ],
    plugins: [
      'eslint-plugin-react-compiler',
      'react',
      '@typescript-eslint',
      'jsx-a11y',
      'prettier',
    ],
    rules: {
      // Base rules
      'react-compiler/react-compiler': 'error',
      
      // TypeScript rules
      '@typescript-eslint/explicit-function-return-type': 'off', // Enforce explicit return types on functions and class methods
      '@typescript-eslint/no-explicit-any': 'warn', // Warns on usage of the any type
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warns on unused variables, ignoring those prefixed with _
  
      // React rules
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+ as React import is not required in scope
  
      // Prettier rules
      'prettier/prettier': 'error',
  
      // Accessibility rules
      'jsx-a11y/anchor-is-valid': 'off', // Disable to avoid conflicts with Next.js
    },
    settings: {
      react: {
        version: 'detect', // Automatically detects the React version
      },
    },
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'], // Apply TypeScript-specific rules
        rules: {
          '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow not specifying return types for module boundaries
        },
      },
    ],
  };
