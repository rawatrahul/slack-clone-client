module.exports = {
    "extends": "airbnb",
    plugins: ['react','import','jsx-a11y'],
    rules: {
        'react/jsx-filename-extension':0,
        'react/prop-types': 0,
        'react/jsx-closing-tag-location': 0
    },
    parser: "babel-eslint",
    globals: {
        document:1
    },
    env: {
        browser:1
    }
};