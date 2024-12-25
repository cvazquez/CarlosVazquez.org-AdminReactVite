import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import muiUnusedClasses from 'eslint-plugin-mui-unused-classes';

export default [
    { ignores: ['dist', '**/*/*copy*.js'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: { react: { version: '19.0.0' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            "mui-unused-classes": muiUnusedClasses,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'max-len': [
                'error',
                {
                    'code': 120,
                    'ignoreStrings': true,
                    'ignoreTemplateLiterals': true,
                    'ignoreUrls': true,
                    'ignoreTrailingComments': true,
                    'ignoreRegExpLiterals': true
                }
            ],
            'indent': [
                'error',
                4,
                {
                    'SwitchCase': 1
                }
            ],
            'react/jsx-indent': [
                'error',
                4
            ],
            'react/prop-types': 'off',
            'no-unused-vars': [
                'error',
                {
                    'vars': 'all',
                    'args': 'after-used',
                    'ignoreRestSiblings': false
                }
            ],
            'no-console': ['error'],
            'no-restricted-syntax': 'off',
            'no-undef': 'off',
            'react/prefer-stateless-function': 'warn',
            'react/jsx-filename-extension': [
                'warn',
                {
                    'extensions': ['.js', '.jsx']
                }
            ],
            'max-params': [
                'error',
                7
            ],
            'semi': ['error', 'always'],
            'prefer-destructuring': [
                'error',
                {
                    'array': true,
                    'object': true
                }
            ],
            'react/forbid-dom-props': [
                'warn',
                {
                    forbid: ['style']
                }
            ],
            "mui-unused-classes/unused-classes": "warn",
        },
    },
];
