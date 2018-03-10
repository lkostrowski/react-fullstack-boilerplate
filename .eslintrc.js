module.exports = {
    extends: 'airbnb',
    env: {
        browser: true,
        node: true,
        jest: true,
        worker: true
    },
    plugins: [
        "babel",
        "import"
    ],
    globals: {
        describe: true,
        it: true,
        test: true,
        self: true
    },
    parser: "babel-eslint",
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': [2, 4],
        'object-curly-spacing': ['error', 'always'],
        'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
        }],
        "react/jsx-indent-props": [2, 4],
        'react/require-default-props': [0, {}],
        'no-unused-expressions': ['error', {
            allowTaggedTemplates: true
        }]
    },
};

