module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint-config-airbnb",
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "import/no-commonjs": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-indent": ["error", 4],
        'jsx-a11y/anchor-is-valid': ['error', {
          specialLink: ['to'],
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        }],
    },
    "overrides": [
        {
            "files": ['test/**/*.js'],
            "env": {
                "jasmine": true
            }
        },
        {
            "files": ["src/server.js", "karma.conf.js", "webpack.config.js", "webpack.karma.js" ],
            "env": {
                "node": true
            },
            "rules": {
                "import/no-commonjs": "off"
            },
        }
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "webpack.config.js"
            }
        }
    }
};